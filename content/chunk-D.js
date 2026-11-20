CHUNK({
  chunk: 'D',
  module: 'm2',
  topics: [
    {
      id: 'm2-conservation-basics',
      title: 'Why and how we conserve biodiversity',
      short: 'Conservation basics',
      blurb: 'Why biodiversity conservation matters, its goals, and the two main strategy types (in-situ and ex-situ) plus the combined approach.',
      source: 'Lecture W2 (Conservation strategies), slides 1–4',
      tabs: [
        { title: 'Why conserve', html: `
          <p class="lead"><b>Biodiversity</b>: variety of life: species, ecosystems, genetic differences.</p>
          <ul>
            <li>Basis of <b>ecosystem services</b>: clean air, water, soil fertility, <b>pollination</b>, disease and <b>climate regulation</b>.</li>
            <li>Raises <b>resilience</b> (ability to adapt to shocks).</li>
            <li>Ensures <b>sustainable use</b> for future generations.</li>
            <li>Loss hits <b>food security, health, livelihoods</b>.</li>
            <li>Conservation is <b>not optional</b>: needed for human survival.</li>
          </ul>
        ` },
        { title: 'Goals', html: `
          <ol>
            <li>Protect <b>all forms of life</b>: plants, animals, microorganisms.</li>
            <li>Preserve <b>species diversity</b> and <b>genetic variation within species</b> (agriculture, medicine).</li>
            <li>Maintain <b>ecosystem balance and functioning</b> (water cycles, carbon storage, pest control, pollination).</li>
            <li>Clean air, water, fertile soil.</li>
            <li>Support <b>human well-being and economic security</b>.</li>
            <li>Ensure a <b>sustainable future</b>.</li>
          </ol>
        ` },
        { title: 'Types of strategy', html: `
          <div class="vs">
            <div class="side"><h4>In-situ</h4><p><b>In natural habitats</b>; natural evolution continues.</p><p><small>National parks, wildlife sanctuaries, biosphere reserves</small></p></div>
            <div class="side"><h4>Ex-situ</h4><p><b>Outside natural environments</b>; for species under severe threat.</p><p><small>Zoos, botanical gardens, gene banks, seed banks</small></p></div>
          </div>
          <p><b>Complementary approach</b>: both together, for critically endangered species; ex-situ = <b>backup</b> + education, research, breeding.</p>
          <div class="note heads-up">Slide: "broadly classified into in-situ and ex-situ"; speaker notes add complementary as a third. Two main types.</div>
        ` }
      ],
      flashcards: [
        { front: 'Two main types of conservation strategy?', back: '<b>In-situ</b> (in natural habitat) and <b>ex-situ</b> (outside it).' },
        { front: 'What does the complementary approach do?', back: 'Uses <b>in-situ and ex-situ together</b>; ex-situ is the backup.' },
        { front: 'Why does high biodiversity matter for ecosystems?', back: 'It raises <b>resilience</b>, the ability to adapt to change.' },
        { front: 'Name three ecosystem services biodiversity provides.', back: 'Clean air and water, <b>pollination</b>, <b>climate regulation</b> (also soil fertility, disease regulation).' },
        { front: 'Which level of diversity is safeguarded "within species"?', back: '<b>Genetic variation</b>.' }
      ],
      oneLiners: [
        'In-situ = in natural habitat; ex-situ = outside it.',
        'Ex-situ examples: zoos, botanical gardens, gene banks, seed banks.',
        'Biodiversity loss hits food security, health and livelihoods.',
        'Conservation is not optional: it is needed for human survival.'
      ],
      formulas: []
    },
    {
      id: 'm2-in-situ',
      title: 'In-situ conservation and protected areas',
      short: 'In-situ conservation',
      blurb: 'Conserving species where they live: national parks, wildlife sanctuaries, biosphere reserve zones, community reserves and sacred groves, with pros and cons.',
      source: 'Lecture W2 (Conservation strategies), slides 5–12',
      tabs: [
        { title: 'What it is', html: `
          <p class="lead"><b>In-situ conservation</b> protects species <b>within their natural habitats</b>.</p>
          <ul>
            <li>Natural interactions kept: hunting, reproducing, migrating, pollination.</li>
            <li>Maintains <b>evolutionary processes</b>; species <b>adapt</b> to climate shifts.</li>
            <li>Conserves species <b>and their ecosystems</b>.</li>
            <li>Methods: <b>national parks, wildlife sanctuaries, biosphere reserves</b>.</li>
            <li><b>Most effective and sustainable</b> strategy.</li>
          </ul>
          <p><b>Protected areas</b>: regions with <b>legal protection</b>; main in-situ tool, backbone of India's network (forests, grasslands, wetlands, mountains).</p>
        ` },
        { title: 'Park vs sanctuary', html: `
          <table class="tbl">
            <thead><tr><th></th><th>National Park</th><th>Wildlife Sanctuary</th></tr></thead>
            <tbody>
              <tr><td>Human activity</td><td><b>Strictly prohibited</b>: no hunting, grazing, logging, settlement</td><td><b>Limited, regulated</b>: grazing, minor forest produce, research, tourism</td></tr>
              <tr><td>Managed by</td><td>Government (notified under law)</td><td>State or central wildlife authorities</td></tr>
              <tr><td>Role</td><td>Ecological integrity, threatened species, ecotourism, research</td><td><b>Buffer</b> between protected areas and settlements</td></tr>
              <tr><td>Examples</td><td><b>Jim Corbett NP</b> (1936, Uttarakhand, India's first NP, Bengal tigers); <b>Kaziranga NP</b> (Assam, one-horned rhinoceros)</td><td><b>Periyar WLS</b> (Kerala): elephants, tigers, tiger reserve, Periyar Lake</td></tr>
            </tbody>
          </table>
          <div class="note heads-up">Slide 6 calls Kaziranga a "Sanctuary", slide 7 a "National Park". Use National Park.</div>
        ` },
        { title: 'Biosphere reserves', html: `
          <p class="lead"><b>Biosphere reserves</b>: large areas, conservation + <b>sustainable development</b>; UNESCO <b>Man and the Biosphere (MAB) Programme</b>.</p>
          <div class="steps">
            <div><b>Core zone</b>: strictly protected, no human interference.</div>
            <div><b>Buffer zone</b>: around core; limited <b>research, education, ecotourism</b>.</div>
            <div><b>Transition zone</b>: outermost; <b>agriculture, forestry, settlements</b>.</div>
          </div>
          <p>Example: <b>Nilgiri BR</b> (<b>Tamil Nadu, Kerala, Karnataka</b>); includes <b>Mudumalai, Wayanad, Silent Valley</b>; tribal communities in outer zones.</p>
          <div class="mnemonic">Core → Buffer → Transition: protection falls and human use rises as you move outwards.</div>
        ` },
        { title: 'Community and sacred', html: `
          <ul>
            <li><b>Community reserves</b>: legally recognised, managed with <b>local communities</b>; protect biodiversity outside formal zones.</li>
            <li><b>Sacred groves</b>: kept by <b>religious/cultural beliefs</b>, often <b>no formal legal protection</b>; rare plants, medicinal herbs.</li>
          </ul>
          <table class="tbl">
            <tbody>
              <tr><td>Meghalaya</td><td><b>Mawphlang</b>, kept by <b>Khasi tribes</b>; no tree cutting or hunting</td></tr>
              <tr><td>Kerala</td><td><b>Kavus</b>, attached to temples</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Pros and cons', html: `
          <div class="vs">
            <div class="side"><h4>Advantages</h4><ul>
              <li>Protects <b>whole ecosystems</b>, not single species.</li>
              <li>Species <b>keep evolving</b> (adaptation, gene flow).</li>
              <li><b>Cost-effective</b>: no artificial habitats.</li>
              <li><b>Less stress</b>: familiar surroundings.</li>
              <li>Keeps services: pollination, water purification, climate regulation, carbon storage, nutrient cycling, soil formation.</li>
            </ul></div>
            <div class="side"><h4>Limitations</h4><ul>
              <li>Needs <b>large land areas</b>.</li>
              <li>Urbanisation, agriculture shrink habitat.</li>
              <li><b>Weak enforcement</b>: underfunded staff, local resistance.</li>
              <li><b>Poaching, illegal logging, encroachment</b>.</li>
              <li><b>Human-wildlife conflict</b>.</li>
              <li>Climate change, pollution, invasive species still reach them.</li>
            </ul></div>
          </div>
        ` }
      ],
      flashcards: [
        { front: "India's first national park?", back: '<b>Jim Corbett National Park</b>, 1936, Uttarakhand (Bengal tigers).' },
        { front: 'Kaziranga is famous for…', back: 'The <b>Indian one-horned rhinoceros</b> (Assam).' },
        { front: 'Three zones of a biosphere reserve?', back: '<b>Core</b> (strict), <b>buffer</b> (research, education, ecotourism), <b>transition</b> (sustainable use, settlements).' },
        { front: 'Biosphere reserves are recognised under…', back: "UNESCO's <b>Man and the Biosphere Programme</b>." },
        { front: 'Nilgiri Biosphere Reserve covers which states?', back: '<b>Tamil Nadu, Kerala, Karnataka</b>.' },
        { front: 'Sacred groves in Kerala are called…', back: '<b>Kavus</b>.' },
        { front: 'Main difference: national park vs wildlife sanctuary?', back: 'Park bans all human activity; sanctuary allows <b>limited, regulated</b> activity.' },
        { front: 'Periyar Wildlife Sanctuary is in…', back: '<b>Kerala</b>: elephants and tigers.' }
      ],
      oneLiners: [
        'In-situ is the most effective and sustainable strategy.',
        'Mawphlang sacred grove (Meghalaya) is kept by Khasi tribes.',
        'Nilgiri BR includes Mudumalai, Wayanad and Silent Valley.',
        'Sanctuaries act as buffers between parks and settlements.',
        'In-situ limits: land needs, weak enforcement, poaching, human-wildlife conflict.'
      ],
      formulas: []
    },
    {
      id: 'm2-ex-situ',
      title: 'Ex-situ conservation',
      short: 'Ex-situ conservation',
      blurb: 'Conserving species away from the wild: botanical gardens, zoos, gene and seed banks, cryopreservation, tissue culture and captive breeding, with benefits and limits.',
      source: 'Lecture W2 (Conservation strategies), slides 13–19',
      tabs: [
        { title: 'What it is', html: `
          <p class="lead"><b>Ex-situ</b>: <b>outside natural habitats</b>, controlled environments.</p>
          <ul>
            <li>For species at <b>high risk in the wild</b> (habitat loss, poaching, low populations).</li>
            <li>Sites: <b>zoos, botanical gardens, gene banks, aquariums</b>, seed banks, tissue culture labs.</li>
            <li><b>Research, breeding, public education</b>.</li>
            <li><b>Backup</b> (safety net) to restore wild populations.</li>
          </ul>
        ` },
        { title: 'Gardens and zoos', html: `
          <p>Dual purpose: <b>conservation + public education</b>.</p>
          <ul>
            <li><b>Botanical gardens</b>: rare plants; breeding, research, restoration.</li>
            <li><b>Zoological parks</b>: breed animals; reintroduction, international gene exchange.</li>
            <li>Research in biology, ecology, veterinary science.</li>
          </ul>
          <div class="note example"><b>Indian Botanical Garden, Kolkata</b>: <b>1787</b>, one of the oldest, over <b>12,000 species</b>, <b>Great Banyan Tree</b>.</div>
        ` },
        { title: 'Gene and seed banks', html: `
          <ul>
            <li>Store <b>seeds, embryos, pollen, DNA, tissue samples</b>, sperm.</li>
            <li><b>Seed banks</b>: <b>low temperature and humidity</b>; viable for decades.</li>
            <li>Genetic diversity of <b>crops and medicinal plants</b>.</li>
            <li>Restoration, breeding (drought-, pest-, disease-resistant crops), research; <b>food security</b>, climate adaptation.</li>
          </ul>
          <div class="note exam">India: <b>National Bureau of Plant Genetic Resources (NBPGR)</b>, New Delhi: main institute for plant genetic material.</div>
        ` },
        { title: 'Cryo and tissue culture', html: `
          <div class="vs">
            <div class="side"><h4>Cryopreservation</h4><p><b>Ultra-low temperature</b>: <b>liquid nitrogen, -196°C</b>; stops biological activity; cells, embryos, seeds, sperm keep for years.</p><p><small>Animal embryos: livestock, endangered-species breeding.</small></p></div>
            <div class="side"><h4>Tissue culture</h4><p>Cells grown in <b>sterile, nutrient-rich media</b>; <b>rapid multiplication</b>: whole plant from small sample.</p><p><small>Regenerates orchids, medicinal plants.</small></p></div>
          </div>
          <p>Both help species hard to breed or with few seeds.</p>
        ` },
        { title: 'Captive breeding', html: `
          <p class="lead"><b>Captive breeding</b>: in zoos/centres to <b>increase numbers and keep genetic diversity</b> (avoid inbreeding); then <b>reintroduced</b>.</p>
          <ul>
            <li><b>Project Tiger</b> (<b>1973</b>): reserves, captive support.</li>
            <li><b>Asiatic Lion Breeding Programme</b>, Gujarat: once <b>below 20</b>; <b>Gir NP</b> now <b>over 600 lions</b>.</li>
          </ul>
        ` },
        { title: 'Pros and cons', html: `
          <div class="vs">
            <div class="side"><h4>Benefits</h4><ul>
              <li>Safe <b>backup</b>.</li>
              <li>Controlled temperature, humidity, disease, breeding; no predators.</li>
              <li><b>Genetic repositories</b>.</li>
              <li>Research, breeding, medical studies.</li>
              <li>Public awareness.</li>
              <li>Supports <b>reintroduction</b>, restoration.</li>
            </ul></div>
            <div class="side"><h4>Limitations</h4><ul>
              <li><b>Expensive</b>: infrastructure, staff, energy, monitoring.</li>
              <li><b>Loss of natural behaviour</b>: hunting, migration, reproduction.</li>
              <li><b>Genetic bottleneck</b>/inbreeding (small groups).</li>
              <li>Cannot copy natural ecosystem complexity.</li>
              <li>A <b>complement, not a replacement</b>, for in-situ.</li>
            </ul></div>
          </div>
        ` }
      ],
      flashcards: [
        { front: 'Temperature used in cryopreservation?', back: '<b>-196°C</b>, in liquid nitrogen.' },
        { front: 'Indian Botanical Garden, Kolkata: year and species?', back: '<b>1787</b>; over <b>12,000 species</b>; Great Banyan Tree.' },
        { front: "India's main plant gene bank institute?", back: '<b>NBPGR</b>, New Delhi.' },
        { front: 'Lions in Gir today vs the low point?', back: 'Over <b>600</b> today; once <b>fewer than 20</b>.' },
        { front: 'What is a genetic bottleneck?', back: 'Loss of genetic diversity (inbreeding, uniformity) from breeding a <b>small group</b>.' },
        { front: 'Tissue culture is used to regenerate…', back: '<b>Orchids and medicinal plants</b>.' }
      ],
      oneLiners: [
        'Ex-situ is a backup, not a replacement, for in-situ.',
        'Seed banks: low temperature and humidity keep seeds viable for decades.',
        'Captive breeding aims to raise numbers and keep genetic diversity.',
        'Project Tiger began in 1973.'
      ],
      formulas: []
    },
    {
      id: 'm2-conservation-levels',
      title: 'Combined approach and levels of conservation',
      short: 'Levels of conservation',
      blurb: 'Integrating in-situ and ex-situ, then conservation at species (flagship and keystone), genetic (crop wild relatives) and ecosystem levels.',
      source: 'Lecture W2 (Conservation strategies), slides 20–23',
      tabs: [
        { title: 'Combined approach', html: `
          <ul>
            <li>Best when <b>in-situ and ex-situ are integrated</b>; ex-situ stock reintroduced once habitat restored.</li>
            <li>Linked by <b>GIS, remote sensing</b> (satellite) and <b>genetic tools</b>.</li>
            <li><b>Traditional ecological knowledge</b> (sacred groves, crop diversity).</li>
            <li><b>Integrated ecosystem management</b>: biodiversity + people + sustainable use.</li>
            <li>Result: resilience, long-term protection.</li>
          </ul>
        ` },
        { title: 'Species level', html: `
          <div class="vs">
            <div class="side"><h4>Flagship species</h4><p><b>Charismatic</b> symbol; draws support and funding.</p><p>Example: <b>Tiger</b> (forests).</p></div>
            <div class="side"><h4>Keystone species</h4><p><b>Disproportionately large ecological role</b>; loss can collapse ecosystem.</p><p>Example: <b>Asian Elephant</b>: seed dispersal, uprooting trees, clearings.</p></div>
          </div>
          <p>Protecting them conserves others in the habitat.</p>
          <div class="mnemonic">Flagship inspires people; keystone holds the ecosystem up.</div>
        ` },
        { title: 'Genetic level', html: `
          <ul>
            <li><b>Genetic diversity within species</b>: disease resistance, climate adaptability, productivity.</li>
            <li><b>Crop wild relatives</b>: wild species related to crops; drought tolerance, pest resistance, nutrition.</li>
            <li>Example: <b>wild rice</b> → rice resisting <b>flooding and salinity</b> (Eastern India, Southeast Asia).</li>
            <li>Tools: <b>gene banks, seed vaults, field gene reserves</b>.</li>
            <li>Agricultural sustainability, <b>food security</b>.</li>
          </ul>
        ` },
        { title: 'Ecosystem level', html: `
          <ul>
            <li>Protects <b>entire habitats and ecological processes</b>.</li>
            <li>Key: <b>wetlands, coral reefs, forests, grasslands, mangroves</b>.</li>
            <li>Services: water purification, carbon storage, flood control, climate regulation; wetlands host migratory birds; reefs buffer coasts; forests are carbon sinks.</li>
            <li><b>Landscape-level planning</b>: protected zones + human land use over a wide area.</li>
            <li><b>Connectivity</b>: species move and adapt (climate change).</li>
          </ul>
        ` }
      ],
      flashcards: [
        { front: 'Flagship vs keystone species?', back: 'Flagship: <b>charismatic symbol</b> (tiger). Keystone: <b>large ecological role</b> (Asian elephant).' },
        { front: 'What are crop wild relatives?', back: 'Wild species <b>genetically related to crops</b>, carrying useful traits.' },
        { front: 'Wild rice was used to breed resistance to…', back: '<b>Flooding and salinity</b>.' },
        { front: 'Name five ecosystems targeted at ecosystem level.', back: 'Wetlands, coral reefs, forests, grasslands, mangroves.' },
        { front: 'Why is connectivity important?', back: 'It lets species <b>move and adapt</b>, especially with climate change.' }
      ],
      oneLiners: [
        'Tiger = flagship; Asian Elephant = keystone.',
        'Genetic level: gene banks, seed vaults, field gene reserves.',
        'Ecosystem level uses landscape-level planning.',
        'Traditional ecological knowledge strengthens conservation.'
      ],
      formulas: []
    },
    {
      id: 'm2-conservation-support',
      title: 'Laws, programmes, technology and people',
      short: 'Laws, tech & people',
      blurb: 'Indian conservation laws, CBD, Ramsar, Project Tiger and Elephant, conservation technology, the role of engineers and communities, and the main challenges.',
      source: 'Lecture W2 (Conservation strategies), slides 24–30',
      tabs: [
        { title: 'Laws', html: `
          <table class="tbl">
            <thead><tr><th>Law</th><th>What it does</th></tr></thead>
            <tbody>
              <tr><td><b>Wildlife Protection Act, 1972</b></td><td>Protects wild animals, birds, plants; basis for parks, sanctuaries, conservation reserves; poaching/trade penalties</td></tr>
              <tr><td><b>Forest Conservation Act</b></td><td><b>Diversion of forest land</b> needs <b>central government approval</b></td></tr>
              <tr><td><b>Biological Diversity Act, 2002</b></td><td>Sustainable use, <b>equitable benefit sharing</b>; traditional knowledge; <b>Biodiversity Management Committees (BMCs)</b>; anti-biopiracy</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Programmes', html: `
          <table class="tbl">
            <thead><tr><th>Initiative</th><th>Key facts</th></tr></thead>
            <tbody>
              <tr><td><b>Convention on Biological Diversity (CBD)</b></td><td>Global treaty, <b>1992</b>: conservation, sustainable use, fair sharing; India a signatory</td></tr>
              <tr><td><b>Ramsar Convention</b></td><td><b>Wetlands</b> of international importance; India <b>over 75 sites</b>, e.g. <b>Chilika Lake</b>, <b>Keoladeo NP</b></td></tr>
              <tr><td><b>Project Tiger</b></td><td><b>1973</b>: tiger reserves, anti-poaching</td></tr>
              <tr><td><b>Project Elephant</b></td><td><b>1992</b>: habitats, human-elephant conflict</td></tr>
            </tbody>
          </table>
          <div class="mnemonic">1992 twice: CBD and Project Elephant. 1972 law, 1973 tiger.</div>
        ` },
        { title: 'Technology', html: `
          <ul>
            <li><b>GIS and remote sensing</b>: map ecosystems; detect deforestation, encroachment, fires.</li>
            <li><b>Drones</b>: surveillance, <b>anti-poaching</b>, tracking animals.</li>
            <li><b>DNA barcoding</b>: species from a <b>short genetic sequence</b>, even degraded samples; detects illegal wildlife products, new species; soil/water samples.</li>
            <li><b>Artificial Intelligence</b>: analyses <b>camera-trap images</b>, <b>sound recordings</b>.</li>
          </ul>
        ` },
        { title: 'Engineers', html: `
          <ul>
            <li><b>Sustainable infrastructure</b>; environmental assessments for roads, dams, buildings.</li>
            <li>Eco-design: natural lighting, <b>rainwater harvesting</b>, energy-efficient materials.</li>
            <li><b>Green buildings, wastewater treatment, renewable energy</b>.</li>
            <li><b>Wildlife overpasses</b> (prevent roadkill), <b>fish ladders</b> (fish pass dams), <b>noise-reducing roads</b>.</li>
            <li>Monitoring: sensors, drones, water-quality sensors, weather stations.</li>
          </ul>
          <p>Goal: <b>development without destruction</b>.</p>
        ` },
        { title: 'Communities', html: `
          <ul>
            <li><b>Local communities and NGOs</b>: ownership = better protection.</li>
            <li><b>Ecotourism</b>: income (tours, homestays, handicrafts), low-impact travel.</li>
            <li><b>Community forests</b>, <b>Joint Forest Management (JFM)</b>.</li>
          </ul>
          <table class="tbl">
            <tbody>
              <tr><td><b>Mawphlang Sacred Grove</b></td><td>Meghalaya; Khasi tribes' conservation rituals</td></tr>
              <tr><td><b>Mendha Lekha</b></td><td>Maharashtra; tribal forest management under JFM</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Challenges', html: `
          <ol>
            <li><b>Habitat loss</b> (deforestation, urbanisation, agriculture): <b>leading cause</b> of decline; fragmentation.</li>
            <li><b>Climate change</b>: coral reefs, glaciers, polar habitats most at risk.</li>
            <li><b>Policy gaps, weak enforcement</b>, poor coordination.</li>
            <li><b>Invasive species</b>, e.g. <b>Lantana</b> in Indian forests.</li>
            <li><b>Pollution, overexploitation, illegal trade</b>.</li>
          </ol>
          <p>Fix: <b>combine in-situ and ex-situ</b>; engineers, communities, policymakers, scientists together.</p>
        ` }
      ],
      flashcards: [
        { front: 'Wildlife Protection Act year?', back: '<b>1972</b>.' },
        { front: 'Biological Diversity Act year, and the local bodies it set up?', back: '<b>2002</b>; <b>Biodiversity Management Committees (BMCs)</b>.' },
        { front: 'Ramsar Convention protects…', back: '<b>Wetlands</b> of international importance (India: over 75 sites).' },
        { front: 'Project Elephant was launched in…', back: '<b>1992</b>.' },
        { front: 'What does DNA barcoding do?', back: 'Identifies species from a <b>short genetic sequence</b>.' },
        { front: 'Leading cause of biodiversity decline?', back: '<b>Habitat loss</b>.' },
        { front: 'Invasive plant choking Indian forests?', back: '<b>Lantana</b>.' },
        { front: 'Mendha Lekha is in which state?', back: '<b>Maharashtra</b> (Joint Forest Management).' }
      ],
      oneLiners: [
        'Forest Conservation Act: forest land diversion needs central approval.',
        'CBD was established in 1992.',
        'Chilika Lake and Keoladeo NP are Ramsar sites.',
        'Fish ladders and wildlife overpasses are engineering fixes for habitats.',
        'AI analyses camera-trap images and sound recordings.'
      ],
      formulas: []
    }
  ],
  figures: []
});
