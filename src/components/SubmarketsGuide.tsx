import React, { useState } from 'react';
import { SUBMARKETS_DATA } from '../data/submarkets';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

interface SubmarketsGuideProps {
  onSelectSubmarketFilter: (submarketName: string) => void;
}

export const SubmarketsGuide: React.FC<SubmarketsGuideProps> = ({ onSelectSubmarketFilter }) => {
  const [activeSubmarketId, setActiveSubmarketId] = useState<string>('edison-raritan');

  const selectedSubmarket = SUBMARKETS_DATA.find((s) => s.id === activeSubmarketId) || SUBMARKETS_DATA[0];

  return (
    <section id="submarkets" className="py-24 bg-[#070b15] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400/90 mb-2">
            Regional Logistics Corridors
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-brand">
            New Jersey <span className="text-gradient-gold">Industrial Submarkets</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Market dynamics, key freight interchanges, and transit windows across major New Jersey logistics corridors.
          </p>
        </div>

        {/* Submarket Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {SUBMARKETS_DATA.map((sub) => (
            <button
              key={sub.id}
              onClick={() => setActiveSubmarketId(sub.id)}
              className={`px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors border ${
                activeSubmarketId === sub.id
                  ? 'bg-amber-500 text-slate-950 font-bold border-amber-500'
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700'
              }`}
            >
              {sub.name}
            </button>
          ))}
        </div>

        {/* Selected Submarket Card */}
        <div className="rounded-xl p-6 sm:p-10 border border-slate-800 bg-[#0c1220] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Details (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-800 text-amber-400 font-mono text-xs font-semibold border border-slate-700">
              <MapPin className="w-3.5 h-3.5" />
              <span>{selectedSubmarket.keyExit}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif-brand">
              {selectedSubmarket.name}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedSubmarket.description}
            </p>

            <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-amber-300">
              <span className="font-bold text-white uppercase text-[10px] block mb-0.5">Strategic Market Advantage</span>
              {selectedSubmarket.keyDistinction}
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Primary Freight Arteries
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedSubmarket.majorCorridors.map((c, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-slate-900 text-xs text-slate-300 font-mono border border-slate-800">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onSelectSubmarketFilter(selectedSubmarket.name)}
                className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-2"
              >
                <span>View {selectedSubmarket.name} Listings</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Metrics Grid (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <Clock className="w-5 h-5 text-amber-400 mx-auto mb-1.5" />
              <span className="text-[10px] font-bold text-slate-500 uppercase block">Manhattan Transit</span>
              <div className="text-lg font-bold text-white font-serif-brand mt-1">{selectedSubmarket.nycDriveTime}</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Port Distance</span>
              <div className="text-lg font-bold text-white font-serif-brand mt-1">{selectedSubmarket.portDistance}</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Submarket Lease Rate</span>
              <div className="text-sm font-bold text-white font-serif-brand mt-1">{selectedSubmarket.avgRent}</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Corridor Vacancy</span>
              <div className="text-lg font-bold text-emerald-400 font-serif-brand mt-1">{selectedSubmarket.vacancyRate}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
