import React, { useState, useEffect } from 'react';
import { Building2, Phone, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal }) => {
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
    { name: 'Capabilities', href: '#services' },
    { name: 'Space Model', href: '#calculator' },
    { name: 'NJ Submarkets', href: '#submarkets' },
    { name: 'Leadership', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090e1a]/98 backdrop-blur-md border-b border-slate-800 py-3.5 shadow-xl'
          : 'bg-[#090e1a]/90 backdrop-blur-md border-b border-slate-800/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center transition-colors group-hover:border-amber-400">
              <Building2 className="w-5 h-5 text-amber-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-brand text-base sm:text-lg font-bold tracking-wider text-white leading-none">
                COMMERCIAL REALTY
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-white uppercase leading-none mt-1">
                PARTNERS, LLC
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-amber-400 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:7328000000"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:text-white text-xs font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>(732) 800-0000</span>
            </a>

            <button
              onClick={onOpenContactModal}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
            >
              <span>Schedule Tour</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-amber-400 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090e1a] border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="tel:7328000000"
              className="flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(732) 800-0000</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="w-full py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs text-center"
            >
              Schedule Property Tour
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
