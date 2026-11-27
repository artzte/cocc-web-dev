## Week 1 Assignment: Environment Setup & Semantic Refactor

In this assignment, you will set up your personal course repository and refactor a visually styled
"div soup" business homepage—**Deschutes Trail Coffee**—into clean, valid semantic HTML5 without
breaking its visual layout.

Before editing anything, open the starting fixture in Chrome DevTools and look at the Accessibility
Tree. You will see that even though the page looks tidy, it has zero landmarks, zero headings, and
zero lists. Your job is to fix the underlying HTML structure so both sighted visitors and assistive
technologies get a well-structured page.

Submit the URL of your Pull Request adding your completed `projects/week1` folder on Canvas, and tag
**artzte** as a reviewer on GitHub.

---

### Provided Fixture

Copy the starting markup and styles from [`examples/week1/`](../../examples/week1/README.md):

- [`examples/week1/div-soup.html`](../../examples/week1/div-soup.html) -> copy into
  `projects/week1/index.html`
- [`examples/week1/div-soup.css`](../../examples/week1/div-soup.css) -> copy into
  `projects/week1/src/styles/main.css`

```html
<!-- Excerpt from examples/week1/div-soup.html — retrieve the full file linked above -->
<div class="top-bar">
  <div class="container top-bar-inner">
    <div class="brand">Deschutes Trail Coffee</div>
    <div class="top-links">
      <div class="link-item"><a href="#roasts">Roasts</a></div>
      ...
    </div>
  </div>
</div>
```

---

### Requirements

