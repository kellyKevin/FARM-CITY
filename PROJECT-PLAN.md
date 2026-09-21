# Farm City — project breakdown & build roadmap

This tracks the whole project against **Farm City Project Breakdown v1.0**
(Parts 0–17). It is the working checklist: `[x]` done, `[~]` partial, `[ ]` to
do. Phase 1 = the working launch; Phase 2 = follows once real orders flow.

Legend: **FC** = FARM-CITY repo (site), **AUT** = automation repo (dashboard),
**client** = a Farm City business decision/action, not code.

---

## Status by part

### Part 0 — Foundation & decisions
- [ ] client: confirm WhatsApp number, final catalogue prices/units/min-orders,
      delivery zones + fees + cutoffs, seedling dispatch counties/couriers,
      launch payment method + who verifies, staff roles, COD policy
- [ ] client: create accounts in the business name (Meta, Vercel, DB, domain,
      Safaricom/M-Pesa, business email) and add developer as collaborator

### Part 1 — The website  ✅
- [x] FC: storefront (home, shop, seedlings, bulk, delivery, resources, about,
      contact, cart)
- [ ] FC: legal pages (privacy, terms, refund/cancellation) — see Part 14

### Part 2 — Selling to retail customers
- [x] FC: produce & seedling cart handoff (message format the bot reads)
- [x] FC/AUT: bot reads prices from the DB, never the message text
- [ ] FC: cart saved **server-side** with an expiring `CART-xxxx` reference
- [x] FC: mixed cart **split into two linked orders** — the bot collects the
      produce, then the seedlings, then creates two cross-linked orders
      (`createLinkedOrders`), each with its own delivery + fee

### Part 3 — Bulk & contract customers
- [~] FC: bulk/institution path — bot gathers basics then hands over; the
      website quote form still needs to **save to the DB + alert staff**
- [ ] Phase 2: contract customers, price lists, standing orders, invoices

### Part 4 — WhatsApp Cloud API setup  📖
- [x] docs: full setup guide (`docs/whatsapp-setup.md`)
- [x] FC: webhook with signature verification + fast ack
- [x] FC: **idempotency** — `ProcessedMessage` dedupes resent webhooks
- [x] FC: track delivery-status events (sent/delivered/read/failed) → `MessageLog.status`
- [ ] client: Meta business verification, real number, permanent token, billing

### Part 5 — Message templates
- [x] FC/AUT: template registry + `sendTemplate` + status→template mapping
      (payment_received, order_packed, out_for_delivery, seedlings_dispatched,
      order_delivered)
- [ ] FC/AUT: remaining templates (order_received, payment_reminder,
      quote_ready, standing_order_confirm) wired to their triggers
- [ ] client: submit templates for approval

### Part 6 — The 24-hour conversation plan  ✅
- [x] store `lastInboundAt` per customer (stamped on every inbound message)
- [x] window-aware send: open → free-form, closed → template, else queue
      (`OutboundQueue`) + team alert — used by the status-update endpoint

### Part 7 — The backend  ✅ (foundation)
- [x] Next.js + Prisma, webhook + bot + DB in one codebase
- [x] session state (`ConversationSession`), rules-first bot, secrets in env
- [~] error handling (polite fallback exists; staff-alert queue to add with Part 6)

### Part 8 — The bot
- [x] core order flow (greet, confirm, name, delivery, summary, confirm, payment)
- [x] side paths: out-of-stock, cancel, unclear→handover, opt-out, media→handover
- [~] human handoff: alerts the team, but needs the **dashboard Inbox** (Part 11)
- [ ] Swahili / mixed-language support (Phase 2, AI-assisted)

### Part 9 — Payments
- [x] Phase 1 manual: bot sends till/paybill + order ref; records M-Pesa code;
      staff mark Paid; COD supported
