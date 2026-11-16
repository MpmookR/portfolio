import { Link } from "react-router-dom";

// One project story. `variant` picks the layout: feature, brief or side.
export default function ProjectStory({ project, lens, variant }) {
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
