/* Week 5 widgets (Pro): the greenhouse effect, natural vs enhanced (L28–29), and the three carbon-footprint
 * scopes (L30). Values and examples from src/text/m5/evs-w5-28.txt, evs-w5-29.txt and evs-w5-30.txt. */
(function () {
  'use strict';

  const GH = {
    none: { label: 'No greenhouse gases', back: 0, temp: '≈ −18 °C', text: 'Without greenhouse gases the infrared heat from the surface escapes straight to space. Earth would average about <b>−18 °C</b>: a frozen planet.' },
    natural: { label: 'Natural', back: 0.35, temp: '≈ 15 °C', text: '<b>Natural greenhouse effect</b>: short-wave sunlight passes through the air and warms the surface; the surface re-emits long-wave infrared; greenhouse gases absorb it and re-emit it in all directions, some back down. This keeps Earth at about <b>15 °C</b>. It is beneficial and necessary for life.' },
    enhanced: { label: 'Enhanced (human)', back: 0.65, temp: 'Above 15 °C and rising', text: '<b>Enhanced greenhouse effect</b>: human emissions (CO₂ from coal, oil, gas, deforestation and cement; methane; nitrous oxide) raise GHG levels beyond natural levels, so extra heat is trapped. Like piling five blankets on where one keeps you warm. This drives today\'s global warming.' }
  };
  VIZ.register('greenhouse-effect', {
    title: 'The greenhouse effect: natural vs enhanced', kind: 'Animation',
    mount(body, api) {
      const C = api.C;
      const st = { k: 'natural' };
      const s = api.stage('0 0 480 260', body, 'Sunlight reaching the ground and infrared heat leaving; greenhouse gases send part of the heat back down');
      const bg = api.svg('g', null, s), pg = api.svg('g', null, s);
      const ctl = api.controls();
      api.segmented(Object.keys(GH).map((k) => ({ value: k, label: GH[k].label })), st.k, (v) => { st.k = v; scene(); }, ctl);
      const ro = api.readouts();
      const rT = api.readout('Average surface temperature', ro), rB = api.readout('Outgoing heat sent back down', ro);
      const cap = api.caption('');
      const GROUND = 214, LAYER = [70, 120];
      function scene() {
        bg.innerHTML = '';
        const k = GH[st.k];
        api.svg('circle', { cx: 40, cy: 30, r: 20, fill: C.photon }, bg);
        if (k.back > 0) {
          api.svg('rect', { x: 0, y: LAYER[0], width: 480, height: LAYER[1] - LAYER[0], fill: C.an, opacity: 0.08 + k.back * 0.22 }, bg);
          api.svg('text', { x: 470, y: LAYER[0] + 16, 'font-size': 12, fill: C.an, 'text-anchor': 'end', text: st.k === 'enhanced' ? 'Thicker GHG layer (extra blankets)' : 'Greenhouse gases' }, bg);
        }
        api.svg('rect', { x: 0, y: GROUND, width: 480, height: 46, fill: st.k === 'none' ? '#cfe3ef' : st.k === 'enhanced' ? '#7a5a3a' : '#4f7a45' }, bg);
        api.svg('text', { x: 20, y: 245, 'font-size': 12, fill: C.bg, 'font-weight': 700, text: 'Earth\'s surface' }, bg);
        api.svg('text', { x: 300, y: 30, 'font-size': 12, fill: C.photon, text: 'short-wave sunlight in' }, bg);
        api.svg('text', { x: 300, y: 48, 'font-size': 12, fill: C.heat, text: 'long-wave infrared (heat) out' }, bg);
        rT.set(k.temp); rB.set(k.back === 0 ? 'None' : st.k === 'enhanced' ? 'More than natural' : 'Some');
        cap.set(k.text);
      }
      const P = [];
      let acc = 0;
      api.loop((dt) => {
        acc += dt;
        if (acc > 0.22) { acc = 0; P.push({ kind: 'sun', x: 70 + Math.random() * 200, y: 30, n: api.svg('line', { stroke: C.photon, 'stroke-width': 2.5 }, pg) }); }
        const back = GH[st.k].back;
        for (let i = P.length - 1; i >= 0; i--) {
          const p = P[i];
          if (p.kind === 'sun') {
            p.x += 40 * dt; p.y += 120 * dt;
            if (p.y >= GROUND) { p.kind = 'ir'; p.n.remove(); p.n = api.svg('circle', { r: 4, fill: C.heat }, pg); p.vy = -70; p.vx = (Math.random() - 0.5) * 30; p.tried = false; }
            else { p.n.setAttribute('x1', p.x - 8); p.n.setAttribute('y1', p.y - 24); p.n.setAttribute('x2', p.x); p.n.setAttribute('y2', p.y); continue; }
          }
          p.x += p.vx * dt; p.y += p.vy * dt;
          if (!p.tried && p.vy < 0 && p.y < LAYER[1]) { p.tried = true; if (Math.random() < back) { p.vy = 70; p.n.setAttribute('fill', C.cat); } }
          if (p.vy > 0 && p.y >= GROUND - 2) { p.vy = -70; p.tried = false; p.n.setAttribute('fill', C.heat); }
          if (p.y < -10 || p.x < -10 || p.x > 490) { p.n.remove(); P.splice(i, 1); continue; }
          p.n.setAttribute('cx', p.x); p.n.setAttribute('cy', p.y);
        }
        while (P.length > 120) { P[0].n.remove(); P.shift(); }
      });
      scene();
    }
  });

  const ITEMS = [
    ['Fuel burnt in the company\'s boilers', 1], ['Company-owned delivery vehicles', 1], ['Furnaces run on site', 1],
    ['Electricity bought from the grid', 2], ['Purchased steam or heat', 2],
    ['Extracting the raw materials', 3], ['Suppliers manufacturing parts', 3], ['Transporting goods (not company-owned)', 3], ['Customers using the product', 3], ['End-of-life disposal of the product', 3]
  ];
  const SCOPE = {
    1: ['Scope 1: direct', 'from sources the organisation owns or controls'],
    2: ['Scope 2: indirect energy', 'from making the electricity, heat or steam it buys; emitted at the power plant but counted for the consumer'],
    3: ['Scope 3: other indirect', 'everywhere else in the value chain; often the largest share of a product\'s footprint']
  };
  VIZ.register('carbon-scopes', {
    title: 'Sort the emissions into Scope 1, 2 and 3', kind: 'Quiz',
    mount(body, api) {
      const C = api.C;
      const st = { i: 0, score: 0, placed: { 1: [], 2: [], 3: [] }, msg: '' };
      const order = ITEMS.map((_, j) => j).sort(() => Math.random() - 0.5);
      const s = api.stage('0 0 480 230', body, 'Three bins for Scope 1, 2 and 3 emissions with the examples sorted into them');
      const g = api.svg('g', null, s);
      const ctl = api.controls();
      const btns = [1, 2, 3].map((k) => api.button('Scope ' + k, () => pick(k), ctl));
      api.button('Restart', () => { st.i = 0; st.score = 0; st.placed = { 1: [], 2: [], 3: [] }; st.msg = ''; draw(); }, ctl);
      const ro = api.readouts();
      const rQ = api.readout('Which scope?', ro), rS = api.readout('Score', ro);
      const cap = api.caption('');
      function pick(k) {
        if (st.i >= order.length) return;
        const it = ITEMS[order[st.i]];
        const ok = it[1] === k;
        if (ok) st.score++;
        st.placed[it[1]].push(it[0]);
        st.msg = (ok ? '<b>Right.</b> ' : `<b>Not quite: Scope ${it[1]}.</b> `) + `${it[0]}: ${SCOPE[it[1]][0].split(': ')[1]} emissions, ${SCOPE[it[1]][1]}.`;
        st.i++; draw();
      }
      function draw() {
        g.innerHTML = '';
        [1, 2, 3].forEach((k, j) => {
          const x = 8 + j * 158;
          api.svg('rect', { x, y: 8, width: 150, height: 214, rx: 10, fill: C.surface, stroke: [C.cat, C.e, C.good][j] }, g);
          const [h1, h2] = SCOPE[k][0].split(': ');
          api.svg('text', { x: x + 75, y: 28, 'font-size': 13, fill: C.white, 'font-weight': 700, 'text-anchor': 'middle', text: h1 }, g);
          api.svg('text', { x: x + 75, y: 44, 'font-size': 11.5, fill: C.dim, 'text-anchor': 'middle', text: h2 }, g);
          let y = 66;
          st.placed[k].forEach((name) => {
            // wrap to ~24 characters per line
            const lines = [''];
            name.split(' ').forEach((w) => { if ((lines[lines.length - 1] + ' ' + w).trim().length > 24) lines.push(w); else lines[lines.length - 1] = (lines[lines.length - 1] + ' ' + w).trim(); });
            lines.forEach((ln, n) => { api.svg('text', { x: x + 8, y, 'font-size': 11, fill: C.text, text: (n ? '  ' : '• ') + ln }, g); y += 14; });
            y += 3;
          });
        });
        const done = st.i >= order.length;
        btns.forEach((b) => { b.disabled = done; });
        rQ.set(done ? 'All sorted' : ITEMS[order[st.i]][0]);
        rS.set(`${st.score} / ${st.i}`);
        cap.set(done ? `${st.msg}<br>Finished: ${st.score} of ${order.length}. Scope 1 = direct (owned), Scope 2 = bought energy, Scope 3 = the rest of the value chain.` : (st.msg || 'Pick the scope for the emission shown above.'));
      }
      draw();
    }
  });
})();
