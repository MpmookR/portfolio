import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/footer";
import Badge from "../components/Badge";
import "../css/newspaper.css";

import portrait from "../assets/images/home/mook.jpg";
import teaserPortrait from "../assets/images/home/mook-censored.jpg";
import teaserProject from "../assets/images/home/teaser-project.png";
import { LENSES, PROJECTS } from "../data/projects";
import resumePdf from "../assets/resumeFile/PRattana_ProductEngineerCV.pdf";

const EMAIL = "mpmookr@gmail.com";
const RIGHT_TO_WORK = "Eligible to work in the UK - No employer sponsorship required";
const LINKEDIN = "https://www.linkedin.com/in/puangpaka-rattana-4608981b2";
const GITHUB = "https://github.com/MpmookR";
const HEVY = "https://hevy.com/user/mookr";
const TIKTOK = "https://www.tiktok.com/@mookrattana.p";

// In-page jumps. A plain href="#about" would go through React Router,
// which remounts the page and scrolls to the top (see App.jsx), so we
// scroll by hand and move focus to the section for keyboard users.
function jumpTo(event, id) {
  event.preventDefault();
  const target = document.getElementById(id);
  if (!target) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  target.focus({ preventScroll: true });
}

function Jump({ to, className, children, ...rest }) {
  return (
    <a href={`#${to}`} className={className} onClick={(e) => jumpTo(e, to)} {...rest}>
      {children}
    </a>
  );
}

