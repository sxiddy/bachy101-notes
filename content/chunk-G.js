CHUNK({
  chunk: 'G',
  module: 'm2',
  topics: [
    {
      id: 'm2-dm-basics',
      title: 'Disaster management: meaning, phases and types',
      short: 'Disaster management',
      blurb: 'What disaster management is, why it matters, its phases and objectives, and the six types of natural disaster.',
      source: 'Lecture W2 (Disaster management), pages 1–2',
      tabs: [
        { title: 'Definition and phases', html: `
          <p class="lead"><b>Disaster management</b>: planning and responding to <b>minimise impact</b> of <b>natural and man-made</b> disasters.</p>
          <p><b>Importance</b>: saves lives, cuts economic loss, speeds recovery.</p>
          <div class="steps">
            <div><b>Prevention and mitigation</b>: flood barriers, construction codes, trees against landslides.</div>
            <div><b>Preparedness</b>: community awareness, disaster drills, early warning systems.</div>
            <div><b>Response</b>: evacuation, medical aid, search and rescue.</div>
            <div><b>Recovery and rehabilitation</b>: rebuilding homes, restoring services, psychological support.</div>
          </div>
        ` },
        { title: 'Objectives', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Prevention</b></td><td>Earthquake-resistant buildings, tree planting against landslides, strict zoning in flood-prone areas</td></tr>
              <tr><td><b>Preparedness</b></td><td>Early warning, drills, response training; fewer casualties</td></tr>
              <tr><td><b>Response</b></td><td>Evacuation, first aid, firefighting, rescue during or after the disaster</td></tr>
              <tr><td><b>Recovery</b></td><td>Rebuild infrastructure, restore services, counselling and financial support</td></tr>
              <tr><td><b>Sustainability</b></td><td>Long-term resilience: sustainable development, environmental protection</td></tr>
              <tr><td><b>Collaboration</b></td><td>Governments, NGOs, emergency services, international agencies</td></tr>
            </tbody>
          </table>
          <div class="mnemonic">The four core objectives: <b>P-P-R-R</b>: Prevention, Preparedness, Response, Recovery.</div>
        ` },
        { title: 'Types of natural disaster', html: `
          <table class="tbl">
            <thead><tr><th>Type</th><th>Cause</th><th>Examples</th></tr></thead>
            <tbody>
              <tr><td><b>Hydrological</b></td><td>Water-related: heavy rain, storm surges, dam failures</td><td>Floods, tsunamis, landslides</td></tr>
              <tr><td><b>Meteorological</b></td><td>Atmospheric; worsening with climate change</td><td>Cyclones, hurricanes, tornadoes, severe storms</td></tr>
              <tr><td><b>Geological</b></td><td>Tectonic/crust shifts; can trigger tsunamis</td><td>Earthquakes, volcanic eruptions, landslides</td></tr>
              <tr><td><b>Biological</b></td><td>Living organisms that spread rapidly</td><td>Virus outbreaks (COVID-19), locust swarms, bacterial disease</td></tr>
              <tr><td><b>Climatological</b></td><td>Long-term climate variation; warming, deforestation</td><td>Droughts, heatwaves, wildfires</td></tr>
              <tr><td><b>Extraterrestrial</b></td><td>Rare events from space</td><td>Asteroid impacts, solar storms, cosmic radiation</td></tr>
            </tbody>
          </table>
          <div class="note heads-up">Notes leave the water-related type unheaded (numbering starts "1. Meteorological"); it is <b>hydrological</b>, so <b>six types</b>. Landslides appear under both hydrological and geological.</div>
        ` }
      ],
      flashcards: [
        { front: 'Define disaster management.', back: 'Planning for and responding effectively to disasters to <b>minimise their impact</b>, natural and man-made.' },
        { front: 'Four core objectives of disaster management?', back: '<b>Prevention, preparedness, response, recovery</b> (plus sustainability and collaboration).' },
        { front: 'Six types of natural disaster?', back: 'Hydrological, meteorological, geological, biological, climatological, extraterrestrial.' },
        { front: 'Locust infestation: which type?', back: '<b>Biological</b>.' },
        { front: 'Droughts, heatwaves, wildfires: which type?', back: '<b>Climatological</b>.' },
        { front: 'Solar storms: which type?', back: '<b>Extraterrestrial</b>.' }
      ],
      oneLiners: [
        'Preparedness = awareness, drills, early warning.',
        'Recovery includes psychological counselling and financial support.',
        'Geological disasters can trigger secondary disasters like tsunamis.'
      ],
      formulas: []
    },
    {
      id: 'm2-floods',
      title: 'Floods',
      short: 'Floods',
      blurb: 'Types and causes of floods, their impacts, prevention, preparedness and response, and the 2010 Pakistan floods.',
      source: 'Lecture W2 (Disaster management), pages 2–5',
      tabs: [
        { title: 'Types', html: `
          <p class="lead"><b>Flood</b>: excess water <b>submerges land that is usually dry</b>; natural or human-made.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Riverine</b></td><td>Rivers overflow after prolonged rain or snowmelt; hit floodplains and low-lying areas</td></tr>
              <tr><td><b>Flash</b></td><td><b>Sudden</b>, very dangerous; heavy local rain, dam breaks, rapid snowmelt</td></tr>
              <tr><td><b>Coastal</b></td><td>High tides, storm surges, tsunamis in low-lying coasts</td></tr>
              <tr><td><b>Urban</b></td><td>Drains overwhelmed; poor planning, concrete</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Causes and impact', html: `
          <h4>Causes</h4>
          <ol>
            <li><b>Heavy rainfall</b>: commonest; rivers overflow.</li>
            <li><b>Dam failure</b>: sudden flooding downstream, often no warning.</li>
            <li><b>Storm surge</b>: cyclones push seawater onto coasts.</li>
            <li><b>Climate change</b>: more rain, stronger storms, melting glaciers, sea-level rise.</li>
            <li><b>Deforestation</b>: no trees to absorb water; fast runoff.</li>
            <li><b>Poor urban planning</b>: bad drainage, concrete, poor land use.</li>
          </ol>
          <h4>Impact</h4>
          <ul>
            <li><b>Human casualties</b>: drowning, injury, disease.</li>
            <li><b>Economic loss</b>: roads, homes, businesses, agriculture.</li>
            <li><b>Displacement</b>: crowded shelters, homelessness.</li>
            <li><b>Health</b>: stagnant water spreads <b>cholera, dengue, malaria</b>; psychological trauma.</li>
            <li><b>Environment</b>: soil washed away, water polluted, habitats lost.</li>
            <li><b>Disrupted services</b>: roads, bridges, power, telecom; slows rescue.</li>
          </ul>
        ` },
        { title: 'Prevention and response', html: `
          <div class="vs">
            <div class="side"><h4>Prevention and mitigation</h4><ul>
              <li>Stormwater <b>drainage planning</b>: drains and flood channels prevent urban flooding.</li>
              <li><b>Embankments and levees</b>: barriers along rivers and coasts.</li>
              <li><b>Afforestation</b>: cut runoff, landslides, erosion.</li>
              <li><b>Dams and reservoirs</b> store excess rain, release slowly.</li>
              <li><b>Early warning</b>: flood sensors, satellites; time to evacuate.</li>
              <li><b>Sustainable urban planning</b>: green infrastructure: rain gardens, porous pavements, retention ponds.</li>
            </ul></div>
            <div class="side"><h4>Preparedness and response</h4><ul>
              <li><b>Early warning alerts</b>: TV, radio, mobile apps, sirens.</li>
              <li><b>Evacuation plans</b>: routes, assembly points, shelters.</li>
              <li><b>Community awareness</b>: risks, evacuation, emergency numbers, drills.</li>
              <li><b>Emergency supplies</b>: water, non-perishable food, torch, batteries, medical kit, documents.</li>
              <li><b>Search and rescue</b>: boats, drones, helicopters; first aid.</li>
              <li><b>Relief and rehabilitation</b>: food, water, medical care, then rebuild homes, roads, utilities.</li>
            </ul></div>
          </div>
        ` },
        { title: 'Case: Pakistan 2010', html: `
          <table class="tbl">
            <tbody>
              <tr><td>When and why</td><td><b>July 2010</b>, excessive <b>monsoon</b> rain; one of Pakistan's worst floods</td></tr>
              <tr><td>Areas</td><td><b>Sindh, Punjab, Khyber Pakhtunkhwa, Balochistan</b>; millions displaced</td></tr>
              <tr><td>Toll</td><td>More than <b>1,985 deaths</b>, about <b>20 million affected</b>, billions of dollars of damage</td></tr>
              <tr><td>Causes</td><td>Heavy rain, river overflow, poor drainage, deforestation</td></tr>
              <tr><td>Relief</td><td>Pakistani military, international organisations, NGOs</td></tr>
              <tr><td>Lessons</td><td>Better flood forecasting, drainage, sustainable environmental policy</td></tr>
            </tbody>
          </table>
        ` }
      ],
      flashcards: [
        { front: 'Four types of flood?', back: '<b>Riverine, flash, coastal, urban</b>.' },
        { front: 'Which flood is sudden and most dangerous?', back: '<b>Flash flood</b>.' },
        { front: 'Diseases spread by floodwater?', back: '<b>Cholera, dengue, malaria</b>.' },
        { front: 'Pakistan floods 2010: deaths and people affected?', back: 'More than <b>1,985</b> deaths; about <b>20 million</b> affected.' },
        { front: 'Green infrastructure against urban floods?', back: 'Rain gardens, porous pavements, retention ponds.' }
      ],
      oneLiners: [
        'Levees are barriers along rivers and coasts.',
        'Dams store excess rain and release it gradually.',
        'Pakistan 2010 floods hit Sindh, Punjab, Khyber Pakhtunkhwa and Balochistan.'
      ],
      formulas: []
    },
    {
      id: 'm2-earthquakes',
      title: 'Earthquakes',
      short: 'Earthquakes',
      blurb: 'How earthquakes happen, their causes and impacts, mitigation, preparedness, and the Tohoku 2011 case.',
      source: 'Lecture W2 (Disaster management), pages 5–9',
      tabs: [
        { title: 'Basics', html: `
          <ul>
            <li><b>Tectonic plates</b>: quakes when plates <b>collide, pull apart or slide past</b> each other.</li>
            <li><b>Fault lines</b>: plate fractures; best known <b>San Andreas Fault</b>, California.</li>
            <li><b>Focus</b>: origin underground. <b>Epicentre</b>: surface point above; strongest shaking.</li>
            <li><b>Types</b>: mostly tectonic; also volcanic and human (mining, reservoirs).</li>
            <li><b>Seismology</b>: seismographs; measured on <b>Richter</b> or <b>Moment Magnitude Scale (MMS)</b>.</li>
          </ul>
        ` },
        { title: 'Causes and impact', html: `
          <h4>Causes</h4>
          <table class="tbl">
            <tbody>
              <tr><td>Tectonic movements</td><td>Lithospheric plates collide, pull apart, slide</td></tr>
              <tr><td>Subduction zones</td><td>One plate dives under another (Pacific <b>Ring of Fire</b>), e.g. the 2011 Japan quake</td></tr>
              <tr><td>Volcanic activity</td><td>Magma movement; often precedes eruptions</td></tr>
              <tr><td>Fault slippage</td><td>Stress builds on a fault (San Andreas) and is released</td></tr>
              <tr><td>Mining and drilling</td><td>Coal mining, oil drilling, <b>fracking</b>: artificial tremors</td></tr>
              <tr><td>Reservoir-induced seismicity</td><td>Reservoir water loads faults: <b>1967 Koynanagar quake</b>, linked to <b>Koyna Dam</b></td></tr>
            </tbody>
          </table>
          <h4>Impact</h4>
          <ul>
            <li><b>Ground shaking</b> (primary effect; depends on magnitude and depth).</li>
            <li><b>Surface rupture</b>: visible cracks, shifted roads.</li>
            <li><b>Tsunamis</b> from undersea quakes, e.g. the <b>2004 Indian Ocean tsunami</b>.</li>
            <li><b>Infrastructure damage</b>: buildings, bridges, power lines.</li>
            <li><b>Landslides</b> in hills; <b>soil liquefaction</b> turns soft ground liquid-like and sinks structures.</li>
            <li>Human and economic losses.</li>
          </ul>
        ` },
        { title: 'Mitigation and response', html: `
          <div class="vs">
            <div class="side"><h4>Mitigation</h4><ul>
              <li><b>Seismic zoning</b>: regions by risk; restrict building in high-risk zones.</li>
              <li><b>Strict building codes</b>: sway not collapse; reinforced concrete, steel frames.</li>
              <li><b>Retrofitting</b>: old buildings get support beams, flexible joints, shock absorbers.</li>
              <li><b>Shock-absorbing foundations</b>: <b>base isolators</b>, rubber or metal bearings absorbing ground motion.</li>
              <li><b>Public awareness and drills</b>: regular drills, safety programmes.</li>
              <li><b>Early warning</b>: detect <b>P-waves</b> before damaging <b>S-waves</b>.</li>
            </ul></div>
            <div class="side"><h4>Preparedness and response</h4><ul>
              <li><b>Early warning</b>: P-waves give a few seconds to take cover.</li>
              <li><b>Emergency drills</b>: practise <b>"Drop, Cover, and Hold"</b>.</li>
              <li><b>Evacuation plans</b>: escape routes, safe zones.</li>
              <li><b>Search and rescue</b>: trained teams, <b>rescue dogs</b>.</li>
              <li><b>Relief and medical aid</b>: shelter, food, water, medical help.</li>
              <li><b>Recovery</b>: restore services, reinforce structures.</li>
            </ul></div>
          </div>
        ` },
        { title: 'Case: Tohoku 2011', html: `
          <table class="tbl">
            <tbody>
              <tr><td>Event</td><td>Off the Pacific coast of <b>Tōhoku, Japan</b>; one of the strongest ever recorded</td></tr>
              <tr><td>Tsunami</td><td>Swept inland; towns, ports, farmland destroyed</td></tr>
              <tr><td>Toll</td><td>Thousands dead or missing, families displaced</td></tr>
              <tr><td><b>Fukushima</b></td><td>Seawater disabled cooling: <b>nuclear meltdown</b> and mass evacuation</td></tr>
              <tr><td>Economy</td><td>Industry, farming, transport hit for the long term</td></tr>
              <tr><td>Lessons</td><td>Quake-resistant infrastructure, faster tsunami warning, stricter nuclear safety</td></tr>
            </tbody>
          </table>
          <div class="note heads-up">Notes give no date/magnitude; year <b>2011</b> comes from the causes section.</div>
        ` }
      ],
      flashcards: [
        { front: 'Focus vs epicentre?', back: 'Focus: origin underground. Epicentre: surface point directly above, strongest shaking.' },
        { front: 'Two scales for earthquake size?', back: '<b>Richter</b> and <b>Moment Magnitude Scale</b>.' },
        { front: 'Indian example of reservoir-induced seismicity?', back: '<b>1967 Koynanagar</b> earthquake, <b>Koyna Dam</b>.' },
        { front: 'What is soil liquefaction?', back: 'Shaking turns soft ground <b>liquid-like</b>, sinking structures.' },
        { front: 'How does quake early warning work?', back: 'Detects fast <b>P-waves</b> before damaging <b>S-waves</b> arrive.' },
        { front: 'What are base isolators?', back: 'Large rubber or metal bearings under buildings that absorb ground motion.' },
        { front: 'What happened at Fukushima?', back: 'Tsunami seawater disabled cooling: <b>nuclear meltdown</b>.' }
      ],
      oneLiners: [
        'Best-known fault: San Andreas, California.',
        'Subduction zones lie along the Pacific Ring of Fire.',
        'Fracking can cause artificial tremors.',
        'Drill: Drop, Cover, and Hold.'
      ],
      formulas: []
    },
    {
      id: 'm2-cyclones',
      title: 'Cyclones',
      short: 'Cyclones',
      blurb: 'Types and causes of cyclones, their impacts, mitigation and response, and the Fani and Katrina case studies.',
      source: 'Lecture W2 (Disaster management), pages 9–12',
      tabs: [
        { title: 'Types', html: `
          <p class="lead"><b>Cyclone</b>: <b>rotating storm system</b> around a <b>low-pressure centre</b>.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Tropical</b></td><td>Warm water, ocean heat. <b>Hurricanes</b> (Atlantic), <b>typhoons</b> (Pacific), <b>cyclones</b> (Indian Ocean)</td></tr>
              <tr><td><b>Extratropical</b></td><td>Mid-latitudes, weather fronts; less intense</td></tr>
              <tr><td><b>Tornadoes</b></td><td>Small, very violent vortex from thunderstorms</td></tr>
            </tbody>
          </table>
          <p>Features: winds, heavy rain, coastal flooding, storm surges.</p>
        ` },
        { title: 'Causes and impact', html: `
          <h4>Causes</h4>
          <ol>
            <li><b>Warm ocean water</b>: evaporation feeds storm.</li>
            <li><b>Low pressure</b>: rising air pulls in air in a spiral.</li>
            <li><b>Coriolis effect</b>: spin <b>anticlockwise in the Northern</b> and <b>clockwise in the Southern</b> Hemisphere.</li>
            <li><b>Wind and moisture</b>: converging trade winds lift moist air.</li>
            <li><b>Latitude</b>: rarely within <b>0°–5°</b> of equator (little Coriolis); tropics, subtropics.</li>
            <li><b>Climate change</b>: more intense, longer cyclones.</li>
          </ol>
          <h4>Impact</h4>
          <ul>
            <li><b>Strong winds</b>: up to category 5; flatten buildings, power lines.</li>
            <li><b>Storm surges</b>: wind + high tide push seawater inland.</li>
            <li><b>Heavy rainfall</b>: flash floods, landslides.</li>
            <li><b>Floods and waterlogging</b>: drains fail; hits transport, health.</li>
            <li><b>Economic loss</b>: industry, farms, costly rebuilding.</li>
            <li><b>Human casualties</b>: thousands displaced.</li>
          </ul>
        ` },
        { title: 'Mitigation and response', html: `
          <div class="vs">
            <div class="side"><h4>Mitigation</h4><ul>
              <li><b>Coastal embankments</b>: <b>first line of defence</b> against storm surges.</li>
              <li><b>Mangrove plantations</b>: absorb storm energy, cut erosion, windbreaks.</li>
              <li><b>Early warning</b>: satellites, <b>Doppler radar</b>, models predict path.</li>
              <li><b>Cyclone shelters</b>: multi-purpose safe space.</li>
              <li><b>Improved drainage</b>: stops waterlogging.</li>
              <li><b>Resilient infrastructure</b>: stronger buildings, roads, power lines.</li>
            </ul></div>
            <div class="side"><h4>Preparedness and response</h4><ul>
              <li><b>Evacuation plans</b>: routes, transport, points fixed in advance.</li>
              <li><b>Cyclone shelters</b>: strong, raised buildings.</li>
              <li><b>Emergency communication</b>: weather apps, public alerts.</li>
              <li><b>Relief</b>: the <b>Red Cross</b>, government: food, medicine.</li>
              <li><b>Search and rescue</b>: military, response forces.</li>
              <li><b>Community awareness</b>: emergency kits, first aid training.</li>
            </ul></div>
          </div>
        ` },
        { title: 'Case: Fani and Katrina', html: `
          <table class="tbl">
            <thead><tr><th></th><th>Cyclone Fani (2019)</th><th>Hurricane Katrina (2005)</th></tr></thead>
            <tbody>
              <tr><td>Where</td><td><b>Odisha</b>, India, and parts of Bangladesh</td><td><b>New Orleans</b>, USA</td></tr>
              <tr><td>Nature</td><td>Among strongest to hit subcontinent</td><td>Widespread flooding from <b>levee failures</b></td></tr>
              <tr><td>Impact</td><td>Over <b>15 million</b> affected; power, homes and coasts damaged</td><td>Over <b>1,800 deaths</b>; among the costliest and deadliest in US history</td></tr>
            </tbody>
          </table>
          <p><b>Similarities</b>: mass evacuations, big rebuilding. <b>Lessons</b>: early warning, better evacuation plans, resilient infrastructure.</p>
        ` }
      ],
      flashcards: [
        { front: 'Regional names of tropical cyclones?', back: '<b>Hurricane</b> (Atlantic), <b>typhoon</b> (Pacific), <b>cyclone</b> (Indian Ocean).' },
        { front: 'Spin direction in the Northern Hemisphere?', back: '<b>Anticlockwise</b> (clockwise in the Southern).' },
        { front: 'Why don\'t cyclones form at 0°–5° latitude?', back: 'Too little <b>Coriolis force</b>.' },
        { front: 'How do mangroves help?', back: 'Absorb storm energy, reduce erosion, act as windbreaks.' },
        { front: 'Cyclone Fani: year, place, people affected?', back: '<b>2019</b>, Odisha (and Bangladesh), over <b>15 million</b>.' },
        { front: 'Why did Katrina flood New Orleans?', back: '<b>Levee failures</b>; over 1,800 deaths.' }
      ],
      oneLiners: [
        'Three main types: tropical, extratropical, tornadoes.',
        'Coastal embankments are the first line of defence against storm surges.',
        'Doppler radar helps predict cyclone paths.'
      ],
      formulas: []
    },
    {
      id: 'm2-landslides',
      title: 'Landslides',
      short: 'Landslides',
      blurb: 'Types and causes of landslides, their impacts, mitigation and response, and the Kedarnath and Oso cases.',
      source: 'Lecture W2 (Disaster management), pages 12–15',
      tabs: [
        { title: 'Types', html: `
          <p class="lead"><b>Landslide</b>: <b>gravity overcomes the strength of soil and rock</b>; material slides downslope.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Rockfall</b></td><td>Boulders tumble down steep slopes</td></tr>
              <tr><td><b>Debris flow</b></td><td>Fast soil + rock + water</td></tr>
              <tr><td><b>Mudslide</b></td><td>Saturated soil flows as mud</td></tr>
              <tr><td><b>Slump</b></td><td>Block of land moves down in a <b>rotational</b> way</td></tr>
              <tr><td><b>Creep</b></td><td><b>Slowest</b>; trees/structures tilt</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Causes and impact', html: `
          <div class="vs">
            <div class="side"><h4>Causes</h4><ul>
              <li><b>Heavy rainfall</b>: <b>most common</b> trigger; soil unstable.</li>
              <li><b>Earthquakes</b>: shaking breaks rock.</li>
              <li><b>Deforestation</b>: roots no longer bind soil.</li>
              <li><b>Mining and excavation</b>: quarrying, road building.</li>
              <li><b>Volcanic eruptions</b>: ash, pyroclastic flows, lava.</li>
              <li><b>Construction</b>: cutting slopes for buildings, roads.</li>
            </ul></div>
            <div class="side"><h4>Impact</h4><ul>
              <li><b>Infrastructure damage</b>: roads, power lines, buildings.</li>
              <li><b>Loss of life</b>: among the <b>deadliest</b> disasters.</li>
              <li><b>Environment</b>: forests, habitats, water sources.</li>
              <li><b>Economic loss</b>: heavy recovery costs.</li>
              <li><b>Displacement</b>: homes, livelihoods lost.</li>
              <li><b>Soil erosion and sedimentation</b>: farmland lost; silt in rivers, lakes.</li>
            </ul></div>
          </div>
        ` },
        { title: 'Mitigation and response', html: `
          <h4>Mitigation</h4>
          <ul>
            <li><b>Slope stabilisation</b>: retaining walls, <b>gabions</b> and rock bolts strengthen unstable slopes.</li>
            <li><b>Afforestation</b>: roots bind soil.</li>
            <li><b>Drainage control</b>: channels, pipes divert water.</li>
            <li><b>Land-use planning</b>: no building on unstable slopes.</li>
            <li><b>Early warning</b>: sensors, satellites, local alerts.</li>
            <li><b>Engineering</b>: <b>rock netting, check dams</b>, slope barriers.</li>
          </ul>
          <h4>Preparedness and response</h4>
          <ul>
            <li>Monitoring with geotechnical sensors, drones, rainfall tracking.</li>
            <li>Evacuation routes and drills; public training on warning signs.</li>
            <li>Emergency teams for rescue, medical aid, debris clearing.</li>
            <li>Temporary shelters, then rehabilitation and reconstruction.</li>
          </ul>
        ` },
        { title: 'Case: Kedarnath and Oso', html: `
          <table class="tbl">
            <thead><tr><th></th><th>Kedarnath (2013), India</th><th>Oso (2014), Washington, USA</th></tr></thead>
            <tbody>
              <tr><td>Trigger</td><td>Intense rain; poor land management, deforestation, drainage</td><td>Persistent rain, soil saturation, sudden slope failure</td></tr>
              <tr><td>Toll</td><td><b>Thousands</b> dead; roads, temples, homes lost to debris flows</td><td><b>43 deaths</b>; an entire community buried</td></tr>
              <tr><td>Response</td><td>Large-scale rescue by the <b>Indian military</b></td><td>Rapid response; land-use policy concern</td></tr>
            </tbody>
          </table>
          <p><b>Lessons</b>: better land-use planning, early warning and preparedness.</p>
        ` }
      ],
      flashcards: [
        { front: 'Define a landslide.', back: 'When <b>gravity overcomes the strength</b> of soil and rock and material slides downslope.' },
        { front: 'Slowest type of landslide?', back: '<b>Creep</b>.' },
        { front: 'Landslide that moves in a rotational way?', back: '<b>Slump</b>.' },
        { front: 'Three slope-stabilisation methods?', back: 'Retaining walls, <b>gabions</b>, rock bolts.' },
        { front: 'Oso landslide: year and deaths?', back: '<b>2014</b>, Washington, USA; <b>43 deaths</b>.' },
        { front: 'Kedarnath disaster year?', back: '<b>2013</b>.' }
      ],
      oneLiners: [
        'Heavy rainfall is the most common landslide trigger.',
        'Debris flow = soil + rock + water moving fast.',
        'Rock netting and check dams limit landslide damage.'
      ],
      formulas: []
    },
    {
      id: 'm2-dm-strategies',
      title: 'Disaster management strategies',
      short: 'DM strategies',
      blurb: 'The roles of government, communities and technology, recovery and rehabilitation, international cooperation, and future challenges.',
      source: 'Lecture W2 (Disaster management), pages 15–19',
      tabs: [
        { title: 'Government', html: `
          <ul>
            <li><b>NDMA</b> (India) ensures preparedness through policy; <b>FEMA</b> (USA) gives immediate relief and long-term support.</li>
            <li><b>Local response teams</b>: paramedics, firefighters, police as first responders.</li>
            <li><b>Legislative framework</b>: disaster acts define each agency's responsibilities.</li>
            <li><b>Public awareness and training</b>: drills, first aid, evacuation education.</li>
            <li><b>International collaboration</b>: the UN's <b>Sendai Framework</b>, Red Cross initiatives.</li>
            <li>A <b>coordinated approach</b> across national, local and international levels.</li>
          </ul>
        ` },
        { title: 'Community', html: `
          <ol>
            <li><b>Awareness campaigns</b>: posters, radio, social media, meetings.</li>
            <li><b>Training and drills</b>: quake/fire evacuation, first aid.</li>
            <li><b>Community-based response teams</b>: volunteers act first.</li>
            <li><b>Early warning familiarity</b>: sirens, weather warnings, mobile alerts.</li>
            <li><b>School and workplace readiness</b>: protocols, routes, assembly points.</li>
            <li><b>NGO and local government partnerships</b>: Red Cross, National Disaster Response Forces, grassroots NGOs.</li>
          </ol>
        ` },
        { title: 'Technology', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>GIS mapping</b></td><td>Hazard maps for planning, evacuation</td></tr>
              <tr><td><b>Satellite imagery</b></td><td>Track hurricanes, measure floods, assess damage</td></tr>
              <tr><td><b>AI and machine learning</b></td><td>Process weather data for better prediction</td></tr>
              <tr><td><b>Drones and UAVs</b></td><td>Rapid assessment, deliver medicine, locate survivors</td></tr>
              <tr><td><b>Mobile alerts</b></td><td>FEMA app, <b>MyShake</b> (earthquakes), regional alert systems</td></tr>
              <tr><td><b>Big data and IoT sensors</b></td><td>Dams, bridges: pressure, vibration, temperature</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Recovery and global', html: `
          <h4>Recovery and rehabilitation</h4>
          <ul>
            <li>Immediate relief: food, water, medical care, shelter.</li>
            <li>Infrastructure rebuilding: roads, power, water, public institutions.</li>
            <li>Economic rehabilitation: <b>microloans</b>, government aid, skill workshops.</li>
            <li>Psychological and social support: counselling, support groups.</li>
            <li>Environmental restoration: afforestation, soil conservation.</li>
            <li>Policy and future preparedness: stricter rules, warning systems, resistant infrastructure.</li>
          </ul>
          <h4>International cooperation</h4>
          <table class="tbl">
            <tbody>
              <tr><td>UN</td><td><b>UNDRR</b> (risk reduction), <b>UNOCHA</b> (coordinates emergency response)</td></tr>
              <tr><td>Red Cross and Red Crescent</td><td>Aid, medical support, rehabilitation worldwide</td></tr>
              <tr><td>Humanitarian aid</td><td>WHO, UNICEF, CARE: food, healthcare, logistics</td></tr>
              <tr><td>Cross-border</td><td><b>ASEAN Agreement on Disaster Management</b></td></tr>
              <tr><td>Knowledge sharing</td><td>Satellite data, AI, warnings shared</td></tr>
              <tr><td>Funding</td><td><b>World Bank</b> and <b>IMF</b> loans and grants</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Future and conclusion', html: `
          <h4>Future challenges and recommendations</h4>
          <ol>
            <li>Climate change: more extreme weather.</li>
            <li>Urbanisation: stricter land-use policy.</li>
            <li>Stronger early warning with AI and satellites.</li>
            <li>Building codes, resilient materials, drainage.</li>
            <li>More community participation and drills.</li>
            <li>Global policy and more funding for disaster-prone regions.</li>
          </ol>
          <div class="note exam">Preparedness + government + community + technology + global cooperation reduce risk.</div>
        ` }
      ],
      flashcards: [
        { front: 'NDMA vs FEMA?', back: 'NDMA: India, preparedness through policy. FEMA: USA, immediate relief and long-term support.' },
        { front: 'UN framework for disaster risk reduction?', back: '<b>Sendai Framework</b>.' },
        { front: 'UNDRR vs UNOCHA?', back: 'UNDRR: <b>risk reduction</b>. UNOCHA: <b>coordinates emergency response</b>.' },
        { front: 'App that warns of earthquakes?', back: '<b>MyShake</b>.' },
        { front: 'Regional cross-border example?', back: '<b>ASEAN Agreement on Disaster Management</b>.' },
        { front: 'Who gives disaster loans and grants?', back: '<b>World Bank and IMF</b>.' }
      ],
      oneLiners: [
        'GIS builds hazard maps for planning and evacuation.',
        'Microloans help economic rehabilitation.',
        'IoT sensors in dams and bridges detect vibration and pressure changes.'
      ],
      formulas: []
    }
  ],
  figures: []
});
