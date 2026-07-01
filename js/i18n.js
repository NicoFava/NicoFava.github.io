/* ===================================================================
   I18N.JS — Internationalization (IT/EN) toggle system
   =================================================================== */

(function () {
  'use strict';

  const translations = {
    /* --- Navbar --- */
    'nav.about': { it: 'Chi sono', en: 'About' },
    'nav.experience': { it: 'Esperienza', en: 'Experience' },
    'nav.skills': { it: 'Competenze', en: 'Skills' },
    'nav.projects': { it: 'Progetti', en: 'Projects' },
    'nav.contact': { it: 'Contatti', en: 'Contact' },

    /* --- Hero --- */
    'hero.greeting': { it: 'Ciao, mi chiamo', en: 'Hi, my name is' },
    'hero.name': { it: 'Nicolò Favagrossa', en: 'Nicolò Favagrossa' },
    'hero.tagline': {
      it: 'Studente magistrale in Fisica delle Particelle & Astroparticelle. Unisco il rigore della ricerca fondamentale con l\'approccio pratico del mondo R&D.',
      en: 'Master\'s student in Particle Physics & Astroparticles. I bridge the rigor of fundamental research with the hands-on approach of R&D.'
    },
    'hero.cta.projects': { it: 'Scopri i miei progetti', en: 'Explore my projects' },
    'hero.cta.cv': { it: 'Scarica CV', en: 'Download CV' },

    /* --- About --- */
    'about.title': { it: 'Chi sono', en: 'About Me' },
    'about.subtitle': {
      it: 'Un ponte tra l\'accademia e l\'industria',
      en: 'Bridging academia and industry'
    },
    'about.p1': {
      it: 'Sono uno studente magistrale in Fisica (indirizzo <strong>Particelle Elementari e Astroparticelle</strong>) all\'Università degli Studi di Milano. Il mio percorso si divide tra la <strong>ricerca fondamentale</strong> — in particolare l\'analisi dati dei muoni cosmici per l\'esperimento JUNO — e l\'<strong>esperienza pratica</strong> maturata in oltre due anni come Junior R&D Lab Technician in una startup del settore energetico.',
      en: 'I\'m a Master\'s student in Physics (<strong>Elementary Particles and Astroparticles</strong>) at the University of Milan. My path splits between <strong>fundamental research</strong> — specifically cosmic muon data analysis for the JUNO experiment — and the <strong>hands-on experience</strong> gained during 2+ years as a Junior R&D Lab Technician at an energy startup.'
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

    /* --- Experience --- */
    'exp.title': { it: 'Esperienza & Istruzione', en: 'Experience & Education' },
    'exp.subtitle': { it: 'Il mio percorso tra accademia e industria', en: 'My journey between academia and industry' },

    'exp.1.date': { it: '2024 — Presente', en: '2024 — Present' },
    'exp.1.title': { it: 'Laurea Magistrale in Fisica', en: 'Master\'s Degree in Physics' },
    'exp.1.org': { it: 'Università degli Studi di Milano — Particelle e Astroparticelle', en: 'University of Milan — Particles & Astroparticles' },
    'exp.1.desc': {
      it: 'Percorso magistrale con focus su fisica delle alte energie, rivelatori di particelle e analisi dati avanzata. Tesi sull\'analisi dei muoni cosmici per l\'esperimento JUNO.',
      en: 'Master\'s program focused on high-energy physics, particle detectors, and advanced data analysis. Thesis on cosmic muon analysis for the JUNO experiment.'
    },

    'exp.2.date': { it: 'Gen 2023 — Presente', en: 'Jan 2023 — Present' },
    'exp.2.title': { it: 'Junior R&D Lab Technician', en: 'Junior R&D Lab Technician' },
    'exp.2.org': { it: 'Prometheus S.r.l. — Kilometro Rosso, Bergamo', en: 'Prometheus S.r.l. — Kilometro Rosso, Bergamo' },
    'exp.2.desc': {
      it: 'Attività di ricerca e sviluppo nel settore energetico. Gestione di setup sperimentali, calibrazione sensori, analisi dati e report tecnici. Promosso a gennaio 2025.',
      en: 'R&D activities in the energy sector. Managing experimental setups, sensor calibration, data analysis, and technical reports. Promoted January 2025.'
    },

    'exp.3.date': { it: '2020 — 2024', en: '2020 — 2024' },
    'exp.3.title': { it: 'Laurea Triennale in Fisica', en: 'Bachelor\'s Degree in Physics' },
    'exp.3.org': { it: 'Università degli Studi di Milano', en: 'University of Milan' },
    'exp.3.desc': {
      it: 'Tesi: analisi indipendente dei muoni cosmici dai primi dati grezzi del rivelatore JUNO, sviluppata in C++/ROOT.',
      en: 'Thesis: independent cosmic muon analysis from the first raw data of the JUNO detector, developed in C++/ROOT.'
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
