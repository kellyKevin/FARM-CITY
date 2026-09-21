"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Sprout, MessageSquare, CheckCircle2, MapPin, Truck, ShieldCheck, FileText, ShoppingBag, X } from "lucide-react";
import { loadCatalog } from "@/lib/storage";
import { Product } from "@/data/mockData";
import { useCart } from "@/context/CartContext";
import { useSettings } from "@/context/SettingsContext";

export default function SeedlingsPage() {
  const { t } = useSettings();
  const [seedlings, setSeedlings] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const { addToCart } = useCart();

  useEffect(() => {
    loadCatalog().then((all) => {
      setSeedlings(all.filter((p) => p.category === "seedlings"));
      setLoading(false);
    });
  }, []);

  const categories = [
    "All",
    "Fruit Seedlings",
    "Tree & Nut Seedlings",
    "Coffee & Cash Crops",
    "Herbs & Aromatics",
    "Berry Plants",
    "Vegetable Seedlings"
  ];

  const filteredSeedlings = seedlings.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.scientificName && p.scientificName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (p.variety && p.variety.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedSubCategory === "All" || p.subCategory === selectedSubCategory;
    return matchesSearch && matchesCategory;
  });

  const handleQuickAdd = (product: Product) => {
    if (product.stockStatus === "Coming Soon") {
      setToastMessage(`"${product.name}" ${t("seed.toast.soon")}`);
      setTimeout(() => setToastMessage(null), 3500);
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      unit: product.unit,
      quantity: 1,
      image: product.image
    });
  };

  const generateWhatsAppLink = (product: Product) => {
    const msg = encodeURIComponent(
      `Hello Farm City Eldoret Nursery, I am interested in ordering seedlings:\n\nSeedling: ${product.name}\nSubcategory: ${product.subCategory}\nPrice: KSh ${product.price}/seedling\nStatus: ${product.stockStatus}\n\nPlease advise on delivery schedule and bulk availability.`
    );
    return `https://wa.me/254711911690?text=${msg}`;
  };

  const renderStockBadge = (status: Product["stockStatus"]) => {
    switch (status) {
      case "In Stock":
        return (
          <span className="bg-emerald-800 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            {t("stock.available")}
          </span>
        );
      case "Low Stock":
        return (
          <span className="bg-amber-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            {t("stock.low")}
          </span>
        );
      case "Seasonal":
        return (
          <span className="bg-blue-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            {t("stock.seasonal")}
          </span>
        );
      case "Coming Soon":
        return (
          <span className="bg-slate-700 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            {t("stock.soon")}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 text-left">
      {/* Toast Notification (pre-order / coming-soon notices) */}
      {toastMessage && (
        <div className="fixed top-24 right-4 sm:right-6 z-50 bg-emerald-800 text-white pl-4 pr-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-toast border border-emerald-600 max-w-[calc(100vw-2rem)]">
          <CheckCircle2 size={20} className="text-emerald-300 shrink-0" />
          <span className="font-semibold text-xs sm:text-sm">{toastMessage}</span>
        </div>
      )}

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 text-white p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden border border-emerald-800">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-800/80 text-emerald-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-emerald-600/40">
            <MapPin size={14} /> {t("seed.hero.tag")}
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {t("seed.hero.title1")} <br />
            <span className="text-emerald-400">{t("seed.hero.title2")}</span>
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed max-w-2xl">
            {t("seed.hero.desc")}
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              href="/bulk-institutional"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-5 py-3 rounded-xl shadow-md transition-all text-xs sm:text-sm flex items-center gap-2"
            >
              <FileText size={16} />
              <span>{t("seed.hero.bulkQuote")}</span>
            </Link>
            <a
              href="https://wa.me/254711911690?text=Hello%20Farm%20City%20Eldoret%20Nursery%2C%20I%20need%20seedlings%20catalogue%20info"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white font-bold px-5 py-3 rounded-xl transition-all text-xs sm:text-sm flex items-center gap-2"
            >
              <MessageSquare size={16} />
              <span>{t("seed.hero.whatsapp")}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="relative w-full md:w-80">
          <Search size={18} className="absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            placeholder={t("seed.search")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 text-slate-800 transition-shadow"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className="absolute right-2.5 top-2 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedSubCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedSubCategory === cat
                  ? "bg-emerald-800 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {t(`cat.${cat}`)}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      {!loading && (
        <p className="text-xs text-slate-500 -mt-4">
          <span className="font-bold text-slate-700">{filteredSeedlings.length}</span>{" "}
          {filteredSeedlings.length === 1 ? t("shop.resultsOne") : t("shop.resultsMany")}
        </p>
      )}

      {/* Loading Skeleton */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-sm">
              <div className="skeleton h-56 w-full" />
              <div className="p-5 space-y-3">
                <div className="skeleton h-4 w-3/4 rounded" />
                <div className="skeleton h-3 w-1/2 rounded" />
                <div className="skeleton h-12 w-full rounded-xl" />
                <div className="skeleton h-9 w-full rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Seedlings Catalogue Grid */}
      {!loading && (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredSeedlings.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-sm hover:shadow-lg lift flex flex-col justify-between group text-left"
          >
            <div>
              <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                  <span className="bg-emerald-900/90 text-white text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                    {t(`cat.${product.subCategory}`)}
                  </span>
                  {renderStockBadge(product.stockStatus)}
                </div>
              </div>

              <div className="p-5 space-y-3">
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{product.name}</h3>
                  {product.scientificName && (
                    <p className="text-[11px] italic text-emerald-700 font-medium">{product.scientificName}</p>
                  )}
                  {product.variety && (
                    <p className="text-[11px] font-semibold text-slate-500">{t("prod.variety")} {product.variety}</p>
                  )}
                  <p className="text-xs text-slate-600 line-clamp-3 mt-1.5">{product.description}</p>
                </div>

                <div className="text-xs bg-emerald-50/60 p-3 rounded-xl space-y-1.5 border border-emerald-100/80">
                  <p className="flex justify-between text-slate-700">
                    <span className="font-medium">{t("prod.minOrder")}</span>
                    <span className="font-semibold text-slate-800">{product.minOrder || "5 seedlings"}</span>
                  </p>
                  <p className="text-[11px] text-slate-500 pt-1 border-t border-emerald-100">
                    <Truck size={12} className="inline mr-1 text-emerald-700" />
                    {product.deliveryInfo}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0 space-y-3">
              <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                <div>
                  <span className="text-xs text-slate-400">{t("prod.price")} </span>
                  <span className="text-xl font-black text-emerald-800">KSh {product.price}</span>
                  <span className="text-xs text-slate-500"> / {product.unit}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleQuickAdd(product)}
                  disabled={product.stockStatus === "Coming Soon"}
                  className={`text-xs font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1 ${
                    product.stockStatus === "Coming Soon"
                      ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                      : "bg-emerald-800 hover:bg-emerald-900 text-white"
                  }`}
                >
                  <ShoppingBag size={14} />
                  <span>{product.stockStatus === "Coming Soon" ? t("prod.soon") : t("prod.addCart")}</span>
                </button>

                <a
                  href={generateWhatsAppLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1"
                >
                  <MessageSquare size={14} />
                  <span>{t("prod.inquire")}</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      )}

      {!loading && filteredSeedlings.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-3">
          <Sprout size={40} className="text-slate-300 mx-auto" />
          <p className="text-slate-700 font-bold text-base">{t("shop.empty.title")}</p>
          <button
            onClick={() => { setSearchQuery(""); setSelectedSubCategory("All"); }}
            className="mt-1 inline-flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors"
          >
            <X size={14} /> {t("shop.clearFilters")}
          </button>
        </div>
      )}

      {/* Nursery Quality Assurance */}
      <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-6 text-left">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800 pb-6">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">{t("seed.assure.tag")}</span>
            <h2 className="text-2xl font-extrabold mt-1">{t("seed.assure.title")}</h2>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl">
              {t("seed.assure.desc")}
            </p>
          </div>
          <Link
            href="/bulk-institutional"
            className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold px-6 py-3 rounded-xl transition-colors whitespace-nowrap self-start md:self-auto"
          >
            {t("seed.assure.cta")}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
          <div className="flex items-start gap-3">
            <ShieldCheck size={24} className="text-emerald-400 shrink-0" />
            <div>
              <p className="font-bold text-white text-sm mb-1">{t("seed.assure.c1.title")}</p>
              <p>{t("seed.assure.c1.desc")}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Truck size={24} className="text-emerald-400 shrink-0" />
            <div>
              <p className="font-bold text-white text-sm mb-1">{t("seed.assure.c2.title")}</p>
              <p>{t("seed.assure.c2.desc")}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Sprout size={24} className="text-emerald-400 shrink-0" />
            <div>
              <p className="font-bold text-white text-sm mb-1">{t("seed.assure.c3.title")}</p>
              <p>{t("seed.assure.c3.desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
