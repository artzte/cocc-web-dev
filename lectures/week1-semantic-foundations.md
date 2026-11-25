# Week 1 Lecture Guide: Modern Dev Workflow & Semantic Foundations

**Readings:**

- [web.dev Learn HTML: Document Structure](https://web.dev/learn/html/document-structure)
- [web.dev Learn HTML: Semantic HTML](https://web.dev/learn/html/semantic-html)
- [web.dev Learn HTML: Headings and Sections](https://web.dev/learn/html/headings-and-sections)

**Format:** Walkthrough + Live Chrome DevTools Demo (`examples/week1/div-soup.html`)  
**Duration:** ~20 Minutes  
**Prereq Context:** CIS 195 (basic HTML/CSS, multi-page linking, folder management; no prior Git or
Node assumed)

---

## Pacing & Timeline

| Time              | Section                                   | Focus / Live Demo                                                        |
| :---------------- | :---------------------------------------- | :----------------------------------------------------------------------- |
| **00:00 - 03:30** | **1. Course Framing & Modern Workflow**   | Why Git + Vite + automated checks replace FTP                            |
| **03:30 - 08:00** | **2. Cloning & Running the Starter**      | `Use this template`, `npm run weekly:create week1`, `dev` + `test:watch` |
| **08:00 - 12:30** | **3. Inspecting "Div Soup" in DevTools**  | Open `div-soup.html` -> Accessibility Tree shows zero landmarks/headings |
| **12:30 - 17:30** | **4. Live Semantic Refactor**             | Converting header/nav, main/sections/articles, aside/address, `<time>`   |
| **17:30 - 20:00** | **5. Verification & Week 1 Deliverables** | `npm run format`, `npm run check`, opening PR + tagging `artzte`         |

---

## 1. Course Framing & Modern Workflow (3.5 mins)

### Talking Points

- Welcome to CIS 295. In CIS 195 you learned how to get HTML and CSS on screen. Here we focus on
  building maintainable, accessible, responsive multi-page sites the way working web teams ship
  them.
- **Why no FTP?** With FTP you overwrite files directly on a server with no undo button and no
  record of what changed. With Git and Pull Requests, every change lives on a branch, you can
  inspect the exact diff before merging, and automated builds deploy your site cleanly.
- Mention the AI policy briefly: build the work yourself, use AI freely for local IT/setup snags,
  and try the adversarial AI code review prompt on your PRs before submitting.

---

## 2. Cloning & Running the Starter (4.5 mins)

### Live Demo Cues

1. Show `https://github.com/artzte/cocc-web-dev` -> **Use this template** -> Private repo -> adding
   `artzte` under **Settings -> Collaborators**.
2. Clone via HTTPS in VS Code's integrated terminal (no SSH key setup needed).
3. Run `npm run weekly:create week1` from the repo root. Emphasize: always use
   `npm run weekly:create` rather than copying `starter/` by hand.
4. `cd projects/week1 && npm install && npm run dev` in Tab 1; open Tab 2 and run
   `npm run test:watch`. Show how editing `index.html` and hitting Save immediately updates both the
   browser and the terminal test runner.

---

## 3. Inspecting "Div Soup" in DevTools (4.5 mins)

### Live Demo Cues

1. Copy `examples/week1/div-soup.html` and `div-soup.css` into `projects/week1/`.
2. Show the rendered Deschutes Trail Coffee page: "At first glance, looks totally fine!"
3. Open Chrome DevTools -> **Elements** -> **Accessibility** pane (and toggle the full Accessibility
   Tree button in Elements).
4. Point out what's broken:
   - Everything is `generic` (`div`). No `banner`, no `navigation`, no `main`, no `complementary`,
     no `contentinfo`.
   - Zero headings in the heading outline—screen-reader users who navigate by headings (`H` key)
     hear nothing.
   - Navigation links and weekly hours aren't lists.
   - Dates are plain strings; contact info has no `<address>` or clickable `tel:`/`mailto:` links.
5. Toggle **Device Mode** briefly to show responsive inspection at 375px vs. 1280px.

---

## 4. Live Semantic Refactor (5 mins)

### Live Demo Cues

Walk through refactoring two sections live so students see the pattern without giving away the whole
assignment:

- **Top bar -> `<header>` + `<nav aria-label="Primary">` + `<ul>`/`<li>`**:
  - Point out why `aria-label` matters when a page has _two_ `<nav>` elements (header and footer).
  - Show how `main.css` already has `list-style: none; margin: 0; padding: 0;` on `.top-links` so
    switching `<div>` to `<ul>` keeps the horizontal layout clean.
- **Hero + first Roast Card**:
  - Hero title -> `<h1>` (the one `<h1>` on the page).
  - `#roasts` block -> `<section>` with `<h2>Current Seasonal Roasts</h2>`.
  - First roast card -> `<article>` with `<h3>Three Sisters Dawn Blend</h3>` and `<p>` tags.
  - Refresh DevTools Accessibility Tree so students immediately see `banner`, `navigation`, `main`,
    `heading level 1/2/3`, and `article` pop into place!

---

## 5. Verification & Week 1 Deliverables (2.5 mins)

### Talking Points

- Run `npm run format` and `npm run check` to show `html-validate`, `stylelint`, Prettier, Vitest,
  and Vite build all passing together.
- Briefly show what happens if you intentionally break something (e.g., duplicate `id` or invalid
  nesting) so students see `html-validate` catch it right away.
- Remind students of Week 1 due dates (**Monday, January 11, 2027 at 11:59 PM**):
  - Quiz 1 on Canvas (5 short essays in your own words).
  - Week 1 Assignment PR targeting `main` with `artzte` tagged as reviewer, PR URL pasted on Canvas.
