# Farm City — Go-Live Checklist

Work top to bottom. Each item says **where** to do it. Tick ☑ as you go.
Nothing here changes the code — it's configuration and verification.

---

## 1. Database (Supabase) — one-time

- ☐ Run **`supabase-phase2.sql`** in the Supabase SQL editor (idempotent — safe to
  re-run). It adds every column/table the app needs (bulk-quote fields,
  `Order.remindedAt`, `Customer.lang`, contract customers, standing orders,
  price lists, invoices).
- ☐ Confirm it ends with **Success. No rows returned.**

## 2. Environment variables — set in **both** Vercel projects (FARM-CITY *and* automation)

Database (already set):
- ☐ `DATABASE_URL`, `DIRECT_URL`

WhatsApp Cloud API:
- ☐ `WHATSAPP_PHONE_NUMBER_ID` = `1333570666506393`
- ☐ `WHATSAPP_TOKEN` = permanent System-User token
- ☐ `WHATSAPP_VERIFY_TOKEN` = the webhook verify token (FARM-CITY already has it)
- ☐ `WHATSAPP_APP_SECRET` = App → Settings → Basic → App secret
- ☐ `TEAM_ALERT_WHATSAPP_NUMBER` = the staff number that receives new-order/handover alerts

M-Pesa (when ready — leave unset to stay in safe dry-run):
- ☐ `MPESA_ENV` (`sandbox` then `production`), `MPESA_CONSUMER_KEY`,
  `MPESA_CONSUMER_SECRET`, `MPESA_SHORTCODE`, `MPESA_PASSKEY`,
  `MPESA_TRANSACTION_TYPE`, `MPESA_CALLBACK_URL`
- ☐ `MPESA_PAYBILL` = the Paybill/Till shown to customers in payment messages

Then **Redeploy both projects** so the variables take effect.

## 3. WhatsApp (Meta)

- ☐ Business number **registered** on the Cloud API (status shows Connected).
- ☐ Webhook **Callback URL** = `https://<farm-city-domain>/api/whatsapp/webhook`, verified ✅
- ☐ Webhook field **messages** subscribed ✅ (and the number's *Subscribe webhooks* toggle on)
- ☐ **Message templates** created & **Approved** (both English + Swahili) — see
  `docs/whatsapp-templates.md`
- ☐ App details filled: **Privacy Policy URL** = `.../privacy`, **Terms URL** =
  `.../terms`, app icon, category (App → Settings → Basic)
- ☐ App switched to **Live** (top of App Dashboard)
- ☐ **Business verification** started (raises messaging limits) — Business Settings → Security Center

## 4. Dashboard sanity check (dashboard → **Connect** page)

- ☐ All 5 WhatsApp credentials show **green**
- ☐ **Send test message** to your own number arrives

## 5. M-Pesa (when going live)

- ☐ Daraja **sandbox** tested (STK request + callback marks an order paid)
- ☐ Real Paybill/Till obtained; Daraja **Go Live** completed; production keys set
- ☐ Callback URL registered with Safaricom for the shortcode

## 6. Domain, email, monitoring

- ☐ Custom domain pointed to the Vercel FARM-CITY project (optional but recommended)
- ☐ Business email set up for `magewesley16@gmail.com` replacement (optional)
- ☐ Vercel deployment notifications / uptime alert enabled
- ☐ Supabase automated backups confirmed (Supabase → Database → Backups)

## 7. Legal

- ☐ `/privacy`, `/terms`, `/refund-policy` live and linked in the footer ✅
- ☐ Reviewed by an advocate before heavy commercial use; register with the ODPC if required

## 8. Staged testing (do NOT skip)

- ☐ **You** message the number → bot replies (welcome menu, EN + SW)
- ☐ Place a full test order end-to-end → appears in dashboard **Orders**
- ☐ Advance an order through statuses → customer gets the updates
- ☐ Submit a bulk quote → shows in **Quotes**; mark QUOTED → customer notified
- ☐ 10–20 friendly customers pilot for a few days before wide promotion

## 9. Daily operations (manual — buttons in the dashboard)

- ☐ **Contracts → Generate due orders now** (recurring orders) each morning
- ☐ **Orders → Send payment reminders** / **Release unpaid stock** as needed
- ☐ (Optional) move these to Vercel Cron later if you upgrade to a Pro plan
