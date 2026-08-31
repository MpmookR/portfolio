import { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CaseStudyHero from "../../components/caseStudy/CaseStudyHero";
import CaseStudyCTA from "../../components/caseStudy/CaseStudyCTA";
import CaseStudyReflection from "../../components/caseStudy/CaseStudyReflection";
import Lightbox from "../../components/caseStudy/Lightbox";
import "../../css/localedition.css";
import localMenuWireframe from "../../assets/images/projects/Local/figmaWireframe/wireframe_filter.png";
import localMenu from "../../assets/images/projects/Local/filter.png";
import localHomeEN from "../../assets/images/projects/Local/eng.png";
import localHomeTH from "../../assets/images/projects/Local/tha.png";
import localRefontBefore from "../../assets/images/projects/Local/font_before.png";
import localRefontAfter from "../../assets/images/projects/Local/font_after.png";
import localHero from "../../assets/images/projects/Local/homepagehero.png";

const LOCALEDITION_HERO = {
  badge: "Full-Stack Web App · Solo Client Project",
  title: "LocalEdition",
  subtitle:
    "A bilingual QR-code menu for a Hat Yai cocktail bar, built end to end and handed off to a non-technical owner",
  heroImage: {
    src: localHero,
    alt: "LocalEdition landing page on desktop",
  },
  meta: [
    { label: "Timeline", value: "2026" },
    { label: "Role", value: "Product Engineer · Solo" },
    { label: "Stack", value: "Next.js · Sanity CMS · TypeScript" },
  ],
  links: [
    {
      href: "https://local-edition-azure.vercel.app",
      label: "🟢 Live Site",
      variant: "solid",
    },
    {
      href: "https://github.com/MpmookR/localEdition",
      label: "GitHub Repo",
      variant: "outline",
      icon: "github",
    },
    {
      href: "https://docs.google.com/document/d/1FWOUcgulkmX7m-nZ7C_QCLUeykWosonB7HAfLv0s5yA/edit?usp=sharing",
      label: "📄 Sanity Content Guide",
      variant: "outline",
    },
  ],
  figmaLinks: [
    {
      href: "https://www.figma.com/proto/QfJzsENjZnVLNxFAqm5DHX/local?node-id=9-11&viewport=-102%2C229%2C0.43&t=3T8XMeMv0m3BTmul-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=9%3A11&page-id=0%3A1",
      label: "Preview Prototype",
    },
  ],
};

const WCAG_CONTRAST_ROWS = [
  {
    role: "Gold text (headings, prices, item names) on background",
    fg: "#DBAF59",
    bg: "#13100C",
    ratio: "9.34:1",
    needs: "4.5:1 normal / 3:1 large",
    result: "Pass, comfortably",
    tone: "good",
  },
  {
    role: "Cream item names (homepage preview only) on background",
    fg: "#F6DA9E",
    bg: "#13100C",
    ratio: "~14:1",
    needs: "4.5:1",
    result: "Pass",
    tone: "good",
  },
  {
    role: "Muted body/ingredient/subtitle text on background",
    fg: "#928878",
    bg: "#13100C",
    ratio: "5.45:1",
    needs: "4.5:1",
    result: "Pass, but the tightest margin — AA yes, AAA (7:1) no",
    tone: "warn",
  },
  {
    role: 'Dark text on the gold "ALL" chip',
    fg: "#13100C",
    bg: "#DBAF59",
    ratio: "9.34:1",
    needs: "4.5:1",
    result: "Pass",
    tone: "good",
  },
];

function LocalEdition() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <main className="containerBG">
      <Header />

      <Lightbox
        src={lightbox?.src}
        alt={lightbox?.alt}
        onClose={() => setLightbox(null)}
      />

      <CaseStudyHero {...LOCALEDITION_HERO} />

      {/* ── OVERVIEW ── */}
      <section className="le-section le-section--alt">
        <div className="le-section-inner">
          <p className="le-eyebrow">Overview</p>
          <h2 className="le-section-title">
            Built for a bar owner, not a portfolio
          </h2>
          <p className="le-body ">
            LocalEdition is a bilingual (Thai/English) QR-code menu for a
            cocktail bar in Hat Yai, Thailand. Customers scan a code at their
            table and browse the menu on their own phone. I built it end to
            end: interviewed the business owner, scoped the product, built it
            on Next.js and Sanity CMS, and handed it off to a non-technical
            owner who now edits it herself.
          </p>
        </div>
      </section>

      {/* ── PROBLEM (PD LENS) ── */}
      <section className="le-section">
        <div className="le-section-inner le-two-col">
          <div>
            <p className="le-eyebrow">The Problem · Product Design Lens</p>
            <h2 className="le-section-title">
              The real problem wasn't a dark room
            </h2>
            <p className="le-body">
              I interviewed the bar owner to understand what she actually
              needed, not just what a "digital menu" usually looks like. Two
              things stood out. The venue is dim by design, it's a cocktail
              bar, not a café, and printed menus are genuinely hard to read
              at the table. That's the surface problem a QR menu solves.
            </p>
            <p className="le-body">
              The deeper problem was maintenance. Menu items, prices,
              photos, and, importantly, opening days and hours all shift
              with the season. A static site would turn every seasonal
              change into a support request to a developer. The owner
              needed to make those edits herself, on her own schedule,
              without touching code or waiting on me.
            </p>
            <div className="le-quote">
              "This isn't 'build a menu website,' it's 'build a system the
              owner can operate without me.'"
            </div>
          </div>
          <div>
            <div className="le-stat-stack">
              <div className="le-stat-card le-stat-card--red">
                <span className="le-stat-num">Every season</span>
                <span className="le-stat-desc">
                  A static site would turn a price or hours change into a
                  support request to a developer
                </span>
              </div>
              <div className="le-stat-card le-stat-card--green">
                <span className="le-stat-num">0 developer requests</span>
                <span className="le-stat-desc">
                  The owner edits menu items, prices, and hours herself, no
                  redeploy needed
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCOPE DECISIONS (PD LENS) ── */}
      <section className="le-section le-section--alt">
        <div className="le-section-inner">
          <p className="le-eyebrow">Scope · Product Design Lens</p>
          <h2 className="le-section-title">
            Saying no to ordering was a product decision
          </h2>
          <p className="le-body le-body--center">
            I deliberately left booking and ordering out of scope, even
            though that's a common feature for a "digital menu" product. The
            reason comes down to how the owner actually runs the bar.
          </p>

          <div className="le-scope-grid">
            <div className="le-scope-card le-scope-card--cut">
              <div className="le-scope-label">🔴 Left out: Booking &amp; Ordering</div>
              <ul className="le-scope-list">
                <li>
                  Cocktails aren't a familiar category in Hat Yai, so most
                  customers don't already know what they're choosing between
                </li>
                <li>An app can't read the table or recommend a drink the way she can</li>
                <li>
                  In-app ordering would remove the one interaction that keeps
                  customers coming back
                </li>
              </ul>
            </div>
            <div className="le-scope-card le-scope-card--kept">
              <div className="le-scope-label">🟢 Kept: Owner-Led Conversation</div>
              <ul className="le-scope-list">
                <li>The menu shows drinks clearly enough to look, ask, and talk to her</li>
                <li>Customers order the way they always have: at the table or the bar</li>
                <li>Every conversation is a chance to build a regular, not just complete a transaction</li>
              </ul>
            </div>
          </div>

          <div className="le-quote le-quote--center">
            "I'd rather the design decisions here read as intentional than
            impressive."
          </div>

          <p className="le-body le-body--center le-body--spaced">
            The same restraint shows up visually too: dark background, gold
            accents, minimal motion, built for someone glancing at a phone
            in low light.
          </p>

                    <div className="le-showcase">
            <div
              className="cs-zoomable"
              onClick={() =>
                setLightbox({
                  src: localHero,
                  alt: "LocalEdition menu page, filterable by spirit category",
                })
              }
            >
              <img
                src={localHero}
                alt="LocalEdition hero image"
                className="le-showcase-img"
              />
            </div>
          </div>

          <div className="le-showcase">
            <div
              className="cs-zoomable"
              onClick={() =>
                setLightbox({
                  src: localMenu,
                  alt: "LocalEdition menu page, filterable by spirit category",
                })
              }
            >
              <img
                src={localMenu}
                alt="LocalEdition menu page, filterable by spirit category"
                className="le-showcase-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── DATA MODELING (ENGINEER LENS) ── */}
      <section className="le-section le-section--alt">
        <div className="le-section-inner">
          <p className="le-eyebrow">Data Modeling · Engineer Lens</p>
          <h2 className="le-section-title">
            The seasonal requirement is a content-modeling problem
          </h2>
          <p className="le-body le-body--center">
            Most of the engineering thought went into content modeling via
            Sanity CMS, with typed GROQ queries and automatic
            schema-to-type generation (TypeGen), so the content model and
            the TypeScript types never drift apart.
          </p>

          <div className="le-schema-grid">
            <div className="le-schema-card">
              <span className="le-schema-tag">Schema</span>
              <h4>Site Settings</h4>
              <p>
                Bar name, bilingual address (line 1/2, city, province,
                postal), bilingual open days and hours, map URL and embed,
                phone, email, and social links. When the owner's hours
                change for the season, she edits one document in Studio;
                nothing gets redeployed.
              </p>
            </div>
            <div className="le-schema-card">
              <span className="le-schema-tag">Schema</span>
              <h4>Menu Sections &amp; Items</h4>
              <p>
                Bilingual name, ingredients, and description fields, with
                English falling back gracefully if a Thai translation isn't
                filled in yet, and vice versa, plus price, an image with
                alt text, and a spirit-category tag that drives the filter
                chips on the menu page.
              </p>
            </div>
          </div>

          <div className="le-callout--amber">
            <strong>A known trade-off, documented on purpose:</strong>{" "}
            "Special of the Month" is implemented as a reserved sort-order
            slot rather than its own boolean or document type, a
            pragmatic call made under time pressure. I've written it up
            as a known sharp edge with a clear upgrade path if the bar
            ever wants more than one featured slot. I'd rather show that
            decision than hide it.
          </div>
        </div>
      </section>

      {/* ── BILINGUAL UX (SHARED) ── */}
      <section className="le-section">
        <div className="le-section-inner">
          <p className="le-eyebrow">Bilingual UX · Shared</p>
          <h2 className="le-section-title">
            Switching language should never cause a flash
          </h2>
          <p className="le-body le-body--center">
            Language switching is instant and needs no page reload. A lot
            of digital-menu implementations either reload the page or flash
            the wrong language on first paint. I used a React context
            backed by <code>useSyncExternalStore</code> and{" "}
            <code>localStorage</code>, with the server always rendering
            English first and the client snapshot taking over right after
            hydration. Since <code>localStorage</code> only fires its
            native storage event in other tabs, I dispatch it manually so
            the current tab's UI updates immediately when someone toggles
            language.
          </p>

          <div className="le-flow-steps">
            <div className="le-flow-step">
              <div className="le-flow-icon">🖥️</div>
              <h4>Server renders English</h4>
              <p>
                Every page loads with English first, so there's nothing to
                guess before hydration.
              </p>
            </div>
            <div className="le-flow-step">
              <div className="le-flow-icon">💧</div>
              <h4>Client hydrates from storage</h4>
              <p>
                <code>useSyncExternalStore</code> reads the saved language
                from <code>localStorage</code> right after hydration: no
                mismatch, no flash.
              </p>
            </div>
            <div className="le-flow-step">
              <div className="le-flow-icon">🔁</div>
              <h4>Storage event dispatched manually</h4>
              <p>
                <code>localStorage</code> only notifies other tabs
                natively, so the current tab's toggle dispatches its own
                event to update instantly.
              </p>
            </div>
          </div>

          <div className="le-compare">
            <div className="le-compare-item">
              <span className="le-compare-tag">English</span>
              <div
                className="cs-zoomable"
                onClick={() =>
                  setLightbox({
                    src: localHomeEN,
                    alt: "LocalEdition homepage in English",
                  })
                }
              >
                <img
                  src={localHomeEN}
                  alt="LocalEdition homepage in English"
                  className="le-compare-img"
                />
              </div>
            </div>
            <div className="le-compare-item">
              <span className="le-compare-tag">ภาษาไทย</span>
              <div
                className="cs-zoomable"
                onClick={() =>
                  setLightbox({
                    src: localHomeTH,
                    alt: "LocalEdition homepage in Thai",
                  })
                }
              >
                <img
                  src={localHomeTH}
                  alt="LocalEdition homepage in Thai"
                  className="le-compare-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FIGMA TO BUILD ── */}
      <section className="le-section le-section--alt">
        <div className="le-section-inner">
          <p className="le-eyebrow">Design → Build</p>
          <h2 className="le-section-title">
            Three decisions, and the numbers behind them
          </h2>
          <p className="le-body le-body--center">
            Here's what changed between the Figma file and what's live
            today, and the reasoning behind each call.
          </p>

          <div className="le-flow-steps">
            <div className="le-flow-step">
              <div className="le-flow-icon">🎛️</div>
              <h4>Filters</h4>
              <p>
                Ten placeholder categories became chips generated from the
                live menu's real spirit tags.
              </p>
            </div>
            <div className="le-flow-step">
              <div className="le-flow-icon">🔤</div>
              <h4>Typography</h4>
              <p>
                The display font was swapped after a contrast and
                legibility check in Figma.
              </p>
            </div>
            <div className="le-flow-step">
              <div className="le-flow-icon">🎯</div>
              <h4>Text hierarchy</h4>
              <p>
                Three tone levels collapsed to one, at the owner's request,
                without dropping below WCAG AA.
              </p>
            </div>
          </div>

          <h3 className="le-subhead le-subhead--spaced">
            Filters: hardcoded list → live data
          </h3>
          <div className="le-compare">
            <div className="le-compare-item">
              <span className="le-compare-tag">Wireframe</span>
              <div
                className="cs-zoomable"
                onClick={() =>
                  setLightbox({
                    src: localMenuWireframe,
                    alt: "Figma wireframe of the menu page, with placeholder copy and ten generic spirit filters",
                  })
                }
              >
                <img
                  src={localMenuWireframe}
                  alt="Figma wireframe of the menu page, with placeholder copy and ten generic spirit filters"
                  className="le-compare-img"
                />
              </div>
            </div>
            <div className="le-compare-item">
              <span className="le-compare-tag">Deployment</span>
              <div
                className="cs-zoomable"
                onClick={() =>
                  setLightbox({
                    src: localHomeEN,
                    alt: "Shipped menu page with real drinks and five spirit filters",
                  })
                }
              >
                <img
                  src={localHomeEN}
                  alt="Shipped menu page with real drinks and five spirit filters"
                  className="le-compare-img"
                />
              </div>
            </div>
          </div>
          <p className="le-caption">
            Left: Figma's placeholder categories, guessed up front. Right:
            chips generated from real spirit tags in Sanity — a new spirit
            next season and a chip just appears, nothing to keep in sync.
          </p>

          <h3 className="le-subhead le-subhead--spaced">
            Typography: checked, then swapped
          </h3>
          <div className="le-compare">
            <div className="le-compare-item">
              <span className="le-compare-tag">Before</span>
              <div
                className="cs-zoomable"
                onClick={() =>
                  setLightbox({
                    src: localRefontBefore,
                    alt: "Menu typography before the accessibility fix",
                  })
                }
              >
                <img
                  src={localRefontBefore}
                  alt="Menu typography before the accessibility fix"
                  className="le-compare-img"
                />
              </div>
            </div>
            <div className="le-compare-item">
              <span className="le-compare-tag">After</span>
              <div
                className="cs-zoomable"
                onClick={() =>
                  setLightbox({
                    src: localRefontAfter,
                    alt: "Menu typography after the accessibility fix",
                  })
                }
              >
                <img
                  src={localRefontAfter}
                  alt="Menu typography after the accessibility fix"
                  className="le-compare-img"
                />
              </div>
            </div>
          </div>
          <p className="le-caption">
            Figma's MCP integration flagged the wireframe's display font as
            hard to read on mobile, in the low light the menu is actually
            used in. The numbers behind the swap:
          </p>

          <div className="le-wcag-table-wrap">
            <table className="le-wcag-table">
              <thead>
                <tr>
                  <th>Text role</th>
                  <th>Colors (measured)</th>
                  <th>Contrast ratio</th>
                  <th>WCAG AA needs</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                {WCAG_CONTRAST_ROWS.map((row) => (
                  <tr key={row.role}>
                    <td>{row.role}</td>
                    <td>
                      <span className="le-wcag-swatch">
                        <span
                          className="le-wcag-dot"
                          style={{ background: row.fg }}
                        />
                        {row.fg}
                      </span>
                      <span className="le-wcag-on">on</span>
                      <span className="le-wcag-swatch">
                        <span
                          className="le-wcag-dot"
                          style={{ background: row.bg }}
                        />
                        {row.bg}
                      </span>
                    </td>
                    <td>{row.ratio}</td>
                    <td>{row.needs}</td>
                    <td className={`le-wcag-result le-wcag-result--${row.tone}`}>
                      {row.result}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="le-subhead le-subhead--spaced">
            Text hierarchy: a request, and a bug I found chasing it
          </h3>
          <p className="le-body le-body--center">
            The wireframe used three tones on the menu, cream for the
            name, gold for ingredients, muted for the description. The
            owner asked for something calmer: only the name should catch
            the eye. Collapsing tiers usually costs contrast somewhere, so
            I checked before shipping it.
          </p>

          <div className="le-stat-stack le-stat-stack--row">
            <div className="le-stat-card le-stat-card--green">
              <span className="le-stat-num">9.34:1</span>
              <span className="le-stat-desc">
                Gold name &amp; price — well above the 4.5:1 floor
              </span>
            </div>
            <div className="le-stat-card le-stat-card--green">
              <span className="le-stat-num">5.45:1</span>
              <span className="le-stat-desc">
                Ingredients — passes AA, not AAA
              </span>
            </div>
          </div>

          <div className="le-callout--amber">
            <strong>What I found chasing it:</strong> the simplification
            reached <code>MenuItemRow</code> and <code>SpecialOfMonth</code>,
            but not the homepage's <code>SignatureDrinks</code> preview,
            still on the old three-tone treatment. Same drink name, styled
            two different ways, not a decision, just a component that
            missed the memo. Fixing that, and turning "drink name" and
            "ingredient line" into named roles instead of a class each
            component invents on its own. An automated checker would've
            said everything passed both times; it took reading the
            components side by side to catch what actually mattered.
          </div>
        </div>
      </section>

      {/* ── OUTCOME (SHARED) ── */}
      <section className="le-section">
        <div className="le-section-inner">
          <p className="le-eyebrow">Outcome · Shared</p>
          <h2 className="le-section-title">Live, in use, and run by the owner</h2>
          <p className="le-body le-body--center">
            The Studio is live and the bar owner is actively using it for
            real content management: editing prices, adding seasonal items,
            and updating hours herself, which was the actual goal, not a
            stretch outcome. The site is deployed and in use at the venue.
          </p>

          <div className="le-outcome-banner">
            <strong>Handoff included a written guide:</strong> a
            step-by-step document showing the owner exactly how to add and
            edit products in Sanity Studio, so she isn't left guessing
            after I step away.
            <div className="le-outcome-link-row">
              <a
                href="https://docs.google.com/document/d/1FWOUcgulkmX7m-nZ7C_QCLUeykWosonB7HAfLv0s5yA/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="le-outcome-link"
              >
                View the content guide →
              </a>
            </div>
          </div>
        </div>
      </section>

      <CaseStudyReflection
        alt
        skills={[
          "Client discovery → product scoping (solo)",
          "Content modeling (Sanity CMS, typed GROQ + TypeGen)",
          "Full-stack build (Next.js 16, React 19, TypeScript)",
          "Bilingual UX (React context, useSyncExternalStore)",
          "Accessibility-driven design iteration (Figma MCP)",
          "Non-technical client handoff & documentation",
          "Saying no as a product decision",
          "Real-world deployment (Vercel)",
        ]}
        note="What I'd point to from this project: taking a loosely defined ask from a non-technical stakeholder, identifying the requirement underneath the stated request (maintainability, not just 'a website'), and making scoping and visual decisions that serve the real context rather than defaulting to more features or more polish."
        banner={
          <>
            <strong>What this shows:</strong> I can run a solo client
            engagement start to finish, from an owner interview to a
            shipped product she operates without me, while making
            deliberate scope cuts (no ordering) and staying upfront about
            the engineering shortcuts I took under time pressure.
          </>
        }
      />

      <CaseStudyCTA
        title="Explore LocalEdition"
        subtitle="See the live menu, browse the code, or preview the Figma prototype"
        buttons={[
          ...LOCALEDITION_HERO.figmaLinks.map((link) => ({
            label: link.label,
            href: link.href,
            variant: "figma",
            icon: "figma",
            external: true,
          })),
          {
            label: "🟢 Live Site",
            href: "https://local-edition-azure.vercel.app",
            variant: "solid",
            external: true,
          },
          {
            label: "GitHub →",
            href: "https://github.com/MpmookR/localEdition",
            variant: "outline-light",
            external: true,
          },
          { label: "← All Projects", href: "/portfolio", variant: "ghost" },
        ]}
      />

      <Footer />
    </main>
  );
}

export default LocalEdition;
