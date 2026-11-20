CHUNK({
  chunk: 'R',
  module: 'm5',
  topics: [
    {
      id: 'm5-greenhouse-evidence',
      title: 'Greenhouse effect and the evidence for climate change',
      short: 'Greenhouse evidence',
      blurb: 'Natural versus enhanced greenhouse effect, the key gases, and the four independent lines of evidence for human-caused warming.',
      source: 'Lecture W5 (Climate Change Science), pages 1–2',
      tabs: [
        { title: 'Greenhouse effect', html: `
          <p class="lead">Greenhouse effect is <b>natural and essential</b>: sun warms surface, surface radiates heat, gases absorb and send some back. Without it Earth would average about <b>−18°C</b>.</p>
          <div class="vs">
            <div class="side"><h4>Natural</h4><p><b>Beneficial, necessary for life</b>; keeps Earth from freezing at −18°C.</p></div>
            <div class="side"><h4>Enhanced</h4><p>Caused by <b>human emissions</b>; the real problem. Extra gases trap more heat.</p></div>
          </div>
          <div data-viz="greenhouse-effect"></div>
          <div class="mnemonic">One blanket keeps you warm; five blankets make you overheat. Human emissions are the extra blankets.</div>
          <p><b>Key gases</b>: CO₂, methane, nitrous oxide, water vapour. CO₂ = headline gas (coal, oil, gas). Methane: shorter-lived but about <b>84 times</b> CO₂ over <b>20 years</b>.</p>
          <div class="note heads-up">The Kyoto lecture gives methane as 28–36 times CO₂ over <b>100</b> years. Both are right; the time horizon differs.</div>
        ` },
        { title: 'Four pillars of evidence', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Rising temperatures</b></td><td>About <b>1.1°C</b> above pre-industrial. <b>19 of the 20</b> hottest years since 2000. Confirmed separately by NASA, NOAA, UK Met Office, Japan Meteorological Agency</td></tr>
              <tr><td><b>Rising CO₂</b></td><td><b>280 ppm</b> pre-industrial to over <b>420 ppm</b>, not seen for at least <b>3 million years</b>. Antarctic ice cores trap air going back <b>800,000 years</b></td></tr>
              <tr><td><b>Melting ice, sea level</b></td><td>Arctic sea ice down about <b>13% per decade</b> since 1979 satellite records. Greenland and Antarctic sheets losing mass. Sea level up about <b>20 cm since 1900</b>, accelerating</td></tr>
              <tr><td><b>Ocean warming, acidification</b></td><td>Oceans absorbed about <b>90%</b> of the excess heat and <b>25–30%</b> of human CO₂. CO₂ forms <b>carbonic acid</b>, lowering pH; harms shellfish and corals</td></tr>
            </tbody>
          </table>
          <div class="note exam">Confidence is high because <b>four independent measurement systems</b> reach the same conclusion.</div>
        ` }
      ],
      flashcards: [
        { front: 'Earth\'s temperature without the greenhouse effect?', back: 'About <b>−18°C</b>.' },
        { front: 'Natural vs enhanced greenhouse effect?', back: 'Natural is needed for life; <b>enhanced</b> (human emissions) is the problem.' },
        { front: 'Methane warming power over 20 years?', back: 'About <b>84 times</b> CO₂.' },
        { front: 'Warming so far?', back: 'About <b>1.1°C</b> above pre-industrial.' },
        { front: 'Sea level rise since 1900?', back: 'About <b>20 cm</b>, and accelerating.' },
        { front: 'Share of excess heat taken up by oceans?', back: 'About <b>90%</b>.' },
        { front: 'Arctic sea ice decline rate?', back: 'About <b>13% per decade</b> since 1979.' }
      ],
      oneLiners: [
        'CO₂ above 420 ppm is the highest in at least 3 million years.',
        'Oceans absorb 25–30% of human CO₂ and turn more acidic.',
        '19 of the 20 hottest years came after 2000.'
      ],
      formulas: [
        { name: 'Ocean acidification', html: 'CO₂ + H₂O → H₂CO₃ (carbonic acid)' }
      ]
    },
    {
      id: 'm5-climate-causes-effects',
      title: 'Causes and consequences of climate change',
      short: 'Climate causes, effects',
      blurb: 'Human causes with their shares, why natural factors don\'t explain current warming, and the effects on weather, sea level, ecosystems, food, health and India.',
      source: 'Lecture W5 (Climate Change Science), pages 3–4',
      tabs: [
        { title: 'Causes', html: `
          <table class="tbl">
            <thead><tr><th>Human cause</th><th>Detail</th><th>Share</th></tr></thead>
            <tbody>
              <tr><td><b>Fossil fuels</b></td><td>Coal, oil, gas for electricity, industry, transport; single biggest source.</td><td>About <b>75%</b></td></tr>
              <tr><td><b>Deforestation</b></td><td>Releases stored carbon; fewer sinks to absorb CO₂ later.</td><td><b>10–15%</b></td></tr>
              <tr><td><b>Agriculture</b></td><td>Livestock digestion and rice paddies (methane); nitrogen fertilisers (N₂O).</td><td>Not given</td></tr>
              <tr><td><b>Industry</b></td><td>Cement and steel; cement alone about 8% of global emissions.</td><td>About <b>8%</b> (cement)</td></tr>
            </tbody>
          </table>
          <p>Main driver: <b>human activity</b>.</p>
          <h4>Natural factors can't explain it</h4>
          <ul>
            <li>Volcanoes, solar output, <b>Milankovitch</b> orbital cycles shaped climate over geological time.</li>
            <li><b>Solar output slightly fallen since the 1980s</b> while temperatures rose.</li>
            <li>Volcanoes: only <b>short-term cooling</b>.</li>
            <li>Natural factors can't explain the <b>rate and pattern</b> of warming.</li>
          </ul>
        ` },
        { title: 'Consequences', html: `
          <ul>
            <li><b>Weather extremes</b>: air holds about <b>7% more moisture per °C</b>; heavier floods, longer droughts, deadlier heatwaves, stronger cyclones.</li>
            <li><b>Sea level</b>: Mumbai, Chennai, Bengal delta (storm surges); Pacific islands (existential threat).</li>
            <li><b>Ecosystems</b>: reefs hold about <b>25% of marine species</b>; bleach at <b>1°C</b> above normal summer temps; at <b>2°C</b> over <b>99%</b> of tropical reefs badly degraded.</li>
            <li><b>Food</b>: lower wheat, rice, maize yields in tropics; Sub-Saharan Africa, South Asia at risk.</li>
            <li><b>Health</b>: heat illness, malaria and dengue spreading, worse air.</li>
            <li><b>India</b>: heatwaves, <b>monsoon disruption</b> (over a billion depend on it), <b>Himalayan glacier melt</b>, coastal sea level rise.</li>
          </ul>
          <p>Many effects <b>already visible</b>.</p>
        ` }
      ],
      flashcards: [
        { front: 'Share of GHG emissions from fossil fuels?', back: 'About <b>75%</b>.' },
        { front: 'Share from deforestation?', back: '<b>10–15%</b>.' },
        { front: 'Share from cement production?', back: 'About <b>8%</b>.' },
        { front: 'Why isn\'t the sun to blame?', back: 'Solar output has <b>slightly fallen since the 1980s</b> while temperatures rose.' },
        { front: 'Extra moisture held per °C of warming?', back: 'About <b>7%</b>.' },
        { front: 'Corals at 2°C warming?', back: 'Over <b>99%</b> of tropical reefs severely degraded.' }
      ],
      oneLiners: [
        'Volcanoes cause short-term cooling, not long-term warming.',
        'Milankovitch cycles are Earth\'s orbital cycles.',
        'Coral reefs support about 25% of marine species.'
      ],
      formulas: []
    },
    {
      id: 'm5-mitigation-adaptation',
      title: 'Mitigation, adaptation and climate policy',
      short: 'Mitigation, adaptation',
      blurb: 'Cutting emissions through the energy transition, efficiency and carbon capture; adapting through engineering design; and the policy frame including India\'s 2070 net-zero goal.',
      source: 'Lecture W5 (Climate Change Science), pages 4–6',
      tabs: [
        { title: 'Two strategies', html: `
          <div class="vs">
            <div class="side"><h4>Mitigation</h4><p><b>Reduces the emissions</b>.</p><ul><li><b>Energy transition</b> = centrepiece: solar, wind, hydro replace fossil power; India has some of the world's largest solar installations.</li><li><b>Energy efficiency</b>: better buildings, efficient motors, optimised transport cut demand.</li><li><b>Carbon capture</b>: from air or industrial sources; key for hard-to-decarbonise <b>cement and steel</b>.</li></ul></div>
            <div class="side"><h4>Adaptation</h4><p><b>Designing systems that cope</b> with changes under way; mainly an engineering job.</p><ul><li><b>Flood defences</b> against heavy rain, storm surges.</li><li><b>Climate-resilient roads and bridges</b>.</li><li><b>Drought-resistant water supply</b>.</li><li><b>Heat-resilient cities</b>: green roofs, urban trees, cool pavements.</li></ul></div>
          </div>
          <p><b>Complementary</b>: need both. New projects must include climate risk; building codes, drainage standards, coastal zone planning being revised.</p>
        ` },
        { title: 'Policy and takeaways', html: `
          <ul>
            <li><b>Paris Agreement</b>: well below 2°C, ideally 1.5°C.</li>
            <li><b>India: net zero by 2070</b>, with fast renewable growth and some of the world's largest solar parks.</li>
            <li><b>IPCC</b> synthesises the underlying science and informs global climate policy.</li>
          </ul>
          <p>Key takeaways:</p>
          <ol>
            <li>The natural greenhouse effect is needed; its enhancement is the problem.</li>
            <li>Evidence comes from temperature, CO₂, ice cores and oceans.</li>
            <li>Fossil fuels, deforestation and agriculture drive it.</li>
            <li>Effects are already here.</li>
            <li>Solutions exist and engineers deliver them.</li>
            <li>Treaties give the policy frame; engineering gives the technical fixes.</li>
          </ol>
        ` }
      ],
      flashcards: [
        { front: 'Mitigation vs adaptation?', back: 'Mitigation <b>cuts emissions</b>; adaptation <b>copes with impacts</b>.' },
        { front: 'India\'s net-zero year?', back: '<b>2070</b>.' },
        { front: 'Where is carbon capture most needed?', back: 'Hard-to-decarbonise industries: <b>cement and steel</b>.' },
        { front: 'Name three heat-resilient city measures.', back: 'Green roofs, urban trees, cool pavements.' }
      ],
      oneLiners: [
        'The energy transition is the centrepiece of mitigation.',
        'Adaptation is mainly an engineering task.',
        'Every new project needs climate risk built into its design.'
      ],
      formulas: []
    }
  ],
  figures: []
});
