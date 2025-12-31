# Arya Fikriansyah - Personal Portfolio

Modern personal portfolio website showcasing professional experience, projects, and publications.

🌐 **Live Site**: [aryafikriii.github.io](https://aryafikriii.github.io)

---

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (Static Export)

---

## ✨ Features

- 🎨 Modern design with bold animations
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive (mobile-first)
- ⚡ Static site generation (fast loading)
- 📧 Contact form integration
- 🎯 SEO optimized
- ♿ Accessibility friendly

---

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/aryafikriii/aryafikriii.github.io.git
cd aryafikriii.github.io

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
# Output: /out directory (static files ready for deployment)
```

---

## 📦 Deployment

### GitHub Pages Setup

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to gh-pages branch**:
   ```bash
   cd out
   git init
   git add -A
   git commit -m "Deploy portfolio"
   git branch -M gh-pages
   git remote add origin https://github.com/aryafikriii/aryafikriii.github.io.git
   git push -f origin gh-pages
   ```

3. **Configure GitHub Pages**:
   - Repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` / root
   - Save

Site will be live at: **https://aryafikriii.github.io**

---

## 📂 Project Structure

```
aryafikriii.github.io/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page composition
│   ├── globals.css         # Global styles and theme
│   └── icon.svg            # Favicon
├── components/
│   ├── Navigation.tsx      # Header with theme toggle
│   ├── Hero.tsx           # Landing section
│   ├── About.tsx          # Professional summary
│   ├── Experience.tsx     # Work history
│   ├── Projects.tsx       # Featured projects
│   ├── Publications.tsx   # Research papers
│   ├── TechStack.tsx      # Technologies
│   ├── Education.tsx      # Academic background
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer
│   └── ui/
│       ├── SectionHeader.tsx
│       └── ThemeProvider.tsx
├── lib/
│   └── utils.ts           # Utility functions
└── public/
    ├── Profile.pdf        # CV download
    ├── profile.jpg        # Profile photo
    └── logos/            # Company logos
```

---

## 🎨 Customization

### Theme Colors

Edit `app/globals.css` to customize the color scheme:

```css
@theme {
  --color-primary: #2563eb;        /* Blue */
  --color-secondary: #7c3aed;      /* Purple */
  --color-accent: #10b981;         /* Green */
}
```

### Content

Update personal information in:
- `components/Hero.tsx` - Name, tagline, bio
- `components/Experience.tsx` - Work history
- `components/Projects.tsx` - Project showcase
- `components/Publications.tsx` - Research papers
- `components/TechStack.tsx` - Technologies
- `components/Education.tsx` - Academic background

---

## 📄 License

MIT License - Free to use for personal portfolios

---

## 👨‍💻 Author

**Arya Fikriansyah**

- LinkedIn: [linkedin.com/in/arya-fikriansyah](https://www.linkedin.com/in/arya-fikriansyah)
- GitHub: [github.com/aryafikriii](https://github.com/aryafikriii)
- Email: aryafikriansyah@gmail.com

---

Built with ❤️ using Next.js & TypeScript
