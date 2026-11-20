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
          <p class="lead"><b>Soil pollution</b> (soil contamination, land pollution): part of <b>land degradation</b>, from <b>xenobiotic (human-made) chemicals</b> or other changes to soil.</p>
          <ul>
            <li>Causes: <b>industrial activity, agricultural chemicals, improper waste disposal</b>.</li>
            <li>Tracks <b>degree of industrialisation</b> and chemical use.</li>
            <li>Health risk: <b>direct contact</b>, <b>vapour</b>, <b>secondary contamination of water</b> in/under soil.</li>
          </ul>
        ` },
        { title: 'When it becomes pollution', html: `
          <p>Soils naturally hold "contaminants": <b>metals</b>, salts (phosphates, carbonates, sulphates, nitrates), organics (lipids, proteins, DNA, fatty acids, hydrocarbons, PAHs, alcohols). Mainly from <b>microbial activity</b>/decomposition, plus rain, wind, disturbance, surface water, shallow groundwater.</p>
          <div class="note exam">Pollution = amounts <b>exceed natural levels</b> (anthropogenic or natural).</div>
          <figure data-fig="m3-soil-types"></figure>
          <div class="note heads-up">The figure's "Organic phosphate pollution" means <b>organophosphate</b> pesticides (chlorpyrifos, malathion).</div>
        ` },
        { title: 'Man-made sources', html: `
          <ul>
            <li><b>Spills and leaks</b> (petrol, diesel at fuel stations).</li>
            <li><b>Foundries</b>, furnace manufacturing.</li>
            <li><b>Mining</b>: crushing raw materials (heavy metals).</li>
            <li><b>Construction</b>.</li>
            <li><b>Agriculture</b>: herbicides, pesticides, insecticides, fertilisers.</li>
            <li><b>Transport</b>: vehicle emissions.</li>
            <li><b>Chemical waste dumping</b>, accidental or illegal.</li>
            <li><b>Landfills</b>: groundwater leaks, vapours.</li>
            <li><b>Lead-based paint chips</b>.</li>
          </ul>
        ` },
        { title: 'Construction sites', html: `
          <p class="lead">Construction sites: <b>most important urban trigger of soil pollution</b> (everywhere).</p>
          <ul>
            <li>Highest risk: chemicals as <b>fine particulate matter</b>, resist degradation, bioaccumulate (<b>PAHs</b>).</li>
            <li>Dust <b>&lt; 10 microns</b>: asthma, bronchitis, cancer.</li>
            <li>Demolition releases <b>asbestos</b>, spread by wind.</li>
          </ul>
        ` },
        { title: 'Natural processes', html: `
          <p>Nature can raise or lower toxicity of man-made pollutants. Natural routes:</p>
          <ul>
            <li><b>Natural accumulation</b>: deposition exceeds rain leaching (<b>perchlorate</b> in arid soils).</li>
            <li><b>Natural production</b>: perchlorate from chlorine + metal + <b>thunderstorm energy</b>.</li>
            <li><b>Leaking sewer lines</b>: chlorine → <b>trihalomethanes</b> (chloroform).</li>
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
          <p>Crops pass pollutants on: <b>sudden surge of certain illnesses</b>. Long exposure alters genes: <b>congenital and chronic illness</b>; sick livestock, food poisoning, <b>famine</b> if plants fail.</p>
          <table class="tbl">
            <thead><tr><th>Route</th><th>Who and how</th></tr></thead>
            <tbody>
              <tr><td><b>Inhalation</b></td><td>Soil workers, nearby residents breathe dust</td></tr>
              <tr><td><b>Eating</b></td><td>Adults: soil on vegetables, cultural eating. <b>Children under 3</b> eat soil at play, absorb more</td></tr>
              <tr><td><b>Skin contact</b></td><td>"Dermal"/"cutaneous"; mostly <b>VOCs</b>, some heavy metals</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Other effects', html: `
          <ol>
            <li><b>Plant growth</b>: plants can't adapt to rapid chemistry change; ecological balance upset. Soil-binding fungi and bacteria decline → <b>erosion</b>; land becomes <b>unsuitable for agriculture</b>, hazardous.</li>
            <li><b>Lower fertility</b>: lower yield; produce lacks nutrients, may carry poisons.</li>
            <li><b>Toxic dust</b>: toxic, foul landfill gases; bad smell for neighbours.</li>
            <li><b>Soil structure changes</b>: <b>earthworms</b> die; animals migrate for food.</li>
            <li><b>Groundwater poisoning</b>: toxins percolate to wells/tube wells → <b>arsenic poisoning</b>, food poisoning, can be fatal.</li>
          </ol>
          <div class="note why">Affects <b>food, water and air quality</b>, so all life.</div>
        ` },
        { title: 'Solutions', html: `
          <p>Population <b>&gt; 9 billion by 2050</b>: food security depends on existing soils. Individuals: sustainable food, <b>recycling batteries</b>, <b>home composting</b>, managing antibiotic waste.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Less chemical fertiliser</b></td><td>Excess upsets pH, kills good microbes, runoff pollutes water; double-edged sword</td></tr>
              <tr><td><b>Reforestation and afforestation</b></td><td>Erosion after deforestation is a major cause; roots bind soil, hold microbes, keep water table</td></tr>
              <tr><td><b>Recycle and reuse</b></td><td>Landfill plastic decomposes slowly, leaches toxins; less dumped</td></tr>
              <tr><td><b>Involve locals</b></td><td>Everyone takes part; awareness programmes</td></tr>
              <tr><td><b>Natural manure</b></td><td>Organic, harmless; restores soil health, no harmful by-products</td></tr>
            </tbody>
          </table>
          <p>A main threat to soil functions worldwide; needs individuals to <b>government</b> plus sustainable farming.</p>
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
          <p class="lead"><b>Noise pollution</b>: <b>undesired or unpleasant sound</b> interfering with daily life. WHO: sound levels <b>harmful to health and well-being</b>.</p>
          <p><b>Frequently disregarded</b>, yet a top health risk with urbanisation. Noise is abrupt, harsh (unlike music); pollution at <b>intrusion, disturbance and harm</b>. Main cause: <b>human activity</b>. Measured in <b>decibels (dB)</b>.</p>
          <table class="tbl">
            <thead><tr><th>Sound</th><th>Level</th></tr></thead>
            <tbody>
              <tr><td>Whisper</td><td>~30 dB</td></tr>
              <tr><td>Normal conversation</td><td>~50 dB</td></tr>
              <tr><td>Traffic</td><td>85–90 dB</td></tr>
              <tr><td>Rock concert, firecrackers</td><td>&gt; 120 dB</td></tr>
            </tbody>
          </table>
          <div class="note exam">&gt; <b>120 dB</b>: <b>immediate</b> harm; <b>prolonged</b> &gt; <b>85 dB</b>: hearing damage. Noise doesn't build up in the environment, but effects last.</div>
        ` },
        { title: 'Six groups of sources', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Industrial</b></td><td>Heavy machinery (compressors, drills, generators): constant high intensity, worst under weak regulation. Cutting, grinding, welding; in-plant transport; worn machinery louder; industries next to homes</td></tr>
              <tr><td><b>Transport</b></td><td>Cars, horns, highways, railways, aircraft: long-term exposure. Honking, sirens; modified exhausts; trains (engines, whistles, track vibration) worst near stations; aircraft at take-off, landing, taxiing</td></tr>
              <tr><td><b>Urbanisation and construction</b></td><td>Concrete mixers, bulldozers; blasting (roads, mining, demolition); apartments, malls, offices. <b>Late-night work</b>: stress, lost sleep</td></tr>
              <tr><td><b>Social and community</b></td><td>Loudspeakers, firecrackers, music at weddings, festivals, rallies (holiday peaks); PA systems, chanting, bells, drums, devotional songs; protests; stadiums, fairs, concerts</td></tr>
              <tr><td><b>Household</b></td><td>Pressure cookers, mixers, washing machines, vacuums, grinders; loud TVs, radios; ACs, coolers, exhaust fans, generators; fridges, dishwashers, chimneys (<b>low-frequency</b>); dogs, poultry, cattle</td></tr>
              <tr><td><b>Occupational</b></td><td>Hearing loss risk: mine blasting; textile mills, steel plants, power stations, printing presses; bus/truck/train drivers (stress, fatigue); airport ground staff (jet engines); farm tractors, threshers, harvesters, pumps; soldiers (gunfire, explosions, aircraft)</td></tr>
            </tbody>
          </table>
          <div class="note exam">Long occupational exposure → <b>Noise-Induced Hearing Loss (NIHL)</b>, stress, lower productivity, accidents.</div>
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
          <p class="lead">Three groups: <b>health</b>, <b>social</b>, <b>environmental</b>.</p>
          <h3>Health impacts</h3>
          <ul>
            <li><b>Hearing loss</b>, ringing in ears (<b>tinnitus</b>); isolation.</li>
            <li><b>Stress</b> → anxiety, <b>sleepless nights</b>.</li>
            <li><b>Cardiovascular</b>: <b>hypertension, heart attacks</b>.</li>
            <li><b>Children</b>: poorer learning, memory, concentration.</li>
          </ul>
          <h3>Social impacts</h3>
          <ul>
            <li><b>Lower productivity</b>, more mistakes at work.</li>
            <li>More <b>aggressive, irritable</b>; strained relationships.</li>
            <li><b>Impatient, less tolerant</b>; conflicts.</li>
            <li>Harder <b>communication</b>.</li>
          </ul>
          <h3>Environmental impacts</h3>
          <ul>
            <li>Disrupts <b>wildlife communication</b>, navigation, breeding.</li>
            <li>Animals leave homes, change <b>migration routes</b>; population decline.</li>
            <li>Underwater noise harms <b>whales and dolphins</b> (rely on sound for communication, food).</li>
          </ul>
        ` },
        { title: 'Remedies', html: `
          <p class="lead">Three groups: <b>technological</b>, <b>regulatory</b>, <b>behavioural</b>.</p>
          <h3>Technological solutions</h3>
          <ul>
            <li><b>Silencers, regular machine maintenance</b>: cut noise at source.</li>
            <li><b>Sound enclosures, vibration dampers</b>: quieter industry.</li>
            <li><b>Highway sound barriers</b>: reduce and redirect traffic noise.</li>
            <li><b>Soundproofing in buildings</b>: keeps outside noise out.</li>
          </ul>
          <h3>Regulatory framework</h3>
          <p>India's <b>Noise Pollution (Regulation and Control) Rules, 2000</b>: <b>permissible noise levels</b>, time restrictions. Rules on <b>loudspeakers</b>, <b>construction hours</b>, <b>fireworks</b>.</p>
          <h3>Behavioural changes</h3>
          <ul>
            <li><b>Quiet practices</b>: honk less, softer music.</li>
            <li><b>Earplugs in noisy workplaces</b>.</li>
            <li><b>Planting trees</b>: absorb sound.</li>
            <li><b>Awareness campaigns</b>: quieter technologies.</li>
          </ul>
          <div class="note why">Threatens <b>health, society, ecosystems</b>: needs <b>laws, technology and awareness</b> together. Silence = foundation for health and harmony.</div>
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
          <p class="lead"><b>Thermal pollution</b>: human-caused <b>sudden increase or decrease</b> in a natural water body's temperature, harming aquatic life.</p>
          <ul>
            <li>Power plant returns water at <b>40–50°C</b> to a river at <b>20–25°C</b>.</li>
            <li>US EPA: human change of water temperature → ecological imbalance.</li>
            <li>Even <b>1–1.5°C</b> rise cuts oxygen solubility.</li>
            <li><b>Heat contamination</b> = <b>energy pollution</b>, not chemical; silent, invisible.</li>
          </ul>
        ` },
        { title: 'Causes', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Industrial discharge</b></td><td>Steel mills, refineries, paper, chemical plants</td></tr>
              <tr><td><b>Power plants</b></td><td>Nuclear, coal: huge cooling volumes</td></tr>
              <tr><td><b>Hydroelectric projects</b></td><td>Bottom releases cooler, surface warmer</td></tr>
              <tr><td><b>Deforestation and erosion</b></td><td>Lost shade; turbid water absorbs heat</td></tr>
              <tr><td><b>Sewage</b></td><td>Warmer than natural water</td></tr>
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
              <tr><td><b>Cooling ponds</b></td><td>Shallow; evaporation, convection, radiation</td></tr>
              <tr><td><b>Cooling towers</b></td><td>Sprayed down, rising air cools. <b>Wet</b>: evaporation; <b>dry</b>: no water loss</td></tr>
              <tr><td><b>Spray ponds</b></td><td>Nozzle droplets raise evaporation</td></tr>
              <tr><td><b>Artificial lakes</b></td><td>Slow cooling; sometimes fish farming</td></tr>
              <tr><td><b>Recycling heated water</b></td><td>Reuse for cleaning, heating, aquaculture</td></tr>
              <tr><td><b>Regulation</b></td><td>Temperature limits on effluents; <b>closed-loop cooling</b></td></tr>
              <tr><td><b>Afforestation</b></td><td>Shade riverbanks, reduce erosion</td></tr>
              <tr><td><b>Zoning</b></td><td>Site plants away from sensitive waters; include heat in <b>EIA</b></td></tr>
              <tr><td>Awareness and research</td><td>Educate; invest in new cooling technology</td></tr>
            </tbody>
          </table>        ` }
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
