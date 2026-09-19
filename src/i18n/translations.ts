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
    en: "Helping households, farmers, businesses, and institutions access quality agricultural produce and certified seedlings conveniently. Same-day fresh delivery in Juja & Thika with nationwide seedling dispatch from our Kapseret Eldoret nursery.",
    sw: "Tunasaidia kaya, wakulima, biashara na taasisi kupata mazao bora ya kilimo na miche iliyothibitishwa kwa urahisi. Uwasilishaji wa siku hiyo hiyo Juja & Thika na usambazaji wa miche kote nchini kutoka kitalu chetu cha Kapseret Eldoret.",
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
};

export function translate(key: string, lang: Language): string {
  const entry = translations[key];
  if (!entry) return key;
  return entry[lang] ?? entry.en;
}
