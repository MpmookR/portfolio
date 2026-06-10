// Shared reflection / "What this project demonstrates" section used across all case studies.
// Props:
//   skills  — string[]   list of skill tags to display (required)
//   title   — string     section heading (optional, defaults below)
//   note    — string     paragraph shown below the skills grid (optional)
//   banner  — ReactNode  content for the green callout box (optional)
//   alt     — bool       white background variant (optional)
//   children             any extra content rendered after the banner (optional)
function CaseStudyReflection({
  skills,
  title = "What this project demonstrates",
  note,
  banner,
  alt = false,
  children,
}) {
  return (
    <section
      className={`cs-reflection-section${alt ? " cs-reflection-section--alt" : ""}`}
    >
      <div className="cs-reflection-inner">
        <p className="cs-reflection-eyebrow">Reflection</p>
        <h2 className="cs-reflection-title">{title}</h2>

        <div className="cs-skills-grid">
          {skills.map((skill, i) => (
            <div key={i} className="cs-skill-tag">
              {skill}
            </div>
          ))}
        </div>

        {note && <p className="cs-reflection-note">{note}</p>}

        {banner && <div className="cs-reflection-banner">{banner}</div>}

        {children}
      </div>
    </section>
  );
}

export default CaseStudyReflection;
