#!/usr/bin/env node
// Coverage audit: how much of each lecture's source text survives in its notes.
//   node tools/coverage.js            -> table per lecture
//   node tools/coverage.js 14         -> also list the source sentences that look missing for lecture 14
//   node tools/coverage.js --json     -> tmp/coverage.json (every lecture's missing sentences)
// A sentence counts as "covered" when >= 60% of its content words appear in the lecture's notes
// (stem match on the first 5 letters). Numbers/years in the source that never appear in the notes are listed too.
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const mods = JSON.parse(fs.readFileSync(path.join(ROOT, 'content/modules.json'), 'utf8'));

const topics = {};
for (const f of fs.readdirSync(path.join(ROOT, 'content')).filter((f) => /^chunk-.*\.js$/.test(f))) {
  global.CHUNK = (d) => { for (const t of d.topics) topics[t.id] = t; };
  require(path.join(ROOT, 'content', f));
}
const STOP = new Set(('the and for are with that this from into their they them have has had was were been being which what when where who whom whose while will would shall should could also than then there these those such each other more most some only very over under about after before between through during within without upon both either neither your yours ours your its it\'s can may might must not but any all one two three use used uses using like many much make made does done how why our out per via etc lecture session week page learning objectives outcomes students able explain understand describe discuss know figure table slide notes environmental environment science first year engineering b.tech').split(' '));
const stem = (w) => w.slice(0, 5);
const words = (s) => (s.toLowerCase().match(/[a-z][a-z0-9-]{2,}/g) || []).filter((w) => !STOP.has(w));
const plain = (html) => html.replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ');

function lectureFile(n) {
  for (const m of fs.readdirSync(path.join(ROOT, 'src/text'))) {
    for (const f of fs.readdirSync(path.join(ROOT, 'src/text', m))) if (new RegExp(`-${String(n).padStart(2, '0')}\\.txt$`).test(f)) return path.join(ROOT, 'src/text', m, f);
  }
}

const want = process.argv[2];
const rows = [];
const all = {};
for (const m of mods) for (const L of m.lectures) {
  const src = fs.readFileSync(lectureFile(L.n), 'utf8').replace(/=== page \d+ ===/g, '\n');
  const noteText = L.topics.map((id) => {
    const t = topics[id]; if (!t) return '';
    return [t.title, t.blurb, ...t.tabs.map((x) => plain(x.html)), ...(t.flashcards || []).map((c) => plain(c.front + ' ' + c.back)), ...(t.oneLiners || []).map(plain)].join(' ');
  }).join(' ');
  const noteStems = new Set(words(noteText).map(stem));
  const noteNums = new Set(noteText.replace(/,(?=\d{3})/g, '').match(/\d+(\.\d+)?/g) || []);
  const sents = src.replace(/\s*\n\s*/g, ' ').split(/(?<=[.;:?])\s+(?=[A-Z0-9•●▪-])|\s[•●▪]\s/).map((s) => s.trim()).filter((s) => words(s).length >= 4);
  let covered = 0; const missing = [];
  for (const s of sents) {
    const w = [...new Set(words(s).map(stem))];
    const hit = w.filter((x) => noteStems.has(x)).length / w.length;
    if (hit >= 0.6) covered++; else missing.push({ hit: +hit.toFixed(2), s });
  }
  const srcNums = [...new Set((src.replace(/,(?=\d{3})/g, '').match(/\b\d+(\.\d+)?\b/g) || []).filter((x) => x.length > 1 && !/^0\d/.test(x)))];
  const missNums = srcNums.filter((x) => !noteNums.has(x));
  const pct = Math.round((100 * covered) / Math.max(1, sents.length));
  rows.push({ n: L.n, m: m.id, title: L.title.slice(0, 48), sents: sents.length, pct, srcWords: words(src).length, noteWords: words(noteText).length, missNums: missNums.length });
  all[L.n] = { title: L.title, pct, missing, missNums };
  if (want && +want === L.n) {
    console.log(`Lecture ${L.n}: ${L.title}  coverage ${pct}%\n-- sentences that look missing --`);
    for (const x of missing) console.log(`[${x.hit}] ${x.s.slice(0, 300)}`);
    console.log('-- numbers in source not in notes --\n' + missNums.join(' '));
  }
}
if (process.argv.includes('--json')) fs.writeFileSync(path.join(ROOT, 'tmp/coverage.json'), JSON.stringify(all, null, 1));
if (!want || want === '--json') {
  console.log('L   mod  cov%  sents  srcW  noteW  missNums  title');
  for (const r of rows) console.log(`${String(r.n).padEnd(3)} ${r.m}  ${String(r.pct).padStart(4)}  ${String(r.sents).padStart(5)}  ${String(r.srcWords).padStart(5)}  ${String(r.noteWords).padStart(5)}  ${String(r.missNums).padStart(8)}  ${r.title}`);
}
