// node tools/figs/batch3.js figs-svg -> Weeks 2-3: hotspots, mass extinction, BPA (3), mercury cycle, baghouse, soil pollution types.
const { T, L, A, P, R, C, mkSvg } = require('./lib');
const OUT = process.argv[2] || 'figs-svg', svg = mkSvg(OUT);
const H = (t) => T(300, 34, t, { s: 28, b: 1, c: 'dt', a: 'middle' });
const box = (x, y, w, h, cls, lines) => R(x, y, w, h, cls, 'rx="10" fill-opacity=".3" stroke-width="3"') + lines.map((t, i) => T(x + w / 2, y + h / 2 + 8 - (lines.length - 1) * 14 + i * 28, t, { a: 'middle', c: 'dt', s: i ? 22 : 26, b: !i })).join('');
const nb = (cx, cy, w, h, cls, lines) => box(cx - w / 2, cy - h / 2, w, h, cls, lines);

(function () { // hotspots (card, not a traced map)
  let s = H('Biodiversity hotspots');
  s += box(14, 56, 572, 70, 'dfg dsg', ['36 hotspots worldwide', 'high species richness + high endemism + threatened']);
  s += T(14, 160, 'Three global examples', { s: 24, b: 1, c: 'dt' });
  [['Amazon Rainforest', 'South America'], ['Congo Basin', 'Central Africa'], ['Coral Triangle', 'Southeast Asia, Pacific']].forEach(([n, d], i) => { s += box(14, 176 + i * 78, 572, 70, 'dfb dsb', [n, d]); });
  s += T(14, 440, 'India has four of them', { s: 24, b: 1, c: 'dt' });
  [['Himalayas', ''], ['Western Ghats', ''], ['Indo-Burma', 'north-east India'], ['Sundaland', 'incl. Nicobar Islands']].forEach(([n, d], i) => { s += box(14 + (i % 2) * 290, 456 + Math.floor(i / 2) * 92, 282, 80, 'dfo dso', d ? [n, d] : [n]); });
  svg(650, s, 'm2-hotspot-map');
})();

(function () { // mass extinction drivers
  let s = H('What drives mass extinction');
  const L8 = [['Climate'], ['Meteorite', 'impact'], ['Volcanism'], ['Air', 'temperature'], ['Ocean', 'acidification'], ['Water oxygen', 'levels'], ['Sea-level', 'rise'], ['Atmospheric', 'circulation']];
  const yc = 232;
  s += C(300, yc, 62, 'dfr dsr', 'fill-opacity=".35" stroke-width="3"') + T(300, yc - 4, 'Mass', { a: 'middle', s: 26, b: 1, c: 'dt' }) + T(300, yc + 26, 'extinction', { a: 'middle', s: 24, b: 1, c: 'dt' });
  L8.forEach((l, i) => {
    const left = i < 4, y = 56 + (i % 4) * 92, x = left ? 14 : 406;
    s += box(x, y, 180, 76, 'dfo dso', l) + A(left ? `M194 ${y + 38}L${240} ${yc + (y + 38 - yc) * 0.28}` : `M406 ${y + 38}L${360} ${yc + (y + 38 - yc) * 0.28}`, 'o', 3.5);
  });
  svg(450, s, 'm2-mass-extinction');
})();

(function () { // BPA mimics a hormone
  let s = H('How BPA fools the body');
  const panel = (y, title, molCls, molName, resp, respCls) => {
    let p = T(14, y, title, { s: 24, b: 1, c: 'dt' });
    p += C(70, y + 86, 30, molCls, 'fill-opacity=".5" stroke-width="3"') + T(70, y + 150, molName, { a: 'middle', s: 22, c: 'dt' });
    p += A(`M104 ${y + 86}H208`, 'w', 4);
    p += R(214, y + 44, 70, 84, 'dfp dsp', 'rx="8" fill-opacity=".35" stroke-width="3"') + T(249, y + 150, 'receptor', { a: 'middle', s: 22, c: 'dt' });
    p += A(`M290 ${y + 86}H396`, 'w', 4) + box(402, y + 50, 184, 72, respCls, resp);
    return p;
  };
  s += panel(76, 'Normal: the hormone fits its receptor', 'dfb dsb', 'hormone', ['Normal', 'response'], 'dfg dsg');
  s += panel(276, 'With BPA: the mimic fits too', 'dfo dso', 'BPA (mimic)', ['Altered', 'response'], 'dfr dsr');
  svg(460, s, 'm2-bpa-mechanism');
})();

(function () { // BPA health hazards
  let s = H('Health hazards of BPA');
  [['Hormonal', 'early puberty, low sperm count'], ['Cancer', 'breast and prostate'], ['Metabolic', 'obesity, type 2 diabetes'], ['Cardiovascular', 'hypertension, coronary disease'], ['Thyroid', 'raised TSH'], ['Neurological', 'anxiety, poor memory, Alzheimer’s'], ['Reproductive', 'PCOS, endometriosis, infertility'], ['Immune', 'allergies, asthma, inflammation']].forEach(([n, d], i) => { s += box(14, 56 + i * 76, 572, 68, ['dfr dsr', 'dfo dso'][i % 2], [n, d]); });
  svg(670, s, 'm2-bpa-health');
})();

