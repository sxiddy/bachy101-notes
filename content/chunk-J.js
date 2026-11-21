CHUNK({
  chunk: 'J',
  module: 'm3',
  topics: [
    {
      id: 'm3-water-management',
      title: 'Water management: roles, challenges, principles',
      short: 'Water management',
      blurb: 'Why water matters, what water management and conservation mean, the five challenges, and the four principles including IWRM.',
      source: 'Lecture W3 (Water management and conservation), pages 1–3',
      tabs: [
        { title: 'Meaning and roles', html: `
          <p class="lead">Only <b>2.5%</b> of water is fresh. <b>Water management</b>: planning, developing, distributing for <b>optimum use</b>. <b>Conservation</b>: protect sources, use efficiently.</p>
          <ul>
            <li><b>Ecological balance</b>: wetlands filter, control floods.</li>
            <li><b>Agriculture</b>: poor irrigation → <b>waterlogging</b>.</li>
            <li><b>Climate</b>: <b>water vapour = natural greenhouse gas</b>.</li>
            <li><b>Economy</b>: industry, <b>hydropower</b>, fisheries.</li>
          </ul>
        ` },
        { title: 'Challenges and principles', html: `
          <p>Five challenges: <b>scarcity</b>, <b>pollution</b>, <b>climate change</b>, <b>inefficient use</b>, <b>overpopulation</b>.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Sustainability</b></td><td>Meet today's needs without depleting the future</td></tr>
              <tr><td><b>Equity</b></td><td>Fair share; basic needs, ecosystems first</td></tr>
              <tr><td><b>Efficiency</b></td><td>Cut losses in <b>storage, transmission, use</b></td></tr>
              <tr><td><b>IWRM</b></td><td><b>Integrated Water Resources Management</b>: coordinates <b>water, land and related resources</b></td></tr>
            </tbody>
          </table>
        ` }
      ],
      flashcards: [
        { front: "Share of Earth's water that is fresh (management lecture)?", back: '<b>2.5%</b>.' },
        { front: 'Four principles of water management?', back: '<b>Sustainability, equity, efficiency, IWRM</b>.' },
        { front: 'What does IWRM coordinate?', back: 'Development and management of <b>water, land and related resources</b>.' },
        { front: 'Efficiency cuts losses in which three stages?', back: '<b>Storage, transmission, use</b>.' },
        { front: 'Five water management challenges?', back: 'Scarcity, pollution, climate change, inefficient use, overpopulation.' }
      ],
      oneLiners: [
        'Wetlands act as natural filters and flood controllers.',
        'Water vapour is a natural greenhouse gas.',
        'Poor irrigation causes waterlogging.'
      ],
      formulas: []
    },
    {
      id: 'm3-water-conservation',
      title: 'Water conservation methods',
      short: 'Water conservation',
      blurb: 'Why conservation matters, the main methods, farm and city water management, measured global savings, and household habits.',
      source: 'Lecture W3 (Water management and conservation), pages 4–10',
      tabs: [
        { title: 'Why and how', html: `
          <div class="kv">
            <div><span>Easily available freshwater</span><b>&lt; 1%</b></div>
            <div><span>In water-stressed regions</span><b>2 billion</b></div>
            <div><span>Deaths/yr, unsafe water (WHO)</span><b>2 million</b></div>
            <div><span>Freshwater used by agriculture</span><b>70%</b></div>
          </div>
          <p>Crises: <b>Cape Town "Day Zero" (2018)</b>, <b>Somalia drought 2011</b>.</p>
          <ul>
            <li><b>Rainwater harvesting</b>: storage and groundwater <b>recharge</b>.</li>
            <li><b>Drip irrigation</b>: water to root zone.</li>
            <li>Leak detection: sensors, smart meters.</li>
            <li>Efficient fixtures: <b>aerated faucets</b>, <b>dual-flush toilets</b>.</li>
            <li>Recycling: treated wastewater for non-potable use.</li>
          </ul>
          <div class="note heads-up">Lecture gives freshwater as <b>2.5%</b> and later <b>~3%</b>; 2.5% is more exact.</div>
        ` },
        { title: 'Farms, cities, savings', html: `
          <ul>
            <li>Farms: precision irrigation, drought-resistant crops, <b>mulching</b>, <b>watershed management</b> (check dams, contour ploughing).</li>
            <li>Cities: <b>bio-swales, rain gardens</b>; decentralised treatment; <b>smart water grids</b> (real-time leaks); <b>greywater</b> (baths, sinks, kitchens) for gardens, not drinkable.</li>
          </ul>
          <table class="tbl">
            <thead><tr><th>Method</th><th>Saving</th></tr></thead>
            <tbody>
              <tr><td>Drip irrigation</td><td><b>28–80%</b>; Israel up to 80%, yields up 100%</td></tr>
              <tr><td>Rainwater harvesting (UK)</td><td><b>10–30%</b></td></tr>
              <tr><td>Wastewater reuse</td><td>~82% potable displacement</td></tr>
              <tr><td>Industrial recycling (PepsiCo)</td><td>26% (2006–15)</td></tr>
            </tbody>
          </table>
        ` }
      ],
      flashcards: [
        { front: 'Share of freshwater used by agriculture?', back: '<b>70%</b>.' },
        { front: 'What was Cape Town\'s "Day Zero"?', back: 'A <b>2018</b> water crisis when taps nearly ran dry.' },
        { front: 'Savings from drip irrigation?', back: '<b>28–80%</b>; Israel up to 80% with yields up 100%.' },
        { front: 'What is greywater?', back: 'Relatively clean wastewater from <b>baths, sinks and kitchens</b>, reused for gardens.' },
        { front: 'Watershed management uses…', back: 'Afforestation, <b>check dams</b>, contour ploughing.' },
        { front: 'Urban green stormwater tools?', back: '<b>Bio-swales and rain gardens</b>.' }
      ],
      oneLiners: [
        '2 billion people live in water-stressed regions.',
        'Rooftop rainwater can cut household use by 10–30%.',
        'Smart water grids detect leaks in real time.'
      ],
      formulas: []
    },
    {
      id: 'm3-water-policy',
      title: 'Water policy, examples and the way forward',
      short: 'Water policy',
      blurb: 'Indian and global water laws and schemes, state-wise farm conservation examples, community action, and the changes needed.',
      source: 'Lecture W3 (Water management and conservation), pages 6–12',
      tabs: [
        { title: 'India and global', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>National Water Policy</b></td><td><b>1987, 2002, 2012</b></td></tr>
              <tr><td><b>Jal Shakti Abhiyan</b></td><td><b>2019</b>; rainwater harvesting</td></tr>
              <tr><td>Mission Amrit Sarovar</td><td>Rejuvenating water bodies</td></tr>
              <tr><td>MGNREGA</td><td>Funds rural watershed work, check dams</td></tr>
              <tr><td><b>PMKSY</b></td><td>"<b>Per Drop More Crop</b>"</td></tr>
              <tr><td><b>Atal Bhujal Yojana</b></td><td>Groundwater, community participation</td></tr>
              <tr><td><b>UN SDG 6</b></td><td>Clean water and sanitation by 2030</td></tr>
              <tr><td>EU Water Framework Directive</td><td><b>2000</b></td></tr>
              <tr><td>Australia <b>WELS</b></td><td>Appliance water-efficiency labels</td></tr>
              <tr><td>USA Clean Water Act</td><td><b>1972</b></td></tr>
            </tbody>
          </table>
          <p><b>Tiruppur</b>: textile water recycling. <b>Israel</b>: 85% treated wastewater to farms.</p>
        ` },
        { title: 'State examples', html: `
          <table class="tbl">
            <tbody>
              <tr><td>Rajasthan</td><td>Drip, sprinklers: <b>~50% less water</b></td></tr>
              <tr><td>Maharashtra</td><td>Farm ponds for <b>rabi crops</b></td></tr>
              <tr><td>Tamil Nadu</td><td>Field rainwater harvesting, recharge pits</td></tr>
              <tr><td>Andhra Pradesh</td><td><b>Zero Budget Natural Farming</b></td></tr>
              <tr><td>Karnataka</td><td>Borewell recharge</td></tr>
              <tr><td>Gujarat</td><td>Check dams, watershed</td></tr>
              <tr><td>Kerala</td><td><b>SRI</b> (System of Rice Intensification): <b>~30%</b> saved</td></tr>
            </tbody>
          </table>
          <p>Community model: <b>Ralegan Siddhi</b> (Maharashtra). Shift <b>reactive to proactive</b>.</p>
        ` }
      ],
      flashcards: [
        { front: 'PMKSY slogan?', back: '"<b>Per Drop More Crop</b>".' },
        { front: 'Jal Shakti Abhiyan year?', back: '<b>2019</b>.' },
        { front: 'Years of India\'s National Water Policies?', back: '<b>1987, 2002, 2012</b>.' },
        { front: 'Village famous for community water management?', back: '<b>Ralegan Siddhi</b>, Maharashtra.' },
        { front: 'Kerala method that saves ~30% water in paddy?', back: '<b>System of Rice Intensification</b> (alternate wetting and drying).' },
        { front: 'SDG on water?', back: '<b>SDG 6</b>: clean water and sanitation.' }
      ],
      oneLiners: [
        'Atal Bhujal Yojana manages groundwater with communities.',
        'EU Water Framework Directive: 2000.',
        'USA Clean Water Act: 1972.'
      ],
      formulas: []
    },
    {
      id: 'm3-solid-waste',
      title: 'Solid waste and the circular economy',
      short: 'Waste and circularity',
      blurb: 'What solid waste is, its six categories, why classification matters, and the move from a linear to a circular economy.',
      source: 'Lecture W3S6 (Circular economy and solid waste), pages 1–4',
      tabs: [
        { title: 'Solid waste', html: `
          <p class="lead"><b>Solid waste</b>: discarded <b>solid or semi-solid</b> material. India: <b>62+ million tonnes</b> MSW/yr; <b>food waste 50–60%</b> of household MSW.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Municipal (MSW)</b></td><td>Household garbage</td></tr>
              <tr><td>Industrial</td><td>Steel slag, power-station ash</td></tr>
              <tr><td><b>Biomedical</b></td><td>Syringes, bandages; infection risk</td></tr>
              <tr><td><b>E-waste</b></td><td><b>Lead and mercury</b></td></tr>
              <tr><td>Construction and demolition</td><td>Concrete, bricks</td></tr>
              <tr><td>Agricultural</td><td>Crop residue, manure</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Linear vs circular', html: `
          <div class="vs">
            <div class="side"><h4>Linear</h4><p><b>Take, make, dispose</b>. ~<b>100 billion tonnes</b>/yr used, <b>&lt; 9%</b> returns.</p></div>
            <div class="side"><h4>Circular</h4><p><b>Reduce, reuse, recycle, regenerate</b>; one process's waste = another's raw material.</p></div>
          </div>
          <p>Three principles: <b>design out waste</b>; <b>keep materials in use</b>; <b>regenerate natural systems</b>.</p>
          <p>Ellen MacArthur Foundation: <b>USD 4.5 trillion</b> by 2030.</p>
        ` }
      ],
      flashcards: [
        { front: 'MSW India generates a year?', back: 'Over <b>62 million tonnes</b>.' },
        { front: 'Six categories of solid waste?', back: 'MSW, industrial, biomedical, e-waste, construction and demolition, agricultural.' },
        { front: 'Share of Indian household MSW that is food waste?', back: '<b>50–60%</b>.' },
        { front: 'Linear economy in three words?', back: '<b>Take, make, dispose</b>.' },
        { front: 'Three principles of a circular economy?', back: 'Design out waste; keep materials in use; regenerate natural systems.' },
        { front: 'Share of materials that return to use today?', back: '<b>Under 9%</b> of ~100 billion tonnes.' }
      ],
      oneLiners: [
        'E-waste holds lead and mercury.',
        'Circular economy could bring USD 4.5 trillion by 2030.',
        'Waste from one process becomes raw material for another.'
      ],
      formulas: []
    },
    {
      id: 'm3-waste-treatment',
      title: 'The 3Rs and waste treatment methods',
      short: '3Rs and treatment',
      blurb: 'Why reduce comes before reuse and recycle, and how composting, anaerobic digestion, incineration and sanitary landfills work, with pros and cons.',
      source: 'Lecture W3S6 (Circular economy and solid waste), pages 4–6',
      tabs: [
        { title: '3Rs, composting, AD', html: `
          <p class="lead">Priority: <b>Reduce → Reuse → Recycle</b> (recycling = <b>last resort</b>).</p>
          <ul>
            <li><b>Dematerialisation</b>: same function, less material.</li>
            <li><b>EPR</b> (Extended Producer Responsibility): makers handle end of life.</li>
            <li>Reuse: <b>steel tiffin box</b>. Recycling problem: <b>contamination</b> → <b>source segregation</b>.</li>
            <li><b>Composting</b>: microbes; <b>vermicomposting</b> uses earthworms.</li>
            <li><b>Anaerobic digestion</b>: <b>no oxygen</b> → <b>biogas</b> (methane) + <b>digestate</b>.</li>
          </ul>
        ` },
        { title: 'Incineration and landfill', html: `
          <div class="vs">
            <div class="side"><h4>Incineration</h4><p><b>800–1000°C</b>; volume <b>−90%</b>; residue <b>20–25%</b> of weight; <b>300 t/day → 3 MW</b>. Cons: <b>dioxins</b>, high cost.</p></div>
            <div class="side"><h4>Sanitary landfill</h4><p><b>Impermeable liner</b> blocks leachate; methane captured. <b>Least-value</b> option; no segregation needed. Cons: large area, <b>fire hazard</b> (methane).</p></div>
          </div>
        ` }
      ],
      flashcards: [
        { front: 'Order of the 3Rs and why?', back: '<b>Reduce, reuse, recycle</b>; recycling still uses energy and leaves waste, so it comes last.' },
        { front: 'What is EPR?', back: '<b>Extended Producer Responsibility</b>: makers responsible for products at end of life.' },
        { front: 'Main obstacle to recycling?', back: '<b>Contamination</b>; hence source segregation.' },
        { front: 'Incineration temperature and volume cut?', back: '<b>800–1000°C</b>; up to <b>90%</b>.' },
        { front: 'Power from a 300 t/day incinerator?', back: '<b>3 MW</b>.' },
        { front: 'Products of anaerobic digestion?', back: '<b>Biogas</b> (methane) and <b>digestate</b> fertiliser.' },
        { front: 'Why are landfills a fire hazard?', back: '<b>Methane</b> forms, especially in wet weather.' }
      ],
      oneLiners: [
        'Vermicomposting uses earthworms.',
        'Incinerator residue is only 20–25% of the original weight.',
        'Sanitary landfills need an impermeable liner.',
        'Dematerialisation = same function, less material.'
      ],
      formulas: []
    },
    {
      id: 'm3-iswm',
      title: 'Integrated waste management and examples',
      short: 'ISWM and examples',
      blurb: 'The waste hierarchy, India\'s 2016 Solid Waste Management Rules, Kalundborg, Thiruvananthapuram and Japan\'s urban mining, and the challenges.',
      source: 'Lecture W3S6 (Circular economy and solid waste), pages 7–8',
      tabs: [
        { title: 'ISWM and rules', html: `
          <p class="lead"><b>Integrated Solid Waste Management</b>: combines all methods.</p>
          <p>Hierarchy: prevent → reuse → recycle → compost/digest → energy recovery → <b>landfill last</b>.</p>
          <p><b>Solid Waste Management Rules, 2016</b>: <b>source segregation mandatory</b>; <b>bulk generators</b> (hotels, hospitals, markets) process own waste.</p>
        ` },
        { title: 'Examples', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Kalundborg, Denmark</b></td><td><b>Industrial symbiosis</b>: power plant steam → pharmaceutical factory; fly ash → cement; sulphur → wallboard</td></tr>
              <tr><td><b>Thiruvananthapuram</b></td><td>Market waste → biogas</td></tr>
              <tr><td><b>Japan</b></td><td><b>Urban mining</b>: gold, silver, rare earths from e-waste</td></tr>
            </tbody>
          </table>
          <p>Challenges: capital, cheap virgin plastic, household behaviour, fragmented governance. Solid waste = <b>misplaced resources</b>.</p>
        ` }
      ],
      flashcards: [
        { front: 'Waste hierarchy in ISWM?', back: 'Prevent → reuse → recycle → compost/digest → energy recovery → <b>landfill last</b>.' },
        { front: 'What did the SWM Rules 2016 make mandatory?', back: '<b>Source segregation</b>; bulk generators process their own waste.' },
        { front: 'Kalundborg is an example of…', back: '<b>Industrial symbiosis</b> (Denmark).' },
        { front: 'What is urban mining?', back: 'Recovering gold, silver and rare earths from <b>discarded electronics</b> (Japan).' },
        { front: 'Kerala circular example?', back: '<b>Thiruvananthapuram</b> biogas plant from market waste.' }
      ],
      oneLiners: [
        'Kalundborg sends fly ash to a cement plant.',
        'Cheap virgin plastic makes recycling hard to sell.',
        'Bulk generators include hotels, hospitals and markets.'
      ],
      formulas: []
    }
  ],
  figures: []
});
