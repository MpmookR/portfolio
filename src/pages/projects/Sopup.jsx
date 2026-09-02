import { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CaseStudyHero from "../../components/caseStudy/CaseStudyHero";
import CaseStudyCTA from "../../components/caseStudy/CaseStudyCTA";
import CaseStudyReflection from "../../components/caseStudy/CaseStudyReflection";
import CaseStudyDesignProcess from "../../components/caseStudy/CaseStudyDesignProcess";
import Lightbox from "../../components/caseStudy/Lightbox";
import "../../css/sopup.css";
import sopupCover from "../../assets/images/projects/soPup/cover.png";
import sopupModePuppy from "../../assets/images/projects/soPup/mode_puppy.png";
import sopupModeSocial from "../../assets/images/projects/soPup/mode_social.png";
import sopupKeyFeatures from "../../assets/images/projects/soPup/keyFeatures.png";
import sopupSystemDiagram from "../../assets/images/projects/soPup/SimpleSystemDiagram.jpg";
import sopupFlowAuth from "../../assets/images/designProcess/userFlow/authSignin.png";
import sopupFlowPuppy from "../../assets/images/designProcess/userFlow/puppy mode flow.png";
import sopupFlowSocial from "../../assets/images/designProcess/userFlow/Socialmode flow.png";
import sopupWireframeOnboarding from "../../assets/images/designProcess/onboarding.png";
import sopupWireframeHome from "../../assets/images/designProcess/Homepage.png";
import sopupWireframeMatch from "../../assets/images/designProcess/matchflow.png";
import sopupWireframeChat from "../../assets/images/designProcess/ChatTap.png";
import sopupWireframeMeetup from "../../assets/images/designProcess/meetup.png";
import sopupMode from "../../assets/images/designProcess/mode.png";
import sopupReview from "../../assets/images/designProcess/review.png";
import sopupWireframeHomeRefined from "../../assets/images/designProcess/Homepage_refined.png";
import sopupMoodSwitcher from "../../assets/images/designProcess/modeSwitcher.png";

const SOPUP_HERO = {
  badge: "iOS Case Study",
  title: "SoPup",
  subtitle: "A dual-mode iOS app that enforces safe dog socialisation",
  heroImage: {
    src: sopupCover,
    alt: "SoPup app preview",
  },
  meta: [
    { label: "Timeline", value: "Jun – Aug 2025" },
    { label: "Role", value: "Product Designer + Software Engineer" },
    { label: "Stack", value: "SwiftUI · Firebase · Node.js" },
  ],
  links: [
    {
      href: "https://github.com/MpmookR/So_Pup/tree/main",
      label: "Frontend Repo",
      variant: "outline",
      icon: "github",
    },
    {
      href: "https://github.com/MpmookR/SoPup_CloudFucntion/tree/main",
      label: "Backend Repo",
      variant: "outline",
      icon: "github",
    },
    {
      href: "https://testflight.apple.com/join/duM8Wv9Q",
      label: "✈ Try on TestFlight",
      variant: "solid",
    },
        {
      href: "https://drive.google.com/file/d/1AAIfEg8c5YseLjsxqNg8goIiYoUv0zjQ/view?usp=sharing",
      label: "📽️ Watch Project WalkThrough",
      variant: "solid",
    },
  ],
  figmaLinks: [
    {
      href: "https://www.figma.com/proto/cxcrc0qeORVgLmnGKOeDhn/SoPup?page-id=0%3A1&node-id=10-712&p=f&viewport=251%2C420%2C0.16&t=zwTlTtJvuDaSJVEi-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=10%3A712",
      label: "Preview Puppy Mode",
    },
    {
      href: "https://www.figma.com/proto/cxcrc0qeORVgLmnGKOeDhn/SoPup?page-id=111%3A1833&node-id=111-1834&viewport=313%2C305%2C0.14&t=dBB2LbexYm78ETOl-1&scaling=scale-down&content-scaling=fixed",
      label: "Preview Social Mode",
    },
  ],
};

const SOPUP_DESIGN_PROCESS = {
  title: "From research to a validated design",
  intro:
    "Before a single line of Swift was written, the problem was mapped into flows, wireframed against Apple's Human Interface Guidelines, and tested with real dog owners. This section walks through that process.",
  skipTo: { id: "core-concept", label: "Core Concept" },
  flowSection: {
    title: "Mapping the flows first",
    intro:
      "Every screen had to earn its place in one of three decision trees: authentication and mode assignment, Puppy Mode, and Social Mode, each one mapped before any UI was drawn. The trees make the safety rule explicit: age determines mode at the point of onboarding, and meet-ups are structurally absent from Puppy Mode rather than just hidden behind a disabled button.",
    items: [
      {
        label: "Authentication & Mode Assignment",
        image: {
          src: sopupFlowAuth,
          alt: "Authentication and mode assignment flow",
        },
      },
      {
        label: "Puppy Mode Screen Graph",
        image: { src: sopupFlowPuppy, alt: "Puppy Mode screen graph" },
      },
      {
        label: "Social Mode Screen Graph",
        image: { src: sopupFlowSocial, alt: "Social Mode screen graph" },
      },
    ],
  },
  wireframeSection: {
    title: "Wireframes, screen by screen",
    intro:
      "Six core journeys were wireframed in sequence, each one carrying a specific design decision forward from the research. The earliest screens started as pencil-and-paper sketches, which I walked through in person with dog owners I know so feedback came before anything was committed to Figma. Only once those sketches held up did they get digitised for prototyping and usability testing.",
    items: [
      {
        tag: "Onboarding",
        description:
          "Name, breed, gender, date of birth, and behaviour are collected in short single-question steps rather than one long form. Dogs old enough for Social Mode continue into a few extra questions about play style and triggers, feeding straight into the matching algorithm instead of being collected later as a separate step.",
        images: [
          { src: sopupWireframeOnboarding, alt: "Onboarding wireframes" },
        ],
      },
      {
        tag: "Mode Assignment",
        description:
          "Once date of birth is submitted, the app assigns Puppy Mode or Social Mode automatically. Safety rules are enforced from the very first screen, rather than asking users to choose a mode that could compromise their dog's welfare.",
        images: [{ src: sopupMode, alt: "Mode assignment wireframes" }],
      },
      {
        tag: "Mode Switcher",
        description:
          "The mode switcher is only visible to Puppy Mode users, and it's disabled until the system validates the dates. This prevents users from bypassing the safety rules, and makes it clear that the app is enforcing them rather than leaving it up to the user. After the user's tapped the switcher, a modal explains why the mode changed and what that means for their dog's socialisation.",
        images: [{ src: sopupMoodSwitcher, alt: "Mode switcher wireframes" }],
      },
      {
        tag: "Homepage & Filters",
        description:
          "Profile cards are colour-coded by mode (blue for Puppy, orange for Social), so compatibility is legible before a profile is even opened. The filter panel groups General (gender, health, neuter status) above Pet Behaviour (play style, environment), so users narrow by safety first, personality second.",
        images: [
          { src: sopupWireframeHome, alt: "Homepage and filter wireframes" },
        ],
      },
      {
        tag: "Match Flow",
        description:
          "SoPup was built so both paws and owners feel safe before a single message is exchanged, mutual agreement does the heavy lifting. Unlike other dog social apps, where anyone can drop into an inbox uninvited, both owners have to accept a match before any conversation starts. Sending a request means writing a short personal note first, a deliberate friction point that discourages low-effort spam. Pending and Requested live in separate tabs so incoming and outgoing intent are never ambiguous.",
        images: [{ src: sopupWireframeMatch, alt: "Match flow wireframes" }],
      },
      {
        tag: "Chat & Meet-up",
        description:
          "Meet-up scheduling lives inside the chat as an embedded card rather than a separate flow, so proposing, accepting, and reviewing a playdate never breaks the conversation. If a Puppy Mode match hasn't cleared vaccinations, the app states that plainly in-thread instead of silently disabling the button.",
        images: [
                    {
            src: sopupWireframeMeetup,
            alt: "Meet-up scheduling and mode-mismatch wireframes",
          },
          { src: sopupWireframeChat, alt: "Chat and meet-up wireframes" },
        ],
      },
    ],
  },
  statsSection: {
    title: "Validating with real dog owners",
    intro:
      "Before development wrapped, the prototype was tested with 18 dog owners via a structured survey. 42.9% had used a similar app before and 57.1% hadn't, giving a mix of newcomer and experienced feedback. This ran on the Figma prototype, separate from the TestFlight testing further down the page, which validated the built app rather than the design.",
    stats: [
      {
        value: "85.7%",
        label: 'Rated onboarding "very easy" (none scored below a 4/5)',
      },
      {
        value: "71.4%",
        label: "Found filters effective; the rest wanted weight/size added",
      },
      {
        value: "100%",
        label: "Found the meet-up feature useful and intuitive",
      },
      {
        value: "100%",
        label: "Understood when and why meet-ups were restricted",
      },
      {
        value: "100%",
        label: "Rated the overall design and layout 4/5 or 5/5",
      },
      { value: "85.7%", label: "Said they'd use SoPup once it launched" },
    ],
    calloutTitle: "What changed because of this →",
    calloutBody:
      "multi-dog household support (now in What's Next below) and weight/size filtering came directly from this feedback: evidence that research fed design decisions, not just a checkbox exercise.",
  },
  forwardTo: { id: "product-iteration", label: "Product Iteration" },
};

function Sopup() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <main className="containerBG">
      <Header />

      <Lightbox
        src={lightbox?.src}
        alt={lightbox?.alt}
        onClose={() => setLightbox(null)}
      />

      <CaseStudyHero {...SOPUP_HERO} />

      {/* ── PROBLEM ── */}
      <section className="sp-section sp-section--alt">
        <div className="sp-section-inner sp-two-col">
          <div className="sp-col-text">
            <p className="sp-eyebrow">The Problem</p>
            <h2 className="sp-section-title">Most dog apps ignore safety</h2>
            <p className="sp-body">
              Veterinary and behavioural research shows dog compatibility
              depends on play style, sex pairing, neuter status, and age, yet
              apps like Pawmates and DogPack offer polished UIs with zero
              health-based matchmaking. The welfare gap is real, and no one was
              filling it.
            </p>
            <div className="sp-quote">
              "Safety shouldn't be a user's responsibility. It should be
              enforced by the system."
            </div>
          </div>
          <div className="sp-col-visual">
            <div className="sp-stat-stack">
              <div className="sp-stat-card sp-stat-card--red">
                <span className="sp-stat-num">0/3</span>
                <span className="sp-stat-desc">
                  Competitor apps with health-based matchmaking
                </span>
              </div>
              <div className="sp-stat-card sp-stat-card--green">
                <span className="sp-stat-num">100%</span>
                <span className="sp-stat-desc">
                  SoPup safety rules enforced server-side
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESEARCH ── */}
      <section className="sp-section">
        <div className="sp-section-inner">
          <p className="sp-eyebrow">Research</p>
          <h2 className="sp-section-title">Understanding the problem space</h2>
          <p className="sp-body sp-body--center">
            Competitive analysis and a user survey ran before a single screen
            was designed, to make sure the solution solved a real problem, not
            an assumed one.
          </p>

          <div className="sp-research-grid">
            <div className="sp-research-card">
              <div className="sp-research-tag">Competitive Analysis</div>
              <p>
                Reviewed Pawmates, DogPack, and similar apps. All offer polished
                UIs and event features, but none apply behavioural or health-based
                matchmaking. The welfare gap was validated.
              </p>
              <div className="sp-research-callout sp-research-callout--red">
                <strong>0 / 3</strong> competitor apps enforce safety-based
                filters
              </div>
            </div>
            <div className="sp-research-card">
              <div className="sp-research-tag">User Survey</div>
              <p>
                Dog owners prioritised clear profiles, effective filters, and
                secure chat before meeting. Key asks: size/weight filters and
                post-meetup reviews to build community trust over time.
              </p>
              <div className="sp-research-callout sp-research-callout--green">
                <strong>Core insight →</strong> Safety + verified trust is the
                unmet need
              </div>
            </div>
          </div>
        </div>
      </section>

        <CaseStudyDesignProcess
        {...SOPUP_DESIGN_PROCESS} alt
        onImageClick={(src, alt) => setLightbox({ src, alt })}
        />

      {/* ── DUAL MODE ── */}
      <section id="core-concept" className="sp-section sp-section--alt">
        <div className="sp-section-inner">
          <p className="sp-eyebrow">Core Concept</p>
          <h2 className="sp-section-title">
            One app · Two modes · Built-in protection
          </h2>
          <p className="sp-body sp-body--center">
            The dual-mode system is SoPup's defining feature: the entire
            experience adapts to the dog's vaccination stage. Owners log
            vaccination dates; a Cloud Function validates them and automatically
            transitions the profile.
          </p>

          <div className="sp-modes-grid">
            <div className="sp-mode-card sp-mode-card--puppy">
              <div className="sp-mode-header">
                <span className="sp-mode-badge">🐾 Puppy Mode</span>
                <span className="sp-mode-age">≤ 12 weeks</span>
              </div>
              <ul className="sp-mode-list">
                <li>Meet-ups disabled by design</li>
                <li>Vaccination tracking required</li>
                <li>Owner connections only</li>
                <li>Locked until fully vaccinated</li>
              </ul>
              <div
                className="sp-mode-img-placeholder sp-mode-img-placeholder--puppy cs-zoomable"
                onClick={() =>
                  setLightbox({
                    src: sopupModePuppy,
                    alt: "Puppy Mode UI screenshot",
                  })
                }
              >
                <img
                  src={sopupModePuppy}
                  alt="Puppy Mode UI screenshot"
                  className="sp-mode-img"
                />
              </div>
            </div>

            <div className="sp-mode-arrow">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path
                  d="M8 24h32M28 14l12 10-12 10"
                  stroke="var(--color-green)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="sp-mode-arrow-label">
                Vaccination dates logged → Cloud Function validates → profile
                auto-transitions
              </p>
            </div>

            <div className="sp-mode-card sp-mode-card--social">
              <div className="sp-mode-header">
                <span className="sp-mode-badge">🤝 Social Mode</span>
                <span className="sp-mode-age">12+ weeks</span>
              </div>
              <ul className="sp-mode-list">
                <li>Full matchmaking unlocked</li>
                <li>Behavioural compatibility scoring</li>
                <li>Playdate scheduling with MapKit</li>
                <li>Post-meetup review system</li>
              </ul>
              <div
                className="sp-mode-img-placeholder sp-mode-img-placeholder--social cs-zoomable"
                onClick={() =>
                  setLightbox({
                    src: sopupModeSocial,
                    alt: "Social Mode UI screenshot",
                  })
                }
              >
                <img
                  src={sopupModeSocial}
                  alt="Social Mode UI screenshot"
                  className="sp-mode-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ALGORITHM ── */}
      <section className="sp-section">
        <div className="sp-section-inner">
          <p className="sp-eyebrow">Under the Hood</p>
          <h2 className="sp-section-title">Research → Algorithm</h2>
          <p className="sp-body sp-body--center">
            Survey findings translated directly into a two-stage scoring
            pipeline, running entirely server-side so no client can game or
            bypass the safety rules.
          </p>

          <div className="sp-algo-flow">
            <div className="sp-algo-step">
              <div className="sp-algo-icon">📊</div>
              <h4>Client Preferences</h4>
              <p>
                Age, neuter status, play style, distance: stored locally in
                SwiftData, packaged into a request sent to the backend
              </p>
            </div>
            <div className="sp-algo-connector">→</div>
            <div className="sp-algo-step">
              <div className="sp-algo-icon">☁️</div>
              <h4>Cloud Function</h4>
              <p>
                Removes exclusions → applies hard filters (age, gender, neuter
                rules) → scores remaining candidates in two stages
              </p>
            </div>
            <div className="sp-algo-connector">→</div>
            <div className="sp-algo-step">
              <div className="sp-algo-icon">🎯</div>
              <h4>Ranked Matches</h4>
              <p>
                Candidates sorted by combined score and returned to the client
                in real time
              </p>
            </div>
          </div>

          <div className="sp-algo-detail">
            <div className="sp-algo-detail-card">
              <h4>Compatibility Score</h4>
              <p>
                Play style match, neuter compatibility, health status,
                environment preference
              </p>
            </div>
            <div className="sp-algo-detail-plus">+</div>
            <div className="sp-algo-detail-card">
              <h4>Location Score</h4>
              <p>
                Haversine formula, replacing geohash for simpler, provably
                correct spatial scoring
              </p>
            </div>
            <div className="sp-algo-detail-equals">=</div>
            <div className="sp-algo-detail-card sp-algo-detail-card--result">
              <h4>Total Match Score</h4>
              <p>Ranked list of compatible, nearby dogs</p>
            </div>
          </div>

          <a
            href="https://github.com/MpmookR/SoPup_CloudFucntion/blob/main/functions/src/services/MatchScoringService.ts"
            target="_blank"
            rel="noopener noreferrer"
            className="sp-code-link"
          >
            View MatchScoringService.ts on GitHub →
          </a>
        </div>
      </section>

      {/* ── MEET-UP FLOW ── */}
      <section className="sp-section sp-section--alt">
        <div className="sp-section-inner">
          <p className="sp-eyebrow">User Flow</p>
          <h2 className="sp-section-title">
            From match to real-world playdate
          </h2>
          <p className="sp-body sp-body--center">
            Every step requires mutual consent. No phone numbers are ever
            exchanged outside the app.
          </p>

          <div className="sp-flow-steps">
            <div className="sp-flow-step">
              <div className="sp-flow-num">01</div>
              <div className="sp-flow-content">
                <h4>Mutual Approval</h4>
                <p>
                  Both owners must accept the match request before chat opens:
                  no one-sided contact
                </p>
              </div>
            </div>
            <div className="sp-flow-step">
              <div className="sp-flow-num">02</div>
              <div className="sp-flow-content">
                <h4>Secure In-App Chat</h4>
                <p>
                  Real-time messaging via Firestore listeners; conversations
                  stay in SoPup
                </p>
              </div>
            </div>
            <div className="sp-flow-step">
              <div className="sp-flow-num">03</div>
              <div className="sp-flow-content">
                <h4>Playdate Scheduling</h4>
                <p>
                  Propose date, time, and location via MapKit; accept, reject,
                  or cancel from chat
                </p>
              </div>
            </div>
            <div className="sp-flow-step">
              <div className="sp-flow-num">04</div>
              <div className="sp-flow-content">
                <h4>Post-Meet Review</h4>
                <p>
                  Review prompt unlocks only after a playdate is marked complete,
                  building verified community trust
                </p>
              </div>
            </div>
          </div>

          <div className="sp-userflow-img">
            <div
              className="cs-zoomable"
              onClick={() =>
                setLightbox({
                  src: sopupKeyFeatures,
                  alt: "key Features",
                })
              }
            >
              <img
                src={sopupKeyFeatures}
                alt="key Features"
                className="sp-mode-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE ── */}
      <section className="sp-section">
        <div className="sp-section-inner">
          <p className="sp-eyebrow">Architecture</p>
          <h2 className="sp-section-title">Three-layer serverless system</h2>

          <div className="sp-arch-grid">
            <div className="sp-arch-card sp-arch-card--ios">
              <div className="sp-arch-icon">📱</div>
              <h4>iOS Client</h4>
              <p className="sp-arch-tech">
                SwiftUI · MVVM · SwiftData · Core Location · MapKit
              </p>
              <ul className="sp-arch-list">
                <li>MVVM for clean view/logic separation</li>
                <li>SwiftData persists filters offline</li>
                <li>Real-time Firestore listeners</li>
                <li>FCM push notifications</li>
              </ul>
            </div>
            <div className="sp-arch-card ">
              <div className="sp-arch-icon">⚡</div>
              <h4>Cloud Functions</h4>
              <p className="sp-arch-tech">
                Node.js/TypeScript · Firebase 2nd Gen · Google Cloud Run
              </p>
              <ul className="sp-arch-list">
                <li>Controllers → Services → Repositories</li>
                <li>All safety rules enforced server-side</li>
                <li>Matchmaking, scoring, mode-switching</li>
                <li>Auto-scales on Cloud Run</li>
              </ul>
            </div>
            <div className="sp-arch-card sp-arch-card--db">
              <div className="sp-arch-icon">🗄️</div>
              <h4>Data Layer</h4>
              <p className="sp-arch-tech">Firestore · Firebase Storage · FCM</p>
              <ul className="sp-arch-list">
                <li>Real-time profiles, chat, and meet-ups</li>
                <li>Profile and dog image storage</li>
                <li>Push notification delivery</li>
              </ul>
            </div>
          </div>

          <div className="sp-architecture-img">
            <div
              className="cs-zoomable architecture-img"
              onClick={() =>
                setLightbox({
                  src: sopupSystemDiagram,
                  alt: "Simple System Diagram",
                })
              }
            >
              <img
                src={sopupSystemDiagram}
                alt="Simple System Diagram"
                className="sp-mode-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CHALLENGES ── */}
      <section className="sp-section sp-section--alt">
        <div className="sp-section-inner">
          <p className="sp-eyebrow">Engineering</p>
          <h2 className="sp-section-title">Challenges worth talking about</h2>
          <p className="sp-body sp-body--center">
            Real bugs found during TestFlight, diagnosed, fixed, and shipped
            before the next build.
          </p>

          <div className="sp-challenges">
            <div className="sp-challenge">
              <div className="sp-challenge-badge">01</div>
              <div className="sp-challenge-body">
                <h4>ISO-8601 Parsing on iOS 18</h4>
                <p>
                  <strong>Problem:</strong> Some TestFlight devices showed "No
                  matches found" despite valid backend responses. iOS 18's
                  stricter timestamp handling silently broke JSON decoding,
                  invisible without device logs.
                </p>
                <p className="sp-challenge-fix">
                  Fix: Centralised all JSON parsing with a custom decoder that
                  supports fractional seconds.
                </p>
                <p className="sp-challenge-impact">
                  Impact: Eliminated silent data loss. Every TestFlight device
                  returned valid match results after the patch.
                </p>
              </div>
            </div>
            <div className="sp-challenge">
              <div className="sp-challenge-badge">02</div>
              <div className="sp-challenge-body">
                <h4>Chat Crash After Match Acceptance</h4>
                <p>
                  <strong>Problem:</strong> App crashed when returning to the
                  chat list. Concurrent mutations in dog/user caches triggered a
                  data race during list assembly: reproducible but
                  non-deterministic.
                </p>
                <p className="sp-challenge-fix">
                  Fix: Wrapped caches in a Swift actor and enforced main-thread
                  sorting.
                </p>
                <p className="sp-challenge-impact">
                  Impact: Zero crashes in Build 5 across all TestFlight
                  sessions.
                </p>
              </div>
            </div>
            <div className="sp-challenge">
              <div className="sp-challenge-badge">03</div>
              <div className="sp-challenge-body">
                <h4>Location Matching Strategy</h4>
                <p>
                  <strong>Problem:</strong> Geohash indexing in Firestore became
                  overly complex and error-prone for spatial queries at this
                  scale.
                </p>
                <p className="sp-challenge-fix">
                  Fix: Replaced geohash with the Haversine formula for distance
                  scoring in the Cloud Function.
                </p>
                <p className="sp-challenge-impact">
                  Impact: Simpler code, provably correct distance results,
                  significantly lower development risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTING ── */}
      <section className="sp-section">
        <div className="sp-section-inner">
          <p className="sp-eyebrow">Validation</p>
          <h2 className="sp-section-title">
            Tested on real devices via TestFlight
          </h2>

          <div className="sp-test-grid">
            <div className="sp-test-card">
              <div className="sp-test-icon">🧪</div>
              <h4>Black-Box Testing</h4>
              <p>
                End-to-end flows verified with Postman and Firebase Cloud Logs:
                Auth, Matchmaking, Chat, Meet-ups, Reviews, Mode Switcher
              </p>
            </div>
            <div className="sp-test-card">
              <div className="sp-test-icon">⚙️</div>
              <h4>White-Box Testing</h4>
              <p>
                Unit and integration tests for backend services: scoring logic,
                safety rule enforcement, and vaccination validation
              </p>
            </div>
            <div className="sp-test-card">
              <div className="sp-test-icon">👥</div>
              <h4>Usability Testing</h4>
              <p>
                10 TestFlight users ran unguided tasks across multiple devices
                and iOS versions; findings drove the Build 5 fix cycle
              </p>
            </div>
          </div>

          <div className="sp-outcome-banner">
            <strong>Result (Build 5):</strong> Stable end-to-end operation
            across all core flows. All essential functional requirements met.
            Remaining edge cases documented and scoped for the next iteration.
          </div>
        </div>
      </section>

      {/* ── PRODUCT ITERATION ── */}
      <section id="product-iteration" className="sp-section sp-section--alt">
        <div className="sp-section-inner">
          <p className="sp-eyebrow">Product Iteration</p>
          <h2 className="sp-section-title">Shipping, then listening</h2>
          <p className="sp-body sp-body--center">
            Two changes came directly from watching real dog owners use the
            first builds, not from the original plan.
          </p>

          <div className="sp-subsection">
            <h3 className="sp-subsection-title">Trust, earned not claimed</h3>
            <p className="sp-body sp-body--center">
              The very first TestFlight build shipped with self-reported
              profiles only. Owners typed in their dog's play style,
              temperament, and behaviour tags themselves, and nothing
              checked whether any of it was accurate. Testers flagged this
              almost immediately: a profile is only useful if you can trust
              what it says.
            </p>

            <div className="sp-quote sp-quote--center">
              "The same way an Amazon listing means little without buyer
              reviews, a dog's profile means little without other owners
              vouching for it."
            </div>

            <p className="sp-body sp-body--center">
              Fixing that meant verifying those claims somehow. A moderation
              queue was one option, but reviewing every profile by hand
              doesn't scale past early adopters. Instead, a post-meetup
              review system shipped right after Build 1: once two dogs
              meet, each owner rates the experience, building a profile
              from real encounters instead of self-description. Reviews
              only unlock once a meetup is marked complete, so no one can
              rate a dog they never actually met.
            </p>

            <div className="sp-subsection-img">
              <div
                className="cs-zoomable"
                onClick={() =>
                  setLightbox({
                    src: sopupReview,
                    alt: "Post-meetup review flow and profile reviews",
                  })
                }
              >
                <img
                  src={sopupReview}
                  alt="Post-meetup review flow and profile reviews"
                  className="sp-mode-img"
                />
              </div>
            </div>
          </div>

          <div className="sp-subsection">
            <h3 className="sp-subsection-title">
              Decluttering the homepage
            </h3>
            <p className="sp-body sp-body--center">
              The first pass put every filter (gender, health, neutered
              status, play style, environment) as a permanently visible
              chip row above the profile list. Usability testing showed it
              competed with the actual task of browsing dogs, forcing users
              to scan past a wall of filter labels before reaching a single
              profile.
            </p>
            <p className="sp-body sp-body--center">
              The refined version keeps only Distance inline, moves the
              rest into a dedicated Match Filter screen, and collapses
              applied filters back down to short chips instead of full
              labels. Profile cards also now surface each dog's review
              rating, so trust signals stay visible while browsing, not
              just on the full profile.
            </p>

            <div className="sp-iteration-compare">
              <div className="sp-iteration-compare-item">
                <span className="sp-iteration-tag">Before</span>
                <div
                  className="cs-zoomable"
                  onClick={() =>
                    setLightbox({
                      src: sopupWireframeHome,
                      alt: "Homepage and filters, first pass",
                    })
                  }
                >
                  <img
                    src={sopupWireframeHome}
                    alt="Homepage and filters, first pass"
                    className="sp-mode-img"
                  />
                </div>
              </div>
              <div className="sp-iteration-compare-item">
                <span className="sp-iteration-tag">After</span>
                <div
                  className="cs-zoomable"
                  onClick={() =>
                    setLightbox({
                      src: sopupWireframeHomeRefined,
                      alt: "Homepage and filters, refined after usability testing",
                    })
                  }
                >
                  <img
                    src={sopupWireframeHomeRefined}
                    alt="Homepage and filters, refined after usability testing"
                    className="sp-mode-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FUTURE WORK ── */}
      <section className="sp-section">
        <div className="sp-section-inner">
          <p className="sp-eyebrow">What's Next</p>
          <h2 className="sp-section-title">Product thinking beyond Build 5</h2>
          <p className="sp-body sp-body--center">
            Known edge cases are documented. These improvements reflect product
            maturity, not just more features.
          </p>

          <div className="sp-future-grid">
            <div className="sp-future-card">
              <div className="sp-future-icon">👨‍👩‍👧</div>
              <h4>Multi-Dog Households</h4>
              <p>
                Support multiple dogs per user account, a common real-world
                scenario the current data model doesn't yet handle
              </p>
            </div>
            <div className="sp-future-card">
              <div className="sp-future-icon">🎓</div>
              <h4>Education Hub</h4>
              <p>
                Structured socialisation guides surfaced in Puppy Mode to
                support responsible early ownership
              </p>
            </div>
            <div className="sp-future-card">
              <div className="sp-future-icon">🛡️</div>
              <h4>Content Moderation</h4>
              <p>
                Reporting system and admin dashboard, required to scale safely
                beyond early adopters
              </p>
            </div>
            <div className="sp-future-card">
              <div className="sp-future-icon">💬</div>
              <h4>Rich Chat</h4>
              <p>
                Images, voice notes, and shareable meet-up proposals for richer
                in-app communication
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WALKTHROUGH VIDEO ── */}
      <section className="is-section sp-section--alt">

        <div className="is-section-inner">
          <p className="is-eyebrow">Demo</p>
          <h2 className="is-section-title">A full walkthrough of the app</h2>
          <div className="cs-video-wrap">
            <iframe
              src="https://drive.google.com/file/d/1AAIfEg8c5YseLjsxqNg8goIiYoUv0zjQ/preview"
              title="SoWell project walkthrough"
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <CaseStudyReflection
        skills={[
          "User research → validated design decisions",
          "Wireframing & prototyping (paper sketches → Figma)",
          "Usability testing & post-launch iteration",
          "Safety-by-design product thinking",
          "End-to-end product ownership, research to shipped app",
          "iOS engineering (SwiftUI, SwiftData, MapKit)",
          "Serverless backend (Firebase, Cloud Functions, TypeScript)",
          "Algorithm design (scoring + ranking pipeline)",
        ]}
        note="SoPup started with a research question, not a feature list: could dog owners actually be matched safely? That question shaped everything after it, from paper wireframes tested with dog owners, through a Figma prototype validated by a 7-person usability study, to two post-launch changes, a review system and a decluttered homepage, driven directly by what real TestFlight users did. I also built the whole thing solo: a SwiftUI iOS client, a serverless TypeScript backend on Cloud Run, and real-device testing with 10 TestFlight users. SoPup demonstrates that I can own a problem end-to-end, from a genuine user need to a shipped product, and keep listening after launch instead of treating shipping as the finish line."
      />

      <CaseStudyCTA
        title="Explore SoPup"
        subtitle="Try the prototype, read the code, or see more work"
        buttons={[
          ...SOPUP_HERO.figmaLinks.map((link) => ({
            label: `${link.label}`,
            href: link.href,
            variant: "figma",
            icon: "figma",
            external: true,
          })),

          { label: "✈ TestFlight", href: "https://testflight.apple.com/join/duM8Wv9Q", variant: "solid", external: true },
          
          { label: "GitHub →", href: "https://github.com/MpmookR/So_Pup/tree/main/So_Pup", variant: "outline-light", external: true },
          { label: "← All Projects", href: "/portfolio", variant: "ghost" },
        ]}
      />

      <Footer />
    </main>
  );
}

export default Sopup;
