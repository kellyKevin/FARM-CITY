export type Language = "en" | "sw";

export const translations: Record<string, { en: string; sw: string }> = {
  // Announcement bar
  "bar.offer": { en: "SPECIAL OFFER", sw: "OFA MAALUM" },
  "bar.message": {
    en: "Same-day delivery in Juja & Thika • Countrywide seedling dispatch to all 47 counties!",
    sw: "Uwasilishaji siku hiyo hiyo Juja & Thika • Usambazaji wa miche kote katika kaunti 47!",
  },

  // Header nav
  "nav.home": { en: "HOME", sw: "NYUMBANI" },
  "nav.shop": { en: "SHOP", sw: "DUKA" },
  "nav.bulk": { en: "BULK & INSTITUTIONAL", sw: "JUMLA NA TAASISI" },
  "nav.delivery": { en: "DELIVERY", sw: "UWASILISHAJI" },
  "nav.resources": { en: "FARMER RESOURCES", sw: "RASILIMALI ZA MKULIMA" },
  "nav.about": { en: "ABOUT & CONTACT", sw: "KUHUSU NA MAWASILIANO" },
  "nav.menu": { en: "Navigation Menu", sw: "Menyu ya Urambazaji" },

  // Common actions
  "action.whatsapp": { en: "WhatsApp", sw: "WhatsApp" },
  "action.whatsappOrder": { en: "Order via WhatsApp", sw: "Agiza kupitia WhatsApp" },
  "action.call": { en: "Call Us: 0711 911 690", sw: "Tupigie: 0711 911 690" },
  "action.shopNow": { en: "SHOP NOW", sw: "NUNUA SASA" },
  "action.buySeedlings": { en: "BUY SEEDLINGS", sw: "NUNUA MICHE" },
  "action.orderWhatsapp": { en: "ORDER ON WHATSAPP", sw: "AGIZA KWA WHATSAPP" },
  "action.whatsappOrderFloat": { en: "WhatsApp Order", sw: "Agiza WhatsApp" },

  // Theme & language toggles
  "toggle.theme.light": { en: "Light mode", sw: "Hali ya mwanga" },
  "toggle.theme.dark": { en: "Dark mode", sw: "Hali ya giza" },
  "toggle.language": { en: "Switch language", sw: "Badilisha lugha" },

  // Home hero
  "home.badge": {
    en: "FARM CITY • Kenya's Agricultural E-Commerce Hub",
    sw: "FARM CITY • Kituo cha Biashara ya Kilimo Mtandaoni Kenya",
  },
  "home.h1.line1": { en: "Fresh Produce.", sw: "Mazao Mabichi." },
  "home.h1.line2": { en: "Quality Seedlings.", sw: "Miche Bora." },
  "home.h1.line3": { en: "Reliable Supply.", sw: "Ugavi wa Kuaminika." },
  "home.description": {
    en: "Healthy, farm-fresh fruits and vegetables and a wide range of certified quality seedlings — delivered conveniently to households, farmers, businesses, and institutions. Same-day fresh delivery in Juja & Thika, with nationwide seedling dispatch from our Kapseret Eldoret nursery.",
    sw: "Matunda na mboga mabichi yenye afya na aina nyingi za miche bora iliyothibitishwa — vinavyowasilishwa kwa urahisi kwa kaya, wakulima, biashara na taasisi. Uwasilishaji wa siku hiyo hiyo Juja & Thika, na usambazaji wa miche nchini kote kutoka kitalu chetu cha Kapseret Eldoret.",
  },
  "home.value.fresh.title": { en: "Fresh & Healthy", sw: "Mabichi & Yenye Afya" },
  "home.value.fresh.desc": {
    en: "Harvested daily for peak nutrition and flavour.",
    sw: "Huvunwa kila siku kwa lishe na ladha bora.",
  },
  "home.value.variety.title": { en: "Wide Variety", sw: "Aina Nyingi" },
  "home.value.variety.desc": {
    en: "Vegetables, fruits, herbs, and 90+ seedling types.",
    sw: "Mboga, matunda, viungo, na aina 90+ za miche.",
  },
  "home.value.delivery.title": { en: "Convenient Delivery", sw: "Uwasilishaji Rahisi" },
  "home.value.delivery.desc": {
    en: "Same-day locally, countrywide to all 47 counties.",
    sw: "Siku hiyo hiyo karibu, nchini kote kaunti 47.",
  },
  "home.value.quality.title": { en: "Quality Guaranteed", sw: "Ubora Uliohakikishwa" },
  "home.value.quality.desc": {
    en: "Certified, inspected produce and grafted seedlings.",
    sw: "Mazao yaliyokaguliwa na miche iliyopandikizwa iliyothibitishwa.",
  },
  "home.chip.noAccount": { en: "No account needed", sw: "Hakuna akaunti inahitajika" },
  "home.chip.orderMinutes": { en: "Order in minutes", sw: "Agiza kwa dakika" },
  "home.chip.pay": {
    en: "Pay on delivery or via M-Pesa",
    sw: "Lipa wakati wa kupokea au kwa M-Pesa",
  },
  "home.trust.jujaHub": { en: "Juja / Thika Fresh Hub", sw: "Kituo cha Mazao Juja / Thika" },
  "home.trust.eldoret": { en: "Eldoret Kapseret Nursery", sw: "Kitalu cha Kapseret Eldoret" },
  "home.trust.counties": {
    en: "47 Counties Nationwide Delivery",
    sw: "Uwasilishaji Kaunti 47 Nchini Kote",
  },
  "home.panel.hub": {
    en: "Fresh Produce & Nursery Supply Hub",
    sw: "Kituo cha Ugavi wa Mazao na Miche",
  },
  "home.panel.juja": { en: "Juja / Thika", sw: "Juja / Thika" },
  "home.panel.jujaSub": {
    en: "Daily Fresh Fruits & Veg Delivery",
    sw: "Uwasilishaji wa Matunda na Mboga Kila Siku",
  },
  "home.panel.eldoret": { en: "Kapseret Eldoret", sw: "Kapseret Eldoret" },
  "home.panel.eldoretSub": {
    en: "Certified Seedling Production",
    sw: "Uzalishaji wa Miche Iliyothibitishwa",
  },

  // Footer
  "footer.brand": {
    en: "Farm City brings together fresh produce delivery and high-quality seedling supply across Kenya. From our Juja/Thika fresh hub and Kapseret Eldoret nursery directly to your farm, home, or business.",
    sw: "Farm City inaunganisha uwasilishaji wa mazao mabichi na ugavi wa miche bora kote Kenya. Kutoka kituo chetu cha Juja/Thika na kitalu cha Kapseret Eldoret moja kwa moja hadi shamba, nyumbani au biashara yako.",
  },
  "footer.tagline": {
    en: "Tagline: From Farm to You • Agriculture Made Easy",
    sw: "Kauli mbiu: Kutoka Shambani Hadi Kwako • Kilimo Kimerahisishwa",
  },
  "footer.order": {
    en: "Order online or on WhatsApp — no account required. Pay on delivery or via M-Pesa once our team confirms your order.",
    sw: "Agiza mtandaoni au kwa WhatsApp — hakuna akaunti inahitajika. Lipa wakati wa kupokea au kwa M-Pesa baada ya timu yetu kuthibitisha agizo lako.",
  },
  "footer.whatsappChat": { en: "WhatsApp Chat", sw: "Gumzo la WhatsApp" },
  "footer.quickLinks": { en: "Quick Links", sw: "Viungo vya Haraka" },
  "footer.link.shop": { en: "Shop (Produce & Seedlings)", sw: "Duka (Mazao & Miche)" },
  "footer.link.bulk": { en: "Bulk & Institutional Supply", sw: "Ugavi wa Jumla & Taasisi" },
  "footer.link.delivery": {
    en: "Delivery Information & Coverage",
    sw: "Taarifa za Uwasilishaji & Maeneo",
  },
  "footer.link.resources": { en: "Farmer Resources & Guides", sw: "Rasilimali & Miongozo ya Wakulima" },
  "footer.link.about": { en: "About & Contact Farm City", sw: "Kuhusu & Mawasiliano ya Farm City" },
  "footer.hubs": { en: "Physical Hubs", sw: "Vituo vya Kimwili" },
  "footer.hub.juja": { en: "Farm City – Juja / Thika", sw: "Farm City – Juja / Thika" },
  "footer.hub.jujaSub": {
    en: "Fresh Produce & Local Distribution Hub, Kiambu County",
    sw: "Kituo cha Mazao & Usambazaji wa Ndani, Kaunti ya Kiambu",
  },
  "footer.hub.eldoret": {
    en: "Seedling Nursery – Kapseret, Eldoret",
    sw: "Kitalu cha Miche – Kapseret, Eldoret",
  },
  "footer.hub.eldoretSub": {
    en: "Physical Nursery Operation & Countrywide Dispatch, Uasin Gishu County",
    sw: "Utendaji wa Kitalu & Usambazaji Nchini Kote, Kaunti ya Uasin Gishu",
  },
  "footer.contact": { en: "Contact & Hours", sw: "Mawasiliano & Saa" },
  "footer.contact.team": { en: "Wesley Mage Mujenyi / Farm City Team", sw: "Wesley Mage Mujenyi / Timu ya Farm City" },
  "footer.hours.weekdays": {
    en: "Monday - Saturday: 7:00 AM - 6:30 PM",
    sw: "Jumatatu - Jumamosi: 7:00 Asubuhi - 6:30 Jioni",
  },
  "footer.hours.sunday": {
    en: "Sunday: Deliveries & Online Orders Active",
    sw: "Jumapili: Uwasilishaji & Maagizo Mtandaoni Yanaendelea",
  },
  "footer.rights": {
    en: "All rights reserved. Registered Agricultural Supplier in Kenya.",
    sw: "Haki zote zimehifadhiwa. Msambazaji wa Kilimo Aliyesajiliwa Kenya.",
  },
  "footer.values": { en: "Freshness • Reliability • Quality", sw: "Ubichi • Kuaminika • Ubora" },

  // Shared: subcategories (values stay English internally; only labels translate)
  "cat.All": { en: "All", sw: "Zote" },
  "cat.Vegetables": { en: "Vegetables", sw: "Mboga" },
  "cat.Leafy Greens": { en: "Leafy Greens", sw: "Mboga za Majani" },
  "cat.Fruit Vegetables": { en: "Fruit Vegetables", sw: "Mboga za Matunda" },
  "cat.Fruits": { en: "Fruits", sw: "Matunda" },
  "cat.Citrus Fruits": { en: "Citrus Fruits", sw: "Machungwa & Jamii Yake" },
  "cat.Tubers": { en: "Tubers", sw: "Mizizi" },
  "cat.Fruit Seedlings": { en: "Fruit Seedlings", sw: "Miche ya Matunda" },
  "cat.Tree & Nut Seedlings": { en: "Tree & Nut Seedlings", sw: "Miche ya Miti & Njugu" },
  "cat.Coffee & Cash Crops": { en: "Coffee & Cash Crops", sw: "Kahawa & Mazao ya Biashara" },
  "cat.Herbs & Aromatics": { en: "Herbs & Aromatics", sw: "Mimea ya Viungo & Manukato" },
  "cat.Berry Plants": { en: "Berry Plants", sw: "Mimea ya Beri" },
  "cat.Vegetable Seedlings": { en: "Vegetable Seedlings", sw: "Miche ya Mboga" },

  // Shared: stock badges
  "stock.available": { en: "Available Now", sw: "Inapatikana Sasa" },
  "stock.low": { en: "Low Stock", sw: "Stoki Ndogo" },
  "stock.seasonal": { en: "Seasonal", sw: "Ya Msimu" },
  "stock.soon": { en: "Coming Soon", sw: "Inakuja Hivi Karibuni" },

  // Shared: common product actions
  "prod.inquire": { en: "Inquire", sw: "Uliza" },
  "prod.addCart": { en: "Add Cart", sw: "Ongeza" },
  "prod.soon": { en: "Soon", sw: "Baadaye" },
  "prod.price": { en: "Price:", sw: "Bei:" },
  "prod.variety": { en: "Variety:", sw: "Aina:" },
  "prod.selectUnit": { en: "Select Packaging / Unit:", sw: "Chagua Kifungashio / Kipimo:" },
  "prod.selectQty": { en: "Select Quantity:", sw: "Chagua Idadi:" },
  "prod.unitPrice": { en: "Unit Price:", sw: "Bei ya Kipimo:" },
  "prod.notify": { en: "Notify Me When Available", sw: "Nijulishe Ikipatikana" },
  "prod.addToCart": { en: "Add to Cart", sw: "Ongeza kwenye Kikapu" },

  // Shop page
  "shop.banner.tag": {
    en: "Juja Fresh Hub & Kapseret Eldoret Nursery",
    sw: "Kituo cha Juja & Kitalu cha Kapseret Eldoret",
  },
  "shop.banner.title": { en: "Farm City Agricultural Catalogue", sw: "Katalogi ya Kilimo ya Farm City" },
  "shop.banner.desc": {
    en: "Browse fresh vegetables, leafy greens, fruit vegetables, fresh fruits, citrus, tubers, certified fruit seedlings, cash crops, herbs, and vegetable seedlings.",
    sw: "Vinjari mboga mbichi, mboga za majani, mboga za matunda, matunda mabichi, machungwa, mizizi, miche ya matunda iliyothibitishwa, mazao ya biashara, viungo na miche ya mboga.",
  },
  "shop.tab.all": { en: "All Catalog", sw: "Katalogi Yote" },
  "shop.tab.fresh": { en: "Fresh Produce", sw: "Mazao Mabichi" },
  "shop.tab.seedlings": { en: "Plant & Seedlings", sw: "Mimea & Miche" },
  "shop.search": {
    en: "Search products, varieties e.g. Hass, Spinach, Mango...",
    sw: "Tafuta bidhaa, aina k.m. Hass, Spinachi, Embe...",
  },
  "shop.availability": { en: "Availability:", sw: "Upatikanaji:" },
  "shop.deliverySupply": { en: "Delivery/Supply:", sw: "Uwasilishaji/Ugavi:" },
  "shop.empty.title": {
    en: "No agricultural products found matching your filter criteria.",
    sw: "Hakuna bidhaa za kilimo zilizopatikana kulingana na vigezo vyako.",
  },
  "shop.empty.sub": {
    en: "Try selecting a different subcategory or clearing your search filters.",
    sw: "Jaribu kuchagua kategoria ndogo tofauti au ondoa vichujio vyako.",
  },
  "shop.clearFilters": { en: "Clear all filters", sw: "Ondoa vichujio vyote" },
  "shop.resultsOne": { en: "product", sw: "bidhaa" },
  "shop.resultsMany": { en: "products", sw: "bidhaa" },
  "shop.toast.added": { en: "Added", sw: "Umeongeza" },
  "shop.toast.toCart": { en: "to cart!", sw: "kwenye kikapu!" },
  "shop.toast.soon": {
    en: "is coming soon! You can inquire via WhatsApp.",
    sw: "inakuja hivi karibuni! Unaweza kuuliza kupitia WhatsApp.",
  },
  "shop.toast.notify": {
    en: "is coming soon. Notification request noted!",
    sw: "inakuja hivi karibuni. Ombi la arifa limepokelewa!",
  },
  "prod.minOrder": { en: "Minimum Order:", sw: "Agizo la Chini Zaidi:" },

  // Seedlings page
  "seed.hero.tag": {
    en: "Physical Nursery: Kapseret, Eldoret • Countrywide Dispatch",
    sw: "Kitalu Halisi: Kapseret, Eldoret • Usambazaji Nchini Kote",
  },
  "seed.hero.title1": { en: "Certified & Grafted", sw: "Zilizothibitishwa & Zilizopandikizwa" },
  "seed.hero.title2": { en: "Quality Seedlings Catalogue", sw: "Katalogi ya Miche Bora" },
  "seed.hero.desc": {
    en: "Supplying high-yielding Grafted Hass & Fuerte Avocado, Grafted Passion Fruit, Macadamia, Mango varieties, Coffee (Ruiru 11, Batian), Herbs, Berries, and Hybrid Vegetable seedlings across Kenya.",
    sw: "Tunauza miche yenye mavuno mengi: Parachichi Hass & Fuerte iliyopandikizwa, Passion iliyopandikizwa, Makadamia, aina za Maembe, Kahawa (Ruiru 11, Batian), Viungo, Beri, na miche mseto ya mboga kote Kenya.",
  },
  "seed.hero.bulkQuote": { en: "REQUEST BULK SEEDLING QUOTE", sw: "OMBA BEI YA MICHE YA JUMLA" },
  "seed.hero.whatsapp": { en: "WHATSAPP SEEDLING INQUIRY", sw: "ULIZA MICHE KWA WHATSAPP" },
  "seed.search": {
    en: "Search seedlings e.g. Hass, Apple Mango, Batian...",
    sw: "Tafuta miche k.m. Hass, Embe Apple, Batian...",
  },
  "seed.toast.soon": {
    en: "is coming soon! Pre-order inquiry noted.",
    sw: "inakuja hivi karibuni! Ombi la kuagiza mapema limepokelewa.",
  },
  "seed.toast.added": { en: "Added 1", sw: "Umeongeza 1" },
  "seed.toast.toCart": { en: "to cart!", sw: "kwenye kikapu!" },
  "seed.assure.tag": { en: "Kapseret Nursery Operations", sw: "Utendaji wa Kitalu cha Kapseret" },
  "seed.assure.title": {
    en: "Nursery Assurance & Grafting Standards",
    sw: "Uhakikisho wa Kitalu & Viwango vya Upandikizaji",
  },
  "seed.assure.desc": {
    en: "All seedlings at our Eldoret nursery are propagated under strict sanitary agronomic conditions. Scions are taken from verified mother orchards to ensure maximum fruit quality and early maturity.",
    sw: "Miche yote katika kitalu chetu cha Eldoret huzalishwa chini ya usafi mkali wa kilimo. Vipandikizi huchukuliwa kutoka bustani mama zilizothibitishwa ili kuhakikisha ubora wa juu wa matunda na ukomavu wa mapema.",
  },
  "seed.assure.cta": { en: "GET COMMERCIAL ORCHARD QUOTE", sw: "PATA BEI YA BUSTANI YA KIBIASHARA" },
  "seed.assure.c1.title": { en: "Disease Resistant Rootstocks", sw: "Mizizi Inayostahimili Magonjwa" },
  "seed.assure.c1.desc": {
    en: "Specialized rootstocks resistant to soil-borne pathogens and root rot.",
    sw: "Mizizi maalum inayostahimili vimelea vya udongo na kuoza kwa mizizi.",
  },
  "seed.assure.c2.title": { en: "Countrywide Farm Dispatch", sw: "Usambazaji Mashambani Nchini Kote" },
  "seed.assure.c2.desc": {
    en: "Safe packaging with protective crates ensuring arrival without root disturbance.",
    sw: "Ufungashaji salama kwa makasha ya kinga kuhakikisha kuwasili bila kuharibu mizizi.",
  },
  "seed.assure.c3.title": { en: "Field Agronomy Advisory", sw: "Ushauri wa Kilimo Shambani" },
  "seed.assure.c3.desc": {
    en: "Free field planting guidelines provided with every seedling order.",
    sw: "Miongozo ya bure ya upandaji shambani hutolewa kwa kila agizo la miche.",
  },

  // Cart page
  "cart.ref": { en: "Order Ref:", sw: "Kumbukumbu ya Agizo:" },
  "cart.received": { en: "Order Received!", sw: "Agizo Limepokelewa!" },
  "cart.thanks.a": {
    en: "Thank you for ordering with Farm City! Our team will confirm stock and delivery fees, then contact you at",
    sw: "Asante kwa kuagiza na Farm City! Timu yetu itathibitisha stoki na ada za uwasilishaji, kisha itawasiliana nawe kupitia",
  },
  "cart.thanks.b": {
    en: "to arrange delivery and payment.",
    sw: "kupanga uwasilishaji na malipo.",
  },
  "cart.yourNumber": { en: "your number", sw: "nambari yako" },
  "cart.confirmWhatsapp": { en: "Confirm on WhatsApp", sw: "Thibitisha kwa WhatsApp" },
  "cart.backToShop": { en: "Back to Shop", sw: "Rudi Dukani" },
  "cart.empty.title": { en: "Your Shopping Cart is Empty", sw: "Kikapu chako cha Ununuzi ni Tupu" },
  "cart.empty.desc": {
    en: "Explore our fresh produce or seedling catalogue to add items to your cart.",
    sw: "Vinjari katalogi yetu ya mazao mabichi au miche ili kuongeza bidhaa kwenye kikapu chako.",
  },
  "cart.empty.shop": { en: "Shop Fresh Produce", sw: "Nunua Mazao Mabichi" },
  "cart.empty.seedlings": { en: "Browse Seedlings", sw: "Vinjari Miche" },
  "cart.title": { en: "Your Shopping Cart", sw: "Kikapu chako cha Ununuzi" },
  "cart.subtitle": {
    en: "Review your items and place your order or send it to us on WhatsApp.",
    sw: "Kagua bidhaa zako na uweke agizo au utuletee kupitia WhatsApp.",
  },
  "cart.continue": { en: "Continue Shopping", sw: "Endelea Kununua" },
  "cart.preferWhatsapp": { en: "Prefer ordering via WhatsApp?", sw: "Unapendelea kuagiza kupitia WhatsApp?" },
  "cart.sendWhatsapp": { en: "Send Cart to WhatsApp", sw: "Tuma Kikapu kwa WhatsApp" },
  "cart.deliveryDetails": { en: "Delivery Details", sw: "Maelezo ya Uwasilishaji" },
  "cart.fullName": { en: "Full Name *", sw: "Jina Kamili *" },
  "cart.phone": { en: "Phone Number *", sw: "Nambari ya Simu *" },
  "cart.address": { en: "Delivery Town / Address *", sw: "Mji / Anwani ya Uwasilishaji *" },
  "cart.notes": { en: "Delivery Notes / Instructions", sw: "Maelezo / Maagizo ya Uwasilishaji" },
  "cart.notesPlaceholder": {
    en: "e.g. Call upon arrival, prefer morning delivery...",
    sw: "k.m. Piga simu ukifika, napendelea uwasilishaji wa asubuhi...",
  },
  "cart.subtotal": { en: "Subtotal:", sw: "Jumla ndogo:" },
  "cart.estFee": { en: "Estimated Delivery Fee:", sw: "Makadirio ya Ada ya Uwasilishaji:" },
  "cart.calcConfirm": { en: "Calculated on confirmation", sw: "Itahesabiwa wakati wa uthibitisho" },
  "cart.totalEst": { en: "Total Estimated:", sw: "Jumla Inayokadiriwa:" },
  "cart.noPayment": {
    en: "No payment is taken online. Once you place your order, our team confirms stock and delivery fees, then arranges payment and delivery with you directly.",
    sw: "Hakuna malipo yanayochukuliwa mtandaoni. Ukishaweka agizo, timu yetu itathibitisha stoki na ada za uwasilishaji, kisha itapanga malipo na uwasilishaji nawe moja kwa moja.",
  },
  "cart.placeOrder": { en: "PLACE ORDER", sw: "WEKA AGIZO" },
  "drawer.title": { en: "Your Cart", sw: "Kikapu Chako" },
  "drawer.count": { en: "items", sw: "bidhaa" },
  "drawer.empty": { en: "Your cart is empty", sw: "Kikapu chako ni tupu" },
  "drawer.emptyHint": {
    en: "Add fresh produce or seedlings to get started.",
    sw: "Ongeza mazao mabichi au miche ili kuanza.",
  },
  "drawer.startShopping": { en: "Start Shopping", sw: "Anza Kununua" },
  "drawer.subtotal": { en: "Subtotal", sw: "Jumla ndogo" },
  "drawer.checkout": { en: "Checkout", sw: "Kamilisha Agizo" },
  "drawer.continue": { en: "Continue shopping", sw: "Endelea kununua" },
  "drawer.remove": { en: "Remove", sw: "Ondoa" },

  // Delivery page
  "del.tag": { en: "Order Today • We Prepare • We Deliver", sw: "Agiza Leo • Tunaandaa • Tunawasilisha" },
  "del.title": { en: "FARM CITY DELIVERY", sw: "UWASILISHAJI WA FARM CITY" },
  "del.desc": {
    en: "Delivery is a core part of Farm City operations. We deliver fresh produce directly to homes and businesses in Juja, Thika, and surrounding areas, and dispatch high-quality seedlings countrywide to all 47 counties in Kenya.",
    sw: "Uwasilishaji ni sehemu muhimu ya utendaji wa Farm City. Tunawasilisha mazao mabichi moja kwa moja nyumbani na kwa biashara huko Juja, Thika na maeneo jirani, na kusambaza miche bora nchini kote katika kaunti zote 47 nchini Kenya.",
  },
  "del.p1.title": { en: "Juja & Thika Fresh Hub", sw: "Kituo cha Mazao Juja & Thika" },
  "del.p1.desc": {
    en: "Local same-day & next-day fresh fruit and vegetable home delivery.",
    sw: "Uwasilishaji wa matunda na mboga nyumbani siku hiyo hiyo au siku inayofuata.",
  },
  "del.p2.title": { en: "Kapseret Eldoret Nursery", sw: "Kitalu cha Kapseret Eldoret" },
  "del.p2.desc": {
    en: "Nursery pickup and organized countrywide seedling dispatch.",
    sw: "Kuchukua kutoka kitaluni na usambazaji wa miche uliopangwa nchini kote.",
  },
  "del.p3.title": { en: "Scheduled Deliveries", sw: "Uwasilishaji Uliopangwa" },
  "del.p3.desc": {
    en: "Weekly and biweekly contracted deliveries for schools & hotels.",
    sw: "Uwasilishaji wa mkataba wa kila wiki na kila wiki mbili kwa shule na hoteli.",
  },
  "del.p4.title": { en: "Safe Packaging", sw: "Ufungashaji Salama" },
  "del.p4.desc": {
    en: "Crated packaging ensuring fresh produce and seedlings arrive intact.",
    sw: "Ufungashaji wa makasha kuhakikisha mazao na miche vinawasili salama.",
  },
  "del.log.tag": { en: "Logistics & Transport Solutions", sw: "Suluhu za Usafirishaji & Uchukuzi" },
  "del.log.title": {
    en: "Safe Transportation & Farm-to-Customer Logistics",
    sw: "Usafirishaji Salama & Uchukuzi kutoka Shambani hadi kwa Mteja",
  },
  "del.log.desc": {
    en: "We use specialized agricultural transport methods to prevent plant damage, heat stress, or bruising during distribution.",
    sw: "Tunatumia mbinu maalum za usafirishaji wa kilimo kuzuia uharibifu wa mimea, joto kali, au michubuko wakati wa usambazaji.",
  },
  "del.log.c1.badge": { en: "Seedling & Produce Crates", sw: "Makasha ya Miche & Mazao" },
  "del.log.c1.title": { en: "Protected Crate Transportation", sw: "Usafirishaji wa Makasha ya Kinga" },
  "del.log.c1.desc": {
    en: "Seedlings and fresh produce are packed in sturdy ventilated wooden and plastic crates. This keeps soil intact around roots and protects leaves from crushing during transport to all 47 counties.",
    sw: "Miche na mazao mabichi hufungashwa katika makasha imara ya mbao na plastiki yenye mzunguko wa hewa. Hii huhifadhi udongo kuzunguka mizizi na kulinda majani yasiharibike wakati wa usafirishaji hadi kaunti zote 47.",
  },
  "del.log.c2.badge": { en: "Agricultural Delivery Fleet", sw: "Magari ya Uwasilishaji wa Kilimo" },
  "del.log.c2.title": { en: "Nationwide Farm Logistics Network", sw: "Mtandao wa Uchukuzi wa Kilimo Nchini Kote" },
  "del.log.c2.desc": {
    en: "Our farm logistics network coordinates direct regional deliveries and verified courier transit so your seedlings or bulk produce arrive healthy, fresh, and ready for planting or consumption.",
    sw: "Mtandao wetu wa uchukuzi huratibu uwasilishaji wa moja kwa moja wa kikanda na usafirishaji wa wakala waliothibitishwa ili miche au mazao yako ya jumla yawasili yakiwa na afya, mabichi, na tayari kupandwa au kuliwa.",
  },
  "del.table.title": { en: "Delivery Zones & Fee Structure", sw: "Maeneo ya Uwasilishaji & Muundo wa Ada" },
  "del.table.subtitle": {
    en: "Current delivery locations, timetables, and estimated charges across Kenya.",
    sw: "Maeneo ya sasa ya uwasilishaji, ratiba, na makadirio ya gharama kote Kenya.",
  },
  "del.table.live": { en: "Live Rates", sw: "Bei Halisi" },
  "del.table.h1": { en: "County / Zone", sw: "Kaunti / Eneo" },
  "del.table.h2": { en: "Towns Served", sw: "Miji Inayohudumiwa" },
  "del.table.h3": { en: "Category", sw: "Kategoria" },
  "del.table.h4": { en: "Estimated Time", sw: "Muda Unaokadiriwa" },
  "del.table.h5": { en: "Delivery Charge", sw: "Ada ya Uwasilishaji" },
  "del.commit.title": { en: "Farm City Delivery Commitment", sw: "Ahadi ya Uwasilishaji ya Farm City" },
  "del.commit.desc": {
    en: "We ensure produce is selected fresh on the day of dispatch. For seedlings, plants are hardened off, roots secured, and packed in ventilated protective boxes before transport.",
    sw: "Tunahakikisha mazao yanachaguliwa yakiwa mabichi siku ya usambazaji. Kwa miche, mimea huzoeshwa, mizizi hufungwa, na kufungashwa katika masanduku ya kinga yenye hewa kabla ya usafirishaji.",
  },
  "del.commit.link1": { en: "Order Fresh Produce Now", sw: "Agiza Mazao Mabichi Sasa" },
  "del.commit.link2": { en: "Order Seedlings Nationwide", sw: "Agiza Miche Nchini Kote" },
  "del.q.title": { en: "Have Delivery Questions?", sw: "Una Maswali ya Uwasilishaji?" },
  "del.q.desc": {
    en: "Need delivery to an unlisted area or bulk transport arrangement?",
    sw: "Unahitaji uwasilishaji kwa eneo lisiloorodheshwa au mpango wa usafirishaji wa jumla?",
  },
  "del.q.call": { en: "Call 0711 911 690", sw: "Piga 0711 911 690" },
  "del.q.whatsapp": { en: "WhatsApp Inquiries", sw: "Maswali kwa WhatsApp" },
  "zone.Fresh Produce": { en: "Fresh Produce", sw: "Mazao Mabichi" },
  "zone.Seedlings": { en: "Seedlings", sw: "Miche" },
  "zone.Both": { en: "Both", sw: "Vyote Viwili" },

  // About page
  "about.tag": { en: "About Farm City", sw: "Kuhusu Farm City" },
  "about.title": {
    en: "Connecting Farmers, Produce & Consumers Across Kenya",
    sw: "Kuunganisha Wakulima, Mazao & Watumiaji Kote Kenya",
  },
  "about.desc": {
    en: "Farm City is an agricultural supply, fresh produce delivery, and seedling business. We unite two core operational strengths: Fresh Fruits & Vegetables Sales with Seedling Production & Farmer Supply.",
    sw: "Farm City ni biashara ya ugavi wa kilimo, uwasilishaji wa mazao mabichi, na miche. Tunaunganisha nguvu kuu mbili: Uuzaji wa Matunda & Mboga Mabichi na Uzalishaji wa Miche & Ugavi kwa Wakulima.",
  },
  "about.vision.tag": { en: "Core Brand Vision", sw: "Dira Kuu ya Chapa" },
  "about.vision.quote": {
    en: "«A trusted agricultural supply and delivery platform connecting farmers, agricultural products, businesses and consumers.»",
    sw: "«Jukwaa la kuaminika la ugavi na uwasilishaji wa kilimo linalounganisha wakulima, bidhaa za kilimo, biashara na watumiaji.»",
  },
  "about.vision.desc": {
    en: "Farm City is built on four pillars: Freshness, Reliability, Convenience, and Quality. We simplify agriculture for households buying weekly groceries and farmers expanding commercial fruit orchards.",
    sw: "Farm City imejengwa juu ya nguzo nne: Ubichi, Kuaminika, Urahisi, na Ubora. Tunarahisisha kilimo kwa kaya zinazonunua vyakula kila wiki na wakulima wanaopanua bustani za matunda za kibiashara.",
  },
  "about.juja.badge": { en: "Juja / Thika Operation", sw: "Utendaji wa Juja / Thika" },
  "about.juja.title": { en: "Fresh Produce & Distribution Hub", sw: "Kituo cha Mazao & Usambazaji" },
  "about.juja.desc": {
    en: "Located in Kiambu County, serving Juja, Thika, Ruiru, and surrounding areas. Handles daily fresh vegetable procurement, order packing, quality inspection, and home/institutional deliveries.",
    sw: "Kiko katika Kaunti ya Kiambu, kikihudumia Juja, Thika, Ruiru, na maeneo jirani. Hushughulikia ununuzi wa mboga mbichi kila siku, ufungashaji wa maagizo, ukaguzi wa ubora, na uwasilishaji nyumbani/kwa taasisi.",
  },
  "about.juja.loc": { en: "Juja / Thika Road", sw: "Barabara ya Juja / Thika" },
  "about.juja.link": { en: "Shop Fresh Hub →", sw: "Nunua Kituo cha Mazao →" },
  "about.eldoret.badge": { en: "Kapseret, Eldoret Operation", sw: "Utendaji wa Kapseret, Eldoret" },
  "about.eldoret.title": { en: "Physical Seedling Nursery", sw: "Kitalu Halisi cha Miche" },
  "about.eldoret.desc": {
    en: "Situated in Kapseret, Eldoret, Uasin Gishu County. Houses our physical nursery beds, grafting centers, and countrywide dispatch center for Hass avocado, passion fruit, macadamia, and coffee seedlings.",
    sw: "Kiko Kapseret, Eldoret, Kaunti ya Uasin Gishu. Kina vitanda vyetu vya kitalu, vituo vya upandikizaji, na kituo cha usambazaji nchini kote cha miche ya parachichi Hass, passion, makadamia na kahawa.",
  },
  "about.eldoret.loc": { en: "Kapseret, Eldoret", sw: "Kapseret, Eldoret" },
  "about.eldoret.link": { en: "Browse Nursery →", sw: "Vinjari Kitalu →" },
  "about.values.tag": { en: "Our Guiding Values", sw: "Maadili Yetu Yanayoongoza" },
  "about.values.title": { en: "Our Commitments to You", sw: "Ahadi Zetu Kwako" },
  "about.values.c1.title": { en: "Commitment to Freshness", sw: "Ahadi ya Ubichi" },
  "about.values.c1.desc": {
    en: "Strict quality control ensures produce reaches your kitchen in peak nutritional condition.",
    sw: "Udhibiti mkali wa ubora huhakikisha mazao yanafika jikoni kwako yakiwa na virutubisho vya hali ya juu.",
  },
  "about.values.c2.title": { en: "Commitment to Farmers", sw: "Ahadi kwa Wakulima" },
  "about.values.c2.desc": {
    en: "Providing genuine, grafted, disease-free seedlings that deliver high yields and strong return on investment.",
    sw: "Kutoa miche halisi, iliyopandikizwa, isiyo na magonjwa inayotoa mavuno mengi na faida kubwa ya uwekezaji.",
  },
  "about.values.c3.title": { en: "Transparent Service", sw: "Huduma ya Uwazi" },
  "about.values.c3.desc": {
    en: "Clear pricing, responsive WhatsApp communication, and reliable doorstep delivery.",
    sw: "Bei wazi, mawasiliano ya haraka ya WhatsApp, na uwasilishaji wa kuaminika mlangoni.",
  },
  "about.contact.tag": { en: "Get In Touch", sw: "Wasiliana Nasi" },
  "about.contact.title": { en: "Contact Farm City", sw: "Wasiliana na Farm City" },
  "about.contact.desc": {
    en: "Have a question about fresh produce delivery, seedling orders, or commercial farm setup? Reach out to us below or call directly.",
    sw: "Una swali kuhusu uwasilishaji wa mazao mabichi, maagizo ya miche, au uanzishaji wa shamba la kibiashara? Wasiliana nasi hapa chini au piga simu moja kwa moja.",
  },
  "about.contact.call": { en: "CALL US DIRECTLY", sw: "TUPIGIE MOJA KWA MOJA" },
  "about.contact.whatsapp": { en: "WHATSAPP CHAT", sw: "GUMZO LA WHATSAPP" },
  "about.contact.email": { en: "SEND EMAIL", sw: "TUMA BARUAPEPE" },
  "about.contact.hours": { en: "BUSINESS HOURS", sw: "SAA ZA KAZI" },
  "about.contact.hoursVal": { en: "Mon - Sat: 7am - 6:30pm", sw: "Jumatatu - Jumamosi: 7 asubuhi - 6:30 jioni" },

  // Contact page
  "contact.tag": { en: "Contact Farm City", sw: "Wasiliana na Farm City" },
  "contact.title": { en: "We're Here to Help You Grow", sw: "Tuko Hapa Kukusaidia Kukua" },
  "contact.desc": {
    en: "Get in touch with Farm City for fresh produce orders, seedling inquiries, bulk institutional supply quotations, or technical agronomy advice.",
    sw: "Wasiliana na Farm City kwa maagizo ya mazao mabichi, maswali ya miche, nukuu za ugavi wa jumla wa taasisi, au ushauri wa kitaalamu wa kilimo.",
  },
  "contact.form.title": { en: "Send an Online Enquiry", sw: "Tuma Ombi Mtandaoni" },
  "contact.form.received": { en: "Message Received!", sw: "Ujumbe Umepokelewa!" },
  "contact.form.thanks": {
    en: "Thank you for contacting Farm City. A representative will get back to you shortly.",
    sw: "Asante kwa kuwasiliana na Farm City. Mwakilishi atakujibu hivi karibuni.",
  },
  "contact.form.another": { en: "Send Another Message", sw: "Tuma Ujumbe Mwingine" },
  "contact.form.name": { en: "Your Full Name *", sw: "Jina Lako Kamili *" },
  "contact.form.namePh": { en: "e.g. John Kamau", sw: "k.m. John Kamau" },
  "contact.form.phone": { en: "Phone / WhatsApp *", sw: "Simu / WhatsApp *" },
  "contact.form.email": { en: "Email Address", sw: "Anwani ya Baruapepe" },
  "contact.form.emailPh": { en: "e.g. john@example.com", sw: "k.m. john@example.com" },
  "contact.form.subject": { en: "Enquiry Subject", sw: "Mada ya Ombi" },
  "contact.form.subj.general": { en: "General Inquiry", sw: "Ombi la Jumla" },
  "contact.form.subj.produce": { en: "Fresh Produce Order", sw: "Agizo la Mazao Mabichi" },
  "contact.form.subj.seedlings": { en: "Seedlings Order", sw: "Agizo la Miche" },
  "contact.form.subj.bulk": { en: "Bulk / Institutional Supply", sw: "Ugavi wa Jumla / Taasisi" },
  "contact.form.subj.visit": { en: "Kapseret Nursery Visit", sw: "Ziara ya Kitalu cha Kapseret" },
  "contact.form.message": { en: "Your Message *", sw: "Ujumbe Wako *" },
  "contact.form.messagePh": { en: "Tell us what you need...", sw: "Tuambie unachohitaji..." },
  "contact.form.send": { en: "SEND ENQUIRY", sw: "TUMA OMBI" },
  "contact.loc.title": { en: "Physical Locations & Operations", sw: "Maeneo Halisi & Utendaji" },
  "contact.loc1.badge": { en: "Juja / Thika Operation", sw: "Utendaji wa Juja / Thika" },
  "contact.loc1.title": { en: "Farm City Fresh Distribution Hub", sw: "Kituo cha Usambazaji cha Farm City" },
  "contact.loc1.addr": { en: "Juja Town & Thika Road, Kiambu County", sw: "Mji wa Juja & Barabara ya Thika, Kaunti ya Kiambu" },
  "contact.loc1.contact": {
    en: "Contact: Wesley Mage Mujenyi (0711 911 690)",
    sw: "Mawasiliano: Wesley Mage Mujenyi (0711 911 690)",
  },
  "contact.loc2.badge": { en: "Kapseret Eldoret Nursery", sw: "Kitalu cha Kapseret Eldoret" },
  "contact.loc2.title": { en: "Farm City Seedling Nursery", sw: "Kitalu cha Miche cha Farm City" },
  "contact.loc2.addr": { en: "Kapseret, Eldoret, Uasin Gishu County", sw: "Kapseret, Eldoret, Kaunti ya Uasin Gishu" },
  "contact.loc2.contact": {
    en: "WhatsApp / Sales: 0726 360 635 / 0711 911 690",
    sw: "WhatsApp / Mauzo: 0726 360 635 / 0711 911 690",
  },
  "contact.directions": { en: "Get Directions (Google Maps)", sw: "Pata Maelekezo (Google Maps)" },

  // Bulk & Institutional page
  "bulk.tag": { en: "Farm City Commercial & Bulk Supply", sw: "Ugavi wa Kibiashara & Jumla wa Farm City" },
  "bulk.title": {
    en: "Bulk Produce & Commercial Seedling Quotations",
    sw: "Nukuu za Mazao ya Jumla & Miche ya Kibiashara",
  },
  "bulk.desc": {
    en: "We supply fresh vegetables, fruits, and meat/dairy produce in bulk to schools, hotels, restaurants, hospitals, caterers, and corporate cafeterias. We also fulfill commercial fruit orchard orders (500 to 10,000+ seedlings) nationwide.",
    sw: "Tunauza mboga, matunda, na mazao ya nyama/maziwa kwa jumla kwa shule, hoteli, migahawa, hospitali, wapishi, na mikahawa ya makampuni. Pia tunatimiza maagizo ya bustani za matunda za kibiashara (miche 500 hadi 10,000+) nchini kote.",
  },
  "bulk.tab.institutional": { en: "Bulk Fresh Produce Quote", sw: "Nukuu ya Mazao Mabichi ya Jumla" },
  "bulk.tab.seedlings": { en: "Bulk Seedlings Quote", sw: "Nukuu ya Miche ya Jumla" },
  "bulk.success.title": { en: "Quotation Request Submitted!", sw: "Ombi la Nukuu Limewasilishwa!" },
  "bulk.success.desc": {
    en: "Thank you for contacting Farm City. Our commercial team will review your specifications and issue a formal price catalogue / invoice shortly.",
    sw: "Asante kwa kuwasiliana na Farm City. Timu yetu ya kibiashara itakagua vipimo vyako na kutoa katalogi rasmi ya bei / ankara hivi karibuni.",
  },
  "bulk.success.another": { en: "Submit Another Request", sw: "Wasilisha Ombi Lingine" },
  "bulk.success.whatsapp": { en: "Send via WhatsApp", sw: "Tuma kupitia WhatsApp" },
  "bulk.success.whatsappHint": {
    en: "Your quote request also opens in WhatsApp so our team receives it instantly. If it didn't open, tap below.",
    sw: "Ombi lako la nukuu pia hufunguka katika WhatsApp ili timu yetu ilipokee papo hapo. Kama halikufunguka, gusa hapa chini.",
  },
  "bulk.org.institutional": { en: "Organization / Business Name *", sw: "Jina la Shirika / Biashara *" },
  "bulk.org.seedlings": { en: "Farm / Project Name", sw: "Jina la Shamba / Mradi" },
  "bulk.orgPh.institutional": { en: "e.g. ERCEC School / Hotel Sunshine", sw: "k.m. Shule ya ERCEC / Hoteli Sunshine" },
  "bulk.orgPh.seedlings": { en: "e.g. Green Valley Farm", sw: "k.m. Shamba la Green Valley" },
  "bulk.contactPerson": { en: "Contact Person Name *", sw: "Jina la Mtu wa Mawasiliano *" },
  "bulk.contactPersonPh": {
    en: "e.g. Wesley Mage / Procurement Officer",
    sw: "k.m. Wesley Mage / Afisa Ununuzi",
  },
  "bulk.phone": { en: "Phone Number *", sw: "Nambari ya Simu *" },
  "bulk.whatsapp": { en: "WhatsApp Number", sw: "Nambari ya WhatsApp" },
  "bulk.email": { en: "Email Address *", sw: "Anwani ya Baruapepe *" },
  "bulk.emailPh": { en: "e.g. procurement@organization.co.ke", sw: "k.m. ununuzi@shirika.co.ke" },
  "bulk.county": { en: "County *", sw: "Kaunti *" },
  "bulk.countyPh": { en: "e.g. Kiambu / Uasin Gishu / Nairobi", sw: "k.m. Kiambu / Uasin Gishu / Nairobi" },
  "bulk.town": { en: "Town / Specific Delivery Location *", sw: "Mji / Eneo Maalum la Uwasilishaji *" },
  "bulk.townPh": { en: "e.g. Juja, Thika Road / Eldoret Town", sw: "k.m. Juja, Barabara ya Thika / Mji wa Eldoret" },
  "bulk.frequency": { en: "Supply Frequency", sw: "Mzunguko wa Ugavi" },
  "bulk.freq.weekly": { en: "Weekly Delivery", sw: "Uwasilishaji wa Kila Wiki" },
  "bulk.freq.biweekly": { en: "Biweekly Delivery", sw: "Uwasilishaji wa Kila Wiki Mbili" },
  "bulk.freq.monthly": { en: "Monthly Delivery", sw: "Uwasilishaji wa Kila Mwezi" },
  "bulk.freq.occasional": { en: "Occasional / As Required", sw: "Mara kwa Mara / Inavyohitajika" },
  "bulk.date": { en: "Preferred Planting / Delivery Date", sw: "Tarehe Unayopendelea ya Kupanda / Uwasilishaji" },
  "bulk.products": { en: "Products Required *", sw: "Bidhaa Zinazohitajika *" },
  "bulk.productsPh.institutional": {
    en: "e.g. Cabbage 100kg, Sukuma Wiki 80kg, Tomatoes 50kg, Onions 50kg, Spinach 30kg...",
    sw: "k.m. Kabichi 100kg, Sukuma Wiki 80kg, Nyanya 50kg, Vitunguu 50kg, Spinachi 30kg...",
  },
  "bulk.productsPh.seedlings": {
    en: "e.g. Grafted Hass Avocado 500 seedlings, Macadamia 300 seedlings, Passion Fruit 200 seedlings...",
    sw: "k.m. Parachichi Hass iliyopandikizwa miche 500, Makadamia miche 300, Passion miche 200...",
  },
  "bulk.quantities": { en: "Estimated Quantities & Budget / Notes", sw: "Makadirio ya Idadi & Bajeti / Maelezo" },
  "bulk.quantitiesPh": {
    en: "e.g. 500 kg per week / 1,000 seedlings total",
    sw: "k.m. kg 500 kwa wiki / miche 1,000 jumla",
  },
  "bulk.additional": {
    en: "Additional Delivery Requirements or Specifications",
    sw: "Mahitaji ya Ziada ya Uwasilishaji au Vipimo",
  },
  "bulk.additionalPh": {
    en: "e.g. Specific delivery days, packaging preferences, tax compliance documents required...",
    sw: "k.m. Siku maalum za uwasilishaji, mapendeleo ya ufungashaji, hati za kodi zinazohitajika...",
  },
  "bulk.submit": { en: "SUBMIT QUOTATION REQUEST", sw: "WASILISHA OMBI LA NUKUU" },
  "bulk.side.title": { en: "Direct Commercial Contact", sw: "Mawasiliano ya Moja kwa Moja ya Kibiashara" },
  "bulk.side.desc": {
    en: "Prefer speaking directly with our commercial representative? Contact us today to discuss contract supply terms and market pricing.",
    sw: "Unapendelea kuzungumza moja kwa moja na mwakilishi wetu wa kibiashara? Wasiliana nasi leo kujadili masharti ya ugavi wa mkataba na bei za soko.",
  },
  "bulk.side.rep": { en: "Representative:", sw: "Mwakilishi:" },
  "bulk.side.tel": { en: "Telephone:", sw: "Simu:" },
  "bulk.side.email": { en: "Email:", sw: "Baruapepe:" },
  "bulk.side.pin": { en: "Tax PIN:", sw: "PIN ya Kodi:" },
  "bulk.features.title": { en: "Standard Contract Features", sw: "Vipengele vya Kawaida vya Mkataba" },
  "bulk.features.i1": {
    en: "Consistent quality and daily/weekly scheduled transport",
    sw: "Ubora thabiti na usafirishaji uliopangwa wa kila siku/wiki",
  },
  "bulk.features.i2": {
    en: "Transparent pricing basis accounting for seasonal market conditions",
    sw: "Msingi wa bei wa uwazi unaozingatia hali za soko za msimu",
  },
  "bulk.features.i3": {
    en: "Tax compliance documentation and formal invoice support",
    sw: "Hati za utii wa kodi na msaada wa ankara rasmi",
  },

  // Farmer resources page
  "res.tag": { en: "Kapseret Agronomy Center", sw: "Kituo cha Kilimo cha Kapseret" },
  "res.title": { en: "Farmer Resources & Agronomy Guides", sw: "Rasilimali za Wakulima & Miongozo ya Kilimo" },
  "res.desc": {
    en: "Practical farming advice on planting, spacing, hole digging, manure preparation, grafting, pruning, pest management, and orchard establishment for fruit growers in Kenya.",
    sw: "Ushauri wa vitendo wa kilimo kuhusu upandaji, nafasi, uchimbaji wa mashimo, uandaaji wa mbolea, upandikizaji, upogoaji, udhibiti wa wadudu, na uanzishaji wa bustani kwa wakulima wa matunda nchini Kenya.",
  },
  "res.search": {
    en: "Search guides e.g. Avocado spacing, pruning...",
    sw: "Tafuta miongozo k.m. Nafasi za parachichi, upogoaji...",
  },
  "res.orderSeedlings": { en: "Order Related Seedlings", sw: "Agiza Miche Husika" },
  "res.askAgronomist": { en: "Ask Agronomist", sw: "Uliza Mtaalamu wa Kilimo" },
  "res.empty": {
    en: "No farming guides found for your search query.",
    sw: "Hakuna miongozo ya kilimo iliyopatikana kwa utafutaji wako.",
  },
  "res.cat.Avocado Farming": { en: "Avocado Farming", sw: "Kilimo cha Parachichi" },
  "res.cat.Passion Fruit Farming": { en: "Passion Fruit Farming", sw: "Kilimo cha Passion" },
  "res.cat.Macadamia Farming": { en: "Macadamia Farming", sw: "Kilimo cha Makadamia" },
  "res.cat.Coffee Farming": { en: "Coffee Farming", sw: "Kilimo cha Kahawa" },
  "res.cat.Orchard Management": { en: "Orchard Management", sw: "Usimamizi wa Bustani" },
  "res.cat.Seedling Care": { en: "Seedling Care", sw: "Utunzaji wa Miche" },
};

export function translate(key: string, lang: Language): string {
  const entry = translations[key];
  if (!entry) return key;
  return entry[lang] ?? entry.en;
}
