import React, { useState } from 'react';
import { Search, MapPin, Building, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onSearch: (category: string, submarket: string, minSqft: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSubmarket, setSelectedSubmarket] = useState<string>('All');
  const [minSqft, setMinSqft] = useState<number>(0);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(selectedCategory, selectedSubmarket, minSqft);
    const propertiesElem = document.getElementById('properties');
    if (propertiesElem) {
      propertiesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#090e1a]">
      {/* Background Hero Image with Layered Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="images/hero_industrial_park.jpg"
          alt="Commercial Realty Partners NJ Logistics Park"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-90 animate-pulse-glow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-[#090e1a]/85 to-[#090e1a]/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#090e1a]/40 to-[#090e1a]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold mb-8 backdrop-blur-md shadow-lg shadow-amber-500/10">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>Premier Commercial Real Estate Brokerage & Development in New Jersey</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="hidden sm:inline-block text-slate-300 font-mono">crpnj.com</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6 font-serif-brand">
          Architecting New Jersey’s <br className="hidden sm:block" />
          <span className="text-gradient-gold">Industrial & Logistics</span> Infrastructure
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
          Commercial Realty Partners, LLC delivers market-leading industrial warehouse leasing, port drayage truck terminals, strategic land acquisition, and build-to-suit logistics parks across the Tri-State region.
        </p>

        {/* Interactive Search Bar Box */}
        <div className="max-w-4xl mx-auto mb-16">
          <form
            onSubmit={handleSearchSubmit}
            className="p-3 sm:p-4 rounded-2xl bg-[#0e1626]/90 border border-amber-500/30 backdrop-blur-xl shadow-2xl shadow-black/80 flex flex-col md:flex-row gap-3 items-stretch"
          >
            {/* Property Type Dropdown */}
            <div className="flex-1 text-left px-3 py-2 bg-slate-900/80 rounded-xl border border-slate-700/60 focus-within:border-amber-500/60 transition-colors">
              <label className="block text-[10px] font-bold text-amber-400 tracking-wider uppercase mb-1 flex items-center gap-1.5">
                <Building className="w-3 h-3" /> Property Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-transparent text-sm text-white focus:outline-none cursor-pointer"
              >
                <option value="All" className="bg-slate-900 text-white">All Industrial Property Types</option>
                <option value="Industrial Warehouse" className="bg-slate-900 text-white">Industrial Warehouse / Logistics</option>
                <option value="Truck Terminal" className="bg-slate-900 text-white">Truck Terminal & Container Yard</option>
                <option value="Development Land" className="bg-slate-900 text-white">Industrial Development Land</option>
                <option value="Manufacturing & Flex" className="bg-slate-900 text-white">Manufacturing & Flex Space</option>
              </select>
            </div>

            {/* Submarket Corridor Dropdown */}
            <div className="flex-1 text-left px-3 py-2 bg-slate-900/80 rounded-xl border border-slate-700/60 focus-within:border-amber-500/60 transition-colors">
              <label className="block text-[10px] font-bold text-amber-400 tracking-wider uppercase mb-1 flex items-center gap-1.5">
                <MapPin className="w-3 h-3" /> Submarket Corridor
              </label>
              <select
                value={selectedSubmarket}
                onChange={(e) => setSelectedSubmarket(e.target.value)}
                className="w-full bg-transparent text-sm text-white focus:outline-none cursor-pointer"
              >
                <option value="All" className="bg-slate-900 text-white">All New Jersey Corridors</option>
                <option value="Edison / Raritan Center" className="bg-slate-900 text-white">Edison / Raritan Center (Exit 10)</option>
                <option value="Turnpike Exit 8A" className="bg-slate-900 text-white">Turnpike Exit 8A Hub</option>
                <option value="Port Newark / Elizabeth" className="bg-slate-900 text-white">Port Newark & Elizabeth</option>
                <option value="Meadowlands Corridor" className="bg-slate-900 text-white">Meadowlands / Last-Mile</option>
                <option value="I-287 / Central NJ" className="bg-slate-900 text-white">Interstate 287 / Central NJ</option>
              </select>
            </div>

            {/* Min Size Select */}
            <div className="w-full md:w-44 text-left px-3 py-2 bg-slate-900/80 rounded-xl border border-slate-700/60 focus-within:border-amber-500/60 transition-colors">
              <label className="block text-[10px] font-bold text-amber-400 tracking-wider uppercase mb-1">
                Min Sq. Footage
              </label>
              <select
                value={minSqft}
                onChange={(e) => setMinSqft(Number(e.target.value))}
                className="w-full bg-transparent text-sm text-white focus:outline-none cursor-pointer"
              >
                <option value={0} className="bg-slate-900 text-white">Any Size</option>
                <option value={50000} className="bg-slate-900 text-white">50,000+ SF</option>
                <option value={100000} className="bg-slate-900 text-white">100,000+ SF</option>
                <option value={250000} className="bg-slate-900 text-white">250,000+ SF</option>
                <option value={500000} className="bg-slate-900 text-white">500,000+ SF</option>
              </select>
            </div>

            {/* Search Submit Button */}
            <button
              type="submit"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-amber-500/20"
            >
              <Search className="w-4 h-4" />
              <span>Search Available Properties</span>
            </button>
          </form>

          {/* Quick Filter Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-slate-400">
            <span className="font-semibold text-slate-300">Popular:</span>
            <button
              onClick={() => onSearch('Industrial Warehouse', 'Edison / Raritan Center', 0)}
              className="px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-amber-500/20 hover:text-amber-300 border border-slate-700/60 transition-colors"
            >
              Edison Warehouses
            </button>
            <button
              onClick={() => onSearch('Truck Terminal', 'All', 0)}
              className="px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-amber-500/20 hover:text-amber-300 border border-slate-700/60 transition-colors"
            >
              Cross-Dock Terminals
            </button>
            <button
              onClick={() => onSearch('Development Land', 'All', 0)}
              className="px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-amber-500/20 hover:text-amber-300 border border-slate-700/60 transition-colors"
            >
              Build-to-Suit Land
            </button>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-500/20 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-serif-brand">5.2M+ SF</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">Leased & Developed</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-500/20 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-serif-brand">$1.2B+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">Transaction Volume</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-500/20 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-serif-brand">99.4%</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">Portfolio Occupancy</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-500/20 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-serif-brand">Edison, NJ</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">Headquarters Base</div>
          </div>
        </div>
      </div>
    </section>
  );
};
