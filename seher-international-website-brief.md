# Seher International — Business Portfolio Website Brief
> AI-agent-ready prompt. Feed this directly to Bolt.new, Cursor, or any IDE copilot.

---

## Project Overview

Build a modern, professional business portfolio website for **Seher International**, a textile industrial machinery company operating as an importer, indenter, and stockist of engineering solutions. The website will enhance client engagement and business visibility by showcasing the company's vision, mission, services, and products.

**Tone:** Professional, modern, and elegant. Clean visual hierarchy, ample whitespace, easy navigation.

---

## Tech Stack

- **Framework:** Vue 3 + Vite
- **Routing:** Vue Router 4 (with lazy-loaded route components using dynamic `import()`)
- **Styling:** CSS custom properties (design tokens) or Tailwind CSS — your choice, keep bundle lean
- **Deployment target:** Static export via `vite build` → GitHub repository → Hostinger static hosting
- **No WordPress, no PHP, no jQuery, no Bootstrap**

---

## Brand Colors (Suggested — Override If Client Provides)

| Token | Hex | Usage |
|---|---|---|
| Primary (Deep Navy) | `#1A2B4A` | Headings, navbar background |
| Secondary (Steel Blue) | `#2D6A9F` | Buttons, links, accents |
| Accent (Gold) | `#C8960C` | CTA buttons, highlights |
| Light Gray | `#F5F6F8` | Section backgrounds |
| White | `#FFFFFF` | Cards, content areas |
| Text Dark | `#1C1C1E` | Body text |

---

## Typography (Suggested)

- **Headings:** Inter or Nunito (Google Fonts), weight 700
- **Body:** Inter or Open Sans, weight 400, line-height 1.7
- **Buttons/Labels:** Same heading font, weight 600, letter-spacing 0.02em

---

## Routes (Vue Router)

```
/                    → HomeView.vue
/about               → AboutView.vue
/services            → ServicesView.vue
/services/:slug      → ServiceDetailView.vue
/products            → ProductsView.vue
/products/:slug      → ProductDetailView.vue
/portfolio           → PortfolioView.vue
/testimonials        → TestimonialsView.vue
/contact             → ContactView.vue
/privacy-policy      → PrivacyPolicyView.vue
/:pathMatch(.*)      → NotFoundView.vue   ← 404 catch-all required
```

---

## Shared Layout Components

### AppNavbar.vue (Sticky Header)

- **Pill-shaped navbar** with `5%` horizontal margin on each side (not full-width), centered in viewport
- Company logo (SVG, max 300×100px) on the left
- Centered nav links: Home | About | Services | Products | Portfolio | Testimonials
- "Contact Us" button (brand accent color) on the right
- **Behavior on scroll:** transparent background on hero section, transitions to solid white (light mode) or dark navy (dark mode) background once user scrolls past hero
- Smooth CSS transition for background change
- Dark/Light mode toggle icon (sun/moon) in navbar — right side, next to CTA button
- **Reading Progress Bar:** thin 3px bar directly below the navbar, width animates from 0% to 100% as user scrolls the page, accent color, `position: fixed`
- **Mobile (< 768px):**
  - Replace nav links with hamburger icon (☰)
  - Clicking hamburger opens a slide-in drawer from the left side
  - Drawer is a full-height vertical menu with nav links stacked
  - Clicking any link or clicking outside the drawer closes it
  - Drawer overlays main content with a semi-transparent backdrop

### AppFooter.vue

Four-column layout on desktop, single column stack on mobile:

- **Column 1:** Company logo + 1-sentence description + social icons (LinkedIn, Facebook, Twitter/X, Instagram, YouTube)
- **Column 2:** Quick Links — Home, About, Services, Products, Portfolio, Testimonials, Contact
- **Column 3:** Services — list top 5–6 service names as `<RouterLink>` to `/services/:slug`
- **Column 4:** Contact info — Address, Email (with mailto), Phone (with tel)
- **Bottom bar:** `© 2025 Seher International. All rights reserved.` | `<RouterLink to="/privacy-policy">Privacy Policy</RouterLink>`
- All links use `<RouterLink>` — never `<a href>` for internal pages

### TrustBar.vue (Pre-footer Certification Strip)

A horizontal strip that sits **above the footer** (not inside it):

