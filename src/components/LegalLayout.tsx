import React from "react";

/** Shared shell for the policy pages (privacy / terms / refunds). */
export default function LegalLayout({
  title,
  intro,
  updated,
  children,
}: {
  title: string;
  intro: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl mb-8">
        <span className="bg-emerald-700/80 text-emerald-200 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Farm City
        </span>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight mt-3">{title}</h1>
        <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">{intro}</p>
        <p className="text-[11px] text-slate-400 mt-4">Last updated: {updated}</p>
      </div>

      <article className="space-y-7 text-sm text-slate-700 leading-relaxed [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mb-2 [&_h2]:mt-1 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-emerald-700 [&_a]:font-semibold [&_strong]:text-slate-900">
        {children}
      </article>

      <p className="text-[11px] text-slate-400 mt-10 border-t border-slate-200 pt-5">
        This policy is provided for information and does not constitute legal advice. Farm City
        recommends review by a qualified advocate before relying on it commercially.
      </p>
    </div>
  );
}

export function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section>
      <h2>{heading}</h2>
      <div className="space-y-2">{children}</div>
    </section>
  );
}
