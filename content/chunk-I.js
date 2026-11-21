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
          <p class="lead"><b>Soil pollution</b> (land pollution): part of <b>land degradation</b>, caused by <b>xenobiotic (human-made) chemicals</b>.</p>
          <ul>
            <li>Tracks <b>degree of industrialisation</b> and chemical use.</li>
            <li>Health risk via <b>direct contact</b>, <b>vapour</b>, contaminated groundwater.</li>
            <li>Soils naturally hold metals, salts, organics (mainly from <b>microbial activity</b>); pollution = amounts <b>exceed natural levels</b>.</li>
          </ul>
          <figure data-fig="m3-soil-types"></figure>
          <div class="note heads-up">"Organic phosphate pollution" in the figure = <b>organophosphate</b> pesticides (chlorpyrifos, malathion).</div>
        ` },
        { title: 'Sources', html: `
          <div class="chips"><span class="chip">Fuel spills, leaks</span><span class="chip">Foundries</span><span class="chip">Mining (heavy metals)</span><span class="chip">Agrochemicals</span><span class="chip">Vehicle emissions</span><span class="chip">Chemical dumping</span><span class="chip">Landfills</span><span class="chip">Lead-based paint chips</span></div>
          <ul>
            <li><b>Construction sites</b>: <b>most important urban trigger</b>; <b>PAHs</b> as fine particulates; dust <b>&lt; 10 microns</b>; demolition releases <b>asbestos</b>.</li>
            <li>Natural: <b>perchlorate</b> accumulates in arid soils, also forms via <b>thunderstorm energy</b>.</li>
            <li>Leaking sewers + chlorine → <b>trihalomethanes</b> (chloroform).</li>
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
        { title: 'Effects', html: `
          <table class="tbl">
            <thead><tr><th>Route into body</th><th>Key fact</th></tr></thead>
            <tbody>
              <tr><td><b>Inhalation</b></td><td>Soil workers, residents</td></tr>
              <tr><td><b>Eating</b></td><td><b>Children under 3</b> most at risk</td></tr>
              <tr><td><b>Skin contact</b> (dermal)</td><td>Mostly <b>VOCs</b></td></tr>
            </tbody>
          </table>
          <ul>
            <li>Long exposure: <b>congenital and chronic illness</b>.</li>
            <li>Soil-binding fungi, bacteria decline → <b>erosion</b>; lower fertility.</li>
            <li><b>Earthworms</b> die; toxic landfill dust.</li>
            <li>Groundwater poisoning → <b>arsenic poisoning</b>.</li>
          </ul>
        ` },
        { title: 'Solutions', html: `
          <p>Population <b>&gt; 9 billion by 2050</b>. Five solutions:</p>
          <ul>
            <li><b>Less chemical fertiliser</b> (excess alters pH, kills microbes).</li>
            <li><b>Reforestation, afforestation</b> (roots bind soil).</li>
            <li><b>Recycle and reuse</b> (landfill plastic leaches toxins).</li>
            <li><b>Involve locals</b>.</li>
            <li><b>Natural manure</b>.</li>
          </ul>
          <p>Individuals: recycle batteries, home composting.</p>
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
          <p class="lead"><b>Noise pollution</b>: <b>undesired or unpleasant sound</b>; WHO: levels <b>harmful to health</b>. Measured in <b>decibels (dB)</b>; main cause <b>human activity</b>.</p>
          <div class="kv">
            <div><span>Whisper</span><b>~30 dB</b></div>
            <div><span>Conversation</span><b>~50 dB</b></div>
            <div><span>Traffic</span><b>85–90 dB</b></div>
            <div><span>Rock concert, firecrackers</span><b>&gt; 120 dB</b></div>
          </div>
          <p>Prolonged &gt; <b>85 dB</b>: hearing damage. &gt; <b>120 dB</b>: <b>immediate</b> harm. Noise does not accumulate in the environment.</p>
        ` },
        { title: 'Sources', html: `
          <p>Six groups:</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Industrial</b></td><td>Compressors, drills, generators</td></tr>
              <tr><td><b>Transport</b></td><td>Horns, railways, aircraft</td></tr>
              <tr><td><b>Urbanisation, construction</b></td><td>Bulldozers, blasting, late-night work</td></tr>
              <tr><td><b>Social</b></td><td>Loudspeakers, firecrackers, festivals</td></tr>
              <tr><td><b>Household</b></td><td>Mixers, ACs; fridges (<b>low-frequency</b>)</td></tr>
              <tr><td><b>Occupational</b></td><td>Mines, textile mills, airport ground staff</td></tr>
            </tbody>
          </table>
          <p>Occupational exposure → <b>NIHL</b> (Noise-Induced Hearing Loss).</p>
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
          <ul>
            <li><b>Health</b>: hearing loss, <b>tinnitus</b> (ringing), stress, sleeplessness, <b>hypertension, heart attacks</b>; poorer learning in children.</li>
            <li><b>Social</b>: lower productivity, more mistakes, aggression, irritability, poor communication.</li>
            <li><b>Environmental</b>: disrupts wildlife communication, navigation, breeding; animals change <b>migration routes</b>; underwater noise harms <b>whales and dolphins</b>.</li>
          </ul>
        ` },
        { title: 'Remedies', html: `
          <ul>
            <li><b>Technological</b>: silencers, maintenance, sound enclosures, vibration dampers, highway sound barriers, soundproofing.</li>
            <li><b>Regulatory</b>: <b>Noise Pollution (Regulation and Control) Rules, 2000</b>: <b>permissible noise levels</b>, time restrictions; rules on loudspeakers, construction hours, fireworks.</li>
            <li><b>Behavioural</b>: honk less, <b>earplugs</b> at noisy workplaces, <b>planting trees</b> (absorb sound), awareness campaigns.</li>
          </ul>
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
        { title: 'Definition and causes', html: `
          <p class="lead"><b>Thermal pollution</b>: human-caused <b>sudden increase or decrease</b> in a water body's temperature, harming aquatic life.</p>
          <ul>
            <li>Plant water <b>40–50°C</b> into river at <b>20–25°C</b>.</li>
            <li>Even <b>1–1.5°C</b> rise cuts oxygen solubility.</li>
            <li><b>Energy pollution</b>, not chemical.</li>
          </ul>
          <p>Causes: <b>power plants</b> (nuclear, coal), industry, hydro dams (cold bottom releases), deforestation, sewage, global warming; natural: volcanoes, <b>hot springs</b>.</p>
        ` },
        { title: 'Consequences', html: `
          <ul>
            <li><b>Less dissolved oxygen</b>.</li>
            <li><b>Thermal shock</b>: sudden discharge kills fish en masse.</li>
            <li><b>Higher toxicity</b> of phenols, heavy metals.</li>
            <li>Biodiversity loss (corals, amphibians); broken food chains; fisheries decline.</li>
            <li><b>Invasive species</b>: <b>zebra mussels</b>, <b>lionfish</b>, <b>tilapia</b>.</li>
            <li>Eutrophication: <b>water hyacinth</b> thrives; more bacteria, parasites.</li>
          </ul>
        ` },
        { title: 'Remedies', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Cooling towers</b></td><td><b>Wet</b>: evaporation; <b>dry</b>: no water loss</td></tr>
              <tr><td>Cooling ponds, spray ponds</td><td>Evaporation</td></tr>
              <tr><td>Artificial lakes</td><td>Slow cooling, fish farming</td></tr>
              <tr><td>Recycling heated water</td><td>Aquaculture, heating</td></tr>
              <tr><td>Regulation</td><td><b>Closed-loop cooling</b>, effluent temperature limits</td></tr>
              <tr><td>Zoning</td><td>Heat included in <b>EIA</b></td></tr>
            </tbody>
          </table>
          <p>Also afforestation of riverbanks.</p>
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
