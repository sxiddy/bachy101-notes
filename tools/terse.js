#!/usr/bin/env node
// Finds tabs written as bare keyword lists (the "too short to write an answer from" problem).
//   node tools/terse.js          -> every flagged tab, worst first
//   node tools/terse.js m3       -> only Week 3
// A list item / table cell / chip is "terse" when it has fewer than 6 words. A tab is flagged when
// at least 8 such items make up 60% or more of its items.
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const only = process.argv[2];
const out = [];
for (const f of fs.readdirSync(path.join(ROOT, 'content')).filter((f) => /^chunk-.*\.js$/.test(f))) {
  global.CHUNK = (d) => {
    if (only && d.module !== only) return;
    for (const t of d.topics) for (const tab of t.tabs) {
      // th cells and the first cell of a row are labels, so skip them
      const html = tab.html.replace(/<th[^>]*>[\s\S]*?<\/th>/g, '').replace(/<tr>\s*<td[^>]*>[\s\S]*?<\/td>/g, '<tr>');
      const items = [...html.matchAll(/<(li|td|span class="chip")[^>]*>([\s\S]*?)<\/(li|td|span)>/g)].map((m) => m[2].replace(/<[^>]+>/g, ' ').trim()).filter(Boolean);
      const terse = items.filter((s) => s.split(/\s+/).length < 6);
      if (terse.length >= 8 && terse.length / items.length >= 0.6) out.push({ mod: d.module, chunk: d.chunk, topic: t.id, tab: tab.title, terse: terse.length, items: items.length, eg: terse.slice(0, 4).join(' | ') });
    }
  };
  require(path.join(ROOT, 'content', f));
}
out.sort((a, b) => b.terse - a.terse);
for (const r of out) console.log(`${r.mod} ${r.chunk} ${r.topic} / ${r.tab}: ${r.terse}/${r.items} terse  e.g. ${r.eg.slice(0, 110)}`);
console.log(`${out.length} tab(s) flagged`);
