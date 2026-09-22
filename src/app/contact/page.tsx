"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, Navigation } from "lucide-react";
import { useSettings } from "@/context/SettingsContext";

export default function ContactPage() {
  const { t } = useSettings();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const buildWhatsAppUrl = () => {
    const lines: (string | false)[] = [
      "*Farm City — Website Enquiry*",
      "",
      `Name: ${name}`,
      `Phone / WhatsApp: ${phone}`,
      !!email && `Email: ${email}`,
      `Subject: ${subject}`,
      "",
      "Message:",
      message,
    ];
    const body = lines.filter((l): l is string => Boolean(l)).join("\n");
    return `https://wa.me/254701645029?text=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppUrl();
    setWhatsappUrl(url);
    // Send the enquiry to WhatsApp so our team receives it instantly
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 text-white p-8 sm:p-12 rounded-3xl shadow-xl">
        <div className="max-w-3xl space-y-4">
          <span className="bg-emerald-700 text-emerald-200 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            {t("contact.tag")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {t("contact.title")}
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
            {t("contact.desc")}
          </p>
        </div>
      </div>

      {/* Direct Action Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <a
          href="tel:0701645029"
          className="bg-emerald-800 hover:bg-emerald-900 text-white p-5 rounded-2xl shadow-sm transition-all flex items-center gap-4"
        >
          <div className="bg-emerald-700 p-3 rounded-xl">
            <Phone size={22} />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-emerald-300">{t("about.contact.call")}</p>
            <p className="font-extrabold text-sm">0701 645 029</p>
          </div>
        </a>

        <a
          href="https://wa.me/254701645029?text=Hello%20Farm%20City%2C%20I%20would%20like%20to%20make%20an%20enquiry"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white p-5 rounded-2xl shadow-sm transition-all flex items-center gap-4"
        >
          <div className="bg-green-700 p-3 rounded-xl">
            <MessageSquare size={22} />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-green-200">{t("about.contact.whatsapp")}</p>
            <p className="font-extrabold text-sm">0701 645 029</p>
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
            <p className="text-[10px] uppercase font-bold text-slate-400">{t("about.contact.email")}</p>
            <p className="font-bold text-xs truncate max-w-[140px]">magewesley16@gmail.com</p>
          </div>
        </a>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-emerald-100 p-3 rounded-xl text-emerald-800">
            <Clock size={22} />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400">{t("about.contact.hours")}</p>
            <p className="font-extrabold text-xs text-slate-800">{t("about.contact.hoursVal")}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">
            {t("contact.form.title")}
          </h2>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-3">
              <CheckCircle2 size={44} className="text-emerald-600 mx-auto" />
              <h3 className="text-xl font-bold text-slate-900">{t("contact.form.received")}</h3>
              <p className="text-xs text-slate-600">
                {t("contact.form.thanks")}
              </p>
              <p className="text-[11px] text-slate-500 max-w-md mx-auto">
                {t("contact.form.whatsappHint")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-colors flex items-center gap-2"
                  >
                    <MessageSquare size={16} /> {t("contact.form.sendWhatsapp")}
                  </a>
                )}
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-emerald-800 text-white font-bold text-xs px-6 py-2.5 rounded-xl hover:bg-emerald-900 transition-colors"
                >
                  {t("contact.form.another")}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">{t("contact.form.name")}</label>
                  <input
                    type="text"
                    required
                    placeholder={t("contact.form.namePh")}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">{t("contact.form.phone")}</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0701 645 029"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">{t("contact.form.email")}</label>
                  <input
                    type="email"
                    placeholder={t("contact.form.emailPh")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">{t("contact.form.subject")}</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                  >
                    <option value="General Inquiry">{t("contact.form.subj.general")}</option>
                    <option value="Fresh Produce Order">{t("contact.form.subj.produce")}</option>
                    <option value="Seedlings Order">{t("contact.form.subj.seedlings")}</option>
                    <option value="Bulk / Institutional Supply">{t("contact.form.subj.bulk")}</option>
                    <option value="Kapseret Nursery Visit">{t("contact.form.subj.visit")}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">{t("contact.form.message")}</label>
                <textarea
                  required
                  rows={4}
                  placeholder={t("contact.form.messagePh")}
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
                <span>{t("contact.form.send")}</span>
              </button>
            </form>
          )}
        </div>

        {/* Physical Operations Locations */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2 border-b border-slate-100 pb-3">
              <MapPin className="text-emerald-700" size={20} />
              <span>{t("contact.loc.title")}</span>
            </h3>

            {/* Location 1 */}
            <div className="space-y-2 bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100">
              <span className="bg-emerald-800 text-white text-[10px] font-bold px-2.5 py-0.5 rounded uppercase">
                {t("contact.loc1.badge")}
              </span>
              <h4 className="font-bold text-slate-900 text-sm">{t("contact.loc1.title")}</h4>
              <p className="text-xs text-slate-600">{t("contact.loc1.addr")}</p>
              <p className="text-[11px] text-slate-500 font-medium">{t("contact.loc1.contact")}</p>
              <a
                href="https://maps.google.com/?q=Juja+Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:underline pt-1"
              >
                <Navigation size={12} /> {t("contact.directions")}
              </a>
            </div>

            {/* Location 2 */}
            <div className="space-y-2 bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100">
              <span className="bg-emerald-800 text-white text-[10px] font-bold px-2.5 py-0.5 rounded uppercase">
                {t("contact.loc2.badge")}
              </span>
              <h4 className="font-bold text-slate-900 text-sm">{t("contact.loc2.title")}</h4>
              <p className="text-xs text-slate-600">{t("contact.loc2.addr")}</p>
              <p className="text-[11px] text-slate-500 font-medium">{t("contact.loc2.contact")}</p>
              <a
                href="https://maps.google.com/?q=Kapseret+Eldoret+Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:underline pt-1"
              >
                <Navigation size={12} /> {t("contact.directions")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
