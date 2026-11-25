# CIS 295 Alignment Doc

## Course Catalog

https://catalog.cocc.edu/course-outlines/cis-295/

Gain a deeper understanding of HTML (for structure) and CSS (for style) while creating multi-page
websites suitable for businesses and organizations. Explore web development's more advanced
techniques useful for improving usability and user experience. Plan and design websites for desktop
and mobile users.

| Objective | Description                                                                                                 |
| --------- | ----------------------------------------------------------------------------------------------------------- |
| CO1       | Utilize the most recent HTML elements and CSS properties to create and style webpage content.               |
| CO2       | Plan, construct, and style webpage layouts for multiple devices and users.                                  |
| CO3       | Construct website features commonly found on large website projects.                                        |
| CO4       | Integrate site management concepts such as SEO and accessibility into a website’s plan, layout, and design. |

---

# Week 1: Modern Dev Workflow & Semantic Foundations

## Module Learning Objectives

By the end of this module you will be able to:

1. Structure a business webpage using semantic HTML5 landmarks and a valid heading hierarchy
2. Inspect HTML structure, computed styles, and mobile viewports using Browser DevTools
3. Set up the course template repository, create a branch, commit changes, and open a Pull Request
   on GitHub
4. Run the Vite starter kit, Prettier formatter, and HTML/CSS linters, and verify an automated
   CloudFront deployment

## Assessments

- Quiz 1: Semantic HTML, Git/PR workflow, push-to-deploy vs. FTP, and linting
- Assignment 1: Repository setup + semantic refactor of a "div soup" business homepage fixture,
  submitted via PR with live CloudFront deployment

## Activities

- Video: Setting up GitHub, the course starter repo, and automated CloudFront deploys
- Video: Semantic HTML5 landmarks and inspecting document structure in DevTools

## Learning Materials

