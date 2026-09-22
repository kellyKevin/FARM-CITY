"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { useSettings } from "@/context/SettingsContext";

export default function Footer() {
  const { t } = useSettings();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.jpeg"
                alt="Farm City Logo"
                width={180}
                height={64}
                className="h-14 sm:h-16 w-auto object-contain rounded-xl bg-white p-1.5 ring-1 ring-slate-200/40 shadow-sm"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">{t("footer.brand")}</p>
            <p className="text-xs font-semibold text-emerald-400">{t("footer.tagline")}</p>
            <p className="text-[11px] text-slate-500 leading-relaxed">{t("footer.order")}</p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/254701645029"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-700 hover:bg-emerald-600 text-white p-2.5 rounded-lg text-xs flex items-center gap-2 transition-colors font-semibold"
              >
                <MessageSquare size={16} /> {t("footer.whatsappChat")}
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/shop" className="hover:text-emerald-400 transition-colors">
                  {t("footer.link.shop")}
                </Link>
              </li>
              <li>
                <Link href="/bulk-institutional" className="hover:text-emerald-400 transition-colors">
                  {t("footer.link.bulk")}
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:text-emerald-400 transition-colors">
                  {t("footer.link.delivery")}
                </Link>
              </li>
              <li>
                <Link href="/farmer-resources" className="hover:text-emerald-400 transition-colors">
                  {t("footer.link.resources")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  {t("footer.link.about")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              {t("footer.hubs")}
            </h3>
            <div className="space-y-4 text-xs">
              <div>
                <p className="font-semibold text-emerald-400 flex items-center gap-1.5 mb-1">
                  <MapPin size={14} /> {t("footer.hub.juja")}
                </p>
                <p className="text-slate-400 pl-5">{t("footer.hub.jujaSub")}</p>
              </div>
              <div>
                <p className="font-semibold text-emerald-400 flex items-center gap-1.5 mb-1">
                  <MapPin size={14} /> {t("footer.hub.eldoret")}
                </p>
                <p className="text-slate-400 pl-5">{t("footer.hub.eldoretSub")}</p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <Phone size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">0711 911 690 / 0726 360 635</p>
                  <p className="text-slate-400 text-[11px]">{t("footer.contact.team")}</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-emerald-400 shrink-0" />
                <span>magewesley16@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">{t("footer.hours.weekdays")}</p>
                  <p className="text-slate-400 text-[11px]">{t("footer.hours.sunday")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Farm City. {t("footer.rights")}</p>
          <div className="flex items-center gap-6">
            <span>{t("footer.values")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
