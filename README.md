# Rodsan Innovative Solutions - Company Website

Official website for Rodsan Innovative Solutions, providing automated solutions to small-medium businesses.

## 🚀 Project Overview

Modern, responsive single-page website built with vanilla HTML, CSS, and JavaScript. Features a clean, tech-focused design with circuit board aesthetics matching the company brand.

**Live Site:** [Coming Soon - rodsantis.com]

## 🎨 Brand Identity

- **Company:** Rodsan Innovative Solutions
- **Colors:** 
  - Primary: Mint-to-teal gradient (#7FFFD4 to #20B2AA)
  - Background: Deep navy (#0A1628)
  - Accent: Lighter teal highlights
  - Text: White/light gray
- **Design Theme:** Tech/automation with circuit board elements

## 📋 Features

- ✅ Responsive single-page design
- ✅ Hero section with video overlay background and call-to-action
- ✅ Services overview
- ✅ About/bio section
- ✅ Contact form with Google Meet booking integration
- ✅ Smooth scroll navigation
- ✅ Mobile-optimized with adaptive video opacity
- ✅ Fast loading performance
- ✅ Modern video background with dark gradient overlay

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Deployment:** Vercel
- **Version Control:** Git/GitHub
- **Booking Integration:** Calendly/Cal.com
- **Domain:** rodsantis.com

## 📁 Project Structure

```
rodsantis-website/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
├── assets/
│   ├── images/
│   │   ├── logo.png    # Company logo
│   │   └── srodriguez_headshot.jpg # Professional photo
│   └── videos/
│       └── hero_background.mp4 # Hero section video overlay
├── content.md          # Website content source
├── README.md           # This file
└── CLAUDE.md           # Claude Code instructions
```

## 🚀 Local Development

### Prerequisites
- Node.js 18+ (for local server)
- Git
- Modern web browser

### Setup

1. Clone the repository:
```bash
git clone https://github.com/YOUR-ORG/rodsantis-website.git
cd rodsantis-website
```

2. Open with a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve

# Or just open index.html in your browser
```

3. View in browser:
```
http://localhost:8000
```

## 📤 Deployment

### Vercel Deployment

1. **Connect Repository:**
   - Log in to [Vercel](https://vercel.com)
   - Click "Add New Project"
   - Import this GitHub repository

2. **Configure Project:**
   - Framework Preset: Other
   - Build Command: (leave empty)
   - Output Directory: ./
   - Install Command: (leave empty)

3. **Deploy:**
   - Click "Deploy"
   - Vercel will provide a live URL immediately

4. **Custom Domain:**
   - Go to Project Settings → Domains
   - Add `rodsantis.com`
   - Update DNS records at your domain registrar

### Manual Deployment

Simply upload all files to any static hosting provider:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any web host with static file support

## 📝 Content Updates

All website content is stored in `content.md`. To update:

1. Edit `content.md` with new information
2. Use Claude Code to regenerate HTML from updated content
3. Commit and push changes
4. Vercel auto-deploys updates

## 🔧 Development Workflow

### Making Changes

```bash
# Create a new branch
git checkout -b feature/update-services

# Make your changes
# Test locally

# Commit changes
git add .
git commit -m "Updated services section"

# Push to GitHub
git push origin feature/update-services

# Create Pull Request on GitHub
# Merge to main
# Vercel auto-deploys
```

### Using Claude Code for Updates

```bash
# Start Claude Code in project directory
claude-code

# Example prompts:
# - "Add a new service to the services section"
# - "Update the about section with new information"
# - "Change the hero headline to be more compelling"
# - "Add a testimonials section"
```

## 🎯 Performance

- **Lighthouse Score Target:** 90+ across all categories
- **Load Time:** < 2 seconds
- **Mobile-First:** Fully responsive design
- **SEO:** Optimized meta tags and semantic HTML

## 📧 Contact & Support

**Website Issues:** Create an issue in this repository
**Business Inquiries:** Contact form on website
**Email:** [your-email@rodsantis.com]

## 📄 License

© 2026 Rodsan Innovative Solutions. All rights reserved.

## 🙏 Acknowledgments

- Built with Claude Code
- Deployed on Vercel
- Inspired by modern tech consulting sites

---

**Last Updated:** February 2026
**Status:** 🚧 In Development