# Week 1 Fixture: "Div Soup" Business Homepage

This folder holds the starting markup and stylesheet for the Week 1 assignment:

- [`div-soup.html`](div-soup.html) — A Bend coffee roaster homepage built entirely out of generic
  `<div>` elements.
- [`div-soup.css`](div-soup.css) — A simple stylesheet that makes the page look finished visually
  even though its HTML semantics are broken.

## How to Use This Fixture

1. Scaffold your `projects/week1` workspace from the repo root using `npm run weekly:create week1`.
2. Copy the contents of `examples/week1/div-soup.html` into `projects/week1/index.html` and
   `examples/week1/div-soup.css` into `projects/week1/src/styles/main.css`.
3. Run `npm run dev` inside `projects/week1` and open the page in Chrome.
4. Open Chrome DevTools -> **Elements** -> **Accessibility** tab (in the side pane) and inspect the
   Accessibility Tree before you change anything. Notice how every region is a generic container
   with no landmarks, no headings, and no lists.
5. Refactor `index.html` (and adjust selectors in `src/styles/main.css` where needed) into clean
   semantic HTML5 while keeping the page visually intact.
