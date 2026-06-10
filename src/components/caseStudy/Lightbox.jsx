import { createPortal } from "react-dom";

// Rendered via a portal into document.body so that position:fixed is always
// relative to the viewport — not to any parent with a CSS transform applied.
function Lightbox({ src, alt, onClose }) {
  if (!src) return null;

  return createPortal(
    <div className="cs-lightbox" onClick={onClose}>
      <button className="cs-lightbox-close" onClick={onClose}>✕</button>
      <img src={src} alt={alt} className="cs-lightbox-img" onClick={e => e.stopPropagation()} />
    </div>,
    document.body
  );
}

export default Lightbox;
