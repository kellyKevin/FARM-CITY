"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Search, ShoppingBag, MessageSquare, CheckCircle2, Filter } from "lucide-react";
import { getStoredProducts } from "@/lib/storage";
import { Product } from "@/data/mockData";
import { useCart } from "@/context/CartContext";

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");
  const [selectedProductModal, setSelectedProductModal] = useState<Product | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<string>("");
  const [modalQty, setModalQty] = useState<number>(1);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const { addToCart } = useCart();

  const [activeTab, setActiveTab] = useState<"all" | "fresh" | "seedlings">("all");

  useEffect(() => {
    const all = getStoredProducts();
    setProducts(all);
  }, []);

  const categories = [
    "All",
    "Fresh Produce",
    "Seedlings",
    "Vegetables",
    "Leafy Greens",
    "Fruits",
    "Fruit Seedlings",
    "Tree & Nut Seedlings",
    "Coffee",
    "Herbs & Spices"
  ];

  const filteredProducts = products.filter((p) => {
    const matchesTab =
      activeTab === "all" ? true : p.category === activeTab;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.scientificName && p.scientificName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());

    let matchesCategory = true;
    if (selectedSubCategory === "Fresh Produce") {
      matchesCategory = p.category === "fresh";
    } else if (selectedSubCategory === "Seedlings") {
      matchesCategory = p.category === "seedlings";
    } else if (selectedSubCategory !== "All") {
      matchesCategory = p.subCategory === selectedSubCategory;
    }

    return matchesTab && matchesSearch && matchesCategory;
  });

  const handleOpenModal = (product: Product) => {
    setSelectedProductModal(product);
    setSelectedUnit(product.unit);
    setModalQty(1);
  };

  const handleAddFromModal = () => {
    if (!selectedProductModal) return;
    addToCart({
      id: selectedProductModal.id,
      name: selectedProductModal.name,
      category: selectedProductModal.category,
      price: selectedProductModal.price,
      unit: selectedUnit || selectedProductModal.unit,
      quantity: modalQty,
      image: selectedProductModal.image
    });
    setToastMessage(`Added ${modalQty} (${selectedUnit}) of ${selectedProductModal.name} to cart!`);
    setTimeout(() => setToastMessage(null), 3000);
    setSelectedProductModal(null);
  };

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

  const generateWhatsAppLink = (product: Product) => {
    const msg = encodeURIComponent(
      `Hello Farm City, I would like to order fresh produce:\n\nProduct: ${product.name}\nQuantity: 1 ${product.unit}\nPrice: KSh ${product.price}\n\nPlease confirm delivery to my location.`
    );
    return `https://wa.me/254711911690?text=${msg}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 bg-emerald-800 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce border border-emerald-600">
          <CheckCircle2 size={20} className="text-emerald-300" />
          <span className="font-semibold text-sm">{toastMessage}</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <span className="bg-emerald-800/80 text-emerald-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-600/40">
            Juja Fresh Hub & Kapseret Eldoret Nursery
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Farm City Store & Seedling Catalogue
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
            Order fresh fruits, vegetables, and tubers for home or business delivery, or buy certified grafted Hass avocado, passion fruit, macadamia, coffee, and herb seedlings for your farm.
          </p>

          {/* Tab Selector */}
          <div className="pt-2 flex flex-wrap gap-2">
            <button
              onClick={() => { setActiveTab("all"); setSelectedSubCategory("All"); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "all"
                  ? "bg-white text-emerald-950 shadow-md"
                  : "bg-emerald-800/60 text-emerald-100 hover:bg-emerald-800"
              }`}
            >
              All Products ({products.length})
            </button>
            <button
              onClick={() => { setActiveTab("fresh"); setSelectedSubCategory("All"); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "fresh"
                  ? "bg-white text-emerald-950 shadow-md"
                  : "bg-emerald-800/60 text-emerald-100 hover:bg-emerald-800"
              }`}
            >
              🥑 Fresh Produce ({products.filter(p => p.category === "fresh").length})
            </button>
            <button
              onClick={() => { setActiveTab("seedlings"); setSelectedSubCategory("All"); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "seedlings"
                  ? "bg-white text-emerald-950 shadow-md"
                  : "bg-emerald-800/60 text-emerald-100 hover:bg-emerald-800"
              }`}
            >
              🌱 Quality Seedlings ({products.filter(p => p.category === "seedlings").length})
            </button>
          </div>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search size={18} className="absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search produce e.g. Tomatoes, Cabbage..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600 text-slate-800"
          />
        </div>

        {/* Subcategories */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          <Filter size={16} className="text-slate-400 shrink-0 hidden sm:block" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedSubCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedSubCategory === cat
                  ? "bg-emerald-700 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div
                className="relative h-52 w-full bg-slate-100 cursor-pointer overflow-hidden"
                onClick={() => handleOpenModal(product)}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-emerald-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                  {product.subCategory}
                </div>
              </div>

              <div className="p-5 space-y-3">
                <div onClick={() => handleOpenModal(product)} className="cursor-pointer">
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-emerald-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">{product.description}</p>
                </div>

                <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-xl space-y-1">
                  <p className="flex justify-between">
                    <span>Stock:</span>
                    <span className="font-semibold text-emerald-700">{product.stockStatus}</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Delivery:</span>
                    <span className="font-medium text-slate-700">Juja / Thika Same-Day</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0 space-y-3">
              <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                <div>
                  <span className="text-xs text-slate-400">Price: </span>
                  <span className="text-lg font-black text-emerald-800">KSh {product.price}</span>
                  <span className="text-xs text-slate-500"> / {product.unit}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleQuickAdd(product)}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1"
                >
                  <ShoppingBag size={14} />
                  <span>Add Cart</span>
                </button>

                <a
                  href={generateWhatsAppLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1"
                >
                  <MessageSquare size={14} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
          <p className="text-slate-500 text-sm">No produce items found matching your filter criteria.</p>
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedProductModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95">
            <div className="relative h-64 w-full bg-slate-100">
              <Image
                src={selectedProductModal.image}
                alt={selectedProductModal.name}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedProductModal(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white rounded-full p-2 transition-colors text-xs font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                  {selectedProductModal.subCategory}
                </span>
                <h2 className="text-2xl font-black text-slate-900 mt-2">{selectedProductModal.name}</h2>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{selectedProductModal.description}</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl space-y-3 border border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Unit Price:</span>
                  <span className="text-xl font-black text-emerald-800">
                    KSh {selectedProductModal.price} / {selectedProductModal.unit}
                  </span>
                </div>

                {/* Available Unit Options */}
                {selectedProductModal.availableUnits && (
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Select Unit / Packaging:</label>
                    <div className="flex flex-wrap gap-2">
                      {selectedProductModal.availableUnits.map((u) => (
                        <button
                          key={u}
                          onClick={() => setSelectedUnit(u)}
                          className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                            selectedUnit === u
                              ? "bg-emerald-700 text-white border-emerald-700"
                              : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          {u}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Select Quantity:</label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setModalQty(Math.max(1, modalQty - 1))}
                      className="w-9 h-9 rounded-xl bg-slate-200 text-slate-800 font-bold flex items-center justify-center text-lg hover:bg-slate-300"
                    >
                      -
                    </button>
                    <span className="font-black text-base text-slate-900 w-8 text-center">{modalQty}</span>
                    <button
                      onClick={() => setModalQty(modalQty + 1)}
                      className="w-9 h-9 rounded-xl bg-slate-200 text-slate-800 font-bold flex items-center justify-center text-lg hover:bg-slate-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleAddFromModal}
                  className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold py-3 rounded-2xl transition-colors text-xs sm:text-sm flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={18} /> Add to Cart (KSh {(selectedProductModal.price * modalQty).toLocaleString()})
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
