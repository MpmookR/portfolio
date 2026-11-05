# Agent Instructions

How an AI agent should work on this portfolio. Read this before changing anything.

## Project context

Mook's personal portfolio site, live at https://mooksportfolio.netlify.app/.

- **Audience:** hiring teams for software engineering, frontend product engineering and product design roles. Every page should work for both an engineer reviewer and a product design reviewer.
- **Product design view:** written from a senior product designer point of view. Show decisions, trade-offs, rejected options and constraints, not just final screens.
- **Accessibility:** follow WCAG 2.1 AA. This is part of the pitch, not a nice-to-have.
- **Stack:** React 19, Vite, React Router 7, plain JSX (no TypeScript), custom CSS with design tokens. No UI library, no Tailwind.
- **Hosting:** Netlify. `public/_redirects` handles SPA routing.

## Before you start

1. Read this file.
2. Read `src/css/index.css` for the design tokens (colours, font weights) and base styles.
3. Check `src/css/` and `src/components/` before making any style change, so the same style stays consistent across the whole project.
4. Check `src/components/caseStudy/` before building anything for a case study page. Reuse `CaseStudyHero`, `CaseStudyReflection`, `CaseStudyCTA`, `CaseStudyDesignProcess` and `Lightbox` rather than making new ones.
5. For LocalEdition work, read `doc/localDetail.md`.

## Project structure

| Path | What lives there |
| --- | --- |
| `src/App.jsx` | All routes |
| `src/pages/` | Home, Portfolio (projects list), Resume |
| `src/pages/projects/` | One file per case study |
| `src/components/` | Header, footer, shared pieces |
| `src/components/caseStudy/` | Shared case study building blocks |
| `src/css/` | One CSS file per page, plus `index.css` and `caseStudy.css` |
| `src/assets/images/projects/<Project>/` | Images per case study |
| `src/assets/images/projects/cards/` | Compressed webp images for the projects page |
| `doc/` | Notes and drafts for agents |

## General rules

- Writing style: no em dashes, and no AI-sounding phrasing. Keep copy short, plain and specific. Mook trims anything verbose or hedged.
- Follow the existing folder structure and file naming.
- Keep components small. If a pattern is used on two or more pages, it belongs in `src/components/`.
- Change only what was asked. Don't refactor or restyle other pages along the way.
- Ask before making major structural changes (new libraries, new routing, moving folders).

## Code guidelines

- Function components and hooks only.
- Page data lives in a const at the top of the page file (see `SOPUP_HERO`, `PROJECTS`), not inline in the JSX.
- Use `loading="lazy"` and `decoding="async"` on images below the fold, and give images `width` and `height` so the layout doesn't jump.
- Large source images (PNG over about 500 KB) should get a compressed webp copy for display.
- Run lint before saying a task is done.

## Design rules

- **Colours:** use the tokens in `index.css` (`--color-bg`, `--color-green`, `--color-lime`, `--color-pink`, `--color-red`, `--color-greenLight`, `--color-black`, `--color-white`). Don't add new hex values without a reason. Project-specific brand colours (for example LocalEdition's dark and gold) are the exception.
- **Fonts:** Madimi One for headings, Rethink Sans for body. Both are loaded in `index.html`.
- **Breakpoint:** mobile is `max-width: 767px`.
- **CSS class prefixes:** each page CSS file uses its own prefix so styles don't leak.

  | Prefix | File |
  | --- | --- |
  | `cs-` | shared case study |
  | `sp-` | SoPup |
  | `le-` | LocalEdition |
  | `mb-` | MoodBoard |
  | `od-` | Ondo |
  | `is-` | iShare |
  | `sw-` | SoWell |
  | `work-`, `stack-`, `lens-` | projects page |

- **CSS load order:** `index.css` is imported in `main.jsx` and loads after page CSS. If a page rule must override a base rule with the same specificity, raise the specificity (for example `.containerBG.work-page`).
- **Sticky positioning:** `.containerBG` has `overflow-x: hidden`, which breaks `position: sticky` inside it. Use `overflow-x: clip` on the page that needs sticky.
- **Accessibility:**
  - Text contrast at least 4.5:1, or 3:1 for large text. Check it, don't eyeball it.
  - Touch targets at least 44px.
  - Use real `<button>` and `<a>` elements, never clickable divs.
  - Give icon-only buttons an `aria-label`.
- **Motion:**
  - Animate only `transform`, `opacity` and `filter`.
  - Every animation needs a `prefers-reduced-motion` fallback.

## Security

- This is a static site. Never add API keys, tokens or secrets to the repo.
- External links open with `target="_blank" rel="noopener noreferrer"`.
- Don't include personal contact details beyond what is already on the site.

## Commands

| Task | Command |
| --- | --- |
| Install dependencies | `npm install` |
| Start development server | `npm run dev` |
| Build | `npm run build` |
| Lint | `npm run lint` |
| Preview the build | `npm run preview` |

There is no test script yet.

## Boundaries

Ask Mook first, and wait for a clear yes, before you:

- Commit, push, create a branch or open a pull request. She reviews and commits her own changes.
- Delete any file or image. List what you plan to delete and why.
- Add a dependency.
- Change the design tokens in `index.css`, or shared components that other pages use.
- Publish or change anything outside this repo.
