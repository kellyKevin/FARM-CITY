"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, ShoppingBag, PhoneCall } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function FloatingActions() {
  const { totalItems } = useCart();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {/* Quick Call */}
      <a
        href="tel:0711911690"
        aria-label="Call Farm City"
        className="bg-emerald-800 hover:bg-emerald-900 text-white p-3.5 rounded-full shadow-lg hover:scale-105 transition-all flex items-center justify-center border-2 border-white"
        title="Call 0711 911 690"
      >
        <PhoneCall size={20} />
      </a>

      {/* Floating Cart (Mobile & Quick Access) */}
      <Link
        href="/cart"
        className="relative bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-lg hover:scale-105 transition-all flex items-center justify-center border-2 border-white"
        aria-label="View Shopping Cart"
        title="View Cart"
      >
        <ShoppingBag size={20} />
        {totalItems > 0 && (
          <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">
            {totalItems}
          </span>
        )}
      </Link>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/254711911690?text=Hello%20Farm%20City%2C%20I%20would%20like%20to%20order%20or%20make%20an%20enquiry."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Order"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-xl hover:scale-105 transition-all flex items-center gap-2 border-2 border-white font-bold text-sm"
      >
        <MessageSquare size={20} className="fill-white" />
        <span className="hidden sm:inline">WhatsApp Order</span>
      </a>
    </div>
  );
}
