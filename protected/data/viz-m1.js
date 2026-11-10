/* Week 1 widgets (Pro): the 10% law of energy flow, and DDT biomagnification up a food chain.
 * Every number comes from the notes (energy-flow topic, "The 10% law"; food-chain topic, "Biomagnification"). */
(function () {
  'use strict';
  const nf = (v) => (Math.round(v * 10) / 10).toLocaleString('en-US');
  const txt = (api, p, x, y, s, o) => api.svg('text', Object.assign({ x, y, 'font-size': 14, fill: api.C.text, text: s }, o || {}), p);

  VIZ.register('energy-10pct', {
    title: 'The 10% law: energy up the food chain', kind: 'Interactive',
    mount(body, api) {
      const C = api.C;
      const st = { e: 10000, p: 10 };
      const s = api.stage('0 0 480 262', body, 'Bars showing how little energy reaches each higher trophic level');
      const g = api.svg('g', null, s);
      const ctl = api.controls();
      api.slider({ label: 'Energy in producers', min: 1000, max: 100000, step: 1000, value: st.e, format: (v) => nf(v) + ' kJ' }, (v) => { st.e = v; draw(); }, ctl);
      api.slider({ label: 'Passed to the next level', min: 5, max: 20, step: 1, value: st.p, format: (v) => v + ' %' }, (v) => { st.p = v; draw(); }, ctl);
      const ro = api.readouts();
      const rTop = api.readout('Reaches tertiary consumers', ro), rLost = api.readout('Lost at each step', ro);
      const names = ['Producers', 'Primary consumers', 'Secondary consumers', 'Tertiary consumers'];
      const cols = [C.good, C.e, C.cat, C.hole];
      function draw() {
        g.innerHTML = '';
        for (let i = 0; i < 4; i++) {
          const v = st.e * Math.pow(st.p / 100, i), y = 10 + i * 56, w = Math.max(3, 250 * v / st.e);
          txt(api, g, 10, y + 14, names[i], { fill: C.dim });
          api.svg('rect', { x: 10, y: y + 22, width: w, height: 24, rx: 3, fill: cols[i] }, g);
          txt(api, g, 10 + w + 8, y + 40, nf(v) + ' kJ', { fill: C.white, 'font-weight': 600 });
        }
        txt(api, g, 240, 250, (100 - st.p) + ' % is lost at every step: respiration, heat, undigested matter', { 'text-anchor': 'middle', 'font-size': 12.5 });
        rTop.set(nf(st.e * Math.pow(st.p / 100, 3)) + ' kJ'); rLost.set((100 - st.p) + ' %');
      }
      draw();
    }
  });

  VIZ.register('ddt-biomagnification', {
    title: 'DDT builds up at every trophic level', kind: 'Interactive',
    mount(body, api) {
      const C = api.C;
      const names = ['Water / soil', 'Phytoplankton (T1)', 'Small fish (T2)', 'Large fish (T3)', 'Fish-eating birds (T4)'];
      const ppm = [0.000003, 0.04, 0.5, 2.0, 25];
      const label = ['0.000003 ppm', '0.04 ppm', '0.5 ppm', '2.0 ppm', '25 ppm'];
      const factor = ['baseline', '~13,000×', '~167,000×', '~667,000×', '~8 million×'];
      const st = { k: 4 };
      const s = api.stage('0 0 480 280', body, 'Bars on a log scale showing DDT concentration rising from water to fish-eating birds');
      const g = api.svg('g', null, s);
      const ctl = api.controls();
      api.slider({ label: 'Follow DDT up to', min: 0, max: 4, step: 1, value: st.k, format: (v) => names[v] }, (v) => { st.k = v; draw(); }, ctl);
      const ro = api.readouts();
      const rC = api.readout('DDT concentration', ro), rF = api.readout('Compared with water', ro);
      const lo = Math.log10(ppm[0]) - 0.1, hi = Math.log10(ppm[4]);
      function draw() {
        g.innerHTML = '';
        for (let i = 0; i < 5; i++) {
          const y = 8 + i * 50, w = 12 + 330 * (Math.log10(ppm[i]) - lo) / (hi - lo), on = i <= st.k;
          txt(api, g, 10, y + 14, names[i], { fill: on ? C.white : C.dim });
          txt(api, g, 470, y + 14, label[i], { fill: on ? C.white : C.dim, 'text-anchor': 'end', 'font-weight': 600 });
          api.svg('rect', { x: 10, y: y + 22, width: w, height: 16, rx: 3, fill: on ? (i === st.k ? C.heat : C.cat) : C.line2 }, g);
        }
        txt(api, g, 240, 272, 'Log scale: the real gap between the top and bottom bar is about 8 million times.', { 'text-anchor': 'middle', 'font-size': 12 });
        rC.set(label[st.k]); rF.set(factor[st.k]);
      }
      draw();
    }
  });
})();
