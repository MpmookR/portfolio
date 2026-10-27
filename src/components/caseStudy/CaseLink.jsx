import { ICONS } from "./icons";

function CaseLink({ href, label, variant = "outline", icon }) {
  const Icon = icon ? ICONS[icon] : null;

  // In-page anchors (#section) scroll on the same page; everything else opens in a new tab.
  const isAnchor = href.startsWith("#");

  return (
    <a
      href={href}
      className={`cs-btn cs-btn--${variant}`}
      {...(isAnchor ? {} : { target: "_blank", rel: "noopener noreferrer" })}
    >
      {Icon && <Icon />}
      {label}
    </a>
  );
}

export default CaseLink;

