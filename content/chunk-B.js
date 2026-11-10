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
          <p class="lead"><b>Ecology</b> is the study of organisms in their natural home interacting with their surroundings, which are other living things (<b>biotic</b>) and physical (<b>abiotic</b>) components.</p>
          <p>An <b>ecosystem</b> is a group of biotic communities of species interacting with one another and with their non-living environment, <b>exchanging energy and matter</b>. So ecology is now often defined as the <b>study of ecosystems</b>.</p>
          <p>Other ways the notes put it:</p>
          <ul>
            <li>A <b>dynamic complex</b> of living organisms and their non-living surroundings interacting as a system, ensuring the <b>flow of energy</b> and <b>cycling of nutrients</b>.</li>
            <li>A <b>structural and functional unit of ecology</b> where living organisms interact with each other and the surroundings.</li>
            <li>Any spatial or organisational unit of living and non-living parts interacting to exchange materials.</li>
          </ul>
          <p>Ecosystems vary hugely in size, structure and composition, yet all share basic structural and functional features. One can be as small as an <b>oasis in a desert</b> or as big as an <b>ocean</b>.</p>
        ` },
        { title: 'Types', html: `
          <p class="lead">First split: <b>natural</b> vs <b>artificial</b>. Natural ones split into <b>terrestrial</b> (land) and <b>aquatic</b> (water).</p>
          <figure data-fig="m1-ecosystem-types-tree"></figure>
          <table class="tbl"><thead><tr><th>Type</th><th>Key points</th></tr></thead><tbody>
            <tr><td>Forest</td><td>Plants, animals and microbes living in coordination with abiotic factors. Forests help <b>maintain Earth's temperature</b> and are the <b>major carbon sink</b>.</td></tr>
            <tr><td>Grassland</td><td>Dominated by <b>grasses and herbs</b>. Examples: temperate grasslands, <b>savanna</b>.</td></tr>
            <tr><td>Tundra</td><td><b>No trees</b>; cold climate or scarce rainfall; snow-covered most of the year. Arctic and <b>mountain tops</b>.</td></tr>
            <tr><td>Desert</td><td>Very little rainfall; <b>hot days, cold nights</b>; found throughout the world.</td></tr>
            <tr><td>Freshwater</td><td>Lakes, ponds, rivers, streams, wetlands. <b>No salt</b> content.</td></tr>
            <tr><td>Marine</td><td>Seas and oceans. <b>More salt</b> and <b>greater biodiversity</b> than freshwater.</td></tr>
          </tbody></table>
          <div class="vs">
            <div class="side"><h4>Natural</h4><p>Forests, rivers. <b>Self-sustaining</b>, evolve without human help.</p></div>
            <div class="side"><h4>Artificial</h4><p>Gardens, aquariums, crop fields. Need <b>human management</b>.</p></div>
          </div>
        ` },
        { title: 'Examples by type', html: `
          <p class="lead">The energy-flow lecture names a real example for each type. These are quiz favourites.</p>
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
          <p class="lead">An ecosystem can be studied from two aspects.</p>
          <div class="vs">
            <div class="side"><h4>Structural</h4><p>The <b>arrangement, types and number of species</b> and their life histories, plus the <b>physical features</b> of the environment.</p></div>
            <div class="side"><h4>Functional</h4><p>The <b>flow of energy</b> and the <b>cycling of nutrients</b>.</p></div>
          </div>
          <div class="note exam"><p>If a question mentions energy flow or nutrient cycling, it is about the functional aspect. Species, numbers and physical features are structural.</p></div>
        ` },
        { title: 'Levels of organisation', html: `
          <p class="lead">Ecologists study life at six levels, from one individual to the whole planet.</p>
          <ol class="steps">
            <li><b>Organism</b> The smallest unit: one living being, with its structure, function and behaviour.</li>
            <li><b>Population</b> Organisms of the <b>same species</b> in one area; they interact through breeding, competition and cooperation.</li>
            <li><b>Community</b> Several populations living and interacting in the same area; shapes biodiversity and structure.</li>
            <li><b>Ecosystem</b> Communities plus their <b>non-living environment</b>; shows how biotic and abiotic parts affect each other.</li>
            <li><b>Biosphere</b> The <b>sum of all ecosystems</b> on Earth, the global ecological system.</li>
          </ol>
          <figure data-fig="m1-levels-organisation"></figure>
          <p>Each level gives insight into the health of natural systems, and knowing the levels helps trace patterns of energy flow, nutrient cycling and species interaction for environmental management.</p>
          <div class="note trap"><p>Population = one species. Community = many species. Ecosystem = community + abiotic environment.</p></div>
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
          <p class="lead">Every ecosystem has <b>biotic</b> (living) and <b>abiotic</b> (non-living) components, and they are <b>interdependent</b>.</p>
          <ul>
            <li>Biotic: plants, animals, bacteria, fungi. They sit at different <b>trophic levels</b> as producers, consumers and decomposers.</li>
            <li>Abiotic: physical and chemical factors such as temperature, sunlight, water, air and soil that control growth and survival.</li>
            <li>Example of interdependence: plants need water, sunlight and minerals to grow and make oxygen.</li>
            <li>The ecosystem works only as well as these interactions. Disrupt one component and the whole system can be affected.</li>
            <li>The balance can shift from natural events or human activity. Knowing the components helps in <b>habitat restoration, agriculture, conservation and urban planning</b>.</li>
          </ul>
        ` },
        { title: 'Abiotic factors', html: `
          <figure data-fig="m1-abiotic-factors"></figure>
          <table class="tbl"><thead><tr><th>Factor</th><th>What it does</th></tr></thead><tbody>
            <tr><td>Light / solar radiation</td><td>Photosynthesis and plant distribution; animal behaviour and migration. The <b>primary energy input</b>: Earth receives <b>~1.7 × 10<sup>17</sup> W</b>, only <b>~0.023%</b> is captured by photosynthesis.</td></tr>
            <tr><td>Temperature</td><td>Sets <b>metabolic rate</b>, reproduction, growth, survival. <b>Q<sub>10</sub> rule</b>: rate doubles for every 10 °C rise.</td></tr>
            <tr><td>Water</td><td><b>Universal solvent</b>; needed for photosynthesis, nutrient transport, waste removal; its availability often limits where species live.</td></tr>
            <tr><td>Soil</td><td>Anchorage, water and nutrients (<b>N, P, K</b>, micronutrients); its composition decides vegetation and microbes.</td></tr>
            <tr><td>Air / atmospheric gases</td><td><b>O<sub>2</sub></b> for respiration, <b>CO<sub>2</sub></b> for photosynthesis, <b>N<sub>2</sub></b> for nitrogen fixation; also regulate climate and weather.</td></tr>
            <tr><td>Minerals and nutrients</td><td>Nitrogen, phosphorus, potassium support cells and plant productivity; cycled through food chains.</td></tr>
            <tr><td>pH, salinity, wind, topography</td><td>Set the chemical and physical setting, so they decide which species thrive and where.</td></tr>
          </tbody></table>
        ` },
        { title: 'Producers and consumers', html: `
          <figure data-fig="m1-biotic-factors"></figure>
          <h3>Producers (autotrophs)</h3>
          <p>Make their own food from an external energy source; the base of the food chain.</p>
          <div class="vs">
            <div class="side"><h4>Photoautotrophs</h4><p>Use <b>sunlight</b>. Grasses, trees, algae, <b>phytoplankton</b>, <b>cyanobacteria</b>.</p></div>
            <div class="side"><h4>Chemoautotrophs</h4><p>Use <b>chemical energy</b>. Deep-sea <b>hydrothermal vent bacteria</b>.</p></div>
          </div>
          <h3>Consumers (heterotrophs)</h3>
          <p>Cannot make food, so they eat others. Classified by feeding habit (herbivores, carnivores, omnivores, parasites).</p>
          <table class="tbl"><thead><tr><th>Group</th><th>Eats</th><th>Examples</th></tr></thead><tbody>
            <tr><td>Primary (herbivores)</td><td>Producers</td><td>Deer, rabbit, grasshopper, <b>zooplankton</b>, cattle</td></tr>
            <tr><td>Secondary (carnivores)</td><td>Herbivores</td><td>Frogs, foxes, small fish, spiders</td></tr>
            <tr><td>Tertiary (top carnivores)</td><td>Secondary consumers</td><td>Eagles, tigers, sharks, orcas</td></tr>
            <tr><td>Omnivores</td><td>Plants and animals</td><td>Humans, bears, crows, pigs</td></tr>
          </tbody></table>
          <p>Consumers control population sizes through <b>predation and grazing</b>, which prevents overpopulation and resource depletion.</p>
        ` },
        { title: 'Decomposers, detritivores', html: `
          <div class="vs">
            <div class="side"><h4>Decomposers (saprotrophs)</h4><p>Break dead organic matter into <b>inorganic nutrients</b> by secreting <b>extracellular enzymes</b>.</p><p>Bacteria: <b>Bacillus, Pseudomonas</b>. Fungi: <b>Aspergillus, Rhizopus</b>.</p></div>
            <div class="side"><h4>Detritivores</h4><p><b>Ingest</b> fragments of dead organic matter.</p><p><b>Earthworms, millipedes, woodlice, dung beetles</b>.</p></div>
          </div>
          <p>Decomposers release nutrients back into the soil and complete the nutrient cycle. They keep the ecosystem <b>clean and fertile</b> and matter for soil formation and plant productivity.</p>
          <p>All biotic groups are needed for energy flow and nutrient balance. Each has a unique role, and losing one can destabilise the ecosystem.</p>
          <div class="note trap"><p>Earthworms eat dead matter, so they are detritivores. Bacteria and fungi digest it outside their bodies with enzymes, so they are decomposers.</p></div>
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
          <p class="lead">A <b>trophic level</b> is a step in a food chain, based on how an organism gets its energy.</p>
          <table class="tbl"><thead><tr><th>Level</th><th>Who</th><th>Examples</th></tr></thead><tbody>
            <tr><td>T1</td><td>Producers (photosynthesis)</td><td>Green plants, algae</td></tr>
            <tr><td>T2</td><td>Primary consumers (herbivores)</td><td>Deer, rabbits, grasshoppers</td></tr>
            <tr><td>T3</td><td>Secondary consumers (carnivores or omnivores)</td><td>Frogs, foxes, small birds</td></tr>
            <tr><td>T4</td><td>Tertiary consumers (top predators)</td><td>Hawks, lions</td></tr>
          </tbody></table>
          <p>Top predators keep the lower levels in check. At each step about <b>90% of energy is lost as heat</b> and only <b>10% passes on</b>, which <b>limits the length</b> of food chains.</p>
          <p>Trophic levels help ecologists model energy efficiency, predict changes and see how organisms depend on each other in food webs.</p>
        ` },
        { title: 'Food chains', html: `
          <p class="lead">A food chain is a <b>linear</b> sequence showing how energy passes from one organism to the next, from a producer to a top predator.</p>
          <div class="vs">
            <div class="side"><h4>Grazing food chain</h4>
              <p>Starts from <b>living green plants</b>.</p>
              <div class="eq">Sun → Grass (T1) → Grasshopper (T2) → Frog (T3) → Snake (T4) → Eagle (T5)</div>
              <ul><li>Most common type in terrestrial and marine ecosystems.</li><li>Energy flows from lower to higher levels.</li><li><b>Maximum 4–5 links</b> because of the 10% rule.</li></ul></div>
            <div class="side"><h4>Detritus food chain</h4>
              <p>Starts from <b>dead organic matter</b>.</p>
              <div class="eq">Dead matter → Detritivores → Decomposers → Inorganic nutrients → Soil → Producers</div>
              <ul><li><b>Dominant</b> in forests and wetlands: <b>80–90%</b> of energy flows here.</li><li>Powered by decomposers; returns nutrients to soil.</li><li>Does <b>not need sunlight directly</b>; works in dark soil layers.</li></ul></div>
          </div>
          <p>Food chains are a simplified picture. They show feeding relationships, energy flow and the effect of a disturbance at any level, but real ecosystems run on food webs.</p>
        ` },
        { title: 'Food webs', html: `
          <p class="lead">A food web is an interconnected <b>network of food chains</b> showing all feeding relationships at once.</p>
          <figure data-fig="m1-food-web"></figure>
          <ul>
            <li><b>More realistic</b>: most organisms eat several prey species.</li>
            <li>One organism can sit at <b>more than one trophic level</b> (an omnivore can be a primary and a secondary consumer).</li>
            <li>Gives <b>stability</b>: if one prey declines, predators switch to alternatives.</li>
            <li><b>Redundancy</b>: energy can flow by several routes.</li>
            <li>Losing a <b>keystone species</b> (e.g. <b>sea otter, wolf</b>) can collapse the whole web; disruption ripples out as <b>trophic cascades</b> or extinctions.</li>
            <li>Helps scientists judge <b>resilience and vulnerability</b>, and guides conservation. Seen in coral reefs, forests and wetlands.</li>
          </ul>
        ` },
        { title: 'Yellowstone cascade', html: `
          <p class="lead">The classic trophic cascade: <b>wolves reintroduced to Yellowstone in 1995</b>.</p>
          <ol class="steps">
            <li><b>Wolves return</b> They prey on deer.</li>
            <li><b>Deer move</b> Deer leave the riverbanks, so grazing there drops.</li>
            <li><b>Vegetation recovers</b> Plants regrow along the banks.</li>
            <li><b>Rivers change</b> Banks stabilise, erosion falls and rivers change course; biodiversity rises.</li>
          </ol>
          <p>A change at the top spread through the whole web and even altered the <b>physical geography</b>.</p>
          <div class="note example"><p>Sharks do the same in the sea: they remove sick and weak fish, keeping fish populations healthy and supporting reefs.</p></div>
          <div class="note exam"><p>When a question asks why a few top predators matter so much, answer with "trophic cascade" and the Yellowstone chain of events.</p></div>
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
          <p class="lead">An ecological pyramid shows the relationship between trophic levels in terms of <b>numbers, biomass or energy</b>. Proposed by <b>Charles Elton (1927)</b>, so also called the <b>Eltonian pyramid</b>.</p>
          <figure data-fig="m1-ecological-pyramid"></figure>
          <p>Pyramids show energy efficiency and productivity, reveal imbalances, and help predict population dynamics and food-web sustainability in ecosystem modelling.</p>
          <div class="vs">
            <div class="side"><h4>Numbers</h4><p>Count of organisms. Usually upright, but exceptions exist.</p></div>
            <div class="side"><h4>Biomass</h4><p>Total mass. Usually decreases upward.</p></div>
            <div class="side"><h4>Energy</h4><p><b>Always upright</b>. Most accurate.</p></div>
          </div>
        ` },
        { title: 'Pyramid of numbers', html: `
          <p class="lead">Number of individuals at each level. Its shape depends on the size of the producers.</p>
          <table class="tbl"><thead><tr><th>Shape</th><th>Ecosystem</th><th>Why</th></tr></thead><tbody>
            <tr><td><b>Upright</b></td><td>Grassland / pond</td><td>Millions of grasses → thousands of insects → hundreds of frogs → tens of birds</td></tr>
            <tr><td><b>Upright</b></td><td>Aquatic (pond)</td><td>Phytoplankton → zooplankton → small fish → large fish</td></tr>
            <tr><td><b>Inverted</b></td><td>Tree ecosystem</td><td><b>One large tree</b> supports many caterpillars → even more parasites (wasps, mites)</td></tr>
            <tr><td><b>Spindle-shaped</b></td><td>Forest</td><td>Few producers (large trees), many herbivores (insects), fewer carnivores</td></tr>
          </tbody></table>
          <div class="note trap"><p>Drawback: it ignores size. One large tree and millions of bacteria cannot be compared fairly by number alone.</p></div>
        ` },
        { title: 'Pyramid of biomass', html: `
          <p class="lead">Total <b>dry weight</b> at each level, in <b>g/m² or kg/m²</b>.</p>
          <table class="tbl"><thead><tr><th>Shape</th><th>Ecosystem</th><th>Why</th></tr></thead><tbody>
            <tr><td><b>Upright</b></td><td>Terrestrial (forest)</td><td>Large plant biomass → less herbivore → even less carnivore biomass</td></tr>
            <tr><td><b>Inverted</b></td><td>Marine / ocean</td><td>Low phytoplankton biomass (rapid turnover) → higher zooplankton biomass</td></tr>
          </tbody></table>
          <div class="note why"><p>Phytoplankton reproduce in <b>hours</b>, so the amount standing at any moment is small even though they produce a lot over time. The pyramid only sees the snapshot, so it looks inverted.</p></div>
          <div class="note trap"><p>Drawback: it shows the standing stock, not the <b>rate</b> of energy production (productivity).</p></div>
        ` },
        { title: 'Pyramid of energy', html: `
          <p class="lead">Total energy at each level, in <b>kJ/m²/yr or kcal/m²/yr</b>. <b>Always upright, no exceptions</b>, because energy always decreases going up.</p>
          <p>It is the <b>most accurate</b> and informative pyramid because it accounts for energy flow over time and reflects the law of energy degradation. It rests on <b>Lindemann's 10% law</b>.</p>
          <table class="tbl"><thead><tr><th>Level</th><th>Energy</th><th>% of original</th></tr></thead><tbody>
            <tr><td>Producers (T1)</td><td><b>10,000 kJ</b></td><td>100%: all energy enters here by photosynthesis</td></tr>
            <tr><td>Primary consumers (T2)</td><td><b>1,000 kJ</b></td><td>10%</td></tr>
            <tr><td>Secondary consumers (T3)</td><td><b>100 kJ</b></td><td>1%</td></tr>
            <tr><td>Tertiary consumers (T4)</td><td><b>10 kJ</b></td><td>0.1%</td></tr>
          </tbody></table>
          <div class="note trap"><p>Drawbacks of all pyramids: each is a <b>snapshot in time</b> that ignores seasonal change, and <b>decomposers and detritivores</b> are usually left out even though they process most of the ecosystem's energy.</p></div>
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
          <p class="lead">All energy in an ecosystem comes from the <b>Sun</b> and enters through <b>producers</b> by photosynthesis. Without producers no other life can exist.</p>
          <div class="eq" data-label="Photosynthesis">6CO<sub>2</sub> + 6H<sub>2</sub>O + light energy → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub></div>
          <ul>
            <li>CO<sub>2</sub> enters through <b>stomata</b> in leaves.</li>
            <li>H<sub>2</sub>O comes from the soil through roots via <b>xylem</b>.</li>
            <li>Light (photons) is absorbed by <b>chlorophyll</b> in chloroplasts.</li>
            <li><b>Glucose</b> stores the captured energy as chemical bond energy.</li>
            <li>O<sub>2</sub> is a by-product, needed for aerobic respiration of all consumers.</li>
          </ul>
        ` },
        { title: 'GPP, NPP, chemosynthesis', html: `
          <table class="tbl"><thead><tr><th>Term</th><th>Meaning</th><th>Global value</th></tr></thead><tbody>
            <tr><td><b>GPP</b> (gross primary productivity)</td><td>Total rate of photosynthesis: all energy fixed from sunlight per unit area per unit time</td><td><b>~120 Pg C/year</b></td></tr>
            <tr><td><b>R</b> (respiration)</td><td>Energy the producer uses for its own metabolism, growth, maintenance</td><td>~60 Pg C/year</td></tr>
            <tr><td><b>NPP</b> (net primary productivity)</td><td>Energy left for the rest of the food chain</td><td><b>~60 Pg C/year</b></td></tr>
          </tbody></table>
          <p>Pg = <b>petagram</b> of carbon.</p>
          <div class="eq">NPP = GPP − R</div>
          <p>NPP is the energy actually available to consumers and sets the ecosystem's <b>carrying capacity</b>. Highest: <b>tropical rainforests (~2,000 g/m²/yr)</b>. Lowest: <b>deserts (~100 g/m²/yr)</b>.</p>
          <h3>Chemosynthesis</h3>
          <p>At <b>hydrothermal vents and cold seeps</b> in the deep sea, chemoautotrophs <b>oxidise inorganic compounds</b> (H<sub>2</sub>S, NH<sub>4</sub><sup>+</sup>, Fe<sup>2+</sup>) to fix CO<sub>2</sub>. These ecosystems live without sunlight, so photosynthesis is not the only way energy enters ecosystems.</p>
        ` },
        { title: 'Laws of thermodynamics', html: `
          <div class="vs">
            <div class="side"><h4>First law: conservation</h4>
              <p>"Energy can neither be <b>created nor destroyed</b>; it can only be transformed."</p>
              <ul><li>Solar (radiant) → chemical (glucose).</li><li>Chemical (food) → kinetic (movement) + thermal (body heat) + chemical (growth).</li><li>Total energy at each step is conserved.</li></ul></div>
            <div class="side"><h4>Second law: entropy</h4>
              <p>"In any energy transformation, some energy is inevitably <b>lost as heat</b>, increasing the entropy of the universe."</p>
              <ul><li>Every transformation (photosynthesis, eating, respiration) makes unrecoverable heat.</li><li>So energy flows <b>one way only</b>: sun → producers → consumers, and cannot be recycled.</li><li>So <b>matter must be recycled</b> through biogeochemical cycles, but energy cannot.</li><li>So ecosystems need a <b>constant input of solar energy</b>.</li></ul></div>
          </div>
          <div class="note exam"><p>"Why is energy flow unidirectional?" The second law: heat lost at each step cannot be used again.</p></div>
        ` },
        { title: 'The 10% law', html: `
          <p class="lead"><b>R.L. Lindemann (1942)</b>: on average only about <b>10%</b> of the energy at one trophic level passes to the next. The other <b>90% is lost</b>.</p>
          <table class="tbl"><thead><tr><th>Where it goes</th><th>Share of energy consumed</th><th>Why</th></tr></thead><tbody>
            <tr><td><b>Respiration</b> (largest loss)</td><td><b>~60%</b></td><td>Burnt for movement, growth, reproduction, maintenance; lost as metabolic heat</td></tr>
            <tr><td>Heat from metabolic reactions</td><td>~15–20%</td><td>Unusable by the next level (second law)</td></tr>
            <tr><td>Undigested matter</td><td>~10%</td><td>Bones, cellulose, chitin shells pass out as faeces to decomposers</td></tr>
            <tr><td>Inefficient assimilation</td><td>~5–10%</td><td>Not all food energy is absorbed in digestion</td></tr>
            <tr><td><b>Available to next level</b></td><td><b>~10%</b></td><td>Stored in body tissue, eaten by the next level</td></tr>
          </tbody></table>
          <div data-viz="energy-10pct"></div>
          <div class="note heads-up"><p>The notes spell the name "Lindemann". The 1942 paper (The Trophic-Dynamic Aspect of Ecology) is usually credited to Raymond Lindeman. Either spelling identifies the 10% law.</p></div>
        ` },
        { title: 'Why chains are short', html: `
          <ul>
            <li><b>Short</b> food chains are more energy-efficient than long ones.</li>
            <li>T1 → T2 → T3 passes 10% of 10%, so only <b>1%</b> of the original energy reaches T3.</li>
            <li>Very few ecosystems hold more than <b>4–5 trophic levels</b>.</li>
            <li>For humans: eating plants (T1) gives <b>10×</b> more energy than eating herbivores (T2) and <b>100×</b> more than eating carnivores (T3).</li>
          </ul>
          <div class="worked">
            <div class="given"><p>Producers fix 10,000 kJ. How much reaches a T4 predator?</p></div>
            <div class="solve"><p>10,000 × 0.1 = 1,000 kJ (T2) → × 0.1 = 100 kJ (T3) → × 0.1 = 10 kJ (T4).</p></div>
            <div class="result"><p><b>10 kJ</b>, which is 0.1% of the original.</p></div>
          </div>
          <div class="note exam"><p>Key line from the notes: energy flows in one direction, decreasing at each step; matter cycles continuously and is never lost.</p></div>
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
          <p class="lead">Unlike energy, <b>matter is recycled</b> continuously between organisms and the environment. These cycles are <b>biogeochemical cycles</b>, driven partly by energy flow and partly by geological and biological processes.</p>
          <ul>
            <li>Major cycles: <b>carbon, nitrogen, phosphorus, water</b>.</li>
            <li>Producers absorb nutrients from soil, water or air → consumers → returned by <b>decomposers</b>. Without decomposers ecosystems would become nutrient-poor.</li>
            <li>Deforestation and industrial pollution disrupt the cycles, causing <b>eutrophication, climate change and soil infertility</b>.</li>
            <li>The cycles keep ecosystems sustainable and resilient, and knowing them improves agriculture, waste management and restoration.</li>
          </ul>
          <h3>Water cycle</h3>
          <p>Movement of water through the atmosphere, surface and underground, <b>driven by solar energy and gravity</b>.</p>
          <ol class="steps">
            <li><b>Evaporation</b> From oceans, lakes and soil; plants add vapour by <b>transpiration</b>.</li>
            <li><b>Condensation</b> Vapour forms clouds.</li>
            <li><b>Precipitation</b> Rain, snow or hail.</li>
            <li><b>Infiltration / runoff</b> Into soil, or into rivers and lakes and back to the oceans.</li>
          </ol>
          <figure data-fig="m1-water-cycle"></figure>
          <p>It regulates climate, supports plants and keeps soil moist. Deforestation, urbanisation and pollution disrupt it (water scarcity, habitat loss); climate change alters rainfall patterns.</p>
        ` },
        { title: 'Carbon cycle', html: `
          <p class="lead">Carbon is the <b>backbone of all organic molecules</b>. It moves between atmosphere, organisms, oceans and the lithosphere.</p>
          <ol class="steps">
            <li><b>Fixation</b> Plants take CO<sub>2</sub> in photosynthesis and make organic carbon (glucose, cellulose, starch).</li>
            <li><b>Consumption</b> Carbon passes along the food chain.</li>
            <li><b>Respiration</b> All organisms release CO<sub>2</sub>.</li>
            <li><b>Decomposition</b> Bacteria and fungi break down dead matter, releasing CO<sub>2</sub> and nutrients.</li>
            <li><b>Combustion</b> Burning fossil fuels and forests releases stored carbon fast, adding to the greenhouse effect and global warming.</li>
            <li><b>Ocean absorption</b> Oceans are a major <b>carbon sink</b>, taking up <b>~30%</b> of human CO<sub>2</sub>; too much causes <b>ocean acidification</b>.</li>
          </ol>
          <div class="eq" data-label="Respiration">C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O + ATP</div>
          <div class="kv">
            <div><span>Pre-industrial CO<sub>2</sub></span><b>~280 ppm</b></div>
            <div><span>2024</span>Over <b>422 ppm</b>, highest in 3 million years</div>
            <div><span>Fossil fuel CO<sub>2</sub></span><b>36 billion tonnes</b> a year, far beyond natural recycling</div>
          </div>
        ` },
        { title: 'Nitrogen cycle', html: `
          <p class="lead">N<sub>2</sub> is <b>78%</b> of the air but most organisms cannot use it. It must be converted to reactive forms. Nitrogen builds <b>amino acids, nucleic acids (DNA, RNA), chlorophyll and ATP</b>.</p>
          <table class="tbl"><thead><tr><th>Process</th><th>Change</th><th>Done by</th></tr></thead><tbody>
            <tr><td><b>Fixation</b></td><td>N<sub>2</sub> → NH<sub>3</sub></td><td><b>Rhizobium</b> (root nodules of legumes), <b>Azotobacter</b> (free-living), lightning, industrial <b>Haber-Bosch</b></td></tr>
            <tr><td><b>Nitrification 1</b></td><td>NH<sub>3</sub> → NO<sub>2</sub><sup>−</sup></td><td><b>Nitrosomonas</b> (aerobic)</td></tr>
            <tr><td><b>Nitrification 2</b></td><td>NO<sub>2</sub><sup>−</sup> → NO<sub>3</sub><sup>−</sup></td><td><b>Nitrobacter</b></td></tr>
            <tr><td><b>Assimilation</b></td><td>NO<sub>3</sub><sup>−</sup> → organic N</td><td>Plant roots make amino acids, proteins, DNA</td></tr>
            <tr><td><b>Ammonification</b></td><td>Organic N → NH<sub>4</sub><sup>+</sup></td><td>Decomposers</td></tr>
            <tr><td><b>Denitrification</b></td><td>NO<sub>3</sub><sup>−</sup> → N<sub>2</sub></td><td><b>Pseudomonas</b> (anaerobic); completes the cycle</td></tr>
          </tbody></table>
          <figure data-fig="m1-nitrogen-cycle"></figure>
          <ul>
            <li>Rhizobium in legumes (peas, beans, lentils) is the basis of <b>natural soil fertility</b>.</li>
            <li>Haber-Bosch makes <b>~120 million tonnes</b> of N fertilizer a year and feeds <b>~50%</b> of the world.</li>
            <li>Excess fertilizer nitrogen causes <b>eutrophication</b> and water pollution.</li>
          </ul>
          <div class="mnemonic"><p>Nitro<b>so</b>monas comes first (ammonia → nitrite, "so" before "b"), Nitro<b>b</b>acter second (nitrite → nitrate).</p></div>
        ` },
        { title: 'Phosphorus cycle', html: `
          <p class="lead">Phosphorus has <b>no atmospheric phase</b>. It moves through the lithosphere, hydrosphere and biosphere only.</p>
          <ol class="steps">
            <li><b>Weathering</b> Phosphate rocks release phosphate (H<sub>2</sub>PO<sub>4</sub><sup>−</sup>) into soil and water.</li>
            <li><b>Uptake</b> Plants build it into <b>ATP, DNA, RNA and cell membranes</b> (phospholipids).</li>
            <li><b>Food chain</b> Consumers get P by eating producers.</li>
            <li><b>Return</b> Decomposers return P to soil or water; microbes mineralise organic P.</li>
            <li><b>Sediment and uplift</b> P builds up in sediments, especially in water; geological uplift returns it to land over time.</li>
          </ol>
          <p>Phosphorus is often the <b>limiting nutrient</b>, especially in freshwater, so it controls productivity. Excess P from <b>detergents and fertilizers</b> causes <b>algal blooms</b> (eutrophication).</p>
        ` },
        { title: 'Decomposition', html: `
          <p class="lead">Decomposition breaks dead organic matter into simpler <b>inorganic</b> compounds, recycling nutrients and keeping soil fertile.</p>
          <figure data-fig="m1-decomposition-steps"></figure>
          <ol class="steps">
            <li><b>Fragmentation</b> Detritivores like <b>earthworms</b> break dead matter into small pieces, raising the surface area for microbes.</li>
            <li><b>Leaching</b> Water-soluble nutrients are washed into the soil.</li>
            <li><b>Catabolism</b> Microbial enzymes break complex molecules into simple compounds, releasing C, N and P.</li>
          </ol>
          <p>The figure in the notes lists two more steps after catabolism: <b>humification</b> and <b>mineralization</b>.</p>
          <ul>
            <li>Driven mainly by <b>bacteria and fungi</b>.</li>
            <li>Speed depends on <b>temperature, moisture, pH and oxygen</b>.</li>
            <li>Without it, dead matter would pile up and nutrients would run out.</li>
          </ul>
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
          <p class="lead"><b>Productivity</b> is the rate at which energy is produced and stored in an ecosystem. It shows how well the ecosystem supports life.</p>
          <table class="tbl"><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>
            <tr><td>Primary productivity</td><td>Rate at which producers capture and store solar energy by photosynthesis; the base energy input</td></tr>
            <tr><td>GPP</td><td>Total energy captured by autotrophs, <b>not counting respiration</b></td></tr>
            <tr><td>NPP</td><td>Energy <b>left after respiration</b>, available to herbivores; sets the energy budget</td></tr>
            <tr><td>Secondary productivity</td><td>Energy stored by <b>consumers</b> as they turn food into biomass</td></tr>
          </tbody></table>
          <p>High-productivity ecosystems such as <b>tropical rainforests and coral reefs</b> support more biodiversity. Measuring productivity helps judge health, efficiency and <b>carrying capacity</b>.</p>
        ` },
        { title: 'Regulation', html: `
          <p class="lead">Ecosystems keep <b>homeostasis</b>: they try to stay stable despite outside disturbance, using feedback.</p>
          <div class="vs">
            <div class="side"><h4>Negative feedback (stabilising)</h4><p>Keeps populations and resources steady. More prey → more predators → prey falls again.</p></div>
            <div class="side"><h4>Positive feedback (amplifying)</h4><p>Pushes rapid change. <b>Overgrazing</b> → vegetation loss → more soil erosion → further vegetation decline.</p></div>
          </div>
          <p>Feedback lets ecosystems self-regulate and adapt to minor stress. Severe or long disturbance can overwhelm it, leading to <b>ecological collapse or regime shifts</b>. Knowing this helps predict responses to climate change, pollution and habitat loss.</p>
        ` },
        { title: 'Stability and resilience', html: `
          <div class="vs">
            <div class="side"><h4>Stability</h4><p>Ability to <b>remain unchanged</b> despite fluctuations; resists disturbance.</p></div>
            <div class="side"><h4>Resilience</h4><p>Ability to <b>recover</b> after a disturbance and bounce back quickly.</p></div>
          </div>
          <ul>
            <li>Both rise with <b>high biodiversity and functional diversity</b>: different species give backup functions.</li>
            <li>Example: in a resilient forest, if one <b>pollinator</b> species is lost another can take its role (<b>redundancy</b>).</li>
            <li><b>Coral reefs</b> are highly productive but <b>less resilient</b> to repeated stress; <b>grasslands</b> recover more easily after fires.</li>
            <li>Habitat fragmentation, pollution and climate change lower resilience and raise collapse risk.</li>
          </ul>
          <h3>Interdependence</h3>
          <ul>
            <li>Biotic interactions: <b>mutualism, predation, parasitism, competition</b>. Pollinators and flowering plants are mutualistic.</li>
            <li>Predator–prey interactions control populations and prevent overexploitation.</li>
            <li>Abiotic factors (sunlight, temperature, rainfall) set distribution and growth.</li>
            <li>Biotic–abiotic links: plants rely on soil nutrients; microbes help cycle them.</li>
          </ul>
        ` },
        { title: 'Human impact and balance', html: `
          <table class="tbl"><thead><tr><th>Activity</th><th>Effect</th></tr></thead><tbody>
            <tr><td>Deforestation</td><td>Habitat loss, soil erosion, climate change, extinction of forest species</td></tr>
            <tr><td>Pollution</td><td>Toxins harm organisms and <b>accumulate in food chains</b></td></tr>
            <tr><td>Climate change</td><td>Changes temperature, rainfall, sea level; shifts species and productivity</td></tr>
            <tr><td>Urbanisation</td><td><b>Habitat fragmentation</b>, loss of green space, more pollution and resource use</td></tr>
            <tr><td>Overexploitation</td><td>Overfishing and mining cut resilience and can collapse networks</td></tr>
          </tbody></table>
          <p>Fixes: sustainable practices, conservation, environmental education and policy enforcement.</p>
          <h3>Ecosystem balance</h3>
          <p>Balance is the stable functioning of all biological and physical parts. It keeps food webs and resource cycles stable, preserves biodiversity, and runs carbon storage, nutrient cycling and <b>water filtration</b>. Losing it brings <b>invasive species outbreaks, collapse or loss of ecosystem services</b>. Balance supports agriculture, fisheries, climate regulation and disaster resilience.</p>
          <figure data-fig="m1-ecology-importance"></figure>
          <p>Key functions of ecosystems: <b>energy flow, nutrient cycling, biodiversity maintenance, environmental regulation</b>. Their services range from food and water to climate control and recreation. The health of ecosystems reflects the health of the planet.</p>
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
        { front: 'Pollinators and flowering plants show which interaction?', back: '<b>Mutualism</b>.' }
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
          <p class="lead">The 10% law makes eating lower on the food chain far more efficient.</p>
          <ul>
            <li>Eating plants (T1): 10,000 kJ of plant energy → <b>10,000 kJ</b> to the human.</li>
            <li>Eating livestock (T2): 10,000 kJ → 1,000 kJ in the animal → <b>~100 kJ</b> to the human.</li>
            <li><b>1 kg of beef</b> needs <b>~8 kg grain, 15,000 litres of water</b> and <b>20× more land</b> than 1 kg of plant food.</li>
            <li>Shifting toward plant-based food is one of the strongest individual actions to cut environmental impact.</li>
          </ul>
          <h3>Sustainable farming</h3>
          <ul>
            <li><b>Polyculture</b> (several crops together) mimics natural food webs: more efficient and resilient.</li>
            <li>Harvesting <b>lower trophic levels</b> (sardines, anchovies, mussels) is more sustainable than top predators.</li>
            <li><b>Integrated farming</b> (fish + rice paddies) uses one species' waste as another's resource, like ecosystem cycling.</li>
          </ul>
        ` },
        { title: 'Biomagnification', html: `
          <p class="lead">Persistent pollutants that do not break down, like <b>DDT, PCBs, mercury and lead</b>, build up in body fat and get <b>more concentrated at each trophic level</b>.</p>
          <table class="tbl"><thead><tr><th>Level</th><th>DDT</th><th>Concentration factor</th></tr></thead><tbody>
            <tr><td>Water / soil</td><td><b>0.000003 ppm</b></td><td>Baseline</td></tr>
            <tr><td>Phytoplankton (T1)</td><td>0.04 ppm</td><td>~13,000×</td></tr>
            <tr><td>Small fish (T2)</td><td>0.5 ppm</td><td>~167,000×</td></tr>
            <tr><td>Large fish (T3)</td><td>2.0 ppm</td><td>~667,000×</td></tr>
            <tr><td>Fish-eating birds (T4)</td><td><b>25 ppm</b></td><td><b>~8 million×</b></td></tr>
          </tbody></table>
          <div data-viz="ddt-biomagnification"></div>
          <p>It caused <b>eggshell thinning</b> in bald eagles, peregrine falcons and brown pelicans, pushing them close to extinction until DDT was banned in the USA in <b>1972</b>.</p>
          <div class="note heads-up"><p>The notes say the 1972 ban was under the Clean Water Act. The US ban was actually an EPA order under the federal pesticide law. Quote 1972 and the USA; the act name is a slip.</p></div>
          <div class="note why"><p>Each predator eats many prey and keeps the fat-soluble toxin from all of them, so the dose multiplies up the chain. That is why the top birds were hit hardest.</p></div>
        ` },
        { title: 'Top predators', html: `
          <p class="lead">Top predators are few, but energy flow explains why they regulate whole ecosystems.</p>
          <ul>
            <li><b>Wolves in Yellowstone</b>: reintroduced in 1995 → less deer grazing → vegetation recovered → riverbanks stabilised → biodiversity rose.</li>
            <li><b>Sharks</b>: remove sick and weak fish → healthier fish populations → support reef ecosystems.</li>
            <li>Losing top predators causes a <b>trophic cascade</b>: changes propagate down through every level.</li>
          </ul>
          <div class="note exam"><p>Summary points from the notes: shorter food chains are more efficient, biomagnification concentrates toxins, and keystone predators regulate trophic cascades.</p></div>
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
          <p class="lead"><b>Ecological succession</b> (community development) is the <b>gradual change</b> in species composition and community processes <b>over time</b>: one community replaced by another after a disturbance or on a new habitat.</p>
          <p>Learning its process, rate and pattern matters for <b>managing ecosystems</b>.</p>
          <h3>Two ways to classify</h3>
          <div class="vs">
            <div class="side"><h4>By timescale</h4><ul><li><b>Geological</b> (millions of years): <b>paleo-ecological</b> changes</li><li><b>Medium</b> timescale: <b>1–1000 years</b></li></ul></div>
            <div class="side"><h4>By starting point</h4><ul><li><b>Primary</b>: bare land with no life</li><li><b>Secondary</b>: where an earlier ecosystem was partly or fully destroyed, naturally or by people</li></ul></div>
          </div>
          <p>Succession ends in a <b>climax community</b>, stable and mature, the end point under given conditions. It raises biodiversity, improves nutrient availability and helps ecosystems recover from damage.</p>
          <figure data-fig="m1-succession-time"></figure>
        ` },
        { title: 'Primary succession', html: `
          <p class="lead">Starts on <b>bare rock or barren land</b> where no life existed, like <b>lava flows or glacial retreats</b>.</p>
          <ol class="steps">
            <li><b>Pioneers arrive</b> <b>Lichens and mosses</b> attach to weathered rock.</li>
            <li><b>Soil forms</b> They secrete mild chemicals and acids that penetrate rock and slowly make fertile soil.</li>
            <li><b>Mid-successional plants</b> Herbs, grasses and low shrubs grow once the soil is moist and fertile enough.</li>
            <li><b>Trees</b> Trees replace the shrubs over the next hundred to thousand years.</li>
          </ol>
          <figure data-fig="m1-primary-succession"></figure>
          <div class="note example"><p>The figure shows a plant community built on bare rock left by a receding glacier on <b>Isle Royale, Michigan, USA</b>, over about a thousand years.</p></div>
        ` },
        { title: 'Secondary succession', html: `
          <p class="lead">Happens where life existed before but was destroyed by <b>wildfire, flood or human action</b>. Surface species are gone but <b>life remains in the soil</b> and takes hold once the area is left alone.</p>
          <div class="note example"><p>Mature oak and pine forests of <b>North Carolina, USA</b> were cleared by European settlers for farming. When nutrients dwindled the settlers moved on, and the abandoned farmland went through secondary succession back to forest, taking about 150–200 years.</p></div>
          <figure data-fig="m1-secondary-succession"></figure>
          <p>Secondary succession is <b>5–10 times faster</b> than primary because most soil nutrients are still there, though at lower levels than in a live forest. The species that takes over at the end is the <b>climax species</b>.</p>
        ` },
        { title: 'Stages and seres', html: `
          <ol class="steps">
            <li><b>Nudation</b> A bare area forms from volcanic eruption, landslide, flood, fire or another catastrophe.</li>
            <li><b>Invasion</b> Organisms arrive on the bare land. These immigrants are the <b>pioneers</b>.</li>
            <li><b>Competition</b> As numbers grow, space and nutrients are shared. The struggle can be <b>intraspecific or interspecific</b>. It changes the environment so the existing community is replaced by immigrants.</li>
            <li><b>Climax</b> "Climax" or <b>stabilization</b>. Once the climax community holds, nothing changes further except by natural catastrophe or human intervention.</li>
          </ol>
          <div class="note heads-up"><p>The notes say succession "takes place via two steps" and then list four. Learn all four: nudation, invasion, competition, climax.</p></div>
          <table class="tbl"><thead><tr><th>Sere</th><th>Starts in</th></tr></thead><tbody>
            <tr><td><b>Hydrosere</b></td><td>Water</td></tr>
            <tr><td><b>Xerosere</b></td><td>Dry, waterless environment</td></tr>
            <tr><td><b>Lithosere</b></td><td>Rocks</td></tr>
            <tr><td><b>Halosere</b></td><td>Saline environment</td></tr>
          </tbody></table>
        ` },
        { title: 'Climax theories and pioneers', html: `
          <div class="vs">
            <div class="side"><h4>Monoclimax theory</h4><p>Given by <b>F.E. Clemens</b>. In a region, all land is eventually covered by a <b>single type of community</b>, determined by <b>climate</b>.</p></div>
            <div class="side"><h4>Polyclimax theory</h4><p>Given by <b>Tansley</b>. The climax is controlled by <b>many factors</b>, not climate alone.</p></div>
          </div>
          <div class="note heads-up"><p>The notes' sentence on polyclimax is garbled ("does not consist of numerous type vegetation controlled by many factors"). The standard idea is that a region can hold several climax communities controlled by many factors (soil, moisture, fire and so on). The ecologist's name is usually spelled Clements.</p></div>
          <h3>Features of pioneer species</h3>
          <div class="chips"><span class="chip">Explore new habitats</span><span class="chip">Agile</span><span class="chip">Adapt easily</span><span class="chip">Wide choice of food</span><span class="chip">Good breeders</span><span class="chip">Tolerant</span></div>
          <p>Succession shows how a new community is established, reveals the factors behind it, and helps <b>conserve the climax community</b>.</p>
        ` },
        { title: 'Primary vs secondary', html: `
          <table class="tbl"><thead><tr><th></th><th>Primary</th><th>Secondary</th></tr></thead><tbody>
            <tr><td>Starts on</td><td>Barren, uninhabited land</td><td>Recently denuded, previously inhabited land</td></tr>
            <tr><td>Time</td><td><b>~1000 years</b> or more</td><td><b>50–200 years</b></td></tr>
            <tr><td>Conditions</td><td>Least suitable; no soil or soil without nutrients</td><td>Soil present, maybe some nutrients</td></tr>
            <tr><td>Humus</td><td><b>Absent</b></td><td><b>Present</b> (from earlier inhabitants)</td></tr>
            <tr><td>Seral communities</td><td>Several intermediate stages</td><td>Fewer</td></tr>
            <tr><td>Environment at start</td><td>Unfavourable</td><td>More or less favourable</td></tr>
            <tr><td>Reproductive structures</td><td>Start from the first species to arrive</td><td>Shaped by the previous community</td></tr>
            <tr><td>Examples</td><td>Bare rock, ponds, desert, lava-filled land</td><td>Land hit by natural calamities or deforestation</td></tr>
          </tbody></table>
          <div class="note why"><p>Every row comes back to soil. Primary succession has to build soil from rock first; secondary starts with soil, humus and buried seeds already in place, so it is faster.</p></div>
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
