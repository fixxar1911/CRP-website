import React, { useState } from 'react';
import { CloudLightning, CheckCircle2, Copy, ExternalLink, Code2, Terminal, X, ShieldCheck } from 'lucide-react';

interface AmplifyBadgeProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AmplifyBadgeModal: React.FC<AmplifyBadgeProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const amplifyYamlCode = `version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(amplifyYamlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0e1626] border border-amber-500/40 p-6 sm:p-8 text-slate-100 shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <CloudLightning className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5" /> AWS Amplify Deployment Ready
              </div>
              <h3 className="text-2xl font-bold text-white font-serif-brand">
                Deploying crpnj.com to AWS Amplify
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6 text-sm text-slate-300">
          <p className="leading-relaxed">
            This repository (<code className="text-amber-400 font-mono bg-slate-900 px-2 py-0.5 rounded">fixxar1911/CRP-website</code>) is pre-configured with a production-ready <code className="text-amber-400 font-mono bg-slate-900 px-2 py-0.5 rounded">amplify.yml</code> build manifest for seamless deployment on AWS Amplify Hosting.
          </p>

          {/* Quick Steps */}
          <div className="space-y-3 p-4 rounded-2xl bg-slate-950 border border-slate-800">
            <h4 className="text-xs font-bold uppercase text-amber-400 tracking-wider flex items-center gap-2">
              <Terminal className="w-4 h-4" /> 3-Step AWS Amplify Console Deployment:
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-xs text-slate-300">
              <li>
                Open the <a href="https://console.aws.amazon.com/amplify" target="_blank" rel="noreferrer" className="text-amber-400 underline font-semibold inline-flex items-center gap-1">AWS Amplify Console <ExternalLink className="w-3 h-3" /></a> and click <strong>"Create new app"</strong>.
              </li>
              <li>
                Select <strong>GitHub</strong> as your source code provider and choose repository <code className="text-amber-300">fixxar1911/CRP-website</code> (main branch).
              </li>
              <li>
                Amplify will automatically detect <code className="text-amber-300">amplify.yml</code> and build your Vite React single-page app into the <code className="text-amber-300">dist</code> directory.
              </li>
            </ol>
          </div>

          {/* Code Block for amplify.yml */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase text-slate-400 flex items-center gap-1.5 font-mono">
                <Code2 className="w-4 h-4 text-amber-400" /> Root amplify.yml Configuration
              </span>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1 px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-amber-400 transition-colors"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? 'Copied!' : 'Copy YAML'}</span>
              </button>
            </div>
            <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-amber-300 overflow-x-auto">
              {amplifyYamlCode}
            </pre>
          </div>

          {/* Custom Domain Section */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold text-amber-300 block mb-1">Connecting Custom Domain crpnj.com</span>
              <p className="text-slate-300 leading-normal">
                In AWS Amplify Console under <strong>Domain Management</strong>, click "Add Domain" and type <code className="text-amber-400">crpnj.com</code>. AWS Amplify will automatically issue a free Managed SSL certificate and route DNS records!
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-700 text-slate-950 font-bold text-xs hover:brightness-110"
          >
            Got it, close guide
          </button>
        </div>
      </div>
    </div>
  );
};
