# Claude Code Instructions - Rodsan Innovative Solutions Website

This file contains specific instructions for Claude Code when building and maintaining this website.

## 🎯 Project Mission

Build a professional, conversion-focused website for Rodsan Innovative Solutions - an automation consulting firm serving small-medium businesses. The site must be aesthetically pleasing, easy to navigate, and optimized for client acquisition.

## 🎨 Design Requirements

### Brand Colors (CRITICAL - Use Exactly)
```css
/* Primary Colors */
--primary-mint: #7FFFD4;
--primary-teal: #20B2AA;
--background-navy: #0A1628;
--dark-blue: #0F1E33;

/* Accent Colors */
--accent-light-teal: #5CE1E6;
--accent-cyan: #38B2AC;

/* Text Colors */
--text-primary: #FFFFFF;
--text-secondary: #E2E8F0;
--text-muted: #94A3B8;
```

### Design Principles
1. **Modern & Tech-Forward:** Circuit board aesthetic, clean lines, gradient accents
2. **Professional but Approachable:** Not corporate-stiff, welcoming to SMB owners
3. **Conversion-Focused:** Clear CTAs, easy path to booking consultation
4. **Mobile-First:** Perfect experience on all devices
5. **Fast & Performant:** Minimal dependencies, optimized assets

### Visual Style Inspiration
- NVIDIA AI Computing: Bold hero sections, gradient text effects
- Squarespace Consulting: Clean service cards, professional imagery
- Tech startup aesthetics: Glassmorphism, subtle animations, modern typography

## 📐 Layout Structure

### Navigation Bar
- Fixed/sticky on scroll
- Logo (left) + Navigation links (right)
- Links: Home | Services | About | Contact
- Mobile: Hamburger menu
- Glass morphism effect with backdrop blur

### Hero Section
- Full viewport height (100vh or 80vh)
- Company logo centered or left-aligned
- Compelling headline (large, gradient text)
- Subheadline (2 sentences max)
- Primary CTA button: "Schedule Free Consultation"
- Subtle animated background (circuit pattern or gradient)
- Scroll indicator

### Services Section
- Grid layout: 3 columns desktop, 2 tablet, 1 mobile
- Each service card includes:
  - Icon (SVG or emoji, colored with brand gradient)
  - Service name (bold)
  - 2-3 sentence description
  - Hover effect (lift, glow, or border highlight)
- Section headline: "Our Services" or "What We Do"

### About Section
- Two-column layout (image left, text right on desktop)
- Professional headshot photo (circular or rounded rectangle)
- 3-4 paragraphs about company/founder
- Optional: Stats/achievements (years experience, clients served)
- Background: Slightly different from main (subtle contrast)

### Contact Section
- Two-column layout:
  - **Left:** Contact form (Name, Email, Message)
  - **Right:** Calendly/Cal.com embed OR direct booking link
- Primary CTA: "Book Your Strategy Call"
- Alternative: Email/phone display
- Footer with copyright and social links (if applicable)

### Footer
- Minimal design
- Copyright notice
- Optional: Privacy policy, Terms of service links
- Social media icons (LinkedIn, etc.) if provided

## 🛠️ Technical Requirements

