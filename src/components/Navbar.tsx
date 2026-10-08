import React, { useState, useEffect } from 'react';
import { Building2, Phone, Menu, X, ArrowUpRight, CloudLightning } from 'lucide-react';

interface NavbarProps {
  onOpenAmplifyModal: () => void;
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAmplifyModal, onOpenContactModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Properties', href: '#properties' },
    { name: 'Services', href: '#services' },
    { name: 'Space Calculator', href: '#calculator' },
    { name: 'NJ Submarkets', href: '#submarkets' },
    { name: 'About CRP', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090e1a]/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#090e1a]/90 via-[#090e1a]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 p-0.5 shadow-lg shadow-amber-500/20 transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#090e1a] rounded-[7px] flex items-center justify-center">
                <Building2 className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-brand text-lg font-bold tracking-wider text-white leading-none group-hover:text-amber-400 transition-colors">
                COMMERCIAL REALTY
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] font-semibold tracking-widest text-amber-500 uppercase leading-none">
                  PARTNERS, LLC
                </span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono">
                  crpnj.com
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Amplify Deploy Readiness Badge */}
            <button
              onClick={onOpenAmplifyModal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 text-xs font-semibold transition-all shadow-sm"
              title="AWS Amplify Deployment Configuration"
            >
              <CloudLightning className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>AWS Amplify Ready</span>
            </button>

            <a
              href="tel:7328000000"
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 text-xs font-semibold transition-all border border-slate-700/60"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>(732) 800-0000</span>
            </a>

            <button
              onClick={onOpenContactModal}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Schedule Tour</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenAmplifyModal}
              className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-medium"
            >
              <CloudLightning className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-amber-400 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090e1a]/95 backdrop-blur-xl border-b border-amber-500/20 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800/70 hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
            <a
              href="tel:7328000000"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-800/80 text-amber-400 font-semibold text-sm border border-slate-700"
            >
              <Phone className="w-4 h-4" />
              <span>Call Brokerage: (732) 800-0000</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-700 text-slate-950 font-bold text-sm text-center shadow-lg shadow-amber-500/20"
            >
              Schedule Consultation / Tour
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
