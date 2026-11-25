## Week 2 Assignment: Modern CSS Architecture Refactor

In this assignment, you will refactor a messy legacy stylesheet for **High Desert Bike & Ski Works**
into a clean, maintainable modern CSS architecture. The HTML is already semantically clean—your
entire focus this week is `src/styles/main.css` (and your starter tests).

Notice the problems baked into the starting stylesheet (`examples/week2/messy-styles.css`): repeated
hardcoded hex colors, `#main-content` ID selectors creating specificity fights, `!important` hacks
to override earlier rules, brittle fixed-pixel typography with manual breakpoint jumps, physical
margin/padding properties, and zero dark-mode support.

Submit the URL of your Pull Request adding your completed `projects/week2` folder on Canvas, and tag
**artzte** as a reviewer on GitHub.

> **Holiday due-date note:** Monday, January 18 is Martin Luther King Jr. Day (COCC closed), so this
> assignment is due **Tuesday, January 19, 2027 at 11:59 PM**.

---

### Provided Fixture

Copy the starting HTML and stylesheet from [`examples/week2/`](../../examples/week2/README.md):

- [`examples/week2/index.html`](../../examples/week2/index.html) -> copy into
  `projects/week2/index.html`
- [`examples/week2/messy-styles.css`](../../examples/week2/messy-styles.css) -> copy into
  `projects/week2/src/styles/main.css`

```css
/* Excerpt from examples/week2/messy-styles.css — retrieve the full file linked above */
#main-content .service-card {
  background-color: #ffffff;
  border: 1px solid #d4dde3;
  ...
}

/* Specificity war! Someone used !important to beat #main-content .service-card */
.featured {
  border: 2px solid #b5542b !important;
  background-color: #fff8f4 !important;
}
```

---

### Requirements

1. **Cascade Layers (`@layer`)**:
   - Declare an explicit layer order at the top of `src/styles/main.css` (for example:
     `@layer reset, tokens, base, layout, components;`) and organize all rules into those layers.
2. **Eliminate Specificity Fights**:
   - Remove **all** `!important` declarations from `src/styles/main.css`.
   - Remove `#main-content` ID prefixes from your CSS selectors; keep selectors flat and predictable
     so `.featured` and `.shop-notes` style cleanly through normal cascade and layer order.
3. **Design Tokens (CSS Custom Properties)**:
   - Define your color palette (background, surface, text, muted text, brand, accent, border),
     spacing scale, radius, and container max-width as CSS custom properties on `:root` inside
     `@layer tokens`.
   - Reference those custom properties (`var(--...)`) throughout `base`, `layout`, and `components`
     rather than repeating raw hex values.
4. **Native CSS Nesting**:
   - Use native CSS nesting to group related component rules cleanly (for example, inside
     `.site-header`, `.service-card`, `.btn`, `.callout`, and `.site-footer`) without nesting deeper
     than 3 levels.
5. **Fluid Typography & Sizing (`clamp()`)**:
   - Replace the fixed pixel heading sizes and the `@media (max-width: 640px)` heading breakpoint
     with fluid `clamp()` sizing on `h1` and `h2` (and optionally body/hero lead or section
     spacing).
   - Keep the container width fluid with `min()` (e.g.,
     `width: min(100% - 2rem, var(--max-width))`).
6. **Logical Properties**:
   - Replace physical directional spacing and border properties
     (`margin-left`/`right`/`top`/`bottom`, `padding-left`/`right`/`top`/`bottom`, `border-left`)
     with logical equivalents (`margin-inline`, `margin-block`, `padding-inline`, `padding-block`,
     `border-inline-start`).
7. **Automatic Light & Dark Mode**:
   - Support dark mode cleanly so switching **prefers-color-scheme: dark** in Chrome DevTools
     produces a readable, high-contrast dark palette.
   - Either modern approach is accepted:
     - `color-scheme: light dark;` with `light-dark(...)` token values on `:root`, **or**
     - `color-scheme: light dark;` with `@media (prefers-color-scheme: dark)` overriding your
       `:root` color tokens.
8. **Starter Tests & Clean Checks**:
   - Update `test/starter.test.js` to verify your architectural constraints (cascade layers, zero
     `!important`, no `#main-content` ID selectors, custom properties, `clamp()`, logical
     properties, and dark-mode support).
   - Ensure `npm run check` passes cleanly (`html-validate`, `stylelint`, `prettier --check`,
     Vitest, and `vite build`).

---

### Suggested Example Tests

**Note:** These are starter tests from my own attempt at this assignment. You may need to adjust
token names or assertions slightly to match your own naming.

```javascript
import { readFileSync } from 'node:fs'
import { describe, it, expect } from 'vitest'
import '../src/styles/main.css'

const css = readFileSync('src/styles/main.css', 'utf8')

describe('Week 2 CSS architecture refactor', () => {
  it('declares explicit cascade layers', () => {
    expect(css, 'declares @layer order').toMatch(/@layer\s+[\w\s,-]+;/)
    expect(css, 'contains @layer blocks').toMatch(/@layer\s+\w+\s*\{/)
  })

  it('eliminates !important and ID selector fights', () => {
    expect(css, 'contains zero !important declarations').not.toMatch(/!important/i)
    expect(css, 'removes #main-content ID selectors').not.toContain('#main-content')
  })

  it('defines and references CSS custom property design tokens', () => {
    const customProps = css.match(/--[\w-]+\s*:/g) ?? []
    expect(customProps.length, 'defines at least 8 design tokens').toBeGreaterThanOrEqual(8)
    expect(css, 'references tokens with var()').toMatch(/var\(--[\w-]+/)
  })

  it('uses fluid clamp() sizing and logical properties', () => {
    expect(css, 'uses clamp() for fluid typography').toMatch(/clamp\(/)
    expect(css, 'uses inline/block logical properties').toMatch(
      /(margin|padding)-(inline|block)|border-inline-start/,
    )
  })

  it('supports automatic light and dark color schemes', () => {
    const hasLightDark = /light-dark\(/.test(css)
    const hasDarkMedia = /prefers-color-scheme\s*:\s*dark/.test(css)
    expect(
      hasLightDark || hasDarkMedia,
      'supports dark mode via light-dark() or prefers-color-scheme: dark',
    ).toBe(true)
  })
})
```

---

### Workflow & Submission

Run these commands from your repository root in VS Code's integrated terminal:

```bash
# 1. Switch to main and pull latest changes (including your merged Week 1 PR)
git checkout main
git pull

# 2. Create your week2 branch
git checkout -b week2

# 3. Scaffold projects/week2 from the starter kit (preferred; scripts/mpf.sh week2 also works in Bash)
npm run weekly:create week2

# 4. Copy examples/week2/index.html -> projects/week2/index.html
#    and examples/week2/messy-styles.css -> projects/week2/src/styles/main.css,
#    then install dependencies and start Vite
cd projects/week2
npm install
npm run dev

# 5. In a second terminal tab inside projects/week2, run live tests while you edit
npm run test:watch

# 6. Format, lint, test, and verify the production build before committing
npm run format
npm run check

# 7. Stage, commit, and push your branch
git add .
git commit -m "feat(week2): refactor High Desert Bike & Ski stylesheet with modern CSS"
git push -u origin week2
```

Open a Pull Request on GitHub targeting `main`, optionally run an adversarial AI code review on your
PR first (see the suggested prompt in the
[syllabus](../syllabus/syllabus.md#artificial-intelligence-policy)), tag **artzte** as reviewer, and
submit the PR URL on Canvas.

**Deadline:** Tuesday, January 19, 2027 at 11:59 PM _(shifted one day for MLK Day)_.