function Signature({ className }) {
  return (
    <svg className={className} role="img" aria-label="Mook" viewBox="380 260 760 500" fill="none">
      <path
        className="np-sig-path"
        pathLength="1"
        d="M425 720 C 520 520, 620 330, 690 300 C 735 290, 690 520, 665 600 C 700 520, 820 370, 880 385 C 935 400, 880 560, 905 610 C 930 650, 1030 600, 1095 545"
        stroke="currentColor"
        strokeWidth="26"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// The paper texture is a background image (see .np-front in newspaper.css);
// this only adds the two fold creases on top.
function Folds() {
  return <div className="np-fold" aria-hidden="true" />;
}

const Icon = {
  moon: (
    <svg aria-hidden="true" width="140" height="120" viewBox="0 0 140 120" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M34 22a14 14 0 1 0 14 18a11 11 0 0 1-14-18z" />
      <path d="M100 18l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
      <path d="M118 46l1.5 3.5 3.5 1.5-3.5 1.5-1.5 3.5-1.5-3.5-3.5-1.5 3.5-1.5z" />
      <rect x="58" y="50" width="34" height="62" rx="2" />
      <path d="M75 50V36M70 40h10" />
      <path d="M66 62h6M78 62h6M66 74h6M78 74h6M66 86h6M78 86h6" />
      <path d="M70 112v-12h10v12" />
    </svg>
  ),
  laptop: (
    <svg aria-hidden="true" width="150" height="110" viewBox="0 0 150 110" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="22" y="14" width="106" height="68" rx="4" />
      <path d="M10 92h130l-8 8H18z" />
      <path d="M58 38l-12 10 12 10M92 38l12 10-12 10M80 32l-10 32" />
    </svg>
  ),
  dumbbell: (
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 7v10M3 9v6M18 7v10M21 9v6M6 12h12" />
    </svg>
  ),
  whisk: (
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20l7-7" />
      <path d="M11 13c-2-4 0-9 4-9s5 4 3 7-6 4-7 2z" />
    </svg>
  ),
  play: (
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M10 9l5 3-5 3z" />
    </svg>
  ),
  code: (
    <svg aria-hidden="true" width="40" height="34" viewBox="0 0 40 34" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 9L4 17l8 8M28 9l8 8-8 8M23 5l-6 24" />
    </svg>
  ),
};

// One project story. `variant` picks the layout: feature, brief or side.
function ProjectStory({ project, lens, variant }) {
  const { title, kicker, year, role, link, image, tagline } = project;
  const text = (
    <>
      <span className="np-meta">{kicker}</span>
      <h3 className={variant === "feature" ? "np-feature-title" : "np-brief-title"}>{title.toUpperCase()}</h3>
      {tagline && variant === "feature" && <p className="np-hand np-feature-sub">{tagline}</p>}
      <p key={`pitch-${lens}`} className="np-swap">
        {project.pitch[lens]}
      </p>
      <ul key={`chips-${lens}`} className="np-chips np-swap" aria-label="Highlights">
        {project.chips[lens].map((chip) => (
          <li key={chip}>{chip}</li>
        ))}
      </ul>
      <span className="np-byline">
        {role} · {year}
      </span>
      <span className="np-tap">
        Read the case study<span className="np-visually-hidden">: {title}</span> →
      </span>
    </>
  );

  if (variant === "feature") {
    return (
      <Link to={link} className="np-story np-proj np-feature">
        <div className="np-feature-text">{text}</div>
        <img className="np-feature-img" src={image.src} alt={image.alt} loading="lazy" />
      </Link>
    );
  }
  if (variant === "side") {
    return (
      <Link to={link} className="np-story np-proj np-side">
        <img src={image.src} alt={image.alt} loading="lazy" />
        {text}
      </Link>
    );
  }
  return (
    <Link to={link} className="np-story np-proj np-brief">
      <img src={image.src} alt={image.alt} loading="lazy" style={project.title === "Ondo" ? { objectPosition: "left top" } : undefined} />
      <div className="np-brief-text">{text}</div>
    </Link>
  );
}

const APPROACH = ["Understand the problem.", "Design the experience.", "Build it. Test it. Improve it."];

// Types each line in turn, holds, then starts again. The full text sits
// underneath (invisible) so the box never changes size, and screen readers
// get the plain list instead of the animation.
function Typewriter({ lines, speed = 55, hold = 2600 }) {
  const total = lines.reduce((sum, line) => sum + line.length, 0);
  const [count, setCount] = useState(0);
  const [reduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    if (reduced) return;
    const delay = count >= total ? hold : speed;
    const timer = setTimeout(() => setCount((c) => (c >= total ? 0 : c + 1)), delay);
    return () => clearTimeout(timer);
  }, [count, total, speed, hold, reduced]);

  const shown = reduced ? total : count;
  // How many characters of each line are typed, and which line holds the cursor.
  const starts = lines.map((_, i) => lines.slice(0, i).reduce((sum, line) => sum + line.length, 0));
  const typedPerLine = lines.map((line, i) => Math.max(0, Math.min(line.length, shown - starts[i])));
  const activeLine = reduced ? -1 : Math.max(0, typedPerLine.findIndex((typed, i) => typed < lines[i].length));
  const cursorLine = activeLine === -1 || typedPerLine.every((t, i) => t === lines[i].length) ? lines.length - 1 : activeLine;

  return (
    <>
      <ol className="np-visually-hidden">
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ol>
      <ol className="np-type" aria-hidden="true">
        {lines.map((line, i) => {
          const typed = typedPerLine[i];
          const showCursor = !reduced && i === cursorLine;
          return (
            <li key={line}>
              <span className="np-type-num">{i + 1}</span>
              <span className="np-type-line">
                {line.slice(0, typed)}
                {showCursor && <span className="np-type-cursor" />}
                <span className="np-type-ghost">{line.slice(typed)}</span>
              </span>
            </li>
          );
        })}
      </ol>
    </>
  );
}

function BackToTop() {
  return (
    <Jump to="np-top" className="np-back">
      ↑ Back to front page
    </Jump>
  );
}

function NewsHome() {
  const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  const [lens, setLens] = useState("design");
  const location = useLocation();

  // Arriving with a hash (e.g. the old /portfolio link redirects to /#projects):
  // wait a frame so App's scroll-to-top runs first, then jump to the section.
  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (!id) return;
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ block: "start" });
        target.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [location.hash]);

  return (
    <div className="np-page">
      <main className="np" id="np-top" tabIndex={-1}>
        {/* ===== FRONT PAGE ===== */}
        <article className="np-front" aria-label="Front page">
          <header className="np-masthead">
            <div className="np-dateline">
              <span>London edition · {today}</span>
              <span>Portfolio for today</span>
              <span>Open to work</span>
            </div>
            <h1 className="np-title">The Daily Mook</h1>
            <nav className="np-nav" aria-label="Sections">
              <Jump to="about">About</Jump>
              <Jump to="projects">Projects</Jump>
              <Jump to="contact">Contact</Jump>
            </nav>
          </header>

          <div className="np-front-grid">
            <Jump to="about" className="np-story np-lead">
              <span className="np-kicker np-kicker--tag">Breaking</span>
              <h2 className="np-lead-title">DESIGN × ENGINEER</h2>
              <p className="np-hand np-lead-sub">
                <span className="np-highlight">building end-to-end, from research to shipped code</span>
              </p>
              <span className="np-sticker" aria-hidden="true">
                OPEN
                <br />
                TO
                <br />
                WORK!
              </span>
              <span className="np-tap">Read the full story ↓</span>
            </Jump>

            <Jump to="about" className="np-story np-teaser">
              <div className="np-panel np-panel--photo">
                <img src={teaserPortrait} alt="Mook in a diner booth, eyes hidden behind a black bar that says Censored" />
              </div>
              <h3 className="np-teaser-title">FROM 0 TO 1: SHE DESIGNS IT, THEN SHIPS IT</h3>
              <p>Meet Mook, a designer and developer who takes products from user research to the App Store.</p>
              <span className="np-tap">About me →</span>
            </Jump>

            <Jump to="projects" className="np-story np-teaser">
              <div className="np-panel np-panel--photo">
                <img src={teaserProject} alt="Mook in a diner booth, eyes hidden behind a black bar that says Censored" />
              </div>              
              <h3 className="np-teaser-title">FOUR PROJECTS SHIP, NOBODY PANICS</h3>
              <p>SoPup, Ondo, Local Edition and MoodBoard: case studies with the research, the decisions and the code.</p>
              <span className="np-tap">See projects →</span>
            </Jump>

            <div className="np-classifieds">
              <Jump to="contact" className="np-story np-ad np-ad--hire">
                <span className="np-hand np-ad-title">Hiring?</span>
                <span>Product engineer, frontend or product designer roles. Inquire within.</span>
                <span className="np-rtw">{RIGHT_TO_WORK}</span>
                <span className="np-tap">Contact →</span>
              </Jump>
              <div className="np-ad np-ad--approach">
                <h3 className="np-ad-shout">THE APPROACH</h3>
                <Typewriter lines={APPROACH} />
              </div>
            </div>
          </div>

          <Folds />
        </article>

        {/* ===== ABOUT ===== */}
        <section id="about" className="np-section np-section--paper" aria-labelledby="about-h" tabIndex={-1}>
          <span className="np-section-label">Section A · People</span>
          <h2 id="about-h" className="np-section-title np-section-title--about">FROM 0 TO 1: SHE DESIGNS IT, THEN SHIPS IT</h2>

          <div className="np-about">
            <figure className="np-figure">
              <img src={portrait} alt="Mook smiling in a diner booth, holding her phone" loading="lazy" />
              <figcaption>Mook, phone in hand, most likely testing a build.</figcaption>
            </figure>

            <div className="np-about-body">
              <div className="np-article">
                <p className="np-article-lede">
                  Mook brings product design and engineering together, taking ideas from user research to working
                  products.
                </p>
                <p>
                  Her interest in design began in customer operations, where she saw how confusing digital journeys
                  affected real people. Wanting to understand how her designs could become working products, she
                  completed an MSc in Software Engineering.
                </p>
                <p>
                  She’s now looking for a team where she can contribute, learn from experienced colleagues, and build
                  useful products with care.
                </p>
              </div>

              <div className="np-toolkit">
                <h3 className="np-toolkit-label">The Toolkit</h3>
                <ul className="np-toolkit-list">
                  {["Figma", "SwiftUI", "React", "TypeScript", "Firebase"].map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="np-about-extras">
            <aside className="np-extra np-offclock" aria-labelledby="offclock-h">
                  <h3 id="offclock-h" className="np-kicker-label">Off the clock</h3>
                  <ul className="np-list">
                    <li>
                      {Icon.dumbbell}
                      <span>
                        Lifting at the gym. Meet me on{" "}
                        <a href={HEVY} target="_blank" rel="noopener noreferrer">
                          Hevy
                        </a>
                        .
                      </span>
                    </li>
                    <li>
                      {Icon.whisk}
                      <span>I bake and cook. No promises it’s safe to eat.
                      </span>
                    </li>
                    <li>
                      {Icon.play}
                      <span>TikToker with 5 likes, max. {""}
                        <a href={TIKTOK} target="_blank" rel="noopener noreferrer">
                          Tiktok
                        </a>
                      </span>
                    </li>
                  </ul>
                </aside>

            <div className="np-extra np-resume">
                  <div className="np-resume-text">
                    <h3 className="np-kicker-label">The full résumé</h3>
                    <p>Projects, experience and skills on one page.</p>
                  </div>
                  <a className="np-resume-btn" href={resumePdf} download="PRattana_ProductEngineerCV.pdf">
                    Download CV <span className="np-resume-meta">PDF, 1 page</span>
                  </a>
                </div>
          </div>
          <BackToTop />
        </section>

        {/* ===== PROJECTS ===== */}
        <section id="projects" className="np-section" aria-labelledby="projects-h" tabIndex={-1}>
          <span className="np-section-label">Section B · Projects</span>
          <h2 id="projects-h" className="np-section-title">FOUR PROJECTS SHIP, NOBODY PANICS</h2>

          <div className="np-lens">
            <span className="np-lens-label" id="lens-label">
              Read as
            </span>
            <div className="np-lens-toggle" role="group" aria-labelledby="lens-label">
              {Object.entries(LENSES).map(([key, { label }]) => (
                <button
                  key={key}
                  type="button"
                  className={`np-lens-btn ${lens === key ? "is-active" : ""}`}
                  aria-pressed={lens === key}
                  onClick={() => setLens(key)}
                >
                  {label}
                </button>
              ))}
            </div>
            <span className="np-lens-hint" aria-live="polite">
              {LENSES[lens].hint}
            </span>
          </div>

          <div className="np-projects">
            <ProjectStory project={PROJECTS.sopup} lens={lens} variant="feature" />

            <div className="np-columns">
              <div className="np-main-col">
                <div className="np-slot">
                  <span className="np-slot-label">Take-home challenge</span>
                  <ProjectStory project={PROJECTS.ondo} lens={lens} variant="brief" />
                </div>
                <div className="np-slot">
                  <span className="np-slot-label">Client work</span>
                  <ProjectStory project={PROJECTS.localedition} lens={lens} variant="brief" />
                </div>
              </div>

              <div className="np-sidebar">
                <span className="np-slot-label">Did you know…</span>
                <ProjectStory project={PROJECTS.moodboard} lens={lens} variant="side" />
              </div>
            </div>
          </div>
          <BackToTop />
        </section>

        {/* ===== CONTACT (postcard) ===== */}
        <section id="contact" className="np-postcard-wrap" aria-labelledby="contact-h" tabIndex={-1}>
          <div className="np-postcard">
            <div className="np-postcard-sides">
              <div className="np-postcard-message">
                <span className="np-small-caps">This space for writing messages</span>
                {/* One heading, two lines: screen readers hear "Hiring...? Let’s talk." */}
                <h2 id="contact-h" className="np-hand np-postcard-title">
                  <span className="np-postcard-line">Hiring...?</span>{" "}
                  <span className="np-postcard-line">Let’s talk.</span>
                </h2>
                <p className="np-hand np-postcard-note">
                  I’m looking for product engineer, frontend or product designer roles. Write back any time, I always
                  reply.
                </p>
                <p className="np-rtw np-rtw--postcard">{RIGHT_TO_WORK}</p>
                <div className="np-signoff">
                  <span className="np-hand">Yours,</span>
                  <Signature className="np-sig" />
                </div>
              </div>

              <div className="np-postcard-address">
                <div className="np-postcard-top">
                  <Badge className="np-badge" />
                  <div className="np-stamp">
                    <div className="np-stamp-inner">
                      {Icon.code}
                      <span>1ST CLASS</span>
                    </div>
                  </div>
                </div>

                <div className="np-postcard-head">
                  <span className="np-postcard-word">POST CARD</span>
                  <span className="np-small-caps">This space for address only</span>
                </div>

                <ul className="np-address" aria-label="Ways to reach me">
                  <li>
                    <a href={`mailto:${EMAIL}`}>
                      <span className="np-hand">Email</span>
                      <span className="np-address-cta">Send a letter →</span>
                    </a>
                  </li>
                  <li>
                    <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                      <span className="np-hand">LinkedIn</span>
                      <span className="np-address-cta">Connect →</span>
                    </a>
                  </li>
                  <li>
                    <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                      <span className="np-hand">GitHub</span>
                      <span className="np-address-cta">Read the code →</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <BackToTop />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default NewsHome;
