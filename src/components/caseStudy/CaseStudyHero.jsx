import MetaPill from "./MetaPill";
import CaseLink from "./CaseLink";
import "../../css/caseStudy.css";

/**
 * Reusable hero section for all case study pages.
 *
 * Props:
 *  badge       — e.g. "iOS Case Study"
 *  title       — project name
 *  subtitle    — one-liner description
 *  heroImage   — { src, alt } — omit if no image yet
 *  meta        — [{ label, value }] — Timeline / Role / Stack chips
 *  links       — [{ href, label, variant, icon }] — repo / live links
 *                  variant: "solid" | "outline" | "ghost"
 *                  icon:    "github" | null
 *  figmaLinks  — [{ href, label }] — Figma prototype previews
 */
function CaseStudyHero({ badge, title, subtitle, heroImage, meta = [], links = [], figmaLinks = [] }) {
  return (
    <section className="cs-hero">
      {badge && <div className="cs-hero-badge">{badge}</div>}

      <h1 className="cs-hero-title">{title}</h1>

      {subtitle && <p className="cs-hero-sub">{subtitle}</p>}

      {heroImage && (
        <div className="cs-hero-image-wrap">
          <img src={heroImage.src} alt={heroImage.alt} className="cs-hero-image" />
        </div>
      )}

      {meta.length > 0 && (
        <div className="cs-hero-meta">
          {meta.map((item, i) => (
            <MetaPill key={i} label={item.label} value={item.value} />
          ))}
        </div>
      )}

      {links.length > 0 && (
        <div className="cs-hero-links">
          {links.map((link, i) => (
            <CaseLink key={i} href={link.href} label={link.label} variant={link.variant} icon={link.icon} />
          ))}
        </div>
      )}

      {figmaLinks.length > 0 && (
        <div className="cs-figma-row">
          {figmaLinks.map((link, i) => (
            <CaseLink key={i} href={link.href} label={link.label} variant="figma" icon="figma" />
          ))}
        </div>
      )}
    </section>
  );
}

export default CaseStudyHero;
