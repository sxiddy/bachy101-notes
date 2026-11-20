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
          <p class="lead">Week 6 = <b>contemporary environmental issues</b>: <b>green energy technologies</b>.</p>
          <p>World depends on <b>fossil fuels</b> (coal, oil, natural gas) for <b>over 80%</b> of energy supply; main damage: <b>greenhouse gas emissions</b>.</p>
          <ul>
            <li><b>IPCC</b> (Intergovernmental Panel on Climate Change): <b>net-zero emissions by 2050</b>.</li>
            <li><b>India</b>: world's <b>third-largest emitter</b>.</li>
            <li><b>Paris Agreement</b>: India to get <b>50%</b> of cumulative installed electricity capacity from <b>non-fossil sources by 2030</b>.</li>
            <li>National target: <b>500 GW of renewable capacity by 2030</b>; <b>solar and wind</b> the two main pillars.</li>
          </ul>
          <p>Solar and wind: <b>fastest-growing</b> renewables. Hydro and geothermal (Lecture 33) give <b>continuous</b> power.</p>
          <div class="note why">Fossil fuels are <b>finite</b> and <b>polluting</b>: the case for green energy.</div>
        ` },
        { title: 'Renewable vs green', html: `
          <p class="lead"><b>Renewable energy</b>: from natural processes that <b>replenish faster than they are consumed</b>: sunlight, wind, flowing water, geothermal heat, biomass growth.</p>
          <p><b>Green energy</b>: broader term; renewables with <b>minimal environmental impact across their entire lifecycle</b> (production, operation, disposal).</p>
          <div class="note trap">Not all renewables are "green": <b>large hydro dams</b> (ecological effects), <b>biomass combustion</b> (emissions). Solar (PV, thermal) and wind (onshore, offshore) are genuinely green.</div>
          <h3>Characteristics of green energy</h3>
          <table class="tbl">
            <tbody>
              <tr><td><b>Renewable</b></td><td>Replenished by nature; doesn't run out.</td></tr>
              <tr><td><b>Sustainable</b></td><td>Doesn't reduce future generations' use.</td></tr>
              <tr><td><b>Clean and low-carbon</b></td><td>Little or no GHG or air pollution.</td></tr>
              <tr><td><b>Environmentally friendly</b></td><td>Small lifecycle impact.</td></tr>
              <tr><td><b>Locally available</b></td><td>Sun, wind, water local; fewer fuel imports.</td></tr>
              <tr><td><b>Decentralised generation</b></td><td>Suits small plants (rooftop array, village micro-hydro) and large.</td></tr>
            </tbody>
          </table>
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
          <p class="lead"><b>Solar energy technology</b> converts the sun's electromagnetic radiation into usable energy, mostly <b>electricity</b>.</p>
          <p>Irradiance about <b>1,000 W per square metre</b> at <b>solar noon on a clear day</b>: baseline for output calculations.</p>
          <div class="eq">Electrical output = solar irradiance × panel area × efficiency</div>
          <div class="worked"><div class="given"><p>A 2 m² panel, 20% efficient, at 1,000 W/m².</p></div><div class="solve"><div class="eq">1,000 × 2 × 0.20 = 400 W</div></div><div class="result">About 400 W at clear-sky noon</div></div>
          <h3>Components of a solar power system</h3>
          <ul>
            <li><b>Solar panels</b>: sunlight → DC.</li>
            <li><b>Inverter</b>: DC → AC for homes, grid.</li>
            <li><b>Charge controller</b>: regulates battery current; prevents overcharging.</li>
            <li><b>Battery</b> (optional): stores for night, cloud.</li>
            <li><b>Mounting structures</b>: hold panels at right angle.</li>
            <li><b>Electrical wiring</b>: connects parts.</li>
            <li><b>Monitoring system</b>: tracks output, flags faults.</li>
          </ul>
        ` },
        { title: 'Photovoltaic (PV)', html: `
          <p class="lead"><b>Photovoltaic systems</b> convert sunlight <b>directly into electricity</b> using the <b>photovoltaic effect</b>.</p>
          <ol class="steps">
            <li><b>Photons strike</b> a semiconductor, usually <b>crystalline silicon</b>.</li>
            <li><b>Electrons knocked loose</b> from atomic bonds.</li>
            <li><b>p-n junction</b> (two differently doped silicon layers) sets up an <b>internal electric field</b>.</li>
            <li><b>Field sweeps</b> electrons one way: <b>direct current</b> flows in external circuit.</li>
          </ol>
          <figure data-fig="m7-pv-cell"></figure>
          <p><b>Solid-state energy conversion</b>: no moving parts, combustion or working fluid; low maintenance.</p>
        ` },
        { title: 'Solar thermal and CSP', html: `
          <p class="lead"><b>Solar thermal systems</b> use <b>mirrors or lenses to concentrate sunlight</b> and make heat.</p>
          <p>Heat drives a <b>steam turbine</b> or directly <b>heats water or buildings</b>.</p>
          <p><b>Concentrated Solar Power (CSP)</b>: utility scale; paired with <b>thermal storage such as molten salt</b> to keep heat after sunset (solar's core weakness: no night power).</p>
          <div class="vs">
            <div class="side"><h4>PV</h4><p>Light → electricity directly, by the photovoltaic effect in silicon. No moving parts.</p></div>
            <div class="side"><h4>Solar thermal / CSP</h4><p>Light → concentrated heat → steam turbine, or direct heating. Can store heat in molten salt.</p></div>
          </div>
        ` },
        { title: 'Types of PV cells', html: `
          <table class="tbl">
            <thead><tr><th>Type</th><th>Efficiency</th><th>What to know</th></tr></thead>
            <tbody>
              <tr><td><b>Monocrystalline Si</b></td><td><b>20–22%</b></td><td><b>Single continuous crystal</b> by energy-intensive <b>Czochralski process</b>. Most efficient commercial, uniform dark, costlier per watt.</td></tr>
              <tr><td><b>Polycrystalline Si</b></td><td><b>15–17%</b></td><td>Many fragments melted together. Cheaper; <b>grain boundaries</b> impede electron flow.</td></tr>
              <tr><td><b>Thin film</b></td><td><b>10–13%</b></td><td><b>Cadmium telluride</b>, <b>amorphous silicon</b> in thin layers. Light, flexible, cheap; suits <b>building-integrated PV</b>.</td></tr>
              <tr><td><b>Perovskite</b> (emerging)</td><td>Above <b>30%</b> in tandem</td><td>On silicon in a <b>tandem</b> cell passes 30%. Cheap but <b>degrade faster</b> in moisture and UV; not yet scale-ready.</td></tr>
            </tbody>
          </table>
          <div class="mnemonic">Efficiency order: Mono (20–22) > Poly (15–17) > Thin film (10–13). Perovskite tandem aims beyond 30.</div>
        ` },
        { title: 'Advantages and challenges', html: `
          <h3>Advantages</h3>
          <ul>
            <li><b>Lowers electricity bills</b>: sunlight free.</li>
            <li><b>Grid independence</b> with batteries.</li>
            <li><b>Low maintenance</b>: no moving parts.</li>
            <li><b>Versatile deployment</b>: rooftop to desert plants.</li>
          </ul>
          <h3>Challenges</h3>
          <ul>
            <li><b>High upfront cost</b>: panels, inverters, installation.</li>
            <li><b>Weather dependency, intermittency</b>: cloud, time of day, season.</li>
            <li><b>Degradation</b>: about <b>0.5% output per year</b>; about <b>80–85%</b> left after <b>25 years</b>.</li>
            <li><b>Orientation and tracking</b>: fixed-tilt cheaper; <b>single-/dual-axis tracking</b> raises yield <b>15–35%</b> but adds complexity.</li>
            <li><b>Storage expense</b>: costly batteries for 24/7.</li>
            <li><b>Space-intensive</b>: large land or roof area.</li>
            <li><b>Materials, end-of-life</b>: energy-intensive cells, <b>hazardous by-products</b>; panel recycling an emerging problem.</li>
          </ul>
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
          <p class="lead">India: about <b>300 sunny days a year</b>; highly suitable for solar.</p>
          <p>Policies and incentives target <b>500 GW of renewable capacity by 2030</b>.</p>
        ` },
        { title: 'Government initiatives', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>PM Surya Ghar: Muft Bijli Yojana</b></td><td>Free electricity, <b>one crore households</b>, rooftop solar; subsidy up to <b>₹78,000</b>.</td></tr>
              <tr><td><b>PM-KUSUM</b></td><td>Solarises <b>agriculture</b>, replaces diesel pumps; up to <b>60% subsidy</b> on solar pumps.</td></tr>
              <tr><td><b>National Solar Mission (NSM)</b></td><td>India's <b>flagship</b>: scale commercial solar, long-term targets.</td></tr>
              <tr><td><b>PLI Scheme</b></td><td>Production-Linked Incentive: <b>domestic manufacturing</b> of PV modules, GW-scale wafer and cell factories.</td></tr>
              <tr><td><b>Solar Park Scheme</b></td><td><b>Ultra-Mega Solar Power Projects</b>: land and transmission. <b>Bhadla Solar Park</b>, world's largest.</td></tr>
              <tr><td><b>Green Energy Corridor (GEC)</b></td><td>Dedicated high-capacity <b>transmission lines</b> to national grid.</td></tr>
              <tr><td><b>Suryamitra</b></td><td>Skills youth to <b>install, maintain, repair</b> solar arrays.</td></tr>
              <tr><td><b>International Solar Alliance (ISA)</b></td><td>Co-founded by <b>India and France</b>; mobilise over <b>$1 trillion</b> solar investment.</td></tr>
              <tr><td><b>OSOWOG</b></td><td>One Sun, One World, One Grid: <b>interconnect regional grids</b> using <b>time-zone differences</b>.</td></tr>
              <tr><td><b>100% FDI</b></td><td>Foreign investment via <b>automatic approval route</b>.</td></tr>
            </tbody>
          </table>
          <div class="note trap">PM Surya Ghar = <b>rooftop solar for homes</b>; PM-KUSUM = <b>solar pumps for farmers</b>. ISA with <b>France</b>, not the US.</div>
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
          <p class="lead">Wind uses <b>fluid dynamics</b>, not semiconductor physics.</p>
          <p>Sun <b>heats Earth unevenly</b> → <b>air pressure differences</b> → air moves high to low. Its <b>kinetic energy</b> is converted by a turbine.</p>
          <ol class="steps">
            <li><b>Wind strikes blades</b>; they rotate.</li>
            <li><b>Rotor turns</b> main shaft.</li>
            <li><b>Gearbox</b> raises speed for generator.</li>
            <li><b>Generator</b> makes electricity.</li>
            <li><b>Grid</b> receives it.</li>
          </ol>
          <figure data-fig="m7-wind-turbine"></figure>
        ` },
        { title: 'Components and types', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Rotor blades</b></td><td>Wind's kinetic energy → rotation.</td></tr>
              <tr><td><b>Hub</b></td><td>Holds blades, joins them to shaft.</td></tr>
              <tr><td><b>Shaft</b></td><td>Carries rotation into nacelle.</td></tr>
              <tr><td><b>Gearbox</b></td><td>Slow rotor speed → high generator speed.</td></tr>
              <tr><td><b>Generator</b></td><td>Rotation → electricity.</td></tr>
              <tr><td><b>Nacelle</b></td><td>Housing atop tower: gearbox, generator, shaft.</td></tr>
              <tr><td><b>Tower</b></td><td>Lifts rotor to stronger, steadier winds.</td></tr>
              <tr><td><b>Controller</b></td><td>Starts, stops, adjusts to wind.</td></tr>
              <tr><td><b>Brake system</b></td><td>Stops rotor in high winds or maintenance.</td></tr>
            </tbody>
          </table>
          <div class="vs">
            <div class="side"><h4>HAWT</h4><p><b>Horizontal axis</b>; most common, <b>high efficiency</b>.</p></div>
            <div class="side"><h4>VAWT</h4><p><b>Vertical axis</b>; <b>urban areas</b>, wind from <b>any direction</b>.</p></div>
          </div>
        ` },
        { title: 'Wind farms', html: `
          <p class="lead">Many turbines together = <b>wind farm</b>, onshore or offshore.</p>
          <div class="vs">
            <div class="side"><h4>Onshore</h4><p>Cheaper to build and maintain; land-use conflicts, noise.</p></div>
            <div class="side"><h4>Offshore</h4><p><b>Stronger, steadier winds</b>, fewer land/noise issues; <b>much higher installation and maintenance costs</b> (marine environment, foundations, undersea cabling).</p></div>
          </div>
          <p><b>Floating offshore platforms</b>: for <b>deeper water</b>.</p>
          <h3>Applications</h3>
          <div class="chips"><span class="chip">Electricity generation</span><span class="chip">Water pumping</span><span class="chip">Agriculture</span><span class="chip">Rural electrification</span><span class="chip">Industrial use</span><span class="chip">Hybrid renewable systems</span></div>
        ` },
        { title: 'Advantages and challenges', html: `
          <h3>Advantages</h3>
          <ul>
            <li><b>Zero fuel cost</b>.</li>
            <li><b>No GHG emissions</b> in operation.</li>
            <li><b>Low operating expenses</b>.</li>
            <li><b>Large-scale</b> generation via farms.</li>
            <li><b>Creates jobs</b>: manufacturing, installation, maintenance.</li>
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
          <p>Wind <b>capacity factor</b> higher than solar: <b>35–50% onshore</b>, up to <b>50–60% offshore</b> (runs day and night). But <b>more moving parts</b>, more maintenance, harder siting and permitting.</p>
          <div class="note heads-up">Lecture 33 gives wind <b>25–40%</b>, solar <b>20–25%</b>. Either way wind > solar; geothermal (80–95%) highest.</div>
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
          <p class="lead"><b>Eastern coast cyclone-prone</b>, so <b>western coast</b> better for wind.</p>
          <p>Coastline about <b>7,516.6 km</b> plus EEZs. <b>National Institute for Wind Energy (Chennai)</b>: top states <b>Gujarat, Maharashtra, Karnataka, Tamil Nadu, Andhra Pradesh</b> (stable, steady, speedy winds).</p>
          <h3>Five wind initiatives</h3>
          <table class="tbl">
            <tbody>
              <tr><td><b>National Wind-Solar Hybrid Policy (2018)</b></td><td>Combined wind + solar; shared land, transmission; convert plants to hybrids.</td></tr>
              <tr><td><b>National Offshore Wind Energy Policy (2015)</b></td><td>Offshore wind; <b>MNRE</b> nodal ministry; Gujarat, Tamil Nadu focus.</td></tr>
              <tr><td><b>Renewable Purchase Obligation (RPO)</b></td><td>Discoms, large consumers must buy set share of renewables.</td></tr>
              <tr><td><b>Green Energy Corridor Programme</b></td><td>Stronger transmission; fewer losses, less congestion.</td></tr>
              <tr><td><b>PLI for RE manufacturing</b></td><td>Domestic RE equipment under <b>Make in India</b>.</td></tr>
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
          <p><b>Complementary in time</b>: solar peaks <b>midday</b>, wind often stronger <b>at night or in storms</b>; planners build <b>both together</b>. Transition = <b>systems-engineering</b> problem (materials, fluid dynamics, power electronics, structures, policy).</p>
        ` },
        { title: 'Benefits and engineers', html: `
          <h3>Environmental benefits of renewable energy</h3>
          <ul>
            <li><b>Reduces CO₂ emissions</b>: no fuel burnt.</li>
            <li><b>Improves air quality</b>.</li>
            <li><b>Conserves fossil fuel reserves</b>.</li>
            <li><b>Mitigates climate change</b>.</li>
            <li><b>Protects ecosystems</b> from mining, pollution.</li>
            <li><b>Promotes sustainable development</b>.</li>
            <li><b>Supports energy security</b>: fewer imports.</li>
          </ul>
          <h3>Role of engineers</h3>
          <p>Efficient panels, advanced turbines, energy storage, smart grids, efficient buildings, AI in renewables, affordable clean tech, sustainable practice.</p>
        ` },
        { title: 'Future trends', html: `
          <div class="chips"><span class="chip">Floating solar farms</span><span class="chip">Building-integrated PV</span><span class="chip">Perovskite solar cells</span><span class="chip">Offshore floating wind</span><span class="chip">Green hydrogen</span><span class="chip">Smart grids</span><span class="chip">AI for energy management</span><span class="chip">Advanced batteries</span><span class="chip">Microgrids</span><span class="chip">Vehicle-to-grid</span></div>
          <p>Closing point: future energy is about producing it <b>responsibly</b>, not just more.</p>
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
          <p class="lead"><b>Hydro and geothermal</b> give <b>continuous electricity</b>, unlike solar and wind.</p>
          <ul>
            <li><b>Hydropower</b>: world's <b>largest renewable electricity source</b>, about <b>15–16%</b> of global generation.</li>
            <li><b>Geothermal</b>: less used, very reliable; <b>Iceland</b> over <b>20%</b>, <b>Kenya</b> about <b>47%</b> of electricity.</li>
          </ul>
        ` },
        { title: 'How hydropower works', html: `
          <p class="lead"><b>Hydropower</b>: water at <b>height (potential)</b> or <b>speed (kinetic)</b> → electricity.</p>
          <p>Ancient <b>water wheels</b> ground grain; same principle.</p>
          <ol class="steps">
            <li><b>Potential energy</b> in reservoir at height h released via <b>sluice gates</b>.</li>
            <li><b>Kinetic energy</b>: water speeds down <b>penstocks</b> (large steel pipes/tunnels).</li>
            <li><b>Mechanical energy</b>: jet spins hydraulic <b>turbine</b>.</li>
            <li><b>Electrical energy</b>: shaft drives <b>generator</b>.</li>
          </ol>
          <div class="eq">Potential → Kinetic → Mechanical → Electrical</div>
          <figure data-fig="m7-hydro-plant"></figure>
        ` },
        { title: 'Plant components', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Reservoir</b></td><td>Stores water; <b>energy storage</b>.</td></tr>
              <tr><td><b>Dam</b></td><td>Blocks river, creates reservoir, keeps pressure.</td></tr>
              <tr><td><b>Penstock</b></td><td>Pipe carrying water to turbines.</td></tr>
              <tr><td><b>Turbine</b></td><td>Water energy → mechanical.</td></tr>
              <tr><td><b>Generator</b></td><td>Rotation → electricity.</td></tr>
              <tr><td><b>Transformer</b></td><td><b>Raises voltage</b> for long-distance transmission.</td></tr>
              <tr><td><b>Transmission lines</b></td><td>To homes, industries.</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Types of plant', html: `
          <table class="tbl">
            <thead><tr><th>Type</th><th>How it works</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td><b>Storage</b></td><td>Dam + reservoir; <b>most common</b>; reliable.</td><td><b>Tehri Dam</b>, Uttarakhand (1,000 MW)</td></tr>
              <tr><td><b>Run-of-the-river</b></td><td>Natural flow, <b>no large reservoir</b>; less impact; output varies with discharge.</td><td><b>Srinagar Hydro</b>, Alaknanda River (330 MW)</td></tr>
              <tr><td><b>Pumped storage</b></td><td><b>Giant rechargeable battery</b>: pump uphill at low demand, release at peak; stores surplus renewables.</td><td><b>Kadamparai</b>, Tamil Nadu (400 MW)</td></tr>
              <tr><td><b>Micro and pico</b></td><td><b>Below 100 kW</b>; small streams, canals; off-grid.</td><td>Rural electrification in Himalayan villages</td></tr>
            </tbody>
          </table>
          <div data-viz="pumped-storage"></div>
          <div class="note trap">Pumped storage <b>uses</b> more electricity than it returns; it shifts power to peak times.</div>
        ` },
        { title: 'Advantages', html: `
          <ul>
            <li><b>Renewable</b>: water cycle refills rivers.</li>
            <li><b>Long asset life</b>: <b>50–100+ years</b>; low cost per kWh.</li>
            <li><b>Zero direct emissions</b>; but tropical reservoirs can release <b>methane</b>.</li>
            <li><b>High efficiency</b>, often <b>above 90%</b>.</li>
            <li><b>Dispatchable baseload</b>: <b>on demand</b> any hour; steadies grid.</li>
            <li><b>Co-benefits</b>: irrigation, municipal water, flood control, navigation, fisheries, recreation.</li>
            <li><b>Pumped storage</b>: world's <b>dominant grid-scale storage</b>.</li>
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
              <tr><td><b>Flooding of land</b></td><td>Floods forests, farmland; <b>reduces downstream fertility</b> (silt trapped).</td></tr>
              <tr><td><b>Displacement</b></td><td><b>Sardar Sarovar Dam</b> displaced about <b>320,000 people</b>.</td></tr>
              <tr><td><b>Ecosystem disruption</b></td><td><b>Blocks fish migration</b>; changes temperature, sediment; destroys riparian habitats.</td></tr>
              <tr><td><b>Sedimentation</b></td><td><b>Silt</b> fills reservoir; less capacity, shorter life.</td></tr>
              <tr><td><b>Seismic risk</b></td><td>Water pressure on faults can <b>induce earthquakes</b>.</td></tr>
              <tr><td><b>Hydrology dependence</b></td><td><b>Drought</b>, changing rainfall cut generation.</td></tr>
            </tbody>
          </table>
          <p>Focus now: <b>environmentally sustainable dam designs</b>.</p>
        ` },
        { title: 'Hydropower in India', html: `
          <p class="lead">India has huge hydro potential thanks to the <b>Himalayan rivers</b> and the <b>Western Ghats</b>.</p>
          <div class="chips"><span class="chip">Bhakra Nangal Project</span><span class="chip">Hirakud Dam</span><span class="chip">Tehri Dam</span><span class="chip">Sardar Sarovar Project</span></div>
          <p>Also support <b>irrigation and water management</b>. <b>Small hydropower</b> growing in mountains (less disturbance).</p>
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
          <p class="lead"><b>Geothermal</b>: Greek <b>geo</b> (Earth) + <b>therme</b> (heat); <b>heat stored beneath Earth's surface</b>.</p>
          <p>From <b>planet's formation</b> and <b>radioactive decay</b>. Available <b>continuously, day and night</b>: <b>base-load</b> source.</p>
          <p>Temperature <b>rises with depth</b> = <b>geothermal gradient</b>. Heats underground water into hot water/steam; <b>wells drilled</b>; steam drives turbines.</p>
        ` },
        { title: 'How a plant works', html: `
          <ol class="steps">
            <li><b>Production wells</b> bring hot water or steam to the surface.</li>
            <li><b>Steam spins the turbine</b>.</li>
            <li><b>The generator</b> makes electricity.</li>
            <li><b>Injection wells</b> return the cooled water underground.</li>
          </ol>
          <p>Re-injection <b>maintains reservoir pressure</b>, long-term supply.</p>
          <figure data-fig="m7-geothermal-plants"></figure>
        ` },
        { title: 'Three plant types', html: `
          <table class="tbl">
            <thead><tr><th>Type</th><th>How it works</th><th>Key facts</th></tr></thead>
            <tbody>
              <tr><td><b>Dry steam</b></td><td>Natural <b>dry steam</b> piped <b>straight to turbine</b>.</td><td><b>Simplest and oldest</b>; rare. <b>The Geysers, California</b> (world's largest complex).</td></tr>
              <tr><td><b>Flash steam</b></td><td>Water <b>above 180 °C</b> suddenly depressurised ("flashed") in tank; steam drives turbine; rest re-injected.</td><td><b>Most common</b> worldwide.</td></tr>
              <tr><td><b>Binary cycle</b></td><td>Water at <b>100–180 °C</b> heats a low-boiling <b>secondary fluid</b> (<b>isobutane or pentane</b>) via heat exchanger; it drives turbine. Geothermal water never touches turbine, fully re-injected.</td><td><b>Most flexible</b>: lower temperatures; <b>almost zero emissions</b>.</td></tr>
            </tbody>
          </table>
          <div data-viz="geothermal-picker"></div>
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
          <p>Also used <b>directly</b>: districts, greenhouses, fish farms, drying, hot water.</p>
        ` },
        { title: 'Advantages', html: `
          <ul>
            <li><b>Baseload</b>: capacity factor <b>80–95%</b> vs <b>solar (20–25%)</b>, <b>wind (25–40%)</b>. Iceland's plants run almost all year.</li>
            <li><b>Tiny land footprint</b>.</li>
            <li><b>Minimal emissions</b>: binary near zero; flash small natural gases.</li>
            <li><b>Stable output</b>: no weather, season, time effects.</li>
            <li><b>Long resource life</b>: decades if extraction balances recharge.</li>
            <li><b>24 hours</b>; cuts fossil use; suits <b>sustainable cities</b>.</li>
          </ul>
        ` },
        { title: 'Limitations', html: `
          <ul>
            <li><b>Geographic specificity</b>: <b>geologically active</b> regions; India has limited high-temperature resources.</li>
            <li><b>High exploration cost</b>: deep drilling may find nothing.</li>
            <li><b>EGS problems</b>: Enhanced Geothermal Systems use hydraulic fracturing → <b>induced earthquakes</b>; <b>Basel, Switzerland</b> project abandoned.</li>
            <li><b>Hydrogen sulphide (H₂S)</b>: must be treated (air pollution, health).</li>
          </ul>
        ` },
        { title: 'World and India', html: `
          <p>Major: <b>Iceland, USA, Indonesia, Philippines, Kenya, New Zealand</b>. <b>Iceland</b>: nearly every building geothermally heated.</p>
          <p>India: <b>moderate</b> potential. Key regions:</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Puga Valley</b></td><td>Ladakh</td></tr>
              <tr><td><b>Tattapani</b></td><td>Chhattisgarh</td></tr>
              <tr><td><b>Manikaran</b></td><td>Himachal Pradesh</td></tr>
              <tr><td><b>Cambay Basin</b></td><td>Gujarat</td></tr>
            </tbody>
          </table>
          <p>Commercial geothermal power in India still <b>limited</b>.</p>
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
          <div class="note heads-up">PDF table rows are misaligned; this pairing matches the lecture text (hydro mature, water-dependent, high output, large area).</div>
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
          <p>With solar and wind, the <b>backbone</b> of sustainable energy; generate <b>responsibly, efficiently, sustainably</b>.</p>
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
