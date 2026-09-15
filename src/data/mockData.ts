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
  // VEGETABLES
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
    image: "https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?auto=format&fit=crop&q=80&w=800",
    featured: true
  },
  {
    id: "fp-white-onions",
    name: "White Onions",
    category: "fresh",
    subCategory: "Vegetables",
    price: 130,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg"],
    stockStatus: "In Stock",
    stockCount: 300,
    minOrder: "1 kg",
    deliveryInfo: "Same-day local fresh hub delivery",
    description: "Mild, sweet white onions ideal for fresh salads, salsa, and cooking.",
    image: "https://images.unsplash.com/photo-1580148442838-92986e23232d?auto=format&fit=crop&q=80&w=800"
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
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-capsicum-green",
    name: "Green Hoho (Capsicum)",
    category: "fresh",
    subCategory: "Vegetables",
    price: 120,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg"],
    stockStatus: "In Stock",
    stockCount: 350,
    minOrder: "1 kg",
    deliveryInfo: "Fresh daily Juja & Thika delivery",
    description: "Plump, aromatic green bell peppers adding vibrant flavor and nutrition to your dishes.",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-capsicum-colored",
    name: "Colored Capsicum (Red & Yellow)",
    category: "fresh",
    subCategory: "Vegetables",
    price: 180,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg"],
    stockStatus: "In Stock",
    stockCount: 200,
    minOrder: "1 kg",
    deliveryInfo: "Juja / Thika fresh delivery",
    description: "Sweet greenhouse red and yellow sweet bell peppers packed with Vitamin C.",
    image: "https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-eggplant",
    name: "Fresh Eggplant (Brinjal / Biringanya)",
    category: "fresh",
    subCategory: "Vegetables",
    price: 95,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg"],
    stockStatus: "In Stock",
    stockCount: 250,
    minOrder: "1 kg",
    deliveryInfo: "Fresh farm dispatch",
    description: "Smooth, glossy purple eggplants harvest fresh for stews and roasting.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-cauliflower",
    name: "Fresh Cauliflower",
    category: "fresh",
    subCategory: "Vegetables",
    price: 110,
    unit: "head",
    availableUnits: ["Head", "2 Heads", "5 Heads"],
    stockStatus: "In Stock",
    stockCount: 200,
    minOrder: "1 head",
    deliveryInfo: "Juja, Thika doorstep delivery",
    description: "Firm, white, compact cauliflower heads harvested fresh from regional farms.",
    image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-broccoli",
    name: "Fresh Broccoli",
    category: "fresh",
    subCategory: "Vegetables",
    price: 140,
    unit: "head",
    availableUnits: ["Head", "2 Heads", "5 Heads"],
    stockStatus: "In Stock",
    stockCount: 180,
    minOrder: "1 head",
    deliveryInfo: "Juja / Thika fresh hub delivery",
    description: "Dark green, nutrient-dense fresh broccoli heads perfect for healthy cooking.",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-courgettes",
    name: "Fresh Courgettes / Zucchini",
    category: "fresh",
    subCategory: "Vegetables",
    price: 100,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg"],
    stockStatus: "In Stock",
    stockCount: 300,
    minOrder: "1 kg",
    deliveryInfo: "Same-day Juja & Thika delivery",
    description: "Tender, green fresh courgettes rich in dietary fiber and antioxidants.",
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&q=80&w=800"
  },

  // LEAFY GREENS
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
    image: "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?auto=format&fit=crop&q=80&w=800",
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
    id: "fp-managu",
    name: "Managu (African Nightshade)",
    category: "fresh",
    subCategory: "Leafy Greens",
    price: 120,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "Bunch"],
    stockStatus: "In Stock",
    stockCount: 250,
    minOrder: "1 kg",
    deliveryInfo: "Juja & Thika fresh delivery",
    description: "Nutrient-rich traditional Managu greens cultivated under natural farm conditions.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-terere",
    name: "Terere (Amaranth Greens)",
    category: "fresh",
    subCategory: "Leafy Greens",
    price: 100,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "Bunch"],
    stockStatus: "In Stock",
    stockCount: 200,
    minOrder: "1 kg",
    deliveryInfo: "Fresh daily procurement",
    description: "Tender traditional Terere leaves packed with calcium and protein.",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-lettuce",
    name: "Fresh Iceberg Lettuce",
    category: "fresh",
    subCategory: "Leafy Greens",
    price: 90,
    unit: "head",
    availableUnits: ["Head", "2 Heads", "5 Heads"],
    stockStatus: "In Stock",
    stockCount: 150,
    minOrder: "1 head",
    deliveryInfo: "Chilled fresh delivery",
    description: "Crisp, refreshing iceberg lettuce heads for salads and sandwiches.",
    image: "https://images.unsplash.com/photo-1556801712-76c8eb07ebd1?auto=format&fit=crop&q=80&w=800"
  },

  // FRUITS
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
  },
  {
    id: "fp-mangoes",
    name: "Sweet Apple Mangoes",
    category: "fresh",
    subCategory: "Fruits",
    price: 160,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg"],
    stockStatus: "In Stock",
    stockCount: 350,
    minOrder: "1 kg",
    deliveryInfo: "Fresh fruit dispatch",
    description: "Juicy, fiberless sweet Apple mangoes harvested at peak ripeness.",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-watermelons",
    name: "Sweet Red Watermelon",
    category: "fresh",
    subCategory: "Fruits",
    price: 60,
    unit: "kg",
    availableUnits: ["Whole Watermelon (~5kg)", "Whole Watermelon (~8kg)"],
    stockStatus: "In Stock",
    stockCount: 300,
    minOrder: "1 melon",
    deliveryInfo: "Delivered intact to doorstep",
    description: "Extra sweet, deep red watermelons grown under sunny climate conditions.",
    image: "https://images.unsplash.com/photo-1587049352847-81a56d773cae?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-oranges",
    name: "Sweet Pixie Oranges",
    category: "fresh",
    subCategory: "Fruits",
    price: 180,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg"],
    stockStatus: "In Stock",
    stockCount: 250,
    minOrder: "1 kg",
    deliveryInfo: "Juja, Thika & Nairobi delivery",
    description: "Seedless, juicy sweet Pixie oranges packed with citrus freshness.",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-pineapples",
    name: "Sweet Smooth Cayenne Pineapple",
    category: "fresh",
    subCategory: "Fruits",
    price: 120,
    unit: "piece",
    availableUnits: ["1 Piece", "3 Pieces", "Crate"],
    stockStatus: "In Stock",
    stockCount: 200,
    minOrder: "1 piece",
    deliveryInfo: "Delivered fresh from Thika pineapple farms",
    description: "Large, golden sweet pineapples harvested directly from Thika orchards.",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-pawpaw",
    name: "Sweet Red Papaya / Pawpaw",
    category: "fresh",
    subCategory: "Fruits",
    price: 90,
    unit: "kg",
    availableUnits: ["1 kg", "Piece"],
    stockStatus: "In Stock",
    stockCount: 180,
    minOrder: "1 kg",
    deliveryInfo: "Careful doorstep delivery",
    description: "Sweet, soft red-fleshed solo papayas rich in digestive enzymes.",
    image: "https://images.unsplash.com/photo-1517260739337-6799d239ce83?auto=format&fit=crop&q=80&w=800"
  },

  // TUBERS
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
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-sweet-potatoes",
    name: "Red-Skinned Sweet Potatoes",
    category: "fresh",
    subCategory: "Tubers",
    price: 100,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg", "10 kg"],
    stockStatus: "In Stock",
    stockCount: 600,
    minOrder: "1 kg",
    deliveryInfo: "Juja & Thika fresh delivery",
    description: "Naturally sweet yellow/orange fleshed sweet potatoes, rich in beta-carotene.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-arrowroots",
    name: "Fresh Arrowroots (Nduma)",
    category: "fresh",
    subCategory: "Tubers",
    price: 160,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg"],
    stockStatus: "In Stock",
    stockCount: 400,
    minOrder: "1 kg",
    deliveryInfo: "Delivered fresh from river-bank farms",
    description: "Organic, nutrient-rich Nduma arrowroots with excellent texture for breakfast boiling.",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=800"
  }
];

