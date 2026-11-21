CHUNK({
  chunk: 'C',
  module: 'm2',
  topics: [
    {
      id: 'm2-biodiversity-intro',
      title: 'Biodiversity and its levels',
      short: 'Biodiversity & levels',
      blurb: 'What biodiversity is, why engineers study it, and the three levels: genetic, species and ecosystem diversity, with examples.',
      source: 'Lecture W2 (Biodiversity), pages 1–6',
      tabs: [
        { title: 'What it is', html: `
          <p class="lead"><b>Biodiversity</b> = <b>biological diversity</b>: all life, microbes to large mammals.</p>
          <ul>
          <li>Levels: <b>genes, species, ecosystems</b> (interconnected).</li>
          <li>Supports <b>pollination, nutrient cycling, climate regulation</b>.</li>
          <li>Engineering link: <b>sustainable development</b>, <b>bio-inspired design</b>.</li>
          <li><b>Ecological impact assessment</b>: now <b>mandatory</b> for major projects.</li>
          </ul>
        ` },
        { title: 'Three levels', html: `
          <table class="tbl"><thead><tr><th>Level</th><th>Meaning</th><th>Example</th></tr></thead><tbody>
          <tr><td><b>Genetic</b></td><td>Variation <b>within one species</b></td><td><b>Dog breeds</b>, rice varieties, wheat types</td></tr>
          <tr><td><b>Species</b></td><td>Number and types of species in an area</td><td>High: <b>tropical rainforest</b>; low: <b>monoculture</b></td></tr>
          <tr><td><b>Ecosystem</b></td><td>Variety of ecosystems in a region</td><td>Forests, wetlands, coral reefs, deserts</td></tr>
          </tbody></table>
          <ul>
          <li>Species diversity: <b>richness</b> = count; <b>evenness</b> = how evenly individuals are spread.</li>
          <li>Genetic diversity gives disease/pest resistance, climate adaptation, crop yield; low variation = <b>vulnerable to epidemics</b>.</li>
          <li>Ecosystem diversity gives <b>carbon storage, water filtration</b>, climate regulation.</li>
          </ul>
        ` }
      ],
      flashcards: [
        { front: 'Biodiversity is short for…', back: '<b>Biological diversity</b>.' },
        { front: 'Three levels of biodiversity?', back: '<b>Genetic, species, ecosystem</b>.' },
        { front: 'Dog breeds are an example of which level?', back: '<b>Genetic diversity</b> (one species).' },
        { front: 'Species richness vs evenness?', back: 'Richness = <b>count</b> of species; evenness = how <b>evenly</b> individuals are spread.' },
        { front: 'Example of low species diversity?', back: 'A <b>monoculture</b> crop field.' },
        { front: 'What is now mandatory for major engineering projects?', back: '<b>Ecological impact assessment</b>.' },
        { front: 'Risk of low genetic variation?', back: 'Vulnerability to <b>epidemics</b> and environmental stress.' }
      ],
      oneLiners: [
        'Biodiversity spans genes, species and ecosystems.',
        'Genetic diversity = within a species (dog breeds, rice, wheat).',
        'Species diversity = richness + evenness; rainforest high, monoculture low.',
        'Ecosystem diversity gives more services: carbon storage, water filtration, climate regulation.',
        'The three levels are interconnected.'
      ],
      formulas: []
    },
    {
      id: 'm2-biodiversity-value',
      title: 'Significance of biodiversity',
      short: 'Value of biodiversity',
      blurb: 'Ecological, economic, scientific, cultural and climate value of biodiversity.',
      source: 'Lecture W2 (Biodiversity), pages 6–9',
      tabs: [
        { title: 'Ecological and economic', html: `
          <table class="tbl"><thead><tr><th>Value</th><th>Key points</th></tr></thead><tbody>
          <tr><td>Ecological</td><td>Food webs, <b>pollination</b>, decomposition; <b>wetlands and microbes</b> purify water</td></tr>
          <tr><td>Economic</td><td>Agriculture; <b>pharmaceuticals</b> (drugs from plants, fungi, marine life); bioproducts; <b>ecotourism</b></td></tr>
          </tbody></table>
        ` },
        { title: 'Science, culture, climate', html: `
          <table class="tbl"><thead><tr><th>Value</th><th>Key points</th></tr></thead><tbody>
          <tr><td>Scientific</td><td><b>Biotechnology</b>: antibiotics, vaccines, enzymes; genetic engineering; a <b>living laboratory</b></td></tr>
          <tr><td>Cultural / ethical</td><td><b>Sacred</b> species; <b>indigenous knowledge</b> (practices, <b>taboos</b>); other species' <b>right to exist</b></td></tr>
          </tbody></table>
          <table class="tbl"><thead><tr><th>Climate role</th><th></th></tr></thead><tbody>
          <tr><td>Forests</td><td><b>Carbon sinks</b></td></tr>
          <tr><td>Wetlands</td><td><b>Flood control</b></td></tr>
          <tr><td>Oceans</td><td>Absorb CO<sub>2</sub>, store heat</td></tr>
          <tr><td>Phytoplankton</td><td><b>Oxygen production</b></td></tr>
          </tbody></table>
        ` }
      ],
      flashcards: [
        { front: 'Products of biotechnology from biodiversity?', back: '<b>Antibiotics, vaccines, enzymes</b>.' },
        { front: 'Industry that depends on rich wildlife to attract visitors?', back: '<b>Ecotourism</b>.' },
        { front: 'Climate role of wetlands?', back: '<b>Flood control</b>: absorb rain, release it slowly.' },
        { front: 'Marine organisms important for oxygen production?', back: '<b>Phytoplankton</b>.' },
        { front: 'How do indigenous communities manage nature?', back: 'Through <b>traditional practices and taboos</b>.' },
        { front: 'Why is preserving biodiversity called a moral act?', back: 'It respects the <b>right of other species to exist</b>.' }
      ],
      oneLiners: [
        'Five values: ecological, economic, scientific/educational, cultural/ethical, climate.',
        'Wetlands and microbes purify water naturally.',
        'Many life-saving drugs come from plants, fungi and marine life.',
        'Forests are carbon sinks; wetlands control floods.'
      ],
      formulas: []
    },
    {
      id: 'm2-hotspots',
      title: 'Biodiversity hotspots',
      short: 'Hotspots',
      blurb: 'What makes a hotspot, three global examples, and India\'s four hotspots.',
      source: 'Lecture W2 (Biodiversity), pages 9–11',
      tabs: [
        { title: 'Criteria and global', html: `
          <p class="lead"><b>Hotspot</b>: high <b>species richness</b> + high <b>endemism</b> + <b>under serious threat</b>.</p>
          <figure data-fig="m2-hotspot-map"></figure>
          <table class="tbl"><thead><tr><th>Hotspot</th><th>Key fact</th></tr></thead><tbody>
          <tr><td><b>Amazon</b> (S America)</td><td>Largest tropical forest</td></tr>
          <tr><td><b>Congo Basin</b> (C Africa)</td><td><b>Second-largest</b> rainforest; gorillas</td></tr>
          <tr><td><b>Coral Triangle</b> (SE Asia)</td><td><b>Highest marine biodiversity</b></td></tr>
          </tbody></table>
        ` },
        { title: 'India\'s hotspots', html: `
          <p class="lead">India: <b>4 of the world's 36</b> hotspots.</p>
          <table class="tbl"><thead><tr><th>Hotspot</th><th>Known for</th></tr></thead><tbody>
          <tr><td><b>Himalayas</b></td><td><b>Snow leopard, red panda</b></td></tr>
          <tr><td><b>Western Ghats</b></td><td>Endemic <b>amphibians, reptiles</b>, flowering plants</td></tr>
          <tr><td><b>Indo-Burma</b></td><td>NE India; tribal knowledge</td></tr>
          <tr><td><b>Sundaland</b></td><td>Includes <b>Nicobar Islands</b></td></tr>
          </tbody></table>
          <div class="mnemonic"><p>"<b>H</b>ot <b>W</b>ater <b>I</b>n <b>S</b>ummer": Himalayas, Western Ghats, Indo-Burma, Sundaland.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Two criteria for a hotspot?', back: 'High <b>species richness</b> and high <b>endemism</b> (plus serious threat).' },
        { front: 'How many hotspots in the world and in India?', back: '<b>36</b> worldwide, <b>4</b> in India.' },
        { front: 'Hotspot with the highest marine biodiversity?', back: '<b>Coral Triangle</b>.' },
        { front: 'Second-largest tropical rainforest?', back: '<b>Congo Basin</b>.' },
        { front: 'Indian hotspot that includes the Nicobar Islands?', back: '<b>Sundaland</b>.' },
        { front: 'Western Ghats are known for endemism in…', back: '<b>Amphibians, reptiles, flowering plants</b>.' }
      ],
      oneLiners: [
        'Hotspot = high richness + high endemism + under threat.',
        'Global: Amazon, Congo Basin, Coral Triangle.',
        'India: Himalayas, Western Ghats, Indo-Burma, Sundaland (4 of 36).',
        'Snow leopard and red panda: Himalayas.'
      ],
      formulas: []
    },
    {
      id: 'm2-biodiversity-threats',
      title: 'Threats to biodiversity and case studies',
      short: 'Threats',
      blurb: 'Six threats to biodiversity, the Silent Valley, Great Barrier Reef and Dodo cases, and what engineers and technology can do.',
      source: 'Lecture W2 (Biodiversity), pages 11–18',
      tabs: [
        { title: 'Six threats', html: `
          <table class="tbl"><thead><tr><th>Threat</th><th>Key points</th></tr></thead><tbody>
          <tr><td><b>Habitat loss / fragmentation</b></td><td>One of the biggest; <b>highways, railways, dams</b> split habitat</td></tr>
          <tr><td><b>Pollution</b></td><td><b>Acid rain</b>; <b>eutrophication</b> from fertilizer runoff</td></tr>
          <tr><td><b>Climate change</b></td><td><b>Ocean acidification</b> harms corals, shellfish</td></tr>
          <tr><td><b>Overexploitation</b></td><td>Overfishing, logging, <b>poaching</b> (ivory, fur, horns)</td></tr>
          <tr><td><b>Invasive species</b></td><td><b>Water hyacinth</b> (rivers), <b>Lantana camara</b> (forests)</td></tr>
          <tr><td><b>Industrialisation</b></td><td>Dams, highways, ports; needs <b>EIA</b></td></tr>
          </tbody></table>
        ` },
        { title: 'Case studies', html: `
          <div class="note example"><p><b>Silent Valley</b>, Kerala (Western Ghats): <b>lion-tailed macaque</b>, <b>Malabar civet</b>. Hydroelectric project stopped in <b>1983</b>; became a <b>national park</b>.</p></div>
          <div class="note example"><p><b>Great Barrier Reef</b>, Australia: <b>largest coral reef system</b>, UNESCO site. <b>Coral bleaching</b>: corals expel algae (<b>zooxanthellae</b>).</p></div>
          <div class="note example"><p><b>Dodo</b>: flightless bird of <b>Mauritius</b>, extinct <b>late 1600s</b>; hunting, introduced <b>rats, pigs, monkeys</b> ate eggs.</p></div>
        ` },
        { title: 'Engineers and technology', html: `
          <ul>
          <li><b>EIA</b>: biodiversity impact checked before construction.</li>
          <li><b>Eco-engineering</b>: <b>green roofs, wildlife crossings, natural wastewater treatment</b>.</li>
          </ul>
          <div class="kv">
          <div><span>Map ecosystems, deforestation</span><b>GIS and remote sensing</b></div>
          <div><span>Wildlife tracking</span><b>Drones</b></div>
          <div><span>Identify species from images</span><b>AI</b></div>
          <div><span>Genetic datasets</span><b>Bioinformatics</b></div>
          </div>
        ` }
      ],
      flashcards: [
        { front: 'Two invasive species named in the notes?', back: '<b>Water hyacinth</b> and <b>Lantana camara</b>.' },
        { front: 'Year the Silent Valley project was halted?', back: '<b>1983</b>.' },
        { front: 'Species of Silent Valley?', back: '<b>Lion-tailed macaque</b>, <b>Malabar civet</b>, endemic orchids.' },
        { front: 'What do corals expel when bleaching?', back: 'Their algae, <b>zooxanthellae</b>.' },
        { front: 'Where did the Dodo live and when did it die out?', back: '<b>Mauritius</b>, <b>late 1600s</b>.' },
        { front: 'Three eco-engineering examples?', back: '<b>Green roofs, wildlife crossings, natural wastewater treatment</b>.' },
        { front: 'Tool to map ecosystems and monitor deforestation?', back: '<b>GIS and remote sensing</b>.' }
      ],
      oneLiners: [
        'Threats: habitat loss, pollution, climate change, overexploitation, invasive species, industrialisation.',
        'Fragmentation by roads, railways and dams isolates populations.',
        'Ocean acidification harms corals and shellfish.',
        'Silent Valley saved in 1983; Great Barrier Reef bleaching; Dodo lost to humans and introduced animals.',
        'EIA checks biodiversity impact before construction.'
      ],
      formulas: []
    },
    {
      id: 'm2-species-interactions',
      title: 'Species interactions',
      short: 'Species interactions',
      blurb: 'What species interactions are, why engineers care, and the five types with their examples.',
      source: 'Lecture W2 (Species interaction), pages 1–6 and 14',
      tabs: [
        { title: 'Five types', html: `
          <p class="lead"><b>Species interaction</b>: effect organisms have on each other, <b>direct or indirect</b>.</p>
          <div data-viz="species-interactions"></div>
          <table class="tbl"><thead><tr><th>Type</th><th>Effect</th><th>Examples</th></tr></thead><tbody>
          <tr><td><b>Mutualism</b></td><td>+/+</td><td>Bees and flowers; <b>mycorrhizal fungi</b> and roots</td></tr>
          <tr><td><b>Commensalism</b></td><td>+/0</td><td><b>Barnacles on whales</b>; <b>cattle egrets</b> and cattle</td></tr>
          <tr><td><b>Parasitism</b></td><td>+/−</td><td><b>Ticks</b>; <b>parasitic wasps</b></td></tr>
          <tr><td><b>Predation</b></td><td>Kills and eats</td><td>Tiger and deer; hawk and mouse</td></tr>
          <tr><td><b>Competition</b></td><td>Same limited resource</td><td>Plants for <b>sunlight</b></td></tr>
          </tbody></table>
        ` },
        { title: 'Subtypes and links', html: `
          <ul>
          <li><b>Ectoparasite</b> = outside host; <b>endoparasite</b> = inside.</li>
          <li><b>Intraspecific</b> = same species; <b>interspecific</b> = different species.</li>
          <li><b>Predation</b> regulates population size.</li>
          <li>Commensalism gives shelter, <b>transport</b>, feeding advantage.</li>
          <li>Losing <b>pollinators</b> cascades to herbivores and predators.</li>
          </ul>
        ` }
      ],
      flashcards: [
        { front: 'Five types of species interaction?', back: '<b>Mutualism, commensalism, parasitism, predation, competition</b>.' },
        { front: 'Barnacles on a whale?', back: '<b>Commensalism</b>.' },
        { front: 'Mycorrhizal fungi and plant roots?', back: '<b>Mutualism</b>.' },
        { front: 'Cattle egrets and grazing cattle?', back: '<b>Commensalism</b>.' },
        { front: 'Parasite living inside the host?', back: '<b>Endoparasite</b>.' },
        { front: 'Competition within the same species?', back: '<b>Intraspecific</b>.' }
      ],
      oneLiners: [
        'Mutualism +/+, commensalism +/0, parasitism +/−.',
        'Bees–flowers and mycorrhiza–roots are mutualism.',
        'Ticks and parasitic wasps are parasites.',
        'Plants competing for light is competition.',
        'Losing pollinators cascades through the food web.'
      ],
      formulas: []
    },
    {
      id: 'm2-species-status',
      title: 'Extinct, endangered, endemic and rare species',
      short: 'Species status',
      blurb: 'The four conservation-status categories with their causes, examples from India and the world, and conservation strategies.',
      source: 'Lecture W2 (Species interaction), pages 6–14',
      tabs: [
        { title: 'Extinct', html: `
          <p class="lead">Four status categories: <b>extinct, endangered, endemic, rare</b>.</p>
          <p><b>Extinct</b>: <b>no living individuals</b>, wild or captive.</p>
          <figure data-fig="m2-mass-extinction"></figure>
          <table class="tbl"><thead><tr><th>Species</th><th>Fact</th></tr></thead><tbody>
          <tr><td><b>Dodo</b></td><td>Mauritius, 1600s</td></tr>
          <tr><td><b>Passenger pigeon</b></td><td>North America, <b>early 1900s</b></td></tr>
          <tr><td><b>Indian cheetah</b></td><td>Extinct <b>locally</b> in India</td></tr>
          </tbody></table>
        ` },
        { title: 'Endangered', html: `
          <p class="lead"><b>Endangered</b>: <b>very high extinction risk</b> soon.</p>
          <table class="tbl"><thead><tr><th>Species</th><th>Threat</th></tr></thead><tbody>
          <tr><td><b>Bengal tiger</b></td><td>Habitat loss, poaching</td></tr>
          <tr><td><b>Indian vulture</b></td><td><b>Diclofenac</b> in livestock carcasses</td></tr>
          <tr><td><b>Ganges river dolphin</b></td><td>Pollution, dams</td></tr>
          <tr><td><b>Giant panda</b> (China)</td><td>Shrinking bamboo forests</td></tr>
          <tr><td><b>Black rhino</b> (Africa)</td><td><b>Critically endangered</b>; horn poaching</td></tr>
          <tr><td><b>Orangutan</b> (SE Asia)</td><td>Deforestation, pet trade</td></tr>
          </tbody></table>
          <p>Protection: sanctuaries, national parks, <b>captive breeding</b>, India's <b>Wildlife Protection Act</b>.</p>
        ` },
        { title: 'Endemic and rare', html: `
          <div class="vs">
          <div class="side"><h4>Endemic</h4><p>Found <b>only in one region</b>; help identify <b>hotspots</b>.</p></div>
          <div class="side"><h4>Rare</h4><p><b>Small population</b>, but <b>not at high extinction risk now</b>. Causes: <b>habitat specificity</b>, low reproduction.</p></div>
          </div>
          <table class="tbl"><thead><tr><th>Species</th><th>Type</th><th>Where</th></tr></thead><tbody>
          <tr><td><b>Nilgiri tahr</b></td><td>Endemic</td><td>Western Ghats</td></tr>
          <tr><td><b>Lion-tailed macaque</b></td><td>Endemic</td><td>Western Ghats</td></tr>
          <tr><td><b>Andaman teal</b></td><td>Endemic</td><td>Andaman Islands</td></tr>
          <tr><td><b>Himalayan quail</b></td><td>Rare</td><td>Last seen <b>19th century</b></td></tr>
          <tr><td><b>Malabar civet</b></td><td>Rare</td><td>Once thought extinct</td></tr>
          <tr><td><b>Gooty tarantula</b></td><td>Rare</td><td><b>Andhra Pradesh</b></td></tr>
          </tbody></table>
          <div class="note heads-up"><p>Malabar civet: listed as rare but also called critically endangered.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Four conservation-status categories in the notes?', back: '<b>Extinct, endangered, endemic, rare</b>.' },
        { front: 'Passenger pigeon went extinct by…', back: 'The <b>early 1900s</b> (North America).' },
        { front: 'Why did Indian vultures decline?', back: '<b>Diclofenac</b> poisoning from livestock carcasses.' },
        { front: 'Black rhino status and main threat?', back: '<b>Critically endangered</b>; poaching for horn.' },
        { front: 'Indian law banning hunting and trade of endangered species?', back: '<b>Wildlife Protection Act</b>.' },
        { front: 'Endemic species of the Andaman Islands?', back: '<b>Andaman teal</b>.' },
        { front: 'Nilgiri tahr is endemic to…', back: 'The <b>Western Ghats</b>.' },
        { front: 'Rare vs endangered?', back: 'Rare: small numbers but <b>not at high risk now</b>; endangered: <b>very high risk</b>.' },
        { front: 'Spider found in one forest patch in Andhra Pradesh?', back: '<b>Gooty tarantula</b>.' }
      ],
      oneLiners: [
        'Extinct: Dodo, passenger pigeon, Indian cheetah (locally).',
        'Endangered India: Bengal tiger, Indian vulture, Ganges river dolphin.',
        'Endangered world: giant panda, black rhino, orangutan.',
        'Endemic India: Nilgiri tahr, lion-tailed macaque, Andaman teal.',
        'Rare: Himalayan quail, Malabar civet, Gooty tarantula.',
        'Endemic species help identify hotspots.'
      ],
      formulas: []
    }
  ],
  figures: [
    { id: 'm2-hotspot-map', src: 'pages/m2/evs-w2-07/p10.png', crop: [0.31, 0.16, 0.36, 0.172], caption: 'Hotspots cluster in the tropics and in a few mountain and island regions.', alt: 'World map marking biodiversity hotspots.' },
    { id: 'm2-mass-extinction', src: 'pages/m2/evs-w2-08/p07.png', crop: [0.26, 0.30, 0.42, 0.29], caption: 'Drivers of mass extinction: climate, meteorite impact, volcanism, air temperature, ocean acidification, water oxygen levels, sea-level rise and atmospheric circulation.', alt: 'Diagram with a dinosaur skull in the centre and arrows from eight causes of mass extinction.' }
  ]
});
