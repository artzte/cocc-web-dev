# Week 2 Lecture Guide: Modern CSS Architecture & Extension Tools

**Readings:**

- [web.dev Learn CSS: The Cascade](https://web.dev/learn/css/the-cascade)
- [web.dev Learn CSS: Specificity](https://web.dev/learn/css/specificity)
- [web.dev Learn CSS: Custom Properties](https://web.dev/learn/css/custom-properties)
- [web.dev Learn CSS: Nesting](https://web.dev/learn/css/nesting)
- [web.dev Learn CSS: Functions](https://web.dev/learn/css/functions)
- [web.dev Learn CSS: Logical Properties](https://web.dev/learn/css/logical-properties)

**Format:** Interactive Lecture & Live Chrome DevTools Refactor
(`examples/week2/messy-styles.css`)  
**Duration:** ~20 Minutes  
**Prereq Context:** Week 1 (semantic HTML5, Git/PR workflow, Vite + Vitest starter kit)

---

## Pacing & Timeline

| Time              | Section                                         | Focus / Live Demo                                                             |
| :---------------- | :---------------------------------------------- | :---------------------------------------------------------------------------- |
| **00:00 - 03:30** | **1. Diagnosing a Specificity War**             | Inspect `.featured` and `.shop-notes h2` in `messy-styles.css`                |
| **03:30 - 07:30** | **2. Cascade Layers (`@layer`)**                | Declare `@layer reset, tokens, base, layout, components;`—delete `!important` |
| **07:30 - 11:30** | **3. Design Tokens & Dark Mode**                | `:root` custom properties + `light-dark()` / DevTools Rendering toggle        |
| **11:30 - 15:30** | **4. Native Nesting, `clamp()`, Logical Props** | Clean `.service-card`, fluid `h1`/`h2`, `padding-block`/`margin-inline`       |
| **15:30 - 18:00** | **5. Sass & PostCSS in Context**                | Why preprocessors existed, what native CSS absorbed, reading legacy SCSS      |
| **18:00 - 20:00** | **6. Wrap-Up & Week 2 Deliverables**            | `stylelint` + `test:watch`, Tuesday Jan 19 MLK Day deadline                   |

---

## 1. Diagnosing a Specificity War (3.5 mins)

### Live Demo Cues

1. Load `examples/week2/index.html` + `messy-styles.css` in Vite (`npm run dev`).
2. Open Chrome DevTools -> **Elements** -> inspect the middle card (`.service-card.featured`).
3. Hover over `#main-content .service-card` and `.featured` in the Styles pane to show Chrome's
   specificity tooltip `(1, 1, 0)` vs. `(0, 1, 0)`.
4. Uncheck `!important` on `.featured` right in DevTools so students watch the orange featured
   border vanish—explaining _why_ developers fall into the `!important` trap when selectors
   escalate.

---

## 2. Cascade Layers (`@layer`) (4 mins)

### Talking Points & Live Demo

- Show the cascade priority order: **Origin & `!important` -> `@layer` -> Specificity -> Source
  order**.
- Add `@layer reset, tokens, base, layout, components;` at the top of `main.css`.
- Move base heading rules into `@layer base` and `.service-card` / `.featured` into
  `@layer components`.
- Remove `#main-content` and remove `!important` from `.featured`—it immediately works cleanly!
- Brief note on `:where()` (0 specificity) vs. `:is()` (inherits highest specificity in its list).

---

## 3. Design Tokens & Dark Mode (4 mins)

### Talking Points & Live Demo

- Point out how `#1f3d4d` appears 7 times in `messy-styles.css`. If the client changes their brand
  color, you have to hunt down every occurrence.
- Extract tokens into `@layer tokens { :root { ... } }` (`--color-bg`, `--color-surface`,
  `--color-text`, `--color-brand`, `--color-accent`, `--space-*`).
- Add `color-scheme: light dark;` and demonstrate `light-dark(#f8f9fa, #12171c)` (and mention
  `@media (prefers-color-scheme: dark)` works just as cleanly if they prefer grouping dark tokens in
  one block).
- Open Chrome DevTools Command Menu (`Ctrl+Shift+P` / `Cmd+Shift+P`) -> **Show Rendering** -> toggle
  **prefers-color-scheme: dark** live so students watch the entire page flip cleanly without
  touching a single component rule!

---

## 4. Native Nesting, `clamp()`, and Logical Properties (4 mins)

### Live Demo Cues

- **Native CSS nesting**: Consolidate `.service-card`, `.service-card .card-title`,
  `.service-card .card-meta`, and `.service-card.featured` into one nested block. Warn against
  nesting more than 2–3 levels deep.
- **Fluid typography**: Replace the 40px/26px `@media (max-width: 640px)` jump on `h1` with
  `font-size: clamp(1.75rem, 3.5vw + 1rem, 2.5rem);`. Drag the DevTools Device Mode width handle
  slowly from 360px to 1200px and show the computed `font-size` scaling smoothly.
- **Logical properties**: Convert `margin-left`/`margin-right` to `margin-inline`,
  `padding-top`/`padding-bottom` to `padding-block`, and `.callout`'s `border-left` to
  `border-inline-start`. Briefly explain why writing-mode-aware properties matter for
  internationalization and cleaner shorthand.

---

## 5. Sass & PostCSS in Context (2.5 mins)

### Talking Points

- Satisfying the catalog's "CSS extension languages" outcome honestly:
  - For 10+ years, **Sass (SCSS)** and **LESS** were mandatory because CSS had no variables, no
    nesting, and weak color math.
  - Today, native CSS has custom properties (better than Sass variables because they are live at
    runtime!), native nesting, `@layer`, `clamp()`, and `color-mix()` / `light-dark()`.
  - You will still see `.scss` files and **PostCSS** pipelines in existing company repos (for legacy
    mixins, loops, or toolchains like Tailwind CSS—which we'll use in Week 7).
  - Rule of thumb: reach for modern native CSS first; understand Sass/PostCSS well enough to read
    and maintain them when you encounter them on the job.

---

## 6. Wrap-Up & Week 2 Deliverables (2 mins)

- Remind students to run `npm run test:watch` in a second terminal tab while refactoring and
  `npm run format` + `npm run check` (which runs Stylelint!) before pushing.
- Call out the **MLK Day deadline shift**: Quiz 2 and Assignment 2 are due **Tuesday, January 19,
  2027 at 11:59 PM** (and remember to run `git checkout main && git pull` before creating your
  `week2` branch!).
