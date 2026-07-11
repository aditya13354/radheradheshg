# 🪔 Radhe Radhe Self Help Group — Official Website

A premium, production-ready digital showroom & lead-generation website for
**Radhe Radhe Self Help Group** — a women-led handicraft collective from
Village Ugrah, Saharanpur, Uttar Pradesh, crafting handmade clay Karwas,
festive décor and customised handicrafts.

> **Not an e-commerce store.** This site is a beautiful digital brochure
> designed to build trust, tell the brand's story and convert visitors into
> **WhatsApp conversations, calls and enquiries**.

**Live domain:** [radheradheshg.com](https://radheradheshg.com)

---

## ✨ Highlights

- ⚡ **Next.js 14 (App Router)** + **TypeScript** + **Tailwind CSS**
- 🎬 **Framer Motion** micro-interactions & scroll animations
- 🌙 **Dark mode**, scroll progress bar, back-to-top, floating WhatsApp
- 💬 **WhatsApp-first** lead generation with pre-filled messages everywhere
- 🖼️ Premium masonry **gallery** with filters + lightbox
- 🔢 Animated **impact counters**
- 🔍 Full **SEO**: metadata, Open Graph, Twitter cards, JSON-LD, sitemap, robots
- ♿ Accessible, semantic, keyboard-friendly
- 📱 Fully responsive — mobile, tablet, desktop, ultra-wide
- 🚀 100% static, deploys directly to **Vercel**

---

## 🗂️ Project Structure

```
radheradheshg/
├── public/
│   ├── favicon.svg
│   └── images/            # ← drop your photos here (see IMAGE_GUIDE.md)
├── src/
│   ├── animations/        # Framer Motion variants
│   ├── app/               # App Router pages + SEO routes
│   │   ├── about/
│   │   ├── bulk-orders/
│   │   ├── contact/
│   │   ├── gallery/
│   │   ├── mission/
│   │   ├── products/
│   │   ├── privacy-policy/
│   │   ├── layout.tsx
│   │   ├── page.tsx       # Home
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── manifest.ts
│   ├── components/
│   │   ├── icons/
│   │   ├── layout/        # Navbar, Footer, WhatsApp, etc.
│   │   ├── sections/      # Page sections (Hero, About, ...)
│   │   ├── seo/           # JSON-LD
│   │   └── ui/            # Reusable UI (Button, Cards, ...)
│   ├── data/              # Products, collections, content
│   ├── hooks/             # useTheme, useCountUp, useScrollPosition
│   ├── lib/               # site config, WhatsApp, nav, utils
│   ├── styles/            # globals.css
│   └── types/             # Shared TypeScript types
├── IMAGE_GUIDE.md         # Where every photo goes
├── tailwind.config.ts
└── package.json
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → open http://localhost:3000

# 3. Production build
npm run build
npm run start
```

The site runs immediately after `npm install && npm run dev` — photos use a
graceful fallback until you add the real images.

---

## 🖼️ Adding Your Images

See **[IMAGE_GUIDE.md](./IMAGE_GUIDE.md)** for the exact file names and paths
for every photograph (hero, products, collections, gallery, OG image and
WhatsApp QR code). Drop your files in `public/images/…` — no code changes
needed.

---

## ✏️ Editing Content

All copy and data live in plain files — no CMS required:

| What | Where |
| --- | --- |
| Phone, WhatsApp, email, address, govt code | `src/lib/site.ts` |
| WhatsApp message templates | `src/lib/whatsapp.ts` |
| Products & collections | `src/data/products.ts` |
| Features, stats, testimonials, FAQs, gallery | `src/data/content.ts` |
| Colours & fonts | `tailwind.config.ts` |

**To change the WhatsApp number**, edit `whatsapp` and `phones` in
`src/lib/site.ts`.

---

## 🎨 Brand System

| Token | Colour |
| --- | --- |
| Primary — Deep Maroon | `#8B1E3F` |
| Secondary — Royal Gold | `#C89B3C` |
| Background — Warm Ivory | `#FFF9F2` |
| Accent — Terracotta | `#C75B39` |
| Text | `#2F2F2F` |

Fonts: **Playfair Display** (headings), **Poppins** (body),
**Noto Sans Devanagari** (Hindi).

---

## 🔍 SEO

- Per-page metadata + canonical URLs
- Open Graph & Twitter cards (`public/images/og.jpg`)
- Organization / WebSite / LocalBusiness **JSON-LD**
- Auto-generated `sitemap.xml` and `robots.txt`
- PWA `manifest.webmanifest`

Update the domain in `src/lib/site.ts` (`url` / `domain`) if it ever changes.

---

## ☁️ Deploy to Vercel

### Option A — Dashboard (easiest)

1. Push this repo to GitHub (see below).
2. Go to [vercel.com/new](https://vercel.com/new) and **Import** the repo.
3. Framework preset: **Next.js** (auto-detected). No env vars needed.
4. Click **Deploy**.
5. In **Settings → Domains**, add `radheradheshg.com` and `www.radheradheshg.com`,
   then point your DNS to Vercel (A record `76.76.21.21` or the CNAME Vercel
   shows you).

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

---

## 🐙 Push to GitHub

```bash
git init
git add .
git commit -m "Launch: Radhe Radhe SHG premium website"
git branch -M main
git remote add origin https://github.com/<your-username>/radheradheshg.git
git push -u origin main
```

---

## ✅ Pre-Launch Checklist

- [ ] Add all photographs (see `IMAGE_GUIDE.md`)
- [ ] Add `public/images/og.jpg` (1200×630) and `qr-whatsapp.png`
- [ ] Confirm WhatsApp number & phones in `src/lib/site.ts`
- [ ] Update the email placeholder in `src/lib/site.ts`
- [ ] Update Instagram / Facebook URLs in `src/lib/site.ts`
- [ ] Run `npm run build` (should pass with no errors)
- [ ] Deploy to Vercel & connect `radheradheshg.com`

---

Made with ❤️ in India — empowering rural women, one handcrafted piece at a time.
