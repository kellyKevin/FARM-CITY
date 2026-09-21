// Seed the database from the storefront catalogue, so the shop UI and the bot
// share one source of truth. The products the customer sees in the shop are the
// exact products the bot prices and reserves stock against.

import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../src/lib/auth/password";
import {
  INITIAL_FRESH_PRODUCTS,
  INITIAL_SEEDLING_PRODUCTS,
  INITIAL_DELIVERY_ZONES,
  type Product,
  type DeliveryZone,
} from "../src/data/mockData";

const prisma = new PrismaClient();

function toProductRow(p: Product) {
  const isSeedling = p.category === "seedlings";
  return {
    slug: p.id,
    name: p.name,
    category: isSeedling ? "seedling" : "produce",
    variety: p.variety ?? null,
    unit: p.unit,
    price: p.price,
    stock: p.stockCount ?? 0,
    available: p.stockStatus !== "Coming Soon",
    origin: isSeedling ? "ELDORET_NURSERY" : "JUJA_HUB",
    description: p.description ?? null,
    imageUrl: p.image ?? null,
  };
}

function toZoneRow(z: DeliveryZone) {
  const countrywide = /nationwide|countrywide/i.test(z.county);
  return {
    name: z.county,
    type: countrywide ? "COUNTRYWIDE" : "LOCAL",
    fee: z.fee,
    minimumOrder: 0,
    cutoffTime: countrywide ? null : "14:00",
    daysAvailable: null as string | null,
    active: true,
  };
}

async function main() {
  const products = [...INITIAL_FRESH_PRODUCTS, ...INITIAL_SEEDLING_PRODUCTS];
  for (const p of products) {
    const row = toProductRow(p);
    await prisma.product.upsert({
      where: { slug: row.slug },
      create: row,
      update: row,
    });
  }

  for (const z of INITIAL_DELIVERY_ZONES) {
    const row = toZoneRow(z);
    await prisma.deliveryZone.upsert({
      where: { name: row.name },
      create: row,
      update: row,
    });
  }

  await prisma.counter.upsert({
    where: { name: "order" },
    create: { name: "order", value: 0 },
    update: {},
  });

  // Owner login for the dashboard. Set STAFF_DEFAULT_PASSWORD in the env;
  // defaults to "farmcity" for local dev — change it before launch.
  const ownerPassword = hashPassword(process.env.STAFF_DEFAULT_PASSWORD || "farmcity");
  await prisma.staffUser.upsert({
    where: { phone: "254711911690" },
    create: { name: "Farm City Owner", role: "owner", phone: "254711911690", passwordHash: ownerPassword },
    update: { passwordHash: ownerPassword },
  });

  console.log(
    `Seeded ${products.length} products and ${INITIAL_DELIVERY_ZONES.length} delivery zones from the storefront catalogue.`,
  );
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
