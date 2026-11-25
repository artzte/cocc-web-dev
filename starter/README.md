# CIS 295 Starter Kit

Every weekly assignment and your final project start from this folder.

## Commands

Run these from inside your project folder (for example, `projects/week1/`):

```bash
npm install         # Install dev tools (first time in a project folder)
npm run dev         # Start local Vite dev server with live reload
npm run test:watch  # Run Vitest in watch mode for live test feedback as you edit
npm test            # Run the test suite once
npm run lint        # Validate HTML (html-validate) and CSS (stylelint)
npm run format      # Format HTML, CSS, JS, and Markdown with Prettier
npm run check       # Run lint + format:check + tests + production build
npm run build       # Build production files into dist/
```

## Multi-Page Sites

Add additional `.html` files in the root of your project folder (for example, `about.html` and
`contact.html`) and link to them with relative paths (`./about.html`). `vite.config.js`
automatically discovers every root `.html` file when running `npm run build`.
