import { Fragment, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CaseStudyHero from "../../components/caseStudy/CaseStudyHero";
import CaseStudyCTA from "../../components/caseStudy/CaseStudyCTA";
import CaseStudyReflection from "../../components/caseStudy/CaseStudyReflection";
import Lightbox from "../../components/caseStudy/Lightbox";
import CaseStudyContents from "../../components/caseStudy/CaseStudyContents";
import OndoWeekAfter, { PhoneShots } from "./OndoWeekAfter";
import uiBoxRail from "../../assets/images/projects/Ondo/mockup/box-rail.png";
import uiShop from "../../assets/images/projects/Ondo/mockup/shop.png";
import uiItem from "../../assets/images/projects/Ondo/mockup/item.png";
import uiCheckout from "../../assets/images/projects/Ondo/mockup/checkout.png";
import {
  STORYBOOK_URL,
  WEEK_HERO_IMAGE,
  WEEK_SECTIONS,
} from "./ondoWeekAfterData";
import "../../css/ondo.css";
import ondoHero from "../../assets/images/projects/Ondo/hero.png";
import wfSummary from "../../assets/images/projects/Ondo/sum_summary.png";
import wfMenu from "../../assets/images/projects/Ondo/sum_menu.png";
import wfDetails from "../../assets/images/projects/Ondo/sum_mealDetails.png";
import wfCheckout from "../../assets/images/projects/Ondo/sum_checkout.png";

const GITHUB_URL = "https://github.com/MpmookR/ondo";
const LIVE_URL = "https://ondo-hazel.vercel.app/";
const RECOMMEND_URL = "https://github.com/MpmookR/ondo/blob/main/src/lib/recommend.ts";
const TESTS_URL = "https://github.com/MpmookR/ondo/blob/main/src/lib/recommend.test.ts";

// Walkthrough video (Google Drive "preview" link, same as the LocalEdition embed).
// Hero and CTA buttons scroll to the #walkthrough section where it's embedded.
const VIDEO_EMBED_URL =
  "https://drive.google.com/file/d/1x6MWmgVA3pDVcOylKLfBfCogfZQSg-x4/preview";

// Hero copy covers both chapters. The chapter cards swap the image and the
// meta pills, so a reader can preview either chapter without scrolling.
const ONDO_HERO = {
  badge: "Take-home → Design system",
  title: "Ondo",
  subtitle:
    "Redesigning a subscription's first box so customers add more, without making it harder to pay",
  links: [
    { href: LIVE_URL, label: "🟢 Live Site", variant: "solid" },
    { href: STORYBOOK_URL, label: "🎨 Design system", variant: "outline" },
    { href: "#walkthrough", label: "📽️ Watch weekend sprint", variant: "outline" },
    { href: GITHUB_URL, label: "GitHub Repo", variant: "outline", icon: "github" },
  ],
};

const CHAPTERS = [
  {
    id: "weekend",
    tag: "Chapter 1 · 2 days",
    title: "The weekend sprint",
    desc: "Working prototype + presentation",
    jumpTo: "overview",
    heroImage: {
      src: ondoHero,
      alt: "Four Ondo prototype screens on mobile: Your box, Shop, an item page and checkout",
    },
    meta: [
      { label: "Timeline", value: "2 days · Fri night to Mon 11am" },
      { label: "Role", value: "Product Design + Engineering · Solo" },
      { label: "Platform", value: "Mobile-first web" },
      { label: "Delivered", value: "Working prototype + presentation" },
    ],
  },
  {
    id: "week",
    tag: "Chapter 2 · 1 week",
    title: "The week after",
    desc: "Design system, onboarding, user flows",
    jumpTo: "week",
    heroImage: WEEK_HERO_IMAGE,
    meta: [
      { label: "Timeline", value: "1 week · after the take-home" },
      { label: "Role", value: "Design + Engineering · Solo" },
      { label: "Stack", value: "Next.js · Tailwind · Storybook" },
      { label: "Delivered", value: "Design system, onboarding, user flows" },
    ],
  },
];

// Contents nav: one group per chapter, plus the reflection.
const CONTENTS = [
  { items: [{ id: "tldr", label: "In 30 seconds" }] },
  {
    label: "Chapter 1 · The weekend",
    items: [
      { id: "overview", label: "Overview" },
      { id: "weekend", label: "Two days" },
      { id: "brief", label: "The brief" },
      { id: "found", label: "What I found" },
      { id: "principles", label: "Principles" },
      { id: "screens", label: "Screen by screen" },
      { id: "summary", label: "Summary" },
      { id: "scoring", label: "Under the hood" },
      { id: "measuring", label: "How I'd prove it" },
      { id: "walkthrough", label: "See it working" },
    ],
  },
  { label: "Chapter 2 · The week after", items: WEEK_SECTIONS },
  { items: [{ id: "reflection", label: "Reflection" }] },
];

// The five principles. Colours match the numbered badges on the wireframes.
const PRINCIPLES = [
  { n: 1, name: "Recognised", line: "Use patterns customers already know from other apps (Jakob's Law)." },
  { n: 2, name: "Compact", line: "Collapse what they've seen. Keep open what's new." },
  { n: 3, name: "Relevant", line: "Suggest by goal and box, and always say why." },
  { n: 4, name: "Scannable", line: "One menu for every category, grouped to scan." },
  { n: 5, name: "Guard rail", line: "Nothing extra between the customer and paying." },
];

// The 30-second read, for anyone who stops after the hero.
const TLDR = [
  {
    label: "The problem",
    title: "Add-ons were easy to miss",
    body: "New customers rarely added extras to their first box. The goal was a bigger box, without losing anyone at checkout.",
  },
  {
    label: "The insight",
    title: "Lost in the tabs, with a broken shortcut",
    body: "The hunch was right: add-ons were buried in tabs. And tapping a suggested add-on opened the whole menu, not the item they tapped.",
  },
  {
    label: "What I changed",
    title: "Suggest where people already are",
    body: "Suggestions on the box itself, each saying why it's there, added in one tap. Checkout shows the box before asking to pay.",
  },
  {
    label: "What I delivered",
    title: "A prototype in 2 days, a product in a week",
    body: "A prototype in Figma and code, presented on day two. A week later: a design system, onboarding and user flows, live.",
  },
];

const PROBLEMS = [
  { id: "A", title: "They don't see it", body: "Add-ons sit behind a button, a full-screen picker and tabs." },
  { id: "B", title: "It doesn't feel relevant", body: "A random juice doesn't connect to why they signed up." },
  { id: "C", title: "Adding is effort", body: "Open a picker, choose a tab, come back." },
  { id: "D", title: "Misleading suggestion", body: "Tap a suggested item to see its details, and it opens the full add-on menu instead." },
  { id: "E", title: "Commitment worry", body: "First box, on a subscription: does this repeat every week?" },
];

// Screen by screen, straight from doc/story.md.
// Each point carries the principle number(s) it serves.
const SCREENS = [
  {
    id: "order-summary",
    num: "01",
    title: "Order summary",
    intro:
      "The page a new customer lands on after we build a suggested box from their preferences. It's where the box is reviewed, and where add-ons had to earn their place.",
    image: { src: wfSummary, alt: "Order summary: before and after low-fi wireframes, numbered by principle" },
    before: [
      { p: [1], text: <>"Your meals" is a sideways carousel of large photos. One meal is in view at a time, with no quantities, so the customer can't check their box at a glance.</> },
      { p: [4], text: <>Two buttons, "Add / change meals" and "Add / change add-ons", lead to two separate full-screen pickers.</> },
      { p: [3], text: <>"Featured add-ons" shows the same items to everyone, under one line for all. It only starts after the meals and the button, so many people never scroll that far. Tapping one opens the full add-on menu, not that item.</> },
    ],
    afterLead: "The page opens compact, and expands one group at a time.",
    after: [
      { p: [2, 3], text: <>Preferences, meals and add-ons each collapse to one line ("8 meals · £00.00"), so the whole box fits on one screen. Preferences are the input behind every suggestion.</> },
      { p: [1], text: <>Expanded, the box is a vertical list with quantity steppers, like the basket in every delivery app they already use.</> },
      { p: [3], text: <>"For your [goal] goal" suggests items that fit the goal or pair with the box, and each card says why ("Goes with your [meal]").</> },
      { p: [1, 4], text: <>Suggestions add in place with a + that turns into a stepper. One "Add / Change items" button replaces the two pickers.</> },
    ],
    note: "The weekly total stays pinned to the bottom, with the first-box discount and free delivery.",
    inOndo: "Your box: every item says why it was picked, and the rail below suggests more for the customer's goal, with the total always in view.",
    shot: { src: uiBoxRail, alt: "Ondo Your box: an add-on marked 'Goes with your Shizuoka Sencha' and a 'For calm focus' suggestion rail" },
  },
  {
    id: "menu",
    num: "02",
    title: "Menu",
    intro: "Where customers browse everything they can add.",
    image: { src: wfMenu, alt: "Menu: before and after low-fi wireframes, numbered by principle" },
    before: [
      { p: [4], text: <>Meals and add-ons are two separate pickers, each with its own tabs, sort and one large card per row: 27 meals and 33 add-ons in two long lists.</> },
      { p: [3], text: <>"My preferences" and "Based on your preferences" exist, but nothing tells the customer which preference picked an item, or why.</> },
    ],
    after: [
      { p: [4], text: <>One menu with sticky tabs (For you · Meals · Breakfast · Sides & snacks) and two-column cards. "Add to box" turns into a stepper on the card.</> },
      { p: [3], text: <>"For you" comes first and says what it's based on ("Picked from your answers: [goal], avoiding [allergen]"), using the same rules as the order summary.</> },
      { p: [4], text: <>Plan type sits at the top of the menu, with the price difference per meal and one line on what the plan means, so a third plan is one more option, not a new screen.</> },
      { p: [2], text: <>Switch plan and nothing silently disappears. Meals that aren't on that plan are grouped and collapsed ("Not available in Plan A (1)").</> },
    ],
    note: 'A sticky "View your box · 8 items · £00.00" bar keeps the box and its total one tap away.',
    inOndo: "Shop: \"For you\" says what it's picked from. Items a customer can't have (over their caffeine limit, or containing something they avoid) sit in collapsed sections with the reason.",
    shot: { src: uiShop, alt: "Ondo Shop: the For you tab, 'Picked from your answers: calm focus, caffeine up to 4 of 5, avoiding dairy'" },
  },
  {
    id: "item-details",
    num: "03",
    title: "Meal details",
    intro:
      "In the original, tapping a meal opens its details as an overlay on top of the menu. Everything inside is open at once: photo, description, highlights, allergens, a full nutrition table, ingredients and disclaimers.",
    image: { src: wfDetails, alt: "Meal details: before and after low-fi wireframes, numbered by principle" },
    beforeLabel: "Before: an overlay",
    afterLabel: "After: a full page",
    before: [
      { p: [1], text: <>A long scroll inside an overlay is hard to move around in, and the phone's back gesture leaves the menu behind rather than closing the meal.</> },
      { p: [2], text: <>The nutrition table, ingredients and disclaimers are all fully expanded, so the useful parts are pushed far down.</> },
    ],
    afterLead: "Because the page holds so much information, I proposed it opens as a full page.",
    after: [
      { p: [1], text: <>A back arrow and the meal name in the header. Back returns to the menu in the same place, and each meal has its own link.</> },
      { p: [2], text: <>Details on demand: highlights stay up front, then nutrition, ingredients and allergy information sit in accordions. <strong>Allergens are the exception: always visible, never collapsed.</strong></> },
      { p: [3], text: <>"Goes well with this" suggests items that pair with this meal or fit the goal, each with a reason and a + to add without leaving the page.</> },
    ],
    note: 'A pinned bar shows how many are in the box, the price and plan ("3 in your box · £00.00 · Plan A"), with a stepper in place of the old "Add" button.',
    inOndo: 'Item page: caffeine level and brew highlights up front, a "Contains" box that is never collapsed, a "Goes well with this" rail and a pinned order bar.',
    shot: { src: uiItem, alt: "Ondo item page for Shizuoka Sencha: caffeine level, brew highlights, Contains box and a pinned stepper" },
  },
  {
    id: "checkout",
    num: "04",
    title: "Checkout",
    intro: "The last step: payment. Every change here protects conversion.",
    image: { src: wfCheckout, alt: "Checkout: before and after low-fi wireframes, numbered by principle" },
    before: [
      { p: [5], text: <>"Your delivery" (plan, every meal, subtotal, discount, delivery and the first week's total) sits below the Pay Now button. The customer enters card details before seeing what they're paying for.</> },
    ],
    after: [
      { p: [5], text: <>"Your first box" sits at the top ("8 meals · 4 add-ons · Plan B · £00.00"), with the delivery date and "Change" right below. What they're paying for is confirmed first.</> },
      { p: [5], text: <>Wallet payment first: one tap with Face ID, no card to find and type. Card details stay below "or pay with card".</> },
      { p: [5], text: <>The button shows the amount ("Pay £00.00"), and the subscription terms are in plain English: skip or cancel any time.</> },
    ],
    note: 'I removed a "hot deals" page I\'d sketched before checkout. An extra step before payment is where people drop off.',
    inOndo: 'Checkout: "Your first box" and the delivery date come before the payment details, with Apple Pay first. It\'s a demo: no payment is taken.',
    shot: { src: uiCheckout, alt: "Ondo checkout: 'Your first box, £25.85', first delivery Wednesday 11 November, then Pay with Apple Pay" },
  },
];

const OUTCOMES = [
  { result: "AOV up, conversion flat", call: "Ship it", tone: "good" },
  { result: "AOV up, conversion down past the threshold", call: "Stop and simplify", tone: "bad" },
  { result: "Conversion up, AOV flat", call: "Clarity works, relevance doesn't yet", tone: "warn" },
];

// Suggestion scoring, from src/lib/recommend.ts in the Ondo repo.
const PIPELINE = [
  { step: "01", title: "Filter", body: "Hard rules first: over their caffeine limit, contains something they avoid, out of stock, or already in the box. Gone, whatever it would score." },
  { step: "02", title: "Score", body: "Every item left earns points for the signals it matches. Zero points means it's never shown, so there's no filler." },
  { step: "03", title: "Rank", body: "Highest score first. On a tie, the cheaper item wins, which keeps the first add low-risk. Top six only." },
  { step: "04", title: "Explain", body: "The reason line comes from the signal that scored, most specific first, so every card can say why it's there." },
];

const SIGNALS = [
  { signal: "Matches their goal", points: "+3", example: "Ceremonial matcha for calm focus" },
  { signal: "Pairs with a drink in the box", points: "+2", example: "Rice crackers next to a sencha" },
  { signal: "Brews a drink in the box", points: "+1", example: "Gear only, when there's no explicit pairing" },
  { signal: "Easy to try", points: "+1", example: "£6 or less, or a sample size" },
];

const WORKED_EXAMPLE = [
  { item: "Matcha Taster Tin", signals: ["Goal +3", "Easy +1"], score: 4, price: "£5", reason: "Fits calm focus" },
  { item: "Sesame Rice Crackers", signals: ["Pairs +2", "Easy +1"], score: 3, price: "£4", reason: "Goes with your Shizuoka Sencha" },
  { item: "Tieguanyin Oolong", signals: ["Goal +3"], score: 3, price: "£11", reason: "Fits calm focus" },
  { item: "Everyday Latte Matcha", signals: ["Goal +3"], score: 3, price: "£14", reason: "Fits calm focus" },
  { item: "Kyoto Ceremonial Matcha", signals: ["Goal +3"], score: 3, price: "£24", reason: "Fits calm focus" },
  { item: "Bamboo Whisk & Bowl Set", signals: ["Goal +3"], score: 3, price: "£26", reason: "Fits calm focus" },
];

const SCORING_DECISIONS = [
  { tag: "Decision 01", title: "Filters before scores", body: "Safety isn't a weight. A high score can never rescue something above the caffeine limit or containing an allergen, because it's removed before scoring starts." },
  { tag: "Decision 02", title: "Snacks never claim a goal", body: "Bites and sweeteners carry no goal tags. They only reach the rail through a pairing or as an easy first add, so a biscuit is never sold as good for focus." },
  { tag: "Decision 03", title: "A rail that doesn't move", body: "The rail is worked out from the drinks in the box when the page opened. Adding an item turns its + into a stepper in place. Only changing a preference rebuilds it." },
  { tag: "Decision 04", title: "The reason is the real reason", body: "The reason line is picked from the signals that actually scored: pairing, then brewing, then goal, then easy to try. It can't say something the ranking didn't use." },
];

function PrincipleBadge({ n }) {
  const p = PRINCIPLES.find((x) => x.n === n);
  return (
    <span className={`od-badge od-badge--${n}`} title={p.name}>
      <span aria-hidden="true">{n}</span>
      <span className="od-sr-only">Principle {n}: {p.name}</span>
    </span>
  );
}

function PointList({ items }) {
  return (
    <ul className="od-point-list">
      {items.map((item, i) => (
        <li key={i}>
          <span className="od-point-badges">
            {item.p.map((n) => (
              <PrincipleBadge key={n} n={n} />
            ))}
          </span>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

function Ondo() {
  const [lightbox, setLightbox] = useState(null);
  const [chapterId, setChapterId] = useState("weekend");
  const chapter = CHAPTERS.find((c) => c.id === chapterId);

  return (
    <main className="containerBG">
      <Header />

      <Lightbox
        src={lightbox?.src}
        alt={lightbox?.alt}
        onClose={() => setLightbox(null)}
      />

      <CaseStudyContents groups={CONTENTS} />

      <CaseStudyHero
        {...ONDO_HERO}
        heroImage={chapter.heroImage}
        meta={chapter.meta}
      >
        <div className="od-chapters" role="group" aria-label="Preview a chapter">
          {CHAPTERS.map((c, i) => (
            <Fragment key={c.id}>
              {i > 0 && (
                <span className="od-chapter-arrow" aria-hidden="true">
                  →
                </span>
              )}
              <button
                type="button"
                className={`od-chapter${c.id === chapterId ? " is-active" : ""}`}
                aria-pressed={c.id === chapterId}
                onClick={() => setChapterId(c.id)}
              >
                <span className="od-chapter-tag">{c.tag}</span>
                <span className="od-chapter-title">{c.title}</span>
                <span className="od-chapter-desc">{c.desc}</span>
              </button>
            </Fragment>
          ))}
        </div>
        <a href={`#${chapter.jumpTo}`} className="od-text-link od-chapter-jump">
          Read {chapter.title.toLowerCase()} ↓
        </a>
      </CaseStudyHero>

      {/* ── IN 30 SECONDS ── */}
      <section className="od-section" id="tldr">
        <div className="od-section-inner">
          <p className="od-eyebrow">In 30 Seconds</p>
          <h2 className="od-section-title">The short version</h2>
          <div className="od-tldr-grid">
            {TLDR.map((t) => (
              <div className="od-tldr-card" key={t.label}>
                <span className="od-tldr-label">{t.label}</span>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="od-section od-section--alt" id="overview">
        <div className="od-section-inner">
          <p className="od-eyebrow">Overview</p>
          <h2 className="od-section-title">
            A subscription's first box, where add-ons were easy to miss
          </h2>
          <p className="od-body">
            Ondo started as a take-home task from a product design interview:
            the first box of a meal subscription, where customers rarely added
            extras. I redesigned the flow in Figma and presented a working
            prototype on the day.
          </p>
          <div className="od-callout">
            <strong>Why it's called Ondo:</strong> the original redesign used
            the company's own brand and design system, so I'm keeping those
            files private and not naming the company. I rebuilt the same
            proposal under an invented caffeine subscription, Ondo. The
            wireframes on this page are brand-free versions of the original
            flow and my redesign, and each screen ends with how the idea looks
            in Ondo.
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="od-section" id="weekend">
        <div className="od-section-inner">
          <p className="od-eyebrow">The Weekend</p>
          <h2 className="od-section-title">
            Two days, from brief to presentation
          </h2>
          <p className="od-body od-body--center">
            The brief landed on a Friday night and the presentation was Monday
            at 11am. That left two days for everything: auditing the flow,
            redesigning it, coding a prototype and preparing the presentation.
          </p>

          <ol className="od-timeline">
            <li className="od-timeline-step">
              <span className="od-timeline-when">Friday night</span>
              <h3>Brief arrives</h3>
              <p>
                A goal, a guard rail and the existing first-box flow to work
                from.
              </p>
            </li>
            <li className="od-timeline-step od-timeline-step--wide">
              <span className="od-timeline-when">Saturday + Sunday</span>
              <h3>Redesign, code, prepare</h3>
              <p>
                Audit the flow, redesign four screens in Figma, build a working
                prototype and put the presentation together, all inside the
                same two days.
              </p>
            </li>
            <li className="od-timeline-step od-timeline-step--accent">
              <span className="od-timeline-when">Monday, 11am</span>
              <h3>Present</h3>
              <p>A walkthrough of a prototype you can click, not static screens.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* ── THE BRIEF ── */}
      <section className="od-section od-section--alt" id="brief">
        <div className="od-section-inner od-two-col">
          <div>
            <p className="od-eyebrow">The Brief</p>
            <h2 className="od-section-title">
              Grow the box, but never at the cost of conversion
            </h2>
            <p className="od-body">
              The goal: <strong className="od-hl od-hl--goal">more items and a higher average order value
              (AOV)</strong> in a new customer's first box. The guard rail:{" "}
              <strong className="od-hl od-hl--rail">conversion</strong>. It's easy to lift basket size with
              upsells and lose the customer entirely, so when the two pull
              against each other, <strong className="od-hl od-hl--rail">conversion wins</strong>.
            </p>
            <p className="od-body">
              The brief also flagged what was coming next:{" "}
              <strong>a third plan (Plan C) and more add-on categories</strong>.
              Each plan changes the price of every item, so the redesign had to
              make room for both, not just fix today's screens.
            </p>
          </div>
          <div className="od-stat-stack">
            <div className="od-stat-card od-stat-card--green">
              <span className="od-stat-label">Goal</span>
              <span className="od-stat-num">More items, higher AOV</span>
              <span className="od-stat-desc">
                In a new customer's first box
              </span>
            </div>
            <div className="od-stat-card od-stat-card--red">
              <span className="od-stat-label">Guard rail</span>
              <span className="od-stat-num">Conversion wins a tie</span>
              <span className="od-stat-desc">
                No upsell is worth losing the subscription
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT I FOUND ── */}
      <section className="od-section" id="found">
        <div className="od-section-inner">
          <p className="od-eyebrow">What I Found</p>
          <h2 className="od-section-title">
            The add-ons really were lost in the tabs, and the shortcut to them
            misled
          </h2>
          <p className="od-body od-body--center">
            The company's hunch was that the tabs buried the add-ons. Walking
            the flow as a new customer confirmed it: they sit behind a button,
            a full-screen picker and a row of tabs. It also showed a second
            problem the brief didn't mention. The one shortcut didn't work:
            tapping a suggested add-on on the order summary opened the whole
            add-on menu, not the item they tapped. Add-ons need to be where
            people already are, and easy to add to the basket.
          </p>

          <h3 className="od-subhead od-subhead--spaced">
            Five reasons add-ons weren't being added
          </h3>
          <div className="od-problem-grid">
            {PROBLEMS.map((p) => (
              <div className="od-problem-card" key={p.id}>
                <span className="od-problem-id" aria-hidden="true">
                  {p.id}
                </span>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ── */}
      <section className="od-section od-section--alt" id="principles">
        <div className="od-section-inner">
          <p className="od-eyebrow">Principles</p>
          <h2 className="od-section-title">Four principles and one guard rail</h2>
          <p className="od-body od-body--center">
            Every change serves one principle and is checked against the guard
            rail. The numbers on the wireframes are these principles, so the
            same number means the same thing on every screen.
          </p>

          <div className="od-principle-grid">
            {PRINCIPLES.map((p) => (
              <div
                className={`od-principle-card${p.n === 5 ? " od-principle-card--rail" : ""}`}
                key={p.n}
              >
                <span className={`od-badge od-badge--lg od-badge--${p.n}`} aria-hidden="true">
                  {p.n}
                </span>
                <h4>{p.name}</h4>
                <p>{p.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCREEN BY SCREEN ── */}
      <section className="od-section" id="screens">
        <div className="od-section-inner">
          <p className="od-eyebrow">Screen by Screen</p>
          <h2 className="od-section-title">Four screens on the path to paying</h2>
          <p className="od-body od-body--center">
            The redesign covers every screen a new customer passes through
            before they pay. Click any wireframe to zoom in.
          </p>

          <nav className="od-jump" aria-label="Jump to a screen">
            {SCREENS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="od-jump-link">
                <span>{s.num}</span> {s.title}
              </a>
            ))}
          </nav>

          {SCREENS.map((s) => (
            <article className="od-screen" id={s.id} key={s.id}>
              <div className="od-screen-head">
                <span className="od-screen-num">{s.num}</span>
                <h3 className="od-screen-title">{s.title}</h3>
              </div>
              <p className="od-body">{s.intro}</p>

              <div
                className="cs-zoomable od-wireframe"
                onClick={() => setLightbox(s.image)}
              >
                <img src={s.image.src} alt={s.image.alt} loading="lazy" />
              </div>
              <p className="od-caption">
                Numbers on the wireframes are the principles above. Click to
                zoom.
              </p>

              <div className="od-ba-grid">
                <div className="od-ba-col od-ba-col--before">
                  <span className="od-ba-tag od-ba-tag--before">
                    {s.beforeLabel || "Before"}
                  </span>
                  <PointList items={s.before} />
                </div>
                <div className="od-ba-col od-ba-col--after">
                  <span className="od-ba-tag od-ba-tag--after">
                    {s.afterLabel || "After"}
                  </span>
                  {s.afterLead && <p className="od-ba-lead">{s.afterLead}</p>}
                  <PointList items={s.after} />
                </div>
              </div>

              {s.note && <div className="od-screen-note">{s.note}</div>}

              <div className="od-in-ondo-row">
                <button
                  type="button"
                  className="od-phone-frame"
                  onClick={() => setLightbox(s.shot)}
                  aria-label={`Zoom into the Ondo ${s.title.toLowerCase()} screen`}
                >
                  <img src={s.shot.src} alt={s.shot.alt} loading="lazy" />
                </button>
                <p className="od-in-ondo">
                  <span className="od-in-ondo-tag">In Ondo</span>
                  {s.inOndo}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── SUMMARY ── */}
      <section className="od-section od-section--alt" id="summary">
        <div className="od-section-inner">
          <p className="od-eyebrow">Summary</p>
          <h2 className="od-section-title">Relevance is the thread</h2>
          <p className="od-body od-body--center">
            The same rules drive the order summary, the "For you" tab and the
            item page: filter out anything the customer can't have, then rank
            by goal, pairing and an easy first try. One set of rules means the
            suggestions never contradict each other from screen to screen.
          </p>

        </div>
      </section>

      {/* ── SUGGESTION SCORING (ENGINEER LENS) ── */}
      <section className="od-section" id="scoring">
        <div className="od-section-inner">
          <p className="od-eyebrow">Under the Hood</p>
          <h2 className="od-section-title">How a suggestion earns its place</h2>
          <p className="od-body od-body--center">
            "Relevant" only works if it's predictable. Scoring was part of what
            I presented on the Monday: a slide that ranked one customer's rail,
            signal by signal. Ondo rebuilds the same rules as plain, tested
            TypeScript. Filter first, then score, rank and explain, so every
            card can say exactly why it's there.
          </p>

          <ol className="od-pipeline">
            {PIPELINE.map((p) => (
              <li className="od-pipeline-step" key={p.step}>
                <span className="od-pipeline-num">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </li>
            ))}
          </ol>

          <p className="od-research">
            <strong>Why explain at all:</strong> relevant cart suggestions help
            while irrelevant ones erode trust (Baymard Institute), and
            recommendations that explain themselves are trusted more
            (Herlocker, Konstan &amp; Riedl, 2000).
          </p>

          <details className="od-more">
            <summary>
              <span>
                <strong>See the scoring in detail</strong>
                <span className="od-more-sub">Points, the code, a worked example and the tests</span>
              </span>
            </summary>
            <div className="od-more-body">
          <div className="od-score-grid">
            <div>
              <h3 className="od-subhead od-subhead--left">Points per signal</h3>
              <div className="od-table-wrap od-table-wrap--tight">
                <table className="od-table od-table--compact">
                  <caption className="od-sr-only">
                    Points each signal adds to a suggestion's score
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Signal</th>
                      <th scope="col">Points</th>
                      <th scope="col">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SIGNALS.map((row) => (
                      <tr key={row.signal}>
                        <th scope="row">{row.signal}</th>
                        <td className="od-points">{row.points}</td>
                        <td>{row.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="od-caption od-caption--left">
                The goal is worth the most because it's why they signed up. A
                pairing is the most specific reason, so it leads the reason line
                whenever there is one.
              </p>
            </div>
            <div>
              <h3 className="od-subhead od-subhead--left">The whole pipeline</h3>
              <div className="od-code-block">
                <pre>
                  <code>{`export const POINTS = {
  goalMatch: 3,
  pairsWithBox: 2,
  brewsYourBox: 1,
  easyToTry: 1,
} as const;

return catalogue
  .filter((item) => passesFilters(item, customer, box))
  .map((item) => score(item, customer, ctx))
  .filter((s) => s.score > 0)
  .sort((a, b) =>
    b.score - a.score || a.item.price - b.item.price)
  .slice(0, limit)
  .map((s) => ({
    item: s.item,
    score: s.score,
    reason: reasonFor(s, goalLabel),
  }));`}</code>
                </pre>
              </div>
              <div className="od-link-row">
                <a
                  href={RECOMMEND_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="od-text-link"
                >
                  View recommend.ts on GitHub →
                </a>
              </div>
            </div>
          </div>

          <h3 className="od-subhead od-subhead--spaced">Worked example</h3>
          <p className="od-body od-body--center od-body--small">
            Goal: calm focus. Caffeine limit 4 of 5. Avoids dairy. Box: a
            Yirgacheffe filter coffee and a Shizuoka sencha.
          </p>
          <div className="od-table-wrap">
            <table className="od-table od-table--compact">
              <caption className="od-sr-only">
                The six suggestions for this customer, with the signals that
                scored, the total and the reason shown on the card
              </caption>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Suggestion</th>
                  <th scope="col">Signals</th>
                  <th scope="col">Score</th>
                  <th scope="col">Price</th>
                  <th scope="col">Reason on the card</th>
                </tr>
              </thead>
              <tbody>
                {WORKED_EXAMPLE.map((row, i) => (
                  <tr key={row.item}>
                    <td className="od-rank">{i + 1}</td>
                    <th scope="row">{row.item}</th>
                    <td>
                      <span className="od-signal-chips">
                        {row.signals.map((sig) => (
                          <span className="od-signal-chip" key={sig}>
                            {sig}
                          </span>
                        ))}
                      </span>
                    </td>
                    <td className="od-points">{row.score}</td>
                    <td>{row.price}</td>
                    <td>"{row.reason}"</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="od-caption">
            Five items tie on 3, so price decides their order. The espresso
            blends are over the caffeine limit, the chai and the shortbread
            contain dairy, and the grinder is out of stock, so none of them can
            appear however well they'd score.
          </p>

          <div className="od-decision-grid">
            {SCORING_DECISIONS.map((d) => (
              <div className="od-decision-card" key={d.tag}>
                <span className="od-ba-tag od-ba-tag--after">{d.tag}</span>
                <h4>{d.title}</h4>
                <p>{d.body}</p>
              </div>
            ))}
          </div>

          <div className="od-adapt">
            <span className="od-ba-tag od-ba-tag--before">From meals to caffeine</span>
            <p>
              The original ranked meals, with a <strong>"fills a gap"</strong>{" "}
              signal (+2 for a breakfast, soup or snack when the box was only
              mains) and +3 for each goal a customer picked. Caffeine has no
              meal gaps, so in Ondo that slot became{" "}
              <strong>"brews a drink in the box"</strong>, and customers pick
              one goal. The filter-first order, the tie-break, the top six and
              the one-reason rule carried over unchanged.
            </p>
          </div>

          <div className="od-callout">
            The worked example above is one of 26 tests, alongside the hard
            filters, the tie-break and the rail that doesn't reshuffle. The
            pairings and goal tags are my own judgement for the demo; in a real
            business a coffee and tea specialist would own them, and the code
            would only read them.{" "}
            <a
              href={TESTS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="od-text-link"
            >
              See the tests →
            </a>
          </div>
            </div>
          </details>
        </div>
      </section>

      {/* ── HOW I'D PROVE IT ── */}
      <section className="od-section od-section--alt" id="measuring">
        <div className="od-section-inner">
          <p className="od-eyebrow">Measuring It</p>
          <h2 className="od-section-title">How I'd prove it</h2>
          <p className="od-body od-body--center">
            A redesign is a hypothesis until the numbers say otherwise. This is
            the plan I proposed, with conversion as the line it can't cross.
          </p>

          <div className="od-proof-grid">
            <div className="od-proof-card">
              <span className="od-proof-step">Before building</span>
              <h4>Check the real funnel</h4>
              <p>
                New customers only: order summary → checkout → subscribed, split
                by iOS and Android. How many open the add-on picker today, and
                what they add.
              </p>
            </div>
            <div className="od-proof-card">
              <span className="od-proof-step">The test</span>
              <h4>A/B on new customers</h4>
              <p>
                Primary: AOV and items per order. Guard rail: order summary →
                subscription conversion, with a stop threshold agreed up front.
              </p>
            </div>
          </div>

          <h3 className="od-subhead od-subhead--spaced">
            What would change my mind
          </h3>
          <div className="od-outcomes">
            {OUTCOMES.map((o) => (
              <div className={`od-outcome od-outcome--${o.tone}`} key={o.result}>
                <span className="od-outcome-result">{o.result}</span>
                <span className="od-outcome-arrow" aria-hidden="true">→</span>
                <span className="od-outcome-call">{o.call}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WALKTHROUGH ── */}
      <section className="od-section" id="walkthrough">
        <div className="od-section-inner">
          <p className="od-eyebrow">The Prototype</p>
          <h2 className="od-section-title">See it working</h2>
          <p className="od-body od-body--center">
            Ondo rebuilds the proposal as a shop you can click through: your
            box, the shop, an item page and a demo checkout. It's a
            mobile-first design, so it reads best on a phone.
          </p>

          {VIDEO_EMBED_URL ? (
            <>
              <div className="cs-video-wrap">
                <iframe
                  src={VIDEO_EMBED_URL}
                  title="Ondo prototype walkthrough: your box, shop, item page and checkout"
                  allow="autoplay"
                  allowFullScreen
                />
              </div>
              <p className="od-caption">
                Building a first box: suggestions with reasons, adding in place,
                and a checkout that shows the box before payment.
              </p>
            </>
          ) : (
            <div className="od-callout">
              Walkthrough video coming soon.
            </div>
          )}
        </div>
      </section>

      {/* ── CHAPTER 2: THE WEEK AFTER ── */}
      <OndoWeekAfter onZoom={setLightbox} />

      <CaseStudyReflection
        id="reflection"
        skills={[
          "Problem framing: AOV vs conversion",
          "Principle-led redesign",
          "Experiment design with a guard rail",
          "Prototyping in code",
          "A documented design system",
          "Mapping edge cases in user flows",
        ]}
        note="What I'd point to from this project: checking the brief's own hunch (the tabs) by walking the flow, and finding a second problem it missed, tying every change to a named principle so the reasoning is easy to follow and easy to challenge, and treating conversion as a hard limit rather than something to trade away for basket size."
        banner={
          <>
            <strong>What this shows:</strong> I can take an unfamiliar flow
            from brief to a working, presentable prototype in two days, make
            scope calls under that pressure (cutting my own "hot deals" step),
            and come with a plan to measure whether the design actually worked.
          </>
        }
      >
        <div className="od-differently">
          <h3>What I'd do differently</h3>
          <ul>
            <li>
              <strong>Put it in front of people sooner.</strong> Everything here
              is reasoned from the flow, not watched. Five sessions from
              onboarding to checkout is the first thing I'd run, before
              building more.
            </li>
            <li>
              <strong>Start where the first box comes from.</strong> The
              take-home began at the order summary. Designing onboarding in
              the second week changed how I sized the box (I cut it from 30
              days to 15), so I'd ask about it on day one.
            </li>
          </ul>
        </div>
      </CaseStudyReflection>

      <CaseStudyCTA
        title="Explore Ondo"
        subtitle="Try the live site, browse the design system, watch the walkthrough, read the full story or browse the code"
        buttons={[
          { label: "🟢 Live Site", href: LIVE_URL, variant: "solid", external: true },
          { label: "🎨 Design system", href: STORYBOOK_URL, variant: "outline-light", external: true },
          { label: "GitHub →", href: GITHUB_URL, variant: "outline-light", external: true },
          { label: "← All Projects", href: "/portfolio", variant: "ghost" },
        ]}
      />

      <Footer />
    </main>
  );
}

export default Ondo;
