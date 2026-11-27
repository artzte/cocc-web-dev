# Student Project Hosting and Deployment

Every project you build under `projects/<project>/` (such as `projects/week1`, `projects/portfolio`,
and `projects/final`) can be deployed automatically to our shared AWS hosting environment. Once
deployed, each project runs at:

```text
https://<course-cloudfront-domain>/<your-slug>/<project>/
```

For example, if your repository is `jdoe-cocc-web-dev`, your sites are served at:

- `https://<course-cloudfront-domain>/jdoe/week1/`
- `https://<course-cloudfront-domain>/jdoe/portfolio/`
- `https://<course-cloudfront-domain>/jdoe/final/`

## Architecture and Build Workflow

```mermaid
flowchart LR
    subgraph GitHub ["Your GitHub Repo"]
        Push["Push to projects/**\n(or click 'Run workflow')"]
        Checks["GitHub Action\n1. npm ci\n2. npm run lint\n3. npm run format:check\n4. npm test\n5. vite build --base=/<slug>/<project>/"]
        Push --> Checks
    end

    subgraph AWS ["Course AWS Account (artzt-cocc)"]
        S3["S3 Bucket\ns3://cocc-cis295-projects-.../<slug>/<project>/\n• index.html, about.html, ...\n• assets/*"]
        CF["CloudFront CDN\n+ Viewer-Request Directory Router\n(/<slug>/<project> -> /<slug>/<project>/)"]
        Checks -->|"aws s3 sync\n(scoped student token)"| S3
        CF -->|"Origin Access Control"| S3
    end

    Browser["Browser\nhttps://<cf-domain>/<slug>/<project>/"] --> CF
```

## Running Build Checks Locally Before Pushing

Every project scaffolded with `npm run weekly:create <name>` includes an `npm run check` script that
runs the exact same verification steps as the GitHub Action without modifying any files:

```bash
cd projects/final
npm run check
```

Under the hood, `npm run check` runs four steps in order:

1. `npm run lint` — validates your HTML (`html-validate`) and CSS (`stylelint`)
2. `npm run format:check` — verifies formatting with Prettier (run `npm run format` to fix)
3. `npm test` — runs your Vitest suite once (use `npm run test:watch` while coding)
4. `npm run build` — runs `vite build` across all root `.html` files

## Triggering a Deployment

Once I push your scoped AWS deployment secrets (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and
`STUDENT_SLUG`) to your private GitHub repository, your projects deploy in two ways:

- **Automatically on push:** Any push that changes files inside `projects/<name>/` checks, builds,
  and deploys only the modified project folder(s).
- **Manually from GitHub:** Open your repo on GitHub, go to **Actions -> Deploy Student Projects ->
  Run workflow**, optionally enter a specific project folder (like `final` or `portfolio`), and
  click **Run workflow**.

Open the completed workflow run's **Summary** tab to copy your live CloudFront URL.

## Multi-Page Sites and Relative Links

Because your site lives under `/<your-slug>/<project>/` rather than at the root of the domain:

- Always link between pages using relative paths (`./about.html`, `./contact.html`) rather than
  root-absolute paths (`/about.html`).
- Link from your Developer Portfolio (`/<your-slug>/portfolio/`) to your other deployed course
  projects using sibling relative paths (`../final/`, `../week3/`, `../week6/`) or full HTTPS URLs.
- The CloudFront viewer-request router
  ([`infra/lib/student-hosting-stack.ts`](lib/student-hosting-stack.ts)) redirects extensionless
  directory paths (like `/jdoe/final`) to `/jdoe/final/` and serves `/jdoe/final/index.html`,
  ensuring all relative links and assets resolve cleanly.

## Exploring the Infrastructure Code

Everything that powers course hosting lives right here in the repository:

- [`.github/workflows/deploy-projects.yml`](../.github/workflows/deploy-projects.yml) — the GitHub
  Action that installs dependencies, runs `lint`, `format:check`, `test`, builds with Vite, and
  syncs each project's `dist/` folder to S3.
- [`infra/lib/student-hosting-stack.ts`](lib/student-hosting-stack.ts) — the AWS CDK stack defining
  the private S3 bucket, CloudFront CDN distribution, `X-Robots-Tag: noindex, nofollow` response
  headers policy, and directory router function.
- [`infra/scripts/issue-student-token.sh`](scripts/issue-student-token.sh) — provisions each
  student's scoped IAM user (`cocc-cis295-student-<slug>`) restricted strictly to
  `s3://.../<slug>/*`.
- [`infra/site/index.html`](site/index.html) and
  [`infra/scripts/deploy-root-index.sh`](scripts/deploy-root-index.sh) — template and script for the
  class directory page listing every student's Final Project and Portfolio.
- [`infra/OPERATIONS.md`](OPERATIONS.md) — instructor operations runbook.

None of the course sites are indexed by search engines: CloudFront attaches an
`X-Robots-Tag: noindex, nofollow` header to every response.
