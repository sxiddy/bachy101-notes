CHUNK({
  chunk: 'B',
  module: 'm1',
  topics: [
    {
      id: 'm1-ecosystem-basics',
      title: 'Ecology and ecosystems',
      short: 'Ecosystem basics',
      blurb: 'Ecology and ecosystem defined, the common features, terrestrial and aquatic types, natural vs artificial, structural vs functional aspects, and the levels of ecological organisation.',
      source: 'Lectures W1S4 (pages 1–5) and W1S5 (pages 1–2)',
      tabs: [
        { title: 'Definitions', html: `
          <p class="lead"><b>Ecology</b>: study of organisms in their natural home interacting with their surroundings, living (<b>biotic</b>) and physical (<b>abiotic</b>).</p>
          <p><b>Ecosystem</b>: biotic communities interacting with each other and their non-living environment, <b>exchanging energy and matter</b>. So ecology = <b>study of ecosystems</b>.</p>
          <ul>
            <li>A <b>dynamic complex</b> of organisms and surroundings, with <b>flow of energy</b> and <b>cycling of nutrients</b>.</li>
            <li>The <b>structural and functional unit of ecology</b>.</li>
          </ul>
          <p>Size: <b>oasis in a desert</b> to <b>ocean</b>.</p>
        ` },
        { title: 'Types', html: `
          <p class="lead"><b>Natural</b> vs <b>artificial</b>. Natural → <b>terrestrial</b> (land: forest, grassland, tundra, desert) and <b>aquatic</b> (freshwater, marine).</p>
          <figure data-fig="m1-ecosystem-types-tree"></figure>
          <table class="tbl"><thead><tr><th>Type</th><th>Key points</th></tr></thead><tbody>
            <tr><td>Forest</td><td>Plants, animals, microbes + abiotic factors; <b>maintain Earth's temperature</b>, <b>major carbon sink</b></td></tr>
            <tr><td>Grassland</td><td><b>Grasses and herbs</b>; temperate grassland, <b>savanna</b></td></tr>
            <tr><td>Tundra</td><td><b>No trees</b>; cold or little rain; snowy most of the year; Arctic, <b>mountain tops</b></td></tr>
            <tr><td>Desert</td><td>Very little rain; <b>hot days, cold nights</b>; worldwide</td></tr>
            <tr><td>Freshwater</td><td>Lakes, ponds, rivers, streams, wetlands; <b>no salt</b></td></tr>
            <tr><td>Marine</td><td>Seas, oceans; <b>more salt</b>, <b>greater biodiversity</b></td></tr>
          </tbody></table>
          <div class="vs">
            <div class="side"><h4>Natural</h4><p>Forests, rivers. <b>Self-sustaining</b>.</p></div>
            <div class="side"><h4>Artificial</h4><p>Gardens, aquariums, crop fields. Need <b>human management</b>.</p></div>
          </div>
        ` },
        { title: 'Examples by type', html: `
          <p class="lead">Quiz favourites.</p>
          <table class="tbl"><thead><tr><th>Category</th><th>Type</th><th>Example</th></tr></thead><tbody>
            <tr><td>Terrestrial</td><td>Forest</td><td><b>Amazon rainforest, Sundarbans mangroves</b></td></tr>
            <tr><td>Terrestrial</td><td>Grassland</td><td><b>African savanna, Indian Deccan plateau</b></td></tr>
            <tr><td>Terrestrial</td><td>Desert</td><td><b>Sahara, Thar Desert</b></td></tr>
            <tr><td>Aquatic (fresh)</td><td>Lake / pond</td><td><b>Dal Lake, Chilika Lake</b></td></tr>
            <tr><td>Aquatic (fresh)</td><td>River</td><td><b>Ganga, Brahmaputra</b></td></tr>
            <tr><td>Aquatic (marine)</td><td>Ocean</td><td>Coral reefs, deep-sea ecosystems</td></tr>
            <tr><td>Artificial</td><td>Crop field</td><td>Paddy fields, orchards</td></tr>
          </tbody></table>
        ` },
        { title: 'Structure vs function', html: `
          <div class="vs">
            <div class="side"><h4>Structural</h4><p><b>Arrangement, types and number of species</b>, their life histories, and <b>physical features</b>.</p></div>
            <div class="side"><h4>Functional</h4><p><b>Flow of energy</b> and <b>cycling of nutrients</b>.</p></div>
          </div>
          <div class="note exam"><p>Energy flow or nutrient cycling = functional. Species, numbers, physical features = structural.</p></div>
        ` },
        { title: 'Levels of organisation', html: `
          <ol class="steps">
            <li><b>Organism</b> One living being: structure, function, behaviour.</li>
            <li><b>Population</b> <b>Same species</b> in one area; breeding, competition, cooperation.</li>
            <li><b>Community</b> Several populations in one area; shapes biodiversity.</li>
            <li><b>Ecosystem</b> Communities + <b>non-living environment</b>.</li>
            <li><b>Biosphere</b> <b>Sum of all ecosystems</b> on Earth.</li>
          </ol>
          <figure data-fig="m1-levels-organisation"></figure>
          <div class="note trap"><p>Population = one species. Community = many species. Ecosystem = community + abiotic.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Ecology deals with…', back: 'The study of organisms in their natural home <b>interacting with their surroundings</b> (biotic and abiotic).' },
        { front: 'Ecosystem (W1S4 definition)?', back: 'A group of biotic communities interacting with one another and the non-living environment, <b>exchanging energy and matter</b>.' },
        { front: 'Ecosystem type that is the major carbon sink?', back: '<b>Forest</b>.' },
        { front: 'Treeless ecosystem of cold climates and mountain tops?', back: '<b>Tundra</b>.' },
        { front: 'Difference between freshwater and marine ecosystems?', back: 'Freshwater has <b>no salt</b>; marine has <b>more salt and greater biodiversity</b>.' },
        { front: 'Example of a grassland ecosystem in India?', back: '<b>Indian Deccan plateau</b>.' },
        { front: 'Examples of freshwater lake ecosystems?', back: '<b>Dal Lake, Chilika Lake</b>.' },
        { front: 'Functional aspects of an ecosystem?', back: '<b>Flow of energy</b> and <b>cycling of nutrients</b>.' },
        { front: 'Group of organisms of the same species in one area?', back: '<b>Population</b>.' },
        { front: 'Natural vs artificial ecosystem?', back: 'Natural is <b>self-sustaining</b>; artificial (garden, aquarium) needs <b>human management</b>.' }
      ],
      oneLiners: [
        'Ecology is often defined as the study of ecosystems.',
        'Ecosystem = structural and functional unit of ecology.',
        'Terrestrial: forest, grassland, tundra, desert. Aquatic: freshwater, marine.',
        'Structural = species and physical features; functional = energy flow and nutrient cycling.',
        'Organism → population → community → ecosystem → biosphere.'
      ],
      formulas: []
    },
    {
      id: 'm1-ecosystem-components',
      title: 'Components of an ecosystem',
      short: 'Biotic & abiotic',
      blurb: 'Abiotic factors with the numbers from the notes, and the biotic groups: producers, consumers, decomposers and detritivores, with examples.',
      source: 'Lectures W1S5 (pages 3–5) and energy flow (pages 1–2)',
      tabs: [
        { title: 'Two components', html: `
          <p class="lead"><b>Biotic</b> (living) and <b>abiotic</b> (non-living) components are <b>interdependent</b>.</p>
          <ul>
            <li>Biotic: plants, animals, bacteria, fungi, at different <b>trophic levels</b> (producers, consumers, decomposers).</li>
            <li>Abiotic: temperature, sunlight, water, air, soil; control growth and survival.</li>
            <li>Example: plants need water, sunlight, minerals to grow and make oxygen.</li>
            <li>Disrupt one component → whole system affected (natural events or humans).</li>
            <li>Uses: <b>restoration, agriculture, conservation, urban planning</b>.</li>
          </ul>
        ` },
        { title: 'Abiotic factors', html: `
          <figure data-fig="m1-abiotic-factors"></figure>
          <table class="tbl"><thead><tr><th>Factor</th><th>What it does</th></tr></thead><tbody>
            <tr><td>Light / solar radiation</td><td>Photosynthesis, plant distribution, animal behaviour, migration. <b>Primary energy input</b>: Earth gets <b>~1.7 × 10<sup>17</sup> W</b>, only <b>~0.023%</b> captured</td></tr>
            <tr><td>Temperature</td><td><b>Metabolic rate</b>, reproduction, growth. <b>Q<sub>10</sub> rule</b>: rate doubles per 10 °C rise</td></tr>
            <tr><td>Water</td><td><b>Universal solvent</b>; photosynthesis, transport, waste removal; often limits range</td></tr>
            <tr><td>Soil</td><td>Anchorage, water, nutrients (<b>N, P, K</b>, micronutrients); decides vegetation, microbes</td></tr>
            <tr><td>Air</td><td><b>O<sub>2</sub></b> respiration, <b>CO<sub>2</sub></b> photosynthesis, <b>N<sub>2</sub></b> fixation; climate, weather</td></tr>
            <tr><td>Minerals</td><td>N, P, K for cells and plant productivity; cycled via food chains</td></tr>
            <tr><td>pH, salinity, wind, topography</td><td>Decide which species thrive where</td></tr>
          </tbody></table>
        ` },
        { title: 'Producers and consumers', html: `
          <figure data-fig="m1-biotic-factors"></figure>
          <h3>Producers (autotrophs)</h3>
          <p>Make own food; base of the food chain.</p>
          <div class="vs">
            <div class="side"><h4>Photoautotrophs</h4><p><b>Sunlight</b>. Grasses, trees, algae, <b>phytoplankton</b>, <b>cyanobacteria</b>.</p></div>
            <div class="side"><h4>Chemoautotrophs</h4><p><b>Chemical energy</b>. Deep-sea <b>hydrothermal vent bacteria</b>.</p></div>
          </div>
          <h3>Consumers (heterotrophs)</h3>
          <p>Eat others; by habit: herbivores, carnivores, omnivores, parasites.</p>
          <table class="tbl"><thead><tr><th>Group</th><th>Eats</th><th>Examples</th></tr></thead><tbody>
            <tr><td>Primary (herbivores)</td><td>Producers</td><td>Deer, rabbit, grasshopper, <b>zooplankton</b>, cattle</td></tr>
            <tr><td>Secondary (carnivores)</td><td>Herbivores</td><td>Frogs, foxes, small fish, spiders</td></tr>
            <tr><td>Tertiary (top carnivores)</td><td>Secondary consumers</td><td>Eagles, tigers, sharks, orcas</td></tr>
            <tr><td>Omnivores</td><td>Plants and animals</td><td>Humans, bears, crows, pigs</td></tr>
          </tbody></table>
          <p>Control populations by <b>predation, grazing</b>.</p>
        ` },
        { title: 'Decomposers, detritivores', html: `
          <div class="vs">
            <div class="side"><h4>Decomposers (saprotrophs)</h4><p>Break dead matter into <b>inorganic nutrients</b> with <b>extracellular enzymes</b>.</p><p>Bacteria: <b>Bacillus, Pseudomonas</b>. Fungi: <b>Aspergillus, Rhizopus</b>.</p></div>
            <div class="side"><h4>Detritivores</h4><p><b>Ingest</b> dead matter fragments.</p><p><b>Earthworms, millipedes, woodlice, dung beetles</b>.</p></div>
          </div>
          <p>Decomposers return nutrients, keep soil <b>clean and fertile</b>.</p>
          <div class="note trap"><p>Earthworms eat dead matter = detritivores. Bacteria, fungi digest outside the body = decomposers.</p></div>
          <div class="note exam"><p>Long answer: interdependence (plant example); each abiotic factor; producers, consumers, decomposers, detritivores with examples; roles; uses.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Solar power received by Earth and fraction captured by photosynthesis?', back: '<b>~1.7 × 10<sup>17</sup> W</b>; only <b>~0.023%</b> captured.' },
        { front: 'Q<sub>10</sub> rule?', back: 'Metabolic rate <b>doubles</b> for every <b>10 °C</b> rise.' },
        { front: 'Producers using chemical energy instead of light?', back: '<b>Chemoautotrophs</b>, e.g. deep-sea hydrothermal vent bacteria.' },
        { front: 'Two examples of photoautotrophs from the sea?', back: '<b>Phytoplankton</b> and <b>cyanobacteria</b> (also algae).' },
        { front: 'Zooplankton is which consumer level?', back: '<b>Primary consumer</b> (herbivore).' },
        { front: 'Four omnivores named in the notes?', back: '<b>Humans, bears, crows, pigs</b>.' },
        { front: 'Two decomposer bacteria and two decomposer fungi?', back: 'Bacteria: <b>Bacillus, Pseudomonas</b>. Fungi: <b>Aspergillus, Rhizopus</b>.' },
        { front: 'How do detritivores differ from decomposers?', back: 'Detritivores <b>ingest</b> fragments; decomposers secrete <b>extracellular enzymes</b>.' },
        { front: 'Nutrients soil supplies?', back: '<b>N, P, K</b> and micronutrients.' }
      ],
      oneLiners: [
        'Biotic and abiotic components are interdependent.',
        'Sun gives ~1.7 × 10¹⁷ W; photosynthesis captures ~0.023%.',
        'Producers = autotrophs (photo- or chemo-); consumers = heterotrophs.',
        'Tertiary consumers: eagles, tigers, sharks, orcas.',
        'Decomposers = saprotrophs (Bacillus, Pseudomonas, Aspergillus, Rhizopus).',
        'Detritivores = earthworms, millipedes, woodlice, dung beetles.'
      ],
      formulas: []
    },
    {
      id: 'm1-food-chains',
      title: 'Trophic levels, food chains and food webs',
      short: 'Food chains & webs',
      blurb: 'Trophic levels, grazing and detritus food chains, why chains stay short, food webs, keystone species and the Yellowstone wolves.',
      source: 'Lecture W1S5 (pages 5–7) and energy flow (pages 4–5)',
      tabs: [
        { title: 'Trophic levels', html: `
          <p class="lead"><b>Trophic level</b>: a step in a food chain, based on how an organism gets energy.</p>
          <table class="tbl"><thead><tr><th>Level</th><th>Who</th><th>Examples</th></tr></thead><tbody>
            <tr><td>T1</td><td>Producers (photosynthesis)</td><td>Green plants, algae</td></tr>
            <tr><td>T2</td><td>Primary consumers (herbivores)</td><td>Deer, rabbits, grasshoppers</td></tr>
            <tr><td>T3</td><td>Secondary consumers (carnivores or omnivores)</td><td>Frogs, foxes, small birds</td></tr>
            <tr><td>T4</td><td>Tertiary consumers (top predators)</td><td>Hawks, lions</td></tr>
          </tbody></table>
          <ul>
            <li>Each step: <b>~90% lost as heat</b>, <b>10% passes on</b> → <b>limits chain length</b>.</li>
          </ul>
        ` },
        { title: 'Food chains', html: `
          <p class="lead">Food chain: <b>linear</b> path of energy from producer to top predator.</p>
          <div class="vs">
            <div class="side"><h4>Grazing food chain</h4>
              <p>Starts from <b>living green plants</b>.</p>
              <div class="eq">Sun → Grass (T1) → Grasshopper (T2) → Frog (T3) → Snake (T4) → Eagle (T5)</div>
              <ul><li><b>Max 4–5 links</b> (10% rule).</li></ul></div>
            <div class="side"><h4>Detritus food chain</h4>
              <p>Starts from <b>dead organic matter</b>.</p>
              <div class="eq">Dead matter → Detritivores → Decomposers → Inorganic nutrients → Soil → Producers</div>
              <ul><li><b>Dominant</b> in forests, wetlands: <b>80–90%</b> of energy.</li><li>Returns nutrients to soil.</li><li><b>No direct sunlight</b> needed; works in dark soil.</li></ul></div>
          </div>
        ` },
        { title: 'Food webs', html: `
          <p class="lead">Food web: <b>network of food chains</b>.</p>
          <figure data-fig="m1-food-web"></figure>
          <ul>
            <li><b>More realistic</b>: most animals eat several prey.</li>
            <li>One organism can be at <b>more than one trophic level</b> (omnivore).</li>
            <li><b>Stability</b>: predators switch prey; <b>redundancy</b>: many energy routes.</li>
            <li>Losing a <b>keystone species</b> (<b>sea otter, wolf</b>) can collapse the web → <b>trophic cascades</b>, extinctions.</li>
            <li>Shows <b>resilience and vulnerability</b>.</li>
          </ul>
        ` },
        { title: 'Yellowstone cascade', html: `
          <p class="lead">Classic trophic cascade: <b>wolves reintroduced to Yellowstone, 1995</b>.</p>
          <ol class="steps">
            <li><b>Wolves return</b> Prey on deer.</li>
            <li><b>Deer move</b> Leave riverbanks; less grazing.</li>
            <li><b>Vegetation recovers</b> Plants regrow on banks.</li>
            <li><b>Rivers change</b> Banks stabilise, less erosion, rivers change course; biodiversity rises.</li>
          </ol>
          <p>Even <b>physical geography</b> changed.</p>
          <div class="note example"><p>Sharks: remove sick, weak fish → healthy fish populations, reefs.</p></div>
          <div class="note exam"><p>Exam: "trophic cascade" + Yellowstone.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Roughly how much energy passes to the next trophic level?', back: 'About <b>10%</b>; about 90% is lost as heat.' },
        { front: 'Food chain example in the notes?', back: '<b>Grass → Grasshopper → Frog → Snake → Eagle</b>.' },
        { front: 'Maximum links in a grazing food chain and why?', back: '<b>4–5</b>, because of the <b>10% energy transfer rule</b>.' },
        { front: 'Share of energy through the detritus chain in forests and wetlands?', back: '<b>80–90%</b>.' },
        { front: 'Does the detritus food chain need sunlight directly?', back: '<b>No</b>; it works in dark soil layers.' },
        { front: 'Two keystone species named in the notes?', back: '<b>Sea otter</b> and <b>wolf</b>.' },
        { front: 'Year wolves were reintroduced to Yellowstone?', back: '<b>1995</b>.' },
        { front: 'Why are food webs more stable than chains?', back: 'Predators can <b>switch to alternative prey</b>; energy has several routes.' }
      ],
      oneLiners: [
        'Food chain = linear; food web = network of chains.',
        'Grazing chain starts with living plants; detritus chain with dead matter.',
        'Detritus chain carries 80–90% of energy in forests.',
        'An omnivore can occupy more than one trophic level.',
        'Losing a keystone species can collapse a web (trophic cascade).',
        'Yellowstone 1995: wolves → deer leave banks → plants recover → rivers change course.'
      ],
      formulas: []
    },
    {
      id: 'm1-ecological-pyramids',
      title: 'Ecological pyramids',
      short: 'Ecological pyramids',
      blurb: 'Pyramids of numbers, biomass and energy: their shapes in different ecosystems, units, the reasons behind inverted pyramids, and their drawbacks.',
      source: 'Lecture W1S5 (pages 7–8) and energy flow (pages 5–7)',
      tabs: [
        { title: 'What they are', html: `
          <p class="lead">Shows trophic levels by <b>numbers, biomass or energy</b>. <b>Charles Elton (1927)</b>: <b>Eltonian pyramid</b>.</p>
          <figure data-fig="m1-ecological-pyramid"></figure>
          <p>Shows efficiency, imbalances, food-web sustainability.</p>
          <div class="vs">
            <div class="side"><h4>Numbers</h4><p>Count. Usually upright, with exceptions.</p></div>
            <div class="side"><h4>Biomass</h4><p>Total mass. Usually falls upward.</p></div>
            <div class="side"><h4>Energy</h4><p><b>Always upright</b>. Most accurate.</p></div>
          </div>
        ` },
        { title: 'Pyramid of numbers', html: `
          <p class="lead">Individuals per level; shape depends on producer size.</p>
          <table class="tbl"><thead><tr><th>Shape</th><th>Ecosystem</th><th>Why</th></tr></thead><tbody>
            <tr><td><b>Upright</b></td><td>Grassland / pond</td><td>Millions of grasses → thousands of insects → hundreds of frogs → tens of birds</td></tr>
            <tr><td><b>Upright</b></td><td>Aquatic (pond)</td><td>Phytoplankton → zooplankton → small fish → large fish</td></tr>
            <tr><td><b>Inverted</b></td><td>Tree ecosystem</td><td><b>One large tree</b> → many caterpillars → more parasites (wasps, mites)</td></tr>
            <tr><td><b>Spindle-shaped</b></td><td>Forest</td><td>Few large trees, many insects, fewer carnivores</td></tr>
          </tbody></table>
          <div class="note trap"><p>Drawback: ignores size (one tree vs millions of bacteria).</p></div>
        ` },
        { title: 'Pyramid of biomass', html: `
          <p class="lead">Total <b>dry weight</b> per level, in <b>g/m² or kg/m²</b>.</p>
          <table class="tbl"><thead><tr><th>Shape</th><th>Ecosystem</th><th>Why</th></tr></thead><tbody>
            <tr><td><b>Upright</b></td><td>Terrestrial (forest)</td><td>Big plant biomass → less herbivore → less carnivore</td></tr>
            <tr><td><b>Inverted</b></td><td>Marine / ocean</td><td>Low phytoplankton biomass (turn over in <b>hours</b>) → more zooplankton</td></tr>
          </tbody></table>
          <div class="note trap"><p>Drawback: shows standing stock, not the <b>rate</b> of production.</p></div>
        ` },
        { title: 'Pyramid of energy', html: `
          <p class="lead">Energy per level, in <b>kJ/m²/yr or kcal/m²/yr</b>. <b>Always upright</b>: energy always falls going up.</p>
          <p><b>Most accurate</b>: counts flow over time, shows energy degradation. Based on <b>Lindemann's 10% law</b>.</p>
          <table class="tbl"><thead><tr><th>Level</th><th>Energy</th><th>% of original</th></tr></thead><tbody>
            <tr><td>Producers (T1)</td><td><b>10,000 kJ</b></td><td>100% (enters by photosynthesis)</td></tr>
            <tr><td>Primary consumers (T2)</td><td><b>1,000 kJ</b></td><td>10%</td></tr>
            <tr><td>Secondary consumers (T3)</td><td><b>100 kJ</b></td><td>1%</td></tr>
            <tr><td>Tertiary consumers (T4)</td><td><b>10 kJ</b></td><td>0.1%</td></tr>
          </tbody></table>
          <div class="note trap"><p>All pyramids: a <b>snapshot in time</b> (ignore seasons) and leave out <b>decomposers and detritivores</b>.</p></div>
          <div class="note exam"><p>Long answer: Elton 1927; three pyramids with shapes, units, examples; drawbacks.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Who proposed ecological pyramids and when?', back: '<b>Charles Elton, 1927</b> (Eltonian pyramid).' },
        { front: 'Which pyramid is always upright?', back: 'The <b>pyramid of energy</b>.' },
        { front: 'Pyramid of numbers for a single tree?', back: '<b>Inverted</b>: one tree → many caterpillars → more parasites.' },
        { front: 'Shape of the pyramid of numbers in a forest?', back: '<b>Spindle-shaped</b>.' },
        { front: 'Why is the marine biomass pyramid inverted?', back: 'Phytoplankton turn over in <b>hours</b>, so their standing biomass is low.' },
        { front: 'Units of biomass and energy pyramids?', back: 'Biomass: <b>g/m² or kg/m²</b>. Energy: <b>kJ/m²/yr or kcal/m²/yr</b>.' },
        { front: 'If producers hold 10,000 kJ, how much reaches tertiary consumers?', back: '<b>10 kJ</b> (0.1%).' },
        { front: 'Drawback of the pyramid of numbers?', back: 'Ignores the <b>size</b> of organisms.' }
      ],
      oneLiners: [
        'Elton (1927): numbers, biomass, energy pyramids.',
        'Numbers can be upright, inverted (tree) or spindle (forest).',
        'Biomass inverted in oceans because phytoplankton turn over fast.',
        'Energy pyramid is always upright and the most accurate.',
        '10,000 → 1,000 → 100 → 10 kJ.',
        'Pyramids are snapshots and leave out decomposers.'
      ],
      formulas: []
    },
    {
      id: 'm1-energy-flow',
      title: 'Energy flow and the 10% law',
      short: 'Energy flow',
      blurb: 'Photosynthesis as the energy gateway, GPP vs NPP, chemosynthesis, the two laws of thermodynamics in ecosystems, Lindemann\'s 10% law and where the other 90% goes.',
      source: 'Energy flow lecture, pages 2–9',
      tabs: [
        { title: 'Photosynthesis', html: `
          <p class="lead">All energy comes from the <b>Sun</b>, entering via <b>producers</b> (photosynthesis).</p>
          <div class="eq" data-label="Photosynthesis">6CO<sub>2</sub> + 6H<sub>2</sub>O + light energy → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub></div>
          <ul>
            <li>CO<sub>2</sub> via <b>stomata</b>.</li>
            <li>H<sub>2</sub>O from roots via <b>xylem</b>.</li>
            <li>Light absorbed by <b>chlorophyll</b> in chloroplasts.</li>
            <li><b>Glucose</b> stores energy as chemical bonds.</li>
            <li>O<sub>2</sub> by-product, used in consumers' respiration.</li>
          </ul>
        ` },
        { title: 'GPP, NPP, chemosynthesis', html: `
          <table class="tbl"><thead><tr><th>Term</th><th>Meaning</th><th>Global value</th></tr></thead><tbody>
            <tr><td><b>GPP</b> (gross primary productivity)</td><td>Total energy fixed by photosynthesis per area per time</td><td><b>~120 Pg C/year</b></td></tr>
            <tr><td><b>R</b> (respiration)</td><td>Used by producer for own metabolism</td><td>~60 Pg C/year</td></tr>
            <tr><td><b>NPP</b> (net primary productivity)</td><td>Left for the food chain</td><td><b>~60 Pg C/year</b></td></tr>
          </tbody></table>
          <p>Pg = <b>petagram</b> of carbon.</p>
          <div class="eq">NPP = GPP − R</div>
          <p>NPP sets <b>carrying capacity</b>. Highest: <b>tropical rainforests (~2,000 g/m²/yr)</b>. Lowest: <b>deserts (~100 g/m²/yr)</b>.</p>
          <h3>Chemosynthesis</h3>
          <p>At deep-sea <b>hydrothermal vents and cold seeps</b>, chemoautotrophs <b>oxidise</b> H<sub>2</sub>S, NH<sub>4</sub><sup>+</sup>, Fe<sup>2+</sup> to fix CO<sub>2</sub>, no sunlight needed.</p>
        ` },
        { title: 'Laws of thermodynamics', html: `
          <div class="vs">
            <div class="side"><h4>First law: conservation</h4>
              <p>Energy is neither <b>created nor destroyed</b>, only transformed.</p>
              <ul><li>Solar → chemical (glucose).</li><li>Food → kinetic + heat + growth.</li></ul></div>
            <div class="side"><h4>Second law: entropy</h4>
              <p>Every transformation <b>loses some heat</b>, raising entropy.</p>
              <ul><li>So energy flows <b>one way</b>: sun → producers → consumers.</li><li>So <b>matter must cycle</b>; energy cannot.</li><li>So ecosystems need <b>constant solar input</b>.</li></ul></div>
          </div>
          <div class="note exam"><p>"Why is energy flow unidirectional?" Second law: heat lost can't be reused.</p></div>
        ` },
        { title: 'The 10% law', html: `
          <p class="lead"><b>R.L. Lindemann (1942)</b>: only ~<b>10%</b> passes to the next level; <b>90% is lost</b>.</p>
          <table class="tbl"><thead><tr><th>Where it goes</th><th>Share of energy consumed</th><th>Why</th></tr></thead><tbody>
            <tr><td><b>Respiration</b> (largest)</td><td><b>~60%</b></td><td>Movement, growth, reproduction; metabolic heat</td></tr>
            <tr><td>Heat from metabolism</td><td>~15–20%</td><td>Unusable (second law)</td></tr>
            <tr><td>Undigested matter</td><td>~10%</td><td>Bones, cellulose, chitin → faeces → decomposers</td></tr>
            <tr><td>Inefficient assimilation</td><td>~5–10%</td><td>Not all food absorbed</td></tr>
            <tr><td><b>Available to next level</b></td><td><b>~10%</b></td><td>Stored in body tissue</td></tr>
          </tbody></table>
          <div data-viz="energy-10pct"></div>
          <div class="note heads-up"><p>Notes spell it "Lindemann"; usually Raymond Lindeman (1942 paper). Either is fine.</p></div>
        ` },
        { title: 'Why chains are short', html: `
          <ul>
            <li><b>Short</b> chains are more efficient.</li>
            <li>T1 → T3 = 10% of 10% = <b>1%</b>.</li>
            <li>Few ecosystems exceed <b>4–5 trophic levels</b>.</li>
            <li>Humans: plants give <b>10×</b> the energy of herbivores, <b>100×</b> that of carnivores.</li>
          </ul>
          <div class="worked">
            <div class="given"><p>Producers fix 10,000 kJ. How much reaches T4?</p></div>
            <div class="solve"><p>10,000 → 1,000 (T2) → 100 (T3) → 10 kJ (T4).</p></div>
            <div class="result"><p><b>10 kJ</b> = 0.1%.</p></div>
          </div>
        ` },
        { title: 'Key takeaways', html: `
          <p class="lead">"Energy flows in <b>one direction</b>, Sun → producers → consumers, <b>decreasing at each step</b>. Matter <b>cycles continuously</b> and is never lost."</p>
          <p><b>Ecosystem</b>: structural and functional unit of biotic parts interacting with each other and abiotic parts, with <b>flow of energy and cycling of matter</b>. Eight takeaways:</p>
          <ol>
            <li><b>Components.</b> Biotic (producers, consumers, decomposers) + abiotic (light, water, temperature, soil).</li>
            <li><b>Entry point.</b> Producers are the <b>only entry point</b> (photo- or chemosynthesis); <b>NPP = GPP − respiration</b>.</li>
            <li><b>Pathways.</b> Food chains and webs; <b>detritus chains</b> carry <b>80–90%</b> in forests.</li>
            <li><b>Pyramids.</b> Numbers, biomass, energy; <b>energy pyramid always upright</b>.</li>
            <li><b>10% law.</b> ~10% passes on; <b>90%</b> lost as heat, respiration, undigested matter.</li>
            <li><b>Thermodynamics.</b> First law: conserved. Second: degrades to heat → <b>one-way flow</b>, <b>short chains</b>.</li>
            <li><b>Cycles.</b> Carbon (photosynthesis, respiration, decomposition), nitrogen (fixation, nitrification, denitrification).</li>
            <li><b>Applications.</b> Short chains efficient, biomagnification, keystone predators and trophic cascades.</li>
          </ol>
          <div class="note exam"><p>Long answer: definition; photosynthesis equation + inputs; GPP, R, NPP, chemosynthesis; chains and webs; energy pyramid; two laws; 10% law + where 90% goes; 1% example; energy flows, matter cycles.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Equation of photosynthesis?', back: '<b>6CO<sub>2</sub> + 6H<sub>2</sub>O + light → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub></b>.' },
        { front: 'How do CO<sub>2</sub> and water enter a plant?', back: 'CO<sub>2</sub> through <b>stomata</b>; water through roots via <b>xylem</b>.' },
        { front: 'NPP formula?', back: '<b>NPP = GPP − R</b>.' },
        { front: 'Global GPP and NPP?', back: 'GPP <b>~120 Pg C/yr</b>; NPP <b>~60 Pg C/yr</b>.' },
        { front: 'Highest and lowest NPP?', back: 'Tropical rainforest <b>~2,000 g/m²/yr</b>; desert <b>~100 g/m²/yr</b>.' },
        { front: 'Compounds chemoautotrophs oxidise?', back: '<b>H<sub>2</sub>S, NH<sub>4</sub><sup>+</sup>, Fe<sup>2+</sup></b>.' },
        { front: 'Which law explains why energy flow is one-way?', back: 'The <b>second law of thermodynamics</b> (heat loss, entropy).' },
        { front: '10% law: who and when?', back: '<b>R.L. Lindemann, 1942</b>.' },
        { front: 'Largest single energy loss between levels?', back: '<b>Respiration</b>, ~60% of energy consumed.' },
        { front: 'Energy gain from eating plants vs carnivores?', back: 'Plants give <b>100×</b> more energy than carnivores (10× more than herbivores).' }
      ],
      oneLiners: [
        'Producers are the only entry point for energy (photosynthesis or chemosynthesis).',
        'NPP = GPP − R; NPP sets carrying capacity.',
        'First law: energy is transformed, not created or destroyed.',
        'Second law: every transfer loses heat, so energy flows one way and matter must cycle.',
        'Lindemann (1942): ~10% passes on; respiration takes ~60%.',
        'Only 1% of producer energy reaches T3.'
      ],
      formulas: [
        { name: 'Photosynthesis', html: `6CO<sub>2</sub> + 6H<sub>2</sub>O + light energy → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub>`, note: 'Energy enters the ecosystem here.' },
        { name: 'Net primary productivity', html: `NPP = GPP − R`, note: 'R = energy the producer uses in respiration.' },
        { name: '10% law', html: `Energy at level n+1 ≈ 0.1 × energy at level n`, note: '10,000 → 1,000 → 100 → 10 kJ.' }
      ]
    },
    {
      id: 'm1-nutrient-cycles',
      title: 'Biogeochemical cycles and decomposition',
      short: 'Nutrient cycles',
      blurb: 'Why matter recycles, the water, carbon, nitrogen and phosphorus cycles with their steps, organisms and numbers, and how decomposition works.',
      source: 'Lecture W1S5 (pages 8–12) and energy flow (pages 9–11)',
      tabs: [
        { title: 'Nutrient cycling', html: `
          <p class="lead"><b>Matter is recycled</b> (unlike energy) through <b>biogeochemical cycles</b>, driven by energy flow plus geological and biological processes.</p>
          <ul>
            <li>Major: <b>carbon, nitrogen, phosphorus, water</b>.</li>
            <li>Producers absorb → consumers → <b>decomposers</b> return. No decomposers = nutrient-poor.</li>
            <li>Deforestation, pollution → <b>eutrophication, climate change, soil infertility</b>.</li>
            <li>Knowing cycles helps agriculture, waste management, restoration.</li>
          </ul>
          <h3>Water cycle</h3>
          <p>Driven by <b>solar energy and gravity</b>.</p>
          <ol class="steps">
            <li><b>Evaporation</b> From oceans, lakes, soil; plants add <b>transpiration</b>.</li>
            <li><b>Condensation</b> Clouds form.</li>
            <li><b>Precipitation</b> Rain, snow, hail.</li>
            <li><b>Infiltration / runoff</b> Into soil, or rivers → oceans.</li>
          </ol>
          <figure data-fig="m1-water-cycle"></figure>
          <p>Regulates climate, keeps soil moist. Disrupted by deforestation, urbanisation, pollution; climate change alters rainfall.</p>
        ` },
        { title: 'Carbon cycle', html: `
          <p class="lead">Carbon: <b>backbone of all organic molecules</b>; moves between air, organisms, oceans, lithosphere.</p>
          <p>Step through the cycles below; each arrow shows its process.</p>
          <div data-viz="nutrient-cycles"></div>
          <ol class="steps">
            <li><b>Fixation</b> Photosynthesis → glucose, cellulose, starch.</li>
            <li><b>Consumption</b> Along the food chain.</li>
            <li><b>Respiration</b> All organisms release CO<sub>2</sub>.</li>
            <li><b>Decomposition</b> Bacteria, fungi release CO<sub>2</sub> and nutrients.</li>
            <li><b>Combustion</b> Fossil fuels, forests → greenhouse effect, global warming.</li>
            <li><b>Ocean absorption</b> Major <b>carbon sink</b>, ~<b>30%</b> of human CO<sub>2</sub>; causes <b>ocean acidification</b>.</li>
          </ol>
          <div class="eq" data-label="Respiration">C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O + ATP</div>
          <div class="kv">
            <div><span>Pre-industrial CO<sub>2</sub></span><b>~280 ppm</b></div>
            <div><span>2024</span>Over <b>422 ppm</b>, highest in 3 million years</div>
            <div><span>Fossil fuel CO<sub>2</sub></span><b>36 billion tonnes</b>/year</div>
          </div>
        ` },
        { title: 'Nitrogen cycle', html: `
          <p class="lead">N<sub>2</sub> = <b>78%</b> of air but unusable until converted. Builds <b>amino acids, DNA, RNA, chlorophyll, ATP</b>.</p>
          <table class="tbl"><thead><tr><th>Process</th><th>Change</th><th>Done by</th></tr></thead><tbody>
            <tr><td><b>Fixation</b></td><td>N<sub>2</sub> → NH<sub>3</sub></td><td><b>Rhizobium</b> (legume nodules), <b>Azotobacter</b> (free-living), lightning, <b>Haber-Bosch</b></td></tr>
            <tr><td><b>Nitrification 1</b></td><td>NH<sub>3</sub> → NO<sub>2</sub><sup>−</sup></td><td><b>Nitrosomonas</b> (aerobic)</td></tr>
            <tr><td><b>Nitrification 2</b></td><td>NO<sub>2</sub><sup>−</sup> → NO<sub>3</sub><sup>−</sup></td><td><b>Nitrobacter</b></td></tr>
            <tr><td><b>Assimilation</b></td><td>NO<sub>3</sub><sup>−</sup> → organic N</td><td>Plant roots</td></tr>
            <tr><td><b>Ammonification</b></td><td>Organic N → NH<sub>4</sub><sup>+</sup></td><td>Decomposers</td></tr>
            <tr><td><b>Denitrification</b></td><td>NO<sub>3</sub><sup>−</sup> → N<sub>2</sub></td><td><b>Pseudomonas</b> (anaerobic)</td></tr>
          </tbody></table>
          <figure data-fig="m1-nitrogen-cycle"></figure>
          <ul>
            <li>Rhizobium in legumes (peas, beans, lentils) = <b>natural soil fertility</b>.</li>
            <li>Haber-Bosch: <b>~120 million tonnes</b> N/year, feeds <b>~50%</b> of the world.</li>
            <li>Excess fertilizer → <b>eutrophication</b>.</li>
          </ul>
          <div class="mnemonic"><p>Nitro<b>so</b>monas first (ammonia → nitrite), Nitro<b>b</b>acter second (nitrite → nitrate).</p></div>
        ` },
        { title: 'Phosphorus cycle', html: `
          <p class="lead">Phosphorus: <b>no atmospheric phase</b>; lithosphere, hydrosphere, biosphere only.</p>
          <ol class="steps">
            <li><b>Weathering</b> Rocks release phosphate (H<sub>2</sub>PO<sub>4</sub><sup>−</sup>).</li>
            <li><b>Uptake</b> Into <b>ATP, DNA, RNA, phospholipids</b>.</li>
            <li><b>Food chain</b> Consumers eat producers.</li>
            <li><b>Return</b> Decomposers mineralise organic P.</li>
            <li><b>Sediment and uplift</b> Settles in sediments; uplift returns it to land.</li>
          </ol>
          <p>Often the <b>limiting nutrient</b> (esp. freshwater). Excess from <b>detergents and fertilizers</b> → <b>algal blooms</b>.</p>
        ` },
        { title: 'Decomposition', html: `
          <p class="lead">Decomposition: dead matter → simple <b>inorganic</b> compounds; keeps soil fertile.</p>
          <figure data-fig="m1-decomposition-steps"></figure>
          <ol class="steps">
            <li><b>Fragmentation</b> <b>Earthworms</b> break matter up, more surface for microbes.</li>
            <li><b>Leaching</b> Soluble nutrients wash into soil.</li>
            <li><b>Catabolism</b> Microbial enzymes release C, N, P.</li>
          </ol>
          <p>Figure adds <b>humification</b> and <b>mineralization</b>.</p>
          <ul>
            <li>Mainly <b>bacteria and fungi</b>.</li>
            <li>Speed: <b>temperature, moisture, pH, oxygen</b>.</li>
          </ul>
          <div class="note exam"><p>Long answer: why matter cycles; roles of groups; each cycle with steps, organisms, numbers, human disturbance; decomposition; importance.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Two drivers of the water cycle?', back: '<b>Solar energy and gravity</b>.' },
        { front: 'Water vapour released by plants?', back: '<b>Transpiration</b>.' },
        { front: 'Share of human CO<sub>2</sub> absorbed by oceans, and its side effect?', back: '<b>~30%</b>; causes <b>ocean acidification</b>.' },
        { front: 'CO<sub>2</sub> level pre-industrial vs 2024?', back: '<b>~280 ppm</b> vs over <b>422 ppm</b>.' },
        { front: 'Free-living nitrogen-fixing bacterium?', back: '<b>Azotobacter</b>.' },
        { front: 'Bacterium that converts ammonia to nitrite?', back: '<b>Nitrosomonas</b>.' },
        { front: 'Bacterium that converts nitrite to nitrate?', back: '<b>Nitrobacter</b>.' },
        { front: 'Denitrifying bacterium?', back: '<b>Pseudomonas</b> (anaerobic).' },
        { front: 'Organic N → NH<sub>4</sub><sup>+</sup> by decomposers is called…', back: '<b>Ammonification</b>.' },
        { front: 'Cycle with no atmospheric phase?', back: '<b>Phosphorus</b>.' },
        { front: 'Nutrient often limiting in freshwater?', back: '<b>Phosphorus</b>.' },
        { front: 'Steps of decomposition in the text?', back: '<b>Fragmentation → leaching → catabolism</b> (figure adds humification, mineralization).' }
      ],
      oneLiners: [
        'Energy flows; matter cycles.',
        'Carbon: fixation, consumption, respiration, decomposition, combustion, ocean absorption.',
        'Fossil fuels release 36 billion tonnes of CO₂ a year.',
        'N₂ → NH₃ (fixation) → NO₂⁻ (Nitrosomonas) → NO₃⁻ (Nitrobacter) → N₂ (Pseudomonas).',
        'Haber-Bosch: ~120 million t N fertilizer/yr, feeds ~50% of people.',
        'Phosphorus: rock → soil → organisms → sediment; no gas phase.',
        'Excess N and P cause eutrophication.'
      ],
      formulas: [
        { name: 'Respiration', html: `C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O + ATP`, note: 'Returns CO₂ to the air.' },
        { name: 'Nitrogen fixation', html: `N<sub>2</sub> → NH<sub>3</sub>`, note: 'Rhizobium, Azotobacter, lightning, Haber-Bosch.' },
        { name: 'Nitrification', html: `NH<sub>3</sub> → NO<sub>2</sub><sup>−</sup> → NO<sub>3</sub><sup>−</sup>`, note: 'Nitrosomonas, then Nitrobacter.' },
        { name: 'Denitrification', html: `NO<sub>3</sub><sup>−</sup> → N<sub>2</sub>`, note: 'Pseudomonas, anaerobic.' }
      ]
    },
    {
      id: 'm1-ecosystem-functions',
      title: 'Productivity, regulation, stability and human impact',
      short: 'Ecosystem health',
      blurb: 'Primary and secondary productivity, feedback loops, stability vs resilience, how components depend on each other, human impact and why ecosystem balance matters.',
      source: 'Lecture W1S5, pages 12–17',
      tabs: [
        { title: 'Productivity', html: `
          <p class="lead"><b>Productivity</b>: rate energy is produced and stored in an ecosystem.</p>
          <table class="tbl"><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>
            <tr><td>Primary productivity</td><td>Rate producers store solar energy by photosynthesis</td></tr>
            <tr><td>GPP</td><td>Total captured, <b>not counting respiration</b></td></tr>
            <tr><td>NPP</td><td><b>Left after respiration</b>, for herbivores</td></tr>
            <tr><td>Secondary productivity</td><td>Energy stored by <b>consumers</b> as biomass</td></tr>
          </tbody></table>
          <p>High productivity (<b>tropical rainforests, coral reefs</b>) → more biodiversity. Shows health and <b>carrying capacity</b>.</p>
        ` },
        { title: 'Regulation', html: `
          <p class="lead"><b>Homeostasis</b>: staying stable despite disturbance, via feedback.</p>
          <div class="vs">
            <div class="side"><h4>Negative feedback (stabilising)</h4><p>More prey → more predators → prey falls.</p></div>
            <div class="side"><h4>Positive feedback (amplifying)</h4><p><b>Overgrazing</b> → vegetation loss → erosion → more decline.</p></div>
          </div>
          <p>Severe disturbance → <b>ecological collapse or regime shifts</b>.</p>
        ` },
        { title: 'Stability and resilience', html: `
          <div class="vs">
            <div class="side"><h4>Stability</h4><p><b>Remain unchanged</b>; resists disturbance.</p></div>
            <div class="side"><h4>Resilience</h4><p><b>Recover</b> quickly after disturbance.</p></div>
          </div>
          <ul>
            <li>Both rise with <b>biodiversity and functional diversity</b> (backup functions).</li>
            <li>Lost <b>pollinator</b> replaced by another (<b>redundancy</b>).</li>
            <li><b>Coral reefs</b>: productive, <b>less resilient</b>; <b>grasslands</b> recover after fire.</li>
            <li>Fragmentation, pollution, climate change lower resilience.</li>
          </ul>
          <h3>Interdependence</h3>
          <ul>
            <li><b>Mutualism, predation, parasitism, competition</b>; pollinators + flowers = mutualism.</li>
            <li>Predator–prey controls populations.</li>
            <li>Abiotic (sunlight, temperature, rainfall) set distribution.</li>
            <li>Plants need soil nutrients; microbes cycle them.</li>
          </ul>
        ` },
        { title: 'Human impact and balance', html: `
          <p class="lead">Humans degrade ecosystems and <b>reduce biodiversity</b>.</p>
          <table class="tbl"><thead><tr><th>Activity</th><th>What it does to the ecosystem</th></tr></thead><tbody>
            <tr><td><b>Deforestation</b></td><td>Habitat loss, soil erosion, climate change; <b>extinction</b> of forest species</td></tr>
            <tr><td><b>Pollution</b></td><td>Toxins in air, water, soil <b>accumulate in food chains</b></td></tr>
            <tr><td><b>Climate change</b></td><td>Greenhouse gases alter temperature, rain, sea level; shifts ranges, productivity</td></tr>
            <tr><td><b>Urbanisation</b></td><td><b>Habitat fragmentation</b>, green space loss, more pollution</td></tr>
            <tr><td><b>Overexploitation</b></td><td><b>Overfishing, mining</b>; lowers resilience, network collapse</td></tr>
          </tbody></table>
          <p>Fixes: <b>sustainable practices, conservation</b>, <b>environmental education, policy enforcement</b>.</p>
          <h3>Ecosystem balance</h3>
          <ul>
            <li>Stable working of all parts: food webs, cycles, biodiversity, carbon storage, <b>water filtration</b>.</li>
            <li>Loss → <b>invasive species outbreaks, collapse, lost ecosystem services</b>.</li>
            <li>Supports agriculture, fisheries, climate regulation, disaster resilience.</li>
          </ul>
          <figure data-fig="m1-ecology-importance"></figure>
          <ul>
            <li>Key functions: <b>energy flow, nutrient cycling, biodiversity maintenance, environmental regulation</b>.</li>
            <li>Services: food, water, climate control, recreation.</li>
            <li>Unchecked threats → <b>irreversible damage</b>; protection is a <b>shared responsibility</b>.</li>
          </ul>
        ` },
        { title: 'Dynamics and succession', html: `
          <p class="lead"><b>Ecosystem dynamics</b>: natural changes over time (species turnover, cycling, energy flow).</p>
          <ul>
            <li><b>Ecological succession</b>: gradual replacement of one community by another, after <b>disturbance</b> or on <b>new habitat</b>.</li>
            <li><b>Primary</b>: no previous life (<b>lava flows, glacial retreats</b>); soil must form.</li>
            <li><b>Secondary</b>: after <b>forest fires or floods</b>; soil present, so <b>faster</b>.</li>
            <li>Ends in a stable <b>climax community</b>.</li>
            <li><b>Raises biodiversity</b> and nutrients; helps recovery. Informs <b>restoration, land-use planning, climate resilience</b>.</li>
          </ul>
          <p>Details: Ecological succession topic.</p>
          <div class="note exam"><p>Long answer: productivity; regulation and feedback; succession; stability vs resilience (examples); interdependence; human impact; balance and the four key functions.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Productivity is…', back: 'The <b>rate</b> at which energy is produced and stored in an ecosystem.' },
        { front: 'GPP vs NPP?', back: 'GPP = total captured, <b>ignoring respiration</b>; NPP = <b>left after respiration</b>.' },
        { front: 'Secondary productivity?', back: 'Energy stored by <b>consumers</b> as biomass.' },
        { front: 'Predator–prey population control is which feedback?', back: '<b>Negative</b> (stabilising).' },
        { front: 'Overgrazing → erosion → less vegetation is which feedback?', back: '<b>Positive</b> (amplifying).' },
        { front: 'Stability vs resilience?', back: 'Stability = <b>resist change</b>; resilience = <b>recover</b> after disturbance.' },
        { front: 'Highly productive but less resilient ecosystem?', back: '<b>Coral reefs</b>.' },
        { front: 'Pollinators and flowering plants show which interaction?', back: '<b>Mutualism</b>.' },
        { front: 'Why does secondary succession proceed faster than primary?', back: '<b>Soil is already present</b>; primary starts from bare rock (lava flows, glacial retreats).' }
      ],
      oneLiners: [
        'Rainforests and coral reefs: high productivity, high biodiversity.',
        'Homeostasis via negative (stabilising) and positive (amplifying) feedback.',
        'Biodiversity gives redundancy, so stability and resilience.',
        'Grasslands bounce back after fire; coral reefs struggle with repeated stress.',
        'Human impacts: deforestation, pollution, climate change, urbanisation, overexploitation.'
      ],
      formulas: []
    },
    {
      id: 'm1-energy-applications',
      title: 'Energy flow in the real world',
      short: 'Energy applications',
      blurb: 'Diet efficiency, biomagnification of DDT with the numbers, why top predators matter, and farming that copies food webs.',
      source: 'Energy flow lecture, pages 11–13',
      tabs: [
        { title: 'Diet efficiency', html: `
          <p class="lead">Eating lower on the chain is far more efficient: each level wastes ~90%.</p>
          <ul>
            <li>Plants (T1): 10,000 kJ → <b>10,000 kJ</b> to human.</li>
            <li>Livestock (T2): 10,000 → 1,000 kJ → <b>~100 kJ</b> to human.</li>
            <li><b>1 kg beef</b>: <b>~8 kg grain, 15,000 L water</b>, <b>20× the land</b> of plant food.</li>
            <li>Plant-based diet: a strong individual action.</li>
          </ul>
          <h3>Sustainable farming</h3>
          <ul>
            <li><b>Polyculture</b> mimics food webs: efficient, resilient.</li>
            <li>Harvest <b>lower trophic levels</b> (sardines, anchovies, mussels).</li>
            <li><b>Integrated farming</b> (fish + rice): one species' waste feeds another.</li>
          </ul>
        ` },
        { title: 'Biomagnification', html: `
          <p class="lead">Persistent pollutants (<b>DDT, PCBs, mercury, lead</b>) build up in fat, <b>more concentrated at each level</b>.</p>
          <table class="tbl"><thead><tr><th>Level</th><th>DDT</th><th>Concentration factor</th></tr></thead><tbody>
            <tr><td>Water / soil</td><td><b>0.000003 ppm</b></td><td>Baseline</td></tr>
            <tr><td>Phytoplankton (T1)</td><td>0.04 ppm</td><td>~13,000×</td></tr>
            <tr><td>Small fish (T2)</td><td>0.5 ppm</td><td>~167,000×</td></tr>
            <tr><td>Large fish (T3)</td><td>2.0 ppm</td><td>~667,000×</td></tr>
            <tr><td>Fish-eating birds (T4)</td><td><b>25 ppm</b></td><td><b>~8 million×</b></td></tr>
          </tbody></table>
          <div data-viz="ddt-biomagnification"></div>
          <p><b>Eggshell thinning</b> in bald eagles, peregrine falcons, brown pelicans; DDT banned in USA <b>1972</b>.</p>
          <div class="note heads-up"><p>Notes credit the Clean Water Act; it was actually an EPA order. Quote 1972, USA.</p></div>
        ` },
        { title: 'Top predators', html: `
          <p class="lead">Top predators are few but regulate whole ecosystems.</p>
          <ul>
            <li><b>Wolves, Yellowstone 1995</b> → less deer grazing → vegetation, riverbanks recover → biodiversity rises.</li>
            <li><b>Sharks</b>: remove sick, weak fish → healthy reefs.</li>
            <li>Losing them → <b>trophic cascade</b> down every level.</li>
          </ul>
        ` }
      ],
      flashcards: [
        { front: 'Energy a human gets from 10,000 kJ of plants eaten via livestock?', back: '<b>~100 kJ</b>.' },
        { front: 'Resources to produce 1 kg of beef?', back: '<b>~8 kg grain</b>, <b>15,000 L water</b>, <b>20× the land</b> of plant food.' },
        { front: 'DDT in water vs fish-eating birds?', back: '<b>0.000003 ppm</b> vs <b>25 ppm</b> (~8 million×).' },
        { front: 'Birds harmed by DDT eggshell thinning?', back: '<b>Bald eagles, peregrine falcons, brown pelicans</b>.' },
        { front: 'Year DDT was banned in the USA?', back: '<b>1972</b>.' },
        { front: 'Example of integrated farming?', back: '<b>Fish + rice paddies</b>.' },
        { front: 'More sustainable seafood to harvest?', back: 'Lower trophic levels: <b>sardines, anchovies, mussels</b>.' }
      ],
      oneLiners: [
        'Plants give 10× the energy of herbivores and 100× that of carnivores.',
        'Biomagnification: persistent toxins concentrate up the chain.',
        'DDT: 0.000003 ppm in water → 25 ppm in fish-eating birds.',
        'Polyculture and integrated farming copy natural food webs.',
        'Top predators prevent trophic cascades.'
      ],
      formulas: []
    },
    {
      id: 'm1-succession',
      title: 'Ecological succession',
      short: 'Succession',
      blurb: 'What succession is, primary vs secondary with examples, the stages from nudation to climax, seres, the climax theories, pioneer species and the full comparison table.',
      source: 'Lecture W1S7 (pages 1–4) and W1S5 (page 14)',
      tabs: [
        { title: 'What it is', html: `
          <p class="lead"><b>Ecological succession</b> (community development): <b>gradual change</b> in species and community processes <b>over time</b>; one community replaces another after disturbance or on new habitat.</p>
          <p>Matters for <b>managing ecosystems</b>.</p>
          <div class="vs">
            <div class="side"><h4>By timescale</h4><ul><li><b>Geological</b> (millions of years): <b>paleo-ecological</b></li><li><b>Medium</b>: <b>1–1000 years</b></li></ul></div>
            <div class="side"><h4>By starting point</h4><ul><li><b>Primary</b>: bare lifeless land</li><li><b>Secondary</b>: earlier ecosystem destroyed (naturally or by people)</li></ul></div>
          </div>
          <p>Ends in a stable <b>climax community</b>; raises biodiversity and nutrients.</p>
          <figure data-fig="m1-succession-time"></figure>
        ` },
        { title: 'Primary succession', html: `
          <p class="lead">On <b>bare rock or barren land</b>: <b>lava flows, glacial retreats</b>.</p>
          <ol class="steps">
            <li><b>Pioneers arrive</b> <b>Lichens and mosses</b> attach to weathered rock.</li>
            <li><b>Soil forms</b> Their mild acids break rock into fertile soil.</li>
            <li><b>Mid-successional plants</b> Herbs, grasses, low shrubs.</li>
            <li><b>Trees</b> Replace shrubs over 100–1000 years.</li>
          </ol>
          <figure data-fig="m1-primary-succession"></figure>
          <div class="note example"><p>Figure: glacier-bared rock on <b>Isle Royale, Michigan, USA</b>, ~1000 years.</p></div>
        ` },
        { title: 'Secondary succession', html: `
          <p class="lead">Where life was destroyed by <b>wildfire, flood or humans</b>, but <b>life remains in the soil</b>.</p>
          <div class="note example"><p><b>North Carolina, USA</b>: oak-pine forest cleared for farms; abandoned land returned to forest in ~150–200 years.</p></div>
          <figure data-fig="m1-secondary-succession"></figure>
          <p><b>5–10 times faster</b> than primary: soil nutrients remain. Final species = <b>climax species</b>.</p>
        ` },
        { title: 'Stages and seres', html: `
          <ol class="steps">
            <li><b>Nudation</b> Bare area from eruption, landslide, flood, fire.</li>
            <li><b>Invasion</b> First arrivals = <b>pioneers</b>.</li>
            <li><b>Competition</b> For space, nutrients; <b>intraspecific or interspecific</b>; immigrants replace the community.</li>
            <li><b>Climax</b> <b>Stabilization</b>; changes only by catastrophe or humans.</li>
          </ol>
          <div class="note heads-up"><p>Notes say "two steps" but list four. Learn all four.</p></div>
          <table class="tbl"><thead><tr><th>Type (sere)</th><th>Where it starts</th></tr></thead><tbody>
            <tr><td><b>Hydrosere</b></td><td><b>Water</b> (pond, lake)</td></tr>
            <tr><td><b>Xerosere</b></td><td><b>Dry</b> land</td></tr>
            <tr><td><b>Lithosere</b></td><td><b>Rock</b></td></tr>
            <tr><td><b>Halosere</b></td><td><b>Saline</b> water/soil</td></tr>
          </tbody></table>
        ` },
        { title: 'Climax theories and pioneers', html: `
          <div class="vs">
            <div class="side"><h4>Monoclimax theory</h4><p><b>F.E. Clemens</b>: one <b>single community</b> per region, set by <b>climate</b>.</p></div>
            <div class="side"><h4>Polyclimax theory</h4><p><b>Tansley</b>: climax set by <b>many factors</b>, not climate alone.</p></div>
          </div>
          <div class="note heads-up"><p>Notes garble polyclimax; standard idea: several climaxes per region (soil, moisture, fire). Name usually spelled Clements.</p></div>
          <h3>Features of pioneer species</h3>
          <ul>
            <li><b>Explores new habitats</b>.</li>
            <li><b>Agile</b>: spreads fast.</li>
            <li>High <b>ability to adapt</b>.</li>
            <li><b>Wide choice of food</b>.</li>
            <li><b>Good breeder</b>.</li>
            <li><b>Tolerant</b> of heat, cold, drought, poor soil.</li>
          </ul>
          <h3>Conclusion</h3>
          <p>Succession shows <b>how a new community is established</b>, reveals the <b>factors responsible</b>, and helps <b>conserve the climax community</b>.</p>
        ` },
        { title: 'Primary vs secondary', html: `
          <p class="lead">Drag through time to watch both reach climax; then use the table.</p>
          <div data-viz="succession"></div>
          <table class="tbl"><thead><tr><th></th><th>Primary</th><th>Secondary</th></tr></thead><tbody>
            <tr><td>Meaning</td><td>Starts on <b>barren, uninhabited land</b></td><td>Where <b>life existed before</b></td></tr>
            <tr><td>Occurs in</td><td>Lifeless areas</td><td>Recently denuded areas</td></tr>
            <tr><td>Time</td><td>~<b>1000 years</b> or more</td><td><b>50–200 years</b></td></tr>
            <tr><td>Physical conditions</td><td>Least suitable; no soil or nutrients</td><td>Soil present, some nutrients</td></tr>
            <tr><td>Humus</td><td><b>Absent</b></td><td><b>Present</b></td></tr>
            <tr><td>Seral communities</td><td><b>Several</b></td><td><b>Fewer</b></td></tr>
            <tr><td>Environment</td><td><b>Unfavourable</b> at start</td><td>Mostly <b>favourable</b></td></tr>
            <tr><td>Reproduction</td><td>Starts from first species</td><td>Seeds, roots survive in soil</td></tr>
            <tr><td>Examples</td><td>Bare rock, ponds, desert, lava</td><td>After calamities, deforestation</td></tr>
          </tbody></table>
          <div class="note exam"><p>Long answer: definition; two classifications; primary and secondary (examples, 5–10× faster); four stages; seres; mono- vs polyclimax; pioneer features; table; conclusion.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Another name for ecological succession?', back: '<b>Community development</b>.' },
        { front: 'Succession over millions of years is called…', back: '<b>Paleo-ecological</b> change.' },
        { front: 'Pioneer species in primary succession?', back: '<b>Lichens and mosses</b>.' },
        { front: 'How much faster is secondary succession?', back: '<b>5–10 times</b> faster.' },
        { front: 'Four stages of succession?', back: '<b>Nudation → invasion → competition → climax</b>.' },
        { front: 'Succession starting in a saline environment?', back: '<b>Halosere</b>.' },
        { front: 'Succession starting on rock?', back: '<b>Lithosere</b>.' },
        { front: 'Who gave the monoclimax theory and what decides the climax?', back: '<b>F.E. Clemens</b>; <b>climate</b>.' },
        { front: 'Who gave the polyclimax theory?', back: '<b>Tansley</b>.' },
        { front: 'Is humus present in primary succession?', back: '<b>No</b>; it is present in secondary.' },
        { front: 'Time for primary vs secondary succession?', back: 'Primary <b>~1000 years</b>; secondary <b>50–200 years</b>.' }
      ],
      oneLiners: [
        'Primary: bare rock, lava, glacial retreat. Secondary: after fire, flood, clearing.',
        'Lichens and mosses make soil with mild acids.',
        'Nudation, invasion, competition, climax.',
        'Hydrosere (water), xerosere (dry), lithosere (rock), halosere (saline).',
        'Monoclimax: Clemens, climate. Polyclimax: Tansley, many factors.',
        'Secondary succession has soil and humus, so it is 5–10× faster.'
      ],
      formulas: []
    }
  ],
  figures: [
    { id: 'm1-ecosystem-types-tree', src: 'pages/m1/evs-w1-03/p01.png', crop: [0.10, 0.64, 0.80, 0.22], caption: 'Ecosystems split into natural and artificial; natural ones into terrestrial (grassland, forest, desert) and aquatic (freshwater, marine).', alt: 'Tree diagram of ecosystem types.' },
    { id: 'm1-levels-organisation', src: 'pages/m1/evs-w1-04/p02.png', crop: [0.22, 0.08, 0.54, 0.42], caption: 'Each step up adds a layer: organism, population, community, ecosystem, biosphere.', alt: 'Staircase of icons from organism to biosphere.' },
    { id: 'm1-abiotic-factors', src: 'pages/m1/evs-w1-04/p04.png', crop: [0.32, 0.09, 0.36, 0.36], caption: 'The non-living factors: air, salinity, soil, temperature, light, water, minerals, pH and humidity.', alt: 'Grid of circles labelled with abiotic factors.' },
    { id: 'm1-biotic-factors', src: 'pages/m1/evs-w1-04/p05.png', crop: [0.35, 0.188, 0.3, 0.272], caption: 'The living factors of an ecosystem, from microbes to plants and animals.', alt: 'Panel of circles showing living organisms labelled biotic factors.' },
    { id: 'm1-food-web', src: 'pages/m1/evs-w1-04/p07.png', crop: [0.34, 0.20, 0.33, 0.26], caption: 'Arrows run from food to feeder; most animals sit on several chains at once.', alt: 'Food web with grass, grasshopper, rabbit, mouse, frog, birds, snake, owl and fox linked by arrows.' },
    { id: 'm1-ecological-pyramid', src: 'pages/m1/evs-w1-04/p08.png', crop: [0.30, 0.13, 0.40, 0.20], caption: 'Producers form the wide base; primary, secondary and tertiary consumers stack above.', alt: 'Triangle with layers labelled producers, primary consumers, secondary consumers and tertiary consumers.' },
    { id: 'm1-water-cycle', src: 'pages/m1/evs-w1-04/p09.png', crop: [0.26, 0.38, 0.43, 0.22], caption: 'Evaporation from water and land, condensation into clouds, precipitation and collection.', alt: 'Water cycle diagram with labels precipitation, condensation, collection and evaporation.' },
    { id: 'm1-nitrogen-cycle', src: 'pages/m1/evs-w1-04/p10.png', crop: [0.27, 0.69, 0.46, 0.278], caption: 'N₂ is fixed into ammonia, nitrifying bacteria turn it into nitrite and nitrate, plants take it up, and denitrifying bacteria return N₂ to the air.', alt: 'Nitrogen cycle diagram with N2, NH3, NO2 and NO3 and the bacteria at each step.' },
    { id: 'm1-decomposition-steps', src: 'pages/m1/evs-w1-04/p12.png', crop: [0.23, 0.21, 0.55, 0.27], caption: 'Five steps in the figure: fragmentation, leaching, catabolism, humification, mineralization.', alt: 'Decomposing animal next to a list of decomposition steps.' },
    { id: 'm1-succession-time', src: 'pages/m1/evs-w1-04/p14.png', crop: [0.23, 0.42, 0.55, 0.26], caption: 'Over time annual plants give way to perennials and grasses, shrubs, softwood trees and finally hardwood trees.', alt: 'Succession sequence from annual plants to hardwood trees along a time arrow.' },
    { id: 'm1-primary-succession', src: 'pages/m1/evs-w1-06/p01.png', crop: [0.1, 0.372, 0.72, 0.368], caption: 'Exposed rock → lichens and mosses → small herbs and shrubs → heath mat → jack pine, black spruce and aspen → balsam fir, paper birch and white spruce.', alt: 'Block diagram of primary succession stages on bare rock.' },
    { id: 'm1-secondary-succession', src: 'pages/m1/evs-w1-06/p02.png', crop: [0.1, 0.207, 0.72, 0.31], caption: 'Abandoned farmland: annual weeds → perennial weeds and grasses → shrubs and small pines → young pine forest → mature oak and hickory forest.', alt: 'Block diagram of secondary succession stages on abandoned farmland.' },
    { id: 'm1-ecology-importance', src: 'pages/m1/evs-w1-04/p17.png', crop: [0.27, 0.07, 0.44, 0.20], caption: 'Ecology matters to people because healthy ecosystems keep the planet liveable.', alt: 'Hands holding a small plant with the title Importance of ecology for humans.' }
  ]
});
