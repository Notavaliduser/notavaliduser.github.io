# Portfolio — Rachna Ravi

Personal portfolio site. Static HTML + CSS, no build step.

**Live:** Deployed on Vercel.

## Structure

```
index.html              Home — hero, about, case studies, timeline, contact
photography.html        Photography gallery
art.html                Art gallery
404.html                Not found page
styles.css              All styles (design tokens, layout, responsive)
case-study/             Individual case study pages
assets/                 Images (photography/, art/, headshot)
favicon.svg             Site icon
vercel.json             Vercel config (clean URLs, /work redirect)
```

## Local development

Serve the files with any static server:

```sh
npx serve .
```

Then open `http://localhost:3000`.

## Deployment

Vercel serves the static files directly — no build command needed. `cleanUrls: true` in `vercel.json` strips `.html` extensions from URLs.

## Design

- **Font:** Atkinson Hyperlegible Next (400–700)
- **Theme:** Light/dark with system preference detection and localStorage persistence
- **Layout:** Max-width 720px for content, 960px for galleries
- **Responsive:** Breakpoints at 768px, 600px, 480px
