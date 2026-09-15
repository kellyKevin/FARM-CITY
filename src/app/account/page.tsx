"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  User,
  ShoppingBag,
  MapPin,
  Heart,
  LogOut,
  CheckCircle2,
  Package,
  Edit2,
  Save,
  Plus
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { getStoredProducts } from "@/lib/storage";
import { Product } from "@/data/mockData";

export default function AccountPage() {
  const router = useRouter();
  const { currentUser, logout, updateProfile, userOrders, favorites } = useAuth();

  const [activeTab, setActiveTab] = useState<"profile" | "orders" | "addresses" | "favorites">("profile");
  const [isEditing, setIsEditing] = useState(false);

  // Editable Profile fields
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [town, setTown] = useState("");
  const [county, setCounty] = useState("");
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (currentUser) {
      setFullName(currentUser.fullName || "");
      setPhone(currentUser.phone || "");
      setEmail(currentUser.email || "");
      setTown(currentUser.town || "");
      setCounty(currentUser.county || "");
    }
    setAllProducts(getStoredProducts());
  }, [currentUser]);

  if (!currentUser) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="bg-white border border-slate-200 p-8 sm:p-12 rounded-3xl shadow-sm space-y-4">
          <User size={48} className="text-emerald-700 mx-auto" />
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">Please Log In</h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Log in to view your Farm City account profile, track active produce orders, or update your saved delivery address.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/login"
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-3 rounded-xl text-xs transition-colors"
            >
              Log In to Account
            </Link>
            <Link
              href="/register"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-3 rounded-xl text-xs transition-colors"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      fullName,
      phone,
      email,
      town,
      county,
      deliveryAddress: town || county ? `${town}${town && county ? ", " : ""}${county}` : "",
    });
    setIsEditing(false);
    setToastMsg("Profile updated successfully!");
    setTimeout(() => setToastMsg(null), 3000);
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const favoriteProducts = allProducts.filter((p) => favorites.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-24 right-6 z-50 bg-emerald-800 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce border border-emerald-600">
          <CheckCircle2 size={20} className="text-emerald-300" />
          <span className="font-semibold text-sm">{toastMsg}</span>
        </div>
      )}

      {/* Account Dashboard Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white p-8 rounded-3xl shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="bg-emerald-800/80 text-emerald-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Customer Dashboard
          </span>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight">Welcome back, {currentUser.fullName}!</h1>
          <p className="text-xs sm:text-sm text-emerald-100">
            Account ID: <span className="font-mono text-emerald-300">{currentUser.id}</span> • Member since {currentUser.createdAt}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-emerald-800/80 hover:bg-rose-950 text-white hover:text-rose-200 border border-emerald-700/60 font-bold px-5 py-2.5 rounded-xl transition-all text-xs flex items-center gap-2 self-start md:self-auto"
        >
          <LogOut size={16} />
          <span>Log Out</span>
        </button>
      </div>

      {/* Main Grid: Sidebar Tabs + Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Navigation Tabs (Sidebar) */}
        <div className="lg:col-span-3 space-y-2">
          <div className="bg-white p-3 rounded-3xl border border-slate-200 shadow-sm space-y-1">
            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all text-left ${
                activeTab === "profile"
                  ? "bg-emerald-800 text-white shadow-md"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <User size={18} />
              <span>Profile Information</span>
            </button>

            <button
              onClick={() => setActiveTab("orders")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold transition-all text-left ${
                activeTab === "orders"
                  ? "bg-emerald-800 text-white shadow-md"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <ShoppingBag size={18} />
                <span>My Orders</span>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                activeTab === "orders" ? "bg-emerald-700 text-white" : "bg-slate-200 text-slate-800"
              }`}>
                {userOrders.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("addresses")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all text-left ${
                activeTab === "addresses"
                  ? "bg-emerald-800 text-white shadow-md"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <MapPin size={18} />
              <span>Saved Delivery Addresses</span>
            </button>

            <button
              onClick={() => setActiveTab("favorites")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold transition-all text-left ${
                activeTab === "favorites"
                  ? "bg-emerald-800 text-white shadow-md"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <Heart size={18} />
                <span>Favourite Products</span>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                activeTab === "favorites" ? "bg-emerald-700 text-white" : "bg-slate-200 text-slate-800"
              }`}>
                {favorites.length}
              </span>
            </button>
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="lg:col-span-9">
          {/* TAB 1: PROFILE */}
          {activeTab === "profile" && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Personal Profile</h2>
                  <p className="text-xs text-slate-500">Manage your contact information and details.</p>
                </div>
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="inline-flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold px-4 py-2 rounded-xl text-xs transition-colors"
                  >
                    <Edit2 size={14} />
                    <span>Edit Profile</span>
                  </button>
                )}
              </div>

              {isEditing ? (
                <form onSubmit={handleSaveProfile} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Town / Location</label>
                      <input
                        type="text"
                        value={town}
                        onChange={(e) => setTown(e.target.value)}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="bg-slate-100 text-slate-700 font-bold px-5 py-2.5 rounded-xl text-xs hover:bg-slate-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-emerald-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs hover:bg-emerald-900 flex items-center gap-1.5"
                    >
                      <Save size={16} /> Save Changes
                    </button>
                  </div>
                </form>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                    <span className="text-slate-400 font-medium">Full Name</span>
                    <p className="font-bold text-slate-900 text-sm">{currentUser.fullName}</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                    <span className="text-slate-400 font-medium">Phone Number</span>
                    <p className="font-bold text-slate-900 text-sm">{currentUser.phone}</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                    <span className="text-slate-400 font-medium">Email Address</span>
                    <p className="font-bold text-slate-900 text-sm">{currentUser.email || "Not specified"}</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                    <span className="text-slate-400 font-medium">Default Delivery Town</span>
                    <p className="font-bold text-slate-900 text-sm">{currentUser.town || currentUser.county || "Not set"}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: ORDERS */}
          {activeTab === "orders" && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-900">Order History</h2>
                <p className="text-xs text-slate-500">Track and view past fresh produce & seedling orders.</p>
              </div>

              {userOrders.length === 0 ? (
                <div className="text-center py-12 space-y-4">
                  <Package size={48} className="text-slate-300 mx-auto" />
                  <p className="text-slate-600 text-xs">No orders placed under this account yet.</p>
                  <Link
                    href="/shop"
                    className="inline-block bg-emerald-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs hover:bg-emerald-900 transition-colors"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {userOrders.map((order) => (
                    <div key={order.id} className="border border-slate-200 rounded-2xl p-5 space-y-4 bg-slate-50/50">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                        <div>
                          <span className="font-mono font-extrabold text-emerald-800 text-sm">{order.id}</span>
                          <span className="text-slate-400 text-xs ml-3">• {order.date}</span>
                        </div>
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-3 py-1 rounded-full self-start sm:self-auto">
                          {order.status}
                        </span>
                      </div>

                      <div className="space-y-2">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between text-xs text-slate-700">
                            <span>
                              {item.name} ({item.quantity} {item.unit})
                            </span>
                            <span className="font-semibold">KSh {(item.price * item.quantity).toLocaleString()}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                        <span className="text-slate-500">
                          Destination: <strong className="text-slate-800">{order.deliveryAddress}</strong>
                        </span>
                        <span className="font-black text-emerald-800 text-sm">
                          Total: KSh {order.totalAmount.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: ADDRESSES */}
          {activeTab === "addresses" && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-900">Saved Delivery Information</h2>
                <p className="text-xs text-slate-500">Your default address is automatically filled during checkout.</p>
              </div>

              <div className="bg-emerald-50/70 p-6 rounded-2xl border border-emerald-100 space-y-3">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                  <MapPin size={18} className="text-emerald-700" />
                  <span>Primary Delivery Location</span>
                </div>

                <div className="text-xs text-slate-700 space-y-1">
                  <p><strong>Recipient:</strong> {currentUser.fullName}</p>
                  <p><strong>Phone:</strong> {currentUser.phone}</p>
                  <p><strong>Town / Area:</strong> {currentUser.town || "Not specified"}</p>
                  <p><strong>County:</strong> {currentUser.county || "Not specified"}</p>
                </div>

                <button
                  onClick={() => { setActiveTab("profile"); setIsEditing(true); }}
                  className="mt-2 text-xs font-bold text-emerald-800 hover:underline inline-block"
                >
                  Edit Address Details →
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: FAVORITES */}
          {activeTab === "favorites" && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-900">Saved & Favourite Products</h2>
                <p className="text-xs text-slate-500">Quickly reorder your preferred produce or seedlings.</p>
              </div>

              {favoriteProducts.length === 0 ? (
                <div className="text-center py-12 space-y-3">
                  <Heart size={48} className="text-slate-300 mx-auto" />
                  <p className="text-slate-600 text-xs">No saved products yet. Heart products in the shop to bookmark them here.</p>
                  <Link
                    href="/shop"
                    className="inline-block bg-emerald-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs hover:bg-emerald-900 transition-colors"
                  >
                    Explore Produce Shop
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {favoriteProducts.map((p) => (
                    <div key={p.id} className="border border-slate-200 rounded-2xl p-4 flex gap-4 items-center">
                      <div className="relative h-16 w-16 bg-slate-100 rounded-xl overflow-hidden shrink-0">
                        <Image src={p.image} alt={p.name} fill className="object-cover" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-slate-900 text-sm">{p.name}</h4>
                        <p className="text-xs text-emerald-800 font-black">KSh {p.price} / {p.unit}</p>
                      </div>
                      <Link
                        href={p.category === "seedlings" ? "/seedlings" : "/shop"}
                        className="bg-emerald-100 text-emerald-800 p-2 rounded-xl text-xs font-bold hover:bg-emerald-800 hover:text-white transition-colors"
                      >
                        <Plus size={16} />
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
