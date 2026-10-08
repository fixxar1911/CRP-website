import React from 'react';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContactModal }) => {
  return (
    <footer className="bg-[#050811] text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand (2 Cols wide) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-amber-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-brand text-base font-bold tracking-wider text-white leading-none">
                  COMMERCIAL REALTY
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-white uppercase leading-none mt-1">
                  PARTNERS, LLC
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              New Jersey’s premier commercial real estate brokerage and industrial property development firm, specializing in logistics warehouse leasing and land development.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-serif-brand">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#properties" className="hover:text-amber-400 transition-colors">Available Properties</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Core Capabilities</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors">Space Sizing Model</a></li>
              <li><a href="#submarkets" className="hover:text-amber-400 transition-colors">NJ Submarket Corridors</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">Firm Leadership</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Brokerage Desk</a></li>
            </ul>
          </div>

          {/* Col 3: Submarket Corridors */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-serif-brand">
              Key Corridors
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#properties" className="hover:text-amber-400 transition-colors">Edison / Exit 10 Hub</a></li>
              <li><a href="#properties" className="hover:text-amber-400 transition-colors">Turnpike Exit 8A</a></li>
              <li><a href="#properties" className="hover:text-amber-400 transition-colors">Port Newark & Elizabeth</a></li>
              <li><a href="#properties" className="hover:text-amber-400 transition-colors">Meadowlands / Last-Mile</a></li>
              <li><a href="#properties" className="hover:text-amber-400 transition-colors">I-287 Central NJ Corridor</a></li>
            </ul>
          </div>

          {/* Col 4: Office Address & Contact */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-serif-brand">
              Edison Headquarters
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>55 Carter Drive, Suite 200, Edison, NJ 08817</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="tel:7328000000" className="text-amber-400 hover:underline font-semibold">(732) 800-0000</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>info@crpnj.com</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenContactModal}
                  className="w-full py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
                >
                  Schedule Tour
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Commercial Realty Partners, LLC. All rights reserved. Registered domain crpnj.com.</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-slate-300 transition-colors">Privacy & Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
