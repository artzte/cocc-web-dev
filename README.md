# CIS 295 — Web Development II

Course materials for CIS 295 at Central Oregon Community College (Winter 2027).

## Credits and Acknowledgments

This course uses Google's free [web.dev Learn](https://web.dev/learn) series (_Learn HTML_, _Learn
CSS_, _Learn Responsive Design_, _Learn Accessibility_, _Learn Forms_, and _Learn Performance_) as
its primary reading backbone, supplemented by [MDN Web Docs](https://developer.mozilla.org/), the
[Tailwind CSS Documentation](https://tailwindcss.com/docs), and the
[Google Search Central SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).

This repository does not reproduce those readings. The outlines, lecture notes, exercises, and
examples here were built for this course in partnership with AI coding agents (see
[How AI Was Used to Build This Course](#how-ai-was-used-to-build-this-course)) and point students to
the relevant online readings.

## How AI Was Used to Build This Course

I want to be upfront about this, because I'm asking you not to use generative AI for your
coursework.

**What was built with AI.** Everything in this repository was built in partnership with generative
AI coding agents, specifically Google's Antigravity and Anthropic's Claude Code. That includes the
course outline, syllabus, reading summaries, lecture notes, assignments, quizzes, starter kit, and
supporting scripts. In each case, the AI agents produced the first version, and I then reviewed and
edited it.

**What was not built with AI.** My recorded lecture videos are entirely my own. I use the lecture
notes and code examples as rough outlines, but what I say and demonstrate in the videos is mine.

The [`CLAUDE.md`](CLAUDE.md) file at the root of this repository is the set of instructions I gave
the coding agents about the course's goals and design decisions. It's included so you can see
exactly what the agents were told.

**What I did.** I directed the work and made the course's key decisions: the reading backbone, the
topic sequence, the tools, and the final project requirements. I reviewed every file the agents
produced and edited it as needed. I'm responsible for everything here. If you find a mistake, please
tell me; it's my mistake to fix.

**Why I can use AI and you can't.** The goal of this course is for _you_ to build real fluency in
modern HTML, CSS, responsive layout, accessibility, and site management. That only happens when you
do the work yourself. My goal in building the course was different: to produce clear, accurate
teaching materials. I already know the material, so AI helped me draft faster without replacing the
learning. If AI wrote your assignments, it would replace the very learning the assignments exist
for. See the AI policy in the [syllabus](modules/syllabus/syllabus.md).

**A note on the commit history.** Only some commits in this repository are marked as AI co-authored.
Don't read the commit history as a record of what was AI-assisted. As described above, all of it
was.

If you have questions or concerns about any of this, I'm glad to talk about it.

## Student Use of Generative AI

**Allowed:**

- **IT problems on your own computer.** You may use generative AI to solve trouble with Git, GitHub
  Desktop, Node and npm, VS Code, and other setup and environment issues. Getting your tools working
  isn't what this course is assessing, so don't stay stuck on it.
- **AI code and pull request reviews.** You are permitted—and encouraged—to use any AI agent (such
  as GitHub Copilot, Claude, ChatGPT, or Gemini) to review your code or pull requests before
  submitting. Use its feedback to improve your own code; don't have it write or rewrite the code for
  you. Here is a suggested prompt:

  > "Perform an adversarial review of `<your-github-pr-link>`, pointing out my logical flaws,
  > semantic HTML/CSS and accessibility issues, and syntax problems, without providing full rewrites
  > of my work, in accordance with COCC academic honesty guidelines."

**Not allowed:** You may not use generative AI to answer quiz questions or to build your assignments
or final project, in whole or in part. The work you submit must be your own.

Submitting AI-generated work as your own is a violation of academic honesty under COCC's
[Student Rights and Responsibilities](https://www.cocc.edu/policies/general-procedures-manual/student/student-rights-and-responsibilities.aspx).
If you're not sure whether a particular use is allowed, ask me first. If you're stuck on an
assignment, reach out to me for help rather than turning to AI.

---

# Getting Started

You do **not** need prior Git, command-line, or JavaScript experience for this class. Follow the
steps below in Week 1 to get your environment running.

## Tools You'll Need

- [GitHub account](https://github.com/signup) (using your COCC email) +
  [GitHub Education benefits](https://github.com/settings/education/benefits)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/downloads) _(used from VS Code's integrated terminal and Source Control
  panel; on Windows/macOS you are also welcome to use
  [GitHub Desktop](https://desktop.github.com/download/) for day-to-day commits and branches if you
  prefer a dedicated GUI)_
- [Node.js (LTS)](https://nodejs.org/en) _(standard installer for Windows, macOS, or Linux)_
- Recent versions of **Chrome** (for DevTools and Lighthouse) plus at least one other browser
  (**Firefox** or **Safari**) for cross-browser checks

## Step 1: Create a GitHub Account and Claim Education Benefits

Do this early in Week 1—GitHub Education approval can take a day or two.

1. Sign up at [github.com/signup](https://github.com/signup) (or add your COCC email to an existing
   account under [GitHub Emails](https://github.com/settings/emails)).
2. Apply for [GitHub Education](https://github.com/settings/education/benefits) using your COCC
   email. This unlocks free GitHub Copilot PR reviews and GitHub Codespaces.

## Step 2: Create Your Personal Course Repository

You will create your own private copy of this template repository and submit all work via Pull
Requests.

1. While signed in to GitHub, visit the [course repository](https://github.com/artzte/cocc-web-dev).
2. Click the green **Use this template** button and choose **Create a new repository**.
3. Name your repository with your last name, e.g. `lastname-cocc-web-dev`.
4. Choose **Private** visibility, then click **Create repository**.
5. Open **Settings -> Collaborators** in your new repository and add me (`artzte`) as a
   collaborator.

## Step 3: Clone Your Repository

Clone your new repository to a clean folder on your computer using VS Code's terminal (HTTPS signs
in through your browser—no SSH key setup required):

```bash
# Configure your name and COCC email for Git commits (one-time setup)
git config --global user.name "Your Name"
git config --global user.email "your-cocc-email@cocc.edu"

# Clone your personal course repository
git clone https://github.com/<your-gh-handle>/lastname-cocc-web-dev.git
```

Then open the cloned folder in Visual Studio Code. _(If you prefer a GUI client on Windows or macOS,
you can clone the same repository with VS Code's Source Control panel or
[GitHub Desktop](https://desktop.github.com/download/).)_

## Step 4: Install Node.js (LTS)

Download and run the **LTS** installer from [nodejs.org](https://nodejs.org/en). Restart VS Code
after installing, open VS Code's integrated terminal (**Terminal -> New Terminal**), and verify:

```bash
node --version
npm --version
```

## Step 5: Run the Starter Kit

From VS Code's terminal inside your cloned repository:

```bash
cd starter
npm install
npm run dev
```

Open the local URL Vite prints in Chrome (`http://localhost:5173`). To verify linting, formatting,
and the production build:

```bash
npm run check
```

## Weekly Workflow

Run these commands from your repository root in VS Code's integrated terminal for each weekly
assignment (replace `week1` with the current week):

```bash
# 1. Switch to main and pull latest changes (including any merged PRs from prior weeks)
git checkout main
git pull

# 2. Create a new branch for this week's assignment
git checkout -b week1

# 3. Scaffold projects/week1 from the starter kit (preferred; scripts/mpf.sh week1 also works in Bash)
npm run weekly:create week1

# 4. Install dependencies and start the local dev server while you work
cd projects/week1
npm install
npm run dev

# 5. Format, lint, and verify the production build before committing
npm run format
npm run check

# 6. Stage, commit, and push your branch to GitHub
git add .
git commit -m "feat: complete week1 assignment"
git push -u origin week1
```

If you prefer a GUI client (VS Code Source Control or GitHub Desktop), you can perform the Git steps
there—just always use `npm run weekly:create <week>` (not manual folder copies) to scaffold each
project folder.

Once pushed, open a Pull Request on GitHub targeting `main`, optionally run an adversarial AI code
review on your PR first, tag **`artzte`** as reviewer, and submit the PR URL on Canvas.

## Receiving Course Updates

I will periodically add new weekly materials and examples to the course template repository. Even if
you use a GUI client for day-to-day commits, run these commands in VS Code's integrated terminal
(GUI clients do not expose pulling selected updates from a second `template` remote):

```bash
# One-time setup: add the course template as a remote
git remote add template https://github.com/artzte/cocc-web-dev.git
git config set checkout.defaultRemote origin
```

Whenever new course updates are posted:

```bash
# 1. Switch to main and make sure your working tree is clean
git checkout main
git pull

# 2. Fetch the latest changes from the course template repo
git fetch template

# 3. Overwrite template files from the repo root (leaves your projects/ folder intact)
git checkout template/main -- :/

# 4. Commit the template updates as a single commit
git commit -m "chore: pull updates from course template"
```
