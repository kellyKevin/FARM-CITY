export interface Product {
  id: string;
  name: string;
  category: "fresh" | "seedlings";
  subCategory:
    | "Vegetables"
    | "Leafy Greens"
    | "Fruit Vegetables"
    | "Fruits"
    | "Citrus Fruits"
    | "Tubers"
    | "Fruit Seedlings"
    | "Tree & Nut Seedlings"
    | "Coffee & Cash Crops"
    | "Herbs & Aromatics"
    | "Berry Plants"
    | "Vegetable Seedlings";
  price: number;
  unit: string;
  availableUnits?: string[];
  stockStatus: "In Stock" | "Low Stock" | "Seasonal" | "Coming Soon";
  stockCount?: number;
  minOrder?: string;
  deliveryInfo: string;
  description: string;
  image: string;
  featured?: boolean;
  scientificName?: string;
  variety?: string;
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

// Comprehensive Fresh Produce Catalogue (Available Now, Seasonal, Coming Soon)
export const INITIAL_FRESH_PRODUCTS: Product[] = [
  // 1. FRESH VEGETABLES
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
    id: "fp-onions-red",
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
    id: "fp-onions-white",
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
    description: "Mild, sweet white onions ideal for fresh salads, salsa, and gourmet cooking.",
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
    id: "fp-cauliflower",
    name: "Fresh Cauliflower",
    category: "fresh",
    subCategory: "Vegetables",
    price: 110,
    unit: "head",
    availableUnits: ["Head", "2 Heads"],
    stockStatus: "In Stock",
    stockCount: 200,
    minOrder: "1 head",
    deliveryInfo: "Juja & Thika doorstep delivery",
    description: "Firm, white, compact cauliflower heads harvested fresh from regional farms.",
    image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-french-beans",
    name: "Export Quality French Beans",
    category: "fresh",
    subCategory: "Vegetables",
    price: 130,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg"],
    stockStatus: "In Stock",
    stockCount: 300,
    minOrder: "1 kg",
    deliveryInfo: "Juja & Thika fresh delivery",
    description: "Crisp, stringless, extra-fine green french beans harvested for high nutrition.",
    image: "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-green-peas",
    name: "Fresh Green Peas in Pod",
    category: "fresh",
    subCategory: "Vegetables",
    price: 150,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg"],
    stockStatus: "Seasonal",
    stockCount: 150,
    minOrder: "1 kg",
    deliveryInfo: "Seasonal farm dispatch",
    description: "Sweet, tender garden green peas freshly picked in pods.",
    image: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-sweet-corn",
    name: "Fresh Sweet Corn Cobs",
    category: "fresh",
    subCategory: "Vegetables",
    price: 40,
    unit: "cob",
    availableUnits: ["3 Cobs", "5 Cobs", "10 Cobs"],
    stockStatus: "In Stock",
    stockCount: 500,
    minOrder: "3 cobs",
    deliveryInfo: "Fresh daily delivery",
    description: "Juicy, golden sweet corn cobs freshly harvested from regional farms.",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-beetroot",
    name: "Organic Beetroot",
    category: "fresh",
    subCategory: "Vegetables",
    price: 90,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg"],
    stockStatus: "In Stock",
    stockCount: 250,
    minOrder: "1 kg",
    deliveryInfo: "Juja, Thika local hub delivery",
    description: "Deep red, iron-rich beetroot perfect for juicing, roasting, and fresh salads.",
    image: "https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-garlic",
    name: "Local Dry Garlic Bulbs",
    category: "fresh",
    subCategory: "Vegetables",
    price: 250,
    unit: "kg",
    availableUnits: ["1/2 kg", "1 kg", "2 kg"],
    stockStatus: "In Stock",
    stockCount: 300,
    minOrder: "1/2 kg",
    deliveryInfo: "Delivered nationwide or locally",
    description: "Aromatic, pungent garlic bulbs with long shelf life and intense cooking flavor.",
    image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-ginger",
    name: "Fresh Ginger Roots",
    category: "fresh",
    subCategory: "Vegetables",
    price: 220,
    unit: "kg",
    availableUnits: ["1/2 kg", "1 kg", "2 kg"],
    stockStatus: "In Stock",
    stockCount: 350,
    minOrder: "1/2 kg",
    deliveryInfo: "Fresh hub delivery",
    description: "Plump, spicy ginger rhizomes rich in essential oils and medicinal properties.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-button-mushrooms",
    name: "Fresh Button Mushrooms",
    category: "fresh",
    subCategory: "Vegetables",
    price: 200,
    unit: "punnet (250g)",
    availableUnits: ["250g Punnet", "500g Pack"],
    stockStatus: "Coming Soon",
    stockCount: 0,
    minOrder: "1 punnet",
    deliveryInfo: "Pre-order notification active",
    description: "Clean, fresh white button mushrooms cultivated under strict climate controls.",
    image: "https://images.unsplash.com/photo-1504387828636-abeb50778c0c?auto=format&fit=crop&q=80&w=800"
  },

  // 2. LEAFY GREENS & TRADITIONAL VEGETABLES
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
    id: "fp-sagaa",
    name: "Sagaa / Spider Plant Greens",
    category: "fresh",
    subCategory: "Leafy Greens",
    price: 130,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg"],
    stockStatus: "Seasonal",
    stockCount: 150,
    minOrder: "1 kg",
    deliveryInfo: "Seasonal harvest dispatch",
    description: "Tangy, iron-rich indigenous Sagaa greens prized in traditional Kenyan cuisine.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-kunde",
    name: "Kunde (Cowpea Leaves)",
    category: "fresh",
    subCategory: "Leafy Greens",
    price: 110,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg"],
    stockStatus: "In Stock",
    stockCount: 180,
    minOrder: "1 kg",
    deliveryInfo: "Juja / Thika fresh delivery",
    description: "Freshly harvested Kunde cowpea leaves rich in dietary fiber and vitamins.",
    image: "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?auto=format&fit=crop&q=80&w=800"
  },

  // 3. FRUIT VEGETABLES
  {
    id: "fp-tomatoes-fresh",
    name: "Fresh Greenhouse Tomatoes",
    category: "fresh",
    subCategory: "Fruit Vegetables",
    price: 80,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg", "Crate (25kg)"],
    stockStatus: "In Stock",
    stockCount: 800,
    minOrder: "1 kg",
    deliveryInfo: "Carefully packed in sturdy crates to prevent bruising",
    description: "Firm, firm-ripe greenhouse and open-field tomatoes. Excellent color, taste and juice content.",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800",
    featured: true
  },
  {
    id: "fp-cherry-tomatoes",
    name: "Sweet Cherry Tomatoes",
    category: "fresh",
    subCategory: "Fruit Vegetables",
    price: 160,
    unit: "kg",
    availableUnits: ["500g Punnet", "1 kg"],
    stockStatus: "In Stock",
    stockCount: 150,
    minOrder: "500g",
    deliveryInfo: "Fresh hub delivery",
    description: "Juicy, bite-sized sweet cherry tomatoes grown in greenhouse conditions.",
    image: "https://images.unsplash.com/photo-1561136594-7f68413baa99?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-cucumber",
    name: "Fresh English Cucumbers",
    category: "fresh",
    subCategory: "Fruit Vegetables",
    price: 90,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg"],
    stockStatus: "In Stock",
    stockCount: 300,
    minOrder: "1 kg",
    deliveryInfo: "Chilled fresh delivery",
    description: "Crisp, hydrating greenhouse cucumbers perfect for salads and juices.",
    image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-courgettes",
    name: "Fresh Courgettes / Zucchini",
    category: "fresh",
    subCategory: "Fruit Vegetables",
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
  {
    id: "fp-eggplant",
    name: "Fresh Eggplant (Brinjal / Biringanya)",
    category: "fresh",
    subCategory: "Fruit Vegetables",
    price: 95,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg"],
    stockStatus: "In Stock",
    stockCount: 250,
    minOrder: "1 kg",
    deliveryInfo: "Fresh farm dispatch",
    description: "Smooth, glossy purple eggplants harvested fresh for stews and roasting.",
    image: "https://images.unsplash.com/photo-1628773822503-930a85838501?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-green-capsicum",
    name: "Green Hoho (Capsicum)",
    category: "fresh",
    subCategory: "Fruit Vegetables",
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
    id: "fp-red-capsicum",
    name: "Sweet Red Capsicum",
    category: "fresh",
    subCategory: "Fruit Vegetables",
    price: 180,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg"],
    stockStatus: "In Stock",
    stockCount: 200,
    minOrder: "1 kg",
    deliveryInfo: "Juja / Thika fresh delivery",
    description: "Sweet, juicy red bell peppers packed with Vitamin C and antioxidant nutrients.",
    image: "https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-yellow-capsicum",
    name: "Sweet Yellow Capsicum",
    category: "fresh",
    subCategory: "Fruit Vegetables",
    price: 180,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg"],
    stockStatus: "In Stock",
    stockCount: 180,
    minOrder: "1 kg",
    deliveryInfo: "Juja / Thika fresh delivery",
    description: "Bright yellow, sweet greenhouse bell peppers.",
    image: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-chillies",
    name: "Hot Red & Green Chillies",
    category: "fresh",
    subCategory: "Fruit Vegetables",
    price: 150,
    unit: "kg",
    availableUnits: ["250g", "1/2 kg", "1 kg"],
    stockStatus: "In Stock",
    stockCount: 200,
    minOrder: "250g",
    deliveryInfo: "Juja & Thika fresh delivery",
    description: "Pungent, spicy local African bird eye and cayenne chillies.",
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-okra",
    name: "Fresh Okra (Bhindi)",
    category: "fresh",
    subCategory: "Fruit Vegetables",
    price: 120,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg"],
    stockStatus: "In Stock",
    stockCount: 150,
    minOrder: "1 kg",
    deliveryInfo: "Fresh farm dispatch",
    description: "Tender green okra pods harvested young for optimum texture in stews and curries.",
    image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-butternut",
    name: "Butternut Squash",
    category: "fresh",
    subCategory: "Fruit Vegetables",
    price: 70,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg", "10 kg"],
    stockStatus: "In Stock",
    stockCount: 400,
    minOrder: "1 kg",
    deliveryInfo: "Long shelf life, doorstep delivery",
    description: "Sweet, nutty orange-fleshed butternut squash, rich in Vitamin A and ideal for soups.",
    image: "https://images.unsplash.com/photo-1506917728037-b6af01a7d403?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-pumpkin",
    name: "Sweet Orange Pumpkin",
    category: "fresh",
    subCategory: "Fruit Vegetables",
    price: 60,
    unit: "kg",
    availableUnits: ["1 kg", "Whole Pumpkin (~4kg)"],
    stockStatus: "In Stock",
    stockCount: 300,
    minOrder: "1 kg",
    deliveryInfo: "Juja, Thika doorstep delivery",
    description: "Rich, sweet local orange pumpkins ideal for boiling, mashing, or soup making.",
    image: "https://images.unsplash.com/photo-1570586437263-ab629fccc818?auto=format&fit=crop&q=80&w=800"
  },

  // 4. FRESH FRUITS
  {
    id: "fp-avocado-hass",
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
    id: "fp-avocado-fuerte",
    name: "Fresh Fuerte Avocados",
    category: "fresh",
    subCategory: "Fruits",
    price: 130,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg"],
    stockStatus: "In Stock",
    stockCount: 400,
    minOrder: "1 kg",
    deliveryInfo: "Juja, Thika & Nairobi delivery",
    description: "Smooth green-skinned Fuerte avocados with buttery texture.",
    image: "https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-bananas-sweet",
    name: "Sweet Bananas",
    category: "fresh",
    subCategory: "Fruits",
    price: 120,
    unit: "bunch",
    availableUnits: ["Bunch", "Per kg"],
    stockStatus: "In Stock",
    stockCount: 200,
    minOrder: "1 bunch",
    deliveryInfo: "Delivered fresh to your doorstep",
    description: "Naturally ripened sweet eating bananas from local smallholder orchards.",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=800",
    featured: true
  },
  {
    id: "fp-mangoes-apple",
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
    id: "fp-mangoes-ngowe",
    name: "Sweet Ngowe Mangoes",
    category: "fresh",
    subCategory: "Fruits",
    price: 150,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg"],
    stockStatus: "Seasonal",
    stockCount: 200,
    minOrder: "1 kg",
    deliveryInfo: "Seasonal harvest delivery",
    description: "Traditional elongated coastal Ngowe mangoes with rich tropical sweetness.",
    image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-watermelon",
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
  {
    id: "fp-passion-fresh",
    name: "Fresh Purple Passion Fruits",
    category: "fresh",
    subCategory: "Fruits",
    price: 180,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg"],
    stockStatus: "In Stock",
    stockCount: 250,
    minOrder: "1 kg",
    deliveryInfo: "Juja, Thika & Nairobi delivery",
    description: "Aromatic, juice-filled purple passion fruits packed with vitamin C.",
    image: "https://images.unsplash.com/photo-1528821128474-27f963b072b7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-strawberries-fresh",
    name: "Fresh Farm Strawberries",
    category: "fresh",
    subCategory: "Fruits",
    price: 150,
    unit: "punnet (250g)",
    availableUnits: ["250g Punnet", "500g Pack"],
    stockStatus: "In Stock",
    stockCount: 120,
    minOrder: "1 punnet",
    deliveryInfo: "Chilled fresh hub delivery",
    description: "Juicy, ripe red strawberries handpicked daily from greenhouses.",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=800"
  },

  // 5. CITRUS FRUITS
  {
    id: "fp-pixie-oranges",
    name: "Sweet Pixie Oranges",
    category: "fresh",
    subCategory: "Citrus Fruits",
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
    id: "fp-valencia-oranges",
    name: "Juicy Valencia Oranges",
    category: "fresh",
    subCategory: "Citrus Fruits",
    price: 140,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg"],
    stockStatus: "In Stock",
    stockCount: 300,
    minOrder: "1 kg",
    deliveryInfo: "Juja & Thika fresh delivery",
    description: "High-juice content sweet Valencia oranges, ideal for fresh juicing.",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-lemons",
    name: "Juicy Yellow Lemons",
    category: "fresh",
    subCategory: "Citrus Fruits",
    price: 120,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg"],
    stockStatus: "In Stock",
    stockCount: 400,
    minOrder: "1 kg",
    deliveryInfo: "Fresh hub delivery",
    description: "Zesty, vitamin-rich yellow lemons harvested for beverages and culinary use.",
    image: "https://images.unsplash.com/photo-1534531141161-e4160401828f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-limes",
    name: "Fresh Green Limes",
    category: "fresh",
    subCategory: "Citrus Fruits",
    price: 150,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg"],
    stockStatus: "In Stock",
    stockCount: 200,
    minOrder: "1 kg",
    deliveryInfo: "Fresh hub delivery",
    description: "Aromatic, tart green limes perfect for marinades, salads, and drinks.",
    image: "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fp-tangerines",
    name: "Sweet Tangerines / Mandarins",
    category: "fresh",
    subCategory: "Citrus Fruits",
    price: 160,
    unit: "kg",
    availableUnits: ["1 kg", "2 kg", "5 kg"],
    stockStatus: "Seasonal",
    stockCount: 150,
    minOrder: "1 kg",
    deliveryInfo: "Seasonal citrus dispatch",
    description: "Easy-to-peel, sweet tangerine citrus fruits.",
    image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=800"
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
    image: "https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?auto=format&fit=crop&q=80&w=800"
  }
];

// Comprehensive Seedling Catalogue
export const INITIAL_SEEDLING_PRODUCTS: Product[] = [
  // 6. FRUIT SEEDLINGS
  {
    id: "sd-hass-avocado",
    name: "Grafted Hass Avocado Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    variety: "Hass",
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
    variety: "Fuerte",
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
    id: "sd-pinkerton-avocado",
    name: "Grafted Pinkerton Avocado Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    variety: "Pinkerton",
    price: 180,
    unit: "seedling",
    availableUnits: ["Per seedling", "Bundle of 10"],
    stockStatus: "In Stock",
    stockCount: 2000,
    minOrder: "5 seedlings",
    deliveryInfo: "Kapseret Eldoret nursery nationwide dispatch",
    description: "High-yielding Pinkerton avocado variety with long necked heavy fruits and high oil ratio.",
    image: "/images/seedlings/avocado-nursery.jpg",
    scientificName: "Persea americana 'Pinkerton'"
  },
  {
    id: "sd-apple-mango",
    name: "Grafted Apple Mango Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    variety: "Apple Mango",
    price: 250,
    unit: "seedling",
    availableUnits: ["Per seedling", "Bundle of 10"],
    stockStatus: "In Stock",
    stockCount: 3000,
    minOrder: "5 seedlings",
    deliveryInfo: "Nationwide seedling delivery",
    description: "High-yielding grafted Apple mango seedlings. Sweet, fiberless red/yellow fruit with rapid growth.",
    image: "/images/seedlings/mango.jpg",
    featured: true,
    scientificName: "Mangifera indica 'Apple'"
  },
  {
    id: "sd-ngowe-mango",
    name: "Grafted Ngowe Mango Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    variety: "Ngowe",
    price: 250,
    unit: "seedling",
    availableUnits: ["Per seedling"],
    stockStatus: "In Stock",
    stockCount: 2500,
    minOrder: "5 seedlings",
    deliveryInfo: "Nationwide seedling delivery",
    description: "Popular local coastal variety Ngowe mango grafted for early fruiting and high juice yield.",
    image: "/images/seedlings/mango.jpg",
    scientificName: "Mangifera indica 'Ngowe'"
  },
  {
    id: "sd-kent-mango",
    name: "Grafted Kent Mango Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    variety: "Kent",
    price: 250,
    unit: "seedling",
    availableUnits: ["Per seedling"],
    stockStatus: "In Stock",
    stockCount: 2000,
    minOrder: "5 seedlings",
    deliveryInfo: "Nationwide seedling delivery",
    description: "Late-season export grade Kent mango variety with dark green/red blush skin.",
    image: "/images/seedlings/mango.jpg",
    scientificName: "Mangifera indica 'Kent'"
  },
  {
    id: "sd-tommy-atkins-mango",
    name: "Grafted Tommy Atkins Mango Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    variety: "Tommy Atkins",
    price: 250,
    unit: "seedling",
    availableUnits: ["Per seedling"],
    stockStatus: "In Stock",
    stockCount: 2000,
    minOrder: "5 seedlings",
    deliveryInfo: "Nationwide seedling delivery",
    description: "Commercial Tommy Atkins mango variety renowned for disease resistance and long transport shelf-life.",
    image: "/images/seedlings/mango.jpg",
    scientificName: "Mangifera indica 'Tommy Atkins'"
  },
  {
    id: "sd-purple-passion",
    name: "Grafted Purple Passion Fruit Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    variety: "Purple Passion",
    price: 50,
    unit: "seedling",
    availableUnits: ["Per seedling", "Bundle of 50"],
    stockStatus: "In Stock",
    stockCount: 8000,
    minOrder: "10 seedlings",
    deliveryInfo: "Nationwide delivery via courier / farm transport",
    description: "Grafted purple passion fruit on Fusarium-resistant yellow passion rootstock. High juice yield.",
    image: "/images/seedlings/passion.jpg",
    featured: true,
    scientificName: "Passiflora edulis"
  },
  {
    id: "sd-yellow-passion",
    name: "Grafted Yellow Passion Fruit Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    variety: "Yellow Passion",
    price: 50,
    unit: "seedling",
    availableUnits: ["Per seedling", "Bundle of 50"],
    stockStatus: "In Stock",
    stockCount: 5000,
    minOrder: "10 seedlings",
    deliveryInfo: "Nationwide delivery via courier / farm transport",
    description: "High juice acid content yellow passion fruit seedlings, vigorous and pest-hardy.",
    image: "/images/seedlings/passion-2.jpg",
    scientificName: "Passiflora edulis f. flavicarpa"
  },
  {
    id: "sd-pixie-orange-sd",
    name: "Grafted Pixie Orange Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    variety: "Pixie",
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
    id: "sd-valencia-orange-sd",
    name: "Grafted Valencia Orange Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    variety: "Valencia",
    price: 250,
    unit: "seedling",
    availableUnits: ["Per seedling"],
    stockStatus: "In Stock",
    stockCount: 2000,
    minOrder: "5 seedlings",
    deliveryInfo: "Nationwide seedling supply",
    description: "High juice yield Valencia orange seedlings grafted for rapid maturity.",
    image: "/images/seedlings/citrus-orange-2.jpg",
    scientificName: "Citrus sinensis 'Valencia'"
  },
  {
    id: "sd-washington-navel-sd",
    name: "Grafted Washington Navel Orange Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    variety: "Washington Navel",
    price: 250,
    unit: "seedling",
    availableUnits: ["Per seedling"],
    stockStatus: "In Stock",
    stockCount: 1800,
    minOrder: "5 seedlings",
    deliveryInfo: "Nationwide seedling supply",
    description: "Large, seedless Washington Navel orange seedlings with delicious sweet flavor.",
    image: "/images/seedlings/transportation-citrus.jpg",
    scientificName: "Citrus sinensis 'Washington Navel'"
  },
  {
    id: "sd-eureka-lemon-sd",
    name: "Grafted Eureka Lemon Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    variety: "Eureka Lemon",
    price: 250,
    unit: "seedling",
    availableUnits: ["Per seedling"],
    stockStatus: "In Stock",
    stockCount: 2200,
    minOrder: "5 seedlings",
    deliveryInfo: "Nationwide seedling supply",
    description: "Commercial Eureka lemon seedlings bearing bright yellow juicy lemons year-round.",
    image: "https://images.unsplash.com/photo-1534531141161-e4160401828f?auto=format&fit=crop&q=80&w=800",
    scientificName: "Citrus limon 'Eureka'"
  },
  {
    id: "sd-tree-tomato-sd",
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
    id: "sd-dragon-fruit-sd",
    name: "Dragon Fruit Seedlings & Cuttings",
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
    id: "sd-wambugu-apple",
    name: "Wambugu Apple Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    variety: "Wambugu Apple",
    price: 1000,
    unit: "seedling",
    availableUnits: ["Per seedling"],
    stockStatus: "In Stock",
    stockCount: 1000,
    minOrder: "2 seedlings",
    deliveryInfo: "Carefully wrapped and delivered nationwide",
    description: "Indigenously developed organic Wambugu apple variety adapted to hot and cold Kenyan climates.",
    image: "/images/seedlings/apple.jpg",
    featured: true,
    scientificName: "Malus domestica 'Wambugu'"
  },
  {
    id: "sd-papaya-solo",
    name: "Solo Sunrise Pawpaw Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    price: 80,
    unit: "seedling",
    availableUnits: ["Per seedling"],
    stockStatus: "In Stock",
    stockCount: 3000,
    minOrder: "5 seedlings",
    deliveryInfo: "Nationwide seedling delivery",
    description: "Dwarf papaya seedlings fruiting in 8 months with sweet red flesh.",
    image: "https://images.unsplash.com/photo-1517260739337-6799d239ce83?auto=format&fit=crop&q=80&w=800",
    scientificName: "Carica papaya 'Solo Sunrise'"
  },
  {
    id: "sd-guava-pink",
    name: "Grafted Pink Guava Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    price: 200,
    unit: "seedling",
    availableUnits: ["Per seedling"],
    stockStatus: "In Stock",
    stockCount: 1500,
    minOrder: "5 seedlings",
    deliveryInfo: "Nationwide seedling delivery",
    description: "Fast maturing grafted pink guava bearing aromatic large fruits within 12 months.",
    image: "https://images.unsplash.com/photo-1536511135882-7484d72d2426?auto=format&fit=crop&q=80&w=800",
    scientificName: "Psidium guajava"
  },
  {
    id: "sd-soursop",
    name: "Soursop / Graviola Seedlings",
    category: "seedlings",
    subCategory: "Fruit Seedlings",
    price: 300,
    unit: "seedling",
    availableUnits: ["Per seedling"],
    stockStatus: "Seasonal",
    stockCount: 800,
    minOrder: "3 seedlings",
    deliveryInfo: "Nationwide seedling delivery",
    description: "Soursop medicinal fruit tree seedlings prized for delicious tropical flavor and health benefits.",
    image: "https://images.unsplash.com/photo-1536511135882-7484d72d2426?auto=format&fit=crop&q=80&w=800",
    scientificName: "Annona muricata"
  },

  // 7. TREE & NUT SEEDLINGS
  {
    id: "sd-macadamia-sd",
    name: "Grafted Macadamia Seedlings (MRG 20 / INTEG 1)",
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
    id: "sd-cashew-nut",
    name: "Grafted Cashew Nut Seedlings",
    category: "seedlings",
    subCategory: "Tree & Nut Seedlings",
    price: 250,
    unit: "seedling",
    availableUnits: ["Per seedling"],
    stockStatus: "Seasonal",
    stockCount: 1000,
    minOrder: "5 seedlings",
    deliveryInfo: "Nationwide dispatch",
    description: "High-yielding drought-hardy grafted cashew nut seedlings.",
    image: "/images/seedlings/macadamia-2.jpg",
    scientificName: "Anacardium occidentale"
  },
  {
    id: "sd-bamboo-giant",
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
  {
    id: "sd-moringa",
    name: "Moringa Oleifera Seedlings",
    category: "seedlings",
    subCategory: "Tree & Nut Seedlings",
    price: 100,
    unit: "seedling",
    availableUnits: ["Per seedling"],
    stockStatus: "In Stock",
    stockCount: 2500,
    minOrder: "5 seedlings",
    deliveryInfo: "Nationwide seedling delivery",
    description: "Miracle tree Moringa Oleifera seedlings rich in vitamins, minerals, and medicinal properties.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
    scientificName: "Moringa oleifera"
  },

  // 8. COFFEE & CASH CROPS
  {
    id: "sd-ruiru11-coffee",
    name: "Ruiru 11 Coffee Seedlings",
    category: "seedlings",
    subCategory: "Coffee & Cash Crops",
    variety: "Ruiru 11",
    price: 60,
    unit: "seedling",
    availableUnits: ["Per seedling", "Tray of 100"],
    stockStatus: "In Stock",
    stockCount: 15000,
    minOrder: "20 seedlings",
    deliveryInfo: "Bulk transport arranged to major coffee regions",
    description: "Disease resistant (CBD & CLR resistant) high-yield Ruiru 11 coffee seedlings ready for field transplanting.",
    image: "/images/seedlings/coffee.jpg",
    featured: true,
    scientificName: "Coffea arabica 'Ruiru 11'"
  },
  {
    id: "sd-batian-coffee",
    name: "Batian Coffee Seedlings",
    category: "seedlings",
    subCategory: "Coffee & Cash Crops",
    variety: "Batian",
    price: 60,
    unit: "seedling",
    availableUnits: ["Per seedling", "Tray of 100"],
    stockStatus: "In Stock",
    stockCount: 12000,
    minOrder: "20 seedlings",
    deliveryInfo: "Bulk transport arranged to major coffee regions",
    description: "Tall, disease-resistant Batian coffee variety with early bearing and high cup quality.",
    image: "/images/seedlings/coffee-2.jpg",
    featured: true,
    scientificName: "Coffea arabica 'Batian'"
  },

  // 9. HERBS & AROMATICS
  {
    id: "sd-rosemary-sd",
    name: "Rosemary Herb Seedlings",
    category: "seedlings",
    subCategory: "Herbs & Aromatics",
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
    id: "sd-lemon-grass-sd",
    name: "Lemon Grass Seedlings",
    category: "seedlings",
    subCategory: "Herbs & Aromatics",
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
    id: "sd-peppermint-sd",
    name: "Fresh Peppermint Seedlings",
    category: "seedlings",
    subCategory: "Herbs & Aromatics",
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
  },
  {
    id: "sd-thyme-sd",
    name: "Thyme Herb Seedlings",
    category: "seedlings",
    subCategory: "Herbs & Aromatics",
    price: 50,
    unit: "seedling",
    availableUnits: ["Per seedling"],
    stockStatus: "In Stock",
    stockCount: 1500,
    minOrder: "5 seedlings",
    deliveryInfo: "Nationwide seedling delivery",
    description: "Perennial garden thyme seedlings ideal for culinary seasoning and essential oil farming.",
    image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&q=80&w=800",
    scientificName: "Thymus vulgaris"
  },
  {
    id: "sd-stevia-sd",
    name: "Stevia Sweet Herb Seedlings",
    category: "seedlings",
    subCategory: "Herbs & Aromatics",
    price: 60,
    unit: "seedling",
    availableUnits: ["Per seedling"],
    stockStatus: "Seasonal",
    stockCount: 1000,
    minOrder: "5 seedlings",
    deliveryInfo: "Nationwide seedling delivery",
    description: "Natural zero-calorie sweetener plant Stevia rebaudiana seedlings.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=800",
    scientificName: "Stevia rebaudiana"
  },

  // 10. BERRY PLANTS
  {
    id: "sd-strawberry-runners",
    name: "Strawberry Runners & Seedlings",
    category: "seedlings",
    subCategory: "Berry Plants",
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
    id: "sd-blackberry-sd",
    name: "Thornless Blackberry Cuttings",
    category: "seedlings",
    subCategory: "Berry Plants",
    price: 150,
    unit: "seedling",
    availableUnits: ["Per seedling"],
    stockStatus: "In Stock",
    stockCount: 1200,
    minOrder: "5 seedlings",
    deliveryInfo: "Nationwide seedling delivery",
    description: "Thornless blackberry plant cuttings yielding sweet dark berries in high demand.",
    image: "https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?auto=format&fit=crop&q=80&w=800",
    scientificName: "Rubus fruticosus"
  },
  {
    id: "sd-blueberry-sd",
    name: "Blueberry Plant Potted Seedlings",
    category: "seedlings",
    subCategory: "Berry Plants",
    price: 600,
    unit: "seedling",
    availableUnits: ["Per seedling"],
    stockStatus: "Coming Soon",
    stockCount: 0,
    minOrder: "2 seedlings",
    deliveryInfo: "Pre-order notification active",
    description: "Potted southern highbush blueberry seedlings suitable for acidic potted soil cultivation.",
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&q=80&w=800",
    scientificName: "Vaccinium corymbosum"
  },

  // 11. VEGETABLE SEEDLINGS
  {
    id: "sd-tomato-hybrid-sd",
    name: "Hybrid Tomato Seedling Plugs",
    category: "seedlings",
    subCategory: "Vegetable Seedlings",
    price: 10,
    unit: "plug",
    availableUnits: ["Tray of 100", "Tray of 200"],
    stockStatus: "In Stock",
    stockCount: 20000,
    minOrder: "50 plugs",
    deliveryInfo: "Nationwide seedling tray transport",
    description: "Disease resistant greenhouse/open-field hybrid tomato seedlings ready for transplanting.",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "sd-cabbage-plugs",
    name: "Gloria Cabbage Seedling Plugs",
    category: "seedlings",
    subCategory: "Vegetable Seedlings",
    price: 5,
    unit: "plug",
    availableUnits: ["Tray of 100", "Tray of 200"],
    stockStatus: "In Stock",
    stockCount: 30000,
    minOrder: "100 plugs",
    deliveryInfo: "Nationwide seedling tray transport",
    description: "Uniform, vigorous Gloria F1 cabbage seedling plugs in nursery trays.",
    image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "sd-capsicum-plugs",
    name: "Capsicum (Sweet Pepper) Seedling Plugs",
    category: "seedlings",
    subCategory: "Vegetable Seedlings",
    price: 12,
    unit: "plug",
    availableUnits: ["Tray of 100"],
    stockStatus: "In Stock",
    stockCount: 15000,
    minOrder: "50 plugs",
    deliveryInfo: "Nationwide seedling tray transport",
    description: "Red and yellow sweet pepper hybrid seedling plugs raised under sanitary conditions.",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "sd-spinach-plugs",
    name: "Swiss Chard / Spinach Seedling Plugs",
    category: "seedlings",
    subCategory: "Vegetable Seedlings",
    price: 5,
    unit: "plug",
    availableUnits: ["Tray of 100"],
    stockStatus: "In Stock",
    stockCount: 25000,
    minOrder: "100 plugs",
    deliveryInfo: "Nationwide seedling tray transport",
    description: "Fordhook Giant spinach seedling plugs for high-yield leaf harvesting.",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=800"
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
