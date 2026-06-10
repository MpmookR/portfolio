# Puangpaka (Mook) Rattana — Portfolio

Personal portfolio website showcasing frontend engineering and UX design work.  
Built with React + Vite and deployed on Netlify.

**Live site:** [Mook's Portfolio](mooksportfolio.netlify.app)  
**Contact:** mpmookr@gmail.com · [GitHub](https://github.com/MpmookR) · [LinkedIn](https://www.linkedin.com/in/puangpaka-rattana-4608981b2/)

---

## About

This portfolio presents two sides of my work:

- **Frontend Engineering** — full-stack iOS apps and web platforms built end-to-end
- **UX Design** — freelance and academic design projects grounded in user research

Each project page is a written case study covering the problem, research, design decisions, engineering challenges, and outcomes.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build tool | Vite 8 |
| Routing | React Router 7 |
| Styling | Plain CSS (component-scoped) |
| Deployment | Netlify |

---

## Key Implementation Details

- **Page transitions** — fade-in + slide-up animation on every route change using `useLocation` key remounting
- **Scroll reset** — `window.scrollTo(0, 0)` on navigation so every page starts at the top
- **Lightbox** — click-to-zoom image viewer rendered via React Portal (`createPortal`) so `position: fixed` is always relative to the viewport, not any CSS transform ancestor
- **Asset bundling** — all images imported as ES modules so Vite processes and hashes them correctly for production (avoids broken images on Netlify)
- **SPA routing** — `public/_redirects` configured so Netlify serves `index.html` for all routes instead of returning 404 on direct URL access or page refresh

---

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```
src/
├── App.jsx                  # Router setup + page transition wrapper
├── pages/
│   ├── Home.jsx
│   ├── Portfolio.jsx
│   ├── Resume.jsx
│   └── projects/            # Individual case study pages
│       ├── Sopup.jsx
│       ├── SoWell.jsx
│       ├── IShare.jsx
│       ├── MoodBoard.jsx
│       ├── PassionHub.jsx
│       └── Millennium.jsx
├── components/
│   ├── header.jsx
│   ├── footer.jsx
│   ├── projectCard.jsx
│   ├── clickableFolder.jsx
│   ├── ComingSoon.jsx
│   └── caseStudy/           # Shared case study UI components
│       ├── CaseStudyHero.jsx
│       ├── CaseStudyCTA.jsx
│       ├── Lightbox.jsx
│       ├── CaseLink.jsx
│       └── MetaPill.jsx
├── css/                     # Per-page and component stylesheets
└── assets/                  # Images imported as ES modules
public/
└── _redirects               # Netlify SPA routing fallback
```

---

*Built by Puangpaka (Mook) Rattana — MSc Software Engineering · Frontend Developer · UX Designer*
