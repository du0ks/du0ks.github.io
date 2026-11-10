# du0ks.github.io

My personal portfolio site, built with Astro and live at [du0ks.github.io](https://du0ks.github.io).

## Pages

- `/`: main page with experience, education, selected work, skills and contact.
- `/projects`: the full project list, filterable by data science and software.
- `/ai`, `/business`, `/data`, `/software`: versions of the main page for different kinds of roles. Each one has its own intro, experience bullets and selected work, and links to a matching CV. They are marked `noindex` so they don't show up in search; I share the links directly.

The CVs are PDFs in `public/assets/` (`duhan-onat-karadayi-cv.pdf` plus one per variant).

## Structure

```
src/
  pages/        index, projects and the four variant pages
  layouts/      Layout (main site) and VariantLayout (variant pages)
  components/   Hero, Experience, Education, SelectedWork, Skills, Contact, Nav, Footer ...
  styles/       global.css
public/assets/  project images, CV PDFs
backup/         the old plain HTML/CSS version of the site, not part of the build
```

Most components take their content as props with defaults, so a variant page only overrides what changes (intro text, roles, projects, CV link).

## Run locally

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # output in dist/
npm run preview
```

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site with `withastro/action` and publishes it to GitHub Pages.
