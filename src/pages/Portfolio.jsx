import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/portfolio.css";
import "../css/header.css";
import sopupImg from "../assets/images/projects/cards/sopup.webp";
import ondoImg from "../assets/images/projects/cards/ondo.webp";
import localEditionImg from "../assets/images/projects/cards/localedition.webp";
import moodboardImg from "../assets/images/projects/cards/moodboard.webp";

const LENSES = {
  design: { label: "Design lens", short: "Design", hint: "Research, decisions and trade-offs first." },
  eng: { label: "Engineering lens", short: "Engineering", hint: "Stack, architecture and what shipped first." },
};

const PROJECTS = [
  {
    id: "sopup",
    title: "SoPup",
    kicker: "iOS app · Solo",
    year: "2025",
    role: "Product Designer + Engineer",
    type: "Personal, shipped to TestFlight",
    link: "/projects/sopup",
    image: { src: sopupImg, width: 957, height: 766, alt: "SoPup app screens" },
    theme: { bg: "#187C26", fg: "#FFFFFF", accent: "#FFFFFF", ctaBg: "#D5DF7E", ctaFg: "#000000", mediaBg: "#EEF6E1" },
    pitch: {
      design: "Research with dog owners shaped a dual-mode app where safety rules are enforced by the system, not left to users.",
      eng: "SwiftUI client, serverless TypeScript matching on Cloud Run, and real-device testing with 10 TestFlight users.",
    },
    chips: {
      design: ["User research", "Usability testing", "Safety by design"],
      eng: ["SwiftUI", "Firebase", "TypeScript"],
    },
  },
  {
    id: "ondo",
    title: "Ondo",
    kicker: "First box redesign · Take-home",
    year: "2026",
    role: "Product Designer",
    type: "Take-home, two days",
    link: "/projects/ondo",
    image: { src: ondoImg, width: 1200, height: 640, alt: "Ondo first box redesign screens" },
    theme: { bg: "#D5DF7E", fg: "#000000", accent: "#000000", ctaBg: "#000000", ctaFg: "#FFFFFF", mediaBg: "#FFFEEE" },
    pitch: {
      design: "Audited a subscription's first box and redesigned it to grow basket size without costing conversion.",
      eng: "Prototyped the redesign in Next.js and TypeScript so the flow could be clicked, not just looked at.",
    },
    chips: {
      design: ["UX audit", "Conversion", "A/B test plan"],
      eng: ["Next.js", "React", "TypeScript"],
    },
  },
  {
    id: "localedition",
    title: "LocalEdition",
    kicker: "Bilingual QR menu · Client",
    year: "2026",
    role: "Product Engineer · Solo",
    type: "Freelance, live at the venue",
    link: "/projects/localedition",
    image: { src: localEditionImg, width: 1200, height: 740, alt: "LocalEdition menu homepage" },
    theme: { bg: "#13100C", fg: "#F3EBDD", accent: "#DBAF59", ctaBg: "#DBAF59", ctaFg: "#13100C", mediaBg: "#221C15" },
    pitch: {
      design: "Interviewed the bar owner, then left ordering out on purpose so the menu supports her conversations instead of replacing them.",
      eng: "Next.js and Sanity CMS, modelled so a non-technical owner edits prices and hours herself with no redeploys.",
    },
    chips: {
      design: ["Client discovery", "Scope decisions", "WCAG AA"],
      eng: ["Next.js", "Sanity CMS", "TypeScript"],
    },
  },
  {
    id: "moodboard",
    title: "MoodBoard",
    kicker: "iOS widget app · Freelance",
    year: "2023 to 2024",
    role: "UX Designer",
    type: "Freelance, two phases",
    link: "/projects/moodboard",
    image: { src: moodboardImg, width: 1200, height: 900, alt: "MoodBoard app interface" },
    theme: { bg: "#FBA49A", fg: "#000000", accent: "#000000", ctaBg: "#000000", ctaFg: "#FFFFFF", mediaBg: "#FFFEEE" },
    pitch: {
      design: "28 survey responses shaped a redesign of onboarding and photo editing in an iOS widget app.",
      eng: "Worked side by side with the iOS engineer, so every proposal had to be both better to use and buildable.",
    },
    chips: {
      design: ["UX research", "iOS patterns", "Prototyping"],
      eng: ["Feasibility", "Dev handoff", "Figma specs"],
    },
  },
];

const TOTAL = String(PROJECTS.length).padStart(2, "0");

