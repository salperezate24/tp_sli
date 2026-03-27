# Welcome to [Slidev](https://github.com/slidevjs/slidev)!

To start the slide show:

- `pnpm install`
- `pnpm dev`
- visit <http://localhost:3030>

Edit the [slides.md](./slides.md) to see the changes.

Learn more about Slidev at the [documentation](https://sli.dev/).

## Deployment

Production deploys use GitHub Pages only.

- Use `develop` for day-to-day feature and integration work.
- Merge to `main` when you want to release.
- A push to `main` triggers the workflow in `.github/workflows/pages.yml`.
- The workflow builds Slidev output into `dist`.
- The generated site is published to the `gh-pages` branch.

Vercel is not used for deployment in this repository.
