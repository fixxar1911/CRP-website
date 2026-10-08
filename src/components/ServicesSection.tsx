import React from 'react';
import { SERVICES_DATA } from '../data/services';
import { Warehouse, Building2, Truck, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContactModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContactModal }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Warehouse':
        return <Warehouse className="w-5 h-5 text-amber-400" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-amber-400" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-amber-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-amber-400" />;
      default:
        return <Warehouse className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#090e1a] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400/90 mb-2">
            Brokerage & Development Advisory
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-brand">
            Core Real Estate <span className="text-gradient-gold">Capabilities</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Comprehensive transaction advisory, institutional landlord representation, and land development execution across the New Jersey industrial corridor.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="rounded-xl border border-slate-800 bg-[#0c1220] p-7 flex flex-col justify-between hover:border-slate-700 transition-all duration-300"
            >
              <div>
                {/* Icon & Stat Row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-amber-400 font-serif-brand block">
                      {service.statValue}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
                      {service.statLabel}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1.5 font-serif-brand">
                  {service.title}
                </h3>
                <p className="text-xs font-medium text-amber-400/90 mb-3">
                  {service.tagline}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 pt-4 border-t border-slate-800">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenContactModal}
                className="w-full py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-colors border border-slate-800 flex items-center justify-center gap-2"
              >
                <span>Consult Our Advisory Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
