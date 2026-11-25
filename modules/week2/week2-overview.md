## Overview of Week 2: Modern CSS Architecture & Extension Tools

Taming the CSS cascade with `@layer`, replacing hardcoded values with CSS custom property design
tokens, writing cleaner rules with native nesting and fluid functions, and understanding where Sass
and PostCSS fit today.

In Week 1, we cleaned up HTML structure and got our Git, Vite, Vitest, and linting workflow running.
This week we turn to CSS architecture. On small one-page projects, throwing rules into a single
stylesheet works fine—until a site grows to five pages, someone adds an ID selector, someone else
fights it with `!important`, and changing one brand color requires find-and-replace across 40 lines.

Modern native CSS gives us clean tools to prevent that mess—most of the same capabilities that used
to require a preprocessor like Sass.

> **Holiday due-date note:** Monday, January 18 is Martin Luther King Jr. Day (COCC closed), so Week
> 2's quiz and assignment are due **Tuesday, January 19, 2027 at 11:59 PM**.

---

### Part 1: Controlling the Cascade & Design Tokens

- **Cascade Layers (`@layer`)**: Declaring explicit stylesheet precedence
  (`reset -> tokens -> base -> layout -> components`) so you never reach for `!important` to win a
  specificity fight.
- **Low-Specificity Selectors**: Keeping selectors flat and using `:is()` / `:where()`
  intentionally.
- **CSS Custom Properties**: Centralizing colors, spacing, and typography as live runtime design
  tokens in `:root` (and overriding tokens cleanly for dark mode or featured variants).

### Part 2: Modern Native CSS Syntax & Extension Languages

- **Native CSS Nesting**: Grouping related component rules cleanly while keeping nesting shallow
  (2–3 levels max).
- **Fluid Functions & Logical Properties**: Scaling type smoothly with `clamp()` and replacing
  physical `left`/`right`/`top`/`bottom` spacing with `margin-inline` and `padding-block`.
- **Light/Dark Theming**: Supporting system color preferences with `color-scheme: light dark`,
  `light-dark()`, or `@media (prefers-color-scheme: dark)`.
- **CSS Extension Languages (Sass & PostCSS)**: Why teams adopted preprocessors historically, what
  native CSS has absorbed, and what to recognize when you inherit an older codebase.

---

### Module Objectives

By the end of this module you will be able to:

- Organize stylesheets using CSS cascade layers (`@layer`) and low-specificity selectors.
- Define reusable design tokens (color, spacing, typography) using CSS custom properties.
- Write cleaner stylesheets using native CSS nesting, logical properties, and fluid sizing functions
  (`clamp()`, `min()`, `max()`).
- Implement automatic light and dark theming using system color preferences.
- Explain the role of CSS extension languages (Sass, PostCSS) and how modern native CSS compares.

---

### Week 2 Activities & Materials

1. **Reading Assignment**:
   - [web.dev Learn CSS: The Cascade](https://web.dev/learn/css/the-cascade)
   - [web.dev Learn CSS: Specificity](https://web.dev/learn/css/specificity)
   - [web.dev Learn CSS: Custom Properties](https://web.dev/learn/css/custom-properties)
   - [web.dev Learn CSS: Nesting](https://web.dev/learn/css/nesting)
   - [web.dev Learn CSS: Functions](https://web.dev/learn/css/functions)
   - [web.dev Learn CSS: Logical Properties](https://web.dev/learn/css/logical-properties)
   - Review the [Week 2 Reading Summary](../../weekly-readings/week-02.md).
2. **Concept Lecture**:
   - [Week 2 Lecture: Modern CSS Architecture & Extension Tools](week2-lecture-modern-css.md)
   - [Lecture Guide: Modern CSS Architecture & Extension Tools](../../lectures/week2-modern-css.md)
3. **Fixture & DevTools Exploration**:
   - Inspect the [Week 2 Unorganized Stylesheet Fixture](../../examples/week2/README.md)
     ([`index.html`](../../examples/week2/index.html) and
     [`messy-styles.css`](../../examples/week2/messy-styles.css)).
4. **Assessment — Quiz 2**:
   - Complete [Week 2 Quiz](week2-quiz.md) on Canvas. Due **Tuesday, January 19, 2027 at 11:59 PM**
     _(shifted for MLK Day)_.
5. **Assignment 2 — Modern CSS Architecture Refactor**:
   - Complete
     [Week 2 Assignment: Modern CSS Architecture Refactor](week2-assignment-css-architecture.md),
     verify with `npm run check`, and submit your GitHub PR URL on Canvas (tagging **artzte** as
     reviewer). Due **Tuesday, January 19, 2027 at 11:59 PM** _(shifted for MLK Day)_.

---

### Course Outcomes Supported

- **CO1**: Utilize the most recent HTML elements and CSS properties to create and style webpage
  content.
- **CO2**: Plan, construct, and style webpage layouts for multiple devices and users.
