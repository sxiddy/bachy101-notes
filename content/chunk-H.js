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
          <p class="lead"><b>Air pollution</b> is "the presence of one or more harmful substances in the atmosphere in concentrations high enough to cause damage to living organisms and the environment".</p>
          <ul>
            <li>The harmful substances are <b>pollutants</b>: gases, particles or biological materials (e.g. dust, smoke).</li>
            <li>Clean air is balanced: <b>78% nitrogen, 21% oxygen</b>, argon under 1%, CO₂, water vapour, traces of ozone, helium, ammonia. Pollution means this balance is disturbed.</li>
            <li><b>WHO definition</b>: contamination of <b>indoor or outdoor</b> environments by any chemical, physical or biological agent that modifies the natural characteristics of the atmosphere and poses risks to health and the environment.</li>
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
          <p>The <b>AQI</b> is a standard tool to report daily air pollution, usually on a <b>0–500</b> scale. It turns measurements of <b>5–8 key pollutants</b> into one number, a colour and a health message.</p>
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
          <div class="note heads-up">The notes call both 101–200 and 201–300 "unhealthy". Tell them apart by colour and advice: orange affects sensitive groups, red affects everyone.</div>
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
          <p class="lead"><b>Primary pollutants</b> are emitted <b>directly</b> into the air in harmful form from identifiable sources.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>CO</b></td><td>Colourless, odourless, from incomplete combustion; binds haemoglobin <b>200×</b> more strongly than O₂, causing hypoxia</td></tr>
              <tr><td><b>SO₂</b></td><td>Coal power plants, volcanoes; acid rain, respiratory damage</td></tr>
              <tr><td><b>NOₓ</b></td><td>High-temperature combustion (vehicles, power plants); precursor of smog and acid rain</td></tr>
              <tr><td><b>PM2.5 / PM10</b></td><td>Dust, combustion, construction; PM2.5 reaches deep lungs and the bloodstream</td></tr>
              <tr><td><b>VOCs</b></td><td>Paints, solvents, exhaust; precursors of ground-level ozone</td></tr>
              <tr><td><b>NH₃</b></td><td>Mainly agriculture (fertiliser, livestock); helps form PM2.5</td></tr>
              <tr><td><b>Lead</b></td><td>Leaded fuel (largely phased out), industry; neurotoxin</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Secondary', html: `
          <p class="lead"><b>Secondary pollutants</b> are <b>not emitted directly</b>; they form through reactions in the atmosphere and are often <b>more harmful</b>.</p>
          <ul>
            <li><b>Ground-level ozone</b>: NOₓ + VOCs + sunlight → O₃; main part of photochemical smog; damages airways.</li>
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
          <p>Outdoor sources: vehicles, industry, construction. Indoor sources: cooking fuels, poor ventilation (these are primary pollutants). WHO: indoor pollution causes about <b>3.8 million deaths a year</b>, more than outdoor pollution in many developing nations; <b>women cooking on biomass stoves</b> are hit hardest.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Radon</b></td><td>Radioactive gas from soil and rock; <b>second leading cause of lung cancer</b> after smoking</td></tr>
              <tr><td><b>Formaldehyde</b></td><td>Pressed wood, insulation, tobacco smoke; <b>IARC Group 1</b> carcinogen</td></tr>
              <tr><td>Tobacco smoke</td><td><b>70+ carcinogens</b> incl. benzene, arsenic, formaldehyde</td></tr>
              <tr><td>Cooking smoke</td><td>Biomass, kerosene: CO, PM2.5, black carbon</td></tr>
              <tr><td><b>Asbestos</b></td><td>Old insulation; causes <b>mesothelioma</b> (incurable lung cancer)</td></tr>
              <tr><td>Mould and allergens</td><td>Poor ventilation; spores cause asthma</td></tr>
            </tbody>
          </table>
          <div class="note exam">Indoor pollution is often underestimated but highly harmful.</div>
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
              <tr><td>Industry</td><td>Coal power plants: <b>largest emitters of SO₂, NOₓ, mercury</b>. Cement: dust and <b>~8% of global CO₂</b>. Steel coke ovens: SO₂, PAHs, benzene. <b>Brick kilns</b>: major PM and black carbon in South Asia. Refineries: SO₂, H₂S, VOCs, benzene</td></tr>
              <tr><td>Vehicles</td><td>Major urban source: CO, NOₓ, HC, PM2.5. <b>Diesel</b>: highest PM2.5, black carbon. Old two-wheeler engines: VOCs. Aviation: NOₓ and black carbon at altitude. Transport is <b>~30%</b> of India's urban air pollution</td></tr>
              <tr><td>Fossil fuels</td><td>Coal and petroleum release CO₂ and SO₂</td></tr>
              <tr><td>Agriculture</td><td><b>Stubble burning</b> (Punjab, Haryana) feeds Delhi's winter smog; NH₃ from fertiliser and manure; paddy <b>methane</b>; pesticide aerosols</td></tr>
              <tr><td>Construction</td><td>Urban dust</td></tr>
              <tr><td>Waste burning</td><td>Toxic substances</td></tr>
            </tbody>
          </table>
          <div class="note exam">Human activities are the dominant cause of modern air pollution.</div>
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
              <tr><td><b>Global warming</b></td><td>CO₂, CH₄, N₂O trap infrared. IPCC AR6 (2021): <b>1.1°C</b> warming; sea level rise <b>0.28–1.01 m by 2100</b></td></tr>
              <tr><td><b>Acid rain</b></td><td>SO₂ and NOₓ → sulphuric and nitric acid; <b>pH &lt; 5.6</b>. Damages crops, soil, forests, limestone (<b>Taj Mahal yellowing</b>), kills fish. Example: <b>Black Forest</b>, Germany, 1970s–80s</td></tr>
              <tr><td><b>Ozone depletion</b></td><td>CFCs release Cl radicals that destroy O₃; Antarctic hole found <b>1985</b>; <b>Montreal Protocol 1987</b> phased out CFCs, the most successful environmental treaty</td></tr>
              <tr><td><b>Photochemical smog</b></td><td>First seen in <b>Los Angeles, 1940s</b>. Delhi's winter smog worsened by <b>temperature inversion</b>; visibility &lt; 500 m</td></tr>
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
          <p class="lead">PM is removed by <b>filtration, electrical charging, centrifugal force or scrubbing liquid</b>. ESPs and fabric filters exceed <b>99% efficiency</b>.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Fabric filter / baghouse</b></td><td>Gas passes through fabric bags; a dust cake filters it. For <b>fine, sub-micron</b> particles</td></tr>
              <tr><td><b>Electrostatic precipitator</b></td><td>Charges particles so they stick to collector electrodes; removes fine ash and soot</td></tr>
              <tr><td><b>Wet scrubber</b></td><td>Liquid (usually water) traps particles; suits hot or moist gas; handles solids and gases</td></tr>
              <tr><td><b>Cyclone separator</b></td><td>Centrifugal force in a vortex; for <b>larger</b> particles</td></tr>
              <tr><td><b>Gravity settling chamber</b></td><td>Large particles settle; used as a <b>pre-cleaner</b></td></tr>
            </tbody>
          </table>
          <p>Also: cleaner fuels (LPG, CNG, renewables) and electric vehicles.</p>
        ` },
        { title: 'How a baghouse works', html: `
          <div class="steps">
            <div><b>Air intake</b>: dusty gas enters through the dirty-air inlet into the dirty-air chamber.</div>
            <div><b>Filtration</b>: gas passes through long woven or felted bags; dust forms a <b>dust cake</b> on the outside that aids fine filtering.</div>
            <div><b>Clean air discharge</b>: filtered air rises to the clean-air chamber and leaves by the clean-air outlet.</div>
            <div><b>Cleaning cycle</b>: as pressure drop builds, a <b>pulse-jet</b> fires compressed air into the bags to shake the cake loose.</div>
            <div><b>Dust collection</b>: dust falls into the <b>hopper</b> and leaves through a <b>rotary airlock valve</b>.</div>
          </div>
          <figure data-fig="m3-baghouse"></figure>
        ` },
        { title: 'Gas control', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>FGD</b> (flue gas desulphurisation)</td><td>Limestone scrubbers remove SO₂; mandatory for Indian thermal plants</td></tr>
              <tr><td><b>SCR</b> (selective catalytic reduction)</td><td>Ammonia + catalyst turn NOₓ into N₂ and H₂O</td></tr>
              <tr><td><b>Catalytic converter</b></td><td>Oxidises CO and HC, reduces NOₓ; essential for BS-VI</td></tr>
              <tr><td>Activated carbon</td><td>Adsorbs VOCs and organic pollutants</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Government', html: `
          <ul>
            <li><b>BS-VI</b> (2020): equal to Euro 6; cuts NOₓ by <b>70%</b> from BS-IV.</li>
            <li><b>FAME II</b> for EVs; PLI scheme for batteries.</li>
            <li><b>GRAP</b> (Delhi): emergency controls at <b>AQI &gt; 200</b> (ban construction, brick kilns, diesel trucks).</li>
            <li><b>NCAP (2019)</b>: cut PM2.5 and PM10 by <b>20–30% by 2024</b> in <b>122</b> non-attainment cities.</li>
            <li>Renewables: <b>500 GW by 2030</b>; wind; BEE star labels, LEDs, green building codes; <b>International Solar Alliance</b> (India-led).</li>
            <li>Green infrastructure: urban trees, green roofs and walls (urban heat island), constructed wetlands as buffers, industry zoned <b>downwind</b> of homes.</li>
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
            <div class="side"><h4>London Great Smog, 1952</h4><p>Fog + coal smoke + <b>temperature inversion</b> for <b>5 days</b> in December. About <b>4,000</b> died at once, <b>12,000</b> in the long run. Led to the UK <b>Clean Air Act, 1956</b>, one of the first such laws.</p></div>
            <div class="side"><h4>Delhi winter smog</h4><p>Stubble burning, vehicles, construction dust and inversion. AQI often <b>above 400</b>. GRAP measures: <b>odd-even</b> rationing, school closures, diesel generator bans.</p></div>
          </div>
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
          <p class="lead"><b>Water pollution</b> is the contamination of water bodies (rivers, lakes, oceans, groundwater) by harmful physical, chemical or biological substances that degrade quality and make water <b>unfit for its intended use</b>.</p>
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
              <tr><td>Turbidity</td><td><b>&lt; 1 NTU</b></td></tr>
              <tr><td>TDS</td><td><b>&lt; 500 mg/L</b></td></tr>
              <tr><td>Pathogens</td><td>E. coli <b>0 CFU/100 mL</b></td></tr>
              <tr><td>Heavy metals</td><td>As &lt; 0.01 mg/L, Pb &lt; 0.01 mg/L</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Types', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Surface</b></td><td>Rivers, lakes, oceans; most visible (Yamuna foam, oil slicks)</td></tr>
              <tr><td><b>Groundwater</b></td><td>Pesticides, chemicals, metals seep into aquifers; dangerous because wells and bores are drunk from</td></tr>
              <tr><td><b>Marine</b></td><td>Oil, plastics, discharge, runoff; <b>Great Pacific Garbage Patch</b> (twice the size of Texas)</td></tr>
              <tr><td><b>Thermal</b></td><td>Hot water from plants lowers dissolved oxygen</td></tr>
            </tbody>
          </table>
          <div class="vs">
            <div class="side"><h4>Point source</h4><p>Single identifiable source (factory pipe, sewage outlet); <b>easier to regulate</b>.</p></div>
            <div class="side"><h4>Non-point source</h4><p>Diffuse (farm runoff, stormwater); harder; <b>~50%</b> of water pollution in many countries.</p></div>
          </div>
          <p><b>Transboundary</b> pollution crosses national or state borders through rivers.</p>
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
        'Non-point sources give ~50% of water pollution.'
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
              <tr><td><b>Industrial</b></td><td>Heavy metals (Hg, Pb, Cd, Cr) from electroplating and mining; acids, solvents, dyes; textile effluent with <b>azo dyes and high BOD</b>; drug residues; <b>acid mine drainage</b> (pyrite oxidises to sulphuric acid)</td></tr>
              <tr><td><b>Agricultural</b></td><td>Nitrates and phosphates leach (eutrophication); DDT, Endosulfan are <b>POPs</b>; feedlot waste with pathogens, hormones, antibiotics; salty irrigation return flows; eroded sediment</td></tr>
              <tr><td><b>Domestic</b></td><td>Untreated sewage: India makes <b>~72,368 MLD</b>, treats capacity <b>~31,841 MLD</b>; detergents and medicines; riverbank dumping; landfill <b>leachate</b></td></tr>
              <tr><td><b>Oil spills</b></td><td><b>Exxon Valdez</b> (1989) 41 million L; <b>Deepwater Horizon</b> (2010) 780 million L; bilge water; offshore rigs</td></tr>
              <tr><td><b>Radioactive</b></td><td>Plant cooling water, hospital and lab waste, uranium and thorium tailings</td></tr>
            </tbody>
          </table>
          <div class="note exam">Ganga gets about <b>1.4 billion litres</b> of sewage a day but has only about <b>861 MLD</b> of treatment capacity. <b>NMCG</b> launched in <b>2014</b>.</div>
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
            <li><b>Eutrophication</b>: excess N and P → algal blooms → algae die → bacteria use up oxygen → hypoxic <b>dead zones</b>. Gulf of Mexico dead zone <b>~22,720 km²</b>.</li>
            <li><b>Biomagnification</b>: DDT and mercury concentrate up the food chain; a fish may hold <b>10×</b> its prey's mercury, a bird eating it <b>100×</b> the baseline.</li>
            <li><b>Biodiversity loss</b>: sensitive species (mayflies, trout, salmon) vanish first and act as indicators; keystone loss; coral bleaching; oil smothers eggs and birds.</li>
            <li><b>Habitat destruction</b>: sediment smothers spawning grounds; plastic entangles animals; wetlands lose filtering.</li>
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
          <p class="lead">Wastewater treatment is the <b>most important engineering intervention</b>.</p>
          <table class="tbl">
            <thead><tr><th>Stage</th><th>Steps</th><th>Outcome</th></tr></thead>
            <tbody>
              <tr><td><b>Primary</b> (physical)</td><td>Screening (rags, sticks, plastic), grit chamber (sand), primary clarifier (primary sludge)</td><td>~60% suspended solids, ~30% BOD removed</td></tr>
              <tr><td><b>Secondary</b> (biological)</td><td>Activated sludge, trickling filters (biofilm on rocks), rotating biological contactors (spinning discs)</td><td><b>85–95% BOD</b> and most solids removed</td></tr>
              <tr><td><b>Tertiary</b> (advanced)</td><td>N and P removal, UV or chlorination, reverse osmosis or membranes</td><td>Near-drinking-quality effluent</td></tr>
            </tbody>
          </table>
          <div class="note exam">India's STP capacity must <b>triple</b>; in 2022 only <b>28%</b> of sewage from Class-I cities and Class-II towns was treated.</div>
        ` },
        { title: 'Industry and farms', html: `
          <div class="vs">
            <div class="side"><h4>Industry</h4><ul>
              <li><b>Zero Liquid Discharge</b>: recycle all wastewater</li>
              <li><b>ETPs</b> mandatory before discharge</li>
              <li><b>CETPs</b>: shared plants for small industries</li>
              <li>Ion exchange, activated carbon for metals and organics</li>
              <li>CPCB monitoring</li>
            </ul></div>
            <div class="side"><h4>Agriculture</h4><ul>
              <li><b>IPM</b>: minimise pesticides</li>
              <li><b>Precision farming</b></li>
              <li><b>Buffer strips</b> along waterways</li>
              <li><b>Constructed wetlands</b> treat runoff</li>
              <li>Organic farming</li>
            </ul></div>
          </div>
          <p><b>Nature-based</b>: <b>phytoremediation</b> (water hyacinth, vetiver), <b>bioremediation</b> (microbes), riparian buffers and wetland restoration, rainwater harvesting.</p>
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
          <div class="note heads-up">The notes date NMCG to <b>2014</b> on one page and "NMCG / Namami Gange Programme" to <b>2015</b> on another. Learn NMCG 2014 (as stated in the Ganga fact) and know the programme is listed as 2015.</div>
        ` },
        { title: 'Case studies', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Minamata, Japan (1956)</b></td><td><b>Chisso</b> dumped methylmercury into Minamata Bay; it bioaccumulated in fish; <b>over 2,000 died</b>. Led to the <b>Minamata Convention (2013)</b></td></tr>
              <tr><td><b>Yamuna, India</b></td><td>Gets <b>58%</b> of Delhi's waste; white foam near <b>Okhla</b> from phosphate detergents; <b>22+ drains</b>; BOD up to <b>50×</b> the standard despite Yamuna Action Plans</td></tr>
              <tr><td><b>Deepwater Horizon (2010)</b></td><td>~<b>4.9 million barrels</b> (780 million L) over <b>87 days</b> in the Gulf of Mexico; 400+ species hit; cleanup over <b>$65 billion</b></td></tr>
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
