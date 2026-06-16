# NexaForge Agency Website

A production-ready agency website starter built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**. Designed for digital agencies, AI consultancies, and business transformation services.

---

## What You Get

| Feature | Description |
|---------|-------------|
| **6 Complete Pages** | Home, Services, Case Studies, About, Contact, Free Audit |
| **Lead Generation Funnel** | Free Audit → Form → Thank You → Follow-up |
| **Mobile-First Design** | Fully responsive across all devices |
| **Framer Motion Animations** | Smooth scroll-triggered animations |
| **SEO-Ready** | Meta tags, semantic HTML, fast loading |
| **Modular Components** | Easy to customize and extend |
| **Clean Architecture** | Scalable folder structure for growth |

---

## Pages Overview

### 🏠 Homepage (`/`)
- Hero with animated mock browser + floating AI badge
- Trust bar (industries served)
- Services grid (4 core services)
- Case study showcases (3 featured)
- Free Audit CTA section
- Testimonials (3 client stories)
- FAQ accordion (6 common questions)

### 🛠️ Services (`/services/`)
- Detailed service breakdowns (Website, AI, Automation, Improvement)
- Industries we serve grid
- Feature lists with icons
- Process explanation

### 📊 Case Studies (`/case-studies/`)
- 4 detailed case studies with:
  - Challenge & solution narratives
  - Quantified results with icons
  - Service tags
  - Industry categorization

### 👥 About (`/about/`)
- Mission & story
- Core values (4 principles)
- Company timeline
- Why choose us checklist
- CTA sidebar

### 📧 Contact (`/contact/`)
- Contact information panel
- Full contact form with validation
- Service selector dropdown
- Success state after submission

### 🎯 Free Audit (`/audit/`)
- Lead magnet landing page
- 6-point audit breakdown
- Detailed intake form (industry, goals, website)
- Success confirmation

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4 |
| UI Components | shadcn/ui compatible structure |
| Animations | Framer Motion |
| Icons | Lucide React |
| Build Output | Static Export (deploy anywhere) |

---

## Quick Start

### 1. Install Dependencies

```bash
cd nexaforge-agency
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
npm run build
```

Static files will be generated in the `out/` folder. Deploy to Vercel, Netlify, Cloudflare Pages, or any static host.

---

## Customization Guide

### Branding

Edit these files to match your brand:

| File | What to Change |
|------|---------------|
| `app/layout.tsx` | Company name, meta description, keywords |
| `components/navigation.tsx` | Logo, nav links, CTA button |
| `components/sections/footer.tsx` | Footer links, company info |
| `tailwind.config.ts` | Primary colors (currently teal) |

### Colors

The design uses a **teal + amber** color scheme. To change:

```typescript
// tailwind.config.ts — update the primary and accent colors
colors: {
  primary: { 500: "#14b8a6", ... },  // Change to your brand color
  accent: { 500: "#f59e0b", ... },   // Change to your CTA color
}
```

### Content

| Section | File to Edit |
|---------|-------------|
| Hero text | `components/sections/hero.tsx` |
| Services | `components/sections/services.tsx` + `app/services/page.tsx` |
| Case Studies | `components/sections/results.tsx` + `app/case-studies/page.tsx` |
| Testimonials | `components/sections/testimonials.tsx` |
| FAQ | `components/sections/faq.tsx` |
| About content | `app/about/page.tsx` |

### Forms

The contact and audit forms currently show a success state on submit. To connect to a backend:

1. **Option A: Formspree** (easiest)
   ```tsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Option B: Email API** (Resend, SendGrid)
   Create an API route at `app/api/contact/route.ts`

3. **Option C: CRM Integration** (HubSpot, Pipedrive)
   Use their API to create contacts on form submission

---

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag the `out/` folder to Netlify deploy
```

### Cloudflare Pages

```bash
npm run build
# Upload `out/` folder
```

---

## Next Steps to Scale

### Phase 1: Content (Week 1)
- [ ] Replace placeholder content with real case studies
- [ ] Add real testimonials with client photos
- [ ] Update contact info and business details
- [ ] Add your own logo/favicon

### Phase 2: Functionality (Week 2)
- [ ] Connect forms to email/CRM
- [ ] Add Google Analytics / PostHog
- [ ] Set up Calendly for booking calls
- [ ] Add live chat (Tidio, Crisp)

### Phase 3: Growth (Month 2+)
- [ ] Add a blog with MDX support
- [ ] Create industry-specific landing pages
- [ ] Add pricing page
- [ ] Build a client portal/dashboard
- [ ] Integrate AI chatbot on your own site

---

## File Structure

```
nexaforge-agency/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Root layout + metadata
│   ├── globals.css               # Global styles
│   ├── services/page.tsx         # Services page
│   ├── case-studies/page.tsx     # Case studies
│   ├── about/page.tsx            # About page
│   ├── contact/page.tsx          # Contact form
│   └── audit/page.tsx            # Free audit lead magnet
├── components/
│   ├── navigation.tsx            # Fixed navbar
│   └── sections/
│       ├── hero.tsx              # Hero section
│       ├── trust-bar.tsx         # Industry trust bar
│       ├── services.tsx          # Services grid
│       ├── results.tsx           # Case studies showcase
│       ├── audit-cta.tsx         # Audit call-to-action
│       ├── testimonials.tsx       # Client testimonials
│       ├── faq.tsx               # FAQ accordion
│       └── footer.tsx            # Site footer
├── lib/
│   └── utils.ts                  # Utility functions (cn)
├── public/                       # Static assets
├── tailwind.config.ts            # Tailwind configuration
├── next.config.js                # Next.js config (static export)
└── package.json
```

---

## License

MIT — Use it, modify it, build your business with it.

---

Built with care for agencies that want to start strong and scale smart. 🚀
