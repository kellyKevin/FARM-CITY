"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ShoppingBag, Trash2, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useSettings } from "@/context/SettingsContext";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalAmount,
    generateWhatsAppMessage,
    justAdded,
  } = useCart();
  const { t } = useSettings();

  // Lock body scroll and enable Esc-to-close while open
  useEffect(() => {
    if (!isCartOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isCartOpen, closeCart]);

  const whatsappUrl = `https://wa.me/254711911690?text=${generateWhatsAppMessage()}`;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        aria-hidden={!isCartOpen}
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={t("drawer.title")}
        className={`fixed top-0 right-0 z-[61] h-full w-full max-w-md bg-white shadow-2xl border-l border-slate-200 flex flex-col transition-transform duration-300 ease-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <ShoppingBag size={18} />
            </span>
            <div>
              <h2 className="font-extrabold text-slate-900 text-base leading-tight">{t("drawer.title")}</h2>
              <p className="text-[11px] text-slate-500">{totalItems} {t("drawer.count")}</p>
            </div>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* "N added" banner (shown when the drawer auto-opens after an add) */}
        {justAdded > 0 && cart.length > 0 && (
          <div key={totalItems} className="mx-4 mt-3 -mb-1 flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl px-3.5 py-2.5 animate-toast">
            <CheckCircle2 size={17} className="shrink-0 text-emerald-600" />
            <span className="text-xs sm:text-[13px] font-semibold">
              {justAdded} {justAdded === 1 ? t("drawer.addedOne") : t("drawer.addedMany")}
            </span>
          </div>
        )}

        {/* Body */}
        {cart.length === 0 ? (
          <div className="flex-grow flex flex-col items-center justify-center text-center px-8 gap-3">
            <span className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center">
              <ShoppingBag size={30} />
            </span>
            <h3 className="font-bold text-slate-900">{t("drawer.empty")}</h3>
            <p className="text-xs text-slate-500 max-w-[15rem]">{t("drawer.emptyHint")}</p>
            <Link
              href="/shop"
              onClick={closeCart}
              className="mt-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-colors"
            >
              {t("drawer.startShopping")}
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-grow overflow-y-auto px-4 py-4 space-y-3">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.unit}`}
                  className="flex gap-3 items-center bg-slate-50 border border-slate-100 rounded-2xl p-3"
                >
                  <div className="relative h-16 w-16 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                    <Image
                      src={item.image || "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400"}
                      alt={item.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-grow min-w-0">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">{item.name}</h4>
                    <p className="text-[11px] text-slate-500">KSh {item.price.toLocaleString()} / {item.unit}</p>

                    <div className="flex items-center gap-2 mt-1.5">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold flex items-center justify-center hover:bg-slate-100 text-sm"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="text-xs font-bold w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold flex items-center justify-center hover:bg-slate-100 text-sm"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right shrink-0 flex flex-col items-end justify-between h-16 py-0.5">
                    <span className="font-extrabold text-emerald-800 text-sm">
                      KSh {(item.price * item.quantity).toLocaleString()}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-rose-600 hover:text-rose-800 transition-colors"
                      title={t("drawer.remove")}
                      aria-label={t("drawer.remove")}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer / summary */}
            <div className="border-t border-slate-100 p-4 space-y-3 shrink-0 bg-white">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-600">{t("drawer.subtotal")}</span>
                <span className="text-lg font-black text-emerald-800">KSh {totalAmount.toLocaleString()}</span>
              </div>

              <Link
                href="/cart"
                onClick={closeCart}
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold py-3 rounded-2xl text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <span>{t("drawer.checkout")}</span> <ArrowRight size={16} />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-2xl text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare size={15} /> {t("cart.sendWhatsapp")}
              </a>

              <button
                onClick={closeCart}
                className="w-full text-slate-500 hover:text-slate-800 text-xs font-semibold py-1 transition-colors"
              >
                {t("drawer.continue")}
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
