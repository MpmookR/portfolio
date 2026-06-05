const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.465-2.381 1.235-3.221-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.911 1.23 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const FigmaIcon = () => (
  <svg width="15" height="15" viewBox="0 0 38 57" fill="none">
    <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19v19A9.5 9.5 0 0 1 9.5 28.5z" fill="#0ACF83" />
    <rect x="0" y="0" width="19" height="19" rx="9.5" fill="#FF7262" />
    <rect x="19" y="0" width="19" height="19" rx="9.5" fill="#FF7262" />
    <rect x="0" y="19" width="19" height="19" fill="#A259FF" />
    <rect x="0" y="38" width="19" height="19" rx="9.5" fill="#1ABCFE" />
  </svg>
);

const ICONS = { github: GithubIcon, figma: FigmaIcon };

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

