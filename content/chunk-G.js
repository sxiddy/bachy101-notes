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
          <p class="lead"><b>Disaster management</b> means planning for and responding to disasters effectively to <b>minimise their impact</b>. It covers both <b>natural and man-made</b> disasters.</p>
          <p><b>Importance</b>: a well-structured plan saves lives, cuts economic losses and speeds recovery. Without it, disasters cause long-term devastation.</p>
          <div class="steps">
            <div><b>Prevention and mitigation</b>: proactive steps such as flood barriers, construction codes, planting trees against landslides.</div>
            <div><b>Preparedness</b>: community awareness, disaster drills, early warning systems.</div>
            <div><b>Response</b>: immediate relief: evacuation, medical aid, search and rescue.</div>
            <div><b>Recovery and rehabilitation</b>: rebuilding homes, restoring services, psychological support.</div>
          </div>
        ` },
        { title: 'Objectives', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Prevention</b></td><td>Earthquake-resistant buildings, tree planting against landslides, strict zoning in flood-prone areas</td></tr>
              <tr><td><b>Preparedness</b></td><td>Early warning, drills, emergency response training; a prepared community has far fewer casualties</td></tr>
              <tr><td><b>Response</b></td><td>Evacuation, first aid, firefighting, rescue during or after the disaster</td></tr>
              <tr><td><b>Recovery</b></td><td>Rebuild infrastructure, restore services, counselling and financial support</td></tr>
              <tr><td><b>Sustainability</b></td><td>Long-term resilience through sustainable development and environmental protection</td></tr>
              <tr><td><b>Collaboration</b></td><td>Governments, NGOs, emergency services and international agencies working together</td></tr>
            </tbody>
          </table>
          <div class="mnemonic">The four core objectives: <b>P-P-R-R</b>: Prevention, Preparedness, Response, Recovery.</div>
        ` },
        { title: 'Types of natural disaster', html: `
          <table class="tbl">
            <thead><tr><th>Type</th><th>Cause</th><th>Examples</th></tr></thead>
            <tbody>
              <tr><td><b>Hydrological</b></td><td>Water-related events; triggered by heavy rain, storm surges, dam failures</td><td>Floods, tsunamis, landslides</td></tr>
              <tr><td><b>Meteorological</b></td><td>Atmospheric disturbances; more frequent and intense with climate change</td><td>Cyclones, hurricanes, tornadoes, severe storms</td></tr>
              <tr><td><b>Geological</b></td><td>Tectonic activity, shifts in the crust; can trigger tsunamis</td><td>Earthquakes, volcanic eruptions, landslides</td></tr>
              <tr><td><b>Biological</b></td><td>Living organisms that spread rapidly</td><td>Virus outbreaks (COVID-19), locust swarms, bacterial disease</td></tr>
              <tr><td><b>Climatological</b></td><td>Long-term climate variation, worsened by warming and deforestation</td><td>Droughts, heatwaves, wildfires</td></tr>
              <tr><td><b>Extraterrestrial</b></td><td>Rare events from space</td><td>Asteroid impacts, solar storms, cosmic radiation</td></tr>
            </tbody>
          </table>
          <div class="note heads-up">In the notes the water-related paragraph has no heading, and the numbering starts at "1. Meteorological". It is the <b>hydrological</b> type, so there are six types in all. Landslides appear under both hydrological and geological.</div>
          <div class="note exam">Long answer on disaster management: (1) definition, covering natural and man-made disasters; (2) why it matters (lives, economic loss, faster recovery); (3) the four phases in order: prevention and mitigation, preparedness, response, recovery and rehabilitation, each with one example; (4) objectives, including sustainability and collaboration; (5) the six types of natural disaster with cause and examples for each.</div>
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
          <p class="lead">A <b>flood</b> is when excess water collects in an area and <b>submerges land that is usually dry</b>. Causes can be natural or human-made.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Riverine</b></td><td>Rivers overflow after prolonged rain or snowmelt; hit floodplains and low-lying areas</td></tr>
              <tr><td><b>Flash</b></td><td><b>Sudden</b>, very dangerous; heavy local rain, dam breaks, rapid snowmelt</td></tr>
              <tr><td><b>Coastal</b></td><td>High tides, storm surges, tsunamis in low-lying coasts</td></tr>
              <tr><td><b>Urban</b></td><td>Drains overwhelmed by rain; worsened by poor planning and concrete surfaces</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Causes and impact', html: `
          <h4>Causes</h4>
          <ol>
            <li><b>Heavy rainfall</b>: one of the commonest causes; rivers overflow.</li>
            <li><b>Dam failure</b>: sudden, destructive flooding downstream, often without warning.</li>
            <li><b>Storm surge</b>: hurricanes and cyclones push seawater onto coasts.</li>
            <li><b>Climate change</b>: more rain, stronger storms, melting glaciers, higher sea levels.</li>
            <li><b>Deforestation</b>: no trees to absorb water, so rain runs straight into rivers.</li>
            <li><b>Poor urban planning</b>: bad drainage, too much concrete, poor land use.</li>
          </ol>
          <h4>Impact</h4>
          <ul>
            <li><b>Human casualties</b>: drowning and injury; indirectly disease and blocked medical access.</li>
            <li><b>Economic loss</b>: roads, homes, businesses, agriculture.</li>
            <li><b>Displacement</b>: overcrowded shelters, long-term homelessness.</li>
            <li><b>Health</b>: stagnant water spreads <b>cholera, dengue, malaria</b>; psychological trauma.</li>
            <li><b>Environment</b>: fertile soil washed away, water polluted, habitats destroyed.</li>
            <li><b>Disrupted services</b>: roads, bridges, power, telecom, which slows rescue.</li>
          </ul>
        ` },
        { title: 'Prevention and response', html: `
          <div class="vs">
            <div class="side"><h4>Prevention and mitigation</h4><ul>
              <li>Stormwater <b>drainage planning</b>: well-kept drains and flood channels carry water away fast, which prevents urban flooding.</li>
              <li><b>Embankments and levees</b>: man-made or natural barriers along rivers and coasts that control water levels.</li>
              <li><b>Afforestation</b>: trees absorb rainwater and cut runoff, and also stop landslides and soil erosion.</li>
              <li><b>Dams and reservoirs</b> store excess rain and release it slowly, so no sudden surge floods the land downstream.</li>
              <li><b>Early warning</b>: weather technology, flood sensors and satellites predict floods in advance, giving time to evacuate.</li>
              <li><b>Sustainable urban planning</b>: green infrastructure such as rain gardens, porous pavements and retention ponds soaks up extra water naturally.</li>
            </ul></div>
            <div class="side"><h4>Preparedness and response</h4><ul>
              <li><b>Early warning alerts</b> go out through TV, radio, mobile apps and sirens so people can evacuate and prepare.</li>
              <li><b>Evacuation plans</b>: set routes, assembly points and emergency shelters, with strategies planned in advance for quick relocation.</li>
              <li><b>Community awareness</b>: teach people flood risks, safe evacuation and emergency numbers; regular drills keep this fresh.</li>
              <li><b>Emergency supplies</b>: clean drinking water, non-perishable food, torch, batteries, medical kit and important documents kept safe.</li>
              <li><b>Search and rescue</b>: special teams with boats, drones and helicopters rescue stranded people and give first aid.</li>
              <li><b>Relief and rehabilitation</b>: after the flood, food, clean water, medical care, then rebuilding homes, roads and utilities.</li>
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
          <div class="note exam">Long answer on floods: (1) definition; (2) four types (riverine, flash, coastal, urban) with what drives each; (3) causes, each with its mechanism; (4) impacts on people, economy, health and environment; (5) prevention and mitigation measures; (6) preparedness and response; (7) close with the Pakistan 2010 case: date, provinces, deaths and people affected, causes, lessons.</div>
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
            <li><b>Tectonic plates</b>: the crust is split into moving plates; earthquakes occur when they <b>collide, pull apart or slide past</b> each other.</li>
            <li><b>Fault lines</b>: fractures where plates interact; best known is the <b>San Andreas Fault</b>, California.</li>
            <li><b>Focus</b>: where the quake starts underground. <b>Epicentre</b>: the surface point directly above, where shaking is strongest.</li>
            <li><b>Types</b>: most are tectonic; volcanic eruptions and human activity (mining, reservoirs) also trigger them.</li>
            <li><b>Seismology</b>: seismographs record waves; size measured on the <b>Richter</b> or <b>Moment Magnitude Scale (MMS)</b>.</li>
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
              <li><b>Seismic zoning</b>: regions are divided by earthquake risk, which guides safe planning and restricts building in high-risk zones.</li>
              <li><b>Strict building codes</b>: buildings designed to sway instead of collapse, using reinforced concrete and steel frames.</li>
              <li><b>Retrofitting</b>: older buildings get extra support beams, flexible joints and shock absorbers to withstand seismic waves.</li>
              <li><b>Shock-absorbing foundations</b>: modern skyscrapers sit on <b>base isolators</b>, large rubber or metal bearings that absorb ground movement.</li>
              <li><b>Public awareness and drills</b>: quake-prone countries run regular drills and safety programmes so people know what to do.</li>
              <li><b>Early warning</b>: seismic networks detect the first <b>P-waves</b> before the damaging <b>S-waves</b> arrive, so people can take cover.</li>
            </ul></div>
            <div class="side"><h4>Preparedness and response</h4><ul>
              <li><b>Early warning</b>: picking up P-waves gives a few seconds before strong shaking, enough to take cover.</li>
              <li><b>Emergency drills</b>: schools, offices and communities practise <b>"Drop, Cover, and Hold"</b>.</li>
              <li><b>Evacuation plans</b>: clear escape routes and safe zones cut panic and keep evacuation orderly.</li>
              <li><b>Search and rescue</b>: trained teams and <b>rescue dogs</b> with special equipment find people trapped in collapsed buildings.</li>
              <li><b>Relief and medical aid</b>: humanitarian groups give temporary shelter, food, water and medical help.</li>
              <li><b>Recovery</b>: restore essential services, reinforce structures and improve preparedness for the next quake.</li>
            </ul></div>
          </div>
        ` },
        { title: 'Case: Tohoku 2011', html: `
          <table class="tbl">
            <tbody>
              <tr><td>Event</td><td>Off the Pacific coast of <b>Tōhoku, Japan</b>; one of the strongest ever recorded</td></tr>
              <tr><td>Tsunami</td><td>Swept inland; towns, ports, farmland destroyed, some areas under water for days</td></tr>
              <tr><td>Toll</td><td>Thousands dead or missing, families displaced</td></tr>
              <tr><td><b>Fukushima</b></td><td>Seawater flooded the plant, disabled cooling: <b>nuclear meltdown</b> and mass evacuation</td></tr>
              <tr><td>Economy</td><td>Industry, farming, transport hit for the long term</td></tr>
              <tr><td>Lessons</td><td>Stronger quake-resistant infrastructure, faster tsunami warning, stricter nuclear safety</td></tr>
            </tbody>
          </table>
          <div class="note heads-up">The case-study heading says "Date &amp; Magnitude" but gives neither. The year <b>2011</b> comes from the causes section ("the 2011 Japan earthquake").</div>
          <div class="note exam">Long answer on earthquakes: (1) basics: plates, fault lines, focus vs epicentre, measuring scales; (2) causes, natural then human-made (mining, fracking, Koyna Dam 1967); (3) impacts including tsunami and soil liquefaction; (4) mitigation (zoning, codes, retrofitting, base isolators, P-wave warning); (5) preparedness and response; (6) Tohoku 2011 and Fukushima as the case, with its lessons.</div>
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
          <p class="lead">A <b>cyclone</b> is a massive <b>rotating storm system</b> around a <b>low-pressure centre</b>, with intense wind and rain.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Tropical</b></td><td>Form over warm water, fuelled by ocean heat. <b>Hurricanes</b> (Atlantic), <b>typhoons</b> (Pacific), <b>cyclones</b> (Indian Ocean)</td></tr>
              <tr><td><b>Extratropical</b></td><td>Mid-latitudes, linked to weather fronts; widespread but less intense</td></tr>
              <tr><td><b>Tornadoes</b></td><td>Smaller but extremely violent tight vortex from severe thunderstorms</td></tr>
            </tbody>
          </table>
          <p>Characteristics: destructive winds, heavy rain, coastal flooding, storm surges.</p>
        ` },
        { title: 'Causes and impact', html: `
          <h4>Causes</h4>
          <ol>
            <li><b>Warm ocean water</b>: evaporation feeds clouds and the storm.</li>
            <li><b>Low pressure</b>: rising warm air leaves low pressure that pulls in air in a spiral.</li>
            <li><b>Coriolis effect</b>: Earth's rotation makes them spin <b>anticlockwise in the Northern</b> and <b>clockwise in the Southern</b> Hemisphere.</li>
            <li><b>Wind and moisture</b>: converging trade winds lift warm moist air, which condenses into storm clouds.</li>
            <li><b>Latitude</b>: rarely within <b>0°–5°</b> of the equator (too little Coriolis force); common in tropics and subtropics.</li>
            <li><b>Climate change</b>: warmer oceans give more intense, longer-lasting cyclones.</li>
          </ol>
          <h4>Impact</h4>
          <ul>
            <li><b>Strong winds</b>: as strong as category 5 hurricanes; they flatten buildings, snap power lines and stop transport.</li>
            <li><b>Storm surges</b>: wind pressure plus high tide pushes seawater inland and submerges coastal communities.</li>
            <li><b>Heavy rainfall</b>: cyclones carry huge moisture, so long intense rain sets off flash floods and landslides.</li>
            <li><b>Floods and waterlogging</b>: city drains fail, leaving long waterlogging that hits transport and health.</li>
            <li><b>Economic loss</b>: industries shut, farm fields go under water and rebuilding needs massive funds.</li>
            <li><b>Human casualties</b>: thousands displaced without shelter, food or medical care, so relief is urgent.</li>
          </ul>
        ` },
        { title: 'Mitigation and response', html: `
          <div class="vs">
            <div class="side"><h4>Mitigation</h4><ul>
              <li><b>Coastal embankments</b>: physical barriers that are the first line of defence against storm surges, protecting low-lying areas from flooding.</li>
              <li><b>Mangrove plantations</b>: mangroves absorb storm energy, reduce erosion and act as windbreaks, so coasts recover better.</li>
              <li><b>Early warning</b>: satellites, <b>Doppler radar</b> and weather models predict the cyclone's path, giving people and authorities time to prepare.</li>
              <li><b>Cyclone shelters</b>: specially designed multi-purpose shelters give safe space during the storm.</li>
              <li><b>Improved drainage</b>: planned urban drains stop long waterlogging and reduce floods after the cyclone.</li>
              <li><b>Resilient infrastructure</b>: stronger buildings, roads and power lines mean less damage and faster recovery.</li>
            </ul></div>
            <div class="side"><h4>Preparedness and response</h4><ul>
              <li><b>Evacuation plans</b>: safe routes, transport and evacuation points are fixed well in advance.</li>
              <li><b>Cyclone shelters</b>: strong, raised buildings that protect people from wind, flooding and debris.</li>
              <li><b>Emergency communication</b>: weather apps and public alert systems spread warnings fast.</li>
              <li><b>Relief</b>: the <b>Red Cross</b> and government agencies hand out food, medicine and supplies.</li>
              <li><b>Search and rescue</b>: military and disaster response forces find and save trapped people.</li>
              <li><b>Community awareness</b>: training on preparedness, emergency kits and first aid cuts panic and saves lives.</li>
            </ul></div>
          </div>
        ` },
        { title: 'Case: Fani and Katrina', html: `
          <table class="tbl">
            <thead><tr><th></th><th>Cyclone Fani (2019)</th><th>Hurricane Katrina (2005)</th></tr></thead>
            <tbody>
              <tr><td>Where</td><td><b>Odisha</b>, India, and parts of Bangladesh</td><td><b>New Orleans</b>, USA</td></tr>
              <tr><td>Nature</td><td>One of the strongest tropical cyclones to hit the subcontinent</td><td>Widespread flooding from <b>levee failures</b></td></tr>
              <tr><td>Impact</td><td>Over <b>15 million</b> affected; power, homes and coasts damaged</td><td>Over <b>1,800 deaths</b>; among the costliest and deadliest in US history</td></tr>
            </tbody>
          </table>
          <p><b>Similarities</b>: mass evacuations, large rebuilding, showed the value of preparedness. <b>Lessons</b>: early warning, better evacuation plans, resilient infrastructure.</p>
          <div class="note exam">Long answer on cyclones: (1) definition; (2) three types with regional names of tropical cyclones; (3) causes: warm ocean, low pressure, Coriolis effect, wind and moisture, latitude, climate change; (4) impacts; (5) mitigation (embankments, mangroves, warning, shelters, drainage, resilient infrastructure); (6) preparedness and response; (7) Fani 2019 vs Katrina 2005 as cases, with similarities and lessons.</div>
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
          <p class="lead">A <b>landslide</b> occurs when <b>gravity overcomes the strength of soil and rock</b>, so material slides down a slope.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Rockfall</b></td><td>Boulders break loose and tumble down steep slopes</td></tr>
              <tr><td><b>Debris flow</b></td><td>Fast mix of soil, rock and water that buries roads and homes</td></tr>
              <tr><td><b>Mudslide</b></td><td>Saturated soil (after rain or deforestation) flows as a river of mud</td></tr>
              <tr><td><b>Slump</b></td><td>Block of land moves down in a <b>rotational</b> way</td></tr>
              <tr><td><b>Creep</b></td><td><b>Slowest</b>; noticed only when trees and structures tilt</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Causes and impact', html: `
          <div class="vs">
            <div class="side"><h4>Causes</h4><ul>
              <li><b>Heavy rainfall</b>: the most common trigger; water seeps into the soil and makes it unstable.</li>
              <li><b>Earthquakes</b>: sudden shaking breaks rock formations apart and can set off huge slides.</li>
              <li><b>Deforestation</b>: tree roots bind soil, so once trees go the soil loses strength and collapses.</li>
              <li><b>Mining and excavation</b>: quarrying and road building upset the natural balance of slopes.</li>
              <li><b>Volcanic eruptions</b>: ash fall, pyroclastic flows and lava together cause large slides.</li>
              <li><b>Construction</b>: poor engineering, such as cutting slopes for buildings and roads, triggers slides on unstable ground.</li>
            </ul></div>
            <div class="side"><h4>Impact</h4><ul>
              <li><b>Infrastructure damage</b>: roads, power lines and buildings destroyed, cutting transport and communication.</li>
              <li><b>Loss of life</b>: fast slides bury homes and people, making them among the <b>deadliest</b> natural disasters.</li>
              <li><b>Environment</b>: forests, wildlife habitats and water sources destroyed, disrupting ecosystems.</li>
              <li><b>Economic loss</b>: governments and communities bear heavy recovery and rehabilitation costs.</li>
              <li><b>Displacement</b>: people forced to relocate, often losing homes and livelihoods.</li>
              <li><b>Soil erosion and sedimentation</b>: land becomes unfit for farming and silt fills nearby rivers and lakes.</li>
            </ul></div>
          </div>
        ` },
        { title: 'Mitigation and response', html: `
          <h4>Mitigation</h4>
          <ul>
            <li><b>Slope stabilisation</b>: retaining walls, <b>gabions</b> and rock bolts strengthen unstable slopes.</li>
            <li><b>Afforestation</b> and vegetation cover: tree roots bind soil and reduce erosion and slides.</li>
            <li><b>Drainage control</b>: poor drainage weakens slopes, so channels and pipes divert excess water safely.</li>
            <li><b>Land-use planning</b>: authorities stop construction on steep, unstable slopes.</li>
            <li><b>Early warning</b>: sensors, satellite monitoring and local alerts let people evacuate before the slide.</li>
            <li><b>Engineering</b>: <b>rock netting, check dams</b> and slope barriers limit the damage.</li>
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
              <tr><td>Trigger</td><td>Intense rainfall; worsened by poor land management, deforestation, poor drainage</td><td>Persistent rain, soil saturation, sudden slope failure</td></tr>
              <tr><td>Toll</td><td><b>Thousands</b> dead, many displaced; roads, temples, homes washed away by debris flows</td><td><b>43 deaths</b>; an entire community buried</td></tr>
              <tr><td>Response</td><td>Large-scale rescue by the <b>Indian military</b></td><td>Rapid response; raised concern over land-use policy</td></tr>
            </tbody>
          </table>
          <p><b>Lessons</b>: better land-use planning, early warning and preparedness.</p>
          <div class="note exam">Long answer on landslides: (1) definition (gravity overcomes the strength of soil and rock); (2) five types from rockfall to creep; (3) causes, natural then human; (4) impacts; (5) mitigation (slope stabilisation, afforestation, drainage, land-use planning, warning, engineering); (6) preparedness and response; (7) Kedarnath 2013 and Oso 2014 as cases, with lessons.</div>
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
            <li><b>Awareness campaigns</b> by government, NGOs and media: posters, radio, social media, local meetings.</li>
            <li><b>Training and drills</b>: earthquake and fire evacuation; first aid so citizens can act before help arrives.</li>
            <li><b>Community-based response teams</b>: trained volunteers act before official responders.</li>
            <li><b>Early warning familiarity</b>: sirens, weather warnings, mobile alerts.</li>
            <li><b>School and workplace readiness</b>: protocols, routes, assembly points.</li>
            <li><b>NGO and local government partnerships</b>: Red Cross, National Disaster Response Forces, grassroots NGOs.</li>
          </ol>
        ` },
        { title: 'Technology', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>GIS mapping</b></td><td>Hazard maps of flood, quake and cyclone risk for planning and evacuation</td></tr>
              <tr><td><b>Satellite imagery</b></td><td>Track hurricanes, measure floods, assess damage</td></tr>
              <tr><td><b>AI and machine learning</b></td><td>Process weather data for better prediction</td></tr>
              <tr><td><b>Drones and UAVs</b></td><td>Rapid assessment, deliver medicine, locate survivors</td></tr>
              <tr><td><b>Mobile alerts</b></td><td>FEMA app, <b>MyShake</b> (earthquakes), regional alert systems</td></tr>
              <tr><td><b>Big data and IoT sensors</b></td><td>In dams, bridges, risk zones: detect pressure, vibration, temperature changes</td></tr>
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
              <tr><td>Knowledge sharing</td><td>Satellite data, AI models, early warning shared with vulnerable regions</td></tr>
              <tr><td>Funding</td><td><b>World Bank</b> and <b>IMF</b> loans and grants</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Future and conclusion', html: `
          <h4>Future challenges and recommendations</h4>
          <ol>
            <li>Climate change is making extreme weather more frequent and severe.</li>
            <li>Rapid urbanisation puts more people at risk; stricter land-use policy needed.</li>
            <li>Stronger early warning with AI and satellites.</li>
            <li>Better infrastructure and building codes, resilient materials, drainage.</li>
            <li>More community participation and drills.</li>
            <li>Global policy and more funding for disaster-prone regions.</li>
          </ol>
          <div class="note exam">Conclusion in one line: preparedness, government policy with community action, technology and global cooperation together reduce disaster risk, and everyone shares the responsibility.</div>
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
