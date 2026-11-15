/* Week 1 widgets (Pro): the carbon, nitrogen and phosphorus cycles (L4), and ecological succession (L6).
 * Every step and number is from the lecture text: src/text/m1/evs-w1-04.txt (cycles) and evs-w1-06.txt (succession). */
(function () {
  'use strict';
  const txt = (api, p, x, y, s, o) => api.svg('text', Object.assign({ x, y, 'font-size': 13, fill: api.C.text, 'text-anchor': 'middle', text: s }, o || {}), p);

  const CYCLES = {
    carbon: {
      nodes: { atm: [240, 34, 'Atmosphere (CO₂)'], life: [90, 150, 'Plants, animals, microbes'], soil: [175, 262, 'Dead matter and soil'], fossil: [395, 262, 'Fossil fuels, biomass'], ocean: [395, 150, 'Oceans'] },
      steps: [
        ['atm', 'life', 'Photosynthesis', 'Plants capture CO₂ from the air and turn it into organic compounds: energy-rich biomass.'],
        ['life', 'atm', 'Respiration', 'Plants, animals and microbes breathe CO₂ back out. This balances the carbon taken in by photosynthesis.'],
        ['life', 'soil', 'Death', 'Dead organisms carry their carbon to the soil, where decomposers start on it.'],
        ['soil', 'atm', 'Decomposition', 'Microbes break down dead matter and return carbon to the soil and the air, recycling nutrients.'],
        ['fossil', 'atm', 'Combustion', 'Burning fossil fuels and biomass releases stored carbon fast. This is a major contributor to global warming.'],
        ['atm', 'ocean', 'Ocean uptake', 'Oceans are major carbon sinks and absorb large amounts of CO₂, but too much causes ocean acidification.']
      ],
      foot: 'Deforestation and industrial emissions have disrupted this cycle.'
    },
    nitrogen: {
      nodes: { n2: [240, 34, 'Atmosphere (N₂)'], nh3: [80, 150, 'Ammonia (NH₃)'], no2: [190, 262, 'Nitrites (NO₂⁻)'], no3: [380, 262, 'Nitrates (NO₃⁻)'], life: [400, 150, 'Plants, then consumers'] },
      steps: [
        ['n2', 'nh3', 'Nitrogen fixation', 'Bacteria or lightning convert inert N₂ into ammonia, a form plants can use.'],
        ['nh3', 'no2', 'Nitrification (1)', 'Bacteria convert ammonia into nitrites.'],
        ['no2', 'no3', 'Nitrification (2)', 'Bacteria convert nitrites into nitrates, which plants absorb.'],
        ['no3', 'life', 'Assimilation', 'Plants use nitrates to make amino acids and proteins. Consumers get nitrogen by eating the plants.'],
        ['life', 'nh3', 'Decomposition', 'When organisms die, decomposition returns their nitrogen to the soil as ammonia.'],
        ['no3', 'n2', 'Denitrification', 'Specific bacteria convert nitrates back to N₂ gas and release it to the air. This completes the cycle.']
      ],
      foot: 'Too much fertiliser disrupts this cycle: eutrophication and water pollution.'
    },
    phosphorus: {
      nodes: { rock: [80, 60, 'Phosphate-rich rocks'], soil: [240, 150, 'Phosphate in soil, water'], plant: [400, 60, 'Plants'], animal: [400, 250, 'Animals'], sed: [80, 250, 'Sediments'] },
      steps: [
        ['rock', 'soil', 'Weathering', 'Weathering of phosphate-rich rocks releases phosphate ions into soil and water. Life needs them for ATP, DNA and cell membranes.'],
        ['soil', 'plant', 'Uptake', 'Plants absorb phosphates from the soil and build them into biological molecules.'],
        ['plant', 'animal', 'Food chain', 'Phosphates move along the food chain as animals eat plants.'],
        ['animal', 'soil', 'Decomposition', 'Dead plants and animals decompose. Microorganisms mineralise the organic phosphorus back into the soil or water.'],
        ['soil', 'sed', 'Sedimentation', 'Over time phosphorus builds up in sediments, especially in water bodies.'],
        ['sed', 'rock', 'Geological uplift', 'Uplift slowly brings the sediments back onto land, starting the cycle again.']
      ],
      foot: 'No atmosphere stage. Phosphorus is often the limiting nutrient (freshwater); excess from detergents and fertilisers → algal blooms.'
    }
  };

  VIZ.register('nutrient-cycles', {
    title: 'Nutrient cycles, one step at a time', kind: 'Step-through',
    mount(body, api) {
      const C = api.C;
      const st = { c: 'carbon', i: 0 };
      const s = api.stage('0 0 480 312', body, 'A nutrient cycle drawn as reservoirs joined by arrows; the current step is highlighted');
      const head = api.arrow(s, C.white, 9), dim = api.arrow(s, C.line2, 8);
      const g = api.svg('g', null, s);
      const dot = api.svg('circle', { r: 6, fill: C.photon }, s);
      const ctl = api.controls();
      api.segmented([{ value: 'carbon', label: 'Carbon' }, { value: 'nitrogen', label: 'Nitrogen' }, { value: 'phosphorus', label: 'Phosphorus' }], st.c, (v) => { st.c = v; st.i = 0; draw(); }, ctl);
      api.button('◀ Back', () => { st.i = (st.i + 5) % 6; draw(); }, ctl);
      api.button('Next ▶', () => { st.i = (st.i + 1) % 6; draw(); }, ctl, { primary: true });
      const dots = api.stepper(6, (i) => { st.i = i; draw(); });
      const cap = api.caption('');
      let path = null, t = 0;
      // shorten a line so arrows stop at the edge of the node boxes
      const boxW = (n) => Math.max(96, n[2].length * 7.2);
      // fraction of the centre-to-centre line that lies inside node n's box (plus a small gap)
      const clip = (n, dx, dy) => Math.min((boxW(n) / 2 + 6) / Math.max(1e-6, Math.abs(dx)), 22 / Math.max(1e-6, Math.abs(dy)));
      const ends = (a, b) => {
        const dx = b[0] - a[0], dy = b[1] - a[1], ka = clip(a, dx, dy), kb = clip(b, dx, dy);
        return [a[0] + dx * ka, a[1] + dy * ka, b[0] - dx * kb, b[1] - dy * kb];
      };
      function draw() {
        const cy = CYCLES[st.c];
        g.innerHTML = '';
        cy.steps.forEach((sp, j) => {
          const [x1, y1, x2, y2] = ends(cy.nodes[sp[0]], cy.nodes[sp[1]]);
          const on = j === st.i, bend = 18;
          const mx = (x1 + x2) / 2 + (y2 - y1) / Math.hypot(x2 - x1, y2 - y1) * bend, my = (y1 + y2) / 2 - (x2 - x1) / Math.hypot(x2 - x1, y2 - y1) * bend;
          const d = `M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}`;
          const p = api.svg('path', { d, fill: 'none', stroke: on ? C.photon : C.line2, 'stroke-width': on ? 3 : 1.6, 'marker-end': on ? head : dim }, g);
          if (on) { path = p; t = 0; txt(api, g, mx, my - 6, sp[2], { fill: C.photon, 'font-weight': 700, 'font-size': 13.5, stroke: C.bg2, 'stroke-width': 5, 'paint-order': 'stroke' }); }
        });
        Object.values(cy.nodes).forEach(([x, y, label]) => {
          const w = boxW([0, 0, label]);
          api.svg('rect', { x: x - w / 2, y: y - 16, width: w, height: 32, rx: 7, fill: C.surface2, stroke: C.line2 }, g);
          txt(api, g, x, y + 4.5, label, { fill: C.white, 'font-size': 12.5 });
        });
        if (st.c === 'phosphorus') txt(api, g, 240, 300, 'No gas phase: phosphorus never enters the atmosphere', { fill: C.warn, 'font-size': 12 });
        dots.set(st.i);
        const sp = cy.steps[st.i];
        cap.set(`<b>Step ${st.i + 1} · ${sp[2]}.</b> ${sp[3]}<br><small>${cy.foot}</small>`);
      }
      api.loop((dt) => {
        if (!path) return;
        t = (t + dt * 0.55) % 1;
        const L = path.getTotalLength(), pt = path.getPointAtLength(L * t);
        dot.setAttribute('cx', pt.x); dot.setAttribute('cy', pt.y);
      });
      draw();
    }
  });

  // ---- Ecological succession
  const SUCC = {
    primary: {
      start: 'Bare rock (volcanic eruption, landslide)',
      stages: [
        ['Nudation', 'Bare rock', 'A bare area with no life and no soil. Conditions are the least suitable for life.', 0],
        ['Invasion', 'Pioneers: lichens and mosses', 'Pioneer species attach to weathered rock and secrete mild acids that break it down. Slowly, soil forms.', 1],
        ['Competition', 'Herbs, grasses, low shrubs', 'Once the soil is fertile and moist enough, midsuccessional species move in and compete for space and nutrients.', 2],
        ['Competition', 'Shrubs give way to trees', 'Trees replace the shrubs over the next hundred to thousand years.', 3],
        ['Climax', 'Climax community', 'A stable community. It stays unchanged unless a natural catastrophe or human action disturbs it.', 4]
      ],
      time: ['0', 'early years', 'decades', '100–1000 years', '≈ 1000 years or more']
    },
    secondary: {
      start: 'Cleared land, soil still there (fire, flood, farming)',
      stages: [
        ['Nudation', 'Cleared or abandoned land', 'Life above ground is destroyed but the soil, with seeds and roots, survives. Example: abandoned farmland in North Carolina, USA.', 0.6],
        ['Invasion', 'Herbs and grasses', 'Plants quickly take hold because most nutrients are still in the soil.', 2],
        ['Competition', 'Shrubs', 'Shrubs crowd out the grasses as the community competes for light, space and nutrients.', 2.6],
        ['Competition', 'Young trees', 'Trees grow up through the shrubs and shade them out.', 3],
        ['Climax', 'Mature oak and pine forest', 'The climax community returns: 5–10 times faster than primary succession.', 4]
      ],
      time: ['0', 'first years', 'a few decades', 'decades', '50–200 years']
    }
  };

  VIZ.register('succession', {
    title: 'Ecological succession: bare ground to climax', kind: 'Interactive',
    mount(body, api) {
      const C = api.C;
      const st = { k: 'primary', s: 0 };
      const s = api.stage('0 0 480 250', body, 'A patch of ground changing over time from bare surface to a climax forest');
      const g = api.svg('g', null, s);
      const ctl = api.controls();
      api.segmented([{ value: 'primary', label: 'Primary' }, { value: 'secondary', label: 'Secondary' }], st.k, (v) => { st.k = v; st.s = 0; sl.set(0); draw(); }, ctl);
      const sl = api.slider({ label: 'Stage', min: 0, max: 4, step: 1, value: 0, format: (v) => String(v + 1) + ' of 5' }, (v) => { st.s = v; draw(); }, ctl);
      let play = null;
      api.button('Play ▶', () => {
        if (play) return;
        st.s = 0; sl.set(0); draw();
        play = api.interval(() => { if (st.s >= 4) { clearInterval(play); play = null; return; } st.s++; sl.set(st.s); draw(); }, 1300);
      }, ctl, { primary: true });
      const ro = api.readouts();
      const rStep = api.readout('Process step', ro), rWho = api.readout('Who lives here', ro), rT = api.readout('Time since start', ro);
      const cap = api.caption('');
      // deterministic positions so the scene does not jump around between redraws
      const xs = [40, 78, 112, 150, 188, 226, 262, 300, 338, 372, 410, 444];
      function draw() {
        const S = SUCC[st.k], stage = S.stages[st.s], lvl = stage[3];
        g.innerHTML = '';
        api.svg('rect', { x: 0, y: 0, width: 480, height: 250, fill: C.bg2 }, g);
        const soil = st.k === 'primary' ? Math.min(30, lvl * 9) : 24 + lvl * 2;
        // rock base
        api.svg('path', { d: 'M0 250 L0 205 L60 196 L120 204 L190 192 L260 202 L330 190 L400 200 L480 194 L480 250 Z', fill: C.graphite }, g);
        if (soil > 0) api.svg('rect', { x: 0, y: 200 - soil, width: 480, height: soil + 6, fill: '#5b4632', opacity: 0.95 }, g);
        const ground = 200 - soil;
        xs.forEach((x, i) => {
          if (lvl >= 1 && lvl < 3 && i % 2 === 0) api.svg('ellipse', { cx: x, cy: ground, rx: 9, ry: 3.5, fill: lvl < 2 ? '#a3b18a' : '#6b8f4e' }, g); // lichens / mosses
          if (lvl >= 1 && lvl < 2) api.svg('circle', { cx: x + 14, cy: ground - 1, r: 2.6, fill: '#c9c27a' }, g);
          if (lvl >= 2 && lvl < 4) for (let b = -2; b <= 2; b++) api.svg('path', { d: `M${x + b * 3} ${ground} q${b} -10 ${b * 2} -${12 + (i % 3) * 3}`, stroke: C.good, 'stroke-width': 1.6, fill: 'none' }, g); // grasses
          if (lvl >= 2.5 && lvl < 4 && i % 3 === 2) api.svg('ellipse', { cx: x, cy: ground - 12, rx: 15, ry: 12, fill: '#4f7a45' }, g); // shrubs
          if (lvl >= 3 && i % 3 === 1) {
            const h = lvl >= 4 ? 120 : 64, r = lvl >= 4 ? 30 : 18;
            api.svg('rect', { x: x - 4, y: ground - h, width: 8, height: h, fill: '#6b4f3a' }, g);
            api.svg('circle', { cx: x, cy: ground - h, r, fill: st.k === 'secondary' && i % 2 ? '#2f5d3a' : '#3c7048' }, g);
          }
        });
        if (lvl === 0 || (st.k === 'primary' && lvl < 1)) txt(api, g, 240, 120, S.start, { fill: C.dim, 'font-size': 14 });
        txt(api, g, 10, 22, stage[0].toUpperCase(), { 'text-anchor': 'start', fill: C.photon, 'font-weight': 700, 'font-size': 13 });
        rStep.set(stage[0]); rWho.set(stage[1]); rT.set(S.time[st.s]);
        cap.set(stage[2] + (st.k === 'primary' && st.s === 4 ? ' Primary succession takes about 1000 years or more; secondary takes 50–200 years.' : ''));
      }
      draw();
    }
  });
})();
