# Quick Start Guide - HTML Portfolio

Get your portfolio up and running in under 5 minutes!

## 🚀 Instant Start (No Installation)

### Method 1: Open Directly
1. Navigate to the `html-version` folder
2. Double-click `index.html`
3. Your portfolio opens in your default browser
4. Done! ✅

### Method 2: Drag and Drop
1. Drag `index.html` into your browser window
2. Done! ✅

## 🌐 Local Server (Recommended)

For the best experience, use a local server:

### Using Python (Built-in)
```bash
# Navigate to html-version folder
cd html-version

# Python 3 (most common)
python -m http.server 8000

# Python 2 (if you have it)
python -m SimpleHTTPServer 8000
```
Open: `http://localhost:8000`

### Using Node.js
```bash
# Install serve globally (one time)
npm install -g serve

# Navigate to html-version folder
cd html-version

# Start server
serve
```
Open: `http://localhost:3000`

### Using PHP
```bash
# Navigate to html-version folder
cd html-version

# Start server
php -S localhost:8000
```
Open: `http://localhost:8000`

### Using VS Code
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"
4. Done! ✅

## 📝 Customization Guide

### 1. Update Personal Information

**Contact Details** (in `index.html`):
```html
<!-- Find and replace these -->
<a href="tel:+917736673917">+91 7736673917</a>
<a href="mailto:harikrishnanpsofficial@gmail.com">harikrishnanpsofficial@gmail.com</a>
<a href="https://linkedin.com/in/harikrishnanpsofficial">LinkedIn</a>
<a href="https://github.com/harikrishnan-ps">GitHub</a>
```

### 2. Change Colors

**In `styles.css`**, find the `:root` section:
```css
:root {
  /* Change primary color (blue) */
  --color-primary: hsl(211, 100%, 50%);
  
  /* Change background color */
  --color-background: hsl(217, 33%, 6%);
  
  /* Change card background */
  --color-card: hsl(217, 28%, 9%);
}
```

**Color Examples:**
```css
/* Purple theme */
--color-primary: hsl(270, 100%, 50%);

/* Green theme */
--color-primary: hsl(142, 71%, 45%);

/* Orange theme */
--color-primary: hsl(24, 100%, 50%);

/* Red theme */
--color-primary: hsl(0, 100%, 50%);
```

### 3. Update Projects

**In `index.html`**, find the projects section:
```html
<div class="card project-card">
  <div class="card-header">
    <div class="project-title-section">
      <h3>Your Project Name</h3>
      <p class="project-subtitle">Project Subtitle</p>
    </div>
    <a href="YOUR_GITHUB_URL" ...>
  </div>
  <div class="card-content">
    <p class="project-description">
      Your project description here...
    </p>
    <!-- Update highlights and technologies -->
  </div>
</div>
```

### 4. Modify Skills

**In `index.html`**, find the skills section:
```html
<div class="skill-tags">
  <span class="skill-tag">Your Skill 1</span>
  <span class="skill-tag">Your Skill 2</span>
  <span class="skill-tag">Your Skill 3</span>
</div>
```

### 5. Update Experience

**In `index.html`**, find the timeline section:
```html
<div class="timeline-item">
  <div class="timeline-dot"></div>
  <div class="card experience-card">
    <div class="card-content">
      <h3>Your Job Title</h3>
      <p class="organization">Company Name</p>
      <div class="period">Start Date - End Date</div>
      <!-- Update description and responsibilities -->
    </div>
  </div>
</div>
```

## 🎨 Design Customization

