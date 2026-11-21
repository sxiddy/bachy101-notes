CHUNK({
  chunk: 'F',
  module: 'm2',
  topics: [
    {
      id: 'm2-hazards-intro',
      title: 'Environmental hazards: meaning and types',
      short: 'Hazards and types',
      blurb: 'Natural vs anthropogenic hazards, risk, the four major types and the kinds of physical hazard.',
      source: 'Lecture W2S5 (Environmental hazards), pages 1–4',
      tabs: [
        { title: 'Meaning and risk', html: `
          <p class="lead"><b>Environmental hazard</b>: natural or human-made event/condition that harms health, property or ecosystems.</p>
          <div class="vs">
            <div class="side"><h4>Natural</h4><p>Earth processes: <b>earthquakes, volcanoes, floods</b>, hurricanes. Humans can amplify impact.</p></div>
            <div class="side"><h4>Anthropogenic</h4><p>Human actions: <b>industrial pollution, deforestation</b>, waste, overuse.</p></div>
          </div>
          <ul>
            <li><b>Risk</b> = probability of a hazard causing harm; depends on <b>magnitude</b> and <b>vulnerability</b>.</li>
            <li>Hazards are <b>interconnected</b>: deforestation → erosion → floods.</li>
          </ul>
        ` },
        { title: 'Four major types', html: `
          <table class="tbl">
            <thead><tr><th>Type</th><th>Examples</th></tr></thead>
            <tbody>
              <tr><td><b>Physical</b></td><td>Earthquakes, floods, UV, extreme temperature, noise</td></tr>
              <tr><td><b>Chemical</b></td><td>Pesticides, heavy metals, BPA, phthalates, dyes</td></tr>
              <tr><td><b>Biological</b></td><td>TB, cholera, COVID-19, dengue, malaria, prions</td></tr>
              <tr><td><b>Sociological</b></td><td>Poverty, malnutrition, armed conflict, substance abuse</td></tr>
            </tbody>
          </table>
          <h4>Physical hazard kinds</h4>
          <table class="tbl">
            <tbody>
              <tr><td><b>Geological</b></td><td>Earthquakes, <b>tsunamis</b>, volcanoes, landslides</td></tr>
              <tr><td><b>Meteorological</b></td><td>Cyclones, tornadoes, blizzards, extreme heat/cold</td></tr>
              <tr><td><b>Hydrological</b></td><td>Floods, <b>storm surges, droughts</b></td></tr>
              <tr><td><b>Radiation</b></td><td>UV, ionising, <b>radon gas</b></td></tr>
              <tr><td><b>Noise</b></td><td>Hearing loss; chronic: <b>cardiovascular disease</b></td></tr>
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
      blurb: 'Sources, exposure routes and harm of chemicals, the phthalates case, green chemistry and regulations.',
      source: 'Lecture W2S5 (Environmental hazards), pages 4–8, 14; Lecture W2 (Chemical hazards), page 1',
      tabs: [
        { title: 'Sources, routes, harm', html: `
          <p class="lead"><b>Chemical hazard</b>: any <b>non-biological substance</b> harmful to health.</p>
          <table class="tbl">
            <tbody>
              <tr><td>Agriculture</td><td>Pesticides: <b>organochlorines, organophosphates</b></td></tr>
              <tr><td>Consumer</td><td><b>BPA</b> (plastics), <b>phthalates, parabens</b> (personal care)</td></tr>
              <tr><td>Food dyes</td><td><b>Tartrazine, sunset yellow</b></td></tr>
              <tr><td>Pharmaceuticals</td><td>In wastewater: <b>emerging contaminants</b></td></tr>
              <tr><td>Fossil fuels</td><td><b>PAHs</b>, benzene, toluene, lead</td></tr>
            </tbody>
          </table>
          <ul>
            <li>Air: CO, SO₂, NOx. Water: <b>lead, mercury, arsenic</b>.</li>
            <li><b>5 routes</b>: inhalation, ingestion, dermal, <b>transplacental</b> (EDCs), ocular.</li>
            <li><b>Neurotoxins</b>: lead, methylmercury, organophosphates. <b>Immunotoxins</b>: dioxins, PCBs.</li>
            <li>Other harm: endocrine disruption, carcinogenesis, hepato-/nephrotoxicity, reproductive toxicity.</li>
          </ul>
        ` },
        { title: 'Phthalates', html: `
          <p class="lead"><b>Phthalates</b>: <b>plasticisers</b> softening PVC; <b>25–50%</b> of flexible PVC by weight; not bonded, so <b>leach</b>.</p>
          <ul>
            <li><b>DEHP</b>: IV bags/tubing, most studied. <b>DBP</b>: perfumes, nail polish.</li>
            <li><b>Anti-androgenic</b> (BPA is oestrogenic).</li>
            <li><b>Phthalate syndrome</b> (animals): undescended testes, hypospadias, reduced anogenital distance.</li>
            <li><b>Azo dyes</b> release carcinogenic <b>aromatic amines</b>.</li>
          </ul>
          <table class="tbl">
            <tbody>
              <tr><td>EU</td><td>DEHP, DBP, BBP, DIBP banned &gt;<b>0.1%</b></td></tr>
              <tr><td>USA (CPSIA)</td><td><b>8</b> phthalates banned &gt;0.1% in toys</td></tr>
              <tr><td>Alternatives</td><td><b>DINCH</b>, citrates, adipates, soy/sunflower</td></tr>
            </tbody>
          </table>
        ` },
        { title: 'Green chemistry and laws', html: `
          <ul>
            <li><b>Green chemistry</b>: <b>12 principles</b>; design out hazards at source.</li>
            <li>Natural dyes: indigo, henna, turmeric, madder, woad.</li>
            <li>Safe food colours: <b>spirulina</b> (blue), annatto (orange), turmeric (yellow), beetroot (red).</li>
          </ul>
          <table class="tbl">
            <tbody>
              <tr><td><b>REACH</b> (EU)</td><td>Registration, Evaluation, Authorisation and Restriction of Chemicals</td></tr>
              <tr><td><b>Precautionary Principle</b></td><td>Restrict before proof of harm; <b>burden of proof on industry</b></td></tr>
              <tr><td><b>WHO IHR</b></td><td><b>2005</b>; binding</td></tr>
              <tr><td>India</td><td>Environment Protection Act <b>1986</b>, BIS, FSSAI</td></tr>
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
      blurb: 'BPA uses, mechanism, health and environmental effects, regulations and limiting exposure.',
      source: 'Lecture W2S5 (Environmental hazards), pages 5–7; Lecture W2 (Chemical hazards: BPA, mercury), pages 1–4',
      tabs: [
        { title: 'What, where, how', html: `
          <p class="lead"><b>BPA</b>: <b>synthetic oestrogen</b>, an <b>EDC</b>; used since the <b>1960s</b>; <b>8 million tonnes</b>+/year.</p>
          <div class="kv">
            <div><span>Polycarbonates</span><b>65–70%</b></div>
            <div><span>Epoxy/vinyl ester resins</span><b>25–30%</b></div>
            <div><span>Plastic code</span><b>#7</b></div>
            <div><span>Main route</span><b>Diet</b></div>
          </div>
          <ul>
            <li>Leaches when <b>heated</b>, with acidic liquids, harsh detergents.</li>
            <li><b>Thermal paper</b> (receipts, tickets): via skin.</li>
            <li>Can linings (epoxy), baby bottles, dental sealants, CDs.</li>
          </ul>
          <h4>How it acts</h4>
          <ul>
            <li>Binds oestrogen receptors <b>ERα, ERβ</b> at <b>picomolar</b> levels.</li>
            <li><b>SERM</b>: mimics and blocks oestrogen.</li>
            <li>High doses: <b>androgen receptor antagonist</b>.</li>
            <li><b>Low-dose hypothesis</b>: acts below "safe" levels.</li>
          </ul>
          <figure data-fig="m2-bpa-mechanism"></figure>
        ` },
        { title: 'Health and environment', html: `
          <table class="tbl">
            <tbody>
              <tr><td>Hormonal</td><td>Early puberty, low sperm count</td></tr>
              <tr><td>Cancer</td><td>Breast, prostate</td></tr>
              <tr><td>Metabolic</td><td>Obesity, <b>type 2 diabetes</b></td></tr>
              <tr><td>Thyroid</td><td>Raised <b>TSH</b></td></tr>
              <tr><td>Reproductive</td><td><b>PCOS</b>, endometriosis</td></tr>
              <tr><td>Prenatal</td><td>Wheezing, asthma → <b>baby-bottle ban</b></td></tr>
            </tbody>
          </table>
          <figure data-fig="m2-bpa-health"></figure>
          <ul>
            <li>Half-life: <b>4.5 days</b> soil/water, <b>under 1 day</b> air.</li>
            <li>Disrupts <b>nitrogen fixation</b> in legumes; harms <b>fish</b>.</li>
          </ul>
        ` },
        { title: 'Rules and limiting it', html: `
          <table class="tbl">
            <tbody>
              <tr><td>EU</td><td>Baby bottles <b>2011</b>; all food contact <b>2022</b></td></tr>
              <tr><td>USA (FDA)</td><td>Baby bottles <b>2012</b></td></tr>
              <tr><td>Canada</td><td>"Toxic" under <b>CEPA 1999</b>; bottles <b>2010</b></td></tr>
              <tr><td>India</td><td><b>BIS</b>: infant bottles</td></tr>
              <tr><td>Alternatives</td><td><b>Tritan</b>, glass, steel (BPS/BPF debated)</td></tr>
            </tbody>
          </table>
          <p>Limit: fresh food, glass/steel bottles, ceramic cups and plates, microwave in glass, <b>cotton toys</b>.</p>
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
      blurb: 'Heavy metals, forms, uses and sources of mercury, how it harms the body, Minamata disease and treatment.',
      source: 'Lecture W2 (Chemical hazards: BPA, mercury), pages 4–6',
      tabs: [
        { title: 'Heavy metals and mercury', html: `
          <ul>
            <li><b>Heavy metals</b>: lead, mercury, arsenic, cadmium, chromium; <b>acute</b> or <b>chronic</b>.</li>
            <li>Mercury: <b>liquid at room temperature</b>, transition metal; oxidation states <b>+1, +2</b>.</li>
            <li>Forms: <b>elemental, organic, inorganic</b>.</li>
            <li><b>Methylmercury</b>: commonest organic form; microbes <b>methylate</b> inorganic Hg; <b>bioaccumulates in fish</b>.</li>
          </ul>
          <figure data-fig="m2-mercury-cycle"></figure>
        ` },
        { title: 'Uses and sources', html: `
          <table class="tbl">
            <thead><tr><th>Use (pie chart)</th><th>Share</th></tr></thead>
            <tbody>
              <tr><td><b>Artisanal small-scale gold mining</b></td><td>22%</td></tr>
              <tr><td>Vinyl chloride monomer</td><td>21%</td></tr>
              <tr><td>Chlor-alkali</td><td>13%</td></tr>
              <tr><td>Batteries / dental amalgam / measuring devices</td><td>9% each</td></tr>
              <tr><td>Electronics / lamps</td><td>5% / 4%</td></tr>
            </tbody>
          </table>
          <ul>
            <li><b>Coal burning</b>: half of atmospheric mercury.</li>
            <li><b>Dental amalgam</b>: 50% elemental Hg.</li>
            <li>Broken <b>fluorescent lamps</b>, cement, fish.</li>
            <li>Most absorbed: <b>Hg(0)</b> and methylmercury.</li>
          </ul>
        ` },
        { title: 'Body, effects, treatment', html: `
          <ul>
            <li>Vapour is <b>lipophilic</b>: absorbed via lungs.</li>
            <li>Crosses <b>blood-brain</b> and <b>placental</b> barriers; oxidised to +2.</li>
            <li>Binds <b>thiol (–SH)</b> groups of cysteine; target organ <b>brain</b>.</li>
            <li>Accumulates in kidneys, nerves, liver.</li>
            <li>High exposure: <b>Minamata disease</b>.</li>
            <li><b>Acrodynia (pink disease)</b>: pink peeling skin.</li>
            <li>Spill: <b>powdered sulfur</b>. Chelation: <b>DMSA</b>.</li>
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
      blurb: 'Types of biological hazard, and the malaria and COVID-19 case studies.',
      source: 'Lecture W2S5 (Environmental hazards), pages 9–14',
      tabs: [
        { title: 'Types and malaria', html: `
          <table class="tbl">
            <tbody>
              <tr><td>Viral</td><td>COVID-19, dengue, Ebola, HIV</td></tr>
              <tr><td>Bacterial</td><td>TB, cholera, typhoid, plague</td></tr>
              <tr><td>Parasitic</td><td>Malaria, filariasis, leishmaniasis</td></tr>
              <tr><td>Fungal</td><td>Candidiasis, aspergillosis</td></tr>
              <tr><td><b>Prion</b></td><td><b>CJD, BSE</b> (mad cow)</td></tr>
              <tr><td>Toxins</td><td><b>Aflatoxin</b>, botulinum</td></tr>
            </tbody>
          </table>
          <h4>Malaria</h4>
          <p><b><em>Plasmodium</em></b> via <b>female <em>Anopheles</em></b>. WHO 2022: <b>249 million</b> cases, <b>608,000</b> deaths.</p>
          <table class="tbl">
            <tbody>
              <tr><td><em>P. falciparum</em></td><td><b>Most lethal</b>; &gt;90% of deaths</td></tr>
              <tr><td><em>P. vivax</em></td><td><b>Most widespread</b>; relapse (<b>hypnozoites</b>)</td></tr>
              <tr><td><em>P. malariae</em></td><td>Chronic; kidney damage</td></tr>
              <tr><td><em>P. ovale</em></td><td>West Africa; relapses</td></tr>
              <tr><td><em>P. knowlesi</em></td><td>Zoonotic, <b>macaques</b></td></tr>
            </tbody>
          </table>
          <ol class="steps">
            <li><b>Liver stage</b> sporozoites → merozoites, <b>7–10 days</b></li>
            <li><b>Blood stage</b> RBCs burst every <b>48–72 h</b> (fever spikes)</li>
            <li><b>Mosquito</b> gametocytes → <b>oocyst</b> → sporozoites in salivary glands</li>
          </ol>
          <p>Fever <b>39–41°C</b>, anaemia, <b>splenomegaly</b>; falciparum: cerebral malaria, fatal in <b>24 h</b>.</p>
        ` },
        { title: 'Malaria control', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>ITNs</b></td><td>Cut transmission <b>50%</b>; LLINs last <b>3–5 years</b></td></tr>
              <tr><td><b>IRS</b></td><td>Indoor residual spray (DDT, pyrethroids)</td></tr>
              <tr><td>Larval control</td><td><em>Bacillus thuringiensis israelensis</em></td></tr>
              <tr><td><b>ACTs</b></td><td>WHO first-line (artesunate combos)</td></tr>
              <tr><td><b>RTS,S (Mosquirix)</b></td><td>First vaccine, <b>2021</b></td></tr>
              <tr><td><b>R21/Matrix-M</b></td><td>Second, <b>2023</b>; Oxford-Serum Institute</td></tr>
            </tbody>
          </table>
          <h4>Bio-hazard control</h4>
          <ul>
            <li><b>WASH</b>: single most effective vs waterborne disease.</li>
            <li>IVM; vaccination via <b>EPI</b>; surveillance: <b>IDSP, IHIP</b> (India), WHO <b>GOARN</b>.</li>
          </ul>
        ` },
        { title: 'COVID-19', html: `
          <p class="lead"><b>SARS-CoV-2</b>, <b>Wuhan, Dec 2019</b>; pandemic <b>11 March 2020</b>; 700M+ cases, ~7M deaths.</p>
          <ul>
            <li><b>+ssRNA</b>, ~30 kb; spike binds <b>ACE2</b>; <b>TMPRSS2</b> primes.</li>
            <li><b>Remdesivir</b> blocks RdRp.</li>
            <li><b>R₀</b>: original 2–3, Delta 5–6, <b>Omicron 9–12</b>.</li>
            <li>Asymptomatic 35–45%; severe ~5%; critical 1–2%; <b>long COVID</b> 10–35%.</li>
          </ul>
          <table class="tbl">
            <tbody>
              <tr><td>Alpha</td><td>UK, Dec 2020; ~70% more transmissible</td></tr>
              <tr><td>Beta</td><td>South Africa</td></tr>
              <tr><td><b>Delta</b></td><td><b>India, Oct 2020</b>; most severe wave</td></tr>
              <tr><td><b>Omicron</b></td><td>South Africa; ~10× transmissible, milder</td></tr>
            </tbody>
          </table>
          <ul>
            <li>Vaccines: mRNA (Pfizer, Moderna), vector (AstraZeneca), inactivated (<b>Covaxin</b>).</li>
            <li><b>N95</b> cuts aerosols &gt;90%; <b>Paxlovid</b> cuts hospitalisation 89%.</li>
            <li>Tracing: <b>Aarogya Setu</b>.</li>
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
      blurb: 'Radiological, climatic and technological hazards, their causes and effects, and solutions.',
      source: 'Lecture W2S5 (Environmental hazards), pages 14–19',
      tabs: [
        { title: 'Other hazards and causes', html: `
          <table class="tbl">
            <tbody>
              <tr><td><b>Radiological</b></td><td>Nuclear accidents, waste; cancer, <b>genetic mutations</b></td></tr>
              <tr><td><b>Climatic</b></td><td>Global warming, heatwaves, <b>sea-level rise</b></td></tr>
              <tr><td><b>Technological</b></td><td><b>Oil spills</b>, industrial accidents, chemical leaks</td></tr>
            </tbody>
          </table>
          <ul>
            <li>Causes: natural, industrialisation, urbanisation, deforestation, climate change, population growth.</li>
            <li>Irrigation → <b>salinisation, waterlogging</b>.</li>
            <li>Global effects: <b>climate change, ozone depletion</b>.</li>
          </ul>
        ` },
        { title: 'Solutions', html: `
          <ul>
            <li>Sustainable development, pollution control, regulation, disaster management.</li>
            <li>Tech: AI monitoring, remote sensing, <b>GIS</b>, green chemistry.</li>
            <li>Certified products: <b>Oeko-Tex</b> (textiles), BPA-free, <b>EU Ecolabel</b>.</li>
            <li><b>Handwashing</b> cuts infection spread up to <b>50%</b>.</li>
            <li>Safe disposal of medicines, paints, solvents; never burn plastic or treated wood.</li>
          </ul>
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
