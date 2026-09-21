import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import {
  INITIAL_FRESH_PRODUCTS,
  INITIAL_SEEDLING_PRODUCTS,
  type Product,
} from "@/data/mockData";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/catalog — the public storefront catalogue, sourced from the database
// so dashboard edits and new products show on the site. Known products keep
// their rich mockData display metadata with live price/stock/availability
// overridden from the DB; products added in the dashboard get sensible defaults.
export async function GET() {
  const dbProducts = await prisma.product.findMany({ orderBy: [{ name: "asc" }] });
  const meta = new Map<string, Product>(
    [...INITIAL_FRESH_PRODUCTS, ...INITIAL_SEEDLING_PRODUCTS].map((p) => [p.id, p]),
  );

  const products: Product[] = dbProducts.map((p) => {
    const available = Math.max(0, p.stock - p.reserved);
    const category: Product["category"] = p.category === "seedling" ? "seedlings" : "fresh";
    const stockStatus: Product["stockStatus"] = !p.available
      ? "Coming Soon"
      : available <= 0
        ? "Low Stock"
        : "In Stock";
    const sub = (p.subCategory as Product["subCategory"] | null) ?? undefined;
    const known = meta.get(p.slug);

    if (known) {
      return {
        ...known,
        name: p.name,
        price: p.price,
        stockCount: available,
        stockStatus,
        subCategory: sub ?? known.subCategory,
        variety: p.variety ?? known.variety,
        image: p.imageUrl ?? known.image,
        description: p.description ?? known.description,
      };
    }

    return {
      id: p.slug,
      name: p.name,
      category,
      subCategory: sub ?? (category === "seedlings" ? "Fruit Seedlings" : "Vegetables"),
      price: p.price,
      unit: p.unit,
      availableUnits: [`1 ${p.unit}`, `2 ${p.unit}`, `5 ${p.unit}`],
      stockStatus,
      stockCount: available,
      deliveryInfo:
        category === "seedlings"
          ? "Dispatched nationwide from Kapseret Nursery, Eldoret"
          : "Same-day / Next-day delivery in Juja, Thika & surrounding areas",
      description: p.description ?? "",
      image:
        p.imageUrl ||
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
      variety: p.variety ?? undefined,
    };
  });

  return NextResponse.json({ products });
}
