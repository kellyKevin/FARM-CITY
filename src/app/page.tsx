"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  Sprout,
  Truck,
  Building2,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Phone,
  Award,
  MapPin,
  BookOpen,
  Plus,
  Star,
  Tag,
  Mail,
  ShieldCheck,
  Send
} from "lucide-react";
import { getStoredProducts, getStoredResources } from "@/lib/storage";
import { Product, FarmerResource } from "@/data/mockData";
import { useCart } from "@/context/CartContext";

export default function Home() {
  const [freshProducts, setFreshProducts] = useState<Product[]>([]);
  const [seedlingProducts, setSeedlingProducts] = useState<Product[]>([]);
  const [resources, setResources] = useState<FarmerResource[]>([]);
  const { addToCart } = useCart();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  useEffect(() => {
    const allProducts = getStoredProducts();
    setFreshProducts(allProducts.filter((p) => p.category === "fresh").slice(0, 4));
    setSeedlingProducts(allProducts.filter((p) => p.category === "seedlings").slice(0, 4));
    setResources(getStoredResources().slice(0, 3));
  }, []);

  const handleQuickAdd = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      unit: product.unit,
      quantity: 1,
      image: product.image
    });
    setToastMessage(`Added 1 ${product.unit} of ${product.name} to cart!`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail("");
  };

  return (
    <div className="space-y-16 pb-12">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 bg-emerald-800 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce border border-emerald-600">
          <CheckCircle2 size={20} className="text-emerald-300" />
          <span className="font-semibold text-sm">{toastMessage}</span>
        </div>
      )}

      {/* 1. REDESIGNED HERO SECTION (Structured Two-Column Desktop Layout) */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 text-white overflow-hidden py-12 md:py-20 border-b border-emerald-800/50">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column (Brand, Headline, Description, CTAs) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Brand Statement Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-emerald-300 text-xs font-bold tracking-wider uppercase">
                <Sprout size={16} className="text-emerald-400" />
                <span>FARM CITY • Kenya&apos;s Agricultural E-Commerce Hub</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                Fresh Produce. <br />
                <span className="text-emerald-400">Quality Seedlings.</span> <br />
                Reliable Supply.
              </h1>

              {/* Supporting Description */}
              <p className="text-emerald-100 text-sm sm:text-base max-w-2xl leading-relaxed font-light">
                Helping households, farmers, businesses, and institutions access quality agricultural produce and certified seedlings conveniently. Same-day fresh delivery in Juja & Thika with nationwide seedling dispatch from our Kapseret Eldoret nursery.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-start gap-3.5 pt-2">
                <Link
                  href="/shop"
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 text-xs sm:text-sm"
                >
                  <ShoppingBag size={18} />
                  <span>SHOP NOW</span>
                </Link>

                <Link
                  href="/seedlings"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-3.5 rounded-xl border border-white/20 backdrop-blur-sm transition-all flex items-center gap-2 text-xs sm:text-sm"
                >
                  <Sprout size={18} className="text-emerald-400" />
                  <span>BUY SEEDLINGS</span>
                </Link>

                <a
                  href="https://wa.me/254711911690?text=Hello%20Farm%20City%2C%20I%20would%20like%20to%20place%20an%20order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-500 text-white font-bold px-5 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2 text-xs sm:text-sm"
                >
                  <MessageSquare size={18} />
                  <span>ORDER ON WHATSAPP</span>
                </a>
              </div>

              {/* Ordering Reassurance */}
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-emerald-200">
                <span className="inline-flex items-center gap-1.5 bg-emerald-800/60 border border-emerald-600/40 px-3 py-1.5 rounded-full">
                  <CheckCircle2 size={13} className="text-emerald-400" /> No account needed
                </span>
                <span className="inline-flex items-center gap-1.5 bg-emerald-800/60 border border-emerald-600/40 px-3 py-1.5 rounded-full">
                  <CheckCircle2 size={13} className="text-emerald-400" /> Order in minutes
                </span>
                <span className="inline-flex items-center gap-1.5 bg-emerald-800/60 border border-emerald-600/40 px-3 py-1.5 rounded-full">
                  <CheckCircle2 size={13} className="text-emerald-400" /> Pay on delivery or via M-Pesa
                </span>
              </div>

              {/* Key Trust Badges */}
              <div className="pt-6 border-t border-emerald-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-emerald-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>Juja / Thika Fresh Hub</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>Eldoret Kapseret Nursery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>47 Counties Nationwide Delivery</span>
                </div>
              </div>
            </div>

            {/* Right Column (Visual Composition) */}
            <div className="lg:col-span-5 relative">
              <div className="relative bg-emerald-950/90 border border-emerald-700/60 p-5 sm:p-6 rounded-3xl shadow-2xl backdrop-blur-md space-y-5">
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-inner">
                  <Image
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
                    alt="Farm City Fresh Produce and Seedlings Supply"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-white text-xs font-semibold bg-emerald-600/90 px-3 py-1 rounded-full shadow-sm">
                      Fresh Produce & Nursery Supply Hub
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="bg-emerald-900/70 border border-emerald-700/50 p-3.5 rounded-xl">
                    <p className="text-base sm:text-lg font-extrabold text-emerald-300">Juja / Thika</p>
                    <p className="text-[11px] text-slate-300">Daily Fresh Fruits & Veg Delivery</p>
                  </div>
                  <div className="bg-emerald-900/70 border border-emerald-700/50 p-3.5 rounded-xl">
                    <p className="text-base sm:text-lg font-extrabold text-emerald-300">Kapseret Eldoret</p>
                    <p className="text-[11px] text-slate-300">Certified Seedling Production</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHAT WE OFFER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-left max-w-2xl">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Integrated Agricultural Solutions</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">What Farm City Offers</h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Serving households, commercial fruit growers, schools, hotels, and agricultural institutions across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group text-left">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-2xl group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                🥑
              </div>
              <h3 className="text-lg font-bold text-slate-900">Fresh Produce</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fresh fruits, vegetables, and agricultural produce delivered directly to your doorstep in Juja, Thika, and surrounding regions.
              </p>
            </div>
            <Link
              href="/shop"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950"
            >
              <span>Explore Fresh Shop</span> <ArrowRight size={14} />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group text-left">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-2xl group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                🌱
              </div>
              <h3 className="text-lg font-bold text-slate-900">Quality Seedlings</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Grafted Hass Avocado, Passion fruit, Macadamia, Coffee, and Tree tomato seedlings supplied from our Kapseret nursery.
              </p>
            </div>
            <Link
              href="/seedlings"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950"
            >
              <span>Browse Seedling Catalogue</span> <ArrowRight size={14} />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group text-left">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-2xl group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                🏫
              </div>
              <h3 className="text-lg font-bold text-slate-900">Bulk & Institutional</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reliable fresh produce contract supply for schools, hotels, restaurants, hospitals, and corporate organizations.
              </p>
            </div>
            <Link
              href="/bulk-institutional"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950"
            >
              <span>Request Institutional Quote</span> <ArrowRight size={14} />
            </Link>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group text-left">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-2xl group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                🚚
              </div>
              <h3 className="text-lg font-bold text-slate-900">Convenient Delivery</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fast, reliable home and farm delivery network with flexible scheduled delivery options across Kenya.
              </p>
            </div>
            <Link
              href="/delivery"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950"
            >
              <span>View Delivery Zones</span> <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. SHOP FRESH PRODUCE PREVIEW */}
      <section className="bg-slate-100/80 py-12 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-left">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Juja & Thika Fresh Selection</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Popular Fresh Produce</h2>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm self-start md:self-auto"
            >
              <span>SHOP ALL PRODUCE</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {freshProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col text-left">
                <div className="relative h-48 w-full bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-emerald-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {product.subCategory}
                  </div>
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{product.name}</h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1">{product.description}</p>
                    <p className="text-xs text-slate-400 mt-2 font-medium">Delivery: {product.deliveryInfo}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">Price: </span>
                      <span className="text-lg font-black text-emerald-800">KSh {product.price}</span>
                      <span className="text-xs text-slate-500"> / {product.unit}</span>
                    </div>

                    <button
                      onClick={() => handleQuickAdd(product)}
                      className="bg-emerald-100 hover:bg-emerald-800 hover:text-white text-emerald-900 p-2.5 rounded-xl transition-colors font-bold text-xs flex items-center gap-1"
                      title="Add to Cart"
                    >
                      <Plus size={16} />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SHOP SEEDLINGS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-left">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Kapseret Nursery Eldoret</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Featured High-Yield Seedlings</h2>
          </div>
          <Link
            href="/seedlings"
            className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm self-start md:self-auto"
          >
            <span>VIEW ALL SEEDLINGS</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {seedlingProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-sm hover:shadow-md transition-all flex flex-col text-left">
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-emerald-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {product.subCategory}
                </div>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{product.name}</h3>
                  {product.scientificName && (
                    <p className="text-[11px] italic text-emerald-700 font-medium">{product.scientificName}</p>
                  )}
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">{product.description}</p>
                  <p className="text-[11px] text-slate-400 mt-2 font-medium">Min Order: {product.minOrder || "1 seedling"}</p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400">Price: </span>
                    <span className="text-lg font-black text-emerald-900">KSh {product.price}</span>
                    <span className="text-[11px] text-slate-500"> / seedling</span>
                  </div>

                  <button
                    onClick={() => handleQuickAdd(product)}
                    className="bg-emerald-800 hover:bg-emerald-900 text-white p-2.5 rounded-xl transition-colors font-bold text-xs flex items-center gap-1"
                  >
                    <Plus size={16} /> Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. MARKETING / CUSTOMER ATTRACTION PROMO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden text-left border border-emerald-800/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <span className="bg-emerald-500 text-slate-950 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                <Tag size={14} /> SPECIAL MARKETING DEALS
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                Bulk Discounts & WhatsApp Direct Ordering
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed max-w-2xl">
                Planning a fruit orchard or supplying an institution? Get up to 15% off on orders over 200 seedlings or biweekly vegetable supply contracts. Order in seconds via WhatsApp or request a formal quote!
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="https://wa.me/254711911690?text=Hello%20Farm%20City%2C%20I%20want%20to%20inquire%20about%20bulk%20discounts"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-md transition-colors text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <MessageSquare size={18} /> CLAIM WHATSAPP OFFER
              </a>
              <Link
                href="/bulk-institutional"
                className="bg-white text-emerald-950 font-extrabold px-6 py-3.5 rounded-xl shadow-md hover:bg-emerald-50 transition-colors text-xs sm:text-sm text-center"
              >
                REQUEST BULK QUOTE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW FARM CITY WORKS */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Simple & Reliable</span>
            <h2 className="text-3xl font-extrabold">How Farm City Works</h2>
            <p className="text-xs text-emerald-100">Ordering agricultural produce and seedlings in 4 simple steps.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl relative">
              <span className="text-3xl font-black text-emerald-500/30 absolute top-4 right-4">01</span>
              <h3 className="text-base font-bold mb-2 text-white">1. Choose</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Browse our online fresh produce or seedling catalogue and select the items and quantities you require.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl relative">
              <span className="text-3xl font-black text-emerald-500/30 absolute top-4 right-4">02</span>
              <h3 className="text-base font-bold mb-2 text-white">2. Order</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Place your order online, send us a WhatsApp message, or call our customer service team.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl relative">
              <span className="text-3xl font-black text-emerald-500/30 absolute top-4 right-4">03</span>
              <h3 className="text-base font-bold mb-2 text-white">3. We Prepare</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We select, pack, and carefully inspect your produce or seedlings at our Juja or Kapseret operations.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl relative">
              <span className="text-3xl font-black text-emerald-500/30 absolute top-4 right-4">04</span>
              <h3 className="text-base font-bold mb-2 text-white">4. We Deliver</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Your order is delivered safely to your home, farm, school, hotel, or business location in Kenya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY FARM CITY & SOCIAL PROOF / TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Our Guiding Value</span>
            <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
              Why Households, Businesses & Farmers Trust Farm City
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              We bridge the gap between fresh farm produce and end consumers, while equipping commercial fruit growers across Kenya with certified, grafted high-yielding seedlings.
            </p>

            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>Quality Produce:</strong> Sourced under hygienic agricultural practices with sustainable pricing.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>Farmer-Focused:</strong> Physical nursery in Kapseret Eldoret specializing in Hass Avocado, Passion, Macadamia & Coffee.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>Reliable Logistics:</strong> Local Juja/Thika deliveries & nationwide seedling dispatch across Kenya.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>Convenient WhatsApp & Online Ordering:</strong> Simple ordering with quick response times.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl space-y-2">
              <Award className="text-emerald-800" size={28} />
              <h3 className="font-bold text-slate-900 text-sm">Established Operations</h3>
              <p className="text-xs text-slate-600">Physical presence in Juja/Thika and physical nursery in Kapseret, Eldoret.</p>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl space-y-2">
              <Truck className="text-emerald-800" size={28} />
              <h3 className="font-bold text-slate-900 text-sm">Nationwide Reach</h3>
              <p className="text-xs text-slate-600">Delivering seedlings safely to all 47 counties in Kenya.</p>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl space-y-2">
              <Building2 className="text-emerald-800" size={28} />
              <h3 className="font-bold text-slate-900 text-sm">Institutional Partner</h3>
              <p className="text-xs text-slate-600">Supplying schools, hotels, hospitals and corporate cafeterias with bulk produce.</p>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl space-y-2">
              <Phone className="text-emerald-800" size={28} />
              <h3 className="font-bold text-slate-900 text-sm">Direct Contact</h3>
              <p className="text-xs text-slate-600">Speak directly with Wesley Mage Mujenyi & the team for custom orders.</p>
            </div>
          </div>
        </div>

        {/* Customer Testimonials & Reviews */}
        <div className="space-y-6 pt-6 border-t border-slate-200">
          <div className="space-y-1">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Verified Feedback</span>
            <h3 className="text-2xl font-black text-slate-900">What Our Customers Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs text-slate-600 italic leading-relaxed">
                &ldquo;Farm City supplies our hotel in Thika with fresh vegetables every Monday and Thursday. The produce is exceptionally fresh and delivered right on schedule.&rdquo;
              </p>
              <div>
                <p className="font-bold text-slate-900 text-xs">Chef David Njuguna</p>
                <p className="text-[11px] text-slate-400">Hotel Procurement, Thika</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs text-slate-600 italic leading-relaxed">
                &ldquo;I ordered 400 grafted Hass avocado seedlings for my farm in Murang&apos;a. They arrived safely in protective crates from Eldoret with zero root damage.&rdquo;
              </p>
              <div>
                <p className="font-bold text-slate-900 text-xs">Peter Mwangi</p>
                <p className="text-[11px] text-slate-400">Avocado Farmer, Murang&apos;a</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs text-slate-600 italic leading-relaxed">
                &ldquo;Convenient WhatsApp ordering and prompt doorstep delivery in Juja Highpoint. The quality of fruits and leafy greens is top-notch.&rdquo;
              </p>
              <div>
                <p className="font-bold text-slate-900 text-xs">Grace Wanjiku</p>
                <p className="text-[11px] text-slate-400">Household Customer, Juja</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. OUR PHYSICAL NURSERY */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Kapseret, Eldoret Operation</span>
              <h2 className="text-3xl font-extrabold">Visit Our Physical Seedling Nursery</h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our seedling nursery in Kapseret, Eldoret produces high-quality grafted fruit and commercial crop seedlings. We oversee grafting, potting, rootstock selection, pest control, packaging, and dispatch to farmers across Kenya.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-xl">
                  <p className="font-bold text-emerald-400 mb-1">Grafting & Care</p>
                  <p className="text-slate-400 text-[11px]">Hand-grafted by skilled agronomists for disease resistance and fast maturity.</p>
                </div>
                <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-xl">
                  <p className="font-bold text-emerald-400 mb-1">Safe Dispatch</p>
                  <p className="text-slate-400 text-[11px]">Specialized seedling packaging to ensure zero damage during countrywide transport.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/seedlings"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl transition-all text-xs"
                >
                  <MapPin size={16} />
                  <span>EXPLORE NURSERY SEEDLINGS</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-slate-700">
                <Image
                  src="/images/seedlings/avocado-nursery.jpg"
                  alt="Farm City Nursery Eldoret"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-slate-700">
                <Image
                  src="/images/seedlings/citrus-orange-2.jpg"
                  alt="Seedling Production"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FARMER RESOURCES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Agronomy Knowledge Center</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Farmer Resources & Guides</h2>
          </div>
          <Link
            href="/farmer-resources"
            className="inline-flex items-center gap-2 text-emerald-800 hover:text-emerald-950 font-bold text-xs"
          >
            <span>VIEW ALL FARMER RESOURCES</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((res) => (
            <div key={res.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="p-6 space-y-3">
                <span className="bg-emerald-50 text-emerald-800 font-bold text-[10px] px-2.5 py-1 rounded-full uppercase">
                  {res.category}
                </span>
                <h3 className="font-bold text-slate-900 text-base leading-snug">{res.title}</h3>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{res.summary}</p>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 mt-4 pt-4">
                <span>{res.readTime}</span>
                <Link href={`/farmer-resources#${res.id}`} className="text-emerald-800 font-bold flex items-center gap-1">
                  Read Article <BookOpen size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. NEWSLETTER & MARKET UPDATES SUBSCRIPTION BOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-900 text-white p-8 sm:p-12 rounded-3xl space-y-6 text-left border border-emerald-800">
          <div className="max-w-2xl space-y-2">
            <span className="bg-emerald-800 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
              <Mail size={14} /> Market Price & Farming Advisory
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">Stay Updated on Produce Prices & Seedling Offers</h2>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              Subscribe to get weekly fresh produce price updates, seasonal planting tips, and bulk seedling dispatch alerts.
            </p>
          </div>

          {newsletterSubscribed ? (
            <div className="bg-emerald-800/80 border border-emerald-600 p-4 rounded-2xl max-w-md flex items-center gap-3 text-xs font-bold text-emerald-200">
              <ShieldCheck size={20} className="text-emerald-400 shrink-0" />
              <span>Thank you! You have been subscribed to Farm City Market Updates.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="px-4 py-3 bg-white text-slate-900 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-400 flex-grow"
              />
              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-6 py-3 rounded-xl transition-colors text-xs whitespace-nowrap flex items-center justify-center gap-1.5"
              >
                <span>SUBSCRIBE</span>
                <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
