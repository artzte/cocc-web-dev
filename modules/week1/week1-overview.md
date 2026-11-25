## Overview of Week 1: Modern Dev Workflow & Semantic Foundations

Getting your Git, GitHub, and Vite workflow running on day one, and turning visually styled "div
soup" into clean, meaningful semantic HTML5.

In CIS 195, you learned how to structure webpages with HTML, style them with CSS, and publish files
to a server. In CIS 295, we shift from classroom habits (like dragging files over FTP and wrapping
everything in generic `<div>` tags) to the tools and engineering habits used on real web teams.

This week has two halves: setting up the template repository and starter kit you will use for every
assignment this term, and revisiting HTML structure through the lens of semantics and Browser
DevTools.

---

### Part 1: Modern Front-End Workflow

- **Git & GitHub**: Creating your private course repository from the template, working on weekly
  branches, inspecting diffs, and submitting Pull Requests.
- **Starter Kit & Automation**: Running Vite for live local preview (`npm run dev`), Vitest in watch
  mode (`npm run test:watch`), Prettier formatting (`npm run format`), and HTML/CSS validation
  (`npm run check`).
- **Push-to-Deploy vs. FTP**: How automated builds and deployments replace manual FTP uploads.

### Part 2: Semantic HTML5 & DevTools Inspection

- **Meaning Over Appearance**: Choosing `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`,
  `<aside>`, `<footer>`, `<address>`, `<time>`, and real lists instead of generic `<div>` wrappers.
- **Heading Hierarchy**: Using one `<h1>` and nesting `<h2>`–`<h6>` logically without skipping
  levels.
- **DevTools Fundamentals**: Inspecting the Elements panel, Box Model, Device Mode, and the
  Accessibility Tree.

---

### Module Objectives

By the end of this module you will be able to:

- Structure a business webpage using semantic HTML5 landmarks and a valid heading hierarchy.
- Inspect HTML structure, computed styles, mobile viewports, and the Accessibility Tree using
  Browser DevTools.
- Set up the course template repository, create a branch, commit changes, and open a Pull Request on
  GitHub.
- Run the Vite starter kit, live Vitest tests, Prettier formatter, and HTML/CSS linters.

---

### Week 1 Activities & Materials

1. **Environment Setup**:
   - Follow the [Getting Started guide](../../README.md#getting-started) in the repository README to
     set up your GitHub account, GitHub Education benefits, personal course repo (`artzte` added as
     collaborator), Git, VS Code, and Node.js (LTS).
2. **Reading Assignment**:
   - [web.dev Learn HTML: Document Structure](https://web.dev/learn/html/document-structure)
   - [web.dev Learn HTML: Semantic HTML](https://web.dev/learn/html/semantic-html)
   - [web.dev Learn HTML: Headings and Sections](https://web.dev/learn/html/headings-and-sections)
   - Review the [Week 1 Reading Summary](../../weekly-readings/week-01.md).
3. **Concept Lecture**:
   - [Week 1 Lecture: Modern Dev Workflow & Semantic Foundations](week1-lecture-semantic-foundations.md)
   - [Lecture Guide: Modern Dev Workflow & Semantic Foundations](../../lectures/week1-semantic-foundations.md)
4. **Fixture & DevTools Exploration**:
   - Inspect the [Week 1 "Div Soup" Fixture](../../examples/week1/README.md)
     ([`div-soup.html`](../../examples/week1/div-soup.html) and
     [`div-soup.css`](../../examples/week1/div-soup.css)).
5. **Assessment — Quiz 1**:
   - Complete [Week 1 Quiz](week1-quiz.md) on Canvas. Due **Monday, January 11, 2027 at 11:59 PM**.
6. **Assignment 1 — Setup & Semantic Refactor**:
   - Complete [Week 1 Assignment: Semantic Refactor](week1-assignment-semantic-refactor.md), verify
     with `npm run check`, and submit your GitHub PR URL on Canvas (tagging **artzte** as reviewer).
     Due **Monday, January 11, 2027 at 11:59 PM**.

---

### Course Outcomes Supported

- **CO1**: Utilize the most recent HTML elements and CSS properties to create and style webpage
  content.
- **CO4**: Integrate site management concepts such as SEO and accessibility into a website’s plan,
  layout, and design.
