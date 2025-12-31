# 🚀 Quick Start Guide

## ✅ Project Status

- [x] All components built
- [x] Hydration errors fixed
- [x] Favicon added
- [x] .gitignore created
- [x] README.md updated
- [x] **Theme toggle fixed** ✨
- [ ] Deploy to GitHub Pages
- [ ] Audit & cleanup laptop

---

## 🧪 Test Before Deployment

```bash
cd "C:\Development\Portofolio\aryafikriii.github.io"

# Start dev server
npm run dev
```

1. Open http://localhost:3000
2. Test theme toggle (moon/sun icon) - should switch between light/dark
3. Test navigation links - smooth scroll to sections
4. Test contact form submission
5. Test CV download button
6. Test responsive design (mobile, tablet, desktop)

**If everything works**, proceed to deployment!

---

## 📦 Deploy to GitHub Pages

### Step 1: Build the Project

```bash
# Ensure you're in the project directory
cd "C:\Development\Portofolio\aryafikriii.github.io"

# Build for production
npm run build
```

This creates an `/out` folder with static files.

### Step 2: Initialize Git (if not already)

```bash
# Initialize repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio website

- Next.js 16 with TypeScript
- Tailwind CSS 4 with dark/light mode
- Framer Motion animations
- Formspree contact integration
- Static export for GitHub Pages"
```

### Step 3: Push to Main Branch

```bash
# Add remote repository
git remote add origin https://github.com/aryafikriii/aryafikriii.github.io.git

# Set main branch
git branch -M main

# Push to main
git push -u origin main
```

### Step 4: Deploy to gh-pages Branch

```bash
# Navigate to build output
cd out

# Initialize new Git repository
git init

# Add all built files
git add -A

# Commit
git commit -m "Deploy portfolio to GitHub Pages"

# Create gh-pages branch
git branch -M gh-pages

# Add remote
git remote add origin https://github.com/aryafikriii/aryafikriii.github.io.git

# Force push to gh-pages
git push -f origin gh-pages

# Return to project root
cd ..
```

### Step 5: Configure GitHub Pages

1. Go to: https://github.com/aryafikriii/aryafikriii.github.io/settings/pages
2. **Source**: Deploy from branch
3. **Branch**: `gh-pages`
4. **Folder**: `/ (root)`
5. Click **Save**

**Wait 2-5 minutes**, then visit: **https://aryafikriii.github.io**

---

## 🔍 Verify Deployment

After deployment:

1. Visit https://aryafikriii.github.io
2. Check all sections load correctly
3. Test theme toggle
4. Test navigation
5. Test contact form
6. Test CV download
7. Test on mobile devices

---

## 🧹 Cleanup Corporate Laptop

**ONLY AFTER** successful deployment and verification!

### Step 1: Audit Installed Packages

```bash
# Check global packages
npm list -g --depth=0 > "%USERPROFILE%\Desktop\npm-audit-global.txt"

# Check local project licenses
cd "C:\Development\Portofolio\aryafikriii.github.io"
npx license-checker --summary > "%USERPROFILE%\Desktop\licenses.txt"
```

Review `licenses.txt` for:
- ✅ MIT, ISC, BSD, Apache-2.0 (safe)
- ❌ GPL, Commercial licenses (need attention)

### Step 2: Backup (Optional)

```bash
# Backup build output to desktop
xcopy "C:\Development\Portofolio\aryafikriii.github.io\out" "%USERPROFILE%\Desktop\portfolio-backup" /E /I /H /Y
```

### Step 3: Delete Project Files

```bash
# Delete entire project
rmdir /S /Q "C:\Development\Portofolio\aryafikriii.github.io"

# Delete assets folder
rmdir /S /Q "C:\Development\Portofolio\Asset"

# Delete parent folder if empty
rmdir "C:\Development\Portofolio" 2>nul
```

### Step 4: Clear npm Cache

```bash
# Clear cache
npm cache clean --force

# Verify cache is clean
npm cache verify
```

### Step 5: Uninstall Node.js (If Not Needed for Work)

⚠️ **ONLY if Node.js is NOT used for company projects!**

1. **Settings** → **Apps** → **Apps & features**
2. Search: **Node.js**
3. Click **Uninstall**
4. Follow uninstall wizard

Then clean remaining files:

```bash
# Delete npm folders
rmdir /S /Q "%APPDATA%\npm"
rmdir /S /Q "%APPDATA%\npm-cache"
```

**Full audit guide**: See `AUDIT_AND_CLEANUP.md`

---

## 🆘 Troubleshooting

### Theme Toggle Not Working

If theme toggle stops working after deployment:

1. Clear browser cache
2. Hard refresh: `Ctrl + Shift + R`
3. Clear localStorage: Open F12 → Console → `localStorage.clear(); location.reload();`

### 404 Errors on GitHub Pages

If you get 404 errors:

1. Ensure `gh-pages` branch exists
2. Verify GitHub Pages settings point to `gh-pages` branch
3. Check that `.nojekyll` file exists in deployment (Next.js build includes this automatically)

### Contact Form Not Working

Verify Formspree endpoint in `components/Contact.tsx`:
- Should be: `https://formspree.io/f/xqajzekq`
- Email target: `aryafikriansyah@gmail.com`

---

## 📊 Performance Tips

After deployment, check performance:

1. **Google PageSpeed Insights**: https://pagespeed.web.dev/
2. **GTmetrix**: https://gtmetrix.com/
3. **WebPageTest**: https://www.webpagetest.org/

Expected scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

---

## 🔄 Future Updates

To update your portfolio:

```bash
# Make changes locally
# ...

# Build
npm run build

# Deploy (repeat Step 4 from deployment)
cd out
git init
git add -A
git commit -m "Update portfolio - [describe changes]"
git branch -M gh-pages
git remote add origin https://github.com/aryafikriii/aryafikriii.github.io.git
git push -f origin gh-pages
cd ..
```

---

**Last Updated**: December 31, 2024
**Status**: ✅ Ready for deployment
**Next Step**: Deploy to GitHub Pages
