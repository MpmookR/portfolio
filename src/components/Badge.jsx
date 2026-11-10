import { useId } from "react";
import "../css/badge.css";

// Spinning "DESIGN → ENGINEER → SHIP" ring around the M signature.
// Used in the site header (links home) and on the contact postcard.
// useId keeps each ring's text path unique when two badges share a page.
function Badge({ className = "", label = "Design, engineer, ship" }) {
  const ringId = `badge-ring-${useId().replace(/:/g, "")}`;

  return (
    <svg className={`badge ${className}`} role="img" aria-label={label} viewBox="0 0 200 200" fill="none">
      <defs>
        <path id={ringId} d="M100 100 m-74 0 a74 74 0 1 1 148 0 a74 74 0 1 1 -148 0" />
      </defs>
      <g className="badge-ring">
        <text fontWeight="700" fontSize="17" letterSpacing="3" fill="currentColor">
          <textPath href={`#${ringId}`} textLength="458">
            DESIGN → ENGINEER → SHIP →
          </textPath>
        </text>
      </g>
      <path
        d="M68 132 C 80 110, 92 78, 102 74 C 108 72, 103 104, 100 114 C 106 102, 118 86, 126 88 C 134 90, 126 110, 130 116 C 134 122, 146 116, 154 108"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(-12 -2)"
      />
    </svg>
  );
}

export default Badge;
