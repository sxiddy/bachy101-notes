/* Week 3 widget (Pro): the Air Quality Index bands. Bands, colours and advice are the table in the notes (0–500 scale). */
(function () {
  'use strict';
  const BANDS = [
    [0, 50, 'Good', 'Green', '#4caf50', 'Air quality satisfactory'],
    [51, 100, 'Acceptable', 'Yellow', '#f2d34a', 'Some sensitive groups affected'],
    [101, 200, 'Unhealthy (sensitive groups)', 'Orange', '#f39a3d', 'Sensitive groups limit outdoor activity'],
    [201, 300, 'Unhealthy', 'Red', '#e5534b', 'Everyone nearby affected'],
    [301, 400, 'Very unhealthy', 'Purple', '#9b59d0', 'Health alert; avoid outdoor activity'],
    [401, 500, 'Hazardous', 'Maroon', '#a83245', 'Emergency for the whole population']
  ];
  VIZ.register('aqi-bands', {
    title: 'Air Quality Index: what the number means', kind: 'Interactive',
    mount(body, api) {
      const C = api.C;
      const st = { v: 150 };
      const X0 = 20, K = 440 / 500;
      const s = api.stage('0 0 480 150', body, 'The AQI scale from 0 to 500 in six coloured bands with a marker');
      const g = api.svg('g', null, s);
      const ctl = api.controls();
      api.slider({ label: 'AQI reading', min: 0, max: 500, step: 1, value: st.v, format: (v) => String(v) }, (v) => { st.v = v; draw(); }, ctl);
      const ro = api.readouts();
      const rCat = api.readout('Category', ro), rCol = api.readout('Colour', ro), rAdv = api.readout('Advice', ro);
      const band = (v) => BANDS.find((b) => v <= b[1]) || BANDS[5];
      function draw() {
        g.innerHTML = '';
        const cur = band(st.v);
        BANDS.forEach((b) => api.svg('rect', { x: X0 + (b[0] ? b[0] - 1 : 0) * K, y: 62, width: (b[1] - (b[0] ? b[0] - 1 : 0)) * K, height: 34, fill: b[4], opacity: b === cur ? 1 : 0.38 }, g));
        [0, 100, 200, 300, 400, 500].forEach((t) => api.svg('text', { x: X0 + t * K, y: 120, 'font-size': 13, fill: C.dim, 'text-anchor': 'middle', text: t }, g));
        const mx = X0 + st.v * K;
        api.svg('path', { d: `M${mx - 9} 36 L${mx + 9} 36 L${mx} 56 Z`, fill: C.white }, g);
        api.svg('text', { x: Math.min(450, Math.max(30, mx)), y: 26, 'font-size': 16, 'font-weight': 700, fill: C.white, 'text-anchor': 'middle', text: st.v }, g);
        api.svg('text', { x: 240, y: 144, 'font-size': 12.5, fill: C.text, 'text-anchor': 'middle', text: 'The scale runs 0 to 500 and combines 5–8 key pollutants.' }, g);
        rCat.set(cur[2]); rCol.set(cur[3]); rAdv.set(cur[5]);
      }
      draw();
    }
  });
})();