- Background: light gray or subtle brand tint
- Display certification logos, quality badges, and partner/brand logos (brands represented by Seher International)
- Images in grayscale by default, colorize on hover (CSS filter transition)
- Auto-scroll marquee animation if more than 6 logos
- Label above: "Certifications & Partners"
- `<!-- PLACEHOLDER: Replace with real certification badges and brand logos -->`

---

## Global UI Widgets

### BackToTop.vue

- Fixed position, bottom-right corner (48px from right, 100px from bottom)
- Appears after user scrolls 300px down, hidden above that (CSS opacity/transform transition)
- Clicking scrolls to top smoothly (`window.scrollTo({ top: 0, behavior: 'smooth' })`)
- Icon: upward arrow inside a round button (brand secondary color)

### WhatsAppButton.vue

- Fixed position, bottom-right corner (48px from right, 44px from bottom — sits below BackToTop)
- WhatsApp icon with green (#25D366) background
- Clicking opens `https://wa.me/[PHONE_NUMBER]` in a new tab
- `<!-- PLACEHOLDER: Replace [PHONE_NUMBER] with actual WhatsApp number -->`

### DarkModeToggle.vue

- Sun/moon icon button in the navbar
- Toggles a `data-theme="dark"` attribute on `<html>` element
- Persists preference to `localStorage`
- All colors use CSS custom properties that respond to `[data-theme="dark"]` selector

### CookieConsent.vue

- Banner fixed to bottom of screen
- Appears on first visit (check `localStorage.getItem('cookie-consent')`)
- Text: "We use cookies to improve your experience. By using this site, you agree to our Privacy Policy."
- Two buttons: "Accept All" (brand accent) | "Decline"
- Clicking either stores the choice in `localStorage` and hides the banner
- Privacy Policy text links to `<RouterLink to="/privacy-policy">`

### PagePreloader.vue (App-level)

- Shows on initial app mount before content is ready
- Displays company logo/initials centered on a white/brand background
- Fade-out animation (CSS opacity transition, 0.4s) once Vue app is mounted
- `v-if` toggled from `App.vue` on `mounted()` lifecycle hook

---

## Homepage — Section-by-Section Spec

### Section 1: Hero Banner

- Full viewport height (`min-height: 100vh`)
- Background: high-resolution image (1920×1080px WebP) of industrial textile machinery — dark overlay (`rgba(0,0,0,0.55)`) for text readability
- Content centered vertically and horizontally (or left-aligned with offset):
  - Eyebrow text: small uppercase label e.g. "Engineering Excellence"
  - H1 heading: large bold statement about the company's value proposition
  - Subheading paragraph: 1–2 sentences supporting the headline
  - CTA Button: "Our Services" → `<RouterLink to="/services">`
- Entrance animation: heading and subheading fade in and slide up on page load (CSS `@keyframes`, 0.8s, staggered)
- `<!-- PLACEHOLDER: Replace background image with real industrial machinery photo -->`

### Section 2: About Company

- Two-column layout (text left, image right on desktop ≥ 1024px; stacked on mobile)
- Left column:
  - Section eyebrow label: "About Us"
  - H2 heading e.g. "High Quality Solutions & Innovative Engineering"
  - Company story paragraph (lorem ipsum placeholder)
  - Three key stat blocks in a row: **Years of Experience | Projects Completed | Happy Clients** — large number, small label below
  - "Learn More" button → `<RouterLink to="/about">`
- Right column:
  - Company image (800×600px WebP)
  - Optional: floating badge element showing "40 Years of Experience" as a decorative card
- `<!-- PLACEHOLDER: Replace story text and image with client-provided content -->`

### Section 3: CEO Message

- Clean card layout or full-width quote section
- Background: slightly different from surrounding sections (brand tint or light gray)
- Content:
  - Section label: "From the CEO's Desk"
  - CEO photo (300×300px circular WebP)
  - CEO full name and title below photo
  - Quote/statement paragraph (lorem ipsum placeholder — 3–4 sentences)
  - Decorative large quotation mark (") in brand accent color
- `<!-- PLACEHOLDER: Replace with actual CEO name, photo, and statement -->`

### Section 4: Services

- Section label: "Our Services"
- H2 heading
- Responsive card grid: 3 columns desktop | 2 columns tablet (768–1023px) | 1 column mobile
- Show **6 featured services** on homepage
- Each ServiceCard.vue:
  - SVG icon (48×48px, brand secondary color)
  - Service title (H3)
  - Short description (2–3 sentences lorem ipsum)
  - "Learn More" button → `$router.push('/services/' + slug)`
- `<!-- PLACEHOLDER: Replace with real service names and descriptions -->`

### Section 5: Why Choose Us

- Full-width section with brand primary color (#1A2B4A) dark background, light text
- Section label: "Why Choose Us" (light/white)
- H2 heading
- Icon + text feature blocks in a **4-column grid** (desktop) | 2-column (tablet) | 1-column (mobile)
- Each block:
  - SVG icon (40×40px, accent gold color)
  - Bold title
  - Short description (1–2 sentences)
- Suggested content points (lorem ipsum descriptions, real titles):
  - Quality Assurance
  - Trusted Suppliers
  - Technical Expertise
  - After-Sales Support
  - Wide Product Range
  - Timely Delivery

### Section 6: Products

- Same layout and structure as Section 4 (Services)
- Section label: "Our Products"
- Show **6 featured products** on homepage
- Each ProductCard.vue:
  - Product image (300×300px WebP thumbnail)
  - Product name (H3)
  - Short description (1–2 sentences)
  - "Learn More" button → `$router.push('/products/' + slug)`
- `<!-- PLACEHOLDER: Replace with real product names, images, and descriptions -->`

### Section 7: Portfolio

- Section label: "Our Portfolio"
- H2 heading
- Uniform card grid: 3 columns desktop | 2 tablet | 1 mobile
- Show **6 featured projects** on homepage
- Each PortfolioCard.vue:
  - Project image (800×533px WebP)
  - Project title
  - Category tag (pill badge)
  - Brief description (1 sentence)
  - On hover: overlay with "View Project" button
- `<!-- PLACEHOLDER: Replace with real project images and descriptions -->`

### Section 8: Achievements & Statistics

> ⚠️ This is a separate section from Testimonials. This section contains animated number counters. Testimonials contain client quotes/reviews.

- Background: dark brand color or gradient for visual contrast with surrounding sections
- **Animated stat counters** — 4 items in a row (2×2 grid on mobile):
  - Projects Completed: [number]
  - Happy Clients: [number]
  - Countries Served: [number]
  - Years of Experience: [number]
- Animation behavior: count up from 0 to final value over 2 seconds, triggered when this section enters the viewport
- Use `IntersectionObserver` API to detect scroll-into-view; trigger animation once only
- Each stat: large bold number (H2 size), small label below, accent-colored unit suffix (e.g. "+", "K+")
- `<!-- PLACEHOLDER: Replace numbers with real company statistics -->`

### Section 9: Testimonials

> ⚠️ Client quotes/reviews only — no statistics or counters here (those are in Section 8).

- Section label: "What Our Clients Say"
- Carousel or static grid of testimonial cards (3 visible at once on desktop)
- Each TestimonialCard.vue:
  - Star rating (5 stars, SVG)
  - Quote text (lorem ipsum, 2–3 sentences)
  - Client photo (80×80px circular WebP)
  - Client full name
  - Company name and country
- If carousel: auto-advance every 5 seconds, pause on hover, manual prev/next arrow controls
- `<!-- PLACEHOLDER: Replace with real client testimonials -->`

### Section 10: Contact Us

- Two-column layout: info left | form right (stacked on mobile)
- **Left column:**
  - Section label: "Get In Touch"
  - H2 heading
  - Phone (with `tel:` link and phone icon)
  - Email (with `mailto:` link and email icon)
  - Physical address (with map pin icon)
  - Office hours
- **Right column (Contact Form):**
  - Full Name field (required)
  - Email field (required, email validation)
  - Phone Number field
  - Subject field
  - Message textarea (required, min 4 rows)
  - Submit button: "Send Message" (brand accent color)
  - Form validation with inline error messages
  - On submit: show success message ("Thank you! We'll be in touch shortly.") — no backend required for prototype, just show the success state
- `<!-- PLACEHOLDER: Replace contact details with real company info -->`
- `<!-- NOTE: Wire up form submission to email service (e.g. EmailJS or Formspree) before going live -->`

---

## Inner Pages — Structure

### /about

- Page hero banner (shorter than homepage hero, ~50vh)
- Full company story section
- Mission | Vision | Values — 3 cards in a row
- Team section (grid of team member cards with photo, name, role)
- Company history timeline (vertical timeline component)
- CEO message (expanded version of homepage section)

### /services

- Page hero with title
- Full grid of all services (same cards as homepage but all services shown)
- Filter tabs by service category (optional)

### /services/:slug

- Service name as H1
- Full description
- Feature list or process steps
- Related products grid
- CTA: "Request a Quote" → link to /contact

### /products

- Page hero
- Filterable product grid — filter by product category using tab buttons
- Each card same as homepage product card

### /products/:slug

- Product name as H1
- Product image gallery (main image + thumbnails)
- Full product description and specifications table
- Related products
- CTA: "Request a Quote" → link to /contact

### /portfolio

- Page hero
- Filterable portfolio grid — filter by project type or industry
- On click: open lightbox/modal with full project details

### /testimonials

- Page hero
- Full grid of all client testimonials
- Statistics section (same as homepage Section 8, or abbreviated)

### /contact

- Contact form (same as homepage section, full-width)
- Google Maps embed (iframe with company location)
- Office details

### /privacy-policy

- Standard privacy policy text (use generic placeholder for prototype)

### 404 Not Found

- Friendly illustration or large "404" text
- Message: "Oops! The page you're looking for doesn't exist."
- "Go Back Home" button → `<RouterLink to="/">`

---

## SEO Implementation

> ⚠️ NOT Rank Math (that is a WordPress plugin — irrelevant here). Use Vue-native solution.

Install `@vueuse/head` or `@unhead/vue`. In each View component, call `useHead()` to set:

```js
useHead({
  title: 'Page Title | Seher International',
  meta: [
    { name: 'description', content: 'Page-specific meta description (150–160 chars)' },
    { property: 'og:title', content: 'Page Title | Seher International' },
    { property: 'og:description', content: 'Page-specific OG description' },
    { property: 'og:image', content: '/og-image.jpg' }, // 1200×630px WebP
    { property: 'og:type', content: 'website' },
  ]
})
```

On the homepage, also add a `<script type="application/ld+json">` Local Business schema:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Seher International",
  "description": "Textile industrial machinery importer and stockist",
  "address": { "@type": "PostalAddress", "addressCountry": "PK" }
}
```

Semantic HTML requirements:
- Use `<main>`, `<header>`, `<footer>`, `<nav>`, `<section>`, `<article>` correctly
- Every image must have a descriptive `alt` attribute — never `alt=""`
- H1 appears exactly once per page
- Heading hierarchy: H1 → H2 → H3 (no skipping levels)

---

## Image Specifications

| Use Case | Dimensions | Format | Max File Size |
|---|---|---|---|
| Hero background | 1920 × 1080px | WebP | < 200KB |
| Portfolio / project image | 1200 × 800px | WebP | < 150KB |
| In-content section image | 800–1200px wide | WebP | < 100KB |
| Product card thumbnail | 300 × 300px | WebP | < 50KB |
| CEO / team member photo | 400 × 400px (crop to circle via CSS) | WebP | < 40KB |
| Client testimonial avatar | 160 × 160px (display at 80px) | WebP | < 20KB |
| Company logo | 300 × 100px | SVG preferred | < 20KB |
| Open Graph image | 1200 × 630px | WebP/JPG | < 100KB |
| Favicon | 32×32px + 180×180px Apple touch | ICO + PNG | < 10KB |

Mobile scaling: all images use `width: 100%; height: auto;` and `object-fit: cover` so they scale automatically. Hero background image repositions via `background-position` for mobile (center top).

---

## Performance Optimization

- Lazy load all images below the fold: `loading="lazy"` attribute on `<img>` tags
- Code-split every Vue Router route: use `component: () => import('./views/HomeView.vue')` syntax
- Preload hero image: `<link rel="preload" as="image" href="/images/hero.webp">` in `index.html`
- Preconnect to Google Fonts: `<link rel="preconnect" href="https://fonts.googleapis.com">`
- Compress all images with Squoosh or similar before adding to project
- Remove unused CSS (Tailwind purge config, or manually audit custom CSS)
- Vite build already handles: JS minification, CSS minification, tree-shaking, chunk splitting

---

## Responsive Breakpoints

| Breakpoint | Width Range | Key Layout Changes |
|---|---|---|
| Mobile | 320–767px | 1-column grids, hamburger nav, stacked sections |
| Tablet | 768–1023px | 2-column grids, still collapsible nav |
| Desktop | 1024px+ | Full multi-column layouts, sticky navbar visible |

Component-specific mobile behavior:
- **Buttons:** minimum 44×44px touch target, full-width on mobile where appropriate
- **Font sizes:** H1 scales from 48px (desktop) to 28px (mobile), H2 from 36px to 24px, body stays 16px
- **Cards:** 1 per row on mobile, 2 on tablet, 3 on desktop
- **Footer:** 4 columns on desktop → 2 columns on tablet → 1 column on mobile
- **Images:** `max-width: 100%`, `height: auto` on all images

---

## File & Folder Structure

```
seher-international/
├── public/
│   ├── favicon.ico
│   ├── favicon-180.png
│   └── og-image.jpg
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppNavbar.vue
│   │   │   ├── AppFooter.vue
│   │   │   └── TrustBar.vue
│   │   ├── sections/
│   │   │   ├── HeroSection.vue
│   │   │   ├── AboutSection.vue
│   │   │   ├── CeoMessage.vue
│   │   │   ├── ServicesSection.vue
│   │   │   ├── WhyChooseUs.vue
│   │   │   ├── ProductsSection.vue
│   │   │   ├── PortfolioSection.vue
│   │   │   ├── AchievementsSection.vue
│   │   │   ├── TestimonialsSection.vue
│   │   │   └── ContactSection.vue
│   │   └── ui/
│   │       ├── ServiceCard.vue
│   │       ├── ProductCard.vue
│   │       ├── PortfolioCard.vue
│   │       ├── TestimonialCard.vue
│   │       ├── StatCounter.vue
│   │       ├── BackToTop.vue
│   │       ├── WhatsAppButton.vue
│   │       ├── ReadingProgressBar.vue
│   │       ├── DarkModeToggle.vue
│   │       ├── CookieConsent.vue
│   │       └── PagePreloader.vue
│   ├── views/
│   │   ├── HomeView.vue
│   │   ├── AboutView.vue
│   │   ├── ServicesView.vue
│   │   ├── ServiceDetailView.vue
│   │   ├── ProductsView.vue
│   │   ├── ProductDetailView.vue
│   │   ├── PortfolioView.vue
│   │   ├── TestimonialsView.vue
│   │   ├── ContactView.vue
│   │   ├── PrivacyPolicyView.vue
│   │   └── NotFoundView.vue
│   ├── router/
│   │   └── index.js
│   ├── data/
│   │   ├── services.json
│   │   ├── products.json
│   │   ├── portfolio.json
│   │   └── testimonials.json
│   ├── composables/
│   │   ├── useTheme.js
│   │   ├── useScrollProgress.js
│   │   └── useIntersectionObserver.js
│   ├── App.vue
│   └── main.js
├── index.html
├── vite.config.js
└── README.md
```

---

## Data Format (Static JSON — No Backend Needed for Prototype)

### src/data/services.json
```json
[
  {
    "id": 1,
    "slug": "machine-maintenance",
    "title": "Machine Maintenance",
    "icon": "wrench",
    "shortDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "fullDescription": "Lorem ipsum placeholder — replace with real content.",
    "features": ["Feature 1", "Feature 2", "Feature 3"]
  }
]
```

### src/data/products.json
```json
[
  {
    "id": 1,
    "slug": "textile-spindle",
    "name": "Textile Spindle",
    "category": "Spinning",
    "thumbnail": "/images/products/spindle-thumb.webp",
    "images": ["/images/products/spindle-1.webp"],
    "shortDescription": "Lorem ipsum placeholder.",
    "specs": { "Model": "XYZ-100", "Origin": "Germany" }
  }
]
```

---

## Content Placeholder Policy

All text content in this prototype uses professional lorem ipsum. Mark all placeholder content inline:

```html
<!-- PLACEHOLDER: Replace with real content before handoff to client -->
```

For placeholder images, use Unsplash URLs with industrial/textile keywords:
- `https://source.unsplash.com/1920x1080/?textile,machinery` for hero
- `https://source.unsplash.com/300x300/?industrial,equipment` for product thumbnails

---

## Accessibility Baseline

- All interactive elements (buttons, links) have minimum 44×44px touch target
- Focus outlines visible and styled (not removed with `outline: none` unless replaced with custom focus ring)
- Color contrast ratio minimum 4.5:1 for body text, 3:1 for large headings
- All images have descriptive `alt` attributes
- Mobile hamburger button has `aria-label="Open menu"` and `aria-expanded` state
- Animated counters respect `prefers-reduced-motion`: disable number animation if user has reduced motion enabled
- Skip-to-content link at very top of page for keyboard users

---

*Brief prepared for Seher International website prototype. All placeholder content marked with PLACEHOLDER comments should be replaced with real client-provided content before production launch.*
