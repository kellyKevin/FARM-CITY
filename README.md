# Farm City 🌱

**Fresh Produce. Quality Seedlings. Reliable Supply.**

Farm City is an agricultural e-commerce web app for a Kenyan business that sells
farm‑fresh fruits and vegetables and a wide range of certified seedlings. It
connects households, farmers, businesses, and institutions with quality produce
and seedlings — with same‑day delivery around Juja & Thika and countrywide
seedling dispatch from the Kapseret (Eldoret) nursery.

The site is **WhatsApp‑first**: there are no customer accounts and no online
payment. Shoppers browse, build a cart or request a quote, and every
order/quote/enquiry is handed off to the Farm City team on WhatsApp, where stock,
delivery fees, and payment (M‑Pesa or on delivery) are confirmed directly.

---

## ✨ Features

### Shopping & ordering
- **Rich catalogue** of ~150 products — fresh vegetables, leafy greens, fruit
  vegetables, fruits, citrus, and tubers, plus 90+ seedling varieties (grafted
  and non‑grafted fruit trees, tree & nut, coffee & cash crops, herbs, berries,
  and vegetable seedling plugs).
- **Shop & Seedlings pages** with instant search, category and availability
  filters, result counts, loading skeletons, and a product detail modal.
- **Slide‑out cart drawer** (opens from the header/floating button and on
  add‑to‑cart) with quantity steppers, live subtotal, an "N items added" banner,
  and quick checkout.
- **Guest checkout** — collects delivery details and sends the full order to
  WhatsApp; no payment is taken online.
- **Bulk & Institutional quote** form and **Contact enquiry** form — both also
  hand off to WhatsApp so the team receives them instantly.

### Experience
- **Dark / light theme** toggle with system‑preference default and no‑flash init.
- **English 🇬🇧 / Swahili 🇰🇪** language toggle across the whole customer‑facing
  UI (`src/i18n/translations.ts`).
- **Responsive** on phones, tablets, and desktops, with accessible focus states,
  reduced‑motion support, and smooth micro‑interactions.

### Content & admin
- **Farmer resources** — agronomy guides (avocado, passion fruit, macadamia,
  coffee, orchard management, seedling care).
- **Delivery zones** with fees and coverage, and physical hub information.
- **Admin page** (`/admin`) — a lightweight staff tool to manage products,
  quotes, delivery zones, and resources (stored in the browser).

> **Note on data:** product/catalogue data lives in `src/data/mockData.ts` and is
> mirrored into the browser's `localStorage` via `src/lib/storage.ts`, which also
> self‑heals (re‑syncs images/descriptions and appends newly added products). This
> is a front‑end demo/storefront — there is no backend database yet.

---

## 🛠 Tech stack

| Area        | Choice |
|-------------|--------|
| Framework   | [Next.js 15](https://nextjs.org) (App Router) |
| Language    | TypeScript, React |
| Styling     | Tailwind CSS (class‑based dark mode) |
| Icons       | lucide-react |
| State       | React Context (`CartContext`, `SettingsContext`) |
| Persistence | Browser `localStorage` |
| Hosting     | Vercel (static/SSG) |

---

## 🚀 Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts
| Command | Description |
|---------|-------------|
| `npm run dev`   | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint |

---

## 📁 Project structure

```
src/
├─ app/                       # App Router pages
│  ├─ page.tsx                # Home (hero + value props)
│  ├─ shop/                   # Full catalogue (produce + seedlings)
│  ├─ seedlings/              # Seedling nursery catalogue
│  ├─ cart/                   # Guest checkout → WhatsApp
│  ├─ bulk-institutional/     # Bulk/quote request → WhatsApp
│  ├─ delivery/               # Delivery zones, fees, logistics
│  ├─ farmer-resources/       # Agronomy guides
│  ├─ about/  contact/        # About & contact (→ WhatsApp)
│  ├─ admin/                  # Staff catalogue/quotes/zones tool
│  ├─ layout.tsx              # Providers, header/footer, theme init
│  └─ globals.css             # Theme tokens, dark mode, animations
├─ components/                # Header, Footer, FloatingActions, CartDrawer
├─ context/                   # CartContext, SettingsContext (theme + language)
├─ data/mockData.ts           # Catalogue, resources, delivery zones
├─ i18n/translations.ts       # EN/SW dictionary + t() helper
└─ lib/storage.ts             # localStorage-backed data access
scripts/
└─ localize-images.mjs        # Download remote product photos → public/images
public/images/                # Logo + local seedling/nursery photos
```

---

## 🌍 Internationalization

All customer‑facing chrome and page copy is translated. To add or change a
string, edit `src/i18n/translations.ts`:

```ts
"nav.shop": { en: "SHOP", sw: "DUKA" },
```

Use it in a client component:

```tsx
const { t } = useSettings();
<span>{t("nav.shop")}</span>
```

Product names and the guide article bodies intentionally stay in English (they
are largely proper nouns / long‑form content).

---

## 🖼 Product images

Images must be served from an allow‑listed host. `next.config.ts` currently
permits `images.unsplash.com`, and local files live under `public/images/`.

To **localize** remote photos into the repo (so images are owned and reliable),
allow‑list the host in your environment and run:

```bash
node scripts/localize-images.mjs   # downloads photos → public/images/products/ and repoints mockData.ts
npm run build
```

The script is idempotent and safe: it skips already‑local paths and leaves the
data untouched if a download is blocked.

---

## 📦 Deployment

The app deploys as a static Next.js site (e.g. on **Vercel**). Ensure any image
hosts referenced in the catalogue are listed in `next.config.ts` →
`images.remotePatterns`.

---

## 📞 Contact

**Farm City** · Juja / Thika fresh hub · Kapseret, Eldoret nursery
Phone / WhatsApp: **0711 911 690 / 0726 360 635**
Email: **magewesley16@gmail.com**

_From Farm to You • Agriculture Made Easy_
