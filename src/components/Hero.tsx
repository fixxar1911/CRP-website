import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onSearch: (category: string, submarket: string, minSqft: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const handleQuickCategory = (category: string) => {
    onSearch(category, 'All', 0);
    const propertiesElem = document.getElementById('properties');
    if (propertiesElem) {
      propertiesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[680px] lg:h-[90vh] lg:max-h-[860px] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#090e1a]">
      {/* Background Architectural Image with Subtle Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="images/hero_industrial_park.jpg"
          alt="Commercial Realty Partners NJ Logistics Park"
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-[#090e1a]/80 to-[#090e1a]/55" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Category Pretitle */}
        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-amber-400/90 mb-5">
          New Jersey Commercial Brokerage & Industrial Development
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12] mb-7 font-serif-brand">
          Architecting New Jersey’s <br className="hidden sm:block" />
          <span className="text-gradient-gold">Industrial & Logistics</span> Infrastructure
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Commercial Realty Partners delivers institutional-grade warehouse leasing, off-market land acquisition, port drayage terminals, and build-to-suit logistics parks throughout the NJ/NY corridor.
        </p>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => scrollToSection('properties')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/15 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Available Properties</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollToSection('about')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-semibold tracking-wide hover:border-slate-500 transition-all flex items-center justify-center gap-2"
          >
            <span>Firm Profile & Leadership</span>
          </button>
        </div>

        {/* Quick Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-slate-400 mb-16">
          <span className="text-slate-500 uppercase tracking-wider text-[11px]">Corridor Focus:</span>
          {[
            { label: 'High-Bay Warehouses', cat: 'Industrial Warehouse' },
            { label: 'Truck Terminals', cat: 'Truck Terminal' },
            { label: 'Development Land', cat: 'Development Land' },
            { label: 'Manufacturing & Flex', cat: 'Manufacturing & Flex' },
          ].map((item) => (
            <button
              key={item.cat}
              onClick={() => handleQuickCategory(item.cat)}
              className="px-3 py-1 rounded-md bg-slate-900/60 hover:bg-slate-800 hover:text-white border border-slate-800 text-slate-300 text-xs transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Elegant Minimalist Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-slate-800/80">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white font-serif-brand">5.2M+ SF</div>
            <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Leased & Developed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white font-serif-brand">$1.2B+</div>
            <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Transaction Value</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white font-serif-brand">99.4%</div>
            <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Portfolio Occupancy</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white font-serif-brand">Edison, NJ</div>
            <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Corporate HQ</div>
          </div>
        </div>
      </div>
    </section>
  );
};
