# 🚀 Developer Portfolio — React + Vite

A modern, responsive personal portfolio website built with React, Vite, React Router, and Framer Motion. Features a stunning dark/light theme, animated page transitions, scroll reveal effects, and a professional design system.

---

## ✨ Features

- **5 Pages**: Home, About, Skills, Projects, Contact
- **Animated page transitions** via Framer Motion
- **Dark / Light mode** toggle with CSS variables
- **Responsive** — fully mobile-friendly with hamburger menu
- **Loading screen** with animated logo
- **Scroll reveal** animations on all content sections
- **Project filtering** by category (Fullstack, Frontend, Backend, AI/ML)
- **Contact form** with validation
- **Floating skill badges** and progress bars with entrance animations

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Loader.jsx / Loader.css
│   │   ├── Navbar.jsx / Navbar.css
│   │   └── PageTransition.jsx
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── pages/
│   │   ├── Home.jsx / Home.css
│   │   ├── About.jsx / About.css
│   │   ├── Skills.jsx / Skills.css
│   │   ├── Projects.jsx / Projects.css
│   │   └── Contact.jsx / Contact.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🛠 Getting Started

### Prerequisites
- Node.js **18+**
- npm or yarn

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

---

## 🎨 Customisation Guide

### Update your personal info

| File | What to change |
|---|---|
| `src/pages/Home.jsx` | Name, tagline, bio, stats |
| `src/pages/About.jsx` | Introduction, career objective, highlights |
| `src/pages/Skills.jsx` | Skill categories, names, and levels (0–100) |
| `src/pages/Projects.jsx` | Project titles, descriptions, tech stacks, links, images |
| `src/pages/Contact.jsx` | Email, location, social links |

### Change the colour theme

Edit CSS variables in `src/index.css`:

```css
:root {
  --accent: #c8f04c;    /* primary accent (lime-green) */
  --accent-2: #6ee7f7;  /* secondary accent (cyan) */
  --bg: #0a0a0f;        /* dark background */
}
```

### Replace profile photo

The current avatar uses [DiceBear](https://www.dicebear.com/). To use your own photo:

1. Place your image in `src/assets/` (e.g. `profile.jpg`)
2. Import and use it:

```jsx
// In Home.jsx and About.jsx:
import profileImg from '../assets/profile.jpg'
// ...
<img src={profileImg} alt="Your Name" />
```

---

## 🧩 Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 5 | Build tool & dev server |
| React Router 6 | Client-side routing |
| Framer Motion | Animations & transitions |
| CSS Modules / Global CSS | Styling |
| DM Sans + Syne | Typography (via Google Fonts) |

---

## 📦 Deployment

### Vercel (recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag the `dist/` folder into Netlify's dashboard
```

### GitHub Pages

Add to `vite.config.js`:
```js
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```

Then:
```bash
npm run build
# Push `dist/` to the `gh-pages` branch
```

---

## 📄 License

MIT — free to use and modify for personal and commercial projects.
