# rodsantis-website — CLAUDE.md

Static marketing site for Rodsan Innovative Solutions. Pure HTML/CSS/JS — no build step. Auto-deployed to Vercel on push to main.

See `CONTEXT.md` for brand colors, design system, responsive breakpoints, and animation rules.

## Key commands

```bash
python -m http.server 8000   # local dev server (or npx serve)
```

No build process. Edit → push → Vercel deploys automatically.

## Content workflow

1. Edit `content.md` (single source of truth for all copy)
2. Ask Claude to regenerate affected HTML sections
3. Push to main

Never improvise content — use `content.md` as written.

## Assets

- Logo: `assets/images/logo.png`
- Headshot: `assets/images/headshot.jpg`
- All paths are relative

## Conventions

- Vanilla JS only (no frameworks, no jQuery)
- No external CSS frameworks
- Mobile-first responsive (`<640px` / `641-1024px` / `>1024px`)
- `rel="noopener noreferrer"` on all external links
- No API keys in client-side code
- Animations ≤300ms; Intersection Observer for scroll effects

## Docs

Local reference docs at `docs/`:
- `docs/readme.md` — project overview, brand, tech stack
- `docs/spec.md` — page sections, brand colors, breakpoints
- `docs/status.md` — deliverables checklist, pre-deploy status
- `docs/changelog.md` — version history
