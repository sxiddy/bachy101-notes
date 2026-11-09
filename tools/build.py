"""Build the EVS PDF library: copies src/notes/*.pdf into site/pdfs and writes
site/data.js (weeks + lectures) and site/search.js (per-page text for search).
Run: python -I tools/build.py   (needs pypdf)"""
import json, re, shutil
from pathlib import Path
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parent.parent
SRC, SITE = ROOT / "src", ROOT / "site"
WEEKS = {
    1: "Fundamentals of Environment and Ecosystems",
    2: "Biodiversity and Environmental Quality",
    3: "Pollution and Its Management Techniques",
    4: "Environmental Laws and Sustainable Development Goals",
    5: "Climate Change and Emerging Environmental Issues",
}
FIX = {"Lotes": "Notes", "Thermol": "Thermal", "AI IOT": "AI & IoT"}
TITLES = {  # readable titles where the course's own are messy
    "evs-w1-01": "Definition, Scope, Importance & Multidisciplinary Approach",
    "evs-w1-04": "Structure and Functions of Ecosystem",
    "evs-w1-05": "Energy Flow in an Ecosystem",
    "evs-w2-07": "Biodiversity: Definition, Levels, Significance & Threats",
    "evs-w2-08": "Species Interaction; Extinct, Endangered, Endemic & Rare Species",
    "evs-w2-09": "Conservation Strategies",
    "evs-w2-11": "Environmental Hazards: Types, Causes, Solutions & COVID-19",
    "evs-w2-12": "Chemical Hazards: Bisphenol-A & Mercury",
    "evs-w2-13": "Disaster Management (Parts 1 & 2)",
    "evs-w3-14": "Air Pollution",
    "evs-w4-22": "Environmental Laws: EPA & Air Act",
    "evs-w4-23": "Environmental Laws: EPA & Water Act (Part II)",
    "evs-w4-24": "Forest Conservation Act & Wildlife Protection Act",
    "evs-w5-31": "Role of AI & IoT in Environmental Monitoring",
}


def clean(t):
    t = re.sub(r"^\d+(\.\d+)*\.?\s*", "", t)
    t = re.sub(r"[-\s]*(Lecture\s+)?(Notes|notes|Lotes)$", "", t).strip(" -")
    for a, b in FIX.items():
        t = t.replace(a, b)
    return re.sub(r"\s+", " ", t)


meta = json.loads((SRC / "meta.json").read_text(encoding="utf-8"))
(SITE / "pdfs").mkdir(parents=True, exist_ok=True)
lectures, pages = [], []
for i, m in enumerate(meta):
    if m["week"] not in WEEKS:
        continue
    src = SRC / "notes" / m["file"]
    shutil.copyfile(src, SITE / "pdfs" / m["file"])
    r = PdfReader(src)
    lid = m["file"][:-4]
    lectures.append({"id": lid, "week": m["week"], "title": TITLES.get(lid) or clean(m["title"]),
                     "file": "pdfs/" + m["file"], "pages": len(r.pages),
                     "size": src.stat().st_size})
    for n, p in enumerate(r.pages, 1):
        txt = re.sub(r"\s+", " ", p.extract_text() or "").strip()
        if txt:
            pages.append([lid, n, txt])

weeks = [{"n": n, "title": t} for n, t in WEEKS.items()]
(SITE / "data.js").write_text("window.EVS=" + json.dumps({"weeks": weeks, "lectures": lectures}, ensure_ascii=False) + ";", encoding="utf-8")
(SITE / "search.js").write_text("window.EVS_TEXT=" + json.dumps(pages, ensure_ascii=False) + ";", encoding="utf-8")
print(len(lectures), "lectures,", sum(l["pages"] for l in lectures), "pages,", len(pages), "pages with text")
for l in lectures:
    print(l["week"], l["id"], l["pages"], l["title"])
