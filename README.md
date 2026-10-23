# DEMO Paint — Next.js Web Application

A modern, high-performance web application for **DEMO Paint** built with **Next.js (App Router)** and **React**.

## 🎨 Overview & Features
- **Editorial Visual System**: Warm ivory surfaces, ink typography and hairline rules, with high-contrast serif display type (Instrument Serif) paired with Inter for body copy.
- **Slim Contact Banner**: Live status indicator plus direct phone and email shortcuts.
- **Sticky Glass Navbar**: Blurred ivory header with scroll-state compaction, active-section tracking and a full-screen mobile drawer.
- **High-Impact Hero**: Oversized serif headline, featured project image with caption, and a three-part proof strip.
- **Certified Partner Bar**: Quiet partner row for **Armstrong** and **Slikcoat**.
- **Services Grid**: 6 core service modules (House Painting, POP Ceiling, 3D Wall Panels, Stucco & Plaster, Wallpaper, Screeding) with numbered indexing and instant booking action.
- **Interactive Before & After Slider**: Drag or use 0–100% presets; mouse, touch and keyboard supported.
- **Selected Work Gallery**: Six-project editorial grid with a full-screen lightbox (Escape to close, scroll lock).
- **Project Film**: On-site video walkthrough in a framed 16:9 player.
- **Quote Request Form**: Accessible underlined-field form that pre-fills from the selected service, with a confirmation state.
- **Floating Actions**: Fast-access WhatsApp and click-to-call buttons.

---

## 📁 Project Structure

```
demo-paint/
├── public/
│   ├── assets/
│   │   ├── images/      # High-res photography of completed projects
│   │   └── videos/      # On-site walkthrough video (MP4)
│   ├── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.js     # Root layout, fonts (Instrument Serif & Inter) and metadata
│   │   ├── page.js       # Assembled homepage
│   │   ├── globals.css   # Design tokens and every component style
│   │   └── page.module.css
│   └── components/
│       ├── TopBanner.jsx        # Slim contact and status banner
│       ├── Navbar.jsx           # Sticky header, scroll spy, mobile drawer
│       ├── Hero.jsx             # Editorial headline, figure and proof strip
│       ├── Partners.jsx         # Armstrong & Slikcoat partner row
│       ├── SectionHead.jsx      # Shared eyebrow / heading / description header
│       ├── Services.jsx         # Six-indexed service card grid
│       ├── BeforeAfterSlider.jsx # Clip-path comparison with presets and keyboard
│       ├── Gallery.jsx          # Editorial project grid and lightbox
│       ├── VideoShowcase.jsx    # Framed on-site film
│       ├── ContactSection.jsx   # Contact rows and quote brief form
│       ├── Footer.jsx           # Serif wordmark, links and footer watermark
│       ├── FloatingActions.jsx  # Floating WhatsApp & direct call buttons
│       └── Arrow.jsx            # Shared diagonal arrow icon
├── next.config.mjs
└── package.json
```

---

## 🎨 Design System

- **Type**: Instrument Serif for display and headings; Inter for body, labels and UI. Loaded with `next/font` (no render-blocking requests).
- **Palette**: `--bg #efece6`, `--bg-soft #e7e3db`, `--paper #f7f5f0`, `--ink #16140f`, `--line #d9d3c7`, bronze accent `--accent #9a6a3a`.
- **Rhythm**: one spacing scale (`--gutter`, `--section-y`) and hairline `1px` rules instead of borders and shadows.
- **Layout**: `1240px` max width, editorial two-column section headers, 6-column gallery with fixed spans.
- **Motion**: short, eased transitions on hover and focus only; all motion is disabled under `prefers-reduced-motion`.
- **Accessibility**: visible focus rings, labelled controls, keyboard-operable slider, Escape-to-close lightbox, scroll locking for drawer and lightbox.

---

## 🚀 Running the App Locally

Inside the `demo-paint` directory:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. **Production Build**:
   ```bash
   npm run build
   npm run start
   ```
