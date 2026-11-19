CHUNK({
  chunk: 'W',
  module: 'm7',
  topics: [
    {
      id: 'm7-green-energy',
      title: 'Green energy: why, what and India\'s targets',
      short: 'Green energy concepts',
      blurb: 'A contemporary-issues week: why the world must move off fossil fuels, the IPCC and India targets, renewable vs green energy and the six characteristics of green energy.',
      source: 'Lecture W6 Part 1 (Solar and Wind), pages 1–2',
      tabs: [
        { title: 'Why it matters now', html: `
          <p class="lead">Week 6 is the <b>contemporary environmental issues</b> week: it looks at <b>green energy technologies</b>, the live answer to the climate problem you met in Week 5.</p>
          <p>The world still depends on <b>fossil fuels</b> (coal, oil and natural gas) for <b>over 80%</b> of its total energy supply. These fuels powered two centuries of industrial growth, but their environmental damage, above all <b>greenhouse gas emissions</b>, is now well documented.</p>
          <ul>
            <li>The <b>IPCC</b> (Intergovernmental Panel on Climate Change) has set a global target of <b>net-zero emissions by 2050</b>.</li>
            <li><b>India</b> is the world's <b>third-largest emitter</b> of greenhouse gases.</li>
            <li>Under the <b>Paris Agreement</b>, India committed to getting <b>50%</b> of its cumulative installed electricity capacity from <b>non-fossil sources by 2030</b>.</li>
            <li>This is backed by a national target of <b>500 GW of renewable energy capacity by 2030</b>, with <b>solar and wind</b> named as the two main pillars of the transition.</li>
          </ul>
          <p>Solar and wind are the two <b>fastest-growing</b> and most rapidly maturing parts of the renewable portfolio. Hydro and geothermal (Lecture 33) complete the picture because they can give <b>continuous</b> power.</p>
          <div class="note why">Fossil fuels are <b>finite</b> (they run out) and <b>polluting</b> (they release CO₂ and other pollutants when burnt). That pair of problems is the whole case for green energy.</div>
        ` },
        { title: 'Renewable vs green', html: `
          <p class="lead"><b>Renewable energy</b> is energy derived from natural processes that <b>replenish faster than they are consumed</b>: sunlight, wind, flowing water, geothermal heat and biomass growth.</p>
          <p><b>Green energy</b> is a broader, less technical term. It generally means renewable sources with <b>minimal environmental impact across their entire lifecycle</b>: production, operation and disposal.</p>
          <div class="note trap">Not all renewable energy is automatically "green". <b>Large hydroelectric dams</b> are renewable but can have serious ecological effects, and <b>biomass combustion</b> is renewable but still produces emissions. Solar (PV and thermal) and wind (onshore and offshore) are treated as genuinely green.</div>
          <h3>Characteristics of green energy</h3>
          <table class="tbl">
            <tbody>
              <tr><td><b>Renewable</b></td><td>The source is replenished by nature, so it does not run out the way coal or oil does.</td></tr>
              <tr><td><b>Sustainable</b></td><td>It can be used today without reducing what future generations can use.</td></tr>
              <tr><td><b>Clean and low-carbon</b></td><td>It releases little or no greenhouse gas or air pollution while making power.</td></tr>
              <tr><td><b>Environmentally friendly</b></td><td>Its impact across production, operation and disposal is small.</td></tr>
              <tr><td><b>Locally available</b></td><td>Sun, wind and water are found locally, so a country imports less fuel.</td></tr>
              <tr><td><b>Decentralised generation</b></td><td>It suits small local plants, such as a rooftop array or a village micro-hydro unit, as well as large ones.</td></tr>
            </tbody>
          </table>
          <div class="note exam">Long answer on green energy: (1) fossil fuel dependence (over 80%) and its problems, (2) IPCC 2050 net zero and India's 50% non-fossil and 500 GW by 2030 targets, (3) definitions of renewable and green energy, (4) the six characteristics, (5) the note that not every renewable is green, with the hydro and biomass examples.</div>
        ` }
      ],
      flashcards: [
        { front: 'Share of world energy supply from fossil fuels?', back: '<b>Over 80%</b> (coal, oil, natural gas).' },
        { front: 'IPCC global target?', back: '<b>Net-zero emissions by 2050</b>.' },
        { front: 'India\'s Paris Agreement electricity commitment?', back: '<b>50%</b> of installed capacity from non-fossil sources by <b>2030</b>.' },
        { front: 'India\'s renewable capacity target?', back: '<b>500 GW by 2030</b>, led by solar and wind.' },
        { front: 'Define renewable energy.', back: 'Energy from natural processes that <b>replenish faster than they are consumed</b>.' },
        { front: 'How is green energy different from renewable energy?', back: 'Green energy is renewable with <b>minimal lifecycle impact</b> (production, operation, disposal).' },
        { front: 'Two renewables that are not fully green?', back: '<b>Large hydro dams</b> (ecological damage) and <b>biomass combustion</b> (emissions).' }
      ],
      oneLiners: [
        'India is the world\'s third-largest GHG emitter.',
        'Solar and wind are the two pillars of India\'s transition.',
        'Fossil fuels are finite and polluting.',
        'Green energy suits decentralised power generation.'
      ],
      formulas: []
    },
    {
      id: 'm7-solar-energy',
      title: 'Solar energy: PV, solar thermal and cell types',
      short: 'Solar energy',
      blurb: 'Solar irradiance, system components, how a PV cell makes current, solar thermal and CSP, the four PV technologies, and the pros and cons of solar.',
      source: 'Lecture W6 Part 1 (Solar and Wind), pages 2–5',
      tabs: [
        { title: 'Sunlight and components', html: `
          <p class="lead"><b>Solar energy technology</b> converts electromagnetic radiation from the sun into a usable form of energy, most commonly <b>electricity</b>.</p>
          <p>The sun delivers about <b>1,000 W per square metre</b> of solar irradiance to Earth's surface at <b>solar noon on a clear day</b>. This is the baseline for every solar output calculation.</p>
          <div class="eq">Electrical output = solar irradiance × panel area × efficiency</div>
          <div class="worked"><div class="given"><p>A 2 m² panel, 20% efficient, at 1,000 W/m².</p></div><div class="solve"><div class="eq">1,000 × 2 × 0.20 = 400 W</div></div><div class="result">About 400 W at clear-sky noon</div></div>
          <h3>Components of a solar power system</h3>
          <ul>
            <li><b>Solar panels</b> turn sunlight into DC electricity.</li>
            <li>An <b>inverter</b> converts that DC into the AC used by homes and the grid.</li>
            <li>A <b>charge controller</b> regulates the current going into the battery so it is not overcharged.</li>
            <li>A <b>battery</b> (optional) stores energy for night or cloudy periods.</li>
            <li><b>Mounting structures</b> hold the panels at the right angle on a roof or the ground.</li>
            <li><b>Electrical wiring</b> connects every part.</li>
            <li>A <b>monitoring system</b> tracks output and flags faults.</li>
          </ul>
        ` },
        { title: 'Photovoltaic (PV)', html: `
          <p class="lead"><b>Photovoltaic systems</b> convert sunlight <b>directly into electricity</b> using the <b>photovoltaic effect</b>.</p>
          <ol class="steps">
            <li><b>Photons strike</b> a semiconductor, usually <b>crystalline silicon</b>.</li>
            <li><b>Electrons are knocked loose</b> from their atomic bonds by the photon energy.</li>
            <li><b>The p-n junction</b>, a boundary between two differently doped silicon layers, sets up an <b>internal electric field</b>.</li>
            <li><b>The field sweeps</b> the freed electrons in one direction, so a <b>direct current</b> flows through the external circuit.</li>
          </ol>
          <figure data-fig="m7-pv-cell"></figure>
          <p>This is <b>solid-state energy conversion</b>: no moving parts, no combustion and no working fluid. That is why PV needs so little maintenance.</p>
        ` },
        { title: 'Solar thermal and CSP', html: `
          <p class="lead"><b>Solar thermal systems</b> use <b>mirrors or lenses to concentrate sunlight</b> and make heat.</p>
          <p>The heat can drive a conventional <b>steam turbine</b>, or be used directly for <b>heating water or buildings</b>.</p>
          <p><b>Concentrated Solar Power (CSP)</b> plants use this idea at utility scale. They are often paired with a <b>thermal storage medium such as molten salt</b>, which keeps heat after sunset. This tackles solar's core weakness: it does not generate power at night.</p>
          <div class="vs">
            <div class="side"><h4>PV</h4><p>Light → electricity directly, by the photovoltaic effect in silicon. No moving parts.</p></div>
            <div class="side"><h4>Solar thermal / CSP</h4><p>Light → concentrated heat → steam turbine, or direct heating. Can store heat in molten salt.</p></div>
          </div>
        ` },
        { title: 'Types of PV cells', html: `
          <table class="tbl">
            <thead><tr><th>Type</th><th>Efficiency</th><th>What to know</th></tr></thead>
            <tbody>
              <tr><td><b>Monocrystalline Si</b></td><td><b>20–22%</b></td><td>Cut from a <b>single continuous crystal</b> made by the energy-intensive <b>Czochralski process</b>. Most efficient commercial option, uniform dark look, but more expensive per watt.</td></tr>
              <tr><td><b>Polycrystalline Si</b></td><td><b>15–17%</b></td><td>Made from many silicon fragments melted together. Cheaper, but <b>grain boundaries</b> between crystals impede electron flow, so efficiency is lower.</td></tr>
              <tr><td><b>Thin film</b></td><td><b>10–13%</b></td><td><b>Cadmium telluride</b> and <b>amorphous silicon</b> laid in very thin layers on a substrate. Lighter, flexible and cheaper, so they suit <b>building-integrated PV</b> where weight or flexibility matters more than energy density.</td></tr>
              <tr><td><b>Perovskite</b> (emerging)</td><td>Above <b>30%</b> in tandem</td><td>Lab efficiencies have climbed fast. Stacked on silicon in a <b>tandem</b> cell they can pass 30%. Cheap to make but <b>degrade faster</b> than silicon in moisture and UV: scientifically exciting, not yet engineering-ready at scale.</td></tr>
            </tbody>
          </table>
          <div class="mnemonic">Efficiency order: Mono (20–22) > Poly (15–17) > Thin film (10–13). Perovskite tandem aims beyond 30.</div>
        ` },
        { title: 'Advantages and challenges', html: `
          <h3>Advantages</h3>
          <ul>
            <li><b>Lowers electricity bills</b>: once installed, sunlight is free.</li>
            <li><b>Grid independence</b> when paired with batteries.</li>
            <li><b>Low maintenance</b>, since PV has no moving parts.</li>
            <li><b>Versatile deployment</b>: scales from small rooftop arrays to massive desert power plants.</li>
          </ul>
          <h3>Challenges</h3>
          <ul>
            <li><b>High upfront cost</b> for panels, inverters and installation.</li>
            <li><b>Weather dependency and intermittency</b>: output changes with cloud cover, time of day and season.</li>
            <li><b>Degradation</b>: panels lose about <b>0.5% of output per year</b>, keeping roughly <b>80–85%</b> after <b>25 years</b>.</li>
            <li><b>Orientation and tracking</b>: fixed-tilt is cheaper but gives less output; <b>single- and dual-axis tracking</b> can raise yield by <b>15–35%</b>, at the cost of complexity and maintenance.</li>
            <li><b>Storage expense</b>: costly batteries are needed for 24/7 use.</li>
            <li><b>Space-intensive</b>: high output needs a large land or roof area.</li>
            <li><b>Materials and end-of-life</b>: making silicon cells is energy-intensive and gives <b>hazardous by-products</b>; recycling panels at scale is an emerging engineering and policy problem.</li>
          </ul>
          <div class="note exam">Long answer on solar: definition and 1,000 W/m² → components → PV working (p-n junction) with a diagram → solar thermal and CSP with molten salt → the four cell types with efficiencies → advantages → challenges with the numbers (0.5%/yr, 80–85% at 25 yr, tracking 15–35%).</div>
        ` }
      ],
      flashcards: [
        { front: 'Solar irradiance at clear-sky solar noon?', back: 'About <b>1,000 W/m²</b>.' },
        { front: 'Formula for a panel\'s electrical output?', back: 'Irradiance × <b>area</b> × <b>efficiency</b>.' },
        { front: 'What creates the internal field in a PV cell?', back: 'The <b>p-n junction</b> between two differently doped silicon layers.' },
        { front: 'Why is PV called solid-state conversion?', back: 'No moving parts, no combustion, no working fluid.' },
        { front: 'Storage medium used with CSP?', back: '<b>Molten salt</b>, so power continues after sunset.' },
        { front: 'Monocrystalline cell efficiency and process?', back: '<b>20–22%</b>; single crystal by the <b>Czochralski</b> process.' },
        { front: 'Why is polycrystalline less efficient?', back: '<b>Grain boundaries</b> impede electron flow (15–17%).' },
        { front: 'Thin-film materials and efficiency?', back: '<b>Cadmium telluride</b>, <b>amorphous silicon</b>; 10–13%.' },
        { front: 'Main problem with perovskite cells?', back: '<b>Durability</b>: they degrade in moisture and UV.' },
        { front: 'Panel output after 25 years?', back: 'About <b>80–85%</b> (losing ~0.5% per year).' },
        { front: 'Yield gain from tracking?', back: '<b>15–35%</b> with single- or dual-axis tracking.' }
      ],
      oneLiners: [
        'An inverter converts DC from panels to AC.',
        'A charge controller protects the battery.',
        'Thin film suits building-integrated PV.',
        'Perovskite-silicon tandems can pass 30%.',
        'Solar\'s core weakness: no power at night.'
      ],
      formulas: [
        { name: 'Solar panel output', html: 'P = irradiance (W/m²) × area (m²) × efficiency', note: 'Baseline irradiance 1,000 W/m² at clear-sky noon.' }
      ]
    },
    {
      id: 'm7-solar-india',
      title: 'Solar energy in India: schemes and missions',
      short: 'Solar in India',
      blurb: 'Why India suits solar, and the ten Government of India solar initiatives from PM Surya Ghar to OSOWOG.',
      source: 'Lecture W6 Part 1 (Solar and Wind), pages 5–6',
      tabs: [
        { title: 'Why India', html: `
          <p class="lead">India gets about <b>300 sunny days a year</b>, which makes it highly suitable for solar power.</p>
          <p>The Government of India has brought in several policies and financial incentives to reach its target of <b>500 GW of renewable capacity by 2030</b>.</p>
        ` },
        { title: 'Government initiatives', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>PM Surya Ghar: Muft Bijli Yojana</b></td><td>Free electricity to <b>one crore households</b> through rooftop solar, with a central subsidy of up to <b>₹78,000</b>.</td></tr>
              <tr><td><b>PM-KUSUM</b></td><td>Solarises <b>agriculture</b> to cut dependence on diesel pumps, with up to a <b>60% subsidy</b> on solar irrigation pumps.</td></tr>
              <tr><td><b>National Solar Mission (NSM)</b></td><td>India's <b>flagship</b> initiative to scale up commercial solar infrastructure and set long-term domestic solar targets.</td></tr>
              <tr><td><b>PLI Scheme</b></td><td>Production-Linked Incentive that boosts <b>domestic manufacturing</b> of high-efficiency PV modules and gigawatt-scale wafer and cell factories.</td></tr>
              <tr><td><b>Solar Park Scheme</b></td><td>Supports <b>Ultra-Mega Solar Power Projects</b> by providing land and transmission. Example: <b>Bhadla Solar Park</b>, the largest solar park in the world.</td></tr>
              <tr><td><b>Green Energy Corridor (GEC)</b></td><td>Links renewable generation to the national grid with dedicated high-capacity <b>transmission lines</b>.</td></tr>
              <tr><td><b>Suryamitra</b></td><td>Skill development programme training rural and urban youth to <b>install, maintain and repair</b> solar arrays.</td></tr>
              <tr><td><b>International Solar Alliance (ISA)</b></td><td>Inter-governmental body co-founded by <b>India and France</b> to mobilise over <b>$1 trillion</b> in global solar investment.</td></tr>
              <tr><td><b>OSOWOG</b></td><td>One Sun, One World, One Grid: a global framework to <b>interconnect regional grids</b>, using <b>time-zone differences</b> to move solar power across borders.</td></tr>
              <tr><td><b>100% FDI</b></td><td>Foreign developers can invest directly in Indian green energy projects through the <b>automatic approval route</b>.</td></tr>
            </tbody>
          </table>
          <div class="note trap">PM Surya Ghar is <b>rooftop solar for homes</b>; PM-KUSUM is <b>solar pumps for farmers</b>. ISA was co-founded with <b>France</b>, not the US.</div>
          <div class="note exam">For "India's solar initiatives", open with 300 sunny days and the 500 GW target, then list each scheme with its one key number or purpose (₹78,000; 60%; Bhadla; India and France, $1 trillion; time zones).</div>
        ` }
      ],
      flashcards: [
        { front: 'Sunny days per year in India?', back: 'About <b>300</b>.' },
        { front: 'PM Surya Ghar: Muft Bijli Yojana?', back: 'Rooftop solar for <b>one crore households</b>, subsidy up to <b>₹78,000</b>.' },
        { front: 'PM-KUSUM?', back: 'Solar irrigation pumps for farmers, up to <b>60% subsidy</b>.' },
        { front: 'Largest solar park in the world?', back: '<b>Bhadla Solar Park</b> (Solar Park Scheme).' },
        { front: 'Who co-founded the ISA?', back: '<b>India and France</b>; aims for $1 trillion solar investment.' },
        { front: 'Idea behind OSOWOG?', back: 'Interconnect grids and use <b>time-zone differences</b> to share solar power.' },
        { front: 'Suryamitra?', back: 'Skill programme training youth to install and repair solar arrays.' },
        { front: 'Green Energy Corridor?', back: 'Dedicated transmission lines linking renewables to the national grid.' }
      ],
      oneLiners: [
        'NSM is India\'s flagship solar mission.',
        'PLI boosts domestic PV manufacturing.',
        '100% FDI is allowed through the automatic route.'
      ],
      formulas: []
    },
    {
      id: 'm7-wind-energy',
      title: 'Wind energy: turbines, farms, pros and cons',
      short: 'Wind energy',
      blurb: 'Where wind comes from, how a turbine works, its nine components, HAWT vs VAWT, onshore vs offshore farms, applications, advantages, challenges and capacity factor.',
      source: 'Lecture W6 Part 1 (Solar and Wind), pages 6–8',
      tabs: [
        { title: 'Origin and working', html: `
          <p class="lead">Wind energy draws on <b>fluid dynamics</b> rather than semiconductor physics, but shares many of solar's systems-engineering problems.</p>
          <p>Wind exists because the sun <b>heats Earth's surface unevenly</b>. This creates <b>air pressure differences</b>, and air moves from high to low pressure. Moving air carries <b>kinetic energy</b>, which a turbine converts into electricity.</p>
          <ol class="steps">
            <li><b>Wind strikes the blades</b>, making them rotate.</li>
            <li><b>The rotor turns</b> the main shaft.</li>
            <li><b>The gearbox</b> increases the rotational speed delivered to the generator.</li>
            <li><b>The generator</b> produces electricity.</li>
            <li><b>The grid</b> receives the electricity.</li>
          </ol>
          <figure data-fig="m7-wind-turbine"></figure>
        ` },
        { title: 'Components and types', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Rotor blades</b></td><td>Catch the wind and turn its kinetic energy into rotation.</td></tr>
              <tr><td><b>Hub</b></td><td>The centre piece that holds the blades and joins them to the shaft.</td></tr>
              <tr><td><b>Shaft</b></td><td>Carries the rotation from the hub into the nacelle.</td></tr>
              <tr><td><b>Gearbox</b></td><td>Raises the slow rotor speed to the high speed the generator needs.</td></tr>
              <tr><td><b>Generator</b></td><td>Converts mechanical rotation into electricity.</td></tr>
              <tr><td><b>Nacelle</b></td><td>The housing on top of the tower that holds the gearbox, generator and shaft.</td></tr>
              <tr><td><b>Tower</b></td><td>Lifts the rotor high, where winds are stronger and steadier.</td></tr>
              <tr><td><b>Controller</b></td><td>Starts and stops the turbine and adjusts it to wind conditions.</td></tr>
              <tr><td><b>Brake system</b></td><td>Stops the rotor in very high winds or for maintenance.</td></tr>
            </tbody>
          </table>
          <div class="vs">
            <div class="side"><h4>HAWT</h4><p><b>Horizontal axis</b>. The most common design worldwide, with <b>high efficiency</b>.</p></div>
            <div class="side"><h4>VAWT</h4><p><b>Vertical axis</b>. Suits <b>urban areas</b> and accepts wind from <b>any direction</b>.</p></div>
          </div>
        ` },
        { title: 'Wind farms', html: `
          <p class="lead">One turbine makes limited electricity, so many are installed together as a <b>wind farm</b>, onshore or offshore.</p>
          <div class="vs">
            <div class="side"><h4>Onshore</h4><p>On land. Cheaper to build and maintain, but faces land-use conflicts and noise concerns.</p></div>
            <div class="side"><h4>Offshore</h4><p>At sea. <b>Stronger, steadier winds</b> and fewer land-use and noise problems, but <b>much higher installation and maintenance costs</b> from the marine environment, foundation engineering and undersea cabling.</p></div>
          </div>
          <p><b>Floating offshore platforms</b> are being developed so turbines can work in <b>deeper water</b> than fixed foundations allow.</p>
          <h3>Applications</h3>
          <div class="chips"><span class="chip">Electricity generation</span><span class="chip">Water pumping</span><span class="chip">Agriculture</span><span class="chip">Rural electrification</span><span class="chip">Industrial use</span><span class="chip">Hybrid renewable systems</span></div>
        ` },
        { title: 'Advantages and challenges', html: `
          <h3>Advantages</h3>
          <ul>
            <li><b>Zero fuel cost</b>: wind is a free, renewable resource.</li>
            <li><b>No greenhouse gas emissions</b> during operation.</li>
            <li><b>Low operating expenses</b> once built.</li>
            <li>Capable of <b>large-scale</b> electricity generation through wind farms.</li>
            <li><b>Creates jobs</b> in manufacturing, installation and maintenance.</li>
            <li><b>Reduces dependence</b> on fossil fuels.</li>
          </ul>
          <h3>Challenges</h3>
          <ul>
            <li><b>Variable wind speeds</b> make output unsteady.</li>
            <li><b>Noise and visual impact</b> near homes.</li>
            <li><b>Bird and bat collisions</b> with the blades.</li>
            <li><b>Large land requirement</b> for spacing turbines.</li>
            <li><b>High installation cost</b>.</li>
            <li><b>Grid integration</b> problems from the variable supply.</li>
          </ul>
          <p>Wind has a higher <b>capacity factor</b> than solar: typically <b>35–50% onshore</b> and up to <b>50–60% offshore</b>, because turbines can run day and night whenever there is wind. But wind has <b>more moving parts</b>, higher maintenance and harder siting and permitting.</p>
          <div class="note heads-up">Lecture 33 quotes lower figures for the same thing: wind <b>25–40%</b> and solar <b>20–25%</b>. If an MCQ gives one of these ranges, match it to the lecture it comes from; either way, wind is higher than solar and geothermal (80–95%) is highest.</div>
          <div class="note exam">Long answer on wind: origin (uneven heating → pressure difference → kinetic energy) → working steps with a labelled turbine diagram → components → HAWT vs VAWT → onshore vs offshore → applications → advantages and challenges → capacity factor.</div>
        ` }
      ],
      flashcards: [
        { front: 'Why does wind blow?', back: 'The sun <b>heats Earth unevenly</b>, creating pressure differences.' },
        { front: 'Role of the gearbox?', back: '<b>Increases rotational speed</b> for the generator.' },
        { front: 'What is the nacelle?', back: 'The housing on the tower holding gearbox, shaft and generator.' },
        { front: 'Most common turbine type?', back: '<b>HAWT</b> (horizontal axis), high efficiency.' },
        { front: 'Where do VAWTs suit, and why?', back: '<b>Urban areas</b>; accept wind from any direction.' },
        { front: 'Offshore vs onshore?', back: 'Offshore: stronger, steadier wind but <b>much higher cost</b>.' },
        { front: 'Wind capacity factor (Lecture 32)?', back: '<b>35–50%</b> onshore, up to <b>50–60%</b> offshore.' },
        { front: 'A wildlife challenge of wind?', back: '<b>Bird and bat collisions</b>.' }
      ],
      oneLiners: [
        'Wind turbines convert kinetic energy of moving air into electricity.',
        'Floating platforms let offshore turbines use deeper water.',
        'Wind has more moving parts than solar, so more maintenance.'
      ],
      formulas: []
    },
    {
      id: 'm7-wind-india-compare',
      title: 'Wind in India, solar vs wind, and the bigger picture',
      short: 'Wind in India, compare',
      blurb: 'India\'s wind potential and five wind initiatives, solar vs wind compared, environmental benefits of renewables, the engineer\'s role and future trends.',
      source: 'Lecture W6 Part 1 (Solar and Wind), pages 8–11',
      tabs: [
        { title: 'Wind in India', html: `
          <p class="lead">India's <b>eastern coast is cyclone-prone</b>, so the <b>western coast</b> is more attractive for wind energy.</p>
          <p>India has a coastline of about <b>7,516.6 km</b>, and with its exclusive economic zones it has large wind potential. According to the <b>National Institute for Wind Energy (Chennai)</b>, the states with the greatest potential are <b>Gujarat, Maharashtra, Karnataka, Tamil Nadu and Andhra Pradesh</b>, because of stable, steady and speedy winds.</p>
          <h3>Five wind initiatives</h3>
          <table class="tbl">
            <tbody>
              <tr><td><b>National Wind-Solar Hybrid Policy (2018)</b></td><td>Promotes combined wind and solar, better use of land and transmission, and converting existing plants into hybrids.</td></tr>
              <tr><td><b>National Offshore Wind Energy Policy (2015)</b></td><td>Taps offshore wind along the coast, with <b>MNRE</b> as nodal ministry; focus on states like Gujarat and Tamil Nadu.</td></tr>
              <tr><td><b>Renewable Purchase Obligation (RPO)</b></td><td>Makes distribution companies and large consumers buy a set share of electricity from renewables, including wind.</td></tr>
              <tr><td><b>Green Energy Corridor Programme</b></td><td>Strengthens transmission to bring wind and solar power into the grid with fewer losses and less congestion.</td></tr>
              <tr><td><b>PLI for RE manufacturing</b></td><td>Promotes domestic manufacturing of renewable equipment under <b>Make in India</b>.</td></tr>
            </tbody>
          </table>
          <div class="note trap">Offshore wind policy is <b>2015</b>; wind-solar hybrid policy is <b>2018</b>.</div>
        ` },
        { title: 'Solar vs wind', html: `
          <table class="tbl">
            <thead><tr><th></th><th>Solar</th><th>Wind</th></tr></thead>
            <tbody>
              <tr><td>Source</td><td>Sunlight</td><td>Moving air</td></tr>
              <tr><td>When it works</td><td>Daylight hours only</td><td>Whenever wind speed is enough, day or night</td></tr>
              <tr><td>Noise</td><td>Silent</td><td>Moderate noise</td></tr>
              <tr><td>Installation</td><td>Rooftops possible</td><td>Needs open, windy areas</td></tr>
              <tr><td>Maintenance</td><td>Lower (no moving parts)</td><td>Higher (more moving parts)</td></tr>
              <tr><td>Ideal location</td><td>Sunny regions</td><td>Coastal and hilly regions</td></tr>
              <tr><td>Capacity factor</td><td>Lower</td><td>Higher</td></tr>
            </tbody>
          </table>
          <p>The two are <b>complementary in time</b>: solar peaks at <b>midday</b>, while wind is often stronger <b>at night or during storms</b>. That is why grid planners prefer building <b>both together</b>. The energy transition is a <b>systems-engineering</b> problem joining materials science, fluid dynamics, power electronics, structural engineering and policy.</p>
        ` },
        { title: 'Benefits and engineers', html: `
          <h3>Environmental benefits of renewable energy</h3>
          <ul>
            <li><b>Reduces CO₂ emissions</b>, because no fuel is burnt.</li>
            <li><b>Improves air quality</b> by cutting smoke and gases from power plants.</li>
            <li><b>Conserves fossil fuel reserves</b> for other uses.</li>
            <li><b>Mitigates climate change</b>.</li>
            <li><b>Protects ecosystems</b> from mining and pollution.</li>
            <li><b>Promotes sustainable development</b>.</li>
            <li><b>Supports energy security</b> by cutting fuel imports.</li>
          </ul>
          <h3>Role of engineers</h3>
          <p>Future engineers can design efficient solar panels, develop advanced wind turbines, improve energy storage, create smart grids, build energy-efficient buildings, bring AI into renewable systems, invent affordable clean technologies and promote sustainable engineering practice.</p>
        ` },
        { title: 'Future trends', html: `
          <div class="chips"><span class="chip">Floating solar farms</span><span class="chip">Building-integrated PV</span><span class="chip">Perovskite solar cells</span><span class="chip">Offshore floating wind</span><span class="chip">Green hydrogen</span><span class="chip">Smart grids</span><span class="chip">AI for energy management</span><span class="chip">Advanced batteries</span><span class="chip">Microgrids</span><span class="chip">Vehicle-to-grid</span></div>
          <p>The lecture's closing point: the future of energy is not about producing more electricity but about producing it <b>responsibly</b>. Every panel and turbine is a step towards a healthier planet, and the transition is both an engineering challenge and a responsibility to future generations.</p>
          <div class="note exam">For a "compare solar and wind" question, use the table rows, then add complementarity in time and why planners build both.</div>
        ` }
      ],
      flashcards: [
        { front: 'Which Indian coast suits wind, and why?', back: '<b>Western</b>; the eastern coast is cyclone-prone.' },
        { front: 'India\'s coastline length?', back: 'About <b>7,516.6 km</b>.' },
        { front: 'Where is the National Institute for Wind Energy?', back: '<b>Chennai</b>.' },
        { front: 'Five states with most wind potential?', back: 'Gujarat, Maharashtra, Karnataka, Tamil Nadu, Andhra Pradesh.' },
        { front: 'Year of the National Offshore Wind Energy Policy?', back: '<b>2015</b> (MNRE nodal ministry).' },
        { front: 'Year of the Wind-Solar Hybrid Policy?', back: '<b>2018</b>.' },
        { front: 'What is RPO?', back: 'Discoms and big consumers must buy a <b>set share of renewable power</b>.' },
        { front: 'Why build solar and wind together?', back: 'They are <b>complementary in time</b>: solar at midday, wind often at night.' }
      ],
      oneLiners: [
        'Solar is silent; wind makes moderate noise.',
        'Green hydrogen and vehicle-to-grid are future trends.',
        'Renewables support energy security.'
      ],
      formulas: []
    },
    {
      id: 'm7-hydro-energy',
      title: 'Hydroelectric energy: principle, plant and types',
      short: 'Hydropower basics',
      blurb: 'Hydropower\'s share, the four-stage energy conversion, the seven plant components, the four plant types with Indian examples, and its advantages.',
      source: 'Lecture W6 Part 2 (Hydro and Geothermal), pages 1–4',
      tabs: [
        { title: 'Continuous renewables', html: `
          <p class="lead">Unlike solar and wind, <b>hydroelectric and geothermal</b> energy can give <b>continuous electricity</b>, under different geographical conditions.</p>
          <ul>
            <li><b>Hydropower</b> is the world's <b>largest source of renewable electricity</b>, about <b>15–16%</b> of global electricity generation.</li>
            <li><b>Geothermal</b> is less widely used but very reliable: <b>Iceland</b> gets over <b>20%</b> and <b>Kenya</b> about <b>47%</b> of their electricity from it.</li>
          </ul>
        ` },
        { title: 'How hydropower works', html: `
          <p class="lead"><b>Hydropower</b> uses the energy of water stored at <b>height (potential energy)</b> or moving at <b>speed (kinetic energy)</b> to make electricity.</p>
          <p>Ancient civilisations used river-driven <b>water wheels</b> to grind grain. Modern plants use the same principle at a much larger scale.</p>
          <ol class="steps">
            <li><b>Potential energy</b> of water stored in a reservoir at height h is released by opening the <b>sluice gates</b>.</li>
            <li><b>Kinetic energy</b>: water speeds up as it flows down through <b>penstocks</b> (large steel pipes or tunnels).</li>
            <li><b>Mechanical energy</b>: the high-speed jet strikes the blades of a hydraulic <b>turbine</b> and spins it.</li>
            <li><b>Electrical energy</b>: the turbine shaft drives a <b>generator</b>.</li>
          </ol>
          <div class="eq">Potential → Kinetic → Mechanical → Electrical</div>
          <figure data-fig="m7-hydro-plant"></figure>
        ` },
        { title: 'Plant components', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Reservoir</b></td><td>Stores large amounts of water and acts as an <b>energy storage</b> system.</td></tr>
              <tr><td><b>Dam</b></td><td>Blocks river flow, creates the reservoir and maintains water pressure.</td></tr>
              <tr><td><b>Penstock</b></td><td>Large pipe carrying water down to the turbines.</td></tr>
              <tr><td><b>Turbine</b></td><td>Rotated by the water; converts water energy to mechanical energy.</td></tr>
              <tr><td><b>Generator</b></td><td>Produces electricity from the turbine's rotation.</td></tr>
              <tr><td><b>Transformer</b></td><td><b>Raises voltage</b> for long-distance transmission.</td></tr>
              <tr><td><b>Transmission lines</b></td><td>Carry electricity to homes and industries.</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Types of plant', html: `
          <table class="tbl">
            <thead><tr><th>Type</th><th>How it works</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td><b>Storage</b></td><td>Dam and reservoir. The <b>most common</b> type worldwide; reliable output.</td><td><b>Tehri Dam</b>, Uttarakhand (1,000 MW)</td></tr>
              <tr><td><b>Run-of-the-river</b></td><td>Uses natural river flow <b>without a large reservoir</b>, so smaller environmental impact, but output varies with river discharge.</td><td><b>Srinagar Hydro</b>, Alaknanda River (330 MW)</td></tr>
              <tr><td><b>Pumped storage</b></td><td>A <b>giant rechargeable battery</b>: water is pumped uphill when demand is low and released to generate at peak demand. Stores surplus renewable power.</td><td><b>Kadamparai</b>, Tamil Nadu (400 MW)</td></tr>
              <tr><td><b>Micro and pico</b></td><td>Very small systems <b>below 100 kW</b> on small streams or canals, for remote off-grid communities.</td><td>Rural electrification in Himalayan villages</td></tr>
            </tbody>
          </table>
          <div class="note trap">Pumped storage <b>uses</b> more electricity than it gives back; its value is shifting power from low-demand to peak-demand times, not making extra energy.</div>
        ` },
        { title: 'Advantages', html: `
          <ul>
            <li><b>Renewable</b>: the water cycle keeps refilling rivers.</li>
            <li><b>Very long asset life</b>: large dams run <b>50–100+ years</b>, giving a very low long-term cost per kWh.</li>
            <li><b>Zero direct emissions</b> in operation, though rotting vegetation in reservoirs can release <b>methane</b> in the tropics.</li>
            <li><b>High efficiency</b>, often <b>above 90%</b>.</li>
            <li><b>Dispatchable baseload power</b>: unlike solar and wind it can generate <b>on demand</b> at any hour, which steadies the grid.</li>
            <li><b>Co-benefits</b>: reservoirs give irrigation, municipal water, flood control, navigation, fisheries and recreation.</li>
            <li><b>Pumped storage</b> is the world's <b>dominant grid-scale storage</b>, essential for integrating variable renewables.</li>
          </ul>
        ` }
      ],
      flashcards: [
        { front: 'Hydropower share of global electricity?', back: 'About <b>15–16%</b>; the largest renewable source.' },
        { front: 'Hydropower energy sequence?', back: '<b>Potential → Kinetic → Mechanical → Electrical</b>.' },
        { front: 'What is a penstock?', back: 'Large steel pipe or tunnel carrying water to the turbine.' },
        { front: 'Role of the transformer in a hydro plant?', back: '<b>Raises voltage</b> for long-distance transmission.' },
        { front: 'Example of storage hydropower?', back: '<b>Tehri Dam</b>, Uttarakhand, 1,000 MW.' },
        { front: 'Example of run-of-the-river?', back: '<b>Srinagar Hydro</b>, Alaknanda, 330 MW.' },
        { front: 'Example of pumped storage?', back: '<b>Kadamparai</b>, Tamil Nadu, 400 MW.' },
        { front: 'Size limit of micro/pico hydro?', back: '<b>Below 100 kW</b>.' },
        { front: 'Efficiency of hydropower?', back: 'Often <b>above 90%</b>.' },
        { front: 'Life of a large dam?', back: '<b>50–100+ years</b>.' }
      ],
      oneLiners: [
        'Sluice gates release the stored water.',
        'Hydro is dispatchable; solar and wind are not.',
        'Pumped storage works like a giant rechargeable battery.',
        'Tropical reservoirs can emit methane.'
      ],
      formulas: [
        { name: 'Hydro energy chain', html: 'Potential → Kinetic → Mechanical → Electrical', note: 'Reservoir → penstock → turbine → generator.' }
      ]
    },
    {
      id: 'm7-hydro-impacts-india',
      title: 'Hydropower: environmental problems and India',
      short: 'Hydro impacts, India',
      blurb: 'The six environmental challenges of large dams, including Sardar Sarovar\'s displacement, and India\'s major hydro projects.',
      source: 'Lecture W6 Part 2 (Hydro and Geothermal), pages 4–5',
      tabs: [
        { title: 'Environmental challenges', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Flooding of land</b></td><td>Building large dams floods forests and farmland, changes river ecosystems and <b>reduces downstream fertility</b> because silt no longer reaches the fields.</td></tr>
              <tr><td><b>Displacement</b></td><td>Large reservoirs flood inhabited areas. India's <b>Sardar Sarovar Dam</b> displaced about <b>320,000 people</b>.</td></tr>
              <tr><td><b>Ecosystem disruption</b></td><td>Dams <b>block fish migration</b>, change water temperature and sediment flow, and destroy riparian (riverbank) habitats.</td></tr>
              <tr><td><b>Sedimentation</b></td><td>Reservoirs fill with <b>silt</b> over decades, cutting storage capacity and working life.</td></tr>
              <tr><td><b>Seismic risk</b></td><td>Very large reservoirs can <b>induce local earthquakes</b> through extra water pressure on fault lines.</td></tr>
              <tr><td><b>Hydrology dependence</b></td><td><b>Drought</b> and changing rainfall from climate change can sharply cut generation.</td></tr>
            </tbody>
          </table>
          <p>So engineers now focus on <b>environmentally sustainable dam designs</b> to reduce these effects.</p>
        ` },
        { title: 'Hydropower in India', html: `
          <p class="lead">India has huge hydro potential thanks to the <b>Himalayan rivers</b> and the <b>Western Ghats</b>.</p>
          <div class="chips"><span class="chip">Bhakra Nangal Project</span><span class="chip">Hirakud Dam</span><span class="chip">Tehri Dam</span><span class="chip">Sardar Sarovar Project</span></div>
          <p>These give electricity and also support <b>irrigation and water management</b>. <b>Small hydropower</b> projects are growing in mountain regions because they disturb the environment less.</p>
          <div class="note exam">"Hydropower is renewable but not always green": give the advantages (renewable, 90% efficient, dispatchable, co-benefits) then the six challenges with the Sardar Sarovar figure, and end with sustainable dam design and small hydro.</div>
        ` }
      ],
      flashcards: [
        { front: 'People displaced by Sardar Sarovar Dam?', back: 'About <b>320,000</b>.' },
        { front: 'Why do dams reduce downstream fertility?', back: 'They trap the <b>silt</b> that used to fertilise fields.' },
        { front: 'What is sedimentation in a reservoir?', back: 'Silt filling it over decades, cutting capacity and life.' },
        { front: 'How can a reservoir cause earthquakes?', back: 'Extra <b>water pressure on fault lines</b> (induced seismicity).' },
        { front: 'Sources of India\'s hydro potential?', back: '<b>Himalayan rivers</b> and the <b>Western Ghats</b>.' },
        { front: 'Name four major Indian hydro projects.', back: 'Bhakra Nangal, Hirakud, Tehri, Sardar Sarovar.' }
      ],
      oneLiners: [
        'Dams block fish migration.',
        'Drought can cut hydropower output.',
        'Small hydro causes less environmental disturbance.'
      ],
      formulas: []
    },
    {
      id: 'm7-geothermal',
      title: 'Geothermal energy: source and plant types',
      short: 'Geothermal basics',
      blurb: 'What geothermal energy is, the geothermal gradient, how a plant recycles water, and dry steam, flash steam and binary cycle plants.',
      source: 'Lecture W6 Part 2 (Hydro and Geothermal), pages 5–6',
      tabs: [
        { title: 'Definition and source', html: `
          <p class="lead"><b>Geothermal</b> comes from the Greek <b>geo</b> (Earth) and <b>therme</b> (heat). Geothermal energy is the <b>heat stored beneath Earth's surface</b>.</p>
          <p>The heat comes from the <b>planet's formation</b> and the <b>natural decay of radioactive elements</b> inside it. Unlike solar and wind it is available <b>continuously, day and night all year</b>, so it is an excellent <b>base-load</b> source.</p>
          <p>Earth's interior is extremely hot, and temperature <b>rises with depth</b>: this is the <b>geothermal gradient</b>. The heat reaches underground water reservoirs and makes hot water or steam. Engineers <b>drill wells</b> into these reservoirs, and the steam drives turbines linked to generators.</p>
        ` },
        { title: 'How a plant works', html: `
          <ol class="steps">
            <li><b>Production wells</b> bring hot water or steam to the surface.</li>
            <li><b>Steam spins the turbine</b>.</li>
            <li><b>The generator</b> makes electricity.</li>
            <li><b>Injection wells</b> return the cooled water underground.</li>
          </ol>
          <p>Re-injection is a recycling step that <b>maintains reservoir pressure</b> and keeps the resource going long-term.</p>
          <figure data-fig="m7-geothermal-plants"></figure>
        ` },
        { title: 'Three plant types', html: `
          <table class="tbl">
            <thead><tr><th>Type</th><th>How it works</th><th>Key facts</th></tr></thead>
            <tbody>
              <tr><td><b>Dry steam</b></td><td>Natural <b>dry steam</b> from the reservoir is piped <b>straight to the turbine</b>.</td><td><b>Simplest and oldest</b>. Rare, because few reservoirs give dry steam. <b>The Geysers, California</b>, the world's largest geothermal complex, uses it.</td></tr>
              <tr><td><b>Flash steam</b></td><td>Hot pressurised water <b>above 180 °C</b> is suddenly depressurised ("flashed") in a surface tank, so part turns to steam. The steam drives the turbine; leftover water is re-injected.</td><td>The <b>most common</b> geothermal technology worldwide.</td></tr>
              <tr><td><b>Binary cycle</b></td><td>Water at <b>100–180 °C</b> heats a <b>secondary fluid</b> with a lower boiling point (<b>isobutane or pentane</b>) through a heat exchanger. That fluid vaporises and drives the turbine; the geothermal water never touches the turbine and is fully re-injected.</td><td><b>Most flexible</b>: uses lower-temperature reservoirs; <b>almost zero emissions</b>.</td></tr>
            </tbody>
          </table>
          <div class="mnemonic">Temperature ladder: binary 100–180 °C, flash above 180 °C, dry steam needs natural steam.</div>
          <div class="note trap">"Most common" is <b>flash steam</b>; "oldest and simplest" is <b>dry steam</b>; "lowest temperature, near-zero emissions" is <b>binary</b>.</div>
        ` }
      ],
      flashcards: [
        { front: 'Meaning of "geothermal"?', back: 'Greek <b>geo</b> = Earth, <b>therme</b> = heat.' },
        { front: 'Two sources of Earth\'s internal heat?', back: 'The planet\'s <b>formation</b> and <b>radioactive decay</b>.' },
        { front: 'What is the geothermal gradient?', back: 'Temperature <b>rising with depth</b> inside Earth.' },
        { front: 'Why re-inject geothermal water?', back: 'To <b>maintain reservoir pressure</b> and long-term supply.' },
        { front: 'Oldest and simplest geothermal plant?', back: '<b>Dry steam</b> (e.g. The Geysers, California).' },
        { front: 'Most common geothermal plant?', back: '<b>Flash steam</b>, using water above 180 °C.' },
        { front: 'Binary cycle temperature range and fluids?', back: '<b>100–180 °C</b>; isobutane or pentane.' },
        { front: 'World\'s largest geothermal complex?', back: '<b>The Geysers</b>, California (dry steam).' }
      ],
      oneLiners: [
        'Geothermal is available 24 hours a day.',
        'In binary plants the geothermal water never touches the turbine.',
        'Flashing means sudden depressurisation into steam.'
      ],
      formulas: []
    },
    {
      id: 'm7-geothermal-uses',
      title: 'Geothermal: uses, pros, limits and where',
      short: 'Geothermal uses',
      blurb: 'Eight applications, the advantages (80–95% capacity factor), the limitations (Basel EGS, H₂S), world leaders and India\'s four geothermal regions.',
      source: 'Lecture W6 Part 2 (Hydro and Geothermal), pages 6–8',
      tabs: [
        { title: 'Applications', html: `
          <div class="chips"><span class="chip">Electricity generation</span><span class="chip">District heating</span><span class="chip">Greenhouse heating</span><span class="chip">Industrial drying</span><span class="chip">Aquaculture</span><span class="chip">Hot water supply</span><span class="chip">Spa tourism</span><span class="chip">Heat pumps for buildings</span></div>
          <p>Geothermal heat is used <b>directly</b> as well as for power: heating whole districts, greenhouses and fish farms, drying industrial products and supplying hot water.</p>
        ` },
        { title: 'Advantages', html: `
          <ul>
            <li><b>Baseload power</b>: plants run continuously with capacity factors of <b>80–95%</b>, far above <b>solar (20–25%)</b> and <b>wind (25–40%)</b>. Iceland's plants run almost all year.</li>
            <li><b>Tiny land footprint</b> for the energy produced, compared with other renewables.</li>
            <li><b>Minimal emissions</b>: binary plants give virtually zero direct emissions; flash plants release only small amounts of naturally occurring gases.</li>
            <li><b>Stable, predictable output</b>, unaffected by weather, season or time of day.</li>
            <li><b>Long resource life</b>: managed reservoirs last decades if extraction balances natural recharge.</li>
            <li>Available <b>24 hours</b>, cuts fossil fuel use and suits <b>sustainable cities</b>.</li>
          </ul>
        ` },
        { title: 'Limitations', html: `
          <ul>
            <li><b>Geographic specificity</b>: economic resources sit in <b>geologically active</b> regions. India has limited high-temperature resources compared with volcanic nations.</li>
            <li><b>High exploration cost</b>: deep drilling is expensive and risky, since a well may find no productive reservoir.</li>
            <li><b>EGS problems</b>: Enhanced Geothermal Systems use hydraulic fracturing, which can cause <b>induced earthquakes</b>. An EGS project in <b>Basel, Switzerland</b> was abandoned after felt earthquakes.</li>
            <li><b>Hydrogen sulphide (H₂S)</b>: some systems release it, so it must be treated to prevent air pollution and health effects.</li>
          </ul>
          <p>Modern technology and management are steadily reducing these risks.</p>
        ` },
        { title: 'World and India', html: `
          <p>Countries with major geothermal development: <b>Iceland, USA, Indonesia, Philippines, Kenya, New Zealand</b>. In <b>Iceland</b> nearly every building has geothermal heating, which greatly cuts fossil fuel use.</p>
          <p>India has <b>moderate</b> potential. Key regions:</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Puga Valley</b></td><td>Ladakh</td></tr>
              <tr><td><b>Tattapani</b></td><td>Chhattisgarh</td></tr>
              <tr><td><b>Manikaran</b></td><td>Himachal Pradesh</td></tr>
              <tr><td><b>Cambay Basin</b></td><td>Gujarat</td></tr>
            </tbody>
          </table>
          <p>Commercial geothermal electricity in India is still <b>limited</b>; research continues.</p>
          <div class="note exam">Long answer on geothermal: definition and Greek root → source of heat and geothermal gradient → plant working with re-injection (diagram) → three plant types → applications → advantages with capacity factors → limitations (Basel, H₂S) → world and India sites.</div>
        ` }
      ],
      flashcards: [
        { front: 'Geothermal capacity factor?', back: '<b>80–95%</b> (solar 20–25%, wind 25–40% in Lecture 33).' },
        { front: 'Where was an EGS project abandoned after earthquakes?', back: '<b>Basel, Switzerland</b>.' },
        { front: 'Gas some geothermal systems release?', back: '<b>Hydrogen sulphide (H₂S)</b>.' },
        { front: 'Country where nearly all buildings use geothermal heating?', back: '<b>Iceland</b>.' },
        { front: 'Kenya\'s geothermal share of electricity?', back: 'About <b>47%</b>.' },
        { front: 'India\'s four geothermal regions?', back: 'Puga Valley (Ladakh), Tattapani (Chhattisgarh), Manikaran (HP), Cambay Basin (Gujarat).' }
      ],
      oneLiners: [
        'Geothermal has a tiny land footprint.',
        'Deep drilling is costly and may find nothing.',
        'India has limited high-temperature geothermal resources.'
      ],
      formulas: []
    },
    {
      id: 'm7-hydro-vs-geothermal',
      title: 'Hydro vs geothermal, engineers, SDGs and trends',
      short: 'Hydro vs geothermal',
      blurb: 'The side-by-side comparison table, which engineers do what, the four linked SDGs and the future trends for hydro and geothermal.',
      source: 'Lecture W6 Part 2 (Hydro and Geothermal), pages 8–9',
      tabs: [
        { title: 'Comparison', html: `
          <table class="tbl">
            <thead><tr><th>Parameter</th><th>Hydroelectric</th><th>Geothermal</th></tr></thead>
            <tbody>
              <tr><td>Energy source</td><td>Flowing water</td><td>Earth's internal heat</td></tr>
              <tr><td>Resource requirement</td><td>Rivers or reservoirs</td><td>Geothermal reservoirs</td></tr>
              <tr><td>Land area</td><td><b>Large</b></td><td><b>Small</b></td></tr>
              <tr><td>Technology maturity</td><td><b>Mature</b></td><td><b>Emerging</b></td></tr>
              <tr><td>Availability</td><td><b>Seasonal</b>, depends on water</td><td><b>Continuous</b></td></tr>
              <tr><td>Electricity output</td><td>High</td><td>Moderate</td></tr>
              <tr><td>Environmental impact</td><td>Possible ecological disruption</td><td>Comparatively limited</td></tr>
            </tbody>
          </table>
          <div class="note heads-up">The PDF's comparison table is printed with its rows shifted out of line. The pairing above is the one that matches the lecture's own text (hydro is mature, water-dependent, high output, large area).</div>
        ` },
        { title: 'Role of engineers', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Civil</b></td><td>Design dams and reservoirs.</td></tr>
              <tr><td><b>Mechanical</b></td><td>Design turbines.</td></tr>
              <tr><td><b>Electrical</b></td><td>Optimise power transmission.</td></tr>
              <tr><td><b>Environmental</b></td><td>Assess ecological impacts.</td></tr>
              <tr><td><b>Geological</b></td><td>Find geothermal reservoirs.</td></tr>
              <tr><td><b>Chemical</b></td><td>Improve <b>corrosion-resistant materials</b> for geothermal plants.</td></tr>
              <tr><td><b>Computer</b></td><td>Build smart monitoring systems for power plants.</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'SDGs and trends', html: `
          <h3>Linked Sustainable Development Goals</h3>
          <ul>
            <li><b>SDG 7</b>: Affordable and Clean Energy.</li>
            <li><b>SDG 9</b>: Industry, Innovation and Infrastructure.</li>
            <li><b>SDG 11</b>: Sustainable Cities and Communities.</li>
            <li><b>SDG 13</b>: Climate Action.</li>
          </ul>
          <h3>Future trends</h3>
          <div class="chips"><span class="chip">Small modular hydropower</span><span class="chip">Fish-friendly turbines</span><span class="chip">Floating hydropower</span><span class="chip">Enhanced geothermal systems</span><span class="chip">AI plant monitoring</span><span class="chip">Smart renewable grids</span><span class="chip">Hydro + solar + wind hybrids</span></div>
          <p>Together with solar and wind, hydro and geothermal form the <b>backbone</b> of the shift to sustainable energy. The engineer's task is to generate energy <b>responsibly, efficiently and sustainably</b>.</p>
          <div class="note exam">For "compare hydro and geothermal", reproduce the seven-row table, then add one line each on reliability (hydro dispatchable but drought-hit; geothermal 80–95% capacity factor) and the SDGs.</div>
        ` }
      ],
      flashcards: [
        { front: 'Which is mature, hydro or geothermal?', back: '<b>Hydro</b> is mature; geothermal is emerging.' },
        { front: 'Which needs less land?', back: '<b>Geothermal</b>.' },
        { front: 'Which is continuous?', back: '<b>Geothermal</b>; hydro is seasonal and water-dependent.' },
        { front: 'Chemical engineers\' role in geothermal?', back: '<b>Corrosion-resistant materials</b>.' },
        { front: 'Four SDGs linked to hydro and geothermal?', back: '<b>7, 9, 11, 13</b>.' },
        { front: 'A future hydro trend that protects fish?', back: '<b>Fish-friendly turbines</b>.' }
      ],
      oneLiners: [
        'SDG 7 is Affordable and Clean Energy.',
        'SDG 13 is Climate Action.',
        'Geological engineers locate geothermal reservoirs.'
      ],
      formulas: []
    }
  ],
  figures: [
    { id: 'm7-pv-cell', src: null, crop: null, caption: 'Light frees electrons in the silicon; the p-n junction field pushes them one way, so DC current flows through the load.', alt: 'Cross-section of a silicon solar cell: n-type layer on top, p-type below, junction field between, sunlight entering, electrons flowing through an external load.' },
    { id: 'm7-wind-turbine', src: null, crop: null, caption: 'Blades and hub turn the shaft; inside the nacelle the gearbox speeds it up for the generator.', alt: 'Horizontal-axis wind turbine with labelled blades, hub, shaft, gearbox, generator, nacelle, controller, brake and tower.' },
    { id: 'm7-hydro-plant', src: null, crop: null, caption: 'Follow the energy: stored water (potential) rushes down the penstock (kinetic), spins the turbine (mechanical) and the generator (electrical).', alt: 'Storage hydropower plant: reservoir behind a dam, sluice gate, penstock down to the powerhouse turbine and generator, transformer and transmission lines, river outflow.' },
    { id: 'm7-geothermal-plants', src: null, crop: null, caption: 'All three types re-inject the water. Only the binary plant keeps the geothermal water away from the turbine.', alt: 'Three geothermal plant schematics stacked: dry steam piped to turbine; flash steam with flash tank; binary cycle with heat exchanger and secondary fluid loop; each with production and injection wells.' }
  ]
});
