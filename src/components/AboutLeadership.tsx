import React from 'react';
import { ShieldCheck, UserCheck, MapPin, ArrowRight } from 'lucide-react';

interface AboutLeadershipProps {
  onOpenContactModal: () => void;
}

export const AboutLeadership: React.FC<AboutLeadershipProps> = ({ onOpenContactModal }) => {
  return (
    <section id="about" className="py-28 bg-[#070b15] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Executive Headshot (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl">
              <img
                src="images/joseph_nitti.jpg?v=20261008"
                alt="Joseph Nitti, Founder and Managing Principal of Commercial Realty Partners"
                className="w-full h-[520px] object-cover object-top filter brightness-95"
              />
              <div className="p-5 border-t border-slate-800 bg-[#0a0f1d]">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white font-serif-brand">Joseph Nitti</h3>
                    <p className="text-xs text-amber-400 font-medium">Founder & Managing Principal</p>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    crpnj.com
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  25+ years directing New Jersey industrial brokerage, institutional site sourcing, and build-to-suit logistics parks.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Firm Credentials (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400/90 mb-3">
                Firm Leadership & Heritage
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-brand leading-tight">
                Decades of Direct Industrial Expertise in <span className="text-gradient-gold">New Jersey</span>
              </h2>
            </div>

            <p className="text-slate-300 text-base leading-relaxed">
              Founded in 2016 by Joseph Nitti, Commercial Realty Partners, LLC is an Edison-based commercial real estate brokerage and industrial property development firm specializing exclusively in high-bay logistics warehouses, port drayage terminals, and strategic land acquisitions across the NJ/NY region.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              Prior to establishing CRP, Joseph Nitti served as President of the Industrial Division at Colliers International. A veteran of the United States Marine Corps (retired Major) and graduate of Massachusetts Maritime Academy (B.S. in Mechanical Engineering), Nitti brings institutional discipline and rigorous market insight to every client mandate.
            </p>

            {/* Strategic Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-slate-800">
              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2.5 text-amber-400 font-bold text-sm mb-2 font-serif-brand">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Institutional Speed to Market</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Deep off-market network, proprietary land pipelines, and accelerated municipal entitlement navigation across Middlesex, Essex, and Hudson counties.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2.5 text-amber-400 font-bold text-sm mb-2 font-serif-brand">
                  <UserCheck className="w-4 h-4 shrink-0" />
                  <span>Direct Principal Access</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every assignment is directed personally by senior principals, ensuring institutional quality, absolute discretion, and rapid deal closure.
                </p>
              </div>
            </div>

            {/* Direct Contact Bar */}
            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Headquarters: 55 Carter Drive, Suite 200, Edison, NJ 08817</span>
              </div>
              <button
                onClick={onOpenContactModal}
                className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-2 shrink-0"
              >
                <span>Direct Broker Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
