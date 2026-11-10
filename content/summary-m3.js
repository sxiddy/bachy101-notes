SUMMARY({
  module: 'm3',
  tldr: `<p>Pollution comes in five forms: <b>air, water, soil, noise and thermal</b>. Each has its own sources, effects, control technology and Indian law (Air Act 1981, Water Act 1974, Noise Rules 2000, EPA 1986 as the umbrella). <b>Water management</b> rests on sustainability, equity, efficiency and <b>IWRM</b>, plus conservation from drip irrigation to rainwater harvesting. <b>Solid waste</b> is misplaced resources: a <b>circular economy</b> uses the 3Rs in order (reduce, reuse, recycle) and leaves landfill as the last resort.</p>`,
  storyline: [
    { title: 'Air', html: `<p>AQI, primary vs secondary pollutants, indoor air, effects, control devices, London 1952 and Delhi.</p>` },
    { title: 'Water', html: `<p>Standards, point vs non-point, diseases, eutrophication, three-stage sewage treatment, Minamata and Yamuna.</p>` },
    { title: 'Soil, noise, heat', html: `<p>Soil sources and routes; decibels and noise rules; thermal pollution and cooling towers.</p>` },
    { title: 'Water management', html: `<p>Principles, conservation methods, Indian schemes, state examples.</p>` },
    { title: 'Waste', html: `<p>Six waste types, linear vs circular, 3Rs, four treatment methods, ISWM and real examples.</p>` }
  ],
  bigIdeas: [
    { title: 'AQI', topic: 'm3-air-basics', html: `<p>0–500 scale: good (green) to hazardous (maroon, 401–500). WHO: <b>7 million</b> deaths a year; <b>99%</b> breathe air above limits.</p>` },
    { title: 'Primary vs secondary', topic: 'm3-air-pollutants', html: `<p>Primary emitted directly (CO, SO₂, NOₓ, PM). Secondary formed in air: <b>ozone</b> (NOₓ + VOCs + sunlight), <b>PAN</b>, acid rain.</p>` },
    { title: 'Air effects', topic: 'm3-air-causes-effects', html: `<p>Acid rain pH &lt; 5.6; ozone hole 1985, <b>Montreal 1987</b>; smog first in LA 1940s; Delhi smog trapped by <b>inversion</b>.</p>` },
    { title: 'Air control', topic: 'm3-air-control', html: `<p>Baghouse (fine), ESP, scrubber, cyclone (coarse), settling chamber. <b>FGD</b> for SO₂, <b>SCR</b> for NOₓ. NCAP 2019; GRAP; Air Act 1981.</p>` },
    { title: 'Water basics', topic: 'm3-water-basics', html: `<p>WHO: pH 6.5–8.5, turbidity &lt; 1 NTU, TDS &lt; 500 mg/L. Point sources are easier to regulate than non-point.</p>` },
    { title: 'Water effects', topic: 'm3-water-causes-effects', html: `<p>Eutrophication makes <b>dead zones</b>; biomagnification of DDT and mercury; nitrates cause <b>blue baby syndrome</b>.</p>` },
    { title: 'Sewage treatment', topic: 'm3-water-control', html: `<p>Primary (physical, ~30% BOD) → secondary (biological, <b>85–95% BOD</b>) → tertiary (nutrients, UV, RO). Minamata 1956; Water Act 1974.</p>` },
    { title: 'Soil', topic: 'm3-soil-pollution', html: `<p>Xenobiotic chemicals; construction sites are the top urban trigger; enters by inhalation, eating (children under 3), skin.</p>` },
    { title: 'Noise', topic: 'm3-noise-pollution', html: `<p>Whisper 30 dB, talk 50, traffic 85–90; <b>&gt; 85 dB</b> long-term damages hearing, <b>&gt; 120 dB</b> immediate harm. Noise Rules 2000.</p>` },
    { title: 'Thermal', topic: 'm3-thermal-pollution', html: `<p>Heat (energy) pollution; 1–1.5°C cuts oxygen. Fixes: cooling ponds, wet and dry towers, spray ponds, closed-loop cooling.</p>` },
    { title: 'Water management', topic: 'm3-water-management', html: `<p>Sustainability, equity, efficiency, <b>IWRM</b>. Agriculture uses 70% of freshwater; drip saves 28–80%.</p>` },
    { title: 'Circular economy', topic: 'm3-solid-waste', html: `<p>Linear: take, make, dispose. Circular: design out waste, keep in use, regenerate. Under 9% of materials return to use.</p>` },
    { title: 'Treatment', topic: 'm3-waste-treatment', html: `<p>Composting, anaerobic digestion (biogas), incineration (800–1000°C, 300 t/day → 3 MW), sanitary landfill (last).</p>` }
  ],
  compare: [
    { title: 'Particulate control devices', html: `<table class="tbl"><thead><tr><th>Device</th><th>Principle</th><th>Particle size</th></tr></thead><tbody><tr><td>Baghouse</td><td>Fabric filtration</td><td>Fine, sub-micron</td></tr><tr><td>ESP</td><td>Electric charge</td><td>Fine ash, soot</td></tr><tr><td>Wet scrubber</td><td>Liquid</td><td>Solids and gases</td></tr><tr><td>Cyclone</td><td>Centrifugal force</td><td>Larger</td></tr><tr><td>Settling chamber</td><td>Gravity</td><td>Large; pre-cleaner</td></tr></tbody></table>` },
    { title: 'Incineration vs landfill', html: `<table class="tbl"><thead><tr><th></th><th>Incineration</th><th>Sanitary landfill</th></tr></thead><tbody><tr><td>Space</td><td>Very little</td><td>Large area</td></tr><tr><td>Cost</td><td>High capital, skilled staff</td><td>Simple, economical</td></tr><tr><td>Main risk</td><td>Dioxins, ash</td><td>Leachate, methane fire, flies</td></tr></tbody></table>` }
  ],
  formulas: [
    { name: 'Ground-level ozone', html: `NO<sub>x</sub> + VOCs + sunlight → O<sub>3</sub>` },
    { name: 'Photochemical smog', html: `VOCs + NO<sub>x</sub> + sunlight → O<sub>3</sub> + PAN + secondary aerosols` }
  ],
  numbers: [
    { value: '7 M / 3.8 M', what: 'Deaths a year: air pollution / indoor air' }, { value: '200×', what: 'CO binding to haemoglobin vs O₂' },
    { value: 'pH < 5.6', what: 'Acid rain' }, { value: '40 / 60 µg/m³', what: 'NAAQS annual PM2.5 / PM10' },
    { value: '122 cities', what: 'NCAP non-attainment cities' }, { value: '4,000 / 12,000', what: 'London smog deaths, immediate / long-term' },
    { value: '2.2 billion', what: 'People without safe water' }, { value: '72,368 / 31,841 MLD', what: 'India sewage made / treatment capacity' },
    { value: '85–95%', what: 'BOD removed in secondary treatment' }, { value: '85 / 120 dB', what: 'Hearing damage over time / immediate harm' },
    { value: '40–50°C', what: 'Cooling water returned to rivers' }, { value: '70%', what: 'Freshwater used by agriculture' },
    { value: '62 Mt', what: 'MSW India makes yearly' }, { value: '300 t/day → 3 MW', what: 'Incinerator output' }
  ],
  traps: [
    `<p>Ozone near the ground is a <b>secondary</b> pollutant; stratospheric ozone protects us.</p>`,
    `<p>Air Act is <b>1981</b>, Water Act is <b>1974</b>.</p>`,
    `<p>Cyclones remove <b>large</b> particles; baghouses take the <b>fine</b> ones.</p>`,
    `<p>Recycle is the <b>last</b> of the 3Rs, not the first.</p>`,
    `<p>Thermal pollution can be a sudden <b>decrease</b> in temperature too.</p>`
  ]
});
