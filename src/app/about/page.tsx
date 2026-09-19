"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sprout, MapPin, CheckCircle2, Award, ShieldCheck } from "lucide-react";
import { useSettings } from "@/context/SettingsContext";

export default function AboutPage() {
  const { t } = useSettings();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white p-8 sm:p-12 rounded-3xl shadow-xl">
        <div className="max-w-3xl space-y-4">
          <span className="bg-emerald-700 text-emerald-200 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            {t("about.tag")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {t("about.title")}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {t("about.desc")}
          </p>
        </div>
      </div>

      {/* Brand Vision & Positioning */}
      <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl space-y-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-emerald-800 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
          <Sprout size={14} /> {t("about.vision.tag")}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          {t("about.vision.quote")}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {t("about.vision.desc")}
        </p>
      </div>

      {/* Physical Operations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Juja / Thika Operations */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
                alt="Juja Thika Fresh Produce Hub"
                fill
                className="object-cover"
              />
            </div>
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase">
              {t("about.juja.badge")}
            </span>
            <h3 className="text-2xl font-black text-slate-900">{t("about.juja.title")}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t("about.juja.desc")}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
              <MapPin size={14} className="text-emerald-700" /> {t("about.juja.loc")}
            </span>
            <Link href="/shop" className="text-xs font-extrabold text-emerald-800 hover:text-emerald-950">
              {t("about.juja.link")}
            </Link>
          </div>
        </div>

        {/* Eldoret Nursery Operations */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800"
                alt="Kapseret Eldoret Nursery"
                fill
                className="object-cover"
              />
            </div>
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase">
              {t("about.eldoret.badge")}
            </span>
            <h3 className="text-2xl font-black text-slate-900">{t("about.eldoret.title")}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t("about.eldoret.desc")}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
              <MapPin size={14} className="text-emerald-700" /> {t("about.eldoret.loc")}
            </span>
            <Link href="/seedlings" className="text-xs font-extrabold text-emerald-800 hover:text-emerald-950">
              {t("about.eldoret.link")}
            </Link>
          </div>
        </div>
      </div>

      {/* Business Commitments */}
      <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">{t("about.values.tag")}</span>
          <h2 className="text-3xl font-extrabold mt-1">{t("about.values.title")}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
          <div className="bg-slate-800/80 p-6 rounded-2xl space-y-2 border border-slate-700">
            <CheckCircle2 size={24} className="text-emerald-400" />
            <h3 className="font-bold text-white text-sm">{t("about.values.c1.title")}</h3>
            <p className="text-slate-400">{t("about.values.c1.desc")}</p>
          </div>

          <div className="bg-slate-800/80 p-6 rounded-2xl space-y-2 border border-slate-700">
            <Award size={24} className="text-emerald-400" />
            <h3 className="font-bold text-white text-sm">{t("about.values.c2.title")}</h3>
            <p className="text-slate-400">{t("about.values.c2.desc")}</p>
          </div>

          <div className="bg-slate-800/80 p-6 rounded-2xl space-y-2 border border-slate-700">
            <ShieldCheck size={24} className="text-emerald-400" />
            <h3 className="font-bold text-white text-sm">{t("about.values.c3.title")}</h3>
            <p className="text-slate-400">{t("about.values.c3.desc")}</p>
          </div>
        </div>
      </div>

      {/* CONTACT & ENQUIRY SECTION */}
      <div id="contact" className="space-y-8 pt-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase">
            {t("about.contact.tag")}
          </span>
          <h2 className="text-3xl font-black text-slate-900">{t("about.contact.title")}</h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {t("about.contact.desc")}
          </p>
        </div>

        {/* Contact Info Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href="tel:0711911690"
            className="bg-emerald-800 hover:bg-emerald-900 text-white p-5 rounded-2xl shadow-sm transition-all flex items-center gap-4"
          >
            <div className="bg-emerald-700 p-3 rounded-xl shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h32 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" /></svg>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-emerald-300">{t("about.contact.call")}</p>
              <p className="font-extrabold text-xs sm:text-sm">0711 911 690 / 0726 360 635</p>
            </div>
          </a>

          <a
            href="https://wa.me/254711911690?text=Hello%20Farm%20City%2C%20I%20would%20like%20to%20make%20an%20enquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white p-5 rounded-2xl shadow-sm transition-all flex items-center gap-4"
          >
            <div className="bg-green-700 p-3 rounded-xl shrink-0">
              💬
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-green-200">{t("about.contact.whatsapp")}</p>
              <p className="font-extrabold text-xs sm:text-sm">0711 911 690</p>
            </div>
          </a>

          <a
            href="mailto:magewesley16@gmail.com"
            className="bg-slate-900 hover:bg-slate-800 text-white p-5 rounded-2xl shadow-sm transition-all flex items-center gap-4"
          >
            <div className="bg-slate-800 p-3 rounded-xl shrink-0 text-emerald-400">
              ✉️
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">{t("about.contact.email")}</p>
              <p className="font-bold text-xs truncate max-w-[140px]">magewesley16@gmail.com</p>
            </div>
          </a>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="bg-emerald-100 p-3 rounded-xl text-emerald-800 shrink-0">
              🕒
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">{t("about.contact.hours")}</p>
              <p className="font-extrabold text-xs text-slate-800">{t("about.contact.hoursVal")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
