/* ===================================================================
   PROJECTS.JS — Fetch GitHub repos and render project cards
   Supports two modes:
   - Home page (preview): shows first 3 pinned repos with compact cards
   - Projects page (full): shows all pinned repos with expanded cards
   =================================================================== */

(function () {
  'use strict';

  /* --- Pinned repos configuration --- */
  const PINNED_REPOS = [
    'higgs-production-analysis',
    'icecube-neutrino-analysis',
    'auger-anisotropy-scan',
    'juno-cosmic-muons-analysis',
    'atlas-hzz4l-analysis',
    'MC-Nuclear-Scattering',
    'Latex'
  ];

  /* --- Project icons mapping --- */
  const PROJECT_ICONS = {
    'higgs-production-analysis': '🔬',
    'icecube-neutrino-analysis': '🧊',
    'auger-anisotropy-scan': '🔭',
    'juno-cosmic-muons-analysis': '🌌',
    'atlas-hzz4l-analysis': '💥',
    'MC-Nuclear-Scattering': '⚛️',
    'Latex': '📝'
  };

  /* --- Language color mapping --- */
  const LANG_COLORS = {
    'Python': '#3572A5',
    'C++': '#f34b7d',
    'TeX': '#3D6117',
    'Jupyter Notebook': '#F37626',
    'Shell': '#89e051',
    'C': '#555555'
  };

  /* --- Extended project data for the Projects page --- */
  const PROJECT_DETAILS = {
    'higgs-production-analysis': {
      techStack: ['Python', 'MadGraph5', 'Pythia8', 'Delphes', 'PyROOT', 'ROOT'],
      presentation: 'assets/docs/HIGGS.pdf',
      highlights: {
        it: [
          'Simulazione Monte Carlo dei meccanismi di produzione del Bosone di Higgs (ggF, VBF, WH, ZH)',
          'Analisi delle firme cinematiche con MadGraph5_aMC@NLO, Pythia8 e Delphes',
          'Identificazione "blind" del meccanismo di produzione su campioni ATLAS Open Data',
          'Ricostruzione della massa invariante a 4 leptoni e confronto con simulazioni teoriche'
        ],
        en: [
          'Monte Carlo simulation of Higgs boson production mechanisms (ggF, VBF, WH, ZH)',
          'Kinematic signature analysis with MadGraph5_aMC@NLO, Pythia8, and Delphes',
          'Blind identification of the production mechanism on ATLAS Open Data samples',
          'Four-lepton invariant mass reconstruction and comparison with theoretical simulations'
        ]
      }
    },
    'icecube-neutrino-analysis': {
      techStack: ['Python', 'SkyLLH', 'HEALPix', 'NumPy', 'Matplotlib', 'Astropy'],
      presentation: 'assets/docs/ICECUBE.pdf',
      highlights: {
        it: [
          'Ricerca di sorgenti puntiformi di neutrini astrofisici con 14 anni di dati IceCube',
          'Analisi di likelihood non-binnata per identificare clustering spaziale',
          'Mappe del cielo HEALPix per distribuzione eventi e dipendenza energia-declinazione',
          'Stima del fondo tramite scrambling Monte Carlo e calcolo p-value con look-elsewhere effect'
        ],
        en: [
          'Astrophysical neutrino point-source search with 14 years of IceCube data',
          'Unbinned maximum likelihood analysis to identify spatial clustering',
          'HEALPix skymaps for event distributions and energy-declination dependencies',
          'Background estimation via Monte Carlo scrambling and p-value calculation with look-elsewhere effect'
        ]
      }
    },
    'auger-anisotropy-scan': {
      techStack: ['Python', 'NumPy', 'Matplotlib', 'Monte Carlo', 'HEALPix'],
      highlights: {
        it: [
          'Scansione angolare automatizzata per la ricerca di eccessi di raggi cosmici',
          'Generazione di mappe di cielo isotrope tramite simulazione Monte Carlo',
          'Analisi statistica di clustering attorno a sorgenti candidate (NGC 5128)',
          'Ottimizzazione delle prestazioni per grandi dataset di eventi UHECR'
        ],
        en: [
          'Automated angular scanning for cosmic ray excess detection',
          'Generation of isotropic sky maps via Monte Carlo simulation',
          'Statistical clustering analysis around candidate sources (NGC 5128)',
          'Performance optimization for large UHECR event datasets'
        ]
      }
    },
    'juno-cosmic-muons-analysis': {
      techStack: ['C++', 'CERN ROOT', 'Bash', 'Linux'],
      highlights: {
        it: [
          'Pipeline completa di analisi dati: dal formato grezzo alle distribuzioni fisiche',
          'Metodo di selezione muoni indipendente confrontato con gli algoritmi ufficiali JUNO',
          'Analisi del tasso di muoni e confronto con simulazioni Monte Carlo',
          'Contributo alla strategia di veto del fondo cosmogenico del rivelatore'
        ],
        en: [
          'Complete data analysis pipeline: from raw format to physical distributions',
          'Independent muon selection method benchmarked against official JUNO algorithms',
          'Muon rate analysis and comparison with Monte Carlo simulations',
          'Contribution to the detector\'s cosmogenic background veto strategy'
        ]
      }
    },
    'atlas-hzz4l-analysis': {
      techStack: ['Python', 'PyROOT', 'ROOT', 'Jupyter'],
      highlights: {
        it: [
          'Ricostruzione del canale di scoperta del Bosone di Higgs (H → ZZ* → 4ℓ)',
          'Pipeline batch automatizzata su 10 fb⁻¹ di ATLAS Open Data a 13 TeV',
          'Cutflow cinematici ottimizzati e stima del fondo',
          '"Money Plots" con ratio pad, incertezze statistiche e stile pubblicazione'
        ],
        en: [
          'Reconstruction of the Higgs boson discovery channel (H → ZZ* → 4ℓ)',
          'Automated batch pipeline on 10 fb⁻¹ of ATLAS Open Data at 13 TeV',
          'Optimized kinematic cutflows and background estimation',
          'Publication-style "Money Plots" with ratio pads and statistical uncertainties'
        ]
      }
    },
    'MC-Nuclear-Scattering': {
      techStack: ['C++', 'CERN ROOT', 'Monte Carlo'],
      highlights: {
        it: [
          'Simulazione dell\'esperimento di scattering Compton nucleare',
          'Propagazione degli errori sulla sezione d\'urto differenziale tramite metodo Monte Carlo',
          'Generazione di pseudo-dati e analisi di sensibilità',
          'Validazione dei risultati analitici con approcci numerici'
        ],
        en: [
          'Simulation of the nuclear Compton scattering experiment',
          'Error propagation on the differential cross-section via Monte Carlo method',
          'Pseudo-data generation and sensitivity analysis',
          'Validation of analytical results with numerical approaches'
        ]
      }
    },
    'Latex': {
      techStack: ['LaTeX', 'TikZ', 'Beamer'],
      highlights: {
        it: [
          'Archivio organizzato di materiale accademico e professionale',
          'Template personalizzati per tesi, relazioni e presentazioni',
          'Appunti di corsi universitari formattati professionalmente',
          'In continuo aggiornamento con nuovo materiale'
        ],
        en: [
          'Organized archive of academic and professional material',
          'Custom templates for theses, reports, and presentations',
          'Professionally formatted university course notes',
          'Continuously updated with new material'
        ]
      }
    }
  };

  /* --- Fallback data (in case GitHub API rate-limits) --- */
  const FALLBACK_DATA = [
    {
      name: 'higgs-production-analysis',
      html_url: 'https://github.com/NicoFava/higgs-production-analysis',
      language: 'Python',
      stargazers_count: 0,
      description: 'Analysis of Higgs boson production mechanisms (ggF, VBF, WH, ZH) using MadGraph simulations and ATLAS Open Data.'
    },
    {
      name: 'icecube-neutrino-analysis',
      html_url: 'https://github.com/NicoFava/icecube-neutrino-analysis',
      language: 'Python',
      stargazers_count: 1,
      description: 'Astrophysical neutrino point-source search using IceCube Tracks data (2008-2022), featuring SkyLLH likelihood analysis and HEALPix skymaps.'
    },
    {
      name: 'auger-anisotropy-scan',
      html_url: 'https://github.com/NicoFava/auger-anisotropy-scan',
      language: 'Python',
      stargazers_count: 1,
      description: 'Advanced statistical analysis suite for ultra-high-energy cosmic rays.'
    },
    {
      name: 'juno-cosmic-muons-analysis',
      html_url: 'https://github.com/NicoFava/juno-cosmic-muons-analysis',
      language: 'C++',
      stargazers_count: 1,
      description: 'C++/ROOT data analysis pipeline for characterizing the cosmic muon flux during the filling phase of the JUNO Central Detector.'
    },
    {
      name: 'atlas-hzz4l-analysis',
      html_url: 'https://github.com/NicoFava/atlas-hzz4l-analysis',
      language: 'Python',
      stargazers_count: 1,
      description: 'A PyROOT-based analysis of the Higgs boson discovery channel (H -> ZZ* -> 4l) using ATLAS 13 TeV Open Data.'
    },
    {
      name: 'MC-Nuclear-Scattering',
      html_url: 'https://github.com/NicoFava/MC-Nuclear-Scattering',
      language: 'C++',
      stargazers_count: 1,
      description: 'Monte Carlo simulation in C++/ROOT for error propagation on the nuclear Compton scattering cross-section.'
    },
    {
      name: 'Latex',
      html_url: 'https://github.com/NicoFava/Latex',
      language: 'TeX',
      stargazers_count: 1,
      description: 'Continuously updated archive of academic, professional, and personal LaTeX material.'
    }
  ];

  /* --- Detect page mode --- */
  const isProjectsPage = document.getElementById('projects-page-container') !== null;
  const container = document.getElementById(isProjectsPage ? 'projects-page-container' : 'projects-container');

  if (!container) return;

  /* --- Render a compact project card (Home) --- */
  function createProjectCard(repo) {
    const icon = PROJECT_ICONS[repo.name] || '📁';
    const langColor = LANG_COLORS[repo.language] || '#ccc';
    const contextKey = `project.${repo.name}.context`;
    const context = window.i18n ? window.i18n.t(contextKey) : repo.description;
    const displayContext = (context === contextKey) ? repo.description : context;

    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.innerHTML = `
      <div class="project-header">
        <span class="project-icon">${icon}</span>
        <div class="project-links">
          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" aria-label="View on GitHub" title="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
            </svg>
          </a>
        </div>
      </div>
      <h3 class="project-title">
        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a>
      </h3>
      <p class="project-context" data-i18n="${contextKey}">${displayContext}</p>
      <div class="project-meta">
        ${repo.language ? `
          <span class="project-lang">
            <span class="project-lang-dot" style="background-color: ${langColor}"></span>
            ${repo.language}
          </span>
        ` : ''}
        ${repo.stargazers_count > 0 ? `
          <span class="project-stars">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.751.751 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
            </svg>
            ${repo.stargazers_count}
          </span>
        ` : ''}
      </div>
    `;

    return card;
  }

  /* --- Render an expanded project card (Projects page) --- */
  function createExpandedProjectCard(repo) {
    const icon = PROJECT_ICONS[repo.name] || '📁';
    const langColor = LANG_COLORS[repo.language] || '#ccc';
    const contextKey = `project.${repo.name}.context`;
    const context = window.i18n ? window.i18n.t(contextKey) : repo.description;
    const displayContext = (context === contextKey) ? repo.description : context;
    const details = PROJECT_DETAILS[repo.name];
    const lang = window.i18n ? window.i18n.getLang() : 'it';

    const card = document.createElement('div');
    card.className = 'project-card-expanded reveal';

    let techStackHTML = '';
    if (details && details.techStack) {
      techStackHTML = `
        <div class="project-tech-stack">
          ${details.techStack.map(t => `<span class="project-tech-tag">${t}</span>`).join('')}
        </div>
      `;
    }

    let highlightsHTML = '';
    if (details && details.highlights) {
      const items = details.highlights[lang] || details.highlights['en'];
      const title = lang === 'it' ? 'Punti chiave' : 'Key highlights';
      highlightsHTML = `
        <div class="project-highlights">
          <h4>${title}</h4>
          <ul>
            ${items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    /* Presentation button (only for projects with a PDF) */
    let presentationHTML = '';
    if (details && details.presentation) {
      const btnLabel = lang === 'it' ? '📊 Vedi Presentazione' : '📊 View Presentation';
      const basePath = isProjectsPage ? '../' : '';
      presentationHTML = `
        <button class="btn-presentation" data-pdf="${basePath}${details.presentation}" data-title="${repo.name}">
          ${btnLabel}
        </button>
      `;
    }

    card.innerHTML = `
      <div class="project-header">
        <span class="project-icon">${icon}</span>
        <div class="project-links">
          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" aria-label="View on GitHub" title="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
            </svg>
          </a>
        </div>
      </div>
      <h3 class="project-title">
        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a>
      </h3>
      <p class="project-context" data-i18n="${contextKey}">${displayContext}</p>
      ${techStackHTML}
      ${highlightsHTML}
      ${presentationHTML}
      <div class="project-meta">
        ${repo.language ? `
          <span class="project-lang">
            <span class="project-lang-dot" style="background-color: ${langColor}"></span>
            ${repo.language}
          </span>
        ` : ''}
        ${repo.stargazers_count > 0 ? `
          <span class="project-stars">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.751.751 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
            </svg>
            ${repo.stargazers_count}
          </span>
        ` : ''}
      </div>
    `;

    return card;
  }

  /* --- Render projects --- */
  function renderProjects(repos) {
    container.innerHTML = '';

    /* Filter and sort by pinned order */
    const pinnedRepos = PINNED_REPOS
      .map(name => repos.find(r => r.name === name))
      .filter(Boolean);

    /* On Home, show only first 3; on Projects page, show all */
    const reposToShow = isProjectsPage ? pinnedRepos : pinnedRepos.slice(0, 3);
    const createCard = isProjectsPage ? createExpandedProjectCard : createProjectCard;

    reposToShow.forEach(repo => {
      container.appendChild(createCard(repo));
    });

    /* Trigger reveal animation */
    setTimeout(() => {
      container.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('visible');
      });
    }, 100);
  }

  /* --- Fetch from GitHub API --- */
  async function fetchRepos() {
    try {
      const response = await fetch('https://api.github.com/users/NicoFava/repos?per_page=30&sort=updated');
      if (!response.ok) throw new Error('API error');
      const repos = await response.json();
      renderProjects(repos);
    } catch (err) {
      console.warn('GitHub API fetch failed, using fallback data:', err.message);
      renderProjects(FALLBACK_DATA);
    }
  }

  /* --- Init --- */
  document.addEventListener('DOMContentLoaded', fetchRepos);

  /* --- PDF Presentation Modal --- */
  function createPdfModal() {
    if (document.getElementById('pdf-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'pdf-modal';
    modal.className = 'pdf-modal';
    modal.innerHTML = `
      <div class="pdf-modal-backdrop"></div>
      <div class="pdf-modal-container">
        <div class="pdf-modal-header">
          <h3 class="pdf-modal-title"></h3>
          <button class="pdf-modal-close" aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="pdf-modal-body">
          <iframe class="pdf-modal-iframe" frameborder="0"></iframe>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    /* Close handlers */
    const backdrop = modal.querySelector('.pdf-modal-backdrop');
    const closeBtn = modal.querySelector('.pdf-modal-close');

    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      /* Clear iframe to stop any loading */
      setTimeout(() => {
        modal.querySelector('.pdf-modal-iframe').src = '';
      }, 300);
    }

    backdrop.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  function openPdfModal(pdfUrl, title) {
    createPdfModal();
    const modal = document.getElementById('pdf-modal');
    const iframe = modal.querySelector('.pdf-modal-iframe');
    const titleEl = modal.querySelector('.pdf-modal-title');

    titleEl.textContent = title.replace(/-/g, ' ');
    iframe.src = pdfUrl;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  /* Delegate click events for presentation buttons */
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.btn-presentation');
    if (btn) {
      e.preventDefault();
      openPdfModal(btn.dataset.pdf, btn.dataset.title);
    }
  });

  /* --- Re-render on language change --- */
  window.addEventListener('langchange', function () {
    if (!container) return;

    if (isProjectsPage) {
      /* Full re-render for expanded cards (highlights depend on language) */
      fetchRepos();
    } else {
      /* Simple text replacement for compact cards */
      const cards = container.querySelectorAll('.project-card');
      cards.forEach(card => {
        const contextEl = card.querySelector('.project-context');
        if (contextEl) {
          const key = contextEl.getAttribute('data-i18n');
          if (key && window.i18n) {
            const translated = window.i18n.t(key);
            if (translated !== key) {
              contextEl.textContent = translated;
            }
          }
        }
      });
    }
  });
})();
