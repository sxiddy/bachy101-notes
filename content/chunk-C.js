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
          <p class="lead"><b>Biodiversity</b> is short for <b>biological diversity</b>: the vast array of life forms on Earth, from tiny microbes to large mammals.</p>
          <ul>
            <li>It exists at every level of biological organisation: <b>genes, species and ecosystems</b>.</li>
            <li>It keeps nature in balance and ecosystems working.</li>
            <li>It supports <b>pollination, nutrient cycling and climate regulation</b>.</li>
            <li>Without it, life on Earth, human life included, would not be sustainable.</li>
          </ul>
        ` },
        { title: 'Why engineers study it', html: `
          <p class="lead">For engineers, biodiversity is about <b>sustainable development</b>: balancing progress with environmental preservation.</p>
          <ul>
            <li><b>Resource management</b>: projects depend on natural resources, which must be used efficiently and kept for future generations.</li>
            <li><b>Green technologies</b> rely on <b>bio-inspired design</b> and sustainable materials from biodiversity.</li>
            <li><b>Ecological impact assessments</b> are now <b>mandatory</b> for major projects, to judge how development affects nearby ecosystems.</li>
            <li>It helps design infrastructure that is environmentally responsible and socially acceptable, reduces environmental damage and supports long-term ecological stability.</li>
            <li>The aim: solutions that are both technically effective and environmentally responsible, so development supports natural life systems.</li>
          </ul>
        ` },
        { title: 'Genetic diversity', html: `
          <p class="lead"><b>Genetic diversity</b> is the variety of genes and traits <b>within a single species</b>: size, colour, disease resistance.</p>
          <ul>
            <li>It lets species <b>adapt</b> to changing environments over time.</li>
            <li>Examples: the many <b>dog breeds</b> (one species); different <b>rice varieties</b> suited to particular climates or soils; types of <b>wheat</b>.</li>
            <li>High genetic diversity is needed for survival and evolution under natural or human-made change.</li>
          </ul>
          <h3>Why it matters</h3>
          <ul>
            <li>Builds <b>resistance to diseases and pests</b>.</li>
            <li>Helps organisms adapt to <b>climate change</b> (rising temperatures, irregular rain).</li>
            <li>Raises <b>crop yield and quality</b>, supporting food security; farmers pick varieties suited to their soil, climate or pests.</li>
            <li>Too little variation makes species <b>vulnerable to epidemics</b> and stress.</li>
          </ul>
        ` },
        { title: 'Species and ecosystem diversity', html: `
          <div class="vs">
            <div class="side"><h4>Species diversity</h4>
              <p>The <b>number and types of species</b> in an area: plants, animals, fungi, microbes.</p>
              <ul><li><b>Species richness</b> = count of species.</li><li><b>Species evenness</b> = how evenly individuals are spread among them.</li><li>High: <b>tropical rainforest</b> (many species, balanced numbers). Low: <b>monoculture</b> crop field.</li><li>Raises stability, productivity and resilience.</li></ul></div>
            <div class="side"><h4>Ecosystem diversity</h4>
              <p>The <b>variety of ecosystems</b> in a region or on the planet, including their interactions and processes.</p>
              <ul><li>Forests, deserts, wetlands, grasslands, freshwater, marine.</li><li>Each holds unique species and roles.</li><li>More ecosystem types = more services: <b>carbon storage, water filtration, climate regulation</b>.</li></ul></div>
          </div>
          <table class="tbl"><thead><tr><th>Level</th><th>Focus</th><th>Example</th></tr></thead><tbody>
            <tr><td>Genetic</td><td>Variation within a species</td><td>Types of wheat</td></tr>
            <tr><td>Species</td><td>Variety of species in a region</td><td>Tigers, elephants and others in one forest</td></tr>
            <tr><td>Ecosystem</td><td>Range of habitats</td><td>Coral reefs, rainforests</td></tr>
          </tbody></table>
          <p>The levels are <b>interconnected</b>: loss at one weakens the others, so conservation must cover all three.</p>
          <div class="note exam">Long answer on biodiversity and its levels: (1) definition (biological diversity, from microbes to large mammals, at gene, species and ecosystem level); (2) why it matters (balance, pollination, nutrient cycling, climate regulation) and why engineers study it; (3) genetic diversity with dog breeds, rice and wheat, and why it matters; (4) species diversity: richness and evenness, rainforest vs monoculture; (5) ecosystem diversity and its services; (6) the comparison table and the point that the three levels are interconnected.</div>
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
          <p>The natural equilibrium among organisms and their environment, kept by:</p>
          <ul>
            <li><b>Food chains and webs</b>: energy from producers to consumers and decomposers.</li>
            <li><b>Pollination</b> by bees and insects for plant reproduction and food.</li>
            <li><b>Decomposition</b> returning nutrients to soil.</li>
            <li><b>Natural water purification</b> by wetlands and microbes.</li>
          </ul>
          <h3>Economic value</h3>
          <ul>
            <li><b>Agriculture and livestock</b>: biodiversity is their foundation, giving the variety of crops, breeds and genetic resources used for food and farming.</li>
            <li><b>Pharmaceuticals</b>: many <b>life-saving drugs</b> come from plants, fungi and marine organisms in diverse ecosystems.</li>
            <li><b>Bioproducts</b>: natural dyes, oils, enzymes and biodegradable materials are developed from living things.</li>
            <li><b>Ecotourism</b>: a growing industry that depends on rich natural environments and wildlife to attract visitors.</li>
          </ul>
          <p>Protecting biodiversity keeps these benefits flowing to livelihoods, local communities and national economies.</p>
        ` },
        { title: 'Science, culture, ethics', html: `
          <h3>Scientific and educational</h3>
          <ul>
            <li><b>Biotechnology</b> uses organisms to make <b>antibiotics, vaccines and enzymes</b>.</li>
            <li><b>Genetic engineering</b> uses genetic diversity for better crops, disease-resistant plants and new medicines.</li>
            <li>Discovery of new genes, biochemical pathways and adaptive traits.</li>
            <li>A <b>living laboratory</b> for teaching from school to university.</li>
          </ul>
          <h3>Cultural and ethical</h3>
          <ul>
            <li>Religious traditions treat animals, plants and natural places as <b>sacred</b>.</li>
            <li><b>Indigenous knowledge systems</b> manage forests, rivers and species sustainably through traditional practices and <b>taboos</b>.</li>
            <li>Ethics: protect all life, including life with no use to us. Preserving biodiversity is a <b>moral act</b> that respects other species' right to exist.</li>
          </ul>
        ` },
        { title: 'Climate regulation', html: `
          <table class="tbl"><thead><tr><th>Part of nature</th><th>Climate role</th></tr></thead><tbody>
            <tr><td>Forests</td><td><b>Carbon sinks</b>: absorb CO<sub>2</sub>, reduce global warming</td></tr>
            <tr><td>Wetlands</td><td><b>Flood control</b>: soak up rain and release it slowly, cutting flash floods</td></tr>
            <tr><td>Oceans</td><td>Absorb CO<sub>2</sub>, store heat, balance atmospheric gases</td></tr>
            <tr><td>Phytoplankton</td><td>Large share of <b>oxygen production</b> and carbon cycling</td></tr>
          </tbody></table>
          <p>Protecting biodiversity keeps the natural systems that buffer us against climate extremes.</p>
          <div class="note exam">Long answer on the significance of biodiversity: take the five values as headings in this order: (1) ecological balance (food webs, pollination, decomposition, water purification); (2) economic value (agriculture, medicines, bioproducts, ecotourism); (3) scientific and educational value (biotechnology, genetic engineering, living laboratory); (4) cultural and ethical value (sacred species, indigenous knowledge, moral duty); (5) climate regulation (forests, wetlands, oceans, phytoplankton). Give one example under each.</div>
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
          <p class="lead">A <b>biodiversity hotspot</b> is a region with exceptionally high biodiversity that is also <b>under serious threat</b>.</p>
          <div class="kv">
            <div><span>Criterion 1</span>High <b>species richness</b> (many species)</div>
            <div><span>Criterion 2</span>High <b>endemism</b> (many species found nowhere else)</div>
            <div><span>Plus</span>Significant threats: deforestation, pollution, habitat destruction, climate change</div>
          </div>
          <p>Conservation focuses on hotspots because they hold <b>irreplaceable</b> life at high risk.</p>
          <figure data-fig="m2-hotspot-map"></figure>
          <table class="tbl"><thead><tr><th>Hotspot</th><th>Key fact</th></tr></thead><tbody>
            <tr><td><b>Amazon Rainforest</b> (South America)</td><td>Largest tropical forest; more plant and animal species than any other land ecosystem</td></tr>
            <tr><td><b>Congo Basin</b> (Central Africa)</td><td><b>Second-largest</b> tropical rainforest; gorillas and forest elephants</td></tr>
            <tr><td><b>Coral Triangle</b> (Southeast Asia, Pacific)</td><td><b>Highest marine biodiversity</b>, especially corals and fish</td></tr>
          </tbody></table>
          <p>They provide carbon storage, water regulation and food security, but face deforestation, mining, overfishing and climate change.</p>
        ` },
        { title: 'India\'s hotspots', html: `
          <p class="lead">India has <b>four of the world's 36</b> biodiversity hotspots.</p>
          <table class="tbl"><thead><tr><th>Hotspot</th><th>Known for</th></tr></thead><tbody>
            <tr><td><b>Himalayas</b></td><td>High-altitude ecosystems; <b>snow leopard, red panda</b>, thousands of endemic plants</td></tr>
            <tr><td><b>Western Ghats</b></td><td>One of the <b>oldest mountain ranges</b>; endemism in <b>amphibians, reptiles, flowering plants</b></td></tr>
            <tr><td><b>Indo-Burma</b></td><td>Northeastern India; species diversity and <b>tribal knowledge systems</b></td></tr>
            <tr><td><b>Sundaland</b></td><td>Includes the <b>Nicobar Islands</b>; rainforests and coral reefs</td></tr>
          </tbody></table>
          <p>Threats: deforestation, infrastructure development, climate change.</p>
          <div class="mnemonic"><p>"<b>H</b>ot <b>W</b>ater <b>I</b>n <b>S</b>ummer": Himalayas, Western Ghats, Indo-Burma, Sundaland.</p></div>
          <div class="note exam">Long answer on hotspots: (1) definition; (2) the criteria: high species richness, high endemism and serious threat; (3) why conservation focuses on them; (4) three global examples with one fact each; (5) India's four of 36 hotspots with what each is known for; (6) threats and their services (carbon storage, water regulation, food security).</div>
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
          <table class="tbl"><thead><tr><th>Threat</th><th>How it harms</th></tr></thead><tbody>
            <tr><td><b>1. Habitat loss and fragmentation</b></td><td>One of the biggest threats. Urbanisation clears forests, wetlands, grasslands; farming takes habitat; <b>highways, railways and dams</b> split ecosystems into isolated patches. Disrupts migration, breeding and access to food and water.</td></tr>
            <tr><td><b>2. Pollution</b></td><td>Air pollution causes <b>acid rain</b> (forests, aquatic life); water pollution from industry and sewage; soil pollution from pesticides and heavy metals; <b>eutrophication</b> from fertilizer runoff (algal blooms, oxygen depletion).</td></tr>
            <tr><td><b>3. Climate change</b></td><td>Rising temperatures shift survival and distribution; changed rainfall brings droughts and floods; <b>ocean acidification</b> (excess CO<sub>2</sub>) harms corals and shellfish.</td></tr>
            <tr><td><b>4. Overexploitation</b></td><td>Using resources faster than they regenerate: <b>overfishing</b>, <b>logging</b>, <b>poaching</b> (ivory, fur, horns), unsustainable farming and mining.</td></tr>
            <tr><td><b>5. Invasive species</b></td><td>Non-native species that spread fast and outcompete natives. <b>Water hyacinth</b> clogs rivers and lakes (water flow, oxygen); <b>Lantana camara</b> invades forests and grasslands.</td></tr>
            <tr><td><b>6. Industrialisation and infrastructure</b></td><td>Dams, highways and ports clear forests, wetlands and coasts and fragment habitats. Needs sustainable planning and <b>EIA</b>.</td></tr>
          </tbody></table>
        ` },
        { title: 'Case studies', html: `
          <div class="note example"><p><b>Silent Valley National Park, Kerala</b>: part of the Western Ghats. Home to the <b>lion-tailed macaque</b>, <b>Malabar civet</b> and endemic orchids. A hydroelectric project in the 1970s–80s threatened to flood it. A campaign by scientists, activists and locals stopped it in <b>1983</b>, and Silent Valley became a <b>national park</b>.</p></div>
          <div class="note example"><p><b>Great Barrier Reef, Australia</b>: the <b>largest coral reef system</b>, a UNESCO World Heritage Site. Rising ocean temperatures cause mass <b>coral bleaching</b>: heat-stressed corals expel their algae (<b>zooxanthellae</b>), which give them colour and nutrients. Repeated bleaching kills coral and collapses the reef.</p></div>
          <div class="note example"><p><b>The Dodo</b>: a flightless bird of <b>Mauritius</b>, extinct in the <b>late 1600s</b>, a few decades after humans arrived. Causes: hunting, habitat destruction, and introduced <b>rats, pigs and monkeys</b> eating its eggs. With no natural predators before humans, it had no instinct to flee.</p></div>
        ` },
        { title: 'Engineers and technology', html: `
          <ul>
            <li><b>Sustainable design and construction</b>: less waste, energy use and land degradation.</li>
            <li><b>Environmental Impact Assessment (EIA)</b>: checks a project's effect on biodiversity before construction, finds sensitive habitats and endangered species, and proposes mitigation.</li>
            <li><b>Eco-engineering</b>: blends engineering with ecology. Examples: <b>green roofs, wildlife crossings, natural wastewater treatment</b>.</li>
          </ul>
          <table class="tbl"><thead><tr><th>Tool</th><th>Use in monitoring</th></tr></thead><tbody>
            <tr><td><b>GIS and remote sensing</b></td><td>Map ecosystems, monitor deforestation, detect habitat change</td></tr>
            <tr><td><b>Drones</b></td><td>Wildlife tracking in remote areas</td></tr>
            <tr><td><b>AI</b></td><td>Identify species from images and movement data, detect threats, automate monitoring</td></tr>
            <tr><td><b>Bioinformatics</b></td><td>Manage genetic and biodiversity datasets</td></tr>
          </tbody></table>
          <p>B.Tech students and professionals: adopt sustainable practices (energy efficiency, waste reduction, responsible materials), innovate in green tech (renewables, eco-friendly materials, smart monitoring), and support conservation policies and regulations through ethical engineering.</p>
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
          <p class="lead">Species are the building blocks of ecosystems. <b>Species interaction</b> is the relationship and effect organisms have on one another: <b>direct or indirect, short- or long-term</b>.</p>
          <ul>
            <li>Includes cooperation, competition, feeding and dependency.</li>
            <li>Plants rely on pollinators and dispersers; herbivores eat plants; predators hunt; fungi and bacteria recycle nutrients.</li>
            <li>Losing even one species can disrupt stability; biodiverse ecosystems are more resilient.</li>
          </ul>
          <h3>Why engineers study it</h3>
          <ul>
            <li>Shows ecosystem health and function.</li>
            <li><b>EIAs</b> depend on knowing local species and their relationships.</li>
            <li>Identifying key species and networks reduces harm; <b>conservation engineering</b> restores habitats.</li>
            <li>Supports long-term sustainable development goals.</li>
          </ul>
        ` },
        { title: 'Five types', html: `
          <div data-viz="species-interactions"></div>
          <table class="tbl"><thead><tr><th>Type</th><th>Effect</th><th>Examples</th></tr></thead><tbody>
            <tr><td><b>Mutualism</b></td><td>Both <b>benefit</b> (+/+), neither harmed</td><td>Bees and flowers (nectar / pollination); <b>mycorrhizal fungi</b> and roots (nutrients / carbohydrates)</td></tr>
            <tr><td><b>Commensalism</b></td><td>One benefits, other <b>unaffected</b> (+/0)</td><td><b>Barnacles on whales</b>; <b>cattle egrets</b> eating insects stirred up by cattle</td></tr>
            <tr><td><b>Parasitism</b></td><td>Parasite benefits, <b>host harmed</b> (+/−)</td><td><b>Ticks</b> on mammals; <b>parasitic wasps</b> laying eggs in insects</td></tr>
            <tr><td><b>Predation</b></td><td>Predator <b>kills and eats</b> prey</td><td>Tiger and deer; hawk and mouse</td></tr>
            <tr><td><b>Competition</b></td><td>Species fight for the same <b>limited resources</b></td><td>Plants competing for <b>sunlight</b> in dense forest</td></tr>
          </tbody></table>
          <ul>
            <li>Mutualism drives nutrient cycling, pollination and productivity.</li>
            <li>Commensalism often gives shelter, transport or feeding advantages.</li>
            <li>Parasites can be <b>ectoparasites</b> (outside) or <b>endoparasites</b> (inside).</li>
            <li>Predators have sharp teeth, claws, keen senses; predation regulates population size.</li>
            <li>Competition can be <b>intraspecific</b> (same species) or <b>interspecific</b> (different species); one species often dominates and the other declines.</li>
          </ul>
        ` },
        { title: 'How it links to extinction', html: `
          <p class="lead">Interactions such as predation, mutualism and competition <b>shape ecosystem structure</b>.</p>
          <ul>
            <li>Break them and species lose food, pollination or shelter, so populations decline toward endangerment or extinction.</li>
            <li>Example: losing <b>pollinators</b> threatens plants, which cascades to herbivores and predators.</li>
            <li>Ecosystems run on <b>feedback loops</b>: one decline can unbalance others.</li>
          </ul>
          <p>Conservation is a societal responsibility: engineers, scientists, policymakers and communities working together.</p>
          <div class="note exam">Long answer on species interactions: (1) definition (direct or indirect, short- or long-term effects of organisms on each other); (2) why they matter for ecosystems and for engineers (EIA, conservation engineering); (3) the five types, each with its +/− effect and the source's examples; (4) sub-types: ecto- and endoparasites, intra- and interspecific competition; (5) how broken interactions lead to endangerment and extinction, with the pollinator example.</div>
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
          <p class="lead">Conservation status shows <b>how likely a species is to survive in the wild</b>, judged by population size, habitat condition and extinction risk. Four categories: <b>extinct, endangered, endemic, rare</b>.</p>
          <p>An <b>extinct</b> species has <b>no living individuals</b> anywhere, in the wild or in captivity. Extinction is natural but greatly <b>accelerated by humans</b>; the species' role is lost forever.</p>
          <figure data-fig="m2-mass-extinction"></figure>
          <p><b>Causes</b>: habitat loss (deforestation, urbanisation, agriculture), climate change, hunting and poaching, invasive species. They act together and push extinction beyond natural rates.</p>
          <table class="tbl"><thead><tr><th>Species</th><th>Where and why</th></tr></thead><tbody>
            <tr><td><b>Dodo</b></td><td>Mauritius, 1600s; hunting and invasive animals</td></tr>
            <tr><td><b>Passenger pigeon</b></td><td>North America, by the <b>early 1900s</b>; mass hunting, habitat destruction</td></tr>
            <tr><td><b>Indian cheetah</b></td><td>Extinct <b>locally</b> in India; overhunting, habitat loss</td></tr>
          </tbody></table>
          <p><b>Impact</b>: broken food chains, collapse of dependent species, loss of services like <b>pollination, seed dispersal, nutrient cycling</b>, weaker ecosystems.</p>
        ` },
        { title: 'Endangered', html: `
          <p class="lead"><b>Endangered</b> species face a <b>very high risk of extinction</b> in the near future; populations are critically low or falling fast.</p>
          <p>Causes: <b>human encroachment</b> (forests, wetlands, grasslands turned into cities, farms, roads), <b>pollution</b>, <b>habitat fragmentation</b>. Less food, fewer breeding grounds, less shelter.</p>
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
            <li><b>Captive breeding</b>: raise numbers, reintroduce to the wild.</li>
            <li><b>Legal protection</b>: e.g. India's <b>Wildlife Protection Act</b> bans hunting and trade.</li>
            <li>Community involvement and education; anti-poaching laws.</li>
          </ul>
        ` },
        { title: 'Endemic', html: `
          <p class="lead"><b>Endemic</b> species live in <b>only one region</b> and nowhere else; the region can be an island or a continent.</p>
          <ul>
            <li>Evolved in isolation, highly adapted, so <b>very vulnerable</b>: any habitat change can wipe out the whole population.</li>
            <li>Irreplaceable, high conservation value, sensitive indicators of ecosystem health.</li>
            <li><b>Indicators of regional biodiversity</b>; they help identify <b>hotspots</b>.</li>
          </ul>
          <table class="tbl"><thead><tr><th>Indian endemic</th><th>Found only in</th></tr></thead><tbody>
            <tr><td><b>Nilgiri tahr</b> (mountain goat)</td><td>Western Ghats</td></tr>
            <tr><td><b>Lion-tailed macaque</b></td><td>Western Ghats rainforests</td></tr>
            <tr><td><b>Andaman teal</b> (duck)</td><td>Andaman Islands freshwater wetlands</td></tr>
          </tbody></table>
          <p>Threats: local habitat destruction, invasive species, a <b>restricted range</b> (they cannot migrate), natural disasters and climate shifts. Conservation means protecting their specific habitats.</p>
        ` },
        { title: 'Rare', html: `
          <p class="lead"><b>Rare</b> species have <b>small populations or a limited range</b>, but unlike endangered species they are <b>not currently at high extinction risk</b>.</p>
          <p>Their low numbers still make them vulnerable, so they are <b>monitored</b> to stop them becoming endangered.</p>
          <p><b>Causes of rarity</b>: <b>habitat specificity</b>, <b>low reproductive rates</b>, human interference (land-use change, hunting, pollution).</p>
          <table class="tbl"><thead><tr><th>Species</th><th>Fact</th></tr></thead><tbody>
            <tr><td><b>Himalayan quail</b></td><td>Last reliably seen in the <b>19th century</b>; may survive in remote Himalayas</td></tr>
            <tr><td><b>Malabar civet</b></td><td>Once thought extinct; possibly one of India's rarest mammals</td></tr>
            <tr><td><b>Gooty tarantula</b></td><td>Colourful spider in one small forest patch in <b>Andhra Pradesh</b></td></tr>
          </tbody></table>
          <div class="note heads-up"><p>The notes list the Malabar civet as a rare species but also call it critically endangered, which does not fit their own definition of rare. Learn it under both: rare example, critically endangered status.</p></div>
          <h3>Engineers' role</h3>
          <p>Sustainable infrastructure planning, <b>EIAs</b> before construction, eco-friendly design, and solutions like <b>wildlife corridors</b>, green buildings and water-efficient systems.</p>
          <div class="note exam">Long answer on species status: open with what conservation status measures, then take the four categories in order. For each give (1) the definition, (2) causes, (3) examples from India and the world, (4) impact or conservation steps. Finish with the rare vs endangered difference and the engineer's role (EIA, wildlife corridors).</div>
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
