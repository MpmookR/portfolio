git: https://github.com/MpmookR/localEdition
Figma: https://www.figma.com/proto/QfJzsENjZnVLNxFAqm5DHX/local?node-id=9-11&viewport=-102%2C229%2C0.43&t=3T8XMeMv0m3BTmul-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=9%3A11&page-id=0%3A1
Video on live website: 
 - mobile: URl....
 - labtop: URl....

LocalEdition — Bilingual Digital Menu for a Cocktail Bar Product Engineer | 2026 | Solo, client project

A bilingual (Thai/English) QR-code menu for a cocktail bar in Hat Yai, Thailand. Customers scan a code at their table and browse the menu on their own phone. Built end to end: business owner interview, product scoping, Next.js + Sanity CMS build, and handoff to a non-technical owner who now edits it herself.

Live site: local-edition-azure.vercel.app (pending custom domain) Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Sanity CMS v5 Role: Product research, scoping, full-stack build, content modeling, client handoff

A quick note before the details: this isn't the most visually elaborate project in this portfolio, and that's deliberate rather than a limitation I'm glossing over. The brief below explains why.

The problem (PD lens)

I interviewed the bar owner to understand what she actually needed, not just what a "digital menu" usually looks like. Two things stood out:

The venue is dim by design — it's a cocktail bar, not a café — and printed menus are genuinely hard to read at the table. That's the surface problem a QR menu solves.

The deeper problem was maintenance. Menu items, prices, photos, and — importantly — opening days and hours all shift with the season. A static site would mean every seasonal change becomes a support request to a developer. The owner needed to make those edits herself, on her own schedule, without touching code or waiting on me.

That second point is what actually shaped the product decision: this isn't "build a menu website," it's "build a system the owner can operate without me." Everything downstream — the CMS choice, the data model, even what I chose to leave out — traces back to that.

Scope decisions (PD lens)

I deliberately left booking and ordering out of scope, even though that's a common feature for "digital menu" products. The owner runs the bar herself, and part of what she offers is talking each customer through the menu rather than just taking an order. Cocktails aren't a familiar category in Hatyai the way they are in a bigger city, so a lot of customers don't already know what they're choosing between — she wants the chance to explain a drink, recommend something based on what someone likes, and read the table, instead of an app making that call silently. That conversation is also how she builds regulars; it's a relationship, not just a transaction. In-app ordering would have removed the one interaction she actually wanted to keep. So the menu's job stayed narrower than "let people order": show the drinks clearly enough for customers to look, ask, and talk to her, then order the way they always have, at the table or the bar. Saying no to ordering was as much a product decision as anything I built.

The same restraint shows up visually. The interface is quiet: dark background, gold accents, minimal motion, straightforward layout. That's not a lack of polish, it's a match to context — someone glancing at a phone screen in low light, at a table, wanting to find a drink and a price quickly. A flashier, more animated interface would have worked against the actual use case. I'd rather the design decisions here read as intentional than impressive.

Data modeling (engineer lens)

The seasonal-change requirement is really a content-modeling problem, so that's where most of the engineering thought went, via Sanity CMS with typed GROQ queries and automatic schema-to-type generation (TypeGen), so the content model and the TypeScript types never drift apart.

Two schemas carry the seasonal requirement directly:

Site settings — bar name, bilingual address (line 1/2, city, province, postal), bilingual open days and hours, map URL and embed, phone, email, social links. When the owner's hours change for the season, she edits one document in Studio; nothing gets redeployed.

Menu sections and items — bilingual name/ingredients/description fields (English falling back gracefully if a Thai translation isn't filled in yet, and vice versa), price, image with alt text, and a spirit-category tag (gin, whisky, rum, and so on) that drives the filter chips on the menu page. A "Special of the Month" feature is implemented as a reserved sort-order slot rather than a separate boolean or document type — a pragmatic choice I made under time pressure, and one I've documented as a known sharp edge with a clear upgrade path if the bar wants more than one featured slot later. I'd rather show that decision than hide it.

Bilingual UX (shared, leans engineer)

Language switching is instant and has no page reload — a lot of digital-menu implementations either reload the page or flash the wrong language on first paint. I used a React context backed by useSyncExternalStore and localStorage, with the server always rendering English first and the client snapshot taking over right after hydration, which avoids the hydration-mismatch flash entirely. Since localStorage only fires its native storage event in other tabs, I dispatch it manually so the current tab's UI updates immediately when someone toggles language.

Outcome (shared)

The Studio is live and the bar owner is actively using it for real content management — editing prices, adding seasonal items, and updating hours herself, which was the actual goal, not a stretch outcome. The site is deployed and in use at the venue.

What I'd point to from this project: taking a loosely defined ask from a non-technical stakeholder, identifying the requirement underneath the stated request (maintainability, not just "a website"), and making scoping and visual decisions that serve the real context rather than defaulting to more features or more polish.

what has change from the figma design:
- only font has been changed after using figma MCP to check the accessibility. Font at the the wirefame is difficult to read espectially on mobile level ... the changed are in the image - refont1 and 2
- should I mention about the PDF file on how to add product on sanity that I created for the business owner? https://docs.google.com/document/d/14WV-pVs6Aa-zEZgL5dwLZ0RuDBO7Z2NgjJY2ITYy1lk/edit?usp=sharing
