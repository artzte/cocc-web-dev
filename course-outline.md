# CIS 295 — Web Development II

## Course Description

Gain a deeper understanding of HTML (for structure) and CSS (for style) while creating multi-page
websites suitable for businesses and organizations. Explore web development's more advanced
techniques useful for improving usability and user experience. Plan and design websites for desktop
and mobile users.

- **Term:** Winter 2027 (Monday, January 4 – Friday, March 19, 2027; 11 weeks including Finals Week)
- **Credits:** 4 (online / asynchronous)
- **Recommended preparation:** [CIS 195](https://catalog.cocc.edu/course-outlines/cis-195/) (Web
  Development I)
- **Assumed background:** Basic HTML and CSS, multi-page linking, folder/file management, and using
  a code editor. No prior JavaScript, CLI, or Git experience is assumed.

## Course Learning Outcomes

1. Utilize the most recent HTML elements and CSS properties to create and style webpage content.
2. Plan, construct, and style webpage layouts for multiple devices and users.
3. Construct website features commonly found on large website projects.
4. Integrate site management concepts such as SEO and accessibility into a website’s plan, layout,
   and design.

## Key Winter 2027 Calendar Dates

- **First day of classes:** Monday, January 4, 2027 (Week 1)
- **Martin Luther King Jr. Day (college closed):** Monday, January 18, 2027 _(Week 2 quiz and
  assignment due date shifts to Tuesday, January 19)_
- **Last day to drop with no grade on transcript:** Friday, February 19, 2027 (end of Week 7)
- **Last day to drop with a W grade:** Wednesday, March 10, 2027 (Week 10)
- **Finals Week (Final Project Review & Approval):** Monday, March 15 – Friday, March 19, 2027
  (Week 11)

## Materials and Technology

