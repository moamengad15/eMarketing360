# e-Marketing360 — Angular Project

> Arabic RTL single-page Angular 17 application — pixel-perfect replica of the Graphica Marketing website, rebranded as **e-Marketing360**.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (opens http://localhost:4200)
ng serve --open

# 3. Production build
ng build --configuration production
```

**Requirements:** Node.js ≥ 18, Angular CLI 17 (`npm i -g @angular/cli@17`)

---

## Project Structure

```
src/
├── index.html                    ← RTL shell (lang="ar", dir="rtl", Cairo font)
├── main.ts                       ← Bootstrap
├── styles.scss                   ← Global Angular overrides
├── assets/
│   └── css/
│       └── graphica-standalone.css  ← Complete 783-line design system (no external deps)
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
└── app/
    ├── app.module.ts             ← Root NgModule, 13 components
    ├── app.component.ts/html     ← Shell: offer banner, nav, sections, WA float
    ├── app-routing.module.ts     ← Single-page routing (anchor scroll)
    └── components/
        ├── navbar/               ← Sticky header, full-screen hamburger nav, anchor scroll
        ├── hero/                 ← Typing animation, megaphone image, CTA
        ├── partners/             ← 6 partner logos (grayscale hover)
        ├── pricing/              ← 3 plans (انطلاقة/ارتقاء/قمة), WhatsApp CTA
        ├── about/                ← YouTube popup, two-column layout, DomSanitizer
        ├── services/             ← 6 service cards, FA icons, hover effects
        ├── stats/                ← IntersectionObserver counters, company story
        ├── portfolio/            ← Filter tabs, 6 projects, hover image, lightbox
        ├── clients/              ← 8-logo grid (grayscale)
        ├── testimonials/         ← 4 tabs, 3-slide carousel, dot navigation
        ├── blog/                 ← 3 posts with thumbnail, excerpt, read-more
        ├── cta/                  ← Blue WhatsApp call-to-action banner
        └── footer/               ← 4-col grid, newsletter, copyright
```

---

## Design System

| Token | Value |
|---|---|
| Brand Blue | `#004DFF` |
| Font | Cairo (Google Fonts, Arabic) |
| Direction | RTL (`dir="rtl"`, `lang="ar"`) |
| Header height | `72px` |
| Section padding | `80px` top/bottom |
| Border radius | `12px` cards, `8px` buttons |

### CSS Architecture
All layout and component styles live in `src/assets/css/graphica-standalone.css` — a single self-contained file with no external dependencies. It covers:
- CSS custom properties (variables)
- Dark mode (`html.dark-mode` class toggle with localStorage)
- Elementor-compatible grid (`.page-container`, `.section-wrapper`)
- All component-specific styles (hero, pricing, portfolio, testimonials, etc.)
- Full responsive breakpoints (1100px, 960px, 768px)

### Icon Fonts (npm packages, bundled by Angular)
- **Font Awesome 6** — `@fortawesome/fontawesome-free`
- **Bootstrap Icons** — `bootstrap-icons`

---

## Brand Replacement Summary

All occurrences of "جرافيكا" / "Graphica" have been replaced with **"e-Marketing360"** across:
- Page title, meta description (`index.html`)
- Offer banner, section headings, body text
- Navbar brand name, hamburger menu items
- About section, stats section, CTA section
- Testimonials (client quotes updated to reference e-Marketing360)
- Footer brand name, copyright line
- Email domain → `@emarketing360.com`

> Note: Social media URLs (Behance, Instagram, Pinterest, Twitter) in `href` attributes are kept as-is since they point to real accounts.

---

## Key Angular Patterns

| Pattern | Component | Detail |
|---|---|---|
| `ChangeDetectionStrategy.OnPush` | All 13 components | Maximum performance |
| `IntersectionObserver` | `stats` | Triggers counter animation on scroll-into-view |
| `DomSanitizer.bypassSecurityTrustResourceUrl` | `about` | Safe YouTube iframe binding |
| Custom typing animation | `hero` | Native `setTimeout` recursion, no Typed.js |
| Computed getter (`filteredItems`) | `portfolio` | Filter without pipe, OnPush-safe |
| Anchor scroll navigation | `navbar`, `footer` | `element.scrollIntoView({ behavior: 'smooth' })` |
| Dark mode FOUC prevention | `index.html` | Inline `<script>` reads localStorage before paint |

---

## Customization

### Update content
All data is typed arrays in component `.ts` files:
- **Pricing plans** → `pricing.component.ts` → `plans[]`
- **Services** → `services.component.ts` → `allServices[]`
- **Portfolio** → `portfolio.component.ts` → `items[]`
- **Testimonials** → `testimonials.component.ts` → `allTestimonials[]`
- **Blog posts** → `blog.component.ts` → `posts[]`
- **Partners/Clients** → respective `.ts` files

### Update WhatsApp number
Search for `966574255874` and replace globally.

### Add pages
1. `ng generate component components/my-page`
2. Add route in `app-routing.module.ts`
3. Add nav link in `navbar.component.ts`

---

© e-Marketing360. All rights reserved.
