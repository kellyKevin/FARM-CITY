"use client";

import React, { useState } from "react";
import { CheckCircle2, Building2, Sprout, Send, PhoneCall, ShieldCheck } from "lucide-react";
import { saveBulkQuote } from "@/lib/storage";

export default function BulkInstitutionalPage() {
  const [formType, setFormType] = useState<"institutional" | "seedlings">("institutional");
  const [organizationName, setOrganizationName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [county, setCounty] = useState("");
  const [town, setTown] = useState("");
  const [productsRequired, setProductsRequired] = useState("");
  const [estimatedQuantities, setEstimatedQuantities] = useState("");
  const [frequencyOfSupply, setFrequencyOfSupply] = useState("Weekly");
  const [preferredDeliveryDate, setPreferredDeliveryDate] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveBulkQuote({
      type: formType,
      organizationName,
      contactPerson,
      phone,
      whatsapp,
      email,
      county,
      town,
      productsRequired,
      estimatedQuantities,
      frequencyOfSupply,
      preferredDeliveryDate,
      additionalInfo
    });
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white p-8 sm:p-12 rounded-3xl shadow-xl">
        <div className="max-w-3xl space-y-4">
          <span className="bg-emerald-700/80 text-emerald-200 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Farm City Commercial & Bulk Supply
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Bulk Produce & Commercial Seedling Quotations
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            We supply fresh vegetables, fruits, and meat/dairy produce in bulk to schools, hotels, restaurants, hospitals, caterers, and corporate cafeterias. We also fulfill commercial fruit orchard orders (500 to 10,000+ seedlings) nationwide.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Quotation Form */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <button
              onClick={() => setFormType("institutional")}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
                formType === "institutional"
                  ? "bg-emerald-800 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <Building2 size={18} />
              <span>Bulk Fresh Produce Quote</span>
            </button>

            <button
              onClick={() => setFormType("seedlings")}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
                formType === "seedlings"
                  ? "bg-emerald-800 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <Sprout size={18} />
              <span>Bulk Seedlings Quote</span>
            </button>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4">
              <CheckCircle2 size={48} className="text-emerald-600 mx-auto" />
              <h3 className="text-2xl font-bold text-slate-900">Quotation Request Submitted!</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Thank you for contacting Farm City. Our commercial team will review your specifications and issue a formal price catalogue / invoice shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-emerald-800 text-white font-bold text-xs px-6 py-2.5 rounded-xl hover:bg-emerald-900 transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {formType === "institutional" ? "Organization / Business Name *" : "Farm / Project Name"}
                  </label>
                  <input
                    type="text"
                    required={formType === "institutional"}
                    placeholder={formType === "institutional" ? "e.g. ERCEC School / Hotel Sunshine" : "e.g. Green Valley Farm"}
                    value={organizationName}
                    onChange={(e) => setOrganizationName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Contact Person Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Wesley Mage / Procurement Officer"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0711 911 690"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp Number</label>
                  <input
                    type="tel"
                    placeholder="e.g. 0726 360 635"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. procurement@organization.co.ke"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">County *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kiambu / Uasin Gishu / Nairobi"
                    value={county}
                    onChange={(e) => setCounty(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Town / Specific Delivery Location *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Juja, Thika Road / Eldoret Town"
                    value={town}
                    onChange={(e) => setTown(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                  />
                </div>

                {formType === "institutional" ? (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Supply Frequency</label>
                    <select
                      value={frequencyOfSupply}
                      onChange={(e) => setFrequencyOfSupply(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                    >
                      <option value="Weekly">Weekly Delivery</option>
                      <option value="Biweekly">Biweekly Delivery</option>
                      <option value="Monthly">Monthly Delivery</option>
                      <option value="Occasional">Occasional / As Required</option>
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Planting / Delivery Date</label>
                    <input
                      type="date"
                      value={preferredDeliveryDate}
                      onChange={(e) => setPreferredDeliveryDate(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Products Required *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder={
                    formType === "institutional"
                      ? "e.g. Cabbage 100kg, Sukuma Wiki 80kg, Tomatoes 50kg, Onions 50kg, Spinach 30kg..."
                      : "e.g. Grafted Hass Avocado 500 seedlings, Macadamia 300 seedlings, Passion Fruit 200 seedlings..."
                  }
                  value={productsRequired}
                  onChange={(e) => setProductsRequired(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Estimated Quantities & Budget / Notes
                </label>
                <input
                  type="text"
                  placeholder="e.g. 500 kg per week / 1,000 seedlings total"
                  value={estimatedQuantities}
                  onChange={(e) => setEstimatedQuantities(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Additional Delivery Requirements or Specifications
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Specific delivery days, packaging preferences, tax compliance documents required..."
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold py-3.5 rounded-2xl shadow-md transition-all text-sm flex items-center justify-center gap-2"
              >
                <Send size={18} />
                <span>SUBMIT QUOTATION REQUEST</span>
              </button>
            </form>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-emerald-900 text-white p-6 rounded-3xl space-y-4">
            <h3 className="font-extrabold text-lg flex items-center gap-2">
              <PhoneCall className="text-emerald-400" size={20} />
              <span>Direct Commercial Contact</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Prefer speaking directly with our commercial representative? Contact us today to discuss contract supply terms and market pricing.
            </p>
            <div className="bg-emerald-950 p-4 rounded-2xl space-y-2 text-xs border border-emerald-800">
              <p><strong className="text-emerald-400">Representative:</strong> Wesley Mage Mujenyi</p>
              <p><strong className="text-emerald-400">Telephone:</strong> 0711 911 690 / 0726 360 635</p>
              <p><strong className="text-emerald-400">Email:</strong> magewesley16@gmail.com</p>
              <p><strong className="text-emerald-400">Tax PIN:</strong> A011080564G</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-4">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <ShieldCheck className="text-emerald-600" size={18} />
              <span>Standard Contract Features</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>Consistent quality and daily/weekly scheduled transport</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>Transparent pricing basis accounting for seasonal market conditions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>Tax compliance documentation and formal invoice support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