(function () { // six ways to limit BPA
  let s = H('Six ways to limit BPA');
  [['Eat fresh food', 'not food stored in plastic or cans'], ['Metal or ceramic cups', 'for tea and coffee'], ['Glass or steel bottles', 'for water'], ['Glass, not plastic', 'for the microwave'], ['Metal or ceramic plates', 'not plastic plates'], ['Cotton toys', 'not plastic toys for children']].forEach(([n, d], i) => {
    const y = 56 + i * 80;
    s += C(40, y + 34, 24, 'dfg dsg', 'fill-opacity=".4" stroke-width="3"') + T(40, y + 43, i + 1, { a: 'middle', s: 26, b: 1, c: 'dt' }) + box(80, y, 506, 68, 'dfb dsb', [n, d]);
  });
  svg(550, s, 'm2-bpa-steps');
})();

(function () { // mercury cycle
  let s = H('The mercury cycle');
  const pos = [[104, 110], [300, 110], [496, 110], [496, 270], [300, 270]];
  const txt = [['Emitted', 'to the air'], ['Deposited', 'by rain, snow'], ['Collects in', 'lakes, forests'], ['Becomes', 'methylmercury'], ['Builds up', 'in food webs']];
  s += A('M190 110H212', 'o', 4) + A('M386 110H408', 'o', 4) + A('M496 158V222', 'o', 4) + A('M410 270H388', 'o', 4);
  pos.forEach(([x, y], i) => { s += nb(x, y, 164, 96, i == 4 ? 'dfr dsr' : 'dfb dsb', txt[i]) + C(x - 82, y - 48, 17, 'dfg dsg', 'fill-opacity=".7" stroke-width="3"') + T(x - 82, y - 41, i + 1, { a: 'middle', s: 22, b: 1, c: 'dt' }); });
  s += T(300, 360, 'Methylmercury bioaccumulates: top predators', { a: 'middle', s: 22, c: 'dt2' }) + T(300, 388, 'carry the most.', { a: 'middle', s: 22, c: 'dt2' });
  svg(410, s, 'm2-mercury-cycle');
})();

(function () { // baghouse
  let s = H('A baghouse filter');
  s += R(90, 100, 270, 240, 'df ds', 'rx="6" fill-opacity=".4" stroke-width="4"') + P('M90 170H360', 'ds', 4);
  s += `<path d="M90 340H360L240 430H210Z" class="df ds" fill-opacity=".4" stroke-width="4"/>`;
  [140, 200, 260, 320].forEach((x) => { s += R(x - 20, 170, 40, 150, 'dfb dsb', 'rx="8" fill-opacity=".35" stroke-width="3"') + P(`M${x} 150V168`, 'dso', 4); });
  s += P('M110 150H340', 'dso', 6);
  s += A('M14 300H88', 'g', 5) + T(14, 246, 'dirty', { s: 22, c: 'dtg', b: 1 }) + T(14, 272, 'air in', { s: 22, c: 'dtg', b: 1 });
  s += A('M225 100V56', 'b', 5) + T(244, 76, 'clean air out', { s: 22, c: 'dtb', b: 1 });
  s += T(376, 130, 'clean-air chamber', { s: 22, c: 'dt' }) + T(376, 164, 'pulse jet', { s: 22, c: 'dto', b: 1 }) + P('M366 160H350', 'ds2', 2.5) + T(376, 250, 'dirty-air chamber', { s: 22, c: 'dt' }) + T(376, 288, 'filter bags', { s: 22, c: 'dtb', b: 1 }) + T(376, 396, 'hopper', { s: 22, c: 'dt' });
  s += C(225, 455, 24, 'dfy dsy', 'fill-opacity=".4" stroke-width="3"') + T(262, 462, 'rotary airlock valve', { s: 22, c: 'dty', b: 1 }) + A('M225 480V520', 'y', 5) + T(244, 510, 'dust out', { s: 22, c: 'dt' });
  svg(540, s, 'm3-baghouse');
})();

(function () { // soil pollution types
  let s = H('Types of soil pollution');
  const left = [['Domestic and', 'industrial waste'], ['Agricultural'], ['Urban activities']], right = [['Continuous', 'deforestation'], ['Heavy metals', 'Hg, Pb, As,', 'Cu, Zn, Ni'], ['Organophosphate', 'pesticides']];
  s += C(300, 235, 66, 'dfo dso', 'fill-opacity=".35" stroke-width="3"') + T(300, 220, 'Soil', { a: 'middle', s: 26, b: 1, c: 'dt' }) + T(300, 248, 'pollution', { a: 'middle', s: 24, b: 1, c: 'dt' });
  [left, right].forEach((col, k) => col.forEach((l, i) => {
    const x = k ? 396 : 14, y = 58 + i * 120;
    s += box(x, y, 190, 90, k ? 'dfb dsb' : 'dfy dsy', l).replace(/font-size="26"/g, 'font-size="22"') + A(k ? `M${x} ${y + 45}L362 ${235 + (y + 45 - 235) * 0.4}` : `M204 ${y + 45}L238 ${235 + (y + 45 - 235) * 0.4}`, 'o', 3.5);
  }));
  svg(430, s, 'm3-soil-types');
})();
