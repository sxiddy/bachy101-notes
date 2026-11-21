FAST({
  module: 'm3',
  minutes: 30,
  hy: ['m3-air-basics', 'm3-air-pollutants', 'm3-air-causes-effects', 'm3-air-control', 'm3-water-control', 'm3-noise-pollution', 'm3-waste-treatment'],
  facts: [
    { t: 'm3-air-basics', star: false, html: 'WHO: air pollution causes about <b>7 million</b> deaths a year (3.8 M from indoor air); AQI 450 is <b>hazardous</b>.' },
    { t: 'm3-air-pollutants', star: true, html: 'Ground-level <b>ozone</b> is a secondary pollutant; stratospheric ozone protects us.' },
    { t: 'm3-air-pollutants', star: false, html: 'CO binds haemoglobin about <b>200×</b> more strongly than O₂; <b>radon</b> is the second cause of lung cancer.' },
    { t: 'm3-air-causes-effects', star: true, html: 'Rain is <b>acid rain</b> when pH is below <b>5.6</b>; the <b>Montreal Protocol</b> phased out CFCs.' },
    { t: 'm3-air-control', star: true, html: 'Cyclones remove large particles; <b>baghouses</b> (fabric bags) catch the fine ones.' },
    { t: 'm3-air-control', star: false, html: 'The Air Act is <b>1981</b> and the Water Act <b>1974</b>; NCAP (2019) targets a 20–30% PM cut, with <b>122</b> non-attainment cities.' },
    { t: 'm3-water-basics', star: false, html: 'WHO safe drinking water pH is <b>6.5–8.5</b>; farm and stormwater runoff is <b>non-point source</b> pollution.' },
    { t: 'm3-water-causes-effects', star: false, html: 'Excess <b>nitrates</b> cause blue baby syndrome; excess N and P cause <b>eutrophication</b>.' },
    { t: 'm3-water-control', star: true, html: 'Secondary sewage treatment is <b>biological</b> and removes <b>85–95%</b> of BOD.' },
    { t: 'm3-water-control', star: false, html: '<b>Minamata disease</b> was caused by methylmercury; Zero Liquid Discharge means recycling all wastewater.' },
    { t: 'm3-noise-pollution', star: true, html: 'Prolonged noise above <b>85 dB</b> damages hearing; <b>120 dB</b> harms immediately; conversation is about 50 dB.' },
    { t: 'm3-noise-effects', star: false, html: 'India\'s noise rules were notified in <b>2000</b>; persistent ear ringing is <b>tinnitus</b>.' },
    { t: 'm3-thermal-pollution', star: false, html: 'Thermal pollution is <b>heat contamination</b>, and can be a sudden temperature drop too; warmer water holds less oxygen.' },
    { t: 'm3-water-conservation', star: false, html: 'Agriculture uses about <b>70%</b> of freshwater; reusing bath and kitchen water is <b>greywater reuse</b>.' },
    { t: 'm3-solid-waste', star: false, html: 'The linear economy is <b>take, make, dispose</b>; India makes about <b>62 Mt</b> of MSW a year.' },
    { t: 'm3-waste-treatment', star: true, html: 'In the 3Rs, <b>Reduce</b> comes first and <b>Recycle</b> last; anaerobic digestion gives biogas and digestate.' },
    { t: 'm3-iswm', star: false, html: '<b>Kalundborg</b>, Denmark shows industrial symbiosis; SWM Rules 2016 made <b>source segregation</b> mandatory.' }
  ],
  mcqs: ['m3-q-01', 'm3-q-02', 'm3-q-12', 'm3-q-03', 'm3-q-04', 'm3-q-22', 'm3-q-07', 'm3-q-28', 'm3-q-08', 'm3-q-10']
});
