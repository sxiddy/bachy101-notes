Paste this into a new Claude Code session opened in C:\Users\Siddharth D\Projects\evs-notes

---

Continue the EVS (BACHY101) notes website. Read PLAN.md in this folder first, especially "State" at the bottom,
and don't re-ask anything it marks as decided. Short version:

- Goal: a BACHY105-style study app for EVS Weeks 1–5 (Week 6 is not in the exam, never build it): short tabbed
  notes with every diagram, Recall mode, module summaries, flashcards, an MCQ bank and timed mock tests.
  Notes are free; Pro = full MCQ bank + timed mock tests (confirm before building). No past papers exist.
- You (Claude) write every note, summary, MCQ and answer yourself, using only facts in the course PDFs, in the
  SPEC.md writing style. No Gemini.
- Free models via FreeLLMAPI (Projects/external-repos/freellmapi, start with preview_start "freellmapi",
  dashboard localhost:5173) only for checking jobs, with tools/freellm.py verifying every output by script.
  Keys for Google, Groq, UnoRouter and xKiro are added and healthy. I'll put the unified key in FREELLM_KEY myself.
- bachy101.vercel.app is claimed with a placeholder.

Rules: check the 5-hour limit (get_usage) before every step and stop at 95%; update PLAN.md "State" before
stopping. One agent at a time, never Haiku. Don't push or deploy until I say "push".

Do in this order:
1. Group every notes-related session (EVS, BACHY105, BAEEE101, BAENG101, Notix store) into one sidebar group
   called "Notes sites".
2. Set the FreeLLMAPI Fallback Chain to the order in PLAN.md rule 7, then tell me the one command to set FREELLM_KEY.
3. Test tools/freellm.py on src/text/m1/evs-w1-01.txt and show me what it kept and dropped.
4. Finish setting up app-src (rename to BACHY101 / Environmental Sciences, modules.json for m1–m5, git init).
5. Write Module 1 completely.
