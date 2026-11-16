// Hand-drawn "Mook" signature on the contact postcard. The stroke draws
// itself in with CSS (see np-sig-draw in ContactSection.css).
export default function Signature({ className }) {
  return (
    <svg className={className} role="img" aria-label="Mook" viewBox="380 260 760 500" fill="none">
      <path
        className="np-sig-path"
        pathLength="1"
        d="M425 720 C 520 520, 620 330, 690 300 C 735 290, 690 520, 665 600 C 700 520, 820 370, 880 385 C 935 400, 880 560, 905 610 C 930 650, 1030 600, 1095 545"
        stroke="currentColor"
        strokeWidth="26"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
