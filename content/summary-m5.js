SUMMARY({
  module: 'm5',
  tldr: `<p>The <b>natural greenhouse effect</b> keeps Earth at about 15°C instead of −18°C. Human emissions <b>enhance</b> it, so Earth is already about <b>1.1°C</b> warmer, with CO₂ up from 280 to over 420 ppm. Four independent lines of evidence (temperature, CO₂, ice and sea level, oceans) confirm it. The response is <b>mitigation</b> (renewables, efficiency, capture, sinks, circular economy, behaviour) plus <b>adaptation</b>. A <b>carbon footprint</b> measures emissions in CO₂e across <b>Scopes 1–3</b> using <b>LCA</b>. <b>AI and IoT</b> make environmental monitoring real-time and predictive.</p>`,
  storyline: [
    { title: 'Science', html: `<p>Greenhouse effect, gases, four pillars of evidence.</p>` },
    { title: 'Causes and effects', html: `<p>Fossil fuels, deforestation, industry, agriculture, waste; heat, sea level, rainfall, acidification, health.</p>` },
    { title: 'Responses', html: `<p>Mitigation and adaptation, NAPCC, India's 2070 net zero.</p>` },
    { title: 'Carbon footprint', html: `<p>Scopes, GWP, LCA, sector shares, mitigation, offsets.</p>` },
    { title: 'AI and IoT', html: `<p>Monitoring, AI uses and tools, IoT sensors and platforms, case studies.</p>` }
  ],
  bigIdeas: [
    { title: 'Greenhouse effect', topic: 'm5-greenhouse-evidence', html: `<p>Natural is needed; <b>enhanced</b> is the problem. Like piling extra blankets.</p>` },
    { title: 'Evidence', topic: 'm5-greenhouse-evidence', html: `<p>+1.1°C; CO₂ 280 → 420+ ppm; Arctic ice −13%/decade; sea level +20 cm since 1900; oceans take 90% of heat.</p>` },
    { title: 'Causes', topic: 'm5-climate-causes-effects', html: `<p>Fossil fuels about <b>75%</b>, deforestation 10–15%, cement about 8%. The sun has dimmed slightly since the 1980s.</p>` },
    { title: 'Gases', topic: 'm5-warming-gases', html: `<p>CO₂ lasts centuries; methane about 80× over 20 years; N₂O about 265× over 100 years; water vapour is a feedback.</p>` },
    { title: 'Consequences', topic: 'm5-warming-causes-effects', html: `<p>Sea level 0.3–1 m by 2100; ocean pH −0.1 (26% more acidic); about 250,000 extra deaths a year (2030–2050).</p>` },
    { title: 'Responses', topic: 'm5-warming-responses', html: `<p>500 GW non-fossil by 2030; <b>NAPCC 2008</b> with eight missions; adaptation complements mitigation.</p>` },
    { title: 'Scopes', topic: 'm5-carbon-footprint', html: `<p>Scope 1 direct, Scope 2 purchased energy, Scope 3 value chain (often largest). LCA cradle to grave.</p>` },
    { title: 'Sectors', topic: 'm5-sector-emissions', html: `<p>Power 34% of CO₂, industry 24%, agriculture and land 22%, transport 16%, buildings 6% (17–19% with Scope 2).</p>` },
    { title: 'Mitigation', topic: 'm5-footprint-mitigation', html: `<p>Efficiency is the "first fuel"; CCS, CCU, DAC; recycled aluminium saves 95%; offsets must be additional, measurable, permanent, verified.</p>` },
    { title: 'AI', topic: 'm5-ai-monitoring', html: `<p>LSTM forecasts, digital twins, e-noses. IIT Kharagpur arsenic map; The Ocean Cleanup plastic map.</p>` },
    { title: 'IoT', topic: 'm5-iot-monitoring', html: `<p>Air, water, soil, acoustic and wearable sensors; automated responses; ISO 14001 EMS.</p>` }
  ],
  compare: [
    { title: 'Mitigation vs adaptation', html: `<table class="tbl"><thead><tr><th></th><th>Mitigation</th><th>Adaptation</th></tr></thead><tbody><tr><td>Aim</td><td>Cut emissions</td><td>Cope with impacts</td></tr><tr><td>Examples</td><td>Renewables, efficiency, CCS, forests</td><td>Sea walls, heat-tolerant crops, cool roofs, water harvesting</td></tr></tbody></table>` },
    { title: 'Carbon capture options', html: `<table class="tbl"><thead><tr><th></th><th>Source</th><th>Fate of CO₂</th></tr></thead><tbody><tr><td>CCS</td><td>Plant or factory</td><td>Stored underground</td></tr><tr><td>CCU</td><td>Plant or factory</td><td>Made into products</td></tr><tr><td>DAC</td><td>Ambient air</td><td>Removed, then stored or used</td></tr></tbody></table>` },
    { title: 'Methane potency', html: `<table class="tbl"><thead><tr><th>Time span</th><th>Times CO₂</th></tr></thead><tbody><tr><td>20 years</td><td>About 80–84</td></tr><tr><td>100 years</td><td>About 28–36</td></tr></tbody></table>` }
  ],
  formulas: [
    { name: 'CO₂-equivalent', html: 'CO₂e = mass of gas × GWP' },
    { name: 'Footprint', html: 'Emissions = activity data × emission factor' },
    { name: 'Calcination', html: 'CaCO₃ → CaO + CO₂' }
  ],
  numbers: [
    { value: '15°C / −18°C', what: 'Earth with / without greenhouse effect' }, { value: '1.1°C', what: 'Warming so far' },
    { value: '280 → 420+ ppm', what: 'CO₂ pre-industrial to now' }, { value: '13% / decade', what: 'Arctic sea ice loss' },
    { value: '20 cm', what: 'Sea-level rise since 1900' }, { value: '90%', what: 'Excess heat absorbed by oceans' },
    { value: '7% per °C', what: 'Extra moisture in warmer air' }, { value: '4 / 15 / 2 t', what: 'Footprint per person: world / US / India' },
    { value: '0.8 t', what: 'CO₂ per tonne of cement' }, { value: '95%', what: 'Energy saved by recycled aluminium' },
    { value: '2070', what: 'India net zero' }, { value: '500 GW', what: 'India non-fossil target by 2030' }
  ],
  traps: [
    `<p>The greenhouse effect itself is not the problem; the <b>enhanced</b> effect is.</p>`,
    `<p>Water vapour is the most abundant GHG but a <b>feedback</b>, not a driver.</p>`,
    `<p>Scope 2 emissions happen at the power plant but are counted to the <b>user</b>.</p>`,
    `<p>Offsets are a <b>complement</b> to cutting emissions, never a substitute.</p>`,
    `<p>Afforestation is new forest on non-forest land; reforestation restores degraded forest.</p>`
  ]
});
