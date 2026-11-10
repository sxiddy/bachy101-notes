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
          <p class="lead"><b>Genetically Modified (GM) crops</b> are plants whose <b>DNA has been altered using genetic engineering</b> to add desirable traits that do not occur naturally in the species.</p>
          <ul>
            <li>Genes can be moved <b>between unrelated species</b> with high precision.</li>
            <li>Developed in response to rising <b>global food demand</b> and crop losses.</li>
            <li>Motivations: higher <b>yield</b>, resistance to <b>pests and diseases</b>, tolerance to <b>harsh climates</b>.</li>
            <li>Aim: efficient, sustainable agriculture that can feed a growing population.</li>
          </ul>
        ` },
        { title: 'Why agriculture needs them', html: `
          <ul>
            <li>Global population is rising fast; food demand rises with it.</li>
            <li>Traditional farming struggles to keep up, especially in <b>developing countries</b>.</li>
            <li>Higher yields: better growth and fewer losses to pests and diseases.</li>
            <li>Can withstand <b>drought, salinity and extreme temperatures</b>, which matters under climate change.</li>
            <li>Supports sustainable agriculture: fewer chemical inputs, more productivity.</li>
          </ul>
        ` },
        { title: 'The science', html: `
          <div class="steps">
            <div>Identify and <b>isolate a useful gene</b> in one organism.</div>
            <div><b>Insert it into the plant's genome</b> (DNA modified directly).</div>
            <div>The plant now shows a <b>targeted trait</b> it never had.</div>
          </div>
          <p>Common traits: <b>pest resistance, herbicide tolerance, drought or disease resistance</b>. The method is precise: scientists control which gene goes in and where.</p>
          <div class="note example"><b>Bt crops</b> carry a gene from a <b>soil bacterium</b> (<em>Bacillus thuringiensis</em>) whose protein kills specific insect pests but is safe for humans. Used in <b>cotton and corn</b>.</div>
        ` },
        { title: 'GM vs conventional', html: `
          <table class="tbl">
            <thead><tr><th></th><th>Conventional breeding</th><th>GM technology</th></tr></thead>
            <tbody>
              <tr><td>Method</td><td>Crossing plants over <b>many generations</b></td><td><b>Direct insertion</b> of specific genes into DNA</td></tr>
              <tr><td>Time</td><td>Slow</td><td><b>Much faster</b></td></tr>
              <tr><td>Predictability</td><td>Less predictable outcomes</td><td>Targeted, consistent, often more effective in the field</td></tr>
              <tr><td>Gene source</td><td>Same or related species only</td><td>Can use <b>unrelated species</b> (impossible by breeding)</td></tr>
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
            <li>GM crops are regulated by the <b>Ministry of Environment, Forest and Climate Change (MoEFCC)</b>.</li>
            <li>The apex body is the <b>Genetic Engineering Appraisal Committee (GEAC)</b>, which evaluates GM crop safety.</li>
            <li>Crops go through <b>multi-stage field trials</b> under strict monitoring.</li>
            <li>Trials check <b>environmental impact, food safety and agronomic performance</b>.</li>
            <li>Only after evaluation <b>and public consultation</b> can a crop be released commercially.</li>
          </ul>
        ` },
        { title: 'Status of crops', html: `
          <table class="tbl">
            <thead><tr><th>Crop</th><th>Status</th></tr></thead>
            <tbody>
              <tr><td><b>Bt cotton</b></td><td>Introduced <b>2002</b>; the <b>only GM crop approved</b> for commercial cultivation in India</td></tr>
              <tr><td><b>Bt brinjal</b></td><td>Cleared in <b>2009</b>, then put under a <b>moratorium</b> after public and scientific concerns</td></tr>
              <tr><td><b>GM mustard</b></td><td>Still under regulatory review despite higher-yield potential</td></tr>
              <tr><td>Rice, chickpea, maize</td><td>Research and testing phase</td></tr>
            </tbody>
          </table>
          <div class="note heads-up">The lecture says Bt brinjal and GM mustard are "not yet approved" and also that GM brinjal "was approved in 2009". Both fit: it was cleared in 2009 but never released, because of the moratorium.</div>
        ` },
        { title: 'How Bt crops work', html: `
          <ul>
            <li>Contain a gene from <b><em>Bacillus thuringiensis</em></b> that makes a <b>protein toxic to specific insect pests</b>.</li>
            <li>Targets <b>bollworms</b> and <b>corn borers</b>; harmless to humans and most beneficial insects.</li>
            <li>Cuts <b>chemical insecticide</b> use: greener and cheaper farming.</li>
            <li><b>Bt cotton</b> is the most grown Bt crop in India; <b>Bt maize</b> elsewhere.</li>
            <li>Needs <b>continuous monitoring</b> to manage pest resistance.</li>
          </ul>
        ` },
        { title: 'Bt cotton impact', html: `
          <ul>
            <li>Approved in <b>2002</b> to fight the <b>bollworm</b>, which caused severe losses.</li>
            <li>Now covers <b>over 90%</b> of India's cotton-growing area.</li>
            <li>Insecticide use against bollworm fell by <b>up to 50–60%</b>.</li>
            <li>Higher yields and profits; India became the <b>largest cotton producer</b> in the world.</li>
            <li>Later problems: <b>secondary pests</b> (whiteflies, aphids), <b>bollworm resistance</b> to the Bt toxin, regional yield stagnation.</li>
            <li>Sustaining it needs monitoring, <b>integrated pest management</b>, crop rotation and <b>refuge planting</b>.</li>
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
            <li><b>Maharashtra</b> is a leading cotton state and among the <b>earliest large-scale adopters</b> after approval in <b>2002</b>.</li>
            <li>By <b>2010, over 90%</b> of the state's cotton area was under Bt cotton.</li>
            <li>Spread by <b>farmer-to-farmer communication</b> and visible early success.</li>
            <li>Better yield and lower pesticide costs won over <b>small and marginal farmers</b>.</li>
            <li><b>Private seed companies</b> promoted and distributed the seeds across villages.</li>
            <li>Concerns: <b>seed pricing</b>, pest resistance, input dependency.</li>
          </ul>
        ` },
        { title: 'Income effects', html: `
          <ul>
            <li>Early years: income rose through higher yields and lower pesticide spending.</li>
            <li>Many farmers saved <b>25–50%</b> on pesticide costs.</li>
            <li>Some small farmers moved from <b>subsistence to market-oriented</b> farming.</li>
            <li>Gains went to living standards, <b>debt repayment</b> and farm equipment.</li>
            <li>Later, rising seed prices and pest resistance cut profits; results varied with <b>region, rainfall and practices</b>.</li>
          </ul>
        ` },
        { title: 'Problems', html: `
          <ol>
            <li><b>Bollworm resistance</b> to the Bt toxin.</li>
            <li><b>Secondary pests</b> (whiteflies, aphids) needing extra pesticide.</li>
            <li><b>Droughts and poor irrigation</b> in rainfed regions like <b>Vidarbha</b>.</li>
            <li>High cost of <b>hybrid Bt seeds</b> squeezed small farmers.</li>
            <li>Crop failures led to <b>rising debt</b>, especially in rainfed areas.</li>
          </ol>
        ` },
        { title: 'Lessons', html: `
          <ul>
            <li><b>GM technology alone</b> cannot solve complex farm problems.</li>
            <li>It must be combined with <b>irrigation, soil care and pest management</b>.</li>
            <li><b>Farmer education</b> matters: many did not know about refuge planting or preventing resistance.</li>
            <li>Blanket, one-size-fits-all adoption gives uneven results and distress.</li>
            <li>Needs <b>government support, crop insurance and fair seed pricing</b>.</li>
            <li>Policy should be <b>balanced, science-based and farmer-centric</b>.</li>
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
            <li>GM is used in <b>ornamental plants</b> too, not just food and fibre crops.</li>
            <li>Traits: better <b>colour, fragrance, shelf life</b> and <b>resistance to wilting</b>.</li>
            <li>Famous examples: the <b>blue rose</b> (gene insertion) and <b>GM carnations</b> with longer vase life and new colours.</li>
            <li><b>Japan, Australia and Colombia</b> have commercialised GM carnations and roses.</li>
          </ul>
          <div class="note heads-up">One slide calls the <b>blue rose</b> the first commercially successful GM ornamental; another says <b>Japan introduced the first blue GM carnation</b>, followed by Australia's blue rose. Know both names: blue rose and blue carnation.</div>
        ` },
        { title: 'India', html: `
          <ul>
            <li>Research is ongoing on GM <b>roses, marigolds and chrysanthemums</b>.</li>
            <li>Approval rules for GM ornamentals are <b>more flexible</b> than for food crops.</li>
            <li>With investment, India could become a key <b>GM floriculture exporter</b>.</li>
          </ul>
        ` },
        { title: 'Why florists gain', html: `
          <ul>
            <li><b>Longer shelf life</b>: less waste in storage and transport, less restocking.</li>
            <li>Novel colours and longer blooms attract buyers; exotic flowers sell at a <b>premium</b>.</li>
            <li>Better fragrance and looks for high-value arrangements.</li>
            <li>Resistance to wilting and bruising: fewer losses, fewer replacements and complaints.</li>
            <li><b>Year-round supply</b> helps meet seasonal, bulk and export orders.</li>
            <li>Result: <b>better profit margins</b> and business sustainability.</li>
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
              <li>Lower pesticide and herbicide costs, higher net returns.</li>
              <li>Small farmers move to market-oriented farming; more <b>stable income</b>.</li>
              <li>Better quality and <b>shelf life</b>, fewer post-harvest losses.</li>
              <li>Can carry <b>higher nutritional content</b>.</li>
            </ul></div>
            <div class="side"><h4>Environmental</h4><ul>
              <li>Fewer chemicals: less <b>soil and water contamination</b>.</li>
              <li>Less spraying: lower <b>greenhouse gas emissions</b> from machines and transport.</li>
              <li>Higher productivity: <b>less pressure on forests</b> and habitats.</li>
              <li>Climate-resilient traits: drought and heat tolerance.</li>
              <li>Stable harvests: food security.</li>
            </ul></div>
          </div>
        ` },
        { title: 'Risks', html: `
          <ul>
            <li><b>Cross-pollination</b> with non-GM or wild plants.</li>
            <li>Overuse of herbicide-tolerant crops breeds <b>resistant weeds</b>, needing stronger chemicals.</li>
            <li><b>Long-term health effects</b> still debated; no conclusive harm proven.</li>
            <li><b>Patented seeds</b> must be bought every season, raising costs.</li>
            <li><b>Loss of traditional crop diversity</b>.</li>
            <li>Regulatory gaps and poor <b>labelling</b> cut consumer trust.</li>
          </ul>
        ` },
        { title: 'Social and ethical', html: `
          <ul>
            <li><b>Corporate control</b> of seeds: monopoly and market exploitation.</li>
            <li>Farmers dependent on patented seeds lose <b>autonomy</b>.</li>
            <li>High seed costs widen the gap between smallholders and big farmers.</li>
            <li><b>Cultural resistance</b> where traditional, organic or indigenous farming is valued.</li>
            <li>Ethics of altering nature's genetic code <b>for profit</b>.</li>
            <li><b>Public perception</b> is shaped by media, misinformation and low scientific literacy; fix with transparent labelling and education.</li>
          </ul>
        ` },
        { title: 'Global picture', html: `
          <table class="tbl">
            <tbody>
              <tr><td>Wide adoption</td><td><b>USA, Brazil, Argentina</b>: strong regulation, high acceptance, food and export</td></tr>
              <tr><td>Strict restrictions</td><td><b>European Union</b>: bans on most GM food crops (precautionary policy, public resistance)</td></tr>
              <tr><td>Mixed</td><td>Developing nations, based on regulatory readiness, farmer needs and trade</td></tr>
              <tr><td>India</td><td>At a <b>crossroads</b>; cautious yet progressive stance</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Future and balance', html: `
          <ul>
            <li>New tools: <b>CRISPR and gene editing</b>.</li>
            <li>Traits in development: <b>drought tolerance, enhanced nutrition, nitrogen-use efficiency</b>.</li>
            <li>Regulatory reforms to speed approval while keeping safety; <b>public-private partnerships</b>.</li>
            <li>Possible upcoming approval: <b>GM mustard</b>.</li>
            <li>Balance needs <b>strong regulation, transparent communication and education</b> to protect health, biodiversity and farmer welfare.</li>
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
