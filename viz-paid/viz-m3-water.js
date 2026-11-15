/* Week 3 widgets (Pro): temperature inversion trapping smog (L14 case studies: London 1952, Delhi winters)
 * and the three stages of wastewater treatment (L15, figures from src/text/m3/evs-w3-15.txt). */
(function () {
  'use strict';

  VIZ.register('temp-inversion', {
    title: 'Temperature inversion: why winter smog gets trapped', kind: 'Animation',
    mount(body, api) {
      const C = api.C;
      const st = { mode: 'normal' };
      const s = api.stage('0 0 480 270', body, 'A city with smoke rising freely, or trapped under a warm layer of air during an inversion');
      const bg = api.svg('g', null, s), pg = api.svg('g', null, s), fg = api.svg('g', null, s);
      const ctl = api.controls();
      api.segmented([{ value: 'normal', label: 'Normal day' }, { value: 'inv', label: 'Inversion' }], st.mode, (v) => { st.mode = v; reset(); }, ctl);
      const ro = api.readouts();
      const rAir = api.readout('Air temperature with height', ro), rSmoke = api.readout('Smoke', ro);
      const cap = api.caption('');
      const LID = 112, GROUND = 228;
      const P = [];
      function scene() {
        bg.innerHTML = ''; fg.innerHTML = '';
        const inv = st.mode === 'inv';
        if (inv) {
          api.svg('rect', { x: 0, y: LID - 34, width: 380, height: 34, fill: C.heat, opacity: 0.16 }, bg);
          api.svg('text', { x: 10, y: LID - 14, 'font-size': 12.5, fill: C.heat, text: 'Warm layer acts as a lid' }, bg);
          api.svg('rect', { x: 0, y: LID, width: 380, height: GROUND - LID, fill: C.e, opacity: 0.08 }, bg);
          api.svg('text', { x: 10, y: LID + 18, 'font-size': 12.5, fill: C.e, text: 'Cold, heavy air near the ground' }, bg);
        }
        api.svg('rect', { x: 0, y: GROUND, width: 480, height: 42, fill: C.graphite }, bg);
        [[40, 40, 70], [96, 30, 50], [140, 44, 90], [200, 34, 60], [250, 40, 80], [310, 30, 54]].forEach(([x, w, h]) => api.svg('rect', { x, y: GROUND - h, width: w, height: h, fill: C.surface2, stroke: C.line2 }, bg));
        api.svg('rect', { x: 340, y: GROUND - 96, width: 12, height: 96, fill: C.metal }, bg);
        // temperature-height profile on the right
        api.svg('line', { x1: 400, y1: GROUND, x2: 400, y2: 14, stroke: C.line2 }, fg);
        api.svg('line', { x1: 400, y1: GROUND, x2: 470, y2: GROUND, stroke: C.line2 }, fg);
        api.svg('text', { x: 404, y: 22, 'font-size': 11, fill: C.dim, text: 'height' }, fg);
        api.svg('text', { x: 470, y: GROUND + 14, 'font-size': 11, fill: C.dim, 'text-anchor': 'end', text: 'temp →' }, fg);
        const d = inv ? `M412 ${GROUND} L452 ${LID} L420 20` : `M460 ${GROUND} L414 20`;
        api.svg('path', { d, fill: 'none', stroke: inv ? C.heat : C.good, 'stroke-width': 2.5 }, fg);
        rAir.set(inv ? 'Rises up to the lid, then falls' : 'Falls steadily with height');
        rSmoke.set(inv ? 'Trapped near the ground' : 'Rises and spreads out');
        cap.set(inv
          ? 'In an inversion a warmer layer sits above cold ground air, so the polluted air cannot rise. Smoke, dust and fog pile up near the ground. <b>London, December 1952</b>: fog + coal smoke + inversion → about 4,000 deaths in 5 days (12,000 long-term), leading to the Clean Air Act 1956. <b>Delhi winters</b>: stubble burning, vehicles and dust under an inversion push the AQI above 400.'
          : 'Normally the air gets cooler with height, so warm polluted air from chimneys and traffic rises, mixes and spreads out.');
      }
      function reset() { P.length = 0; pg.innerHTML = ''; scene(); }
      let acc = 0;
      api.loop((dt) => {
        acc += dt;
        if (acc > 0.08 && P.length < 160) {
          acc = 0;
          const src = Math.random() < 0.5 ? [346, GROUND - 98] : [40 + Math.random() * 300, GROUND - 4];
          P.push({ x: src[0], y: src[1], vx: (Math.random() - 0.5) * 14, vy: -22 - Math.random() * 18, n: api.svg('circle', { r: 3 + Math.random() * 3, fill: C.metal, opacity: 0.55 }, pg) });
        }
        const inv = st.mode === 'inv';
        for (let i = P.length - 1; i >= 0; i--) {
          const p = P[i];
          p.x += p.vx * dt; p.y += p.vy * dt;
          if (inv && p.y < LID + 6) { p.y = LID + 6 + Math.random() * 4; p.vy = Math.abs(p.vy) * 0.15; p.vx = (Math.random() - 0.5) * 30; }
          if (inv && p.y > GROUND - 6) { p.vy = -Math.abs(p.vy) - 4; }
          if (p.x < 0 || p.x > 385) p.vx = -p.vx;
          if (!inv && p.y < -10) { p.n.remove(); P.splice(i, 1); continue; }
          p.n.setAttribute('cx', p.x); p.n.setAttribute('cy', p.y);
        }
      });
      reset();
    }
  });

  const STAGES = [
    { k: 'Raw sewage', type: '', items: ['Untreated wastewater: debris, grit, suspended solids, dissolved organic matter (high BOD), nutrients, pathogens and dissolved chemicals.'], ss: 0, bod: 0, tint: 0, out: 'Nothing removed yet' },
    { k: 'Primary', type: 'Physical', items: ['<b>Screening</b>: bars and screens remove large debris (rags, sticks, plastics).', '<b>Grit chamber</b>: removes sand, grit and heavy particles.', '<b>Sedimentation tank</b> (primary clarifier): suspended solids settle as primary sludge.'], ss: 60, bod: 30, tint: 1, out: '~60% of suspended solids, ~30% of BOD removed' },
    { k: 'Secondary', type: 'Biological', items: ['<b>Activated sludge process</b>: microorganisms consume dissolved organic matter.', '<b>Trickling filters</b>: wastewater trickles over rocks/media coated with biofilm.', '<b>Rotating biological contactors</b>: spinning discs carrying microbial biofilm.'], ss: 90, bod: 90, tint: 2, out: '85–95% of BOD and most suspended solids removed' },
    { k: 'Tertiary', type: 'Advanced', items: ['<b>Nutrient removal</b>: biological/chemical removal of nitrogen and phosphorus.', '<b>UV disinfection / chlorination</b>: kills remaining pathogens.', '<b>Reverse osmosis / membrane filtration</b>: removes dissolved chemicals.'], ss: 98, bod: 97, tint: 3, out: 'Near-drinking quality effluent' }
  ];
  VIZ.register('sewage-treatment', {
    title: 'Wastewater treatment: what each stage removes', kind: 'Step-through',
    mount(body, api) {
      const C = api.C;
      const st = { i: 0 };
      const s = api.stage('0 0 480 210', body, 'Four tanks in a row from raw sewage to treated water; the water gets clearer at each stage');
      const g = api.svg('g', null, s);
      const ctl = api.controls();
      api.button('◀ Back', () => { st.i = Math.max(0, st.i - 1); draw(); }, ctl);
      api.button('Next stage ▶', () => { st.i = Math.min(3, st.i + 1); draw(); }, ctl, { primary: true });
      const dots = api.stepper(4, (i) => { st.i = i; draw(); });
      const ro = api.readouts();
      const rOut = api.readout('Outcome', ro);
      const cap = api.caption('');
      const water = ['#6b5a3a', '#7a6c48', '#5d7f86', '#7cc0ff'];
      function draw() {
        g.innerHTML = '';
        STAGES.forEach((S, j) => {
          const x = 14 + j * 118, on = j === st.i, done = j <= st.i;
          api.svg('rect', { x, y: 30, width: 100, height: 70, rx: 6, fill: C.surface, stroke: on ? C.white : C.line2, 'stroke-width': on ? 2 : 1 }, g);
          api.svg('rect', { x: x + 4, y: 52, width: 92, height: 44, rx: 4, fill: water[done ? S.tint : 0], opacity: done ? 0.9 : 0.25 }, g);
          api.svg('text', { x: x + 50, y: 22, 'font-size': 12.5, fill: on ? C.white : C.dim, 'text-anchor': 'middle', 'font-weight': 600, text: S.k }, g);
          if (S.type) api.svg('text', { x: x + 50, y: 118, 'font-size': 11.5, fill: on ? C.photon : C.faint, 'text-anchor': 'middle', text: S.type }, g);
          if (j < 3) api.svg('path', { d: `M${x + 102} 74 L${x + 116} 74`, stroke: done && j < st.i ? C.e : C.line2, 'stroke-width': 3 }, g);
        });
        const S = STAGES[st.i];
        [['Suspended solids removed', S.ss, C.cat], ['BOD removed', S.bod, C.good]].forEach(([lab, v, c], j) => {
          const y = 140 + j * 34;
          api.svg('text', { x: 14, y: y + 13, 'font-size': 12, fill: C.text, text: lab }, g);
          api.svg('rect', { x: 190, y, width: 270, height: 18, rx: 4, fill: C.line }, g);
          api.svg('rect', { x: 190, y, width: 2.7 * v, height: 18, rx: 4, fill: c }, g);
        });
        dots.set(st.i);
        rOut.set(S.out);
        cap.set(`<b>${S.k}${S.type ? ' treatment (' + S.type.toLowerCase() + ')' : ''}.</b><br>` + S.items.join('<br>'));
      }
      draw();
    }
  });
})();
