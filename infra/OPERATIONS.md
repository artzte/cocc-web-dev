# Hosting Operations (Instructor)

Instructor notes for running CIS 295 student project hosting. Students don't need this file; their
guide is [`README.md`](README.md).

All commands run from the repo root with the `artzt-cocc` AWS profile (override with `AWS_PROFILE`)
and an authenticated `gh`.

All CIS 295 resources are namespaced separately from CIS 133JS (`Cis295StudentHostingStack`, bucket
`cocc-cis295-projects-081028362911`, IAM user prefix `cocc-cis295-student-`, inline policy
`Cis295StudentDeploy-<slug>`), so students enrolled in both courses will never collide.

## The student roster

The scripts read the class list from `infra/students.local.json`. That file holds student names and
GitHub repos, so it is git-ignored and must never be committed to this public repo. Keep a copy in
1Password.

Start from the example:

```bash
cp infra/students.example.json infra/students.local.json
```

Each entry has three fields:

```json
{ "slug": "jdoe", "repo": "jdoe-gh/jdoe-cocc-web-dev", "title": "High Desert Bike & Ski Works" }
```

- `slug` is the site path prefix (`/jdoe/<project>/`) and IAM user suffix
  (`cocc-cis295-student-jdoe`).
- `repo` is where `--push-secret` sets `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and
  `STUDENT_SLUG`.
- `title` is the Final Project name shown on the class directory page.

To use a roster at another path, pass `--roster <path>` or set `STUDENT_ROSTER`.

## Search engines

CloudFront adds `X-Robots-Tag: noindex, nofollow` to every response, and the directory page includes
`<meta name="robots" content="noindex, nofollow">`. There is no root `robots.txt` on purpose so
crawlers always see the `noindex` header, while students can still create per-project `robots.txt`
and `sitemap.xml` files inside `/<slug>/<project>/` for Week 8 SEO practice.

## Initial setup

```bash
cd infra
npm install
npx cdk bootstrap --profile artzt-cocc   # once per account/region
npm run diff                             # review changes
npm run deploy
```

After the first `npm run deploy`, copy the `DistributionDomainName` output (e.g.,
`dXXXXXXXXXXXXX.cloudfront.net`) into `CLOUDFRONT_DOMAIN` in `.github/workflows/deploy-projects.yml`
and update the placeholder domain in `infra/README.md`, then commit and push so students pull the
live URL in their workflow summaries.

## Adding students

1. Add entries to `infra/students.local.json`.
2. Issue tokens and push secrets to student repos:

   ```bash
   ./infra/scripts/issue-student-token.sh --slug jdoe --dry-run
   ./infra/scripts/issue-student-token.sh --slug jdoe --push-secret
   ```

   Or provision everyone in the roster who isn't fully provisioned yet:

   ```bash
   ./infra/scripts/roster-sync.sh --report
   ./infra/scripts/roster-sync.sh --provision
   ```

3. Refresh the class directory page and upload the shared `/404.html` ("Not found — coming soon")
   page:

   ```bash
   ./infra/scripts/deploy-root-index.sh --dry-run
   ./infra/scripts/deploy-root-index.sh --deploy
   ```

Preview the rendered directory page locally without uploading:

```bash
node infra/scripts/roster.mjs infra/students.local.json render-index infra/site/index.html > /tmp/index.html
```

## Rotating a key

```bash
./infra/scripts/issue-student-token.sh --slug jdoe --push-secret --rotate
```

## Removing a student

1. Remove their entry from `infra/students.local.json`.
2. Delete their IAM user (add `--purge-files` to delete `s3://<bucket>/<slug>/` and invalidate
   CloudFront):

   ```bash
   ./infra/scripts/roster-sync.sh --report
   ./infra/scripts/roster-sync.sh --prune [--purge-files]
   ```

3. Refresh the directory page with `./infra/scripts/deploy-root-index.sh --deploy`.

## End of term

1. Delete every `cocc-cis295-student-*` IAM user (sites stay up read-only unless you pass
   `--purge-files`):

   ```bash
   ./infra/scripts/roster-sync.sh --teardown [--purge-files]
   ```

2. To remove the stack completely later (after explicit confirmation), run
   `npm run cdk -- destroy --profile artzt-cocc` from `infra/`. Because the S3 bucket has
   `RemovalPolicy.RETAIN`, empty and delete it manually afterward if desired.
3. Archive `infra/students.local.json` in 1Password and remove the local file.

## Starting a subsequent term

The same CDK stack, S3 bucket, and CloudFront distribution are reused across terms — no CDK changes
or workflow domain updates are needed. Leaving previous students' S3 prefixes intact (running
`--teardown` without `--purge-files` at the end of the prior term) lets alumni continue reaching
their individual portfolio and project URLs even after the root directory page moves on to the next
cohort.

1. Update the term label (e.g., `Winter 2027`) in `infra/site/index.html` and commit the change.
2. Create a fresh `infra/students.local.json` for the new cohort.
   - To avoid overwriting a previous student's site if a last name repeats, list existing top-level
     prefixes first and assign a distinct slug (e.g., `jsmith` instead of `smith`) when needed:

     ```bash
     aws s3 ls s3://cocc-cis295-projects-081028362911/ --profile artzt-cocc
     ```

     Because `issue-student-token.sh` pushes `STUDENT_SLUG` as a GitHub repository secret, the
     student's deploy workflow automatically targets their assigned slug regardless of repo name.
3. Provision IAM tokens and push secrets to the new cohort's repos:

   ```bash
   ./infra/scripts/roster-sync.sh --report
   ./infra/scripts/roster-sync.sh --provision
   ```

4. Publish the updated root directory page (replaces only `/index.html` and `/404.html`, leaving
   prior students' `/<slug>/` folders untouched):

   ```bash
   ./infra/scripts/deploy-root-index.sh --dry-run
   ./infra/scripts/deploy-root-index.sh --deploy
   ```
