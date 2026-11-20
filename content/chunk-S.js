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
          <p class="lead"><b>Global warming</b>: long-term rise in Earth's average surface temperature, mainly from GHGs (industry, agriculture, land use). IPCC: about <b>1.1°C</b> above pre-industrial (<b>before 1850</b>), heading past <b>1.5°C</b>.</p>
          <ol class="steps">
            <li>Sun sends <b>short-wave</b> radiation; warms the surface.</li>
            <li>Surface re-emits <b>long-wave infrared</b> (heat).</li>
            <li>GHGs absorb and re-emit in all directions, some back down.</li>
            <li>Earth averages about <b>15°C</b> instead of <b>−18°C</b>.</li>
          </ol>
          <p>Natural effect = <b>life-sustaining mechanism</b>, not harmful.</p>
          <p><b>Enhanced</b> effect = the problem: human activity pushes GHGs beyond natural levels; warming beyond natural variability.</p>
          <p>Every engineering branch (<b>civil, mechanical, chemical, electrical, environmental</b>) contributes to warming and to solutions.</p>
        ` },
        { title: 'The gases', html: `
          <table class="tbl">
            <thead><tr><th>Gas</th><th>Main sources</th><th>Key fact</th></tr></thead>
            <tbody>
              <tr><td><b>CO₂</b></td><td>Fossil fuels, deforestation, cement</td><td>Largest human contributor; lasts <b>hundreds to thousands of years</b></td></tr>
              <tr><td><b>Methane (CH₄)</b></td><td>Livestock (<b>enteric fermentation</b>), rice paddies, landfills, gas extraction</td><td>About <b>80×</b> CO₂ over 20 years</td></tr>
              <tr><td><b>Nitrous oxide (N₂O)</b></td><td>Nitrogen fertilisers, manure</td><td>About <b>265×</b> CO₂ over 100 years</td></tr>
              <tr><td><b>Water vapour</b></td><td>Evaporation</td><td>Most abundant; a <b>feedback amplifier</b>, not a direct driver</td></tr>
              <tr><td><b>Fluorinated gases</b></td><td>Refrigeration, AC, manufacturing</td><td><b>Thousands of times</b> CO₂; last centuries</td></tr>
            </tbody>
          </table>
          <div class="note exam">Water vapour feedback: warmer air → more evaporation → more heat trapped → more warming. A <b>positive feedback loop</b>.</div>
          <div class="note heads-up">Methane: about 80× (this lecture) or 84× (climate science lecture) over 20 years; 28–36× over 100 years. CO₂ at 420 ppm: highest in at least <b>800,000 years</b> of ice cores (one lecture says 3 million years).</div>
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
              <tr><td><b>Fossil fuels</b></td><td>Largest source: electricity, heating, transport. Coal plants, petrol/diesel vehicles, furnaces emit <b>billions of tonnes</b> CO₂/year. Began with the <b>Industrial Revolution</b> (late 18th century, Britain).</td></tr>
              <tr><td><b>Deforestation</b></td><td>Forests store CO₂ in biomass and soil; clearing (farms, cities, timber) releases it by burning or decay and cuts future absorption. Amazon, Congo, Southeast Asia matter most.</td></tr>
              <tr><td><b>Industry</b></td><td>Process emissions: cement heats limestone to lime (CO₂); steel, aluminium smelting, chemicals. Grown with urbanisation, population growth in developing economies.</td></tr>
              <tr><td><b>Agriculture</b></td><td>Cattle methane by <b>enteric fermentation</b>; flooded rice paddies (oxygen-free decay); nitrogen fertilisers (N₂O). About <b>10–12%</b> of emissions, growing.</td></tr>
              <tr><td><b>Waste</b></td><td>Overlooked methane source: organic waste (food, paper, garden) decays without oxygen in landfills; wastewater gives methane and N₂O. Rising with urbanisation.</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Consequences', html: `
          <ul>
            <li><b>Heatwaves</b>: 1-in-50-year events now several times a decade; more frequent, intense, longer. India: 45–48°C+ in Rajasthan, Odisha, Andhra Pradesh; risk to <b>outdoor workers, the elderly, city dwellers</b>.</li>
            <li><b>Sea level</b>: ice melt + <b>thermal expansion</b>. Up about 20 cm since 1900; IPCC <b>0.3–1 m</b> by 2100, more if <b>West Antarctic Ice Sheet</b> destabilises. At risk: Mumbai, Kolkata, Chennai, Kochi; Maldives, Tuvalu.</li>
            <li><b>Rainfall</b>: disrupted <b>hydrological cycle</b>; heavier bursts and floods, longer droughts. Indian monsoon swings between floods and deficient years.</li>
            <li><b>Ocean acidification</b>: oceans take about <b>a quarter</b> of human CO₂; pH down about <b>0.1</b> = <b>26% more acidic</b>. Shells, corals can't build calcium carbonate; mass bleaching.</li>
            <li><b>Biodiversity</b>: zones shift <b>poleward and uphill</b>; slow species face local extinction; flowering/migration/breeding timing breaks. IPCC: higher extinction risk at <b>1.5°C</b>, much more at <b>2°C</b>. Himalayas, Western Ghats (hotspots) highly vulnerable.</li>
            <li><b>Health and food</b>: heatwave deaths, malaria and dengue spreading, respiratory disease (pollution, wildfire smoke); lower yields, crop failures. WHO: about <b>250,000 extra deaths a year</b> in 2030–2050 (malnutrition, malaria, diarrhoea, heat stress).</li>
          </ul>
          <div class="note exam">A pH drop of only 0.1 means a <b>26%</b> rise in acidity because pH is logarithmic.</div>
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
          <p class="lead"><b>Mitigation</b>: actions that reduce or prevent GHG emissions, across energy, transport, industry, land use, consumption.</p>
          <ul>
            <li><b>Renewables</b>: solar, wind, hydro, geothermal; most impactful single action. Solar PV and wind costs fell <b>over 80%</b> in a decade. India: <b>National Solar Mission</b>, <b>500 GW non-fossil capacity by 2030</b>.</li>
            <li><b>Energy efficiency</b>: less energy for same service (insulation, efficient appliances and processes, fuel economy); cheap.</li>
            <li><b>Reforestation and sequestration</b>: <b>Green India Mission</b> (under NAPCC) raises forest and tree cover. <b>Carbon capture and storage</b>: CO₂ from industry stored underground.</li>
            <li><b>Sustainable agriculture and waste</b>: livestock management, precision fertilising, sustainable rice cut methane and N₂O; composting, waste-to-energy, landfill gas capture.</li>
            <li><b>International agreements</b>: Paris 2015; India's NDC: <b>net zero by 2070</b>, <b>50%</b> non-fossil capacity by 2030.</li>
          </ul>
        ` },
        { title: 'Adaptation', html: `
          <p class="lead"><b>Adaptation</b>: adjusting human and natural systems to actual or expected warming. Locked-in warming continues for decades, so it is a <b>complement, not a substitute</b> for mitigation.</p>
          <ul>
            <li><b>Drought-resistant, heat-tolerant crops</b>.</li>
            <li><b>Flood defences, sea walls, storm surge barriers</b> for coastal, low-lying areas.</li>
            <li><b>Urban planning</b>: green spaces, reflective surfaces, efficient cooling reduce the <b>urban heat island</b>.</li>
            <li><b>Integrated water management</b>: rainwater harvesting, groundwater recharge, efficient irrigation.</li>
          </ul>
          <h4>NAPCC (2008): eight missions</h4>
          <div class="mnemonic">Solar, Energy efficiency, Water, Himalayan ecosystem, Green India, Sustainable agriculture, Strategic knowledge, Sustainable habitat.</div>
          <p>India: over <b>1.4 billion</b> people, many on rain-fed farming, exposed to floods, droughts, cyclones, heatwaves; adaptation urgent.</p>
        ` },
        { title: 'Engineers', html: `
          <p>Engineers built emitting systems (coal plants, combustion engines, heavy industry) and build replacements: renewables, EVs, green buildings, carbon-neutral cement, smart grids, resilient infrastructure.</p>
          <p>Environmental thinking = <b>core professional competency</b>; duty to public and future generations, not just clients. Applies across construction, manufacturing, energy, water, transport, IT.</p>
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
