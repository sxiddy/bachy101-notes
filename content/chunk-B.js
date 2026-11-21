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
        { title: 'Definitions and levels', html: `
          <p class="lead"><b>Ecology</b>: organisms interacting with <b>biotic</b> and <b>abiotic</b> surroundings; now often the <b>study of ecosystems</b>.</p>
          <ul>
            <li><b>Ecosystem</b>: biotic communities + non-living environment <b>exchanging energy and matter</b>; a <b>dynamic complex</b> ensuring energy flow and nutrient cycling.</li>
            <li>A <b>structural and functional unit of ecology</b>; size from an <b>oasis</b> to an <b>ocean</b>.</li>
            <li><b>Structural</b> aspects: species types, numbers, arrangement, physical features. <b>Functional</b>: <b>energy flow</b>, <b>nutrient cycling</b>.</li>
          </ul>
          <ol class="steps">
            <li><b>Organism</b> Smallest unit.</li>
            <li><b>Population</b> <b>Same species</b>, one area.</li>
            <li><b>Community</b> Several populations.</li>
            <li><b>Ecosystem</b> Community + <b>abiotic</b> environment.</li>
            <li><b>Biosphere</b> <b>Sum of all ecosystems</b>.</li>
          </ol>
          <figure data-fig="m1-levels-organisation"></figure>
          <div class="note trap"><p>Population = one species. Community = many species. Ecosystem = community + abiotic.</p></div>
        ` },
        { title: 'Types and examples', html: `
          <p class="lead">Natural splits into <b>terrestrial</b> (forest, grassland, tundra, desert) and <b>aquatic</b> (freshwater, marine). <b>Natural</b> (<b>self-sustaining</b>) vs <b>artificial</b> (gardens, aquariums, crop fields; need <b>human management</b>).</p>
          <figure data-fig="m1-ecosystem-types-tree"></figure>
          <table class="tbl"><thead><tr><th>Type</th><th>Key fact</th><th>Example</th></tr></thead><tbody>
            <tr><td>Forest</td><td><b>Major carbon sink</b>; maintains Earth's temperature</td><td><b>Amazon, Sundarbans</b></td></tr>
            <tr><td>Grassland</td><td>Grasses, herbs; savanna</td><td><b>African savanna, Deccan plateau</b></td></tr>
            <tr><td>Tundra</td><td><b>No trees</b>; cold, scarce rain, snow most of year</td><td>Arctic, <b>mountain tops</b></td></tr>
            <tr><td>Desert</td><td>Very little rain; <b>hot days, cold nights</b></td><td><b>Sahara, Thar</b></td></tr>
            <tr><td>Freshwater</td><td><b>No salt</b>; lakes, ponds, rivers, wetlands</td><td><b>Dal Lake, Chilika</b>; Ganga, Brahmaputra</td></tr>
            <tr><td>Marine</td><td><b>More salt</b>, <b>greater biodiversity</b></td><td>Coral reefs, deep sea</td></tr>
            <tr><td>Artificial</td><td>Human-managed</td><td>Paddy fields, orchards</td></tr>
          </tbody></table>
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
        { title: 'Abiotic factors', html: `
          <p class="lead"><b>Biotic</b> and <b>abiotic</b> components are <b>interdependent</b>; disrupt one and the whole system is affected. Used in <b>habitat restoration, agriculture, conservation, urban planning</b>.</p>
          <figure data-fig="m1-abiotic-factors"></figure>
          <table class="tbl"><thead><tr><th>Factor</th><th>Key fact</th></tr></thead><tbody>
            <tr><td>Light</td><td>Photosynthesis, plant distribution, migration. <b>Primary energy input</b>: Earth gets <b>~1.7 × 10<sup>17</sup> W</b>; only <b>~0.023%</b> captured</td></tr>
            <tr><td>Temperature</td><td><b>Q<sub>10</sub> rule</b>: metabolic rate <b>doubles</b> per <b>10 °C</b></td></tr>
            <tr><td>Water</td><td><b>Universal solvent</b>; nutrient transport, waste removal; often limits distribution</td></tr>
            <tr><td>Soil</td><td>Anchorage, water, nutrients <b>N, P, K</b> + micronutrients</td></tr>
            <tr><td>Air</td><td>O<sub>2</sub> respiration, CO<sub>2</sub> photosynthesis, N<sub>2</sub> fixation</td></tr>
            <tr><td>Others</td><td>Minerals, pH, salinity, wind, topography</td></tr>
          </tbody></table>
        ` },
        { title: 'Biotic groups', html: `
          <figure data-fig="m1-biotic-factors"></figure>
          <table class="tbl"><thead><tr><th>Group</th><th>Examples</th></tr></thead><tbody>
            <tr><td><b>Photoautotrophs</b> (sunlight)</td><td>Grasses, trees, algae, <b>phytoplankton</b>, <b>cyanobacteria</b></td></tr>
            <tr><td><b>Chemoautotrophs</b> (chemical energy)</td><td>Deep-sea <b>hydrothermal vent bacteria</b></td></tr>
            <tr><td>Primary consumers (herbivores)</td><td>Deer, rabbit, grasshopper, <b>zooplankton</b>, cattle</td></tr>
            <tr><td>Secondary (carnivores)</td><td>Frogs, foxes, small fish, spiders</td></tr>
            <tr><td>Tertiary (top carnivores)</td><td>Eagles, tigers, sharks, orcas</td></tr>
            <tr><td>Omnivores</td><td><b>Humans, bears, crows, pigs</b></td></tr>
            <tr><td><b>Decomposers</b> (saprotrophs)</td><td>Bacteria <b>Bacillus, Pseudomonas</b>; fungi <b>Aspergillus, Rhizopus</b></td></tr>
            <tr><td><b>Detritivores</b></td><td><b>Earthworms, millipedes, woodlice, dung beetles</b></td></tr>
          </tbody></table>
          <p>Producers = <b>autotrophs</b>; consumers = <b>heterotrophs</b> (control populations by <b>predation and grazing</b>). Decomposers return <b>inorganic nutrients</b> to soil.</p>
          <div class="note trap"><p>Detritivores <b>ingest</b> fragments; decomposers digest outside the body with <b>extracellular enzymes</b>.</p></div>
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
        { title: 'Trophic levels and chains', html: `
          <p class="lead"><b>Trophic level</b>: step in a food chain. Each step ~<b>90% lost as heat</b>, <b>10% passes on</b> → limits chain length.</p>
          <table class="tbl"><thead><tr><th>Level</th><th>Who</th><th>Examples</th></tr></thead><tbody>
            <tr><td>T1</td><td>Producers</td><td>Green plants, algae</td></tr>
            <tr><td>T2</td><td>Herbivores</td><td>Deer, rabbits, grasshoppers</td></tr>
            <tr><td>T3</td><td>Carnivores / omnivores</td><td>Frogs, foxes, small birds</td></tr>
            <tr><td>T4</td><td>Top predators</td><td>Hawks, lions</td></tr>
          </tbody></table>
          <div class="vs">
            <div class="side"><h4>Grazing chain</h4>
              <p>Starts with <b>living green plants</b>; most common; <b>max 4–5 links</b> (10% rule).</p>
              <div class="eq">Grass → Grasshopper → Frog → Snake → Eagle</div></div>
            <div class="side"><h4>Detritus chain</h4>
              <p>Starts with <b>dead organic matter</b>; <b>80–90%</b> of energy in forests, wetlands; <b>no sunlight</b> needed.</p>
              <div class="eq">Dead matter → Detritivores → Decomposers → Inorganic nutrients → Soil → Producers</div></div>
          </div>
        ` },
        { title: 'Food webs and cascades', html: `
          <p class="lead">Food web: <b>network of food chains</b>; more realistic and <b>more stable</b> (predators switch prey).</p>
          <figure data-fig="m1-food-web"></figure>
          <ul>
            <li>An omnivore sits at <b>more than one trophic level</b>.</li>
            <li><b>Redundancy</b>: energy flows by several routes.</li>
            <li>Losing a <b>keystone species</b> (<b>sea otter, wolf</b>) → <b>trophic cascade</b>.</li>
            <li><b>Yellowstone, 1995</b>: wolves return → deer leave riverbanks → plants recover → banks stabilise, <b>rivers change course</b>.</li>
            <li><b>Sharks</b> remove sick and weak fish, supporting reefs.</li>
          </ul>
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
        { title: 'Types and numbers', html: `
          <p class="lead"><b>Charles Elton (1927)</b>: <b>Eltonian pyramid</b>; numbers, biomass or energy.</p>
          <figure data-fig="m1-ecological-pyramid"></figure>
          <table class="tbl"><thead><tr><th>Pyramid of numbers</th><th>Ecosystem</th></tr></thead><tbody>
            <tr><td><b>Upright</b></td><td>Grassland (grass → insects → frogs → birds); pond (phytoplankton → zooplankton → fish)</td></tr>
            <tr><td><b>Inverted</b></td><td><b>Single tree</b> → caterpillars → parasites</td></tr>
            <tr><td><b>Spindle</b></td><td><b>Forest</b>: few big trees, many insects, fewer carnivores</td></tr>
          </tbody></table>
          <div class="note trap"><p>Numbers pyramid ignores <b>size</b>; biomass pyramid ignores <b>rate</b>; all are <b>snapshots</b> and leave out <b>decomposers</b>.</p></div>
        ` },
        { title: 'Biomass and energy', html: `
          <table class="tbl"><thead><tr><th>Pyramid</th><th>Unit</th><th>Shape</th></tr></thead><tbody>
            <tr><td>Biomass (dry weight)</td><td><b>g/m² or kg/m²</b></td><td>Upright on land; <b>inverted in oceans</b> (phytoplankton turn over in <b>hours</b>)</td></tr>
            <tr><td>Energy</td><td><b>kJ/m²/yr or kcal/m²/yr</b></td><td><b>Always upright</b>, most accurate (<b>Lindemann's 10% law</b>)</td></tr>
          </tbody></table>
          <div class="eq">10,000 kJ (T1) → 1,000 (T2) → 100 (T3) → 10 kJ (T4, 0.1%)</div>
          <p>Energy pyramid follows the law of <b>energy degradation</b>; only it has <b>no exceptions</b>.</p>
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
        { title: 'Photosynthesis and productivity', html: `
          <div class="eq" data-label="Photosynthesis">6CO<sub>2</sub> + 6H<sub>2</sub>O + light energy → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub></div>
          <p>CO<sub>2</sub> via <b>stomata</b>; water via <b>xylem</b>; light by <b>chlorophyll</b>. Energy stored as <b>glucose</b>; O<sub>2</sub> by-product. Producers are the <b>only entry point</b> for energy.</p>
          <table class="tbl"><thead><tr><th>Term</th><th>Global value</th></tr></thead><tbody>
            <tr><td><b>GPP</b> (total fixed)</td><td><b>~120 Pg C/yr</b></td></tr>
            <tr><td>R (respiration)</td><td>~60 Pg C/yr</td></tr>
            <tr><td><b>NPP</b> (left for food chain)</td><td><b>~60 Pg C/yr</b></td></tr>
          </tbody></table>
          <div class="eq">NPP = GPP − R</div>
          <p>NPP sets <b>carrying capacity</b>. Highest: <b>tropical rainforest ~2,000 g/m²/yr</b>; lowest: <b>desert ~100</b>. Pg = petagram.</p>
          <p><b>Chemosynthesis</b> (hydrothermal vents, cold seeps): oxidise <b>H<sub>2</sub>S, NH<sub>4</sub><sup>+</sup>, Fe<sup>2+</sup></b>, no sunlight.</p>
        ` },
        { title: 'Thermodynamics and 10% law', html: `
          <div class="vs">
            <div class="side"><h4>First law</h4><p>Energy <b>not created or destroyed</b>, only transformed (solar → chemical in glucose).</p></div>
            <div class="side"><h4>Second law</h4><p>Each transfer <b>loses heat</b> (entropy) → flow is <b>one-way</b>, needs <b>constant solar input</b>; <b>matter cycles</b>, energy does not.</p></div>
          </div>
          <p><b>R.L. Lindemann (1942)</b>: ~<b>10%</b> passes on, <b>90%</b> lost.</p>
          <table class="tbl"><thead><tr><th>Where it goes</th><th>Share</th></tr></thead><tbody>
            <tr><td><b>Respiration</b> (largest)</td><td><b>~60%</b></td></tr>
            <tr><td>Metabolic heat</td><td>~15–20%</td></tr>
            <tr><td>Undigested (bones, cellulose, chitin) → faeces</td><td>~10%</td></tr>
            <tr><td>Poor assimilation</td><td>~5–10%</td></tr>
            <tr><td><b>Next level</b></td><td><b>~10%</b></td></tr>
          </tbody></table>
          <div data-viz="energy-10pct"></div>
          <ul>
            <li>Only <b>1%</b> reaches T3; few chains exceed <b>4–5 levels</b>.</li>
            <li>Eating plants gives <b>10×</b> the energy of herbivores, <b>100×</b> of carnivores.</li>
          </ul>
          <div class="note heads-up"><p>Usually credited to Raymond <b>Lindeman</b> (1942).</p></div>
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
        { title: 'Water and carbon', html: `
          <p class="lead"><b>Matter recycles</b> (biogeochemical cycles); energy does not. Major: <b>carbon, nitrogen, phosphorus, water</b>. Disruption → eutrophication, climate change, soil infertility.</p>
          <p><b>Water cycle</b>: driven by <b>solar energy and gravity</b>; evaporation (+ <b>transpiration</b>) → condensation → precipitation → infiltration/runoff.</p>
          <figure data-fig="m1-water-cycle"></figure>
          <div data-viz="nutrient-cycles"></div>
          <p><b>Carbon</b> (backbone of organic molecules): fixation → consumption → respiration → decomposition → <b>combustion</b> → <b>ocean absorption</b>.</p>
          <div class="eq" data-label="Respiration">C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O + ATP</div>
          <div class="kv">
            <div><span>Oceans absorb</span><b>~30%</b> of human CO<sub>2</sub> → <b>acidification</b></div>
            <div><span>Pre-industrial CO<sub>2</sub></span><b>~280 ppm</b></div>
            <div><span>2024</span>Over <b>422 ppm</b> (highest in 3 million years)</div>
            <div><span>Fossil fuel CO<sub>2</sub></span><b>36 billion t</b>/yr</div>
          </div>
        ` },
        { title: 'Nitrogen cycle', html: `
          <p class="lead">N<sub>2</sub> = <b>78%</b> of air; needed for amino acids, DNA, RNA, chlorophyll, ATP.</p>
          <table class="tbl"><thead><tr><th>Process</th><th>Change</th><th>By</th></tr></thead><tbody>
            <tr><td><b>Fixation</b></td><td>N<sub>2</sub> → NH<sub>3</sub></td><td><b>Rhizobium</b> (legume nodules), <b>Azotobacter</b> (free-living), lightning, <b>Haber-Bosch</b></td></tr>
            <tr><td><b>Nitrification</b></td><td>NH<sub>3</sub> → NO<sub>2</sub><sup>−</sup></td><td><b>Nitrosomonas</b> (aerobic)</td></tr>
            <tr><td><b>Nitrification</b></td><td>NO<sub>2</sub><sup>−</sup> → NO<sub>3</sub><sup>−</sup></td><td><b>Nitrobacter</b></td></tr>
            <tr><td>Assimilation</td><td>NO<sub>3</sub><sup>−</sup> → organic N</td><td>Plant roots</td></tr>
            <tr><td><b>Ammonification</b></td><td>Organic N → NH<sub>4</sub><sup>+</sup></td><td>Decomposers</td></tr>
            <tr><td><b>Denitrification</b></td><td>NO<sub>3</sub><sup>−</sup> → N<sub>2</sub></td><td><b>Pseudomonas</b> (anaerobic)</td></tr>
          </tbody></table>
          <figure data-fig="m1-nitrogen-cycle"></figure>
          <p>Rhizobium in legumes (peas, beans, lentils) = natural fertility. Haber-Bosch: <b>~120 million t</b>/yr, feeds <b>~50%</b> of the world; excess → <b>eutrophication</b>.</p>
          <div class="mnemonic"><p>Nitro<b>so</b>monas before Nitro<b>b</b>acter.</p></div>
        ` },
        { title: 'Phosphorus and decomposition', html: `
          <p class="lead">Phosphorus: <b>no atmospheric phase</b>; often the <b>limiting nutrient</b> (freshwater).</p>
          <p>Rock <b>weathering</b> (phosphate, H<sub>2</sub>PO<sub>4</sub><sup>−</sup>) → plants (<b>ATP, DNA, RNA, membranes</b>) → consumers → decomposers → <b>sediment</b> → uplift. Excess from <b>detergents, fertilizers</b> → algal blooms.</p>
          <h3>Decomposition</h3>
          <figure data-fig="m1-decomposition-steps"></figure>
          <p><b>Fragmentation</b> (earthworms) → <b>leaching</b> → <b>catabolism</b>; figure adds <b>humification, mineralization</b>. Mainly <b>bacteria and fungi</b>; rate depends on <b>temperature, moisture, pH, oxygen</b>.</p>
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
        { title: 'Productivity and regulation', html: `
          <table class="tbl"><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>
            <tr><td><b>Productivity</b></td><td><b>Rate</b> energy is produced and stored</td></tr>
            <tr><td>GPP</td><td>Total captured, <b>ignoring respiration</b></td></tr>
            <tr><td>NPP</td><td><b>Left after respiration</b></td></tr>
            <tr><td>Secondary productivity</td><td>Stored by <b>consumers</b></td></tr>
          </tbody></table>
          <p>Highest: <b>tropical rainforests, coral reefs</b>. Productivity indicates health and <b>carrying capacity</b>. Ecosystems keep <b>homeostasis</b> via feedback; severe disturbance → <b>regime shifts</b>.</p>
          <div class="vs">
            <div class="side"><h4>Negative feedback</h4><p><b>Stabilising</b>: predator–prey.</p></div>
            <div class="side"><h4>Positive feedback</h4><p><b>Amplifying</b>: <b>overgrazing</b> → erosion → decline.</p></div>
          </div>
        ` },
        { title: 'Stability and human impact', html: `
          <div class="vs">
            <div class="side"><h4>Stability</h4><p><b>Resist</b> change.</p></div>
            <div class="side"><h4>Resilience</h4><p><b>Recover</b> after disturbance.</p></div>
          </div>
          <ul>
            <li>Both rise with <b>biodiversity</b> (<b>redundancy</b>).</li>
            <li><b>Coral reefs</b>: productive, <b>less resilient</b>. <b>Grasslands</b> recover after fire.</li>
            <li>Interactions: <b>mutualism</b> (pollinators + flowers), predation, parasitism, competition.</li>
            <li>Human impacts: <b>deforestation, pollution</b> (toxins accumulate in food chains), climate change, <b>urbanisation</b> (fragmentation), <b>overexploitation</b> (overfishing, mining).</li>
            <li>Lost balance → <b>invasive species</b>, collapse, loss of <b>ecosystem services</b>.</li>
          </ul>
          <figure data-fig="m1-ecology-importance"></figure>
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
        { title: 'Diet and farming', html: `
          <ul>
            <li>10,000 kJ of plants: <b>10,000 kJ</b> eaten directly vs <b>~100 kJ</b> via livestock.</li>
            <li><b>1 kg beef</b> = <b>~8 kg grain</b>, <b>15,000 L water</b>, <b>20× the land</b> of plant food.</li>
            <li><b>Polyculture</b> mimics food webs.</li>
            <li>Harvest <b>lower trophic levels</b>: <b>sardines, anchovies, mussels</b>.</li>
            <li><b>Integrated farming</b>: <b>fish + rice paddies</b>.</li>
            <li>Losing top predators → <b>trophic cascade</b>.</li>
          </ul>
        ` },
        { title: 'Biomagnification', html: `
          <p class="lead">Persistent toxins (<b>DDT, PCBs, mercury, lead</b>) concentrate in fat <b>up each level</b>.</p>
          <table class="tbl"><thead><tr><th>Level</th><th>DDT</th></tr></thead><tbody>
            <tr><td>Water</td><td><b>0.000003 ppm</b></td></tr>
            <tr><td>Phytoplankton</td><td>0.04 ppm</td></tr>
            <tr><td>Small fish</td><td>0.5 ppm</td></tr>
            <tr><td>Large fish</td><td>2.0 ppm</td></tr>
            <tr><td>Fish-eating birds</td><td><b>25 ppm</b> (<b>~8 million×</b>)</td></tr>
          </tbody></table>
          <div data-viz="ddt-biomagnification"></div>
          <p><b>Eggshell thinning</b>: bald eagles, peregrine falcons, brown pelicans. DDT banned in USA <b>1972</b>.</p>
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
        { title: 'Types and stages', html: `
          <p class="lead"><b>Succession</b> (<b>community development</b>): gradual change in species over time, ending in a <b>climax community</b>.</p>
          <ul>
            <li>Timescale: <b>geological</b> (<b>paleo-ecological</b>) or medium (<b>1–1000 years</b>).</li>
            <li>Stages: <b>nudation</b> (bare area: eruption, landslide, flood, fire) → <b>invasion</b> (pioneers) → <b>competition</b> (intra- or interspecific) → <b>climax</b> (stabilization).</li>
            <li>Primary sequence: <b>lichens, mosses</b> → soil by mild acids → herbs, grasses, shrubs → <b>trees</b>.</li>
          </ul>
          <figure data-fig="m1-succession-time"></figure>
          <table class="tbl"><thead><tr><th>Sere</th><th>Starts in</th></tr></thead><tbody>
            <tr><td><b>Hydrosere</b></td><td>Water</td></tr>
            <tr><td><b>Xerosere</b></td><td>Dry</td></tr>
            <tr><td><b>Lithosere</b></td><td>Rock</td></tr>
            <tr><td><b>Halosere</b></td><td>Saline</td></tr>
          </tbody></table>
        ` },
        { title: 'Primary vs secondary', html: `
          <div data-viz="succession"></div>
          <table class="tbl"><thead><tr><th></th><th>Primary</th><th>Secondary</th></tr></thead><tbody>
            <tr><td>Starts on</td><td><b>Bare rock</b>, lava, glacial retreat, ponds</td><td>Disturbed land: fire, flood, clearing</td></tr>
            <tr><td>Time</td><td>~<b>1000 years</b></td><td><b>50–200 years</b> (<b>5–10× faster</b>)</td></tr>
            <tr><td>Humus</td><td><b>Absent</b></td><td><b>Present</b></td></tr>
            <tr><td>Seral stages</td><td><b>Many</b></td><td><b>Fewer</b></td></tr>
            <tr><td>Start conditions</td><td><b>Unfavourable</b>, no soil</td><td><b>Favourable</b>, soil present</td></tr>
            <tr><td>Pioneers</td><td><b>Lichens and mosses</b></td><td>Seeds, roots in soil</td></tr>
          </tbody></table>
          <figure data-fig="m1-primary-succession"></figure>
          <p>Primary example: <b>Isle Royale, Michigan</b> (glacier rock, ~1000 yr).</p>
          <figure data-fig="m1-secondary-succession"></figure>
          <p>Secondary example: <b>North Carolina</b> farmland back to forest in ~150–200 yr.</p>
        ` },
        { title: 'Climax theories and pioneers', html: `
          <div class="vs">
            <div class="side"><h4>Monoclimax</h4><p><b>F.E. Clemens</b>: one climax set by <b>climate</b>.</p></div>
            <div class="side"><h4>Polyclimax</h4><p><b>Tansley</b>: <b>many factors</b>.</p></div>
          </div>
          <p>Pioneer traits: explores new habitats, agile, adaptable, <b>wide choice of food</b>, <b>good breeder</b>, <b>tolerant</b> of harsh conditions.</p>
          <p>Final dominant species: <b>climax species</b>. Succession aids <b>conservation of the climax community</b>.</p>
          <div class="note heads-up"><p>Usually spelled <b>Clements</b>; polyclimax = several climaxes set by soil, moisture, fire.</p></div>
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
