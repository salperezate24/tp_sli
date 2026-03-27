# Sustentacion de tesis (Slidev)

Presentacion de sustentacion de maestria sobre deteccion de ovocitos y caracteristicas morfologicas en microscopia polarizada.

## Metadata academica

- Autor: Salomon Perez Atencia
- Director de tesis: Alejandro Restrepo Martinez, Ph. D.
- Institucion: Universidad Nacional de Colombia, Sede Medellin
- Facultad: Facultad de Minas
- Departamento: Departamento de Ciencias de la Computacion

## Local development

To start the slide show:

- `npm install`
- `npm run dev`
- visit <http://localhost:3030>

Edit the [slides.md](./slides.md) to see the changes.

## Local static build (deploy simulation)

Use this to test locally the same static output that is published:

- `npm install`
- `npm run build`
- `npm run preview`

For a pure local static build (root base path), use:

- `npm run build:local`

## Deployment (GitHub Pages)

Production deploys use GitHub Pages only.

- Use `develop` for day-to-day feature and integration work.
- Merge to `main` when you want to release.
- A push to `main` triggers the workflow in `.github/workflows/pages.yml`.
- The workflow builds Slidev output into `dist`.
- The generated site is published to the `gh-pages` branch.
- Vercel is not used for deployment in this repository.

Learn more about Slidev at the [documentation](https://sli.dev/).
