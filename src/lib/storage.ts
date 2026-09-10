import { Product, FarmerResource, BulkQuoteRequest, DeliveryZone, INITIAL_FRESH_PRODUCTS, INITIAL_SEEDLING_PRODUCTS, INITIAL_FARMER_RESOURCES, INITIAL_DELIVERY_ZONES } from "../data/mockData";

const PRODUCTS_KEY = "farm_city_products";
const RESOURCES_KEY = "farm_city_resources";
const QUOTES_KEY = "farm_city_bulk_quotes";
const ZONES_KEY = "farm_city_delivery_zones";

export const getStoredProducts = (): Product[] => {
  if (typeof window === "undefined") return [...INITIAL_FRESH_PRODUCTS, ...INITIAL_SEEDLING_PRODUCTS];
  const saved = localStorage.getItem(PRODUCTS_KEY);
  if (!saved) {
    const initial = [...INITIAL_FRESH_PRODUCTS, ...INITIAL_SEEDLING_PRODUCTS];
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(initial));
    return initial;
  }
  try {
    return JSON.parse(saved);
  } catch (err) {
    console.error("Error loading products from local storage", err);
    return [...INITIAL_FRESH_PRODUCTS, ...INITIAL_SEEDLING_PRODUCTS];
  }
};

export const saveProducts = (products: Product[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
};

export const getStoredResources = (): FarmerResource[] => {
  if (typeof window === "undefined") return INITIAL_FARMER_RESOURCES;
  const saved = localStorage.getItem(RESOURCES_KEY);
  if (!saved) {
    localStorage.setItem(RESOURCES_KEY, JSON.stringify(INITIAL_FARMER_RESOURCES));
    return INITIAL_FARMER_RESOURCES;
  }
  try {
    return JSON.parse(saved);
  } catch (err) {
    console.error("Error loading resources", err);
    return INITIAL_FARMER_RESOURCES;
  }
};

export const saveResources = (resources: FarmerResource[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(RESOURCES_KEY, JSON.stringify(resources));
};

export const getStoredBulkQuotes = (): BulkQuoteRequest[] => {
  if (typeof window === "undefined") return [];
  const saved = localStorage.getItem(QUOTES_KEY);
  if (!saved) return [];
  try {
    return JSON.parse(saved);
  } catch (err) {
    console.error("Error loading bulk quotes", err);
    return [];
  }
};

export const saveBulkQuote = (quote: Omit<BulkQuoteRequest, "id" | "createdAt" | "status">) => {
  if (typeof window === "undefined") return;
  const current = getStoredBulkQuotes();
  const newQuote: BulkQuoteRequest = {
    ...quote,
    id: "quote-" + Date.now(),
    status: "Pending",
    createdAt: new Date().toLocaleDateString("en-KE", { dateStyle: "medium" }),
  };
  const updated = [newQuote, ...current];
  localStorage.setItem(QUOTES_KEY, JSON.stringify(updated));
  return newQuote;
};

export const getStoredDeliveryZones = (): DeliveryZone[] => {
  if (typeof window === "undefined") return INITIAL_DELIVERY_ZONES;
  const saved = localStorage.getItem(ZONES_KEY);
  if (!saved) {
    localStorage.setItem(ZONES_KEY, JSON.stringify(INITIAL_DELIVERY_ZONES));
    return INITIAL_DELIVERY_ZONES;
  }
  try {
    return JSON.parse(saved);
  } catch (err) {
    console.error("Error loading delivery zones", err);
    return INITIAL_DELIVERY_ZONES;
  }
};
