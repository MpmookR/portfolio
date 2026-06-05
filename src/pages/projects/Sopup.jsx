import { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CaseStudyHero from "../../components/caseStudy/CaseStudyHero";
import Lightbox from "../../components/caseStudy/Lightbox";
import "../../css/sopup.css";

const SOPUP_HERO = {
  badge: "iOS Case Study",
  title: "SoPup",
  subtitle: "A dual-mode iOS app that enforces safe dog socialisation",
  heroImage: {
    src: "/src/assets/images/projects/soPup/cover.png",
    alt: "SoPup app preview",
  },
  meta: [
    { label: "Timeline", value: "Jun – Aug 2025" },
    { label: "Role", value: "Software Engineer + UX Designer" },
    { label: "Stack", value: "SwiftUI · Firebase · Node.js" },
  ],
  links: [
    {
      href: "https://github.com/MpmookR/So_Pup/tree/main/So_Pup",
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
              depends on play style, sex pairing, neuter status, and age — yet
              apps like Pawmates and DogPack offer polished UIs with zero
              health-based matchmaking. The welfare gap is real, and no one was
              filling it.
            </p>
            <div className="sp-quote">
              "Safety shouldn't be a user's responsibility — it should be
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
            was designed — to make sure the solution solved a real problem, not
            an assumed one.
          </p>

          <div className="sp-research-grid">
            <div className="sp-research-card">
              <div className="sp-research-tag">Competitive Analysis</div>
              <p>
                Reviewed Pawmates, DogPack, and similar apps. All offer polished
                UIs and event features — none apply behavioural or health-based
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

      {/* ── DUAL MODE ── */}
      <section className="sp-section sp-section--alt">
        <div className="sp-section-inner">
          <p className="sp-eyebrow">Core Concept</p>
          <h2 className="sp-section-title">
            One app · Two modes · Built-in protection
          </h2>
          <p className="sp-body sp-body--center">
            The dual-mode system is SoPup's defining feature — the entire
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
                    src: "/src/assets/images/projects/soPup/mode_puppy.png",
                    alt: "Puppy Mode UI screenshot",
                  })
                }
              >
                <img
                  src="/src/assets/images/projects/soPup/mode_puppy.png"
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
                    src: "/src/assets/images/projects/soPup/mode_social.png",
                    alt: "Social Mode UI screenshot",
                  })
                }
              >
                <img
                  src="/src/assets/images/projects/soPup/mode_social.png"
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
            pipeline — running entirely server-side so no client can game or
            bypass the safety rules.
          </p>

          <div className="sp-algo-flow">
            <div className="sp-algo-step">
              <div className="sp-algo-icon">📊</div>
              <h4>Client Preferences</h4>
              <p>
                Age, neuter status, play style, distance — stored locally in
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
                Haversine formula — replaced geohash for simpler, provably
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
            Every step requires mutual consent — no phone numbers are ever
            exchanged outside the app.
          </p>

          <div className="sp-flow-steps">
            <div className="sp-flow-step">
              <div className="sp-flow-num">01</div>
              <div className="sp-flow-content">
                <h4>Mutual Approval</h4>
                <p>
                  Both owners must accept the match request before chat opens —
                  no one-sided contact
                </p>
              </div>
            </div>
            <div className="sp-flow-step">
              <div className="sp-flow-num">02</div>
              <div className="sp-flow-content">
                <h4>Secure In-App Chat</h4>
                <p>
                  Real-time messaging via Firestore listeners — conversations
                  stay in SoPup
                </p>
              </div>
            </div>
            <div className="sp-flow-step">
              <div className="sp-flow-num">03</div>
              <div className="sp-flow-content">
                <h4>Playdate Scheduling</h4>
                <p>
                  Propose date, time, and location via MapKit — accept, reject,
                  or cancel from chat
                </p>
              </div>
            </div>
            <div className="sp-flow-step">
              <div className="sp-flow-num">04</div>
              <div className="sp-flow-content">
                <h4>Post-Meet Review</h4>
                <p>
                  Review prompt unlocks only after a playdate is marked complete
                  — builds verified community trust
                </p>
              </div>
            </div>
          </div>

          <div className="sp-userflow-img">
            <div
              className="cs-zoomable"
              onClick={() =>
                setLightbox({
                  src: "/src/assets/images/projects/soPup/keyFeatures.png",
                  alt: "key Features",
                })
              }
            >
              <img
                src="/src/assets/images/projects/soPup/keyFeatures.png"
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
                  src: "/src/assets/images/projects/soPup/SimpleSystemDiagram.jpg",
                  alt: "Simple System Diagram",
                })
              }
            >
              <img
                src="/src/assets/images/projects/soPup/SimpleSystemDiagram.jpg"
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
            Real bugs found during TestFlight — diagnosed, fixed, and shipped
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
                  stricter timestamp handling silently broke JSON decoding —
                  invisible without device logs.
                </p>
                <p className="sp-challenge-fix">
                  Fix: Centralised all JSON parsing with a custom decoder that
                  supports fractional seconds.
                </p>
                <p className="sp-challenge-impact">
                  Impact: Eliminated silent data loss — every TestFlight device
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
                  data race during list assembly — reproducible but
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
                End-to-end flows verified with Postman and Firebase Cloud Logs —
                Auth, Matchmaking, Chat, Meet-ups, Reviews, Mode Switcher
              </p>
            </div>
            <div className="sp-test-card">
              <div className="sp-test-icon">⚙️</div>
              <h4>White-Box Testing</h4>
              <p>
                Unit and integration tests for backend services — scoring logic,
                safety rule enforcement, and vaccination validation
              </p>
            </div>
            <div className="sp-test-card">
              <div className="sp-test-icon">👥</div>
              <h4>Usability Testing</h4>
              <p>
                10 TestFlight users ran unguided tasks across multiple devices
                and iOS versions — findings drove the Build 5 fix cycle
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

      {/* ── FUTURE WORK ── */}
      <section className="sp-section sp-section--alt">
        <div className="sp-section-inner">
          <p className="sp-eyebrow">What's Next</p>
          <h2 className="sp-section-title">Product thinking beyond Build 5</h2>
          <p className="sp-body sp-body--center">
            Known edge cases are documented. These improvements reflect product
            maturity — not just more features.
          </p>

          <div className="sp-future-grid">
            <div className="sp-future-card">
              <div className="sp-future-icon">👨‍👩‍👧</div>
              <h4>Multi-Dog Households</h4>
              <p>
                Support multiple dogs per user account — a common real-world
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
                Reporting system and admin dashboard — required to scale safely
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

      {/* ── TAKEAWAY ── */}
      <section className="sp-section">
        <div className="sp-section-inner">
          <p className="sp-eyebrow">Reflection</p>
          <h2 className="sp-section-title">What this project demonstrates</h2>

          <div className="sp-skills-grid">
            <div className="sp-skill-tag">End-to-end product ownership</div>
            <div className="sp-skill-tag">UX research → system design</div>
            <div className="sp-skill-tag">
              iOS engineering (SwiftUI, SwiftData, MapKit)
            </div>
            <div className="sp-skill-tag">
              Serverless backend (Firebase, Cloud Functions, TypeScript)
            </div>
            <div className="sp-skill-tag">
              Algorithm design (scoring + ranking pipeline)
            </div>
            <div className="sp-skill-tag">
              Cross-device debugging (iOS 18, Swift actor data races)
            </div>
            <div className="sp-skill-tag">
              Database design (Firestore real-time schema)
            </div>
            <div className="sp-skill-tag">Safety-by-design architecture</div>
          </div>

          <p className="sp-body sp-body--center sp-takeaway-text">
            SoPup is a full-stack product built solo — from user research and
            Figma prototypes through to a Swift actor-backed iOS client, a
            serverless TypeScript backend on Cloud Run, and real-device testing
            with 10 TestFlight users. It demonstrates that I can own a problem
            end-to-end: identify a genuine user need, design the architecture,
            implement it across the stack, debug real-world failures, and ship
            something that works.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sp-cta">
        <h2 className="sp-cta-title">Explore SoPup</h2>
        <p className="sp-cta-sub">
          Try the prototype, read the code, or see more work.
        </p>
        <div className="sp-cta-buttons">
          <a
            href="https://testflight.apple.com/join/duM8Wv9Q"
            target="_blank"
            rel="noopener noreferrer"
            className="sp-btn sp-btn--solid"
          >
            ✈ TestFlight
          </a>
          <a
            href="https://github.com/MpmookR/So_Pup/tree/main/So_Pup"
            target="_blank"
            rel="noopener noreferrer"
            className="sp-btn sp-btn--outline sp-btn--light"
          >
            GitHub →
          </a>
          <a href="/portfolio" className="sp-btn sp-btn--ghost">
            ← All Projects
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Sopup;