### Change Font
**In `styles.css`**:
```css
body {
  font-family: 'Your Font', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Adjust Spacing
**In `styles.css`**:
```css
:root {
  --spacing-xs: 0.5rem;   /* Extra small */
  --spacing-sm: 1rem;     /* Small */
  --spacing-md: 1.5rem;   /* Medium */
  --spacing-lg: 2rem;     /* Large */
  --spacing-xl: 3rem;     /* Extra large */
}
```

### Modify Border Radius
**In `styles.css`**:
```css
:root {
  --radius: 0.75rem;      /* Default */
  --radius-sm: 0.5rem;    /* Small */
  --radius-lg: 1rem;      /* Large */
}
```

### Change Animation Speed
**In `styles.css`**:
```css
:root {
  /* Faster: 0.2s, Slower: 0.5s */
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 📤 Deployment

### GitHub Pages (Free & Easy)

1. **Create a GitHub repository**
2. **Upload files:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```
3. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to "Pages"
   - Select "main" branch
   - Select "/html-version" folder (or move files to root)
   - Click Save
4. **Access your site:**
   - `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

### Netlify (Drag & Drop)

1. Go to [netlify.com](https://netlify.com)
2. Sign up (free)
3. Drag the `html-version` folder to Netlify
4. Done! Your site is live ✅

### Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up (free)
3. Import your GitHub repository
4. Deploy!

### Traditional Web Hosting

1. Use FTP client (FileZilla, Cyberduck)
2. Upload all files to `public_html` or `www` folder
3. Access via your domain

## 🔧 Troubleshooting

### Issue: Styles not loading
**Solution:** Make sure `styles.css` is in the same folder as `index.html`

### Issue: JavaScript not working
**Solution:** Make sure `script.js` is in the same folder as `index.html`

### Issue: Links not working
**Solution:** Check that all `href` attributes are correct

### Issue: Mobile menu not closing
**Solution:** Clear browser cache and reload

### Issue: Smooth scroll not working
**Solution:** Make sure JavaScript is enabled in your browser

## 📱 Testing

### Test on Different Devices
1. **Desktop:** Open in browser
2. **Mobile:** Use browser DevTools (F12 → Toggle Device Toolbar)
3. **Real Device:** Use local server and access via IP address

### Test on Different Browsers
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

### Test Responsiveness
1. Open browser DevTools (F12)
2. Click "Toggle Device Toolbar" (Ctrl+Shift+M)
3. Test different screen sizes:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1280px
   - Large Desktop: 1920px

## 🎯 Next Steps

### Add More Sections
1. Copy an existing section in `index.html`
2. Modify the content
3. Add navigation link
4. Update `script.js` if needed

### Add Blog
1. Create `blog.html`
2. Link from main page
3. Style with existing CSS

### Add Contact Form
1. Use a service like Formspree or Netlify Forms
2. Add form HTML
3. Style with existing CSS

### Add Analytics
1. Sign up for Google Analytics
2. Add tracking code to `<head>` in `index.html`

### Add SEO
1. Update meta tags in `<head>`
2. Add Open Graph tags
3. Create `sitemap.xml`
4. Add `robots.txt`

## 💡 Tips

1. **Always test locally** before deploying
2. **Use browser DevTools** for debugging
3. **Validate HTML** at [validator.w3.org](https://validator.w3.org)
4. **Optimize images** before adding them
5. **Keep backups** of your files
6. **Test on real devices** when possible
7. **Check browser console** for errors

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org) - HTML, CSS, JavaScript reference
- [Can I Use](https://caniuse.com) - Browser compatibility
- [CSS Tricks](https://css-tricks.com) - CSS tutorials
- [W3C Validator](https://validator.w3.org) - HTML validation

## 🆘 Need Help?

1. Check browser console for errors (F12)
2. Validate HTML at validator.w3.org
3. Check CSS syntax
4. Review JavaScript console
5. Test in different browsers

## ✅ Checklist

Before deploying, make sure:
- [ ] All personal information is updated
- [ ] All links work correctly
- [ ] Contact information is correct
- [ ] Projects are up to date
- [ ] Skills are current
- [ ] Experience is accurate
- [ ] Tested on mobile
- [ ] Tested on desktop
- [ ] Tested in multiple browsers
- [ ] No console errors
- [ ] All images load
- [ ] Smooth scrolling works
- [ ] Mobile menu works
- [ ] All sections are complete

## 🎉 You're Ready!

Your portfolio is now ready to showcase your work to the world!

**Remember:** Keep your portfolio updated with new projects, skills, and experiences.

---

**Questions?** Check the main README.md or COMPARISON.md for more details.
