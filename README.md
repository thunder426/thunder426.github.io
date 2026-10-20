# Timearc

Personal site for my WoW: Forever addons, published at <https://thunder426.github.io>.
Static [Astro](https://astro.build) site, deployed to GitHub Pages by
[.github/workflows/deploy.yml](.github/workflows/deploy.yml) on every push to `main`.

## Layout

```
src/data/site.ts           name, CurseForge profile, Buy Me a Coffee link, download count
src/data/addons.ts         one entry per addon: text, features, screenshots, CurseForge link
src/assets/addons/<slug>/  logo and screenshots (PNGs; the build converts and resizes them)
src/content/changelogs/    copies of each addon's CHANGELOG.md (npm run sync)
src/pages/                 home, addons/[slug], about, support, 404
src/styles/global.css      colors, type, buttons; each addon's accent color is keyed by slug here
scripts/sync-addons.mjs    copies the changelogs from the addon repos
```

## Work on it

```powershell
npm install
npm run dev        # http://localhost:4321
npm run build      # writes dist/
npm run preview    # serves dist/ (the CSP only applies to built pages)
```

## After an addon release

1. `npm run sync` copies each addon's `CHANGELOG.md` from `..\wowaddon`, `..\waylaidhelper` and `..\letmebuffyou`
   (or from `$env:ADDONS_DIR`). The version shown on the site and "What's new" come from these copies.
2. For new screenshots, drop the PNG in `src/assets/addons/<slug>/` and add it to that addon's `gallery` in
   `src/data/addons.ts`.
3. Commit and push. The workflow publishes the site.

## Adding an addon

Add an entry to `addons` in `src/data/addons.ts`, its folder under `src/assets/addons/`, its repo in
`scripts/sync-addons.mjs`, and its accent color in `src/styles/global.css`.

## Buy Me a Coffee

Set `buyMeACoffee` in `src/data/site.ts`. Until then the Support page says the link is coming.

## Security

The site ships no JavaScript, cookies or analytics, and loads nothing from other origins. Astro writes a
Content Security Policy `<meta>` tag into every page (see `astro.config.mjs`), with hashes for its own styles.
Avoid inline `style=""` attributes: the policy blocks them. Use a class or a `data-` attribute in CSS instead.
