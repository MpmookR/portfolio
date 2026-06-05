function Lightbox({ src, alt, onClose }) {
  if (!src) return null;

  return (
    <div className="cs-lightbox" onClick={onClose}>
      <button className="cs-lightbox-close" onClick={onClose}>✕</button>
      <img src={src} alt={alt} className="cs-lightbox-img" onClick={e => e.stopPropagation()} />
    </div>
  );
}

export default Lightbox;
