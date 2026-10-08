import React from 'react';
import { SERVICES_DATA } from '../data/services';
import { Warehouse, Building2, Truck, TrendingUp, CheckCircle2, ArrowRight, Shield } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContactModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContactModal }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Warehouse':
        return <Warehouse className="w-7 h-7 text-amber-400" />;
      case 'Building2':
        return <Building2 className="w-7 h-7 text-amber-400" />;
      case 'Truck':
        return <Truck className="w-7 h-7 text-amber-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-7 h-7 text-amber-400" />;
      default:
        return <Warehouse className="w-7 h-7 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#070b15] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Shield className="w-4 h-4" /> Core Brokerage & Advisory Services
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-brand">
            Unrivaled Tri-State <span className="text-gradient-gold">Real Estate Competencies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            With decades of combined industrial experience, Commercial Realty Partners, LLC delivers end-to-end execution across leasing, land development, logistics trucking, and capital markets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Stat Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-slate-900 border border-amber-500/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-amber-400 font-serif-brand block">
                      {service.statValue}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                      {service.statLabel}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 font-serif-brand group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-amber-400/90 mb-4">
                  {service.tagline}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 pt-4 border-t border-slate-800">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenContactModal}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-bold transition-all border border-slate-700 hover:border-amber-500 flex items-center justify-center gap-2"
              >
                <span>Consult Our Advisory Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
