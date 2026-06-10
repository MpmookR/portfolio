import { Link } from "react-router-dom";
import "../css/comingSoon.css";

/**
 * Reusable coming-soon placeholder for unfinished case study pages.
 *
 * Props:
 *  badge   — e.g. "iOS Case Study"  (shown above the title)
 *  title   — project name (large display)
 *  teaser  — one or two sentences about what the case study will cover
 */
function ComingSoon({ badge, title, teaser }) {
  return (
    <section className="coming-soon">
      <div className="coming-soon-inner">
        {badge && <div className="coming-soon-badge">{badge}</div>}

        <h1 className="coming-soon-title">{title}</h1>

        <p className="coming-soon-label">
          Write-up in progress
          <span className="coming-soon-dots">
            <span />
            <span />
            <span />
          </span>
        </p>

        {teaser && <p className="coming-soon-teaser">{teaser}</p>}

        <a href="/portfolio" className="coming-soon-back">
          ← All Projects
        </a>
      </div>
    </section>
  );
}

export default ComingSoon;
