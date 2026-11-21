CHUNK({
  chunk: 'S',
  module: 'm5',
  topics: [
    {
      id: 'm5-warming-gases',
      title: 'Global warming and the greenhouse gases',
      short: 'Warming and GHGs',
      blurb: 'Definition of global warming, short-wave in and long-wave out, the 15°C versus −18°C contrast, and each greenhouse gas with its sources, potency and lifetime.',
      source: 'Lecture W5 (Global Warming), pages 1–2',
      tabs: [
        { title: 'Definition', html: `
          <p class="lead"><b>Global warming</b>: long-term rise in Earth's average surface temperature from GHGs. IPCC: <b>1.1°C</b> above pre-industrial (<b>before 1850</b>), heading past <b>1.5°C</b>.</p>
          <ol class="steps">
            <li>Sun: <b>short-wave</b> in.</li>
            <li>Surface: <b>long-wave infrared</b> out.</li>
            <li>GHGs re-emit some back down.</li>
            <li>Earth ≈ <b>15°C</b> instead of <b>−18°C</b>.</li>
          </ol>
          <p>Natural = <b>life-sustaining</b>; <b>enhanced</b> (human) = the problem.</p>
        ` },
        { title: 'The gases', html: `
          <table class="tbl">
            <thead><tr><th>Gas</th><th>Sources</th><th>Key fact</th></tr></thead>
            <tbody>
              <tr><td><b>CO₂</b></td><td>Fossil fuels, deforestation, cement</td><td>Largest; lasts <b>100s–1000s of yr</b></td></tr>
              <tr><td><b>CH₄</b></td><td><b>Enteric fermentation</b>, rice, landfills, gas</td><td>≈ <b>80×</b> CO₂ (20 yr)</td></tr>
              <tr><td><b>N₂O</b></td><td>Fertilisers, manure</td><td>≈ <b>265×</b> CO₂ (100 yr)</td></tr>
              <tr><td><b>Water vapour</b></td><td>Evaporation</td><td>Most abundant; <b>positive feedback</b> amplifier</td></tr>
              <tr><td><b>F-gases</b></td><td>Refrigeration, AC</td><td><b>Thousands ×</b> CO₂; centuries</td></tr>
            </tbody>
          </table>
          <div class="note heads-up">Methane 80× here, 84× in climate science lecture (20 yr); 28–36× over 100 yr. CO₂ 420 ppm: highest in <b>800,000 yr</b> of ice cores (other lecture: 3 million).</div>
        ` }
      ],
      flashcards: [
        { front: 'Define global warming.', back: 'Long-term rise in Earth\'s average surface temperature from accumulated greenhouse gases.' },
        { front: 'Earth\'s average with and without the greenhouse effect?', back: 'About <b>15°C</b> with; about <b>−18°C</b> without.' },
        { front: 'Incoming vs outgoing radiation type?', back: 'In: <b>short-wave</b>. Out: <b>long-wave infrared</b>.' },
        { front: 'N₂O potency?', back: 'About <b>265×</b> CO₂ over 100 years.' },
        { front: 'What is enteric fermentation?', back: 'Methane-producing digestion in livestock, mainly cattle.' },
        { front: 'Role of water vapour?', back: 'Most abundant GHG; acts as a <b>feedback amplifier</b>.' }
      ],
      oneLiners: [
        'Pre-industrial means before 1850.',
        'CO₂ stays in the air for hundreds to thousands of years.',
        'F-gases are thousands of times stronger than CO₂.'
      ],
      formulas: []
    },
    {
      id: 'm5-warming-causes-effects',
      title: 'Causes and consequences of global warming',
      short: 'Warming causes, effects',
      blurb: 'Fossil fuels, deforestation, industry, agriculture and waste, then heatwaves, sea level, rainfall, acidification, biodiversity, health and food.',
      source: 'Lecture W5 (Global Warming), pages 3–6',
      tabs: [
        { title: 'Five causes', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Fossil fuels</b></td><td>Largest source; since <b>Industrial Revolution</b> (late 18th c., Britain)</td></tr>
              <tr><td><b>Deforestation</b></td><td>Releases stored carbon, cuts sinks; Amazon, Congo, SE Asia</td></tr>
              <tr><td><b>Industry</b></td><td>Process emissions: cement (<b>limestone → lime</b>), steel, aluminium</td></tr>
              <tr><td><b>Agriculture</b></td><td><b>Enteric fermentation</b>, flooded rice, N₂O; <b>10–12%</b></td></tr>
              <tr><td><b>Waste</b></td><td>Overlooked: <b>landfill methane</b> (no-oxygen decay); wastewater CH₄, N₂O</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Consequences', html: `
          <ul>
            <li><b>Heatwaves</b>: 1-in-50-yr events several times a decade; India <b>45–48°C+</b> (Rajasthan, Odisha, Andhra).</li>
            <li><b>Sea level</b>: ice melt + <b>thermal expansion</b>; <b>0.3–1 m</b> by 2100 (more if <b>West Antarctic</b> sheet fails). Mumbai, Kolkata, Chennai, Kochi; <b>Maldives, Tuvalu</b>.</li>
            <li><b>Rainfall</b>: disrupted hydrological cycle; monsoon floods vs deficits.</li>
            <li><b>Acidification</b>: oceans take <b>¼</b> of CO₂; pH <b>−0.1</b> = <b>26% more acidic</b> (log scale).</li>
            <li><b>Biodiversity</b>: shift <b>poleward and uphill</b>; risk up at 1.5°C, much more at 2°C; Himalayas, <b>Western Ghats</b>.</li>
            <li><b>Health, food</b>: WHO <b>250,000 extra deaths/yr</b> (2030–2050).</li>
          </ul>
        ` }
      ],
      flashcards: [
        { front: 'Agriculture\'s share of GHG emissions?', back: 'About <b>10–12%</b>.' },
        { front: 'How does cement release CO₂ apart from fuel?', back: 'Heating <b>limestone</b> to make lime.' },
        { front: 'Two causes of sea-level rise?', back: 'Ice melt and <b>thermal expansion</b> of seawater.' },
        { front: 'IPCC sea-level projection for 2100?', back: '<b>0.3 to 1 m</b>.' },
        { front: 'Ocean pH change since industrial era?', back: 'Down about <b>0.1</b>: <b>26%</b> more acidic.' },
        { front: 'WHO estimate of extra deaths, 2030–2050?', back: 'About <b>250,000 a year</b>.' }
      ],
      oneLiners: [
        'Landfills release methane from oxygen-free decay.',
        'Species move poleward and to higher altitudes.',
        'Maldives and Tuvalu face existential threats.'
      ],
      formulas: []
    },
    {
      id: 'm5-warming-responses',
      title: 'Responding to global warming',
      short: 'Warming responses',
      blurb: 'Five mitigation routes, adaptation measures, India\'s National Action Plan on Climate Change and its eight missions, and the engineer\'s role.',
      source: 'Lecture W5 (Global Warming), pages 6–9',
      tabs: [
        { title: 'Mitigation', html: `
          <p class="lead"><b>Mitigation</b>: reduce or prevent GHG emissions.</p>
          <ul>
            <li><b>Renewables</b>: most impactful; solar, wind costs <b>−80%+</b> in a decade. <b>National Solar Mission</b>; <b>500 GW</b> non-fossil by 2030.</li>
            <li><b>Efficiency</b>: same service, less energy; cheap.</li>
            <li><b>Green India Mission</b> (NAPCC): forest cover. <b>CCS</b>: CO₂ stored underground.</li>
            <li>Agriculture, waste: composting, waste-to-energy, <b>landfill gas capture</b>.</li>
            <li><b>Paris 2015</b>; India NDC: <b>net zero 2070</b>, <b>50%</b> non-fossil capacity by 2030.</li>
          </ul>
        ` },
        { title: 'Adaptation and NAPCC', html: `
          <p class="lead"><b>Adaptation</b>: adjusting to actual/expected warming; <b>complement, not substitute</b>.</p>
          <ul>
            <li>Drought-resistant, heat-tolerant crops.</li>
            <li>Sea walls, storm surge barriers.</li>
            <li>Green spaces, reflective surfaces vs <b>urban heat island</b>.</li>
            <li>Rainwater harvesting, groundwater recharge.</li>
          </ul>
          <h4>NAPCC (2008): eight missions</h4>
          <div class="chips"><span class="chip">Solar</span><span class="chip">Energy efficiency</span><span class="chip">Water</span><span class="chip">Himalayan ecosystem</span><span class="chip">Green India</span><span class="chip">Sustainable agriculture</span><span class="chip">Strategic knowledge</span><span class="chip">Sustainable habitat</span></div>
          <p>Engineers: environmental thinking = <b>core professional competency</b>.</p>
        ` }
      ],
      flashcards: [
        { front: 'Most impactful single mitigation action?', back: 'Switching to <b>renewable energy</b>.' },
        { front: 'India\'s 2030 non-fossil capacity target?', back: '<b>500 GW</b>.' },
        { front: 'When was the NAPCC launched?', back: '<b>2008</b>, with eight national missions.' },
        { front: 'Name the eight NAPCC missions.', back: 'Solar, energy efficiency, water, Himalayan ecosystem, Green India, sustainable agriculture, strategic knowledge, sustainable habitat.' },
        { front: 'Is adaptation a substitute for mitigation?', back: '<b>No</b>, a complement; locked-in warming continues for decades.' },
        { front: 'What does CCS do?', back: 'Captures CO₂ from industrial sources and <b>stores it underground</b>.' }
      ],
      oneLiners: [
        'Solar and wind costs fell over 80% in a decade.',
        'The Green India Mission raises forest and tree cover.',
        'Reflective surfaces reduce the urban heat island effect.'
      ],
      formulas: []
    }
  ],
  figures: []
});
