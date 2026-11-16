import { useState } from "react";
import BackToTop from "../components/BackToTop";
import ProjectStory from "../components/ProjectStory";
import { LENSES, PROJECTS } from "../../../data/projects";
import "./ProjectsSection.css";

// The lens toggle rewrites every project's pitch and highlights for a
// design or an engineering reader, so the state lives here.
export default function ProjectsSection() {
  const [lens, setLens] = useState("design");

  return (
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
  );
}
