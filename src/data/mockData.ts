export interface Product {
  id: string;
  name: string;
  category: "fresh" | "seedlings";
  subCategory?: string;
  price: number;
  unit: string;
  availableUnits?: string[];
  stockStatus: "In Stock" | "Low Stock" | "Pre-order" | "Out of Stock";
  stockCount?: number;
  minOrder?: string;
  deliveryInfo: string;
  description: string;
  image: string;
  featured?: boolean;
  scientificName?: string;
}

export interface FarmerResource {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export interface BulkQuoteRequest {
  id: string;
  type: "institutional" | "seedlings";
  organizationName?: string;
  contactPerson: string;
  phone: string;
  whatsapp?: string;
  email: string;
  county: string;
  town: string;
  productsRequired: string;
  estimatedQuantities: string;
  frequencyOfSupply?: string;
  preferredDeliveryDate?: string;
  additionalInfo?: string;
  status: "Pending" | "Reviewed" | "Quoted" | "Completed";
  createdAt: string;
}

export interface DeliveryZone {
  id: string;
  county: string;
  towns: string[];
  fee: number;
  deliveryTime: string;
  type: "Fresh Produce" | "Seedlings" | "Both";
}

// Default Fresh Produce catalogue based on proposal & supplier price list
export const INITIAL_FRESH_PRODUCTS: Product[] = [
  {
    id: "fp-cabbage",
    name: "Fresh Cabbage",
    category: "fresh",
    subCategory: "Vegetables",
    price: 75,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg", "10 kg", "Crate (50kg)"],
    stockStatus: "In Stock",
    stockCount: 500,
    minOrder: "1 kg",
    deliveryInfo: "Same-day / Next-day delivery in Juja, Thika & surrounding areas",
    description: "Crisp, fresh locally grown cabbage harvested daily. Perfect for households, restaurants, and institutional catering.",
    image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&q=80&w=800",
    featured: true
  },
  {
    id: "fp-sukuma",
    name: "Kale / Sukuma Wiki",
    category: "fresh",
    subCategory: "Leafy Greens",
    price: 90,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg", "10 kg", "Bunch"],
    stockStatus: "In Stock",
    stockCount: 400,
    minOrder: "1 kg",
    deliveryInfo: "Delivered fresh from Juja/Thika farms daily",
    description: "Nutritious, dark green tender Sukuma Wiki leaves. Rich in iron and vitamins, staple for healthy Kenyan meals.",
    image: "https://images.unsplash.com/photo-1524179091875-bf98a9a6ae57?auto=format&fit=crop&q=80&w=800",
    featured: true
  },
  {
    id: "fp-spinach",
    name: "Fresh Spinach",
    category: "fresh",
    subCategory: "Leafy Greens",
    price: 110,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg", "Bunch"],
    stockStatus: "In Stock",
    stockCount: 300,
    minOrder: "1 kg",
    deliveryInfo: "Same-day / Next-day delivery",
    description: "Farm-fresh organic spinach leaves carefully handpicked and packed. Freshness guaranteed.",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=800",
    featured: true
  },
  {
    id: "fp-kienyeji",
    name: "Kienyeji Greens (Traditional Vegetables)",
    category: "fresh",
    subCategory: "Leafy Greens",
    price: 110,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg", "Bunch"],
    stockStatus: "In Stock",
    stockCount: 250,
    minOrder: "1 kg",
    deliveryInfo: "Juja & Thika fresh local delivery",
    description: "Selection of traditional African leafy greens including Managu, Terere and Sagaa, rich in nutrients.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800",
    featured: false
  },
  {
    id: "fp-onions",
    name: "Red Bulb Onions",
    category: "fresh",
    subCategory: "Vegetables",
    price: 110,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg", "10 kg", "Net Bag (50kg)"],
    stockStatus: "In Stock",
    stockCount: 1000,
    minOrder: "1 kg",
    deliveryInfo: "Available for home and bulk business delivery",
    description: "High quality dry red onions with long shelf life, solid bulbs and bold flavor for everyday cooking.",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cf?auto=format&fit=crop&q=80&w=800",
    featured: true
  },
  {
    id: "fp-tomatoes",
    name: "Fresh Tomatoes",
    category: "fresh",
    subCategory: "Vegetables",
    price: 80,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg", "10 kg", "Crate (25kg)"],
    stockStatus: "In Stock",
    stockCount: 800,
    minOrder: "1 kg",
    deliveryInfo: "Carefully packed in sturdy crates to prevent bruising",
    description: "Firm, firm-ripe greenhouse and open-field tomatoes. Excellent color, taste and juice content.",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800",
    featured: true
  },
  {
    id: "fp-avocado",
    name: "Fresh Hass Avocados",
    category: "fresh",
    subCategory: "Fruits",
    price: 150,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg", "Piece"],
    stockStatus: "In Stock",
    stockCount: 600,
    minOrder: "1 kg",
    deliveryInfo: "Juja, Thika & Nairobi delivery",
    description: "Rich, creamy, export-grade Hass avocados. Naturally grown and packed with healthy fats.",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=800",
    featured: true
  },
  {
    id: "fp-potatoes",
    name: "Shangi Irish Potatoes",
    category: "fresh",
    subCategory: "Tubers",
    price: 90,
    unit: "kg",
    availableUnits: ["1 kg", "5 kg", "10 kg", "Bag (50kg)"],
    stockStatus: "In Stock",
    stockCount: 1500,
    minOrder: "2 kg",
    deliveryInfo: "Home & commercial bulk delivery",
    description: "Cleaned, well-sized Shangi potatoes perfect for mashing, boiling, or making fries.",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=800",
    featured: false
  },
  {
    id: "fp-carrots",
    name: "Sweet Orange Carrots",
    category: "fresh",
    subCategory: "Vegetables",
    price: 85,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg", "10 kg"],
    stockStatus: "In Stock",
    stockCount: 400,
    minOrder: "1 kg",
    deliveryInfo: "Juja, Thika & surrounding areas",
    description: "Crisp and naturally sweet carrots freshly harvested from fertile agricultural soil.",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=800",
    featured: false
  },
  {
    id: "fp-bananas",
    name: "Sweet Bananas / Matoke",
    category: "fresh",
    subCategory: "Fruits",
    price: 120,
    unit: "bunch",
    availableUnits: ["Bunch", "Per kg"],
    stockStatus: "In Stock",
    stockCount: 200,
    minOrder: "1 bunch",
    deliveryInfo: "Delivered fresh to your doorstep",
    description: "Naturally ripened sweet eating bananas or green Matoke cooking bananas from local orchards.",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=800",
    featured: true
  }
];

// Default Seedling catalogue based on Kimseedlings Eldoret price list & specification
export const INITIAL_SEEDLING_PRODUCTS: Product[] = [
  {
    id: "sd-hass-avocado",
    name: "Grafted Hass Avocado Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    price: 150,
    unit: "seedling",
    availableUnits: ["Per seedling", "Bundle of 10", "100+ Bulk"],
    stockStatus: "In Stock",
    stockCount: 5000,
    minOrder: "5 seedlings",
    deliveryInfo: "Dispatched nationwide from Kapseret Nursery, Eldoret to all 47 counties",
    description: "High-yielding, disease-resistant grafted Hass avocado seedlings. Fast fruiting (2-3 years) with high export market demand.",
    image: "/images/seedlings/avocado-hass.jpg",
    featured: true,
    scientificName: "Persea americana 'Hass'"
  },
  {
    id: "sd-fuerte-avocado",
    name: "Grafted Fuerte Avocado Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    price: 150,
    unit: "seedling",
    availableUnits: ["Per seedling", "Bundle of 10", "100+ Bulk"],
    stockStatus: "In Stock",
    stockCount: 4000,
    minOrder: "5 seedlings",
    deliveryInfo: "Dispatched nationwide from Kapseret Nursery, Eldoret",
    description: "High-yielding grafted Fuerte avocado seedlings with excellent green-skin quality and rich flavor.",
    image: "/images/seedlings/avocado-fuerte.jpg",
    featured: false,
    scientificName: "Persea americana 'Fuerte'"
  },
  {
    id: "sd-grafted-passion",
    name: "Grafted Passion Fruit Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    price: 50,
    unit: "seedling",
    availableUnits: ["Per seedling", "Bundle of 50"],
    stockStatus: "In Stock",
    stockCount: 8000,
    minOrder: "10 seedlings",
    deliveryInfo: "Nationwide delivery via courier / farm transport",
    description: "Grafted purple and yellow passion fruit seedlings. Grafted on resistant rootstocks for longevity and high juice yield.",
    image: "/images/seedlings/passion.jpg",
    featured: true,
    scientificName: "Passiflora edulis"
  },
  {
    id: "sd-tree-tomato",
    name: "Tree Tomato Seedlings (Tamarillo)",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    price: 50,
    unit: "seedling",
    availableUnits: ["Per seedling"],
    stockStatus: "In Stock",
    stockCount: 4000,
    minOrder: "10 seedlings",
    deliveryInfo: "Countrywide seedling dispatch",
    description: "Red and yellow sweet tree tomato seedlings ready for transplanting. Rapid growth and continuous fruiting.",
    image: "/images/seedlings/tree-tomato.jpg",
    featured: true,
    scientificName: "Solanum betaceum"
  },
  {
    id: "sd-macadamia",
    name: "Grafted Macadamia Seedlings",
    category: "seedlings",
    subCategory: "Tree & Nut Seedlings",
    price: 350,
    unit: "seedling",
    availableUnits: ["Per seedling"],
    stockStatus: "In Stock",
    stockCount: 3000,
    minOrder: "5 seedlings",
    deliveryInfo: "Safe packaging & countrywide delivery",
    description: "Premium grafted macadamia varieties (MRG 20 & INTEG 1). Excellent nut size, oil ratio and commercial value.",
    image: "/images/seedlings/macadamia.jpg",
    featured: true,
    scientificName: "Macadamia integrifolia"
  },
  {
    id: "sd-pixie-orange",
    name: "Pixie Orange Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    price: 300,
    unit: "seedling",
    availableUnits: ["Per seedling"],
    stockStatus: "In Stock",
    stockCount: 2500,
    minOrder: "5 seedlings",
    deliveryInfo: "Nationwide seedling supply",
    description: "Seedless, extra sweet Pixie orange grafted seedlings. Highly profitable commercial fruit suitable for various climatic zones.",
    image: "/images/seedlings/citrus-orange.jpg",
    featured: true,
    scientificName: "Citrus reticulata 'Pixie'"
  },
  {
    id: "sd-dragon-fruit",
    name: "Dragon Fruit Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    price: 400,
    unit: "seedling",
    availableUnits: ["Per seedling"],
    stockStatus: "In Stock",
    stockCount: 1200,
    minOrder: "2 seedlings",
    deliveryInfo: "Nationwide seedling delivery",
    description: "Red and white flesh dragon fruit cuttings/seedlings. High-value exotic superfood crop with premium market prices.",
    image: "/images/seedlings/dragon-fruit.jpg",
    featured: false,
    scientificName: "Hylocereus undatus"
  },
  {
    id: "sd-apple",
    name: "Wambugu & Grafted Apple Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    price: 1000,
    unit: "seedling",
    availableUnits: ["Per seedling"],
    stockStatus: "In Stock",
    stockCount: 1000,
    minOrder: "2 seedlings",
    deliveryInfo: "Carefully wrapped and delivered nationwide",
    description: "Highland & lowland adapted apple seedlings (Wambugu, Anna, Rome Beauty). High yields and large crisp fruit.",
    image: "/images/seedlings/apple.jpg",
    featured: true,
    scientificName: "Malus domestica"
  },
  {
    id: "sd-coffee",
    name: "Ruiru 11 & Batian Coffee Seedlings",
    category: "seedlings",
    subCategory: "Coffee",
    price: 60,
    unit: "seedling",
    availableUnits: ["Per seedling", "Tray of 100"],
    stockStatus: "In Stock",
    stockCount: 15000,
    minOrder: "20 seedlings",
    deliveryInfo: "Bulk transport arranged to major coffee regions",
    description: "Disease resistant (CBD & CLR resistant) high-yield Ruiru 11 and Batian coffee seedlings ready for field transplanting.",
    image: "/images/seedlings/coffee.jpg",
    featured: true,
    scientificName: "Coffea arabica"
  },
  {
    id: "sd-grafted-mango",
    name: "Grafted Mango Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    price: 250,
    unit: "seedling",
    availableUnits: ["Per seedling", "Bundle of 10"],
    stockStatus: "In Stock",
    stockCount: 3000,
    minOrder: "5 seedlings",
    deliveryInfo: "Nationwide seedling delivery",
    description: "High-yielding grafted mango seedlings (Apple, Kent, Tommy Atkins). Resistant to pests and quick to bear fruit.",
    image: "/images/seedlings/mango.jpg",
    featured: true,
    scientificName: "Mangifera indica"
  }
];

export const INITIAL_FARMER_RESOURCES: FarmerResource[] = [
  {
    id: "guide-hass-avocado",
    title: "How to Plant and Establish Hass Avocado in Kenya",
    category: "Avocado Farming",
    summary: "Step-by-step guide on field preparation, 5m x 5m or 7m x 7m spacing, hole digging, manure mixing, and caring for young Hass avocado seedlings.",
    content: `
      ### 1. Land Preparation & Spacing
      Proper spacing is critical for maximum sunlight penetration and healthy canopy development.
      - **Standard Spacing:** 7 meters by 7 meters (approx. 80 - 100 trees per acre).
      - **High-Density Spacing:** 5 meters by 5 meters (approx. 160 trees per acre).

      ### 2. Digging Planting Holes
      Dig holes measuring 2ft x 2ft x 2ft (60cm x 60cm x 60cm) at least 2 to 4 weeks prior to transplanting. Separate the topsoil from the subsoil.

      ### 3. Soil Preparation & Fertilization
      - Mix topsoil with 1 to 2 buckets (approx. 20kg) of well-rotted farmyard manure.
      - Add 200g of Single Super Phosphate (SSP) or organic bone meal for strong root development.

      ### 4. Planting Process
      - Carefully remove the plastic polythene bag without disturbing the soil root ball.
      - Place seedling at the exact nursery depth—do not bury the graft union!
      - Firm the soil around the seedling and mulch with dry grass leaving 5cm gap around the stem.
      - Water thoroughly (15-20 liters) immediately after planting.

      ### 5. Post-Planting Care & Pest Management
      - Water twice weekly during dry spells for the first 6 months.
      - Stake young seedlings to protect against wind damage.
      - Pinch shoots after 1 year to encourage lateral branching.
    `,
    author: "Farm City Agronomy Team (Kapseret Nursery)",
    date: "September 2026",
    readTime: "6 min read",
    image: "/images/seedlings/avocado-nursery.jpg"
  },
  {
    id: "guide-passion-fruit",
    title: "Grafted Passion Fruit Farming: Maximizing Yields per Acre",
    category: "Passion Fruit Farming",
    summary: "Essential advice on trellising, rootstock selection, pruning techniques, and preventing woodiness virus in passion fruit farming.",
    content: `
      ### Why Choose Grafted Seedlings?
      Grafted passion fruits utilize yellow passion fruit rootstocks which are immune to Fusarium wilt and soil nematodes, combined with high-yielding purple scions.

      ### Trellising & Spacing
      - **Spacing:** 2 meters between plants and 3 meters between rows (approx. 600-700 plants per acre).
      - **Trellis Construction:** Install sturdy posts (8ft tall, buried 2ft deep) with 12-gauge galvanized wire at 6ft height.

      ### Pruning & Care
      Regularly prune secondary laterals to ensure light penetration and prevent fungal humidity traps.
    `,
    author: "Wesley Mage Mujenyi",
    date: "August 2026",
    readTime: "5 min read",
    image: "/images/seedlings/passion-2.jpg"
  },
  {
    id: "guide-macadamia-establishment",
    title: "Macadamia Orchard Establishment & Maintenance Guide",
    category: "Macadamia Farming",
    summary: "Long-term commercial macadamia farming strategies for smallholders and commercial orchard developers in Kenya.",
    content: `
      ### Macadamia Commercial Potential
      Macadamia is a lucrative long-term tree crop with a productive lifespan exceeding 40 years.

      ### Nursery Care to Orchard
      Always purchase certified grafted macadamia seedlings (MRG 20 or INTEG 1 varieties). Plant with 7.5m x 7.5m spacing (70 trees per acre).
    `,
    author: "Farm City Eldoret Technical Team",
    date: "July 2026",
    readTime: "7 min read",
    image: "/images/seedlings/macadamia.jpg"
  }
];

export const INITIAL_DELIVERY_ZONES: DeliveryZone[] = [
  {
    id: "dz-juja-thika",
    county: "Kiambu",
    towns: ["Juja", "Thika", "High Point", "Gatuanyaga", "Witeithie", "Ruiru"],
    fee: 200,
    deliveryTime: "Same Day / Next Day",
    type: "Fresh Produce"
  },
  {
    id: "dz-nairobi",
    county: "Nairobi",
    towns: ["Nairobi CBD", "Westlands", "Kasarani", "Kilimani", "Karen", "Ruaraka"],
    fee: 350,
    deliveryTime: "Next Day Delivery",
    type: "Both"
  },
  {
    id: "dz-eldoret",
    county: "Uasin Gishu",
    towns: ["Eldoret Town", "Kapseret", "Langas", "Pioneer", "Kesses"],
    fee: 150,
    deliveryTime: "Same Day Pick-up / Delivery",
    type: "Seedlings"
  },
  {
    id: "dz-countrywide",
    county: "Nationwide Kenya",
    towns: ["Nakuru", "Nyeri", "Meru", "Kisumu", "Mombasa", "Machakos", "Kitale", "Kericho", "Kakamega"],
    fee: 500,
    deliveryTime: "1 - 3 Days via Verified Courier",
    type: "Seedlings"
  }
];
