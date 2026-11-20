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
          <p class="lead"><b>Genetically Modified (GM) crops</b> : <b>DNA altered by genetic engineering</b> to add traits not natural to the species.</p>
          <ul>
            <li>Genes moved <b>between unrelated species</b>, precisely.</li>
            <li>Response to rising <b>global food demand</b> and crop losses.</li>
            <li>Aims: <b>yield</b>, <b>pest/disease</b> resistance, <b>harsh-climate</b> tolerance.</li>
            <li>Goal: sustainable farming for a growing population.</li>
          </ul>
        ` },
        { title: 'Why agriculture needs them', html: `
          <ul>
            <li>Rising population, rising food demand.</li>
            <li>Traditional farming lags, esp. in <b>developing countries</b>.</li>
            <li>Higher yields, fewer pest/disease losses.</li>
            <li>Withstand <b>drought, salinity, extreme temperatures</b> (climate change).</li>
            <li>Fewer chemical inputs, more productivity.</li>
          </ul>
        ` },
        { title: 'The science', html: `
          <div class="steps">
            <div>Identify and <b>isolate a useful gene</b> in one organism.</div>
            <div><b>Insert it into the plant's genome</b> (DNA modified directly).</div>
            <div>The plant now shows a <b>targeted trait</b> it never had.</div>
          </div>
          <p>Common traits: <b>pest resistance, herbicide tolerance, drought or disease resistance</b>.</p>
          <div class="note example"><b>Bt crops</b> : gene from <b>soil bacterium</b> <em>Bacillus thuringiensis</em>; protein kills specific pests, safe for humans. <b>Cotton and corn</b>.</div>
        ` },
        { title: 'GM vs conventional', html: `
          <table class="tbl">
            <thead><tr><th></th><th>Conventional breeding</th><th>GM technology</th></tr></thead>
            <tbody>
              <tr><td>Method</td><td>Crossing, <b>many generations</b></td><td><b>Direct insertion</b> of genes</td></tr>
              <tr><td>Time</td><td>Slow</td><td><b>Much faster</b></td></tr>
              <tr><td>Predictability</td><td>Less predictable</td><td>Targeted, consistent</td></tr>
              <tr><td>Gene source</td><td>Same or related species only</td><td><b>Unrelated species</b> too</td></tr>
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
        { title: 'Regulation', html: `
          <ul>
            <li>Regulator: <b>Ministry of Environment, Forest and Climate Change (MoEFCC)</b>.</li>
            <li>Apex body: <b>Genetic Engineering Appraisal Committee (GEAC)</b>, evaluates safety.</li>
            <li><b>Multi-stage field trials</b>, strict monitoring.</li>
            <li>Check <b>environmental impact, food safety, agronomic performance</b>.</li>
            <li>Release only after evaluation <b>+ public consultation</b>.</li>
          </ul>
        ` },
        { title: 'Status of crops', html: `
          <table class="tbl">
            <thead><tr><th>Crop</th><th>Status</th></tr></thead>
            <tbody>
              <tr><td><b>Bt cotton</b></td><td><b>2002</b>; <b>only GM crop approved</b> commercially</td></tr>
              <tr><td><b>Bt brinjal</b></td><td>Cleared <b>2009</b>, then <b>moratorium</b> (public/scientific concerns)</td></tr>
              <tr><td><b>GM mustard</b></td><td>Under review; higher-yield potential</td></tr>
              <tr><td>Rice, chickpea, maize</td><td>Research/testing</td></tr>
            </tbody>
          </table>
          <div class="note heads-up">Bt brinjal: "approved 2009" and "not yet approved" both fit: cleared 2009, never released (moratorium).</div>
        ` },
        { title: 'How Bt crops work', html: `
          <ul>
            <li><b><em>Bacillus thuringiensis</em></b> gene makes a <b>protein toxic to specific pests</b>.</li>
            <li>Targets <b>bollworms</b>, <b>corn borers</b>; harmless to humans, most beneficial insects.</li>
            <li>Less <b>chemical insecticide</b>: greener, cheaper.</li>
            <li>India: <b>Bt cotton</b>; elsewhere: <b>Bt maize</b>.</li>
            <li><b>Continuous monitoring</b> for resistance.</li>
          </ul>
        ` },
        { title: 'Bt cotton impact', html: `
          <ul>
            <li>Approved <b>2002</b> against <b>bollworm</b>.</li>
            <li><b>Over 90%</b> of India's cotton area.</li>
            <li>Bollworm insecticide down <b>up to 50–60%</b>.</li>
            <li>Higher yields/profits; India = world's <b>largest cotton producer</b>.</li>
            <li>Problems: <b>secondary pests</b> (whiteflies, aphids), <b>bollworm resistance</b>, regional yield stagnation.</li>
            <li>Fix: monitoring, <b>integrated pest management</b>, crop rotation, <b>refuge planting</b>.</li>
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
        { title: 'Adoption', html: `
          <ul>
            <li><b>Maharashtra</b> : leading cotton state, <b>earliest large-scale adopter</b> after <b>2002</b>.</li>
            <li>By <b>2010, over 90%</b> of cotton area under Bt.</li>
            <li>Spread by <b>farmer-to-farmer communication</b>, early success.</li>
            <li>Won over <b>small and marginal farmers</b>.</li>
            <li><b>Private seed companies</b> distributed seeds.</li>
            <li>Concerns: <b>seed pricing</b>, pest resistance, input dependency.</li>
          </ul>
        ` },
        { title: 'Income effects', html: `
          <ul>
            <li>Early: income up (yield, less pesticide).</li>
            <li><b>25–50%</b> pesticide savings.</li>
            <li>Shift <b>subsistence to market-oriented</b>.</li>
            <li>Gains: living standards, <b>debt repayment</b>, equipment.</li>
            <li>Later: seed prices, resistance cut profits; varied by <b>region, rainfall, practices</b>.</li>
          </ul>
        ` },
        { title: 'Problems', html: `
          <ol>
            <li><b>Bollworm resistance</b> to the Bt toxin.</li>
            <li><b>Secondary pests</b> (whiteflies, aphids).</li>
            <li><b>Droughts, poor irrigation</b>: rainfed <b>Vidarbha</b>.</li>
            <li>Costly <b>hybrid Bt seeds</b>.</li>
            <li>Crop failures, <b>rising debt</b>.</li>
          </ol>
        ` },
        { title: 'Lessons', html: `
          <ul>
            <li><b>GM alone</b> is not enough.</li>
            <li>Add <b>irrigation, soil care, pest management</b>.</li>
            <li><b>Farmer education</b> (refuge planting, resistance).</li>
            <li>One-size-fits-all adoption: uneven results.</li>
            <li><b>Government support, crop insurance, fair seed pricing</b>.</li>
            <li>Policy: <b>balanced, science-based, farmer-centric</b>.</li>
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
            <li>GM in <b>ornamental plants</b> too.</li>
            <li>Traits: <b>colour, fragrance, shelf life</b>, <b>wilting resistance</b>.</li>
            <li><b>Blue rose</b> (gene insertion); <b>GM carnations</b> (vase life, new colours).</li>
            <li><b>Japan, Australia and Colombia</b> sell GM carnations/roses.</li>
          </ul>
          <div class="note heads-up">Slides differ: <b>blue rose</b> = first commercial GM ornamental vs <b>Japan's blue GM carnation</b> first, then Australia's blue rose. Know both.</div>
        ` },
        { title: 'India', html: `
          <ul>
            <li>Research: GM <b>roses, marigolds, chrysanthemums</b>.</li>
            <li>Rules <b>more flexible</b> than for food crops.</li>
            <li>Potential <b>GM floriculture exporter</b>.</li>
          </ul>
        ` },
        { title: 'Why florists gain', html: `
          <ul>
            <li><b>Longer shelf life</b>: less waste, less restocking.</li>
            <li>Novel colours sell at a <b>premium</b>.</li>
            <li>Fragrance/looks: high-value arrangements, <b>weddings and events</b>.</li>
            <li>Wilting/bruising resistance: fewer losses.</li>
            <li><b>Year-round supply</b> for bulk/export orders.</li>
            <li><b>Better profit margins</b>.</li>
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
        { title: 'Benefits', html: `
          <div class="vs">
            <div class="side"><h4>Economic</h4><ul>
              <li>More yield from the <b>same land</b>.</li>
              <li>Lower pesticide/herbicide costs.</li>
              <li>Market-oriented farming; <b>stable income</b>.</li>
              <li>Better <b>shelf life</b>, fewer post-harvest losses.</li>
              <li>Can carry <b>higher nutritional content</b>.</li>
            </ul></div>
            <div class="side"><h4>Environmental</h4><ul>
              <li>Less <b>soil/water contamination</b>.</li>
              <li>Less spraying: lower <b>greenhouse gas emissions</b>.</li>
              <li><b>Less pressure on forests</b>.</li>
              <li>Climate-resilient traits: drought and heat tolerance.</li>
              <li>Stable harvests: food security.</li>
            </ul></div>
          </div>
        ` },
        { title: 'Risks', html: `
          <ul>
            <li><b>Cross-pollination</b> with non-GM or wild plants.</li>
            <li>Herbicide-tolerant overuse: <b>resistant weeds</b>.</li>
            <li><b>Long-term health effects</b> debated; no proven harm.</li>
            <li><b>Patented seeds</b> bought every season.</li>
            <li><b>Loss of traditional crop diversity</b>.</li>
            <li>Regulatory gaps, poor <b>labelling</b>.</li>
          </ul>
        ` },
        { title: 'Social and ethical', html: `
          <ul>
            <li><b>Corporate control</b> of seeds: monopoly.</li>
            <li>Farmers lose <b>autonomy</b>.</li>
            <li>Widens smallholder vs big farmer gap.</li>
            <li><b>Cultural resistance</b> (organic/indigenous farming).</li>
            <li>Ethics: altering genes <b>for profit</b>.</li>
            <li><b>Public perception</b>: media, misinformation, low literacy; fix: labelling, education.</li>
          </ul>
        ` },
        { title: 'Global picture', html: `
          <table class="tbl">
            <tbody>
              <tr><td>Wide adoption</td><td><b>USA, Brazil, Argentina</b>: high acceptance, export</td></tr>
              <tr><td>Strict restrictions</td><td><b>European Union</b>: bans most GM food (precautionary)</td></tr>
              <tr><td>Mixed</td><td>Developing nations</td></tr>
              <tr><td>India</td><td><b>Crossroads</b>; cautious yet progressive</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Future and balance', html: `
          <ul>
            <li>New tools: <b>CRISPR and gene editing</b>.</li>
            <li>Traits in development: <b>drought tolerance, enhanced nutrition, nitrogen-use efficiency</b>.</li>
            <li>Faster approvals; <b>public-private partnerships</b>.</li>
            <li>Possible next: <b>GM mustard</b>.</li>
            <li>Balance: <b>strong regulation, transparent communication, education</b>.</li>
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
