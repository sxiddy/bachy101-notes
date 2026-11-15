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
          <p class="lead">The greenhouse effect is <b>natural and essential</b>. Sunlight warms the surface, the surface radiates heat upward, and greenhouse gases absorb it and send some back down. Without it Earth would average about <b>−18°C</b>.</p>
          <div class="vs">
            <div class="side"><h4>Natural</h4><p>The natural greenhouse effect is <b>beneficial and necessary for life</b>. The normal blanket of gases keeps Earth warm enough to live on instead of frozen at −18°C.</p></div>
            <div class="side"><h4>Enhanced</h4><p>The enhanced greenhouse effect is caused by <b>human emissions</b> and is the actual problem. The extra gases trap more outgoing heat than before, so the surface keeps warming.</p></div>
          </div>
          <div data-viz="greenhouse-effect"></div>
          <div class="mnemonic">One blanket keeps you warm; five blankets make you overheat. Human emissions are the extra blankets.</div>
          <p><b>Key gases</b>: CO₂, methane, nitrous oxide, water vapour. CO₂ is the headline gas, the main one being added by burning coal, oil and gas. Methane is shorter-lived in the air but far stronger, about <b>84 times</b> CO₂'s warming power over <b>20 years</b>.</p>
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
              <tr><td><b>Fossil fuels</b></td><td>Burning coal, oil and gas for electricity, industry and transport. It is the single biggest source of greenhouse gases.</td><td>About <b>75%</b></td></tr>
              <tr><td><b>Deforestation</b></td><td>Forests are carbon sinks that absorb CO₂. Cutting or burning them releases the stored carbon and also reduces how much CO₂ can be soaked up later.</td><td><b>10–15%</b></td></tr>
              <tr><td><b>Agriculture</b></td><td>Livestock give off methane during digestion, flooded rice paddies emit methane, and nitrogen fertilisers release nitrous oxide.</td><td>Not given</td></tr>
              <tr><td><b>Industry</b></td><td>Cement and steel making add a lot of CO₂. Cement production alone is about 8% of global emissions.</td><td>About <b>8%</b> (cement)</td></tr>
            </tbody>
          </table>
          <p>The main driver of today's climate change is <b>human activity</b>.</p>
          <h4>Natural factors can't explain it</h4>
          <ul>
            <li>Volcanoes, solar output and <b>Milankovitch</b> orbital cycles shaped climate over geological time.</li>
            <li>But <b>solar output has slightly fallen since the 1980s</b> while temperatures rose.</li>
            <li>Volcanoes cause only <b>short-term cooling</b>, not long-term warming.</li>
            <li>So natural factors alone cannot explain the <b>rate and pattern</b> of the warming we see now. The signal is clearly human in origin.</li>
          </ul>
        ` },
        { title: 'Consequences', html: `
          <ul>
            <li><b>Weather extremes</b>: air holds about <b>7% more moisture per °C</b>, so heavier floods in some places, longer droughts in others; deadlier heatwaves; stronger cyclones.</li>
            <li><b>Sea level</b>: Mumbai, Chennai and the Bengal delta face storm surges; Pacific islands face existential threat.</li>
            <li><b>Ecosystems</b>: coral reefs hold about <b>25% of marine species</b>, bleach at <b>1°C</b> above normal summer temperatures; at <b>2°C</b> over <b>99%</b> of tropical reefs are badly degraded.</li>
            <li><b>Food</b>: lower wheat, rice and maize yields in the tropics; risk in Sub-Saharan Africa and South Asia.</li>
            <li><b>Health</b>: heat illness, malaria and dengue spreading, worse air.</li>
            <li><b>India</b>: heatwaves, <b>monsoon disruption</b> (over a billion people depend on it for farming and fresh water), <b>Himalayan glacier melt</b>, coastal sea level rise.</li>
          </ul>
          <p>These effects are not a future problem. Many are <b>already visible</b> and they add up over time.</p>
          <div class="note exam">For a long answer on causes and consequences: (1) one line that the main driver is human activity; (2) human causes with shares: fossil fuels about 75%, deforestation 10–15%, agriculture (methane, nitrous oxide), cement about 8%; (3) why natural factors (sun, volcanoes, Milankovitch cycles) can't explain it; (4) consequences under headings: weather extremes, sea level, ecosystems (corals), food security, health; (5) end with India's regional risks.</div>
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
            <div class="side"><h4>Mitigation</h4><p>Mitigation <b>reduces the emissions</b> causing the problem.</p><ul><li>The <b>energy transition</b> is the centrepiece: replacing fossil fuel power with solar, wind, hydro and other renewables. India is doing this at scale, with some of the world's largest solar installations and an ambitious renewable target.</li><li><b>Energy efficiency</b> matters a lot: well-designed buildings, efficient motors and optimised transport all cut demand, and so cut emissions.</li><li><b>Carbon capture</b> removes CO₂ from the air or catches it at industrial sources. It is a growing field and may be essential for hard-to-decarbonise industries like cement and steel.</li></ul></div>
            <div class="side"><h4>Adaptation</h4><p>Adaptation means <b>designing systems that cope</b> with changes already under way. It is basically an engineering job.</p><ul><li><b>Flood defences</b> protect towns from heavier rain and storm surges.</li><li><b>Climate-resilient roads and bridges</b> are designed for the floods and heat they will now face.</li><li><b>Drought-resistant water supply</b> keeps water flowing through longer dry spells.</li><li><b>Heat-resilient cities</b> use green roofs, urban trees and cool pavements to keep streets cooler.</li></ul></div>
          </div>
          <p>The two are <b>complementary</b>: you need both. Every new infrastructure project must be designed with climate risk in mind, and building codes, drainage standards and coastal zone planning are being revised worldwide for a changing climate.</p>
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
          <div class="note exam">For a long answer on responding to climate change: (1) define mitigation and adaptation and say they are complementary; (2) mitigation: energy transition (India's solar), efficiency, carbon capture for cement and steel; (3) adaptation with engineering examples: flood defences, resilient roads and bridges, drought-proof water supply, heat-resilient cities; (4) revised codes and planning; (5) policy: Paris (well below 2°C, ideally 1.5°C), India net zero by 2070, IPCC.</div>
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
