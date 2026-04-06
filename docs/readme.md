# Rodsanis Website — README

Official website for Rodsan Innovative Solutions, providing automated solutions to small-medium businesses.

## Project Overview

Modern, responsive single-page website built with vanilla HTML, CSS, and JavaScript. Features a clean, tech-focused design with circuit board aesthetics matching the company brand.

Live Site: Coming Soon — [rodsantis.com](https://rodsantis.com)

## Brand Identity

- Company: Rodsan Innovative Solutions
- Colors: Primary mint-to-teal gradient (#7FFFD4 to #20B2AA), Background deep navy (#0A1628), Accent lighter teal highlights, Text white/light gray
- Design Theme: Tech/automation with circuit board elements

## Features

- Responsive single-page design
- Hero section with video overlay background and call-to-action
- Services overview
- About/bio section
- Contact form with Google Meet booking integration
- Smooth scroll navigation
- Mobile-optimized with adaptive video opacity
- Fast loading performance
- Modern video background with dark gradient overlay

## Tech Stack

- Frontend: HTML5, CSS3, JavaScript (ES6+)
- Deployment: Vercel
- Version Control: Git/GitHub
- Booking Integration: Calendly/Cal.com
- Domain: rodsantis.com

## Project Structure

```
rodsantis-website/
├── index.html         # main HTML
├── styles.css         # stylesheet
├── script.js          # JavaScript
├── assets/images/     # logo + headshot
├── assets/videos/     # hero background
└── content.md         # website content source
```

## Local Development

```bash
python -m http.server 8000
```

Then view at http://localhost:8000

## Deployment

Deployed automatically to Vercel on push to main. No build step needed — pure static site.

## Content Updates

All website content is stored in `content.md`. To update: edit `content.md`, use Claude Code to regenerate HTML from updated content, commit and push, Vercel auto-deploys.

Last Updated: February 2026 | Status: In Development
