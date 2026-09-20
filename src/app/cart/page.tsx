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
  ShieldCheck
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useSettings } from "@/context/SettingsContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalAmount, generateWhatsAppMessage } = useCart();
  const { t } = useSettings();

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [placedOrderNumber, setPlacedOrderNumber] = useState("");
  const [orderWhatsappUrl, setOrderWhatsappUrl] = useState("");

  const buildOrderWhatsAppUrl = (orderNumber: string) => {
    const lines: (string | false)[] = [
      `*Farm City Order ${orderNumber}*`,
      "",
      "Items:",
      ...cart.map(
        (i, idx) =>
          `${idx + 1}. ${i.name} — ${i.quantity} ${i.unit} (KSh ${(i.price * i.quantity).toLocaleString()})`
      ),
      "",
      `Subtotal: KSh ${totalAmount.toLocaleString()}`,
      `Name: ${customerName || "-"}`,
      `Phone: ${phone || "-"}`,
      `Delivery: ${deliveryLocation || "-"}`,
      !!notes && `Notes: ${notes}`,
      "",
      "Please confirm stock, delivery fee and payment. (No payment made online.)",
    ];
    const message = lines.filter((l): l is string => Boolean(l)).join("\n");
    return `https://wa.me/254711911690?text=${encodeURIComponent(message)}`;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    const orderNumber = "FC-" + Math.floor(1000 + Math.random() * 9000);
    const url = buildOrderWhatsAppUrl(orderNumber);
    setPlacedOrderNumber(orderNumber);
    setOrderWhatsappUrl(url);
    // Send the order to WhatsApp so the team receives it instantly
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
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
      <div className="max-w-3xl mx-auto px-4 py-16 text-left space-y-6">
        <div className="bg-emerald-50 border border-emerald-200 p-8 sm:p-12 rounded-3xl space-y-4 shadow-sm">
          <CheckCircle2 size={56} className="text-emerald-700" />
          <div>
            <span className="text-xs font-mono font-extrabold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase">
              {t("cart.ref")} {placedOrderNumber}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">{t("cart.received")}</h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
            {t("cart.thanks.a")} <strong>{phone || t("cart.yourNumber")}</strong> {t("cart.thanks.b")}
          </p>
          <p className="text-[11px] text-slate-500 max-w-md leading-relaxed">
            {t("cart.whatsappHint")}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={orderWhatsappUrl || `https://wa.me/254711911690?text=${encodeURIComponent(`Hello Farm City, I placed order ${placedOrderNumber} on the website under name: ${customerName || "Customer"}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-xs flex items-center justify-center gap-2"
            >
              <MessageSquare size={16} /> {t("cart.confirmWhatsapp")}
            </a>
            <Link
              href="/shop"
              className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-3 rounded-xl transition-colors text-xs text-center"
            >
              {t("cart.backToShop")}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-left space-y-6">
        <div className="bg-white border border-slate-200 p-8 sm:p-12 rounded-3xl shadow-sm space-y-4">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center">
            <ShoppingBag size={28} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">{t("cart.empty.title")}</h1>
          <p className="text-xs text-slate-500 max-w-sm">
            {t("cart.empty.desc")}
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-3 rounded-xl text-xs transition-colors"
            >
              {t("cart.empty.shop")}
            </Link>
            <Link
              href="/seedlings"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-3 rounded-xl text-xs transition-colors"
            >
              {t("cart.empty.seedlings")}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-4 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">{t("cart.title")}</h1>
          <p className="text-xs text-slate-500">{t("cart.subtitle")}</p>
        </div>
        <Link
          href="/shop"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 self-start sm:self-auto"
        >
          <ArrowLeft size={16} /> {t("cart.continue")}
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
                    className="text-rose-600 hover:text-rose-800 text-xs font-semibold flex items-center gap-1 mt-1 ml-auto"
                    title="Remove item"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-emerald-900 font-semibold">
            <span>{t("cart.preferWhatsapp")}</span>
            <a
              href={whatsappMessageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-xl flex items-center justify-center gap-1.5 font-bold transition-colors"
            >
              <MessageSquare size={14} /> {t("cart.sendWhatsapp")}
            </a>
          </div>
        </div>

        {/* Checkout Form & Summary */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-3">
              {t("cart.deliveryDetails")}
            </h2>

            <form onSubmit={handlePlaceOrder} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">{t("cart.fullName")}</label>
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
                <label className="block text-xs font-bold text-slate-700 mb-1">{t("cart.phone")}</label>
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
                <label className="block text-xs font-bold text-slate-700 mb-1">{t("cart.address")}</label>
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
                <label className="block text-xs font-bold text-slate-700 mb-1">{t("cart.notes")}</label>
                <input
                  type="text"
                  placeholder={t("cart.notesPlaceholder")}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                />
              </div>

              {/* Order Summary Box */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>{t("cart.subtotal")}</span>
                  <span className="font-bold text-slate-800">KSh {totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>{t("cart.estFee")}</span>
                  <span className="font-semibold text-emerald-800">{t("cart.calcConfirm")}</span>
                </div>
                <div className="flex justify-between text-slate-900 font-extrabold text-base border-t border-slate-200 pt-2 mt-1">
                  <span>{t("cart.totalEst")}</span>
                  <span className="text-emerald-800">KSh {totalAmount.toLocaleString()}</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 leading-relaxed">
                {t("cart.noPayment")}
              </p>

              <button
                type="submit"
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-black py-3.5 rounded-2xl shadow-md transition-all text-sm flex items-center justify-center gap-2"
              >
                <ShieldCheck size={18} />
                <span>{t("cart.placeOrder")}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
