CHUNK({
  chunk: 'H',
  module: 'm3',
  topics: [
    {
      id: 'm3-air-basics',
      title: 'Air pollution: meaning, numbers and AQI',
      short: 'Air pollution and AQI',
      blurb: 'What air pollution is, how clean air is made up, the key global numbers, and the Air Quality Index bands.',
      source: 'Lecture W3S1 (Air pollution), pages 1–2',
      tabs: [
        { title: 'Definition', html: `
          <p class="lead"><b>Air pollution</b>: harmful substances in the atmosphere at concentrations high enough to <b>damage living organisms and the environment</b>.</p>
          <ul>
            <li><b>Pollutants</b>: gases, particles or biological materials (dust, smoke).</li>
            <li>Clean air: <b>78% nitrogen, 21% oxygen</b>, argon &lt; 1%, CO₂, water vapour, traces of ozone, helium, ammonia; pollution disturbs this balance.</li>
            <li><b>WHO</b>: contamination of <b>indoor or outdoor</b> air by any chemical, physical or biological agent that alters the atmosphere and risks health.</li>
          </ul>
        ` },
        { title: 'Key numbers', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>7 million</b></td><td>Premature deaths a year from air pollution (WHO, 2023)</td></tr>
              <tr><td><b>99%</b></td><td>Of the world's people breathe air above WHO guideline limits</td></tr>
              <tr><td><b>Over 5 trillion</b></td><td>Yearly global welfare losses</td></tr>
              <tr><td>AQI &gt; 300</td><td>Delhi, Lahore and Dhaka in winter, among the most polluted cities</td></tr>
              <tr><td><b>3.8 million</b></td><td>Deaths a year from indoor air pollution (WHO)</td></tr>
            </tbody>
          </table>
          <div class="note heads-up">The notes give the economic cost as "over 5 trillion" with no currency.</div>
        ` },
        { title: 'Air Quality Index', html: `
          <p><b>AQI</b>: daily report, <b>0–500</b> scale; <b>5–8 key pollutants</b> → one number, colour, health message.</p>
          <table class="tbl">
            <thead><tr><th>AQI</th><th>Category</th><th>Colour</th><th>Advice</th></tr></thead>
            <tbody>
              <tr><td>0–50</td><td>Good</td><td>Green</td><td>Air quality satisfactory</td></tr>
              <tr><td>51–100</td><td>Acceptable</td><td>Yellow</td><td>Some sensitive groups affected</td></tr>
              <tr><td>101–200</td><td>Unhealthy (sensitive groups)</td><td>Orange</td><td>Sensitive groups limit outdoor activity</td></tr>
              <tr><td>201–300</td><td>Unhealthy</td><td>Red</td><td>Everyone nearby affected</td></tr>
              <tr><td>301–400</td><td>Very unhealthy</td><td>Purple</td><td>Health alert; avoid outdoor activity</td></tr>
              <tr><td>401–500</td><td>Hazardous</td><td>Maroon</td><td>Emergency for the whole population</td></tr>
            </tbody>
          </table>
          <div data-viz="aqi-bands"></div>
          <div class="note heads-up">101–200 and 201–300 are both "unhealthy": orange = sensitive groups, red = everyone.</div>
        ` }
      ],
      flashcards: [
        { front: 'Deaths a year from air pollution (WHO 2023)?', back: '<b>7 million</b> premature deaths.' },
        { front: 'Share of people breathing air above WHO limits?', back: '<b>99%</b>.' },
        { front: 'AQI scale range and pollutants it combines?', back: '<b>0–500</b>; <b>5–8</b> key pollutants.' },
        { front: 'AQI 401–500: category and colour?', back: '<b>Hazardous, maroon</b>: emergency for everyone.' },
        { front: 'AQI 301–400 colour?', back: '<b>Purple</b> (very unhealthy).' }
      ],
      oneLiners: [
        'Pollutants can be gases, particles or biological materials.',
        'WHO definition covers indoor and outdoor air.',
        'AQI 0–50 is green, good.'
      ],
      formulas: []
    },
    {
      id: 'm3-air-pollutants',
      title: 'Types of air pollutants',
      short: 'Air pollutant types',
      blurb: 'Primary and secondary pollutants, particulate vs gaseous, and indoor air pollutants.',
      source: 'Lecture W3S1 (Air pollution), pages 2–4',
      tabs: [
        { title: 'Primary', html: `
          <p class="lead"><b>Primary pollutants</b>: emitted <b>directly</b> from identifiable sources.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>CO</b></td><td>Colourless, odourless; incomplete combustion; binds haemoglobin <b>200×</b> more than O₂ → hypoxia</td></tr>
              <tr><td><b>SO₂</b></td><td>Coal plants, volcanoes; acid rain, respiratory damage</td></tr>
              <tr><td><b>NOₓ</b></td><td>High-temperature combustion; smog and acid rain precursor</td></tr>
              <tr><td><b>PM2.5 / PM10</b></td><td>Dust, combustion, construction; PM2.5 → deep lungs, blood</td></tr>
              <tr><td><b>VOCs</b></td><td>Paints, solvents, exhaust; ground-level ozone precursors</td></tr>
              <tr><td><b>NH₃</b></td><td>Agriculture (fertiliser, livestock); forms PM2.5</td></tr>
              <tr><td><b>Lead</b></td><td>Leaded fuel (largely phased out), industry; neurotoxin</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Secondary', html: `
          <p class="lead"><b>Secondary pollutants</b>: <b>formed by reactions</b> in air; often <b>more harmful</b>.</p>
          <ul>
            <li><b>Ground-level ozone</b>: NOₓ + VOCs + sunlight → O₃; main smog component; damages airways.</li>
            <li><b>PAN</b> (peroxyacetyl nitrates): VOCs + NOₓ + sunlight; eye irritation; in photochemical smog.</li>
            <li><b>H₂SO₄ / HNO₃</b>: SO₂/NOₓ + water vapour → acid rain.</li>
            <li><b>Secondary PM</b>: sulphates, nitrates, organic carbon formed from gases.</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Particulate</h4><p>Dust, smoke, soot; PM2.5 is especially dangerous.</p></div>
            <div class="side"><h4>Gaseous</h4><p>CO₂, NO₂, SO₂.</p></div>
          </div>
        ` },
        { title: 'Indoor', html: `
          <p>Outdoor: vehicles, industry, construction. Indoor: cooking fuels, poor ventilation (primary). WHO: <b>~3.8 million deaths/yr</b>, more than outdoor in many developing nations; <b>women on biomass stoves</b> worst hit.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Radon</b></td><td>Radioactive, from soil/rock; <b>2nd leading cause of lung cancer</b> after smoking</td></tr>
              <tr><td><b>Formaldehyde</b></td><td>Pressed wood, insulation, tobacco; <b>IARC Group 1</b> carcinogen</td></tr>
              <tr><td>Tobacco smoke</td><td><b>70+ carcinogens</b>: benzene, arsenic, formaldehyde</td></tr>
              <tr><td>Cooking smoke</td><td>Biomass, kerosene: CO, PM2.5, black carbon</td></tr>
              <tr><td><b>Asbestos</b></td><td>Old insulation; <b>mesothelioma</b> (incurable)</td></tr>
              <tr><td>Mould, allergens</td><td>Poor ventilation; spores → asthma</td></tr>
            </tbody>
          </table>
        ` }
      ],
      flashcards: [
        { front: 'Primary vs secondary pollutant?', back: 'Primary: <b>emitted directly</b>. Secondary: <b>formed by reactions</b> in air.' },
        { front: 'How much more strongly does CO bind haemoglobin than O₂?', back: '<b>200×</b>, causing hypoxia.' },
        { front: 'How does ground-level ozone form?', back: '<b>NOₓ + VOCs + sunlight</b> → O₃.' },
        { front: 'Which secondary pollutant irritates the eyes in smog?', back: '<b>PAN</b> (peroxyacetyl nitrates).' },
        { front: 'Second leading cause of lung cancer?', back: '<b>Radon</b>.' },
        { front: 'Asbestos causes…', back: '<b>Mesothelioma</b>.' },
        { front: 'Indoor air pollution deaths a year?', back: 'About <b>3.8 million</b>.' }
      ],
      oneLiners: [
        'Ammonia from farms helps form PM2.5.',
        'Formaldehyde is an IARC Group 1 carcinogen.',
        'Tobacco smoke holds 70+ carcinogens.'
      ],
      formulas: [
        { name: 'Ground-level ozone', html: `NO<sub>x</sub> + VOCs + sunlight → O<sub>3</sub>` },
        { name: 'Photochemical smog', html: `VOCs + NO<sub>x</sub> + sunlight → O<sub>3</sub> + PAN + secondary aerosols` }
      ]
    },
    {
      id: 'm3-air-causes-effects',
      title: 'Causes and effects of air pollution',
      short: 'Air: causes and effects',
      blurb: 'Natural and human causes of air pollution, its effects on health, the environment (warming, acid rain, ozone, smog) and the economy.',
      source: 'Lecture W3S1 (Air pollution), pages 4–8',
      tabs: [
        { title: 'Natural causes', html: `
          <ul>
            <li><b>Volcanic eruptions</b>: huge SO₂ and particle emissions (Mount Pinatubo, 1991).</li>
            <li><b>Forest fires</b>: CO, PM2.5, black carbon, ozone precursors.</li>
            <li><b>Dust storms</b>: PM10 from deserts (Sahara, Thar) gives regional haze.</li>
            <li><b>Biogenic VOCs</b>: isoprene from forests adds to natural ozone.</li>
          </ul>
        ` },
        { title: 'Human causes', html: `
          <table class="tbl">
            <tbody>
              <tr><td>Industry</td><td>Coal plants: <b>largest SO₂, NOₓ, mercury</b>. Cement: dust, <b>~8% of global CO₂</b>. Steel coke ovens: SO₂, PAHs, benzene. <b>Brick kilns</b>: PM, black carbon (South Asia). Refineries: SO₂, H₂S, VOCs, benzene</td></tr>
              <tr><td>Vehicles</td><td>CO, NOₓ, HC, PM2.5. <b>Diesel</b>: most PM2.5, black carbon. Old two-wheelers: VOCs. Aviation: NOₓ, black carbon at altitude. <b>~30%</b> of India's urban air pollution</td></tr>
              <tr><td>Fossil fuels</td><td>Coal, petroleum: CO₂, SO₂</td></tr>
              <tr><td>Agriculture</td><td><b>Stubble burning</b> (Punjab, Haryana) → Delhi smog; NH₃ from fertiliser/manure; paddy <b>methane</b>; pesticide aerosols</td></tr>
              <tr><td>Construction</td><td>Urban dust</td></tr>
              <tr><td>Waste burning</td><td>Toxic substances</td></tr>
            </tbody>
          </table>
          <div class="note exam">Human activities = dominant cause.</div>
        ` },
        { title: 'Health effects', html: `
          <div class="vs">
            <div class="side"><h4>Respiratory</h4><ul>
              <li><b>Asthma</b>: PM2.5 and O₃ cause bronchoconstriction</li>
              <li><b>COPD</b>: long-term smoke and PM</li>
              <li><b>Lung cancer</b>: PM2.5, PAHs, benzene (IARC Group 1)</li>
              <li>Reduced lung function in children</li>
              <li><b>Pneumonia</b>: leading infectious killer</li>
            </ul></div>
            <div class="side"><h4>Cardiovascular</h4><ul>
              <li><b>Ischaemic heart disease</b>: PM2.5 inflammation, atherosclerosis</li>
              <li><b>Stroke</b>: NO₂ and fine particles</li>
              <li><b>Hypertension</b></li>
              <li><b>Arrhythmias</b> from short PM spikes</li>
            </ul></div>
          </div>
          <p><b>Other</b>: PM2.5 linked to cognitive decline and <b>Alzheimer's</b>; lead and mercury harm child development; pre-term birth and low birth weight; <b>insulin resistance</b>; eye and skin irritation.</p>
        ` },
        { title: 'Environment', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Global warming</b></td><td>CO₂, CH₄, N₂O trap infrared. IPCC AR6 (2021): <b>1.1°C</b> since pre-industrial; sea level <b>+0.28–1.01 m by 2100</b></td></tr>
              <tr><td><b>Acid rain</b></td><td>SO₂, NOₓ → sulphuric, nitric acid; <b>pH &lt; 5.6</b>. Harms crops, soil, forests, limestone (<b>Taj Mahal yellowing</b>), fish. <b>Black Forest</b>, Germany, 1970s–80s</td></tr>
              <tr><td><b>Ozone depletion</b></td><td>CFCs → Cl radicals destroy O₃; Antarctic hole <b>1985</b>; <b>Montreal Protocol 1987</b> phased out CFCs, most successful treaty</td></tr>
              <tr><td><b>Photochemical smog</b></td><td>First in <b>Los Angeles, 1940s</b>. Delhi smog worsened by <b>temperature inversion</b>; visibility &lt; 500 m</td></tr>
            </tbody>
          </table>
          <p><b>Economic</b>: healthcare costs, lower productivity, crop damage.</p>
        ` }
      ],
      flashcards: [
        { front: 'Largest emitters of SO₂, NOₓ and mercury?', back: '<b>Coal-fired thermal power plants</b>.' },
        { front: "Cement's share of global CO₂?", back: '<b>~8%</b>.' },
        { front: 'Vehicle type that emits the most PM2.5?', back: '<b>Diesel</b> vehicles.' },
        { front: 'pH of acid rain?', back: '<b>Below 5.6</b>.' },
        { front: 'Treaty that phased out CFCs?', back: '<b>Montreal Protocol, 1987</b>.' },
        { front: 'Where was photochemical smog first seen?', back: '<b>Los Angeles, 1940s</b>.' },
        { front: "What traps Delhi's winter smog?", back: '<b>Temperature inversion</b>.' }
      ],
      oneLiners: [
        'Mount Pinatubo (1991) released massive SO₂.',
        'Stubble burning in Punjab and Haryana feeds Delhi smog.',
        'Acid rain yellows the Taj Mahal.',
        'Antarctic ozone hole discovered in 1985.'
      ],
      formulas: []
    },
    {
      id: 'm3-air-control',
      title: 'Controlling air pollution',
      short: 'Air pollution control',
      blurb: 'Particulate and gas control devices (with the baghouse), Indian policies and laws, green infrastructure, individual action, and the London and Delhi smog cases.',
      source: 'Lecture W3S1 (Air pollution), pages 8–11',
      tabs: [
        { title: 'Particulate control', html: `
          <p class="lead">PM removed by <b>filtration, electrical charging, centrifugal force or scrubbing liquid</b>. ESPs, fabric filters: <b>&gt; 99% efficiency</b>.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Fabric filter / baghouse</b></td><td>Fabric bags + dust cake; <b>fine, sub-micron</b> particles</td></tr>
              <tr><td><b>Electrostatic precipitator</b></td><td>Charged particles stick to electrodes; fine ash, soot</td></tr>
              <tr><td><b>Wet scrubber</b></td><td>Liquid (water) traps particles; hot/moist gas; solids and gases</td></tr>
              <tr><td><b>Cyclone separator</b></td><td>Centrifugal vortex; <b>larger</b> particles</td></tr>
              <tr><td><b>Gravity settling chamber</b></td><td>Large particles settle; <b>pre-cleaner</b></td></tr>
            </tbody>
          </table>
          <p>Also: cleaner fuels (LPG, CNG, renewables), EVs.</p>
        ` },
        { title: 'How a baghouse works', html: `
          <div class="steps">
            <div><b>Air intake</b>: dusty gas → dirty-air inlet → dirty-air chamber.</div>
            <div><b>Filtration</b>: through woven/felted bags; <b>dust cake</b> forms outside, aids filtering.</div>
            <div><b>Clean air discharge</b>: up to clean-air chamber → outlet.</div>
            <div><b>Cleaning cycle</b>: pressure drop builds → <b>pulse-jet</b> of compressed air shakes cake loose.</div>
            <div><b>Dust collection</b>: into <b>hopper</b>, out via <b>rotary airlock valve</b>.</div>
          </div>
          <figure data-fig="m3-baghouse"></figure>
        ` },
        { title: 'Gas control', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>FGD</b> (flue gas desulphurisation)</td><td>Limestone scrubbers remove SO₂; mandatory in Indian thermal plants</td></tr>
              <tr><td><b>SCR</b> (selective catalytic reduction)</td><td>Ammonia + catalyst: NOₓ → N₂ + H₂O</td></tr>
              <tr><td><b>Catalytic converter</b></td><td>Oxidises CO, HC; reduces NOₓ; BS-VI essential</td></tr>
              <tr><td>Activated carbon</td><td>Adsorbs VOCs and organic pollutants</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Government', html: `
          <ul>
            <li><b>BS-VI</b> (2020): = Euro 6; NOₓ <b>−70%</b> vs BS-IV.</li>
            <li><b>FAME II</b> for EVs; PLI for batteries.</li>
            <li><b>GRAP</b> (Delhi): emergency at <b>AQI &gt; 200</b> (ban construction, brick kilns, diesel trucks).</li>
            <li><b>NCAP (2019)</b>: PM2.5/PM10 <b>−20–30% by 2024</b>, <b>122</b> non-attainment cities.</li>
            <li>Renewables <b>500 GW by 2030</b>; wind replacing coal; BEE star labels, LEDs, green building codes; <b>International Solar Alliance</b> (India-led).</li>
            <li>Green infrastructure: urban trees, green roofs/walls (heat island), constructed wetlands, industry <b>downwind</b> of homes.</li>
          </ul>
          <table class="tbl">
            <tbody>
              <tr><td><b>Air Act, 1981</b></td><td>Set up State Pollution Control Boards and emission standards</td></tr>
              <tr><td><b>EPA, 1986</b></td><td>Umbrella law for central action</td></tr>
              <tr><td><b>CPCB</b></td><td>Sets <b>NAAQS</b>, monitors compliance</td></tr>
              <tr><td>NAAQS</td><td>PM2.5 <b>40 µg/m³</b>, PM10 <b>60 µg/m³</b> (annual); WHO stricter: 5 and 15</td></tr>
              <tr><td><b>SAFAR</b></td><td>Real-time air quality monitoring and forecasting</td></tr>
            </tbody>
          </table>
          <p><b>Individuals</b>: public transport, no waste burning, save energy, plant trees.</p>
        ` },
        { title: 'Case studies', html: `
          <div class="vs">
            <div class="side"><h4>London Great Smog, 1952</h4><p>Fog + coal smoke + <b>inversion</b>, <b>5 days</b> in December. ~<b>4,000</b> died at once, <b>12,000</b> long-run. → UK <b>Clean Air Act, 1956</b>, one of the first.</p></div>
            <div class="side"><h4>Delhi winter smog</h4><p>Stubble burning, vehicles, dust, inversion. AQI often <b>&gt; 400</b>. GRAP: <b>odd-even</b>, school closures, diesel generator bans.</p></div>
          </div>
          <p>Both: <b>temperature inversion</b>, a <b>warm layer over cold ground air</b> acts as a lid, trapping pollution; set up by cold winter nights.</p>
          <div data-viz="temp-inversion"></div>
        ` }
      ],
      flashcards: [
        { front: 'Device for fine, sub-micron particles using fabric bags?', back: '<b>Baghouse</b> (fabric filter).' },
        { front: 'Device for larger particles using a vortex?', back: '<b>Cyclone separator</b>.' },
        { front: 'What removes SO₂ from power plant flue gas?', back: '<b>FGD</b>: limestone scrubbers.' },
        { front: 'How does SCR control NOₓ?', back: 'Ammonia + catalyst convert NOₓ to <b>N₂ and H₂O</b>.' },
        { front: 'NCAP target?', back: '<b>20–30%</b> cut in PM2.5/PM10 by 2024 in <b>122 cities</b>.' },
        { front: 'Indian NAAQS annual PM2.5 limit?', back: '<b>40 µg/m³</b> (WHO: 5).' },
        { front: 'Law that followed the London smog?', back: 'UK <b>Clean Air Act, 1956</b>.' }
      ],
      oneLiners: [
        'Gravity settling chambers are pre-cleaners.',
        'BS-VI (2020) cuts NOₓ 70% from BS-IV.',
        'GRAP triggers at AQI above 200.',
        'Air Act 1981 set up the SPCBs.'
      ],
      formulas: []
    },
    {
      id: 'm3-water-basics',
      title: 'Water pollution: meaning, standards and types',
      short: 'Water pollution basics',
      blurb: 'What water pollution is, key global numbers, WHO drinking-water standards, and the types by source and by pattern.',
      source: 'Lecture W3S2 (Water pollution), pages 1–2',
      tabs: [
        { title: 'Definition and numbers', html: `
          <p class="lead"><b>Water pollution</b>: contamination of rivers, lakes, oceans, groundwater by physical, chemical or biological substances, making water <b>unfit for its intended use</b>.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>2.2 billion</b></td><td>People lack safe drinking water (WHO, 2023)</td></tr>
              <tr><td><b>1.8 million</b></td><td>Children die a year from preventable diarrhoeal disease</td></tr>
              <tr><td><b>80%</b></td><td>Of wastewater discharged without adequate treatment</td></tr>
              <tr><td><b>80%</b></td><td>Of illnesses in developing countries are water-related</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'WHO standards', html: `
          <table class="tbl">
            <tbody>
              <tr><td>pH</td><td><b>6.5–8.5</b></td></tr>
              <tr><td>Turbidity</td><td><b>&lt; 1 NTU</b> (Nephelometric Turbidity Unit)</td></tr>
              <tr><td>TDS</td><td><b>&lt; 500 mg/L</b></td></tr>
              <tr><td>Pathogens</td><td>E. coli <b>0 CFU/100 mL</b></td></tr>
              <tr><td>Heavy metals</td><td>As &lt; 0.01 mg/L, Pb &lt; 0.01 mg/L</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Types', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Surface</b></td><td>Most visible (Yamuna foam, oil slicks)</td></tr>
              <tr><td><b>Groundwater</b></td><td>Pesticides, metals seep into aquifers; wells drunk from</td></tr>
              <tr><td><b>Marine</b></td><td>Oil, plastics, runoff; <b>Great Pacific Garbage Patch</b> (2× Texas)</td></tr>
              <tr><td><b>Thermal</b></td><td>Hot plant water lowers dissolved oxygen</td></tr>
            </tbody>
          </table>
          <div class="vs">
            <div class="side"><h4>Point source</h4><p>One outlet (factory pipe, sewage); <b>easier to regulate</b>.</p></div>
            <div class="side"><h4>Non-point source</h4><p>Diffuse (farm runoff, stormwater); harder; <b>~50%</b> of water pollution.</p></div>
          </div>
          <p><b>Transboundary</b>: crosses national/state borders via rivers.</p>
        ` }
      ],
      flashcards: [
        { front: 'People without safe drinking water?', back: '<b>2.2 billion</b> (WHO 2023).' },
        { front: 'WHO pH range for drinking water?', back: '<b>6.5–8.5</b>.' },
        { front: 'WHO turbidity and TDS limits?', back: 'Turbidity <b>&lt; 1 NTU</b>; TDS <b>&lt; 500 mg/L</b>.' },
        { front: 'Point vs non-point source?', back: 'Point: one identifiable outlet. Non-point: diffuse runoff, harder to control.' },
        { front: 'Why is thermal pollution harmful?', back: 'Warmer water holds <b>less dissolved oxygen</b>.' }
      ],
      oneLiners: [
        '80% of wastewater goes untreated.',
        'Great Pacific Garbage Patch: twice the size of Texas.',
        'Non-point sources give ~50% of water pollution in many countries.'
      ],
      formulas: []
    },
    {
      id: 'm3-water-causes-effects',
      title: 'Causes and effects of water pollution',
      short: 'Water causes and effects',
      blurb: 'Industrial, agricultural, domestic, oil and radioactive sources, waterborne disease, chemical effects, eutrophication and biomagnification.',
      source: 'Lecture W3S2 (Water pollution), pages 2–5',
      tabs: [
        { title: 'Causes', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Industrial</b></td><td>Heavy metals (Hg, Pb, Cd, Cr): electroplating, mining; acids, solvents; textile <b>azo dyes, high BOD</b>; drug residues; <b>acid mine drainage</b> (pyrite → sulphuric acid)</td></tr>
              <tr><td><b>Agricultural</b></td><td>Nitrates, phosphates (eutrophication); DDT, Endosulfan = <b>POPs</b>; feedlot pathogens, hormones, antibiotics; salty return flows; sediment</td></tr>
              <tr><td><b>Domestic</b></td><td>India sewage <b>~72,368 MLD</b> vs capacity <b>~31,841 MLD</b>; detergents, medicines; dumping; landfill <b>leachate</b></td></tr>
              <tr><td><b>Oil spills</b></td><td><b>Exxon Valdez</b> (1989) 41 million L; <b>Deepwater Horizon</b> (2010) 780 million L; bilge water; rigs</td></tr>
              <tr><td><b>Radioactive</b></td><td>Cooling water, hospital/lab waste, uranium and thorium tailings</td></tr>
            </tbody>
          </table>
          <div class="note exam">Ganga: <b>~1.4 billion L/day</b> sewage vs <b>~861 MLD</b> capacity. <b>NMCG</b> launched <b>2014</b>.</div>
        ` },
        { title: 'Health effects', html: `
          <table class="tbl">
            <thead><tr><th>Disease</th><th>Agent</th><th>Spread</th><th>Symptoms</th></tr></thead>
            <tbody>
              <tr><td>Cholera</td><td><em>Vibrio cholerae</em></td><td>Water/food</td><td>Severe diarrhoea, dehydration</td></tr>
              <tr><td>Typhoid</td><td><em>Salmonella typhi</em></td><td>Faecal-oral</td><td>High fever, abdominal pain</td></tr>
              <tr><td>Dysentery</td><td><em>E. histolytica</em></td><td>Water</td><td>Bloody diarrhoea, cramps</td></tr>
              <tr><td>Hepatitis A</td><td>Hepatitis A virus</td><td>Faecal-oral</td><td>Jaundice, liver inflammation</td></tr>
              <tr><td>Arsenicosis</td><td>Arsenic</td><td>Arsenic-rich water</td><td>Skin lesions, cancer</td></tr>
            </tbody>
          </table>
          <ul>
            <li><b>Mercury</b>: Minamata disease (tremors, nerve damage, birth defects).</li>
            <li><b>Lead</b>: cognitive impairment, especially under-5s.</li>
            <li><b>Nitrates</b>: <b>methaemoglobinaemia (blue baby syndrome)</b>.</li>
            <li><b>Fluoride excess</b>: dental and skeletal fluorosis.</li>
            <li><b>Arsenic</b>: hyperkeratosis, skin, liver and bladder cancer.</li>
          </ul>
        ` },
        { title: 'Ecosystem effects', html: `
          <ul>
            <li><b>Eutrophication</b>: excess N, P → algal bloom → algae die → bacteria use O₂ → <b>dead zones</b>. Gulf of Mexico <b>~22,720 km²</b>.</li>
            <li><b>Biomagnification</b>: DDT, mercury concentrate up the chain; fish <b>10×</b> prey's mercury, bird <b>100×</b> baseline.</li>
            <li><b>Biodiversity loss</b>: indicators (mayflies, trout, salmon) vanish first; keystone loss; coral bleaching; oil smothers eggs, birds.</li>
            <li><b>Habitat destruction</b>: sediment smothers spawning grounds; plastic kills <b>marine mammals, seabirds</b>; wetlands lose filtering.</li>
          </ul>
        ` }
      ],
      flashcards: [
        { front: 'What is acid mine drainage?', back: 'Sulphuric acid formed when <b>pyrite</b> in mines oxidises.' },
        { front: "India's sewage generated vs treatment capacity?", back: '<b>~72,368 MLD</b> vs <b>~31,841 MLD</b>.' },
        { front: 'Blue baby syndrome is caused by…', back: '<b>Nitrates</b> (methaemoglobinaemia).' },
        { front: 'Cause of typhoid?', back: '<b><em>Salmonella typhi</em></b>, faecal-oral.' },
        { front: 'Steps of eutrophication?', back: 'Excess N, P → algal bloom → algae die → decomposers use O₂ → <b>dead zone</b>.' },
        { front: 'Deepwater Horizon oil released?', back: '<b>780 million litres</b> (2010).' },
        { front: 'Indicator species that vanish first?', back: '<b>Mayflies, trout, salmon</b>.' }
      ],
      oneLiners: [
        'Excess fluoride gives dental and skeletal fluorosis.',
        'DDT and Endosulfan are persistent organic pollutants.',
        'Exxon Valdez spilled 41 million litres in 1989.'
      ],
      formulas: []
    },
    {
      id: 'm3-water-control',
      title: 'Controlling water pollution',
      short: 'Water pollution control',
      blurb: 'The three stages of sewage treatment, industrial and farm controls, nature-based fixes, Indian laws, and the Minamata, Yamuna and Deepwater Horizon cases.',
      source: 'Lecture W3S2 (Water pollution), pages 5–8',
      tabs: [
        { title: 'Sewage treatment', html: `
          <p class="lead">Wastewater treatment: <b>most important engineering intervention</b>.</p>
          <table class="tbl">
            <thead><tr><th>Stage</th><th>Steps</th><th>Outcome</th></tr></thead>
            <tbody>
              <tr><td><b>Primary</b> (physical)</td><td>Screening (rags, plastic), grit chamber (sand), primary clarifier (sludge)</td><td>~60% solids, ~30% BOD</td></tr>
              <tr><td><b>Secondary</b> (biological)</td><td>Activated sludge, trickling filters (biofilm on rocks), rotating biological contactors (discs)</td><td><b>85–95% BOD</b>, most solids</td></tr>
              <tr><td><b>Tertiary</b> (advanced)</td><td>N, P removal; UV/chlorination for pathogens; RO/membranes for dissolved chemicals</td><td>Near-drinking quality</td></tr>
            </tbody>
          </table>
          <div data-viz="sewage-treatment"></div>
          <div class="note exam">India's STP capacity must <b>triple</b>; 2022: only <b>28%</b> of Class-I/II sewage treated.</div>
        ` },
        { title: 'Industry and farms', html: `
          <div class="vs">
            <div class="side"><h4>Industry</h4><ul>
              <li><b>Zero Liquid Discharge (ZLD)</b>: recycle all wastewater, nothing discharged.</li>
              <li><b>ETPs</b> (Effluent Treatment Plants): mandatory before discharge.</li>
              <li><b>CETPs</b> (Common ETPs): shared by small industries.</li>
              <li><b>Ion exchange, activated carbon</b>: remove heavy metals, organics.</li>
              <li><b>CPCB</b> monitors compliance.</li>
            </ul></div>
            <div class="side"><h4>Agriculture</h4><ul>
              <li><b>IPM</b> (Integrated Pest Management): minimal pesticide.</li>
              <li><b>Precision farming</b>: fertiliser only where/when needed.</li>
              <li><b>Buffer strips</b>: vegetation along waterways filters runoff.</li>
              <li><b>Constructed wetlands</b>: plants treat farm runoff.</li>
              <li><b>Organic farming</b>: no synthetic pesticide/fertiliser.</li>
            </ul></div>
          </div>
          <h3>Nature-based solutions</h3>
          <ul>
            <li><b>Phytoremediation</b>: <b>water hyacinth</b>, <b>vetiver grass</b> absorb pollutants.</li>
            <li><b>Bioremediation</b>: microbes break down organics.</li>
            <li><b>Riparian buffers, wetland restoration</b>: cut non-point pollution.</li>
            <li><b>Rainwater harvesting</b>: less runoff and groundwater depletion.</li>
          </ul>
        ` },
        { title: 'Laws', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Water Act, 1974</b></td><td>Set up the Pollution Control Boards</td></tr>
              <tr><td><b>EPA, 1986</b></td><td>Umbrella law</td></tr>
              <tr><td><b>NMCG / Namami Gange</b></td><td>Clean Ganga mission</td></tr>
              <tr><td><b>CRZ Notification</b></td><td>Protects coastal waters</td></tr>
              <tr><td><b>IS 10500:2012</b></td><td>BIS drinking water standard</td></tr>
            </tbody>
          </table>
          <div class="note heads-up">Notes give NMCG as <b>2014</b> on one page, "NMCG / Namami Gange Programme" as <b>2015</b> on another. Learn NMCG 2014.</div>
        ` },
        { title: 'Case studies', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Minamata, Japan (1956)</b></td><td><b>Chisso</b> dumped methylmercury in Minamata Bay; bioaccumulated in fish; <b>2,000+ died</b>. → <b>Minamata Convention (2013)</b></td></tr>
              <tr><td><b>Yamuna, India</b></td><td><b>58%</b> of Delhi's waste; foam at <b>Okhla</b> (phosphate detergents); <b>22+ drains</b>; BOD up to <b>50×</b> standard despite Yamuna Action Plans</td></tr>
              <tr><td><b>Deepwater Horizon (2010)</b></td><td>~<b>4.9 million barrels</b> (780 million L), <b>87 days</b>, Gulf of Mexico; 400+ species; cleanup &gt; <b>$65 billion</b></td></tr>
            </tbody>
          </table>
        ` }
      ],
      flashcards: [
        { front: 'BOD removed by secondary treatment?', back: '<b>85–95%</b>.' },
        { front: 'What does primary treatment remove?', back: '~<b>60%</b> suspended solids, ~<b>30%</b> BOD.' },
        { front: 'What is ZLD?', back: '<b>Zero Liquid Discharge</b>: industry recycles all wastewater.' },
        { front: 'Plants used in phytoremediation?', back: '<b>Water hyacinth, vetiver grass</b>.' },
        { front: 'Water Act year?', back: '<b>1974</b>.' },
        { front: 'Company behind Minamata disease?', back: '<b>Chisso</b>; led to the Minamata Convention, 2013.' },
        { front: "Share of Delhi's waste the Yamuna receives?", back: '<b>58%</b>.' }
      ],
      oneLiners: [
        'CETPs serve clusters of small industries.',
        'IS 10500:2012 is India\'s drinking water standard.',
        'Only 28% of sewage in Class-I/II towns was treated in 2022.'
      ],
      formulas: []
    }
  ],
  figures: [
    { id: 'm3-baghouse', src: 'pages/m3/evs-w3-14/p08.png', crop: [0.115, 0.545, 0.705, 0.315], caption: 'Baghouse: dusty air enters the dirty-air chamber, passes through filter bags, and leaves clean from the top; a pulse jet shakes dust into the hopper and out through the rotary airlock valve.', alt: 'Labelled baghouse with clean-air chamber and outlet, filter bags, pulse-jet cleaning system, dirty-air inlet and chamber, hopper and rotary airlock valve.' }
  ]
});
