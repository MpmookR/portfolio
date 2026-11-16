// In-page jumps. A plain href="#about" would go through React Router,
// which remounts the page and scrolls to the top (see App.jsx), so we
// scroll by hand and move focus to the section for keyboard users.
function jumpTo(event, id) {
  event.preventDefault();
  const target = document.getElementById(id);
  if (!target) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  target.focus({ preventScroll: true });
}

export default function Jump({ to, className, children, ...rest }) {
  return (
    <a href={`#${to}`} className={className} onClick={(e) => jumpTo(e, to)} {...rest}>
      {children}
    </a>
  );
}
