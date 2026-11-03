// Chapter 2 of the Ondo case study: the week after the take-home.
// Content comes from the Ondo repo: doc/story.md (Part 2), doc/design_system.md and doc/agent.md.
import flowOverview from "../../assets/images/projects/Ondo/flow/01-overview.png";
import flowKey from "../../assets/images/projects/Ondo/flow/02-key.png";
import flowOnboarding from "../../assets/images/projects/Ondo/flow/03-onboarding.png";
import flowShop from "../../assets/images/projects/Ondo/flow/04-shop.png";
import flowBox from "../../assets/images/projects/Ondo/flow/05-your-box.png";
import flowCheckout from "../../assets/images/projects/Ondo/flow/06-checkout.png";
import flowSession from "../../assets/images/projects/Ondo/flow/07-session.png";
import flowLeaving from "../../assets/images/projects/Ondo/flow/08-leaving-onboarding.png";
import { STORYBOOK_URL } from "./ondoWeekAfterData";

const DESIGN_DOC_URL = "https://github.com/MpmookR/ondo/blob/main/doc/design_system.md";
const AGENT_URL = "https://github.com/MpmookR/ondo/blob/main/doc/agent.md";
const STORY_PART2_URL = "https://github.com/MpmookR/ondo/blob/main/doc/story.md#part-2-three-more-days-ondo";

const QUESTIONS = [
  {
    title: "Does it work, or only look right?",
    body: "Wireframes don't show what happens when a suggestion doesn't fit, a box is empty, or someone taps Back at the wrong moment.",
  },
  {
    title: "Where does the first box come from?",
    body: "The redesign starts from a box built from the customer's preferences. The take-home never showed how that box gets made.",
  },
];

const TOKEN_LAYERS = [
  { n: "1", title: "Raw palette", body: "Every brand colour, once.", code: "--raw-green" },
  { n: "2", title: "Theme", body: "Light and dark point at the palette.", code: "data-theme=\"dark\"" },
  { n: "3", title: "Category accent", body: "Coffee, tea or matcha sets the accent.", code: "data-category=\"tea\"" },
  { n: "4", title: "Semantic", body: "What a colour is for, not what it is.", code: "--color-bg-page" },
  { n: "5", title: "Utilities", body: "The only classes components use.", code: "bg-bg-page" },
];

const SYSTEM_DECISIONS = [
  {
    tag: "Decision 01",
    title: "Theming is attributes, not components",
    body: "One ShopCard serves coffee, tea, matcha and every add-on. A data-category on any wrapper swaps the accent, and data-theme swaps the whole surface set, so components never need to know which theme they're in.",
  },
  {
    tag: "Decision 02",
    title: "Why the button is blue, not Flame",
    body: "Flame is the brand's bright orange, but text on it either reads muddy or fails contrast. A deep blue carries the cream text crisply (5.8:1), so Flame stays as the spark, where there's no text on it.",
  },
  {
    tag: "Decision 03",
    title: "Colour is never the only cue",
    body: "Each drink has its own colour, and is also told apart by icon and pack shape: bean and bag, leaf and box, whisk and tin.",
  },
  {
    tag: "Decision 04",
    title: "An AI guide keeps it on-brand",
    body: "CLAUDE.md and agent.md are part of the design system: no hard-coded colours, no branching on category inside a component, and check what exists before building something new. It's how I worked with Claude without the UI drifting.",
  },
];

const BUILT = [
  { from: "Order summary", to: "Your box", path: "/box" },
  { from: "Menu", to: "Shop, with For you, a tab per drink, Gear, Bites and Sweeteners", path: "/shop" },
  { from: "Meal details", to: "Item page", path: "/item/[id]" },
  { from: "Checkout", to: "Checkout, a demo: no payment is taken", path: "/checkout" },
];

const BUILT_LESSONS = [
  {
    tag: "Found in code",
    title: "Back goes where you came from",
    body: "Back has to return to the list the customer came from, not walk them through every item they opened on the way.",
  },
  {
    tag: "Found in code",
    title: "An empty box needs a start",
    body: "A new visitor with nothing in the box sees best sellers and a prompt to tell us about themselves, instead of a blank page.",
  },
];

const ONBOARDING_QUESTIONS = [
  "How they want their day to feel",
  "How many people",
  "Cups a day",
  "What they drink now",
  "What they brew with",
  "A caffeine limit",
  "Anything to avoid",
  "A few extras (optional)",
];

