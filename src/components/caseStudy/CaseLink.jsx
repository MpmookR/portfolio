import { ICONS } from "./icons";

function CaseLink({ href, label, variant = "outline", icon }) {
  const Icon = icon ? ICONS[icon] : null;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`cs-btn cs-btn--${variant}`}>
      {Icon && <Icon />}
      {label}
    </a>
  );
}

export default CaseLink;

