# Project Specification - Rodsan Innovative Solutions Website

## Overview

Single-page responsive website for Rodsan Innovative Solutions, an automation consulting firm serving small-medium businesses. Built to convert visitors into consulting clients.

## Tech Stack

- **Frontend:** HTML5, CSS3, vanilla JavaScript (ES6+)
- **Fonts:** Inter (Google Fonts)
- **Deployment:** Vercel (static site, zero config)
- **Domain:** rodsantis.com
- **Booking:** Google Calendar link (external)
- **Contact:** Mailto link

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--primary-mint` | #7FFFD4 | Gradient start, accents |
| `--primary-teal` | #20B2AA | Gradient end, buttons |
| `--background-navy` | #0A1628 | Page background |
| `--dark-blue` | #0F1E33 | Card backgrounds |
| `--accent-light-teal` | #5CE1E6 | Highlights |
| `--accent-cyan` | #38B2AC | Secondary accents |
| `--text-primary` | #FFFFFF | Headings, primary text |
| `--text-secondary` | #E2E8F0 | Body text |
| `--text-muted` | #94A3B8 | Captions, muted text |

## Typography

- **Font family:** Inter (Google Fonts), system sans-serif fallback
- **Heading sizes:** h1: 3rem+, h2: 2.25rem, h3: 1.25rem
- **Body:** 1rem (16px base), line-height 1.6

## Page Sections

1. **Navigation** - Sticky, glassmorphism, hamburger on mobile
2. **Hero** - Full viewport, logo, headline, CTA, circuit background
3. **Services** - 5 cards in responsive grid (3 > 2 > 1 columns)
4. **How It Works** - 3-step timeline with connectors
5. **About** - Two-column: headshot + bio
6. **Contact** - CTA text + booking/email buttons
7. **Footer** - Copyright notice

## Responsive Breakpoints

- Mobile: < 641px (base styles)
- Tablet: 641px - 1024px
- Desktop: > 1024px
- Large desktop: > 1440px (max-width container)

## Performance Targets

- Load time: < 2 seconds
- Lighthouse score: 90+ all categories
- No external CSS/JS frameworks
- Lazy-loaded images below fold

## Assets

- `assets/images/rodsanis_logo_1.png` - Company logo
- `assets/images/srodriguez_headshot.jpg` - Founder headshot

## Content Source

All website copy sourced from `content.md` in project root.
