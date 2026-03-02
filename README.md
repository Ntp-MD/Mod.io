# MOD.io - Modern CDN Creator Library

A modern landing page for MOD.io, a CDN platform designed for library creators.

## Features

- ⚡ Vue 3 with Vite for fast development
- 🎨 White and black theme with CSS variables
- 📱 Fully responsive design using clamp() and calc()
- 🔧 Auto-import components with unplugin-vue-components
- 📦 Configured for GitHub Pages deployment

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Manual Deployment to GitHub Pages

### Prerequisites

- Git repository on GitHub
- Node.js installed locally

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Build the Project

```bash
npm run build
```

### Step 3: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:

1. Build the project to the `dist` folder
2. Deploy the `dist` folder to the `gh-pages` branch
3. Your site will be available at `https://Ntp-MD.github.io/Mod.io/`

### Alternative Manual Deployment

If you prefer not to use the gh-pages package:

1. Build the project:

```bash
npm run build
```

2. Push the dist folder to gh-pages branch:

```bash
git subtree push --prefix dist origin gh-pages
```

### Configuration Notes

- The `base` in `vite.config.js` is set to `/Mod.io/`
- Update this to match your repository name if different
- The project is configured for GitHub Pages with proper asset paths

## Project Structure

```
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.vue
│   │   ├── Hero.vue
│   │   ├── Features.vue
│   │   ├── HowItWorks.vue
│   │   ├── Testimonials.vue
│   │   ├── Pricing.vue
│   │   ├── CTA.vue
│   │   └── Footer.vue
│   ├── styles/
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── utilities.css
│   │   ├── components.css
│   │   └── main.css
│   ├── App.vue
│   ├── main.js
│   └── components.d.ts
├── index.html
├── package.json
└── vite.config.js
```

## CSS Architecture

- **variables.css** - CSS custom properties for colors, spacing, typography
- **base.css** - Reset and global element styles
- **utilities.css** - Reusable utility classes
- **components.css** - Shared component styles
- **main.css** - Import all styles

## License

MIT
