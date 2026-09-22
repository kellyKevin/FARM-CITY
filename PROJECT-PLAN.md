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
- [x] FC: website quote form saves to the DB (`POST /api/quotes`) + alerts
      staff on WhatsApp; validated + mapped by `src/lib/quotes/quote.ts`
- [x] AUT: dashboard **Quotes** page — assign, record quoted amount, move
      through NEW → QUOTED → WON / LOST (`PATCH /api/quotes/:id`)
- [x] Bot bulk/institution path — the "Bulk / institution" menu button gathers
      org, items, quantity/frequency and location, saves a BulkQuote and hands
      the chat to a person (`CREATE_BULK_QUOTE` effect)
- [x] Phase 2: **contract customers + standing orders** — recurring orders that
      auto-generate via `/api/jobs/standing-orders` (reusing the normal order
      pipeline) and confirm to the customer with `standing_order_confirm`;
      `/contracts` dashboard to create contracts, add/pause/delete standing
      orders, and run due ones now (`ContractCustomer` / `StandingOrder` models)
- [x] Phase 2: **price lists** (per-contract agreed prices that override the
      catalogue when standing orders generate) + **invoices** (generate a DRAFT
      invoice for a contract's un-invoiced orders in a period, one line per
      order, then mark sent/paid; printable) — `ContractPrice` / `Invoice` /
      `InvoiceLine`, `/invoices` dashboard, `/api/contracts/[id]/prices`,
      `/api/invoices` (+ `/[id]`)

### Part 4 — WhatsApp Cloud API setup  📖
- [x] docs: full setup guide (`docs/whatsapp-setup.md`)
- [x] FC: webhook with signature verification + fast ack
- [x] FC: **idempotency** — `ProcessedMessage` dedupes resent webhooks
- [x] FC: track delivery-status events (sent/delivered/read/failed) → `MessageLog.status`
- [x] AUT: **Connect** dashboard page + `/api/whatsapp/status` (credential check,
      never leaks secrets) + `/api/whatsapp/test` (send a test message); shows the
      exact webhook Callback URL to paste into Meta
- [ ] client: Meta business verification, real number, permanent token, billing
      (manual — use the Connect page to confirm each step)

### Part 5 — Message templates
- [x] FC/AUT: template registry + `sendTemplate` + status→template mapping
      (payment_received, order_packed, out_for_delivery, seedlings_dispatched,
      order_delivered)
- [x] FC/AUT: `order_received` wired to the CONFIRMED status (out-of-window
      acknowledgement, carries the order total)
- [x] FC/AUT: `payment_reminder` wired to a job (`/api/jobs/payment-reminders`):
      window-aware, reminds each unpaid order once (`Order.remindedAt`)
- [x] FC/AUT: `quote_ready` wired to the Quotes PATCH → QUOTED trigger (notifies
      the customer with the quoted amount, window-aware)
- [x] FC/AUT: shared `notifyCustomer()` helper — one tested window-aware
      send/template/queue path used by all triggers
- [~] `standing_order_confirm` — template builder ready; trigger is Phase 2
      (needs the standing-orders model)
- [ ] client: submit templates for approval in Meta (order_received,
      payment_reminder, quote_ready + the 5 status templates)

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
- [x] AUT: **printable rider/dispatch lists** — `/dispatch` groups orders being
      fulfilled into rider runs (by zone) and courier/seedling runs (by method +
      region), with per-run pack totals and print CSS (`GET /api/dispatch`)
- [x] AUT: delivery editor — assign rider/courier + tracking (and method,
      time window, requested date) inline on `/dispatch`; the assignee/tracking
      then print on the run sheet (`PATCH /api/orders/[id]/delivery`)
- [x] AUT: **quotes** dashboard (Part 3) + **reports** — sales summary
      (collected / outstanding / order value), best sellers, and outstanding
      payments over a chosen period (`/reports`, `GET /api/reports`)
- [x] AUT: **customers** — searchable list (orders, spend, outstanding, last
      order) + per-customer detail (order history, bulk quotes, 24h window
      status) — `/customers`, `GET /api/customers` & `/api/customers/[phone]`

### Part 12 — Testing
- [x] unit tests for parser, numbering, pricing, engine, WhatsApp helpers,
      quotes, reports, dispatch, customers, delivery (130)
- [x] **scenario suite** (`src/lib/bot/scenarios.test.ts`): single produce order
      end-to-end, mixed-cart → two linked orders, out-of-stock drop + all-out
      handover, cancel, opt-out, unclear→handover, returning customer, and the
      24-hour window decision (free-form / template / queue)
- [ ] staged testing: test number → real number → 10–20 customer pilot (client)

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
