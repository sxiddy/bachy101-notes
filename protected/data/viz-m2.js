/* Week 2 widget (Pro): the five species interactions (L8), by who gains and who loses.
 * Definitions and examples are from src/text/m2/evs-w2-08.txt. */
(function () {
  'use strict';
  const T = [
    { k: 'Mutualism', a: '+', b: '+', def: 'Both species benefit. A cooperative relationship that helps survival, growth or reproduction; neither is harmed.',
      ex: [['Bee', 'Flowering plant', 'Bees get nectar for food; plants get pollinated.'], ['Mycorrhizal fungus', 'Plant root', 'The fungus helps roots absorb nutrients and gets carbohydrates back.']] },
    { k: 'Commensalism', a: '+', b: '0', def: 'One species benefits; the other is neither helped nor harmed and carries on unchanged.',
      ex: [['Barnacle', 'Whale', 'Barnacles get mobility and food particles; the whale is unaffected.'], ['Cattle egret', 'Grazing cattle', 'Egrets eat insects stirred up by the cattle; the cattle are unaffected.']] },
    { k: 'Parasitism', a: '+', b: '−', def: 'One species (the parasite) benefits at the expense of the other (the host), using it for food, shelter or reproduction and often weakening it. Ectoparasites live outside, endoparasites inside.',
      ex: [['Tick', 'Mammal', 'Ticks feed on blood, causing irritation and spreading disease.'], ['Parasitic wasp', 'Host insect', 'Wasps lay eggs inside other insects, eventually killing the host.']] },
    { k: 'Predation', a: '+', b: '−', def: 'The predator kills and eats the prey. It regulates population sizes and keeps the ecosystem balanced and diverse.',
      ex: [['Tiger', 'Deer', 'A tiger hunts and eats a deer in the forest.'], ['Hawk', 'Mouse', 'A hawk catches and eats a mouse in a grassland.']] },
    { k: 'Competition', a: '−', b: '−', def: 'Two or more species need the same limited resource (food, water, space, light, nutrients). Within a species it is intraspecific, between species interspecific. Often one dominates and the other declines.',
      ex: [['Tall tree', 'Neighbouring tree', 'Plants compete for sunlight in a dense forest.'], null] }
  ];
  VIZ.register('species-interactions', {
    title: 'Species interactions: who gains, who loses', kind: 'Interactive',
    mount(body, api) {
      const C = api.C;
      const st = { i: 0, e: 0 };
      const s = api.stage('0 0 480 230', body, 'Two species with a plus, minus or zero sign showing how the interaction affects each');
      const g = api.svg('g', null, s);
      const ctl = api.controls();
      api.segmented(T.map((t, i) => ({ value: i, label: t.k })), 0, (v) => { st.i = v; st.e = 0; draw(); }, ctl);
      const exBtn = api.button('Other example', () => { st.e = 1 - st.e; draw(); }, ctl);
      const cap = api.caption('');
      const col = (sg) => (sg === '+' ? C.good : sg === '−' ? C.bad : C.dim);
      const word = (sg) => (sg === '+' ? 'benefits' : sg === '−' ? 'is harmed' : 'unaffected');
      const card = (x, name, sg) => {
        api.svg('rect', { x, y: 18, width: 170, height: 104, rx: 10, fill: C.surface2, stroke: col(sg), 'stroke-width': 2 }, g);
        api.svg('text', { x: x + 85, y: 46, 'font-size': 14, fill: C.white, 'text-anchor': 'middle', 'font-weight': 600, text: name }, g);
        api.svg('text', { x: x + 85, y: 92, 'font-size': 36, fill: col(sg), 'text-anchor': 'middle', 'font-weight': 700, text: sg === '0' ? '0' : sg }, g);
        api.svg('text', { x: x + 85, y: 113, 'font-size': 12, fill: col(sg), 'text-anchor': 'middle', text: word(sg) }, g);
      };
      function draw() {
        const t = T[st.i], ex = t.ex[st.e] || t.ex[0];
        g.innerHTML = '';
        card(30, ex[0], t.a); card(280, ex[1], t.b);
        api.svg('path', { d: 'M206 70 L274 70', stroke: C.line2, 'stroke-width': 2, 'stroke-dasharray': '5 5' }, g);
        // summary strip of all five
        T.forEach((u, j) => {
          const x = 14 + j * 92, on = j === st.i;
          api.svg('rect', { x, y: 150, width: 86, height: 62, rx: 8, fill: on ? C.surface2 : 'none', stroke: on ? C.white : C.line }, g);
          api.svg('text', { x: x + 43, y: 172, 'font-size': 11.5, fill: on ? C.white : C.dim, 'text-anchor': 'middle', text: u.k }, g);
          api.svg('text', { x: x + 43, y: 200, 'font-size': 18, 'font-weight': 700, fill: on ? C.white : C.faint, 'text-anchor': 'middle', text: `${u.a} / ${u.b}` }, g);
        });
        exBtn.disabled = !t.ex[1];
        cap.set(`<b>${t.k} (${t.a} / ${t.b}).</b> ${t.def}<br><small>Example: ${ex[2]}</small>`);
      }
      draw();
    }
  });
})();
