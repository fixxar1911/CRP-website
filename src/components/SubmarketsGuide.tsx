import React, { useState } from 'react';
import { SUBMARKETS_DATA } from '../data/submarkets';
import { MapPin, Navigation, Clock, Anchor, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

interface SubmarketsGuideProps {
  onSelectSubmarketFilter: (submarketName: string) => void;
}

export const SubmarketsGuide: React.FC<SubmarketsGuideProps> = ({ onSelectSubmarketFilter }) => {
  const [activeSubmarketId, setActiveSubmarketId] = useState<string>('edison-raritan');

  const selectedSubmarket = SUBMARKETS_DATA.find((s) => s.id === activeSubmarketId) || SUBMARKETS_DATA[0];

  return (
    <section id="submarkets" className="py-24 bg-[#090e1a] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Navigation className="w-4 h-4" /> Regional Market Intelligence
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-brand">
            New Jersey <span className="text-gradient-gold">Industrial Corridors</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            New Jersey is the premier East Coast logistics hub. Explore key submarket characteristics, drive times, and average lease rates across major NJ corridors.
          </p>
        </div>

        {/* Interactive Selector Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {SUBMARKETS_DATA.map((sub) => (
            <button
              key={sub.id}
              onClick={() => setActiveSubmarketId(sub.id)}
              className={`px-5 py-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
                activeSubmarketId === sub.id
                  ? 'bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 hover:text-white border-slate-800'
              }`}
            >
              {sub.name}
            </button>
          ))}
        </div>

        {/* Selected Submarket Card Showcase */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-amber-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Details (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 text-amber-400 font-mono text-xs font-bold border border-amber-500/30">
              <MapPin className="w-3.5 h-3.5" />
              <span>{selectedSubmarket.keyExit}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-white font-serif-brand">
              {selectedSubmarket.name}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedSubmarket.description}
            </p>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/20 text-xs font-medium text-amber-300 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
              <span>{selectedSubmarket.keyDistinction}</span>
            </div>

            {/* Key Corridors List */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Primary Arteries & Interchanges
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedSubmarket.majorCorridors.map((c, i) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-slate-800 text-xs text-slate-300 font-mono border border-slate-700">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onSelectSubmarketFilter(selectedSubmarket.name)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-700 text-slate-950 font-bold text-xs hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <span>View {selectedSubmarket.name} Properties</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Metrics Grid (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
              <Clock className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <span className="text-[10px] font-bold text-slate-500 uppercase block">Manhattan Transit</span>
              <div className="text-xl font-bold text-white font-serif-brand mt-1">{selectedSubmarket.nycDriveTime}</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
              <Anchor className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <span className="text-[10px] font-bold text-slate-500 uppercase block">Port Proximity</span>
              <div className="text-xl font-bold text-white font-serif-brand mt-1">{selectedSubmarket.portDistance}</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
              <TrendingUp className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <span className="text-[10px] font-bold text-slate-500 uppercase block">Avg Lease Rates</span>
              <div className="text-sm font-bold text-amber-300 mt-1">{selectedSubmarket.avgRent}</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
              <Navigation className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <span className="text-[10px] font-bold text-slate-500 uppercase block">Submarket Vacancy</span>
              <div className="text-xl font-bold text-emerald-400 font-serif-brand mt-1">{selectedSubmarket.vacancyRate}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
