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
        { title: 'Meaning', html: `
          <p class="lead">Only <b>2.5%</b> of Earth's water is fresh, and less is usable. <b>Water management</b> is planning, developing, distributing and managing the <b>optimum use</b> of water. <b>Conservation</b> protects sources and uses water efficiently to cut waste.</p>
          <table class="tbl">
            <thead><tr><th>Role of water</th><th>How</th></tr></thead>
            <tbody>
              <tr><td><b>Ecological balance</b></td><td>Wetlands filter water and control floods; rivers carry nutrients and give habitats</td></tr>
              <tr><td><b>Agriculture</b></td><td>Irrigation allows farming in low rainfall and all year; poor irrigation causes <b>waterlogging</b> and soil degradation</td></tr>
              <tr><td><b>Climate regulation</b></td><td>Water cycle spreads heat; oceans store solar energy; <b>water vapour is a natural greenhouse gas</b></td></tr>
              <tr><td><b>Economic activity</b></td><td>Industry (manufacturing, cooling), <b>hydropower</b>, sanitation, fisheries</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Challenges', html: `
          <ol>
            <li><b>Water scarcity</b>: over-extraction of rivers and groundwater.</li>
            <li><b>Pollution</b>: industrial, agricultural, domestic waste.</li>
            <li><b>Climate change</b>: altered rainfall, floods and droughts.</li>
            <li><b>Inefficient usage</b>: low awareness, outdated irrigation.</li>
            <li><b>Overpopulation</b>: demand beyond sustainable limits.</li>
          </ol>
          <p>These need integrated strategies and public participation.</p>
        ` },
        { title: 'Principles', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Sustainability</b></td><td>Meet today's needs without depleting future supply: recycling, rainwater harvesting, less waste</td></tr>
              <tr><td><b>Equity</b></td><td>Fair share for agriculture, industry, homes; access for marginalised and rural people; basic needs and ecosystems first</td></tr>
              <tr><td><b>Efficiency</b></td><td>Cut losses in <b>storage, transmission and use</b>; drip irrigation, smart meters, leak repair</td></tr>
              <tr><td><b>IWRM</b></td><td><b>Integrated Water Resources Management</b>: coordinated development of <b>water, land and related resources</b>; balances social, economic and environmental needs; whole water cycle</td></tr>
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
        { title: 'Why conserve', html: `
          <p class="lead"><b>Water conservation</b> is the careful, efficient use of water to cut waste and save it for future needs.</p>
          <ul>
            <li>Only about <b>3%</b> of water is fresh; <b>less than 1%</b> is easily available.</li>
            <li><b>2 billion</b> people live in water-stressed regions; by 2025 half the world may face shortages.</li>
            <li>WHO: <b>2 million deaths</b> a year from unsafe water and sanitation; <b>Somalia drought 2011</b>.</li>
            <li>Agriculture uses <b>70%</b> of freshwater; <b>Cape Town "Day Zero" (2018)</b>.</li>
          </ul>
          <div class="note heads-up">The lecture gives freshwater as <b>2.5%</b> in its introduction and <b>about 3%</b> later. Both appear; 2.5% is the more exact figure.</div>
        ` },
        { title: 'Main methods', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Rainwater harvesting</b></td><td>Collect from rooftops and catchments in tanks, filters, pits; for irrigation, homes, <b>recharge</b>; eases floods and droughts</td></tr>
              <tr><td><b>Drip irrigation</b></td><td>Water straight to the root zone; less evaporation, runoff and weeds; ideal for arid areas</td></tr>
              <tr><td><b>Leak detection</b></td><td>Sensors and smart meters find pipe leaks in city systems</td></tr>
              <tr><td><b>Efficient appliances</b></td><td>Low-flow showers, <b>aerated faucets</b>, <b>dual-flush toilets</b></td></tr>
              <tr><td><b>Recycling and reuse</b></td><td>Treated wastewater for non-potable uses: irrigation, industry, flushing</td></tr>
            </tbody>
          </table>
          <p>Also: public awareness, industrial recycling, protecting forests and watersheds.</p>
        ` },
        { title: 'Farms and cities', html: `
          <div class="vs">
            <div class="side"><h4>Agriculture (70% of freshwater)</h4><ul>
              <li><b>Precision irrigation</b> with sensors</li>
              <li>Drought-resistant or low-water crops</li>
              <li><b>Mulching</b> and organic farming</li>
              <li><b>Watershed management</b>: afforestation, check dams, contour ploughing</li>
            </ul></div>
            <div class="side"><h4>Urban</h4><ul>
              <li><b>Stormwater</b>: bio-swales, rain gardens</li>
              <li><b>Decentralised wastewater treatment</b> near the source</li>
              <li><b>Smart water grids</b>: real-time monitoring</li>
              <li><b>Greywater reuse</b>: bath and kitchen water for gardens</li>
            </ul></div>
          </div>
        ` },
        { title: 'Measured savings', html: `
          <table class="tbl">
            <thead><tr><th>Method</th><th>Typical saving</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td>Drip and micro-irrigation</td><td><b>28–80%</b></td><td>Cotton 28–35%; Israel smart drip up to 80% less water, yields up 100%</td></tr>
              <tr><td>Rainwater harvesting</td><td><b>10–30%+</b></td><td>UK rooftop systems cut household use 10–30%</td></tr>
              <tr><td>Wastewater reuse</td><td>~82% potable displacement</td><td>~32% of reclaimed water to farming, 20% landscaping</td></tr>
              <tr><td>Industrial recycling</td><td>26% (2006–15)</td><td>PepsiCo; market US$17.5 B in 2024, ~10% CAGR</td></tr>
            </tbody>
          </table>
          <h4>At home</h4>
          <p>Turn off taps while brushing; fix leaks; use buckets not showers or hoses; reuse RO waste water for cleaning; collect rainwater; dual-flush and low-flow fixtures; full loads in washing machines and dishwashers; water plants with safe used water.</p>
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
        { title: 'India', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>National Water Policy</b> (1987, 2002, 2012)</td><td>IWRM, participatory irrigation, rainwater harvesting, groundwater regulation</td></tr>
              <tr><td><b>Jal Shakti Abhiyan</b> (2019)</td><td>Rainwater harvesting, renovating water bodies, afforestation, awareness</td></tr>
              <tr><td><b>Mission Amrit Sarovar</b></td><td>Rejuvenating water bodies</td></tr>
              <tr><td><b>MGNREGA</b></td><td>Funds watershed work, check dams, canals in rural areas</td></tr>
              <tr><td><b>PMKSY</b></td><td>"<b>Per Drop More Crop</b>": drip and sprinkler irrigation</td></tr>
              <tr><td><b>Atal Bhujal Yojana</b></td><td>Groundwater management with community participation</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Global', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>UN SDG 6</b></td><td>Clean water and sanitation by 2030</td></tr>
              <tr><td><b>EU Water Framework Directive</b> (2000)</td><td>Protect and restore clean water in Europe</td></tr>
              <tr><td>Australia <b>WELS</b></td><td>Water Efficiency Labelling and Standards for appliances</td></tr>
              <tr><td><b>USA Clean Water Act</b> (1972)</td><td>Regulates discharges, sets quality standards</td></tr>
            </tbody>
          </table>
          <p>Sector examples: <b>Rajasthan</b> drip, 50% less water; <b>Tiruppur</b> textile water recycling; <b>Israel</b> reuse gives 85% treated wastewater for farming.</p>
        ` },
        { title: 'State examples', html: `
          <table class="tbl">
            <thead><tr><th>State</th><th>Method</th><th>Impact</th></tr></thead>
            <tbody>
              <tr><td>Rajasthan</td><td>Drip and sprinkler</td><td>Vegetables with ~50% less water</td></tr>
              <tr><td>Maharashtra</td><td>Farm ponds, micro-irrigation</td><td>Store rain for rabi crops</td></tr>
              <tr><td>Tamil Nadu</td><td>Field rainwater harvesting</td><td>Recharge pits and contour bunds for paddy</td></tr>
              <tr><td>Andhra Pradesh</td><td><b>Zero Budget Natural Farming</b></td><td>Mulching cuts irrigation needs</td></tr>
              <tr><td>Karnataka</td><td>Borewell recharge, drip</td><td>Sugarcane and horticulture</td></tr>
              <tr><td>Gujarat</td><td>Watershed, check dams</td><td>Water for cotton and pulses</td></tr>
              <tr><td>Kerala</td><td><b>System of Rice Intensification</b></td><td>Alternate wetting and drying saves ~30%</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'People and change', html: `
          <ul>
            <li><b>Community</b>: awareness programmes, school curricula, NGOs, community-led change such as <b>Ralegan Siddhi</b> (Maharashtra).</li>
            <li><b>Needed changes</b>: adopt sustainable practices; strict rules on groundwater and effluents; water user groups and village committees; school and media campaigns; smart irrigation, pipelines, leak networks, STPs; lifestyle shifts away from water-intensive products.</li>
          </ul>
          <div class="note exam">Conservation must move from <b>reactive to proactive</b>, joining science, policy and community action.</div>
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
          <p class="lead"><b>Solid waste</b> is any discarded <b>solid or semi-solid</b> material. India makes over <b>62 million tonnes</b> of municipal solid waste a year, about the weight of <b>10,000 Eiffel Towers</b>.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Municipal (MSW)</b></td><td>Household garbage: food, paper, plastic, glass</td></tr>
              <tr><td><b>Industrial</b></td><td>Steel slag, power-station ash, chemical residues</td></tr>
              <tr><td><b>Biomedical</b></td><td>Syringes, bandages, expired medicines; infection risk</td></tr>
              <tr><td><b>E-waste</b></td><td>Old phones, laptops; <b>lead and mercury</b></td></tr>
              <tr><td><b>Construction and demolition</b></td><td>Concrete, bricks, wood</td></tr>
              <tr><td><b>Agricultural</b></td><td>Crop residue, manure</td></tr>
            </tbody>
          </table>
          <div class="note exam">One-size-fits-all fails: biomedical waste can't join vegetable peels; e-waste can't be burnt in a pit. <b>Food waste is 50–60%</b> of Indian household MSW.</div>
        ` },
        { title: 'Linear vs circular', html: `
          <div class="vs">
            <div class="side"><h4>Linear economy</h4><p><b>Take, make, dispose</b>. Worked when population was small and resources seemed endless. Today about <b>100 billion tonnes</b> of materials are used yearly and <b>under 9%</b> return to use.</p></div>
            <div class="side"><h4>Circular economy</h4><p><b>Reduce, reuse, recycle, regenerate</b>. A loop: waste from one process is raw material for another. Glass bottle: collected, cleaned, refilled hundreds of times, then recycled.</p></div>
          </div>
          <div class="steps">
            <div><b>Design out waste and pollution</b> at the design stage.</div>
            <div><b>Keep products and materials in use</b>: repair, remanufacture, refurbish.</div>
            <div><b>Regenerate natural systems</b>, e.g. composting returns nutrients to soil.</div>
          </div>
          <p>Ellen MacArthur Foundation: <b>USD 4.5 trillion</b> of global benefit by 2030.</p>
          <div class="note exam">"Circular thinking starts at the drawing board, not at the rubbish bin."</div>
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
        { title: 'The 3Rs', html: `
          <p class="lead">The 3Rs are in <b>priority order</b>: Reduce solves the problem before it exists; Reuse extends life; Recycle still needs energy and leaves waste, so it is the <b>last resort</b> of the three.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Reduce</b></td><td><b>Dematerialisation</b> (same function, less material); <b>Extended Producer Responsibility (EPR)</b> makes makers responsible at end of life</td></tr>
              <tr><td><b>Reuse</b></td><td>Use again without major reprocessing: the <b>steel tiffin box</b></td></tr>
              <tr><td><b>Recycle</b></td><td>Make something new. Main problem is <b>contamination</b> (curry-soaked carton), so <b>source segregation</b> of wet and dry waste is a technical necessity</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Composting and AD', html: `
          <div class="vs">
            <div class="side"><h4>Composting</h4><p>Microbes break down food and garden waste under control into nutrient-rich <b>compost</b>. <b>Vermicomposting</b> uses earthworms and works at home.</p></div>
            <div class="side"><h4>Anaerobic digestion</h4><p>Same idea <b>without oxygen</b> in a closed chamber. Produces <b>biogas</b> (mainly methane) for cooking or power, and <b>digestate</b> as fertiliser.</p></div>
          </div>
          <table class="tbl">
            <thead><tr><th>Advantages</th><th>Disadvantages</th></tr></thead>
            <tbody>
              <tr><td>Manure raises soil water retention and ion-exchange capacity</td><td>Non-consumables must be disposed of separately</td></tr>
              <tr><td>Some industrial solid wastes can also be treated</td><td>Farmers have not taken up compost yet, so no assured market</td></tr>
              <tr><td>Manure can be sold, cutting disposal cost; recycling is effective</td><td></td></tr>
            </tbody>
          </table>
          <div class="note heads-up">The notes list these pros and cons under anaerobic digestion, but they talk about manure and compost, so they apply to both composting and digestion.</div>
        ` },
        { title: 'Incineration', html: `
          <p class="lead">Controlled burning at <b>800–1000°C</b>; cuts volume by up to <b>90%</b>. A <b>300 t/day</b> plant can give <b>3 MW</b>. Main worry: <b>dioxins</b>, so emission control is a must, and ash needs safe disposal.</p>
          <table class="tbl">
            <thead><tr><th>Advantages</th><th>Disadvantages</th></tr></thead>
            <tbody>
              <tr><td>Residue only <b>20–25%</b> of original weight; clinker usable after treatment</td><td>High capital and operating cost</td></tr>
              <tr><td>Needs very little space</td><td>Needs skilled staff</td></tr>
              <tr><td>Low transport cost (inside city limits)</td><td>Smoke, dust and ash need disposal; air pollution</td></tr>
              <tr><td>Safest for hygiene; 300 t/day → 3 MW</td><td></td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Sanitary landfill', html: `
          <p class="lead">The <b>engineered</b> rubbish dump: an <b>impermeable liner</b> stops leachate reaching groundwater, and <b>landfill gas</b> (methane) is captured for energy. It is the <b>least-value</b> option.</p>
          <table class="tbl">
            <thead><tr><th>Advantages</th><th>Disadvantages</th></tr></thead>
            <tbody>
              <tr><td>Simple and economical</td><td>Needs a large area</td></tr>
              <tr><td>No segregation needed</td><td>High transport cost (sites far from town)</td></tr>
              <tr><td>Land can be reclaimed for other use</td><td>Bad odours</td></tr>
              <tr><td>Turns marshy waste land into useful land</td><td>Mosquitoes and flies</td></tr>
              <tr><td>Natural resources return to the soil</td><td><b>Fire hazard</b> from methane in wet weather</td></tr>
            </tbody>
          </table>
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
        { title: 'ISWM', html: `
          <p class="lead"><b>Integrated Solid Waste Management</b> combines all methods, because no single one handles every waste.</p>
          <div class="steps">
            <div>Prevent</div>
            <div>Reuse</div>
            <div>Recycle</div>
            <div>Compost or digest</div>
            <div>Recover energy (incineration)</div>
            <div><b>Landfill</b>, only as a last resort</div>
          </div>
          <div class="note exam">India's <b>Solid Waste Management Rules, 2016</b> made <b>source segregation mandatory</b> and required <b>bulk generators</b> (hotels, hospitals, markets) to process their own waste. Implementation is uneven, but the intent is circular.</div>
        ` },
        { title: 'Examples', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Kalundborg, Denmark</b></td><td><b>Industrial symbiosis</b>: power plant steam → pharmaceutical factory; fly ash → cement plant; sulphur → wallboard maker</td></tr>
              <tr><td><b>Thiruvananthapuram, Kerala</b></td><td>Biogas plant turns market vegetable and fruit waste into cooking gas</td></tr>
              <tr><td><b>Japan urban mining</b></td><td>Gold, silver and rare earths from e-waste, often richer than natural ore; a Japanese city is marked zero-waste</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Challenges', html: `
          <ol>
            <li>Advanced recycling and <b>waste-to-energy</b> need capital many municipalities lack.</li>
            <li>Recycling depends on commodity prices: cheap virgin plastic undercuts recycled plastic.</li>
            <li>Public behaviour: segregation needs every household.</li>
            <li>Fragmented governance across city departments.</li>
          </ol>
          <p>These are engineering design problems: a segregation system people use, recycling viable without subsidy, siting plants without opposition.</p>
          <div class="note exam">Solid waste is <b>misplaced resources</b>: the circular economy captures what the linear economy throws away.</div>
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
