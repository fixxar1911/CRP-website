import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Building2, ShieldCheck, Loader2 } from 'lucide-react';
import type { Property } from '../data/properties';

interface ContactSectionProps {
  selectedProperty?: Property | null;
  onClosePropertyContext?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedProperty,
  onClosePropertyContext
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: selectedProperty ? 'Schedule Property Tour' : 'General Leasing Inquiry',
    sqftNeeded: '100,000 - 250,000 SF',
    message: selectedProperty ? `I would like to request an on-site tour and leasing brochure for ${selectedProperty.title} (${selectedProperty.location}).` : ''
  });

  // Security: Invisible honeypot field to block automated bot submissions
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState('');

  const formatPhoneNumber = (val: string) => {
    const cleaned = val.replace(/\D/g, '').slice(0, 10);
    if (cleaned.length < 4) return cleaned;
    if (cleaned.length < 7) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, phone: formatPhoneNumber(e.target.value) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Honeypot bot protection: if filled, quietly drop without alerting bot
    if (honeypot.trim() !== '') {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setTrackingId(`CRP-${Math.floor(100000 + Math.random() * 900000)}`);
      }, 500);
      return;
    }

    // Email pattern validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailPattern.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid corporate email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const newTrackingId = `CRP-${Math.floor(100000 + Math.random() * 900000)}`;
      setTrackingId(newTrackingId);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 650);
  };

  return (
    <section id="contact" className="py-24 bg-[#090e1a] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400/90 mb-2">
                Direct Brokerage Engagement
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-brand">
                Connect with <span className="text-gradient-gold">CRP Leadership</span>
              </h2>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                Connect directly with senior principals regarding industrial leasing, off-market acquisitions, or custom logistics developments.
              </p>
            </div>

            {/* Selected Property Context Alert */}
            {selectedProperty && (
              <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs">
                <div className="flex items-center justify-between font-bold text-amber-400 mb-1">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4" /> Targeted Property:
                  </span>
                  <button onClick={onClosePropertyContext} className="text-slate-400 hover:text-white">✕</button>
                </div>
                <div className="text-white font-semibold">{selectedProperty.title}</div>
                <div className="text-slate-300 text-[11px]">{selectedProperty.location}</div>
              </div>
            )}

            {/* Info Cards */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-[#0c1220] border border-slate-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">Corporate Headquarters</h4>
                  <p className="text-xs font-semibold text-white mt-0.5">Commercial Realty Partners, LLC</p>
                  <p className="text-xs text-slate-300">55 Carter Drive, Suite 200, Edison, NJ 08817</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0c1220] border border-slate-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">Direct Brokerage Desk</h4>
                  <a href="tel:7328000000" className="text-xs font-bold text-amber-400 hover:underline mt-0.5 block">
                    (732) 800-0000
                  </a>
                  <p className="text-[11px] text-slate-400">Monday – Friday: 8:00 AM – 6:30 PM EST</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0c1220] border border-slate-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">Direct Correspondence</h4>
                  <a href="mailto:info@crpnj.com" className="text-xs font-semibold text-white hover:text-amber-400 transition-colors mt-0.5 block">
                    info@crpnj.com
                  </a>
                </div>
              </div>

              {/* Security Assurance Badge */}
              <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-slate-900/50 border border-slate-800 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Encrypted transmission. Your requirement data is kept strictly confidential.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-xl p-6 sm:p-8 border border-slate-800 bg-[#0c1220] shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-serif-brand">Inquiry Received</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-amber-400">{formData.name}</strong>. A principal broker will review your parameters and follow up promptly.
                  </p>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400 inline-block">
                    Reference ID: <span className="text-amber-400 font-bold">{trackingId}</span>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          company: '',
                          email: '',
                          phone: '',
                          inquiryType: 'General Leasing Inquiry',
                          sqftNeeded: '100,000 - 250,000 SF',
                          message: ''
                        });
                      }}
                      className="px-5 py-2 rounded-lg bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Invisible Honeypot Field for anti-bot protection */}
                  <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                    <label htmlFor="_antispam_hp">Leave this empty</label>
                    <input
                      id="_antispam_hp"
                      type="text"
                      name="_antispam_hp"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="border-b border-slate-800 pb-3 mb-2">
                    <h3 className="text-lg font-bold text-white font-serif-brand">Request Property Tour or Proposal</h3>
                    <p className="text-xs text-slate-400">Direct response from Commercial Realty Partners principal brokers.</p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-950/80 border border-red-800 text-xs text-red-200">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/70"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1">Company / Organization *</label>
                      <input
                        type="text"
                        required
                        placeholder="Logistics Corp."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/70"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1">Business Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/70"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(732) 555-0100"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/70"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1">Inquiry Focus</label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-500/70"
                      >
                        <option value="Schedule Property Tour">Schedule Property Tour</option>
                        <option value="General Leasing Inquiry">Warehouse Leasing Inquiry</option>
                        <option value="Truck Terminal Siting">Truck Terminal / Yard Siting</option>
                        <option value="Build-to-Suit Land">Build-to-Suit Land Acquisition</option>
                        <option value="Investment Advisory">Investment Advisory</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1">Target Square Footage</label>
                      <select
                        value={formData.sqftNeeded}
                        onChange={(e) => setFormData({ ...formData, sqftNeeded: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-500/70"
                      >
                        <option value="Under 50,000 SF">Under 50,000 SF</option>
                        <option value="50,000 - 100,000 SF">50,000 - 100,000 SF</option>
                        <option value="100,000 - 250,000 SF">100,000 - 250,000 SF</option>
                        <option value="250,000 - 500,000 SF">250,000 - 500,000 SF</option>
                        <option value="500,000+ SF">500,000+ SF Mega-Facility</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1">Notes / Timing / Requirements</label>
                    <textarea
                      rows={3}
                      placeholder="Specify timing, clear height, power, or targeted NJ submarket..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/70"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Transmitting Securely...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Inquiry to Principal Brokers</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
