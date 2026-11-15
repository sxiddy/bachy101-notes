CHUNK({
  chunk: 'T',
  module: 'm5',
  topics: [
    {
      id: 'm5-carbon-footprint',
      title: 'Carbon footprint: definition, scopes and measurement',
      short: 'Carbon footprint',
      blurb: 'What a carbon footprint is, CO₂e and GWP100, Scopes 1 to 3, per-person and national footprints, LCA, emission factors and accounting standards.',
      source: 'Lecture W5 (Carbon Footprint), pages 1–4',
      tabs: [
        { title: 'Definition and scopes', html: `
          <p class="lead">A <b>carbon footprint</b> is the total GHG emission caused <b>directly and indirectly</b> by a person, organisation, event, product or service, in <b>CO₂ equivalent (CO₂e)</b>. It grew out of the <b>ecological footprint</b> idea and became popular in the early 2000s.</p>
          <p>It covers CO₂, methane (CH₄), nitrous oxide (N₂O) and fluorinated gases, all converted to CO₂e using their <b>Global Warming Potential</b>. Because CO₂e puts every gas on one scale, the footprint shows where emissions are largest and where cuts will help most.</p>
          <p>Scopes come from the <b>Greenhouse Gas Protocol</b>, the most widely used international standard for measuring GHG emissions:</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Scope 1</b></td><td><b>Direct emissions</b> from sources the organisation or person owns or controls, such as fuel burnt in a company's own boilers, furnaces and vehicles.</td></tr>
              <tr><td><b>Scope 2</b></td><td><b>Indirect energy emissions</b> from making the electricity, heat or steam the organisation buys. The gas is released at the power plant, but it is counted to the consumer who used the energy.</td></tr>
              <tr><td><b>Scope 3</b></td><td><b>Other indirect emissions</b> across the whole value chain: raw material extraction, manufacturing, transport, product use and end-of-life disposal. It is often the <b>largest share</b> of a product's footprint.</td></tr>
            </tbody>
          </table>
          <div data-viz="carbon-scopes"></div>
          <p>When you design a product, its footprint spans <b>all three scopes</b>: the materials you specify, the energy the product uses, and how it is thrown away at the end.</p>
        ` },
        { title: 'GWP and footprints', html: `
          <p><b>GWP</b>: heat trapped by a gas relative to CO₂ over a time span, usually <b>100 years</b> (GWP100).</p>
          <ul>
            <li>Methane GWP100 about <b>28–34</b>.</li>
            <li>Nitrous oxide about <b>265–298</b>.</li>
            <li>Some F-gases in the <b>thousands or tens of thousands</b>.</li>
          </ul>
          <p>Cutting methane gives fast near-term benefit.</p>
          <p>Footprints can be worked out at <b>personal, national and global</b> scales. The global average hides huge gaps, which come from differences in energy sources, industry, consumption and lifestyle.</p>
          <table class="tbl">
            <thead><tr><th>Who</th><th>t CO₂e per person per year</th></tr></thead>
            <tbody>
              <tr><td>Global average</td><td>About <b>4</b></td></tr>
              <tr><td>USA</td><td><b>14–16</b></td></tr>
              <tr><td>India</td><td>About <b>2</b></td></tr>
              <tr><td>Many low-income countries</td><td>Under 1</td></tr>
            </tbody>
          </table>
          <p>Largest absolute emitters: China, USA, India, EU, Russia. Per capita or by historical totals, the ranking shifts; India is one of the lowest per capita among major economies.</p>
        ` },
        { title: 'Measuring', html: `
          <ul>
            <li><b>Life Cycle Assessment (LCA)</b>: the main engineering tool. Inventories all inputs and outputs from <b>cradle</b> (extraction) to <b>grave</b> (disposal), ideally <b>cradle to cradle</b> (reuse, recycling). Example: a smartphone's footprint covers mining, manufacture, shipping, charging and disposal.</li>
            <li><b>Emission factors</b>: convert activity data (litres of fuel, kWh, tonne-km) into CO₂e. Published by IPCC, IEA and governments. India's electricity factor is high (coal) compared with France or Norway.</li>
            <li><b>Standards</b>: GHG Protocol (corporations), <b>ISO 14064</b> (GHG inventories), <b>PAS 2050</b> (product footprint). Nations report to the UNFCCC using IPCC guidelines.</li>
          </ul>
          <p>LCA lets engineers redesign a product to cut its footprint: lower-carbon materials, more efficient manufacturing, longer life, easier recycling. A calculator's answer is only as good as its <b>activity data</b> and how well the emission factors fit.</p>
          <div class="note exam">For a long answer on carbon footprint: (1) the definition in CO₂e and which gases it covers; (2) GWP100 with the methane, N₂O and F-gas values; (3) Scopes 1, 2, 3 with one example each (GHG Protocol); (4) per-person figures (world 4, USA 14–16, India 2) and the top national emitters; (5) measuring: LCA cradle to grave (smartphone example), emission factors, and standards (GHG Protocol, ISO 14064, PAS 2050).</div>
        ` }
      ],
      flashcards: [
        { front: 'Define carbon footprint.', back: 'Total direct and indirect GHG emissions of a person, organisation, event, product or service, in CO₂e.' },
        { front: 'Scope 1, 2, 3?', back: '1: direct. 2: purchased energy. 3: rest of the value chain.' },
        { front: 'Which scope is often largest for a product?', back: '<b>Scope 3</b>.' },
        { front: 'Average footprint: world, US, India?', back: 'About <b>4</b>, <b>14–16</b>, <b>2</b> t CO₂e per person per year.' },
        { front: 'What is an emission factor?', back: 'A coefficient converting activity data into CO₂e.' },
        { front: 'Standard for product carbon footprints?', back: '<b>PAS 2050</b>; ISO 14064 is for GHG inventories.' }
      ],
      oneLiners: [
        'GWP100 measures warming relative to CO₂ over 100 years.',
        'LCA runs from cradle to grave.',
        'Scope 2 is counted to the electricity user, not the plant.'
      ],
      formulas: [
        { name: 'Footprint from activity', html: 'Emissions (CO₂e) = activity data × emission factor' }
      ]
    },
    {
      id: 'm5-sector-emissions',
      title: 'Where emissions come from: sectors',
      short: 'Sector emissions',
      blurb: 'Shares for energy, industry, agriculture and land use, transport and buildings, with what makes each hard or easy to cut.',
      source: 'Lecture W5 (Carbon Footprint), pages 3–5',
      tabs: [
        { title: 'Sector shares', html: `
          <table class="tbl">
            <thead><tr><th>Sector</th><th>Share</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td><b>Electricity and heat</b></td><td>About <b>34%</b> of CO₂</td><td>Coal gives about <b>twice</b> the CO₂ per unit of gas. Cleaning the grid gives the biggest cut</td></tr>
              <tr><td><b>Industry</b></td><td>About <b>24%</b></td><td>Steel, cement, chemicals, aluminium. 1 t cement → about <b>0.8 t CO₂</b>, half from <b>calcination</b> of limestone</td></tr>
              <tr><td><b>Agriculture, land use</b></td><td>About <b>22%</b></td><td>Livestock methane, fertiliser N₂O, deforestation, <b>peatland drainage</b></td></tr>
              <tr><td><b>Transport</b></td><td>About <b>16%</b></td><td>Road is largest. Aviation and shipping hard to cut (energy density): sustainable fuels, green hydrogen</td></tr>
              <tr><td><b>Buildings</b></td><td>About <b>6%</b> direct; <b>17–19%</b> with Scope 2</td><td>Heating, cooking; insulation and appliances matter</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Hard and easy cuts', html: `
          <div class="vs">
            <div class="side"><h4>Easier</h4><ul><li><b>Power</b>: swap coal for solar and wind</li><li><b>Road transport</b>: electrify on a clean grid</li><li><b>Buildings</b>: insulation, efficient appliances</li></ul></div>
            <div class="side"><h4>Harder</h4><ul><li><b>Cement, steel</b>: process emissions</li><li><b>Aviation, shipping</b>: need dense energy</li><li><b>Agriculture</b>: methane and N₂O from many small sources</li></ul></div>
          </div>
          <div class="note exam"><b>Process emissions</b> (from the chemistry itself, not fuel) make industry hard to decarbonise. Example: CaCO₃ → CaO + CO₂ in cement kilns.</div>
        ` }
      ],
      flashcards: [
        { front: 'Largest emitting sector?', back: '<b>Electricity and heat</b>, about 34% of CO₂.' },
        { front: 'CO₂ per tonne of cement?', back: 'About <b>0.8 t</b>, half from calcination.' },
        { front: 'Transport share and largest subsector?', back: 'About <b>16%</b>; <b>road</b> transport.' },
        { front: 'Buildings\' share with and without Scope 2?', back: '<b>6%</b> direct; <b>17–19%</b> with electricity.' }
      ],
      oneLiners: [
        'Industry emits about 24% of GHGs.',
        'Agriculture and land use emit about 22%.',
        'Drained peatland releases large stored carbon.'
      ],
      formulas: []
    },
    {
      id: 'm5-footprint-mitigation',
      title: 'Carbon footprint mitigation and offsetting',
      short: 'Footprint mitigation',
      blurb: 'Renewables, efficiency as the first fuel, CCS, CCU and DAC, natural sinks, circular economy, transport, behaviour and carbon pricing, offsets, and India\'s position.',
      source: 'Lecture W5 (Carbon Footprint), pages 5–10',
      tabs: [
        { title: 'Energy and efficiency', html: `
          <p class="lead">Mitigation strategies <b>cut emissions at source or enhance carbon sinks</b>. They fall into five areas: energy system change, energy efficiency, land use and natural sinks, industrial and technological fixes, and behaviour and policy.</p>
          <ul>
            <li><b>Renewables</b>: the cornerstone. Solar PV levelised cost fell <b>over 90% since 2010</b>; now the cheapest new power in most places. Also hydro, geothermal, tidal. India: <b>500 GW</b> non-fossil by 2030. Building it needs civil engineers (sites, grid), electrical engineers (grid integration, storage) and mechanical engineers (turbines, panels).</li>
            <li><b>Nuclear</b>: not renewable but low-carbon baseload; <b>small modular reactors</b> under development.</li>
            <li><b>Efficiency</b>: the IEA calls it the <b>"first fuel"</b>. Buildings: insulation, double or triple glazing, LEDs, smart thermostats, <b>heat pumps</b>. Industry: waste heat recovery, variable speed drives. Transport: fuel economy, aerodynamics, light materials.</li>
          </ul>
        ` },
        { title: 'Capture and sinks', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>CCS</b></td><td>Capture CO₂ at the source and store it in <b>depleted oil and gas reservoirs or saline aquifers</b>. Key for cement, steel, chemicals</td></tr>
              <tr><td><b>CCU</b></td><td>Turn CO₂ into fuels, building materials, chemicals. Not permanent removal unless products lock it away</td></tr>
              <tr><td><b>DAC</b></td><td><b>Direct Air Capture</b> from ambient air. Expensive and energy-hungry, but tackles residual or historical emissions</td></tr>
            </tbody>
          </table>
          <ul>
            <li><b>Natural sinks</b>: forests, wetlands, soils, oceans. Deforestation is <b>10–15%</b> of emissions.</li>
            <li><b>Afforestation</b> (on land that wasn't forest) vs <b>reforestation</b> (restoring degraded forest). Wrong species or planting on grassland can <b>reduce</b> biodiversity and carbon.</li>
            <li>Farming: reduced tillage, precision fertiliser, better rice methods, livestock management, <b>agroforestry</b>.</li>
          </ul>
        ` },
        { title: 'Materials, transport, behaviour', html: `
          <ul>
            <li><b>Circular economy</b> vs linear "take, make, dispose". Recycled aluminium needs about <b>95% less energy</b>. Design for disassembly, material substitution, buildings designed for deconstruction.</li>
            <li><b>Transport</b>: EVs (zero tailpipe; low lifecycle emissions on a clean grid), <b>modal shift</b> (car to public transport, road freight to rail or coastal shipping), compact mixed-use cities. Fast EV growth is raising demand for charging points, battery factories and grid upgrades, all engineering work.</li>
            <li><b>Demand side</b>: changing what people consume, often cheaper than supply-side fixes. Less ruminant meat (beef, lamb, dairy), since livestock are a big share of farm GHGs; cut food waste (about <b>one-third</b> of food is wasted); energy and carbon labels make the carbon cost of a choice visible.</li>
            <li><b>Carbon pricing</b>: carbon taxes and emissions trading (<b>cap-and-trade</b>) are the main ways to put a price on carbon, which pushes businesses and people to shrink their footprints.</li>
          </ul>
        ` },
        { title: 'Offsets and India', html: `
          <p><b>Offsetting</b>: paying for equal reductions or removals elsewhere, such as renewables abroad, avoided deforestation under <b>REDD+</b>, cookstoves, DAC. Bought on voluntary markets or compliance schemes like the CDM.</p>
          <div class="note exam">Credible offsets must be <b>additional, measurable, permanent and independently verified</b>. Offsets are a <b>complement, not a substitute</b>: cut emissions first, offset only unavoidable residuals.</div>
          <p><b>India</b>: a fast-growing economy of over <b>1.4 billion</b> people that must balance growth, poverty reduction and energy access with cutting emissions. Low per capita but a top absolute emitter because of its population, not high-consumption lifestyles. Its plans sit in the <b>NAPCC</b> and its <b>NDC</b> under Paris. Commitments: cut GDP carbon intensity by 2030, <b>50%</b> non-fossil power capacity by 2030, <b>net zero by 2070</b>. Today's infrastructure choices lock in emissions for about <b>50 years</b>.</p>
        ` }
      ],
      flashcards: [
        { front: 'What does the IEA call energy efficiency?', back: 'The <b>"first fuel"</b>.' },
        { front: 'Fall in solar PV cost since 2010?', back: '<b>Over 90%</b>.' },
        { front: 'CCS vs CCU vs DAC?', back: 'CCS stores CO₂ underground; CCU turns it into products; DAC pulls it from ambient air.' },
        { front: 'Afforestation vs reforestation?', back: 'Afforestation: trees on land not previously forest. Reforestation: restoring degraded forest.' },
        { front: 'Energy saved by recycled aluminium?', back: 'About <b>95%</b>.' },
        { front: 'Four tests of a credible offset?', back: '<b>Additional, measurable, permanent, verified</b>.' },
        { front: 'What is modal shift?', back: 'Moving travel or freight to lower-carbon modes (car to bus, road to rail).' }
      ],
      oneLiners: [
        'About one-third of all food produced is wasted.',
        'REDD+ funds avoided deforestation.',
        'Offsets are for residual emissions only.'
      ],
      formulas: []
    }
  ],
  figures: []
});
