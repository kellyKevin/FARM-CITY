"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  Trash2,
  ArrowLeft,
  MessageSquare,
  CheckCircle2,
  CreditCard,
  ShieldCheck
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalAmount, generateWhatsAppMessage } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"mpesa" | "card" | "whatsapp">("mpesa");
  const [mpesaPhone, setMpesaPhone] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setOrderPlaced(true);
    clearCart();
  };

  const whatsappMessageUrl = `https://wa.me/254711911690?text=${generateWhatsAppMessage({
    name: customerName,
    location: deliveryLocation,
    note: notes
  })}`;

  if (orderPlaced) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="bg-emerald-50 border border-emerald-200 p-8 sm:p-12 rounded-3xl space-y-4 shadow-sm">
          <CheckCircle2 size={64} className="text-emerald-600 mx-auto" />
          <h1 className="text-3xl font-black text-slate-900">Order Placed Successfully!</h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you for ordering with Farm City! Our logistics team will process your order and contact you at <strong>{phone || "your number"}</strong> for delivery confirmation.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/254711911690?text=${encodeURIComponent(`Hello Farm City, I just placed an order on the website under name: ${customerName || "Customer"}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-xs flex items-center justify-center gap-2"
            >
              <MessageSquare size={16} /> Confirm on WhatsApp
            </a>
            <Link
              href="/shop"
              className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-3 rounded-xl transition-colors text-xs"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="bg-white border border-slate-200 p-12 rounded-3xl shadow-sm space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
            <ShoppingBag size={32} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Your Shopping Cart is Empty</h1>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Explore our fresh produce or seedling catalogue to add items to your cart.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/shop"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-xl text-xs transition-colors"
            >
              Shop Fresh Produce
            </Link>
            <Link
              href="/shop?tab=seedlings"
              className="bg-emerald-900 hover:bg-slate-900 text-white font-bold px-6 py-3 rounded-xl text-xs transition-colors"
            >
              Browse Seedlings
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">Your Shopping Cart</h1>
          <p className="text-xs text-slate-500">Review items and proceed with guest checkout or WhatsApp order.</p>
        </div>
        <Link
          href="/shop"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950"
        >
          <ArrowLeft size={16} /> Continue Shopping
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Cart Items List */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm divide-y divide-slate-100">
            {cart.map((item) => (
              <div key={`${item.id}-${item.unit}`} className="p-4 sm:p-6 flex items-center gap-4">
                <div className="relative h-20 w-20 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src={item.image || "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-grow space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">{item.name}</h3>
                  <p className="text-xs text-slate-500">
                    KSh {item.price} / {item.unit}
                  </p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold flex items-center justify-center hover:bg-slate-200 text-sm"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold w-6 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold flex items-center justify-center hover:bg-slate-200 text-sm"
                  >
                    +
                  </button>
                </div>

                {/* Total */}
                <div className="text-right pl-2">
                  <p className="font-extrabold text-emerald-800 text-sm sm:text-base">
                    KSh {(item.price * item.quantity).toLocaleString()}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-xs font-semibold flex items-center gap-1 mt-1 ml-auto"
                    title="Remove item"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 flex items-center justify-between text-xs text-emerald-900 font-semibold">
            <span>Prefer ordering via WhatsApp?</span>
            <a
              href={whatsappMessageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl flex items-center gap-1.5 font-bold transition-colors"
            >
              <MessageSquare size={14} /> Send Cart to WhatsApp
            </a>
          </div>
        </div>

        {/* Checkout Form & Summary */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-3">
              Delivery & Checkout Details
            </h2>

            <form onSubmit={handlePlaceOrder} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jane Wanjiku"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0711 911 690"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Delivery Town / Address *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Juja High Point / Eldoret / Thika"
                  value={deliveryLocation}
                  onChange={(e) => setDeliveryLocation(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Delivery Notes / Instructions</label>
                <input
                  type="text"
                  placeholder="e.g. Call upon arrival, prefer morning delivery..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                />
              </div>

              {/* Payment Method */}
              <div className="space-y-2 pt-2">
                <label className="block text-xs font-bold text-slate-700">Payment Option *</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("mpesa")}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all flex flex-col items-center gap-1 ${
                      paymentMethod === "mpesa"
                        ? "bg-emerald-800 text-white border-emerald-800"
                        : "bg-slate-50 text-slate-700 border-slate-200"
                    }`}
                  >
                    <span>M-Pesa Express</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all flex flex-col items-center gap-1 ${
                      paymentMethod === "card"
                        ? "bg-emerald-800 text-white border-emerald-800"
                        : "bg-slate-50 text-slate-700 border-slate-200"
                    }`}
                  >
                    <CreditCard size={14} />
                    <span>Card / Gateways</span>
                  </button>
                </div>
              </div>

              {paymentMethod === "mpesa" && (
                <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100 space-y-2 text-xs">
                  <label className="block text-[11px] font-bold text-slate-700">M-Pesa Phone Number:</label>
                  <input
                    type="tel"
                    placeholder="07XX XXX XXX"
                    value={mpesaPhone || phone}
                    onChange={(e) => setMpesaPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                  />
                  <p className="text-[10px] text-slate-500">
                    An STK push or payment prompt will be initiated upon order confirmation.
                  </p>
                </div>
              )}

              {/* Order Summary Box */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal:</span>
                  <span className="font-bold text-slate-800">KSh {totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Estimated Delivery Fee:</span>
                  <span className="font-semibold text-emerald-800">Calculated on confirmation</span>
                </div>
                <div className="flex justify-between text-slate-900 font-extrabold text-base border-t border-slate-200 pt-2 mt-1">
                  <span>Total Estimated:</span>
                  <span className="text-emerald-800">KSh {totalAmount.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-black py-3.5 rounded-2xl shadow-md transition-all text-sm flex items-center justify-center gap-2"
              >
                <ShieldCheck size={18} />
                <span>CONFIRM & PLACE ORDER</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
