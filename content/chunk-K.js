CHUNK({
  chunk: 'K',
  module: 'm4',
  topics: [
    {
      id: 'm4-eia-basics',
      title: 'Environmental Impact Assessment: meaning and principles',
      short: 'EIA basics',
      blurb: 'What EIA is, why it matters, its six objectives and its six key principles.',
      source: 'Lecture W4 (Environmental Impact Assessment), pages 1–2',
      tabs: [
        { title: 'What it is', html: `
          <p class="lead"><b>Environmental Impact Assessment (EIA)</b> is a process to evaluate the likely environmental consequences of a proposed project <b>before it begins</b>, to identify and mitigate adverse impacts, including <b>social, cultural and human health</b> factors.</p>
          <table class="tbl">
            <thead><tr><th>Why it matters</th><th></th></tr></thead>
            <tbody>
              <tr><td><b>Environmental protection</b></td><td>Ecosystems, biodiversity, natural resources</td></tr>
              <tr><td><b>Public health</b></td><td>Impacts on human health and well-being</td></tr>
              <tr><td><b>Sustainable development</b></td><td>Balances economic growth with protection</td></tr>
              <tr><td><b>Informed decisions</b></td><td>Gives decision-makers the facts</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Objectives', html: `
          <ol>
            <li><b>Identify</b> potential impacts, positive and negative.</li>
            <li><b>Predict</b> their magnitude and significance.</li>
            <li><b>Evaluate alternatives</b> to the project.</li>
            <li><b>Develop mitigation</b> to reduce or remove negative impacts.</li>
            <li><b>Inform</b> decision-makers and the public.</li>
            <li><b>Promote</b> environmentally sound, sustainable development.</li>
          </ol>
        ` },
        { title: 'Principles', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Participation</b></td><td>Involve stakeholders</td></tr>
              <tr><td><b>Transparency</b></td><td>Open, accessible information</td></tr>
              <tr><td><b>Accountability</b></td><td>Responsibility for outcomes</td></tr>
              <tr><td><b>Credibility</b></td><td>Reliable, objective assessment</td></tr>
              <tr><td><b>Sustainability</b></td><td>Long-term protection</td></tr>
              <tr><td><b>Integration</b></td><td>Environment built into every planning stage</td></tr>
            </tbody>
          </table>
          <div class="mnemonic">P-T-A-C-S-I: Participation, Transparency, Accountability, Credibility, Sustainability, Integration.</div>
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
      blurb: 'The eight steps of EIA from screening to monitoring, with the purpose, process and outcome of each, and the mitigation hierarchy.',
      source: 'Lecture W4 (Environmental Impact Assessment), pages 2–4',
      tabs: [
        { title: 'Eight steps', html: `
          <div class="steps">
            <div><b>Screening</b>: does the project need a full EIA? Compare with mandatory lists (mining, highways, power plants); consider size, location (near sensitive areas), impacts. Outcome: required or not.</div>
            <div><b>Scoping</b>: find the key issues; engage agencies, NGOs, public; set geographic, temporal and thematic boundaries; write the <b>Terms of Reference (ToR)</b>.</div>
            <div><b>Impact assessment</b>: forecast environmental and socio-economic impacts; list them with magnitude, significance, duration.</div>
            <div><b>Mitigation measures</b>: avoid, reduce or compensate.</div>
            <div><b>Environmental Management Plan (EMP)</b>: how mitigation is carried out and monitored.</div>
            <div><b>Public consultation</b>: hearings, community meetings, written feedback.</div>
            <div><b>Review and decision</b>: regulators or expert committees judge the report.</div>
            <div><b>Monitoring and evaluation</b>: track mitigation and its effect.</div>
          </div>
          <div class="mnemonic">"Some Scientists Insist Mitigation Ends Public Review Monitoring": Screening, Scoping, Impact, Mitigation, EMP, Public, Review, Monitoring.</div>
        ` },
        { title: 'Impacts and mitigation', html: `
          <p><b>Types of impact</b>: positive or negative, direct or indirect, short- or long-term, reversible or irreversible. <b>Tools</b>: checklists, matrices (<b>Leopold matrix</b>), modelling, GIS, risk assessment.</p>
          <h4>Mitigation hierarchy</h4>
          <ol>
            <li><b>Avoid</b> (e.g. move the project).</li>
            <li><b>Minimise</b> (e.g. control emissions).</li>
            <li><b>Rehabilitate / restore</b> (e.g. replant vegetation).</li>
            <li><b>Offset / compensate</b> (e.g. biodiversity offsets).</li>
          </ol>
          <p>Outcome: a mitigation plan built into project design.</p>
        ` },
        { title: 'EMP to monitoring', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>EMP</b></td><td>Components: monitoring plan, reporting, emergency response. Clear roles. Often a <b>legal condition of approval</b></td></tr>
              <tr><td><b>Public consultation</b></td><td>Transparency; concerns addressed and documented</td></tr>
              <tr><td><b>Review</b></td><td>Criteria: scientific validity, adequacy of <b>baseline data</b>, appropriate mitigation. Outcome: approve, modify or reject</td></tr>
              <tr><td><b>Monitoring</b></td><td>Measurable indicators, regular reports, <b>adaptive management</b> (adjust mitigation from results)</td></tr>
            </tbody>
          </table>
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
      blurb: 'Checklists, the Leopold matrix, network analysis and modelling, with their types, strengths and limits.',
      source: 'Lecture W4 (Environmental Impact Assessment), pages 4–7',
      tabs: [
        { title: 'Checklists', html: `
          <p class="lead">A list of environmental parameters checked for whether, and how much, the project affects them.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Simple descriptive</b></td><td>Lists factors (air, water, soil, noise); qualitative: YES/NO or LOW/MEDIUM/HIGH</td></tr>
              <tr><td><b>Questionnaire</b></td><td>Questions on actions: "Will the project cause water pollution?"</td></tr>
              <tr><td><b>Weighted</b></td><td>Numerical weights by importance; quantifies impact</td></tr>
            </tbody>
          </table>
          <p><b>Pros</b>: easy, broad, little expertise. <b>Cons</b>: oversimplified, no interrelations, biased weights.</p>
        ` },
        { title: 'Matrix', html: `
          <p class="lead">A 2-D grid of project actions against environmental factors. The <b>Leopold matrix (1971)</b> is the most used.</p>
          <ul>
            <li><b>Rows</b>: environmental factors (air, water, flora, fauna).</li>
            <li><b>Columns</b>: project actions (construction, drilling, transport).</li>
            <li>Each cell: <b>magnitude</b> (1–10 or −10 to +10) and <b>importance</b> (1–10).</li>
          </ul>
          <p><b>Pros</b>: visual cause-effect, many impacts per activity. <b>Cons</b>: complex with many parameters, poor for cumulative or synergistic effects, semi-quantitative.</p>
        ` },
        { title: 'Network and models', html: `
          <div class="vs">
            <div class="side"><h4>Network analysis</h4><p>Maps the <b>cause-effect chain</b>: primary, secondary, tertiary impacts. Road → deforestation → erosion → river sedimentation → aquatic life hit. Pros: <b>indirect and cumulative</b> impacts, links checklists/matrices miss, scenario analysis. Cons: expertise, time, not for quick assessments, complex, data-intensive.</p></div>
            <div class="side"><h4>Modelling</h4><p><b>Quantitative</b> computer simulations. Air: pollutant dispersion (Gaussian plume, <b>AERMOD</b>); water: surface/groundwater contamination (<b>QUAL2K, SWAT</b>); noise levels; ecological: habitat loss, species distribution; <b>risk models</b>: probability and consequences of hazards. Pros: "what if" scenarios, scientific evidence. Cons: needs baseline data, expertise; sensitive to assumptions; costly, slow.</p></div>
          </div>
        ` },
        { title: 'Comparison', html: `
          <table class="tbl">
            <thead><tr><th>Method</th><th>Nature</th><th>Strength</th><th>Limit</th></tr></thead>
            <tbody>
              <tr><td>Checklist</td><td>Qualitative (YES/NO, LOW/HIGH)</td><td>Simple, broad coverage</td><td>No cause-effect</td></tr>
              <tr><td>Matrix</td><td>Semi-quantitative (magnitude, importance)</td><td>Action-factor interactions, visual</td><td>Cumbersome; poor for cumulative</td></tr>
              <tr><td>Network</td><td>Qualitative flowchart of linked impacts</td><td>Indirect and cumulative impacts</td><td>Complex; needs experts, time</td></tr>
              <tr><td>Modelling</td><td>Quantitative simulation</td><td>Accurate; "what if" testing</td><td>Data-heavy; sensitive to assumptions</td></tr>
            </tbody>
          </table>
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
      blurb: 'How EIA works for infrastructure, energy, mining, agriculture, tourism and forestry, plus its benefits, challenges and future.',
      source: 'Lecture W4 (Environmental Impact Assessment), pages 7–10',
      tabs: [
        { title: 'Sectors', html: `
          <table class="tbl">
            <thead><tr><th>Sector</th><th>Key impacts</th><th>Mitigation examples</th></tr></thead>
            <tbody>
              <tr><td>Roads, railways</td><td>Air, water, noise, habitat fragmentation, displacement</td><td>Noise barriers, <b>wildlife crossings</b>, erosion control, resettlement</td></tr>
              <tr><td>Airports, ports</td><td>Coastal ecosystems, dredging, oil spills</td><td><b>Ballast water</b> plans, artificial reefs, alternative fuels</td></tr>
              <tr><td>Dams</td><td>Flow regimes, fish migration, flooding land</td><td><b>Environmental flows</b>, <b>fish ladders</b>, compensation</td></tr>
              <tr><td>Power plants</td><td>Air, water, GHGs, waste</td><td>Pollution control, <b>closed-loop cooling</b></td></tr>
              <tr><td>Oil and gas</td><td>Land and marine ecosystems</td><td>Spill prevention and response</td></tr>
              <tr><td>Wind / solar</td><td>Birds and bats, noise, visuals / land and water</td><td>Siting, deterrents, water-efficient tech</td></tr>
              <tr><td>Mining</td><td>Open-pit: land, water, air; underground: groundwater, stability; mineral processing: water, air, waste</td><td>Erosion control, restoration, closure plans, prevent <b>acid mine drainage</b>; closed-loop water systems for processing plants</td></tr>
              <tr><td>Agriculture</td><td>Irrigation: <b>salinity</b>; livestock: GHGs; land conversion</td><td>Efficient irrigation, manure plans, anaerobic digesters</td></tr>
              <tr><td>Tourism</td><td>Resorts, ecotourism, infrastructure</td><td>Wastewater treatment, protect reefs, <b>limit visitors</b></td></tr>
              <tr><td>Forestry</td><td>Logging, reforestation, conversion</td><td>Selective logging, <b>native species</b>, avoid monocultures and old-growth conversion</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Benefits and challenges', html: `
          <div class="vs">
            <div class="side"><h4>Benefits</h4><ul>
              <li><b>Improved project design</b> and performance.</li>
              <li><b>Reduced impacts and risks</b>.</li>
              <li><b>Stakeholder engagement</b>, public acceptance.</li>
              <li><b>Transparency and accountability</b>.</li>
              <li><b>Sustainable development</b>.</li>
              <li><b>Cost savings</b> from early problem identification.</li>
            </ul></div>
            <div class="side"><h4>Challenges</h4><ul>
              <li><b>Lack of capacity</b> (technical, financial) in developing countries.</li>
              <li><b>Limited public participation</b>.</li>
              <li><b>Weak enforcement</b>.</li>
              <li><b>Cumulative impacts</b> missed (one project at a time).</li>
            </ul></div>
          </div>
          <p><b>Future</b>: <b>Strategic Environmental Assessment (SEA)</b>, cumulative impact assessment, climate change; GIS and remote sensing; integration with other sustainability tools.</p>
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
