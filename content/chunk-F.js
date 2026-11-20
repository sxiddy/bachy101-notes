CHUNK({
  chunk: 'F',
  module: 'm2',
  topics: [
    {
      id: 'm2-hazards-intro',
      title: 'Environmental hazards: meaning and types',
      short: 'Hazards and types',
      blurb: 'What environmental hazards are, natural vs anthropogenic, risk, the four major types, and the kinds of physical hazard.',
      source: 'Lecture W2S5 (Environmental hazards), pages 1–4',
      tabs: [
        { title: 'Why study hazards', html: `
          <p class="lead">Industrialisation, urbanisation and technology raised hazard <b>frequency, intensity and impact</b>.</p>
          <ul>
            <li>Examples: urban <b>air pollution</b>; climate-induced <b>floods, droughts, wildfires</b>.</li>
            <li>Study helps: <b>identify risks</b>, <b>mitigate and manage</b> them, adopt <b>sustainable practices</b>.</li>
            <li><b>Interconnected</b>: deforestation → soil erosion → floods; emissions → air pollution → respiratory disease, climate change.</li>
          </ul>
          <div class="note exam"><b>Risk</b> = <b>probability of a hazard causing harm</b>; depends on hazard <b>magnitude</b> and <b>vulnerability</b> of those exposed.</div>
        ` },
        { title: 'Definition', html: `
          <p class="lead"><b>Environmental hazards</b>: natural or human-made events/conditions (physical, chemical, biological, social) that harm health, cause injury, damage property or degrade ecosystems.</p>
          <div class="vs">
            <div class="side"><h4>Natural hazards</h4><p>Earth processes: earthquakes, volcanoes, floods, hurricanes. Inevitable; humans can <b>amplify impact</b>.</p></div>
            <div class="side"><h4>Anthropogenic hazards</h4><p>Human actions: industrial pollution, deforestation, improper waste disposal, resource overuse.</p></div>
          </div>
          <p>Harm: ecosystem damage, human/animal health problems, economic loss, long-term degradation.</p>
        ` },
        { title: 'Four major types', html: `
          <table class="tbl">
            <thead><tr><th>Type</th><th>Nature</th><th>Examples</th></tr></thead>
            <tbody>
              <tr><td><b>Physical</b></td><td>Natural forces, radiation</td><td>Earthquakes, floods, hurricanes, landslides, volcanoes, wildfires, UV, extreme temperature, noise</td></tr>
              <tr><td><b>Chemical</b></td><td>Toxic substances</td><td>Industrial pollutants, pesticides, heavy metals, BPA, phthalates, synthetic dyes, pharmaceutical waste, solvents</td></tr>
              <tr><td><b>Biological</b></td><td>Living organisms/agents</td><td>Bacteria (TB, cholera), viruses (COVID-19, dengue), parasites (malaria, filariasis), fungi, prions, toxins</td></tr>
              <tr><td><b>Sociological</b></td><td>Social, economic, behavioural</td><td>Poverty, malnutrition, armed conflict, unsafe work, no healthcare, substance abuse, inequality</td></tr>
            </tbody>
          </table>
          <div class="mnemonic">P-C-B-S: Physical, Chemical, Biological, Sociological.</div>
        ` },
        { title: 'Physical hazards', html: `
          <p>Natural disasters causing physical damage; <b>climate change</b> raises frequency and intensity.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Geological</b></td><td>Earthquakes, tsunamis, volcanoes, landslides</td></tr>
              <tr><td><b>Meteorological</b></td><td>Hurricanes/cyclones, tornadoes, blizzards, extreme heat/cold</td></tr>
              <tr><td><b>Hydrological</b></td><td>Floods, storm surges, droughts</td></tr>
              <tr><td><b>Radiation</b></td><td>UV (skin cancer), ionising (nuclear accidents), radon gas</td></tr>
              <tr><td><b>Noise</b></td><td>Occupational hearing loss; cardiovascular disease (chronic noise)</td></tr>
            </tbody>
          </table>
        ` }
      ],
      flashcards: [
        { front: 'Define risk (hazards).', back: 'The <b>probability of a hazard causing harm</b>; depends on hazard magnitude and vulnerability.' },
        { front: 'Four major types of environmental hazard?', back: '<b>Physical, chemical, biological, sociological</b>.' },
        { front: 'Natural vs anthropogenic hazard?', back: 'Natural: Earth processes (earthquakes, floods). Anthropogenic: human actions (pollution, deforestation).' },
        { front: 'Give a sociological hazard.', back: 'Poverty, malnutrition, armed conflict, unsafe work, lack of healthcare, substance abuse, inequality.' },
        { front: 'Radon gas is which kind of physical hazard?', back: '<b>Radiation</b> hazard.' },
        { front: 'Tsunami: geological, meteorological or hydrological?', back: '<b>Geological</b>.' }
      ],
      oneLiners: [
        'Hazards are interconnected: deforestation → erosion → floods.',
        'Storm surges and droughts are hydrological hazards.',
        'Chronic noise can cause cardiovascular disease.',
        'Human activity can amplify natural hazards.'
      ],
      formulas: []
    },
    {
      id: 'm2-chemical-hazards',
      title: 'Chemical hazards, phthalates and green chemistry',
      short: 'Chemical hazards',
      blurb: 'Sources of chemical hazards, routes into the body, how chemicals harm, the phthalates case study, green chemistry and the main regulations.',
      source: 'Lecture W2S5 (Environmental hazards), pages 4–8, 14; Lecture W2 (Chemical hazards), page 1',
      tabs: [
        { title: 'What they are', html: `
          <p class="lead"><b>Chemical hazard</b>: any <b>non-biological substance</b> harmful to life/health, human or natural origin.</p>
          <ul>
            <li>Heavy metals, pesticides, toxic waste, industrial/home chemicals.</li>
            <li>Health: <b>irritation, sensitisation, carcinogenicity</b>. Physical: <b>flammability, corrosion</b>.</li>
            <li>Air: <b>CO, SO₂, NOx</b>. Water: <b>lead, mercury, arsenic</b>. Soil: pesticides, industrial waste.</li>
          </ul>
        ` },
        { title: 'Sources', html: `
          <table class="tbl">
            <tbody>
              <tr><td>Industrial</td><td>Effluents, mining runoff, solvents, acids, heavy metals</td></tr>
              <tr><td>Agricultural</td><td>Pesticides (organochlorines, organophosphates), herbicides, fertilisers</td></tr>
              <tr><td>Consumer products</td><td>Plastics (<b>BPA</b>), personal care (<b>phthalates, parabens</b>), cosmetics</td></tr>
              <tr><td>Food industry</td><td>Dyes (<b>tartrazine, sunset yellow</b>), preservatives, food-contact materials</td></tr>
              <tr><td>Pharmaceuticals</td><td>Drugs in wastewater: <b>emerging contaminants</b></td></tr>
              <tr><td>Fossil fuels</td><td>PAHs, benzene, toluene, lead</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Routes and harm', html: `
          <table class="tbl">
            <thead><tr><th>Route</th><th>How</th><th>Examples</th></tr></thead>
            <tbody>
              <tr><td>Inhalation</td><td>Air</td><td>Factory workers, air pollution, indoor combustion</td></tr>
              <tr><td>Ingestion</td><td>Food/drink</td><td>Contaminated food/water, children swallowing</td></tr>
              <tr><td>Dermal</td><td>Skin</td><td>Pesticide spraying, solvents, cosmetics</td></tr>
              <tr><td>Transplacental</td><td>Mother to foetus</td><td>EDCs cross placenta in critical window</td></tr>
              <tr><td>Ocular</td><td>Eye</td><td>Acid splashes, aerosols</td></tr>
            </tbody>
          </table>
          <h4>Mechanisms of harm</h4>
          <ol>
            <li><b>Endocrine disruption</b>: mimic/block hormones.</li>
            <li><b>Carcinogenesis</b>: DNA damage, adducts, epigenetic changes.</li>
            <li><b>Neurotoxicity</b>: lead, methylmercury, organophosphates.</li>
            <li><b>Organ toxicity</b>: liver (hepatotoxins), kidneys (nephrotoxins), lungs.</li>
            <li><b>Reproductive toxicity</b>: gametes, fertility, foetus.</li>
            <li><b>Immunotoxicity</b>: dioxins, PCBs.</li>
          </ol>
        ` },
        { title: 'Phthalates', html: `
          <p class="lead"><b>Phthalates</b> (phthalic acid esters): <b>plasticisers</b> softening PVC; <b>25–50%</b> of flexible PVC by weight; <b>8 million tonnes</b>+/year. Not bonded, so <b>leach continuously</b>.</p>
          <ul>
            <li>Sources: vinyl flooring, shower curtains, hoses, artificial leather; IV bags/tubing (<b>DEHP</b>, most studied); perfumes, nail polish (<b>DBP</b>); soft toys, teethers; food wraps; wall coverings (dust).</li>
            <li><b>Anti-androgenic</b>: block testosterone receptors (BPA is oestrogenic).</li>
            <li>Males: lower testosterone, sperm quality; "<b>phthalate syndrome</b>" in animals (undescended testes, hypospadias, reduced anogenital distance).</li>
            <li>Also: premature birth, endometriosis, thyroid, ADHD, autism, lower IQ, asthma, allergic rhinitis.</li>
          </ul>
          <table class="tbl">
            <tbody>
              <tr><td>EU</td><td>DEHP, DBP, BBP, DIBP banned (&gt;0.1%) in all articles; DINP, DIDP, DNOP restricted in childcare</td></tr>
              <tr><td>USA (CPSIA)</td><td>8 phthalates banned (&gt;0.1%) in toys, childcare</td></tr>
              <tr><td>India</td><td>Incomplete; draft toy notification</td></tr>
              <tr><td>Alternatives</td><td>DINCH (Hexamoll), citrates (tributyl citrate), adipates, soybean/sunflower bio-plasticisers</td></tr>
            </tbody>
          </table>
          <div class="note heads-up">Lecture: BPA = "Case Study 1", phthalates = "Case Study 3"; no Case Study 2. Synthetic dyes only in summary: azo dyes release <b>carcinogenic aromatic amines</b>.</div>
        ` },
        { title: 'Green chemistry and laws', html: `
          <ul>
            <li><b>Green chemistry (12 principles)</b>: design out hazardous substances from the start.</li>
            <li>Substitutes: BPA-free glass, steel, Tritan; phthalate-free DINCH, citrates, soy/sunflower plasticisers.</li>
            <li><b>Natural dyes</b>: indigo, henna, turmeric, madder, woad. <b>Safer food colours</b> (FSSAI, EU approved): spirulina (blue), annatto (orange), turmeric (yellow), beetroot (red).</li>
          </ul>
          <table class="tbl">
            <tbody>
              <tr><td><b>REACH</b> (EU)</td><td>Registration, Evaluation, Authorisation and Restriction of Chemicals; world's most comprehensive</td></tr>
              <tr><td><b>Precautionary Principle</b></td><td>Restrict <b>before definitive proof of harm</b>; burden of proof on industry</td></tr>
              <tr><td><b>WHO IHR (2005)</b></td><td>Binding: detect, report, respond to health emergencies</td></tr>
              <tr><td>India</td><td>Environment Protection Act 1986, Drugs and Cosmetics Act, BIS (food-contact plastics), FSSAI (additives)</td></tr>
            </tbody>
          </table>
        ` }
      ],
      flashcards: [
        { front: 'Five routes of chemical exposure?', back: '<b>Inhalation, ingestion, dermal, transplacental, ocular</b>.' },
        { front: 'Phthalates are anti-___; BPA is ___.', back: 'Anti-<b>androgenic</b>; <b>oestrogenic</b>.' },
        { front: 'Share of flexible PVC that is phthalate?', back: '<b>25–50%</b> by weight.' },
        { front: 'Most studied phthalate, used in IV bags?', back: '<b>DEHP</b>.' },
        { front: 'What does REACH stand for?', back: '<b>Registration, Evaluation, Authorisation and Restriction of Chemicals</b> (EU).' },
        { front: 'Precautionary Principle?', back: 'Restrict before definitive proof of harm; <b>burden of proof on industry</b>.' },
        { front: 'Pharmaceuticals in wastewater are called…', back: '<b>Emerging contaminants</b>.' }
      ],
      oneLiners: [
        'Immunotoxic examples: dioxins and PCBs.',
        'Neurotoxins: lead, methylmercury, organophosphates.',
        'USA CPSIA bans 8 phthalates above 0.1% in toys.',
        'Green chemistry has 12 principles.'
      ],
      formulas: []
    },
    {
      id: 'm2-bpa',
      title: 'Bisphenol A (BPA)',
      short: 'Bisphenol A',
      blurb: 'What BPA is and where it is used, how it acts in the body, its health and environmental effects, regulations, and how to limit exposure.',
      source: 'Lecture W2S5 (Environmental hazards), pages 5–7; Lecture W2 (Chemical hazards: BPA, mercury), pages 1–4',
      tabs: [
        { title: 'What it is', html: `
          <p class="lead"><b>BPA</b>: <b>synthetic oestrogen</b>, <b>EDC</b>; in polycarbonates and epoxy resins since the <b>1960s</b>; <b>8 million tonnes</b>+/year.</p>
          <ul>
            <li><b>Colourless solid</b>; soluble in organic solvents, poorly in water.</li>
            <li><b>Polycarbonates</b> (co-monomer): <b>65–70%</b>; <b>epoxy and vinyl ester resins</b>: <b>25–30%</b>.</li>
            <li>Polycarbonate: food/drink containers, bottles. Epoxy: can linings, bottle tops, water lines.</li>
          </ul>
        ` },
        { title: 'Where we meet it', html: `
          <ul>
            <li>Polycarbonate bottles (<b>plastic #7</b>): <b>leaches when heated</b>.</li>
            <li>Can linings (epoxy).</li>
            <li><b>Thermal paper</b> (ATM receipts, boarding passes, tickets, carbonless copy paper): via skin.</li>
            <li>Baby bottles (banned EU, US, Canada, India), dental sealants, CDs/DVDs, medical devices, storage containers.</li>
            <li>Also: toiletries, menstrual products, electronics, eyeglass lenses, sports gear, PCB laminates, paints, adhesives.</li>
          </ul>
          <p><b>Diet is the main route</b>; more leaching with harsh detergents, acidic/hot liquids, old resin-coated pipes. Bioaccumulates in water and aquatic life.</p>
        ` },
        { title: 'How it acts', html: `
          <ul>
            <li>Binds oestrogen receptors <b>ERα and ERβ</b> at <b>picomolar</b> levels.</li>
            <li>Mimics and blocks oestrogen: <b>SERM</b> (selective oestrogen receptor modulator), partial agonist.</li>
            <li>High doses: <b>androgen receptor antagonist</b>.</li>
          </ul>
          <figure data-fig="m2-bpa-mechanism"></figure>
          <div class="note exam"><b>Low-dose hypothesis</b>: acts far below "safe" levels; even nanomolar, in sensitive developmental windows.</div>
        ` },
        { title: 'Health effects', html: `
          <ul>
            <li><b>Hormonal</b>: early puberty (girls), low sperm count/quality, impotence.</li>
            <li><b>Cancer</b>: breast, prostate.</li>
            <li><b>Metabolic</b>: obesity, insulin resistance, <b>type 2 diabetes</b> (without weight change).</li>
            <li><b>Cardiovascular</b>: hypertension, coronary artery disease.</li>
            <li><b>Thyroid</b>: binds thyroid receptor; raised <b>TSH</b>.</li>
            <li><b>Neurological</b>: anxiety, aggression, poor memory (animals), depression, Alzheimer's.</li>
            <li><b>Reproductive</b>: <b>PCOS</b>, endometriosis, infertility. Prenatal: reduced lung capacity, wheezing, asthma → baby-bottle ban.</li>
            <li>Also: allergies, inflammation, childhood asthma, immunity.</li>
          </ul>
          <figure data-fig="m2-bpa-health"></figure>
        ` },
        { title: 'Environment', html: `
          <ul>
            <li>Half-life <b>4.5 days soil/water, under 1 day air</b>; ubiquitous, so still important.</li>
            <li>Low evaporation keeps it around despite biodegradability.</li>
            <li>Interferes with <b>nitrogen fixation</b> in some legume roots.</li>
            <li>Harms aquatic life, esp. <b>fish</b>; endocrine effects in invertebrates, amphibians, reptiles; genetic aberrations in land animals, insects.</li>
          </ul>
        ` },
        { title: 'Rules and limiting it', html: `
          <table class="tbl">
            <tbody>
              <tr><td>EU</td><td>Baby bottles (<b>2011</b>); all food-contact (<b>2022</b>)</td></tr>
              <tr><td>USA (FDA)</td><td>Baby bottles, sippy cups (<b>2012</b>); food contact under review</td></tr>
              <tr><td>Canada</td><td>"Toxic" under CEPA 1999; baby bottles (<b>2010</b>)</td></tr>
              <tr><td>India</td><td><b>BIS</b> restricted in infant bottles; still developing</td></tr>
              <tr><td>Alternatives</td><td>Tritan (Eastman), glass, stainless steel, BPA-free epoxy (BPS/BPF, debated)</td></tr>
            </tbody>
          </table>
          <h4>Steps to limit BPA</h4>
          <ul>
            <li>Fresh food, not plastic- or can-stored.</li>
            <li>Tea/coffee in metal or ceramic, not plastic.</li>
            <li>Water in glass/steel bottles.</li>
            <li>Microwave in glass, not plastic.</li>
            <li>Metal/ceramic plates.</li>
            <li>Cotton toys, not plastic.</li>
          </ul>
          <figure data-fig="m2-bpa-steps"></figure>
        ` }
      ],
      flashcards: [
        { front: 'Share of BPA used for polycarbonates?', back: '<b>65–70%</b> (epoxy and vinyl ester resins 25–30%).' },
        { front: 'Receptors BPA binds?', back: 'Oestrogen receptors <b>ERα and ERβ</b>; androgen receptor antagonist at high doses.' },
        { front: 'BPA half-life in soil/water vs air?', back: '<b>4.5 days</b> vs <b>under 1 day</b>.' },
        { front: 'Main route of human BPA exposure?', back: '<b>Diet</b> (contaminated food and water).' },
        { front: 'EU bans on BPA: years?', back: 'Baby bottles <b>2011</b>; all food-contact materials <b>2022</b>.' },
        { front: 'What is the low-dose hypothesis?', back: 'BPA acts at levels far below "safe" limits, even nanomolar.' },
        { front: 'Plastic number for polycarbonate bottles?', back: '<b>#7</b>.' }
      ],
      oneLiners: [
        'BPA is a SERM: it can mimic and block oestrogen.',
        'Thermal receipts pass BPA through the skin.',
        'BPA interferes with nitrogen fixation in legumes.',
        'USA banned BPA in baby bottles in 2012; Canada in 2010.'
      ],
      formulas: []
    },
    {
      id: 'm2-mercury',
      title: 'Heavy metals and mercury',
      short: 'Mercury poisoning',
      blurb: 'Heavy metal poisoning, the three forms of mercury, its uses and sources, the mercury cycle, how it harms the body, Minamata disease and treatment.',
      source: 'Lecture W2 (Chemical hazards: BPA, mercury), pages 4–6',
      tabs: [
        { title: 'Heavy metals', html: `
          <p class="lead"><b>Heavy metal poisoning</b>: excess heavy metal disturbing body function.</p>
          <ul>
            <li><b>Lead, mercury, arsenic, cadmium, chromium</b>.</li>
            <li>Via diet, medicines, environment, work, play; through <b>skin, inhalation, ingestion</b>.</li>
            <li><b>Acute</b> (sudden, severe) or <b>chronic</b> (over time).</li>
          </ul>
        ` },
        { title: 'Mercury basics', html: `
          <ul>
            <li><b>Transition series</b> metal; <b>liquid at room temperature</b>, high vapour pressure, released as <b>vapour</b>.</li>
            <li>Three forms: <b>elemental, organic, inorganic</b>; differing toxicity.</li>
            <li>Oxidation states: <b>+1, +2</b>.</li>
            <li><b>Methylmercury</b>: commonest organic form; microbes <b>methylate inorganic mercury</b>.</li>
            <li>Ubiquitous; exposure hard to avoid.</li>
          </ul>
          <figure data-fig="m2-mercury-cycle"></figure>
        ` },
        { title: 'Uses and sources', html: `
          <p><b>Uses</b>: switches, thermostats, batteries, dental fillings, caustic soda, nuclear reactors, wood anti-fungals, solvent for reactive/precious metals.</p>
          <table class="tbl">
            <thead><tr><th>Use (pie chart)</th><th>Share</th></tr></thead>
            <tbody>
              <tr><td>Artisanal and small-scale gold mining</td><td>22%</td></tr>
              <tr><td>Vinyl chloride monomer</td><td>21%</td></tr>
              <tr><td>Chlor-alkali</td><td>13%</td></tr>
              <tr><td>Batteries / Dental amalgam / Measuring devices</td><td>9% each</td></tr>
              <tr><td>Other</td><td>8%</td></tr>
              <tr><td>Electronic equipment</td><td>5%</td></tr>
              <tr><td>Lamps</td><td>4%</td></tr>
            </tbody>
          </table>
          <ul>
            <li>Sources: accidents, pollution, food, dental care, industry, agriculture (non-ferrous metals, <b>cement</b>).</li>
            <li>Chronic low-level: <b>dental amalgams (50% elemental mercury)</b>, <b>fish</b>.</li>
            <li>Also: air, spills, broken <b>fluorescent lamps</b>.</li>
            <li>Human releases: <b>coal burning (half of atmospheric mercury)</b>, <b>gold mining</b>.</li>
            <li>Algae/bacteria methylate it; <b>bioaccumulates in fish</b>.</li>
            <li>Most absorbed: <b>Hg(0)</b>, <b>methylmercury</b>.</li>
          </ul>
        ` },
        { title: 'In the body', html: `
          <ol>
            <li>Elemental vapour <b>lipophilic</b>: absorbed via lungs, mouth lining.</li>
            <li>Crosses cell membranes, <b>blood-brain barrier</b>, <b>placental barrier</b>.</li>
            <li>Oxidised in cells to reactive <b>+2</b>.</li>
            <li>Methylmercury (fish): gut-absorbed, crosses both barriers.</li>
            <li>Low excretion; accumulates in <b>kidneys, nerve tissue, liver</b>: gut toxicity, neurotoxicity, nephrotoxicity.</li>
          </ol>
          <div class="note exam">Binds <b>free thiol (–SH) groups</b> of cysteine. Target organ: <b>brain</b>.</div>
        ` },
        { title: 'Effects and treatment', html: `
          <ul>
            <li>Damages nerves, kidneys, muscles; microtubule destruction, mitochondrial damage, lipid peroxidation.</li>
            <li>Symptoms (by type, dose, duration): peripheral neuropathy, <b>pink skin</b>, swelling, desquamation (peeling).</li>
            <li>High exposure: <b>Minamata disease</b>.</li>
            <li><b>Acrodynia (pink disease)</b>: pink peeling skin, kidney problems, decreased intelligence.</li>
          </ul>
          <h4>Prevention and treatment</h4>
          <ul>
            <li>Remove/reduce exposure.</li>
            <li>Spills: <b>powdered sulfur</b> → easy-to-dispose solid.</li>
            <li><b>Decontaminate</b>: remove clothes, soap-wash skin, saline eye flush.</li>
            <li><b>Chelation</b>: <b>DMSA</b>, other sulfur compounds (inorganic, severe).</li>
          </ul>
        ` }
      ],
      flashcards: [
        { front: 'Three forms of mercury?', back: '<b>Elemental, organic, inorganic</b>.' },
        { front: 'How is methylmercury formed?', back: 'Microbes in soil and water <b>methylate inorganic mercury</b>.' },
        { front: 'Share of atmospheric mercury from burning coal?', back: '<b>Half</b>.' },
        { front: 'Mercury content of dental amalgam?', back: '<b>50% elemental mercury</b>.' },
        { front: 'Largest use of mercury in the pie chart?', back: '<b>Artisanal and small-scale gold mining, 22%</b>.' },
        { front: 'What does mercury bind in the body?', back: '<b>Free thiol groups</b> (cysteine).' },
        { front: 'Chelating agent for mercury poisoning?', back: '<b>DMSA</b>.' },
        { front: 'What is applied to a mercury spill?', back: '<b>Powdered sulfur</b>.' }
      ],
      oneLiners: [
        'Mercury crosses the blood-brain and placental barriers.',
        'Acrodynia = pink disease.',
        'Minamata disease comes from high mercury exposure.',
        'Mercury bioaccumulates in fish.'
      ],
      formulas: []
    },
    {
      id: 'm2-biological-hazards',
      title: 'Biological hazards: malaria and COVID-19',
      short: 'Malaria and COVID-19',
      blurb: 'Types of biological hazard, the malaria case study (parasite, life cycle, symptoms, control) and the COVID-19 case study (virus, spread, severity, variants, control).',
      source: 'Lecture W2S5 (Environmental hazards), pages 9–14',
      tabs: [
        { title: 'Types', html: `
          <p class="lead"><b>Biological hazards</b>: microorganisms, toxins, allergens that infect, poison or sensitise.</p>
          <table class="tbl">
            <thead><tr><th>Type</th><th>Examples</th><th>Spread</th></tr></thead>
            <tbody>
              <tr><td>Viral</td><td>COVID-19, dengue, Ebola, HIV, influenza, hepatitis</td><td>Airborne, droplets, blood, vectors</td></tr>
              <tr><td>Bacterial</td><td>TB, cholera, typhoid, plague</td><td>Air, water, food, contact</td></tr>
              <tr><td>Parasitic</td><td>Malaria, filariasis, toxoplasmosis, leishmaniasis</td><td>Vectors, water, food</td></tr>
              <tr><td>Fungal</td><td>Candidiasis, aspergillosis, dermatophytosis</td><td>Spores, contact, immunocompromised</td></tr>
              <tr><td>Prion</td><td>CJD, BSE (mad cow)</td><td>Food, medical procedures</td></tr>
              <tr><td>Biological toxins</td><td>Aflatoxin, botulinum, mycotoxins</td><td>Food, environment</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Malaria', html: `
          <p class="lead"><b><em>Plasmodium</em></b> protozoa via infected <b>female <em>Anopheles</em></b>. WHO 2022: <b>249 million cases, 608,000 deaths</b>; 76% of deaths under-5s in sub-Saharan Africa.</p>
          <table class="tbl">
            <tbody>
              <tr><td><em>P. falciparum</em></td><td><b>Most lethal</b>: cerebral malaria, severe anaemia; <b>&gt;90% of deaths</b></td></tr>
              <tr><td><em>P. vivax</em></td><td><b>Most widespread</b>; relapses (liver <b>hypnozoites</b>); South Asia, Latin America</td></tr>
              <tr><td><em>P. malariae</em></td><td>Chronic, rare; kidney damage</td></tr>
              <tr><td><em>P. ovale</em></td><td>West Africa; relapses like vivax</td></tr>
              <tr><td><em>P. knowlesi</em></td><td>Zoonotic, macaques, Southeast Asia; can be fatal</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Malaria cycle', html: `
          <div class="steps">
            <div><b>Liver stage (exo-erythrocytic)</b>: sporozoites → liver cells → merozoites (<b>7–10 days</b>).</div>
            <div><b>Blood stage (erythrocytic)</b>: RBCs → ring → trophozoite → schizont → burst; every <b>48–72 h</b> (fever spikes).</div>
            <div><b>Gametocytes</b>: mosquito gut fertilisation → oocyst → sporozoites in salivary glands → next human.</div>
          </div>
          <h4>Symptoms</h4>
          <ul>
            <li>Fever <b>39–41°C</b>, chills, <b>48-h cycles</b>; haemolytic <b>anaemia</b> (weakness, pallor); <b>splenomegaly</b> (enlarged spleen).</li>
            <li>Severe (falciparum): cerebral malaria (coma, seizures), Hb &lt;7 g/dL, respiratory distress, hypoglycaemia, organ failure; fatal in <b>24 h</b> untreated.</li>
            <li>Pregnancy: placental malaria, maternal death, low birth weight, stillbirth.</li>
          </ul>
          <div class="note heads-up">Lecture writes "oocyte"; correct term is <b>oocyst</b>.</div>
        ` },
        { title: 'Malaria control', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>ITNs</b></td><td>Cut transmission <b>50%</b>; LLINs last <b>3–5 years</b></td></tr>
              <tr><td><b>IRS</b></td><td>Indoor residual insecticide (DDT, pyrethroids)</td></tr>
              <tr><td>Larval source management</td><td>Drain stagnant water; <em>Bacillus thuringiensis israelensis</em></td></tr>
              <tr><td><b>ACTs</b></td><td>WHO first-line: artesunate + amodiaquine/lumefantrine</td></tr>
              <tr><td>Chemoprophylaxis</td><td>Chloroquine, doxycycline, Malarone (travellers)</td></tr>
              <tr><td><b>RTS,S/AS01 (Mosquirix)</b></td><td>First WHO vaccine (<b>2021</b>); 30–40% vs severe malaria in children</td></tr>
              <tr><td><b>R21/Matrix-M</b></td><td>Second (<b>2023</b>, Oxford-Serum Institute); 75%+ in trials</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'COVID-19', html: `
          <p class="lead"><b>SARS-CoV-2</b> (betacoronavirus), <b>Wuhan, December 2019</b>; pandemic <b>11 March 2020</b>. By 2024: <b>700+ million cases</b>, ~<b>7 million</b> deaths (true 15–20 million).</p>
          <ul>
            <li><b>Positive-sense ssRNA</b>, ~<b>30 kb</b>, enveloped, <b>spike (S)</b> crown.</li>
            <li>Spike binds <b>ACE2</b> (lung, heart, kidney, gut); S1 binds, S2 fuses, <b>TMPRSS2</b> primes.</li>
            <li><b>RdRp</b> copies genome; blocked by <b>Remdesivir</b>.</li>
            <li>Spread: mainly indoor <b>aerosols</b>; droplets within 1 m; fomites minor.</li>
            <li>Incubation 2–14 days (original), 1–3 (Omicron). <b>R₀</b>: original ~2–3, Delta ~5–6, Omicron ~9–12.</li>
          </ul>
          <table class="tbl">
            <thead><tr><th>Severity</th><th>Share</th><th>Features</th></tr></thead>
            <tbody>
              <tr><td>Asymptomatic</td><td>~35–45%</td><td>Can still transmit</td></tr>
              <tr><td>Mild/moderate</td><td>~50–55%</td><td>Fever, cough, fatigue, smell loss, muscle pain</td></tr>
              <tr><td>Severe</td><td>~5%</td><td>Pneumonia, O₂ &lt;94%, hospital</td></tr>
              <tr><td>Critical</td><td>~1–2%</td><td>ARDS, septic shock, organ failure, ventilation</td></tr>
              <tr><td>Long COVID</td><td>10–35% of recovered</td><td>Fatigue, brain fog, breathlessness, tachycardia</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Variants and control', html: `
          <table class="tbl">
            <thead><tr><th>Variant</th><th>Origin</th><th>Key feature</th></tr></thead>
            <tbody>
              <tr><td>Alpha (B.1.1.7)</td><td>UK, Dec 2020</td><td>~70% more transmissible</td></tr>
              <tr><td>Beta (B.1.351)</td><td>South Africa, Dec</td><td>Lower vaccine effectiveness; not dominant</td></tr>
              <tr><td>Delta (B.1.617.2)</td><td>India, Oct 2020</td><td>Most severe wave; 50%+ more hospitalisation</td></tr>
              <tr><td>Omicron (B.1.1.529)</td><td>South Africa, Nov</td><td>~10× transmissible, immune evasion, milder; BA.4, BA.5, XBB</td></tr>
            </tbody>
          </table>
          <ul>
            <li><b>Vaccines</b>: mRNA (Pfizer-BioNTech, Moderna: 90%+ vs original), viral vector (AstraZeneca, J&amp;J), inactivated (Covaxin, Sinovac), protein subunit (Novavax).</li>
            <li><b>NPIs</b>: masks (N95 cuts aerosol inhalation &gt;90%), distancing, HEPA, ventilation.</li>
            <li><b>Antivirals</b>: Paxlovid (89% fewer hospitalisations), Remdesivir, Molnupiravir. <b>Monoclonal antibodies</b>: largely ineffective vs Omicron subvariants.</li>
            <li>Public health: contact tracing (<b>Aarogya Setu</b>), quarantine, border control, lab surveillance.</li>
          </ul>
          <h4>Controlling biological hazards</h4>
          <ul>
            <li><b>Integrated Vector Management</b> (ITNs + IRS + biological control).</li>
            <li>Vaccination: <b>Expanded Programme on Immunisation (EPI)</b>.</li>
            <li><b>WASH</b> (water, sanitation, hygiene): <b>single most effective</b> vs waterborne disease.</li>
            <li>Surveillance: <b>IDSP, IHIP</b> (India), genomic sequencing, WHO <b>GOARN</b>.</li>
            <li>Climate-smart health systems for shifting disease geography.</li>
          </ul>
        ` }
      ],
      flashcards: [
        { front: 'Malaria cases and deaths (WHO 2022)?', back: '<b>249 million</b> cases; <b>608,000</b> deaths.' },
        { front: 'Most lethal malaria parasite?', back: '<b><em>P. falciparum</em></b> (&gt;90% of deaths).' },
        { front: 'Why does vivax relapse?', back: 'Dormant liver stages: <b>hypnozoites</b>.' },
        { front: 'First WHO-approved malaria vaccine?', back: '<b>RTS,S/AS01 (Mosquirix)</b>, 2021.' },
        { front: 'Receptor SARS-CoV-2 binds?', back: '<b>ACE2</b>.' },
        { front: 'WHO declared COVID-19 a pandemic on…', back: '<b>11 March 2020</b>.' },
        { front: 'R₀ of Omicron?', back: '~<b>9–12</b> (original ~2–3, Delta ~5–6).' },
        { front: 'Single most effective intervention for waterborne disease?', back: '<b>WASH</b>.' }
      ],
      oneLiners: [
        'Malaria fever spikes every 48 h as RBCs burst.',
        'ITNs cut malaria transmission by 50%.',
        'Delta variant: India, Oct 2020.',
        'Paxlovid cut hospitalisations by 89%.',
        'Prions cause CJD and BSE.'
      ],
      formulas: []
    },
    {
      id: 'm2-hazard-solutions',
      title: 'Other hazards, causes, effects and solutions',
      short: 'Causes and solutions',
      blurb: 'Radiological, climatic and technological hazards, the causes and effects of environmental hazards, and the solutions from policy to personal action.',
      source: 'Lecture W2S5 (Environmental hazards), pages 14–19',
      tabs: [
        { title: 'Other hazards', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Radiological</b></td><td>Nuclear accidents, radioactive waste, medical/industrial sources; cancer, genetic mutations</td></tr>
              <tr><td><b>Climatic</b></td><td>Long-term: global warming, heatwaves, sea-level rise, extreme weather</td></tr>
              <tr><td><b>Technological</b></td><td>Oil spills, industrial accidents, chemical leaks, nuclear disasters; immediate + long-term</td></tr>
            </tbody>
          </table>
          <div class="note heads-up">Lecture lists "Climatic hazards" twice (sections 5, 7), control strategies under the first; one topic.</div>
        ` },
        { title: 'Causes', html: `
          <ol>
            <li><b>Natural</b>: tectonics, volcanoes, climate variation; preparedness reduces impact.</li>
            <li><b>Industrialisation</b>: pollutants, toxic chemicals, heavy metals, GHGs.</li>
            <li><b>Urbanisation</b>: overcrowding, poor waste management, vehicle/industry pollution.</li>
            <li><b>Deforestation</b>: biodiversity loss, climate change, erosion, floods, landslides.</li>
            <li><b>Agriculture</b>: fertiliser/pesticide contamination; irrigation → <b>salinisation, waterlogging</b>.</li>
            <li><b>Climate change</b>: rising temperature, changing rainfall, extreme weather.</li>
            <li><b>Population growth</b>: resource overexploitation.</li>
          </ol>
        ` },
        { title: 'Effects', html: `
          <table class="tbl">
            <tbody>
              <tr><td>Health</td><td>Respiratory (air), waterborne disease, cancer, neurological (chemicals)</td></tr>
              <tr><td>Ecosystems</td><td>Habitat loss, lower biodiversity, altered food chains</td></tr>
              <tr><td>Economic</td><td>Property/infrastructure loss, lower farm output, healthcare costs</td></tr>
              <tr><td>Social</td><td>Displacement, lost livelihoods, poverty, inequality</td></tr>
              <tr><td>Global</td><td>Climate change, ozone depletion</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Solutions', html: `
          <ul>
            <li><b>Sustainable development</b>: efficient resources, renewables, sustainable agriculture.</li>
            <li><b>Pollution control</b>: emission devices, industrial waste treatment, clean tech.</li>
            <li><b>Regulations</b>: enforce laws, emission standards, monitor industry.</li>
            <li><b>Disaster management</b>: early warning, preparedness, rehabilitation, recovery.</li>
            <li><b>Public awareness</b>: less waste, save water/energy, eco-friendly products.</li>
            <li><b>Technology</b>: AI monitoring, remote sensing, GIS, green chemistry.</li>
          </ul>
          <h4>Individual and community actions</h4>
          <ul>
            <li>Heat food in glass/steel, not plastic.</li>
            <li>Certified products: <b>Oeko-Tex</b> textiles, BPA-free, <b>EU Ecolabel</b>.</li>
            <li><b>Handwashing cuts infection spread up to 50%</b>.</li>
            <li>Safe disposal of medicines, paints, solvents.</li>
            <li>Open-burning bans; never burn plastic or treated wood.</li>
          </ul>
          <div class="note exam">Overall: <b>precautionary regulation + green chemistry substitution + international treaties + WASH + vaccination + individual choices</b>.</div>
        ` }
      ],
      flashcards: [
        { front: 'Name three technological hazards.', back: 'Oil spills, industrial accidents, chemical leaks, nuclear disasters.' },
        { front: 'How can irrigation cause hazards?', back: '<b>Salinisation and waterlogging</b>.' },
        { front: 'Handwashing cuts infection spread by…', back: 'Up to <b>50%</b>.' },
        { front: 'Certification for safe textiles?', back: '<b>Oeko-Tex</b>.' },
        { front: 'Global impacts of hazards?', back: 'Climate change and ozone depletion.' }
      ],
      oneLiners: [
        'Radiation exposure causes cancer and genetic mutations.',
        'Climatic hazards include sea-level rise and heatwaves.',
        'Never burn plastic or treated wood.'
      ],
      formulas: []
    }
  ],
  figures: [
    { id: 'm2-bpa-mechanism', src: 'pages/m2/evs-w2-12/p02.png', crop: [0.21, 0.14, 0.58, 0.256], caption: 'Left: hormones fit their receptors and give a normal response. Right: BPA mimics the hormone, binds the receptor and gives an altered response.', alt: 'Two cells with nuclei: hormones binding receptors, and hormone mimics binding receptors.' },
    { id: 'm2-bpa-health', src: 'pages/m2/evs-w2-12/p03.png', crop: [0.135, 0.065, 0.72, 0.36], caption: 'Health hazards of BPA, from cancers and infertility to diabetes, allergies and memory problems.', alt: 'Circular infographic of BPA health hazards.' },
    { id: 'm2-bpa-steps', src: 'pages/m2/evs-w2-12/p04.png', crop: [0.12, 0.14, 0.78, 0.345], caption: 'Six everyday steps to limit BPA exposure.', alt: 'Infographic of six ways to avoid BPA: fresh food, ceramic cups, glass bottles, glass utensils, ceramic plates, cotton toys.' },
    { id: 'm2-mercury-cycle', src: 'pages/m2/evs-w2-12/p05.png', crop: [0.155, 0.065, 0.68, 0.385], caption: 'The mercury cycle: emitted to air, deposited in rain and snow, accumulates in lakes and forests, converted to methylmercury and bioaccumulates in food webs.', alt: 'Five circular photos linked by arrows showing the mercury cycle.' }
  ]
});
