# Farm City — architecture & file layout

Farm City runs as **two apps that share one database**.

| Repo | Role | What it serves |
| --- | --- | --- |
| **`kellyKevin/FARM-CITY`** (this repo) | The **customer site**: storefront + WhatsApp bot + webhook + the full backend | the public shop (farm-city-red) |
| **`kellyKevin/automation`** | The **owner dashboard** + backend | the ops dashboard |

Both apps use the **same `DATABASE_URL`** (a shared Postgres in production), so an
order the bot creates here appears instantly in the dashboard. The customer
WhatsApp number's webhook is registered against **this** app (the site); the
dashboard app uses the WhatsApp client only to send status-update messages when
staff advance an order.

```
                 ┌───────────────── shared Postgres ─────────────────┐
                 │                                                    │
   FARM-CITY (this repo)                                   automation (dashboard)
   • storefront (shop UI)                                  • owner dashboard UI
   • /api/whatsapp/webhook  ── writes orders ──▶  DB  ◀── reads/updates orders
   • bot engine + runtime                                  • advances status,
   • order service                                           notifies customer
```

## File layout (this repo)

The code separates cleanly into **frontend** and **backend** by Next.js
convention — pages/components vs. server libraries and API routes.

### Frontend (the customer site)

| Path | What it is |
| --- | --- |
| `src/app/page.tsx`, `about/`, `shop/`, `seedlings/`, `cart/`, `delivery/`, `bulk-institutional/`, `farmer-resources/`, `contact/` | Storefront pages (App Router) |
| `src/app/admin/` | In-site admin page |
| `src/app/layout.tsx`, `globals.css` | Shell, global styles (Tailwind) |
| `src/components/` | UI components (`Header`, `Footer`, `CartDrawer`, `FloatingActions`) |
| `src/context/` | React context (`CartContext`, `SettingsContext`) |
| `src/data/mockData.ts` | The **catalogue source of truth** (products, zones, resources) |
| `src/i18n/` | Translations |

### Backend (the bot, orders, database)

| Path | What it is |
| --- | --- |
| `prisma/schema.prisma` | Database schema (all tables) |
| `prisma/seed.ts` | Seeds the DB **from `src/data/mockData`** — one catalogue for UI and bot |
| `src/domain/` | Status/step vocabularies + lifecycle transition rules |
| `src/lib/db.ts` | Prisma client singleton |
| `src/lib/cart.ts`, `money.ts` | Cart message format, `wa.me` link, inbound parser |
| `src/lib/whatsapp/` | Cloud API client, message builders, webhook verify, inbound normaliser |
| `src/lib/bot/` | The pure conversation **engine** + its runtime glue to Prisma |
| `src/lib/orders/` | Order numbering, totals, status changes, customer messages |
| `src/app/api/whatsapp/webhook/route.ts` | Inbound WhatsApp webhook |
| `src/app/api/orders/**` | Order list + status-change endpoints |
| `tests/`, `src/**/*.test.ts` | Unit tests (vitest) |
| `docs/whatsapp-setup.md` | End-to-end WhatsApp/Meta setup guide |

The **catalogue is defined once** in `src/data/mockData.ts`: the shop renders
from it, and `prisma/seed.ts` imports it so the bot prices exactly what
customers see.

## Keeping the two repos in sync

`prisma/schema.prisma` is duplicated in both repos and must stay identical (same
tables, same columns). When the schema changes, update both and run the same
migration against the shared database. See `PROJECT-PLAN.md` for the roadmap.
