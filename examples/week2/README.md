# Week 2 Fixture: Unorganized Stylesheet Refactor

This folder holds the starting HTML and legacy stylesheet for the Week 2 assignment:

- [`index.html`](index.html) — A clean semantic HTML5 page for **High Desert Bike & Ski Works** (you
  do not need to rewrite this HTML).
- [`messy-styles.css`](messy-styles.css) — A real-world style "spaghetti stylesheet" with repeated
  hex colors, `#main-content` ID specificity fights, `!important` overrides, fixed pixel font sizes,
  physical `margin-left`/`padding-top` properties, and no dark mode.

## How to Use This Fixture

1. Scaffold your `projects/week2` workspace from the repo root using `npm run weekly:create week2`.
2. Copy `examples/week2/index.html` into `projects/week2/index.html` and
   `examples/week2/messy-styles.css` into `projects/week2/src/styles/main.css`.
3. Run `npm run dev` inside `projects/week2` and inspect `.featured` and `.shop-notes h2` in Chrome
   DevTools -> **Elements -> Styles** to see why `!important` was originally added.
4. Test dark mode in Chrome DevTools: open the Command Menu (`Ctrl+Shift+P` / `Cmd+Shift+P`), type
   `Show Rendering`, and toggle **Emulate CSS media feature prefers-color-scheme: dark**.
