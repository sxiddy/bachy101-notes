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
          <p class="lead">Industrialisation, urbanisation and technology have intensified the clash between human activity and the environment. Hazards are not new, but their <b>frequency, intensity and impact</b> have risen sharply.</p>
          <ul>
            <li>Examples range from urban <b>air pollution</b> to climate-induced <b>floods, droughts and wildfires</b>.</li>
            <li>Studying them helps us: (i) <b>identify risks</b> from natural and human activity, (ii) let policymakers, scientists and communities <b>mitigate and manage</b> them, (iii) adopt <b>sustainable practices</b>.</li>
            <li>Hazards are <b>interconnected</b>: deforestation → soil erosion → more floods; industrial emissions → air pollution → respiratory disease and climate change.</li>
          </ul>
          <div class="note exam"><b>Risk</b> = the <b>probability of a hazard causing harm</b>. It depends on the <b>magnitude of the hazard</b> and the <b>vulnerability</b> of the people or ecosystem exposed.</div>
        ` },
        { title: 'Definition', html: `
          <p class="lead"><b>Environmental hazards</b> are natural or human-made events or conditions that threaten the environment, human health or ecological systems: physical, chemical, biological or social conditions that can harm health, cause injury, damage property or degrade ecosystems.</p>
          <div class="vs">
            <div class="side"><h4>Natural hazards</h4><p>From Earth's natural processes: earthquakes, volcanic eruptions, floods, hurricanes. Inevitable, but human activity can <b>amplify their impact</b>.</p></div>
            <div class="side"><h4>Anthropogenic hazards</h4><p>From human actions: industrial pollution, deforestation, improper waste disposal, overuse of natural resources.</p></div>
          </div>
          <p>Forms of harm: physical damage to ecosystems, health problems in humans and animals, economic losses, long-term environmental degradation.</p>
        ` },
        { title: 'Four major types', html: `
          <table class="tbl">
            <thead><tr><th>Type</th><th>Nature</th><th>Examples</th></tr></thead>
            <tbody>
              <tr><td><b>Physical</b></td><td>Natural energy forces and radiation</td><td>Earthquakes, floods, hurricanes, landslides, volcanic eruptions, wildfires, UV radiation, extreme temperature, noise pollution</td></tr>
              <tr><td><b>Chemical</b></td><td>Toxic substances in the environment</td><td>Industrial pollutants, pesticides, heavy metals, BPA, phthalates, synthetic dyes, pharmaceutical waste, solvents</td></tr>
              <tr><td><b>Biological</b></td><td>Living organisms and biological agents</td><td>Bacteria (TB, cholera), viruses (COVID-19, dengue), parasites (malaria, filariasis), fungi, prions, biological toxins</td></tr>
              <tr><td><b>Sociological</b></td><td>Social, economic and behavioural factors</td><td>Poverty, malnutrition, armed conflict, unsafe work conditions, lack of healthcare, substance abuse, social inequality</td></tr>
            </tbody>
          </table>
          <div class="mnemonic">P-C-B-S: Physical, Chemical, Biological, Sociological.</div>
        ` },
        { title: 'Physical hazards', html: `
          <p>Natural processes or events that cause physical damage. Often called natural disasters; <b>climate change</b> is raising their frequency and intensity.</p>
          <table class="tbl">
            <tbody>
              <tr><td><b>Geological</b></td><td>Earthquakes, tsunamis, volcanic eruptions, landslides</td></tr>
              <tr><td><b>Meteorological</b></td><td>Hurricanes/cyclones, tornadoes, blizzards, extreme heat/cold</td></tr>
              <tr><td><b>Hydrological</b></td><td>Floods, storm surges, droughts</td></tr>
              <tr><td><b>Radiation</b></td><td>UV (skin cancer), ionising radiation (nuclear accidents), radon gas</td></tr>
              <tr><td><b>Noise</b></td><td>Occupational hearing loss, cardiovascular disease from chronic noise</td></tr>
            </tbody>
          </table>
          <p>They are often unpredictable: floods can submerge large areas, destroying crops, homes and infrastructure.</p>
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
          <p class="lead">A <b>chemical hazard</b> is any <b>non-biological substance</b> that can harm life or health, from human activity or natural processes.</p>
          <ul>
            <li>Includes heavy metals, pesticides, toxic waste, industrial and home chemicals.</li>
            <li>Health hazards: <b>irritation, sensitisation, carcinogenicity</b>. Physical hazards: <b>flammability, corrosion</b>.</li>
            <li>Air pollutants: <b>CO, SO₂, NOx</b>. Water: heavy metals (<b>lead, mercury, arsenic</b>). Soil: pesticides and industrial waste.</li>
          </ul>
        ` },
        { title: 'Sources', html: `
          <table class="tbl">
            <tbody>
              <tr><td>Industrial</td><td>Factory effluents, mining runoff, waste with solvents, acids, heavy metals</td></tr>
              <tr><td>Agricultural</td><td>Pesticides (organochlorines, organophosphates), herbicides, synthetic fertilisers</td></tr>
              <tr><td>Consumer products</td><td>Plastics (<b>BPA</b>), personal care (<b>phthalates, parabens</b>), cosmetics</td></tr>
              <tr><td>Food industry</td><td>Synthetic dyes (<b>tartrazine, sunset yellow</b>), preservatives, food-contact materials</td></tr>
              <tr><td>Pharmaceuticals</td><td>Drug compounds in wastewater: <b>emerging contaminants</b></td></tr>
              <tr><td>Fossil fuels</td><td>PAHs, benzene, toluene, lead from combustion</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Routes and harm', html: `
          <table class="tbl">
            <thead><tr><th>Route</th><th>How</th><th>Examples</th></tr></thead>
            <tbody>
              <tr><td>Inhalation</td><td>Breathing contaminated air</td><td>Factory workers, air pollution, indoor combustion</td></tr>
              <tr><td>Ingestion</td><td>Eating/drinking</td><td>Contaminated food/water, children swallowing by accident</td></tr>
              <tr><td>Dermal</td><td>Skin contact</td><td>Pesticide spraying, solvents, cosmetics</td></tr>
              <tr><td>Transplacental</td><td>Mother to foetus</td><td>EDCs cross the placenta in a critical developmental window</td></tr>
              <tr><td>Ocular</td><td>Eye contact</td><td>Acid splashes, chemical aerosols</td></tr>
            </tbody>
          </table>
          <h4>Mechanisms of harm</h4>
          <ol>
            <li><b>Endocrine disruption</b>: mimic or block hormones.</li>
            <li><b>Carcinogenesis</b>: DNA damage, adducts, epigenetic changes.</li>
            <li><b>Neurotoxicity</b>: lead, methylmercury, organophosphates.</li>
            <li><b>Organ toxicity</b>: liver (hepatotoxins), kidneys (nephrotoxins), lungs.</li>
            <li><b>Reproductive toxicity</b>: gametes, fertility, foetal development.</li>
            <li><b>Immunotoxicity</b>: e.g. dioxins, PCBs.</li>
          </ol>
        ` },
        { title: 'Phthalates', html: `
          <p class="lead"><b>Phthalates</b> (phthalic acid esters) are <b>plasticisers</b> that make PVC soft: <b>25–50%</b> of flexible PVC by weight; production over <b>8 million tonnes</b> a year. Not chemically bonded, so they <b>leach continuously</b>.</p>
          <ul>
            <li>Sources: vinyl flooring, shower curtains, hoses, artificial leather; medical IV bags and tubing (<b>DEHP</b>, most studied); perfumes, nail polish (<b>DBP</b>); soft toys and teethers; food wraps; wall coverings (inhaled as dust).</li>
            <li><b>Anti-androgenic</b>: block testosterone receptors (unlike BPA, which is oestrogenic).</li>
            <li>Male harm: lower testosterone and sperm quality; "<b>phthalate syndrome</b>" in animals (undescended testes, hypospadias, reduced anogenital distance).</li>
            <li>Also: premature birth, endometriosis, thyroid disruption, ADHD, autism, lower IQ, childhood asthma and allergic rhinitis.</li>
          </ul>
          <table class="tbl">
            <tbody>
              <tr><td>EU</td><td>DEHP, DBP, BBP, DIBP banned (&gt;0.1%) in all articles; DINP, DIDP, DNOP restricted in childcare articles</td></tr>
              <tr><td>USA (CPSIA)</td><td>8 phthalates banned (&gt;0.1%) in toys and childcare articles</td></tr>
              <tr><td>India</td><td>Incomplete; draft notification for toys under consideration</td></tr>
              <tr><td>Alternatives</td><td>DINCH (Hexamoll), citrates (tributyl citrate), adipates, bio-plasticisers from soybean, sunflower oil</td></tr>
            </tbody>
          </table>
          <div class="note heads-up">The lecture numbers BPA as "Case Study 1" and phthalates as "Case Study 3"; there is no Case Study 2 section. Synthetic dyes appear only in the summary: azo dyes can release <b>carcinogenic aromatic amines</b>.</div>
        ` },
        { title: 'Green chemistry and laws', html: `
          <ul>
            <li><b>Green chemistry (12 principles)</b>: design chemicals and processes that cut hazardous substances from the start.</li>
            <li>Substitutes: BPA-free glass, steel, Tritan; phthalate-free DINCH, citrates, soy/sunflower plasticisers.</li>
            <li><b>Natural dyes</b>: indigo, henna, turmeric, madder, woad. <b>Safer food colours</b>: spirulina (blue), annatto (orange), turmeric (yellow), beetroot (red), approved by FSSAI and EU.</li>
          </ul>
          <table class="tbl">
            <tbody>
              <tr><td><b>REACH</b> (EU)</td><td>Registration, Evaluation, Authorisation and Restriction of Chemicals: the world's most comprehensive chemical law</td></tr>
              <tr><td><b>Precautionary Principle</b></td><td>Restrict chemicals <b>before definitive proof of harm</b>; burden of proof on industry</td></tr>
              <tr><td><b>WHO IHR (2005)</b></td><td>Binding duty for member states to detect, report and respond to health emergencies</td></tr>
              <tr><td>India</td><td>Environment Protection Act 1986, Drugs and Cosmetics Act, BIS standards for food-contact plastics, FSSAI for food additives</td></tr>
            </tbody>
          </table>
          <div class="note exam">Long answer on chemical hazards: (1) definition with examples in air, water and soil; (2) sources, one line each (industrial, agricultural, consumer, food, pharmaceutical, fossil fuel); (3) the five routes of exposure; (4) mechanisms of harm; (5) a case study (phthalates: uses, anti-androgenic action, health effects, EU/USA/India rules, alternatives); (6) solutions: green chemistry, safer substitutes, REACH, the Precautionary Principle and Indian laws.</div>
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
          <p class="lead"><b>Bisphenol A (BPA)</b> is a <b>synthetic oestrogen</b> and <b>endocrine-disrupting chemical (EDC)</b> used in polycarbonate plastics and epoxy resins since the <b>1960s</b>. Production exceeds <b>8 million tonnes</b> a year.</p>
          <ul>
            <li>A <b>colourless solid</b>, soluble in most organic solvents, very poorly soluble in water.</li>
            <li>Largest use: co-monomer for <b>polycarbonates</b>, <b>65–70%</b> of all BPA.</li>
            <li><b>Epoxy and vinyl ester resins</b>: <b>25–30%</b>.</li>
            <li>Polycarbonate: food and drink containers, water bottles. Epoxy: lining of food cans, bottle tops, water supply lines.</li>
          </ul>
        ` },
        { title: 'Where we meet it', html: `
          <ul>
            <li>Polycarbonate bottles (<b>plastic #7</b>): BPA <b>leaches when heated</b>.</li>
            <li>Food and drink can linings (epoxy).</li>
            <li><b>Thermal paper</b> (ATM receipts, boarding passes, airline tickets, carbonless copy paper): absorbed through skin.</li>
            <li>Baby bottles (now banned in EU, US, Canada, India), dental sealants, CDs/DVDs, medical devices, food storage containers.</li>
            <li>Also: toiletries, menstrual products, household electronics, eyeglass lenses, sports equipment, PCB laminates, paints, adhesives.</li>
          </ul>
          <p><b>Diet is the main route</b>. Plastics leach more with harsh detergents or acidic or hot liquids; old pipes with BPA resin coatings also leach. It bioaccumulates in water bodies and aquatic life.</p>
        ` },
        { title: 'How it acts', html: `
          <ul>
            <li>Binds both nuclear oestrogen receptors, <b>ERα and ERβ</b>, even at <b>picomolar</b> levels.</li>
            <li>Can mimic and also block oestrogen: a <b>selective oestrogen receptor modulator (SERM)</b> or partial agonist.</li>
            <li>At high concentrations it is an <b>antagonist of the androgen receptor</b>.</li>
          </ul>
          <figure data-fig="m2-bpa-mechanism"></figure>
          <div class="note exam"><b>Low-dose hypothesis</b>: BPA acts at concentrations far below what was considered "safe"; even nanomolar levels can switch on hormonal pathways in sensitive developmental windows.</div>
        ` },
        { title: 'Health effects', html: `
          <ul>
            <li><b>Hormonal</b>: early puberty in girls, lower sperm count and quality, impotence, disrupted sex hormones.</li>
            <li><b>Cancer</b>: breast (oestrogen-sensitive) and prostate.</li>
            <li><b>Metabolic</b>: obesity, insulin resistance, <b>type 2 diabetes</b> (changes insulin sensitivity and release without changing weight).</li>
            <li><b>Cardiovascular</b>: hypertension, coronary artery disease.</li>
            <li><b>Thyroid</b>: binds thyroid hormone receptor; linked to raised <b>TSH</b>.</li>
            <li><b>Neurological</b>: anxiety, aggression, poor memory (animal models), depression, Alzheimer's.</li>
            <li><b>Reproductive</b>: <b>PCOS</b>, endometriosis, infertility. In pregnancy and development: reduced lung capacity, wheezing and asthma after birth, which led to the ban in baby bottles.</li>
            <li>Also: allergies, inflammation, childhood asthma, immunity problems.</li>
          </ul>
          <figure data-fig="m2-bpa-health"></figure>
        ` },
        { title: 'Environment', html: `
          <ul>
            <li>Short half-life: <b>4.5 days in soil and water, under 1 day in air</b>; but it is everywhere, so it remains an important pollutant.</li>
            <li>Low evaporation from water and soil keeps it around despite being biodegradable.</li>
            <li>Interferes with <b>nitrogen fixation</b> in roots of some legumes.</li>
            <li>Harms growth, reproduction and development of aquatic life, especially <b>fish</b>; endocrine effects in invertebrates, amphibians, reptiles; genetic aberrations in terrestrial animals and insects.</li>
          </ul>
        ` },
        { title: 'Rules and limiting it', html: `
          <table class="tbl">
            <tbody>
              <tr><td>EU</td><td>Banned in baby bottles (<b>2011</b>); in all food-contact materials (<b>2022</b>)</td></tr>
              <tr><td>USA (FDA)</td><td>Banned in baby bottles and sippy cups (<b>2012</b>); food contact under review</td></tr>
              <tr><td>Canada</td><td>Declared "toxic" under CEPA 1999; banned in baby bottles (<b>2010</b>)</td></tr>
              <tr><td>India</td><td><b>BIS</b> restricted it in infant feeding bottles; full regulation still developing</td></tr>
              <tr><td>Alternatives</td><td>Tritan plastic (Eastman), glass, stainless steel, BPA-free epoxy linings (BPS/BPF, safety debated)</td></tr>
            </tbody>
          </table>
          <h4>Steps to limit BPA</h4>
          <ul>
            <li>Eat freshly cooked food; avoid food stored in plastic or metal cans.</li>
            <li>Don't drink tea or coffee from plastic cups; use metal or ceramic.</li>
            <li>Keep water in glass or stainless-steel bottles.</li>
            <li>Don't microwave in plastic; use glass.</li>
            <li>Eat from metal or ceramic plates, not plastic.</li>
            <li>Avoid giving plastic toys to children (cotton toys instead).</li>
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
          <p class="lead"><b>Heavy metal poisoning</b>: excess exposure to a heavy metal that disturbs normal body function.</p>
          <ul>
            <li>Examples: <b>lead, mercury, arsenic, cadmium, chromium</b>.</li>
            <li>Exposure via diet, medicines, environment, work or play; enters through <b>skin, inhalation or ingestion</b>.</li>
            <li>Toxicity can be <b>acute</b> (sudden, severe) or <b>chronic</b> (over time).</li>
          </ul>
        ` },
        { title: 'Mercury basics', html: `
          <ul>
            <li>A heavy metal of the <b>transition series</b>; a <b>liquid at room temperature</b> with high vapour pressure, released as <b>vapour</b>.</li>
            <li>Three forms: <b>elemental, organic, inorganic</b>, each with its own toxicity.</li>
            <li>Common oxidation states: <b>+1 and +2</b>.</li>
            <li><b>Methylmercury</b> is the commonest organic form, made when microbes in soil and water <b>methylate inorganic mercury</b>.</li>
            <li>Ubiquitous, so plants, animals and humans can hardly avoid exposure.</li>
          </ul>
          <figure data-fig="m2-mercury-cycle"></figure>
        ` },
        { title: 'Uses and sources', html: `
          <p><b>Uses</b>: electrical (switches, thermostats, batteries), dental fillings, caustic soda production, nuclear reactors, anti-fungal agents for wood, solvent for reactive and precious metals.</p>
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
            <li>Sources: accidents, pollution, food, dental care, industry and agriculture (non-ferrous metal and <b>cement</b> production).</li>
            <li>Chronic low-level exposure: <b>dental amalgams (50% elemental mercury)</b> and <b>fish</b>.</li>
            <li>Also: contaminated air, spills, broken <b>fluorescent lamps</b>.</li>
            <li>Human releases: <b>burning coal (half of atmospheric mercury)</b> and <b>gold mining</b>.</li>
            <li>In water, algae and bacteria methylate it; it <b>bioaccumulates in fish</b> and reaches humans.</li>
            <li>Most absorbed species: <b>Hg(0)</b> and <b>methylmercury</b>.</li>
          </ul>
        ` },
        { title: 'In the body', html: `
          <ol>
            <li>Elemental vapour is highly <b>lipophilic</b>: absorbed through the lungs and mouth lining.</li>
            <li>In blood it crosses cell membranes, the <b>blood-brain barrier</b> and the <b>placental barrier</b>.</li>
            <li>Inside cells it is oxidised to the reactive <b>+2 state</b>.</li>
            <li>Methylmercury from fish is absorbed in the gut (lipid-soluble) and also crosses both barriers.</li>
            <li>Very low excretion: it accumulates in <b>kidneys, nerve tissue and liver</b>: gut toxicity, neurotoxicity, nephrotoxicity.</li>
          </ol>
          <div class="note exam">Mechanism: mercury <b>binds free thiol (–SH) groups</b> of cysteine residues. Target organ: the <b>brain</b>.</div>
        ` },
        { title: 'Effects and treatment', html: `
          <ul>
            <li>Damages nerves, kidneys and muscles; neurotoxic: microtubule destruction, mitochondrial damage, lipid peroxidation.</li>
            <li>Symptoms depend on type, dose and duration: peripheral neuropathy, <b>pink skin</b>, swelling, desquamation (peeling).</li>
            <li>High exposure: <b>Minamata disease</b>.</li>
            <li><b>Acrodynia (pink disease)</b>: skin turns pink and peels; kidney problems; decreased intelligence.</li>
          </ul>
          <h4>Prevention and treatment</h4>
          <ul>
            <li>Remove or reduce exposure.</li>
            <li>Spills: apply <b>powdered sulfur</b>, forming a solid that is easy to dispose of.</li>
            <li>First: <b>decontaminate</b>: remove clothes, wash skin with soap and water, flush eyes with saline.</li>
            <li><b>Chelation therapy</b> with <b>DMSA</b> and other sulfur-based compounds for inorganic and severe poisoning.</li>
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
          <p class="lead"><b>Biological hazards</b> come from biological agents (microorganisms, toxins, allergens) that can infect, poison or sensitise living things.</p>
          <table class="tbl">
            <thead><tr><th>Type</th><th>Examples</th><th>Spread</th></tr></thead>
            <tbody>
              <tr><td>Viral</td><td>COVID-19, dengue, Ebola, HIV, influenza, hepatitis</td><td>Airborne, droplets, blood, vectors</td></tr>
              <tr><td>Bacterial</td><td>TB, cholera, typhoid, plague</td><td>Air, water, food, direct contact</td></tr>
              <tr><td>Parasitic</td><td>Malaria, filariasis, toxoplasmosis, leishmaniasis</td><td>Vectors, water, food</td></tr>
              <tr><td>Fungal</td><td>Candidiasis, aspergillosis, dermatophytosis</td><td>Airborne spores, contact, immunocompromised</td></tr>
              <tr><td>Prion</td><td>CJD, BSE (mad cow)</td><td>Contaminated food, medical procedures</td></tr>
              <tr><td>Biological toxins</td><td>Aflatoxin, botulinum, mycotoxins</td><td>Contaminated food, environment</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Malaria', html: `
          <p class="lead">Parasitic disease caused by <b><em>Plasmodium</em></b> protozoa, spread by bites of infected <b>female <em>Anopheles</em></b> mosquitoes. WHO 2022: <b>249 million cases, 608,000 deaths</b>, 76% of deaths in children under 5 in sub-Saharan Africa.</p>
          <table class="tbl">
            <tbody>
              <tr><td><em>P. falciparum</em></td><td><b>Most lethal</b>: cerebral malaria, severe anaemia; <b>&gt;90% of deaths</b></td></tr>
              <tr><td><em>P. vivax</em></td><td><b>Most widespread</b>; relapses years later (liver <b>hypnozoites</b>); South Asia, Latin America</td></tr>
              <tr><td><em>P. malariae</em></td><td>Chronic, rare; kidney damage</td></tr>
              <tr><td><em>P. ovale</em></td><td>West Africa; relapses like vivax</td></tr>
              <tr><td><em>P. knowlesi</em></td><td>Zoonotic, from macaques in Southeast Asia; can be fatal</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Malaria cycle', html: `
          <div class="steps">
            <div><b>Liver stage (exo-erythrocytic)</b>: mosquito injects sporozoites → liver cells → multiply → release merozoites (<b>7–10 days</b>).</div>
            <div><b>Blood stage (erythrocytic)</b>: merozoites infect RBCs → ring → trophozoite → schizont → RBCs burst; repeats every <b>48–72 h</b> (fever spikes).</div>
            <div><b>Gametocytes</b>: taken up by a mosquito → fertilisation in its gut → oocyst → sporozoites in salivary glands → next human.</div>
          </div>
          <h4>Symptoms</h4>
          <ul>
            <li>Fever <b>39–41°C</b> with chills in <b>48-h cycles</b>; haemolytic <b>anaemia</b> (RBCs destroyed, so weakness, pallor, fatigue); <b>splenomegaly</b>, an enlarged spleen from the extra RBC destruction and immune activation.</li>
            <li>Severe (falciparum): cerebral malaria (coma, seizures), Hb &lt;7 g/dL, respiratory distress, hypoglycaemia, organ failure; fatal within <b>24 h</b> untreated.</li>
            <li>Pregnancy: placental malaria, maternal death, low birth weight, stillbirth.</li>
          </ul>
          <div class="note heads-up">The lecture writes "oocyte" in the mosquito stage; the mosquito-gut stage is usually called an <b>oocyst</b>.</div>
        ` },
        { title: 'Malaria control', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>ITNs</b></td><td>Cut transmission by <b>50%</b>; LLINs last <b>3–5 years</b></td></tr>
              <tr><td><b>IRS</b></td><td>Residual insecticide (DDT, pyrethroids) on indoor walls</td></tr>
              <tr><td>Larval source management</td><td>Drain stagnant water; <em>Bacillus thuringiensis israelensis</em></td></tr>
              <tr><td><b>ACTs</b></td><td>First-line WHO treatment: artesunate + amodiaquine/lumefantrine</td></tr>
              <tr><td>Chemoprophylaxis</td><td>Chloroquine, doxycycline, Malarone for travellers</td></tr>
              <tr><td><b>RTS,S/AS01 (Mosquirix)</b></td><td>First WHO-approved vaccine (<b>2021</b>); 30–40% efficacy vs severe malaria in children</td></tr>
              <tr><td><b>R21/Matrix-M</b></td><td>Second vaccine (<b>2023</b>, Oxford-Serum Institute); 75%+ efficacy in trials</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'COVID-19', html: `
          <p class="lead">Caused by <b>SARS-CoV-2</b>, a betacoronavirus first found in <b>Wuhan, December 2019</b>. WHO declared a pandemic on <b>11 March 2020</b>. By 2024: <b>700+ million cases</b>, ~<b>7 million</b> official deaths (true toll estimated 15–20 million).</p>
          <ul>
            <li>Single-stranded <b>positive-sense RNA</b> virus, genome ~<b>30 kb</b>, enveloped, crown of <b>spike (S)</b> proteins.</li>
            <li>Spike binds <b>ACE2</b> receptors (lung, heart, kidney, gut); S1 binds, S2 fuses membranes, <b>TMPRSS2</b> primes entry.</li>
            <li>RNA-dependent RNA polymerase (<b>RdRp</b>) copies the genome; blocked by <b>Remdesivir</b>.</li>
            <li>Spread: mainly <b>airborne aerosols</b> indoors; droplets within 1 m; surfaces (fomites) matter less.</li>
            <li>Incubation 2–14 days (original), 1–3 days (Omicron). <b>R₀</b>: original ~2–3, Delta ~5–6, Omicron ~9–12.</li>
          </ul>
          <table class="tbl">
            <thead><tr><th>Severity</th><th>Share</th><th>Features</th></tr></thead>
            <tbody>
              <tr><td>Asymptomatic</td><td>~35–45%</td><td>No symptoms, can still transmit</td></tr>
              <tr><td>Mild/moderate</td><td>~50–55%</td><td>Fever, cough, fatigue, loss of smell, muscle pain</td></tr>
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
              <tr><td>Omicron (B.1.1.529)</td><td>South Africa, Nov</td><td>~10× more transmissible, immune evasion, milder; BA.4, BA.5, XBB</td></tr>
            </tbody>
          </table>
          <ul>
            <li><b>Vaccines</b>: mRNA (Pfizer-BioNTech, Moderna: 90%+ vs original), viral vector (AstraZeneca, J&amp;J), inactivated (Covaxin, Sinovac), protein subunit (Novavax).</li>
            <li><b>NPIs</b>: masks (N95 cuts aerosol inhalation &gt;90%), distancing, HEPA filters, ventilation.</li>
            <li><b>Antivirals</b>: Paxlovid (89% fewer hospitalisations), Remdesivir, Molnupiravir. <b>Monoclonal antibodies</b> (neutralising antibodies) were largely ineffective against Omicron subvariants.</li>
            <li>Public health: contact tracing (<b>Aarogya Setu</b>), quarantine, border control, lab surveillance.</li>
          </ul>
          <h4>Controlling biological hazards</h4>
          <ul>
            <li><b>Integrated Vector Management</b> (ITNs + IRS + biological control).</li>
            <li>Vaccination: <b>Expanded Programme on Immunisation (EPI)</b>.</li>
            <li><b>WASH</b> (water, sanitation, hygiene): the <b>single most effective</b> step against waterborne disease.</li>
            <li>Surveillance: <b>IDSP, IHIP</b> (India), genomic sequencing, WHO <b>GOARN</b>.</li>
            <li>Climate-smart health systems that plan for shifting disease geography.</li>
          </ul>
          <div class="note exam">Long answer on biological hazards: (1) definition and the six types with examples and mode of spread; (2) malaria: cause and vector, WHO 2022 numbers, the five <em>Plasmodium</em> species, life cycle, symptoms, control (ITNs, IRS, larval control, ACTs, vaccines); (3) COVID-19: virus and how it enters cells, spread, R₀, severity table, variants, vaccines, NPIs, antivirals, public health steps; (4) close with general control: IVM, EPI, WASH, surveillance.</div>
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
              <tr><td><b>Radiological</b></td><td>Nuclear accidents, poor disposal of radioactive waste, medical and industrial sources; cause cancer and genetic mutations</td></tr>
              <tr><td><b>Climatic</b></td><td>Long-term climate change: global warming, heatwaves, sea-level rise, extreme weather</td></tr>
              <tr><td><b>Technological</b></td><td>Oil spills, industrial accidents, chemical leaks, nuclear disasters; immediate and long-term effects</td></tr>
            </tbody>
          </table>
          <div class="note heads-up">The lecture lists "Climatic hazards" twice (sections 5 and 7) and places the control strategies under the first one. It is one topic.</div>
        ` },
        { title: 'Causes', html: `
          <ol>
            <li><b>Natural causes</b>: tectonic movement, volcanoes, climate variation; impact reduced by preparedness.</li>
            <li><b>Industrialisation</b>: pollutants, toxic chemicals, heavy metals, greenhouse gases.</li>
            <li><b>Urbanisation</b>: overcrowding, poor waste management, more pollution (vehicles, industry).</li>
            <li><b>Deforestation</b>: lost biodiversity, climate change, erosion, floods, landslides.</li>
            <li><b>Agriculture</b>: fertiliser and pesticide contamination; irrigation causes <b>salinisation and waterlogging</b>.</li>
            <li><b>Climate change</b>: rising temperature, changing rainfall, more extreme weather.</li>
            <li><b>Population growth</b>: overexploitation of resources.</li>
          </ol>
        ` },
        { title: 'Effects', html: `
          <table class="tbl">
            <tbody>
              <tr><td>Health</td><td>Respiratory disease (air), waterborne disease, cancer and neurological disorders (chemicals)</td></tr>
              <tr><td>Ecosystems</td><td>Habitat loss, lower biodiversity, altered food chains</td></tr>
              <tr><td>Economic</td><td>Property and infrastructure loss, lower farm output, higher healthcare costs</td></tr>
              <tr><td>Social</td><td>Displacement, lost livelihoods, more poverty and inequality</td></tr>
              <tr><td>Global</td><td>Climate change and ozone depletion affect every country</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Solutions', html: `
          <ul>
            <li><b>Sustainable development</b>: efficient resource use, renewable energy, sustainable agriculture.</li>
            <li><b>Pollution control</b>: emission control devices, treating industrial waste, clean technology.</li>
            <li><b>Regulations</b>: enforce laws, set emission standards, monitor industry.</li>
            <li><b>Disaster management</b>: early warning, preparedness, rehabilitation and recovery.</li>
            <li><b>Public awareness</b>: reduce waste, save water and energy, buy eco-friendly products.</li>
            <li><b>Technology</b>: AI monitoring, remote sensing and GIS, green chemistry.</li>
          </ul>
          <h4>Individual and community actions</h4>
          <ul>
            <li>Don't heat food in plastic; use glass or steel.</li>
            <li>Choose certified products: <b>Oeko-Tex</b> textiles, BPA-free labels, <b>EU Ecolabel</b>.</li>
            <li>Regular <b>handwashing cuts infection spread by up to 50%</b>.</li>
            <li>Educate on safe disposal of medicines, paints, solvents.</li>
            <li>Support open-burning bans; never burn plastic or treated wood.</li>
          </ul>
          <div class="note exam">Overall answer: <b>precautionary regulation + green chemistry substitution + international treaties + WASH + vaccination + individual choices</b>.</div>
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
