import { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CaseStudyHero from "../../components/caseStudy/CaseStudyHero";
import CaseStudyCTA from "../../components/caseStudy/CaseStudyCTA";
import CaseStudyReflection from "../../components/caseStudy/CaseStudyReflection";
import Lightbox from "../../components/caseStudy/Lightbox";
import "../../css/moodboard.css";
import moodboardIntro from "../../assets/images/projects/MoodBoard/intro.png";
import moodboardOnboardingBefore from "../../assets/images/projects/MoodBoard/onboarding_before.png";
import moodboardOnboardingAfter from "../../assets/images/projects/MoodBoard/onboarding_after.png";
import moodboardWorkflow from "../../assets/images/projects/MoodBoard/WorkflowEdition.png";
import moodboardPhotoEditing from "../../assets/images/projects/MoodBoard/PhotoEditingRedesign.png";

const MOODBOARD_HERO = {
  badge: "iOS App · Freelance UX Design",
  title: "MoodBoard",
  subtitle: "Redesigning a widget customisation app to feel precise, intuitive, and iOS-native",
  heroImage: {
    src: moodboardIntro,
    alt: "MoodBoard app showing its interface",
  },
  meta: [
    { label: "Timeline", value: "July 2023 – April 2024" },
    { label: "Role", value: "Freelance UX Designer" },
    { label: "Tools", value: "Figma · UX Research · Usability Testing" },
  ],
};

function MoodBoard() {
  
  const [lightbox, setLightbox] = useState(null);
  
  return (
    <main className="containerBG">
      <Header />

      <Lightbox
        src={lightbox?.src}
        alt={lightbox?.alt}
        onClose={() => setLightbox(null)}
      />


      <CaseStudyHero {...MOODBOARD_HERO} />

      {/* ── OVERVIEW ── */}
      <section className="mb-section mb-section--alt">
        <div className="mb-section-inner">
          <p className="mb-eyebrow">Overview</p>
          <h2 className="mb-section-title">Two phases · One cleaner product</h2>
          <p className="mb-body mb-body--center">
            MoodBoard is an iOS widget customisation app that lets users build personalised moodboards with photos, stickers, text, emoji, pins, and styles. I joined as a freelance UX designer across two phases. The first focused on the onboarding experience; the second redesigned the photo editing and widget decoration flow to make interactions more precise, discoverable, and aligned with iOS UI standards.
          </p>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="mb-section">
        <div className="mb-section-inner">
          <p className="mb-eyebrow">The Problem</p>
          <h2 className="mb-section-title">Friction in the two most critical flows</h2>
          <p className="mb-body mb-body--center">
            The app's core value is creative widget decoration, but users were
            hitting friction at both ends: before they got started, and during editing.
          </p>

          <div className="mb-problem-grid">
            <div className="mb-problem-card mb-problem-card--onboarding">
              <div className="mb-problem-area">Phase 1 · Onboarding</div>
              <h4>First-time experience</h4>
              <ul className="mb-problem-list">
                <li>Walkthrough screens didn't communicate feature value fast enough</li>
                <li>CTA flow felt repetitive and lacked excitement at the final step</li>
                <li>Skip / back / continue navigation needed smoothing</li>
              </ul>
            </div>
            <div className="mb-problem-card mb-problem-card--editing">
              <div className="mb-problem-area">Phase 2 · Editing</div>
              <h4>Widget editing & photo arrangement</h4>
              <ul className="mb-problem-list">
                <li>Too many controls visible at once, and the clutter overwhelmed users</li>
                <li>Scroll-heavy controls hurt discoverability</li>
                <li>Elements were too small to edit precisely on canvas</li>
                <li>Hard to select the right photo when multiple items overlapped</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESEARCH ── */}
      <section className="mb-section mb-section--alt">
        <div className="mb-section-inner">
          <p className="mb-eyebrow">Research</p>
          <h2 className="mb-section-title">Validating pain points before redesigning</h2>
          <p className="mb-body mb-body--center">
            A user survey with 28 responses confirmed what early usage patterns
            suggested and gave clear direction for where to focus the redesign.
          </p>

          <div className="mb-research-row">
            <div className="mb-stat-big">
              <span className="mb-stat-big-num">28</span>
              <span className="mb-stat-big-label">survey responses</span>
            </div>

            <div className="mb-findings-grid">
              <div className="mb-finding-card">
                <h5>Selection conflicts</h5>
                <p>
                  Selecting the right photo when multiple items overlapped was the
                  most cited frustration.
                </p>
              </div>
              <div className="mb-finding-card">
                <h5>Precision issues</h5>
                <p>
                  Controls were too small for accurate editing, so users felt like
                  they were fighting the interface.
                </p>
              </div>
              <div className="mb-finding-card">
                <h5>Unexpected behaviour</h5>
                <p>
                  Background removal sometimes removed more than expected, eroding
                  trust in the tool.
                </p>
              </div>
              <div className="mb-finding-card">
                <h5>UX expectations</h5>
                <p>
                  Users expected familiar iOS patterns (e.g. Instagram-style delete),
                  but the app deviated without clear benefit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── UX IMPROVEMENTS ── */}
      <section className="mb-section">
        <div className="mb-section-inner">
          <p className="mb-eyebrow">Redesign</p>
          <h2 className="mb-section-title">Three improvements, one better journey</h2>
          <p className="mb-body mb-body--center">
            Each improvement maps directly to a validated research finding,
            not a speculative change.
          </p>

          <div className="mb-improvements">

            <div className="mb-improvement">
              <div className="mb-improvement-header">
                <div className="mb-improvement-num">01</div>
                <div className="mb-improvement-header-text">
                  <h4>Onboarding Improvements</h4>
                  <p>
                    Make the first-time experience clearer, smoother, and more
                    motivating so users arrive at the canvas ready to create.
                  </p>
                </div>
              </div>
              <div className="mb-before-after">
                <div className="mb-before">
                  <div className="mb-before-label">Before</div>
                  <ul>
                    <li>Walkthrough buried the value proposition</li>
                    <li>Repetitive CTAs with no payoff moment</li>
                    <li>Inconsistent skip / back / continue patterns</li>
                  </ul>
                </div>
                <div className="mb-after">
                  <div className="mb-after-label">After</div>
                  <ul>
                    <li>Stronger hierarchy, so value lands on the first screen</li>
                    <li>Final CTA rewritten to motivate action, not just continue</li>
                    <li>Navigation consistent throughout all onboarding steps</li>
                  </ul>
                </div>
              </div>
              

              <div className="mb-image-comparison">
                <div className="mb-image-comparison-item">
                  <span className="mb-img-label mb-img-label--before">Before</span>
                  <div className="cs-zoomable"
                  onClick={() =>
                  setLightbox({
                  src: moodboardOnboardingBefore,
                    alt: "Onboarding screens before redesign",
                  })
                }
                >
                  <img
                  src={moodboardOnboardingBefore}
                    alt="Onboarding screens before redesign"
                    className="mb-comparison-img"
                />
                </div>
              
                </div>
                <div className="mb-image-comparison-item">
                  <span className="mb-img-label mb-img-label--after">After</span>
                  <div
                    className="cs-zoomable"
                    onClick={() =>
                      setLightbox({
                        src: moodboardOnboardingAfter,
                        alt: "Onboarding screens after redesign",
                      })
                    }
                  >
                    <img
                      src={moodboardOnboardingAfter}
                      alt="Onboarding screens after redesign"
                      className="mb-comparison-img"
                    />
                  </div>
                </div>
              </div>

              <p className="mb-improvement-result">
                Onboarding felt more coherent and better aligned with user expectations
                going into the editing canvas.
              </p>
            </div>

            <div className="mb-improvement">
              <div className="mb-improvement-header">
                <div className="mb-improvement-num">02</div>
                <div className="mb-improvement-header-text">
                  <h4>Editing Workflow Simplification</h4>
                  <p>
                    Reduce UI clutter and make tools discoverable without forcing
                    users to scroll through everything at once.
                  </p>
                </div>
              </div>
              <div className="mb-before-after">
                <div className="mb-before">
                  <div className="mb-before-label">Before</div>
                  <ul>
                    <li>All tools exposed simultaneously, which felt overwhelming</li>
                    <li>Feature discovery depended on scrolling</li>
                    <li>Canvas felt cluttered during active editing</li>
                  </ul>
                </div>
                <div className="mb-after">
                  <div className="mb-after-label">After</div>
                  <ul>
                    <li>Tap-based grouped panel: Style / Filter / Pin / Transform</li>
                    <li>Controls are contextual, shown only when relevant</li>
                    <li>Cleaner canvas that feels iOS-native</li>
                  </ul>
                </div>
              </div>
              <div className="mb-image-single">
                <div
                  className="cs-zoomable"
                  onClick={() =>
                    setLightbox({
                      src: moodboardWorkflow,
                      alt: "Editing workflow before and after redesign",
                    })
                  }
                >
                  <img
                    src={moodboardWorkflow}
                    alt="Editing workflow before and after redesign"
                    className="mb-composite-img"
                  />
                </div>
              </div>

              <p className="mb-improvement-result">
                Reduced cognitive load, faster navigation to desired tools, and an
                experience that matches what iOS users already expect.
              </p>
            </div>

            <div className="mb-improvement">
              <div className="mb-improvement-header">
                <div className="mb-improvement-num">03</div>
                <div className="mb-improvement-header-text">
                  <h4>Photo Editing Redesign: Transform Mode</h4>
                  <p>
                    Enable precise Move / Scale / Rotate for small widget elements
                    that were nearly impossible to control directly on canvas.
                  </p>
                </div>
              </div>
              <div className="mb-before-after">
                <div className="mb-before">
                  <div className="mb-before-label">Before</div>
                  <ul>
                    <li>Direct canvas manipulation of tiny elements, which was imprecise</li>
                    <li>Easy to mis-edit, requiring repeated undos</li>
                    <li>No dedicated mode for position / scale / rotation</li>
                  </ul>
                </div>
                <div className="mb-after">
                  <div className="mb-after-label">After</div>
                  <ul>
                    <li>Dedicated Transform mode with explicit Move, Scale, Rotate</li>
                    <li>Editing lifted off canvas, so no more fighting small targets</li>
                    <li>Clear affordances reduce trial-and-error</li>
                  </ul>
                </div>
              </div>
              <div className="mb-image-single">
                <div
                  className="cs-zoomable"
                  onClick={() =>
                    setLightbox({
                      src: moodboardPhotoEditing,
                      alt: "Photo editing transform mode before and after redesign",
                    })
                  }
                >
                  <img
                    src={moodboardPhotoEditing}
                    alt="Photo editing transform mode before and after redesign"
                    className="mb-composite-img"
                  />
                </div>
              </div>

              <p className="mb-improvement-result">
                Better precision, more confidence during decoration, and fewer
                mistakes, especially for users building dense, layered widgets.
              </p>
            </div>

          </div>
        </div>
      </section>

      <CaseStudyReflection
        alt
        skills={[
          "Freelance client collaboration",
          "UX research (survey design + synthesis)",
          "iOS interaction patterns",
          "Figma hi-fi prototyping",
          "Before / after UX critique",
          "Working within engineering constraints",
          "Onboarding flow design",
          "Widget editing UX",
        ]}
        note="MoodBoard was a freelance engagement across two phases spanning six months, working directly with the senior iOS engineer. Every proposal had to clear two bars, not one: was it a better experience, and could it actually be built. Transform Mode is the clearest example: a dedicated Move/Scale/Rotate panel replaced direct canvas manipulation, not because it looked nicer, but because tiny widget elements were provably unbuildable to edit precisely any other way. Research came first throughout 28 survey responses shaped the problem definition before a single screen changed, so every fix traced back to a named pain point rather than a designer's hunch."
        banner={
          <>
          <em>MoodBoard is no longer live on the App Store.</em> It was built in part to support the engineer's application for a Senior iOS role at Apple. Once he was hired, the app had served its purpose and was sunset. The redesign work and the funnel data it produced are what remain of that period.          
          </>
        }
      />

      <CaseStudyCTA
        title="Explore MoodBoard"
        subtitle="See more of my work"
        buttons={[
          { label: "← All Projects", href: "/portfolio", variant: "ghost" },
        ]}
      />

      <Footer />
    </main>
  );
}

export default MoodBoard;
