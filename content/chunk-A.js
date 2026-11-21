CHUNK({
  chunk: 'A',
  module: 'm1',
  topics: [
    {
      id: 'm1-evs-intro',
      title: 'Environmental studies: definition, scope and importance',
      short: 'What EVS is',
      blurb: 'Environmental science vs environmental studies vs environmental engineering, the ten areas EVS covers, why it matters, and why it needs many subjects at once.',
      source: 'Lecture W1S1, pages 1–5',
      tabs: [
        { title: 'Three definitions', html: `
          <table class="tbl"><thead><tr><th>Field</th><th>Key words</th></tr></thead><tbody>
            <tr><td><b>Environmental science</b></td><td>Humans + natural systems; understand and solve problems</td></tr>
            <tr><td><b>Environmental studies</b></td><td>Interdisciplinary; <b>ethical, social, political, economic</b> sides; law, policy</td></tr>
            <tr><td><b>Environmental engineering</b></td><td><b>Preserve and enhance</b> quality: waste, pollution prevention, water/air purification</td></tr>
          </tbody></table>
          <ul>
            <li><b>Encyclopedia Britannica</b>: interdisciplinary (ecology, geology, meteorology, biology, chemistry, engineering, physics).</li>
            <li><b>Spellman &amp; Stoudt</b>: <b>how the Earth works</b> and how we affect its life support systems.</li>
          </ul>
        ` },
        { title: 'Scope and importance', html: `
          <p class="lead">Scope: <b>10 areas</b>.</p>
          <table class="tbl"><thead><tr><th>Area</th><th>Covers</th></tr></thead><tbody>
            <tr><td><b>Ecology and ecosystem studies</b></td><td>Organisms and surroundings</td></tr>
            <tr><td><b>Atmospheric science</b></td><td>Weather, air pollution, climate change</td></tr>
            <tr><td><b>Geoscience</b></td><td>Geologic processes, soil, landforms, resources</td></tr>
            <tr><td><b>Hydrology and water resources</b></td><td>Freshwater, water quality</td></tr>
            <tr><td><b>Pollution control</b></td><td>Air, water, soil pollution</td></tr>
            <tr><td><b>Biodiversity and conservation</b></td><td>Species and habitats</td></tr>
            <tr><td><b>Environmental chemistry</b></td><td>Chemical processes and impacts</td></tr>
            <tr><td><b>Environmental policy and management</b></td><td>Laws, rules, moral dilemmas</td></tr>
            <tr><td><b>Sustainable development</b></td><td>Present needs without endangering future generations</td></tr>
            <tr><td><b>Human population and urbanization</b></td><td>Population growth, urban development</td></tr>
          </tbody></table>
          <p><b>Importance (7)</b>: global issues; sustainable use; conserve soil, water, air, energy; identify pollution sources; human health; responsible behaviour; <b>predict natural disasters</b>.</p>
        ` },
        { title: 'Multidisciplinary approach', html: `
          <p class="lead">Issues are <b>complex and interconnected</b>. EVS is an <b>applied science</b> (practical answers on <b>finite resources</b>).</p>
          <table class="tbl"><thead><tr><th>Discipline</th><th>Contributes</th></tr></thead><tbody>
            <tr><td>Biology</td><td>Ecosystems, biodiversity</td></tr>
            <tr><td>Chemistry</td><td>Pollution, C/N cycles, toxicity</td></tr>
            <tr><td>Physics</td><td><b>Energy flow, climate modelling, solar radiation</b></td></tr>
            <tr><td>Geology</td><td>Soil, minerals, disasters</td></tr>
            <tr><td>Geography</td><td>Mapping, planning</td></tr>
            <tr><td>Economics</td><td><b>Cost-benefit analysis</b></td></tr>
            <tr><td>Political science</td><td>Laws, treaties</td></tr>
            <tr><td>Sociology</td><td>Behaviour, awareness</td></tr>
            <tr><td>Engineering</td><td>Pollution control, renewables</td></tr>
            <tr><td>Ethics</td><td>Environmental justice</td></tr>
          </tbody></table>
          <h3>Why needed (6)</h3>
          <ol>
            <li><b>Holistic understanding</b></li>
            <li><b>Problem solving</b>: water scarcity = <b>hydrology + policy + infrastructure</b></li>
            <li><b>Sustainable development</b>: ecology + economy + equity</li>
            <li><b>Informed decisions</b></li>
            <li><b>Policy</b> formulation</li>
            <li><b>Adaptability</b>: <b>microplastics</b>, pandemics from habitat loss</li>
          </ol>
        ` }
      ],
      flashcards: [
        { front: 'Field that stresses the ethical, social, political and economic sides of environmental problems?', back: '<b>Environmental studies</b>.' },
        { front: 'Spellman &amp; Stoudt define environmental science as…', back: 'The interdisciplinary study of <b>how the Earth works</b> and how we are affecting the Earth\'s life support systems.' },
        { front: 'Field that uses engineering and scientific principles to preserve and enhance environmental quality?', back: '<b>Environmental engineering</b>.' },
        { front: 'Scope area for "weather patterns, air pollution and climate change"?', back: '<b>Atmospheric science</b>.' },
        { front: 'Scope area for "chemical processes in the environment and their impacts"?', back: '<b>Environmental chemistry</b>.' },
        { front: 'Why is EVS called an applied science?', back: 'It seeks <b>practical answers</b> to making human civilisation sustainable on the Earth\'s finite resources.' },
        { front: 'Contribution of physics to EVS?', back: '<b>Energy flow, climate modelling, solar radiation</b>.' },
        { front: 'Contribution of economics to EVS?', back: '<b>Cost-benefit analysis</b>, resource management, sustainable development.' },
        { front: 'Example used for "effective problem solving" in the multidisciplinary approach?', back: 'Water scarcity: <b>hydrology</b> (science) + <b>policy</b> (law) + <b>infrastructure</b> (engineering).' },
        { front: 'Two emerging challenges named under "adaptability"?', back: '<b>Microplastics</b> and global pandemics linked to <b>habitat loss</b>.' }
      ],
      oneLiners: [
        'Environmental science: humans + natural systems, aiming to understand and solve problems.',
        'Environmental studies adds ethics, society, politics and economics.',
        'Environmental engineering designs the technology: waste, pollution prevention, water/air purification.',
        'Scope has 10 areas, from ecology to human population and urbanization.',
        'Sustainable development = meet current needs without endangering future generations.',
        'EVS is multidisciplinary and an applied science.',
        'Six reasons for multidisciplinary: holistic, problem solving, sustainable development, decisions, policy, adaptability.'
      ],
      formulas: []
    },
    {
      id: 'm1-env-issues',
      title: 'Major environmental issues',
      short: 'Environmental issues',
      blurb: 'Eight issues with their causes, effects and Indian examples, the global picture with its numbers, India\'s situation, and loss of biodiversity.',
      source: 'Lecture W1S1, pages 5–11',
      tabs: [
        { title: 'Climate, forests, waste', html: `
          <h3>1. Climate change</h3>
          <ul>
            <li>Cause: <b>GHGs</b> (CO<sub>2</sub>, CH<sub>4</sub>, N<sub>2</sub>O) from fossil fuels, deforestation, industry.</li>
            <li>Effects: warming, melting ice, <b>sea-level rise</b>, droughts, floods, hurricanes.</li>
            <li>IPCC: up <b>~1.1 °C</b> since pre-industrial.</li>
          </ul>
          <h3>2. Deforestation</h3>
          <ul>
            <li>Cause: <b>logging, agriculture, urban expansion, mining</b>.</li>
            <li>Effects: habitat loss, water cycle disrupted, <b>carbon sinks lost</b>, <b>soil erosion, desertification</b>.</li>
            <li>Example: <b>Amazon rainforest</b>.</li>
          </ul>
          <h3>3. Waste management</h3>
          <ul>
            <li>Landfill overflow; <b>methane</b> from organic decay; poor segregation.</li>
            <li>Fix: <b>3Rs</b> (reduce, reuse, recycle), composting, waste-to-energy.</li>
            <li><b>CPCB 2021</b>: India over <b>150,000 t</b> MSW/day.</li>
          </ul>
        ` },
        { title: 'Pollution and hazardous waste', html: `
          <table class="tbl"><thead><tr><th>Issue</th><th>Key facts</th><th>Example</th></tr></thead><tbody>
            <tr><td>4. Industrial and vehicular</td><td>Industry: <b>PM2.5, PM10</b>. Vehicles: <b>CO, NOx, hydrocarbons</b>. Smog, acid rain</td><td><b>Delhi</b></td></tr>
            <tr><td>5. Water pollution</td><td>Runoff (<b>nitrates, phosphates</b>), effluents, sewage → <b>eutrophication</b>, endocrine disruption</td><td><b>Punjab</b> groundwater: <b>Endosulfan, DDT</b></td></tr>
            <tr><td>6a. Tannery sludge</td><td><b>Chromium</b> in soil, groundwater</td><td><b>Ranipet (Tamil Nadu)</b></td></tr>
            <tr><td>6b. Biomedical waste</td><td>HIV, hepatitis risk; <b>segregation, incineration, autoclaving</b></td><td><b>COVID-19</b> surge</td></tr>
            <tr><td>7. Crackers</td><td><b>SO<sub>2</sub>, NO, Pb</b>, noise; <b>Supreme Court</b> limits, <b>green crackers</b></td><td>Delhi AQI <b>Severe</b> after Diwali</td></tr>
            <tr><td>8. E-waste</td><td><b>Lead, mercury, cadmium</b> leach; fix: <b>EPR</b> (extended producer responsibility)</td><td>India <b>3rd-largest</b>, over <b>1 million t/yr</b> (CPCB 2020)</td></tr>
          </tbody></table>
        ` },
        { title: 'Global and India numbers', html: `
          <table class="tbl"><thead><tr><th>Global</th><th>Fact</th></tr></thead><tbody>
            <tr><td>Climate</td><td><b>UNFCCC</b>; <b>Paris Agreement (2015)</b>: warming <b>below 2 °C</b></td></tr>
            <tr><td>Biodiversity</td><td><b>1 million species</b> at risk</td></tr>
            <tr><td>Plastic</td><td>Over <b>8 million t</b>/yr into oceans; microplastics in <b>human blood</b></td></tr>
            <tr><td>Air</td><td><b>99%</b> breathe unsafe air (Beijing, Cairo)</td></tr>
            <tr><td>E-waste</td><td><b>53 million t</b> in 2020</td></tr>
          </tbody></table>
          <table class="tbl"><thead><tr><th>India</th><th>Fact</th></tr></thead><tbody>
            <tr><td>Air</td><td><b>14 of 20</b> most polluted cities; Delhi (<b>crop burning</b>, vehicles)</td></tr>
            <tr><td>Water</td><td><b>70%</b> surface water polluted (<b>Ganga, Yamuna</b>)</td></tr>
            <tr><td>Biodiversity</td><td><b>10%</b> of flora and fauna at risk</td></tr>
            <tr><td>Waste</td><td>Over <b>160,000 t</b>/day; ~<b>60%</b> collected, under <b>30%</b> processed</td></tr>
            <tr><td>Climate risk</td><td><b>7th</b></td></tr>
          </tbody></table>
          <div class="note trap"><p>Solid waste/day: <b>150,000 t</b> (CPCB 2021) vs <b>160,000 t</b> (India scenario).</p></div>
          <p><b>Biodiversity loss</b> causes: <b>habitat destruction, pollution, climate change, overexploitation, invasive species</b>.</p>
        ` }
      ],
      flashcards: [
        { front: 'Three greenhouse gases named as the cause of climate change?', back: '<b>CO<sub>2</sub>, CH<sub>4</sub>, N<sub>2</sub>O</b>.' },
        { front: 'Global temperature rise since pre-industrial times (IPCC)?', back: 'About <b>1.1 °C</b>.' },
        { front: 'Example for deforestation?', back: '<b>Amazon rainforest</b>, a big contributor to global carbon emissions.' },
        { front: 'Gas released from decomposing organic waste in landfills?', back: '<b>Methane</b>.' },
        { front: 'Pesticide residues found in Punjab groundwater?', back: '<b>Endosulfan and DDT</b>.' },
        { front: 'Ranipet (Tamil Nadu) is the example for…', back: '<b>Chromium</b> pollution of groundwater from tannery sludge dumps.' },
        { front: 'Three ways to manage biomedical waste?', back: '<b>Segregation, incineration, autoclaving</b>.' },
        { front: 'Toxic gases from firecrackers?', back: '<b>SO<sub>2</sub>, NO, Pb</b>.' },
        { front: 'India\'s rank and amount in e-waste (CPCB 2020)?', back: '<b>Third-largest</b> generator, over <b>1 million tonnes/year</b>.' },
        { front: 'Share of world population exposed to unsafe air?', back: '<b>99%</b>.' },
        { front: 'How many of the world\'s 20 most polluted cities are in India?', back: '<b>14</b>.' },
        { front: 'India\'s rank in climate risk?', back: '<b>7th</b>.' }
      ],
      oneLiners: [
        'Paris Agreement (2015): keep warming below 2 °C; UNFCCC is the global framework.',
        '1 million species at risk; over 8 million tons of plastic into oceans every year.',
        '53 million metric tons of e-waste worldwide in 2020.',
        'India: 70% of surface water polluted (Ganga, Yamuna); 10% of flora and fauna at risk.',
        'India: over 160,000 t solid waste/day, ~60% collected, under 30% processed.',
        'E-waste fix: formal recycling + extended producer responsibility (EPR).',
        'Biodiversity loss causes: habitat destruction, pollution, climate change, overexploitation, invasive species.'
      ],
      formulas: []
    },
    {
      id: 'm1-earth-spheres',
      title: 'Earth as a life support system: atmosphere and hydrosphere',
      short: 'Atmosphere & water',
      blurb: 'The four spheres, what air is made of, the five layers of the atmosphere with their heights and temperatures, and the hydrosphere and water cycle.',
      source: 'Lecture W1S3, pages 1–8',
      tabs: [
        { title: 'Four spheres and air', html: `
          <p class="lead">"Sphere" = <b>to surround or encompass</b>.</p>
          <table class="tbl"><thead><tr><th>Need</th><th>Sphere</th><th>Root</th></tr></thead><tbody>
            <tr><td>Air</td><td><b>Atmosphere</b></td><td>atmo = <b>steam and vapour</b></td></tr>
            <tr><td>Water</td><td><b>Hydrosphere</b></td><td>hydro = water</td></tr>
            <tr><td>Food</td><td><b>Biosphere</b></td><td>bio = life</td></tr>
            <tr><td>Ground, nutrients</td><td><b>Lithosphere</b></td><td>litho = rocks, minerals</td></tr>
          </tbody></table>
          <p><b>Biosphere</b> depends on the other three.</p>
          <figure data-fig="m1-four-spheres"></figure>
          <div class="kv">
            <div><span>Nitrogen</span><b>78%</b></div>
            <div><span>Oxygen</span><b>21%</b></div>
            <div><span>Others</span><b>1%</b> (water vapour, CO<sub>2</sub>, methane)</div>
          </div>
          <figure data-fig="m1-air-composition"></figure>
        ` },
        { title: 'Atmosphere layers', html: `
          <p class="lead">Bottom up: <b>troposphere → stratosphere → mesosphere → thermosphere → exosphere</b>.</p>
          <div class="mnemonic"><p>"<b>T</b>he <b>S</b>trong <b>M</b>an <b>T</b>hrows <b>E</b>ggs".</p></div>
          <figure data-fig="m1-atmosphere-layers-photo"></figure>
          <table class="tbl"><thead><tr><th>Layer (km)</th><th>Temp (°C)</th><th>Key facts</th></tr></thead><tbody>
            <tr><td><b>Troposphere</b> 0–15</td><td>15 to −56, <b>falls</b></td><td>Life, planes; <b>most mass</b>, all <b>weather</b>; top <b>tropopause</b> (lid)</td></tr>
            <tr><td><b>Stratosphere</b> 15–50</td><td>−56 to −2, <b>rises</b></td><td><b>Ozone layer</b> absorbs UV; stable, dry: <b>weather balloons</b>; top <b>stratopause</b></td></tr>
            <tr><td><b>Mesosphere</b> 50–85</td><td><b>Coldest</b>, ~<b>−90</b></td><td><b>Meteors burn</b>; <b>noctilucent clouds</b>; top <b>mesopause</b></td></tr>
            <tr><td><b>Thermosphere</b> 85–800</td><td><b>Rises</b> (UV, X-ray), 500–2,000</td><td><b>Auroras</b>; satellites, <b>ISS</b></td></tr>
            <tr><td><b>Exosphere</b></td><td>Very thin</td><td>Outermost; air <b>leaks into space</b></td></tr>
          </tbody></table>
          <figure data-fig="m1-stratosphere-profile"></figure>
          <figure data-fig="m1-ozone-uv"></figure>
          <figure data-fig="m1-mesosphere-diagram"></figure>
          <figure data-fig="m1-atmosphere-poster"></figure>
          <div class="note heads-up"><p>Slide table: mesosphere −92, thermosphere 1200; poster: troposphere 0–12. Use <b>0–15 / 15–50 / 50–85 km</b>.</p></div>
        ` },
        { title: 'Hydrosphere', html: `
          <p class="lead">Hydrosphere: <b>all water</b> (surface, underground, air; liquid, ice, vapour); <b>distributes heat</b>. Includes saltwater, freshwater, glaciers, ice caps, groundwater.</p>
          <div class="kv">
            <div><span>Oceans</span><b>~97%</b></div>
            <div><span>Lakes and rivers</span>~2%</div>
            <div><span>Usable freshwater</span>only <b>1%</b></div>
          </div>
          <p>Water cycle: <b>evaporation → condensation → precipitation → runoff/infiltration → collection</b>.</p>
          <figure data-fig="m1-water-cycle-spheres"></figure>
        ` }
      ],
      flashcards: [
        { front: 'What does "sphere" mean?', back: 'To <b>surround or encompass</b>.' },
        { front: 'Root meaning of "atmo"?', back: '<b>Steam and vapour</b>.' },
        { front: 'Which sphere depends on the other three?', back: 'The <b>biosphere</b>.' },
        { front: 'Composition of air by volume?', back: 'N<sub>2</sub> <b>78%</b>, O<sub>2</sub> <b>21%</b>, others 1% (water vapour, CO<sub>2</sub>, methane).' },
        { front: 'Layer holding most of the atmosphere\'s mass and almost all weather?', back: '<b>Troposphere</b> (0–15 km).' },
        { front: 'Boundary that acts as a lid on weather?', back: '<b>Tropopause</b>.' },
        { front: 'Why does temperature rise with height in the stratosphere?', back: '<b>Ozone absorbs solar (UV) energy</b>.' },
        { front: 'Coldest layer and its temperature?', back: '<b>Mesosphere</b>, about <b>−90 °C</b>.' },
        { front: 'Ice clouds seen at twilight in the mesosphere?', back: '<b>Noctilucent clouds</b>.' },
        { front: 'Where do auroras occur and the ISS orbit?', back: '<b>Thermosphere</b>.' },
        { front: 'Layer where air leaks gradually into space?', back: '<b>Exosphere</b>.' },
        { front: 'Share of Earth\'s water available as freshwater for humans?', back: 'Only <b>1%</b>.' }
      ],
      oneLiners: [
        'Air: atmosphere; water: hydrosphere; food: biosphere; ground and nutrients: lithosphere.',
        'Troposphere 0–15 km, stratosphere 15–50, mesosphere 50–85, thermosphere 85–800 km.',
        'Boundaries: tropopause, stratopause, mesopause.',
        'Temperature falls with height in troposphere and mesosphere, rises in stratosphere and thermosphere.',
        'Meteors burn in the mesosphere; auroras in the thermosphere.',
        'Water: ~97% oceans, ~2% lakes and rivers, 1% usable freshwater.',
        'Water cycle: evaporation → condensation → precipitation → runoff → collection.'
      ],
      formulas: []
    },
    {
      id: 'm1-geosphere',
      title: 'Geosphere',
      short: 'Geosphere',
      blurb: 'Earth\'s interior layers, rocks, minerals, soil and landforms, the processes that shape the surface, why the geosphere matters, and how it interacts with the other spheres.',
      source: 'Lecture W1S3, pages 8–12',
      tabs: [
        { title: 'Layers', html: `
          <p class="lead">Geosphere: <b>solid Earth</b>, <b>inner core to crust</b>; drives plate tectonics, mountain formation, erosion.</p>
          <table class="tbl"><thead><tr><th>Layer</th><th>Key fact</th></tr></thead><tbody>
            <tr><td>Inner core</td><td><b>Solid</b>, <b>iron and nickel</b></td></tr>
            <tr><td>Outer core</td><td><b>Liquid</b>; <b>magnetic field</b></td></tr>
            <tr><td>Mantle</td><td><b>Semi-solid</b>; <b>convection currents</b> drive plate tectonics</td></tr>
            <tr><td>Crust</td><td>Outermost; <b>continental and oceanic plates</b></td></tr>
          </tbody></table>
          <figure data-fig="m1-earth-layers"></figure>
        ` },
        { title: 'Rocks, processes, interactions', html: `
          <div class="kv">
            <div><span>Rocks</span><b>Igneous, sedimentary, metamorphic</b></div>
            <div><span>Minerals</span>Natural, <b>inorganic</b>, <b>definite composition</b>, <b>crystalline</b></div>
            <div><span>Soil</span><b>Weathering of rocks</b> + <b>decay of organic matter</b></div>
            <div><span>Landforms</span>From <b>tectonics</b> + erosion</div>
          </div>
          <p>Processes: <b>plate tectonics</b>, <b>weathering and erosion</b>, <b>sedimentation</b> (sediment → sedimentary rock).</p>
          <p>Importance: ecosystems, resources, <b>climate</b> (volcanic gases), physical geography.</p>
          <table class="tbl"><thead><tr><th>Sphere</th><th>Interaction</th></tr></thead><tbody>
            <tr><td>Atmosphere</td><td>Volcanoes release <b>CO<sub>2</sub> and ash</b></td></tr>
            <tr><td>Hydrosphere</td><td>Rivers <b>erode landforms</b>, carry sediment</td></tr>
            <tr><td>Biosphere</td><td><b>Roots break rocks</b>; burrowing animals</td></tr>
          </tbody></table>
          <p>Also interacts with the <b>cryosphere</b>.</p>
        ` }
      ],
      flashcards: [
        { front: 'Composition and state of the inner core?', back: '<b>Solid</b>, mainly <b>iron and nickel</b>.' },
        { front: 'Which layer produces Earth\'s magnetic field?', back: 'The <b>liquid outer core</b>.' },
        { front: 'What drives plate tectonics?', back: '<b>Convection currents</b> in the semi-solid mantle.' },
        { front: 'Three rock types by origin?', back: '<b>Igneous, sedimentary, metamorphic</b>.' },
        { front: 'Three properties of a mineral?', back: 'Naturally occurring <b>inorganic</b> solid, <b>definite chemical composition</b>, <b>crystalline structure</b>.' },
        { front: 'How does soil form?', back: '<b>Weathering of rocks</b> and <b>decay of organic matter</b>.' },
        { front: 'Process by which sediments harden into rock?', back: '<b>Sedimentation</b>.' },
        { front: 'Geosphere–biosphere interaction example?', back: '<b>Plant roots break rocks</b> and add organic matter; burrowing animals change soil structure.' }
      ],
      oneLiners: [
        'Geosphere = solid Earth, inner core to crust.',
        'Inner core solid Fe–Ni; outer core liquid (magnetic field); mantle semi-solid (convection); crust has plates.',
        'Processes: plate tectonics, weathering and erosion, sedimentation.',
        'Volcanoes link geosphere to atmosphere; rivers link it to hydrosphere; roots link it to biosphere.',
        'Geosphere importance: ecosystems, resources, climate, physical geography.'
      ],
      formulas: []
    },
    {
      id: 'm1-biosphere',
      title: 'Biosphere',
      short: 'Biosphere',
      blurb: 'What the biosphere is, its living components and ecosystems, its functions, and how living things drive the carbon, nitrogen, oxygen and phosphorus cycles.',
      source: 'Lecture W1S3, pages 12–14',
      tabs: [
        { title: 'Components and ecosystems', html: `
          <p class="lead">Biosphere = <b>global sum of all ecosystems</b>.</p>
          <figure data-fig="m1-biosphere-diagram"></figure>
          <div class="kv">
            <div><span>Plants</span><b>Primary producers</b></div>
            <div><span>Animals</span><b>Consumers</b>: herbivores, carnivores, omnivores</div>
            <div><span>Microorganisms</span>Bacteria, fungi, algae: <b>decomposers</b>; recycle nutrients, soil fertility</div>
          </div>
          <figure data-fig="m1-food-chain-cycle"></figure>
          <p>Ecosystem = <b>biotic</b> + <b>abiotic</b> (sunlight, soil, air, water). Examples: forests, grasslands, deserts, freshwater, marine.</p>
        ` },
        { title: 'Functions and cycles', html: `
          <p class="lead">Functions: <b>supports life</b>, <b>maintains biodiversity</b> (resilience), <b>regulates biogeochemical cycles</b>.</p>
          <figure data-fig="m1-biogeochemical-components"></figure>
          <table class="tbl"><thead><tr><th>Cycle</th><th>Key fact</th></tr></thead><tbody>
            <tr><td>Carbon</td><td>Plants fix <b>CO<sub>2</sub></b>; respiration, decomposition, fossil fuels release it</td></tr>
            <tr><td>Nitrogen</td><td>Bacteria fix N<sub>2</sub>; returned by <b>denitrification</b></td></tr>
            <tr><td>Oxygen</td><td>Plants make O<sub>2</sub>, animals return CO<sub>2</sub></td></tr>
            <tr><td>Phosphorus</td><td>Used in <b>DNA and energy transfer</b></td></tr>
          </tbody></table>
        ` }
      ],
      flashcards: [
        { front: 'Definition of the biosphere?', back: 'The <b>global sum of all ecosystems</b> where life exists on Earth.' },
        { front: 'Role of plants in the biosphere?', back: '<b>Primary producers</b>; base of food chains.' },
        { front: 'Role of microorganisms in the biosphere?', back: '<b>Decompose</b> dead matter, recycle nutrients, add to soil fertility.' },
        { front: 'Three functions of the biosphere?', back: '<b>Supports life</b>, <b>maintains biodiversity</b>, <b>regulates biogeochemical cycles</b>.' },
        { front: 'Process that returns nitrogen to the atmosphere?', back: '<b>Denitrification</b>.' },
        { front: 'What do organisms use phosphorus for?', back: '<b>DNA and energy transfer</b>.' }
      ],
      oneLiners: [
        'Biosphere = global sum of all ecosystems.',
        'Plants produce, animals consume, microbes decompose.',
        'Ecosystem examples: forests, grasslands, deserts, freshwater, marine.',
        'More biodiversity = more resilience.',
        'Biosphere drives the carbon, nitrogen, oxygen and phosphorus cycles.'
      ],
      formulas: []
    }
  ],
  figures: [
    { id: 'm1-four-spheres', src: 'pages/m1/evs-w1-02/p11.png', crop: [0.1, 0.48, 0.52, 0.355], caption: 'Earth sits in the middle of the four spheres: atmosphere, hydrosphere, biosphere and lithosphere.', alt: 'Circle divided into four photo segments labelled atmosphere, hydrosphere, biosphere and lithosphere around a picture of Earth.' },
    { id: 'm1-air-composition', src: 'pages/m1/evs-w1-02/p02.png', crop: [0.25, 0.14, 0.55, 0.22], caption: 'Nitrogen is the big slice (78%), oxygen next (21%), and everything else is a sliver (1%).', alt: 'Pie chart of air composition with nitrogen, oxygen and others.' },
    { id: 'm1-atmosphere-layers-photo', src: 'pages/m1/evs-w1-02/p02.png', crop: [0.13, 0.53, 0.79, 0.35], caption: 'The five layers stacked above Earth, troposphere at the bottom and exosphere at the top.', alt: 'Photo of Earth from space with bands labelled troposphere, stratosphere, mesosphere, thermosphere and exosphere.' },
    { id: 'm1-stratosphere-profile', src: 'pages/m1/evs-w1-02/p03.png', crop: [0.10, 0.64, 0.80, 0.35], caption: 'Weather and clouds stay below the tropopause; the ozone layer, weather balloons and spy planes sit in the stratosphere; the red line shows temperature turning upward above the tropopause.', alt: 'Altitude chart from the troposphere to the mesosphere with a temperature curve, aircraft, balloon, ozone layer and meteors.' },
    { id: 'm1-ozone-uv', src: 'pages/m1/evs-w1-02/p04.png', crop: [0.1, 0.178, 0.79, 0.322], caption: 'Stratospheric ozone stops most incoming UV; surface-level ozone near cities is smog.', alt: 'Diagram of UV-A, UV-B and UV-C rays reaching the stratospheric ozone layer above the troposphere.' },
    { id: 'm1-mesosphere-diagram', src: 'pages/m1/evs-w1-02/p05.png', crop: [0.1, 0.133, 0.8, 0.347], caption: 'Troposphere, stratosphere with the ozone layer, and mesosphere, separated by the tropopause, stratopause and mesopause.', alt: 'Curved bands showing troposphere, stratosphere including ozone layer and mesosphere, with UV and methane molecules.' },
    { id: 'm1-atmosphere-poster', src: 'pages/m1/evs-w1-02/p06.png', crop: [0.1, 0.29, 0.79, 0.445], caption: 'Each layer with what you find there: planes in the troposphere, the ozone layer in the stratosphere, meteors in the mesosphere, satellites and auroras higher up.', alt: 'Poster of the atmosphere layers with heights and objects in each layer.' },
    { id: 'm1-water-cycle-spheres', src: 'pages/m1/evs-w1-02/p08.png', crop: [0.17, 0.18, 0.62, 0.32], caption: 'Evaporation, condensation, precipitation, runoff and collection make one loop.', alt: 'Water cycle illustration with evaporation, condensation, precipitation, runoff and collection labels.' },
    { id: 'm1-earth-layers', src: 'pages/m1/evs-w1-02/p09.png', crop: [0.10, 0.07, 0.80, 0.36], caption: 'From the outside in: crust, mantle, outer core and inner core.', alt: 'Cut-away of Earth showing crust, mantle, outer core and inner core.' },
    { id: 'm1-biosphere-diagram', src: 'pages/m1/evs-w1-02/p12.png', crop: [0.12, 0.34, 0.53, 0.37], caption: 'The biosphere overlaps the other three spheres: life is found in air, water and earth.', alt: 'Illustration of the biosphere with labelled zones for atmosphere, hydrosphere and lithosphere.' },
    { id: 'm1-food-chain-cycle', src: 'pages/m1/evs-w1-02/p13.png', crop: [0.10, 0.13, 0.43, 0.34], caption: 'Producer to primary, secondary, tertiary and final consumers, with fungi returning matter to the start.', alt: 'Circular food chain from green plant through grasshopper, frog, snake and hawk, with fungi.' },
    { id: 'm1-biogeochemical-components', src: 'pages/m1/evs-w1-02/p14.png', crop: [0.1, 0.178, 0.55, 0.268], caption: 'The biosphere sits on top of five cycles: carbon, phosphorus, nitrogen, water and oxygen.', alt: 'Graphic of the biosphere above five columns labelled carbon, phosphorus, nitrogen, water and oxygen cycle.' }
  ]
});
