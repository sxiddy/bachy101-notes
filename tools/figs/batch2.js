// node tools/figs/batch2.js figs-svg -> Week 1 (chunk B): food chain/web, pyramid, cycles, decomposition, succession, factors, levels, ecology.
const { T, L, A, P, R, C, mkSvg } = require('./lib');
const OUT = process.argv[2] || 'figs-svg', svg = mkSvg(OUT);
const H = (t) => T(300, 34, t, { s: 28, b: 1, c: 'dt', a: 'middle' });
const box = (x, y, w, h, cls, lines) => R(x, y, w, h, cls, 'rx="10" fill-opacity=".3" stroke-width="3"') + lines.map((t, i) => T(x + w / 2, y + h / 2 + 8 - (lines.length - 1) * 14 + i * 28, t, { a: 'middle', c: 'dt', s: i ? 22 : 26, b: !i })).join('');
const nb = (cx, cy, w, h, cls, lines) => box(cx - w / 2, cy - h / 2, w, h, cls, lines);

(function () { // food chain cycle
  let s = H('A food chain that loops back');
  s += nb(300, 100, 190, 66, 'dfg dsg', ['Green plant', 'producer']) + nb(490, 215, 190, 66, 'dfb dsb', ['Grasshopper', 'primary consumer']) + nb(450, 385, 190, 66, 'dfb dsb', ['Frog', 'secondary consumer']);
  s += nb(150, 385, 190, 66, 'dfo dso', ['Snake', 'tertiary consumer']) + nb(110, 215, 190, 66, 'dfr dsr', ['Hawk', 'final consumer']) + nb(300, 262, 140, 66, 'dfp dsp', ['Fungi', 'decomposers']);
  s += A('M395 125L500 178', 'b', 4) + A('M490 250L475 348', 'b', 4) + A('M355 385H250', 'b', 4) + A('M135 348L118 252', 'o', 4) + A('M150 180L205 125', 'o', 4) + A('M300 229V138', 'p', 4);
  s += T(300, 455, 'Fungi return matter to the plant.', { a: 'middle', s: 22, c: 'dt2' });
  svg(480, s, 'm1-food-chain-cycle');
})();

(function () { // biogeochemical components
  let s = H('The biosphere rests on five cycles');
  s += box(14, 56, 572, 66, 'dfg dsg', ['Biosphere']);
  s += P('M32 122V430', 'ds2', 3);
  ['Carbon cycle', 'Phosphorus cycle', 'Nitrogen cycle', 'Water cycle', 'Oxygen cycle'].forEach((t, i) => { const y = 146 + i * 62; s += P(`M32 ${y + 26}H52`, 'ds2', 3) + box(52, y, 534, 52, 'dfb dsb', [t]); });
  svg(470, s, 'm1-biogeochemical-components');
})();

(function () { // ecosystem types tree
  let s = H('Types of ecosystem');
  s += P('M300 94V120M210 120H490M210 120V148M490 120V148M210 192V220M100 220H320M100 220V240M320 220V240', 'ds2', 3);
  s += nb(300, 70, 190, 48, 'dfg dsg', ['Ecosystems']) + nb(210, 170, 170, 48, 'dfg dsg', ['Natural']) + nb(490, 170, 170, 48, 'dfo dso', ['Artificial']);
  s += nb(100, 264, 170, 48, 'dfb dsb', ['Terrestrial']) + nb(320, 264, 170, 48, 'dfb dsb', ['Aquatic']);
  s += T(100, 372, 'grassland', { a: 'middle', s: 24, c: 'dt' }) + T(100, 406, 'forest', { a: 'middle', s: 24, c: 'dt' }) + T(100, 440, 'desert', { a: 'middle', s: 24, c: 'dt' });
  s += T(320, 372, 'freshwater', { a: 'middle', s: 24, c: 'dt' }) + T(320, 406, 'marine', { a: 'middle', s: 24, c: 'dt' });
  s += P('M100 288V350M320 288V350', 'ds2', 3) + R(15, 350, 170, 106, 'dfb', 'rx="10" fill-opacity=".12"') + R(235, 350, 170, 74, 'dfb', 'rx="10" fill-opacity=".12"');
  svg(480, s, 'm1-ecosystem-types-tree');
})();

(function () { // levels of organisation
  let s = H('Levels of organisation');
  [['Biosphere', 'all ecosystems on Earth', 572, 'dfg dsg'], ['Ecosystem', 'community + non-living parts', 504, 'dfg dsg'], ['Community', 'populations that interact', 436, 'dfb dsb'], ['Population', 'one species in one area', 368, 'dfb dsb'], ['Organism', 'one living being', 300, 'dfo dso']].forEach(([n, d, w, c], i) => { s += box(14, 56 + i * 76, w, 68, c, [n, d]); });
  svg(450, s, 'm1-levels-organisation');
})();

