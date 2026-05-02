# jonah-gr.github.io

Personal website for **Jonah Gräfe** — Data Scientist / Machine Learning Engineer.
Built with [Astro](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com), MDX project case studies, and deployed to GitHub Pages by GitHub Actions.

> 🔗 Live URL once deployed: <https://jonah-gr.github.io>

---

## Local development

Requirements: **Node.js 20+** (a `.nvmrc` is included; `nvm use` will pick it up).

```bash
npm install     # install dependencies
npm run dev     # start dev server at http://localhost:4321
npm run build   # build static site to ./dist
npm run preview # preview the production build
```

---

## How to edit the content

Everything you'll commonly want to change lives in a few small files. None of these require touching the components.

| What | Where |
| --- | --- |
| Name, role, tagline, location, email, social links | `src/data/site.ts` |
| Career timeline (work + education) | `src/data/experience.ts` |
| Skill groups & chips | `src/data/skills.ts` |
| Projects (case studies) | `src/content/projects/*.mdx` (frontmatter + MDX body) |
| Resume PDF (the **Download CV** button) | replace `public/cv.pdf` with your real PDF |
| Favicon | `public/favicon.svg` |
| Open Graph preview image | `public/og-image.png` (re-generate via `node scripts/make-og.mjs`) |
| robots.txt | `public/robots.txt` |
| Site URL (used for sitemap & canonical tags) | `astro.config.mjs` (`site:` field) |

### Adding a new project

Create a new file under `src/content/projects/`, e.g. `my-project.mdx`:

```mdx
---
title: "My Awesome Project"
summary: "One-line pitch shown on the card and detail page."
date: 2026-01-15
featured: true              # optional — featured projects sort first
tags: ["PyTorch", "MLOps"]
repo: "https://github.com/jonah-gr/my-project"   # optional
demo: "https://my-demo.example.com"              # optional
draft: false                                     # set true to hide
---

## Problem

What problem did this solve?

## Approach

How did you solve it? Code, diagrams, links — anything MDX supports.

## Results

What changed because of this work?
```

The schema is enforced by Zod in `src/content.config.ts`; if a field is missing or wrong, `npm run build` will fail with a clear message.

---

## Deployment (GitHub Pages + Actions)

This repo is the **user site** for `jonah-gr` and lives at `github.com/jonah-gr/jonah-gr.github.io`.
Every push to `main` triggers `.github/workflows/deploy.yml`, which:

1. Checks out the repo,
2. Builds the site with the official [`withastro/action`](https://github.com/withastro/action), and
3. Deploys the build artifact via [`actions/deploy-pages`](https://github.com/actions/deploy-pages).

### One-time GitHub setup (required)

After the first push, go to the repo on GitHub:

1. **Settings → Pages → Build and deployment → Source: `GitHub Actions`** (this can't be enabled by the workflow itself).
2. Re-run the workflow if needed (Actions tab → latest run → "Re-run all jobs").
3. The site will be live at <https://jonah-gr.github.io> in ~1 minute.

The workflow already has the right permissions (`pages: write`, `id-token: write`), so no further configuration is needed.

### Custom domain (optional, later)

To use a custom domain instead of `jonah-gr.github.io`:

1. Add a `public/CNAME` file containing just your domain (e.g. `jonahgraefe.com`).
2. Update `site:` in `astro.config.mjs` to the same URL.
3. Configure the DNS records and the **Custom domain** field in `Settings → Pages` per [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

---

## Project structure

```
.
├── .github/workflows/deploy.yml   # CI/CD: build + deploy to GitHub Pages
├── astro.config.mjs               # site URL, integrations, Tailwind v4 plugin
├── public/                        # static assets served as-is
│   ├── cv.pdf                     # resume (placeholder — replace me!)
│   ├── favicon.svg
│   ├── og-image.png
│   └── robots.txt
├── scripts/make-og.mjs            # regenerates the OG image
├── src/
│   ├── components/                # Nav, Hero, Experience, Skills, Projects, ...
│   ├── content/projects/          # MDX case studies (one file per project)
│   ├── content.config.ts          # Zod schema for the projects collection
│   ├── data/                      # site, experience, skills (typed)
│   ├── layouts/BaseLayout.astro   # head, SEO/OG, theme bootstrap, nav, footer
│   ├── pages/                     # index, /projects/[slug], 404
│   └── styles/global.css          # Tailwind v4 + design tokens + dark variant
└── package.json
```

---

## Tech notes

- **Theme:** follows the system preference by default; the toggle in the nav stores an override in `localStorage.theme`. A tiny inline script in `<head>` applies the right class before first paint to avoid flashes.
- **Icons:** [lucide](https://lucide.dev) via `astro-icon`. To use a new icon, just reference it like `<Icon name="lucide:rocket" />` — no need to register it.
- **Sitemap & SEO:** `@astrojs/sitemap` generates `/sitemap-index.xml` at build time, referenced by `public/robots.txt` and the `<link rel="sitemap">` in the layout.
- **No client framework.** Pages ship as static HTML + a few sprinkles of vanilla JS (theme toggle, mobile menu).

---

## License

The site source is © Jonah Gräfe. Feel free to take inspiration; please don't copy verbatim.
