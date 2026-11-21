CHUNK({
  chunk: 'G',
  module: 'm2',
  topics: [
    {
      id: 'm2-dm-basics',
      title: 'Disaster management: meaning, phases and types',
      short: 'Disaster management',
      blurb: 'Meaning, phases and objectives of disaster management, and the six types of natural disaster.',
      source: 'Lecture W2 (Disaster management), pages 1–2',
      tabs: [
        { title: 'Meaning and phases', html: `
          <p class="lead"><b>Disaster management</b>: planning and responding to <b>minimise impact</b> of natural and man-made disasters.</p>
          <p>Importance: saves lives, cuts economic loss, <b>speeds recovery</b>.</p>
          <ol class="steps">
            <li><b>Prevention and mitigation</b> flood barriers, building codes, trees against landslides</li>
            <li><b>Preparedness</b> awareness, drills, early warning</li>
            <li><b>Response</b> evacuation, medical aid, search and rescue</li>
            <li><b>Recovery</b> rebuilding, restoring services, psychological support</li>
          </ol>
          <p>Objectives: <b>P-P-R-R</b> plus <b>sustainability</b> (long-term resilience) and <b>collaboration</b> (governments, NGOs, agencies).</p>
        ` },
        { title: 'Types of natural disaster', html: `
          <table class="tbl">
            <thead><tr><th>Type</th><th>Cause</th><th>Examples</th></tr></thead>
            <tbody>
              <tr><td><b>Hydrological</b></td><td>Water: rain, surges, dam failure</td><td>Floods, tsunamis, landslides</td></tr>
              <tr><td><b>Meteorological</b></td><td>Atmospheric</td><td>Cyclones, hurricanes, tornadoes</td></tr>
              <tr><td><b>Geological</b></td><td>Tectonic; can trigger tsunamis</td><td>Earthquakes, volcanoes, landslides</td></tr>
              <tr><td><b>Biological</b></td><td>Organisms spreading fast</td><td>COVID-19, <b>locust swarms</b></td></tr>
              <tr><td><b>Climatological</b></td><td>Long-term climate variation</td><td><b>Droughts, heatwaves, wildfires</b></td></tr>
              <tr><td><b>Extraterrestrial</b></td><td>Space (rare)</td><td>Asteroids, <b>solar storms</b>, cosmic radiation</td></tr>
            </tbody>
          </table>
          <div class="note trap">Landslides appear under both hydrological and geological. Notes leave hydrological unheaded, but there are <b>six types</b>.</div>
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
      blurb: 'Flood types, causes, impacts, prevention and response, and the 2010 Pakistan floods.',
      source: 'Lecture W2 (Disaster management), pages 2–5',
      tabs: [
        { title: 'Types and causes', html: `
          <p class="lead"><b>Flood</b>: water <b>submerges land that is usually dry</b>.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Riverine</b></td><td>Rivers overflow (prolonged rain, snowmelt)</td></tr>
              <tr><td><b>Flash</b></td><td><b>Sudden</b>, most dangerous; dam breaks</td></tr>
              <tr><td><b>Coastal</b></td><td>High tides, storm surges, tsunamis</td></tr>
              <tr><td><b>Urban</b></td><td>Drains overwhelmed; concrete</td></tr>
            </tbody>
          </table>
          <ul>
            <li>Causes: <b>heavy rainfall</b> (commonest), <b>dam failure</b> (often no warning), storm surge, climate change, deforestation (fast runoff), poor urban drainage.</li>
            <li>Impact: drowning, economic loss, displacement, disrupted roads/power/telecom, soil washed away.</li>
            <li>Stagnant water spreads <b>cholera, dengue, malaria</b>; also psychological trauma.</li>
          </ul>
        ` },
        { title: 'Control and Pakistan 2010', html: `
          <ul>
            <li><b>Levees/embankments</b>: barriers along rivers, coasts.</li>
            <li><b>Dams</b> store excess rain, release slowly.</li>
            <li>Green infrastructure: <b>rain gardens, porous pavements, retention ponds</b>.</li>
            <li><b>Afforestation</b> cuts runoff and erosion; stormwater drainage planning.</li>
            <li>Early warning (sensors, satellites), evacuation plans, emergency kits, rescue by boats/drones/helicopters.</li>
          </ul>
          <h4>Case: Pakistan 2010</h4>
          <div class="kv">
            <div><span>When</span><b>July 2010</b>, monsoon</div>
            <div><span>Deaths</span><b>1,985+</b></div>
            <div><span>Affected</span><b>~20 million</b></div>
            <div><span>Provinces</span><b>Sindh, Punjab, KP, Balochistan</b></div>
          </div>
          <p>Causes: heavy rain, river overflow, poor drainage, deforestation. Relief: <b>Pakistani military</b>, NGOs, international bodies.</p>
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
      blurb: 'How earthquakes happen, causes, impacts, mitigation and the Tohoku 2011 case.',
      source: 'Lecture W2 (Disaster management), pages 5–9',
      tabs: [
        { title: 'Basics and causes', html: `
          <ul>
            <li><b>Tectonic plates</b> collide, pull apart or slide past; types: tectonic (most), volcanic, human-induced.</li>
            <li><b>Focus</b>: underground origin. <b>Epicentre</b>: surface point above; strongest shaking.</li>
            <li>Measured: <b>Richter</b> or <b>Moment Magnitude Scale</b>; seismographs.</li>
            <li>Best-known fault: <b>San Andreas</b>, California.</li>
            <li><b>Subduction zones</b>: Pacific <b>Ring of Fire</b> (2011 Japan).</li>
            <li>Human-induced: mining, <b>fracking</b>.</li>
            <li>Reservoir-induced: <b>1967 Koynanagar</b> quake, <b>Koyna Dam</b>.</li>
            <li>Undersea quakes → tsunami (<b>2004 Indian Ocean</b>).</li>
            <li>Volcanic quakes: magma movement; often precede eruptions.</li>
            <li>Impact: ground shaking (primary), <b>surface rupture</b>, landslides, infrastructure damage.</li>
            <li><b>Soil liquefaction</b>: soft ground turns liquid-like; structures sink.</li>
          </ul>
        ` },
        { title: 'Mitigation and Tohoku', html: `
          <ul>
            <li><b>Seismic zoning</b>: restrict building in high-risk zones.</li>
            <li>Building codes: sway not collapse (reinforced concrete, steel frames).</li>
            <li><b>Retrofitting</b>: support beams, flexible joints, shock absorbers.</li>
            <li><b>Base isolators</b>: rubber/metal bearings absorb ground motion.</li>
            <li>Early warning detects fast <b>P-waves</b> before damaging <b>S-waves</b>.</li>
            <li>Drill: <b>"Drop, Cover, and Hold"</b>; rescue dogs.</li>
          </ul>
          <h4>Case: Tohoku 2011</h4>
          <p>Off <b>Tōhoku, Japan</b>; one of the strongest recorded. Tsunami → <b>Fukushima nuclear meltdown</b> (seawater disabled cooling). Lessons: faster tsunami warning, stricter nuclear safety.</p>
          <div class="note heads-up">Notes give no date or magnitude; <b>2011</b> comes from the causes section.</div>
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
      blurb: 'Cyclone types, causes, impacts, mitigation, and the Fani and Katrina cases.',
      source: 'Lecture W2 (Disaster management), pages 9–12',
      tabs: [
        { title: 'Types and causes', html: `
          <p class="lead"><b>Cyclone</b>: rotating storm around a <b>low-pressure centre</b>.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Tropical</b></td><td><b>Hurricane</b> (Atlantic), <b>typhoon</b> (Pacific), <b>cyclone</b> (Indian Ocean)</td></tr>
              <tr><td><b>Extratropical</b></td><td>Mid-latitudes, fronts; less intense</td></tr>
              <tr><td><b>Tornado</b></td><td>Small, very violent; from thunderstorms</td></tr>
            </tbody>
          </table>
          <ul>
            <li>Fuel: <b>warm ocean water</b> (evaporation); low pressure spirals air in; converging trade winds lift moist air.</li>
            <li><b>Coriolis</b>: <b>anticlockwise</b> in Northern, clockwise in Southern Hemisphere.</li>
            <li>Rare within <b>0°–5°</b> of equator (little Coriolis).</li>
            <li>Climate change: more intense, longer cyclones.</li>
            <li>Impact: winds up to <b>category 5</b>; <b>storm surge</b> (wind + high tide push sea inland); flash floods, landslides.</li>
          </ul>
        ` },
        { title: 'Mitigation and cases', html: `
          <ul>
            <li><b>Coastal embankments</b>: <b>first line of defence</b> vs storm surges.</li>
            <li><b>Mangroves</b>: absorb storm energy, windbreaks.</li>
            <li><b>Doppler radar</b>, satellites predict path; raised cyclone shelters.</li>
            <li>Response: evacuation plans, <b>Red Cross</b> relief, military search and rescue.</li>
          </ul>
          <table class="tbl">
            <thead><tr><th></th><th>Fani (2019)</th><th>Katrina (2005)</th></tr></thead>
            <tbody>
              <tr><td>Where</td><td><b>Odisha</b>, Bangladesh</td><td><b>New Orleans</b>, USA</td></tr>
              <tr><td>Nature</td><td>Among strongest to hit subcontinent</td><td>Among costliest, deadliest in US history</td></tr>
              <tr><td>Key fact</td><td><b>15 million</b>+ affected</td><td><b>Levee failures</b>; <b>1,800</b>+ deaths</td></tr>
            </tbody>
          </table>
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
      blurb: 'Landslide types, causes, mitigation, and the Kedarnath and Oso cases.',
      source: 'Lecture W2 (Disaster management), pages 12–15',
      tabs: [
        { title: 'Types and causes', html: `
          <p class="lead"><b>Landslide</b>: <b>gravity overcomes the strength</b> of soil and rock.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Rockfall</b></td><td>Boulders tumble down steep slopes</td></tr>
              <tr><td><b>Debris flow</b></td><td>Fast soil + rock + water</td></tr>
              <tr><td><b>Mudslide</b></td><td>Saturated soil flows as mud</td></tr>
              <tr><td><b>Slump</b></td><td><b>Rotational</b> block movement</td></tr>
              <tr><td><b>Creep</b></td><td><b>Slowest</b>; trees tilt</td></tr>
            </tbody>
          </table>
          <p>Causes: <b>heavy rainfall</b> (most common), earthquakes, deforestation, mining, volcanic eruptions, slope cutting for roads.</p>
          <p>Impact: among the <b>deadliest</b> disasters; infrastructure loss, displacement, soil erosion, <b>sedimentation</b> of rivers.</p>
        ` },
        { title: 'Mitigation and cases', html: `
          <ul>
            <li>Slope stabilisation: <b>retaining walls, gabions, rock bolts</b>.</li>
            <li>Engineering: <b>rock netting, check dams</b>.</li>
            <li>Afforestation, drainage, land-use planning, sensors.</li>
          </ul>
          <table class="tbl">
            <thead><tr><th></th><th>Kedarnath</th><th>Oso</th></tr></thead>
            <tbody>
              <tr><td>Year, place</td><td><b>2013</b>, India</td><td><b>2014</b>, Washington, USA</td></tr>
              <tr><td>Toll</td><td><b>Thousands</b> dead</td><td><b>43</b> deaths</td></tr>
              <tr><td>Trigger</td><td>Intense rain, deforestation, poor drainage</td><td>Persistent rain, soil saturation</td></tr>
              <tr><td>Note</td><td>Rescue by <b>Indian military</b></td><td>Community buried</td></tr>
            </tbody>
          </table>
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
      blurb: 'Government, community and technology roles, recovery, and international cooperation.',
      source: 'Lecture W2 (Disaster management), pages 15–19',
      tabs: [
        { title: 'Government and technology', html: `
          <ul>
            <li><b>NDMA</b> (India): preparedness via policy. <b>FEMA</b> (USA): relief and long-term support.</li>
            <li>First responders: paramedics, firefighters, police; disaster acts set agency roles.</li>
            <li>UN <b>Sendai Framework</b> for risk reduction.</li>
            <li>Community: awareness campaigns, volunteer response teams, school drills, partnerships with Red Cross, <b>National Disaster Response Forces</b>.</li>
          </ul>
          <table class="tbl">
            <tbody>
              <tr><td><b>GIS</b></td><td>Hazard maps</td></tr>
              <tr><td>Satellites</td><td>Track hurricanes, floods</td></tr>
              <tr><td>AI/ML</td><td>Better weather prediction</td></tr>
              <tr><td>Drones/UAVs</td><td>Locate survivors, deliver medicine</td></tr>
              <tr><td>Mobile alerts</td><td>FEMA app, <b>MyShake</b> (earthquakes)</td></tr>
              <tr><td><b>IoT sensors</b></td><td>Dams, bridges: pressure, vibration</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Recovery and global', html: `
          <ul>
            <li>Economic rehabilitation: <b>microloans</b>, aid, skill workshops.</li>
            <li>Also: immediate relief, rebuilding, counselling, afforestation, stricter building rules.</li>
            <li>Future challenges: climate change, urbanisation; need AI warnings, resilient codes, community drills, more funding.</li>
          </ul>
          <table class="tbl">
            <tbody>
              <tr><td><b>UNDRR</b></td><td>Risk reduction</td></tr>
              <tr><td><b>UNOCHA</b></td><td>Coordinates emergency response</td></tr>
              <tr><td>Cross-border</td><td><b>ASEAN Agreement on Disaster Management</b></td></tr>
              <tr><td>Funding</td><td><b>World Bank, IMF</b></td></tr>
              <tr><td>Aid</td><td>Red Cross/Crescent, WHO, UNICEF, CARE</td></tr>
            </tbody>
          </table>
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
