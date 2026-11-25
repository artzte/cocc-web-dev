## Modern Dev Workflow & Semantic Foundations

You can build a webpage out of nothing but `<div>` and `<span>` tags, style it with CSS, and make it
look clean to a sighted visitor on a desktop monitor. The problem is that every other consumer of
your page—screen readers, keyboard users, search engine crawlers, reader modes, and the next
developer who maintains the site—sees an undifferentiated pile of boxes.

This week pairs **semantic HTML5** with the **Git, Vite, and linting workflow** we will use for the
rest of the term.

---

### Key Lecture Topics

1. **Why Version Control Replaces FTP**: Why dragging files to a server with an FTP client makes it
   easy to overwrite live work with no history, whereas Git branches, diffs, and Pull Requests give
   you a clear safety net—especially on multi-file sites or when working alongside AI review tools.
2. **The Starter Kit Loop**: Running `npm run dev` (Vite live preview), `npm run test:watch` (live
   Vitest feedback), `npm run format` (Prettier), and `npm run check` (HTML/CSS lint + format +
   tests + build).
3. **HTML Document Skeleton**: `<!doctype html>`, `<html lang="en">`, `<meta charset="UTF-8">`,
   responsive viewport `<meta>`, and descriptive `<title>`.
4. **Landmarks and the Accessibility Tree**: How `<header>`, `<nav>`, `<main>`, `<section>`,
   `<article>`, `<aside>`, and `<footer>` populate the browser's Accessibility Tree automatically.
5. **Heading Hierarchy & Lists**: One `<h1>`, logical `<h2>`–`<h6>` nesting without skipped levels,
   and real `<ul>`/`<ol>` lists instead of stacked `<div>`s.
6. **Inspecting Before Editing in DevTools**: Using Chrome DevTools' Elements panel, Device Mode,
   and Accessibility pane to verify structure rather than guessing by eye.

---

### Semantic Landmarks at a Glance

| Generic Pattern                 | Semantic Replacement           | Why It Matters                                            |
| :------------------------------ | :----------------------------- | :-------------------------------------------------------- |
| `<div class="top-bar">`         | `<header>`                     | Exposes the page banner landmark                          |
| `<div class="top-links">`       | `<nav aria-label="..."><ul>`   | Lets assistive tech jump directly to navigation and links |
| `<div class="page-body">`       | `<main>`                       | Identifies the unique primary content of the page         |
| `<div class="block">`           | `<section>` (with an `<h2>`)   | Groups related content into a named document region       |
| `<div class="card">`            | `<article>`                    | Marks a self-contained item (roast card, event, post)     |
| `<div class="side-column">`     | `<aside>`                      | Separates complementary info (hours/location) from main   |
| `<div class="bottom-bar">`      | `<footer>`                     | Exposes page-level closing metadata and secondary links   |
| `<div class="event-date">`      | `<time datetime="2027-01-17">` | Gives browsers and crawlers a machine-readable date       |
| `<div class="side-text">` (biz) | `<address>`                    | Marks official contact information for the business       |

#### Quick Before / After Example

```html
<!-- Before: looks fine with CSS, meaningless to browsers and screen readers -->
<div class="top-bar">
  <div class="brand">Deschutes Trail Coffee</div>
  <div class="top-links">
    <div class="link-item"><a href="#roasts">Roasts</a></div>
    <div class="link-item"><a href="#hours">Visit</a></div>
  </div>
</div>

<!-- After: clean landmarks and list structure -->
<header class="top-bar">
  <a class="brand" href="./index.html">Deschutes Trail Coffee</a>
  <nav aria-label="Primary">
    <ul class="top-links">
      <li><a href="#roasts">Roasts</a></li>
      <li><a href="#hours">Visit</a></li>
    </ul>
  </nav>
</header>
```

---

### Resources & References

- **Lecture Guide**:
  - [Week 1 Lecture Guide: Modern Dev Workflow & Semantic Foundations](../../lectures/week1-semantic-foundations.md)
- **Readings**:
  - [web.dev Learn HTML: Document Structure](https://web.dev/learn/html/document-structure)
  - [web.dev Learn HTML: Semantic HTML](https://web.dev/learn/html/semantic-html)
  - [web.dev Learn HTML: Headings and Sections](https://web.dev/learn/html/headings-and-sections)
  - [Week 1 Reading Summary](../../weekly-readings/week-01.md)
- **MDN References**:
  - [MDN Glossary: Semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
  - [MDN: The `<main>` Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)
- **Fixture & Assignment**:
  - [Week 1 "Div Soup" Fixture](../../examples/week1/README.md)
  - [Week 1 Assignment: Semantic Refactor](week1-assignment-semantic-refactor.md)
