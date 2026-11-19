SUMMARY({
  module: 'm7',
  tldr: `<p>Week 6 is the <b>contemporary issues</b> week: <b>green energy technologies</b>. Fossil fuels still give <b>over 80%</b> of world energy; the IPCC wants <b>net zero by 2050</b>, and India aims for <b>50% non-fossil capacity</b> and <b>500 GW renewables by 2030</b>. <b>Solar</b> (PV via the p-n junction, or CSP with molten salt) and <b>wind</b> (kinetic energy → rotor → gearbox → generator) are the two pillars and complement each other in time. <b>Hydropower</b> (potential → kinetic → mechanical → electrical) is the largest renewable source and dispatchable, but large dams carry ecological and social costs. <b>Geothermal</b> uses Earth's internal heat for continuous base-load power at 80–95% capacity factor, but only where geology allows.</p>`,
  bigIdeas: [
    { title: 'Renewable is not always green', topic: 'm7-green-energy', html: `<p>Green means minimal impact over the <b>whole lifecycle</b>. Large hydro and biomass are renewable but not fully green.</p>` },
    { title: 'Solar', topic: 'm7-solar-energy', html: `<p>1,000 W/m² baseline. PV: photons free electrons, the <b>p-n junction</b> field drives DC. Mono 20–22%, poly 15–17%, thin film 10–13%, perovskite tandem above 30%.</p>` },
    { title: 'Wind', topic: 'm7-wind-energy', html: `<p>Uneven heating → pressure differences → wind. HAWT most common; VAWT for cities. Offshore: steadier wind, much higher cost.</p>` },
    { title: 'Hydropower', topic: 'm7-hydro-energy', html: `<p>Storage (Tehri), run-of-river (Srinagar), pumped storage (Kadamparai), micro/pico below 100 kW. Over 90% efficient and dispatchable.</p>` },
    { title: 'Geothermal', topic: 'm7-geothermal', html: `<p>Dry steam (oldest, The Geysers), flash steam (most common, above 180 °C), binary (100–180 °C, isobutane/pentane, near-zero emissions).</p>` },
    { title: 'India', topic: 'm7-solar-india', html: `<p>300 sunny days; PM Surya Ghar, PM-KUSUM, NSM, Bhadla, ISA (with France), OSOWOG. Wind on the western coast; NIWE in Chennai.</p>` }
  ],
  storyline: [
    { title: 'Why', html: `<p>Fossil fuels are finite and polluting; climate targets demand a switch.</p>` },
    { title: 'Solar and wind', html: `<p>Fastest-growing, intermittent, complementary in time.</p>` },
    { title: 'Hydro and geothermal', html: `<p>Continuous power, but tied to rivers or geology.</p>` },
    { title: 'Engineers', html: `<p>Every branch has a role; SDGs 7, 9, 11, 13.</p>` }
  ],
  compare: [
    { title: 'Solar vs wind', html: `<table class="tbl"><thead><tr><th></th><th>Solar</th><th>Wind</th></tr></thead><tbody><tr><td>Works</td><td>Daylight</td><td>Whenever windy</td></tr><tr><td>Noise</td><td>Silent</td><td>Moderate</td></tr><tr><td>Maintenance</td><td>Lower</td><td>Higher</td></tr><tr><td>Best site</td><td>Sunny regions, rooftops</td><td>Coastal and hilly, open</td></tr><tr><td>Capacity factor</td><td>Lower</td><td>Higher</td></tr></tbody></table>` },
    { title: 'Hydro vs geothermal', html: `<table class="tbl"><thead><tr><th></th><th>Hydro</th><th>Geothermal</th></tr></thead><tbody><tr><td>Source</td><td>Flowing water</td><td>Earth's heat</td></tr><tr><td>Land</td><td>Large</td><td>Small</td></tr><tr><td>Maturity</td><td>Mature</td><td>Emerging</td></tr><tr><td>Availability</td><td>Seasonal</td><td>Continuous</td></tr><tr><td>Output</td><td>High</td><td>Moderate</td></tr></tbody></table>` },
    { title: 'Geothermal plant types', html: `<table class="tbl"><thead><tr><th>Type</th><th>Resource</th><th>Note</th></tr></thead><tbody><tr><td>Dry steam</td><td>Natural steam</td><td>Oldest, rare</td></tr><tr><td>Flash steam</td><td>Water above 180 °C</td><td>Most common</td></tr><tr><td>Binary</td><td>100–180 °C</td><td>Secondary fluid, near-zero emissions</td></tr></tbody></table>` }
  ],
  formulas: [
    { name: 'Solar panel output', html: 'P = irradiance × area × efficiency' },
    { name: 'Hydro energy chain', html: 'Potential → Kinetic → Mechanical → Electrical' }
  ],
  numbers: [
    { value: '80%+', what: 'World energy from fossil fuels' }, { value: '2050', what: 'IPCC net-zero target' },
    { value: '50% / 500 GW', what: 'India non-fossil share and RE capacity by 2030' }, { value: '1,000 W/m²', what: 'Clear-sky noon irradiance' },
    { value: '0.5% / yr; 80–85% at 25 yr', what: 'Panel degradation' }, { value: '15–35%', what: 'Gain from tracking' },
    { value: '₹78,000', what: 'PM Surya Ghar subsidy (1 crore homes)' }, { value: '60%', what: 'PM-KUSUM pump subsidy' },
    { value: '7,516.6 km', what: 'India coastline' }, { value: '35–50% / 50–60%', what: 'Wind capacity factor onshore / offshore (L32)' },
    { value: '15–16%', what: 'Hydro share of world electricity' }, { value: '90%+', what: 'Hydro efficiency' },
    { value: '320,000', what: 'Displaced by Sardar Sarovar' }, { value: '80–95%', what: 'Geothermal capacity factor' },
    { value: '20% / 47%', what: 'Geothermal share: Iceland / Kenya' }
  ],
  traps: [
    `<p>Most common geothermal plant is <b>flash steam</b>; the oldest is <b>dry steam</b>.</p>`,
    `<p>PM Surya Ghar is <b>rooftop homes</b>; PM-KUSUM is <b>farm pumps</b>.</p>`,
    `<p>Offshore wind policy <b>2015</b>, wind-solar hybrid policy <b>2018</b>.</p>`,
    `<p>Wind capacity factor: Lecture 32 says 35–50%, Lecture 33 says 25–40%. Wind is above solar either way.</p>`,
    `<p>The <b>western</b> coast suits wind; the eastern is cyclone-prone.</p>`
  ]
});
