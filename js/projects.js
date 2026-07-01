/* ===================================================================
   PROJECTS.JS — Fetch GitHub repos and render project cards
   =================================================================== */

(function () {
  'use strict';

  /* --- Pinned repos configuration --- */
  const PINNED_REPOS = [
    'auger-anisotropy-scan',
    'juno-cosmic-muons-analysis',
    'atlas-hzz4l-analysis',
    'MC-Nuclear-Scattering',
    'Latex'
  ];

  /* --- Project icons mapping --- */
  const PROJECT_ICONS = {
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

  /* --- Fallback data (in case GitHub API rate-limits) --- */
  const FALLBACK_DATA = [
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
      description: 'Simulazione Monte Carlo in C++/ROOT per l\'analisi della propagazione degli errori sulla misura della sezione d\'urto differenziale dello scattering Compton.'
    },
    {
      name: 'Latex',
      html_url: 'https://github.com/NicoFava/Latex',
      language: 'TeX',
      stargazers_count: 1,
      description: 'Archivio in continuo aggiornamento dove organizzo il mio materiale accademico, professionale e personale.'
    }
  ];

  /* --- Render a single project card --- */
  function createProjectCard(repo) {
    const icon = PROJECT_ICONS[repo.name] || '📁';
    const langColor = LANG_COLORS[repo.language] || '#ccc';
    const contextKey = `project.${repo.name}.context`;
    const context = window.i18n ? window.i18n.t(contextKey) : repo.description;
    /* If i18n returns the key itself, it means no translation found — use fallback */
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

  /* --- Render all projects --- */
  function renderProjects(repos) {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = '';

    /* Filter and sort by pinned order */
    const pinnedRepos = PINNED_REPOS
      .map(name => repos.find(r => r.name === name))
      .filter(Boolean);

    pinnedRepos.forEach(repo => {
      container.appendChild(createProjectCard(repo));
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

  /* --- Re-render on language change --- */
  window.addEventListener('langchange', function () {
    const container = document.getElementById('projects-container');
    if (!container) return;
    /* Re-render with current data */
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
  });
})();
