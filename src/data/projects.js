// Shared project data for the homepage Projects section.
// Copy moved from the old Portfolio page so there is one source of truth.
import sopupImg from "../assets/images/projects/cards/sopup.webp";
import ondoImg from "../assets/images/projects/cards/ondo.webp";
import localEditionImg from "../assets/images/projects/cards/localedition.webp";
import moodboardImg from "../assets/images/projects/cards/moodboard.webp";

export const LENSES = {
  design: { label: "Design lens", hint: "Research, decisions and trade-offs first." },
  eng: { label: "Engineering lens", hint: "Stack, architecture and what shipped first." },
};

export const PROJECTS = {
  sopup: {
    title: "SoPup",
    kicker: "iOS app · Solo",
    year: "2025",
    role: "Product Designer + Engineer",
    type: "Personal, shipped to TestFlight",
    link: "/projects/sopup",
    image: { src: sopupImg, alt: "SoPup iOS screens: personality match filter, sign-in, and a dog profile" },
    tagline: "Where pups meet, play, and find their perfect match",
    pitch: {
      design: "Research with dog owners shaped a dual-mode app where safety rules are enforced by the system, not left to users.",
      eng: "SwiftUI client, serverless TypeScript matching on Cloud Run, and real-device testing with 10 TestFlight users.",
    },
    chips: {
      design: ["User research", "Usability testing", "Safety by design"],
      eng: ["SwiftUI", "Firebase", "TypeScript"],
    },
  },
  ondo: {
    title: "Ondo",
    kicker: "First box redesign · Take-home",
    year: "2026",
    role: "Product Designer",
    type: "Take-home, two days",
    link: "/projects/ondo",
    image: { src: ondoImg, alt: "Ondo shop screens in light and dark themes: product grid, product detail and subscription box" },
    pitch: {
      design: "Audited a subscription's first box and redesigned it to grow basket size without costing conversion.",
      eng: "Prototyped the redesign in Next.js and TypeScript so the flow could be clicked, not just looked at.",
    },
    chips: {
      design: ["UX audit", "Conversion", "A/B test plan"],
      eng: ["Next.js", "React", "TypeScript"],
    },
  },
  localedition: {
    title: "LocalEdition",
    kicker: "Bilingual QR menu · Client",
    year: "2026",
    role: "Product Engineer · Solo",
    type: "Freelance, live at the venue",
    link: "/projects/localedition",
    image: { src: localEditionImg, alt: "LocalEdition bilingual menu on desktop and two phones, in Thai and English" },
    pitch: {
      design: "Interviewed the bar owner, then left ordering out on purpose so the menu supports her conversations instead of replacing them.",
      eng: "Next.js and Sanity CMS, modelled so a non-technical owner edits prices and hours herself with no redeploys.",
    },
    chips: {
      design: ["Client discovery", "Scope decisions", "WCAG AA"],
      eng: ["Next.js", "Sanity CMS", "TypeScript"],
    },
  },
  moodboard: {
    title: "MoodBoard",
    kicker: "iOS widget app · Freelance",
    year: "2023 to 2024",
    role: "UX Designer",
    type: "Freelance, two phases",
    link: "/projects/moodboard",
    image: { src: moodboardImg, alt: "MoodBoard iOS onboarding, home screen widget and premium subscription screens" },
    pitch: {
      design: "28 survey responses shaped a redesign of onboarding and photo editing in an iOS widget app.",
      eng: "Worked side by side with the iOS engineer, so every proposal had to be both better to use and buildable.",
    },
    chips: {
      design: ["UX research", "iOS patterns", "Prototyping"],
      eng: ["Feasibility", "Dev handoff", "Figma specs"],
    },
  },
};