1. **Repository, Portfolio & Tooling Setup**:
   - Create your private course repository from the `artzte/cocc-web-dev` template and add `artzte`
     as a collaborator (see [README Getting Started](../../README.md#getting-started)).
   - Scaffold your plain HTML portfolio landing page once with `npm run weekly:create portfolio`,
     replace "Your Name" in `projects/portfolio/index.html` with your own name, and run
     `npm install` + `npm run check` inside `projects/portfolio` so `/<your-slug>` redirects to your
     live portfolio index right away.
   - Scaffold `projects/week1` using `npm run weekly:create week1`.
2. **Page-Level Landmarks**:
   - Replace the top bar with a `<header>` containing a `<nav aria-label="Primary">` (or similarly
     clear label).
   - Wrap the primary page content in a single `<main>` element.
   - Replace the hours/location sidebar with an `<aside>`.
   - Replace the bottom bar with a `<footer>` containing a labeled `<nav aria-label="Footer">` (or
     equivalent label distinguishing it from the primary nav).
3. **Sections, Articles, and Headings**:
   - Use exactly one `<h1>` for the hero title ("Small-Batch Coffee Roasted in Central Oregon").
   - Replace the major content blocks (Seasonal Roasts, How We Roast, Upcoming Cafe Events) with
     `<section>` elements and `<h2>` headings.
   - Replace each coffee roast card and each upcoming event item with an `<article>` and an `<h3>`
     heading.
   - Replace "Sourcing Standards" and "Weekly Hours" with `<h3>` headings (and "Cafe Hours &
     Location" with an `<h2>`), keeping heading levels strictly sequential with no skipped levels.
4. **Lists, Dates, and Contact Semantics**:
   - Convert both navigation link groups and the weekly hours rows into `<ul>` / `<li>` lists (a
     `<dl>` is also acceptable for the weekly hours).
   - Wrap the event dates in `<time datetime="...">` elements (e.g., `datetime="2027-01-17"`).
   - Wrap the cafe street address, phone, and email in an `<address>` element, with `tel:` and
     `mailto:` links for the phone and email.
   - Replace generic text `<div>`s inside cards, story blocks, and events with `<p>` elements.
5. **Visual Parity & Clean Checks**:
   - Adjust selectors in `src/styles/main.css` as needed (for example, resetting default margins on
     headings/lists or removing `<address>` italics) so the refactored page still looks clean at
     desktop and mobile widths.
   - `npm run check` passes cleanly (`html-validate`, `stylelint`, `prettier --check`, Vitest, and
     `vite build`).
6. **Starter Tests (`test/starter.test.js`)**:
   - Update `test/starter.test.js` so it verifies your semantic landmarks, heading hierarchy, lists,
     `<article>` count, `<time>` elements, and `<address>` element.

---

### Suggested Example Tests

**Note:** These are starter tests from my own attempt at this assignment. You may need to adjust
them slightly if you used a `<dl>` for hours or slightly different `aria-label` wording.

```javascript
import { describe, it, expect, beforeEach } from 'vitest'
import indexHtml from '../index.html?raw'

describe('Week 1 semantic refactor', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = indexHtml
  })

  it('uses core page landmarks', () => {
    expect(document.querySelector('header'), 'page has a <header>').not.toBeNull()
    expect(document.querySelector('main'), 'page has a <main>').not.toBeNull()
    expect(document.querySelector('aside'), 'page has an <aside>').not.toBeNull()
    expect(document.querySelector('footer'), 'page has a <footer>').not.toBeNull()
  })

  it('labels multiple nav landmarks', () => {
    const navs = [...document.querySelectorAll('nav')]
    expect(navs.length, 'page has primary and footer <nav> landmarks').toBeGreaterThanOrEqual(2)
    for (const nav of navs) {
      expect(
        nav.hasAttribute('aria-label') || nav.hasAttribute('aria-labelledby'),
        'each <nav> has an accessible label',
      ).toBe(true)
    }
  })

  it('has one h1 and sequential headings without skipping levels', () => {
    expect(document.querySelectorAll('h1').length, 'exactly one <h1>').toBe(1)
    expect(
      document.querySelectorAll('h2').length,
      'section and aside <h2>s',
    ).toBeGreaterThanOrEqual(4)
    expect(
      document.querySelectorAll('h3').length,
      'card, event, and sub-section <h3>s',
    ).toBeGreaterThanOrEqual(7)
    expect(document.querySelectorAll('h4, h5, h6').length, 'no skipped heading levels').toBe(0)
  })

  it('uses articles, lists, time, and address elements', () => {
    expect(document.querySelectorAll('article').length, '3 roasts + 2 events').toBe(5)
    expect(
      document.querySelectorAll('nav ul li a').length,
      'nav links live in lists',
    ).toBeGreaterThanOrEqual(8)
    expect(
      document.querySelectorAll('time[datetime]').length,
      'event dates use <time datetime>',
    ).toBe(2)
    expect(document.querySelector('address'), 'contact info uses <address>').not.toBeNull()
  })
})
```

---

### Workflow & Submission

Run these commands from your repository root in VS Code's integrated terminal:

```bash
# 1. Switch to main and pull latest changes
git checkout main
git pull

# 2. Create your week1 branch
git checkout -b week1

# 3. Scaffold your plain starter portfolio (one-time) and projects/week1
npm run weekly:create portfolio
npm run weekly:create week1

# 4. Personalize projects/portfolio/index.html with your name and verify it builds
cd projects/portfolio
npm install
npm run check
cd ../..

# 5. Copy examples/week1/div-soup.html -> projects/week1/index.html
#    and examples/week1/div-soup.css -> projects/week1/src/styles/main.css,
#    then install dependencies and start Vite
cd projects/week1
npm install
npm run dev

# 6. In a second terminal tab inside projects/week1, run live tests while you edit
npm run test:watch

# 7. Format, lint, test, and verify the production build before committing
npm run format
npm run check

# 8. Stage, commit, and push your branch
git add .
git commit -m "feat(week1): add starter portfolio and semantic HTML5 refactor"
git push -u origin week1
```

Open a Pull Request on GitHub targeting `main`, optionally run an adversarial AI code review on your
PR first (see the suggested prompt in the
[syllabus](../syllabus/syllabus.md#artificial-intelligence-policy)), tag **artzte** as reviewer, and
submit the PR URL on Canvas.

**Deadline:** Monday, January 11, 2027 at 11:59 PM.
