// Week 6 (module m7, Green Energy Technologies) diagrams. Run: node tools/figs/batch-m7.js figs-svg
const fs = require('fs'), path = require('path');
const out = process.argv[2] || 'figs-svg';
const mk = (id, cls) => `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto"><path d="M0 0 10 5 0 10z" class="${cls}"/></marker>`;
const DEFS = '<defs>' + [['w', 'dfw'], ['b', 'dfb'], ['y', 'dfy'], ['o', 'dfo'], ['r', 'dfr']].map(([a, b]) => mk(a, b)).join('') + '</defs>';
const svg = (h, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 ${h}">\n${DEFS}\n${body}\n</svg>\n`;
const T = (x, y, s, cls, t, a = '') => `<text x="${x}" y="${y}" font-size="${s}" class="${cls}"${a ? ` text-anchor="${a}"` : ''}>${t}</text>`;
const title = (t) => `<text x="300" y="34" font-size="28" font-weight="700" class="dt" text-anchor="middle">${t}</text>`;

const F = {};

F['m7-pv-cell'] = svg(470, [
  title('Photovoltaic (PV) cell'),
  T(300, 68, 22, 'dty', 'sunlight (photons)', 'middle'),
  '<path d="M200 80 L230 150 M300 80 L300 150 M400 80 L370 150" class="dsy" stroke-width="4" marker-end="url(#y)"/>',
  '<rect x="90" y="160" width="300" height="12" class="dfw"/>', T(400, 172, 22, 'dt2', 'top contact'),
  '<rect x="90" y="172" width="300" height="70" class="dfb" fill-opacity=".3"/>', T(240, 215, 24, 'dtb', 'n-type silicon', 'middle'),
  '<rect x="90" y="242" width="300" height="24" class="dfy" fill-opacity=".35"/>', T(400, 252, 22, 'dty', 'p-n junction:'), T(400, 278, 22, 'dty', 'internal field'),
  '<rect x="90" y="266" width="300" height="90" class="dfr" fill-opacity=".25"/>', T(240, 318, 24, 'dtr', 'p-type silicon', 'middle'),
  '<rect x="90" y="356" width="300" height="12" class="dfw"/>', T(400, 368, 22, 'dt2', 'back contact'),
  '<circle cx="365" cy="254" r="7" class="dfb"/><path d="M365 246 L365 190" class="dsb" stroke-width="3" marker-end="url(#b)"/>', T(350, 210, 22, 'dtb', 'e⁻', 'end'),
  '<path d="M90 166 L40 166 L40 236 M40 292 L40 362 L90 362" fill="none" class="ds" stroke-width="3"/>',
  '<rect x="20" y="236" width="40" height="56" class="df2 ds" stroke-width="2"/>', T(40, 271, 22, 'dt', 'R', 'middle'),
  T(300, 412, 22, 'dt', 'freed electrons flow through the', 'middle'),
  T(300, 446, 22, 'dt', 'external load (R) as direct current', 'middle')
].join('\n'));

F['m7-wind-turbine'] = svg(620, [
  title('Wind turbine (horizontal axis)'),
  T(20, 82, 22, 'dtb', 'wind'),
  '<path d="M20 100 L85 100 M20 140 L85 140 M20 180 L85 180" class="dsb" stroke-width="3" marker-end="url(#b)"/>',
  '<path d="M130 140 L117 56 L137 56 Z M130 140 L117 224 L137 224 Z" class="dfw" fill-opacity=".8"/>',
  '<circle cx="130" cy="140" r="16" class="dfo"/>',
  '<rect x="146" y="108" width="270" height="64" rx="10" class="df2 ds" stroke-width="2"/>',
  '<line x1="146" y1="140" x2="226" y2="140" class="ds" stroke-width="5"/>',
  '<rect x="186" y="130" width="10" height="20" class="dfr"/>',
  '<rect x="226" y="122" width="60" height="36" class="dfy" fill-opacity=".7"/>',
  '<line x1="286" y1="140" x2="316" y2="140" class="ds" stroke-width="3"/>',
  '<rect x="316" y="120" width="70" height="40" class="dfb" fill-opacity=".6"/>',
  '<rect x="392" y="92" width="18" height="16" class="dfo" fill-opacity=".8"/>',
  '<rect x="270" y="172" width="26" height="416" class="df3 ds2" stroke-width="2"/>',
  '<line x1="190" y1="588" x2="380" y2="588" class="ds" stroke-width="3"/>',
  T(130, 256, 22, 'dt', 'rotor blades', 'middle'),
  T(40, 300, 22, 'dto', 'hub (orange)'),
  T(330, 228, 22, 'dt', 'Inside the nacelle:'),
  T(330, 262, 22, 'dt2', 'shaft with brake (red)'),
  T(330, 296, 22, 'dty', 'gearbox: speeds up'),
  T(330, 330, 22, 'dtb', 'generator: electricity'),
  T(330, 364, 22, 'dto', 'controller (on top)'),
  T(330, 420, 22, 'dt', '→ power to the grid'),
  T(310, 520, 22, 'dt2', 'tower')
].join('\n'));

F['m7-hydro-plant'] = svg(560, [
  title('Storage hydropower plant'),
  '<path d="M20 110 L200 110 L200 330 L20 330 Z" class="dfb" fill-opacity=".3"/>',
  T(110, 92, 24, 'dtb', 'reservoir', 'middle'),
  T(110, 214, 22, 'dt', 'potential', 'middle'), T(110, 242, 22, 'dt', 'energy', 'middle'),
  '<path d="M200 80 L240 80 L290 330 L200 330 Z" class="df3 ds" stroke-width="2"/>',
  T(250, 70, 22, 'dt', 'dam'),
  '<rect x="196" y="282" width="12" height="30" class="dfo"/>',
  T(20, 372, 22, 'dto', 'sluice gate'), '<path d="M130 360 L194 304" class="ds2" stroke-width="2"/>',
  '<path d="M208 300 L380 430" class="dsb" stroke-width="12" fill="none"/>',
  T(150, 430, 22, 'dtb', 'penstock:'), T(150, 458, 22, 'dtb', 'kinetic energy'),
  '<rect x="370" y="390" width="210" height="110" class="df2 ds" stroke-width="2"/>',
  T(475, 380, 22, 'dt', 'powerhouse', 'middle'),
  '<circle cx="410" cy="440" r="26" class="dfy" fill-opacity=".6"/>',
  T(410, 492, 22, 'dt', 'turbine', 'middle'),
  '<line x1="436" y1="440" x2="490" y2="440" class="ds" stroke-width="4"/>',
  '<rect x="490" y="416" width="60" height="48" class="dfb" fill-opacity=".6"/>',
  T(520, 492, 22, 'dt', 'generator', 'middle'),
  '<path d="M520 416 L520 230" class="dsy" stroke-width="3" fill="none" marker-end="url(#y)"/>',
  T(580, 160, 22, 'dty', 'transformer →', 'end'), T(580, 188, 22, 'dty', 'transmission lines', 'end'),
  T(580, 216, 22, 'dt2', '(electrical energy)', 'end'),
  '<path d="M370 528 L590 528" class="dsb" stroke-width="6" marker-end="url(#b)"/>',
  T(20, 536, 22, 'dt2', 'water returns to the river')
].join('\n'));

const panel = (y, head, hot, hotCls, body) => `<g transform="translate(0,${y})">` + T(20, 28, 26, 'dt', head) +
  `<rect x="20" y="180" width="560" height="40" class="${hotCls}" fill-opacity=".25"/>` + T(300, 208, 22, 'dt', hot, 'middle') + body + '</g>';

F['m7-geothermal-plants'] = svg(800, [
  title('Geothermal plant types'),
  panel(50, '1. Dry steam (oldest, rare)', 'reservoir gives natural dry steam', 'dfr', [
    '<path d="M70 180 L70 80 L250 80" class="dsr" stroke-width="4" fill="none" marker-end="url(#r)"/>',
    T(90, 70, 22, 'dtr', 'steam'),
    '<rect x="255" y="55" width="90" height="50" class="dfy" fill-opacity=".6"/>', T(300, 135, 22, 'dt', 'turbine + generator', 'middle'),
    '<path d="M345 80 L520 80 L520 175" class="dsb" stroke-width="4" fill="none" marker-end="url(#b)"/>',
    T(400, 70, 22, 'dtb', 'cooled water'), T(90, 165, 22, 'dt2', 'production well'), T(510, 165, 22, 'dt2', 'injection', 'end')
  ].join('')),
  panel(300, '2. Flash steam (most common)', 'hot pressurised water above 180 °C', 'dfo', [
    '<path d="M60 180 L60 85 L110 85" class="dso" stroke-width="4" fill="none" marker-end="url(#o)"/>',
    '<rect x="115" y="55" width="90" height="60" class="dfb" fill-opacity=".3"/>', T(160, 140, 22, 'dt', 'flash tank', 'middle'),
    '<path d="M205 70 L290 70" class="dsr" stroke-width="4" marker-end="url(#r)"/>', T(215, 55, 22, 'dtr', 'steam'),
    '<rect x="295" y="48" width="90" height="45" class="dfy" fill-opacity=".6"/>', T(400, 78, 22, 'dt', 'turbine'),
    '<path d="M195 115 L195 165 L540 165 L540 176" class="dsb" stroke-width="4" fill="none" marker-end="url(#b)"/>', T(240, 155, 22, 'dtb', 'leftover water re-injected')
  ].join('')),
  panel(550, '3. Binary cycle (100–180 °C)', 'moderately hot water', 'dfo', [
    '<path d="M60 180 L60 95 L120 95" class="dso" stroke-width="4" fill="none" marker-end="url(#o)"/>',
    '<rect x="125" y="62" width="110" height="66" class="df2 ds" stroke-width="2"/>', T(180, 102, 22, 'dt', 'HX', 'middle'),
    '<path d="M180 128 L180 165 L540 165 L540 176" class="dsb" stroke-width="4" fill="none" marker-end="url(#b)"/>', T(250, 155, 22, 'dtb', 'all water re-injected'),
    '<path d="M235 85 L330 85" class="dsy" stroke-width="4" marker-end="url(#y)"/>',
    '<rect x="335" y="60" width="90" height="50" class="dfy" fill-opacity=".6"/>', T(440, 92, 22, 'dt', 'turbine'),
    T(125, 56, 22, 'dty', 'heat exchanger → isobutane/pentane')
  ].join(''))
].join('\n'));

for (const [id, s] of Object.entries(F)) fs.writeFileSync(path.join(out, id + '.svg'), s);
console.log('wrote', Object.keys(F).length);
