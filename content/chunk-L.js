CHUNK({
  chunk: 'L',
  module: 'm4',
  topics: [
    {
      id: 'm4-env-laws-need',
      title: 'Why India needs environmental laws',
      short: 'Need for env laws',
      blurb: 'What environmental laws are and do, Article 21, India\'s challenges, the Stockholm and Bhopal background, the list of laws, and why engineers must know them.',
      source: 'Lecture W4 (EPA and Air Act), pages 1–5',
      tabs: [

        { title: 'Purpose and background', html: `
          <p class="lead"><b>Environmental laws</b> regulate human activities affecting the environment. Global agreements (<b>Kyoto, Paris</b>) work only through national laws.</p>
          <p>3 jobs: <b>define</b> acceptable limits, <b>create authorities</b>, <b>prescribe punishment</b>.</p>
          <p>Clean environment = <b>fundamental right under Article 21</b> (right to life).</p>
          <ul>
            <li><b>1972 Stockholm Conference</b> on the Human Environment: first major global summit.</li>
          </ul>
        ` },
        { title: 'Key laws', html: `
          <table class="tbl">
            <tbody>
              <tr><td>Wildlife Protection Act</td><td><b>1972</b></td></tr>
              <tr><td>Water (Prevention and Control of Pollution) Act</td><td><b>1974</b></td></tr>
              <tr><td>Forest Conservation Act</td><td><b>1980</b></td></tr>
              <tr><td>Air (Prevention and Control of Pollution) Act</td><td><b>1981</b></td></tr>
              <tr><td>Environment (Protection) Act</td><td><b>1986</b></td></tr>
              <tr><td>Biological Diversity Act</td><td><b>2002</b></td></tr>
            </tbody>
          </table>
          <p><b>Bhopal, 2–3 Dec 1984</b>: <b>methyl isocyanate (MIC)</b>, <b>Union Carbide</b>; world's worst industrial disaster; led to <b>EPA</b>, enacted <b>19 November 1986</b>.</p>
        ` }
      ],
      flashcards: [
        { front: 'Three things environmental laws do?', back: '<b>Define</b> acceptable limits, <b>create authorities</b>, <b>prescribe punishment</b>.' },
        { front: 'Which article makes a clean environment a fundamental right?', back: '<b>Article 21</b> (right to life).' },
        { front: 'Gas in the Bhopal disaster?', back: '<b>Methyl isocyanate (MIC)</b>, Union Carbide, 2–3 Dec 1984.' },
        { front: 'Date the EPA was enacted?', back: '<b>19 November 1986</b>.' },
        { front: 'Conference that started India\'s environmental laws?', back: '<b>1972 Stockholm Conference</b> on the Human Environment.' },
        { front: 'Forest Conservation Act year?', back: '<b>1980</b>.' }
      ],
      oneLiners: [
        'Bhopal is the world\'s worst industrial disaster.',
        'Water Act 1974 came before the Air Act 1981.',
        'Biological Diversity Act: 2002.'
      ],
      formulas: []
    },
    {
      id: 'm4-epa-1986',
      title: 'Environment (Protection) Act, 1986',
      short: 'EPA 1986',
      blurb: 'The umbrella law: its objective, key sections 3, 6, 7, 8 and 10, the definition of environment, central powers, standards, hazardous substances and penalties.',
      source: 'Lecture W4 (EPA and Air Act), pages 5–9',
      tabs: [

        { title: 'Overview', html: `
          <p class="lead"><b>Umbrella legislation</b>: <b>protect and improve</b> environment; <b>prevent, control, abate</b> pollution. Powers to the <b>Central Government</b>.</p>
          <p><b>Environment</b> = <b>air, water, land</b> + their interaction with humans, animals, plants, <b>microorganisms</b>, <b>property</b>.</p>
          <p>Centre can <b>order closure</b>, sample air/water/soil, set up <b>environmental laboratories</b> (Gazette notification).</p>
        ` },
        { title: 'Key sections', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Section 3</b></td><td>Central powers ("<b>master power switch</b>")</td></tr>
              <tr><td><b>Section 6</b></td><td>Numerical <b>standards</b></td></tr>
              <tr><td><b>Section 7</b></td><td><b>No discharge beyond standards</b></td></tr>
              <tr><td><b>Section 8</b></td><td><b>Hazardous substances</b> (Bhopal response)</td></tr>
              <tr><td><b>Section 10</b></td><td><b>Entry</b>, inspection, samples</td></tr>
            </tbody>
          </table>
          <div class="note exam"><b>Penalty</b>: up to <b>5 years</b> + <b>₹1 lakh</b>; continuing beyond 1 year: up to <b>7 years</b>.</div>
        ` }
      ],
      flashcards: [
        { front: 'Why is the EPA called umbrella legislation?', back: 'It gives a <b>comprehensive framework</b> covering air, water and land with broad central powers.' },
        { front: 'Which EPA section bans discharge beyond standards?', back: '<b>Section 7</b>.' },
        { front: 'Which EPA section deals with hazardous substances?', back: '<b>Section 8</b> (response to Bhopal).' },
        { front: 'Which EPA section gives powers of entry and inspection?', back: '<b>Section 10</b>.' },
        { front: 'EPA penalty?', back: 'Up to <b>5 years</b> and <b>₹1 lakh</b>; up to <b>7 years</b> if it continues beyond a year.' },
        { front: '"Environment" under the EPA includes…', back: 'Air, water, land and their interaction with humans, animals, plants, microorganisms and property.' }
      ],
      oneLiners: [
        'Section 3 is the master power switch of the EPA.',
        'Section 6 sets numerical standards.',
        'The EPA can order closure of polluting industries.'
      ],
      formulas: []
    },
    {
      id: 'm4-eia-india',
      title: 'EIA under Indian law',
      short: 'EIA in India',
      blurb: 'The 2006 EIA Notification and its amendments, Category A and B clearance, the nine-stage Indian EIA process, and projects that need EIA.',
      source: 'Lecture W4 (EPA and Air Act), pages 7–9',
      tabs: [

        { title: 'Notification', html: `
          <p><b>EIA Notification 2006</b> (MoEFCC), under the EPA; amended <b>2016, 2020, 2021</b> (added exemptions).</p>
          <table class="tbl">
            <thead><tr><th>Category</th><th>Level</th><th>Cleared by</th></tr></thead>
            <tbody>
              <tr><td><b>A</b></td><td>National</td><td><b>IAA</b> + <b>EAC</b></td></tr>
              <tr><td><b>B</b></td><td>State</td><td><b>SEIAA</b> + <b>SEAC</b></td></tr>
            </tbody>
          </table>
          <p>Need EIA: <b>airports, highways, dams, power plants, mining</b>. EIA is one of the most significant tools under the EPA.</p>
        ` },
        { title: 'Nine stages', html: `
          <ol class="steps">
            <li><b>Screening</b> EIA needed, at what level?</li>
            <li><b>Scoping</b> key issues, boundary, time limit</li>
            <li><b>Impact analysis</b></li>
            <li><b>Mitigation</b></li>
            <li><b>Reporting</b></li>
            <li><b>Public hearing</b> people near the site</li>
            <li><b>Review</b></li>
            <li><b>Decision-making</b> reject, approve or ask for change</li>
            <li><b>Post monitoring</b> after commissioning</li>
          </ol>
          <div class="note trap">EIA lecture: <b>8</b> steps (has EMP). Indian process: <b>9</b> (adds reporting, splits review and decision).</div>
        ` }
      ],
      flashcards: [
        { front: 'Year of the current EIA Notification?', back: '<b>2006</b> (amended 2016, 2020, 2021).' },
        { front: 'Who appraises Category A projects?', back: '<b>IAA and EAC</b> (national level).' },
        { front: 'Who clears Category B projects?', back: '<b>SEIAA and SEAC</b> (state level).' },
        { front: 'Last stage of the Indian EIA process?', back: '<b>Post monitoring</b> after commissioning.' }
      ],
      oneLiners: [
        'Category A is national, Category B is state level.',
        'Public hearing follows the EIA report.',
        'Airports, highways, dams, power plants and mines need EIA.'
      ],
      formulas: []
    },
    {
      id: 'm4-air-act',
      title: 'Air (Prevention and Control of Pollution) Act, 1981',
      short: 'Air Act 1981',
      blurb: 'Why the Air Act came, its aims, the 1987 noise amendment, the definition of air pollutant, CPCB and SPCBs, sections 19, 21, 24 and 31A, penalties, and how it compares with the EPA.',
      source: 'Lecture W4 (EPA and Air Act), pages 9–13',
      tabs: [
        { title: 'Basics and sections', html: `
          <ul>
            <li><b>Air Act 1981</b>: response to <b>Stockholm 1972</b>; <b>preventive</b> (consent before polluting).</li>
            <li><b>1987 amendment</b>: <b>noise</b> added.</li>
            <li><b>Section 2(a)</b>: air pollutant = <b>solid, liquid or gaseous</b> substance at injurious concentration.</li>
          </ul>
          <table class="tbl">
            <tbody>
              <tr><td><b>Section 19</b></td><td><b>Air Pollution Control Areas</b></td></tr>
              <tr><td><b>Section 21</b></td><td><b>Consent</b> of State Board</td></tr>
              <tr><td><b>Section 24</b></td><td>Entry; samples from <b>chimneys</b></td></tr>
              <tr><td><b>Section 31A</b></td><td><b>Emergency closure</b> without court</td></tr>
            </tbody>
          </table>
          <div class="note exam"><b>Penalty</b>: up to <b>3 months</b> + <b>₹10,000</b>, plus daily fines.</div>
        ` },
        { title: 'Boards, tech, EPA vs Air Act', html: `
          <div class="vs">
            <div class="side"><h4>CPCB (apex)</h4><p>Sets <b>national standards</b>, coordinates SPCBs.</p></div>
            <div class="side"><h4>SPCB (state)</h4><p>Grants <b>consent</b>, monitors, inspects, prosecutes.</p></div>
          </div>
          <p>Control tech: <b>ESP</b> (fine particles), <b>cyclone</b> (dust), <b>wet scrubber</b> (gases), <b>bag filter</b> (PM). Vehicles: <b>Bharat Stage</b> norms.</p>
          <table class="tbl">
            <thead><tr><th></th><th>EPA 1986</th><th>Air Act 1981</th></tr></thead>
            <tbody>
              <tr><td>Nature</td><td><b>Umbrella</b></td><td><b>Sector-specific</b></td></tr>
              <tr><td>Covers</td><td>Air, water, land</td><td>Air only</td></tr>
              <tr><td>Powers</td><td><b>Central Government</b></td><td><b>CPCB and SPCBs</b></td></tr>
            </tbody>
          </table>
        ` }
      ],
      flashcards: [
        { front: 'When was noise added as an air pollutant?', back: '<b>1987</b> amendment.' },
        { front: 'Air Act section for consent?', back: '<b>Section 21</b>.' },
        { front: 'Air Act section declaring control areas?', back: '<b>Section 19</b>.' },
        { front: 'Air Act emergency closure power?', back: '<b>Section 31A</b>.' },
        { front: 'Air Act penalty?', back: 'Up to <b>3 months</b> and <b>₹10,000</b>, plus daily fines.' },
        { front: 'Air pollutant per Section 2(a)?', back: 'Any <b>solid, liquid or gaseous</b> substance at injurious concentration.' },
        { front: 'EPA vs Air Act nature?', back: 'EPA: <b>umbrella</b>. Air Act: <b>sector-specific</b>.' }
      ],
      oneLiners: [
        'The Air Act is preventive: consent before operation.',
        'CPCB is the apex pollution-control authority.',
        'Section 24 allows sampling from chimneys.'
      ],
      formulas: []
    }
  ],
  figures: []
});
