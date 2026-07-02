/* ===================================================================
   I18N.JS — Internationalization (IT/EN) toggle system
   =================================================================== */

(function () {
  'use strict';

  const translations = {
    /* --- Navbar --- */
    'nav.about': { it: 'Chi sono', en: 'About' },
    'nav.experience': { it: 'Percorso', en: 'Journey' },
    'nav.skills': { it: 'Competenze', en: 'Skills' },
    'nav.projects': { it: 'Progetti', en: 'Projects' },
    'nav.contact': { it: 'Contatti', en: 'Contact' },
    'nav.teaching': { it: 'Teaching', en: 'Teaching' },
    'nav.blog': { it: 'Blog', en: 'Blog' },

    /* --- Hero --- */
    'hero.greeting': { it: 'Ciao, mi chiamo', en: 'Hi, my name is' },
    'hero.name': { it: 'Nicolò Favagrossa', en: 'Nicolò Favagrossa' },
    'hero.tagline': {
      it: 'Studente magistrale in Fisica delle Particelle & Astroparticelle. Unisco il rigore della ricerca fondamentale con l\'approccio pratico del mondo R&D.',
      en: 'Master\'s student in Particle Physics & Astroparticles. I bridge the rigor of fundamental research with the hands-on approach of R&D.'
    },
    'hero.cta.projects': { it: 'Scopri i miei progetti', en: 'Explore my projects' },
    'hero.cta.cv': { it: '📄 Scarica CV', en: '📄 Download CV' },

    /* --- About --- */
    'about.title': { it: 'Chi sono', en: 'About Me' },
    'about.subtitle': {
      it: 'Un ponte tra l\'accademia e l\'industria',
      en: 'Bridging academia and industry'
    },
    'about.p1': {
      it: 'Sono uno studente magistrale in Fisica (indirizzo <strong>Particelle Elementari e Astroparticelle</strong>) all\'Università degli Studi di Milano. Il mio percorso si divide tra la <strong>ricerca fondamentale</strong> — in particolare l\'analisi dati dei muoni cosmici per l\'esperimento JUNO — e l\'<strong>esperienza pratica</strong> maturata in oltre due anni come Tecnico di Laboratorio R&D Junior in una startup del settore energetico.',
      en: 'I\'m a Master\'s student in Physics (<strong>Elementary Particles and Astroparticles</strong>) at the University of Milan. My path splits between <strong>fundamental research</strong> — specifically cosmic muon data analysis for the JUNO experiment — and the <strong>hands-on experience</strong> gained during 2+ years as a Junior R&D Lab Technician at an energy-sector startup.'
    },
    'about.p2': {
      it: 'Mi piace "sporcarmi le mani" sia con il codice che in laboratorio: cerco costantemente di unire il <strong>rigore analitico</strong> del mondo accademico con la <strong>concretezza e il problem-solving</strong> tipici delle startup. Nel tempo libero apprezzo i Lego, i videogiochi e i documentari spaziali.',
      en: 'I enjoy getting my hands dirty with both code and hardware, constantly merging the <strong>analytical rigor</strong> of academia with the <strong>practical problem-solving</strong> mindset of startups. In my free time, I\'m into Lego, video games, and space documentaries.'
    },
    'about.highlight1.number': { it: '2+', en: '2+' },
    'about.highlight1.label': { it: 'Anni in R&D', en: 'Years in R&D' },
    'about.highlight2.number': { it: 'JUNO', en: 'JUNO' },
    'about.highlight2.label': { it: 'Esperimento', en: 'Experiment' },
    'about.highlight3.number': { it: 'UniMi', en: 'UniMi' },
    'about.highlight3.label': { it: 'Magistrale', en: 'Master\'s' },

    /* --- Experience & Education --- */
    'exp.title': { it: 'Percorso', en: 'Journey' },
    'exp.subtitle': { it: 'Il mio percorso tra accademia e industria', en: 'My path between academia and industry' },
    'exp.tab.experience': { it: '💼 Esperienze', en: '💼 Experience' },
    'exp.tab.education': { it: '🎓 Istruzione', en: '🎓 Education' },

    /* Experience entries */
    'exp.work1.date': { it: 'Gen 2025 — Mag 2026', en: 'Jan 2025 — May 2026' },
    'exp.work1.title': { it: 'Tecnico di Laboratorio R&D Junior', en: 'Junior R&D Lab Technician' },
    'exp.work1.org': { it: 'Prometheus S.p.A. — Kilometro Rosso, Bergamo', en: 'Prometheus S.p.A. — Kilometro Rosso, Bergamo' },
    'exp.work1.desc': {
      it: 'Progettazione e implementazione di campagne sperimentali basate su modelli teorici. Sviluppo di strumenti di analisi dati e modelli numerici (Python, C++) per la validazione di fenomeni fisici e calibrazione di sensori. Interfaccia tecnica tra R&D, partner accademici e investitori tramite redazione di report scientifici.',
      en: 'Design and implementation of experimental campaigns based on theoretical models. Development of data analysis tools and numerical models (Python, C++) for physical phenomena validation and sensor calibration. Technical interface between R&D, academic partners, and investors through scientific reporting.'
    },

    'exp.work2.date': { it: 'Nov 2023 — Gen 2025', en: 'Nov 2023 — Jan 2025' },
    'exp.work2.title': { it: 'Assistente Tecnico R&D Junior', en: 'Junior R&D Assistant Technician' },
    'exp.work2.org': { it: 'Prometheus S.p.A. — Kilometro Rosso, Bergamo', en: 'Prometheus S.p.A. — Kilometro Rosso, Bergamo' },
    'exp.work2.desc': {
      it: 'Supporto operativo allo scale-up: transizione dai setup prototipali della fase early-stage all\'infrastruttura R&D presso il Kilometro Rosso. Gestione operativa del laboratorio: approntamento della strumentazione di misura, preparazione di campioni e soluzioni, e ottimizzazione della logistica dei materiali. Collaborazione con Senior Nuclear Engineers per la configurazione di strumentazione nucleare.',
      en: 'Operational support for scale-up: transition from early-stage prototype setups to the R&D infrastructure at Kilometro Rosso. Laboratory operations management: preparation of measurement instrumentation, sample and solution preparation, and materials logistics optimization. Collaboration with Senior Nuclear Engineers for nuclear instrumentation configuration.'
    },

    /* Education entries */
    'exp.edu1.date': { it: '2025 — Presente', en: '2025 — Present' },
    'exp.edu1.title': { it: 'Laurea Magistrale in Fisica', en: 'Master\'s Degree in Physics' },
    'exp.edu1.org': { it: 'Università degli Studi di Milano — Particelle e Astroparticelle', en: 'University of Milan — Particles & Astroparticles' },
    'exp.edu1.desc': {
      it: 'Percorso magistrale con focus su fisica delle alte energie, rivelatori di particelle e analisi dati avanzata. Tesi sull\'analisi dei muoni cosmici per l\'esperimento JUNO.',
      en: 'Master\'s program focused on high-energy physics, particle detectors, and advanced data analysis. Thesis on cosmic muon analysis for the JUNO experiment.'
    },

    'exp.edu2.date': { it: '2020 — 2024', en: '2020 — 2024' },
    'exp.edu2.title': { it: 'Laurea Triennale in Fisica', en: 'Bachelor\'s Degree in Physics' },
    'exp.edu2.org': { it: 'Università degli Studi di Milano — Voto: 105/110', en: 'University of Milan — Grade: 105/110' },
    'exp.edu2.desc': {
      it: 'Tesi: analisi indipendente dei muoni cosmici dai primi dati grezzi del rivelatore JUNO, sviluppata in C++/ROOT. Sviluppo di un metodo di analisi dati indipendente con benchmarking rispetto agli algoritmi ufficiali della collaborazione JUNO.',
      en: 'Thesis: independent cosmic muon analysis from the first raw data of the JUNO detector, developed in C++/ROOT. Development of an independent data analysis method with benchmarking against the official JUNO collaboration algorithms.'
    },

    /* --- Skills --- */
    'skills.title': { it: 'Competenze Tecniche', en: 'Technical Skills' },
    'skills.subtitle': { it: 'Strumenti e tecnologie che utilizzo quotidianamente', en: 'Tools and technologies I use daily' },
    'skills.cat1': { it: '💻 Programmazione', en: '💻 Programming' },
    'skills.cat2': { it: '📊 Analisi Dati', en: '📊 Data Analysis' },
    'skills.cat3': { it: '🔬 Lab & Hardware', en: '🔬 Lab & Hardware' },

    /* --- Projects --- */
    'projects.title': { it: 'Progetti', en: 'Projects' },
    'projects.subtitle': {
      it: 'I miei progetti principali — dalla fisica delle particelle alla simulazione Monte Carlo',
      en: 'My main projects — from particle physics to Monte Carlo simulation'
    },
    'projects.viewAll': { it: 'Vedi tutti i progetti →', en: 'View all projects →' },

    /* Project-specific contexts (rich descriptions beyond GitHub) */
    'project.auger-anisotropy-scan.context': {
      it: 'Suite avanzata in Python per l\'analisi statistica dei raggi cosmici ad altissima energia (UHECR). Utilizza metodi Monte Carlo ottimizzati per individuare clustering e anisotropie attorno a sorgenti extragalattiche come NGC 5128 (Centaurus A).',
      en: 'Advanced Python suite for ultra-high-energy cosmic ray (UHECR) statistical analysis. Uses optimized Monte Carlo methods to detect clustering and anisotropies around extragalactic sources like NGC 5128 (Centaurus A).'
    },
    'project.juno-cosmic-muons-analysis.context': {
      it: 'Framework C++/ROOT sviluppato per la tesi di laurea: un metodo di analisi indipendente per identificare e caratterizzare i muoni cosmici a partire dai primissimi dati grezzi acquisiti dal rivelatore JUNO durante la fase di riempimento.',
      en: 'C++/ROOT framework built for my thesis: an independent analysis method to identify and characterize cosmic muons from the very first raw data acquired by the JUNO detector during its filling phase.'
    },
    'project.atlas-hzz4l-analysis.context': {
      it: 'Analisi dati basata su PyROOT per la ricostruzione del decadimento del Bosone di Higgs nel canale H → ZZ* → 4ℓ. Sviluppata su 10 fb⁻¹ di ATLAS Open Data (13 TeV), include pipeline batch, cutflow cinematici e "Money Plots" con ratio pad e incertezze statistiche.',
      en: 'PyROOT-based data analysis for reconstructing the Higgs boson decay in the H → ZZ* → 4ℓ channel. Built using 10 fb⁻¹ of ATLAS Open Data (13 TeV), featuring automated batch pipelines, kinematic cutflows, and publication-style "Money Plots" with ratio pads.'
    },
    'project.MC-Nuclear-Scattering.context': {
      it: 'Simulazione Monte Carlo in C++/ROOT per l\'analisi della propagazione degli errori sulla misura della sezione d\'urto differenziale dello scattering Compton nucleare.',
      en: 'Monte Carlo simulation in C++/ROOT for error propagation analysis on the differential cross-section measurement of nuclear Compton scattering.'
    },
    'project.Latex.context': {
      it: 'Archivio in continuo aggiornamento dove organizzo il mio materiale accademico, professionale e personale — appunti, relazioni, tesi e presentazioni in LaTeX.',
      en: 'A continuously updated archive where I organize my academic, professional, and personal material — notes, reports, theses, and presentations in LaTeX.'
    },

    /* --- Contact --- */
    'contact.title': { it: 'Contatti', en: 'Get in Touch' },
    'contact.subtitle': {
      it: 'Scrivimi per collaborazioni, opportunità o anche solo per una chiacchierata su fisica e codice!',
      en: 'Reach out for collaborations, opportunities, or just to chat about physics and code!'
    },
    'contact.email': { it: 'Email Personale', en: 'Personal Email' },
    'contact.email.uni': { it: 'Email Istituzionale', en: 'University Email' },
    'contact.linkedin': { it: 'LinkedIn', en: 'LinkedIn' },
    'contact.github': { it: 'GitHub', en: 'GitHub' },

    /* --- Footer --- */
    'footer.made': { it: 'Fatto con', en: 'Made with' },
    'footer.and': { it: 'e', en: 'and' },
    'footer.coffee': { it: 'caffè', en: 'coffee' },

    /* --- Coming Soon pages --- */
    'coming.teaching.title': { it: 'In Arrivo', en: 'Coming Soon' },
    'coming.teaching.text': {
      it: 'Sto preparando materiale didattico su Matematica e Fisica — spiegazioni, esercizi e risorse pensate per rendere questi argomenti più accessibili. Resta sintonizzato!',
      en: 'I\'m preparing educational material on Mathematics and Physics — explanations, exercises, and resources designed to make these subjects more accessible. Stay tuned!'
    },
    'coming.blog.title': { it: 'In Arrivo', en: 'Coming Soon' },
    'coming.blog.text': {
      it: 'Presto pubblicherò articoli su fisica delle particelle, analisi dati, esperienze in laboratorio e molto altro. Torna a trovarmi!',
      en: 'Soon I\'ll be publishing articles on particle physics, data analysis, lab experiences, and much more. Come back and visit!'
    },
    'coming.backHome': { it: '← Torna alla Home', en: '← Back to Home' },

    /* --- Projects Page --- */
    'projectsPage.title': { it: 'Tutti i Progetti', en: 'All Projects' },
    'projectsPage.subtitle': {
      it: 'Esplora nel dettaglio i miei progetti — dall\'analisi dati alla simulazione Monte Carlo',
      en: 'Explore my projects in detail — from data analysis to Monte Carlo simulation'
    },

    /* --- Teaching Page --- */
    'teachingPage.title': { it: 'Teaching', en: 'Teaching' },

    /* --- Blog Page --- */
    'blogPage.title': { it: 'Blog', en: 'Blog' },
  };

  /* --- State --- */
  let currentLang = localStorage.getItem('lang') || detectLang();

  function detectLang() {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('it') ? 'it' : 'en';
  }

  /* --- Apply translations --- */
  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[key] && translations[key][currentLang]) {
        el.innerHTML = translations[key][currentLang];
      }
    });

    /* Update HTML lang attribute */
    document.documentElement.lang = currentLang;

    /* Update toggle buttons */
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });

    /* Dispatch event for other modules (e.g., projects.js) */
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: currentLang } }));
  }

  /* --- Public API --- */
  window.i18n = {
    t: function (key) {
      if (translations[key] && translations[key][currentLang]) {
        return translations[key][currentLang];
      }
      return key;
    },
    getLang: function () {
      return currentLang;
    },
    setLang: function (lang) {
      currentLang = lang;
      localStorage.setItem('lang', lang);
      applyTranslations();
    }
  };

  /* --- Init --- */
  document.addEventListener('DOMContentLoaded', function () {
    applyTranslations();

    /* Toggle button listeners */
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.addEventListener('click', function () {
        window.i18n.setLang(this.dataset.lang);
      });
    });
  });
})();
