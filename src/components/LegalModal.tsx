import React from 'react';
import { X, Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl bg-[#0c1220] border border-slate-700 p-6 sm:p-8 text-slate-200 shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-serif-brand">Brokerage Disclosures & Privacy Policy</h3>
              <p className="text-[11px] text-slate-400">Commercial Realty Partners, LLC • Edison, New Jersey</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
            aria-label="Close Disclosures Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="py-5 space-y-6 text-xs leading-relaxed text-slate-300">
          {/* Section 1: NJ REC CIS */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-sm mb-2 font-serif-brand">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>1. New Jersey Real Estate Commission Disclosures</span>
            </div>
            <p className="mb-2">
              Commercial Realty Partners, LLC (crpnj.com) is a licensed commercial real estate broker in the State of New Jersey. In accordance with the New Jersey Real Estate License Act (N.J.S.A. 45:15-1 et seq.) and the rules of the New Jersey Real Estate Commission (N.J.A.C. 11:5-6.9), all parties are hereby notified regarding business relationships in commercial real estate transactions:
            </p>
            <ul className="space-y-1.5 pl-4 list-disc text-slate-400">
              <li><strong className="text-slate-200">Broker as Seller’s / Landlord’s Agent:</strong> When representing owners or landlords, CRP owes fiduciary duties of loyalty, obedience, disclosure, and confidentiality to the client.</li>
              <li><strong className="text-slate-200">Broker as Buyer’s / Tenant’s Agent:</strong> When retained under an exclusive tenant representation mandate, CRP advocates exclusively for the tenant’s economic and operational interests.</li>
              <li><strong className="text-slate-200">Disclosed Dual Agency:</strong> In situations where CRP represents both parties, such representation occurs only with informed written consent from all principals.</li>
            </ul>
          </div>

          {/* Section 2: Confidentiality & Proprietary Data */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-sm mb-2 font-serif-brand">
              <Lock className="w-4 h-4 text-amber-400" />
              <span>2. Transaction Confidentiality & Proprietary Data</span>
            </div>
            <p>
              Information transmitted through this portal—including corporate identity, facility parameters, square-footage criteria, and scheduling—is treated with strict professional confidentiality. CRP does not sell, rent, or disclose corporate tenant requirements, private land assemblages, or off-market deal metrics to outside marketing firms or unverified third parties.
            </p>
          </div>

          {/* Section 3: Web Privacy & Data Security */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-sm mb-2 font-serif-brand">
              <Shield className="w-4 h-4 text-amber-400" />
              <span>3. Data Security & Electronic Communications</span>
            </div>
            <p>
              Our website uses modern transport-layer encryption (TLS 1.3/HTTPS). Personal and corporate contact details submitted via our brokerage forms are utilized exclusively to respond to your specific property inquiries, distribute authorized offering memorandums, or coordinate site tours.
            </p>
          </div>

          {/* Section 4: Corporate Licensing Entity */}
          <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1">
            <span className="font-bold text-white text-[11px] block">Corporate Brokerage Entity:</span>
            <p className="text-slate-300">Commercial Realty Partners, LLC</p>
            <p className="text-slate-400">55 Carter Drive, Suite 200, Edison, NJ 08817</p>
            <p className="text-slate-400">Direct Brokerage Line: (732) 800-0000 | Email: info@crpnj.com</p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Official Brokerage Policy • Verified 2026</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
