# Deployments

- Prod: https://mentor.palokaj.co — GitHub Pages, legacy build, source `master:/docs`
- Repo: github.com/actuallymentor/palokajco. Push via https w/ `GH_TOKEN` (gh auth), remote is ssh → use `gh`-authed https URL
- Deploy = `npm run build` → commit `docs/` → push master. Pages rebuilds in ~1 min