// Writes each card's "covered" progress (0 to 1) into a CSS variable, so the
// card underneath can shrink and dim as the next one slides over it.
// Runs outside React state to avoid re-rendering on every scroll frame.
function useStackProgress(count) {
  const cardRefs = useRef([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const measure = () => {
      frame = 0;
      const cards = cardRefs.current;
      for (let i = 0; i < count; i++) {
        const card = cards[i];
        const next = cards[i + 1];
        if (!card) continue;
        let progress = 0;
        if (next) {
          const a = card.getBoundingClientRect();
          const b = next.getBoundingClientRect();
          progress = Math.min(1, Math.max(0, 1 - (b.top - a.top) / (a.height || 1)));
        }
        card.style.setProperty("--covered", progress.toFixed(3));
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [count]);

  return cardRefs;
}

function StackCard({ project, index, lens, onLensChange, cardRef }) {
  const { theme } = project;
  const style = {
    "--i": index,
    "--card-bg": theme.bg,
    "--card-fg": theme.fg,
    "--card-accent": theme.accent,
    "--cta-bg": theme.ctaBg,
    "--cta-fg": theme.ctaFg,
    "--media-bg": theme.mediaBg,
  };

  return (
    <article id={project.id} ref={cardRef} className="stack-card" style={style} aria-labelledby={`${project.id}-title`}>
      <div className="stack-card-face">
        <div className="stack-card-body">
          <div className="stack-card-top">
            <span className="stack-card-num">
              {String(index + 1).padStart(2, "0")} / {TOTAL}
            </span>
            <div className="stack-switch" role="group" aria-label="Lens for all projects">
              {Object.entries(LENSES).map(([key, { short }]) => (
                <button
                  key={key}
                  type="button"
                  className={`stack-switch-btn ${lens === key ? "is-active" : ""}`}
                  aria-pressed={lens === key}
                  onClick={(event) => onLensChange(key, event.currentTarget)}
                >
                  {short}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="stack-card-kicker">{project.kicker}</p>
            <h2 id={`${project.id}-title`} className="stack-card-title">{project.title}</h2>
          </div>

          <p key={`pitch-${lens}`} className="stack-card-pitch lens-swap">
            {project.pitch[lens]}
          </p>

          <dl className="stack-card-meta">
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Type</dt>
              <dd>{project.type}</dd>
            </div>
          </dl>

          <ul key={`chips-${lens}`} className="stack-card-chips lens-swap" aria-label="Highlights">
            {project.chips[lens].map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>

          <Link to={project.link} className="stack-card-cta">
            Read case study<span className="visually-hidden">: {project.title}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="stack-card-media">
          <img
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        </div>
      </div>
    </article>
  );
}

function Portfolio() {
  const [lens, setLens] = useState("design");
  const cardRefs = useStackProgress(PROJECTS.length);

  // Switching from a card's chips changes every card. Pitch lines differ in
  // length per lens, so cards can change height; keep the clicked switch at
  // the same spot on screen so the page doesn't jump under the reader.
  const changeLensInPlace = (key, anchor) => {
    if (key === lens) return;
    const before = anchor.getBoundingClientRect().top;
    flushSync(() => setLens(key));
    const shift = anchor.getBoundingClientRect().top - before;
    if (shift !== 0) window.scrollBy(0, shift);
  };

  return (
    <main className="containerBG work-page">
      <Header />

      <section id="work-top" className="work-intro">
        <p className="work-eyebrow rise">Selected work · 2023 to 2026</p>
        <h1 className="work-title rise rise-1">Four projects, seen through two lenses.</h1>
        <p className="work-lede rise rise-2">
          Most of my work is product design and engineering in the same project.
          Pick a lens and every card tells you that side of the story.
        </p>

        <div className="lens-row rise rise-3">
          <div className="lens-toggle" role="group" aria-label="Choose a lens">
            {Object.entries(LENSES).map(([key, { label }]) => (
              <button
                key={key}
                type="button"
                className={`lens-btn ${lens === key ? "is-active" : ""}`}
                aria-pressed={lens === key}
                onClick={() => setLens(key)}
              >
                {label}
              </button>
            ))}
          </div>
          <span className="lens-hint" aria-live="polite">{LENSES[lens].hint}</span>
        </div>

        <nav className="work-index rise rise-4" aria-label="Jump to a project">
          {PROJECTS.map((project, i) => (
            <a key={project.id} href={`#${project.id}`} className="work-index-link">
              <span className="work-index-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="work-index-title">{project.title}</span>
              <span className="work-index-year">{project.year}</span>
            </a>
          ))}
        </nav>
      </section>

      <section className="stack" aria-label="Projects">
        {PROJECTS.map((project, i) => (
          <StackCard
            key={project.id}
            project={project}
            index={i}
            lens={lens}
            onLensChange={changeLensInPlace}
            cardRef={(el) => (cardRefs.current[i] = el)}
          />
        ))}
      </section>

      <section className="work-outro">
        <p className="work-outro-text">Every case study has a design view and an engineering view.</p>
        <a href="#work-top" className="work-outro-link">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </section>

      <Footer />
    </main>
  );
}

export default Portfolio;
