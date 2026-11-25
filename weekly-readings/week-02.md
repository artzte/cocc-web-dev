# Week 2 Reading Summary: Modern CSS Architecture & Extension Tools

**Sources:**

- [web.dev Learn CSS: The Cascade](https://web.dev/learn/css/the-cascade)
- [web.dev Learn CSS: Specificity](https://web.dev/learn/css/specificity)
- [web.dev Learn CSS: Custom Properties](https://web.dev/learn/css/custom-properties)
- [web.dev Learn CSS: Nesting](https://web.dev/learn/css/nesting)
- [web.dev Learn CSS: Functions](https://web.dev/learn/css/functions)
- [web.dev Learn CSS: Logical Properties](https://web.dev/learn/css/logical-properties)
- [MDN: `@layer`](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)

---

### 1. The Cascade, Specificity, and `@layer`

- When multiple CSS rules match the same element, the browser resolves conflicts in order of:
  1. Origin & importance (`!important`)
  2. **Cascade layers (`@layer`)**
  3. Specificity (`#id` > `.class`/attribute/pseudo-class > element)
  4. Order of appearance
- **Cascade layers (`@layer`)** let you declare precedence up front in one line:
  `@layer reset, tokens, base, layout, components;` A single class selector in a later layer
  (`components`) cleanly beats a higher-specificity selector in an earlier layer (`base`),
  eliminating the need for `!important` hacks.
- **Zero-specificity helpers**: `:where(...)` contributes `0` specificity (great for resets and base
  defaults), while `:is(...)` takes the highest specificity in its selector list.

---

### 2. Design Tokens with CSS Custom Properties

- Custom properties (`--color-brand`, `--space-md`) are **live runtime variables** inherited down
  the DOM tree—unlike Sass variables (`$brand`), which disappear at compile time.
- Because they are live in the browser, you can override a few tokens inside
  `@media (prefers-color-scheme: dark)` or on a single component class (`.featured`) and every rule
  referencing those tokens updates automatically.
- Always pair tokens with a fallback when helpful (`var(--color-accent, #2c5367)`).

---

### 3. Native CSS Nesting

- Browsers now support CSS nesting natively—no Sass compiler required:
  ```css
  .service-card {
    padding: var(--space-md);

    & .card-title {
      margin-block: 0 var(--space-xs);
    }

    &:hover {
      border-color: var(--color-accent);
    }
  }
  ```
- **Keep nesting shallow (2–3 levels max).** Deeply nested selectors produce high specificity and
  fragile stylesheets that break whenever HTML structure shifts.

---

### 4. Fluid Sizing Functions & Logical Properties

- **`clamp(min, preferred, max)`** scales typography and spacing smoothly across viewports without
  scattered media queries—for example, `font-size: clamp(1.75rem, 3.5vw + 1rem, 2.75rem);`.
- **`min()` and `max()`** let containers stay fluid while respecting caps, such as
  `width: min(100% - 2rem, 68rem);`.
- **Logical properties** replace physical directions (`left`/`right`/`top`/`bottom`) with
  writing-mode-aware axes:
  - `inline` axis (horizontal in English): `margin-inline`, `padding-inline`, `border-inline-start`
  - `block` axis (vertical in English): `margin-block`, `padding-block`

---

### 5. Light/Dark Theming & CSS Extension Languages

- **Theming**: Combine `color-scheme: light dark;` on `:root` with either the modern
  `light-dark(lightColor, darkColor)` function or `@media (prefers-color-scheme: dark)` token
  overrides.
- **Sass & PostCSS in context**: For over a decade, preprocessors like Sass/SCSS and LESS were
  essential because plain CSS lacked variables, nesting, and color math. Modern native CSS now
  handles most of those jobs directly. You will still encounter Sass and PostCSS in existing
  production repositories (for legacy mixins, loops, or bundling/autoprefixing), so knowing how they
  relate to native CSS makes you fluent in both older and newer codebases.
