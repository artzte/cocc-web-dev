## Week 2 Quiz: Modern CSS Architecture & Extension Tools

### Instructions

Answer each of the following five questions in a short essay response. Explain the concepts in your
own words, and feel free to include brief examples.

---

### Question 1: Cascade Layers (`@layer`)

Based on [web.dev Learn CSS: The Cascade](https://web.dev/learn/css/the-cascade) and
[MDN: `@layer`](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer), explain how declaring
`@layer` order helps prevent specificity wars and eliminates the need for `!important`.

---

### Question 2: CSS Custom Properties vs. Preprocessor Variables

As discussed in [web.dev Learn CSS: Custom Properties](https://web.dev/learn/css/custom-properties),
what is the key difference between a native CSS custom property (`--color-bg`) and a compile-time
preprocessor variable (like `$bg` in Sass) when implementing dark mode or component variants?

---

### Question 3: Native CSS Nesting Discipline

In [web.dev Learn CSS: Nesting](https://web.dev/learn/css/nesting), browsers now support nesting CSS
rules natively. Explain why it is still a bad idea to nest selectors five or six levels deep.

---

### Question 4: Fluid Sizing with `clamp()`

Based on [web.dev Learn CSS: Functions](https://web.dev/learn/css/functions), explain what the three
arguments inside `clamp(min, preferred, max)` do and why `clamp()` is often cleaner than writing
multiple `@media` breakpoints for heading sizes.

---

### Question 5: Logical Properties

As discussed in
[web.dev Learn CSS: Logical Properties](https://web.dev/learn/css/logical-properties), explain the
difference between `margin-inline` / `padding-block` and physical properties like `margin-left` /
`padding-top`.
