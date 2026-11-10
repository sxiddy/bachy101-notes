// Dumps every MCQ (final option order) with the plain text of its topic's notes, for tools/mcq-check.py.
// Usage: node tools/mcq-dump.js tmp/mcq.json
const fs = require('fs'), path = require('path');
const C = path.join(__dirname, '..', 'content');
const TOP = {}, QS = [];
global.CHUNK = (c) => c.topics.forEach((t) => { TOP[t.id] = t; });
global.QUESTIONS = (x) => x.questions.forEach((q) => QS.push(q));
for (const f of fs.readdirSync(C)) if (/^chunk-.*\.js$/.test(f)) require(path.join(C, f));
for (const f of fs.readdirSync(C)) if (/^q-M\d\.js$/.test(f)) require(path.join(C, f));
const plain = (h) => String(h || '').replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim();
const out = QS.filter((q) => q.options).map((q) => {
  const t = TOP[q.topic];
  return { id: q.id, module: q.module, topic: q.topic, q: plain(q.q), options: q.options.map(plain), correct: q.correct,
    notes: t ? t.tabs.map((tb) => plain(tb.title) + ': ' + plain(tb.html)).join('\n') : '' };
});
fs.mkdirSync(path.dirname(process.argv[2]), { recursive: true });
fs.writeFileSync(process.argv[2], JSON.stringify(out));
console.log(out.length, 'MCQs written');