const ONBOARDING_DECISIONS = [
  { tag: "Easy to leave", title: "Every question can be skipped", body: "A skipped answer falls back to a safe default, never a guess that could break a limit." },
  { tag: "Easy to leave", title: "\"I'd rather browse\" is always there", body: "It leaves for the shop and keeps what was answered so far." },
  { tag: "No surprises", title: "Nothing moves on by itself", body: "Next or Skip, every time, so a mis-tap never costs a step." },
  { tag: "Brand", title: "It still feels like Ondo", body: "A progress cup that fills, glasses that pour for the caffeine limit, and brew kit that draws itself in." },
];

const STARTER_DECISIONS = [
  {
    tag: "Decision 01",
    title: "It stays small",
    body: "One drink per type they drink, at most three, and at most 3 packs a drink. AOV per box goes down, but what a customer spends a month stays about the same.",
  },
  {
    tag: "Decision 02",
    title: "Ties go to the cheaper item",
    body: "Sometimes that puts decaf in front of a coffee drinker. A known cost, accepted for a lower first price.",
  },
  {
    tag: "Decision 03",
    title: "Add-ons only when asked",
    body: "Say yes to bites or a sweetener in onboarding and one goes in: £6 or under, first box only, easy to remove.",
  },
  {
    tag: "Decision 04",
    title: "Keep it, if they want it",
    body: "Every bite and sweetener has a \"Keep in every delivery\" switch, off by default. Turning it on asks once, and the total shows the first box and what every delivery after costs.",
  },
];

const CONTROL_DECISIONS = [
  {
    tag: "Suggestions",
    title: "One set of rules everywhere",
    body: "Your box, the shop's For you tab and the item page share the same filters and ranking, and every suggestion says why. No snacks are suggested before there's a drink in the box.",
  },
  {
    tag: "Browsing",
    title: "Skipping onboarding still works",
    body: "No limits are applied to what they haven't told us, and a \"Tell us a little about you\" prompt sits next to the best sellers instead of a wall.",
  },
  {
    tag: "Delivery",
    title: "Delivery starts empty",
    body: "The card suggests how often from what's in the box, and says when it may run short, but never picks. Tapping checkout too early opens Delivery and says why, instead of a disabled button.",
  },
  {
    tag: "Session",
    title: "A reload keeps everything",
    body: "Including a placed order, so the confirmation never turns back into a payment form.",
  },
];

const FLOW_BOARDS = [
  { src: flowOverview, title: "Overview" },
  { src: flowKey, title: "Key and the goal" },
  { src: flowOnboarding, title: "Onboarding" },
  { src: flowShop, title: "Shop" },
  { src: flowBox, title: "Your box" },
  { src: flowCheckout, title: "Checkout" },
  { src: flowSession, title: "Session" },
  { src: flowLeaving, title: "Leaving onboarding" },
];

const NEXT = [
  { step: "Next 01", title: "Test it with five people", body: "Onboarding to checkout, watching how they react to the first price and the suggested add-ons." },
  { step: "Next 02", title: "Close the two red gaps", body: "A saved delivery date that has passed by the time they come back, and answers lost if onboarding is reloaded mid-way." },
  { step: "Next 03", title: "Measure it", body: "AOV and items per order on paid orders, always next to conversion, as in the plan from Chapter 1." },
];

function DecisionGrid({ items }) {
  return (
    <div className="od-decision-grid">
      {items.map((d) => (
        <div className="od-decision-card" key={d.title}>
          <span className="od-ba-tag">{d.tag}</span>
          <h4>{d.title}</h4>
          <p>{d.body}</p>
        </div>
      ))}
    </div>
  );
}

