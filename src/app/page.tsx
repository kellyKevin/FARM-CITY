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
  Plus
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

  return (
    <div className="space-y-16 pb-12">
      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 bg-emerald-800 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce border border-emerald-600">
          <CheckCircle2 size={20} className="text-emerald-300" />
          <span className="font-semibold text-sm">{toastMessage}</span>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 text-white overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-700/60 border border-emerald-500/40 text-emerald-200 text-xs font-semibold tracking-wide">
                <Sprout size={16} className="text-emerald-400" />
                <span>Kenya&apos;s Agricultural E-Commerce & Seedling Hub</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Fresh Produce. <br />
                <span className="text-emerald-400">Quality Seedlings.</span> <br />
                Delivered.
              </h1>

              <p className="text-emerald-100 text-base sm:text-lg max-w-2xl leading-relaxed font-light mx-auto lg:mx-0">
                Farm City brings together fresh produce sales, direct customer delivery, bulk institutional supply, and countrywide seedling distribution from our nursery in Kapseret, Eldoret.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/shop"
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 text-sm sm:text-base"
                >
                  <ShoppingBag size={20} />
                  <span>SHOP FRESH PRODUCE</span>
                </Link>

                <Link
                  href="/seedlings"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-xl border border-white/20 backdrop-blur-sm transition-all flex items-center gap-2 text-sm sm:text-base"
                >
                  <Sprout size={20} className="text-emerald-400" />
                  <span>SHOP SEEDLINGS</span>
                </Link>

                <a
                  href="https://wa.me/254711911690?text=Hello%20Farm%20City%2C%20I%20would%20like%20to%20place%20an%20order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-500 text-white font-bold px-5 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2 text-sm sm:text-base"
                >
                  <MessageSquare size={20} />
                  <span>ORDER ON WHATSAPP</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-emerald-700/60 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-emerald-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>Fresh Daily Juja / Thika Hub</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>Kapseret Eldoret Nursery</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>Nationwide Delivery</span>
                </div>
              </div>
            </div>

            {/* Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative bg-emerald-950/80 border border-emerald-700/50 p-6 rounded-3xl shadow-2xl backdrop-blur-md space-y-6">
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-inner">
                  <Image
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
                    alt="Farm City Produce & Seedlings"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-white text-xs font-semibold bg-emerald-600/90 px-3 py-1 rounded-full">
                      Physical Nursery & Fresh Logistics
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-emerald-900/60 border border-emerald-700/40 p-3 rounded-xl">
                    <p className="text-xl font-extrabold text-emerald-300">Juja / Thika</p>
                    <p className="text-[11px] text-slate-300">Fresh Produce Sales & Delivery</p>
                  </div>
                  <div className="bg-emerald-900/60 border border-emerald-700/40 p-3 rounded-xl">
                    <p className="text-xl font-extrabold text-emerald-300">Kapseret, Eldoret</p>
                    <p className="text-[11px] text-slate-300">Physical Seedling Nursery</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 1 – WHAT WE OFFER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Our Core Divisions</h2>
          <p className="text-3xl font-extrabold text-slate-900">What Farm City Offers</p>
          <p className="text-sm text-slate-600 mt-2">
            Integrated agricultural solutions serving households, farmers, commercial buyers, and institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                🥑
              </div>
              <h3 className="text-xl font-bold text-slate-900">Fresh Produce</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fresh fruits, vegetables, and agricultural produce delivered directly to your doorstep in Juja, Thika, and surrounding regions.
              </p>
            </div>
            <Link
              href="/shop"
              className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900"
            >
              <span>Explore Fresh Shop</span> <ArrowRight size={14} />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                🌱
              </div>
              <h3 className="text-xl font-bold text-slate-900">Quality Seedlings</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Grafted Hass Avocado, Passion fruit, Macadamia, Coffee, and Tree tomato seedlings supplied to farmers across Kenya.
              </p>
            </div>
            <Link
              href="/seedlings"
              className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900"
            >
              <span>Browse Seedling Catalogue</span> <ArrowRight size={14} />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                🏫
              </div>
              <h3 className="text-xl font-bold text-slate-900">Bulk & Institutional</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reliable fresh produce contract supply for schools, hotels, restaurants, hospitals, and corporate organizations.
              </p>
            </div>
            <Link
              href="/bulk-institutional"
              className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900"
            >
              <span>Request Institutional Quote</span> <ArrowRight size={14} />
            </Link>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                🚚
              </div>
              <h3 className="text-xl font-bold text-slate-900">Convenient Delivery</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fast, reliable home and farm delivery network with M-Pesa payments and flexible scheduled delivery options.
              </p>
            </div>
            <Link
              href="/delivery"
              className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900"
            >
              <span>View Delivery Zones</span> <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2 – SHOP FRESH PRODUCE PREVIEW */}
      <section className="bg-slate-100/70 py-12 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Farm Fresh Selection</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Popular Fresh Produce</h2>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm self-start md:self-auto"
            >
              <span>SHOP ALL PRODUCE</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {freshProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col">
                <div className="relative h-48 w-full bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
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
                      <span className="text-xs text-slate-500">Price: </span>
                      <span className="text-lg font-black text-emerald-700">KSh {product.price}</span>
                      <span className="text-xs text-slate-500"> / {product.unit}</span>
                    </div>

                    <button
                      onClick={() => handleQuickAdd(product)}
                      className="bg-emerald-100 hover:bg-emerald-600 hover:text-white text-emerald-800 p-2.5 rounded-xl transition-colors font-semibold text-xs flex items-center gap-1"
                      title="Add to Cart"
                    >
                      <Plus size={16} />
                      <span className="hidden sm:inline">Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 – SHOP SEEDLINGS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Kapseret Nursery Eldoret</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Featured High-Yield Seedlings</h2>
          </div>
          <Link
            href="/seedlings"
            className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm self-start md:self-auto"
          >
            <span>VIEW ALL SEEDLINGS</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {seedlingProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-sm hover:shadow-md transition-all flex flex-col">
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-emerald-800 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
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
                    <span className="text-[11px] text-slate-500">Price: </span>
                    <span className="text-lg font-black text-emerald-800">KSh {product.price}</span>
                    <span className="text-[11px] text-slate-500"> / seedling</span>
                  </div>

                  <button
                    onClick={() => handleQuickAdd(product)}
                    className="bg-emerald-700 hover:bg-emerald-800 text-white p-2.5 rounded-xl transition-colors font-semibold text-xs flex items-center gap-1"
                  >
                    <Plus size={16} /> Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 – HOW FARM CITY WORKS */}
      <section className="bg-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Simple & Reliable</span>
            <h2 className="text-3xl font-extrabold mt-1">How Farm City Works</h2>
            <p className="text-xs text-emerald-100 mt-2">Ordering agricultural produce and seedlings in 4 simple steps.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-emerald-800/60 border border-emerald-700 p-6 rounded-2xl relative">
              <span className="text-4xl font-black text-emerald-500/40 absolute top-4 right-4">01</span>
              <h3 className="text-lg font-bold mb-2">1. Choose</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Browse our online fresh produce or seedling catalogue and select the items and quantities you require.
              </p>
            </div>

            <div className="bg-emerald-800/60 border border-emerald-700 p-6 rounded-2xl relative">
              <span className="text-4xl font-black text-emerald-500/40 absolute top-4 right-4">02</span>
              <h3 className="text-lg font-bold mb-2">2. Order</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Order directly online with M-Pesa, send us a WhatsApp message, or call our customer service team.
              </p>
            </div>

            <div className="bg-emerald-800/60 border border-emerald-700 p-6 rounded-2xl relative">
              <span className="text-4xl font-black text-emerald-500/40 absolute top-4 right-4">03</span>
              <h3 className="text-lg font-bold mb-2">3. We Prepare</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                We select, pack, and carefully inspect your produce or seedlings at our Juja or Kapseret operations.
              </p>
            </div>

            <div className="bg-emerald-800/60 border border-emerald-700 p-6 rounded-2xl relative">
              <span className="text-4xl font-black text-emerald-500/40 absolute top-4 right-4">04</span>
              <h3 className="text-lg font-bold mb-2">4. We Deliver</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Your order is delivered safely to your home, farm, school, hotel, or business location in Kenya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 – WHY FARM CITY? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Our Guiding Value</span>
            <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
              Why Households, Businesses & Farmers Trust Farm City
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              We bridge the gap between fresh farm produce and end consumers, while equipping commercial fruit growers across Kenya with certified, grafted high-yielding seedlings.
            </p>

            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Quality Produce:</strong> Sourced under hygienic agricultural practices with sustainable pricing.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Farmer-Focused:</strong> Physical nursery in Kapseret Eldoret specializing in Hass Avocado, Passion, Macadamia & Coffee.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Reliable Logistics:</strong> Local Juja/Thika deliveries & nationwide seedling dispatch across Kenya.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Convenient WhatsApp & Online Ordering:</strong> Simple ordering with quick response times.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl space-y-2">
              <Award className="text-emerald-700" size={28} />
              <h3 className="font-bold text-slate-900 text-sm">Established Operations</h3>
              <p className="text-xs text-slate-600">Physical presence in Juja/Thika and physical nursery in Kapseret, Eldoret.</p>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl space-y-2">
              <Truck className="text-emerald-700" size={28} />
              <h3 className="font-bold text-slate-900 text-sm">Nationwide Reach</h3>
              <p className="text-xs text-slate-600">Delivering seedlings safely to all 47 counties in Kenya.</p>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl space-y-2">
              <Building2 className="text-emerald-700" size={28} />
              <h3 className="font-bold text-slate-900 text-sm">Institutional Partner</h3>
              <p className="text-xs text-slate-600">Supplying schools, hotels, hospitals and corporate cafeterias with bulk produce.</p>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl space-y-2">
              <Phone className="text-emerald-700" size={28} />
              <h3 className="font-bold text-slate-900 text-sm">Direct Contact</h3>
              <p className="text-xs text-slate-600">Speak directly with Wesley Mage Mujenyi & the team for custom orders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 – OUR NURSERY */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* SECTION 7 – BULK & INSTITUTIONAL SUPPLY CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-800 to-emerald-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest">Institutional Contracts</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Need Fresh Produce in Bulk?</h2>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              Farm City supplies regular and bulk fresh produce to schools, hotels, restaurants, hospitals, offices, and institutions. Get tailored quotations with flexible weekly or biweekly delivery schedules.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/bulk-institutional"
                className="bg-white text-emerald-900 font-extrabold px-6 py-3.5 rounded-xl shadow-md hover:bg-emerald-50 transition-colors text-xs sm:text-sm"
              >
                REQUEST A QUOTE
              </Link>
              <a
                href="tel:0711911690"
                className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-xl border border-emerald-500/50 transition-colors text-xs sm:text-sm flex items-center gap-2"
              >
                <Phone size={16} /> CALL 0711 911 690
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 – FARMER RESOURCES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Agronomy Knowledge Center</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Farmer Resources & Guides</h2>
          </div>
          <Link
            href="/farmer-resources"
            className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-900 font-bold text-xs"
          >
            <span>VIEW ALL FARMER RESOURCES</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((res) => (
            <div key={res.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="p-6 space-y-3">
                <span className="bg-emerald-50 text-emerald-700 font-bold text-[10px] px-2.5 py-1 rounded-full uppercase">
                  {res.category}
                </span>
                <h3 className="font-bold text-slate-900 text-base leading-snug">{res.title}</h3>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{res.summary}</p>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 mt-4 pt-4">
                <span>{res.readTime}</span>
                <Link href={`/farmer-resources#${res.id}`} className="text-emerald-700 font-bold flex items-center gap-1">
                  Read Article <BookOpen size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
