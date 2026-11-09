"""Free-model helper for the EVS build (see PLAN.md, "Free LLM helpers").

Sends one job to FreeLLMAPI (http://localhost:3001/v1) and VERIFIES the result with code
before anything is kept. Nothing a free model returns is trusted unless it passes the checks.

  set FREELLM_KEY=<unified key from the FreeLLMAPI Keys page>   (owner types this)
  python -I tools/freellm.py facts  src/text/m1/evs-w1-01.txt  out/facts/evs-w1-01.json
  python -I tools/freellm.py verify src/text/m1/evs-w1-01.txt  out/facts/evs-w1-01.json

facts  : asks for every fact as a VERBATIM quote, keeps only quotes found word-for-word in the
         source (after whitespace/case normalisation), reports dropped ones.
verify : re-checks an existing JSON list of {"quote": ...} against the source.
"""
import json, os, re, sys, time, urllib.request

API = os.environ.get("FREELLM_URL", "http://localhost:3001/v1/chat/completions")
# Order from PLAN.md rule 7. Model ids are filled in once the owner's keys are added
# (read them from the FreeLLMAPI Models page); "auto" lets the router use its Fallback Chain.
MODELS = os.environ.get("FREELLM_MODELS", "auto").split(",")


def norm(s):
    s = s.replace("’", "'").replace("‘", "'").replace("“", '"').replace("”", '"')
    s = s.replace("–", "-").replace("—", "-").replace("−", "-")
    return re.sub(r"\s+", " ", s).strip().lower()


def call(prompt, model, tries=3):
    body = json.dumps({"model": model, "temperature": 0,
                       "messages": [{"role": "user", "content": prompt}]}).encode()
    for i in range(tries):
        try:
            req = urllib.request.Request(API, body, {"Content-Type": "application/json",
                                                     "Authorization": "Bearer " + os.environ["FREELLM_KEY"]})
            with urllib.request.urlopen(req, timeout=300) as r:
                return json.load(r)["choices"][0]["message"]["content"]
        except Exception as e:  # rate limit / provider down: back off, then next model
            print(f"  {model} try {i + 1} failed: {e}", file=sys.stderr)
            time.sleep(5 * (i + 1))
    return None


def parse_json(text):
    if not text:
        return None
    m = re.search(r"\[.*\]", text, re.S)
    try:
        return json.loads(m.group(0)) if m else None
    except json.JSONDecodeError:
        return None


def verify(source, items):
    src = norm(source)
    kept, dropped = [], []
    for it in items:
        q = it.get("quote", "") if isinstance(it, dict) else ""
        (kept if q and len(q) > 3 and norm(q) in src else dropped).append(it)
    return kept, dropped


FACTS_PROMPT = """You are extracting facts from university lecture notes.
Return a JSON array only, no other text. One object per fact:
{{"quote": "<copied EXACTLY, word for word, from the text>", "kind": "definition|list|number|example|law|other"}}
Rules: copy text exactly (no paraphrase, no fixing typos); cover EVERY definition, list item, number, year,
name, law, example, advantage and disadvantage; skip page headers and repeated slide titles.

TEXT:
{text}"""


def main():
    mode, src_path, out_path = sys.argv[1], sys.argv[2], sys.argv[3]
    source = open(src_path, encoding="utf-8").read()
    if mode == "facts":
        items = None
        for model in MODELS:
            items = parse_json(call(FACTS_PROMPT.format(text=source), model))
            if items is not None:
                print(f"  model used: {model}")
                break
        if items is None:
            sys.exit("No model returned valid JSON; nothing written.")
    else:
        items = json.load(open(out_path, encoding="utf-8"))
    kept, dropped = verify(source, items)
    os.makedirs(os.path.dirname(out_path) or ".", exist_ok=True)
    json.dump(kept, open(out_path, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    json.dump(dropped, open(out_path + ".dropped.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"kept {len(kept)} verified quotes, dropped {len(dropped)} (see .dropped.json)")


if __name__ == "__main__":
    main()
