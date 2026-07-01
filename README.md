# NicoFava.github.io

Personal portfolio website — built with pure HTML, CSS & JavaScript.

## 🔗 Live
[nicofava.github.io](https://nicofava.github.io)

## ✨ Features
- **Dark "Deep Cosmos" theme** with custom color palette
- **Particle network animation** (Canvas) as subtle background
- **IT/EN language toggle** with automatic browser detection
- **Dynamic GitHub projects** fetched from API with physics context
- **Responsive** — works on mobile, tablet, and desktop
- **Zero dependencies** — no frameworks, no build step

## 📁 Structure
```
├── index.html          # Single-page site
├── css/style.css       # Complete design system
├── js/
│   ├── particles.js    # Canvas particle animation
│   ├── i18n.js         # Internationalization (IT/EN)
│   ├── projects.js     # GitHub API fetch & cards
│   └── main.js         # Navigation & UI effects
└── assets/
    ├── img/            # Profile photo, favicon
    └── docs/           # CV PDF
```

## 🛠 Customization

### Add your photo
Place a `profile.jpg` (400×400 px) in `assets/img/` and update the `<img>` tag in `index.html` (About section).

### Add your CV
Place your CV as `cv-favagrossa.pdf` in `assets/docs/`.

### Add new sections
1. Add a `<section id="new-section">` in `index.html`
2. Add a nav link in the `<nav>`
3. Add translation keys in `js/i18n.js`

## 📜 License
MIT