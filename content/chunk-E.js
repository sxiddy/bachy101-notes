CHUNK({
  chunk: 'E',
  module: 'm2',
  topics: [
    {
      id: 'm2-gm-basics',
      title: 'Genetically modified crops: what and why',
      short: 'GM crop basics',
      blurb: 'What GM crops are, why agriculture needs them, the science of inserting a gene (Bt), and how GM differs from conventional breeding.',
      source: 'Lecture W2 (GM crops), slides 2–5',
      tabs: [
        { title: 'What they are', html: `
          <p class="lead"><b>GM crops</b>: <b>DNA altered by genetic engineering</b> to add traits not natural to the species.</p>
          <ul>
          <li>Aims: <b>yield</b>, pest/disease resistance, tolerance of <b>drought, salinity, extreme temperatures</b>.</li>
          <li>Common traits: <b>pest resistance, herbicide tolerance</b>, drought or disease resistance.</li>
          </ul>
          <div class="note example"><b>Bt crops</b>: gene from soil bacterium <b><em>Bacillus thuringiensis</em></b>; kills specific pests, safe for humans. <b>Cotton and corn</b>.</div>
        ` },
        { title: 'GM vs conventional', html: `
          <table class="tbl">
          <thead><tr><th></th><th>Conventional</th><th>GM</th></tr></thead>
          <tbody>
          <tr><td>Method</td><td>Crossing, <b>many generations</b></td><td><b>Direct gene insertion</b></td></tr>
          <tr><td>Speed</td><td>Slow, less predictable</td><td><b>Faster</b>, targeted</td></tr>
          <tr><td>Gene source</td><td>Same or related species</td><td><b>Unrelated species</b> too</td></tr>
          </tbody>
          </table>
        ` }
      ],
      flashcards: [
        { front: 'What is a GM crop?', back: 'A plant whose <b>DNA is altered by genetic engineering</b> to add traits it does not have naturally.' },
        { front: 'Source of the Bt gene?', back: 'The soil bacterium <b><em>Bacillus thuringiensis</em></b>.' },
        { front: 'Key advantage of GM over conventional breeding?', back: 'Faster, precise, and can use genes from <b>unrelated species</b>.' },
        { front: 'Three common GM traits?', back: '<b>Pest resistance, herbicide tolerance, drought or disease resistance</b>.' },
        { front: 'Harsh conditions GM crops can be built to tolerate?', back: '<b>Drought, salinity, extreme temperatures</b>.' }
      ],
      oneLiners: [
        'GM lets genes move between unrelated species.',
        'Bt protein kills specific pests but is safe for humans.',
        'Conventional breeding: many generations, less predictable.',
        'GM crops answer rising food demand and crop losses.'
      ],
      formulas: []
    },
    {
      id: 'm2-gm-india',
      title: 'GM crops in India and Bt cotton',
      short: 'GM in India, Bt cotton',
      blurb: 'How India regulates GM crops (MoEFCC, GEAC), which crops are approved or on trial, how Bt crops work, and Bt cotton\'s impact.',
      source: 'Lecture W2 (GM crops), slides 6–10',
      tabs: [
        { title: 'Regulation and status', html: `
          <p class="lead">Regulator: <b>MoEFCC</b>; apex body: <b>GEAC</b> (Genetic Engineering Appraisal Committee).</p>
          <table class="tbl">
          <thead><tr><th>Crop</th><th>Status</th></tr></thead>
          <tbody>
          <tr><td><b>Bt cotton</b></td><td><b>2002</b>; <b>only GM crop approved</b></td></tr>
          <tr><td><b>Bt brinjal</b></td><td>Cleared <b>2009</b>, then <b>moratorium</b></td></tr>
          <tr><td><b>GM mustard</b></td><td>Under review</td></tr>
          <tr><td>Rice, chickpea, maize</td><td>Research/testing</td></tr>
          </tbody>
          </table>
        ` },
        { title: 'Bt cotton impact', html: `
          <ul>
          <li>Bt toxin targets <b>bollworms</b>, <b>corn borers</b>.</li>
          <li><b>Over 90%</b> of India's cotton area.</li>
          <li>Bollworm insecticide down <b>up to 50–60%</b>.</li>
          <li>India = world's <b>largest cotton producer</b>.</li>
          <li>Problems: <b>secondary pests</b> (whiteflies, aphids), bollworm resistance.</li>
          <li>Fix: <b>refuge planting</b>, integrated pest management.</li>
          </ul>
        ` }
      ],
      flashcards: [
        { front: 'Apex body that evaluates GM crop safety in India?', back: '<b>GEAC</b>, Genetic Engineering Appraisal Committee (under MoEFCC).' },
        { front: 'Only GM crop approved for cultivation in India, and its year?', back: '<b>Bt cotton, 2002</b>.' },
        { front: 'What happened to Bt brinjal?', back: 'Cleared in <b>2009</b>, then put under a <b>moratorium</b>.' },
        { front: 'Share of India\'s cotton area under Bt cotton?', back: '<b>Over 90%</b>.' },
        { front: 'Cut in insecticide use against bollworm with Bt cotton?', back: '<b>Up to 50–60%</b>.' },
        { front: 'Pests Bt toxin targets?', back: '<b>Bollworms and corn borers</b>.' }
      ],
      oneLiners: [
        'GM crops in India are regulated by MoEFCC through GEAC.',
        'GM mustard is still under review.',
        'Bt cotton made India the largest cotton producer.',
        'Secondary pests: whiteflies and aphids.'
      ],
      formulas: []
    },
    {
      id: 'm2-bt-maharashtra',
      title: 'Case study: Bt cotton in Maharashtra',
      short: 'Bt cotton case study',
      blurb: 'How Bt cotton spread in Maharashtra, what it did to farmer income, the problems that followed (Vidarbha), and the lessons.',
      source: 'Lecture W2 (GM crops), slides 11–15',
      tabs: [
        { title: 'Adoption and income', html: `
          <ul>
          <li><b>Maharashtra</b>: earliest large-scale adopter after <b>2002</b>; <b>over 90%</b> by <b>2010</b>.</li>
          <li>Spread by <b>farmer-to-farmer communication</b>; seeds via <b>private seed companies</b>.</li>
          <li><b>25–50%</b> pesticide savings early; shift to <b>market-oriented</b> farming.</li>
          </ul>
        ` },
        { title: 'Problems and lessons', html: `
          <ul>
          <li>Bollworm resistance, secondary pests, costly <b>hybrid Bt seeds</b>, rising debt.</li>
          <li>Droughts in rainfed <b>Vidarbha</b>.</li>
          <li>Lesson: <b>GM alone is not enough</b>; needs irrigation, pest management, <b>crop insurance, fair seed pricing</b>.</li>
          </ul>
        ` }
      ],
      flashcards: [
        { front: 'Share of Maharashtra cotton area under Bt by 2010?', back: '<b>Over 90%</b>.' },
        { front: 'Pesticide cost savings reported by Maharashtra farmers?', back: '<b>25–50%</b> in the first few years.' },
        { front: 'Rainfed Maharashtra region where Bt cotton struggled?', back: '<b>Vidarbha</b>.' },
        { front: 'Who spread Bt seeds across villages?', back: '<b>Private seed companies</b>.' },
        { front: 'Main lesson of the case study?', back: 'GM alone is not enough; it needs irrigation, pest management, education, insurance and fair seed prices.' }
      ],
      oneLiners: [
        'Bt adoption spread by farmer-to-farmer communication.',
        'Hybrid Bt seed costs raised farmer debt in rainfed areas.',
        'Outcomes depended on region, rainfall and practices.'
      ],
      formulas: []
    },
    {
      id: 'm2-gm-flowers',
      title: 'GM flowers and floriculture',
      short: 'GM flowers',
      blurb: 'GM ornamental plants: blue roses and carnations, the countries selling them, India\'s potential, and why florists profit.',
      source: 'Lecture W2 (GM crops), slides 17–20',
      tabs: [
        { title: 'GM ornamentals', html: `
          <ul>
          <li>Traits: <b>colour, fragrance, shelf life</b>, wilting resistance.</li>
          <li><b>Blue rose</b>; <b>GM carnations</b> (vase life, new colours).</li>
          <li>Sold by <b>Japan, Australia, Colombia</b>.</li>
          </ul>
          <div class="note heads-up">Slides differ: <b>blue rose</b> first commercial GM ornamental vs <b>Japan's blue carnation</b> first. Know both.</div>
        ` },
        { title: 'India and florists', html: `
          <ul>
          <li>India researching GM <b>roses, marigolds, chrysanthemums</b>; rules <b>more flexible</b> than for food crops.</li>
          <li>Florists gain: <b>longer shelf life</b>, premium colours, <b>year-round supply</b>.</li>
          </ul>
        ` }
      ],
      flashcards: [
        { front: 'Countries that commercialised GM flowers?', back: '<b>Japan, Australia, Colombia</b>.' },
        { front: 'Two famous GM ornamentals?', back: '<b>Blue rose</b> and GM (blue) <b>carnations</b>.' },
        { front: 'Flowers India is researching for GM?', back: '<b>Roses, marigolds, chrysanthemums</b>.' },
        { front: 'Are GM ornamental rules in India stricter or looser than for food crops?', back: '<b>More flexible</b>.' }
      ],
      oneLiners: [
        'GM flowers: colour, fragrance, shelf life, wilting resistance.',
        'Longer shelf life means less restocking for florists.',
        'India has export potential in GM floriculture.'
      ],
      formulas: []
    },
    {
      id: 'm2-gm-debate',
      title: 'GM crops: benefits, risks and the future',
      short: 'GM pros, cons, future',
      blurb: 'Economic and environmental benefits, ecological and health risks, socio-economic and ethical issues, public perception, the global picture and what comes next.',
      source: 'Lecture W2 (GM crops), slides 16, 21–30',
      tabs: [
        { title: 'Benefits and risks', html: `
          <div class="vs">
          <div class="side"><h4>Benefits</h4><ul>
          <li>More yield, <b>same land</b>; <b>less pressure on forests</b>.</li>
          <li>Less spraying: lower <b>greenhouse gas emissions</b>.</li>
          <li>Longer shelf life, higher nutrition.</li>
          </ul></div>
          <div class="side"><h4>Risks</h4><ul>
          <li><b>Cross-pollination</b> with wild plants.</li>
          <li><b>Resistant weeds</b> (herbicide overuse).</li>
          <li><b>Patented seeds</b> bought each season; <b>corporate control</b>.</li>
          <li>Loss of traditional crop diversity; poor <b>labelling</b>.</li>
          </ul></div>
          </div>
        ` },
        { title: 'Global and future', html: `
          <table class="tbl">
          <tbody>
          <tr><td>Wide adoption</td><td><b>USA, Brazil, Argentina</b></td></tr>
          <tr><td>Strict</td><td><b>European Union</b></td></tr>
          <tr><td>India</td><td><b>Crossroads</b>: cautious yet progressive</td></tr>
          </tbody>
          </table>
          <ul>
          <li>Future: <b>CRISPR</b> gene editing; <b>nitrogen-use efficiency</b>, drought tolerance; <b>GM mustard</b> next.</li>
          </ul>
        ` }
      ],
      flashcards: [
        { front: 'How do GM crops reduce pressure on forests?', back: 'Higher yields mean <b>less land expansion</b>.' },
        { front: 'Why do herbicide-tolerant crops cause a problem?', back: 'Overuse breeds <b>resistant weeds</b> needing stronger chemicals.' },
        { front: 'Countries that widely grow GM crops?', back: '<b>USA, Brazil, Argentina</b>.' },
        { front: 'Region with strict GM restrictions?', back: 'The <b>European Union</b>.' },
        { front: 'Gene-editing technology named for the future of GM?', back: '<b>CRISPR</b>.' },
        { front: 'Why are patented seeds a burden?', back: 'Farmers must <b>buy new seed every season</b>.' }
      ],
      oneLiners: [
        'Fewer sprays mean lower greenhouse gas emissions.',
        'Risks: cross-pollination, resistant weeds, loss of crop diversity.',
        'Labelling and education build public trust.',
        'Future traits: drought tolerance, nutrition, nitrogen-use efficiency.'
      ],
      formulas: []
    }
  ],
  figures: []
});
