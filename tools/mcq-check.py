"""Free-model MCQ check (PLAN.md free-LLM job c): two different models answer every MCQ from the topic notes alone.
Nothing here edits content. It writes tmp/mcq-check.json and prints only the questions where a model disagrees
with the answer key, for Claude to review by hand.
Usage: python -I tools/mcq-check.py tmp/mcq.json tmp/mcq-check.json
"""
import json, os, re, sys, time, urllib.request
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import importlib.util
spec = importlib.util.spec_from_file_location("freellm", os.path.join(os.path.dirname(os.path.abspath(__file__)), "freellm.py"))
fl = importlib.util.module_from_spec(spec); spec.loader.exec_module(fl)

PROMPT = """You are checking a multiple-choice quiz. Use ONLY the study notes below. For each question give the
letter of the single best option. Reply with JSON only: [{{"id": "...", "answer": "A|B|C|D", "unsure": true|false}}].

NOTES:
{notes}

QUESTIONS:
{qs}"""


def models():
    req = urllib.request.Request(fl.API.replace("/chat/completions", "/models"), headers={"Authorization": "Bearer " + fl.KEY()})
    ids = [m["id"] for m in json.load(urllib.request.urlopen(req, timeout=60)).get("data", [])]
    pick = lambda w: next((i for i in ids if w in i.lower()), None)
    a, b = pick("glm"), pick("qwen")
    return [m for m in (a, b) if m] or ["auto"]


def main():
    data = json.load(open(sys.argv[1], encoding="utf-8"))
    out_path = sys.argv[2]
    done = json.load(open(out_path, encoding="utf-8")) if os.path.exists(out_path) else {}
    ms = models()
    print("models:", ms, flush=True)
    by_topic = {}
    for q in data:
        by_topic.setdefault(q["topic"], []).append(q)
    for topic, qs in by_topic.items():
        for model in ms:
            todo = [q for q in qs if model not in done.get(q["id"], {})]
            if not todo:
                continue
            text = "\n\n".join(f'id: {q["id"]}\n{q["q"]}\n' + "\n".join(f"{'ABCD'[i]}. {o}" for i, o in enumerate(q["options"])) for q in todo)
            res = fl.parse_json(fl.call(PROMPT.format(notes=qs[0]["notes"][:60000], qs=text), model))
            if not isinstance(res, list):
                print(f"  {topic} {model}: no valid JSON, skipped", flush=True)
                continue
            for r in res:
                if isinstance(r, dict) and r.get("id") in {q["id"] for q in todo} and str(r.get("answer", "")).strip()[:1].upper() in "ABCD":
                    done.setdefault(r["id"], {})[model] = {"a": "ABCD".index(str(r["answer"]).strip()[:1].upper()), "unsure": bool(r.get("unsure"))}
            json.dump(done, open(out_path, "w", encoding="utf-8"), indent=0)
            time.sleep(2)
        print(f"  {topic}: done", flush=True)
    flags = []
    for q in data:
        got = done.get(q["id"], {})
        bad = {m: "ABCD"[v["a"]] for m, v in got.items() if v["a"] != q["correct"]}
        if bad:
            flags.append(f'{q["id"]} key={"ABCD"[q["correct"]]} models={bad} :: {q["q"][:110]}')
    checked = sum(1 for q in data if done.get(q["id"]))
    rep = f"checked {checked}/{len(data)}; flagged {len(flags)} (a model disagreed with the key)\n" + "\n".join(flags)
    open(out_path.replace(".json", "-flags.txt"), "w", encoding="utf-8").write(rep)
    print(rep.splitlines()[0])


main()
