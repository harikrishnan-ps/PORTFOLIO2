# Portfolio Website - Two Versions Available

This repository contains **two complete implementations** of Harikrishnan P S's AI/ML Developer Portfolio, each with identical UI/UX but different technology stacks.

## 📦 Available Versions

### 1. React + TypeScript Version (Main)
**Location:** `/src` directory

**Technology Stack:**
- ⚛️ React 18
- 📘 TypeScript
- 🎨 Tailwind CSS
- 🎯 shadcn/ui components
- ⚡ Vite build tool
- 🎭 Lucide React icons

**Best For:**
- Modern web applications
- Component-based architecture
- Type-safe development
- Scalable projects
- Teams familiar with React

**Getting Started:**
```bash
npm install
npm run lint  # Build and validate
```

**Features:**
- Hot Module Replacement
- Component reusability
- Type safety with TypeScript
- Modern development tools
- Optimized production builds

---

### 2. Pure HTML/CSS/JavaScript Version
**Location:** `/html-version` directory

**Technology Stack:**
- 📄 HTML5
- 🎨 CSS3 (Custom Properties)
- ⚡ Vanilla JavaScript (ES6+)
- 🚫 Zero dependencies

**Best For:**
- Simple portfolios
- No build process needed
- Maximum performance
- Easy deployment
- Learning web fundamentals

**Getting Started:**
```bash
cd html-version
# Open index.html in browser or use:
python -m http.server 8000
```

**Features:**
- No build process required
- Instant load time
- Zero dependencies
- Works everywhere
- Easy to customize

---

## 🎨 Visual Comparison

**Both versions are visually identical:**
- ✅ Same design system
- ✅ Same color scheme (deep dark blue + vibrant blue)
- ✅ Same layout and spacing
- ✅ Same animations and transitions
- ✅ Same responsive behavior
- ✅ Same user experience

## 📊 Feature Comparison

| Feature | React Version | HTML Version |
|---------|--------------|--------------|
| **Setup Time** | 5 minutes | 0 minutes |
| **Dependencies** | 50+ packages | None |
| **Bundle Size** | ~200KB | ~50KB |
| **Build Required** | Yes | No |
| **Hot Reload** | Yes | With server |
| **Type Safety** | Yes (TypeScript) | No |
| **Component Reuse** | Excellent | Manual |
| **Learning Curve** | Moderate | Easy |
| **Deployment** | Build → Deploy | Direct upload |
| **Performance** | Excellent | Excellent |
| **SEO** | Excellent | Excellent |
| **Accessibility** | Excellent | Excellent |

## 🚀 Quick Start Guide

### React Version
```bash
# Install dependencies
npm install

# Validate and build
npm run lint

# The app is ready to deploy
```

### HTML Version
```bash
# Navigate to folder
cd html-version

# Option 1: Open directly
open index.html

# Option 2: Use local server
python -m http.server 8000
# Then open http://localhost:8000
```

## 📁 File Structure

### React Version
```
src/
 components/
   └── portfolio/
       ├── Navigation.tsx
       ├── Hero.tsx
       ├── About.tsx
       ├── Education.tsx
       ├── Projects.tsx
       ├── Experience.tsx
       ├── Skills.tsx
       ├── Achievements.tsx
       ├── Contact.tsx
       └── Footer.tsx
 pages/
   └── Index.tsx
 index.css
 routes.tsx
```

### HTML Version
```
html-version/
 index.html          # All content
 styles.css          # All styles
 script.js           # All interactivity
 README.md          # Documentation
 QUICKSTART.md      # Quick start guide
 COMPARISON.md      # Detailed comparison
```

## 🎯 Which Version Should You Use?

### Choose React Version If:
- ✅ You're building a larger application
- ✅ You need component reusability
- ✅ You want type safety
- ✅ Your team knows React
- ✅ You plan to add complex features
- ✅ You want modern development tools

### Choose HTML Version If:
- ✅ You want a simple portfolio
- ✅ You prefer no build process
- ✅ You want minimal dependencies
- ✅ You need maximum performance
- ✅ You're learning web fundamentals
- ✅ You want easy deployment

## 📚 Documentation

### React Version
- Main README: `/README.md`
- PRD: `/docs/prd.md`
- Portfolio Summary: `/PORTFOLIO_SUMMARY.md`

