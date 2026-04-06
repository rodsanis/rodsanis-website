# rodsantis-website — Workspace Context

## What this is

Static marketing site for Rodsan Innovative Solutions. Pure HTML/CSS/JS — no build step. Auto-deployed to Vercel on push to main.

## Brand

| Token | Value |
|-------|-------|
| Primary mint | `#7FFFD4` |
| Primary teal | `#20B2AA` |
| Background navy | `#0A1628` |
| Dark blue | `#0F1E33` |
| Accent light teal | `#5CE1E6` |
| Accent cyan | `#38B2AC` |
| Text primary | `#FFFFFF` |
| Text secondary | `#E2E8F0` |
| Text muted | `#94A3B8` |

Design style: modern tech (circuit aesthetic, gradient accents, glassmorphism). Mobile-first, WCAG AA contrast.

## Content authoring

All copy lives in `content.md`. To update site text:
1. Edit `content.md`
2. Ask Claude to regenerate affected HTML sections from it
3. Push to main → Vercel auto-deploys

Never improvise content — use `content.md` as written.

## Assets

- Logo: `assets/images/logo.png`
- Headshot: `assets/images/headshot.jpg`
- All asset paths are relative

## Key pages / sections

- Hero (full viewport, gradient headline, "Schedule Free Consultation" CTA)
- Services (grid: cards with icon + description + hover effect)
- About (two-column: headshot + founder bio)
- Contact (form left, Calendly/Cal.com embed right)
- Footer (minimal: copyright + social links)

## Local dev

```bash
python -m http.server 8000
```

No build process. Open `index.html` directly or serve it.

## Technical rules

- Vanilla JS only (no frameworks, no jQuery)
- No external CSS frameworks
- `rel="noopener noreferrer"` on all external links
- No API keys in client-side code
- Animations: max 300ms duration; use Intersection Observer for scroll fade-ins

## Deploy

Vercel auto-deploys on push to `main`. No manual steps needed.
