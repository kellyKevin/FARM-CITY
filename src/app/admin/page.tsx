"use client";

import React, { useState, useEffect } from "react";
import {
  Package,
  FileText,
  Truck,
  BookOpen,
  Plus,
  Trash2,
  Edit3,
  CheckCircle2,
  Save,
  X
} from "lucide-react";
import {
  getStoredProducts,
  saveProducts,
  getStoredBulkQuotes,
  getStoredDeliveryZones,
  getStoredResources
} from "@/lib/storage";
import { Product, BulkQuoteRequest, DeliveryZone, FarmerResource } from "@/data/mockData";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"products" | "quotes" | "zones" | "resources">("products");

  // Data states
  const [products, setProducts] = useState<Product[]>([]);
  const [quotes, setQuotes] = useState<BulkQuoteRequest[]>([]);
  const [zones, setZones] = useState<DeliveryZone[]>([]);
  const [resources, setResources] = useState<FarmerResource[]>([]);

  // Editing modal / form state for Products
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    setProducts(getStoredProducts());
    setQuotes(getStoredBulkQuotes());
    setZones(getStoredDeliveryZones());
    setResources(getStoredResources());
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Product CRUD
  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    let updatedProducts: Product[];
    if (isAddingProduct) {
      updatedProducts = [editingProduct, ...products];
      showToast("Product created successfully!");
    } else {
      updatedProducts = products.map((p) => (p.id === editingProduct.id ? editingProduct : p));
      showToast("Product updated successfully!");
    }

    setProducts(updatedProducts);
    saveProducts(updatedProducts);
    setEditingProduct(null);
    setIsAddingProduct(false);
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      const updated = products.filter((p) => p.id !== id);
      setProducts(updated);
      saveProducts(updated);
      showToast("Product deleted!");
    }
  };

  const handleStartAddProduct = () => {
    setIsAddingProduct(true);
    setEditingProduct({
      id: "prod-" + Date.now(),
      name: "",
      category: "fresh",
      subCategory: "Vegetables",
      price: 100,
      unit: "kg",
      stockStatus: "In Stock",
      stockCount: 100,
      deliveryInfo: "Same-day / Next-day delivery",
      description: "",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 bg-emerald-800 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-emerald-600 animate-bounce">
          <CheckCircle2 size={20} className="text-emerald-300" />
          <span className="font-semibold text-sm">{toastMessage}</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="bg-emerald-800 text-emerald-200 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            Farm City Backend Dashboard
          </span>
          <h1 className="text-3xl font-black mt-2">Website Administration</h1>
          <p className="text-xs text-slate-300 mt-1">
            Manage product inventory, prices, bulk quotation enquiries, delivery charges, and farmer articles.
          </p>
        </div>
      </div>

      {/* Stats Summary Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-emerald-100 p-3 rounded-xl text-emerald-800">
            <Package size={24} />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400">TOTAL PRODUCTS</p>
            <p className="text-2xl font-black text-slate-900">{products.length}</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-emerald-100 p-3 rounded-xl text-emerald-800">
            <FileText size={24} />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400">QUOTATION REQUESTS</p>
            <p className="text-2xl font-black text-slate-900">{quotes.length}</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-emerald-100 p-3 rounded-xl text-emerald-800">
            <Truck size={24} />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400">ACTIVE ZONES</p>
            <p className="text-2xl font-black text-slate-900">{zones.length}</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-emerald-100 p-3 rounded-xl text-emerald-800">
            <BookOpen size={24} />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400">FARMER GUIDES</p>
            <p className="text-2xl font-black text-slate-900">{resources.length}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3 overflow-x-auto">
        <button
          onClick={() => setActiveTab("products")}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === "products"
              ? "bg-emerald-800 text-white shadow-md"
              : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
          }`}
        >
          <Package size={16} /> Manage Products & Prices
        </button>

        <button
          onClick={() => setActiveTab("quotes")}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === "quotes"
              ? "bg-emerald-800 text-white shadow-md"
              : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
          }`}
        >
          <FileText size={16} /> Bulk Quotation Enquiries
        </button>

        <button
          onClick={() => setActiveTab("zones")}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === "zones"
              ? "bg-emerald-800 text-white shadow-md"
              : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
          }`}
        >
          <Truck size={16} /> Delivery Zones
        </button>

        <button
          onClick={() => setActiveTab("resources")}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === "resources"
              ? "bg-emerald-800 text-white shadow-md"
              : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
          }`}
        >
          <BookOpen size={16} /> Farmer Resources
        </button>
      </div>

      {/* TAB 1: PRODUCTS MANAGER */}
      {activeTab === "products" && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Product Inventory & Catalogue</h2>
              <p className="text-xs text-slate-500">Edit prices, stock levels, or create new produce/seedling items.</p>
            </div>
            <button
              onClick={handleStartAddProduct}
              className="bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 self-start sm:self-auto"
            >
              <Plus size={16} /> Add New Product
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-700 uppercase text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="p-3 font-bold">Product Name</th>
                  <th className="p-3 font-bold">Category</th>
                  <th className="p-3 font-bold">Price (KSh)</th>
                  <th className="p-3 font-bold">Unit</th>
                  <th className="p-3 font-bold">Stock Status</th>
                  <th className="p-3 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {products.map((prod) => (
                  <tr key={prod.id} className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-slate-900">{prod.name}</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                        prod.category === "fresh" ? "bg-emerald-100 text-emerald-800" : "bg-emerald-900 text-emerald-200"
                      }`}>
                        {prod.category} ({prod.subCategory})
                      </span>
                    </td>
                    <td className="p-3 font-extrabold text-emerald-800">KSh {prod.price}</td>
                    <td className="p-3 text-slate-600">{prod.unit}</td>
                    <td className="p-3">
                      <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-semibold text-[11px]">
                        {prod.stockStatus}
                      </span>
                    </td>
                    <td className="p-3 text-right space-x-2">
                      <button
                        onClick={() => {
                          setIsAddingProduct(false);
                          setEditingProduct(prod);
                        }}
                        className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg"
                        title="Edit Product"
                      >
                        <Edit3 size={14} />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(prod.id)}
                        className="p-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg"
                        title="Delete Product"
                      >
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: QUOTATIONS VIEWER */}
      {activeTab === "quotes" && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-slate-900">Bulk & Institutional Quotation Requests</h2>
            <p className="text-xs text-slate-500">Submissions received from schools, hotels, and commercial farmers.</p>
          </div>

          {quotes.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-xs">
              No bulk quotation requests received yet.
            </div>
          ) : (
            <div className="space-y-4">
              {quotes.map((q) => (
                <div key={q.id} className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-3 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-2">
                    <div>
                      <span className="bg-emerald-800 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase mr-2">
                        {q.type}
                      </span>
                      <strong className="text-slate-900 text-sm">{q.organizationName || "Individual Farmer"}</strong>
                    </div>
                    <span className="text-[11px] text-slate-400">Submitted: {q.createdAt}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <p className="text-slate-400 font-medium">Contact Person:</p>
                      <p className="font-bold text-slate-800">{q.contactPerson}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium">Phone / WhatsApp:</p>
                      <p className="font-bold text-slate-800">{q.phone} / {q.whatsapp || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium">Location:</p>
                      <p className="font-bold text-slate-800">{q.town}, {q.county}</p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-700">Products Required:</p>
                    <p className="text-slate-800 mt-1">{q.productsRequired}</p>
                    {q.estimatedQuantities && (
                      <p className="text-slate-500 text-[11px] mt-1">Quantity/Notes: {q.estimatedQuantities}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 3: DELIVERY ZONES */}
      {activeTab === "zones" && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-slate-900">Delivery Zones & Rates</h2>
            <p className="text-xs text-slate-500">Configured delivery tariffs across Kenya.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {zones.map((z) => (
              <div key={z.id} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-slate-900 text-sm">{z.county}</h3>
                  <span className="text-emerald-800 font-extrabold text-sm">KSh {z.fee}</span>
                </div>
                <p className="text-slate-600">Towns: {z.towns.join(", ")}</p>
                <p className="text-slate-400 text-[11px]">Est. Time: {z.deliveryTime}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: FARMER RESOURCES */}
      {activeTab === "resources" && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-slate-900">Farmer Agronomy Resources</h2>
            <p className="text-xs text-slate-500">Published articles in the knowledge center.</p>
          </div>

          <div className="space-y-4">
            {resources.map((r) => (
              <div key={r.id} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-slate-900 text-sm">{r.title}</h3>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    {r.category}
                  </span>
                </div>
                <p className="text-slate-600 line-clamp-2">{r.summary}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* EDIT / ADD PRODUCT MODAL */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-200 overflow-y-auto max-h-[90vh]">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-base">
                {isAddingProduct ? "Add New Product" : "Edit Product"}
              </h3>
              <button
                onClick={() => setEditingProduct(null)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Product Name *</label>
                <input
                  type="text"
                  required
                  value={editingProduct.name}
                  onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Category</label>
                  <select
                    value={editingProduct.category}
                    onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value as "fresh" | "seedlings" })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option value="fresh">Fresh Produce</option>
                    <option value="seedlings">Seedling</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Subcategory</label>
                  <input
                    type="text"
                    value={editingProduct.subCategory || ""}
                    onChange={(e) => setEditingProduct({ ...editingProduct, subCategory: e.target.value as Product["subCategory"] })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Price (KSh) *</label>
                  <input
                    type="number"
                    required
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct({ ...editingProduct, price: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Selling Unit *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. kg, bunch, seedling"
                    value={editingProduct.unit}
                    onChange={(e) => setEditingProduct({ ...editingProduct, unit: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Stock Status</label>
                <select
                  value={editingProduct.stockStatus}
                  onChange={(e) => setEditingProduct({ ...editingProduct, stockStatus: e.target.value as Product["stockStatus"] })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                >
                  <option value="In Stock">In Stock</option>
                  <option value="Low Stock">Low Stock</option>
                  <option value="Seasonal">Seasonal</option>
                  <option value="Coming Soon">Coming Soon</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Image URL</label>
                <input
                  type="text"
                  value={editingProduct.image}
                  onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Description</label>
                <textarea
                  rows={3}
                  value={editingProduct.description}
                  onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                ></textarea>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-2.5 rounded-xl transition-colors text-xs flex items-center justify-center gap-1.5"
                >
                  <Save size={16} /> Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
