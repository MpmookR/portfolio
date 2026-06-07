import { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CaseStudyHero from "../../components/caseStudy/CaseStudyHero";
import Lightbox from "../../components/caseStudy/Lightbox";
import "../../css/sowell.css";

const SOWELL_HERO = {
  badge: "iOS Case Study",
  title: "SoWell",
  subtitle: "A daily mood and health companion that unifies emotional and physical wellbeing",
  meta: [
    { label: "Timeline", value: "January – March 2025" },
    { label: "Role", value: "iOS Developer + UX Designer" },
    { label: "Stack", value: "SwiftUI · SwiftData · HealthKit · Firebase" },
  ],
  links: [
    {
      href: "https://github.com/MpmookR/SoWell/tree/main",
      label: "GitHub Repo",
      variant: "outline",
      icon: "github",
    },
      {
      href: "https://drive.google.com/file/d/1yAfaemi14avPdC5eVgS3YtwGHLdTMXX5/view?usp=sharing",
      label: "📽️ Watch Project WalkThrough",
      variant: "solid",
    },
  ],
    figmaLinks: [
    {
      href: "https://www.figma.com/proto/zUgb6lLdbxNBY3KhWWFrjV/MobileCourseWork?page-id=1%3A3&node-id=144-1734&viewport=505%2C114%2C0.34&t=9kGfE6Zw1ghudZuf-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=144%3A1734&desktop-link-click-timestamp=1780829970642&desktop-ul-exp-bucket=po",
      label: "Hi-Fi SoWell Prototype",
    },
  ],
};

function SoWell() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <main className="containerBG">
      <Header />

      <Lightbox
        src={lightbox?.src}
        alt={lightbox?.alt}
        onClose={() => setLightbox(null)}
      />

      <CaseStudyHero {...SOWELL_HERO} />

      {/* ── PROBLEM ── */}
      <section className="sw-section sw-section--alt">
        <div className="sw-section-inner sw-two-col">
          <div>
            <p className="sw-eyebrow">The Problem</p>
            <h2 className="sw-section-title">Wellbeing is more than just steps</h2>
            <p className="sw-body">
              Mood, movement, and sleep are deeply interconnected — yet most apps
              treat them in isolation. Tracking emotional health in one app,
              activity in another, and sleep in a third creates friction and makes
              it harder to spot patterns. SoWell brings all three into a single,
              calm, personal view.
            </p>
            <div className="sw-quote">
              "You can't understand your wellbeing if you can only see half the picture."
            </div>
          </div>
          <div>
            <div className="sw-stat-stack">
              <div className="sw-stat-card sw-stat-card--red">
                <span className="sw-stat-num">3+</span>
                <span className="sw-stat-desc">
                  Apps needed to track mood, activity, and sleep separately
                </span>
              </div>
              <div className="sw-stat-card sw-stat-card--green">
                <span className="sw-stat-num">1</span>
                <span className="sw-stat-desc">
                  Unified app — mood, diary, calendar, HealthKit charts, weekly summary
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APP SCREENS ── */}
      <section className="sw-section">
        <div className="sw-section-inner">
          <p className="sw-eyebrow">App Screens</p>
          <h2 className="sw-section-title">Six screens. One calm, connected experience.</h2>
          <p className="sw-body sw-body--center">
            Every screen is designed to reduce friction — logging a mood takes
            seconds, and health data from HealthKit appears automatically.
          </p>

          <div className="sw-screens-grid">
            <div className="sw-screen-card sw-screen-card--auth">
              <div className="sw-screen-header">
                <span className="sw-screen-icon">🔑</span>
                <span className="sw-screen-name">Login</span>
              </div>
              <p className="sw-screen-desc">
                Secure sign-in via Firebase Authentication — persistent sessions
                keep users logged in across launches.
              </p>
              <div
                className="sw-screen-img-wrap cs-zoomable"
                onClick={() =>
                  setLightbox({
                    src: "/src/assets/images/projects/soWell/flow/login.png",
                    alt: "SoWell Login screen",
                  })
                }
              >
                <img
                  src="/src/assets/images/projects/soWell/flow/login.png"
                  alt="SoWell Login screen"
                />
              </div>
            </div>

            <div className="sw-screen-card sw-screen-card--register">
              <div className="sw-screen-header">
                <span className="sw-screen-icon">📋</span>
                <span className="sw-screen-name">Register</span>
              </div>
              <p className="sw-screen-desc">
                New user onboarding with Firebase — account creation and profile
                setup before the first mood log.
              </p>
              <div
                className="sw-screen-img-wrap cs-zoomable"
                onClick={() =>
                  setLightbox({
                    src: "/src/assets/images/projects/soWell/flow/register.png",
                    alt: "SoWell Register screen",
                  })
                }
              >
                <img
                  src="/src/assets/images/projects/soWell/flow/register.png"
                  alt="SoWell Register screen"
                />
              </div>
            </div>

            <div className="sw-screen-card sw-screen-card--mood">
              <div className="sw-screen-header">
                <span className="sw-screen-icon">😊</span>
                <span className="sw-screen-name">Mood Tracker</span>
              </div>
              <p className="sw-screen-desc">
                Log today's mood with a quick tap — optionally add a diary entry
                to capture the context behind the feeling.
              </p>
              <div
                className="sw-screen-img-wrap cs-zoomable"
                onClick={() =>
                  setLightbox({
                    src: "/src/assets/images/projects/soWell/flow/moodTracker.png",
                    alt: "SoWell Mood Tracker screen",
                  })
                }
              >
                <img
                  src="/src/assets/images/projects/soWell/flow/moodTracker.png"
                  alt="SoWell Mood Tracker screen"
                />
              </div>
            </div>

            <div className="sw-screen-card sw-screen-card--diary">
              <div className="sw-screen-header">
                <span className="sw-screen-icon">📔</span>
                <span className="sw-screen-name">Diary</span>
              </div>
              <p className="sw-screen-desc">
                Browse past entries and reflect on emotional patterns — stored
                locally in SwiftData and synced via Firestore.
              </p>
              <div
                className="sw-screen-img-wrap cs-zoomable"
                onClick={() =>
                  setLightbox({
                    src: "/src/assets/images/projects/soWell/flow/diary.png",
                    alt: "SoWell Diary screen",
                  })
                }
              >
                <img
                  src="/src/assets/images/projects/soWell/flow/diary.png"
                  alt="SoWell Diary screen"
                />
              </div>
            </div>

            <div className="sw-screen-card sw-screen-card--calendar">
              <div className="sw-screen-header">
                <span className="sw-screen-icon">📅</span>
                <span className="sw-screen-name">Calendar View</span>
              </div>
              <p className="sw-screen-desc">
                A colour-coded month view that makes mood trends visible at a
                glance — tap any day to revisit the entry.
              </p>
              <div
                className="sw-screen-img-wrap cs-zoomable"
                onClick={() =>
                  setLightbox({
                    src: "/src/assets/images/projects/soWell/flow/calendar.png",
                    alt: "SoWell Calendar screen",
                  })
                }
              >
                <img
                  src="/src/assets/images/projects/soWell/flow/calendar.png"
                  alt="SoWell Calendar screen"
                />
              </div>
            </div>

            <div className="sw-screen-card sw-screen-card--charts">
              <div className="sw-screen-header">
                <span className="sw-screen-icon">📊</span>
                <span className="sw-screen-name">Health Charts</span>
              </div>
              <p className="sw-screen-desc">
                Step count and sleep data pulled live from Apple HealthKit —
                displayed alongside mood history for a complete weekly picture.
              </p>
              <div
                className="sw-screen-img-wrap cs-zoomable"
                onClick={() =>
                  setLightbox({
                    src: "/src/assets/images/projects/soWell/flow/chart.png",
                    alt: "SoWell Health Charts screen",
                  })
                }
              >
                <img
                  src="/src/assets/images/projects/soWell/flow/chart.png"
                  alt="SoWell Health Charts screen"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE ── */}
      <section className="sw-section sw-section--alt">
        <div className="sw-section-inner">
          <p className="sw-eyebrow">Architecture</p>
          <h2 className="sw-section-title">Built on a clean, layered foundation</h2>

          <div className="sw-arch-grid">
            <div className="sw-arch-card">
              <div className="sw-arch-icon">📱</div>
              <h4>iOS App</h4>
              <p className="sw-arch-tech">SwiftUI · MVVM · SwiftData</p>
              <ul className="sw-arch-list">
                <li>SwiftUI views backed by MVVM ViewModels</li>
                <li>SwiftData persists mood and diary entries locally</li>
                <li>Offline-first — entries save even without connectivity</li>
                <li>Clean view/logic separation for testability</li>
              </ul>
            </div>
            <div className="sw-arch-card">
              <div className="sw-arch-icon">🍎</div>
              <h4>HealthKit Layer</h4>
              <p className="sw-arch-tech">Apple HealthKit · ChartViewModel</p>
              <ul className="sw-arch-list">
                <li>Reads step count and sleep duration from HealthKit</li>
                <li>Graceful fallback when device permissions are denied</li>
                <li><code>useMockData</code> flag for Simulator development</li>
                <li>Charts update automatically from live health data</li>
              </ul>
            </div>
            <div className="sw-arch-card">
              <div className="sw-arch-icon">☁️</div>
              <h4>Backend</h4>
              <p className="sw-arch-tech">Firebase Auth · Firestore</p>
              <ul className="sw-arch-list">
                <li>Firebase Auth handles registration and secure login</li>
                <li>Firestore syncs mood and diary data across devices</li>
                <li>Persistent sessions — users stay logged in</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGINEERING NOTES ── */}
      <section className="sw-section">
        <div className="sw-section-inner">
          <p className="sw-eyebrow">Engineering</p>
          <h2 className="sw-section-title">Technical decisions worth noting</h2>
          <p className="sw-body sw-body--center">
            Three choices that shaped how the app was built, tested, and used.
          </p>

          <div className="sw-decisions">
            <div className="sw-decision">
              <div className="sw-decision-badge">01</div>
              <div className="sw-decision-body">
                <h4>Mock Data Toggle for HealthKit</h4>
                <p>
                  <strong>Challenge:</strong> HealthKit requires physical device access and user
                  permission — impossible to test in the Simulator.
                </p>
                <p className="sw-decision-note">
                  Decision: A single <code>useMockData</code> boolean in ChartViewModel switches
                  between live HealthKit reads and pre-populated arrays — keeping development fast
                  without breaking the real data path.
                </p>
              </div>
            </div>

            <div className="sw-decision">
              <div className="sw-decision-badge">02</div>
              <div className="sw-decision-body">
                <h4>SwiftData as the Offline-First Store</h4>
                <p>
                  <strong>Challenge:</strong> Mood tracking needs to work even without a network
                  connection — relying solely on Firestore would cause data loss on poor connectivity.
                </p>
                <p className="sw-decision-note">
                  Decision: SwiftData persists every entry locally on write; Firestore syncs in the
                  background. The local store is the source of truth for reads, so the UI is always
                  responsive regardless of connection state.
                </p>
              </div>
            </div>

            <div className="sw-decision">
              <div className="sw-decision-badge">03</div>
              <div className="sw-decision-body">
                <h4>MVVM for Testable ViewModels</h4>
                <p>
                  <strong>Challenge:</strong> SwiftUI views that own all their data logic become
                  hard to test and reason about as the app grows.
                </p>
                <p className="sw-decision-note">
                  Decision: All business logic lives in ViewModels that can be exercised independently
                  of the UI. Views are kept thin — they observe published state and forward user
                  actions, nothing more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REFLECTION ── */}
      <section className="sw-section sw-section--alt">
        <div className="sw-section-inner">
          <p className="sw-eyebrow">Reflection</p>
          <h2 className="sw-section-title">What this project demonstrates</h2>

          <div className="sw-skills-grid">
            <div className="sw-skill-tag">iOS development (SwiftUI + SwiftData)</div>
            <div className="sw-skill-tag">Apple HealthKit integration</div>
            <div className="sw-skill-tag">MVVM architecture</div>
            <div className="sw-skill-tag">Firebase Auth + Firestore</div>
            <div className="sw-skill-tag">Offline-first data design</div>
            <div className="sw-skill-tag">UX design for health apps</div>
            <div className="sw-skill-tag">Collaborative development</div>
            <div className="sw-skill-tag">Test strategy (mock data toggle)</div>
          </div>

          <p className="sw-body sw-body--center sw-takeaway-text">
            SoWell was built as a university coursework project in collaboration with
            Kayley Govinden. It demonstrates how real-world health data from HealthKit
            can be combined with user-logged emotional data to give a more complete picture
            of daily wellbeing — while keeping the experience simple and low-friction. The
            MVVM architecture and offline-first storage approach reflect production-quality
            thinking applied at coursework scale.
          </p>

          <div className="sw-collab-note">
            Built in collaboration with{" "}
            <a
              href="https://github.com/KROSE95"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-green)", fontWeight: 600 }}
            >
              Kayley Govinden
            </a>{" "}
            as part of a university Mobile Development coursework.
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sw-cta">
        <h2 className="sw-cta-title">Explore SoWell</h2>
        <p className="sw-cta-sub">Read the code or see more work.</p>
        <div className="sw-cta-buttons">
          <a
            href="https://github.com/MpmookR/SoWell/tree/main"
            target="_blank"
            rel="noopener noreferrer"
            className="sw-btn sw-btn--outline sw-btn--light"
          >
            GitHub →
          </a>
          <a href="/portfolio" className="sw-btn sw-btn--ghost">
            ← All Projects
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default SoWell;
