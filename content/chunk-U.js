CHUNK({
  chunk: 'U',
  module: 'm5',
  topics: [
    {
      id: 'm5-env-monitoring',
      title: 'Environmental health monitoring',
      short: 'Env health monitoring',
      blurb: 'What environmental health monitoring is, its five key aspects, the factors it watches, how it works, remote sensing and environmental databases such as ENVIS.',
      source: 'Lecture W5 (AI and IoT in Environmental Monitoring), pages 1–2, 7',
      tabs: [
        { title: 'Definition and aspects', html: `
          <p class="lead"><b>Environmental health monitoring</b>: systematic collection and analysis of air, water, soil data to <b>detect changes, identify health risks, predict conditions</b>.</p>
          <p>Five aspects:</p>
          <div class="chips"><span class="chip">Data collection</span><span class="chip">Risk assessment</span><span class="chip">Trend analysis</span><span class="chip">Policy and decisions</span><span class="chip">Public health protection</span></div>
          <p>Ultimate goal: <b>public health protection</b>.</p>
          <p>Monitors: <b>air</b> (urban pollutants, aerosols), <b>water</b> (temperature, acidity), <b>soil and waste</b>, <b>biodiversity</b>.</p>
        ` },
        { title: 'Methods and databases', html: `
          <p>Methods: <b>ground sampling, satellite observation, environmental modelling</b>.</p>
          <ul>
            <li><b>Remote sensing</b>: info <b>without contact</b>; agriculture, forestry, land cover, water.</li>
            <li><b>Database</b>: collection of <b>inter-related data</b>.</li>
            <li><b>NMIS</b>: National Management Information System; R&amp;D projects, scientists.</li>
            <li><b>ENVIS</b>: Environmental Information System; network of databases across India.</li>
          </ul>
          <div class="note heads-up">Course text: ENVIS in "25 countries all over the country", meaning about <b>25 centres</b> in India.</div>
        ` }
      ],
      flashcards: [
        { front: 'Define environmental health monitoring.', back: 'Systematic collection and analysis of environmental data to detect changes, identify health risks and predict conditions affecting public health.' },
        { front: 'Five key aspects of environmental health monitoring?', back: 'Data collection, risk assessment, trend analysis, policy and decisions, public health protection.' },
        { front: 'Three monitoring methods?', back: 'Ground sampling, satellite observation, environmental modelling.' },
        { front: 'Define remote sensing.', back: 'Gathering information about an object <b>without contact</b>.' },
        { front: 'What is ENVIS?', back: '<b>Environmental Information System</b>, a network of environmental databases.' },
        { front: 'What is NMIS?', back: '<b>National Management Information System</b>: data on R&amp;D projects and scientists.' }
      ],
      oneLiners: [
        'The ultimate goal of monitoring is protecting public health.',
        'A database is a collection of inter-related data.',
        'Remote sensing serves agriculture, forestry, land cover and water.'
      ],
      formulas: []
    },
    {
      id: 'm5-ai-monitoring',
      title: 'Role of AI in environmental monitoring',
      short: 'AI in monitoring',
      blurb: 'AI for prediction, conservation and hazards, the software tools from LSTM forecasting to digital twins and e-noses, and two case studies.',
      source: 'Lecture W5 (AI and IoT in Environmental Monitoring), pages 2–3, 5–7',
      tabs: [
        { title: 'Uses and case studies', html: `
          <ul>
            <li><b>Prediction</b>: air pollution forecasts, water contaminant alerts, <b>flood early warning</b>.</li>
            <li><b>Conservation</b>: <b>habitat mapping</b>, wildlife (camera traps, GPS, acoustic), anomalies (<b>poaching, illegal logging</b>, unusual boats).</li>
            <li><b>Hazards</b>: <b>edge AI</b> sensors.</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>IIT Kharagpur</h4><p>Maps <b>arsenic</b> in groundwater, <b>Ganga delta</b>.</p></div>
            <div class="side"><h4>The Ocean Cleanup</h4><p>Detects and maps <b>ocean plastic</b>.</p></div>
          </div>
        ` },
        { title: 'AI tools', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Geospatial</b></td><td>Satellite, drone images (<b>FlyPix AI</b>): deforestation, dumping</td></tr>
              <tr><td><b>Predictive</b></td><td><b>LSTM</b> (Long Short-Term Memory): air quality from past data</td></tr>
              <tr><td><b>Robotics</b></td><td>Hazardous air, water-surface cleaning</td></tr>
              <tr><td><b>Digital twin</b></td><td><b>Virtual replica</b> (e.g. water treatment plant)</td></tr>
              <tr><td><b>E-nose</b></td><td>Identifies <b>hazardous gases</b>; leak watch</td></tr>
            </tbody>
          </table>
        ` }
      ],
      flashcards: [
        { front: 'Three ways AI helps conservation?', back: 'Habitat mapping, wildlife monitoring, detecting illegal activity.' },
        { front: 'Which AI model can forecast air quality from past data?', back: '<b>LSTM</b> (Long Short-Term Memory).' },
        { front: 'What is a digital twin?', back: 'A <b>virtual replica</b> of a physical system used to simulate and optimise it.' },
        { front: 'What is an e-nose?', back: 'An AI <b>electronic nose</b> that identifies hazardous gases.' },
        { front: 'IIT Kharagpur AI case study?', back: 'Predicting <b>arsenic</b> in groundwater across the Ganga delta.' },
        { front: 'The Ocean Cleanup uses AI to…', back: 'Map and target <b>ocean plastic</b>.' }
      ],
      oneLiners: [
        'AI spots poaching through anomalies like unusual boat movements.',
        'Edge AI analyses sensor data on the device itself.',
        'Camera traps and acoustic recordings feed wildlife AI.'
      ],
      formulas: []
    },
    {
      id: 'm5-iot-monitoring',
      title: 'Role of IoT in environmental monitoring',
      short: 'IoT in monitoring',
      blurb: 'How connected sensors help, the eight benefits, the five sensor types, and integrated platforms such as dashboards, ISO 14001 EMS and smart waste systems.',
      source: 'Lecture W5 (AI and IoT in Environmental Monitoring), pages 3–6',
      tabs: [
        { title: 'Benefits and platforms', html: `
          <p><b>IoT</b>: connected sensors, <b>real-time remote</b> data.</p>
          <p>Eight benefits:</p>
          <div class="chips"><span class="chip">Real-time data</span><span class="chip">Remote monitoring</span><span class="chip">Predictive analysis (with ML)</span><span class="chip">Automated responses</span><span class="chip">Resource management</span><span class="chip">Public awareness</span><span class="chip">Lower costs</span><span class="chip">Pollutant detection</span></div>
          <ul>
            <li><b>Cloud EHS</b>: EHS Insight, Envirosuite.</li>
            <li><b>EMS</b>: <b>ISO 14001</b>.</li>
            <li><b>Smart waste</b>: <b>bin fill-level</b> sensors, optimised routes.</li>
          </ul>
          <p><b>IoT collects</b>; <b>AI analyses</b>.</p>
        ` },
        { title: 'Sensors', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Air</b></td><td>PM2.5, PM10, CO, SO₂, NOₓ; hotspots</td></tr>
              <tr><td><b>Water</b></td><td>pH, <b>dissolved oxygen</b>, turbidity, contaminants</td></tr>
              <tr><td><b>Soil</b></td><td>Moisture, temperature, pH, <b>NPK</b>; optimises irrigation</td></tr>
              <tr><td><b>Acoustic</b></td><td>Forest soundscapes: <b>illegal logging, poaching</b></td></tr>
              <tr><td><b>Wearable</b></td><td><b>Personal exposure</b> in real time</td></tr>
            </tbody>
          </table>
          <p>Automated response: air purifiers or water treatment switch on above <b>thresholds</b>.</p>
        ` }
      ],
      flashcards: [
        { front: 'What does IoT add to monitoring?', back: 'Connected sensors giving <b>real-time, remote</b> data and alerts.' },
        { front: 'Example of an IoT automated response?', back: 'Switching on air purifiers or water treatment when pollution passes a threshold.' },
        { front: 'What do soil sensors measure?', back: 'Moisture, temperature, pH, <b>NPK</b> nutrients.' },
        { front: 'Use of acoustic sensors in forests?', back: 'Monitor wildlife and detect <b>illegal logging and poaching</b>.' },
        { front: 'Standard for Environmental Management Systems?', back: '<b>ISO 14001</b>.' },
        { front: 'How does smart waste management work?', back: 'Sensors track <b>bin fill levels</b> and optimise collection routes.' }
      ],
      oneLiners: [
        'Water sensors track pH, dissolved oxygen and turbidity.',
        'Wearable sensors track personal exposure.',
        'IoT collects; AI analyses.'
      ],
      formulas: []
    }
  ],
  figures: []
});
