# mentor.palokaj.co

Personal site of Mentor Palokaj / MMOH. Single static page, Vite, no framework.

```shell
npm i
npm start        # dev server
npm run build    # → docs/
```

| Path | Role |
| --- | --- |
| `index.html` | Content + markup, Lucide icon sprite, JSON-LD |
| `src/style.css` | Tokens, layout, artwork animation |
| `src/main.js` | Footer year, pause artwork offscreen |
| `public/` | Copied verbatim: `CNAME`, favicon |
| `docs/` | Build output = GitHub Pages source. Don't hand-edit |

Deploy: build, commit `docs/`, push `master`.