- [web.dev Learn HTML: Document Structure](https://web.dev/learn/html/document-structure)
- [web.dev Learn HTML: Semantic HTML](https://web.dev/learn/html/semantic-html)
- [web.dev Learn HTML: Headings and Sections](https://web.dev/learn/html/headings-and-sections)

## Course Outcomes Supported

- **CO1:** Utilize the most recent HTML elements and CSS properties to create and style webpage
  content.
- **CO4:** Integrate site management concepts such as SEO and accessibility into a website’s plan,
  layout, and design.

---

# Week 2: Modern CSS Architecture & Extension Tools

## Module Learning Objectives

By the end of this module you will be able to:

1. Organize stylesheets using CSS cascade layers (`@layer`) and low-specificity selectors
2. Define reusable design tokens (color, spacing, typography) using CSS custom properties
3. Write cleaner stylesheets using native CSS nesting, logical properties, and fluid sizing
   functions (`clamp()`, `min()`, `max()`)
4. Explain the role of CSS extension languages (Sass, PostCSS) and how modern native CSS compares

## Assessments

- Quiz 2: Cascade layers, custom properties, native nesting, fluid sizing, and CSS preprocessors
- Assignment 2: Refactor a multi-section stylesheet with `@layer`, design tokens, native nesting,
  fluid typography, and light/dark theming

## Activities

- Video: Cascade layers, custom properties, and building a lightweight design-token system
- Video: Native CSS nesting vs. Sass/PostCSS in production codebases

## Learning Materials

- [web.dev Learn CSS: The Cascade](https://web.dev/learn/css/the-cascade)
- [web.dev Learn CSS: Specificity](https://web.dev/learn/css/specificity)
- [web.dev Learn CSS: Custom Properties](https://web.dev/learn/css/custom-properties)
- [web.dev Learn CSS: Nesting](https://web.dev/learn/css/nesting)
- [web.dev Learn CSS: Functions](https://web.dev/learn/css/functions)
- [web.dev Learn CSS: Logical Properties](https://web.dev/learn/css/logical-properties)

## Course Outcomes Supported

- **CO1:** Utilize the most recent HTML elements and CSS properties to create and style webpage
  content.
- **CO2:** Plan, construct, and style webpage layouts for multiple devices and users.

---

# Week 3: Responsive Layout Systems: Grid, Flexbox & Container Queries

## Module Learning Objectives

By the end of this module you will be able to:

1. Combine CSS Grid (macro page layout) and Flexbox (micro component alignment) in a mobile-first
   design
2. Build component-driven responsive layouts using Container Queries (`@container`) and `subgrid`
3. Deliver responsive images using `<picture>`, `srcset`, `sizes`, and modern image formats
4. Define the scope, audience, and site map for a multi-page business or organization website

## Assessments

- Quiz 3: Grid vs. Flexbox, `auto-fit`/`auto-fill`, Container Queries vs. Media Queries, responsive
  images
- Assignment 3: Responsive multi-band showcase with Grid, Flexbox, a container-queried card
  component, and responsive `<picture>` imagery
- Final Project Milestone 1: Proposal (`projects/final/README.md`)

## Activities

- Video: Macro vs. micro layouts with CSS Grid, Subgrid, and DevTools layout overlays
- Video: Writing Container Queries and responsive `<picture>` markup

## Learning Materials

- [web.dev Learn CSS: Flexbox](https://web.dev/learn/css/flexbox)
- [web.dev Learn CSS: Grid](https://web.dev/learn/css/grid)
- [web.dev Learn CSS: Container Queries](https://web.dev/learn/css/container-queries)
- [web.dev Learn Responsive Design: Macro Layouts](https://web.dev/learn/design/macro-layouts)
- [web.dev Learn Responsive Design: Micro Layouts](https://web.dev/learn/design/micro-layouts)
- [web.dev Learn Responsive Design: Responsive Images](https://web.dev/learn/design/responsive-images)
- [web.dev Learn Responsive Design: The Picture Element](https://web.dev/learn/design/picture-element)

## Course Outcomes Supported

- **CO1:** Utilize the most recent HTML elements and CSS properties to create and style webpage
  content.
- **CO2:** Plan, construct, and style webpage layouts for multiple devices and users.

---

# Week 4: Usability, UX & Web Accessibility

## Module Learning Objectives

By the end of this module you will be able to:

1. Apply core usability principles and WCAG 2.2 AA accessibility guidelines to webpage layouts
2. Verify keyboard-only navigation, focus visibility (`:focus-visible`), color contrast, and
   `prefers-reduced-motion` support
3. Apply the first rule of ARIA by preferring native semantic HTML elements
4. Audit a webpage using the DevTools Accessibility Tree, Lighthouse, axe DevTools, and manual
   keyboard testing

## Assessments

- Quiz 4: ARIA first rule, focus states, alt text strategy, reduced motion, and manual vs. automated
  testing
- Assignment 4: Audit and remediate an intentionally inaccessible starter site and document the
  fixes in the PR description

## Activities

- Video: Keyboard-only walkthrough and auditing a page with DevTools and axe DevTools
- Video: Fixing real accessibility defects (landmarks, contrast, focus, motion)

## Learning Materials

- [web.dev Learn Accessibility: Why Accessibility](https://web.dev/learn/accessibility/why)
- [web.dev Learn Accessibility: Content Structure](https://web.dev/learn/accessibility/structure)
- [web.dev Learn Accessibility: ARIA and HTML](https://web.dev/learn/accessibility/aria-html)
- [web.dev Learn Accessibility: Focus](https://web.dev/learn/accessibility/focus)
- [web.dev Learn Accessibility: Color and Contrast](https://web.dev/learn/accessibility/color-contrast)
- [web.dev Learn Accessibility: Animation and Motion](https://web.dev/learn/accessibility/motion)
- [web.dev Learn Accessibility: Automated Testing](https://web.dev/learn/accessibility/test-automated)
- [web.dev Learn Accessibility: Manual Testing](https://web.dev/learn/accessibility/test-manual)

## Course Outcomes Supported

- **CO2:** Plan, construct, and style webpage layouts for multiple devices and users.
- **CO4:** Integrate site management concepts such as SEO and accessibility into a website’s plan,
  layout, and design.

---

# Week 5: Large-Scale Navigation & Modern Native UI Primitives

## Module Learning Objectives

By the end of this module you will be able to:

1. Design and build multi-level navigation systems for large websites (desktop menus, mobile
   drawers, breadcrumbs, footer sitemaps)
2. Construct accessible modals, dropdowns, and exclusive accordions using native `<dialog>`, the
   Popover API, and `<details>`/`<summary>`
3. Apply CSS Anchor Positioning and motion-safe transitions to interactive UI components
4. Wire minimal progressive-enhancement JavaScript where native HTML controls need a trigger

## Assessments

- Quiz 5: Native `<dialog>` vs. custom modals, Popover API, `aria-current="page"`, exclusive
  `<details>`, and accessible multi-level navigation
- Assignment 5: Large-site header/footer navigation shell with Popover dropdowns, `<dialog>` mobile
  drawer, breadcrumbs, and `<details name="...">` FAQ accordion

## Activities

- Video: Large-site navigation patterns (desktop mega-menus to mobile drawers)
- Video: Building accessible modals and popovers with `<dialog>`, `popover`, and `<details>`

## Learning Materials

- [web.dev Learn HTML: Navigation](https://web.dev/learn/html/navigation)
- [web.dev Learn HTML: Details and Summary](https://web.dev/learn/html/details)
- [web.dev Learn HTML: Dialog](https://web.dev/learn/html/dialog)
- [web.dev Learn CSS: Popover and Dialog](https://web.dev/learn/css/popover-and-dialog)
- [web.dev Learn CSS: Anchor Positioning](https://web.dev/learn/css/anchor-positioning)
- [web.dev Learn CSS: Transitions](https://web.dev/learn/css/transitions)

## Course Outcomes Supported

- **CO1:** Utilize the most recent HTML elements and CSS properties to create and style webpage
  content.
- **CO2:** Plan, construct, and style webpage layouts for multiple devices and users.
- **CO3:** Construct website features commonly found on large website projects.

---

# Week 6: Designing Accessible Web Forms

## Module Learning Objectives

By the end of this module you will be able to:

1. Structure accessible multi-section web forms using `<label>`, `<fieldset>`, `<legend>`, and
   appropriate HTML input types
2. Optimize mobile form usability using `inputmode`, `autocomplete`, and clear microcopy
3. Implement native HTML constraint validation and style validation states with `:user-valid` and
   `:user-invalid`
4. Produce a complete design specification (wireframes, tokens, contrast checks, nav and form plans)
   for a multi-page business site

## Assessments

- Quiz 6: Form labeling, fieldsets, `:user-invalid` vs. `:invalid`, mobile ergonomics, and
  `aria-describedby`
- Assignment 6: Multi-section accessible business booking/quote form with native validation and
  responsive layout
- Final Project Milestone 2: Design Document (`projects/final/README.md`)

## Activities

- Video: Designing user-friendly forms for desktop and mobile
- Video: Native constraint validation, `:user-invalid`, and accessible inline error messaging

## Learning Materials

- [web.dev Learn Forms: Form Element](https://web.dev/learn/forms/form-element)
- [web.dev Learn Forms: Form Fields](https://web.dev/learn/forms/form-fields)
- [web.dev Learn Forms: Design Basics](https://web.dev/learn/forms/design-basics)
- [web.dev Learn Forms: Validation](https://web.dev/learn/forms/validation)
- [web.dev Learn Forms: Accessibility](https://web.dev/learn/forms/accessibility)
- [web.dev Learn Forms: Autofill](https://web.dev/learn/forms/autofill)
- [web.dev Learn Forms: Styling Form Controls](https://web.dev/learn/forms/styling-form-controls)

## Course Outcomes Supported

- **CO1:** Utilize the most recent HTML elements and CSS properties to create and style webpage
  content.
- **CO2:** Plan, construct, and style webpage layouts for multiple devices and users.
- **CO3:** Construct website features commonly found on large website projects.

---

# Week 7: CSS Frameworks: Tailwind CSS & Multi-Page Reuse

## Module Learning Objectives

By the end of this module you will be able to:

1. Compare utility-first frameworks (Tailwind CSS), component libraries (Bootstrap), and native CSS
   architectures
2. Configure Tailwind CSS v4 with custom brand design tokens using `@theme` inside Vite
3. Style a responsive, accessible multi-section webpage using Tailwind utility classes and state
   variants
4. Explain strategies for reusing shared headers and footers across multi-page websites

## Assessments

- Quiz 7: Utility-first vs. semantic CSS tradeoffs, `@theme` tokens, multi-page component reuse, and
  choosing when to use a framework
- Assignment 7: Responsive business pricing and services page built with Tailwind CSS v4 and custom
  `@theme` tokens

## Activities

- Video: Tailwind CSS v4 with Vite and `@theme` customization
- Video: Sharing navigation and footers across multi-page sites without copy-paste drift

## Learning Materials

- [Tailwind CSS Documentation: Styling with Utility Classes](https://tailwindcss.com/docs/styling-with-utility-classes)
- [Tailwind CSS Documentation: Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Tailwind CSS Documentation: Theme Variables](https://tailwindcss.com/docs/theme)
- [MDN: Using Custom Elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)

## Course Outcomes Supported

- **CO1:** Utilize the most recent HTML elements and CSS properties to create and style webpage
  content.
- **CO3:** Construct website features commonly found on large website projects.

---

# Week 8: SEO, Performance & Site Management

## Module Learning Objectives

By the end of this module you will be able to:

1. Configure technical and social SEO metadata (`<title>`, meta descriptions, canonical links, Open
   Graph tags)
2. Author valid JSON-LD structured data (`Schema.org`) plus `robots.txt` and `sitemap.xml`
3. Diagnose and improve Core Web Vitals (LCP and CLS) by optimizing images, lazy loading, and web
   fonts
4. Scaffold and deploy the initial multi-page structure of the Final Project to CloudFront

## Assessments

- Quiz 8: Core Web Vitals (LCP/CLS), hero image loading strategy, JSON-LD, `robots.txt` vs.
  `sitemap.xml`, and semantic SEO
- Assignment 8: SEO and performance remediation of a starter business site to Lighthouse 90+ across
  all categories
- Final Project Milestone 3: Initial Structure & Test Deployment (live CloudFront URL)

## Activities

- Video: Technical SEO, Open Graph previews, and JSON-LD for local businesses
- Video: Reading Lighthouse reports and fixing LCP and CLS in DevTools

## Learning Materials

- [web.dev Learn HTML: Metadata](https://web.dev/learn/html/metadata)
- [web.dev Learn Performance: Why Speed Matters](https://web.dev/learn/performance/why-speed-matters)
- [web.dev Learn Performance: General HTML Performance](https://web.dev/learn/performance/general-html-performance)
- [web.dev Learn Performance: Image Performance](https://web.dev/learn/performance/image-performance)
- [web.dev Learn Performance: Lazy-Load Images and Iframes](https://web.dev/learn/performance/lazy-load-images-and-iframe-elements)
- [web.dev Learn Performance: Optimize Web Fonts](https://web.dev/learn/performance/optimize-web-fonts)
- [Google Search Central: SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

## Course Outcomes Supported

- **CO3:** Construct website features commonly found on large website projects.
- **CO4:** Integrate site management concepts such as SEO and accessibility into a website’s plan,
  layout, and design.

---

# Week 9: Developer Portfolio & Production Launch Concepts

## Module Learning Objectives

By the end of this module you will be able to:

1. Plan, design, and deploy a personal web developer portfolio highlighting live projects and
   concise technical case studies
2. Explain how custom domains, DNS records, HTTPS/TLS, and CDNs work together to serve a production
   website

## Assessments

- Quiz 9: Technical case studies, DNS, HTTPS on static sites, and CDN fundamentals
- Assignment 9: Personal Web Developer Portfolio deployed to CloudFront and linking live course
  projects

## Activities

- Video: Designing a focused junior web developer portfolio and writing strong READMEs/case studies
- Video: Domains, DNS, HTTPS, and how CloudFront serves your site

## Learning Materials

- [web.dev Learn Responsive Design: UI Patterns](https://web.dev/learn/design/ui-patterns)
- [MDN: Publishing Your Website](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website)

## Course Outcomes Supported

- **CO2:** Plan, construct, and style webpage layouts for multiple devices and users.
- **CO4:** Integrate site management concepts such as SEO and accessibility into a website’s plan,
  layout, and design.

---

# Week 10: Final Project Workshop & Pre-Launch Auditing

## Module Learning Objectives

By the end of this module you will be able to:

1. Execute a complete pre-launch QA pass covering HTML/CSS validation, keyboard accessibility, axe
   DevTools, Lighthouse, and cross-browser verification
2. Review a Pull Request diff (including evaluating GitHub Copilot PR review feedback) before
   shipping

## Assessments

- Quiz 10: Pre-launch QA, accessibility and SEO verification, cross-browser checks, and diff review

## Activities

- Video: Walkthrough of the instructor reference Final Project and full pre-launch audit pass

## Learning Materials

- Instructor reference Final Project (`examples/final-project/`)

## Course Outcomes Supported

- **CO1, CO2, CO3, CO4** (comprehensive synthesis and quality verification)

---

# Week 11: Final Project Review & Approval (Finals Week)

## Module Learning Objectives

By the end of this module you will be able to:

1. Deliver a production-ready, accessible, responsive, SEO-hardened multi-page business website
   showcased from a live developer portfolio
2. Respond to Pull Request code review feedback cleanly and iteratively before final approval

## Assessments

- Final Project Milestone 4: Initial PR due Monday, March 15; instructor review returned Wednesday,
  March 17; final fixes and PR approval by Friday, March 19

## Activities

- Structured GitHub Pull Request code review and revision cycle

## Learning Materials

- No new reading

## Course Outcomes Supported

- **CO1, CO2, CO3, CO4** (all four course outcomes demonstrated in the capstone website)
