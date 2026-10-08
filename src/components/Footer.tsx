import { Building2, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenContactModal: () => void;
}

export const Footer = ({ onOpenContactModal }: FooterProps) => {
  return (
    <footer className="bg-[#050811] text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand (2 Cols wide) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 p-0.5 shadow-lg shadow-amber-500/20">
                <div className="w-full h-full bg-[#090e1a] rounded-[7px] flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif-brand text-lg font-bold tracking-wider text-white">
                  COMMERCIAL REALTY
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-amber-500 uppercase">
                  PARTNERS, LLC
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              New Jersey’s leading commercial real estate brokerage and industrial property development firm. Headquartered in Edison, NJ.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300">
                Official Domain: crpnj.com
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-serif-brand">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#properties" className="hover:text-amber-400 transition-colors">Available Properties</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Core Services</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors">Space Estimator</a></li>
              <li><a href="#submarkets" className="hover:text-amber-400 transition-colors">NJ Industrial Corridors</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Firm Leadership</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact Brokerage</a></li>
            </ul>
          </div>

          {/* Col 3: Submarket Corridors */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-serif-brand">
              Primary Corridors
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
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>100 Executive Drive, Edison, NJ 08837</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:7328000000" className="text-amber-400 hover:underline font-semibold">(732) 800-0000</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>info@crpnj.com</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenContactModal}
                  className="w-full py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-700 text-slate-950 font-bold text-xs hover:brightness-110"
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
            <a href="#about" className="hover:text-slate-300">Privacy & Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
