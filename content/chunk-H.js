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
        { title: 'Definition and numbers', html: `
          <p class="lead"><b>Air pollution</b>: harmful substances in air at levels that <b>damage living organisms and the environment</b>. WHO definition covers <b>indoor and outdoor</b> air.</p>
          <p>Clean air: <b>78% nitrogen, 21% oxygen</b>, argon &lt; 1%.</p>
          <div class="kv">
            <div><span>Premature deaths/yr (WHO 2023)</span><b>7 million</b></div>
            <div><span>Indoor air deaths/yr</span><b>3.8 million</b></div>
            <div><span>People above WHO limits</span><b>99%</b></div>
            <div><span>Welfare loss/yr</span><b>over 5 trillion</b></div>
            <div><span>Winter AQI &gt; 300</span><b>Delhi, Lahore, Dhaka</b></div>
          </div>
        ` },
        { title: 'Air Quality Index', html: `
          <p><b>AQI</b>: <b>0–500</b> scale; combines <b>5–8 key pollutants</b> into one number and colour.</p>
          <table class="tbl">
            <thead><tr><th>AQI</th><th>Category</th><th>Colour</th></tr></thead>
            <tbody>
              <tr><td>0–50</td><td>Good</td><td>Green</td></tr>
              <tr><td>51–100</td><td>Acceptable</td><td>Yellow</td></tr>
              <tr><td>101–200</td><td>Unhealthy (sensitive groups)</td><td>Orange</td></tr>
              <tr><td>201–300</td><td>Unhealthy (everyone)</td><td>Red</td></tr>
              <tr><td>301–400</td><td>Very unhealthy</td><td>Purple</td></tr>
              <tr><td>401–500</td><td><b>Hazardous</b> (emergency)</td><td><b>Maroon</b></td></tr>
            </tbody>
          </table>
          <div data-viz="aqi-bands"></div>
          <div class="note trap">101–200 and 201–300 are both "unhealthy": <b>orange</b> = sensitive groups, <b>red</b> = everyone.</div>
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
        { title: 'Primary and secondary', html: `
          <p class="lead"><b>Primary</b>: emitted <b>directly</b>. <b>Secondary</b>: <b>formed by reactions</b> in air, often more harmful.</p>
          <table class="tbl">
            <thead><tr><th>Primary</th><th>Key fact</th></tr></thead>
            <tbody>
              <tr><td><b>CO</b></td><td>Incomplete combustion; binds haemoglobin <b>200×</b> more than O₂</td></tr>
              <tr><td>SO₂</td><td>Coal plants, volcanoes; acid rain</td></tr>
              <tr><td>NOₓ</td><td>High-temperature combustion; smog, acid rain</td></tr>
              <tr><td>PM2.5 / PM10</td><td>PM2.5 reaches deep lungs, blood</td></tr>
              <tr><td>VOCs</td><td>Paints, solvents; ozone precursor</td></tr>
              <tr><td><b>NH₃</b></td><td>Agriculture; forms PM2.5</td></tr>
              <tr><td>Lead</td><td>Leaded fuel; neurotoxin</td></tr>
            </tbody>
          </table>
          <ul>
            <li><b>Ground-level ozone</b>: NOₓ + VOCs + sunlight.</li>
            <li><b>PAN</b> (peroxyacetyl nitrates): eye irritation in photochemical smog.</li>
            <li>H₂SO₄, HNO₃ (acid rain); secondary PM (sulphates, nitrates).</li>
            <li>Particulate (dust, smoke, soot) vs gaseous (CO₂, NO₂, SO₂).</li>
          </ul>
        ` },
        { title: 'Indoor', html: `
          <p>WHO: <b>~3.8 million deaths/yr</b>; <b>women on biomass stoves</b> worst hit.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Radon</b></td><td><b>2nd cause of lung cancer</b> after smoking</td></tr>
              <tr><td><b>Formaldehyde</b></td><td>Pressed wood; <b>IARC Group 1</b> carcinogen</td></tr>
              <tr><td>Tobacco smoke</td><td><b>70+ carcinogens</b></td></tr>
              <tr><td>Cooking smoke</td><td>Biomass, kerosene: CO, PM2.5, black carbon</td></tr>
              <tr><td><b>Asbestos</b></td><td><b>Mesothelioma</b></td></tr>
              <tr><td>Mould</td><td>Asthma</td></tr>
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
        { title: 'Causes', html: `
          <p><b>Natural</b>: volcanoes (<b>Mount Pinatubo, 1991</b>, SO₂), forest fires, dust storms (Sahara, Thar: PM10), biogenic VOCs (<b>isoprene</b>).</p>
          <table class="tbl">
            <tbody>
              <tr><td>Industry</td><td>Coal plants: <b>largest SO₂, NOₓ, mercury</b>. Cement: <b>~8% of global CO₂</b>. Brick kilns: black carbon</td></tr>
              <tr><td>Vehicles</td><td><b>Diesel</b>: most PM2.5. <b>~30%</b> of India's urban air pollution</td></tr>
              <tr><td>Agriculture</td><td><b>Stubble burning</b> (Punjab, Haryana) → Delhi smog; NH₃; paddy methane</td></tr>
            </tbody>
          </table>
          <p>Also construction dust, waste burning. <b>Human activity</b> = dominant cause.</p>
        ` },
        { title: 'Effects', html: `
          <ul>
            <li><b>Respiratory</b>: asthma, <b>COPD</b>, lung cancer, pneumonia.</li>
            <li><b>Cardiovascular</b>: ischaemic heart disease, stroke, hypertension.</li>
            <li>Other: PM2.5 linked to <b>Alzheimer's</b>; low birth weight; insulin resistance.</li>
          </ul>
          <table class="tbl">
            <tbody>
              <tr><td><b>Global warming</b></td><td>IPCC AR6 (2021): <b>1.1°C</b> rise; sea level <b>+0.28–1.01 m by 2100</b></td></tr>
              <tr><td><b>Acid rain</b></td><td><b>pH &lt; 5.6</b>; <b>Taj Mahal</b> yellowing; <b>Black Forest</b>, Germany</td></tr>
              <tr><td><b>Ozone depletion</b></td><td>CFCs; Antarctic hole <b>1985</b>; <b>Montreal Protocol 1987</b></td></tr>
              <tr><td><b>Photochemical smog</b></td><td>First in <b>Los Angeles, 1940s</b></td></tr>
            </tbody>
          </table>
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
          <p>ESPs and fabric filters: <b>&gt; 99% efficiency</b>.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Baghouse</b> (fabric filter)</td><td><b>Fine, sub-micron</b> particles</td></tr>
              <tr><td><b>Electrostatic precipitator</b></td><td>Charged particles stick to electrodes</td></tr>
              <tr><td>Wet scrubber</td><td>Water traps particles and gases</td></tr>
              <tr><td><b>Cyclone separator</b></td><td>Vortex; <b>larger</b> particles</td></tr>
              <tr><td>Gravity settling chamber</td><td><b>Pre-cleaner</b></td></tr>
            </tbody>
          </table>
          <p>Baghouse: dust cake on bags; <b>pulse-jet</b> cleaning; dust → <b>hopper</b> → <b>rotary airlock valve</b>.</p>
          <figure data-fig="m3-baghouse"></figure>
        ` },
        { title: 'Gases and laws', html: `
          <ul>
            <li><b>FGD</b>: limestone scrubbers remove <b>SO₂</b>.</li>
            <li><b>SCR</b>: ammonia + catalyst, NOₓ → <b>N₂ + H₂O</b>.</li>
            <li>Catalytic converter (CO, HC, NOₓ); activated carbon (VOCs).</li>
            <li><b>BS-VI (2020)</b> = Euro 6; NOₓ <b>−70%</b> vs BS-IV.</li>
            <li><b>NCAP (2019)</b>: PM <b>−20–30% by 2024</b>, <b>122</b> cities.</li>
            <li><b>GRAP</b> (Delhi): triggers at <b>AQI &gt; 200</b>.</li>
            <li>FAME II (EVs); renewables <b>500 GW by 2030</b>; International Solar Alliance.</li>
          </ul>
          <table class="tbl">
            <tbody>
              <tr><td><b>Air Act, 1981</b></td><td>Set up State Pollution Control Boards</td></tr>
              <tr><td>EPA, 1986</td><td>Umbrella law</td></tr>
              <tr><td><b>CPCB</b></td><td>Sets <b>NAAQS</b>: PM2.5 <b>40</b>, PM10 <b>60 µg/m³</b> (WHO: 5, 15)</td></tr>
              <tr><td><b>SAFAR</b></td><td>Real-time monitoring, forecasting</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Case studies', html: `
          <div class="vs">
            <div class="side"><h4>London Great Smog, 1952</h4><p><b>5 days</b>; ~<b>4,000</b> died, <b>12,000</b> long-run → UK <b>Clean Air Act, 1956</b>.</p></div>
            <div class="side"><h4>Delhi winter smog</h4><p>Stubble burning, vehicles; AQI <b>&gt; 400</b>; <b>odd-even</b>.</p></div>
          </div>
          <p>Both: <b>temperature inversion</b>, warm layer over cold ground air traps pollution.</p>
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
          <p class="lead"><b>Water pollution</b>: contamination making water <b>unfit for its intended use</b>.</p>
          <div class="kv">
            <div><span>No safe drinking water (WHO 2023)</span><b>2.2 billion</b></div>
            <div><span>Child diarrhoea deaths/yr</span><b>1.8 million</b></div>
            <div><span>Wastewater untreated</span><b>80%</b></div>
            <div><span>Illness water-related (developing)</span><b>80%</b></div>
          </div>
          <h4>WHO drinking standards</h4>
          <div class="kv">
            <div><span>pH</span><b>6.5–8.5</b></div>
            <div><span>Turbidity</span><b>&lt; 1 NTU</b></div>
            <div><span>TDS</span><b>&lt; 500 mg/L</b></div>
            <div><span>E. coli</span><b>0 CFU/100 mL</b></div>
            <div><span>As, Pb</span><b>&lt; 0.01 mg/L</b></div>
          </div>
        ` },
        { title: 'Types', html: `
          <ul>
            <li><b>Surface</b> (Yamuna foam), <b>groundwater</b> (aquifers), <b>marine</b>, <b>thermal</b> (less dissolved O₂).</li>
            <li><b>Great Pacific Garbage Patch</b>: <b>2× Texas</b>.</li>
            <li><b>Transboundary</b>: crosses borders via rivers.</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Point source</h4><p>One outlet (factory pipe); <b>easier to regulate</b>.</p></div>
            <div class="side"><h4>Non-point source</h4><p>Diffuse (farm runoff); <b>~50%</b> of water pollution.</p></div>
          </div>
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
              <tr><td><b>Industrial</b></td><td>Hg, Pb, Cd, Cr; textile <b>azo dyes</b>; <b>acid mine drainage</b> (pyrite → sulphuric acid)</td></tr>
              <tr><td><b>Agricultural</b></td><td>Nitrates, phosphates; DDT, Endosulfan = <b>POPs</b></td></tr>
              <tr><td><b>Domestic</b></td><td>India sewage <b>~72,368 MLD</b> vs capacity <b>~31,841 MLD</b>; landfill <b>leachate</b></td></tr>
              <tr><td><b>Oil spills</b></td><td><b>Exxon Valdez</b> (1989) 41 million L; <b>Deepwater Horizon</b> (2010) 780 million L</td></tr>
              <tr><td>Radioactive</td><td>Hospital waste, uranium and thorium tailings</td></tr>
            </tbody>
          </table>
          <p>Ganga: <b>~1.4 billion L/day</b> sewage vs <b>~861 MLD</b> capacity; <b>NMCG 2014</b>.</p>
        ` },
        { title: 'Effects', html: `
          <table class="tbl">
            <tbody>
              <tr><td>Cholera</td><td><em>Vibrio cholerae</em></td></tr>
              <tr><td>Typhoid</td><td><em>Salmonella typhi</em></td></tr>
              <tr><td>Dysentery</td><td><em>E. histolytica</em></td></tr>
              <tr><td>Hepatitis A</td><td>Virus; jaundice</td></tr>
              <tr><td><b>Minamata disease</b></td><td>Mercury</td></tr>
              <tr><td><b>Blue baby syndrome</b></td><td>Nitrates (methaemoglobinaemia)</td></tr>
              <tr><td>Fluorosis</td><td>Excess fluoride</td></tr>
              <tr><td>Arsenicosis</td><td>Arsenic: skin lesions, cancer</td></tr>
            </tbody>
          </table>
          <ul>
            <li><b>Eutrophication</b>: excess N, P → algal bloom → O₂ used up → <b>dead zones</b> (Gulf of Mexico <b>~22,720 km²</b>).</li>
            <li><b>Biomagnification</b>: DDT, mercury rise up the food chain.</li>
            <li>Indicator species lost first: <b>mayflies, trout, salmon</b>.</li>
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
          <table class="tbl">
            <thead><tr><th>Stage</th><th>Steps</th><th>Removes</th></tr></thead>
            <tbody>
              <tr><td><b>Primary</b> (physical)</td><td>Screening, grit chamber (sand), primary clarifier (sludge)</td><td>~60% solids, ~30% BOD</td></tr>
              <tr><td><b>Secondary</b> (biological)</td><td>Activated sludge, trickling filters (biofilm), rotating biological contactors</td><td><b>85–95% BOD</b></td></tr>
              <tr><td><b>Tertiary</b> (advanced)</td><td>N, P removal; UV/chlorine; RO</td><td>Near-drinking quality</td></tr>
            </tbody>
          </table>
          <div data-viz="sewage-treatment"></div>
          <p>India 2022: only <b>28%</b> of Class-I/II sewage treated.</p>
        ` },
        { title: 'Other controls and laws', html: `
          <ul>
            <li><b>ZLD</b> (Zero Liquid Discharge): all wastewater recycled.</li>
            <li><b>ETPs</b> mandatory; <b>CETPs</b> shared by small industries.</li>
            <li>Farms: <b>IPM</b>, precision farming, buffer strips, constructed wetlands.</li>
            <li><b>Phytoremediation</b>: <b>water hyacinth, vetiver grass</b>. Bioremediation: microbes.</li>
          </ul>
          <table class="tbl">
            <tbody>
              <tr><td><b>Water Act, 1974</b></td><td>Set up Pollution Control Boards</td></tr>
              <tr><td>EPA, 1986</td><td>Umbrella law</td></tr>
              <tr><td><b>NMCG / Namami Gange</b></td><td>Clean Ganga</td></tr>
              <tr><td>CRZ Notification</td><td>Coastal waters</td></tr>
              <tr><td><b>IS 10500:2012</b></td><td>BIS drinking water standard</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Case studies', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Minamata, Japan (1956)</b></td><td><b>Chisso</b>, methylmercury; <b>2,000+</b> died → <b>Minamata Convention 2013</b></td></tr>
              <tr><td><b>Yamuna</b></td><td><b>58%</b> of Delhi's waste; foam at <b>Okhla</b> (phosphate detergents); BOD up to <b>50×</b></td></tr>
              <tr><td><b>Deepwater Horizon (2010)</b></td><td><b>4.9 million barrels</b>, <b>87 days</b>, Gulf of Mexico; &gt; <b>$65 billion</b></td></tr>
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
