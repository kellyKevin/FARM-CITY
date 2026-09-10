import React from "react";
import Link from "next/link";
import { Sprout, Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 text-white p-2 rounded-lg">
                <Sprout size={24} />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                FARM <span className="text-emerald-500">CITY</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Farm City brings together fresh produce delivery and high-quality seedling supply across Kenya. From our Juja/Thika fresh hub and Kapseret Eldoret nursery directly to your farm, home, or business.
            </p>
            <p className="text-xs font-semibold text-emerald-400">
              Tagline: From Farm to You • Agriculture Made Easy
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/254711911690"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-700 hover:bg-emerald-600 text-white p-2.5 rounded-lg text-xs flex items-center gap-2 transition-colors font-semibold"
              >
                <MessageSquare size={16} /> WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/shop" className="hover:text-emerald-400 transition-colors">
                  Fresh Produce Shop
                </Link>
              </li>
              <li>
                <Link href="/seedlings" className="hover:text-emerald-400 transition-colors">
                  Quality Seedlings Catalogue
                </Link>
              </li>
              <li>
                <Link href="/bulk-institutional" className="hover:text-emerald-400 transition-colors">
                  Bulk & Institutional Supply
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:text-emerald-400 transition-colors">
                  Delivery Information & Coverage
                </Link>
              </li>
              <li>
                <Link href="/farmer-resources" className="hover:text-emerald-400 transition-colors">
                  Farmer Resources & Guides
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About Farm City Operations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact Us & Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Physical Hubs
            </h3>
            <div className="space-y-4 text-xs">
              <div>
                <p className="font-semibold text-emerald-400 flex items-center gap-1.5 mb-1">
                  <MapPin size={14} /> Farm City – Juja / Thika
                </p>
                <p className="text-slate-400 pl-5">
                  Fresh Produce & Local Distribution Hub, Kiambu County
                </p>
              </div>
              <div>
                <p className="font-semibold text-emerald-400 flex items-center gap-1.5 mb-1">
                  <MapPin size={14} /> Seedling Nursery – Kapseret, Eldoret
                </p>
                <p className="text-slate-400 pl-5">
                  Physical Nursery Operation & Countrywide Dispatch, Uasin Gishu County
                </p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Contact & Hours
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <Phone size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">0711 911 690 / 0726 360 635</p>
                  <p className="text-slate-400 text-[11px]">Wesley Mage Mujenyi / Farm City Team</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-emerald-400 shrink-0" />
                <span>magewesley16@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">Monday - Saturday: 7:00 AM - 6:30 PM</p>
                  <p className="text-slate-400 text-[11px]">Sunday: Deliveries & Online Orders Active</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Farm City. All rights reserved. Registered Agricultural Supplier in Kenya.</p>
          <div className="flex items-center gap-6">
            <span>Freshness • Reliability • Quality</span>
            <Link href="/admin" className="hover:text-slate-300 transition-colors">
              Staff Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
