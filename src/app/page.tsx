"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Sprout, CheckCircle2, MessageSquare, Leaf, Layers, Truck, Award } from "lucide-react";
import { useSettings } from "@/context/SettingsContext";

export default function Home() {
  const { t } = useSettings();

  return (
    <div className="pb-12">

      {/* 1. REDESIGNED HERO SECTION (Structured Two-Column Desktop Layout) */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 text-white overflow-hidden py-12 md:py-20 border-b border-emerald-800/50">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column (Brand, Headline, Description, CTAs) */}
            <div className="lg:col-span-7 space-y-6 text-left animate-fade-up">
              {/* Brand Statement Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-emerald-300 text-xs font-bold tracking-wider uppercase">
                <Sprout size={16} className="text-emerald-400" />
                <span>{t("home.badge")}</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                {t("home.h1.line1")} <br />
                <span className="text-emerald-400">{t("home.h1.line2")}</span> <br />
                {t("home.h1.line3")}
              </h1>

              {/* Supporting Description */}
              <p className="text-emerald-100 text-sm sm:text-base max-w-2xl leading-relaxed font-light">
                {t("home.description")}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-start gap-3.5 pt-2">
                <Link
                  href="/shop"
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 text-xs sm:text-sm"
                >
                  <ShoppingBag size={18} />
                  <span>{t("action.shopNow")}</span>
                </Link>

                <Link
                  href="/seedlings"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-3.5 rounded-xl border border-white/20 backdrop-blur-sm transition-all flex items-center gap-2 text-xs sm:text-sm"
                >
                  <Sprout size={18} className="text-emerald-400" />
                  <span>{t("action.buySeedlings")}</span>
                </Link>

                <a
                  href="https://wa.me/254701645029?text=Hello%20Farm%20City%2C%20I%20would%20like%20to%20place%20an%20order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-500 text-white font-bold px-5 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2 text-xs sm:text-sm"
                >
                  <MessageSquare size={18} />
                  <span>{t("action.orderWhatsapp")}</span>
                </a>
              </div>

              {/* Ordering Reassurance */}
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-emerald-200">
                <span className="inline-flex items-center gap-1.5 bg-emerald-800/60 border border-emerald-600/40 px-3 py-1.5 rounded-full">
                  <CheckCircle2 size={13} className="text-emerald-400" /> {t("home.chip.noAccount")}
                </span>
                <span className="inline-flex items-center gap-1.5 bg-emerald-800/60 border border-emerald-600/40 px-3 py-1.5 rounded-full">
                  <CheckCircle2 size={13} className="text-emerald-400" /> {t("home.chip.orderMinutes")}
                </span>
                <span className="inline-flex items-center gap-1.5 bg-emerald-800/60 border border-emerald-600/40 px-3 py-1.5 rounded-full">
                  <CheckCircle2 size={13} className="text-emerald-400" /> {t("home.chip.pay")}
                </span>
              </div>

              {/* Key Trust Badges */}
              <div className="pt-6 border-t border-emerald-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-emerald-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>{t("home.trust.jujaHub")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>{t("home.trust.eldoret")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>{t("home.trust.counties")}</span>
                </div>
              </div>
            </div>

            {/* Right Column (Visual Composition) */}
            <div className="lg:col-span-5 relative">
              <div className="relative bg-emerald-950/90 border border-emerald-700/60 p-5 sm:p-6 rounded-3xl shadow-2xl backdrop-blur-md space-y-5">
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-inner">
                  <Image
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
                    alt="Farm City Fresh Produce and Seedlings Supply"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-white text-xs font-semibold bg-emerald-600/90 px-3 py-1 rounded-full shadow-sm">
                      {t("home.panel.hub")}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="bg-emerald-900/70 border border-emerald-700/50 p-3.5 rounded-xl">
                    <p className="text-base sm:text-lg font-extrabold text-emerald-300">{t("home.panel.juja")}</p>
                    <p className="text-[11px] text-slate-300">{t("home.panel.jujaSub")}</p>
                  </div>
                  <div className="bg-emerald-900/70 border border-emerald-700/50 p-3.5 rounded-xl">
                    <p className="text-base sm:text-lg font-extrabold text-emerald-300">{t("home.panel.eldoret")}</p>
                    <p className="text-[11px] text-slate-300">{t("home.panel.eldoretSub")}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Marketing value propositions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <Leaf size={22} />, title: t("home.value.fresh.title"), desc: t("home.value.fresh.desc") },
            { icon: <Layers size={22} />, title: t("home.value.variety.title"), desc: t("home.value.variety.desc") },
            { icon: <Truck size={22} />, title: t("home.value.delivery.title"), desc: t("home.value.delivery.desc") },
            { icon: <Award size={22} />, title: t("home.value.quality.title"), desc: t("home.value.quality.desc") },
          ].map((v, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md lift p-5 flex flex-col gap-2"
            >
              <span className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                {v.icon}
              </span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{v.title}</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
