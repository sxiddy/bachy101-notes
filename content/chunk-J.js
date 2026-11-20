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
          <p class="lead">Only <b>2.5%</b> of water is fresh. <b>Water management</b>: planning, developing, distributing, managing <b>optimum use</b>. <b>Conservation</b>: protect sources, use efficiently.</p>
          <table class="tbl">
            <thead><tr><th>Role of water</th><th>How</th></tr></thead>
            <tbody>
              <tr><td><b>Ecological balance</b></td><td>Wetlands filter, control floods; rivers carry nutrients, habitats</td></tr>
              <tr><td><b>Agriculture</b></td><td>Irrigation in low rainfall, all year; poor irrigation → <b>waterlogging</b>, soil degradation</td></tr>
              <tr><td><b>Climate regulation</b></td><td>Water cycle spreads heat; oceans store solar energy; <b>water vapour = natural greenhouse gas</b></td></tr>
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
              <tr><td><b>Sustainability</b></td><td>Today's needs without depleting future: recycling, rainwater harvesting</td></tr>
              <tr><td><b>Equity</b></td><td>Fair share (farms, industry, homes); marginalised, rural access; basic needs, ecosystems first</td></tr>
              <tr><td><b>Efficiency</b></td><td>Cut losses in <b>storage, transmission, use</b>; drip, smart meters, <b>leak repair, infrastructure upgrades</b></td></tr>
              <tr><td><b>IWRM</b></td><td><b>Integrated Water Resources Management</b>: coordinates <b>water, land and related resources</b>; social, economic, environmental balance; whole water cycle</td></tr>
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
          <p class="lead"><b>Water conservation</b>: efficient use to cut waste, save for future.</p>
          <ul>
            <li>~<b>3%</b> fresh; <b>&lt; 1%</b> easily available.</li>
            <li><b>2 billion</b> in water-stressed regions; by 2025 half the world may face shortages.</li>
            <li>WHO: <b>2 million deaths</b> a year from unsafe water and sanitation; <b>Somalia drought 2011</b>.</li>
            <li>Agriculture uses <b>70%</b> of freshwater; <b>Cape Town "Day Zero" (2018)</b>.</li>
          </ul>
          <div class="note heads-up">Lecture gives freshwater as <b>2.5%</b> and later <b>~3%</b>; 2.5% is more exact.</div>
        ` },
        { title: 'Main methods', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Rainwater harvesting</b></td><td>Rooftops, catchments → tanks, filters, pits; irrigation, homes, <b>recharge</b>; eases floods, droughts</td></tr>
              <tr><td><b>Drip irrigation</b></td><td>To root zone; less evaporation, runoff, weeds; arid areas</td></tr>
              <tr><td><b>Leak detection</b></td><td>Sensors, smart meters in city pipes</td></tr>
              <tr><td><b>Efficient appliances</b></td><td>Low-flow showers, <b>aerated faucets</b>, <b>dual-flush toilets</b></td></tr>
              <tr><td><b>Recycling and reuse</b></td><td>Treated wastewater for non-potable uses: irrigation, industry, flushing</td></tr>
            </tbody>
          </table>
          <p>Also: public awareness, industrial recycling, protecting forests and watersheds.</p>
        ` },
        { title: 'Farms and cities', html: `
          <div class="vs">
            <div class="side"><h4>Agriculture (70% of freshwater)</h4><ul>
              <li><b>Precision irrigation</b>: sensors, water only as needed.</li>
              <li><b>Crop selection</b>: drought-resistant, less water-intensive.</li>
              <li><b>Mulching, organic farming</b>: retain moisture, less runoff.</li>
              <li><b>Watershed management</b>: whole catchment; afforestation, check dams, contour ploughing.</li>
            </ul><p>Needs government support, subsidies, farmer training.</p></div>
            <div class="side"><h4>Urban</h4><ul>
              <li><b>Stormwater management</b>: <b>bio-swales, rain gardens</b> absorb/filter runoff; prevent flooding, recharge groundwater; climate resilience.</li>
              <li><b>Decentralised wastewater treatment</b>: near source (homes, communities); less load on central plants, remote reach, cheap, energy-efficient, quick; reuse for gardening, flushing, irrigation.</li>
              <li><b>Smart water grids</b>: sensors, meters, analytics; real-time leak detection, match supply to demand.</li>
              <li><b>Greywater reuse</b>: baths, sinks, kitchens → gardening, landscaping; not drinkable; cuts freshwater demand and sewer volume.</li>
            </ul><p>Water-sensitive design, community-based solutions.</p></div>
          </div>
        ` },
        { title: 'Measured savings', html: `
          <table class="tbl">
            <thead><tr><th>Method</th><th>Typical saving</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td>Drip and micro-irrigation</td><td><b>28–80%</b></td><td>Cotton 28–35%; Israel smart drip up to 80% less water, yields up 100%</td></tr>
              <tr><td>Rainwater harvesting</td><td><b>10–30%+</b></td><td>UK rooftop systems cut household use 10–30%</td></tr>
              <tr><td>Wastewater reuse</td><td>~82% potable displacement</td><td>~32% of reclaimed water to farming, 20% landscaping</td></tr>
              <tr><td>Industrial recycling</td><td>26% (2006–15)</td><td>PepsiCo; market US$17.5 B in 2024, ~9.9% CAGR</td></tr>
            </tbody>
          </table>
          <h4>At home</h4>
          <p>Taps off while brushing; fix leaks; buckets not showers/hoses; reuse RO waste water; collect rainwater; dual-flush, low-flow fixtures; full loads; water plants with used water.</p>
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
              <tr><td>Rajasthan</td><td>Drip, sprinklers</td><td>Arid vegetables, <b>~50% less water</b></td></tr>
              <tr><td>Maharashtra</td><td>Farm ponds, micro-irrigation</td><td>Store rain for <b>rabi crops</b></td></tr>
              <tr><td>Tamil Nadu</td><td>Rainwater harvesting in fields</td><td>Recharge pits, contour bunds; paddy</td></tr>
              <tr><td>Andhra Pradesh</td><td><b>Zero Budget Natural Farming</b> (ZBNF)</td><td>Mulching, less irrigation</td></tr>
              <tr><td>Karnataka</td><td>Borewell recharge, drip</td><td>Sugarcane, horticulture</td></tr>
              <tr><td>Gujarat</td><td>Watershed development, check dams</td><td>Cotton, pulses</td></tr>
              <tr><td>Kerala</td><td><b>System of Rice Intensification</b> (SRI)</td><td>Alternate wetting/drying, <b>~30%</b> saved in paddy</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'People and change', html: `
          <ul>
            <li><b>Community</b>: awareness, school curricula, NGOs; <b>Ralegan Siddhi</b> (Maharashtra).</li>
            <li><b>Needed changes</b>: sustainable practices; strict groundwater/effluent rules; water user groups, village committees; school/media campaigns; smart irrigation, pipelines, leak networks, STPs; less water-intensive lifestyles.</li>
          </ul>
          <p><b>Government, NGOs, scientists, public</b> together; people-centric = ownership.</p>
          <div class="note exam">From <b>reactive to proactive</b>: science + policy + community.</div>
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
          <p class="lead"><b>Solid waste</b>: discarded <b>solid or semi-solid</b> material. India: <b>62+ million tonnes</b> MSW/yr (~<b>10,000 Eiffel Towers</b>).</p>
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
            <div class="side"><h4>Linear economy</h4><p><b>Take, make, dispose</b>; suited small populations. ~<b>100 billion tonnes</b> used yearly, <b>&lt; 9%</b> return.</p></div>
            <div class="side"><h4>Circular economy</h4><p><b>Reduce, reuse, recycle, regenerate</b>. Waste of one process = raw material of another. Glass bottle refilled hundreds of times, then recycled.</p></div>
          </div>
          <div class="steps">
            <div><b>Design out waste and pollution</b>.</div>
            <div><b>Keep products and materials in use</b>: repair, remanufacture, refurbish.</div>
            <div><b>Regenerate natural systems</b> (composting).</div>
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
          <p class="lead">3Rs in <b>priority order</b>: Reduce prevents; Reuse extends life; Recycle uses energy, leaves waste = <b>last resort</b>.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Reduce</b></td><td><b>Dematerialisation</b> (same function, less material); <b>EPR</b> (Extended Producer Responsibility): makers responsible at end of life</td></tr>
              <tr><td><b>Reuse</b></td><td>No major reprocessing: <b>steel tiffin box</b></td></tr>
              <tr><td><b>Recycle</b></td><td>Make new. Problem: <b>contamination</b> (curry-soaked carton) → <b>source segregation</b> of wet/dry is necessary</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Composting and AD', html: `
          <div class="vs">
            <div class="side"><h4>Composting</h4><p>Microbes turn food/garden waste into <b>compost</b>. <b>Vermicomposting</b>: earthworms, at home.</p></div>
            <div class="side"><h4>Anaerobic digestion</h4><p><b>No oxygen</b>, closed chamber → <b>biogas</b> (mainly methane) for cooking/power + <b>digestate</b> fertiliser.</p></div>
          </div>
          <table class="tbl">
            <thead><tr><th>Advantages</th><th>Disadvantages</th></tr></thead>
            <tbody>
              <tr><td>Manure raises water retention, ion-exchange capacity</td><td>Non-consumables disposed separately</td></tr>
              <tr><td>Some industrial wastes treatable</td><td>Farmers haven't adopted compost; no assured market</td></tr>
              <tr><td>Manure sold, lower disposal cost; effective recycling</td><td></td></tr>
            </tbody>
          </table>
          <div class="note heads-up">Listed under anaerobic digestion, but apply to both.</div>
        ` },
        { title: 'Incineration', html: `
          <p class="lead">Controlled burning, <b>800–1000°C</b>; volume <b>−90%</b>. <b>300 t/day</b> → <b>3 MW</b>. Worry: <b>dioxins</b> (emission control), ash disposal.</p>
          <table class="tbl">
            <thead><tr><th>Advantages</th><th>Disadvantages</th></tr></thead>
            <tbody>
              <tr><td>Residue <b>20–25%</b> of weight; clinker usable</td><td>High capital, operating cost</td></tr>
              <tr><td>Little space</td><td>Skilled staff</td></tr>
              <tr><td>Low transport (in city)</td><td>Smoke, dust, ash; air pollution</td></tr>
              <tr><td>Safest for hygiene; 300 t/day → 3 MW</td><td></td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Sanitary landfill', html: `
          <p class="lead"><b>Engineered</b> dump: <b>impermeable liner</b> blocks leachate; <b>landfill gas</b> (methane) captured. <b>Least-value</b> option.</p>
          <table class="tbl">
            <thead><tr><th>Advantages</th><th>Disadvantages</th></tr></thead>
            <tbody>
              <tr><td>Simple and economical</td><td>Needs a large area</td></tr>
              <tr><td>No segregation needed</td><td>High transport cost (sites far from town)</td></tr>
              <tr><td>Land can be reclaimed for other use</td><td>Bad odours</td></tr>
              <tr><td>Turns marshy waste land into useful land</td><td>Mosquitoes and flies</td></tr>
              <tr><td>Natural resources return to the soil</td><td><b>Fire hazard</b> from methane in wet weather</td></tr>
            </tbody>
          </table>        ` }
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
          <div class="note exam"><b>Solid Waste Management Rules, 2016</b>: <b>source segregation mandatory</b>; <b>bulk generators</b> (hotels, hospitals, markets) process own waste. Uneven implementation, circular intent.</div>
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
            <li>Capital for recycling, <b>waste-to-energy</b>.</li>
            <li>Commodity prices: cheap virgin plastic undercuts recycled.</li>
            <li>Public behaviour: every household must segregate.</li>
            <li>Fragmented governance.</li>
          </ol>
          <p>Engineering design problems: usable segregation, unsubsidised recycling, siting without opposition.</p>
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
