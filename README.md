# vassan1h.github.io

Personal portfolio site, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Development

```sh
npm install
npm run dev      # local dev server
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

## Deployment

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes
`dist/` via GitHub Pages. The repo's Pages source must be set to **GitHub Actions**
(Settings → Pages → Build and deployment).
