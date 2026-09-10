"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sprout, MapPin, CheckCircle2, Award, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white p-8 sm:p-12 rounded-3xl shadow-xl">
        <div className="max-w-3xl space-y-4">
          <span className="bg-emerald-700 text-emerald-200 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            About Farm City
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Connecting Farmers, Produce & Consumers Across Kenya
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Farm City is an agricultural supply, fresh produce delivery, and seedling business. We unite two core operational strengths: Fresh Fruits & Vegetables Sales with Seedling Production & Farmer Supply.
          </p>
        </div>
      </div>

      {/* Brand Vision & Positioning */}
      <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl space-y-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-emerald-800 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
          <Sprout size={14} /> Core Brand Vision
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          «A trusted agricultural supply and delivery platform connecting farmers, agricultural products, businesses and consumers.»
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Farm City is built on four pillars: Freshness, Reliability, Convenience, and Quality. We simplify agriculture for households buying weekly groceries and farmers expanding commercial fruit orchards.
        </p>
      </div>

      {/* Physical Operations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Juja / Thika Operations */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
                alt="Juja Thika Fresh Produce Hub"
                fill
                className="object-cover"
              />
            </div>
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase">
              Juja / Thika Operation
            </span>
            <h3 className="text-2xl font-black text-slate-900">Fresh Produce & Distribution Hub</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Located in Kiambu County, serving Juja, Thika, Ruiru, and surrounding areas. Handles daily fresh vegetable procurement, order packing, quality inspection, and home/institutional deliveries.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
              <MapPin size={14} className="text-emerald-700" /> Juja / Thika Road
            </span>
            <Link href="/shop" className="text-xs font-extrabold text-emerald-800 hover:text-emerald-950">
              Shop Fresh Hub →
            </Link>
          </div>
        </div>

        {/* Eldoret Nursery Operations */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800"
                alt="Kapseret Eldoret Nursery"
                fill
                className="object-cover"
              />
            </div>
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase">
              Kapseret, Eldoret Operation
            </span>
            <h3 className="text-2xl font-black text-slate-900">Physical Seedling Nursery</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Situated in Kapseret, Eldoret, Uasin Gishu County. Houses our physical nursery beds, grafting centers, and countrywide dispatch center for Hass avocado, passion fruit, macadamia, and coffee seedlings.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
              <MapPin size={14} className="text-emerald-700" /> Kapseret, Eldoret
            </span>
            <Link href="/seedlings" className="text-xs font-extrabold text-emerald-800 hover:text-emerald-950">
              Browse Nursery →
            </Link>
          </div>
        </div>
      </div>

      {/* Business Commitments */}
      <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Our Guiding Values</span>
          <h2 className="text-3xl font-extrabold mt-1">Our Commitments to You</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
          <div className="bg-slate-800/80 p-6 rounded-2xl space-y-2 border border-slate-700">
            <CheckCircle2 size={24} className="text-emerald-400" />
            <h3 className="font-bold text-white text-sm">Commitment to Freshness</h3>
            <p className="text-slate-400">Strict quality control ensures produce reaches your kitchen in peak nutritional condition.</p>
          </div>

          <div className="bg-slate-800/80 p-6 rounded-2xl space-y-2 border border-slate-700">
            <Award size={24} className="text-emerald-400" />
            <h3 className="font-bold text-white text-sm">Commitment to Farmers</h3>
            <p className="text-slate-400">Providing genuine, grafted, disease-free seedlings that deliver high yields and strong return on investment.</p>
          </div>

          <div className="bg-slate-800/80 p-6 rounded-2xl space-y-2 border border-slate-700">
            <ShieldCheck size={24} className="text-emerald-400" />
            <h3 className="font-bold text-white text-sm">Transparent Service</h3>
            <p className="text-slate-400">Clear pricing, responsive WhatsApp communication, and reliable doorstep delivery.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
