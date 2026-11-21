import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Copy, Check } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface QrConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QrConnectModal: React.FC<QrConnectModalProps> = ({ isOpen, onClose }) => {
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.linkedinUrl);
      setCopiedLink(true);
      window.setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      setCopiedLink(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="qr-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-[120] bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm bg-paper border-4 border-slate-900 rounded-3xl p-6 sm:p-8 shadow-hard-lg text-center"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup kartu koneksi"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-slate-900 border-2 border-slate-900 shadow-hard-sm hover:bg-yellow-300 flex items-center justify-center cursor-pointer"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>

        <span className="font-pixel text-[10px] text-blue-700 tracking-wider block mb-2">
          CONNECT CARD ✦
        </span>
        <h3 id="qr-modal-title" className="font-display font-bold text-2xl text-slate-900">
          {PROFILE.name}
        </h3>
        <p className="text-xs text-slate-600 mt-0.5 mb-5">
          {PROFILE.major} · {PROFILE.campus}
        </p>

        {/* Tactile Graphic QR Stamp Pattern */}
        <div className="mx-auto w-44 h-44 bg-white border-3 border-slate-900 rounded-2xl p-4 shadow-hard-sm flex items-center justify-center mb-5">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-slate-900"
            role="img"
            aria-label="QR Code LinkedIn Najwa Santang Wangi"
          >
            {/* Corner finder squares */}
            <rect x="4" y="4" width="26" height="26" rx="3" fill="none" stroke="currentColor" strokeWidth="6" />
            <rect x="12" y="12" width="10" height="10" rx="1" fill="currentColor" />

            <rect x="70" y="4" width="26" height="26" rx="3" fill="none" stroke="currentColor" strokeWidth="6" />
            <rect x="78" y="12" width="10" height="10" rx="1" fill="currentColor" />

            <rect x="4" y="70" width="26" height="26" rx="3" fill="none" stroke="currentColor" strokeWidth="6" />
            <rect x="12" y="78" width="10" height="10" rx="1" fill="currentColor" />

            {/* Stylized data modules */}
            <rect x="38" y="6" width="8" height="8" fill="currentColor" />
            <rect x="52" y="6" width="8" height="8" fill="currentColor" />
            <rect x="38" y="20" width="8" height="8" fill="currentColor" />
            <rect x="50" y="20" width="12" height="8" fill="currentColor" />

            <rect x="6" y="38" width="8" height="10" fill="currentColor" />
            <rect x="20" y="40" width="10" height="8" fill="currentColor" />
            <rect x="38" y="38" width="24" height="24" rx="4" fill="#2563EB" />
            <text x="50" y="54" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
              in
            </text>

            <rect x="70" y="38" width="10" height="8" fill="currentColor" />
            <rect x="86" y="40" width="10" height="14" fill="currentColor" />
            <rect x="70" y="52" width="12" height="10" fill="currentColor" />

            <rect x="40" y="70" width="10" height="10" fill="currentColor" />
            <rect x="56" y="70" width="8" height="10" fill="currentColor" />
            <rect x="70" y="70" width="12" height="8" fill="currentColor" />
            <rect x="86" y="72" width="10" height="10" fill="currentColor" />
            <rect x="40" y="86" width="14" height="10" fill="currentColor" />
            <rect x="60" y="86" width="10" height="10" fill="currentColor" />
            <rect x="78" y="86" width="18" height="10" fill="currentColor" />
          </svg>
        </div>

        <p className="font-mono text-xs text-slate-600 mb-4">{PROFILE.linkedinHandle}</p>

        <div className="flex flex-col sm:flex-row gap-2.5">
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-display font-bold text-sm px-4 py-2.5 rounded-xl border-2 border-slate-900 shadow-hard-sm inline-flex items-center justify-center gap-1.5"
          >
            <span>Buka LinkedIn</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={handleCopyUrl}
            className="bg-yellow-300 hover:bg-yellow-400 text-slate-900 font-display font-bold text-sm px-4 py-2.5 rounded-xl border-2 border-slate-900 shadow-hard-sm inline-flex items-center justify-center gap-1.5 cursor-pointer"
          >
            {copiedLink ? (
              <>
                <Check className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                <span>Tersalin</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" aria-hidden="true" />
                <span>Salin URL</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