### HTML
- Semantic HTML5 elements (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- Proper heading hierarchy (h1 → h2 → h3)
- Accessibility: ARIA labels, alt text, keyboard navigation
- Meta tags: Description, keywords, Open Graph for social sharing
- Favicon support

### CSS
- Mobile-first responsive design
- CSS Grid and Flexbox for layouts
- CSS custom properties (variables) for colors/spacing
- Smooth scroll behavior
- Transitions and animations (subtle, not distracting)
- No external CSS frameworks (keep it lightweight)
- Media queries: Mobile (<640px), Tablet (641-1024px), Desktop (>1024px)

### JavaScript
- Vanilla JS only (no frameworks)
- Smooth scroll navigation
- Mobile menu toggle
- Form validation (if not using external form service)
- Intersection Observer for scroll animations
- Lazy loading for images
- No jQuery or heavy libraries

### Performance Optimization
- Minify CSS and JS in production
- Optimize images (WebP format where possible)
- Lazy load images below fold
- Inline critical CSS
- Defer non-critical JavaScript
- Target: <2s load time, 90+ Lighthouse score

## 📝 Content Integration

### Reading content.md
When building the website, read `content.md` for all text content:
- Parse markdown sections
- Map content to appropriate HTML sections
- Preserve formatting and line breaks where appropriate
- Use content exactly as written (don't improvise unless asked)

### Asset References
- Logo: `assets/images/logo.png`
- Headshot: `assets/images/headshot.jpg` (or .png)
- Additional images in `assets/images/` directory
- Use relative paths for all assets

## 🎯 Call-to-Action Strategy

### Primary CTA (Most Important)
- Text: "Schedule Free Consultation" or "Book Your Strategy Call"
- Placement: Hero section, Contact section, possibly sticky button
- Action: Links to Calendly/Cal.com booking page
- Style: Prominent button with gradient background, hover effect

### Secondary CTAs
- "Learn More" (scroll to services)
- "Get In Touch" (scroll to contact)
- "View Services" (scroll to services section)

## 🔧 Common Modification Requests

### Adding a New Service
```html
<!-- Add to services grid -->
<div class="service-card">
  <div class="service-icon">[ICON]</div>
  <h3 class="service-title">[Service Name]</h3>
  <p class="service-description">[Description]</p>
</div>
```

### Updating Colors
- Modify CSS variables at `:root` level
- All colors cascade from custom properties
- Maintain contrast ratios for accessibility (WCAG AA)

### Adding Sections
- Follow existing section structure
- Include section wrapper with proper semantic HTML
- Add navigation link if needed
- Update smooth scroll behavior in JS

### Form Integration Options
1. **Calendly Embed:** Use inline embed code
2. **Cal.com:** Similar embed approach
3. **Contact Form:** HTML form + Formspree/Netlify Forms backend
4. **Email Link:** Simple mailto: link as fallback

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */

/* Mobile: Base styles (320px - 640px) */

/* Tablet */
@media (min-width: 641px) {
  /* Adjustments for tablet */
}

/* Desktop */
@media (min-width: 1025px) {
  /* Full desktop layout */
}

/* Large Desktop */
@media (min-width: 1440px) {
  /* Max-width content, centered */
}
```

## ✅ Pre-Deploy Checklist

Before considering the site complete, verify:

- [ ] All content from content.md is properly integrated
- [ ] Logo displays correctly (check transparency)
- [ ] All images have alt text
- [ ] Navigation links work (smooth scroll)
- [ ] Mobile menu functions properly
- [ ] Form/booking link works
- [ ] Site is responsive on all breakpoints
- [ ] No console errors
- [ ] Fast load time (<2s)
- [ ] Meta tags complete (title, description, OG tags)
- [ ] Favicon present
- [ ] Color contrast passes WCAG AA
- [ ] All external links open in new tab

## 🚀 Build Commands

```bash
# No build process needed - static HTML/CSS/JS
# Just open index.html or use a local server

# Local development server options:
python -m http.server 8000
# or
npx serve
# or
npx http-server
```

## 🔄 Update Workflow

When content needs updating:

1. User updates `content.md`
2. Claude Code reads updated content
3. Regenerate affected HTML sections
4. Preserve styling and structure
5. Test locally
6. Commit and push to GitHub
7. Vercel auto-deploys

## 💡 Best Practices When Assisting

- **Ask Clarifying Questions:** If content is ambiguous, ask before generating
- **Show Before/After:** When making changes, explain what changed
- **Preserve User Customizations:** Don't overwrite manual tweaks without asking
- **Suggest Improvements:** Proactively recommend UX/design enhancements
- **Explain Technical Decisions:** Help user understand why certain approaches are used
- **Mobile Testing:** Always consider mobile experience
- **Performance First:** Prioritize speed and simplicity over flashy features

## 📚 Additional Resources

- **Vercel Docs:** https://vercel.com/docs
- **MDN Web Docs:** https://developer.mozilla.org
- **Can I Use:** https://caniuse.com (browser compatibility)
- **Calendly Help:** https://help.calendly.com
- **Lighthouse:** Chrome DevTools > Lighthouse tab

## 🎨 Animation Guidelines

### Allowed Animations
- Fade in on scroll (Intersection Observer)
- Hover effects on buttons/cards (scale, shadow, border)
- Smooth color transitions
- Gentle parallax on hero section
- Menu slide in/out
- Loading states

### Avoid
- Auto-playing videos
- Excessive motion that could cause motion sickness
- Animations that block content
- Long animation durations (keep under 300ms)
- Animations without purpose

## 🔒 Security Considerations

- No sensitive data in frontend code
- Use HTTPS (Vercel provides automatically)
- Validate form inputs
- Use rel="noopener noreferrer" for external links
- No API keys in client-side code

## 📊 Analytics (Future Enhancement)

When ready to add analytics:
- Google Analytics 4
- Vercel Analytics (built-in)
- Simple privacy-friendly alternatives (Plausible, Fathom)

---

**Remember:** This website represents Rodsan Innovative Solutions' professional brand. Every pixel matters. Prioritize quality, performance, and user experience above all else.

**When in doubt:** Ask the user for clarification rather than making assumptions.

**Goal:** Create a website that converts visitors into consulting clients.

---

## Notion Document IDs

| Doc | Notion Page ID |
|-----|----------------|
| Rodsanis Website — README | 335a5ada-e132-815b-8619-d6fda74ca166 |
| Website — Changelog | 335a5ada-e132-8194-a886-c76a7b9f9226 |
| Website — Spec | 335a5ada-e132-8125-b8d5-eeb045947c6a |
| Website — Status | 335a5ada-e132-8126-85d5-c0cb5f689f8b |