- [x] M-Pesa **STK push** (Safaricom Daraja): auto-prompt on order create,
      async callback marks the order paid — `src/lib/mpesa/*`,
      `POST /api/mpesa/stk` + `/api/mpesa/callback`; dry-run without credentials
- [ ] Phase 2: C2B confirmations (Paybill) + reconciliation report
- [ ] client: Daraja go-live (approved Till/Paybill), payment policies
      (deadline, refunds, double/wrong payment, deposits)

### Part 10 — The database  ✅
- [x] all Phase-1 tables + sequential order numbers + status history + price copy
- [x] stock lifecycle: **reserve** on order create (`Product.reserved`), **deduct**
      on packed, **release** on cancel and on unpaid timeout
      (`releaseUnpaidOrders` via `POST /api/jobs/release-unpaid`); the bot sells
      `stock − reserved`
- [ ] daily automated backups + tested restore
- [ ] Phase 2 tables: contract customers, price lists, standing orders, invoices

### Part 11 — Owner dashboard  (AUT)
- [x] AUT: orders list + one-click status advance (notifies customer, logged)
- [x] AUT: staff **login** (scrypt password + signed cookie); protected dashboard
      pages and order/inbox APIs. Role column stored (owner/packer/…); per-role
      restrictions still to add
- [x] AUT: **Inbox** for handed-over chats — the bot goes quiet on handover, and
      staff reply (in-window) then resolve to resume the bot
- [x] AUT: products editor (price / stock / available) + **add product** —
      `/products` + guarded `GET/POST /api/products` & `PATCH /api/products/[slug]`
- [x] FC: **storefront reads the live catalogue from the DB** (`/api/catalog`
      merges DB price/stock/availability + new products with mockData display
      metadata), so dashboard edits and new products show on the site
- [ ] AUT: delivery editor + printable rider/dispatch lists
- [ ] AUT: quotes, customers, reports (sales, best sellers, unpaid)

### Part 12 — Testing
- [x] unit tests for parser, numbering, pricing, engine, WhatsApp helpers (46)
- [ ] full scenario suite (mixed cart, duplicate webhook, window expiry, …)
- [ ] staged testing: test number → real number → 10–20 customer pilot

### Part 13 — Hosting, domain, subscriptions
- [x] Vercel deployments (site + dashboard)
- [~] **Supabase Postgres** (both apps → same DB): schema switched to postgres,
      initial migration committed, docs in `docs/database-supabase.md` — pending
      the Supabase project + connection strings, then `migrate deploy` + seed
- [ ] domain, business email, monitoring/uptime alerts, subscription register

### Part 14 — Legal & compliance
- [ ] privacy policy + terms + refund policy; opt-in/opt-out handling; DPA review

### Part 15 — Launch, training, support
- [ ] go-live checklist, staff training, hypercare (first two weeks)

---

## Phase 1 build order (what we do next, in sequence)

1. **Production database** — switch Prisma to Postgres; point **both** apps at
   one `DATABASE_URL`; migrate + seed. *(Unblocks the shared-DB architecture.)*
2. **Messaging reliability (Parts 4.6 + 6)** — webhook idempotency, delivery
   statuses, `last_customer_message_at`, and window-aware sending.
3. **Message templates (Part 5)** — registry + `sendTemplate`, wired into the
   status-update path so out-of-window updates use approved templates.
4. **Dashboard depth (Part 11)** — staff auth + roles, the handover **Inbox**,
   and the products/stock editor.
5. **Mixed-cart split + server-saved cart (Part 2.3/2.4)**.
6. **Stock lifecycle (Part 10)** — reserve on confirm, deduct on packed, release
   on unpaid timeout.
7. **Payments Phase 2 (Part 9.2)** — M-Pesa STK push + C2B callbacks.
8. **Legal pages + monitoring + go-live checklist (Parts 13–15)**.

Each step is built, tested, and pushed on its own branch. Schema changes are
mirrored in both repos (see `ARCHITECTURE.md`).
