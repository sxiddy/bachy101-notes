# EVS notes audit (16-11-2026)

Measured with `node tools/coverage.js` (a source sentence counts as covered when 60% of its content words appear
in that lecture's notes; `node tools/coverage.js <lecture>` lists the sentences that look missing).

## What was wrong

Most facts were present, but squeezed into keyword lists and one-word table cells ("Health: hearing loss, tinnitus;
stress..."). That is fine for revision, not for writing an answer. Several lectures also dropped real content.

| Lecture | Coverage before | Note words / source words |
|---|---|---|
| 1 Definition, scope | 89% | 1285 / 1165 |
| 2 Earth as life support | 98% | 1165 / 1422 |
| 3 Ecosystem | 89% | 460 / 281 |
| 4 Structure and functions | 90% | 2085 / 2200 |
| **5 Energy flow** | **50%** | 700 / 1708 |
| 6 Succession | 90% | 535 / 524 |
| 7 Biodiversity | 100% | 1214 / 1993 |
| 8 Species interaction | 79% | 763 / 1526 |
| 9 Conservation | 92% | 1824 / 4659 |
| **10 GM crops** | **74%** | 1168 / 3796 |
| 11 Hazards | 81% | 1674 / 2436 |
| 12 BPA, mercury | 91% | 803 / 894 |
| 13 Disaster management | 96% | 1957 / 3340 |
| 14 Air pollution | 84% | 1160 / 1553 |
| 15 Water pollution | 78% | 736 / 1122 |
| **16 Soil pollution** | **56%** | 544 / 1109 |
| **17 Noise pollution** | **41%** | 340 / 915 |
| **18 Thermal pollution** | **69%** | 325 / 694 |
| **19 Water management** | **61%** | 764 / 1973 |
| 20 Circular economy, SWM | 81% | 732 / 1239 |
| 21 EIA | 90% | 896 / 1528 |
| 22 EPA, Air Act | 82% | 930 / 1697 |
| 23 Water Act | 75% | 721 / 1622 |
| 24 Forest, Wildlife Acts | 78% | 748 / 1090 |
| **25 Kyoto** | **59%** | 664 / 1331 |
| **26 Paris** | **54%** | 507 / 1192 |
| 27 SDGs | 71% | 449 / 534 |
| **28 Climate change** | **61%** | 581 / 893 |
| **29 Global warming** | **50%** | 661 / 1860 |
| **30 Carbon footprint** | **60%** | 720 / 2156 |
| 31 AI and IoT | 87% | 763 / 1210 |

Fix: only tabs that failed the "Exam-complete" rule were rewritten in SPEC.md (full-sentence definitions, every list item
explained with its reason and the source's example, an exam-answer outline per topic).

## Hard topics that get an interactive model (only where it helps understanding)

Already built: `energy-10pct` (L5), `ddt-biomagnification` (L5), `aqi-bands` (L14).

| Model id | Lecture | Why it is hard | What the model does |
|---|---|---|---|
| `nutrient-cycles` | 4 | Many named steps per cycle (fixation, nitrification, denitrification...), easy to mix up | Step through the carbon, nitrogen and phosphorus cycles; each arrow lights with its process name |
| `succession` | 6 | Order of stages and primary vs secondary | Time slider from bare rock / cleared land to climax community |
| `species-interactions` | 8 | Five look-alike interactions defined by who gains or loses | Pick an interaction: the +/−/0 effect on each species and the source's example |
| `temp-inversion` | 14 | Why smog is trapped in winter (London 1952, Delhi) | Normal vs inversion air column; smoke rises or gets trapped |
| `sewage-treatment` | 15 | Three stages, what each removes | Step through primary, secondary, tertiary with the source's removal figures |
| `kyoto-mechanisms` | 25 | Emissions trading, CDM and JI look alike | Who earns credits from whom, animated per mechanism |
| `greenhouse-effect` | 28–29 | Mechanism of trapping heat | Sunlight in, infrared out, more GHG traps more heat |
| `carbon-scopes` | 30 | Scope 1 vs 2 vs 3 | Sort the source's examples into scopes, with the reason |

Skipped on purpose: lists and laws (EIA steps, Acts, SDGs) read better as tables; thermal pollution and noise have
no numbers in the source to drive a model.
