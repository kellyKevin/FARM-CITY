"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ShoppingBag,
  Menu,
  X,
  Phone,
  MessageSquare,
  PhoneCall
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SHOP", href: "/shop" },
    { name: "BULK & INSTITUTIONAL", href: "/bulk-institutional" },
    { name: "DELIVERY", href: "/delivery" },
    { name: "FARMER RESOURCES", href: "/farmer-resources" },
    { name: "ABOUT & CONTACT", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-emerald-100">
      {/* Top Bar */}
      <div className="bg-emerald-900 text-emerald-100 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-medium">
              <Phone size={14} className="text-emerald-400" />
              <span>Order / Inquiries: 0711 911 690 / 0726 360 635</span>
            </span>
            <span className="hidden md:inline text-emerald-400">|</span>
            <span className="hidden md:inline">Juja/Thika Hub & Kapseret Eldoret Nursery</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-emerald-800 text-emerald-200 px-2 py-0.5 rounded text-[11px] font-semibold tracking-wider uppercase">
              From Farm to You
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.jpeg"
              alt="Farm City Logo"
              width={160}
              height={56}
              className="h-14 w-auto object-contain rounded-lg group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-2.5 py-1.5 rounded-md text-xs xl:text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-emerald-700 bg-emerald-50 font-bold"
                      : "text-slate-700 hover:text-emerald-600 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/254711911690?text=Hello%20Farm%20City%2C%20I%20would%20like%20to%20make%20an%20enquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-3 py-2 rounded-lg transition-all shadow-sm"
            >
              <MessageSquare size={16} />
              <span>WhatsApp Order</span>
            </a>

            <Link
              href="/cart"
              className="relative p-2 text-slate-700 hover:text-emerald-600 bg-slate-100 hover:bg-emerald-50 rounded-xl transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingBag size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-[11px] font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-emerald-600 hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-emerald-100 px-4 pt-2 pb-6 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-emerald-700 bg-emerald-50 font-bold"
                    : "text-slate-700 hover:text-emerald-600 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 mt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="https://wa.me/254711911690?text=Hello%20Farm%20City%2C%20I%20would%20like%20to%20make%20an%20enquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-lg transition-colors text-sm"
            >
              <MessageSquare size={18} />
              <span>Order via WhatsApp</span>
            </a>
            <a
              href="tel:0711911690"
              className="w-full flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-2.5 rounded-lg transition-colors text-sm"
            >
              <PhoneCall size={18} />
              <span>Call Us: 0711 911 690</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