(function () { // abiotic factors
  let s = H('Abiotic (non-living) factors');
  ['Air', 'Salinity', 'Soil', 'Temperature', 'Light', 'Water', 'Minerals', 'pH', 'Humidity'].forEach((t, i) => { s += box(14 + (i % 3) * 196, 56 + Math.floor(i / 3) * 86, 188, 70, ['dfb dsb', 'dfo dso', 'dfy dsy'][(i + Math.floor(i / 3)) % 3], [t]); });
  svg(320, s, 'm1-abiotic-factors');
})();

(function () { // biotic factors
  let s = H('Biotic (living) factors');
  s += box(14, 56, 572, 90, 'dfg dsg', ['Producers', 'plants, algae, phytoplankton']) + box(14, 166, 572, 90, 'dfb dsb', ['Consumers', 'animals that eat other organisms']) + box(14, 276, 572, 90, 'dfp dsp', ['Decomposers', 'bacteria and fungi']);
  svg(390, s, 'm1-biotic-factors');
})();

(function () { // food web
  let s = H('A food web');
  const N = { grass: [300, 500, 160, 'dfg dsg', 'Grass'], hopper: [100, 400, 160, 'dfb dsb', 'Grasshopper'], rabbit: [300, 400, 120, 'dfb dsb', 'Rabbit'], mouse: [500, 400, 120, 'dfb dsb', 'Mouse'], bird: [80, 300, 110, 'dfo dso', 'Bird'], frog: [215, 300, 110, 'dfo dso', 'Frog'], fox: [350, 300, 110, 'dfr dsr', 'Fox'], owl: [500, 300, 110, 'dfr dsr', 'Owl'], snake: [330, 190, 120, 'dfo dso', 'Snake'], hawk: [200, 80, 120, 'dfr dsr', 'Hawk'] };
  const ar = (a, b) => A(`M${N[a][0]} ${N[a][1] - 24}L${N[b][0]} ${N[b][1] + 28}`, 'g', 3.5);
  [['grass', 'hopper'], ['grass', 'rabbit'], ['grass', 'mouse'], ['hopper', 'bird'], ['hopper', 'frog'], ['rabbit', 'fox'], ['mouse', 'owl'], ['frog', 'snake'], ['snake', 'hawk'], ['bird', 'hawk']].forEach(([a, b]) => { s += ar(a, b); });
  Object.values(N).forEach(([x, y, w, c, t]) => { s += nb(x, y, w, 48, c, [t]).replace(/font-size="26"/g, 'font-size="24"'); });
  s += T(14, 560, 'Arrows point from food to feeder.', { s: 22, c: 'dt2' });
  svg(580, s, 'm1-food-web');
})();

(function () { // ecological pyramid
  let s = H('An ecological pyramid');
  const hw = (y) => 80 + (y - 60) / 360 * 190;
  [['Tertiary', 'consumers', 'dfr dsr'], ['Secondary', 'consumers', 'dfo dso'], ['Primary', 'consumers', 'dfb dsb'], ['Producers', '', 'dfg dsg']].forEach(([a, b, c], i) => {
    const y0 = 60 + i * 90, y1 = y0 + 86;
    s += `<path d="M${300 - hw(y0)} ${y0}H${300 + hw(y0)}L${300 + hw(y1)} ${y1}H${300 - hw(y1)}Z" class="${c}" fill-opacity=".35" stroke-width="3"/>`;
    s += b ? T(300, y0 + 38, a, { a: 'middle', s: 26, b: 1, c: 'dt' }) + T(300, y0 + 68, b, { a: 'middle', s: 24, c: 'dt' }) : T(300, y0 + 52, a, { a: 'middle', s: 26, b: 1, c: 'dt' });
  });
  s += T(300, 450, 'wide base: most energy and numbers', { a: 'middle', s: 22, c: 'dt2' });
  svg(470, s, 'm1-ecological-pyramid');
})();

