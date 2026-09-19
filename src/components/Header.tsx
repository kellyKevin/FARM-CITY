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
  PhoneCall,
  Sparkles,
  Sun,
  Moon,
  Languages
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useSettings } from "@/context/SettingsContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();
  const { theme, toggleTheme, language, toggleLanguage, t } = useSettings();

  const navLinks = [
    { key: "nav.home", href: "/" },
    { key: "nav.shop", href: "/shop" },
    { key: "nav.bulk", href: "/bulk-institutional" },
    { key: "nav.delivery", href: "/delivery" },
    { key: "nav.resources", href: "/farmer-resources" },
    { key: "nav.about", href: "/about" },
  ];

  const controlBtn =
    "p-2.5 rounded-xl border border-slate-200 bg-slate-100 text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors flex items-center justify-center";

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-emerald-100">
      {/* Customer Attraction Announcement Bar */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 sm:px-6 border-b border-emerald-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="bg-emerald-500 text-slate-950 font-black px-2 py-0.5 rounded text-[10px] tracking-wider uppercase flex items-center gap-1">
              <Sparkles size={12} /> {t("bar.offer")}
            </span>
            <span className="font-medium text-[11px] sm:text-xs">{t("bar.message")}</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a
              href="tel:0711911690"
              className="hover:text-emerald-300 transition-colors flex items-center gap-1 font-semibold"
            >
              <Phone size={13} className="text-emerald-400" />
              <span>0711 911 690</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.jpeg"
              alt="Farm City Logo"
              width={160}
              height={56}
              className="h-12 sm:h-14 w-auto object-contain rounded-lg group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.key}
                  href={link.href}
                  className={`px-2.5 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-emerald-800 bg-emerald-50 font-bold"
                      : "text-slate-700 hover:text-emerald-700 hover:bg-slate-50"
                  }`}
                >
                  {t(link.key)}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`${controlBtn} gap-1.5 text-xs font-bold`}
              title={t("toggle.language")}
              aria-label={t("toggle.language")}
            >
              <Languages size={18} />
              <span className="uppercase">{language}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={controlBtn}
              title={theme === "dark" ? t("toggle.theme.light") : t("toggle.theme.dark")}
              aria-label={theme === "dark" ? t("toggle.theme.light") : t("toggle.theme.dark")}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* WhatsApp Quick Link */}
            <a
              href="https://wa.me/254711911690?text=Hello%20Farm%20City%2C%20I%20would%20like%20to%20make%20an%20enquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-3 py-2 rounded-xl transition-all shadow-sm"
              title="Instant WhatsApp Order"
            >
              <MessageSquare size={16} />
              <span>{t("action.whatsapp")}</span>
            </a>

            {/* Shopping Cart Button */}
            <Link
              href="/cart"
              className="relative p-2.5 text-slate-700 hover:text-emerald-700 bg-slate-100 hover:bg-emerald-50 rounded-xl transition-colors border border-slate-200"
              aria-label="Shopping Cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-emerald-600 text-white text-[11px] font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-emerald-700 hover:bg-slate-100 focus:outline-none border border-slate-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-emerald-100 px-4 pt-3 pb-6 space-y-2 shadow-xl">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t("nav.menu")}</span>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-xl text-xs font-bold transition-colors ${
                    isActive
                      ? "text-emerald-800 bg-emerald-50"
                      : "text-slate-700 hover:text-emerald-700 hover:bg-slate-50"
                  }`}
                >
                  {t(link.key)}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="https://wa.me/254711911690?text=Hello%20Farm%20City%2C%20I%20would%20like%20to%20make%20an%20enquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-xl transition-colors text-xs"
            >
              <MessageSquare size={16} />
              <span>{t("action.whatsappOrder")}</span>
            </a>
            <a
              href="tel:0711911690"
              className="w-full flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-2.5 rounded-xl transition-colors text-xs"
            >
              <PhoneCall size={16} />
              <span>{t("action.call")}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
