CHUNK({
  chunk: 'W',
  module: 'm7',
  topics: [
    {
      id: 'm7-green-energy',
      title: 'Green energy: why, what and India\'s targets',
      short: 'Green energy concepts',
      blurb: 'Why move off fossil fuels, IPCC and India targets, renewable vs green, six characteristics.',
      source: 'Lecture W6 Part 1 (Solar and Wind), pages 1–2',
      tabs: [
        { title: 'Why it matters now', html: `
          <ul>
            <li><b>Fossil fuels</b> (coal, oil, gas): <b>over 80%</b> of world energy.</li>
            <li><b>IPCC</b>: <b>net-zero by 2050</b>.</li>
            <li>India: <b>third-largest emitter</b>.</li>
            <li><b>Paris Agreement</b>: India <b>50%</b> installed capacity <b>non-fossil by 2030</b>.</li>
            <li>Target <b>500 GW renewables by 2030</b>; pillars <b>solar and wind</b> (fastest-growing).</li>
            <li><b>Hydro, geothermal</b>: continuous power.</li>
          </ul>
        ` },
        { title: 'Renewable vs green', html: `
          <ul>
            <li><b>Renewable</b>: natural processes that <b>replenish faster than consumed</b>.</li>
            <li><b>Green</b>: renewable with <b>minimal lifecycle impact</b> (production, operation, disposal).</li>
          </ul>
          <div class="note trap">Renewable but not green: <b>large hydro dams</b>, <b>biomass combustion</b>. Solar and wind are green.</div>
          <h3>Six characteristics</h3>
          <div class="chips"><span class="chip">Renewable</span><span class="chip">Sustainable</span><span class="chip">Clean, low-carbon</span><span class="chip">Environmentally friendly</span><span class="chip">Locally available</span><span class="chip">Decentralised generation</span></div>
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
      blurb: 'Irradiance, components, PV vs CSP, four PV cell types, pros and cons.',
      source: 'Lecture W6 Part 1 (Solar and Wind), pages 2–5',
      tabs: [
        { title: 'Sunlight and components', html: `
          <p>Irradiance about <b>1,000 W/m²</b> at clear-sky solar noon.</p>
          <div class="eq">Output = irradiance × area × efficiency</div>
          <div class="worked"><div class="given"><p>2 m², 20%, 1,000 W/m²</p></div><div class="solve"><div class="eq">1,000 × 2 × 0.20</div></div><div class="result">400 W</div></div>
          <div class="kv"><div><span>Panel</span><b>Sunlight → DC</b></div><div><span>Inverter</span><b>DC → AC</b></div><div><span>Charge controller</span><b>Prevents overcharging</b></div><div><span>Battery</span><b>Optional, night storage</b></div><div><span>Also</span><b>Mounting, wiring, monitoring</b></div></div>
        ` },
        { title: 'PV vs solar thermal', html: `
          <ol class="steps">
            <li><b>Photons</b> hit semiconductor (<b>crystalline silicon</b>).</li>
            <li><b>Electrons</b> knocked loose.</li>
            <li><b>p-n junction</b> creates internal field.</li>
            <li>Field sweeps electrons: <b>DC</b> flows.</li>
          </ol>
          <figure data-fig="m7-pv-cell"></figure>
          <div class="vs">
            <div class="side"><h4>PV</h4><p><b>Photovoltaic effect</b>, light → electricity directly. <b>Solid-state</b>: no moving parts.</p></div>
            <div class="side"><h4>Solar thermal / CSP</h4><p><b>Mirrors/lenses</b> concentrate heat → steam turbine or direct water heating. <b>CSP</b> (utility scale) stores heat in <b>molten salt</b> for after sunset.</p></div>
          </div>
        ` },
        { title: 'Types of PV cells', html: `
          <table class="tbl">
            <thead><tr><th>Type</th><th>Efficiency</th><th>Key fact</th></tr></thead>
            <tbody>
              <tr><td><b>Monocrystalline</b></td><td><b>20–22%</b></td><td>Single crystal, <b>Czochralski process</b>; costliest</td></tr>
              <tr><td><b>Polycrystalline</b></td><td><b>15–17%</b></td><td>Cheaper; <b>grain boundaries</b></td></tr>
              <tr><td><b>Thin film</b></td><td><b>10–13%</b></td><td><b>Cadmium telluride</b>, <b>amorphous Si</b>; light, flexible, cheap; <b>building-integrated PV</b></td></tr>
              <tr><td><b>Perovskite</b></td><td>&gt;<b>30%</b> tandem</td><td>On silicon; <b>degrades</b> in moisture, UV</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Pros and cons', html: `
          <p>Pros: <b>lower bills</b>, <b>grid independence</b> (batteries), <b>low maintenance</b>, rooftop to desert.</p>
          <ul>
            <li><b>Degradation</b>: <b>0.5%/year</b>; <b>80–85%</b> left after <b>25 years</b>.</li>
            <li><b>Tracking</b> (single/dual-axis): <b>+15–35%</b> yield.</li>
            <li>Also: <b>high upfront cost</b>, <b>intermittency</b>, costly storage, space, <b>panel recycling</b>.</li>
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
      blurb: 'India\'s ~300 sunny days and ten solar initiatives, PM Surya Ghar to OSOWOG.',
      source: 'Lecture W6 Part 1 (Solar and Wind), pages 5–6',
      tabs: [
        { title: 'Schemes for homes and farms', html: `
          <p>India: about <b>300 sunny days</b>/year; target <b>500 GW</b> renewables by 2030.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>PM Surya Ghar: Muft Bijli Yojana</b></td><td>Rooftop solar, <b>1 crore homes</b>, subsidy up to <b>₹78,000</b></td></tr>
              <tr><td><b>PM-KUSUM</b></td><td>Farm <b>solar pumps</b> replace diesel; up to <b>60% subsidy</b></td></tr>
              <tr><td><b>National Solar Mission</b></td><td>India's <b>flagship</b>; scales commercial solar</td></tr>
              <tr><td><b>Suryamitra</b></td><td>Skills youth to install, maintain, repair</td></tr>
            </tbody>
          </table>
          <div class="note trap">Surya Ghar = <b>rooftops</b>; KUSUM = <b>farm pumps</b>.</div>
        ` },
        { title: 'Industry, grid, global', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>PLI Scheme</b></td><td>Domestic PV module, wafer, cell manufacturing</td></tr>
              <tr><td><b>Solar Park Scheme</b></td><td>Ultra-Mega Solar Power Projects; <b>Bhadla</b>, world's largest</td></tr>
              <tr><td><b>Green Energy Corridor</b></td><td>Dedicated transmission lines to national grid</td></tr>
              <tr><td><b>ISA</b></td><td>Co-founded by <b>India + France</b>; mobilise <b>$1 trillion</b></td></tr>
              <tr><td><b>OSOWOG</b></td><td>Interconnect regional grids via <b>time-zone differences</b></td></tr>
              <tr><td><b>100% FDI</b></td><td><b>Automatic approval route</b></td></tr>
            </tbody>
          </table>
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
      blurb: 'Origin of wind, turbine parts, HAWT vs VAWT, onshore vs offshore, pros, cons, capacity factor.',
      source: 'Lecture W6 Part 1 (Solar and Wind), pages 6–8',
      tabs: [
        { title: 'Origin and working', html: `
          <p>Wind uses <b>fluid dynamics</b>, not semiconductor physics. Sun <b>heats Earth unevenly</b> → <b>pressure differences</b> → air moves high to low; turbine converts its <b>kinetic energy</b>.</p>
          <ol class="steps">
            <li><b>Blades</b> rotate.</li>
            <li><b>Rotor</b> turns shaft.</li>
            <li><b>Gearbox</b> raises speed.</li>
            <li><b>Generator</b> → grid.</li>
          </ol>
          <figure data-fig="m7-wind-turbine"></figure>
        ` },
        { title: 'Components, types, farms', html: `
          <div class="kv"><div><span>Rotor blades</span><b>Kinetic → rotation</b></div><div><span>Hub</span><b>Joins blades to shaft</b></div><div><span>Gearbox</span><b>Slow rotor → fast generator</b></div><div><span>Nacelle</span><b>Houses gearbox, generator, shaft</b></div><div><span>Tower</span><b>Reaches steadier wind</b></div><div><span>Controller</span><b>Start, stop, adjust</b></div><div><span>Brake</span><b>Stops in high wind</b></div></div>
          <div class="vs">
            <div class="side"><h4>HAWT</h4><p><b>Horizontal axis</b>; <b>most common</b>, high efficiency.</p></div>
            <div class="side"><h4>VAWT</h4><p><b>Vertical axis</b>; <b>urban</b>, wind from <b>any direction</b>.</p></div>
          </div>
          <div class="vs">
            <div class="side"><h4>Onshore</h4><p><b>Cheaper</b>; land conflicts, noise.</p></div>
            <div class="side"><h4>Offshore</h4><p><b>Stronger, steadier</b> wind; <b>much costlier</b> (foundations, undersea cables). <b>Floating</b> platforms for deep water.</p></div>
          </div>
          <div class="chips"><span class="chip">Electricity</span><span class="chip">Water pumping</span><span class="chip">Agriculture</span><span class="chip">Rural electrification</span><span class="chip">Industry</span><span class="chip">Hybrid systems</span></div>
        ` },
        { title: 'Pros and cons', html: `
          <p>Pros: <b>zero fuel cost</b>, no operating GHG, low running cost, large-scale farms, jobs, less fossil dependence.</p>
          <p>Cons: variable output, noise, visual impact, <b>bird and bat collisions</b>, land, high installation cost, grid integration.</p>
          <p><b>Capacity factor</b>: <b>35–50% onshore</b>, <b>50–60% offshore</b>; more moving parts than solar.</p>
          <div class="note heads-up">Lecture 33: wind <b>25–40%</b>, solar <b>20–25%</b>, geothermal <b>80–95%</b>.</div>
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
      blurb: 'India\'s wind potential and policies, solar vs wind, benefits and future trends.',
      source: 'Lecture W6 Part 1 (Solar and Wind), pages 8–11',
      tabs: [
        { title: 'Wind in India', html: `
          <p><b>Western coast</b> better (east is <b>cyclone-prone</b>). Coastline <b>7,516.6 km</b>. <b>NIWE, Chennai</b>.</p>
          <p>Top states: <b>Gujarat, Maharashtra, Karnataka, Tamil Nadu, Andhra Pradesh</b>.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Wind-Solar Hybrid Policy</b></td><td><b>2018</b>; shared land, transmission</td></tr>
              <tr><td><b>Offshore Wind Policy</b></td><td><b>2015</b>; <b>MNRE</b> nodal; Gujarat, Tamil Nadu</td></tr>
              <tr><td><b>RPO</b></td><td>Discoms, large consumers must buy set share of renewables</td></tr>
              <tr><td><b>Green Energy Corridor</b></td><td>Stronger transmission, fewer losses</td></tr>
              <tr><td><b>PLI</b></td><td>RE equipment, <b>Make in India</b></td></tr>
            </tbody>
          </table>
          <div class="note trap">Offshore <b>2015</b>, hybrid <b>2018</b>.</div>
        ` },
        { title: 'Solar vs wind, benefits', html: `
          <table class="tbl">
            <thead><tr><th></th><th>Solar</th><th>Wind</th></tr></thead>
            <tbody>
              <tr><td>Source</td><td>Sunlight</td><td>Moving air</td></tr>
              <tr><td>Works</td><td>Daylight</td><td>Day and night</td></tr>
              <tr><td>Noise</td><td>Silent</td><td>Moderate</td></tr>
              <tr><td>Maintenance</td><td>Lower</td><td>Higher</td></tr>
              <tr><td>Location</td><td>Sunny, rooftops</td><td>Coastal, hilly</td></tr>
              <tr><td>Capacity factor</td><td>Lower</td><td>Higher</td></tr>
            </tbody>
          </table>
          <p><b>Complementary in time</b>: solar midday, wind often night or storms; build <b>both together</b>.</p>
          <p>Benefits: <b>less CO₂</b>, cleaner air, conserves fossil fuels, mitigates climate change, protects ecosystems, <b>energy security</b>.</p>
          <p>Engineers: efficient panels, turbines, storage, <b>smart grids</b>, AI.</p>
          <div class="chips"><span class="chip">Floating solar</span><span class="chip">BIPV</span><span class="chip">Perovskite</span><span class="chip">Floating offshore wind</span><span class="chip">Green hydrogen</span><span class="chip">Smart grids</span><span class="chip">Microgrids</span><span class="chip">Vehicle-to-grid</span></div>
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
      blurb: 'Hydro share, energy chain, plant parts, four plant types with Indian examples, advantages.',
      source: 'Lecture W6 Part 2 (Hydro and Geothermal), pages 1–4',
      tabs: [
        { title: 'How hydropower works', html: `
          <ul>
            <li><b>Hydro</b>: <b>largest renewable</b> electricity, <b>15–16%</b> of global.</li>
            <li>Geothermal share: <b>Iceland</b> &gt;<b>20%</b>, <b>Kenya</b> ~<b>47%</b>.</li>
          </ul>
          <div class="eq">Potential → Kinetic → Mechanical → Electrical</div>
          <div class="kv"><div><span>Reservoir</span><b>Energy storage</b></div><div><span>Dam</span><b>Blocks river, keeps pressure</b></div><div><span>Sluice gate</span><b>Releases water</b></div><div><span>Penstock</span><b>Steel pipe to turbine</b></div><div><span>Turbine, generator</span><b>Mechanical → electrical</b></div><div><span>Transformer</span><b>Raises voltage</b></div></div>
          <figure data-fig="m7-hydro-plant"></figure>
        ` },
        { title: 'Types and advantages', html: `
          <table class="tbl">
            <thead><tr><th>Type</th><th>Key fact</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td><b>Storage</b></td><td><b>Most common</b></td><td><b>Tehri</b>, Uttarakhand, 1,000 MW</td></tr>
              <tr><td><b>Run-of-river</b></td><td><b>No large reservoir</b></td><td><b>Srinagar</b>, Alaknanda, 330 MW</td></tr>
              <tr><td><b>Pumped storage</b></td><td>Pump up at low demand; <b>battery</b></td><td><b>Kadamparai</b>, TN, 400 MW</td></tr>
              <tr><td><b>Micro/pico</b></td><td><b>Below 100 kW</b></td><td>Himalayan villages</td></tr>
            </tbody>
          </table>
          <div data-viz="pumped-storage"></div>
          <div class="note trap">Pumped storage <b>uses</b> more electricity than it returns; it shifts power to peak.</div>
          <ul>
            <li>Life <b>50–100+ years</b>; efficiency <b>&gt;90%</b>.</li>
            <li><b>Dispatchable</b> baseload; zero direct emissions, but tropical reservoirs emit <b>methane</b>.</li>
            <li>Co-benefits: irrigation, flood control, navigation, fisheries.</li>
            <li>Pumped storage: world's <b>dominant grid-scale storage</b>.</li>
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
      blurb: 'Six problems of large dams, Sardar Sarovar displacement, India\'s major hydro projects.',
      source: 'Lecture W6 Part 2 (Hydro and Geothermal), pages 4–5',
      tabs: [
        { title: 'Environmental challenges', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Flooding of land</b></td><td>Forests, farmland lost; <b>silt trapped</b>, less downstream fertility</td></tr>
              <tr><td><b>Displacement</b></td><td><b>Sardar Sarovar</b>: ~<b>320,000</b> people</td></tr>
              <tr><td><b>Ecosystem disruption</b></td><td>Blocks <b>fish migration</b>; riparian habitat lost</td></tr>
              <tr><td><b>Sedimentation</b></td><td>Silt fills reservoir, shortens life</td></tr>
              <tr><td><b>Seismic risk</b></td><td>Water pressure on faults: <b>induced earthquakes</b></td></tr>
              <tr><td><b>Hydrology dependence</b></td><td><b>Drought</b> cuts output</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Hydropower in India', html: `
          <p>Potential from <b>Himalayan rivers</b> and <b>Western Ghats</b>.</p>
          <div class="chips"><span class="chip">Bhakra Nangal</span><span class="chip">Hirakud</span><span class="chip">Tehri</span><span class="chip">Sardar Sarovar</span></div>
          <p>Also irrigation, water management. <b>Small hydro</b> growing in mountains: less disturbance.</p>
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
      blurb: 'Definition, geothermal gradient, re-injection, dry steam vs flash vs binary.',
      source: 'Lecture W6 Part 2 (Hydro and Geothermal), pages 5–6',
      tabs: [
        { title: 'Source and plant', html: `
          <ul>
            <li><b>Geo</b> (Earth) + <b>therme</b> (heat).</li>
            <li>Heat from <b>planet's formation</b> + <b>radioactive decay</b>; <b>base-load</b>.</li>
            <li><b>Geothermal gradient</b>: temperature rises with depth.</li>
            <li>Continuous, <b>day and night</b>.</li>
            <li><b>Production wells</b> bring steam up → turbine → generator; <b>injection wells</b> return water, keep <b>reservoir pressure</b>.</li>
          </ul>
          <figure data-fig="m7-geothermal-plants"></figure>
        ` },
        { title: 'Three plant types', html: `
          <table class="tbl">
            <thead><tr><th>Type</th><th>Temp</th><th>Key fact</th></tr></thead>
            <tbody>
              <tr><td><b>Dry steam</b></td><td>Natural steam</td><td><b>Oldest, simplest</b>; <b>The Geysers</b>, California</td></tr>
              <tr><td><b>Flash steam</b></td><td>&gt;<b>180 °C</b></td><td><b>Most common</b>; water suddenly depressurised</td></tr>
              <tr><td><b>Binary cycle</b></td><td><b>100–180 °C</b></td><td>Heats <b>isobutane/pentane</b>; water never touches turbine; <b>most flexible</b>, near-zero emissions</td></tr>
            </tbody>
          </table>
          <div data-viz="geothermal-picker"></div>
          <div class="note trap">Most common = <b>flash</b>; oldest = <b>dry steam</b>; lowest temperature = <b>binary</b>.</div>
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
      blurb: 'Uses, 80–95% capacity factor, Basel EGS and H₂S, world leaders, India\'s four regions.',
      source: 'Lecture W6 Part 2 (Hydro and Geothermal), pages 6–8',
      tabs: [
        { title: 'Uses, pros, limits', html: `
          <div class="chips"><span class="chip">Electricity</span><span class="chip">District heating</span><span class="chip">Greenhouses</span><span class="chip">Aquaculture</span><span class="chip">Industrial drying</span><span class="chip">Hot water</span><span class="chip">Spa tourism</span><span class="chip">Heat pumps</span></div>
          <ul>
            <li>Capacity factor <b>80–95%</b> (solar 20–25%, wind 25–40%); <b>tiny land footprint</b>; stable 24 h.</li>
            <li>Limits: <b>geologically active</b> regions only; high <b>exploration cost</b>.</li>
            <li><b>EGS</b> (Enhanced Geothermal Systems) fracking → earthquakes; <b>Basel, Switzerland</b> abandoned.</li>
            <li><b>H₂S</b> (hydrogen sulphide) must be treated.</li>
          </ul>
        ` },
        { title: 'World and India', html: `
          <p>Leaders: <b>Iceland</b> (almost all buildings heated), USA, Indonesia, Philippines, Kenya, New Zealand.</p>
          <p>India: <b>moderate</b> potential, limited high-temperature resources; commercial power still limited.</p>
          <div class="kv"><div><span>Ladakh</span><b>Puga Valley</b></div><div><span>Chhattisgarh</span><b>Tattapani</b></div><div><span>Himachal</span><b>Manikaran</b></div><div><span>Gujarat</span><b>Cambay Basin</b></div></div>
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
      blurb: 'Hydro vs geothermal table, engineers\' roles, SDGs 7, 9, 11, 13, trends.',
      source: 'Lecture W6 Part 2 (Hydro and Geothermal), pages 8–9',
      tabs: [
        { title: 'Comparison', html: `
          <table class="tbl">
            <thead><tr><th></th><th>Hydro</th><th>Geothermal</th></tr></thead>
            <tbody>
              <tr><td>Source</td><td>Flowing water</td><td>Earth's internal heat</td></tr>
              <tr><td>Land</td><td><b>Large</b></td><td><b>Small</b></td></tr>
              <tr><td>Maturity</td><td><b>Mature</b></td><td><b>Emerging</b></td></tr>
              <tr><td>Availability</td><td><b>Seasonal</b></td><td><b>Continuous</b></td></tr>
              <tr><td>Output</td><td>High</td><td>Moderate</td></tr>
              <tr><td>Impact</td><td>Ecological disruption</td><td>Limited</td></tr>
            </tbody>
          </table>
          <p>SDGs: <b>7</b> Affordable and Clean Energy, <b>9</b> Industry and Infrastructure, <b>11</b> Sustainable Cities, <b>13</b> Climate Action.</p>
        ` },
        { title: 'Engineers and trends', html: `
          <div class="kv"><div><span>Civil</span><b>Dams</b></div><div><span>Mechanical</span><b>Turbines</b></div><div><span>Electrical</span><b>Transmission</b></div><div><span>Environmental</span><b>Ecological impact</b></div><div><span>Geological</span><b>Find reservoirs</b></div><div><span>Chemical</span><b>Corrosion-resistant materials</b></div><div><span>Computer</span><b>Smart monitoring</b></div></div>
          <div class="chips"><span class="chip">Fish-friendly turbines</span><span class="chip">Floating hydropower</span><span class="chip">EGS</span><span class="chip">Small modular hydro</span><span class="chip">AI monitoring</span><span class="chip">Hydro + solar + wind hybrids</span></div>
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
