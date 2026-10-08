import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Sliders } from 'lucide-react';
import { PROPERTIES_DATA, type Property } from '../data/properties';

interface SpaceCalculatorProps {
  onSelectPropertyForTour: (property: Property) => void;
}

export const SpaceCalculator: React.FC<SpaceCalculatorProps> = ({ onSelectPropertyForTour }) => {
  const [operationType, setOperationType] = useState<string>('ecommerce');
  const [palletCount, setPalletCount] = useState<number>(12000);
  const [officePercent, setOfficePercent] = useState<number>(10);
  const [truckFrequency, setTruckFrequency] = useState<string>('high');

  // Calculation logic
  const calculationResults = useMemo(() => {
    // Average pallet footprint in sqft depending on stacking & racking (5 to 7 high)
    const palletSqftFactor = operationType === 'cold_storage' ? 14 : operationType === 'ecommerce' ? 12 : 10;
    const rawWarehouseSqft = Math.round((palletCount * palletSqftFactor) / 3.5); // 3.5 to 5 high racking density
    
    // Add office space
    const officeSqft = Math.round(rawWarehouseSqft * (officePercent / 100));
    const totalSqft = rawWarehouseSqft + officeSqft;

    // Loading docks recommendation
    const dockRatio = truckFrequency === 'extreme' ? 4500 : truckFrequency === 'high' ? 6500 : 9000;
    const recommendedDocks = Math.max(8, Math.round(totalSqft / dockRatio));

    // Clear height recommendation
    const recommendedClear = palletCount > 20000 ? "40' Clear" : palletCount > 8000 ? "36' Clear" : "32' Clear";

    // Power requirement
    const powerAmps = totalSqft > 300000 ? '4,000+ Amps (480V)' : totalSqft > 150000 ? '3,000 Amps' : '2,000 Amps';

    return {
      totalSqft,
      rawWarehouseSqft,
      officeSqft,
      recommendedDocks,
      recommendedClear,
      powerAmps
    };
  }, [operationType, palletCount, officePercent, truckFrequency]);

  // Match closest properties from data
  const matchedProperties = useMemo(() => {
    return PROPERTIES_DATA.filter((p) => {
      const diff = Math.abs(p.sqft - calculationResults.totalSqft);
      return diff < 300000 || p.sqft >= calculationResults.totalSqft;
    }).slice(0, 2);
  }, [calculationResults.totalSqft]);

  return (
    <section id="calculator" className="py-24 bg-[#090e1a] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Calculator className="w-4 h-4" /> Interactive Planning Tool
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-brand">
            Industrial Facility <span className="text-gradient-gold">Space Estimator</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Input your operational parameters below to instantly calculate required square footage, ceiling clearance, loading dock ratios, and matching CRP properties.
          </p>
        </div>

        {/* Calculator Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0e1626] border border-amber-500/30 shadow-2xl space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-4">
              <Sliders className="w-5 h-5 text-amber-400" />
              <span>Configure Operational Requirements</span>
            </h3>

            {/* 1. Operation Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                1. Select Operation Profile
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'ecommerce', label: 'E-Commerce / 3PL Logistics' },
                  { id: 'manufacturing', label: 'Heavy Manufacturing' },
                  { id: 'truck_terminal', label: 'Cross-Dock Fleet Terminal' },
                  { id: 'cold_storage', label: 'Cold Storage / Freezer' },
                ].map((op) => (
                  <button
                    key={op.id}
                    onClick={() => setOperationType(op.id)}
                    className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all ${
                      operationType === op.id
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500 shadow-md shadow-amber-500/10'
                        : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {op.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Pallet Capacity Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  2. Required Pallet Positions
                </label>
                <span className="text-sm font-extrabold text-amber-400 font-mono">
                  {palletCount.toLocaleString()} Pallets
                </span>
              </div>
              <input
                type="range"
                min={2000}
                max={40000}
                step={1000}
                value={palletCount}
                onChange={(e) => setPalletCount(Number(e.target.value))}
                className="w-full accent-amber-500 bg-slate-900 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>2,000 Positions</span>
                <span>20,000</span>
                <span>40,000 Positions</span>
              </div>
            </div>

            {/* 3. Office Percentage Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  3. Executive & Operations Office Ratio
                </label>
                <span className="text-sm font-extrabold text-amber-400 font-mono">
                  {officePercent}% Office
                </span>
              </div>
              <input
                type="range"
                min={3}
                max={25}
                step={1}
                value={officePercent}
                onChange={(e) => setOfficePercent(Number(e.target.value))}
                className="w-full accent-amber-500 bg-slate-900 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>3% (Minimal)</span>
                <span>12% (Standard)</span>
                <span>25% (Flex HQ)</span>
              </div>
            </div>

            {/* 4. Dock Throughput */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                4. Daily Freight Throughput Density
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'standard', label: 'Standard Storage' },
                  { id: 'high', label: 'High Turn Rate' },
                  { id: 'extreme', label: 'Extreme Cross-Dock' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTruckFrequency(t.id)}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold border text-center transition-all ${
                      truckFrequency === t.id
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500'
                        : 'bg-slate-900/80 text-slate-400 border-slate-800'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Box (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#111c33] to-[#090e1a] border border-amber-500/40 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-4 mb-6">
              <h3 className="text-lg font-bold text-white font-serif-brand">Estimated Space Specifications</h3>
              <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 font-mono text-xs font-bold">
                CRP Algorithmic Model
              </span>
            </div>

            {/* Primary Total Square Feet Result */}
            <div className="p-6 rounded-xl bg-slate-950/80 border border-amber-500/30 text-center mb-6">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">
                Recommended Total Facility Area
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-amber-400 font-serif-brand tracking-tight">
                {calculationResults.totalSqft.toLocaleString()}{' '}
                <span className="text-xl font-sans text-slate-300">SF</span>
              </div>
              <div className="flex justify-center gap-4 text-xs text-slate-400 mt-3 pt-3 border-t border-slate-800">
                <span>Warehouse: <strong className="text-white">{calculationResults.rawWarehouseSqft.toLocaleString()} SF</strong></span>
                <span>Office: <strong className="text-white">{calculationResults.officeSqft.toLocaleString()} SF</strong></span>
              </div>
            </div>

            {/* Key Engineering Specs Breakdown */}
            <div className="grid grid-cols-3 gap-3 text-center mb-6">
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] font-bold text-slate-500 block uppercase">Clear Height</span>
                <span className="text-sm font-bold text-white">{calculationResults.recommendedClear}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] font-bold text-slate-500 block uppercase">Dock Doors</span>
                <span className="text-sm font-bold text-white">{calculationResults.recommendedDocks} Docks</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] font-bold text-slate-500 block uppercase">Power Grid</span>
                <span className="text-xs font-bold text-amber-400">{calculationResults.powerAmps}</span>
              </div>
            </div>

            {/* Matched CRP Properties Quick Preview */}
            <div className="space-y-3 mb-6">
              <span className="text-xs font-bold uppercase text-slate-400 tracking-wider block">
                Top Matching Portfolio Properties:
              </span>
              {matchedProperties.map((p) => (
                <div
                  key={p.id}
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between hover:border-amber-500/40 transition-colors"
                >
                  <div>
                    <h4 className="text-xs font-bold text-white">{p.title}</h4>
                    <span className="text-[11px] text-slate-400">{p.availableSqft} • {p.submarket}</span>
                  </div>
                  <button
                    onClick={() => onSelectPropertyForTour(p)}
                    className="p-2 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-colors"
                    title="View Property"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 font-bold text-sm text-center block hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all"
            >
              Submit Specification to CRP Advisory Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
