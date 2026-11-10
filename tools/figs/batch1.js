// node tools/figs/batch1.js figs-svg -> Week 1 (chunk A): spheres, air, atmosphere layers, ozone, water cycle, Earth layers, biosphere.
const { T, L, A, P, R, C, mkSvg } = require('./lib');
const OUT = process.argv[2] || 'figs-svg', svg = mkSvg(OUT);
const H = (t) => T(300, 34, t, { s: 28, b: 1, c: 'dt', a: 'middle' });
const box = (x, y, w, h, cls, lines) => R(x, y, w, h, cls, 'rx="10" fill-opacity=".3" stroke-width="3"') + lines.map((t, i) => T(x + w / 2, y + h / 2 + 8 - (lines.length - 1) * 14 + i * 28, t, { a: 'middle', c: 'dt', s: i ? 22 : 26, b: !i })).join('');
const band = (x, y, w, h, cls, op) => R(x, y, w, h, cls, `rx="8" fill-opacity="${op}" stroke-width="3"`);

(function () { // four spheres
  let s = H('Earth and its four spheres');
  s += P('M300 173V140M300 317V350M228 245H200M372 245H400', 'ds2', 3);
  s += C(300, 245, 72, 'dfb dsb', 'fill-opacity=".3" stroke-width="3"') + T(300, 254, 'Earth', { a: 'middle', c: 'dt', s: 28, b: 1 });
  s += box(200, 60, 200, 80, 'dfb dsb', ['Atmosphere', 'air']) + box(400, 205, 186, 80, 'dfb dsb', ['Hydrosphere', 'water']);
  s += box(14, 205, 186, 80, 'dfo dso', ['Lithosphere', 'rock and soil']) + box(200, 350, 200, 80, 'dfg dsg', ['Biosphere', 'living things']);
  svg(460, s, 'm1-four-spheres');
})();

(function () { // air composition pie
  let s = H('What air is made of');
  const cx = 300, cy = 190, r = 140;
  const p = (a) => [cx + r * Math.cos(a * Math.PI / 180), cy + r * Math.sin(a * Math.PI / 180)];
  const wedge = (a0, a1, cls) => { const [x0, y0] = p(a0), [x1, y1] = p(a1); return `<path d="M${cx} ${cy}L${x0.toFixed(1)} ${y0.toFixed(1)}A${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1.toFixed(1)} ${y1.toFixed(1)}Z" class="${cls}" fill-opacity=".5" stroke-width="3"/>`; };
  const a1 = -90 + 360 * 0.78, a2 = a1 + 360 * 0.21;
  s += wedge(-90, a1, 'dfb dsb') + wedge(a1, a2, 'dfo dso') + wedge(a2, 270, 'dfy dsy');
  s += T(354, 262, 'N₂ 78%', { a: 'middle', c: 'dt', s: 28, b: 1 }) + T(236, 120, 'O₂ 21%', { a: 'middle', c: 'dt', s: 26, b: 1 });
  [['dfb', 'Nitrogen (N₂): 78%'], ['dfo', 'Oxygen (O₂): 21%'], ['dfy', 'Everything else: 1%']].forEach(([c, t], i) => { s += R(120, 372 + i * 38, 24, 24, c, 'rx="4" fill-opacity=".6"') + T(160, 392 + i * 38, t, { s: 24, c: 'dt' }); });
  svg(490, s, 'm1-air-composition');
})();

function layers(title, rows, foot, name) { // stacked bands, top layer first; rows: [name, range, obj1, obj2]
  let s = H(title);
  rows.forEach((r, i) => {
    const y = 50 + i * 104;
    s += band(20, y, 560, 96, 'dfb dsb', [0.1, 0.18, 0.26, 0.34, 0.42][i]) + T(36, y + 40, r[0], { s: 28, b: 1, c: 'dt' }) + T(36, y + 76, r[1], { s: 24, c: 'dt2' });
    if (r[2]) s += T(290, y + 40, r[2], { s: 24, c: 'dt' });
    if (r[3]) s += T(290, y + 76, r[3], { s: 24, c: 'dt' });
  });
  s += band(20, 566, 560, 40, 'dfg dsg', 0.5) + T(300, 595, 'Earth', { a: 'middle', c: 'dt', b: 1, s: 24 });
  if (foot) s += T(300, 640, foot, { a: 'middle', c: 'dt3', s: 22 });
  svg(foot ? 660 : 620, s, name);
}
layers('The five layers of the atmosphere', [['Exosphere', 'outermost layer'], ['Thermosphere', '85–800 km'], ['Mesosphere', '50–85 km'], ['Stratosphere', '15–50 km'], ['Troposphere', '0–15 km']], 'Heights not to scale', 'm1-atmosphere-layers-photo');
layers('Layers and what lives there', [['Exosphere', 'above 700 km', 'satellites', ''], ['Thermosphere', '80–700 km', 'auroras, spacecraft', ''], ['Mesosphere', '50–80 km', 'meteors burn up', ''], ['Stratosphere', '12–50 km', 'ozone layer,', 'weather balloons'], ['Troposphere', '0–12 km', 'planes, clouds,', 'weather']], 'Slide heights; the notes use 0–15 and 15–50 km', 'm1-atmosphere-poster');

