CHUNK({
  chunk: 'I',
  module: 'm3',
  topics: [
    {
      id: 'm3-soil-pollution',
      title: 'Soil pollution: meaning and sources',
      short: 'Soil pollution sources',
      blurb: 'What soil pollution is, when natural soil compounds become pollution, the man-made and natural sources, and why construction sites matter.',
      source: 'Lecture W3S3 (Soil pollution), pages 1–3',
      tabs: [
        { title: 'Definition', html: `
          <p class="lead"><b>Soil pollution</b> (soil contamination, land pollution) is part of <b>land degradation</b>, caused by <b>xenobiotic (human-made) chemicals</b> or other changes to the natural soil environment.</p>
          <ul>
            <li>Typical causes: <b>industrial activity, agricultural chemicals, improper waste disposal</b>.</li>
            <li>Contamination tracks the <b>degree of industrialisation</b> and the intensity of chemical use.</li>
            <li>Health concern comes from <b>direct contact</b>, <b>vapour</b> from contaminants, and <b>secondary contamination of water</b> in and under the soil.</li>
          </ul>
        ` },
        { title: 'When it becomes pollution', html: `
          <p>All soils naturally contain "contaminants": <b>metals</b>, inorganic ions and salts (phosphates, carbonates, sulphates, nitrates) and organic compounds (lipids, proteins, DNA, fatty acids, hydrocarbons, PAHs, alcohols). They come mainly from <b>microbial activity</b> and decomposition, plus inputs from rain, wind, soil disturbance, surface water and shallow groundwater.</p>
          <div class="note exam">Pollution begins when these amounts <b>exceed natural levels</b>. This can happen from anthropogenic or natural causes.</div>
          <figure data-fig="m3-soil-types"></figure>
          <div class="note heads-up">The figure's "Organic phosphate pollution" means <b>organophosphate</b> pesticides (chlorpyrifos, malathion).</div>
        ` },
        { title: 'Man-made sources', html: `
          <ul>
            <li>Accidental <b>spills and leaks</b> of chemicals (petrol and diesel at fuel stations).</li>
            <li><b>Foundries</b> and furnace-based manufacturing.</li>
            <li><b>Mining</b>: crushing and processing raw materials (heavy metals).</li>
            <li><b>Construction</b>.</li>
            <li><b>Agriculture</b>: herbicides, pesticides, insecticides, fertilisers.</li>
            <li><b>Transport</b>: vehicle emissions.</li>
            <li><b>Chemical waste dumping</b>, accidental or illegal.</li>
            <li><b>Landfills</b>: leaks into groundwater, polluted vapours.</li>
            <li><b>Lead-based paint chips</b> falling from walls.</li>
          </ul>
        ` },
        { title: 'Construction sites', html: `
          <p class="lead">Construction sites are the <b>most important trigger of soil pollution in urban areas</b> because they are almost everywhere.</p>
          <ul>
            <li>The highest risk comes from chemicals that travel as <b>fine particulate matter</b>: they resist degradation and bioaccumulate (e.g. <b>PAHs</b>).</li>
            <li>Construction dust is <b>under 10 microns</b>; it causes asthma, bronchitis and even cancer.</li>
            <li>Demolishing old buildings can release <b>asbestos</b>, which poisons soil and is spread by wind.</li>
          </ul>
        ` },
        { title: 'Natural processes', html: `
          <p>Natural conditions can raise or lower the toxicity of man-made pollutants. Natural routes to soil pollution:</p>
          <ul>
            <li><b>Natural accumulation</b>: imbalance between atmospheric deposition and leaching by rain (e.g. <b>perchlorate</b> in arid soils).</li>
            <li><b>Natural production</b>: perchlorate can form with a chlorine source, a metal object and <b>thunderstorm energy</b>.</li>
            <li><b>Leaking sewer lines</b>: added chlorine can form <b>trihalomethanes</b> such as chloroform.</li>
          </ul>
        ` }
      ],
      flashcards: [
        { front: 'What are xenobiotic chemicals?', back: '<b>Human-made</b> chemicals foreign to the natural environment.' },
        { front: 'When do natural soil compounds count as pollution?', back: 'When they <b>exceed natural levels</b>.' },
        { front: 'Most important trigger of soil pollution in cities?', back: '<b>Construction sites</b>.' },
        { front: 'Size of dangerous construction dust?', back: '<b>Under 10 microns</b>.' },
        { front: 'Compound that accumulates naturally in arid soils?', back: '<b>Perchlorate</b>.' },
        { front: 'Leaking sewers plus chlorine can form…', back: '<b>Trihalomethanes</b> such as chloroform.' }
      ],
      oneLiners: [
        'Soil pollution is a part of land degradation.',
        'Lead-based paint chips pollute soil.',
        'PAHs travel as particulates and bioaccumulate.',
        'Asbestos from demolition spreads by wind.'
      ],
      formulas: []
    },
    {
      id: 'm3-soil-effects',
      title: 'Effects of soil pollution and solutions',
      short: 'Soil effects and fixes',
      blurb: 'How soil pollution harms people, plants, fertility, soil structure and groundwater, the three routes into the body, and five solutions.',
      source: 'Lecture W3S3 (Soil pollution), pages 3–5',
      tabs: [
        { title: 'Human health', html: `
          <p>Crops absorb soil pollutants and pass them on. Long exposure can alter genetic make-up, causing <b>congenital and chronic illness</b>; it sickens livestock, causes food poisoning, and can lead to <b>famine</b> if plants cannot grow.</p>
          <table class="tbl">
            <thead><tr><th>Route</th><th>Who and how</th></tr></thead>
            <tbody>
              <tr><td><b>Inhalation</b></td><td>Workers handling soil and people living nearby breathe fine dust</td></tr>
              <tr><td><b>Eating</b></td><td>Adults: soil on vegetables, or eaten for cultural reasons. <b>Children under 3</b> eat soil while playing and absorb more toxins</td></tr>
              <tr><td><b>Skin contact</b></td><td>"Dermal" or "cutaneous" absorption; mostly <b>VOCs</b>, also some heavy metals</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Other effects', html: `
          <ol>
            <li><b>Plant growth</b>: plants cannot adapt to sudden chemistry change; soil-binding fungi and bacteria decline, causing <b>erosion</b>.</li>
            <li><b>Lower fertility</b>: poorer yields; produce lacks nutrients and may be poisonous.</li>
            <li><b>Toxic dust</b>: foul gases and smell from landfills.</li>
            <li><b>Soil structure changes</b>: soil organisms (earthworms) die; animals migrate for food.</li>
            <li><b>Groundwater poisoning</b>: toxins percolate into the water table used by wells and tube wells; <b>arsenic poisoning</b>, food poisoning, sometimes fatal.</li>
          </ol>
        ` },
        { title: 'Solutions', html: `
          <p>World population is expected to pass <b>9 billion by 2050</b>, so food security depends on the soils we already have. Individuals help by sustainable food choices, <b>recycling batteries</b>, <b>home composting</b> and managing antibiotic waste.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Less chemical fertiliser</b></td><td>Excess upsets pH, kills good microbes and its runoff pollutes water: a double-edged sword</td></tr>
              <tr><td><b>Reforestation and afforestation</b></td><td>Roots bind soil, hold microbes and maintain the water table</td></tr>
              <tr><td><b>Recycle and reuse</b></td><td>Less plastic in landfills, which leach toxins as they slowly decompose</td></tr>
              <tr><td><b>Involve locals</b></td><td>Awareness programmes</td></tr>
              <tr><td><b>Natural manure</b></td><td>Organic, harmless, restores soil health with no harmful by-products</td></tr>
            </tbody>
          </table>
        ` }
      ],
      flashcards: [
        { front: 'Three routes by which soil enters the body?', back: '<b>Inhalation, eating, skin contact</b>.' },
        { front: 'Most at-risk group for eating soil?', back: '<b>Children under 3</b>.' },
        { front: 'Pollutants most absorbed through skin from soil?', back: '<b>Volatile organic compounds</b>.' },
        { front: 'Why does soil pollution cause erosion?', back: 'Soil-binding <b>fungi and bacteria decline</b>.' },
        { front: 'Disease from polluted groundwater named in the notes?', back: '<b>Arsenic poisoning</b>.' },
        { front: 'Five solutions to soil pollution?', back: 'Less chemical fertiliser, reforestation, recycle/reuse, involve locals, natural manure.' }
      ],
      oneLiners: [
        'Excess fertiliser alters soil pH.',
        'Landfill plastics leach toxins into soil.',
        'Population may pass 9 billion by 2050.'
      ],
      formulas: []
    },
    {
      id: 'm3-noise-pollution',
      title: 'Noise pollution: meaning and causes',
      short: 'Noise pollution causes',
      blurb: 'What noise pollution is, decibel levels of everyday sounds, the 85 dB and 120 dB limits, and the six groups of sources.',
      source: 'Lecture W3S4 (Noise pollution), pages 1–4',
      tabs: [
        { title: 'Definition and dB', html: `
          <p class="lead"><b>Noise pollution</b> is any <b>undesired or unpleasant sound</b> that interferes with daily life. WHO: exposure to sound levels <b>harmful to health and well-being</b>.</p>
          <table class="tbl">
            <thead><tr><th>Sound</th><th>Level</th></tr></thead>
            <tbody>
              <tr><td>Whisper</td><td>~30 dB</td></tr>
              <tr><td>Normal conversation</td><td>~50 dB</td></tr>
              <tr><td>Traffic</td><td>85–90 dB</td></tr>
              <tr><td>Rock concert, firecrackers</td><td>&gt; 120 dB</td></tr>
            </tbody>
          </table>
          <div class="note exam">Above <b>120 dB</b> can cause <b>immediate</b> harm; <b>prolonged</b> exposure above <b>85 dB</b> damages hearing. Noise does not build up in the environment like other pollutants, but its effects last.</div>
        ` },
        { title: 'Six groups of sources', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Industrial</b></td><td>Compressors, drills, generators; cutting, grinding, welding; construction and transport inside plants; worn-out machinery; industry next to homes</td></tr>
              <tr><td><b>Transport</b></td><td>Road traffic, honking and sirens, poor engines and modified exhausts, trains, aircraft take-off and landing</td></tr>
              <tr><td><b>Urbanisation and construction</b></td><td>Mixers, bulldozers, blasting, near-constant city building, late-night work</td></tr>
              <tr><td><b>Social and community</b></td><td>Loudspeakers, firecrackers, religious events, rallies and protests, stadiums and concerts</td></tr>
              <tr><td><b>Household</b></td><td>Pressure cookers, mixers, washing machines, TVs, ACs and coolers, fridges and chimneys (low-frequency), barking dogs and livestock</td></tr>
              <tr><td><b>Occupational</b></td><td>Mines, textile mills, steel plants, printing presses, drivers, airport ground staff, farm machinery, military</td></tr>
            </tbody>
          </table>
          <div class="note exam">Long occupational exposure leads to <b>Noise-Induced Hearing Loss (NIHL)</b>, stress, lower productivity and accidents.</div>
        ` }
      ],
      flashcards: [
        { front: 'dB of a whisper and normal conversation?', back: '~<b>30 dB</b> and ~<b>50 dB</b>.' },
        { front: 'Level where prolonged exposure damages hearing?', back: 'Above <b>85 dB</b>.' },
        { front: 'Level that can cause immediate harm?', back: 'Above <b>120 dB</b>.' },
        { front: 'What is NIHL?', back: '<b>Noise-Induced Hearing Loss</b> from long occupational exposure.' },
        { front: 'Six groups of noise sources?', back: 'Industrial, transport, urbanisation/construction, social, household, occupational.' }
      ],
      oneLiners: [
        'Traffic noise is 85–90 dB.',
        'Airport ground staff face jet engine noise.',
        'Kitchen appliances make constant low-frequency noise.'
      ],
      formulas: []
    },
    {
      id: 'm3-noise-effects',
      title: 'Effects and control of noise pollution',
      short: 'Noise effects, control',
      blurb: 'Health, social and environmental effects of noise, and its technological, regulatory and behavioural remedies.',
      source: 'Lecture W3S4 (Noise pollution), pages 4–7',
      tabs: [
        { title: 'Effects', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Health</b></td><td>Hearing loss and <b>tinnitus</b>; stress, anxiety, sleeplessness; <b>hypertension and heart attacks</b>; children's learning, memory and concentration suffer</td></tr>
              <tr><td><b>Social</b></td><td>Lower productivity and more mistakes; aggression and irritability; impatience and conflict; harder communication</td></tr>
              <tr><td><b>Environmental</b></td><td>Disrupts wildlife communication, navigation and breeding; animals leave homes or change <b>migration routes</b>; underwater noise harms <b>whales and dolphins</b></td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Remedies', html: `
          <div class="vs">
            <div class="side"><h4>Technology</h4><ul>
              <li>Silencers and regular machine maintenance</li>
              <li>Sound enclosures and <b>vibration dampers</b></li>
              <li><b>Sound barriers</b> along highways</li>
              <li>Soundproofing in buildings</li>
            </ul></div>
            <div class="side"><h4>Behaviour</h4><ul>
              <li>Less honking and loud music</li>
              <li><b>Earplugs</b> in noisy workplaces</li>
              <li><b>Trees</b> to absorb sound</li>
              <li>Awareness of quieter technologies</li>
            </ul></div>
          </div>
          <p><b>Regulation</b>: India's <b>Noise Pollution (Regulation and Control) Rules, 2000</b> set permissible limits and restrict noisy activities to set times; plus rules on loudspeakers, construction hours and fireworks.</p>
          <div class="note exam">Noise needs a multi-dimensional answer: <b>laws, technology and awareness</b>.</div>
        ` }
      ],
      flashcards: [
        { front: 'What is tinnitus?', back: 'Persistent <b>ringing in the ears</b>.' },
        { front: "India's noise law?", back: '<b>Noise Pollution (Regulation and Control) Rules, 2000</b>.' },
        { front: 'Marine animals harmed by underwater noise?', back: '<b>Whales and dolphins</b>.' },
        { front: 'Two technical fixes for machine noise?', back: 'Silencers with maintenance; enclosures and vibration dampers.' }
      ],
      oneLiners: [
        'Noise raises the risk of hypertension and heart attacks.',
        'Highway sound barriers redirect traffic noise.',
        'Trees absorb noise.'
      ],
      formulas: []
    },
    {
      id: 'm3-thermal-pollution',
      title: 'Thermal pollution',
      short: 'Thermal pollution',
      blurb: 'What thermal pollution is, its causes, its nine consequences for water bodies, and the remedies from cooling towers to zoning.',
      source: 'Lecture W3S5 (Thermal pollution), pages 1–6',
      tabs: [
        { title: 'Definition', html: `
          <p class="lead"><b>Thermal pollution</b> is a <b>sudden increase or decrease</b> in the temperature of a natural water body caused by human activity, which harms the aquatic ecosystem.</p>
          <ul>
            <li>Example: a power plant returns cooling water at <b>40–50°C</b> to a river naturally at <b>20–25°C</b>.</li>
            <li>US EPA: human activities changing natural water temperature cause ecological imbalance.</li>
            <li>Even a <b>1–1.5°C</b> rise can cut oxygen solubility and stress aquatic life.</li>
            <li>It is <b>heat contamination</b>, a form of <b>energy pollution</b>, not chemical contamination. It is silent and invisible.</li>
          </ul>
        ` },
        { title: 'Causes', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Industrial discharge</b></td><td>Steel mills, refineries, paper and chemical plants return heated cooling water</td></tr>
              <tr><td><b>Power plants</b></td><td>Nuclear and coal plants use huge volumes for cooling</td></tr>
              <tr><td><b>Hydroelectric projects</b></td><td>Bottom releases are cooler, surface releases warmer</td></tr>
              <tr><td><b>Deforestation and erosion</b></td><td>Lost shade; turbid water absorbs more heat</td></tr>
              <tr><td><b>Sewage</b></td><td>Urban wastewater is warmer than natural water</td></tr>
              <tr><td><b>Global warming</b></td><td>Raises baseline water temperature</td></tr>
              <tr><td><b>Natural</b></td><td>Volcanoes, geothermal activity, hot springs (local)</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Consequences', html: `
          <ol>
            <li><b>Less dissolved oxygen</b>: suffocation risk.</li>
            <li><b>Biodiversity loss</b>: corals, amphibians, some fish most vulnerable.</li>
            <li><b>Thermal shock</b>: sudden hot or cold discharge kills fish and plants en masse.</li>
            <li><b>Higher toxicity</b>: faster reactions make phenols and heavy metals more soluble and harmful.</li>
            <li><b>Broken food chains</b>: plankton and invertebrates decline.</li>
            <li><b>Invasive species</b>: <b>zebra mussels</b> (North America), <b>lionfish</b> (Atlantic, Caribbean), <b>tilapia</b>.</li>
            <li><b>Fisheries and livelihoods</b> decline.</li>
            <li><b>Eutrophication</b>: faster algal blooms; <b>water hyacinth</b> thrives.</li>
            <li><b>Health risks</b>: more bacteria and parasites in water.</li>
          </ol>
        ` },
        { title: 'Remedies', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Cooling ponds</b></td><td>Shallow reservoirs lose heat by evaporation, convection, radiation</td></tr>
              <tr><td><b>Cooling towers</b></td><td>Hot water sprayed down, cooled by rising air. <b>Wet</b> towers use evaporation; <b>dry</b> towers cool without water loss</td></tr>
              <tr><td><b>Spray ponds</b></td><td>Nozzles spray droplets to raise evaporation</td></tr>
              <tr><td><b>Artificial lakes</b></td><td>Store hot water to cool slowly; sometimes fish farming</td></tr>
              <tr><td><b>Recycling heated water</b></td><td>Reuse for cleaning, heating, aquaculture</td></tr>
              <tr><td><b>Regulation</b></td><td>Temperature limits on effluents; <b>closed-loop cooling</b></td></tr>
              <tr><td><b>Afforestation</b></td><td>Shade riverbanks, reduce erosion</td></tr>
              <tr><td><b>Zoning</b></td><td>Site plants away from sensitive waters; include heat in <b>EIA</b></td></tr>
              <tr><td>Awareness and research</td><td>Educate; invest in new cooling technology</td></tr>
            </tbody>
          </table>
        ` }
      ],
      flashcards: [
        { front: 'Define thermal pollution.', back: 'A <b>sudden rise or fall</b> in a natural water body\'s temperature from human activity that harms aquatic life.' },
        { front: 'Temperature rise that already cuts oxygen solubility?', back: '<b>1–1.5°C</b>.' },
        { front: 'What kind of pollution is it?', back: '<b>Heat (energy) contamination</b>, not chemical.' },
        { front: 'Wet vs dry cooling tower?', back: 'Wet: evaporation. Dry: <b>no water loss</b>.' },
        { front: 'Invasive species favoured by warm water?', back: '<b>Zebra mussels, lionfish, tilapia</b>.' },
        { front: 'What is thermal shock?', back: 'Mass death from a <b>sudden</b> hot or cold discharge.' }
      ],
      oneLiners: [
        'Cooling water returns at 40–50°C to rivers at 20–25°C.',
        'Warm water makes phenols and heavy metals more toxic.',
        'Closed-loop cooling minimises thermal discharge.'
      ],
      formulas: []
    }
  ],
  figures: [
    { id: 'm3-soil-types', src: 'pages/m3/evs-w3-16/p01.png', crop: [0.27, 0.588, 0.43, 0.27], caption: 'Types of soil pollution: domestic and industrial waste, agricultural, urban activities, continuous deforestation, heavy metals (Hg, Pb, As, Cu, Zn, Ni) and organophosphate pesticides.', alt: 'Hexagon diagram with "Types of soil pollution" in the centre and six surrounding pollutant types with examples.' }
  ]
});
