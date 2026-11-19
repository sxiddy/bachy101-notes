/* Week 6 widgets (Pro): pumped storage hydropower (L33) and the geothermal plant picker (L33).
 * Values from src/text/m6/evs-w6-33-2_*.txt: Kadamparai 400 MW; dry steam = natural steam, The Geysers;
 * flash = water above 180 °C, most common; binary = 100–180 °C, isobutane/pentane, near-zero emissions. */
(function () {
  'use strict';

  VIZ.register('pumped-storage', {
    title: 'Pumped storage: a giant rechargeable battery', kind: 'Animation',
    mount(body, api) {
      const C = api.C;
      const st = { mode: 'gen', up: 0.6 };
      const s = api.stage('0 0 480 260', body, 'Upper and lower reservoirs joined by a pipe through a pump-turbine; water moves up or down depending on demand');
      const g = api.svg('g', null, s), pg = api.svg('g', null, s);
      const ctl = api.controls();
      api.segmented([{ value: 'pump', label: 'Low demand: pump up' }, { value: 'gen', label: 'Peak demand: generate' }], st.mode, (v) => { st.mode = v; }, ctl);
      const ro = api.readouts();
      const rM = api.readout('Machine works as', ro), rE = api.readout('Electricity', ro), rU = api.readout('Upper reservoir', ro);
      const cap = api.caption('');
      const UP = { x: 20, y: 30, w: 150, h: 70 }, LO = { x: 310, y: 170, w: 150, h: 70 };
      const PATH = [[170, 90], [240, 175], [310, 210]];
      const drops = Array.from({ length: 10 }, (_, i) => i / 10);
      function draw() {
        g.innerHTML = '';
        api.svg('rect', { x: UP.x, y: UP.y, width: UP.w, height: UP.h, fill: 'none', stroke: C.line2, 'stroke-width': 2 }, g);
        api.svg('rect', { x: UP.x, y: UP.y + UP.h * (1 - st.up), width: UP.w, height: UP.h * st.up, fill: C.e, opacity: 0.35 }, g);
        api.svg('rect', { x: LO.x, y: LO.y, width: LO.w, height: LO.h, fill: 'none', stroke: C.line2, 'stroke-width': 2 }, g);
        api.svg('rect', { x: LO.x, y: LO.y + LO.h * st.up, width: LO.w, height: LO.h * (1 - st.up), fill: C.e, opacity: 0.35 }, g);
        api.svg('text', { x: 95, y: 22, 'font-size': 13, fill: C.white, 'text-anchor': 'middle', text: 'Upper reservoir' }, g);
        api.svg('text', { x: 385, y: 162, 'font-size': 13, fill: C.white, 'text-anchor': 'middle', text: 'Lower reservoir' }, g);
        api.svg('polyline', { points: PATH.map((p) => p.join(',')).join(' '), fill: 'none', stroke: C.e, 'stroke-width': 8, opacity: 0.5 }, g);
        api.svg('circle', { cx: 240, cy: 175, r: 18, fill: C.surface2, stroke: st.mode === 'gen' ? C.good : C.warn, 'stroke-width': 3 }, g);
        api.svg('text', { x: 240, y: 214, 'font-size': 12, fill: C.text, 'text-anchor': 'middle', text: 'pump-turbine' }, g);
        const gen = st.mode === 'gen';
        api.svg('line', { x1: 240, y1: 157, x2: 240, y2: 70, stroke: gen ? C.good : C.warn, 'stroke-width': 3 }, g);
        api.svg('text', { x: 250, y: 66, 'font-size': 13, fill: gen ? C.good : C.warn, text: gen ? 'power OUT to grid' : 'surplus power IN from grid' }, g);
        rM.set(gen ? 'Turbine + generator' : 'Pump + motor');
        rE.set(gen ? 'Supplied at peak' : 'Stored (cheap surplus)');
        rU.set(Math.round(st.up * 100) + '% full');
        cap.set(gen
          ? '<b>Peak demand</b>: water flows <b>down</b> through the turbine and makes electricity, just like a storage plant. Potential → kinetic → mechanical → electrical.'
          : '<b>Low demand</b> (for example surplus solar at noon): the machine runs as a pump and lifts water <b>uphill</b>, storing energy as potential energy. Example: <b>Kadamparai, Tamil Nadu (400 MW)</b>.');
      }
      api.loop((dt) => {
        const dir = st.mode === 'gen' ? -1 : 1;
        st.up = api.clamp(st.up + dir * dt * 0.06, 0.05, 0.95);
        pg.innerHTML = '';
        drops.forEach((d, i) => {
          let t = (d + (api.reduced ? 0 : performance.now() / 2500)) % 1;
          if (st.mode === 'pump') t = 1 - t;
          const seg = t < 0.5 ? 0 : 1, u = (t - seg * 0.5) * 2;
          const x = api.lerp(PATH[seg][0], PATH[seg + 1][0], u), y = api.lerp(PATH[seg][1], PATH[seg + 1][1], u);
          api.svg('circle', { cx: x, cy: y, r: 3.5, fill: C.e }, pg);
        });
        draw();
      });
      draw();
    }
  });

  const TYPES = {
    dry: { name: 'Dry steam', col: 'bad', text: 'The reservoir gives <b>natural dry steam</b>, piped <b>straight to the turbine</b>. The <b>simplest and oldest</b> type, but <b>rare</b>. Example: <b>The Geysers, California</b>, the world\'s largest geothermal complex.' },
    flash: { name: 'Flash steam', col: 'cat', text: 'Hot pressurised water <b>above 180 °C</b> is suddenly depressurised in a <b>flash tank</b>; part turns to steam and drives the turbine, the rest is re-injected. The <b>most common</b> type worldwide.' },
    binary: { name: 'Binary cycle', col: 'good', text: 'Water at <b>100–180 °C</b> heats a <b>secondary fluid</b> (isobutane or pentane) in a heat exchanger; that fluid drives the turbine. The geothermal water never touches the turbine and is fully re-injected: <b>almost zero emissions</b>, the most flexible type.' },
    none: { name: 'No power plant', col: 'dim', text: 'Below about 100 °C the lecture names no power plant type. Use the heat <b>directly</b> instead: district heating, greenhouses, aquaculture, hot water, spas, heat pumps.' }
  };
  VIZ.register('geothermal-picker', {
    title: 'Which geothermal plant fits this reservoir?', kind: 'Explorer',
    mount(body, api) {
      const C = api.C;
      const st = { T: 150, dry: false };
      const s = api.stage('0 0 480 150', body, 'A temperature scale from 50 to 300 °C with the range each geothermal plant type uses');
      const g = api.svg('g', null, s);
      const ctl = api.controls();
      api.slider({ label: 'Reservoir temperature', min: 50, max: 300, step: 5, value: st.T, format: (v) => v + ' °C' }, (v) => { st.T = v; draw(); }, ctl);
      api.segmented([{ value: 'water', label: 'Gives hot water' }, { value: 'steam', label: 'Gives natural dry steam' }], 'water', (v) => { st.dry = v === 'steam'; draw(); }, ctl);
      const ro = api.readouts();
      const rP = api.readout('Best plant', ro), rW = api.readout('Fluid at turbine', ro);
      const cap = api.caption('');
      const X = (t) => 20 + (t - 50) / 250 * 440;
      function pick() { if (st.dry) return 'dry'; if (st.T > 180) return 'flash'; if (st.T >= 100) return 'binary'; return 'none'; }
      function draw() {
        g.innerHTML = '';
        const k = pick();
        [[50, 100, 'none', 'direct use'], [100, 180, 'binary', 'binary'], [180, 300, 'flash', 'flash steam']].forEach(([a, b, key, lab]) => {
          api.svg('rect', { x: X(a), y: 40, width: X(b) - X(a), height: 34, fill: C[TYPES[key].col], opacity: k === key ? 0.55 : 0.15 }, g);
          api.svg('text', { x: (X(a) + X(b)) / 2, y: 62, 'font-size': 13, fill: C.white, 'text-anchor': 'middle', text: lab }, g);
        });
        [50, 100, 180, 300].forEach((t) => api.svg('text', { x: X(t), y: 94, 'font-size': 12, fill: C.dim, 'text-anchor': 'middle', text: t + ' °C' }, g));
        api.svg('line', { x1: X(st.T), y1: 30, x2: X(st.T), y2: 82, stroke: C.white, 'stroke-width': 3 }, g);
        if (st.dry) api.svg('text', { x: 240, y: 126, 'font-size': 14, fill: C.bad, 'text-anchor': 'middle', text: 'Natural dry steam → dry steam plant (temperature scale not needed)' }, g);
        api.svg('text', { x: 240, y: 20, 'font-size': 13, fill: C.text, 'text-anchor': 'middle', text: 'Plant types by reservoir temperature' }, g);
        rP.set(TYPES[k].name);
        rW.set({ dry: 'Geothermal steam', flash: 'Flashed geothermal steam', binary: 'Isobutane / pentane', none: '—' }[k]);
        cap.set(TYPES[k].text + ' In every plant the cooled water goes back down the <b>injection well</b> to keep reservoir pressure.');
      }
      draw();
    }
  });
})();
