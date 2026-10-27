import { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CaseStudyHero from "../../components/caseStudy/CaseStudyHero";
import CaseStudyCTA from "../../components/caseStudy/CaseStudyCTA";
import CaseStudyReflection from "../../components/caseStudy/CaseStudyReflection";
import Lightbox from "../../components/caseStudy/Lightbox";
import "../../css/ondo.css";
import ondoHero from "../../assets/images/projects/Ondo/hero.jpg";
import wfSummary from "../../assets/images/projects/Ondo/sum_summary.png";
import wfMenu from "../../assets/images/projects/Ondo/sum_menu.png";
import wfDetails from "../../assets/images/projects/Ondo/sum_mealDetails.png";
import wfCheckout from "../../assets/images/projects/Ondo/sum_checkout.png";

const GITHUB_URL = "https://github.com/MpmookR/ondo";
const LIVE_URL = "https://ondo-hazel.vercel.app/";
const STORY_URL = "https://github.com/MpmookR/ondo/blob/main/doc/story.md";

// Walkthrough video (Google Drive "preview" link, same as the LocalEdition embed).
// Hero and CTA buttons scroll to the #walkthrough section where it's embedded.
const VIDEO_EMBED_URL =
  "https://drive.google.com/file/d/10L_jZ09INJm_mX-G4sqCEeA670lisGsq/preview";

const ONDO_HERO = {
  badge: "Take-home Redesign",
  title: "Ondo",
  subtitle:
    "Redesigning a subscription's first box so customers add more, without making it harder to pay. A mobile-first redesign, coded and presented in one weekend.",
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
  links: [
    { href: LIVE_URL, label: "🟢 Live Site", variant: "solid" },
    { href: "#walkthrough", label: "📽️ Watch the walkthrough", variant: "outline" },
    { href: STORY_URL, label: "📄 Read the full story", variant: "outline" },
    { href: GITHUB_URL, label: "GitHub Repo", variant: "outline", icon: "github" },
  ],
};

// The five principles. Colours match the numbered badges on the wireframes.
const PRINCIPLES = [
  { n: 1, name: "Recognised", line: "Use patterns customers already know from other apps (Jakob's Law)." },
  { n: 2, name: "Compact", line: "Collapse what they've seen. Keep open what's new." },
  { n: 3, name: "Relevant", line: "Suggest by goal and box, and always say why." },
  { n: 4, name: "Scannable", line: "One menu for every category, grouped to scan." },
  { n: 5, name: "Guard rail", line: "Nothing extra between the customer and paying." },
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
      { p: [2, 3], text: <><strong>Your preferences.</strong> A collapsed card replays what the customer told us in onboarding: goal, allergies and exclusions. It's the input behind every suggestion on the page.</> },
      { p: [2], text: <>The order summary collapses to a count, a price and thumbnails ("8 meals · £00.00"). Add-ons collapse the same way. The whole box fits on one screen.</> },
      { p: [1], text: <>Expanded, the box is a vertical list with quantity steppers, like the basket in every delivery app they already use. Add-ons are grouped by category with their own totals.</> },
      { p: [3], text: <>"For your [goal] goal" suggests items that fit the goal or pair with something in the box, and each card says why ("Fits your [goal] goal", "Goes with your [meal]").</> },
      { p: [1], text: <>Suggestions add in place with a + that turns into a stepper. No picker, no leaving the page. Tapping one opens that item's own details page.</> },
      { p: [4], text: <>One "Add / Change items" button replaces the two, and opens the one menu.</> },
    ],
    note: "The weekly total stays pinned to the bottom, with the first-box discount and free delivery.",
    inOndo: "Your box: preferences, a box grouped by category, a rail of up to six suggestions (each with a reason) and the total always in view.",
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
      { p: [4], text: <>One menu with sticky tabs: For you · Meals · Breakfast · Sides & snacks, and the rest. Cards sit in two columns with name, tags, kcal and was/now price. "Add to box" turns into a stepper on the card.</> },
      { p: [4], text: <>Plan type sits at the top of the menu, with the price difference per meal and one line on what the plan means.</> },
      { p: [3], text: <>"For you" comes first and says what it's based on ("Picked from your answers: [goal], avoiding [allergen]"), then "More meals for your goal" and "Goes well with your box", using the same rules as the order summary.</> },
      { p: [2], text: <>Switch plan and nothing silently disappears. Meals that aren't on that plan are grouped and collapsed ("Not available in Plan A (1)").</> },
    ],
    note: 'A sticky "View your box · 8 items · £00.00" bar keeps the box and its total one tap away.',
    inOndo: "Shop: tabs for For you, Coffee, Tea, Matcha and Gear. Items a customer can't have (over their caffeine limit, or containing something they avoid) sit in collapsed sections with the reason.",
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
    inOndo: 'Item page: description, caffeine level, brew highlights, a "Contains" box that is never collapsed, a "Goes well with this" rail and a pinned order bar.',
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
      { p: [5], text: <>"Your first box" sits at the top: "8 meals · 4 add-ons · Plan B · £00.00", collapsed, with every line one tap away. What they're paying for is confirmed first.</> },
      { p: [5], text: <>The first delivery date is right below, with "Change", so the customer doesn't go back a step to check it.</> },
      { p: [5], text: <>Wallet payment first: one tap with Face ID, no card to find and type. Card details stay below "or pay with card".</> },
      { p: [5], text: <>The button shows the amount ("Pay £00.00"), and the subscription terms are in plain English: skip or cancel any time.</> },
    ],
    note: 'I removed a "hot deals" page I\'d sketched before checkout. An extra step before payment is where people drop off.',
    inOndo: 'Checkout: progress steps, a "Your first box" summary that expands to every line, the delivery date with a "Change" calendar, Apple Pay and Google Pay, the card form and "Pay £…". It\'s a demo: no payment is taken.',
  },
];

// Summary matrix: which principle each screen's changes serve.
const MATRIX = [
  {
    screen: "Order summary",
    cells: [
      "Box as a vertical list, steppers, add in place",
      "Preferences, meals and add-ons collapse",
      "Preferences replayed; suggestions for the goal, each with a reason",
      'One "Add / Change items" route',
      "Total pinned",
    ],
  },
  {
    screen: "Menu",
    cells: [
      "",
      "Unavailable items collapsed, never hidden",
      '"For you" first, says what it\'s based on',
      "One menu, tabs, two columns, plan type on top",
      '"View your box" bar with the total',
    ],
  },
  {
    screen: "Meal details",
    cells: [
      "Full page with back, not an overlay",
      "Accordions for details on demand; allergens never collapsed",
      '"Goes well with this"',
      "",
      "Box count and price pinned",
    ],
  },
  {
    screen: "Checkout",
    cells: [
      "",
      "Box summary collapsed",
      "",
      "",
      "Summary and date before payment; wallet pay; total on the button",
    ],
  },
];

const OUTCOMES = [
  { result: "AOV up, conversion flat", call: "Ship it", tone: "good" },
  { result: "AOV up, conversion down past the threshold", call: "Stop and simplify", tone: "bad" },
  { result: "Conversion up, AOV flat", call: "Clarity works, relevance doesn't yet", tone: "warn" },
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

  return (
    <main className="containerBG">
      <Header />

      <Lightbox
        src={lightbox?.src}
        alt={lightbox?.alt}
        onClose={() => setLightbox(null)}
      />

      <CaseStudyHero {...ONDO_HERO} />

      {/* ── OVERVIEW ── */}
      <section className="od-section od-section--alt">
        <div className="od-section-inner">
          <p className="od-eyebrow">Overview</p>
          <h2 className="od-section-title">
            A take-home task, rebuilt so I can share it
          </h2>
          <p className="od-body">
            Ondo started as a take-home task from a product design interview:
            the first box of a meal subscription, where add-ons were easy to
            miss. I redesigned the flow in Figma and presented a working
            prototype on the day.
          </p>
          <p className="od-body">
            The Figma redesign was built in the company's own brand and design
            system, under their licence, so I'm keeping those files private and
            not naming the company. Instead, I rebuilt the same proposal under
            an invented caffeine subscription, Ondo: new name, logo, catalogue
            and copy. The product thinking carries over unchanged.
          </p>
          <div className="od-callout">
            <strong>About the visuals:</strong> the high-fidelity Figma screens
            stay private because they carry the company's brand. The wireframes
            on this page are brand-free low-fi versions of the original flow and
            my redesign, and the last part of each screen shows how the same
            idea lives in Ondo.
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="od-section">
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
      <section className="od-section od-section--alt">
        <div className="od-section-inner od-two-col">
          <div>
            <p className="od-eyebrow">The Brief</p>
            <h2 className="od-section-title">
              Grow the box, but never at the cost of conversion
            </h2>
            <p className="od-body">
              The goal: more items and a higher average order value (AOV) in a
              new customer's first box. The guard rail: conversion. It's easy to
              lift basket size with upsells and lose the customer entirely, so
              when the two pull against each other, conversion wins.
            </p>
            <p className="od-body">
              The brief also flagged what was coming next: a third plan (Plan
              C) and more add-on categories. The redesign had to make room for
              both, not just fix today's screens.
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
      <section className="od-section">
        <div className="od-section-inner">
          <p className="od-eyebrow">What I Found</p>
          <h2 className="od-section-title">
            The add-ons weren't lost in the tabs. People never got that far.
          </h2>
          <p className="od-body od-body--center">
            The company's hunch was that the tabs buried the add-ons. My read:
            most people drop off before they ever reach the tabs. Add-ons need
            to be where people already are, and easy to add to the basket.
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
      <section className="od-section od-section--alt">
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

              <p className="od-in-ondo">
                <span className="od-in-ondo-tag">In Ondo</span>
                {s.inOndo}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── SUMMARY MATRIX ── */}
      <section className="od-section od-section--alt">
        <div className="od-section-inner">
          <p className="od-eyebrow">Summary</p>
          <h2 className="od-section-title">Relevance is the thread</h2>
          <p className="od-body od-body--center">
            The same rules drive the order summary, the "For you" tab and the
            item page: filter out anything the customer can't have, then rank
            by goal, pairing and an easy first try. One set of rules means the
            suggestions never contradict each other from screen to screen.
          </p>

          <div className="od-table-wrap">
            <table className="od-table">
              <caption className="od-sr-only">
                Which principle each screen's changes serve
              </caption>
              <thead>
                <tr>
                  <th scope="col">Screen</th>
                  {PRINCIPLES.map((p) => (
                    <th scope="col" key={p.n}>
                      <span className="od-th">
                        <span className={`od-badge od-badge--${p.n}`} aria-hidden="true">
                          {p.n}
                        </span>
                        {p.name}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MATRIX.map((row) => (
                  <tr key={row.screen}>
                    <th scope="row">{row.screen}</th>
                    {row.cells.map((c, i) => (
                      <td key={i}>
                        {c || <span className="od-empty" aria-label="None">·</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── HOW I'D PROVE IT ── */}
      <section className="od-section">
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
      <section className="od-section od-section--alt" id="walkthrough">
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
              <div className="od-live-row">
                <a
                  href={LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs-btn cs-btn--solid"
                >
                  🟢 Try the live site
                </a>
                <p className="od-caption">
                  Best on your phone. On desktop, narrow the window or open
                  your browser's mobile view.
                </p>
              </div>
            </>
          ) : (
            <div className="od-callout">
              Walkthrough video coming soon.
            </div>
          )}
        </div>
      </section>

      <CaseStudyReflection
        skills={[
          "Problem framing under a 2-day deadline",
          "Funnel thinking: AOV vs conversion",
          "Auditing an existing flow",
          "Principle-led redesign",
          "Progressive disclosure",
          "Explainable recommendations",
          "Experiment design with a guard rail",
          "Low-fi wireframing, before and after",
          "Prototyping in code",
          "Presenting design decisions",
        ]}
        note="What I'd point to from this project: questioning the brief's own hunch (the tabs) before designing for it, tying every change to a named principle so the reasoning is easy to follow and easy to challenge, and treating conversion as a hard limit rather than something to trade away for basket size."
        banner={
          <>
            <strong>What this shows:</strong> I can take an unfamiliar flow
            from brief to a working, presentable prototype in two days, make
            scope calls under that pressure (cutting my own "hot deals" step),
            and come with a plan to measure whether the design actually worked.
          </>
        }
      />

      <CaseStudyCTA
        title="Explore Ondo"
        subtitle="Try the live site, watch the walkthrough, read the full redesign story or browse the code"
        buttons={[
          { label: "🟢 Live Site", href: LIVE_URL, variant: "solid", external: true },
          { label: "📽️ Watch the walkthrough", href: "#walkthrough", variant: "outline-light" },
          { label: "📄 Read the full story", href: STORY_URL, variant: "outline-light", external: true },
          { label: "GitHub →", href: GITHUB_URL, variant: "outline-light", external: true },
          { label: "← All Projects", href: "/portfolio", variant: "ghost" },
        ]}
      />

      <Footer />
    </main>
  );
}

export default Ondo;
