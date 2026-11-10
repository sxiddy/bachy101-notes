# BACHY101 (EVS) Notes — build plan

Written 10-11-2026. Start once the 5-hour limit resets. Resume from **State** at the bottom.

## What these sites are (and what the PDF library got wrong)

The other subject sites (BACHY105 chemistry, BAEEE101, BAENG101) are not PDF viewers. They take the course
material and rebuild it so a student can learn it fast the night before the exam:

- **Short tabbed notes.** Each module is split into topics, and each topic into tabs of one idea each (1–3 minutes to read).
  Every fact in the source survives; only the wording is compressed. Tables and step lists replace walls of text.
- **`<b>` marks what to remember.** It renders in white, and Recall mode blanks it out for self-testing.
- **Every diagram from the slides**, cropped from the source, plus interactive diagrams where they help.
- **Module summaries, a scenario question bank, quiz, flashcards**, highlights, personal notes, progress and search.
- **Past papers with model answers** (`papers-free.js` / `papers-pro.js`).
- **Same app, same look**: the BACHY105 shell (dark graphite, white highlight), Google sign-in gate, a free module,
  the rest behind the Notix payment, deployed on Vercel, and listed in the Notix store.
- **Owner's content rule**: only what is in the course PDFs. No outside facts or extras. Plain student voice, no
  AI-sounding words (SPEC.md banned list).

The `site/` PDF library made on 10-11-2026 is only the raw input. Keep `src/notes` and the per-page text that
`tools/build.py` extracts. The real site replaces `site/`.

## Scope