### HTML Version
- Main README: `/html-version/README.md`
- Quick Start: `/html-version/QUICKSTART.md`
- Comparison: `/html-version/COMPARISON.md`

## 🌟 Features (Both Versions)

### Sections
1. **Hero** - Eye-catching introduction with gradient effects
2. **About** - Professional summary with expertise highlights
3. **Education** - Academic background
4. **Projects** - Featured projects with details and GitHub links
5. **Experience** - Professional timeline
6. **Skills** - Categorized technical competencies
7. **Achievements** - Key accomplishments
8. **Contact** - Contact information and social links
9. **Footer** - Copyright and credits

### Functionality
- ✅ Smooth scrolling navigation
- ✅ Responsive mobile menu
- ✅ Scroll animations
- ✅ Active navigation highlighting
- ✅ Hover effects
- ✅ Keyboard navigation
- ✅ Touch-friendly
- ✅ Fully responsive

## 🎨 Design System

### Colors
- **Background:** Deep dark blue (`#0a0c10`)
- **Primary:** Vibrant blue (`#007bff`)
- **Text:** Light gray (`#f0f0f0`)
- **Cards:** Slightly lighter than background

### Typography
- System font stack
- Responsive sizing
- Clear hierarchy

### Effects
- Gradient text
- Blue glow on hover
- Smooth transitions
- Card shadows

## 📱 Responsive Design

Both versions work perfectly on:
- 📱 Mobile phones (< 768px)
- 📱 Tablets (768px - 1279px)
- 💻 Desktops (≥ 1280px)
- 🖥️ Large screens (≥ 1920px)

## 🚀 Deployment Options

### React Version
- Vercel (recommended)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting

### HTML Version
- GitHub Pages (easiest)
- Netlify (drag & drop)
- Any web server
- Works from file system

## 📈 Performance

### React Version
- First Contentful Paint: ~1-2s
- Time to Interactive: ~2-3s
- Lighthouse Score: 90+

### HTML Version
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Lighthouse Score: 95+

## 🔧 Customization

Both versions are easy to customize:

### React Version
- Edit component files in `src/components/portfolio/`
- Modify design tokens in `src/index.css`
- Update content in component JSX

### HTML Version
- Edit content in `index.html`
- Modify styles in `styles.css`
- Update interactivity in `script.js`

## 📞 Contact Information

- **Name:** Harikrishnan P S
- **Role:** AI/ML Developer
- **Phone:** +91 7736673917
- **Email:** harikrishnanpsofficial@gmail.com
- **LinkedIn:** [harikrishnanpsofficial](https://linkedin.com/in/harikrishnanpsofficial)
- **GitHub:** [harikrishnan-ps](https://github.com/harikrishnan-ps)
- **Location:** Ernakulam, Kerala, India

## 🎓 Projects Featured

1. **Advanced AI Reasoning System** - Enterprise LLM Application
2. **Neural Data Analyst** - AI-Powered Business Suite

## 💼 Experience Highlighted

1. Open-Source Contributor (May 2025 - Aug 2025)
2. Software Development Intern at KeySoft (May 2024 - Aug 2024)
3. Community Ambassador at Pregrad Research Community (Apr 2023 - May 2023)

## 🏆 Achievements

1. Dev-Clash 24-Hour Hackathon Participant
2. Open-Source AI/ML Developer
3. Finalist, MaTPO Aptitude Idol 2025

## 🛠️ Technical Skills

- **Languages:** Python, Java, SQL
- **AI/ML:** NLP, LLMs, RAG, Deep Learning, Prompt Engineering
- **Frameworks:** PyTorch, TensorFlow, LangChain, Hugging Face
- **Tools:** Git, Jupyter, VS Code, MySQL

## 📝 License

Both versions are created for Harikrishnan P S. Feel free to use the code structure as inspiration for your own portfolio.

## 🙏 Acknowledgments

- Design inspired by modern portfolio best practices
- Both versions maintain identical user experience
- Optimized for performance and accessibility

---

## 🎉 Get Started Now!

Choose your preferred version and start customizing:

**React Version:**
```bash
npm install && npm run lint
```

**HTML Version:**
```bash
cd html-version && open index.html
```

---

**Built with ❤️ in two flavors: React and Vanilla JavaScript**