// Default Seedling catalogue based on Kimseedlings Eldoret price list & specification
export const INITIAL_SEEDLING_PRODUCTS: Product[] = [
  // FRUIT SEEDLINGS
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
  },
  {
    id: "sd-strawberry",
    name: "Strawberry Seedlings & Runners",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    price: 30,
    unit: "seedling",
    availableUnits: ["Per seedling", "Bundle of 20", "100+ Bulk"],
    stockStatus: "In Stock",
    stockCount: 6000,
    minOrder: "10 seedlings",
    deliveryInfo: "Nationwide seedling delivery",
    description: "High-yielding Chandler and San Andreas strawberry runners. Fast fruiting with sweet, juicy red berries.",
    image: "/images/seedlings/strawberry.jpg",
    featured: true,
    scientificName: "Fragaria × ananassa"
  },
  {
    id: "sd-pawpaw-solo",
    name: "Solo Sunrise Papaya / Pawpaw Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    price: 80,
    unit: "seedling",
    availableUnits: ["Per seedling", "Bundle of 10"],
    stockStatus: "In Stock",
    stockCount: 3500,
    minOrder: "5 seedlings",
    deliveryInfo: "Nationwide seedling delivery",
    description: "Dwarf, high-yielding Solo Sunrise papaya seedlings fruiting within 8 to 9 months with deep red sweet flesh.",
    image: "https://images.unsplash.com/photo-1517260739337-6799d239ce83?auto=format&fit=crop&q=80&w=800",
    scientificName: "Carica papaya 'Solo'"
  },
  {
    id: "sd-guava-grafted",
    name: "Grafted Pink Guava Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    price: 200,
    unit: "seedling",
    availableUnits: ["Per seedling"],
    stockStatus: "In Stock",
    stockCount: 2000,
    minOrder: "5 seedlings",
    deliveryInfo: "Nationwide seedling delivery",
    description: "Grafted Taiwanese pink guava seedlings bearing sweet, aromatic large fruits within 12 months.",
    image: "https://images.unsplash.com/photo-1536511135882-7484d72d2426?auto=format&fit=crop&q=80&w=800",
    scientificName: "Psidium guajava"
  },
  {
    id: "sd-pomegranate",
    name: "Grafted Pomegranate Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    price: 350,
    unit: "seedling",
    availableUnits: ["Per seedling"],
    stockStatus: "In Stock",
    stockCount: 1500,
    minOrder: "3 seedlings",
    deliveryInfo: "Nationwide seedling delivery",
    description: "Bhagwa variety ruby-red pomegranate seedlings. Highly drought tolerant with high market price.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
    scientificName: "Punica granatum"
  },

  // TREE & NUT SEEDLINGS
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
    id: "sd-bamboo",
    name: "Giant Clumping Bamboo Seedlings",
    category: "seedlings",
    subCategory: "Tree & Nut Seedlings",
    price: 200,
    unit: "seedling",
    availableUnits: ["Per seedling"],
    stockStatus: "In Stock",
    stockCount: 2000,
    minOrder: "5 seedlings",
    deliveryInfo: "Nationwide farm dispatch",
    description: "Non-invasive giant clumping bamboo seedlings (Dendrocalamus asper) for timber, soil erosion control, and bioenergy.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
    scientificName: "Dendrocalamus asper"
  },

  // COFFEE
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

  // HERBS & SPICES
  {
    id: "sd-rosemary",
    name: "Rosemary Herb Seedlings",
    category: "seedlings",
    subCategory: "Herbs & Spices",
    price: 50,
    unit: "seedling",
    availableUnits: ["Per seedling", "Bundle of 10"],
    stockStatus: "In Stock",
    stockCount: 3000,
    minOrder: "5 seedlings",
    deliveryInfo: "Nationwide seedling delivery",
    description: "Aromatic, perennial rosemary seedlings. Easy to grow in gardens, pots, or commercial herb farming.",
    image: "/images/seedlings/rosemary.jpg",
    featured: true,
    scientificName: "Salvia rosmarinus"
  },
  {
    id: "sd-lemon-grass",
    name: "Lemon Grass Seedlings",
    category: "seedlings",
    subCategory: "Herbs & Spices",
    price: 40,
    unit: "seedling",
    availableUnits: ["Per seedling", "Bundle of 10"],
    stockStatus: "In Stock",
    stockCount: 2500,
    minOrder: "5 seedlings",
    deliveryInfo: "Nationwide seedling delivery",
    description: "Fast-growing, aromatic lemon grass slips/seedlings ideal for herbal tea, essential oil extraction, and natural soil conservation.",
    image: "/images/seedlings/lemon-grass.jpg",
    featured: true,
    scientificName: "Cymbopogon citratus"
  },
  {
    id: "sd-mint",
    name: "Fresh Peppermint Seedlings",
    category: "seedlings",
    subCategory: "Herbs & Spices",
    price: 40,
    unit: "seedling",
    availableUnits: ["Per seedling", "Bundle of 10"],
    stockStatus: "In Stock",
    stockCount: 2000,
    minOrder: "5 seedlings",
    deliveryInfo: "Nationwide seedling delivery",
    description: "Vigorous, aromatic peppermint plants suitable for home herb gardens, teas, and commercial herb growers.",
    image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&q=80&w=800",
    scientificName: "Mentha × piperita"
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
    image: "/images/seedlings/passion.jpg"
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
  },
  {
    id: "guide-coffee-farming",
    title: "Coffee Farming Guide: Cultivating High-Yield Ruiru 11 & Batian",
    category: "Coffee Farming",
    summary: "Complete guide on soil requirements, spacing, disease resistance, shade management, and harvesting Ruiru 11 and Batian coffee varieties.",
    content: `
      ### 1. Selection of Varieties
      Ruiru 11 and Batian varieties are highly recommended due to their resistance to Coffee Berry Disease (CBD) and Coffee Leaf Rust (CLR), reducing chemical spray costs significantly.

      ### 2. Spacing & Hole Preparation
      - **Spacing:** 2m x 2m (1,000 trees per acre) or 1.5m x 1.5m for high density planting.
      - **Hole Preparation:** Dig holes 2ft x 2ft x 2ft (60cm x 60cm x 60cm) 3 months prior to rain season. Mix topsoil with well-decomposed manure (15-20kg) and CAN/DSP fertilizer as recommended.

      ### 3. Pruning & Canopy Management
      Establish a single-stem or double-stem system. Regular desuckering and capping at 1.5m prevents overcrowding and enhances cherry development.

      ### 4. Harvesting & Quality Preservation
      Hand-pick red ripe cherries. Avoid picking green or over-ripe cherries to maintain premium grade export standard.
    `,
    author: "Kapseret Agronomy Center",
    date: "October 2026",
    readTime: "8 min read",
    image: "/images/seedlings/coffee.jpg"
  },
  {
    id: "guide-orchard-management",
    title: "Commercial Orchard Management: Pruning, Mulching & Soil Nutrition",
    category: "Orchard Management",
    summary: "Best management practices for established fruit orchards including irrigation scheduling, canopy design, weed suppression, and organic fertilization.",
    content: `
      ### 1. Irrigation & Water Conservation
      Establish drip irrigation systems or basins around fruit trees. Water deeply during flowering and fruit setting stages to prevent premature fruit drop.

      ### 2. Mulching & Soil Health
      Apply a 15cm organic mulch ring around tree trunks (keeping 10cm clearance from the main stem to prevent stem rot). Mulching suppresses weeds and maintains soil moisture.

      ### 3. Structural Pruning
      Prune dead, diseased, or crossing branches to encourage center light penetration. Formative pruning in year 1-2 establishes a strong branch framework capable of supporting heavy yields.

      ### 4. Integrated Pest & Disease Control
      Monitor orchards weekly for scale insects, thrips, and fruit flies. Combine sticky traps, biological controls, and organic neem sprays.
    `,
    author: "Farm City Technical Agronomists",
    date: "October 2026",
    readTime: "6 min read",
    image: "/images/seedlings/avocado-fuerte.jpg"
  },
  {
    id: "guide-seedling-care",
    title: "Nursery to Field: Essential Seedling Care & Transplanting Protocol",
    category: "Seedling Care",
    summary: "How to care for grafted fruit and herb seedlings upon arrival, hardening off techniques, transplanting steps, and early growth protection.",
    content: `
      ### 1. Unpacking & Acclimatization
      Upon delivery, place seedlings under partial shade immediately. Water them well and allow them 3-5 days to recover from transit stress before field transplanting.

      ### 2. Hardening Off
      Gradually expose potted seedlings to full direct sunlight over 7 days. This strengthens seedling cuticle tissues and reduces transplant shock.

      ### 3. Proper Transplanting Technique
      Transplant during cool early morning or late afternoon hours. Carefully slit the polybag without disturbing the root ball. Ensure graft union remains 5cm above soil level.

      ### 4. Staking & Protective Mulch
      Install protective wooden stakes for top-heavy grafted fruit trees and apply a light mulch ring. Water thoroughly immediately after planting.
    `,
    author: "Kapseret Nursery Operations",
    date: "October 2026",
    readTime: "5 min read",
    image: "/images/seedlings/avocado-hass.jpg"
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