(function () { // nitrogen cycle
  let s = H('The nitrogen cycle');
  s += nb(300, 82, 120, 52, 'dfb dsb', ['N₂']) + nb(100, 230, 120, 52, 'dfo dso', ['NH₃']) + nb(100, 380, 120, 52, 'dfo dso', ['NO₂⁻']) + nb(500, 380, 120, 52, 'dfo dso', ['NO₃⁻']) + nb(300, 235, 120, 52, 'dfg dsg', ['Plants']);
  s += A('M255 100L135 202', 'b', 4) + A('M100 258V352', 'o', 4) + A('M162 380H436', 'o', 4) + A('M455 352L350 262', 'g', 4) + A('M545 352V70H368', 'b', 4);
  s += T(14, 138, 'Nitrogen', { s: 22, c: 'dtb', b: 1 }) + T(14, 164, 'fixation', { s: 22, c: 'dtb', b: 1 });
  s += T(116, 310, 'nitrifying', { s: 22, c: 'dto', b: 1 }) + T(116, 336, 'bacteria', { s: 22, c: 'dto', b: 1 });
  s += T(300, 366, 'nitrifying bacteria', { a: 'middle', s: 22, c: 'dto', b: 1 }) + T(262, 306, 'plants take up', { a: 'middle', s: 22, c: 'dtg', b: 1 });
  s += T(536, 170, 'denitrifying', { a: 'end', s: 22, c: 'dtb', b: 1 }) + T(536, 196, 'bacteria', { a: 'end', s: 22, c: 'dtb', b: 1 });
  svg(450, s, 'm1-nitrogen-cycle');
})();

(function () { // decomposition steps
  let s = H('Five steps of decomposition');
  [['Fragmentation', 'detritivores break matter into pieces'], ['Leaching', 'soluble nutrients wash into soil'], ['Catabolism', 'microbial enzymes break molecules down'], ['Humification', 'dark humus builds up'], ['Mineralization', 'inorganic nutrients are released']].forEach(([n, d], i) => {
    const y = 56 + i * 88;
    s += C(40, y + 36, 24, 'dfg dsg', 'fill-opacity=".4" stroke-width="3"') + T(40, y + 45, i + 1, { a: 'middle', s: 26, b: 1, c: 'dt' }) + box(80, y, 506, 72, 'dfb dsb', [n, d]);
    if (i < 4) s += A(`M40 ${y + 62}V${y + 90}`, 'g', 3);
  });
  svg(500, s, 'm1-decomposition-steps');
})();

function stages(title, items, name, cols, note) {
  let s = H(title);
  const h = 60, g = 26;
  s += A(`M32 70V${64 + items.length * (h + g) - g - 8}`, 'g', 4) + T(32, 56, 'time', { a: 'middle', s: 22, c: 'dt2', b: 1 });
  items.forEach((t, i) => {
    const y = 66 + i * (h + g);
    s += box(64, y, 522, h, cols[i], [t]);
    if (i < items.length - 1) s += A(`M325 ${y + h + 2}V${y + h + g - 4}`, 'g', 3);
  });
  if (note) s += T(300, 76 + items.length * (h + g), note, { a: 'middle', s: 22, c: 'dt2' });
  svg(80 + items.length * (h + g) + (note ? 10 : 0), s, name);
}
stages('Succession over time', ['Annual plants', 'Perennials and grasses', 'Shrubs', 'Softwood trees', 'Hardwood trees'], 'm1-succession-time', ['dfo dso', 'dfy dsy', 'dfy dsy', 'dfg dsg', 'dfg dsg']);
stages('Primary succession on bare rock', ['Exposed rock', 'Lichens and mosses', 'Small herbs and shrubs', 'Heath mat', 'Jack pine, black spruce, aspen', 'Balsam fir, paper birch, white spruce'], 'm1-primary-succession', ['dfo dso', 'dfy dsy', 'dfy dsy', 'dfg dsg', 'dfg dsg', 'dfg dsg']);
stages('Secondary succession on farmland', ['Annual weeds', 'Perennial weeds and grasses', 'Shrubs and small pines', 'Young pine forest', 'Mature oak and hickory forest'], 'm1-secondary-succession', ['dfo dso', 'dfy dsy', 'dfy dsy', 'dfg dsg', 'dfg dsg'], 'Starts with soil already in place.');

(function () { // ecology importance
  let s = H('Why ecology matters to people');
  s += P('M300 170V140M300 330V360M232 250H190M368 250H410', 'ds2', 3);
  s += nb(300, 250, 190, 150, 'dfg dsg', ['Healthy', 'ecosystems']).replace(/<rect/, '<rect');
  s += box(150, 60, 300, 80, 'dfb dsb', ['Food and water']) + box(14, 210, 176, 80, 'dfy dsy', ['Climate', 'control']) + box(410, 210, 176, 80, 'dfp dsp', ['Recreation']) + box(150, 360, 300, 80, 'dfo dso', ['Nutrient cycling']);
  s += T(300, 480, 'Health of ecosystems = health of the planet', { a: 'middle', s: 22, c: 'dt2' });
  svg(500, s, 'm1-ecology-importance');
})();
