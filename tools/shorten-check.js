#!/usr/bin/env node
// Checks a shortened notes chunk against its original: same topics, same tab titles in the same order,
// every figure and interactive kept, nothing outside the tab text changed, and the text actually shorter.
//   node tools/shorten-check.js <original chunk> <new chunk> [max ratio, default 0.6]
const fs = require('fs'), path = require('path'), vm = require('vm');
function load(f) {
  let out; const ctx = { CHUNK: (c) => { out = c; } };
  vm.runInNewContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
  return out;
}
const words = (html) => html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
const embeds = (html) => (html.match(/data-(fig|viz)="[^"]+"/g) || []).sort().join(' ');
const [a, b, r] = process.argv.slice(2); const max = +(r || 0.6);
const A = load(path.resolve(a)), B = load(path.resolve(b));
const errs = []; let wa = 0, wb = 0;
const strip = (t) => JSON.stringify({ ...t, tabs: t.tabs.map((x) => x.title) });
if (A.topics.length !== B.topics.length) errs.push(`topic count ${A.topics.length} -> ${B.topics.length}`);
A.topics.forEach((t, i) => {
  const u = B.topics[i]; if (!u || u.id !== t.id) { errs.push(`topic ${i}: ${t.id} -> ${u && u.id}`); return; }
  if (strip(t) !== strip(u)) errs.push(`${t.id}: something outside the tab text changed (title, blurb, tab titles, flashcards...)`);
  const ha = t.tabs.map((x) => x.html).join(' '), hb = u.tabs.map((x) => x.html).join(' ');
  if (embeds(ha) !== embeds(hb)) errs.push(`${t.id}: figures/interactives differ\n   was: ${embeds(ha)}\n   now: ${embeds(hb)}`);
  u.tabs.forEach((x) => { if (!x.html.trim()) errs.push(`${t.id}: tab "${x.title}" is empty`); });
  const n = words(ha), m = words(hb); wa += n; wb += m;
  if (n >= 250 && m > n * max) errs.push(`${t.id}: ${n} -> ${m} words (${Math.round(100 * m / n)}%, want <= ${Math.round(max * 100)}%)`);
});
console.log(`${A.chunk}: ${wa} -> ${wb} words (${Math.round(100 * wb / wa)}%)`);
if (errs.length) { console.log(errs.join('\n')); process.exit(1); }
console.log('ok');
