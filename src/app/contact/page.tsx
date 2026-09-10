"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, Navigation } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 text-white p-8 sm:p-12 rounded-3xl shadow-xl">
        <div className="max-w-3xl space-y-4">
          <span className="bg-emerald-700 text-emerald-200 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Contact Farm City
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            We&apos;re Here to Help You Grow
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
            Get in touch with Farm City for fresh produce orders, seedling inquiries, bulk institutional supply quotations, or technical agronomy advice.
          </p>
        </div>
      </div>

      {/* Direct Action Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <a
          href="tel:0711911690"
          className="bg-emerald-800 hover:bg-emerald-900 text-white p-5 rounded-2xl shadow-sm transition-all flex items-center gap-4"
        >
          <div className="bg-emerald-700 p-3 rounded-xl">
            <Phone size={22} />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-emerald-300">CALL US DIRECTLY</p>
            <p className="font-extrabold text-sm">0711 911 690</p>
          </div>
        </a>

        <a
          href="https://wa.me/254711911690?text=Hello%20Farm%20City%2C%20I%20would%20like%20to%20make%20an%20enquiry"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white p-5 rounded-2xl shadow-sm transition-all flex items-center gap-4"
        >
          <div className="bg-green-700 p-3 rounded-xl">
            <MessageSquare size={22} />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-green-200">WHATSAPP CHAT</p>
            <p className="font-extrabold text-sm">0711 911 690 / 0726 360 635</p>
          </div>
        </a>

        <a
          href="mailto:magewesley16@gmail.com"
          className="bg-slate-900 hover:bg-slate-800 text-white p-5 rounded-2xl shadow-sm transition-all flex items-center gap-4"
        >
          <div className="bg-slate-800 p-3 rounded-xl">
            <Mail size={22} className="text-emerald-400" />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400">SEND EMAIL</p>
            <p className="font-bold text-xs truncate max-w-[140px]">magewesley16@gmail.com</p>
          </div>
        </a>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-emerald-100 p-3 rounded-xl text-emerald-800">
            <Clock size={22} />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400">BUSINESS HOURS</p>
            <p className="font-extrabold text-xs text-slate-800">Mon - Sat: 7am - 6:30pm</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">
            Send an Online Enquiry
          </h2>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-3">
              <CheckCircle2 size={44} className="text-emerald-600 mx-auto" />
              <h3 className="text-xl font-bold text-slate-900">Message Received!</h3>
              <p className="text-xs text-slate-600">
                Thank you for contacting Farm City. A representative will get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-emerald-800 text-white font-bold text-xs px-6 py-2 rounded-xl hover:bg-emerald-900 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Kamau"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0711 911 690"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Enquiry Subject</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Fresh Produce Order">Fresh Produce Order</option>
                    <option value="Seedlings Order">Seedlings Order</option>
                    <option value="Bulk / Institutional Supply">Bulk / Institutional Supply</option>
                    <option value="Kapseret Nursery Visit">Kapseret Nursery Visit</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Message *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us what you need..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold py-3.5 rounded-2xl shadow-md transition-colors text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <Send size={16} />
                <span>SEND ENQUIRY</span>
              </button>
            </form>
          )}
        </div>

        {/* Physical Operations Locations */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2 border-b border-slate-100 pb-3">
              <MapPin className="text-emerald-700" size={20} />
              <span>Physical Locations & Operations</span>
            </h3>

            {/* Location 1 */}
            <div className="space-y-2 bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100">
              <span className="bg-emerald-800 text-white text-[10px] font-bold px-2.5 py-0.5 rounded uppercase">
                Juja / Thika Operation
              </span>
              <h4 className="font-bold text-slate-900 text-sm">Farm City Fresh Distribution Hub</h4>
              <p className="text-xs text-slate-600">Juja Town & Thika Road, Kiambu County</p>
              <p className="text-[11px] text-slate-500 font-medium">Contact: Wesley Mage Mujenyi (0711 911 690)</p>
              <a
                href="https://maps.google.com/?q=Juja+Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:underline pt-1"
              >
                <Navigation size={12} /> Get Directions (Google Maps)
              </a>
            </div>

            {/* Location 2 */}
            <div className="space-y-2 bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100">
              <span className="bg-emerald-800 text-white text-[10px] font-bold px-2.5 py-0.5 rounded uppercase">
                Kapseret Eldoret Nursery
              </span>
              <h4 className="font-bold text-slate-900 text-sm">Farm City Seedling Nursery</h4>
              <p className="text-xs text-slate-600">Kapseret, Eldoret, Uasin Gishu County</p>
              <p className="text-[11px] text-slate-500 font-medium">WhatsApp / Sales: 0726 360 635 / 0711 911 690</p>
              <a
                href="https://maps.google.com/?q=Kapseret+Eldoret+Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:underline pt-1"
              >
                <Navigation size={12} /> Get Directions (Google Maps)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
