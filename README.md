# Z M Masum — Transport Portfolio

A one-page React + Tailwind portfolio. Dark theme with blue + gold accents,
subtle transport vibe, built for GitHub Pages with CI/CD.

## Edit your details

Everything you change lives in **`src/data.js`**:

- Name, tagline, intro, location
- **Phone** (`phone` for the call link, `phoneDisplay` for what's shown)
- **Email** (used for the `mailto:` button)
- Roles / positions (reorder, add, remove)
- Services, stats, gallery captions

Drop photos into **`public/images/`** and reference them as
`images/yourfile.jpg` in `data.js`. Missing images show a tidy placeholder
slot automatically, so nothing breaks before you add them.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages (CI/CD)

1. Create a repo and push this folder.
2. Open **`vite.config.js`** and set `base` to `"/<your-repo-name>/"`
   (e.g. `"/zm-masum-portfolio/"`). Update `homepage` in `package.json` too.
3. In GitHub → **Settings → Pages → Build and deployment → Source**,
   choose **GitHub Actions**.
4. Push to `main`. The workflow in `.github/workflows/deploy.yml`
   builds and deploys automatically on every push.

Your site goes live at `https://<username>.github.io/<repo-name>/`.

> Using a custom domain or a `<username>.github.io` root repo?
> Set `base: "/"` in `vite.config.js` instead.
```
