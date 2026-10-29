# Divyam Singh Rauthan — Portfolio

Personal portfolio built with React, TypeScript, Tailwind CSS and Vite.

🔗 **Live:** https://divyam062.github.io

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for tooling and builds
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [Motion](https://motion.dev/) for animation
- [react-icons](https://react-icons.github.io/react-icons/) for iconography

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build to dist/
npm run preview  # preview the production build locally
```

## Project structure

```
src/
  components/   UI sections (Navbar, Hero, About, Experience, Skills, Projects, Contact, Footer)
  data/         Resume content (resume.ts) — update this file to change site content
  hooks/        Shared hooks (scroll-spy navigation)
  App.tsx       Page composition
  main.tsx      App entry point
```

To update resume content (experience, skills, projects, contact info), edit [`src/data/resume.ts`](src/data/resume.ts) — the UI reads entirely from this file.

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and deploys it to GitHub Pages via GitHub Actions.

**One-time setup:** in the repo settings, under **Pages**, set the source to **GitHub Actions**.
