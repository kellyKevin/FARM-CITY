"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Truck, MapPin, Clock, ShieldCheck, CheckCircle2, Phone, MessageSquare, Box } from "lucide-react";
import { getStoredDeliveryZones } from "@/lib/storage";
import { DeliveryZone } from "@/data/mockData";
import { useSettings } from "@/context/SettingsContext";

export default function DeliveryPage() {
  const { t } = useSettings();
  const [zones, setZones] = useState<DeliveryZone[]>([]);

  useEffect(() => {
    setZones(getStoredDeliveryZones());
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-slate-900 text-white p-8 sm:p-12 rounded-3xl shadow-xl">
        <div className="max-w-3xl space-y-4">
          <span className="bg-emerald-700 text-emerald-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {t("del.tag")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {t("del.title")}
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
            {t("del.desc")}
          </p>
        </div>
      </div>

      {/* Delivery Process */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <Truck size={20} />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">{t("del.p1.title")}</h3>
          <p className="text-xs text-slate-600">{t("del.p1.desc")}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <MapPin size={20} />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">{t("del.p2.title")}</h3>
          <p className="text-xs text-slate-600">{t("del.p2.desc")}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <Clock size={20} />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">{t("del.p3.title")}</h3>
          <p className="text-xs text-slate-600">{t("del.p3.desc")}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <ShieldCheck size={20} />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">{t("del.p4.title")}</h3>
          <p className="text-xs text-slate-600">{t("del.p4.desc")}</p>
        </div>
      </div>

      {/* Transportation Visual Showcase */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase">
            {t("del.log.tag")}
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-2">
            {t("del.log.title")}
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            {t("del.log.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="relative h-64 w-full bg-slate-100">
              <Image
                src="/images/seedlings/transportation-tree-tomato.jpg"
                alt="Safe Crated Transportation of Seedlings & Produce"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-emerald-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                {t("del.log.c1.badge")}
              </div>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Box size={18} className="text-emerald-700" />
                <span>{t("del.log.c1.title")}</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t("del.log.c1.desc")}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="relative h-64 w-full bg-slate-100">
              <Image
                src="/images/seedlings/transportation-citrus.jpg"
                alt="Agricultural Product Delivery Logistics Vehicles"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-emerald-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                {t("del.log.c2.badge")}
              </div>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Truck size={18} className="text-emerald-700" />
                <span>{t("del.log.c2.title")}</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t("del.log.c2.desc")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Coverage Table */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{t("del.table.title")}</h2>
            <p className="text-xs text-slate-500">{t("del.table.subtitle")}</p>
          </div>
          <span className="bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-200 self-start sm:self-auto">
            {t("del.table.live")}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-700 uppercase text-[10px] tracking-wider border-b border-slate-200">
              <tr>
                <th className="p-3.5 font-bold">{t("del.table.h1")}</th>
                <th className="p-3.5 font-bold">{t("del.table.h2")}</th>
                <th className="p-3.5 font-bold">{t("del.table.h3")}</th>
                <th className="p-3.5 font-bold">{t("del.table.h4")}</th>
                <th className="p-3.5 font-bold text-right">{t("del.table.h5")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {zones.map((zone) => (
                <tr key={zone.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 font-bold text-slate-900">{zone.county}</td>
                  <td className="p-3.5 text-slate-600">{zone.towns.join(", ")}</td>
                  <td className="p-3.5">
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold text-[10px]">
                      {t(`zone.${zone.type}`)}
                    </span>
                  </td>
                  <td className="p-3.5 text-slate-700">{zone.deliveryTime}</td>
                  <td className="p-3.5 text-right font-extrabold text-emerald-800 text-sm">
                    KSh {zone.fee.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delivery Policy & Contact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-emerald-900 text-white p-6 rounded-2xl space-y-3 col-span-1 md:col-span-2">
          <h3 className="font-extrabold text-lg flex items-center gap-2">
            <CheckCircle2 size={20} className="text-emerald-400" />
            <span>{t("del.commit.title")}</span>
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            {t("del.commit.desc")}
          </p>
          <div className="pt-2 flex items-center gap-4 text-xs font-semibold">
            <Link href="/shop" className="underline text-emerald-300 hover:text-white">
              {t("del.commit.link1")}
            </Link>
            <Link href="/seedlings" className="underline text-emerald-300 hover:text-white">
              {t("del.commit.link2")}
            </Link>
          </div>
        </div>

        <div className="bg-slate-100 p-6 rounded-2xl space-y-3">
          <h3 className="font-bold text-slate-900 text-sm">{t("del.q.title")}</h3>
          <p className="text-xs text-slate-600">{t("del.q.desc")}</p>
          <div className="space-y-2 pt-1">
            <a
              href="tel:0701645029"
              className="w-full bg-emerald-800 text-white font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-2 hover:bg-emerald-900 transition-colors"
            >
              <Phone size={14} /> {t("del.q.call")}
            </a>
            <a
              href="https://wa.me/254701645029?text=Hello%20Farm%20City%2C%20I%20have%20a%20delivery%20inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-600 text-white font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
            >
              <MessageSquare size={14} /> {t("del.q.whatsapp")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
