/* Week 4 widget (Pro): the three Kyoto flexible mechanisms (L25), from src/text/m4/evs-w4-25.txt §5.1. */
(function () {
  'use strict';
  const M = {
    et: { name: 'Emissions Trading', a: ['Annex I country', 'beat its target'], b: ['Annex I country', 'struggling to meet its target'],
      top: 'Surplus emission units (1 unit = right to emit 1 t CO₂e)', bottom: 'Payment', topDir: 1, where: 'Wherever cutting is cheapest', earn: 'The over-achiever is paid for its surplus',
      text: 'Also called cap-and-trade or carbon trading. A country that cut emissions below its assigned target sells its surplus units to a country that is struggling. Over-achievement is rewarded and reductions happen wherever they are cheapest globally, like a stock market where the commodity is the right to emit one tonne of CO₂-equivalent.' },
    ji: { name: 'Joint Implementation (JI)', a: ['Annex I country', 'investor'], b: ['Another Annex I country', 'host of the project'],
      top: 'Investment in an emission-reduction project', bottom: 'Credits toward the investor\'s target', topDir: 1, where: 'In another Annex I (developed) country', earn: 'Credits for the investing Annex I country',
      text: 'One Annex I country invests in an emission-reduction project in another Annex I country and earns credits toward its own target. Most common in Eastern Europe, where ageing Soviet-era industries could be modernised cheaply for large reductions.' },
    cdm: { name: 'Clean Development Mechanism (CDM)', a: ['Annex I country', 'investor'], b: ['Developing country', 'host of the project'],
      top: 'Investment + technology for a clean project', bottom: 'Certified Emission Reductions (CERs)', topDir: 1, where: 'In a developing (non-Annex I) country', earn: 'CERs (carbon credits) for the investor; investment and technology for the host',
      text: 'The most important mechanism for developing countries. An Annex I country funds a clean energy or efficiency project in a developing country, e.g. wind farms, solar plants, methane capture from landfills, and earns Certified Emission Reductions to use against its own target. In theory both sides gain.' }
  };
  VIZ.register('kyoto-mechanisms', {
    title: 'Kyoto\'s three flexible mechanisms', kind: 'Animation',
    mount(body, api) {
      const C = api.C;
      const st = { m: 'et' };
      const s = api.stage('0 0 480 230', body, 'Two countries exchanging emission units or investment one way and credits or payment the other way');
      const g = api.svg('g', null, s), tok = api.svg('g', null, s);
      const ctl = api.controls();
      api.segmented([{ value: 'et', label: 'Emissions Trading' }, { value: 'ji', label: 'JI' }, { value: 'cdm', label: 'CDM' }], st.m, (v) => { st.m = v; draw(); }, ctl);
      const ro = api.readouts();
      const rWhere = api.readout('Where the cut happens', ro), rEarn = api.readout('Who gets what', ro);
      const cap = api.caption('');
      const box = (x, lines, c) => {
        api.svg('rect', { x, y: 70, width: 150, height: 86, rx: 10, fill: C.surface2, stroke: c, 'stroke-width': 2 }, g);
        api.svg('text', { x: x + 75, y: 106, 'font-size': 14, fill: C.white, 'font-weight': 600, 'text-anchor': 'middle', text: lines[0] }, g);
        api.svg('text', { x: x + 75, y: 128, 'font-size': 12, fill: C.dim, 'text-anchor': 'middle', text: lines[1] }, g);
      };
      function draw() {
        const m = M[st.m];
        g.innerHTML = '';
        box(14, m.a, C.e); box(316, m.b, st.m === 'cdm' ? C.good : C.e);
        api.svg('path', { d: 'M170 92 L310 92', stroke: C.line2, 'stroke-width': 2 }, g);
        api.svg('path', { d: 'M170 134 L310 134', stroke: C.line2, 'stroke-width': 2 }, g);
        const topIsUnits = st.m === 'et';
        // top row always runs left to right (units sold, or money invested); bottom row runs back (payment, or credits)
        api.svg('text', { x: 240, y: 42, 'font-size': 12, fill: topIsUnits ? C.e : C.good, 'text-anchor': 'middle', text: '→ ' + m.top }, g);
        api.svg('text', { x: 240, y: 186, 'font-size': 12, fill: topIsUnits ? C.good : C.e, 'text-anchor': 'middle', text: '← ' + m.bottom }, g);
        api.svg('text', { x: 240, y: 222, 'font-size': 13, fill: C.white, 'font-weight': 700, 'text-anchor': 'middle', text: m.name }, g);
        rWhere.set(m.where); rEarn.set(m.earn);
        cap.set(m.text);
      }
      // tokens: top row moves a -> b, bottom row moves b -> a
      let t = 0;
      api.loop((dt) => {
        t = (t + dt * 0.35) % 1;
        tok.innerHTML = '';
        const unitsTop = st.m === 'et';
        for (let k = 0; k < 3; k++) {
          const p = (t + k / 3) % 1;
          const x1 = 176 + p * 128, x2 = 304 - p * 128;
          const topC = unitsTop ? C.e : C.good, botC = unitsTop ? C.good : C.e;
          api.svg('rect', { x: x1 - 9, y: 85, width: 18, height: 14, rx: 3, fill: topC }, tok);
          api.svg('circle', { cx: x2, cy: 134, r: 7, fill: botC }, tok);
        }
      });
      draw();
    }
  });
})();
