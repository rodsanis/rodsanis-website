# Website — Changelog

All notable changes to the Rodsan Innovative Solutions website.

## [0.3.0] - 2026-02-16

### Added
- Video overlay background in hero section (hero_background.mp4)
- Dark gradient overlay for improved text readability over video
- Scroll indicator hover effect with mint color transition
- Mobile-optimized video display with reduced opacity (25% on mobile)

### Changed
- Updated hero section with modern video background aesthetic
- Enhanced z-index layering hierarchy for proper element stacking
- Improved scroll indicator visibility (now always visible above CTA buttons)

### Removed
- Logo image from hero section for cleaner, more focused design
- Logo floating animation styles
- Mobile logo styles

### Fixed
- Z-index bug where scroll indicator was hidden behind Book a Free Discovery Call button
- Unnecessary wrapper div around scroll indicator

## [0.2.0] - 2026-02-15

### Added
- GitHub Actions CI pipeline (.github/workflows/ci.yml)
  - HTML validation on PRs
  - Link checking on PRs
  - Lighthouse audit on PRs
- Branch protection ruleset on main (requires PR for all changes)
- .gitignore file

## [0.1.0] - 2026-02-15

### Added
- Initial website build
- Project documentation (spec.md, status.md, changelog.md)
- index.html with all sections (Nav, Hero, Services, How It Works, About, Contact, Footer)
- styles.css with responsive design, glassmorphism nav, gradient accents, scroll animations
- script.js with smooth scroll, mobile menu, Intersection Observer animations
- Circuit board CSS background pattern in hero section
- Google Calendar booking link integration
- Mailto contact link