(function () { // stratosphere profile
  const y = (km) => 540 - 8 * km;
  let s = H('Altitude and temperature');
  s += P('M70 60V540', 'ds', 3) + T(86, 50, 'km', { c: 'dt2', s: 22 });
  [0, 10, 20, 30, 40, 50, 60].forEach((k) => { s += P(`M64 ${y(k)}H76`, 'ds', 3) + T(58, y(k) + 8, k, { a: 'end', c: 'dt2', s: 22 }); });
  s += R(70, y(30), 500, 80, 'dfy', 'fill-opacity=".18"');
  s += P(`M70 ${y(10)}H570`, 'ds2', 2.5, 'stroke-dasharray="8 6"') + P(`M70 ${y(50)}H570`, 'ds2', 2.5, 'stroke-dasharray="8 6"');
  s += T(566, y(10) - 8, 'tropopause', { a: 'end', c: 'dt3', s: 22 }) + T(300, y(50) - 8, 'stratopause', { c: 'dt3', s: 22 });
  s += T(86, 100, 'Mesosphere', { c: 'dtp', s: 26, b: 1 }) + T(86, 130, 'meteors', { c: 'dt', s: 22 });
  s += T(86, 236, 'Stratosphere', { c: 'dtb', s: 26, b: 1 }) + T(86, 282, 'weather balloon', { c: 'dt', s: 22 }) + T(86, 346, 'ozone layer', { c: 'dty', s: 22, b: 1 }) + T(86, 410, 'spy plane', { c: 'dt', s: 22 });
  s += T(86, 500, 'Troposphere', { c: 'dtg', s: 26, b: 1 }) + T(86, 528, 'weather, clouds', { c: 'dt', s: 22 });
  s += P('M528 540L350 460L350 380L485 140L440 60', 'dsr', 5) + C(350, 460, 7, 'dfr');
  [[340, '−60'], [440, '−20'], [540, '20']].forEach(([x, t]) => { s += P(`M${x} 548v8`, 'ds', 3) + T(x, 580, t, { a: 'middle', c: 'dt2', s: 22 }); });
  s += T(440, 608, 'Temperature (°C)', { a: 'middle', c: 'dtr', s: 22, b: 1 });
  svg(620, s, 'm1-stratosphere-profile');
})();

(function () { // ozone and UV
  let s = H('Ozone and ultraviolet (UV)');
  s += band(14, 110, 572, 220, 'dfb dsb', 0.18) + band(14, 190, 572, 60, 'dfy dsy', 0.4) + band(14, 330, 572, 100, 'dfg dsg', 0.25) + band(14, 430, 572, 40, 'dfo dso', 0.35);
  s += T(24, 150, 'Stratosphere', { s: 24, b: 1, c: 'dt' }) + T(24, 228, 'ozone layer', { s: 22, c: 'dt' }) + T(24, 385, 'Troposphere', { s: 24, b: 1, c: 'dt' }) + T(24, 458, 'Ground', { s: 22, c: 'dt' });
  [[300, 'UV-C', 'r', 186, 'dtr'], [420, 'UV-B', 'o', 240, 'dto'], [540, 'UV-A', 'y', 440, 'dty']].forEach(([x, t, k, ye, c]) => { s += T(x, 70, t, { a: 'middle', s: 26, b: 1, c }) + A(`M${x} 86V${ye}`, k, 5); });
  s += T(310, 170, 'absorbed', { s: 22, c: 'dtr' }) + T(430, 280, 'mostly', { s: 22, c: 'dto' }) + T(430, 306, 'absorbed', { s: 22, c: 'dto' });
  s += T(526, 370, 'most reaches', { a: 'end', s: 22, c: 'dty' }) + T(526, 396, 'the ground', { a: 'end', s: 22, c: 'dty' });
  s += T(300, 505, 'Ozone near the ground (in cities) is smog.', { a: 'middle', s: 22, c: 'dt2' });
  svg(525, s, 'm1-ozone-uv');
})();

