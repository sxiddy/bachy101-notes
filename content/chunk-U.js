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
        { title: 'Definition', html: `
          <p class="lead"><b>Environmental health monitoring</b> is the systematic collection, analysis and assessment of environmental data (air, water, soil) to <b>detect changes, identify health risks and predict future conditions</b> that affect public health.</p>
          <p>It establishes the current state, tracks trends, informs health authorities, supports policy and checks whether management tools work.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Data collection</b></td><td>Regular exposure and health data from air, water, soil and more</td></tr>
              <tr><td><b>Risk assessment</b></td><td>Risks that conditions pose to public health</td></tr>
              <tr><td><b>Trend analysis</b></td><td>Changes over time; predict future scenarios</td></tr>
              <tr><td><b>Policy and decisions</b></td><td>Information for policymakers, health authorities, public</td></tr>
              <tr><td><b>Public health protection</b></td><td>The ultimate goal: find problems and act</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'What and how', html: `
          <p><b>Factors monitored</b>:</p>
          <ul>
            <li><b>Air</b>: pollutants and aerosols, mainly in cities.</li>
            <li><b>Water</b>: temperature, acidity, pollutants in rivers and other water bodies.</li>
            <li><b>Soil and waste</b>: soil state and how well waste management prevents contamination.</li>
            <li><b>Biodiversity</b>: changes in natural resources.</li>
          </ul>
          <p><b>Methods</b>: ground-based sampling, <b>satellite observation</b> and <b>environmental modelling</b>. Results feed reports, government and international talks.</p>
        ` },
        { title: 'Remote sensing, databases', html: `
          <ul>
            <li><b>Remote sensing</b>: gathering information about an object <b>without touching it</b>. Used in agriculture, forestry, land cover and water resources.</li>
            <li><b>Database</b>: a collection of inter-related data on various subjects. Examples:
              <ul>
                <li>The Ministry of Environment and Forests.</li>
                <li><b>NMIS</b> (National Management Information System): R&amp;D projects and the scientists and staff involved.</li>
                <li><b>ENVIS</b> (Environmental Information System): a network of databases across India.</li>
              </ul>
            </li>
          </ul>
          <div class="note heads-up">The course text says ENVIS works in "25 countries all over the country". It means about 25 centres within India.</div>
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
        { title: 'Uses', html: `
          <p class="lead">AI analyses huge sensor and satellite datasets to <b>predict, detect and track</b> pollution, deforestation and other change in real time.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Monitoring and prediction</b></td><td>Air: forecast pollution and find sources from low-cost sensors and satellites. Water: real-time contaminant alerts, can trigger filtration. Climate: predict CO₂, glacier mass, sea level. <b>Flood early warnings</b></td></tr>
              <tr><td><b>Conservation</b></td><td><b>Habitat mapping</b> with deep learning on satellite and aerial images. <b>Wildlife monitoring</b> from camera traps, GPS, acoustic recordings. Spotting <b>anomalies</b> such as poaching, illegal logging, unusual boat movements</td></tr>
              <tr><td><b>Hazards</b></td><td>Sensors and <b>edge AI</b> detect hazardous substances; early warning systems</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'AI tools', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Geospatial analysis</b></td><td>AI on satellite and drone images (e.g. FlyPix AI): deforestation, illegal dumping, land use</td></tr>
              <tr><td><b>Predictive analytics</b></td><td>ML on past and live data to forecast floods, weather, pollution. An <b>LSTM</b> (Long Short-Term Memory) model can predict air quality from past data</td></tr>
              <tr><td><b>Robotics</b></td><td>Autonomous robots monitor hazardous air or clean polluted water surfaces</td></tr>
              <tr><td><b>Digital twin</b></td><td>A <b>virtual replica</b> of a real system (e.g. a water treatment plant) for simulation and optimisation</td></tr>
              <tr><td><b>E-nose</b></td><td>Electronic nose: AI identifies hazardous gases by chemical signature; industrial leak detection</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Case studies', html: `
          <div class="vs">
            <div class="side"><h4>IIT Kharagpur: arsenic</h4><p><b>Problem</b>: arsenic in groundwater in Eastern India. <b>Solution</b>: AI model on geoscience data maps high and low arsenic zones in the <b>Ganga delta</b> and quantifies exposure. <b>Impact</b>: finds safe drinking water sources.</p></div>
            <div class="side"><h4>The Ocean Cleanup: plastic</h4><p><b>Problem</b>: ocean plastic harms marine life. <b>Solution</b>: AI detects debris and maps litter in remote ocean areas. <b>Impact</b>: targeted, more efficient clean-up.</p></div>
          </div>
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
        { title: 'Benefits', html: `
          <p class="lead"><b>IoT</b> uses connected sensors to collect real-time data on air and water quality, temperature and humidity, sending it on for analysis, remote monitoring and predictive alerts.</p>
          <ol>
            <li><b>Real-time data</b> on pollutants, water purity, temperature, humidity.</li>
            <li><b>Remote monitoring</b> of hard-to-reach places without people.</li>
            <li><b>Predictive analysis</b> when combined with machine learning.</li>
            <li><b>Automated responses</b>: switch on air purifiers or water treatment above thresholds.</li>
            <li><b>Resource management</b>: soil moisture sensors optimise irrigation; wildlife tracking.</li>
            <li><b>Public awareness</b> through shared live data.</li>
            <li><b>Lower costs</b>: fewer site visits.</li>
            <li><b>Pollutant detection</b>: subtle changes like toxic gases.</li>
          </ol>
        ` },
        { title: 'Sensors', html: `
          <table class="tbl">
            <thead><tr><th>Sensor</th><th>Measures</th></tr></thead>
            <tbody>
              <tr><td><b>Air quality</b></td><td>PM2.5, PM10, CO, SO₂, NOₓ; finds hotspots, health warnings</td></tr>
              <tr><td><b>Water quality</b></td><td>pH, <b>dissolved oxygen</b>, turbidity, chemical contaminants; early effluent detection</td></tr>
              <tr><td><b>Soil</b></td><td>Moisture, temperature, pH, nutrients (<b>NPK</b>); food safety, sustainable farming</td></tr>
              <tr><td><b>Acoustic</b></td><td>Forest soundscapes: wildlife, <b>illegal logging, poaching</b></td></tr>
              <tr><td><b>Wearable</b></td><td>A person's own exposure to pollutants in real time</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Platforms', html: `
          <ul>
            <li><b>Cloud EHS platforms</b> (e.g. EHS Insight, Envirosuite): collect environmental, health and safety data, analytics and compliance.</li>
            <li><b>Real-time dashboards</b>: live visuals, trend tracking, instant anomaly alerts, map views.</li>
            <li><b>Environmental Management Systems</b> following <b>ISO 14001</b>: use IoT data and AI to cut a company's impact.</li>
            <li><b>Smart waste management</b>: bin fill-level sensors and optimised collection routes; less overflow and fewer truck emissions.</li>
          </ul>
          <div class="note exam">AI and IoT work together: <b>IoT collects</b> the data, <b>AI analyses</b> it and predicts.</div>
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