- Weeks 1–5 = Modules 1–5 (31 lectures, 346 pages). **Week 6 is out of the exam: never build it.**
- No past papers (owner, 10-11-2026: the EVS exam and quizzes are online, so none exist). Skip step 5.
- Paid/free (recommended 10-11-2026, owner's general rule is that notes are always free):
  - **Free:** all notes, module summaries, flashcards, search, and a 10-question MCQ sample per module.
  - **Pro:** the full MCQ bank (about 40–60 per module, in the online quiz's MCQ format, with a one-line reason for
    each answer that points back to the note tab) and timed mock tests that copy the online quiz/exam setup (question
    count and timer to be checked on MOOVITOL's Mock Quiz before building).
  - Confirm with the owner before building, and before switching payments on.

| Module | Lectures | Pages |
|---|---|---|
| m1 Fundamentals of Environment and Ecosystems | 6 | 66 |
| m2 Biodiversity and Environmental Quality | 7 | 129 |
| m3 Pollution and Its Management Techniques | 7 | 58 |
| m4 Environmental Laws and SDGs | 7 | 61 |
| m5 Climate Change and Emerging Issues | 4 | 32 |

## How to build it (same method as the other sites)

1. **Set up the repo (session 1, ~5%).** Copy `bachy105-notes` without its `content/`, `src/`, `viz-paid/` or
   git history into `evs-notes/` (keep `src/notes` and `src/meta.json`). Rename BACHY105 → BACHY101 and Applied
   Chemistry → Environmental Sciences in `modules.json`, the gate and page titles. Write `content/modules.json` for m1–m5.
   Create a git repo. Do not push.
2. **Source text and figures (session 1, ~5%).** Dump text per lecture into `src/text/<module>/` (pypdf, already working)
   and render the pages with diagrams to images for `tools/fig.js`.
3. **Notes, one module at a time (~15–20% each).** Owner decision 10-11-2026: **no Gemini.** Claude (main session, Opus)
   writes the notes and MCQs straight from the lecture text, then does one pass checking every fact against the PDF
   text. Sonnet subagents only for mechanical work (figure crops, flashcards from the finished notes, validation fixes).
   Never Haiku. One agent at a time. Format: SPEC.md §1 (`CHUNK({...})`, tabs, `<b>`, figures).
4. **Summary + questions + flashcards per module (~5% each).** SPEC.md §2 and the summary format. Questions must be
   answerable from the notes only (the BAENG101 Gemini questions went wrong because Gemini wrote them without the notes).
5. **Past papers.** Ask the owner for EVS CAT/FAT papers (none were on MOOVITOL besides quizzes). Add model answers
   like BAEEE101 did.
6. **Check before every hand-over.** `node tools/build.js`, `node tools/validate.js --all`, `node tools/qa.js`, and
   `node tools/qa.js --free`, all clean, plus a phone-width preview of the new figures in one batch.
7. **Launch.** Push only when the owner types "push". New Vercel project, add the subject to the Notix store, and use
   the same price and discount as the other subjects.

## Free LLM helpers (FreeLLMAPI) — trial on Module 1 only

Installed 10-11-2026 in `Projects/external-repos/freellmapi` (start: preview_start "freellmapi"; dashboard
http://localhost:5173, API http://localhost:3001/v1). Before use the owner must create the dashboard account and add
free keys (Google AI Studio, Groq to start). Claude never types those.

Safety rules (owner: "nothing should go wrong"):
1. Free models never write anything students read. Claude writes all notes, summaries, MCQ questions, correct answers
   and wrong options. Free models only produce checks and drafts that a script verifies.
2. Allowed jobs: (a) fact list per lecture as verbatim quotes, (b) source quote for each note sentence, (c) two models
   answer every MCQ, (d) flashcards from `<b>` terms, (e) text clean-up.
3. Every free-model output goes through a script: quotes must exist verbatim in `src/text` (else dropped), flashcard
   answers must appear in the notes, JSON must parse (else retry/next model). Never trust unverified output.
4. Claude still reads the raw text of each lecture once (free models miss facts) and checks every number, year and
   name itself (free models can't judge those).
5. Send one lecture at a time (context limits). Run in the IST morning/afternoon, before the UTC midnight quota cliff.
6. Nothing in the site depends on FreeLLMAPI. The live site never calls it.
7. Best free models only (owner, 10-11-2026). At the start of session 1, read FreeLLMAPI's synced catalogue (Models
   page) and pin the strongest large models with long context at the top of the Fallback Chain. Remove small or
   "mini/flash-lite" models from the chain, so a quota run-out pauses the job instead of dropping quality. The MCQ
   check uses two different model families (e.g. a Google model and an open-weights one), so they don't share mistakes.
   Chosen 10-11-2026 from the synced catalogue (v2026.11.09, FreeLLMAPI intelligence rank, lower = better), official
   providers only:
   | Job | Model | Provider (key needed) | Rank | Context | Daily cap |
   |---|---|---|---|---|---|
   | Fact quotes, source finding, clean-up, flashcards | Gemini 3.8 Flash | Google AI Studio | 25 | 1M | — |
   | Fallback for the same | Gemini 3.7 Flash | Google AI Studio | 29 | 1M | 20 req |
   | MCQ check, model A | Gemini 3.8 Flash | Google AI Studio | 25 | 1M | — |
   | MCQ check, model B (other family) | Qwen3.8 27B | Groq | 39 | 262k | 250 req |
   | Backup for model B | GLM-5.2 | ModelScope | 39 | 200k | 100 req |
   Owner decision 10-11-2026: also use the higher-ranked reseller models. Final order (first = tried first):
   1. GLM 5.3 (UnoRouter, rank 17)  2. Qwen3.8 Max (xKiro, 17)  3. Gemini 3.8 Flash (Google, 25)
   4. Gemini 3.7 Flash (Google, 29). MCQ check: model A = GLM 5.3, model B = Qwen3.8 Max (different families);
   if either is down, swap in Gemini 3.8 Flash / Qwen3.8 27B (Groq).
   Reseller risk handled by: only course PDF text is ever sent (nothing private), every output is script-checked,
   and Google/Groq stay as fallbacks if a reseller vanishes mid-job. Recheck ranks each session.
   Keys the owner adds (free sign-ups): UnoRouter, xKiro, Google AI Studio, Groq; ModelScope optional.
8. Measure on Module 1: if it saves less than about 10% of Claude usage, or causes any error that reaches the notes,
   drop it and write everything directly.

## Order and budget

| Session | Work |
|---|---|
| 1 | Steps 1–2, then Module 1 complete (notes, summary, flashcards, MCQs) |
| 2 | Module 2 (largest, 129 pages) and Module 3 |
| 3 | Modules 4 and 5 |
| 4 | Mock tests, Pro gating, full checks, launch when the owner says |

Total is about 1.3–1.7M tokens (Claude writing everything, no Gemini). Rules: check `get_usage` before every step, stop at 95% of the 5-hour limit, and
update **State** before stopping.

## State

- 10-11-2026: PDFs downloaded (31, Weeks 1–5), Week 6 deleted. PDF library built in `site/` (temporary). No repo yet.
  **Next: session 1, step 1.**
- 10-11-2026 late: owner chose Claude-written content (no Gemini), notes free, Pro = full MCQ bank + timed mock tests
  (to confirm). FreeLLMAPI installed but not set up (owner to add account + keys). Start tomorrow after the reset:
  check `get_usage` before every step, stop at 95%.
- 10-11-2026: `tools/freellm.py` written (facts extraction + verbatim-quote verifier, retries, JSON guard). Verifier
  tested offline (wrong numbers and paraphrases dropped). Not yet run against a live model: needs the owner's
  FreeLLMAPI account, provider keys and the unified key in FREELLM_KEY. Next: test it on one Week 1 lecture.
- 10-11-2026: lecture text extracted to `src/text/m1..m5/<file>.txt` (31 files, page markers `=== page N ===`).
  Step 2 done: the 117 pages that contain images were rendered at 110 dpi to `src/pages/m<N>/<file>/pNN.png`
  for figure cropping.
- 10-11-2026 (stopped at 95%): bachy105 app shell copied into `evs-notes/app-src/` (api, app, tools, figs-svg,
  SPEC.md, vercel.json; no content, secrets, .git or node_modules). NOT yet renamed or wired up.
  **Next:** in app-src, rename BACHY105/Applied Chemistry -> BACHY101/Environmental Sciences, empty figs-svg and the
  chem viz files, write content/modules.json (m1–m5), move app-src up to be the repo root (keep src/), git init.
  Then set the Fallback Chain order (rule 7) and run the freellm.py test on evs-w1-01.
- 10-11-2026: owner created the FreeLLMAPI account and added keys for Google, Groq, UnoRouter and xKiro; all four
  show "healthy" in the dashboard database. Unified key still to be placed in FREELLM_KEY by the owner (not in chat).
- 10-11-2026: bachy101.vercel.app claimed with a 'coming soon' page (Vercel project bachy101, from evs-notes/placeholder). Real site replaces it at launch.
- TODO next session (owner, 10-11-2026): group every notes-related session (EVS, BACHY105, BAEEE101, BAENG101, Notix store) into one sidebar group named 'Notes sites'.
- 10-11-2026 session 1 (after reset):
  - Sidebar group "Notes sites" created; 19 notes/Notix sessions moved in (done).
  - FreeLLMAPI chain set via the dashboard API: strategy "priority" (manual), explore off. Enabled, in order:
    1 GLM 5.3 (unorouter, id 292), 2 Qwen3.8 Max (xkiro, 437), 3 Gemini 3.8 Flash (google, 299),
    4 Gemini 3.7 Flash (google, 264), 5 Qwen3.8 27B (groq, 294). Every other model disabled.
  - FREELLM_KEY not set yet (checked User env). freellm.py test on evs-w1-01 still to do once it is.
  - app-src moved to the repo root (evs-notes/ is now the app; app-src deleted). Renamed BACHY105 -> BACHY101,
    Applied Chemistry -> Environmental Sciences everywhere in api/app/tools/docs. Chem figs-svg, viz, fig batch
    scripts and generated api/_*.json removed. content/modules.json written (m1–m5, chunks empty).
    .gitignore keeps src/notes, src/pdfs, src/pages, site/ out of git. git init + first commit 83d7383 (no remote).
    Note: the move overwrote the old evs-notes/README.md (PDF-library readme) with the app README.
  - Still chemistry-specific in app/js/app.js: home search words, syllabus map (~line 2250–2320), formula sheet,
    lab bench, papers, meta description in index.html, SPEC.md module table/source paths. Fix when wiring m1.
  - Module 1 DONE: content/chunk-A.js (lectures 1–2, 5 topics) and chunk-B.js (3–6, 9 topics), 61 tabs, 25 figure
    crops (all checked, stock photos skipped), 131 flashcards, summary-m1.js, q-M1.js (52 MCQs, compact row format,
    first 10 = planned free sample). Source slips flagged in heads-up notes (thermosphere temps, layer heights,
    "two steps" of succession, polyclimax wording, Lindemann/Clemens spelling, DDT ban act, 150k vs 160k t waste).
    Coverage script: every number in the 6 lecture texts appears in the notes.
    validate --all 0 errors; build ok; qa.js and qa.js --free clean (35 routes, no runtime errors).
    Added viz-paid/.gitkeep (build needs the folder) and Projects/.claude/launch.json entry "evs-notes-app".
    Not done: phone-width visual check (browser pane refused localhost), freellm.py test (key not set),
    Pro gating of MCQs, mock tests, app.js chemistry leftovers.
  - Usage measured: Module 1 (66 pages) cost about 7% of the 5-hour limit. Next: Module 2 (129 pages).
  - Module 2 in progress, one lecture per chunk, commit after each (see Projects/NOTES-SITES-LESSONS.md, read it first):
    - chunk-C DONE (W2 lectures 07 biodiversity + 08 species interaction/status; 6 topics, 2 figures; commit 970a4b3).
      modules.json m2 chunks = ["C"]; add each new chunk letter there.
    - NEXT: chunk-D = evs-w2-09 Conservation strategies (56 KB text, 13 renders), chunk-E = w2-10 GM crops (46 KB, 9),
      chunk-F = w2-11 hazards/COVID (28 KB, no renders) + w2-12 BPA/mercury (10 KB, 5), chunk-G = w2-13 disaster
      management (37 KB, 12). Then summary-m2.js, q-M2.js (~50 MCQs, same compact row format as q-M1.js),
      coverage script, validate/build/qa, commit.
    - Contact sheets: tile src/pages/m2/<file>/*.png 7 across at 260x368, view, then zoom on real diagrams only.
  - Owner was told how to set FREELLM_KEY (Keys page → "Unified API key" tab → setx). When they say "key done",
    run tools/freellm.py on src/text/m1/evs-w1-01.txt and show kept vs dropped.
- Cache warmer (owner asked 10-11-2026): not set up. It re-reads the whole session on every ping (counts toward the limit, extra usage is ON so overage costs money) and a new session can't use an old session's cache. Revisit only at the start of a long session, if the owner asks.
