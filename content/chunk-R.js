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
          <div class="vs">
            <div class="side"><h4>Natural</h4><p><b>Essential</b> for life; without it Earth ≈ <b>−18°C</b>.</p></div>
            <div class="side"><h4>Enhanced</h4><p><b>Human emissions</b>; the problem.</p></div>
          </div>
          <div data-viz="greenhouse-effect"></div>
          <p>Key gases: <b>CO₂</b> (headline; coal, oil, gas), methane, N₂O, water vapour.</p>
          <p>Methane: shorter-lived, ≈ <b>84×</b> CO₂ over <b>20 yr</b>.</p>
          <div class="note heads-up">Kyoto lecture: methane <b>28–36×</b> over <b>100 yr</b>. Both right; time horizon differs.</div>
        ` },
        { title: 'Four pillars of evidence', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Temperature</b></td><td><b>1.1°C</b> above pre-industrial; <b>19 of 20</b> hottest years since 2000 (NASA, NOAA, UK Met Office, JMA)</td></tr>
              <tr><td><b>CO₂</b></td><td><b>280 → 420+ ppm</b>; highest in <b>3 million yr</b>; ice cores go back <b>800,000 yr</b></td></tr>
              <tr><td><b>Ice, sea level</b></td><td>Arctic sea ice <b>−13%/decade</b> since 1979; sea level <b>+20 cm since 1900</b></td></tr>
              <tr><td><b>Oceans</b></td><td>Absorb <b>90%</b> of excess heat, <b>25–30%</b> of CO₂; <b>carbonic acid</b> lowers pH</td></tr>
            </tbody>
          </table>
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
          <div class="kv">
            <div><span>Fossil fuels (biggest)</span><b>≈ 75%</b></div>
            <div><span>Deforestation</span><b>10–15%</b></div>
            <div><span>Cement</span><b>≈ 8%</b></div>
          </div>
          <p><b>Agriculture</b>: methane (livestock, rice paddies), N₂O (nitrogen fertilisers). Deforestation also removes future sinks.</p>
          <h4>Natural factors can't explain it</h4>
          <ul>
            <li><b>Solar output fallen since 1980s</b> while temperatures rose.</li>
            <li>Volcanoes: only <b>short-term cooling</b>.</li>
            <li><b>Milankovitch</b> (orbital) cycles: geological timescales.</li>
          </ul>
        ` },
        { title: 'Consequences', html: `
          <ul>
            <li>Air holds <b>7% more moisture per °C</b>: floods, droughts, heatwaves, cyclones.</li>
            <li>Reefs hold <b>25% of marine species</b>; bleach at <b>+1°C</b>; at <b>2°C</b> <b>99%</b> degraded.</li>
            <li>Sea level: Mumbai, Chennai, <b>Bengal delta</b>; <b>Pacific islands</b> face existential threat.</li>
            <li>Food: lower wheat, rice, maize yields; <b>Sub-Saharan Africa, South Asia</b> at risk.</li>
            <li>Health: heat illness, <b>malaria, dengue</b> spread, worse air.</li>
            <li>India: <b>monsoon disruption</b> (billion+ depend on it), <b>Himalayan glacier melt</b>, heatwaves.</li>
          </ul>
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
            <div class="side"><h4>Mitigation</h4><p><b>Cuts emissions</b>.</p><ul><li><b>Energy transition</b> (centrepiece): solar, wind, hydro</li><li><b>Efficiency</b>: buildings, motors, transport</li><li><b>Carbon capture</b>: for <b>cement, steel</b></li></ul></div>
            <div class="side"><h4>Adaptation</h4><p><b>Copes with impacts</b>; mainly engineering.</p><ul><li>Flood defences, resilient roads and bridges</li><li>Drought-resistant water supply</li><li>Heat: <b>green roofs, trees, cool pavements</b></li></ul></div>
          </div>
          <p>Both <b>complementary</b>.</p>
        ` },
        { title: 'Policy', html: `
          <ul>
            <li><b>Paris Agreement</b>: well below <b>2°C</b>, ideally <b>1.5°C</b>.</li>
            <li>India: <b>net zero by 2070</b>; some of world's largest <b>solar parks</b>.</li>
            <li><b>IPCC</b>: synthesises climate science for policy.</li>
            <li>Building codes, drainage standards, <b>coastal zone planning</b> being revised for climate risk.</li>
          </ul>
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
