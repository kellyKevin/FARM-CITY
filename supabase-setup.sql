-- Farm City — one-shot Supabase setup (schema + catalogue + owner login).
-- Paste this whole file into the Supabase SQL Editor and click Run.

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "variety" TEXT,
    "unit" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "stock" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "reserved" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "origin" TEXT NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeliveryZone" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "fee" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "minimumOrder" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "cutoffTime" TEXT,
    "daysAvailable" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DeliveryZone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "name" TEXT,
    "type" TEXT NOT NULL DEFAULT 'household',
    "defaultAddress" TEXT,
    "optedOut" BOOLEAN NOT NULL DEFAULT false,
    "firstOrderAt" TIMESTAMP(3),
    "lastInboundAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StaffUser" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "passwordHash" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StaffUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "source" TEXT,
    "cartRef" TEXT,
    "origin" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "paymentStatus" TEXT NOT NULL DEFAULT 'PENDING',
    "subtotal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "discount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "deliveryFee" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "total" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "notes" TEXT,
    "linkedOrderId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "productId" TEXT,
    "productName" TEXT NOT NULL,
    "variety" TEXT,
    "quantity" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL,
    "unitPrice" DOUBLE PRECISION NOT NULL,
    "lineTotal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Delivery" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "zoneId" TEXT,
    "address" TEXT,
    "landmark" TEXT,
    "locationPin" TEXT,
    "county" TEXT,
    "town" TEXT,
    "receiverName" TEXT,
    "receiverPhone" TEXT,
    "requestedDate" TIMESTAMP(3),
    "timeWindow" TEXT,
    "assignedTo" TEXT,
    "trackingNumber" TEXT,
    "dispatchedAt" TIMESTAMP(3),
    "deliveredAt" TIMESTAMP(3),

    CONSTRAINT "Delivery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "mpesaCode" TEXT,
    "checkoutRequestId" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "verifiedBy" TEXT,
    "verifiedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StatusHistory" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "oldStatus" TEXT,
    "newStatus" TEXT NOT NULL,
    "changedBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StatusHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConversationSession" (
    "id" TEXT NOT NULL,
    "customerId" TEXT,
    "phone" TEXT NOT NULL,
    "step" TEXT NOT NULL DEFAULT 'IDLE',
    "draft" TEXT,
    "handover" BOOLEAN NOT NULL DEFAULT false,
    "assignedTo" TEXT,
    "lastActivity" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ConversationSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessageLog" (
    "id" TEXT NOT NULL,
    "customerId" TEXT,
    "phone" TEXT NOT NULL,
    "direction" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "messageType" TEXT NOT NULL DEFAULT 'text',
    "waMessageId" TEXT,
    "status" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MessageLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BulkQuote" (
    "id" TEXT NOT NULL,
    "customerId" TEXT,
    "organisation" TEXT,
    "itemsSummary" TEXT NOT NULL,
    "quantity" TEXT,
    "frequency" TEXT,
    "location" TEXT,
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "assignedTo" TEXT,
    "quotedAmount" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BulkQuote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Counter" (
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Counter_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "ProcessedMessage" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProcessedMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OutboundQueue" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "customerId" TEXT,
    "reason" TEXT NOT NULL,
    "payload" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OutboundQueue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- CreateIndex
CREATE INDEX "Product_category_idx" ON "Product"("category");

-- CreateIndex
CREATE UNIQUE INDEX "DeliveryZone_name_key" ON "DeliveryZone"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_phone_key" ON "Customer"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "StaffUser_phone_key" ON "StaffUser"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Order_number_key" ON "Order"("number");

-- CreateIndex
CREATE INDEX "Order_status_idx" ON "Order"("status");

-- CreateIndex
CREATE INDEX "Order_customerId_idx" ON "Order"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "Delivery_orderId_key" ON "Delivery"("orderId");

-- CreateIndex
CREATE INDEX "Payment_orderId_idx" ON "Payment"("orderId");

-- CreateIndex
CREATE INDEX "Payment_checkoutRequestId_idx" ON "Payment"("checkoutRequestId");

-- CreateIndex
CREATE INDEX "StatusHistory_orderId_idx" ON "StatusHistory"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "ConversationSession_phone_key" ON "ConversationSession"("phone");

-- CreateIndex
CREATE INDEX "MessageLog_phone_idx" ON "MessageLog"("phone");

-- CreateIndex
CREATE INDEX "MessageLog_waMessageId_idx" ON "MessageLog"("waMessageId");

-- CreateIndex
CREATE INDEX "OutboundQueue_status_idx" ON "OutboundQueue"("status");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_linkedOrderId_fkey" FOREIGN KEY ("linkedOrderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "DeliveryZone"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StatusHistory" ADD CONSTRAINT "StatusHistory_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConversationSession" ADD CONSTRAINT "ConversationSession_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageLog" ADD CONSTRAINT "MessageLog_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BulkQuote" ADD CONSTRAINT "BulkQuote_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;



-- ================= SEED DATA =================
INSERT INTO "Product" ("id","slug","name","category","variety","unit","price","stock","reserved","available","origin","description","imageUrl","createdAt","updatedAt") VALUES
('fp-cabbage', 'fp-cabbage', 'Fresh Cabbage', 'produce', NULL, 'kg', 75, 500, 0, true, 'JUJA_HUB', 'Crisp, fresh locally grown cabbage harvested daily. Perfect for households, restaurants, and institutional catering.', 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-onions-red', 'fp-onions-red', 'Red Bulb Onions', 'produce', NULL, 'kg', 110, 1000, 0, true, 'JUJA_HUB', 'High quality dry red onions with long shelf life, solid bulbs and bold flavor for everyday cooking.', 'https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-onions-white', 'fp-onions-white', 'White Onions', 'produce', NULL, 'kg', 130, 300, 0, true, 'JUJA_HUB', 'Mild, sweet white onions ideal for fresh salads, salsa, and gourmet cooking.', 'https://images.unsplash.com/photo-1580148442838-92986e23232d?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-carrots', 'fp-carrots', 'Sweet Orange Carrots', 'produce', NULL, 'kg', 85, 400, 0, true, 'JUJA_HUB', 'Crisp and naturally sweet carrots freshly harvested from fertile agricultural soil.', 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-broccoli', 'fp-broccoli', 'Fresh Broccoli', 'produce', NULL, 'head', 140, 180, 0, true, 'JUJA_HUB', 'Dark green, nutrient-dense fresh broccoli heads perfect for healthy cooking.', 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-cauliflower', 'fp-cauliflower', 'Fresh Cauliflower', 'produce', NULL, 'head', 110, 200, 0, true, 'JUJA_HUB', 'Firm, white, compact cauliflower heads harvested fresh from regional farms.', 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-french-beans', 'fp-french-beans', 'Export Quality French Beans', 'produce', NULL, 'kg', 130, 300, 0, true, 'JUJA_HUB', 'Crisp, stringless, extra-fine green french beans harvested for high nutrition.', 'https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-green-peas', 'fp-green-peas', 'Fresh Green Peas in Pod', 'produce', NULL, 'kg', 150, 150, 0, true, 'JUJA_HUB', 'Sweet, tender garden green peas freshly picked in pods.', 'https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-sweet-corn', 'fp-sweet-corn', 'Fresh Sweet Corn Cobs', 'produce', NULL, 'cob', 40, 500, 0, true, 'JUJA_HUB', 'Juicy, golden sweet corn cobs freshly harvested from regional farms.', 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-beetroot', 'fp-beetroot', 'Organic Beetroot', 'produce', NULL, 'kg', 90, 250, 0, true, 'JUJA_HUB', 'Deep red, iron-rich beetroot perfect for juicing, roasting, and fresh salads.', 'https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-garlic', 'fp-garlic', 'Local Dry Garlic Bulbs', 'produce', NULL, 'kg', 250, 300, 0, true, 'JUJA_HUB', 'Aromatic, pungent garlic bulbs with long shelf life and intense cooking flavor.', 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-ginger', 'fp-ginger', 'Fresh Ginger Roots', 'produce', NULL, 'kg', 220, 350, 0, true, 'JUJA_HUB', 'Plump, spicy ginger rhizomes rich in essential oils and medicinal properties.', 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-button-mushrooms', 'fp-button-mushrooms', 'Fresh Button Mushrooms', 'produce', NULL, 'punnet (250g)', 200, 0, 0, false, 'JUJA_HUB', 'Clean, fresh white button mushrooms cultivated under strict climate controls.', 'https://images.unsplash.com/photo-1504387828636-abeb50778c0c?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-sukuma', 'fp-sukuma', 'Kale / Sukuma Wiki', 'produce', NULL, 'kg', 90, 400, 0, true, 'JUJA_HUB', 'Nutritious, dark green tender Sukuma Wiki leaves. Rich in iron and vitamins, staple for healthy Kenyan meals.', 'https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-spinach', 'fp-spinach', 'Fresh Spinach', 'produce', NULL, 'kg', 110, 300, 0, true, 'JUJA_HUB', 'Farm-fresh organic spinach leaves carefully handpicked and packed. Freshness guaranteed.', 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-managu', 'fp-managu', 'Managu (African Nightshade)', 'produce', NULL, 'kg', 120, 250, 0, true, 'JUJA_HUB', 'Nutrient-rich traditional Managu greens cultivated under natural farm conditions.', 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-terere', 'fp-terere', 'Terere (Amaranth Greens)', 'produce', NULL, 'kg', 100, 200, 0, true, 'JUJA_HUB', 'Tender traditional Terere leaves packed with calcium and protein.', 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-sagaa', 'fp-sagaa', 'Sagaa / Spider Plant Greens', 'produce', NULL, 'kg', 130, 150, 0, true, 'JUJA_HUB', 'Tangy, iron-rich indigenous Sagaa greens prized in traditional Kenyan cuisine.', 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-kunde', 'fp-kunde', 'Kunde (Cowpea Leaves)', 'produce', NULL, 'kg', 110, 180, 0, true, 'JUJA_HUB', 'Freshly harvested Kunde cowpea leaves rich in dietary fiber and vitamins.', 'https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-tomatoes-fresh', 'fp-tomatoes-fresh', 'Fresh Greenhouse Tomatoes', 'produce', NULL, 'kg', 80, 800, 0, true, 'JUJA_HUB', 'Firm, firm-ripe greenhouse and open-field tomatoes. Excellent color, taste and juice content.', 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-cherry-tomatoes', 'fp-cherry-tomatoes', 'Sweet Cherry Tomatoes', 'produce', NULL, 'kg', 160, 150, 0, true, 'JUJA_HUB', 'Juicy, bite-sized sweet cherry tomatoes grown in greenhouse conditions.', 'https://images.unsplash.com/photo-1561136594-7f68413baa99?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-cucumber', 'fp-cucumber', 'Fresh English Cucumbers', 'produce', NULL, 'kg', 90, 300, 0, true, 'JUJA_HUB', 'Crisp, hydrating greenhouse cucumbers perfect for salads and juices.', 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-courgettes', 'fp-courgettes', 'Fresh Courgettes / Zucchini', 'produce', NULL, 'kg', 100, 300, 0, true, 'JUJA_HUB', 'Tender, green fresh courgettes rich in dietary fiber and antioxidants.', 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-eggplant', 'fp-eggplant', 'Fresh Eggplant (Brinjal / Biringanya)', 'produce', NULL, 'kg', 95, 250, 0, true, 'JUJA_HUB', 'Smooth, glossy purple eggplants harvested fresh for stews and roasting.', 'https://images.unsplash.com/photo-1628773822503-930a85838501?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-green-capsicum', 'fp-green-capsicum', 'Green Hoho (Capsicum)', 'produce', NULL, 'kg', 120, 350, 0, true, 'JUJA_HUB', 'Plump, aromatic green bell peppers adding vibrant flavor and nutrition to your dishes.', 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-red-capsicum', 'fp-red-capsicum', 'Sweet Red Capsicum', 'produce', NULL, 'kg', 180, 200, 0, true, 'JUJA_HUB', 'Sweet, juicy red bell peppers packed with Vitamin C and antioxidant nutrients.', 'https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-yellow-capsicum', 'fp-yellow-capsicum', 'Sweet Yellow Capsicum', 'produce', NULL, 'kg', 180, 180, 0, true, 'JUJA_HUB', 'Bright yellow, sweet greenhouse bell peppers.', 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-chillies', 'fp-chillies', 'Hot Red & Green Chillies', 'produce', NULL, 'kg', 150, 200, 0, true, 'JUJA_HUB', 'Pungent, spicy local African bird eye and cayenne chillies.', 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-okra', 'fp-okra', 'Fresh Okra (Bhindi)', 'produce', NULL, 'kg', 120, 150, 0, true, 'JUJA_HUB', 'Tender green okra pods harvested young for optimum texture in stews and curries.', 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-butternut', 'fp-butternut', 'Butternut Squash', 'produce', NULL, 'kg', 70, 400, 0, true, 'JUJA_HUB', 'Sweet, nutty orange-fleshed butternut squash, rich in Vitamin A and ideal for soups.', 'https://images.unsplash.com/photo-1506917728037-b6af01a7d403?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-pumpkin', 'fp-pumpkin', 'Sweet Orange Pumpkin', 'produce', NULL, 'kg', 60, 300, 0, true, 'JUJA_HUB', 'Rich, sweet local orange pumpkins ideal for boiling, mashing, or soup making.', 'https://images.unsplash.com/photo-1570586437263-ab629fccc818?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-avocado-hass', 'fp-avocado-hass', 'Fresh Hass Avocados', 'produce', NULL, 'kg', 150, 600, 0, true, 'JUJA_HUB', 'Rich, creamy, export-grade Hass avocados. Naturally grown and packed with healthy fats.', 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-avocado-fuerte', 'fp-avocado-fuerte', 'Fresh Fuerte Avocados', 'produce', NULL, 'kg', 130, 400, 0, true, 'JUJA_HUB', 'Smooth green-skinned Fuerte avocados with buttery texture.', 'https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-bananas-sweet', 'fp-bananas-sweet', 'Sweet Bananas', 'produce', NULL, 'bunch', 120, 200, 0, true, 'JUJA_HUB', 'Naturally ripened sweet eating bananas from local smallholder orchards.', 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-mangoes-apple', 'fp-mangoes-apple', 'Sweet Apple Mangoes', 'produce', NULL, 'kg', 160, 350, 0, true, 'JUJA_HUB', 'Juicy, fiberless sweet Apple mangoes harvested at peak ripeness.', 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-mangoes-ngowe', 'fp-mangoes-ngowe', 'Sweet Ngowe Mangoes', 'produce', NULL, 'kg', 150, 200, 0, true, 'JUJA_HUB', 'Traditional elongated coastal Ngowe mangoes with rich tropical sweetness.', 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-watermelon', 'fp-watermelon', 'Sweet Red Watermelon', 'produce', NULL, 'kg', 60, 300, 0, true, 'JUJA_HUB', 'Extra sweet, deep red watermelons grown under sunny climate conditions.', 'https://images.unsplash.com/photo-1587049352847-81a56d773cae?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-pineapples', 'fp-pineapples', 'Sweet Smooth Cayenne Pineapple', 'produce', NULL, 'piece', 120, 200, 0, true, 'JUJA_HUB', 'Large, golden sweet pineapples harvested directly from Thika orchards.', 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-pawpaw', 'fp-pawpaw', 'Sweet Red Papaya / Pawpaw', 'produce', NULL, 'kg', 90, 180, 0, true, 'JUJA_HUB', 'Sweet, soft red-fleshed solo papayas rich in digestive enzymes.', 'https://images.unsplash.com/photo-1517260739337-6799d239ce83?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-passion-fresh', 'fp-passion-fresh', 'Fresh Purple Passion Fruits', 'produce', NULL, 'kg', 180, 250, 0, true, 'JUJA_HUB', 'Aromatic, juice-filled purple passion fruits packed with vitamin C.', 'https://images.unsplash.com/photo-1528821128474-27f963b072b7?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-strawberries-fresh', 'fp-strawberries-fresh', 'Fresh Farm Strawberries', 'produce', NULL, 'punnet (250g)', 150, 120, 0, true, 'JUJA_HUB', 'Juicy, ripe red strawberries handpicked daily from greenhouses.', 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-pixie-oranges', 'fp-pixie-oranges', 'Sweet Pixie Oranges', 'produce', NULL, 'kg', 180, 250, 0, true, 'JUJA_HUB', 'Seedless, juicy sweet Pixie oranges packed with citrus freshness.', 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-valencia-oranges', 'fp-valencia-oranges', 'Juicy Valencia Oranges', 'produce', NULL, 'kg', 140, 300, 0, true, 'JUJA_HUB', 'High-juice content sweet Valencia oranges, ideal for fresh juicing.', 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-lemons', 'fp-lemons', 'Juicy Yellow Lemons', 'produce', NULL, 'kg', 120, 400, 0, true, 'JUJA_HUB', 'Zesty, vitamin-rich yellow lemons harvested for beverages and culinary use.', 'https://images.unsplash.com/photo-1534531141161-e4160401828f?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-limes', 'fp-limes', 'Fresh Green Limes', 'produce', NULL, 'kg', 150, 200, 0, true, 'JUJA_HUB', 'Aromatic, tart green limes perfect for marinades, salads, and drinks.', 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-tangerines', 'fp-tangerines', 'Sweet Tangerines / Mandarins', 'produce', NULL, 'kg', 160, 150, 0, true, 'JUJA_HUB', 'Easy-to-peel, sweet tangerine citrus fruits.', 'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-potatoes', 'fp-potatoes', 'Shangi Irish Potatoes', 'produce', NULL, 'kg', 90, 1500, 0, true, 'JUJA_HUB', 'Cleaned, well-sized Shangi potatoes perfect for mashing, boiling, or making fries.', 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-sweet-potatoes', 'fp-sweet-potatoes', 'Red-Skinned Sweet Potatoes', 'produce', NULL, 'kg', 100, 600, 0, true, 'JUJA_HUB', 'Naturally sweet yellow/orange fleshed sweet potatoes, rich in beta-carotene.', 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-arrowroots', 'fp-arrowroots', 'Fresh Arrowroots (Nduma)', 'produce', NULL, 'kg', 160, 400, 0, true, 'JUJA_HUB', 'Organic, nutrient-rich Nduma arrowroots with excellent texture for breakfast boiling.', 'https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-cassava', 'fp-cassava', 'Fresh Cassava (Muhogo)', 'produce', NULL, 'kg', 80, 500, 0, true, 'JUJA_HUB', 'Fresh, peeled-ready cassava tubers ideal for boiling, frying, and making flour.', 'https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-cooking-bananas', 'fp-cooking-bananas', 'Green Cooking Bananas (Matoke)', 'produce', NULL, 'bunch', 130, 250, 0, true, 'JUJA_HUB', 'Firm green cooking bananas (matoke) perfect for stews, mukimo, and traditional dishes.', 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-green-maize', 'fp-green-maize', 'Fresh Green Maize (Roasting)', 'produce', NULL, 'cob', 35, 600, 0, true, 'JUJA_HUB', 'Tender green maize cobs ideal for roasting, boiling, or githeri.', 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-baby-spinach', 'fp-baby-spinach', 'Tender Baby Spinach', 'produce', NULL, 'kg', 130, 200, 0, true, 'JUJA_HUB', 'Soft, tender baby spinach leaves perfect for salads, smoothies, and light sautéing.', 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-collards', 'fp-collards', 'Collard Greens (Sukuma Variety)', 'produce', NULL, 'kg', 90, 300, 0, true, 'JUJA_HUB', 'Broad, dark-green collard leaves, a hearty staple for everyday Kenyan meals.', 'https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-tomatoes-roma', 'fp-tomatoes-roma', 'Roma Plum Tomatoes', 'produce', NULL, 'kg', 90, 400, 0, true, 'JUJA_HUB', 'Meaty, low-moisture Roma plum tomatoes ideal for sauces, stews, and cooking.', 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-mangoes-kent-fresh', 'fp-mangoes-kent-fresh', 'Sweet Kent Mangoes (Fresh)', 'produce', NULL, 'kg', 170, 250, 0, true, 'JUJA_HUB', 'Large, juicy, fiberless Kent mangoes with rich sweet flavor.', 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-baby-carrots', 'fp-baby-carrots', 'Sweet Baby Carrots', 'produce', NULL, 'kg', 120, 200, 0, true, 'JUJA_HUB', 'Small, crunchy, naturally sweet baby carrots great for snacking and salads.', 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-red-cabbage', 'fp-red-cabbage', 'Red / Purple Cabbage', 'produce', NULL, 'kg', 95, 250, 0, true, 'JUJA_HUB', 'Crisp red cabbage adding color and antioxidants to salads, slaws, and stir-fries.', 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&q=80&w=800', now(), now()),
('fp-pineapple-crushed', 'fp-pineapple-crushed', 'Ripe Sweet Pineapples (Bulk)', 'produce', NULL, 'piece', 110, 180, 0, true, 'JUJA_HUB', 'Golden, extra-sweet ripe pineapples supplied in bulk for juicing and institutions.', 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-hass-avocado', 'sd-hass-avocado', 'Grafted Hass Avocado Seedlings', 'seedling', 'Hass', 'seedling', 150, 5000, 0, true, 'ELDORET_NURSERY', 'High-yielding, disease-resistant grafted Hass avocado seedlings. Fast fruiting (2-3 years) with high export market demand.', '/images/seedlings/avocado-hass.jpg', now(), now()),
('sd-fuerte-avocado', 'sd-fuerte-avocado', 'Grafted Fuerte Avocado Seedlings', 'seedling', 'Fuerte', 'seedling', 150, 4000, 0, true, 'ELDORET_NURSERY', 'High-yielding grafted Fuerte avocado seedlings with excellent green-skin quality and rich flavor.', '/images/seedlings/avocado-fuerte.jpg', now(), now()),
('sd-pinkerton-avocado', 'sd-pinkerton-avocado', 'Grafted Pinkerton Avocado Seedlings', 'seedling', 'Pinkerton', 'seedling', 180, 2000, 0, true, 'ELDORET_NURSERY', 'High-yielding Pinkerton avocado variety with long necked heavy fruits and high oil ratio.', '/images/seedlings/avocado-nursery.jpg', now(), now()),
('sd-apple-mango', 'sd-apple-mango', 'Grafted Apple Mango Seedlings', 'seedling', 'Apple Mango', 'seedling', 250, 3000, 0, true, 'ELDORET_NURSERY', 'High-yielding grafted Apple mango seedlings. Sweet, fiberless red/yellow fruit with rapid growth.', '/images/seedlings/mango.jpg', now(), now()),
('sd-ngowe-mango', 'sd-ngowe-mango', 'Grafted Ngowe Mango Seedlings', 'seedling', 'Ngowe', 'seedling', 250, 2500, 0, true, 'ELDORET_NURSERY', 'Popular local coastal variety Ngowe mango grafted for early fruiting and high juice yield.', '/images/seedlings/mango.jpg', now(), now()),
('sd-kent-mango', 'sd-kent-mango', 'Grafted Kent Mango Seedlings', 'seedling', 'Kent', 'seedling', 250, 2000, 0, true, 'ELDORET_NURSERY', 'Late-season export grade Kent mango variety with dark green/red blush skin.', '/images/seedlings/mango.jpg', now(), now()),
('sd-tommy-atkins-mango', 'sd-tommy-atkins-mango', 'Grafted Tommy Atkins Mango Seedlings', 'seedling', 'Tommy Atkins', 'seedling', 250, 2000, 0, true, 'ELDORET_NURSERY', 'Commercial Tommy Atkins mango variety renowned for disease resistance and long transport shelf-life.', '/images/seedlings/mango.jpg', now(), now()),
('sd-purple-passion', 'sd-purple-passion', 'Grafted Purple Passion Fruit Seedlings', 'seedling', 'Purple Passion', 'seedling', 50, 8000, 0, true, 'ELDORET_NURSERY', 'Grafted purple passion fruit on Fusarium-resistant yellow passion rootstock. High juice yield.', '/images/seedlings/passion.jpg', now(), now()),
('sd-yellow-passion', 'sd-yellow-passion', 'Grafted Yellow Passion Fruit Seedlings', 'seedling', 'Yellow Passion', 'seedling', 50, 5000, 0, true, 'ELDORET_NURSERY', 'High juice acid content yellow passion fruit seedlings, vigorous and pest-hardy.', '/images/seedlings/passion-2.jpg', now(), now()),
('sd-pixie-orange-sd', 'sd-pixie-orange-sd', 'Grafted Pixie Orange Seedlings', 'seedling', 'Pixie', 'seedling', 300, 2500, 0, true, 'ELDORET_NURSERY', 'Seedless, extra sweet Pixie orange grafted seedlings. Highly profitable commercial fruit suitable for various climatic zones.', '/images/seedlings/citrus-orange.jpg', now(), now()),
('sd-valencia-orange-sd', 'sd-valencia-orange-sd', 'Grafted Valencia Orange Seedlings', 'seedling', 'Valencia', 'seedling', 250, 2000, 0, true, 'ELDORET_NURSERY', 'High juice yield Valencia orange seedlings grafted for rapid maturity.', '/images/seedlings/citrus-orange-2.jpg', now(), now()),
('sd-washington-navel-sd', 'sd-washington-navel-sd', 'Grafted Washington Navel Orange Seedlings', 'seedling', 'Washington Navel', 'seedling', 250, 1800, 0, true, 'ELDORET_NURSERY', 'Large, seedless Washington Navel orange seedlings with delicious sweet flavor.', '/images/seedlings/transportation-citrus.jpg', now(), now()),
('sd-eureka-lemon-sd', 'sd-eureka-lemon-sd', 'Grafted Eureka Lemon Seedlings', 'seedling', 'Eureka Lemon', 'seedling', 250, 2200, 0, true, 'ELDORET_NURSERY', 'Commercial Eureka lemon seedlings bearing bright yellow juicy lemons year-round.', 'https://images.unsplash.com/photo-1534531141161-e4160401828f?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-tree-tomato-sd', 'sd-tree-tomato-sd', 'Tree Tomato Seedlings (Tamarillo)', 'seedling', NULL, 'seedling', 50, 4000, 0, true, 'ELDORET_NURSERY', 'Red and yellow sweet tree tomato seedlings ready for transplanting. Rapid growth and continuous fruiting.', '/images/seedlings/tree-tomato.jpg', now(), now()),
('sd-dragon-fruit-sd', 'sd-dragon-fruit-sd', 'Dragon Fruit Seedlings & Cuttings', 'seedling', NULL, 'seedling', 400, 1200, 0, true, 'ELDORET_NURSERY', 'Red and white flesh dragon fruit cuttings/seedlings. High-value exotic superfood crop with premium market prices.', '/images/seedlings/dragon-fruit.jpg', now(), now()),
('sd-wambugu-apple', 'sd-wambugu-apple', 'Wambugu Apple Seedlings', 'seedling', 'Wambugu Apple', 'seedling', 1000, 1000, 0, true, 'ELDORET_NURSERY', 'Indigenously developed organic Wambugu apple variety adapted to hot and cold Kenyan climates.', '/images/seedlings/apple.jpg', now(), now()),
('sd-papaya-solo', 'sd-papaya-solo', 'Solo Sunrise Pawpaw Seedlings', 'seedling', NULL, 'seedling', 80, 3000, 0, true, 'ELDORET_NURSERY', 'Dwarf papaya seedlings fruiting in 8 months with sweet red flesh.', 'https://images.unsplash.com/photo-1517260739337-6799d239ce83?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-guava-pink', 'sd-guava-pink', 'Grafted Pink Guava Seedlings', 'seedling', NULL, 'seedling', 200, 1500, 0, true, 'ELDORET_NURSERY', 'Fast maturing grafted pink guava bearing aromatic large fruits within 12 months.', 'https://images.unsplash.com/photo-1536511135882-7484d72d2426?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-soursop', 'sd-soursop', 'Soursop / Graviola Seedlings', 'seedling', NULL, 'seedling', 300, 800, 0, true, 'ELDORET_NURSERY', 'Soursop medicinal fruit tree seedlings prized for delicious tropical flavor and health benefits.', '/images/seedlings/mango.jpg', now(), now()),
('sd-macadamia-sd', 'sd-macadamia-sd', 'Grafted Macadamia Seedlings (MRG 20 / INTEG 1)', 'seedling', NULL, 'seedling', 350, 3000, 0, true, 'ELDORET_NURSERY', 'Premium grafted macadamia varieties (MRG 20 & INTEG 1). Excellent nut size, oil ratio and commercial value.', '/images/seedlings/macadamia.jpg', now(), now()),
('sd-cashew-nut', 'sd-cashew-nut', 'Grafted Cashew Nut Seedlings', 'seedling', NULL, 'seedling', 250, 1000, 0, true, 'ELDORET_NURSERY', 'High-yielding drought-hardy grafted cashew nut seedlings.', '/images/seedlings/macadamia-2.jpg', now(), now()),
('sd-bamboo-giant', 'sd-bamboo-giant', 'Giant Clumping Bamboo Seedlings', 'seedling', NULL, 'seedling', 200, 2000, 0, true, 'ELDORET_NURSERY', 'Non-invasive giant clumping bamboo seedlings (Dendrocalamus asper) for timber, soil erosion control, and bioenergy.', 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-moringa', 'sd-moringa', 'Moringa Oleifera Seedlings', 'seedling', NULL, 'seedling', 100, 2500, 0, true, 'ELDORET_NURSERY', 'Miracle tree Moringa Oleifera seedlings rich in vitamins, minerals, and medicinal properties.', '/images/seedlings/avocado-nursery.jpg', now(), now()),
('sd-ruiru11-coffee', 'sd-ruiru11-coffee', 'Ruiru 11 Coffee Seedlings', 'seedling', 'Ruiru 11', 'seedling', 60, 15000, 0, true, 'ELDORET_NURSERY', 'Disease resistant (CBD & CLR resistant) high-yield Ruiru 11 coffee seedlings ready for field transplanting.', '/images/seedlings/coffee.jpg', now(), now()),
('sd-batian-coffee', 'sd-batian-coffee', 'Batian Coffee Seedlings', 'seedling', 'Batian', 'seedling', 60, 12000, 0, true, 'ELDORET_NURSERY', 'Tall, disease-resistant Batian coffee variety with early bearing and high cup quality.', '/images/seedlings/coffee-2.jpg', now(), now()),
('sd-rosemary-sd', 'sd-rosemary-sd', 'Rosemary Herb Seedlings', 'seedling', NULL, 'seedling', 50, 3000, 0, true, 'ELDORET_NURSERY', 'Aromatic, perennial rosemary seedlings. Easy to grow in gardens, pots, or commercial herb farming.', '/images/seedlings/rosemary.jpg', now(), now()),
('sd-lemon-grass-sd', 'sd-lemon-grass-sd', 'Lemon Grass Seedlings', 'seedling', NULL, 'seedling', 40, 2500, 0, true, 'ELDORET_NURSERY', 'Fast-growing, aromatic lemon grass slips/seedlings ideal for herbal tea, essential oil extraction, and natural soil conservation.', '/images/seedlings/lemon-grass.jpg', now(), now()),
('sd-peppermint-sd', 'sd-peppermint-sd', 'Fresh Peppermint Seedlings', 'seedling', NULL, 'seedling', 40, 2000, 0, true, 'ELDORET_NURSERY', 'Vigorous, aromatic peppermint plants suitable for home herb gardens, teas, and commercial herb growers.', 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-thyme-sd', 'sd-thyme-sd', 'Thyme Herb Seedlings', 'seedling', NULL, 'seedling', 50, 1500, 0, true, 'ELDORET_NURSERY', 'Perennial garden thyme seedlings ideal for culinary seasoning and essential oil farming.', 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-stevia-sd', 'sd-stevia-sd', 'Stevia Sweet Herb Seedlings', 'seedling', NULL, 'seedling', 60, 1000, 0, true, 'ELDORET_NURSERY', 'Natural zero-calorie sweetener plant Stevia rebaudiana seedlings.', 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-strawberry-runners', 'sd-strawberry-runners', 'Strawberry Runners & Seedlings', 'seedling', NULL, 'seedling', 30, 6000, 0, true, 'ELDORET_NURSERY', 'High-yielding Chandler and San Andreas strawberry runners. Fast fruiting with sweet, juicy red berries.', '/images/seedlings/strawberry.jpg', now(), now()),
('sd-blackberry-sd', 'sd-blackberry-sd', 'Thornless Blackberry Cuttings', 'seedling', NULL, 'seedling', 150, 1200, 0, true, 'ELDORET_NURSERY', 'Thornless blackberry plant cuttings yielding sweet dark berries in high demand.', 'https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-blueberry-sd', 'sd-blueberry-sd', 'Blueberry Plant Potted Seedlings', 'seedling', NULL, 'seedling', 600, 0, 0, false, 'ELDORET_NURSERY', 'Potted southern highbush blueberry seedlings suitable for acidic potted soil cultivation.', 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-tomato-hybrid-sd', 'sd-tomato-hybrid-sd', 'Hybrid Tomato Seedling Plugs', 'seedling', NULL, 'plug', 10, 20000, 0, true, 'ELDORET_NURSERY', 'Disease resistant greenhouse/open-field hybrid tomato seedlings ready for transplanting.', 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-cabbage-plugs', 'sd-cabbage-plugs', 'Gloria Cabbage Seedling Plugs', 'seedling', NULL, 'plug', 5, 30000, 0, true, 'ELDORET_NURSERY', 'Uniform, vigorous Gloria F1 cabbage seedling plugs in nursery trays.', 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-capsicum-plugs', 'sd-capsicum-plugs', 'Capsicum (Sweet Pepper) Seedling Plugs', 'seedling', NULL, 'plug', 12, 15000, 0, true, 'ELDORET_NURSERY', 'Red and yellow sweet pepper hybrid seedling plugs raised under sanitary conditions.', 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-spinach-plugs', 'sd-spinach-plugs', 'Swiss Chard / Spinach Seedling Plugs', 'seedling', NULL, 'plug', 5, 25000, 0, true, 'ELDORET_NURSERY', 'Fordhook Giant spinach seedling plugs for high-yield leaf harvesting.', 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-reed-avocado', 'sd-reed-avocado', 'Grafted Reed Avocado Seedlings', 'seedling', 'Reed', 'seedling', 180, 2000, 0, true, 'ELDORET_NURSERY', 'Large, round, thick-skinned Reed avocado variety with buttery flesh and long fruiting season.', '/images/seedlings/avocado-fuerte.jpg', now(), now()),
('sd-jumbo-avocado', 'sd-jumbo-avocado', 'Grafted Jumbo Avocado Seedlings', 'seedling', 'Jumbo', 'seedling', 180, 1800, 0, true, 'ELDORET_NURSERY', 'Extra-large jumbo avocado variety popular for local markets and high yield per tree.', '/images/seedlings/avocado-hass.jpg', now(), now()),
('sd-tc-banana-grand', 'sd-tc-banana-grand', 'Tissue Culture Banana Seedlings (Grand Naine)', 'seedling', 'Grand Naine', 'seedling', 150, 5000, 0, true, 'ELDORET_NURSERY', 'Clean, disease-free tissue culture banana plantlets with uniform growth and heavy bunches.', 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-tc-banana-williams', 'sd-tc-banana-williams', 'Tissue Culture Williams Hybrid Banana', 'seedling', 'Williams Hybrid', 'seedling', 150, 4000, 0, true, 'ELDORET_NURSERY', 'High-yielding Williams hybrid banana plantlets, ideal for both cooking and ripe eating types.', 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-tangerine', 'sd-tangerine', 'Grafted Tangerine / Mandarin Seedlings', 'seedling', 'Daisy', 'seedling', 250, 1800, 0, true, 'ELDORET_NURSERY', 'Easy-peel, sweet tangerine seedlings grafted for early and heavy fruiting.', '/images/seedlings/citrus-orange-2.jpg', now(), now()),
('sd-grapefruit', 'sd-grapefruit', 'Grafted Pink Grapefruit Seedlings', 'seedling', 'Ruby Red', 'seedling', 260, 1200, 0, true, 'ELDORET_NURSERY', 'Juicy pink-fleshed grapefruit seedlings with sweet-tart flavor and strong market demand.', '/images/seedlings/transportation-citrus.jpg', now(), now()),
('sd-tahiti-lime', 'sd-tahiti-lime', 'Grafted Tahiti Lime Seedlings', 'seedling', 'Tahiti', 'seedling', 250, 1500, 0, true, 'ELDORET_NURSERY', 'Seedless Tahiti lime seedlings bearing aromatic green limes year-round.', '/images/seedlings/citrus-orange.jpg', now(), now()),
('sd-hamlin-orange', 'sd-hamlin-orange', 'Grafted Hamlin Sweet Orange Seedlings', 'seedling', 'Hamlin', 'seedling', 250, 1600, 0, true, 'ELDORET_NURSERY', 'Early-maturing, juicy Hamlin sweet orange seedlings suited to warm growing zones.', '/images/seedlings/citrus-orange.jpg', now(), now()),
('sd-custard-apple', 'sd-custard-apple', 'Custard Apple (Sitaful) Seedlings', 'seedling', NULL, 'seedling', 250, 900, 0, true, 'ELDORET_NURSERY', 'Sweet, creamy custard apple (sitaful) seedlings well adapted to warm Kenyan climates.', '/images/seedlings/apple-2.jpg', now(), now()),
('sd-loquat', 'sd-loquat', 'Grafted Loquat Seedlings', 'seedling', NULL, 'seedling', 250, 700, 0, true, 'ELDORET_NURSERY', 'Sweet-tangy loquat seedlings bearing golden fruits, suited to cooler highland areas.', '/images/seedlings/apple.jpg', now(), now()),
('sd-pomegranate', 'sd-pomegranate', 'Grafted Pomegranate Seedlings', 'seedling', 'Wonderful', 'seedling', 300, 1000, 0, true, 'ELDORET_NURSERY', 'High-value Wonderful pomegranate seedlings producing juicy antioxidant-rich arils.', '/images/seedlings/apple-2.jpg', now(), now()),
('sd-fig', 'sd-fig', 'Fig Tree Seedlings', 'seedling', NULL, 'seedling', 300, 800, 0, true, 'ELDORET_NURSERY', 'Sweet, soft-fleshed fig seedlings that fruit within 1-2 years in warm climates.', '/images/seedlings/apple.jpg', now(), now()),
('sd-grapevine', 'sd-grapevine', 'Grape Vine Seedlings (Thompson & Crimson)', 'seedling', NULL, 'seedling', 300, 1000, 0, true, 'ELDORET_NURSERY', 'Table grape vine cuttings/seedlings (seedless Thompson & Crimson) for trellised vineyards.', '/images/seedlings/apple-2.jpg', now(), now()),
('sd-plum', 'sd-plum', 'Grafted Plum Seedlings', 'seedling', 'Methley', 'seedling', 300, 1200, 0, true, 'ELDORET_NURSERY', 'Juicy Methley plum seedlings grafted for early bearing in cool highland zones.', '/images/seedlings/apple.jpg', now(), now()),
('sd-peach', 'sd-peach', 'Grafted Peach Seedlings', 'seedling', NULL, 'seedling', 300, 900, 0, true, 'ELDORET_NURSERY', 'Sweet, aromatic peach seedlings suited to Kenyan highland orchards.', '/images/seedlings/apple.jpg', now(), now()),
('sd-anna-apple', 'sd-anna-apple', 'Grafted Anna Apple Seedlings', 'seedling', 'Anna', 'seedling', 800, 1500, 0, true, 'ELDORET_NURSERY', 'Low-chill Anna apple seedlings that fruit well in warm Kenyan climates.', '/images/seedlings/apple.jpg', now(), now()),
('sd-pear', 'sd-pear', 'Grafted Pear Seedlings', 'seedling', NULL, 'seedling', 350, 800, 0, true, 'ELDORET_NURSERY', 'Sweet, crisp pear seedlings grafted for reliable highland fruiting.', '/images/seedlings/apple-2.jpg', now(), now()),
('sd-jackfruit', 'sd-jackfruit', 'Jackfruit Seedlings', 'seedling', NULL, 'seedling', 250, 700, 0, true, 'ELDORET_NURSERY', 'Large tropical jackfruit seedlings producing giant sweet fruits; great for warm coastal and lowland zones.', '/images/seedlings/mango.jpg', now(), now()),
('sd-tree-tomato-grafted', 'sd-tree-tomato-grafted', 'Grafted Tree Tomato Seedlings', 'seedling', NULL, 'seedling', 80, 3000, 0, true, 'ELDORET_NURSERY', 'Grafted tree tomato (tamarillo) seedlings on hardy rootstock for vigorous, high-yield plants.', '/images/seedlings/tree-tomato-2.jpg', now(), now()),
('sd-pineapple-suckers', 'sd-pineapple-suckers', 'Pineapple Suckers (Smooth Cayenne)', 'seedling', 'Smooth Cayenne', 'sucker', 40, 10000, 0, true, 'ELDORET_NURSERY', 'Healthy Smooth Cayenne pineapple suckers ready for planting; sweet, golden, juicy fruits.', 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-pecan', 'sd-pecan', 'Grafted Pecan Nut Seedlings', 'seedling', NULL, 'seedling', 400, 1200, 0, true, 'ELDORET_NURSERY', 'High-value grafted pecan nut seedlings for long-term commercial nut orchards.', '/images/seedlings/macadamia-2.jpg', now(), now()),
('sd-walnut', 'sd-walnut', 'Grafted Walnut Seedlings', 'seedling', NULL, 'seedling', 400, 800, 0, true, 'ELDORET_NURSERY', 'Grafted walnut seedlings for highland regions, prized for premium nuts and timber.', '/images/seedlings/macadamia.jpg', now(), now()),
('sd-grevillea', 'sd-grevillea', 'Grevillea Agroforestry Seedlings', 'seedling', NULL, 'seedling', 30, 20000, 0, true, 'ELDORET_NURSERY', 'Fast-growing Grevillea robusta seedlings for agroforestry, timber, windbreaks, and shade.', '/images/seedlings/avocado-nursery.jpg', now(), now()),
('sd-mukau', 'sd-mukau', 'Mukau (Melia volkensii) Seedlings', 'seedling', NULL, 'seedling', 40, 8000, 0, true, 'ELDORET_NURSERY', 'Drought-tolerant indigenous Mukau timber tree seedlings ideal for dryland afforestation.', '/images/seedlings/macadamia.jpg', now(), now()),
('sd-eucalyptus', 'sd-eucalyptus', 'Eucalyptus GC Hybrid Seedlings', 'seedling', NULL, 'seedling', 25, 30000, 0, true, 'ELDORET_NURSERY', 'Fast-growing Eucalyptus GC (grandis x camaldulensis) hybrid seedlings for poles and timber.', '/images/seedlings/avocado-nursery.jpg', now(), now()),
('sd-cypress', 'sd-cypress', 'Cypress Seedlings', 'seedling', NULL, 'seedling', 25, 25000, 0, true, 'ELDORET_NURSERY', 'Hardy cypress seedlings widely used for hedges, windbreaks, and softwood timber.', '/images/seedlings/avocado-nursery.jpg', now(), now()),
('sd-neem', 'sd-neem', 'Neem Tree Seedlings (Mwarubaini)', 'seedling', NULL, 'seedling', 60, 4000, 0, true, 'ELDORET_NURSERY', 'Medicinal neem (mwarubaini) tree seedlings valued for natural pesticides, shade, and health uses.', '/images/seedlings/macadamia.jpg', now(), now()),
('sd-tea-clonal', 'sd-tea-clonal', 'Clonal Tea Seedlings', 'seedling', 'Clone TRFK', 'seedling', 25, 40000, 0, true, 'ELDORET_NURSERY', 'High-yielding clonal tea seedlings (TRFK clones) for premium green and black tea production.', '/images/seedlings/coffee-2.jpg', now(), now()),
('sd-purple-tea', 'sd-purple-tea', 'Purple Tea Seedlings (TRFK 306)', 'seedling', 'TRFK 306/1', 'seedling', 40, 20000, 0, true, 'ELDORET_NURSERY', 'High-value antioxidant-rich purple tea seedlings (TRFK 306) with strong export demand.', '/images/seedlings/coffee.jpg', now(), now()),
('sd-sugarcane', 'sd-sugarcane', 'Sugarcane Setts (Seed Cane)', 'seedling', NULL, 'sett', 20, 50000, 0, true, 'ELDORET_NURSERY', 'Healthy, high-sucrose sugarcane setts (seed cane) for chewing and jaggery/sugar production.', '/images/seedlings/coffee-2.jpg', now(), now()),
('sd-basil', 'sd-basil', 'Sweet Basil Seedlings', 'seedling', NULL, 'seedling', 40, 3000, 0, true, 'ELDORET_NURSERY', 'Aromatic sweet basil seedlings for culinary use, pesto, and commercial herb farming.', '/images/seedlings/rosemary.jpg', now(), now()),
('sd-coriander', 'sd-coriander', 'Coriander / Dhania Seedlings', 'seedling', NULL, 'seedling', 30, 3500, 0, true, 'ELDORET_NURSERY', 'Fast-growing coriander (dhania) seedlings for fresh leaf and seed harvesting.', '/images/seedlings/lemon-grass.jpg', now(), now()),
('sd-parsley', 'sd-parsley', 'Parsley Seedlings', 'seedling', NULL, 'seedling', 40, 2500, 0, true, 'ELDORET_NURSERY', 'Curly and flat-leaf parsley seedlings for garnishing, salads, and culinary seasoning.', '/images/seedlings/rosemary.jpg', now(), now()),
('sd-sage', 'sd-sage', 'Sage Herb Seedlings', 'seedling', NULL, 'seedling', 50, 1500, 0, true, 'ELDORET_NURSERY', 'Perennial sage seedlings for culinary seasoning and herbal remedies.', '/images/seedlings/rosemary.jpg', now(), now()),
('sd-oregano', 'sd-oregano', 'Oregano Herb Seedlings', 'seedling', NULL, 'seedling', 50, 1500, 0, true, 'ELDORET_NURSERY', 'Aromatic oregano seedlings ideal for pizzas, sauces, and container herb gardens.', '/images/seedlings/rosemary.jpg', now(), now()),
('sd-mint', 'sd-mint', 'Mint Seedlings', 'seedling', NULL, 'seedling', 40, 2500, 0, true, 'ELDORET_NURSERY', 'Refreshing spearmint seedlings for teas, beverages, and culinary use.', '/images/seedlings/lemon-grass.jpg', now(), now()),
('sd-aloe-vera', 'sd-aloe-vera', 'Aloe Vera Seedlings', 'seedling', NULL, 'seedling', 60, 2000, 0, true, 'ELDORET_NURSERY', 'Hardy Aloe vera (barbadensis) seedlings valued for skincare, medicinal gel, and easy care.', '/images/seedlings/lemon-grass.jpg', now(), now()),
('sd-raspberry', 'sd-raspberry', 'Raspberry Cuttings & Seedlings', 'seedling', NULL, 'seedling', 150, 1200, 0, true, 'ELDORET_NURSERY', 'Sweet red raspberry canes/cuttings producing high-value berries in cool highland climates.', '/images/seedlings/strawberry.jpg', now(), now()),
('sd-cape-gooseberry', 'sd-cape-gooseberry', 'Cape Gooseberry (Nathi) Seedlings', 'seedling', NULL, 'seedling', 40, 3000, 0, true, 'ELDORET_NURSERY', 'Golden cape gooseberry (nathi) seedlings bearing tangy-sweet vitamin-rich berries.', '/images/seedlings/strawberry.jpg', now(), now()),
('sd-mulberry', 'sd-mulberry', 'Mulberry Cuttings', 'seedling', NULL, 'seedling', 120, 1500, 0, true, 'ELDORET_NURSERY', 'Fast-growing mulberry cuttings yielding sweet dark berries; also excellent fodder for silkworms and livestock.', '/images/seedlings/strawberry.jpg', now(), now()),
('sd-onion-red-creole', 'sd-onion-red-creole', 'Red Creole Onion Seedlings', 'seedling', 'Red Creole', 'seedling', 3, 100000, 0, true, 'ELDORET_NURSERY', 'Pungent, long-storing Red Creole onion seedlings ready for field transplanting.', 'https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-onion-bombay', 'sd-onion-bombay', 'Bombay Red Onion Seedlings', 'seedling', 'Bombay Red', 'seedling', 3, 80000, 0, true, 'ELDORET_NURSERY', 'High-yielding Bombay Red onion seedlings with deep-red bulbs and strong market demand.', 'https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-kale-plugs', 'sd-kale-plugs', 'Kale / Sukuma Wiki Seedling Plugs', 'seedling', NULL, 'plug', 4, 40000, 0, true, 'ELDORET_NURSERY', 'Vigorous collard/kale (sukuma wiki) seedling plugs for continuous leaf harvesting.', 'https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-broccoli-plugs', 'sd-broccoli-plugs', 'Broccoli Seedling Plugs', 'seedling', NULL, 'plug', 8, 15000, 0, true, 'ELDORET_NURSERY', 'Uniform hybrid broccoli seedling plugs raised under sanitary nursery conditions.', 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-cauliflower-plugs', 'sd-cauliflower-plugs', 'Cauliflower Seedling Plugs', 'seedling', NULL, 'plug', 8, 15000, 0, true, 'ELDORET_NURSERY', 'Firm-heading hybrid cauliflower seedling plugs for market and institutional growers.', 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-lettuce-plugs', 'sd-lettuce-plugs', 'Lettuce Seedling Plugs (Iceberg & Romaine)', 'seedling', NULL, 'plug', 6, 20000, 0, true, 'ELDORET_NURSERY', 'Crisp iceberg and romaine lettuce seedling plugs for salad and hospitality supply.', 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-eggplant-plugs', 'sd-eggplant-plugs', 'Eggplant / Brinjal Seedling Plugs', 'seedling', NULL, 'plug', 7, 15000, 0, true, 'ELDORET_NURSERY', 'Glossy purple eggplant (brinjal/biringanya) seedling plugs ready for transplanting.', 'https://images.unsplash.com/photo-1628773822503-930a85838501?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-cucumber-plugs', 'sd-cucumber-plugs', 'Greenhouse Cucumber Seedlings', 'seedling', NULL, 'plug', 12, 12000, 0, true, 'ELDORET_NURSERY', 'Hybrid greenhouse cucumber seedlings with high yield and disease tolerance.', 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-watermelon-plugs', 'sd-watermelon-plugs', 'Watermelon Seedlings (Sukari F1)', 'seedling', 'Sukari F1', 'plug', 10, 18000, 0, true, 'ELDORET_NURSERY', 'Sweet, high-yielding Sukari F1 watermelon seedlings raised for quick establishment.', 'https://images.unsplash.com/photo-1587049352847-81a56d773cae?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-courgette-plugs', 'sd-courgette-plugs', 'Courgette / Zucchini Seedlings', 'seedling', NULL, 'plug', 8, 14000, 0, true, 'ELDORET_NURSERY', 'Productive courgette (zucchini) seedling plugs for continuous market harvesting.', 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-managu-plugs', 'sd-managu-plugs', 'Managu (African Nightshade) Seedlings', 'seedling', NULL, 'plug', 4, 30000, 0, true, 'ELDORET_NURSERY', 'Traditional Managu (African nightshade) seedling plugs, a fast-selling indigenous leafy vegetable.', 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-chilli-plugs', 'sd-chilli-plugs', 'Chilli / Pilipili Seedling Plugs', 'seedling', NULL, 'plug', 8, 16000, 0, true, 'ELDORET_NURSERY', 'Hot African bird''s eye and cayenne chilli seedling plugs for fresh and export markets.', 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-grafted-tomato', 'sd-grafted-tomato', 'Grafted Tomato Seedlings (Resistant Rootstock)', 'seedling', NULL, 'seedling', 35, 10000, 0, true, 'ELDORET_NURSERY', 'Premium grafted tomato seedlings on vigorous disease-resistant rootstock for higher yields and bacterial-wilt tolerance.', 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-grafted-cucumber', 'sd-grafted-cucumber', 'Grafted Cucumber Seedlings', 'seedling', NULL, 'seedling', 35, 8000, 0, true, 'ELDORET_NURSERY', 'Grafted cucumber seedlings on hardy cucurbit rootstock for stronger vines and soil-disease resistance.', 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&q=80&w=800', now(), now()),
('sd-grafted-watermelon', 'sd-grafted-watermelon', 'Grafted Watermelon Seedlings', 'seedling', NULL, 'seedling', 35, 8000, 0, true, 'ELDORET_NURSERY', 'Grafted watermelon seedlings on resistant rootstock delivering vigorous growth and Fusarium tolerance.', 'https://images.unsplash.com/photo-1587049352847-81a56d773cae?auto=format&fit=crop&q=80&w=800', now(), now())
ON CONFLICT ("slug") DO NOTHING;

INSERT INTO "DeliveryZone" ("id","name","type","fee","minimumOrder","cutoffTime","daysAvailable","active","createdAt") VALUES
('dz-juja-thika', 'Kiambu', 'LOCAL', 200, 0, '14:00', NULL, true, now()),
('dz-nairobi', 'Nairobi', 'LOCAL', 350, 0, '14:00', NULL, true, now()),
('dz-eldoret', 'Uasin Gishu', 'LOCAL', 150, 0, '14:00', NULL, true, now()),
('dz-countrywide', 'Nationwide Kenya', 'COUNTRYWIDE', 500, 0, NULL, NULL, true, now())
ON CONFLICT ("name") DO NOTHING;

INSERT INTO "Counter" ("name","value") VALUES ('order', 0)
ON CONFLICT ("name") DO NOTHING;

-- Owner login: phone 254711911690, password "farmcity" (change after first login).
INSERT INTO "StaffUser" ("id","name","role","phone","active","passwordHash","createdAt") VALUES
('owner', 'Farm City Owner', 'owner', '254711911690', true, 'scrypt$f403e999172da6ed4c89315d3952cd4a$f3f76d046a125dda42343f539db4a9c28f1ce08befbd23e0ed2c936dc187bc314aeb21a88067f91e21e5945f72beb1402560c054db10cc14a8559f1b4b3b7cc6', now())
ON CONFLICT ("phone") DO NOTHING;
