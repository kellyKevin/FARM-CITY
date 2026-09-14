"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, BookOpen, Clock, Sprout, ArrowRight, MessageSquare } from "lucide-react";
import { getStoredResources } from "@/lib/storage";
import { FarmerResource } from "@/data/mockData";

export default function FarmerResourcesPage() {
  const [resources, setResources] = useState<FarmerResource[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setResources(getStoredResources());
  }, []);

  const categories = [
    "All",
    "Avocado Farming",
    "Passion Fruit Farming",
    "Macadamia Farming",
    "Coffee Farming",
    "Orchard Management",
    "Seedling Care"
  ];

  const filteredResources = resources.filter((r) => {
    const matchesSearch =
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || r.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 text-white p-8 sm:p-12 rounded-3xl shadow-xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-800/80 text-emerald-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            <BookOpen size={14} /> Kapseret Agronomy Center
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Farmer Resources & Agronomy Guides
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
            Practical farming advice on planting, spacing, hole digging, manure preparation, grafting, pruning, pest management, and orchard establishment for fruit growers in Kenya.
          </p>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="relative w-full md:w-80">
          <Search size={18} className="absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search guides e.g. Avocado spacing, pruning..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600 text-slate-800"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? "bg-emerald-800 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Resources List */}
      <div className="space-y-8">
        {filteredResources.map((res) => (
          <article
            id={res.id}
            key={res.id}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8"
          >
            <div className="md:col-span-4 relative h-56 md:h-full rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src={res.image}
                alt={res.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-emerald-800 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {res.category}
              </div>
            </div>

            <div className="md:col-span-8 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1 font-semibold text-emerald-700">
                    <Sprout size={14} /> {res.author}
                  </span>
                  <span>•</span>
                  <span>{res.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {res.readTime}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">{res.title}</h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {res.summary}
                </p>

                <div className="text-xs text-slate-700 space-y-2 leading-relaxed pt-2 prose prose-slate max-w-none">
                  {res.content.split("\n\n").map((paragraph, idx) => (
                    <p key={idx}>{paragraph.replace(/###/g, "").trim()}</p>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <Link
                  href="/shop?tab=seedlings"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 hover:text-emerald-950"
                >
                  <span>Order Related Seedlings</span> <ArrowRight size={14} />
                </Link>

                <a
                  href={`https://wa.me/254711911690?text=Hello%20Farm%20City%20Agronomist%2C%20I%20have%20a%20question%20regarding%20${encodeURIComponent(
                    res.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare size={14} /> Ask Agronomist
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
          <p className="text-slate-500 text-sm">No farming guides found for your search query.</p>
        </div>
      )}
    </div>
  );
}
