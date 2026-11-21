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
          <p class="lead"><b>Carbon footprint</b>: total GHG emissions, <b>direct and indirect</b>, of a person, organisation, event or product, in <b>CO₂e</b>. Grew from the <b>ecological footprint</b> (early 2000s).</p>
          <p>Scopes: <b>GHG Protocol</b> (most used standard).</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Scope 1</b></td><td><b>Direct</b>: own boilers, furnaces, vehicles</td></tr>
              <tr><td><b>Scope 2</b></td><td><b>Bought energy</b> (electricity, heat, steam); counted to consumer</td></tr>
              <tr><td><b>Scope 3</b></td><td><b>Value chain</b>; often the <b>largest</b></td></tr>
            </tbody>
          </table>
          <div data-viz="carbon-scopes"></div>
        ` },
        { title: 'GWP and footprints', html: `
          <p><b>GWP</b>: heat trapped relative to CO₂, usually over <b>100 yr</b> (GWP100).</p>
          <div class="kv">
            <div><span>Methane</span><b>28–34</b></div>
            <div><span>N₂O</span><b>265–298</b></div>
            <div><span>F-gases</span><b>1000s–10,000s</b></div>
          </div>
          <table class="tbl">
            <thead><tr><th>Who</th><th>t CO₂e / person / yr</th></tr></thead>
            <tbody>
              <tr><td>Global</td><td><b>≈ 4</b></td></tr>
              <tr><td>USA</td><td><b>14–16</b></td></tr>
              <tr><td>India</td><td><b>≈ 2</b></td></tr>
              <tr><td>Low-income</td><td>&lt; 1</td></tr>
            </tbody>
          </table>
          <p>Cutting methane = fast near-term benefit.</p>
          <p>Top absolute emitters: <b>China, USA, India</b>, EU, Russia. India per capita: among <b>lowest</b> of major economies.</p>
        ` },
        { title: 'Measuring', html: `
          <ul>
            <li><b>LCA</b>: <b>cradle</b> (extraction) to <b>grave</b> (disposal); ideally <b>cradle to cradle</b>. Example: smartphone.</li>
            <li><b>Emission factors</b>: activity data (litres, kWh, tonne-km) → CO₂e; by IPCC, IEA. India's grid factor high (coal) vs France, Norway.</li>
            <li>Standards: GHG Protocol (corporate), <b>ISO 14064</b> (inventories), <b>PAS 2050</b> (products). Nations report to <b>UNFCCC</b>.</li>
          </ul>
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
            <thead><tr><th>Sector</th><th>Share</th><th>Fact</th></tr></thead>
            <tbody>
              <tr><td><b>Electricity, heat</b></td><td><b>34%</b></td><td>Coal ≈ <b>2×</b> CO₂ of gas</td></tr>
              <tr><td><b>Industry</b></td><td><b>24%</b></td><td>1 t cement → <b>0.8 t CO₂</b>, half from <b>calcination</b></td></tr>
              <tr><td><b>Agriculture, land</b></td><td><b>22%</b></td><td>Methane, N₂O, <b>peatland drainage</b></td></tr>
              <tr><td><b>Transport</b></td><td><b>16%</b></td><td><b>Road</b> largest</td></tr>
              <tr><td><b>Buildings</b></td><td><b>6%</b> (17–19% with Scope 2)</td><td>Heating, cooking</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Hard and easy cuts', html: `
          <div class="vs">
            <div class="side"><h4>Easier</h4><ul><li><b>Power</b>: solar, wind</li><li><b>Road</b>: electrify</li><li><b>Buildings</b>: insulation</li></ul></div>
            <div class="side"><h4>Harder</h4><ul><li><b>Cement, steel</b>: process emissions</li><li><b>Aviation, shipping</b>: energy density; green hydrogen</li><li><b>Agriculture</b>: many small sources</li></ul></div>
          </div>
          <p><b>Process emissions</b>: from the chemistry itself, not fuel.</p>
          <div class="eq" data-label="Cement kiln">CaCO₃ → CaO + CO₂</div>
          <p>Cleaning the <b>grid</b> gives the biggest single cut.</p>
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
        { title: 'Energy and capture', html: `
          <ul>
            <li><b>Renewables</b>: solar PV cost <b>−90% since 2010</b>; India <b>500 GW</b> non-fossil by 2030.</li>
            <li><b>Nuclear</b>: not renewable, low-carbon; <b>small modular reactors</b>.</li>
            <li><b>Efficiency</b>: IEA's <b>"first fuel"</b>; LEDs, <b>heat pumps</b>, waste heat recovery.</li>
          </ul>
          <table class="tbl">
            <tbody>
              <tr><td><b>CCS</b></td><td>Store in <b>depleted oil/gas reservoirs, saline aquifers</b></td></tr>
              <tr><td><b>CCU</b></td><td>CO₂ into products; not permanent</td></tr>
              <tr><td><b>DAC</b></td><td><b>Direct Air Capture</b>; costly</td></tr>
            </tbody>
          </table>
          <p><b>Afforestation</b> (land never forest) vs <b>reforestation</b> (restore degraded forest). Wrong species or planting on grassland can <b>reduce</b> biodiversity. Farming: <b>agroforestry</b>, reduced tillage.</p>
        ` },
        { title: 'Materials, behaviour, offsets', html: `
          <ul>
            <li><b>Circular economy</b> vs linear; recycled aluminium <b>−95% energy</b>.</li>
            <li><b>Modal shift</b>: car → public transport, road → rail.</li>
            <li>Diet: less ruminant meat; <b>one-third</b> of food wasted.</li>
            <li><b>Carbon pricing</b>: carbon tax, <b>cap-and-trade</b>.</li>
            <li><b>Offsets</b>: <b>REDD+</b>, cookstoves, CDM. Must be <b>additional, measurable, permanent, verified</b>; residuals only.</li>
            <li><b>India</b>: low per capita, high absolute; NAPCC, NDC; <b>net zero 2070</b>; infrastructure locks in <b>50 yr</b>.</li>
          </ul>
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
