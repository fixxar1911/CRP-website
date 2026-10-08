import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Building2 } from 'lucide-react';
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

  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTrackingId = `CRP-${Math.floor(100000 + Math.random() * 900000)}`;
    setTrackingId(newTrackingId);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#090e1a] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Information (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
                <Phone className="w-4 h-4" /> Direct Brokerage Contact
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-brand">
                Connect with <span className="text-gradient-gold">CRP Leadership</span>
              </h2>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                Whether you are seeking high-bay warehouse space, off-market land parcels, or specialized truck terminals in New Jersey, our senior brokerage team is ready to assist.
              </p>
            </div>

            {/* Selected Property Alert Banner */}
            {selectedProperty && (
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/40 text-xs">
                <div className="flex items-center justify-between font-bold text-amber-400 mb-1">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4" /> Selected Property Inquiry:
                  </span>
                  <button onClick={onClosePropertyContext} className="text-slate-400 hover:text-white">✕</button>
                </div>
                <div className="text-white font-semibold">{selectedProperty.title}</div>
                <div className="text-slate-300 text-[11px]">{selectedProperty.location}</div>
              </div>
            )}

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-[#0e1626] border border-slate-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-400">Headquarters Address</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">Commercial Realty Partners, LLC</p>
                  <p className="text-xs text-slate-300">100 Executive Drive, Edison, NJ 08837</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0e1626] border border-slate-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-400">Direct Telephone</h4>
                  <a href="tel:7328000000" className="text-sm font-bold text-amber-400 hover:underline mt-0.5 block">
                    (732) 800-0000
                  </a>
                  <p className="text-[11px] text-slate-400">Brokerage Desk & Tour Scheduling</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0e1626] border border-slate-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-400">Official Web Domain</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">info@crpnj.com</p>
                  <p className="text-xs text-amber-400 font-mono">www.crpnj.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & RFP Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-amber-500/30 shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-serif-brand">Inquiry Received</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-amber-400">{formData.name}</strong>. A principal broker from Commercial Realty Partners will contact you shortly regarding your requirements.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400 inline-block">
                    Reference Ticket ID: <span className="text-amber-400 font-bold">{trackingId}</span>
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
                      className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-800 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-white font-serif-brand">Request Property Tour or Proposal</h3>
                    <p className="text-xs text-slate-400">Fill out your business requirements for immediate broker response.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Joseph Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Company / Organization *</label>
                      <input
                        type="text"
                        required
                        placeholder="Global 3PL Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Business Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="jsmith@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(201) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Inquiry Category</label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-500"
                      >
                        <option value="Schedule Property Tour">Schedule Property Tour</option>
                        <option value="General Leasing Inquiry">General Industrial Leasing</option>
                        <option value="Truck Terminal Siting">Truck Terminal / Yard Siting</option>
                        <option value="Build-to-Suit Land">Build-to-Suit Land Acquisition</option>
                        <option value="Investment Advisory">Investment Sales & Advisory</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Target Square Footage</label>
                      <select
                        value={formData.sqftNeeded}
                        onChange={(e) => setFormData({ ...formData, sqftNeeded: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-500"
                      >
                        <option value="Under 50,000 SF">Under 50,000 SF</option>
                        <option value="50,000 - 100,000 SF">50,000 - 100,000 SF</option>
                        <option value="100,000 - 250,000 SF">100,000 - 250,000 SF</option>
                        <option value="250,000 - 500,000 SF">250,000 - 500,000 SF</option>
                        <option value="500,000+ SF">500,000+ SF Mega-Park</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Additional Requirements / Notes</label>
                    <textarea
                      rows={3}
                      placeholder="Specify timing, clear height preferences, power needs, or target NJ submarkets..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 font-bold text-sm hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Commercial Realty Partners</span>
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
