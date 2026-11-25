# Week 1 Reading Summary: Modern Dev Workflow & Semantic Foundations

**Sources:**

- [web.dev Learn HTML: Document Structure](https://web.dev/learn/html/document-structure)
- [web.dev Learn HTML: Semantic HTML](https://web.dev/learn/html/semantic-html)
- [web.dev Learn HTML: Headings and Sections](https://web.dev/learn/html/headings-and-sections)

---

### 1. Document Structure and Metadata Basics

- Every HTML5 document starts with `<!doctype html>` so browsers render in standards mode rather
  than legacy quirks mode.
- The root `<html lang="en">` declares the page language—critical for screen readers choosing the
  right pronunciation rules and for search engines indexing content.
- Inside `<head>`, `<meta charset="UTF-8">` and
  `<meta name="viewport" content="width=device-width, initial-scale=1.0">` establish text encoding
  and proper mobile viewport scaling before any content paints.
- A descriptive `<title>` identifies the page in browser tabs, bookmarks, history entries, and
  search results.

---

### 2. Why Semantic HTML Matters

- **Semantic elements describe meaning, not appearance.** A `<div>` or `<span>` says nothing about
  what its content represents; `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`,
  and `<footer>` expose the page's architecture directly to browsers, assistive technologies, and
  search crawlers.
- **The Accessibility Tree**: Browsers build both a visual render tree and an Accessibility Tree
  from your HTML. Native semantic elements automatically populate landmark roles, heading levels,
  and list counts without extra ARIA attributes.
- **Better maintainability**: Reading `<nav><ul>...</ul></nav>` or `<article><h3>...</h3></article>`
  tells the next developer (including future you) what each block does at a glance.

---

### 3. Core Landmark Elements

| Element     | Role / Meaning                                                                    | Typical Usage                                           |
| :---------- | :-------------------------------------------------------------------------------- | :------------------------------------------------------ |
| `<header>`  | Introductory content or branding for the page (or for an `<article>`/`<section>`) | Site logo/name and primary navigation bar               |
| `<nav>`     | Major block of navigation links (label with `aria-label` when a page has >1)      | Primary top nav, footer nav, breadcrumbs                |
| `<main>`    | Dominant unique content of the document (**one visible `<main>` per page**)       | Wraps hero, product listings, story, events             |
| `<section>` | Thematic grouping of content, normally with its own heading                       | "Current Seasonal Roasts", "How We Roast", "Events"     |
| `<article>` | Self-contained composition that makes sense on its own (syndicatable/reusable)    | Individual product card, blog post, or event listing    |
| `<aside>`   | Tangentially related or complementary information                                 | Cafe hours/location sidebar, callout box, related links |
| `<footer>`  | Closing metadata for the page or a section                                        | Copyright, secondary nav, contact links                 |

---

### 4. Headings, Lists, and Text Semantics

- **Heading hierarchy (`<h1>`–`<h6>`)**:
  - Use **one `<h1>`** for the page's primary title, then nest `<h2>`, `<h3>`, etc. in logical order
    without skipping levels (don't jump from `<h1>` straight to `<h4>` just to get smaller text).
  - Control visual font size with CSS—never pick a heading tag based on how big it looks by default.
- **Use real lists (`<ul>`, `<ol>`, `<dl>`)**: Navigation links, weekly hours, and feature lists
  belong in list elements so screen readers announce item counts and users can navigate between them
  efficiently.
- **Targeted inline semantics**: Use `<time datetime="...">` for machine-readable dates and
  `<address>` for contact information belonging to the business or page author.
