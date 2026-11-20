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
          <p class="lead"><b>Biodiversity</b> = <b>biological diversity</b>: all life forms, microbes to large mammals.</p>
          <ul>
            <li>At every level: <b>genes, species, ecosystems</b>.</li>
            <li>Keeps nature balanced, ecosystems working.</li>
            <li>Supports <b>pollination, nutrient cycling, climate regulation</b>.</li>
            <li>Without it, life (human included) is not sustainable.</li>
          </ul>
        ` },
        { title: 'Why engineers study it', html: `
          <p class="lead">Engineers: <b>sustainable development</b>, balancing progress with preservation.</p>
          <ul>
            <li><b>Resource management</b>: use resources efficiently, keep for future generations.</li>
            <li><b>Green technologies</b>: <b>bio-inspired design</b>, sustainable materials.</li>
            <li><b>Ecological impact assessments</b> now <b>mandatory</b> for major projects.</li>
            <li>Infrastructure that is environmentally responsible, socially acceptable, ecologically stable.</li>
          </ul>
        ` },
        { title: 'Genetic diversity', html: `
          <p class="lead"><b>Genetic diversity</b>: variety of genes/traits <b>within one species</b> (size, colour, disease resistance).</p>
          <ul>
            <li>Lets species <b>adapt</b> to change.</li>
            <li>Examples: <b>dog breeds</b> (one species); <b>rice varieties</b> for climates/soils; types of <b>wheat</b>.</li>
          </ul>
          <h3>Why it matters</h3>
          <ul>
            <li><b>Resistance to diseases and pests</b>.</li>
            <li>Adapting to <b>climate change</b> (heat, irregular rain).</li>
            <li>Better <b>crop yield and quality</b>; food security.</li>
            <li>Low variation = <b>vulnerable to epidemics</b> and stress.</li>
          </ul>
        ` },
        { title: 'Species and ecosystem diversity', html: `
          <div class="vs">
            <div class="side"><h4>Species diversity</h4>
              <p><b>Number and types of species</b> in an area.</p>
              <ul><li><b>Richness</b> = count of species.</li><li><b>Evenness</b> = how evenly individuals are spread.</li><li>High: <b>tropical rainforest</b>. Low: <b>monoculture</b> field.</li><li>Raises stability, productivity, resilience.</li></ul></div>
            <div class="side"><h4>Ecosystem diversity</h4>
              <p><b>Variety of ecosystems</b> in a region/planet.</p>
              <ul><li>Forests, deserts, wetlands, grasslands, freshwater, marine.</li><li>More types = more services: <b>carbon storage, water filtration, climate regulation</b>.</li></ul></div>
          </div>
          <table class="tbl"><thead><tr><th>Level</th><th>Focus</th><th>Example</th></tr></thead><tbody>
            <tr><td>Genetic</td><td>Variation within a species</td><td>Types of wheat</td></tr>
            <tr><td>Species</td><td>Variety of species in a region</td><td>Tigers, elephants and others in one forest</td></tr>
            <tr><td>Ecosystem</td><td>Range of habitats</td><td>Coral reefs, rainforests</td></tr>
          </tbody></table>
          <p>Levels are <b>interconnected</b>: loss at one weakens the others.</p>
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
          <h3>Ecological balance</h3>
          <p>Natural equilibrium, kept by:</p>
          <ul>
            <li><b>Food chains and webs</b>: producers to consumers to decomposers.</li>
            <li><b>Pollination</b> by bees and insects.</li>
            <li><b>Decomposition</b> returns nutrients to soil.</li>
            <li><b>Natural water purification</b> by wetlands and microbes.</li>
          </ul>
          <h3>Economic value</h3>
          <ul>
            <li><b>Agriculture and livestock</b>: crop variety, breeds, genetic resources.</li>
            <li><b>Pharmaceuticals</b>: <b>life-saving drugs</b> from plants, fungi, marine organisms.</li>
            <li><b>Bioproducts</b>: natural dyes, oils, enzymes, biodegradable materials.</li>
            <li><b>Ecotourism</b>: growing industry relying on wildlife.</li>
          </ul>
        ` },
        { title: 'Science, culture, ethics', html: `
          <h3>Scientific and educational</h3>
          <ul>
            <li><b>Biotechnology</b> uses organisms to make <b>antibiotics, vaccines and enzymes</b>.</li>
            <li><b>Genetic engineering</b>: better crops, disease-resistant plants, new medicines.</li>
            <li>New genes, biochemical pathways, adaptive traits.</li>
            <li>A <b>living laboratory</b> for teaching.</li>
          </ul>
          <h3>Cultural and ethical</h3>
          <ul>
            <li>Religions treat animals, plants, places as <b>sacred</b>.</li>
            <li><b>Indigenous knowledge systems</b>: traditional practices and <b>taboos</b>.</li>
            <li>Ethics: preserving biodiversity is a <b>moral act</b>; other species' right to exist.</li>
          </ul>
        ` },
        { title: 'Climate regulation', html: `
          <table class="tbl"><thead><tr><th>Part of nature</th><th>Climate role</th></tr></thead><tbody>
            <tr><td>Forests</td><td><b>Carbon sinks</b>: absorb CO<sub>2</sub>, reduce global warming</td></tr>
            <tr><td>Wetlands</td><td><b>Flood control</b>: absorb rain, release slowly</td></tr>
            <tr><td>Oceans</td><td>Absorb CO<sub>2</sub>, store heat, balance gases</td></tr>
            <tr><td>Phytoplankton</td><td><b>Oxygen production</b>, carbon cycling</td></tr>
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
          <p class="lead"><b>Hotspot</b>: very high biodiversity + <b>under serious threat</b>.</p>
          <div class="kv">
            <div><span>Criterion 1</span>High <b>species richness</b> (many species)</div>
            <div><span>Criterion 2</span>High <b>endemism</b> (many species found nowhere else)</div>
            <div><span>Plus</span>Significant threats: deforestation, pollution, habitat destruction, climate change</div>
          </div>
          <p>Focus: <b>irreplaceable</b> life at high risk.</p>
          <figure data-fig="m2-hotspot-map"></figure>
          <table class="tbl"><thead><tr><th>Hotspot</th><th>Key fact</th></tr></thead><tbody>
            <tr><td><b>Amazon Rainforest</b> (South America)</td><td>Largest tropical forest; most species of any land ecosystem</td></tr>
            <tr><td><b>Congo Basin</b> (Central Africa)</td><td><b>Second-largest</b> rainforest; gorillas, forest elephants</td></tr>
            <tr><td><b>Coral Triangle</b> (SE Asia, Pacific)</td><td><b>Highest marine biodiversity</b> (corals, fish)</td></tr>
          </tbody></table>
          <p>Services: carbon storage, water regulation, food security. Threats: deforestation, mining, overfishing, climate change.</p>
        ` },
        { title: 'India\'s hotspots', html: `
          <p class="lead">India has <b>four of the world's 36</b> biodiversity hotspots.</p>
          <table class="tbl"><thead><tr><th>Hotspot</th><th>Known for</th></tr></thead><tbody>
            <tr><td><b>Himalayas</b></td><td>High altitude; <b>snow leopard, red panda</b>, endemic plants</td></tr>
            <tr><td><b>Western Ghats</b></td><td>An <b>oldest mountain range</b>; endemic <b>amphibians, reptiles, flowering plants</b></td></tr>
            <tr><td><b>Indo-Burma</b></td><td>NE India; <b>tribal knowledge systems</b></td></tr>
            <tr><td><b>Sundaland</b></td><td>Includes the <b>Nicobar Islands</b>; rainforests and coral reefs</td></tr>
          </tbody></table>
          <p>Threats: deforestation, infrastructure development, climate change.</p>
          <div class="mnemonic"><p>"<b>H</b>ot <b>W</b>ater <b>I</b>n <b>S</b>ummer": Himalayas, Western Ghats, Indo-Burma, Sundaland.</p></div>        ` }
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
          <table class="tbl"><thead><tr><th>Threat</th><th>How it harms</th></tr></thead><tbody>
            <tr><td><b>1. Habitat loss and fragmentation</b></td><td>One of the biggest. Urbanisation, farming; <b>highways, railways, dams</b> split ecosystems into patches; disrupts migration, breeding, food/water access.</td></tr>
            <tr><td><b>2. Pollution</b></td><td>Air: <b>acid rain</b>; water: industry, sewage; soil: pesticides, heavy metals; <b>eutrophication</b> from fertilizer runoff (algal blooms, low oxygen).</td></tr>
            <tr><td><b>3. Climate change</b></td><td>Heat shifts distribution; droughts, floods; <b>ocean acidification</b> (excess CO<sub>2</sub>) harms corals, shellfish.</td></tr>
            <tr><td><b>4. Overexploitation</b></td><td>Faster than regeneration: <b>overfishing</b>, <b>logging</b>, <b>poaching</b> (ivory, fur, horns), farming, mining.</td></tr>
            <tr><td><b>5. Invasive species</b></td><td>Non-natives outcompete natives. <b>Water hyacinth</b> clogs rivers/lakes; <b>Lantana camara</b> invades forests, grasslands.</td></tr>
            <tr><td><b>6. Industrialisation and infrastructure</b></td><td>Dams, highways, ports clear and fragment habitat. Needs <b>EIA</b>.</td></tr>
          </tbody></table>
        ` },
        { title: 'Case studies', html: `
          <div class="note example"><p><b>Silent Valley National Park, Kerala</b> (Western Ghats): <b>lion-tailed macaque</b>, <b>Malabar civet</b>, endemic orchids. 1970s–80s hydroelectric project would flood it; scientists, activists, locals stopped it in <b>1983</b>; became a <b>national park</b>.</p></div>
          <div class="note example"><p><b>Great Barrier Reef, Australia</b>: <b>largest coral reef system</b>, UNESCO World Heritage Site. Warm oceans cause <b>coral bleaching</b>: corals expel algae (<b>zooxanthellae</b>) that give colour and nutrients; repeated bleaching kills reef.</p></div>
          <div class="note example"><p><b>The Dodo</b>: flightless bird of <b>Mauritius</b>, extinct <b>late 1600s</b>, decades after humans arrived. Hunting, habitat loss, introduced <b>rats, pigs, monkeys</b> ate eggs. No predators before, so no instinct to flee.</p></div>
        ` },
        { title: 'Engineers and technology', html: `
          <ul>
            <li><b>Sustainable design and construction</b>: less waste, energy, land degradation.</li>
            <li><b>Environmental Impact Assessment (EIA)</b>: biodiversity effect before construction; sensitive habitats, endangered species, mitigation.</li>
            <li><b>Eco-engineering</b>: engineering + ecology: <b>green roofs, wildlife crossings, natural wastewater treatment</b>.</li>
          </ul>
          <table class="tbl"><thead><tr><th>Tool</th><th>Use in monitoring</th></tr></thead><tbody>
            <tr><td><b>GIS and remote sensing</b></td><td>Map ecosystems, monitor deforestation</td></tr>
            <tr><td><b>Drones</b></td><td>Wildlife tracking in remote areas</td></tr>
            <tr><td><b>AI</b></td><td>Identify species from images/movement, detect threats</td></tr>
            <tr><td><b>Bioinformatics</b></td><td>Genetic and biodiversity datasets</td></tr>
          </tbody></table>
          <p>Engineers: sustainable practices, green tech innovation, support conservation policy.</p>
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
        { title: 'What and why', html: `
          <p class="lead"><b>Species interaction</b>: effect organisms have on each other, <b>direct or indirect, short- or long-term</b>.</p>
          <ul>
            <li>Cooperation, competition, feeding, dependency.</li>
            <li>Pollinators, herbivores, predators; fungi and bacteria recycle nutrients.</li>
            <li>Losing one species can disrupt stability; biodiverse = more resilient.</li>
          </ul>
          <h3>Why engineers study it</h3>
          <ul>
            <li>Shows ecosystem health.</li>
            <li><b>EIAs</b> need local species and relationships.</li>
            <li><b>Conservation engineering</b> restores habitats.</li>
            <li>Supports sustainable development goals.</li>
          </ul>
        ` },
        { title: 'Five types', html: `
          <div data-viz="species-interactions"></div>
          <table class="tbl"><thead><tr><th>Type</th><th>Effect</th><th>Examples</th></tr></thead><tbody>
            <tr><td><b>Mutualism</b></td><td>Both <b>benefit</b> (+/+)</td><td>Bees and flowers; <b>mycorrhizal fungi</b> and roots (nutrients / carbohydrates)</td></tr>
            <tr><td><b>Commensalism</b></td><td>One benefits, other <b>unaffected</b> (+/0)</td><td><b>Barnacles on whales</b>; <b>cattle egrets</b> eating insects stirred by cattle</td></tr>
            <tr><td><b>Parasitism</b></td><td><b>Host harmed</b> (+/−)</td><td><b>Ticks</b> on mammals; <b>parasitic wasps</b> laying eggs in insects</td></tr>
            <tr><td><b>Predation</b></td><td>Predator <b>kills and eats</b> prey</td><td>Tiger and deer; hawk and mouse</td></tr>
            <tr><td><b>Competition</b></td><td>Same <b>limited resources</b></td><td>Plants competing for <b>sunlight</b></td></tr>
          </tbody></table>
          <ul>
            <li>Mutualism: nutrient cycling, pollination, productivity.</li>
            <li>Commensalism: shelter, transport, feeding advantages.</li>
            <li><b>Ectoparasites</b> (outside) vs <b>endoparasites</b> (inside).</li>
            <li>Predation regulates population size.</li>
            <li>Competition: <b>intraspecific</b> (same species) or <b>interspecific</b> (different); one often dominates.</li>
          </ul>
        ` },
        { title: 'How it links to extinction', html: `
          <p class="lead">Interactions <b>shape ecosystem structure</b>.</p>
          <ul>
            <li>Broken: species lose food, pollination, shelter; decline to endangerment/extinction.</li>
            <li>Losing <b>pollinators</b> threatens plants, cascades to herbivores, predators.</li>
            <li><b>Feedback loops</b>: one decline unbalances others.</li>
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
          <p class="lead">Conservation status: <b>how likely a species survives in the wild</b> (population, habitat, risk). Four: <b>extinct, endangered, endemic, rare</b>.</p>
          <p><b>Extinct</b>: <b>no living individuals</b>, wild or captive. Natural but <b>accelerated by humans</b>.</p>
          <figure data-fig="m2-mass-extinction"></figure>
          <p><b>Causes</b>: habitat loss (deforestation, urbanisation, agriculture), climate change, hunting/poaching, invasive species.</p>
          <table class="tbl"><thead><tr><th>Species</th><th>Where and why</th></tr></thead><tbody>
            <tr><td><b>Dodo</b></td><td>Mauritius, 1600s; hunting and invasive animals</td></tr>
            <tr><td><b>Passenger pigeon</b></td><td>North America, by the <b>early 1900s</b>; mass hunting, habitat destruction</td></tr>
            <tr><td><b>Indian cheetah</b></td><td>Extinct <b>locally</b> in India; overhunting, habitat loss</td></tr>
          </tbody></table>
          <p><b>Impact</b>: broken food chains, dependent species collapse, lost <b>pollination, seed dispersal, nutrient cycling</b>.</p>
        ` },
        { title: 'Endangered', html: `
          <p class="lead"><b>Endangered</b>: <b>very high extinction risk</b> soon; populations critically low.</p>
          <p>Causes: <b>human encroachment</b> (cities, farms, roads), <b>pollution</b>, <b>habitat fragmentation</b>.</p>
          <table class="tbl"><thead><tr><th>Species</th><th>Threat</th></tr></thead><tbody>
            <tr><td><b>Bengal tiger</b> (India's national animal)</td><td>Habitat loss, poaching</td></tr>
            <tr><td><b>Indian vulture</b></td><td><b>Diclofenac</b> poisoning from livestock carcasses</td></tr>
            <tr><td><b>Ganges river dolphin</b></td><td>Water pollution, dams</td></tr>
            <tr><td><b>Giant panda</b> (China)</td><td>Shrinking bamboo forests, low reproduction</td></tr>
            <tr><td><b>Black rhino</b> (Africa)</td><td>Critically endangered; poaching for horn</td></tr>
            <tr><td><b>Orangutan</b> (Southeast Asia)</td><td>Deforestation, illegal pet trade</td></tr>
          </tbody></table>
          <h3>Conservation strategies</h3>
          <ul>
            <li><b>Wildlife sanctuaries and national parks</b>: safe habitat.</li>
            <li><b>Captive breeding</b>: raise numbers, reintroduce.</li>
            <li><b>Legal protection</b>: India's <b>Wildlife Protection Act</b> bans hunting, trade.</li>
            <li>Community education; anti-poaching laws.</li>
          </ul>
        ` },
        { title: 'Endemic', html: `
          <p class="lead"><b>Endemic</b>: <b>only one region</b> (island or continent).</p>
          <ul>
            <li>Evolved in isolation; <b>very vulnerable</b> to habitat change.</li>
            <li>Irreplaceable; sensitive indicators of ecosystem health.</li>
            <li><b>Indicators of regional biodiversity</b>; help identify <b>hotspots</b>.</li>
          </ul>
          <table class="tbl"><thead><tr><th>Indian endemic</th><th>Found only in</th></tr></thead><tbody>
            <tr><td><b>Nilgiri tahr</b> (mountain goat)</td><td>Western Ghats</td></tr>
            <tr><td><b>Lion-tailed macaque</b></td><td>Western Ghats rainforests</td></tr>
            <tr><td><b>Andaman teal</b> (duck)</td><td>Andaman Islands freshwater wetlands</td></tr>
          </tbody></table>
          <p>Threats: habitat destruction, invasive species, <b>restricted range</b> (cannot migrate), disasters, climate shifts.</p>
        ` },
        { title: 'Rare', html: `
          <p class="lead"><b>Rare</b>: <b>small population or limited range</b>, but <b>not currently at high extinction risk</b>.</p>
          <p>Still vulnerable, so <b>monitored</b>.</p>
          <p><b>Causes</b>: <b>habitat specificity</b>, <b>low reproductive rates</b>, human interference.</p>
          <table class="tbl"><thead><tr><th>Species</th><th>Fact</th></tr></thead><tbody>
            <tr><td><b>Himalayan quail</b></td><td>Last reliably seen <b>19th century</b>; maybe in remote Himalayas</td></tr>
            <tr><td><b>Malabar civet</b></td><td>Once thought extinct; among India's rarest mammals</td></tr>
            <tr><td><b>Gooty tarantula</b></td><td>Colourful spider, one forest patch in <b>Andhra Pradesh</b></td></tr>
          </tbody></table>
          <div class="note heads-up"><p>Malabar civet: listed as rare but also called critically endangered. Learn both.</p></div>
          <h3>Engineers' role</h3>
          <p><b>EIAs</b> before construction, eco-friendly design, <b>wildlife corridors</b>, green buildings, water-efficient systems.</p>
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
