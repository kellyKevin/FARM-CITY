# Farm City — Staff Guide (Dashboard)

The dashboard is where you run the business. Sign in at your dashboard URL
(the **automation** deployment) with your phone number and password.

The bot handles ordering conversations automatically; you step in to confirm
stock, take payments, pack, dispatch, and answer handed-over chats.

---

## The pages (left sidebar)

### 🧾 Orders
Every order, newest first. For each order you can **advance its status**
(Confirm → Paid → Packed → Out for delivery / Dispatched → Delivered). **Each
status change automatically messages the customer** and is recorded in history.
Two buttons at the top:
- **Send payment reminders** — nudges customers with unpaid orders (once each).
- **Release unpaid stock** — frees stock held by orders that were never paid.

### 💬 Inbox
Chats the bot handed to a human (unclear questions, bulk enquiries, "need help").
The bot goes **quiet** on a handed-over chat. Reply to the customer here, then
**Resolve & resume bot** to hand it back. You can only send free-form replies
while the customer's 24-hour window is open.

### 👥 Customers
Everyone who has messaged or ordered. Search by name/phone. Open a customer to
see their **order history, bulk quotes, spend and outstanding balance**.

### 🥬 Products
Edit **price, stock, availability**, and **add new products** (with a photo from
your computer). Changes show on the website immediately and the bot prices new
orders from these values. The bot only sells **stock minus what open orders
have reserved**.

### 🛵 Dispatch
Printable **run sheets**. Rider runs (fresh produce) are grouped by zone;
seedlings/countrywide by method + region. Each run shows the **totals to pack**
and, per order, the receiver, address and **COD** flag. Assign a **rider or
courier + tracking** inline, then **Print**.

### 📨 Quotes
Bulk / institutional quote requests (from the website form and the bot). Assign
one to yourself, record the **quoted amount**, and move it **NEW → QUOTED → WON
/ LOST**. Setting it to **QUOTED** messages the customer the amount.

### 🔁 Contracts
Contract customers (schools, hotels, resellers) and their **standing orders**
(recurring orders). Create a contract, set a **price list** (overrides the
catalogue for that customer), and add standing orders. **Generate due orders
now** creates today's due orders; **Run now** fires a single one on demand.

### 📑 Invoices
Generate an invoice for a contract over a date range (one line per order),
mark it **Sent** / **Paid**, and **Print** it.

### 📊 Reports
Sales for a chosen period: **collected vs outstanding**, order value, **best
sellers**, and the list of **outstanding payments** to follow up.

### 🔌 Connect
Checks which WhatsApp credentials are configured and lets you **send a test
message**. Use it if the bot stops replying.

---

## Daily rhythm (suggested)

1. **Morning:** Contracts → **Generate due orders now**. Check **Orders** for
   new overnight orders and confirm stock.
2. **Through the day:** watch **Inbox** for handed-over chats; verify M-Pesa
   payments and mark orders **Paid**; keep **Products** stock accurate.
3. **Packing/dispatch:** open **Dispatch**, assign riders/couriers, **Print**
   the run sheets, then advance orders to **Out for delivery / Dispatched**.
4. **Follow-ups:** Orders → **Send payment reminders** for anything unpaid.
5. **Weekly:** review **Reports**; send **Invoices** to contract customers.

## Good to know
- Customers opt out of non-order messages by replying **STOP** / **ACHA**.
- The bot replies in **English or Swahili** automatically, based on how the
  customer writes.
- If the bot ever goes silent, check **Connect** (credentials green?) and that
  the WhatsApp number is still registered.