function OndoWeekAfter({ onZoom }) {
  return (
    <>
      {/* ── CHAPTER 2 OPENER ── */}
      <section className="od-section od-chapter-break" id="week">
        <div className="od-section-inner">
          <p className="od-eyebrow">Chapter 2 · The week after</p>
          <h2 className="od-section-title">From a proposal to a product</h2>
          <p className="od-body od-body--center">
            The weekend answered where add-ons should go. It left two questions
            open, so I spent the next week rebuilding the proposal as Ondo, in
            code, and filling in the part the take-home skipped.
          </p>

          <div className="od-chapter-meta" aria-label="Chapter 2 at a glance">
            <span>1 week</span>
            <span>Design + Engineering · Solo</span>
            <span>Next.js · Tailwind · Storybook</span>
          </div>

          <div className="od-question-grid">
            {QUESTIONS.map((q, i) => (
              <div className="od-question-card" key={q.title}>
                <span className="od-question-num" aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{q.title}</h3>
                <p>{q.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESIGN SYSTEM ── */}
      <section className="od-section" id="design-system">
        <div className="od-section-inner">
          <div className="od-two-col">
            <div>
              <p className="od-eyebrow">A Design System First</p>
              <h2 className="od-section-title">
                One set of components, three drinks, two themes
              </h2>
              <p className="od-body">
                Coffee, tea and matcha each need their own character inside
                one brand. That's a theming problem, so I solved it in tokens
                rather than by copying components.
              </p>
              <p className="od-body">
                Every screen in Ondo is built only from the system, and the
                whole system is documented in Storybook: foundations with each
                token's value and use, and a Docs page per component.
              </p>
            </div>
            <div className="od-stat-stack">
              <div className="od-stat-card od-stat-card--green">
                <span className="od-stat-label">Components</span>
                <span className="od-stat-num">34</span>
                <span className="od-stat-desc">
                  Each with stories in light and dark
                </span>
              </div>
              <div className="od-stat-card od-stat-card--green">
                <span className="od-stat-label">Contrast</span>
                <span className="od-stat-num">WCAG 2.2 AA</span>
                <span className="od-stat-desc">
                  Every text colour pair checked, in both themes
                </span>
              </div>
            </div>
          </div>

          <h3 className="od-subhead od-subhead--spaced">
            How the tokens are layered
          </h3>
          <ol className="od-pipeline od-pipeline--5">
            {TOKEN_LAYERS.map((l) => (
              <li className="od-pipeline-step" key={l.n}>
                <span className="od-pipeline-num" aria-hidden="true">
                  {l.n}
                </span>
                <h3>{l.title}</h3>
                <p>{l.body}</p>
                <code className="od-token">{l.code}</code>
              </li>
            ))}
          </ol>

          <DecisionGrid items={SYSTEM_DECISIONS} />

          <div className="od-link-row od-link-row--center">
            <a href={STORYBOOK_URL} target="_blank" rel="noopener noreferrer" className="od-text-link">
              Open the design system in Storybook →
            </a>
            <a href={DESIGN_DOC_URL} target="_blank" rel="noopener noreferrer" className="od-text-link">
              design_system.md →
            </a>
            <a href={AGENT_URL} target="_blank" rel="noopener noreferrer" className="od-text-link">
              The AI guide (agent.md) →
            </a>
          </div>
        </div>
      </section>

      {/* ── THE SCREENS, BUILT ── */}
      <section className="od-section od-section--alt" id="built">
        <div className="od-section-inner">
          <p className="od-eyebrow">The Screens, Built</p>
          <h2 className="od-section-title">
            Building them showed what wireframes can't
          </h2>
          <p className="od-body od-body--center">
            Each screen from the weekend became a real page in Ondo.
          </p>

          <div className="od-table-wrap">
            <table className="od-table">
              <caption className="od-sr-only">
                Where each take-home screen lives in Ondo
              </caption>
              <thead>
                <tr>
                  <th scope="col">Take-home screen</th>
                  <th scope="col">In Ondo</th>
                  <th scope="col">Route</th>
                </tr>
              </thead>
              <tbody>
                {BUILT.map((row) => (
                  <tr key={row.from}>
                    <th scope="row">{row.from}</th>
                    <td>{row.to}</td>
                    <td>
                      <code>{row.path}</code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <DecisionGrid items={BUILT_LESSONS} />
        </div>
      </section>

      {/* ── ONBOARDING ── */}
      <section className="od-section" id="onboarding">
        <div className="od-section-inner">
          <p className="od-eyebrow">Onboarding</p>
          <h2 className="od-section-title">Where the first box comes from</h2>
          <p className="od-body od-body--center">
            Eight short questions, built to be easy to leave, because a long
            form is where people give up.
          </p>

          <ol className="od-question-list">
            {ONBOARDING_QUESTIONS.map((q, i) => (
              <li key={q}>
                <span aria-hidden="true">{i + 1}</span>
                {q}
              </li>
            ))}
          </ol>

          <DecisionGrid items={ONBOARDING_DECISIONS} />

          <button
            type="button"
            className="cs-zoomable od-wireframe od-wireframe--button"
            onClick={() =>
              onZoom({
                src: flowOnboarding,
                alt: "Onboarding and the starter box: the main path, edge cases, and the steps tagged + AOV or Conversion",
              })
            }
            aria-label="Zoom into the onboarding user flow"
          >
            <img
              src={flowOnboarding}
              alt="Onboarding and the starter box: the main path, edge cases, and the steps tagged + AOV or Conversion"
              loading="lazy"
            />
          </button>
          <p className="od-caption">
            Main path, edge cases, and which steps grow the box (+ AOV) or
            protect conversion. Click to zoom.
          </p>
        </div>
      </section>

      {/* ── STARTER BOX ── */}
      <section className="od-section od-section--alt" id="starter-box">
        <div className="od-section-inner">
          <div className="od-two-col">
            <div>
              <p className="od-eyebrow">The Starter Box</p>
              <h2 className="od-section-title">Choice, not size</h2>
              <p className="od-body">
                This is the decision I'm most sure of. A bigger basket only
                counts if the order goes through: an abandoned £40 box is worth
                less than a paid £25 one, and a big first price is where orders
                get lost.
              </p>
              <p className="od-body">
                So AOV grows by choice, through suggestions and opt-in add-ons,
                not by making the starting box bigger.
              </p>
            </div>
            <div className="od-stat-stack">
              <div className="od-stat-card od-stat-card--green">
                <span className="od-stat-label">Sized to last</span>
                <span className="od-stat-num">About 15 days</span>
                <span className="od-stat-desc">
                  Our most frequent delivery. I first sized it to 30, then cut
                  it.
                </span>
              </div>
              <div className="od-stat-card od-stat-card--red">
                <span className="od-stat-label">Guard rail</span>
                <span className="od-stat-num">A paid £25 beats an abandoned £40</span>
                <span className="od-stat-desc">
                  The first price is where orders get lost
                </span>
              </div>
            </div>
          </div>

          <DecisionGrid items={STARTER_DECISIONS} />

          <div className="od-callout">
            This also answers problem <strong>E</strong> from the weekend, the
            commitment worry: nothing extra repeats unless the customer chooses
            to keep it.
          </div>
        </div>
      </section>

      {/* ── NOTHING CHOSEN FOR THEM ── */}
      <section className="od-section" id="no-surprises">
        <div className="od-section-inner">
          <p className="od-eyebrow">Nothing Chosen for Them</p>
          <h2 className="od-section-title">The customer stays in charge</h2>
          <p className="od-body od-body--center">
            Suggestions can lift the basket, but only the customer decides
            what's in it.
          </p>
          <DecisionGrid items={CONTROL_DECISIONS} />
        </div>
      </section>

      {/* ── THE UNHAPPY PATHS ── */}
      <section className="od-section od-section--alt" id="flows">
        <div className="od-section-inner">
          <p className="od-eyebrow">The Unhappy Paths</p>
          <h2 className="od-section-title">Mapping every edge case</h2>
          <p className="od-body od-body--center">
            The last step was the user flow. Every board shows the main path
            and the edge cases, and tags which steps grow the box (+ AOV) and
            which protect conversion.
          </p>

          <ul className="od-flow-grid">
            {FLOW_BOARDS.map((b, i) => (
              <li key={b.title}>
                <button
                  type="button"
                  className="cs-zoomable od-flow-card"
                  onClick={() => onZoom({ src: b.src, alt: `User flow: ${b.title}` })}
                >
                  <img src={b.src} alt="" loading="lazy" />
                  <span className="od-flow-title">
                    <span className="od-flow-num">{String(i + 1).padStart(2, "0")}</span>
                    {b.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <p className="od-caption">Click a board to zoom.</p>

          <div className="od-callout od-callout--warn">
            <strong>Still open:</strong> two gaps are marked in red on the
            boards. A saved delivery date that has passed by the time they come
            back, and answers lost if onboarding is reloaded mid-way.
          </div>
        </div>
      </section>

      {/* ── WHAT'S NEXT ── */}
      <section className="od-section" id="whats-next">
        <div className="od-section-inner">
          <p className="od-eyebrow">What's Next</p>
          <h2 className="od-section-title">Test it, close the gaps, measure it</h2>
          <div className="od-proof-grid od-proof-grid--3">
            {NEXT.map((n) => (
              <div className="od-proof-card" key={n.title}>
                <span className="od-proof-step">{n.step}</span>
                <h4>{n.title}</h4>
                <p>{n.body}</p>
              </div>
            ))}
          </div>
          <div className="od-link-row od-link-row--center">
            <a href={STORY_PART2_URL} target="_blank" rel="noopener noreferrer" className="od-text-link">
              Read Part 2 of the full story →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default OndoWeekAfter;
