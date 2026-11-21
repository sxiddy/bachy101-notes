FAST({
  module: 'm1',
  minutes: 25,
  hy: ['m1-evs-intro', 'm1-earth-spheres', 'm1-ecosystem-components', 'm1-ecological-pyramids', 'm1-energy-flow', 'm1-nutrient-cycles'],
  facts: [
    { t: 'm1-evs-intro', star: true, html: 'EVS is <b>multidisciplinary</b>: combines biology, chemistry, geography, economics, law and more.' },
    { t: 'm1-earth-spheres', star: true, html: 'Earth has four spheres: <b>atmosphere</b> (air), <b>hydrosphere</b> (water), <b>lithosphere</b> (land), <b>biosphere</b> (life).' },
    { t: 'm1-earth-spheres', star: true, html: 'Air is about <b>78% nitrogen</b> and <b>21% oxygen</b>.' },
    { t: 'm1-earth-spheres', star: false, html: 'Atmosphere layers from the ground up: <b>troposphere</b> (weather), <b>stratosphere</b> (ozone layer), mesosphere, thermosphere.' },
    { t: 'm1-ecosystem-basics', star: true, html: 'An <b>ecosystem</b> is the living (biotic) and non-living (abiotic) parts of an area interacting.' },
    { t: 'm1-ecosystem-components', star: true, html: '<b>Producers</b> make food (plants, algae); <b>consumers</b> eat others; <b>decomposers</b> (bacteria, fungi) break down dead matter.' },
    { t: 'm1-ecosystem-basics', star: false, html: '<b>Population</b> = one species; <b>community</b> = many species living together.' },
    { t: 'm1-food-chains', star: false, html: 'A <b>food chain</b> is one feeding path; a <b>food web</b> is many connected chains and is more stable.' },
    { t: 'm1-food-chains', star: false, html: 'The <b>grazing chain</b> starts with green plants; the <b>detritus chain</b> starts with dead matter.' },
    { t: 'm1-energy-flow', star: true, html: 'Energy flows <b>one way</b> (sun → producers → consumers), but nutrients <b>cycle</b>.' },
    { t: 'm1-energy-flow', star: true, html: '<b>10% law</b>: only about 10% of energy passes to the next level, so food chains are short.' },
    { t: 'm1-ecological-pyramids', star: true, html: 'The <b>pyramid of energy</b> is always upright; pyramids of numbers and biomass can be inverted.' },
    { t: 'm1-nutrient-cycles', star: false, html: '<b>Nitrogen fixation</b> turns N₂ into usable forms (Rhizobium in legume root nodules).' },
    { t: 'm1-nutrient-cycles', star: false, html: 'The <b>phosphorus cycle</b> has no gas phase.' },
    { t: 'm1-energy-applications', star: false, html: '<b>Biomagnification</b>: toxins like DDT build up as you go up the food chain.' },
    { t: 'm1-succession', star: false, html: 'Succession: <b>primary</b> starts on bare rock with lichens; <b>secondary</b> starts on disturbed soil and is faster; both end in a <b>climax community</b>.' }
  ],
  mcqs: ['m1-q-01', 'm1-q-13', 'm1-q-22', 'm1-q-02', 'm1-q-33', 'm1-q-05', 'm1-q-06', 'm1-q-43', 'm1-q-49', 'm1-q-08']
});
