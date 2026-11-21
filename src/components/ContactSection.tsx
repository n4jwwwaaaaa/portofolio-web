import React, { useState } from 'react';
import { Mail, Instagram, Linkedin, Copy, Check, Send } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { DraggablePaper } from './DraggablePaper';

interface ContactSectionProps {
  resetSignal: number;
  onMovedChange: (id: string, isMoved: boolean) => void;
  topZ: number;
  onBringToFront: () => number;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  resetSignal,
  onMovedChange,
  topZ,
  onBringToFront,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showComposer, setShowComposer] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [messageText, setMessageText] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback if clipboard unavailable
      setCopiedEmail(false);
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const intro = senderName.trim() ? `Halo Najwa, saya ${senderName.trim()}. ` : 'Halo Najwa! ';
    const body = messageText.trim() || 'Saya tertarik untuk berdiskusi mengenai kolaborasi atau proyek.';
    const encoded = encodeURIComponent(`${intro}${body}`);
    window.open(`${PROFILE.whatsappUrl}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="relative flex justify-center pt-4">
      <DraggablePaper
        dragId="contact-sticky-note"
        baseRotation={-1}
        resetSignal={resetSignal}
        onMovedChange={onMovedChange}
        topZ={topZ}
        onBringToFront={onBringToFront}
        hintText="Drag me anywhere!"
        resetLabel="↺ rapikan / reset"
        hintClassName="-top-8 left-6"
        resetButtonClassName="-top-8 right-6"
        className="w-full max-w-2xl bg-amber-200 border-4 border-slate-900 rounded-3xl p-8 sm:p-12 shadow-hard-lg"
      >
        {/* Masking Tape Sticking Note to Cutting Mat */}
        <div
          aria-hidden="true"
          className="masking-tape absolute -top-5 left-1/2 -translate-x-1/2 w-44 h-8 z-20 pointer-events-none"
        />

        <div className="text-center space-y-4">
          <span className="inline-block text-xs font-pixel bg-white px-3.5 py-1 rounded-full border-2 border-slate-900 shadow-hard-sm pointer-events-none">
            GET IN TOUCH ✦
          </span>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight pointer-events-none text-balance">
            LET&apos;S WORK TOGETHER!
          </h2>

          <p className="text-slate-800 text-sm sm:text-base max-w-md mx-auto leading-relaxed pointer-events-none">
            Terbuka untuk kolaborasi kepanitiaan, proyek desain PDD, magang teknologi, atau diskusi seputar
            perkuliahan Teknik Informatika.
          </p>

          {/* Contact Channels */}
          <div className="pt-3 flex flex-wrap justify-center gap-3 relative z-10">
            <a
              href={`mailto:${PROFILE.email}`}
              className="bg-white hover:bg-slate-50 text-slate-900 font-display font-bold text-sm px-4 py-2.5 rounded-xl border-2 border-slate-900 shadow-hard hover:translate-x-0.5 hover:translate-y-0.5 transition-all inline-flex items-center gap-2 whitespace-nowrap"
            >
              <Mail className="w-4 h-4 text-blue-700" aria-hidden="true" />
              <span>{PROFILE.email}</span>
            </a>

            <button
              type="button"
              data-no-drag="true"
              onClick={handleCopyEmail}
              aria-label="Salin alamat email"
              className="bg-yellow-300 hover:bg-yellow-400 text-slate-900 font-display font-bold text-sm px-3.5 py-2.5 rounded-xl border-2 border-slate-900 shadow-hard hover:translate-x-0.5 hover:translate-y-0.5 transition-all inline-flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                  <span>Tersalin</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" aria-hidden="true" />
                  <span>Salin Email</span>
                </>
              )}
            </button>

            <a
              href={PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-400 hover:bg-emerald-300 text-slate-900 font-display font-bold text-sm px-4 py-2.5 rounded-xl border-2 border-slate-900 shadow-hard hover:translate-x-0.5 hover:translate-y-0.5 transition-all inline-flex items-center gap-2 whitespace-nowrap"
            >
              <Instagram className="w-4 h-4" aria-hidden="true" />
              <span>{PROFILE.whatsappDisplay}</span>
            </a>

            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white font-display font-bold text-sm px-4 py-2.5 rounded-xl border-2 border-slate-900 shadow-hard hover:translate-x-0.5 hover:translate-y-0.5 transition-all inline-flex items-center gap-2 whitespace-nowrap"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
              <span>LinkedIn Profile</span>
            </a>
          </div>

          {/* Toggle Quick Message Note */}
          <div className="pt-2 relative z-10">
            <button
              type="button"
              data-no-drag="true"
              onClick={() => setShowComposer((prev) => !prev)}
              className="font-display font-bold text-xs text-slate-800 underline decoration-2 underline-offset-4 hover:text-blue-800 cursor-pointer"
            >
              {showComposer ? 'Tutup Catatan Cepat' : 'Tulis Pesan Cepat via WhatsApp →'}
            </button>

            {showComposer && (
              <form
                onSubmit={handleSendWhatsApp}
                onPointerDown={(e) => e.stopPropagation()}
                className="mt-4 bg-white/95 border-2 border-slate-900 rounded-2xl p-4 text-left space-y-3 shadow-hard-sm"
              >
                <div>
                  <label htmlFor="quick-name" className="block font-display font-bold text-xs text-slate-700 mb-1">
                    Nama / Organisasi
                  </label>
                  <input
                    id="quick-name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Contoh: Tim Panitia Kampus"
                    className="w-full px-3 py-2 text-sm bg-white border-2 border-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label htmlFor="quick-msg" className="block font-display font-bold text-xs text-slate-700 mb-1">
                    Pesan Singkat
                  </label>
                  <textarea
                    id="quick-msg"
                    rows={2}
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Halo Najwa, kami ingin mengajak kolaborasi untuk..."
                    className="w-full px-3 py-2 text-sm bg-white border-2 border-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-emerald-400 hover:bg-emerald-300 text-slate-900 font-display font-bold text-xs px-4 py-2 rounded-xl border-2 border-slate-900 shadow-hard-sm inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Kirim via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          <p className="font-hand font-bold text-xl text-slate-800 pt-2 pointer-events-none">
            ~ {PROFILE.name} · {PROFILE.locationFull}
          </p>
        </div>
      </DraggablePaper>
    </section>
  );
};