(function () { // troposphere / stratosphere / mesosphere with boundaries
  let s = H('Three lower layers and their boundaries');
  s += band(14, 90, 572, 110, 'dfp dsp', 0.2) + band(14, 200, 572, 180, 'dfb dsb', 0.2) + band(14, 290, 572, 50, 'dfy dsy', 0.4) + band(14, 380, 572, 90, 'dfg dsg', 0.25);
  s += T(24, 150, 'Mesosphere', { s: 26, b: 1, c: 'dt' }) + T(24, 250, 'Stratosphere', { s: 26, b: 1, c: 'dt' }) + T(24, 324, 'ozone layer', { s: 22, c: 'dt' }) + T(24, 435, 'Troposphere', { s: 26, b: 1, c: 'dt' });
  s += T(576, 84, 'mesopause', { a: 'end', s: 22, c: 'dt2', b: 1 }) + T(576, 194, 'stratopause', { a: 'end', s: 22, c: 'dt2', b: 1 }) + T(576, 374, 'tropopause', { a: 'end', s: 22, c: 'dt2', b: 1 });
  svg(490, s, 'm1-mesosphere-diagram');
})();

function waterCycle(title, name) {
  let s = H(title);
  s += band(14, 340, 236, 80, 'dfb dsb', 0.35) + `<path d="M250 420V385L330 362L460 272L586 332V420Z" class="dfg dsg" fill-opacity=".35" stroke-width="3"/>`;
  s += ['M340 118a38 38 0 0 1 70-14a34 34 0 0 1 60 22a28 28 0 0 1-8 40H350a30 30 0 0 1-10-48z'].map((d) => `<path d="${d}" class="df2 ds" stroke-width="3"/>`).join('');
  s += T(410, 70, 'Condensation', { a: 'middle', s: 24, b: 1, c: 'dt' });
  s += A('M110 332V150Q110 120 150 120H322', 'o', 5) + T(124, 240, 'Evaporation', { s: 24, b: 1, c: 'dto' });
  s += A('M560 316V236', 'o', 4) + A('M370 176V260', 'b', 5) + A('M425 176V260', 'b', 5) + T(586, 215, 'Precipitation', { a: 'end', s: 24, b: 1, c: 'dtb' });
  s += A('M450 290L350 362L262 388', 'b', 4) + T(330, 410, 'Runoff', { s: 24, b: 1, c: 'dtb' });
  s += T(132, 380, 'Collection', { a: 'middle', s: 24, b: 1, c: 'dt' }) + T(132, 408, '(sea)', { a: 'middle', s: 22, c: 'dt2' });
  svg(440, s, name);
}
waterCycle('The water cycle', 'm1-water-cycle-spheres');
waterCycle('Water cycle: one loop', 'm1-water-cycle');

(function () { // earth layers
  let s = H('Layers of the Earth');
  const cx = 170, cy = 250;
  s += C(cx, cy, 150, 'dfg dsg', 'fill-opacity=".4" stroke-width="3"') + C(cx, cy, 130, 'dfo dso', 'fill-opacity=".4" stroke-width="3"') + C(cx, cy, 85, 'dfr dsr', 'fill-opacity=".4" stroke-width="3"') + C(cx, cy, 40, 'dfy dsy', 'fill-opacity=".6" stroke-width="3"');
  [[240, 129, 330, 95, 'Crust', 'outermost layer', 'dtg'], [271, 213, 330, 190, 'Mantle', 'semi-solid rock', 'dto'], [228, 271, 330, 285, 'Outer core', 'liquid', 'dtr'], [185, 270, 330, 380, 'Inner core', 'solid iron, nickel', 'dty']].forEach(([x, y, lx, ly, n, d, c]) => {
    s += P(`M${x} ${y}L${lx} ${ly - 6}`, 'ds2', 2.5) + C(x, y, 5, 'dfw') + T(lx + 10, ly, n, { s: 26, b: 1, c }) + T(lx + 10, ly + 28, d, { s: 22, c: 'dt' });
  });
  svg(430, s, 'm1-earth-layers');
})();

(function () { // biosphere overlaps the other three
  let s = H('The biosphere overlaps the rest');
  s += band(14, 60, 572, 130, 'dfb dsb', 0.18) + band(14, 190, 572, 100, 'dfb dsb', 0.34) + band(14, 290, 572, 130, 'dfo dso', 0.28);
  s += T(24, 130, 'Atmosphere', { s: 24, b: 1, c: 'dt' }) + T(24, 248, 'Hydrosphere', { s: 24, b: 1, c: 'dt' }) + T(24, 360, 'Lithosphere', { s: 24, b: 1, c: 'dt' });
  s += `<ellipse cx="300" cy="240" rx="110" ry="190" class="dfg dsg" fill-opacity=".38" stroke-width="4"/>`;
  s += T(300, 235, 'Biosphere', { a: 'middle', s: 28, b: 1, c: 'dt' }) + T(300, 268, 'life in all three', { a: 'middle', s: 22, c: 'dt' });
  s += T(576, 130, 'birds', { a: 'end', s: 24, c: 'dt2' }) + T(576, 248, 'fish', { a: 'end', s: 24, c: 'dt2' }) + T(576, 360, 'plants', { a: 'end', s: 24, c: 'dt2' });
  svg(440, s, 'm1-biosphere-diagram');
})();
