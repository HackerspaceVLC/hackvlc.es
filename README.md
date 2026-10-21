# Hackerspace Valencia website

The source for [hackvlc.es](https://hackvlc.es/), the site of the makerspace of Valencia.
It is built with [Hugo](https://gohugo.io/) and a custom theme, is bilingual (Spanish/English),
deploys on Cloudflare Pages, and its content can be edited in the browser through
[Sveltia CMS](https://sveltiacms.app/).

Everything here is open source under **AGPL-3.0**: copy it, improve it, send a patch.

## Quick start

**Prerequisites:** the [extended](https://github.com/gohugo.io/hugo/releases) build of Hugo
(we develop against **0.162+**). No Node dependencies are required, `package.json` only wraps
the Hugo commands.

```bash
git clone https://github.com/HackerspaceVLC/hackvlc-website.git
cd hackvlc-website
hugo server            # or: npm run dev
```

The site runs at **http://localhost:1313/** (pass `-p 1414` to change the port).

Build a production bundle into `public/`:

```bash
hugo --minify          # or: npm run build
```

## Project structure

```
config.toml            site config: menus, params, languages, social links
archetypes/            templates used by `hugo new`
assets/css/            project CSS overrides (custom.css)
content/
  spanish/             default language (es)
  english/             (en)
    blog/              blog posts (page bundles)
    proyectos/         project portfolio (page bundles and galleries)
    workshops/         workshops / talleres
    pages/             standalone pages (e.g. "Hazte socio")
data/{es,en}/          structured data; service.yml feeds the landing "Qué hacemos" cards
i18n/{es,en}.yaml      UI translation strings
layouts/               output formats and shortcode overrides (gallery, sitemap, json)
static/
  images/              photos, logos, og-image
  admin/               Sveltia CMS (index.html, config.yml, vendored sveltia-cms.js)
themes/hackvlc/        the theme: layouts, assets (CSS/JS), partials
```

Theme templates and assets live in `themes/hackvlc/`. Files at the repo root
(`assets/`, `layouts/`, `content/`, `data/`) override or extend the theme.

## Editing content

There are two ways to edit, pick whichever you prefer.

### Option A: Sveltia CMS (no code)

Open **`/admin/`** on the deployed site (or locally) and sign in with GitHub.
Only repo collaborators can log in. The CMS runs in editorial workflow mode, so every edit
opens as a pull request and nothing publishes until a maintainer reviews and merges it.

Collections available, all in ES and EN:

| Collection  | What it is                                            |
| ----------- | ----------------------------------------------------- |
| Blog        | Posts (page bundles with a co-located cover image)    |
| Talleres    | Workshops                                             |
| Proyectos   | Projects (status, difficulty, tech stack, gallery)    |
| Páginas     | Standalone pages (e.g. membership signup)             |
| Actividades | The landing "Qué hacemos / What we do" cards          |

Image uploads are routed to the right folder automatically (workshop images go to
`static/images/workshop/`, project images to `static/images/portfolio/`).

### Option B: by hand

**Blog post.** Create a folder with an `index.md` and its cover image:

```
content/spanish/blog/my-post/
  index.md
  cover.jpeg
```

```markdown
---
title: "My post"
description: "One-line summary used in cards and SEO."
date: 2026-07-01T00:00:00Z
author: "Un miembro del Hackerspace Valencia"
cover: cover.jpeg
tags: ["esp32", "tutorial"]
---
Your markdown here. Extra images sit next to index.md and are embedded with
{{< figure src="photo-1.jpeg" alt="..." >}}.
```

**Project:** `content/spanish/proyectos/<slug>/index.md`, with a thumbnail at
`static/images/portfolio/<slug>.webp` referenced as `image: /images/portfolio/<slug>.webp`.
See `proyectos/arcade/` for the full frontmatter (status, difficulty, tech_stack, gallery).

**Workshop:** `content/spanish/workshops/<slug>.md` with `title`, `date`, `image`, `description`.

**Landing "Qué hacemos" cards:** `data/{es,en}/service.yml`.

Always update **both** `content/spanish/` and `content/english/` (and `data/es/` and `data/en/`)
so the two languages stay in sync.

## Image guidelines

To keep the repo small and the site fast:

- **Format:** WebP (`.webp`). Avoid `.jpg`, `.png`, and `.gif` for web images.
- **Portfolio thumbnails:** max 800px wide.
- **Gallery / hero / background images:** max 1920px wide.
- Compress before committing (`cwebp`, Squoosh, etc.).

## Deployment

The site builds on **Cloudflare Pages**, configured in the CF dashboard:

- **Build command:** `hugo --minify`
- **Output directory:** `public`
- **Hugo version:** pinned via the `HUGO_VERSION` environment variable

Every push to `main` deploys automatically.

**Scheduled publishing:** give a post `draft: false` and a future `publishDate` (with time and
offset, e.g. `2026-10-23T08:00:00+02:00`). It does not render until that moment. Cloudflare only
builds on push, so `.github/workflows/scheduled-publish.yml` runs every morning and, if some page
reached its `publishDate` in the last 25 hours, pushes an empty commit to trigger a fresh build.
Pages without `publishDate` (such as upcoming workshops) are never held back. Links from a blog
post to another post that is not live yet render as plain text until the target is published.

## Contributing

Pull requests are welcome, and that is exactly how the CMS works too.

1. Fork or branch off `main`.
2. Run `hugo server` and check your change locally.
3. Keep both languages in sync and follow the image rules above.
4. Open a PR. A maintainer reviews and merges; Cloudflare deploys on merge.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide and
[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for our community standards.

Not sure where to start? Pass by the [hackerspace](https://hackvlc.es/#contact) on an open-doors
Tuesday, or open an issue.

## License

[AGPL-3.0](LICENSE). Hackerspace Valencia. Made in Valencia.
