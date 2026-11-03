// Shared by Ondo.jsx (hero + Contents nav) and OndoWeekAfter.jsx.
import heroWeek from "../../assets/images/projects/Ondo/heroWeek.png";

export const STORYBOOK_URL = "https://ondo-designsystem.vercel.app/";

// Four screens from the week-after build, laid out like the Chapter 1 hero
// (804px screens, 20px gutters): homepage, onboarding, box being built, Your box.
export const WEEK_HERO_IMAGE = {
  src: heroWeek,
  alt: "Four Ondo screens on mobile: the homepage, the caffeine limit question in onboarding, the starter box being prepared, and Your box",
};

// Sections in this chapter, in page order. Used by the Contents nav.
export const WEEK_SECTIONS = [
  { id: "week", label: "Two open questions" },
  { id: "design-system", label: "A design system first" },
  { id: "built", label: "The screens, built" },
  { id: "onboarding", label: "Onboarding" },
  { id: "starter-box", label: "The starter box" },
  { id: "no-surprises", label: "Nothing chosen for them" },
  { id: "flows", label: "The unhappy paths" },
  { id: "whats-next", label: "What's next" },
];

