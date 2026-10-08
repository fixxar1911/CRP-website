import { Award, ShieldCheck, UserCheck, MapPin } from 'lucide-react';

interface AboutLeadershipProps {
  onOpenContactModal: () => void;
}

export const AboutLeadership = ({ onOpenContactModal }: AboutLeadershipProps) => {
  return (
    <section id="about" className="py-24 bg-[#070b15] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Founder Executive Headshot (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl group">
              <img
                src="images/joseph_nitti.jpg"
                alt="Joseph Nitti, Founder and Managing Principal of Commercial Realty Partners"
                className="w-full h-[520px] object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-transparent to-transparent" />

              {/* Founder Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0e1626]/90 border border-amber-500/40 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center font-bold text-slate-950 text-lg font-serif-brand shrink-0 shadow-lg shadow-amber-500/20">
                    JN
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-serif-brand">Joseph Nitti</h4>
                    <p className="text-xs text-amber-400 font-semibold">Founder & Managing Principal</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Commercial Realty Partners, LLC</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing Accent Ring */}
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Right Column: Firm Story & Track Record (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
              <Award className="w-4 h-4" /> About Commercial Realty Partners
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-brand leading-tight">
              Deep Regional Insight. <br />
              <span className="text-gradient-gold">Unmatched Execution.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Founded in 2016 by Joseph Nitti, Commercial Realty Partners, LLC (crpnj.com) is an Edison, New Jersey-based commercial real estate brokerage and industrial property development firm.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              We specialize in industrial warehouse leasing, strategic land acquisition, truck terminals, and build-to-suit logistics parks. Our client roster includes global third-party logistics (3PL) providers, national institutional developers, corporate occupiers, and private investors throughout the NJ/NY region.
            </p>

            {/* Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1 font-serif-brand">
                  <ShieldCheck className="w-4 h-4" /> Speed to Market
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Rapid site sourcing, off-market deal access, and streamlined municipal entitlement processes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1 font-serif-brand">
                  <UserCheck className="w-4 h-4" /> Direct Broker Access
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Work directly with senior principal brokers who own local market relationships and deal velocity.
                </p>
              </div>
            </div>

            {/* HQ Office Quick Details */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-500/20 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Headquarters: Edison, New Jersey 08837</span>
              </div>
              <button
                onClick={onOpenContactModal}
                className="px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold hover:brightness-110 transition-all"
              >
                Contact Firm Principal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
