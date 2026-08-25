import { ICONS } from "./icons";
import "../../css/caseStudy.css";

function CaseStudyCTA({ title, subtitle, buttons = [] }) {
  return (
    <section className="cs-cta">
      <h2 className="cs-cta-title">{title}</h2>
      {subtitle && <p className="cs-cta-sub">{subtitle}</p>}
      <div className="cs-cta-buttons">
        {buttons.map(({ label, href, variant = "ghost", external, icon }) => {
          const Icon = icon ? ICONS[icon] : null;
          return (
            <a
              key={label}
              href={href}
              className={`cs-btn cs-btn--${variant}`}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {Icon && <Icon />}
              {label}
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default CaseStudyCTA;
