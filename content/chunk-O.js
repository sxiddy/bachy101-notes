CHUNK({
  chunk: 'O',
  module: 'm4',
  topics: [
    {
      id: 'm4-kyoto-background',
      title: 'Climate science and the road to Kyoto',
      short: 'Road to Kyoto',
      blurb: 'The greenhouse effect, rising CO₂, the IPCC, the collective action problem, the UNFCCC of 1992 and the CBDR-RC principle.',
      source: 'Lecture W4 (Kyoto Protocol), pages 2–4',
      tabs: [
        { title: 'Science and IPCC', html: `
          <ul>
            <li><b>Greenhouse effect</b>: CO₂, methane, N₂O trap <b>infrared</b>. Without it Earth ≈ <b>−18°C</b>.</li>
            <li>CO₂: <b>280 ppm</b> pre-industrial → over <b>420 ppm</b>, highest in <b>800,000 years</b> (ice cores).</li>
            <li><b>IPCC</b> does <b>no original research</b>; reviews published studies.</li>
            <li><b>First IPCC Assessment Report: 1990</b>.</li>
          </ul>
        ` },
        { title: 'UNFCCC and CBDR-RC', html: `
          <ul>
            <li><b>UNFCCC</b>: <b>Earth Summit, Rio de Janeiro, 1992</b>; first treaty accepting human-caused climate change; parent of Kyoto.</li>
            <li>Flaw: <b>no binding targets</b>.</li>
            <li><b>Collective action problem</b>: no gain cutting alone; fix = <b>legally binding treaty</b>.</li>
          </ul>
          <p><b>CBDR-RC</b> = <b>Common But Differentiated Responsibilities and Respective Capabilities</b>: developed nations carry more historical responsibility.</p>
        ` }
      ],
      flashcards: [
        { front: 'Earth\'s average temperature without the greenhouse effect?', back: 'About <b>−18°C</b>.' },
        { front: 'Pre-industrial vs current CO₂?', back: 'About <b>280 ppm</b> then; over <b>420 ppm</b> now.' },
        { front: 'Does the IPCC do original research?', back: '<b>No</b>; it assesses published studies.' },
        { front: 'Year of the first IPCC Assessment Report?', back: '<b>1990</b>.' },
        { front: 'UNFCCC: where and when?', back: 'Earth Summit, <b>Rio de Janeiro, 1992</b>.' },
        { front: 'Main flaw of the UNFCCC?', back: '<b>No binding targets</b>.' },
        { front: 'What does CBDR-RC stand for?', back: 'Common But Differentiated Responsibilities and Respective Capabilities.' }
      ],
      oneLiners: [
        'Current CO₂ is the highest in 800,000 years of ice-core records.',
        'The UNFCCC is the parent treaty of the Kyoto Protocol.',
        'Climate change is a collective action problem.'
      ],
      formulas: []
    },
    {
      id: 'm4-kyoto-protocol',
      title: 'Kyoto Protocol: structure and targets',
      short: 'Kyoto Protocol',
      blurb: 'COP3 in 1997, entry into force in 2005, Annex I and Non-Annex I, the 5% target, six greenhouse gases, GWP, the US exit, and the Doha Amendment.',
      source: 'Lecture W4 (Kyoto Protocol), pages 4–5, 7, 9',
      tabs: [
        { title: 'Dates and Annex I', html: `
          <div class="kv">
            <div><span>Adopted</span><b>11 Dec 1997, COP3, Kyoto</b></div>
            <div><span>In force</span><b>16 Feb 2005</b> (55% of emissions ratified)</div>
            <div><span>First period</span><b>2008–2012</b></div>
            <div><span>Second period</span>to <b>2020</b>, <b>Doha Amendment</b> (COP18, 2012)</div>
            <div><span>India ratified</span><b>August 2002</b></div>
          </div>
          <div class="vs">
            <div class="side"><h4>Annex I</h4><p><b>37 industrialised</b> nations; <b>binding</b> targets.</p></div>
            <div class="side"><h4>Non-Annex I</h4><p>Developing (India, China, Brazil); <b>no binding</b> targets.</p></div>
          </div>
        ` },
        { title: 'Targets, gases, weak points', html: `
          <ul>
            <li>Annex I: <b>5% below 1990</b> levels; <b>EU 8%</b>, <b>US 7%</b>, <b>Japan 6%</b>.</li>
            <li><b>Six gases</b>: CO₂, CH₄, N₂O, HFCs, PFCs, SF₆. Methane GWP ≈ <b>28–36</b> (100 years).</li>
            <li><b>US signed (1998), never ratified</b>; withdrew <b>2001</b> (≈ <b>25%</b> of emissions).</li>
            <li><b>Canada withdrew</b>; second period covered only <b>12%</b> of emissions.</li>
          </ul>
          <div class="mnemonic">Six gases: C M N H P S.</div>
        ` }
      ],
      flashcards: [
        { front: 'Kyoto Protocol adopted when and where?', back: '<b>11 December 1997</b>, COP3, Kyoto.' },
        { front: 'Kyoto entered into force?', back: '<b>16 February 2005</b>.' },
        { front: 'Entry-into-force condition?', back: 'Ratification by countries with at least <b>55%</b> of global emissions.' },
        { front: 'Annex I group target?', back: 'At least <b>5% below 1990</b> levels in 2008–2012.' },
        { front: 'EU, US and Japan targets?', back: 'EU <b>8%</b>, US <b>7%</b>, Japan <b>6%</b>.' },
        { front: 'Kyoto\'s six gases?', back: 'CO₂, CH₄, N₂O, HFCs, PFCs, SF₆.' },
        { front: 'What was the Doha Amendment?', back: 'Second period to <b>2020</b>, set at COP18 in 2012.' },
        { front: 'When did India ratify Kyoto?', back: '<b>August 2002</b>, as Non-Annex I.' }
      ],
      oneLiners: [
        'Annex I has 37 industrialised nations.',
        'The US never ratified; it withdrew in 2001.',
        'GWP puts all gases on one CO₂-equivalent scale.'
      ],
      formulas: [
        { name: 'CO₂-equivalent', html: 'CO₂e = mass of gas × GWP' }
      ]
    },
    {
      id: 'm4-kyoto-mechanisms',
      title: 'Kyoto flexible mechanisms and legacy',
      short: 'Kyoto mechanisms',
      blurb: 'Emissions trading, Joint Implementation, the Clean Development Mechanism, India and the CDM, Kyoto\'s achievements and lessons, Paris, and what changed for engineers.',
      source: 'Lecture W4 (Kyoto Protocol), pages 5–9',
      tabs: [
        { title: 'Three mechanisms', html: `
          <table class="tbl">
            <thead><tr><th>Mechanism</th><th>Between</th><th>Key fact</th></tr></thead>
            <tbody>
              <tr><td><b>Emissions Trading</b></td><td>Countries</td><td><b>Cap-and-trade</b>; unit = 1 tonne CO₂e</td></tr>
              <tr><td><b>Joint Implementation</b></td><td>Annex I → <b>Annex I</b></td><td>Mostly <b>Eastern Europe</b></td></tr>
              <tr><td><b>CDM</b></td><td>Annex I → <b>developing</b></td><td>Earns <b>Certified Emission Reductions</b></td></tr>
            </tbody>
          </table>
          <div data-viz="kyoto-mechanisms"></div>
          <div class="note trap">JI = two <b>developed</b> countries; CDM = developed invests in <b>developing</b>.</div>
        ` },
        { title: 'India, legacy, Paris', html: `
          <ul>
            <li>India: no binding targets, but one of the <b>largest CDM hosts</b>.</li>
            <li>Kyoto: first <b>legally binding</b> climate treaty; built carbon markets and <b>MRV</b> (Measuring, Reporting, Verifying).</li>
            <li><b>Paris Agreement (2015)</b>: all countries, <b>Nationally Determined Contributions (NDCs)</b>.</li>
            <li>Engineers: emissions got a <b>price</b>; <b>Life Cycle Assessment (LCA)</b> = raw material to disposal.</li>
          </ul>
        ` }
      ],
      flashcards: [
        { front: 'Three Kyoto flexible mechanisms?', back: 'Emissions Trading, Joint Implementation, Clean Development Mechanism.' },
        { front: 'JI vs CDM?', back: 'JI: Annex I invests in <b>another Annex I</b>. CDM: Annex I invests in a <b>developing</b> country.' },
        { front: 'Credits earned under CDM?', back: '<b>Certified Emission Reductions</b> (CERs).' },
        { front: 'Where was JI most common?', back: '<b>Eastern Europe</b>.' },
        { front: 'What is MRV?', back: '<b>Measuring, Reporting and Verifying</b> emissions.' },
        { front: 'What does Paris use instead of Annex targets?', back: '<b>Nationally Determined Contributions</b> (NDCs) for all countries.' }
      ],
      oneLiners: [
        'India was one of the largest CDM hosts.',
        'Emissions trading is also called cap-and-trade.',
        'LCA measures footprint from raw material to disposal.'
      ],
      formulas: []
    }
  ],
  figures: []
});
