"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Truck, MapPin, Clock, ShieldCheck, CheckCircle2, Phone, MessageSquare } from "lucide-react";
import { getStoredDeliveryZones } from "@/lib/storage";
import { DeliveryZone } from "@/data/mockData";

export default function DeliveryPage() {
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
            Order Today • We Prepare • We Deliver
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            FARM CITY DELIVERY
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
            Delivery is a core part of Farm City operations. We deliver fresh produce directly to homes and businesses in Juja, Thika, and surrounding areas, and dispatch high-quality seedlings countrywide to all 47 counties in Kenya.
          </p>
        </div>
      </div>

      {/* Delivery Process */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <Truck size={20} />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Juja & Thika Fresh Hub</h3>
          <p className="text-xs text-slate-600">Local same-day & next-day fresh fruit and vegetable home delivery.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <MapPin size={20} />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Kapseret Eldoret Nursery</h3>
          <p className="text-xs text-slate-600">Nursery pickup and organized countrywide seedling dispatch.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <Clock size={20} />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Scheduled Deliveries</h3>
          <p className="text-xs text-slate-600">Weekly and biweekly contracted deliveries for schools & hotels.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <ShieldCheck size={20} />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Safe Packaging</h3>
          <p className="text-xs text-slate-600">Crated packaging ensuring fresh produce and seedlings arrive intact.</p>
        </div>
      </div>

      {/* Coverage Table */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Delivery Zones & Fee Structure</h2>
            <p className="text-xs text-slate-500">Current delivery locations, timetables, and estimated charges across Kenya.</p>
          </div>
          <span className="bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-200 self-start sm:self-auto">
            Live Rates
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-700 uppercase text-[10px] tracking-wider border-b border-slate-200">
              <tr>
                <th className="p-3.5 font-bold">County / Zone</th>
                <th className="p-3.5 font-bold">Towns Served</th>
                <th className="p-3.5 font-bold">Category</th>
                <th className="p-3.5 font-bold">Estimated Time</th>
                <th className="p-3.5 font-bold text-right">Delivery Charge</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {zones.map((zone) => (
                <tr key={zone.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 font-bold text-slate-900">{zone.county}</td>
                  <td className="p-3.5 text-slate-600">{zone.towns.join(", ")}</td>
                  <td className="p-3.5">
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold text-[10px]">
                      {zone.type}
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
            <span>Farm City Delivery Commitment</span>
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            We ensure produce is selected fresh on the day of dispatch. For seedlings, plants are hardened off, roots secured, and packed in ventilated protective boxes before transport.
          </p>
          <div className="pt-2 flex items-center gap-4 text-xs font-semibold">
            <Link href="/shop" className="underline text-emerald-300 hover:text-white">
              Order Fresh Produce Now
            </Link>
            <Link href="/seedlings" className="underline text-emerald-300 hover:text-white">
              Order Seedlings Nationwide
            </Link>
          </div>
        </div>

        <div className="bg-slate-100 p-6 rounded-2xl space-y-3">
          <h3 className="font-bold text-slate-900 text-sm">Have Delivery Questions?</h3>
          <p className="text-xs text-slate-600">Need delivery to an unlisted area or bulk transport arrangement?</p>
          <div className="space-y-2 pt-1">
            <a
              href="tel:0711911690"
              className="w-full bg-emerald-800 text-white font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-2 hover:bg-emerald-900 transition-colors"
            >
              <Phone size={14} /> Call 0711 911 690
            </a>
            <a
              href="https://wa.me/254711911690?text=Hello%20Farm%20City%2C%20I%20have%20a%20delivery%20inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-600 text-white font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
            >
              <MessageSquare size={14} /> WhatsApp Inquiries
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
