import React, { useState, useMemo } from 'react';
import { ArrowRight, SlidersHorizontal } from 'lucide-react';
import type { Property } from '../data/properties';

interface SpaceCalculatorProps {
  onSelectPropertyForTour?: (property: Property) => void;
}

export const SpaceCalculator: React.FC<SpaceCalculatorProps> = () => {
  const [operationType, setOperationType] = useState<string>('ecommerce');
  const [palletCount, setPalletCount] = useState<number>(12000);
  const [officePercent, setOfficePercent] = useState<number>(10);

  // Streamlined calculation logic
  const calculationResults = useMemo(() => {
    const palletSqftFactor = operationType === 'cold_storage' ? 14 : operationType === 'ecommerce' ? 12 : 10;
    const rawWarehouseSqft = Math.round((palletCount * palletSqftFactor) / 3.5);
    const officeSqft = Math.round(rawWarehouseSqft * (officePercent / 100));
    const totalSqft = rawWarehouseSqft + officeSqft;
    const recommendedDocks = Math.max(8, Math.round(totalSqft / 6500));
    const recommendedClear = palletCount > 20000 ? "40' Clear" : palletCount > 8000 ? "36' Clear" : "32' Clear";

    return {
      totalSqft,
      rawWarehouseSqft,
      officeSqft,
      recommendedDocks,
      recommendedClear,
    };
  }, [operationType, palletCount, officePercent]);

  return (
    <section id="calculator" className="py-24 bg-[#090e1a] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400/90 mb-2">
            Facility Planning Tool
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-brand">
            Industrial Space <span className="text-gradient-gold">Estimator</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Model square footage requirements, ceiling clearances, and dock door ratios tailored for New Jersey logistics corridors.
          </p>
        </div>

        {/* Clean 2-Column Calculator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-[#0c1220] border border-slate-800 space-y-6">
            <div className="flex items-center gap-2 text-white font-semibold text-sm border-b border-slate-800 pb-3">
              <SlidersHorizontal className="w-4 h-4 text-amber-400" />
              <span>Operational Requirements</span>
            </div>

            {/* Operation Profile */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Logistics Profile
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'ecommerce', label: 'E-Commerce / 3PL' },
                  { id: 'manufacturing', label: 'Manufacturing' },
                  { id: 'truck_terminal', label: 'Cross-Dock Terminal' },
                  { id: 'cold_storage', label: 'Cold Storage' },
                ].map((op) => (
                  <button
                    key={op.id}
                    onClick={() => setOperationType(op.id)}
                    className={`p-3 rounded-lg text-center text-xs font-semibold transition-colors border ${
                      operationType === op.id
                        ? 'bg-amber-500 text-slate-950 font-bold border-amber-500'
                        : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {op.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Pallet Positions Slider */}
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold uppercase tracking-wider text-slate-400">Target Pallet Positions</span>
                <span className="text-amber-400 font-bold font-mono text-sm">{palletCount.toLocaleString()} Pallets</span>
              </div>
              <input
                type="range"
                min={2000}
                max={40000}
                step={1000}
                value={palletCount}
                onChange={(e) => setPalletCount(Number(e.target.value))}
                className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>2,000</span>
                <span>20,000</span>
                <span>40,000</span>
              </div>
            </div>

            {/* Office Space % */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Finished Office / Mezzanine Allocation
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[5, 10, 15, 20].map((pct) => (
                  <button
                    key={pct}
                    onClick={() => setOfficePercent(pct)}
                    className={`py-2 rounded-lg text-xs font-semibold border transition-colors ${
                      officePercent === pct
                        ? 'bg-amber-500 text-slate-950 font-bold border-amber-500'
                        : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {pct}% Office
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Card (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-[#0c1220] border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400/90 block mb-1">
                Estimated Building Program
              </span>
              <div className="text-4xl font-bold text-white font-serif-brand">
                {calculationResults.totalSqft.toLocaleString()} <span className="text-xl text-slate-400 font-normal">SF</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                ({calculationResults.rawWarehouseSqft.toLocaleString()} SF high-bay floor + {calculationResults.officeSqft.toLocaleString()} SF office)
              </p>

              <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-800 text-xs">
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-500 block uppercase font-bold text-[10px]">Recommended Clear</span>
                  <span className="text-sm font-bold text-white mt-0.5 block">{calculationResults.recommendedClear}</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-500 block uppercase font-bold text-[10px]">Loading Dock Ratio</span>
                  <span className="text-sm font-bold text-white mt-0.5 block">{calculationResults.recommendedDocks} Docks</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 mt-5 leading-relaxed">
                Commercial Realty Partners models exact site configurations against municipal setbacks, FAR constraints, and truck queuing depths.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800">
              <a
                href="#contact"
                className="w-full py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Custom Site Feasibility</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
