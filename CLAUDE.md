# CLAUDE.md

Personal academic website for Timothy Frye (Columbia University), built from the al-folio v1 Jekyll starter and hosted on GitHub Pages. `MAINTAINING.md` covers routine content updates.

## How it builds

- There is no local build setup. Pushing to `main` runs `.github/workflows/deploy.yml`, which builds with Jekyll and publishes to the `gh-pages` branch (about 5 minutes).
- Layouts, includes and base styles come from the `al_folio_core` gem, not this repo. A local file at the same path overrides the gem's copy. Read the gem source before overriding anything, and prefer the hooks below over copying a whole layout.
- `Gemfile` and the `plugins:` list in `_config.yml` must agree; a plugin in only one is inert.
- `url` and `baseurl` in `_config.yml` must match where the site is served. A mismatch renders the site unstyled with broken links. Preview: `https://katrinakeegan.github.io` + `/timothy-frye-website`. On the custom domain: `https://www.timothyfrye.com` + empty `baseurl`.

## Where things live

| What | Where |
| --- | --- |
| Pages | `_pages/` (`about.md`, `books.html`, `publications.md` = Articles, `cv.md`, `teaching.md`) |
| Publications | `_bibliography/papers.bib`, newest first; custom `topics` field drives the filter |
| Filter buttons | `_data/topics.yml` |
| Books | `_data/books.yml`, covers in `assets/img/book_covers/` |
| Contact icons | `_data/socials.yml` |
| Site styles (colors, fonts, components) | `_sass/_custom.scss`, loaded last by the local `assets/css/main.scss` |
| Topic filter | `_includes/hook/bib.liquid` (emits `data-topics` per entry) and `assets/js/topic-filter.js` |
| CV | `assets/pdf/Frye_CV.pdf` |

## Conventions

- Light mode only, deep red accent (`#8b1a1a`), serif headings. No news or blog section: the site is updated about once a year, so avoid wording that dates quickly.
- The topic filter uses AND logic across selected topics. Entries without `topics` are hidden whenever a filter is active.
- Email addresses are obfuscated at build time (`protect_email: true`); do not write raw `mailto:` links in pages.
- The deploy step runs PurgeCSS over the built HTML and JS. A CSS class that appears in neither gets stripped, so classes toggled by JavaScript must be named literally in the script.
