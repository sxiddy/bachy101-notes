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
          <p class="lead"><b>Carbon footprint</b>: total GHG emission caused <b>directly and indirectly</b> by a person, organisation, event, product or service, in <b>CO₂ equivalent (CO₂e)</b>. Grew out of the <b>ecological footprint</b>; popular in the early 2000s.</p>
          <p>Covers CO₂, CH₄, N₂O, fluorinated gases, converted to CO₂e by <b>Global Warming Potential</b>.</p>
          <p>Scopes from the <b>Greenhouse Gas Protocol</b> (most widely used international standard):</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Scope 1</b></td><td><b>Direct emissions</b> from owned/controlled sources: own boilers, furnaces, vehicles.</td></tr>
              <tr><td><b>Scope 2</b></td><td><b>Indirect energy emissions</b> from bought electricity, heat, steam; counted to the consumer, not the plant.</td></tr>
              <tr><td><b>Scope 3</b></td><td><b>Other indirect emissions</b> across value chain: extraction, manufacturing, transport, use, disposal. Often the <b>largest share</b>.</td></tr>
            </tbody>
          </table>
          <div data-viz="carbon-scopes"></div>
          <p>A product's footprint spans <b>all three scopes</b>.</p>
        ` },
        { title: 'GWP and footprints', html: `
          <p><b>GWP</b>: heat trapped by a gas relative to CO₂ over a time span, usually <b>100 years</b> (GWP100).</p>
          <ul>
            <li>Methane GWP100 about <b>28–34</b>.</li>
            <li>Nitrous oxide about <b>265–298</b>.</li>
            <li>Some F-gases in the <b>thousands or tens of thousands</b>.</li>
          </ul>
          <p>Cutting methane gives fast near-term benefit.</p>
          <p>Scales: <b>personal, national, global</b>. Global average hides huge gaps (energy sources, industry, lifestyle).</p>
          <table class="tbl">
            <thead><tr><th>Who</th><th>t CO₂e per person per year</th></tr></thead>
            <tbody>
              <tr><td>Global average</td><td>About <b>4</b></td></tr>
              <tr><td>USA</td><td><b>14–16</b></td></tr>
              <tr><td>India</td><td>About <b>2</b></td></tr>
              <tr><td>Many low-income countries</td><td>Under 1</td></tr>
            </tbody>
          </table>
          <p>Largest absolute emitters: China, USA, India, EU, Russia. Per capita, India is among the lowest of major economies.</p>
        ` },
        { title: 'Measuring', html: `
          <ul>
            <li><b>Life Cycle Assessment (LCA)</b>: main engineering tool; <b>cradle</b> (extraction) to <b>grave</b> (disposal), ideally <b>cradle to cradle</b> (reuse, recycling). Example: smartphone (mining, manufacture, shipping, charging, disposal).</li>
            <li><b>Emission factors</b>: convert activity data (litres, kWh, tonne-km) to CO₂e; published by IPCC, IEA, governments. India's electricity factor high (coal) vs France, Norway.</li>
            <li><b>Standards</b>: GHG Protocol (corporations), <b>ISO 14064</b> (GHG inventories), <b>PAS 2050</b> (product footprint). Nations report to UNFCCC using IPCC guidelines.</li>
          </ul>
          <p>LCA guides redesign: lower-carbon materials, efficient manufacturing, longer life, easier recycling. Accuracy depends on <b>activity data</b> and fitting emission factors.</p>
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
          <p class="lead">Mitigation <b>cuts emissions at source or enhances carbon sinks</b>. Five areas: energy system, efficiency, land use and sinks, industrial/tech fixes, behaviour and policy.</p>
          <ul>
            <li><b>Renewables</b>: cornerstone. Solar PV levelised cost fell <b>over 90% since 2010</b>; cheapest new power in most places. Also hydro, geothermal, tidal. India: <b>500 GW</b> non-fossil by 2030. Needs civil (sites, grid), electrical (integration, storage), mechanical (turbines, panels) engineers.</li>
            <li><b>Nuclear</b>: not renewable but low-carbon baseload; <b>small modular reactors</b> under development.</li>
            <li><b>Efficiency</b>: the IEA calls it the <b>"first fuel"</b>. Buildings: insulation, double or triple glazing, LEDs, smart thermostats, <b>heat pumps</b>. Industry: waste heat recovery, variable speed drives. Transport: fuel economy, aerodynamics, light materials.</li>
          </ul>
        ` },
        { title: 'Capture and sinks', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>CCS</b></td><td>Capture CO₂ at the source and store it in <b>depleted oil and gas reservoirs or saline aquifers</b>. Key for cement, steel, chemicals</td></tr>
              <tr><td><b>CCU</b></td><td>CO₂ into fuels, building materials, chemicals; not permanent unless locked away</td></tr>
              <tr><td><b>DAC</b></td><td><b>Direct Air Capture</b> from ambient air; expensive, energy-hungry; for residual/historical emissions</td></tr>
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
            <li><b>Circular economy</b> vs linear "take, make, dispose". Recycled aluminium needs about <b>95% less energy</b>. Design for disassembly, material substitution, deconstruction.</li>
            <li><b>Transport</b>: EVs (zero tailpipe; low lifecycle emissions on clean grid), <b>modal shift</b> (car to public transport, road freight to rail/coastal shipping), compact mixed-use cities. EVs need charging points, battery factories, grid upgrades.</li>
            <li><b>Demand side</b>: often cheaper than supply fixes. Less ruminant meat (beef, lamb, dairy); cut food waste (about <b>one-third</b> wasted); energy and carbon labels.</li>
            <li><b>Carbon pricing</b>: carbon taxes and emissions trading (<b>cap-and-trade</b>).</li>
          </ul>
        ` },
        { title: 'Offsets and India', html: `
          <p><b>Offsetting</b>: paying for equal reductions elsewhere: renewables abroad, avoided deforestation (<b>REDD+</b>), cookstoves, DAC. Voluntary markets or compliance schemes (CDM).</p>
          <div class="note exam">Credible offsets: <b>additional, measurable, permanent, independently verified</b>. A <b>complement, not a substitute</b>: offset only unavoidable residuals.</div>
          <p><b>India</b>: over <b>1.4 billion</b> people; balances growth, poverty reduction, energy access with cuts. Low per capita, top absolute emitter (population, not lifestyle). Plans: <b>NAPCC</b> and <b>NDC</b> under Paris. Commitments: cut GDP carbon intensity by 2030, <b>50%</b> non-fossil capacity by 2030, <b>net zero by 2070</b>. Infrastructure locks in emissions for about <b>50 years</b>.</p>
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
