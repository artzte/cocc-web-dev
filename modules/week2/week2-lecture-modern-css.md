## Modern CSS Architecture & Extension Tools

If you have ever added `!important` to a CSS rule just to make a color change stick, you have met a
specificity war. On a multi-page business site, unstructured CSS turns small design tweaks into a
game of whack-a-mole.

In this lecture we look at how modern native CSS solves stylesheet organization—using `@layer`,
custom properties, native nesting, `clamp()`, logical properties, and built-in dark mode—and how
those features compare to older CSS preprocessors like Sass.

---

### Key Lecture Topics

1. **The Cascade & `@layer`**: Controlling precedence explicitly with
   `@layer reset, tokens, base, layout, components;` so component styles cleanly win over base
   styles without high specificity or `!important`.
2. **Design Tokens via CSS Custom Properties**: Defining palette, typography, and spacing tokens
   once in `:root`, and overriding them cleanly for dark mode or component variants.
3. **Native CSS Nesting**: Writing concise, grouped component rules natively without a preprocessor,
   while staying shallow (2–3 levels max).
4. **Fluid Sizing (`clamp()`, `min()`, `max()`)**: Replacing jagged breakpoint font jumps with
   smooth fluid scaling.
5. **Logical Properties**: Using `margin-inline`, `padding-block`, and `border-inline-start` so
   spacing describes document flow rather than fixed left/right edges.
6. **Light/Dark Theming**: Supporting `prefers-color-scheme` with `color-scheme: light dark` and
   either `light-dark()` or `@media (prefers-color-scheme: dark)`.
7. **CSS Extension Languages (Sass & PostCSS)**: Why Sass existed, what native CSS has absorbed, and
   what to expect when maintaining older projects.

---

### Modern Native CSS vs. Legacy Preprocessor Patterns

| Problem                    | Legacy Sass / Preprocessor Pattern     | Modern Native CSS Equivalent                            |
| :------------------------- | :------------------------------------- | :------------------------------------------------------ |
| Shared colors & spacing    | `$brand: #1f3d4d;` (compile-time)      | `--color-brand: #1f3d4d;` (live runtime variable)       |
| Grouping component styles  | Sass nested blocks (`.card { h3 {} }`) | Native CSS nesting (`.card { & .title {} }`)            |
| Dark mode theming          | Separate compiled stylesheet / classes | `color-scheme: light dark;` + `light-dark()` / `@media` |
| Avoiding `!important` wars | Rigid BEM naming or deep overrides     | `@layer reset, tokens, base, layout, components;`       |
| Responsive heading sizes   | Multiple `@media` font-size steps      | `font-size: clamp(1.75rem, 3.5vw + 1rem, 2.5rem);`      |

#### Layered & Tokenized CSS Example

```css
@layer reset, tokens, base, layout, components;

@layer tokens {
  :root {
    color-scheme: light dark;
    --color-bg: light-dark(#f8f9fa, #12171c);
    --color-surface: light-dark(#ffffff, #1b232b);
    --color-text: light-dark(#1c242b, #e8eef2);
    --color-brand: light-dark(#1f3d4d, #7ab3cf);
    --color-accent: light-dark(#b5542b, #e07a52);
    --space-sm: 0.75rem;
    --space-md: 1.25rem;
    --space-lg: 2.5rem;
  }
}

@layer components {
  .service-card {
    background-color: var(--color-surface);
    padding-block: var(--space-md);
    padding-inline: var(--space-md);

    & .card-title {
      margin-block: 0 var(--space-sm);
    }

    &.featured {
      border: 2px solid var(--color-accent);
    }
  }
}
```

---

### Resources & References

- **Lecture Guide**:
  - [Week 2 Lecture Guide: Modern CSS Architecture & Extension Tools](../../lectures/week2-modern-css.md)
- **Readings**:
  - [web.dev Learn CSS: The Cascade](https://web.dev/learn/css/the-cascade)
  - [web.dev Learn CSS: Specificity](https://web.dev/learn/css/specificity)
  - [web.dev Learn CSS: Custom Properties](https://web.dev/learn/css/custom-properties)
  - [web.dev Learn CSS: Nesting](https://web.dev/learn/css/nesting)
  - [web.dev Learn CSS: Functions](https://web.dev/learn/css/functions)
  - [web.dev Learn CSS: Logical Properties](https://web.dev/learn/css/logical-properties)
  - [Week 2 Reading Summary](../../weekly-readings/week-02.md)
- **MDN References**:
  - [MDN: `@layer`](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)
  - [MDN: Using CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
  - [MDN: Using CSS Nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
  - [MDN: `clamp()`](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)
  - [MDN: `light-dark()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark)
- **Fixture & Assignment**:
  - [Week 2 Unorganized Stylesheet Fixture](../../examples/week2/README.md)
  - [Week 2 Assignment: Modern CSS Architecture Refactor](week2-assignment-css-architecture.md)
