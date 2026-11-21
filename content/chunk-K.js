CHUNK({
  chunk: 'K',
  module: 'm4',
  topics: [
    {
      id: 'm4-eia-basics',
      title: 'Environmental Impact Assessment: meaning and principles',
      short: 'EIA basics',
      blurb: 'What EIA is, its six objectives and six principles.',
      source: 'Lecture W4 (Environmental Impact Assessment), pages 1–2',
      tabs: [
        { title: 'Meaning', html: `
          <p class="lead"><b>EIA</b>: evaluates a proposed project's likely environmental consequences <b>before it begins</b>, to identify and mitigate adverse impacts; also covers <b>social, cultural, human health</b> factors.</p>
          <div class="kv">
            <div><span>Environmental protection</span><b>ecosystems, biodiversity</b></div>
            <div><span>Public health</span><b>human well-being</b></div>
            <div><span>Sustainable development</span><b>growth vs protection</b></div>
            <div><span>Informed decisions</span><b>facts for decision-makers</b></div>
          </div>
        ` },
        { title: 'Objectives and principles', html: `
          <p><b>6 objectives</b>: <b>identify</b> impacts (positive and negative), <b>predict</b> magnitude and significance, <b>evaluate alternatives</b>, develop mitigation, inform decision-makers and public, promote sustainable development.</p>
          <div class="kv">
            <div><span>Participation</span><b>stakeholders</b></div>
            <div><span>Transparency</span><b>open information</b></div>
            <div><span>Accountability</span><b>responsibility</b></div>
            <div><span>Credibility</span><b>objective</b></div>
            <div><span>Sustainability</span><b>long-term</b></div>
            <div><span>Integration</span><b>every planning stage</b></div>
          </div>
          <div class="mnemonic">6 principles: P-T-A-C-S-I.</div>
        ` }
      ],
      flashcards: [
        { front: 'Define EIA.', back: 'A process to evaluate a proposed project\'s environmental consequences <b>before it begins</b> and mitigate adverse impacts.' },
        { front: 'Six principles of EIA?', back: 'Participation, transparency, accountability, credibility, sustainability, integration.' },
        { front: 'Name three objectives of EIA.', back: 'Identify impacts, predict magnitude, evaluate alternatives (also mitigate, inform, promote sustainability).' },
        { front: 'Besides ecology, what does EIA consider?', back: '<b>Social, cultural and human health</b> factors.' }
      ],
      oneLiners: [
        'EIA happens before a project starts.',
        'EIA looks at both positive and negative impacts.',
        'EIA evaluates alternatives to the proposed project.'
      ],
      formulas: []
    },
    {
      id: 'm4-eia-process',
      title: 'The EIA process',
      short: 'EIA process',
      blurb: 'The eight steps of EIA from screening to monitoring, and the mitigation hierarchy.',
      source: 'Lecture W4 (Environmental Impact Assessment), pages 2–4',
      tabs: [
        { title: 'Eight steps', html: `
          <ol class="steps">
            <li><b>Screening</b> full EIA needed? (mandatory lists: mining, highways, power plants)</li>
            <li><b>Scoping</b> key issues, boundaries (geographic, temporal, thematic), <b>Terms of Reference (ToR)</b></li>
            <li><b>Impact assessment</b> magnitude, significance, duration</li>
            <li><b>Mitigation</b> avoid, reduce, compensate</li>
            <li><b>EMP</b> (Environmental Management Plan)</li>
            <li><b>Public consultation</b> hearings, meetings, written feedback</li>
            <li><b>Review and decision</b> approve, modify or reject</li>
            <li><b>Monitoring</b> and evaluation</li>
          </ol>
          <div class="mnemonic">"Some Scientists Insist Mitigation Ends Public Review Monitoring".</div>
        ` },
        { title: 'Impacts, mitigation, EMP', html: `
          <p>Impacts: direct/indirect, short/long-term, <b>reversible/irreversible</b>. Tools: checklists, <b>Leopold matrix</b>, modelling, GIS.</p>
          <p><b>Mitigation hierarchy</b>: <b>avoid → minimise → restore → offset</b>.</p>
          <div class="kv">
            <div><span>EMP parts</span><b>monitoring plan, reporting, emergency response</b></div>
            <div><span>EMP status</span><b>legal condition of approval</b></div>
            <div><span>Review checks</span><b>baseline data</b>, scientific validity</div>
            <div><span>Monitoring</span><b>adaptive management</b></div>
          </div>
        ` }
      ],
      flashcards: [
        { front: 'Eight steps of EIA?', back: 'Screening, scoping, impact assessment, mitigation, EMP, public consultation, review and decision, monitoring.' },
        { front: 'Purpose of screening?', back: 'Decide whether a <b>full EIA is needed</b> and at what level.' },
        { front: 'What does scoping produce?', back: 'Key issues, study boundaries and the <b>Terms of Reference (ToR)</b>.' },
        { front: 'Mitigation hierarchy?', back: '<b>Avoid → minimise → restore → offset</b>.' },
        { front: 'Three parts of an EMP?', back: 'Monitoring plan, reporting requirements, emergency response.' },
        { front: 'What is adaptive management?', back: 'Adjusting mitigation based on <b>monitoring results</b>.' }
      ],
      oneLiners: [
        'Scoping sets geographic, temporal and thematic boundaries.',
        'Public consultation uses hearings, meetings and written feedback.',
        'Review can approve, modify or reject.'
      ],
      formulas: []
    },
    {
      id: 'm4-eia-methods',
      title: 'EIA methodologies',
      short: 'EIA methods',
      blurb: 'Checklists, the Leopold matrix, network analysis and modelling.',
      source: 'Lecture W4 (Environmental Impact Assessment), pages 4–7',
      tabs: [
        { title: 'Four methods', html: `
          <table class="tbl">
            <thead><tr><th>Method</th><th>Nature</th><th>Strength</th><th>Limit</th></tr></thead>
            <tbody>
              <tr><td><b>Checklist</b></td><td>Qualitative (YES/NO, LOW/HIGH)</td><td>Simple, broad</td><td><b>No cause-effect</b></td></tr>
              <tr><td><b>Matrix</b></td><td>Semi-quantitative</td><td>Visual action-factor grid</td><td>Poor for cumulative</td></tr>
              <tr><td><b>Network</b></td><td>Cause-effect flowchart</td><td><b>Indirect, cumulative</b> impacts</td><td>Needs experts, time</td></tr>
              <tr><td><b>Modelling</b></td><td>Quantitative</td><td>"What if" scenarios</td><td>Data-heavy, assumption-sensitive</td></tr>
            </tbody>
          </table>
          <p>Network chain: primary → secondary → tertiary (road → deforestation → erosion → <b>river sedimentation</b>).</p>
        ` },
        { title: 'Key details', html: `
          <ul>
            <li>Checklist types: <b>simple descriptive, questionnaire, weighted</b> (numerical weights).</li>
            <li><b>Leopold matrix (1971)</b>, most used: rows = <b>environmental factors</b>, columns = <b>project actions</b>; cell = <b>magnitude</b> (1–10 or −10 to +10) + <b>importance</b> (1–10).</li>
            <li>Models: air <b>AERMOD</b> (Gaussian plume); water <b>QUAL2K, SWAT</b>; noise, ecological, <b>risk</b>.</li>
          </ul>
        ` }
      ],
      flashcards: [
        { front: 'Four EIA methodologies?', back: '<b>Checklist, matrix, network analysis, modelling</b>.' },
        { front: 'Most widely used matrix and its year?', back: '<b>Leopold matrix, 1971</b>.' },
        { front: 'Leopold matrix rows and columns?', back: 'Rows: <b>environmental factors</b>. Columns: <b>project actions</b>.' },
        { front: 'Which method best shows indirect and cumulative impacts?', back: '<b>Network analysis</b>.' },
        { front: 'Which method is quantitative?', back: '<b>Modelling</b> (e.g. AERMOD, QUAL2K, SWAT).' },
        { front: 'Three types of checklist?', back: 'Simple descriptive, questionnaire, weighted.' }
      ],
      oneLiners: [
        'Leopold cells hold magnitude and importance.',
        'AERMOD is a Gaussian plume air model.',
        'Checklists cannot show cause and effect.'
      ],
      formulas: []
    },
    {
      id: 'm4-eia-sectors',
      title: 'EIA in sectors, benefits and challenges',
      short: 'EIA uses and limits',
      blurb: 'Sector mitigation examples, plus EIA benefits, challenges and future.',
      source: 'Lecture W4 (Environmental Impact Assessment), pages 7–10',
      tabs: [
        { title: 'Sectors', html: `
          <table class="tbl">
            <thead><tr><th>Sector</th><th>Mitigation</th></tr></thead>
            <tbody>
              <tr><td>Roads, railways</td><td><b>Wildlife crossings</b>, noise barriers</td></tr>
              <tr><td>Ports</td><td><b>Ballast water</b> plans</td></tr>
              <tr><td>Dams</td><td><b>Environmental flows</b>, <b>fish ladders</b></td></tr>
              <tr><td>Power plants</td><td><b>Closed-loop cooling</b></td></tr>
              <tr><td>Wind</td><td>Siting for <b>birds and bats</b></td></tr>
              <tr><td>Mining</td><td>Prevent <b>acid mine drainage</b>, closure plans</td></tr>
              <tr><td>Agriculture</td><td>Irrigation causes <b>salinity</b>; anaerobic digesters</td></tr>
              <tr><td>Tourism</td><td><b>Limit visitors</b></td></tr>
              <tr><td>Forestry</td><td><b>Native species</b>, not monocultures</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Benefits and challenges', html: `
          <p>Benefits: improved design, reduced risks, stakeholder engagement, transparency, sustainable development, <b>cost savings</b> (early problem detection).</p>
          <p>Challenges: <b>lack of capacity</b> (developing countries), limited public participation, <b>weak enforcement</b>, <b>cumulative impacts</b> missed (one project at a time).</p>
          <p>Future: <b>Strategic Environmental Assessment (SEA)</b>, GIS, remote sensing.</p>
        ` }
      ],
      flashcards: [
        { front: 'EIA mitigation for dams?', back: '<b>Environmental flows, fish ladders</b>, compensation for displaced people.' },
        { front: 'EIA concern for wind farms?', back: '<b>Birds and bats</b>, noise, visual aesthetics.' },
        { front: 'Four challenges of EIA?', back: 'Lack of capacity, limited participation, weak enforcement, ignored cumulative impacts.' },
        { front: 'What is the trend beyond project EIA?', back: '<b>Strategic Environmental Assessment (SEA)</b>.' },
        { front: 'Port projects manage which water to stop invasive spread?', back: '<b>Ballast water</b>.' }
      ],
      oneLiners: [
        'Road EIAs use wildlife crossings and noise barriers.',
        'Irrigation EIAs check soil salinity.',
        'Reforestation should use native species, not monocultures.',
        'EIA saves cost by catching problems early.'
      ],
      formulas: []
    }
  ],
  figures: []
});