There is no paid textbook. Assigned readings use Google's free
[web.dev Learn](https://web.dev/learn) series, [MDN Web Docs](https://developer.mozilla.org/), and
official Tailwind CSS and Google Search Central documentation.

| Tool                            | Purpose                                                                      |
| ------------------------------- | ---------------------------------------------------------------------------- |
| **VS Code**                     | Code editor (with built-in Git Source Control and Live/Vite integration)     |
| **Git + GitHub**                | Version control and PR-based submissions (GitHub Desktop or VS Code + HTTPS) |
| **Node.js (LTS) / npm**         | Running the starter kit, linters, formatter, and build scripts               |
| **Vite**                        | Local dev server and multi-page production build                             |
| **Prettier + HTML/CSS linters** | Consistent formatting and automated markup/stylesheet checks                 |
| **Tailwind CSS v4**             | Utility-first CSS framework introduced in Week 7 (`@tailwindcss/vite`)       |
| **AWS CloudFront**              | Course hosting via GitHub Actions (replaces legacy FTP uploads)              |
| **Browser DevTools + axe**      | Layout inspection, Accessibility Tree, Lighthouse, and performance auditing  |

Students should create a GitHub account using their COCC email and apply for the
[GitHub Student Developer Pack](https://education.github.com/pack) in Week 1.

### Starter Kit

Scaffolded in Week 1 from the course template repository. Students create a private repository from
the template, add `artzte` as a collaborator, clone via GitHub Desktop or VS Code (HTTPS—no SSH key
or WSL setup required), and run `npm install`.

**`package.json` scripts:**

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "npm run lint:html && npm run lint:css",
    "lint:html": "html-validate \"**/*.html\"",
    "lint:css": "stylelint \"**/*.css\"",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

## Assessment

| Component                                 | Weight |
| ----------------------------------------- | ------ |
| Weekly Quizzes (10 × 5 short-essay items) | 20%    |
| Weekly Assignments (9 weeks; 1 bye week)  | 40%    |
| Final Project (4 equal milestones)        | 40%    |

- There is **no midterm exam and no final exam**.
- Weekly quizzes and assignments are due at 11:59 PM on the Monday following each instructional week
  (shifted to **Tuesday, January 19** for Week 2 due to MLK Day).
- You may take one **bye week** during the term to skip one weekly assignment for full credit (does
  not apply to quizzes or Final Project milestones).
- Late work is accepted without penalty through Sunday, March 14 (before Finals Week).

## Final Project

Students plan, design, build, audit, and deploy a **multi-page business or organization website**
using modern HTML and CSS, deployed to the course CloudFront hosting via GitHub Actions.

### Submission

All milestones are submitted by opening a Pull Request with `artzte` tagged as reviewer and posting
the PR link (and live CloudFront preview URL once deployed) on Canvas.

### Milestones

| #   | Week                | Due Date                                                                 | Deliverable                                                                                             | Submit                                            |
| --- | ------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| 1   | Week 3 (Jan 18–24)  | **Mon, Jan 25**                                                          | **Proposal** — business/org concept, target audience, site map (≥4 pages), core user tasks              | PR with `projects/final/README.md`                |
| 2   | Week 6 (Feb 8–14)   | **Mon, Feb 15**                                                          | **Design Document** — mobile/desktop wireframes, design tokens & contrast ratios, nav & form plan       | PR updating `projects/final/README.md`            |
| 3   | Week 8 (Feb 22–28)  | **Mon, Mar 1**                                                           | **Initial Structure (Test Deploy)** — multi-page shell, shared nav/footer, ≥2 styled pages live         | PR + live CloudFront URL on Canvas                |
| 4   | Week 11 (Mar 15–19) | **Mon, Mar 15 (PR)**<br>**Wed, Mar 17 (Review)**<br>**Fri, Mar 19 (OK)** | **Final Submission** — complete, accessible, SEO-ready multi-page site deployed and linked on portfolio | Initial PR Mar 15; review Mar 17; approval Mar 19 |

### Requirements (Final Submission)

- **Multi-page site:** At least 4 distinct, cohesive pages (e.g., Home, Services/Menu/Catalog,
  About, Contact/Booking) with consistent shared navigation and footer.
- **Modern HTML & CSS:** Valid semantic HTML5 landmarks, CSS custom properties (design tokens),
  `@layer`, Flexbox and CSS Grid (plus at least one Container Query), and responsive media
  (`<picture>` / `srcset` / modern formats).
- **Large-site features:** Responsive navigation (desktop + mobile drawer), at least one modern
  native UI primitive (`<dialog>`, Popover API, or `<details>` accordion), and a complete accessible
  web form with native validation and clear error states.
- **Accessibility & UX:** Passes keyboard-only navigation, visible focus states, WCAG AA color
  contrast, `prefers-reduced-motion` support, and zero critical axe DevTools issues.
- **SEO & Performance:** Per-page `<title>` and meta descriptions, Open Graph tags, JSON-LD
  structured data (`LocalBusiness` or `Organization`), `robots.txt`, `sitemap.xml`, and Lighthouse
  scores of 90+ across Performance, Accessibility, Best Practices, and SEO.
- **Tooling & Deployment:** Passes `npm run build`, `npm run lint`, and `npm run format:check`,
  deployed to CloudFront via GitHub Actions, and showcased from the student's Week 9 developer
  portfolio.

---

## 11-Week Course Outline

### Week 1 (Jan 4 – Jan 10) — Modern Dev Workflow & Semantic Foundations

**Due:** Monday, January 11

**Reading:**

- [web.dev Learn HTML: Document Structure](https://web.dev/learn/html/document-structure)
- [web.dev Learn HTML: Semantic HTML](https://web.dev/learn/html/semantic-html)
- [web.dev Learn HTML: Headings and Sections](https://web.dev/learn/html/headings-and-sections)

**Topics:**

- Semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`,
  `<footer>`) and clean heading hierarchy
- Browser DevTools fundamentals: Elements panel, Styles/Computed box model, Device Mode
- Git & GitHub workflow: repositories, branches, commits, diffs, and Pull Requests (using GitHub
  Desktop or VS Code Source Control over HTTPS; CLI optional)
- Modern static deployment: GitHub Actions -> CloudFront (how push-to-deploy replaces legacy FTP)
- Course starter kit: Vite dev server, Prettier formatting, and HTML/CSS linting

**Lab / Assignment 1 (Setup + Semantic Refactor):**

- Create a GitHub account (with COCC email) and apply for the GitHub Student Developer Pack.
- Create your private course repository from the template, add `artzte` as collaborator, clone it,
  and run `npm install` and `npm run dev`.
- Refactor a provided "div soup" business homepage fixture (`examples/week1/`) into clean, valid
  semantic HTML with proper landmarks and heading hierarchy.
- Open a Pull Request with `artzte` as reviewer and verify the live CloudFront deploy URL.

**Quiz 1:** Semantic landmarks vs. generic `<div>`s, heading outline rules, Git branch/PR workflow,
push-to-deploy vs. FTP, and what a linter checks.

---

### Week 2 (Jan 11 – Jan 17) — Modern CSS Architecture & Extension Tools

**Due:** **Tuesday, January 19** _(shifted for MLK Day on Monday, Jan 18)_

**Reading:**

- [web.dev Learn CSS: The Cascade](https://web.dev/learn/css/the-cascade)
- [web.dev Learn CSS: Specificity](https://web.dev/learn/css/specificity)
- [web.dev Learn CSS: Custom Properties](https://web.dev/learn/css/custom-properties)
- [web.dev Learn CSS: Nesting](https://web.dev/learn/css/nesting)
- [web.dev Learn CSS: Functions](https://web.dev/learn/css/functions)
- [web.dev Learn CSS: Logical Properties](https://web.dev/learn/css/logical-properties)

**Topics:**

- Mastering the cascade: `@layer` (reset, base, layout, components, utilities) and
  `:is()`/`:where()`
- Design tokens with CSS custom properties (color palettes, spacing scales, typography)
- Native CSS nesting and keeping selectors shallow and maintainable
- Fluid sizing and modern CSS functions (`clamp()`, `min()`, `max()`, `calc()`)
- Logical properties (`margin-inline`, `padding-block`) and theming (`prefers-color-scheme`,
  `light-dark()`)
- **CSS extension languages (context):** Why Sass/LESS and PostCSS existed, what native CSS has
  absorbed, and how build tools process CSS on existing production codebases

**Assignment 2:** Refactor a provided unorganized multi-section stylesheet (`examples/week2/`) into
a layered architecture (`@layer`) using CSS custom property design tokens, native nesting, fluid
`clamp()` typography, and automatic light/dark mode support.

**Quiz 2:** Cascade layers (`@layer`), custom properties vs. preprocessor variables, native CSS
nesting pitfalls, fluid typography with `clamp()`, and why Sass/PostCSS still appear in legacy
repos.

---

### Week 3 (Jan 18 – Jan 24) — Responsive Layout Systems: Grid, Flexbox & Container Queries

_Note: Monday, January 18 is Martin Luther King Jr. Day (college closed)._

**Due:** Monday, January 25

**Reading:**

- [web.dev Learn CSS: Flexbox](https://web.dev/learn/css/flexbox)
- [web.dev Learn CSS: Grid](https://web.dev/learn/css/grid)
- [web.dev Learn CSS: Container Queries](https://web.dev/learn/css/container-queries)
- [web.dev Learn Responsive Design: Macro Layouts](https://web.dev/learn/design/macro-layouts)
- [web.dev Learn Responsive Design: Micro Layouts](https://web.dev/learn/design/micro-layouts)
- [web.dev Learn Responsive Design: Responsive Images](https://web.dev/learn/design/responsive-images)
- [web.dev Learn Responsive Design: The Picture Element](https://web.dev/learn/design/picture-element)

**Topics:**

- Mobile-first planning: macro page layouts (CSS Grid) vs. micro component layouts (Flexbox)
- CSS Grid mastery: `grid-template-areas`, `minmax()`, `auto-fit`/`auto-fill`, and `subgrid`
- **Container Queries (`@container`)**: styling components based on their container width rather
  than only the viewport
- Responsive media: `srcset`, `sizes`, `<picture>` art direction, `aspect-ratio`, and modern formats
  (WebP/AVIF)
- Inspecting Grid/Flex overlays and responsive breakpoints in DevTools

**Assignment 3:** Build a responsive multi-band layout for a local business showcase (copy and image
assets provided in `examples/week3/`) using CSS Grid for page structure, Flexbox for internal card
alignment, a reusable card component styled with `@container` that adapts cleanly in both a wide
main column and a narrow sidebar, and responsive `<picture>` hero imagery.

**Quiz 3:** When to choose Grid vs. Flexbox, `auto-fit` vs. `auto-fill`, Container Queries vs. Media
Queries, `subgrid` use cases, and how `srcset`/`sizes` helps mobile users.

**Final Project Milestone 1 — Proposal due (Monday, Jan 25):** Open a PR adding
`projects/final/README.md` with your business/organization concept, target audience, site map (≥4
pages), and core user tasks.

---

### Week 4 (Jan 25 – Jan 31) — Usability, UX & Web Accessibility

**Due:** Monday, February 1

**Reading:**

- [web.dev Learn Accessibility: Why Accessibility](https://web.dev/learn/accessibility/why)
- [web.dev Learn Accessibility: Content Structure](https://web.dev/learn/accessibility/structure)
- [web.dev Learn Accessibility: ARIA and HTML](https://web.dev/learn/accessibility/aria-html)
- [web.dev Learn Accessibility: Focus](https://web.dev/learn/accessibility/focus)
- [web.dev Learn Accessibility: Color and Contrast](https://web.dev/learn/accessibility/color-contrast)
- [web.dev Learn Accessibility: Animation and Motion](https://web.dev/learn/accessibility/motion)
- [web.dev Learn Accessibility: Automated Testing](https://web.dev/learn/accessibility/test-automated)
- [web.dev Learn Accessibility: Manual Testing](https://web.dev/learn/accessibility/test-manual)

**Topics:**

- Core UX and usability principles: visual hierarchy, scannability, predictable navigation, touch
  target sizing
- WCAG 2.2 AA fundamentals (Perceivable, Operable, Understandable, Robust)
- Keyboard-only navigation, tab order, skip links, and `:focus-visible`
- Color contrast ratios, readable typography, alt text strategy (informative vs. decorative images)
- Respecting user preferences (`prefers-reduced-motion`, `prefers-contrast`)
- First rule of ARIA: prefer native HTML semantics over manual ARIA roles
- Auditing workflow: DevTools Accessibility Tree, Lighthouse Accessibility, axe DevTools, and manual
  keyboard testing

**Assignment 4:** Audit and remediate an intentionally broken business landing page
(`examples/week4/`). Fix landmark structure, heading skips, keyboard traps, focus indicators, color
contrast, image alt text, and reduced-motion behavior until axe DevTools reports zero critical
issues and keyboard navigation works end-to-end. Summarize the key issues found and fixed in your PR
description.

**Quiz 4:** First rule of ARIA, `:focus` vs. `:focus-visible`, informative vs. decorative `alt`
attributes, why automated tools alone aren't enough, and `prefers-reduced-motion`.

---

### Week 5 (Feb 1 – Feb 7) — Large-Scale Navigation, Browser History & Native UI Primitives

**Due:** Monday, February 8

**Reading:**

- [web.dev Learn HTML: Navigation](https://web.dev/learn/html/navigation)
- [web.dev Learn HTML: Details and Summary](https://web.dev/learn/html/details)
- [web.dev Learn HTML: Dialog](https://web.dev/learn/html/dialog)
- [web.dev Learn CSS: Popover and Dialog](https://web.dev/learn/css/popover-and-dialog)
- [web.dev Learn CSS: Anchor Positioning](https://web.dev/learn/css/anchor-positioning)
- [web.dev Learn CSS: Transitions](https://web.dev/learn/css/transitions)
- [MDN: What is a URL?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- [MDN: History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) _(conceptual
  overview)_

**Topics:**

- Information architecture for large websites: primary nav, multi-column dropdowns/mega-menus,
  breadcrumbs (`aria-current="page"`), mobile drawers, and structured footer sitemaps
- **Browser history, URLs, query parameters & bookmarks:**
  - How the browser's session history stack works when users click `<a href>` links, jump to hash
    fragments (`#section`), or submit `GET` forms (`?category=...&sort=...`)
  - The user contract of the web: hitting the **Back button** must restore the previous view, and
    **reloading or opening a bookmark** must restore the exact view that was bookmarked
  - Why web apps should not break browser navigation (avoiding fake `<div>` links or trapping
    shareable view state purely in memory without reflecting it in the URL), and deciding which
    state belongs in the URL (paths, query params, hashes) vs. ephemeral UI (`<dialog>`, `popover`,
    `<details>`)
- Native `<details>` and `<summary>` (including exclusive accordions with matching `name`
  attributes)
- Native `<dialog>` modals: top layer, `::backdrop`, Escape key dismissal, and built-in focus return
- The Popover API (`popover`, `popovertarget`) for declarative menus and tooltips with zero JS
- Introduction to CSS Anchor Positioning and subtle transitions (`prefers-reduced-motion`-safe)
- Minimal progressive-enhancement JS: small, readable event hookups (e.g., `dialog.showModal()`)
  where HTML alone needs a one-line trigger

**Assignment 5:** Build a large-site navigation and interactive disclosure shell (site map fixture
in `examples/week5/`) featuring: a responsive header with real `<a href>` links and a desktop
category dropdown using the Popover API, a mobile drawer or quick-info modal using `<dialog>`,
accessible breadcrumbs, bookmarkable section fragment links (`#...`) or `GET` filter query links
that work cleanly with the browser Back button, a multi-column footer sitemap, and an FAQ accordion
using `<details name="...">`.

**Quiz 5:** How the browser history stack and Back button work with links/query params/hashes, why
bookmarkable views matter, why native `<dialog>` beats a custom `<div>` modal, Popover API vs. modal
`<dialog>`, and `aria-current="page"`.

---

### Week 6 (Feb 8 – Feb 14) — Designing Accessible Web Forms

**Due:** Monday, February 15

**Reading:**

- [web.dev Learn Forms: Form Element](https://web.dev/learn/forms/form-element)
- [web.dev Learn Forms: Form Fields](https://web.dev/learn/forms/form-fields)
- [web.dev Learn Forms: Design Basics](https://web.dev/learn/forms/design-basics)
- [web.dev Learn Forms: Validation](https://web.dev/learn/forms/validation)
- [web.dev Learn Forms: Accessibility](https://web.dev/learn/forms/accessibility)
- [web.dev Learn Forms: Autofill](https://web.dev/learn/forms/autofill)
- [web.dev Learn Forms: Styling Form Controls](https://web.dev/learn/forms/styling-form-controls)

**Topics:**

- Semantic form structure: explicit `<label for>`, `<fieldset>`, and `<legend>`
- Choosing the right controls and modern input types (`email`, `tel`, `url`, `date`, `number`,
  `<datalist>`)
- Mobile and UX ergonomics: `autocomplete`, `inputmode`, `enterkeyhint`, clear microcopy,
  single-column vs. grouped layouts
- Native HTML constraint validation (`required`, `minlength`, `pattern`, `type`) and styling states
  with `:user-valid` / `:user-invalid`
- Accessible error messaging and helper text (`aria-describedby`, `aria-live`)
- Styling form controls cleanly (`accent-color`, focus states, responsive button alignment)
- How static-site forms connect to real submission endpoints (conceptual overview of `action`/method
  and hosted form handlers)

**Assignment 6:** Build a responsive, accessible business booking or service-quote form (field specs
in `examples/week6/`) with grouped `<fieldset>` sections, mobile-optimized `inputmode` and
`autocomplete` attributes, native validation styled with `:user-valid`/`:user-invalid`, accessible
helper text, and keyboard/screen-reader-friendly feedback.

**Quiz 6:** Why placeholders are not labels, `<fieldset>`/`<legend>` purpose, `:user-invalid` vs.
`:invalid`, how `inputmode` and `autocomplete` improve mobile UX, and linking helper/error text with
`aria-describedby`.

**Final Project Milestone 2 — Design Document due (Monday, Feb 15):** Open a PR updating
`projects/final/README.md` with mobile and desktop wireframes (hand-drawn photos are fine), color
tokens with verified WCAG contrast ratios, typography scale, navigation plan, and form design.

---

### Week 7 (Feb 15 – Feb 21) — CSS Frameworks: Tailwind CSS & Multi-Page Reuse

**Due:** Monday, February 22

**Reading:**

- [Tailwind CSS Documentation: Styling with Utility Classes](https://tailwindcss.com/docs/styling-with-utility-classes)
- [Tailwind CSS Documentation: Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Tailwind CSS Documentation: Theme Variables](https://tailwindcss.com/docs/theme)
- [MDN: Using Custom Elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)
  _(conceptual overview for reusable headers/footers)_

**Topics:**

- Comparing styling strategies on real teams: modern native CSS, utility-first frameworks
  (**Tailwind CSS v4**), component libraries (Bootstrap), and classless frameworks (Pico)
- Setting up Tailwind CSS v4 with Vite (`@tailwindcss/vite`) and CSS-first configuration (`@theme`)
- Responsive prefixes, state variants (`hover:`, `focus-visible:`, `dark:`), and avoiding utility
  sprawl
- Managing shared layouts across multi-page sites without copy-paste drift (Vite HTML partials
  plugin or lightweight reusable custom elements for shared `<site-header>` / `<site-footer>`)
- Deciding when a CSS framework helps vs. when native CSS is cleaner (students choose native CSS or
  Tailwind for their Final Project)

**Assignment 7:** Build a responsive business pricing and services page (content fixture in
`examples/week7/`) using Tailwind CSS v4 configured with custom brand tokens in `@theme`, responsive
grid/flex utilities, dark mode support, and accessible focus states.

**Quiz 7:** Utility-first CSS vs. semantic class CSS (one tradeoff of each), how Tailwind v4
`@theme` relates to CSS custom properties, why copy-pasting headers across 10 HTML files breaks down
on large sites, and when you would skip a framework in favor of plain CSS.

---

### Week 8 (Feb 22 – Feb 28) — SEO, Performance & Site Management

**Due:** Monday, March 1

**Reading:**

- [web.dev Learn HTML: Metadata](https://web.dev/learn/html/metadata)
- [web.dev Learn Performance: Why Speed Matters](https://web.dev/learn/performance/why-speed-matters)
- [web.dev Learn Performance: General HTML Performance](https://web.dev/learn/performance/general-html-performance)
- [web.dev Learn Performance: Image Performance](https://web.dev/learn/performance/image-performance)
- [web.dev Learn Performance: Lazy-Load Images and Iframes](https://web.dev/learn/performance/lazy-load-images-and-iframe-elements)
- [web.dev Learn Performance: Optimize Web Fonts](https://web.dev/learn/performance/optimize-web-fonts)
- [Google Search Central: SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

**Topics:**

- Semantic and technical SEO: descriptive `<title>` and `<meta name="description">`, canonical URLs,
  clean URL slugs, semantic headings, internal linking
- Social sharing metadata: Open Graph (`og:title`, `og:description`, `og:image`)
- Structured data: adding **JSON-LD (`Schema.org`)** for a `LocalBusiness` or `Organization`
- Crawlability and site management files: `robots.txt` and `sitemap.xml`
- **Core Web Vitals** (LCP, CLS, INP) and why performance directly affects both UX and search rank
- Practical front-end optimization: explicit image `width`/`height` (preventing CLS),
  `fetchpriority="high"` on hero images, `loading="lazy"` below the fold, WebP/AVIF sizing, and web
  font loading (`font-display: swap`)
- Measuring with Lighthouse and DevTools Network throttling

**Assignment 8:** Optimize and SEO-harden a sluggish, poorly configured business starter site
(`examples/week8/`). Add complete metadata, Open Graph tags, valid JSON-LD structured data,
`robots.txt` and `sitemap.xml`, optimize images and fonts to fix CLS and LCP, and bring Lighthouse
scores to 90+ across Performance, Accessibility, Best Practices, and SEO.

**Quiz 8:** What LCP and CLS measure, why `loading="lazy"` should not go on the hero image, what
JSON-LD structured data tells search engines, the role of `robots.txt` vs. `sitemap.xml`, and one
reason semantic HTML helps SEO.

**Final Project Milestone 3 — Initial Structure (Test Deployment) due (Monday, Mar 1):** Scaffold
`projects/final` with your multi-page navigation shell, design tokens, and at least 2 pages visibly
styled beyond the starter. Verify deployment to CloudFront and submit the PR link and live URL on
Canvas.

---

### Week 9 (Mar 1 – Mar 7) — Developer Portfolio & Production Launch Concepts

**Due:** Monday, March 8

**Reading:**

- [web.dev Learn Responsive Design: UI Patterns](https://web.dev/learn/design/ui-patterns)
- [MDN: Publishing Your Website](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website)

**Topics:**

- What makes a strong junior web developer portfolio: live deployed projects, concise case studies
  (problem, layout/accessibility/performance decisions, link to code and live site), clean GitHub
  profile and READMEs
- Production launch basics: custom domains, DNS records (A/CNAME), HTTPS/TLS certificates, and how
  CDNs like CloudFront serve static sites globally
- Reviewing and polishing prior work (buffer time to catch up on any missing weekly assignments)

**Assignment 9 (Web Developer Portfolio):** Build and deploy your personal **Web Developer
Portfolio** showcasing at least three projects from this course (including a featured card linking
to your live Final Project), brief technical case-study notes for each project, an accessible about
and contact section, responsive layout, and Lighthouse scores of 90+.

**Quiz 9:** What belongs in a project case study beyond a screenshot, how DNS connects a custom
domain to hosting, why HTTPS matters even on static sites, and what a CDN does.

---

### Week 10 (Mar 8 – Mar 14) — Final Project Workshop & Pre-Launch Auditing

_This is a workshop and catch-up week. There is **no weekly assignment** and **no new reading**, so
students have dedicated time to finish and audit their Final Project and clear any late work before
Finals Week._

**Instructor example:** The complete instructor multi-page business site example
(`examples/final-project/`) is published before Week 10 starts as a reference.

**Topics (short lecture + walkthrough):**

- Pre-launch QA checklist: HTML validation, Stylelint/Prettier, keyboard-only navigation pass, axe
  DevTools audit, Lighthouse 90+ check across all four categories
- Cross-browser sanity check (Chromium + Firefox/Safari) and real mobile viewport check
- Reviewing Git diffs and running an adversarial AI code review on your PR before opening your final
  submission

**Quiz 10 (due Monday, Mar 15):** Short synthesis quiz on pre-launch QA—accessibility verification,
cross-browser testing, Lighthouse diagnostics, and using PR diffs to review changes before shipping.

---

### Week 11 (Mar 15 – Mar 19, Finals Week) — Final Project Review & Approval

**No new reading. No quiz.**

**Final Project Milestone 4 — Final Submission:**

- **Monday, March 15:** Open your final Pull Request with `artzte` tagged as reviewer, live
  multi-page business site deployed to CloudFront, and linked from your live Developer Portfolio.
- **Wednesday, March 17:** Instructor review comments returned on GitHub.
- **Friday, March 19:** Revisions pushed and final PR approval completed.

---

## Topic Coverage Map

### COCC Course Learning Outcomes

| Outcome (exact catalog language)                                                                           | Weeks                   |
| ---------------------------------------------------------------------------------------------------------- | ----------------------- |
| Utilize the most recent HTML elements and CSS properties to create and style webpage content               | 1, 2, 3, 5, 6, 7, Final |
| Plan, construct, and style webpage layouts for multiple devices and users                                  | 2, 3, 4, 6, 9, Final    |
| Construct website features commonly found on large website projects                                        | 5, 6, 7, Final          |
| Integrate site management concepts such as SEO and accessibility into a website’s plan, layout, and design | 1, 4, 8, 9, 10, Final   |

### COCC Content Outline Topics

| Content Outline Topic                     | Weeks                                         |
| ----------------------------------------- | --------------------------------------------- |
| Usability and user experience             | 4, 6, 9, Final                                |
| Mobile web design                         | 3, 5, 6, Final                                |
| Advanced HTML elements and CSS properties | 1, 2, 3, 5, 6                                 |
| Efficient HTML/CSS syntax                 | 1, 2, 7                                       |
| CSS extension languages                   | 2 (Sass/PostCSS context), 7 (Tailwind CSS v4) |
| Large-scale navigation menus              | 5, Final                                      |
| Search Engine Optimization (SEO)          | 8, 10, Final                                  |
| Designing web forms                       | 6, Final                                      |
| Web developer’s portfolio                 | 9, 11 (Final showcase)                        |
