import React, { useState } from 'react';
import { FolderOpen, QrCode, Award, Palette, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { DraggablePaper } from './DraggablePaper';

interface AboutSectionProps {
  resetSignal: number;
  onMovedChange: (id: string, isMoved: boolean) => void;
  topZ: number;
  onBringToFront: () => number;
  onOpenQrModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  resetSignal,
  onMovedChange,
  topZ,
  onBringToFront,
  onOpenQrModal,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="relative pt-4">
      {/* Big Wooden Clipboard Container */}
      <div className="bg-[#B88655] rounded-3xl p-4 sm:p-8 md:p-10 border-4 border-[#523316] shadow-2xl relative">
        {/* Metal Clamp Mechanism */}
        <div
          aria-hidden="true"
          className="absolute -top-7 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none"
        >
          <div className="w-14 h-6 border-4 border-slate-400 bg-slate-200 rounded-t-xl" />
          <div className="w-36 sm:w-48 h-8 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 border-2 border-slate-800 rounded-md shadow-md flex items-center justify-center">
            <span className="w-8 h-2 bg-slate-700/40 rounded-full" />
          </div>
        </div>

        {/* White Paper Sheet on Clipboard */}
        <div className="bg-paper rounded-2xl p-6 sm:p-10 border-2 border-slate-900/20 shadow-inner relative mt-4">
          {/* Section Title Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-slate-200 pb-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 border-2 border-slate-900 flex items-center justify-center text-amber-800 shadow-hard-sm">
                <FolderOpen className="w-5 h-5" aria-hidden="true" />
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                ABOUT ME
              </h2>
            </div>
            <span className="font-pixel text-xs text-blue-700 tracking-wide">
              BIO &amp; LEADERSHIP TIMELINE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Hanging ID Card & Masking Tape Quote (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative w-full max-w-xs transform hover:rotate-1 transition-transform duration-200">
                {/* Lanyard Strap */}
                <div className="w-6 h-10 bg-amber-400 border-x-2 border-slate-900 mx-auto -mt-6 -mb-1" />
                {/* ID Badge Sleeve */}
                <div className="bg-amber-400 p-3.5 rounded-2xl border-3 border-slate-900 shadow-hard">
                  <div className="bg-white rounded-xl p-4 border-2 border-slate-900 flex flex-col items-center text-center">
                    {/* Portrait Frame with Resilient Fallback */}
                    <div className="relative w-40 h-44 rounded-xl overflow-hidden border-2 border-slate-900 shadow-inner mb-3 bg-gradient-to-br from-rose-100 via-amber-50 to-blue-100 group">
                      {!imgError ? (
                        <img
                          src={PROFILE.portraitUrl}
                          alt={`Foto profil ${PROFILE.name}`}
                          referrerPolicy="no-referrer"
                          onError={() => setImgError(true)}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                          <div className="w-16 h-16 rounded-full bg-pink-500 border-2 border-slate-900 text-white font-display font-bold text-2xl flex items-center justify-center shadow-hard-sm mb-2">
                            NSW
                          </div>
                          <span className="font-display font-bold text-xs text-slate-800">
                            {PROFILE.shortName}
                          </span>
                          <span className="font-mono text-[10px] text-slate-600">IT-PLN Informatics</span>
                        </div>
                      )}
                      <div className="absolute bottom-1.5 right-1.5 bg-yellow-400 text-slate-900 font-pixel text-[9px] px-1.5 py-0.5 rounded border border-slate-900">
                        IT-PLN
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-slate-900 text-lg">
                      {PROFILE.shortName}
                    </h3>
                    <p className="text-xs text-blue-700 font-semibold mb-3">{PROFILE.major}</p>

                    {/* Torn Biodata Slip */}
                    <div className="w-full bg-slate-50 border border-dashed border-slate-400 p-3 rounded-lg text-left text-xs space-y-1.5 font-mono">
                      <div className="flex justify-between gap-2">
                        <span className="text-slate-500">DOMISILI:</span>
                        <span className="font-bold text-slate-900">Bekasi, ID</span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <span className="text-slate-500">KAMPUS:</span>
                        <span className="font-bold text-slate-900">{PROFILE.campusShort}</span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <span className="text-slate-500">FOKUS:</span>
                        <span className="font-bold text-pink-600">{PROFILE.focus}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Draggable Masking Tape Quote Memo */}
              <DraggablePaper
                dragId="about-quote-memo"
                baseRotation={0}
                resetSignal={resetSignal}
                onMovedChange={onMovedChange}
                topZ={topZ}
                onBringToFront={onBringToFront}
                hintText="drag me!"
                resetLabel="↺ reset"
                hintClassName="-top-6 right-0"
                resetButtonClassName="-bottom-3 right-0"
                className="relative mt-7 w-full max-w-xs bg-yellow-100 border border-yellow-400 p-4 rounded-lg shadow-sm"
              >
                <div className="masking-tape absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 pointer-events-none" />
                <p className="font-hand text-lg text-slate-800 font-bold text-center leading-snug pointer-events-none">
                  "Menghubungkan logika komputasi dengan kreativitas visual untuk menghasilkan solusi nyata."
                </p>
              </DraggablePaper>
            </div>

            {/* Right Column: Biography & Structured Experience (8 Cols) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Personal Narrative Card */}
              <div className="bg-blue-50/70 border-2 border-blue-200 rounded-xl p-5 sm:p-6">
                <span className="font-pixel text-[10px] text-blue-700 uppercase tracking-widest block mb-2">
                  ✦ CANDIDATE SUMMARY
                </span>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Mahasiswi aktif <strong>S1 Teknik Informatika di Institut Teknologi PLN</strong> dengan rekam jejak
                  kepemimpinan aktif sejak bangku SMA. Berpengalaman memimpin seksi bidang di OSIS, mengoordinasi
                  kepanitiaan event berskala se-Jabodetabek, dan menggarap desain visual publikasi (PDD). Memiliki
                  ketertarikan tinggi pada rekayasa perangkat lunak, teknologi interaktif, serta manajemen event yang
                  terstruktur dan berdampak.
                </p>
              </div>

              {/* Experience 2-Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Leadership & Events */}
                <div className="space-y-4">
                  <h4 className="font-display font-bold text-base text-slate-900 flex items-center gap-2 border-b-2 border-yellow-400 pb-1.5">
                    <Award className="w-4 h-4 text-amber-600" aria-hidden="true" />
                    <span>KEPEMIMPINAN &amp; EVENT</span>
                  </h4>

                  <div className="bg-white border-2 border-slate-900 rounded-xl p-4 shadow-hard-sm">
                    <p className="font-pixel text-[10px] text-pink-700 tabular-nums">Okt 2024 – Okt 2025</p>
                    <h5 className="font-display font-bold text-slate-900 text-sm mt-1">
                      Kepala Seksi Bidang (Kasekbid) 2
                    </h5>
                    <p className="text-xs font-semibold text-blue-700 mb-1.5">OSIS SMA Korpri Bekasi</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Mengoordinasi sub-bidang kedisiplinan, Paskibra, GDN (Gerakan Disiplin Nasional), dan K7
                      lingkungan sekolah. Bertanggung jawab atas ketertiban umum dan pembinaan karakter siswa.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-slate-900 rounded-xl p-4 shadow-hard-sm">
                    <p className="font-pixel text-[10px] text-blue-700 tabular-nums">Feb 2025</p>
                    <h5 className="font-display font-bold text-slate-900 text-sm mt-1">
                      Penanggung Jawab Lomba LKBB
                    </h5>
                    <p className="text-xs font-semibold text-blue-700 mb-1.5">
                      PORSENI &amp; MIPA XII se-Jabodetabek
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Memimpin jalannya kompetisi baris-berbaris tingkat Jabodetabek, mengelola teknis juri dari instansi
                      militer, dan memastikan rundown berjalan tepat waktu dengan 20+ regu peserta.
                    </p>
                  </div>
                </div>

                {/* Creative PDD & Education */}
                <div className="space-y-4">
                  <h4 className="font-display font-bold text-base text-slate-900 flex items-center gap-2 border-b-2 border-blue-500 pb-1.5">
                    <Palette className="w-4 h-4 text-blue-600" aria-hidden="true" />
                    <span>PDD &amp; PENDIDIKAN</span>
                  </h4>

                  <div className="bg-white border-2 border-slate-900 rounded-xl p-4 shadow-hard-sm">
                    <p className="font-pixel text-[10px] text-purple-700 tabular-nums">Feb 2025</p>
                    <h5 className="font-display font-bold text-slate-900 text-sm mt-1">
                      Tim PDD &amp; Publikasi Desain
                    </h5>
                    <p className="text-xs font-semibold text-purple-700 mb-1.5">
                      PORSENI &amp; MIPA XII se-Jabodetabek
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Menghasilkan aset visual proposal sponsorship, ID card panitia, banner panggung utama, serta feed
                      dokumentasi media sosial selama event berlangsung.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-slate-900 rounded-xl p-4 shadow-hard-sm">
                    <p className="font-pixel text-[10px] text-emerald-700 tabular-nums">2026 – Sekarang</p>
                    <h5 className="font-display font-bold text-slate-900 text-sm mt-1">Institut Teknologi PLN</h5>
                    <p className="text-xs font-semibold text-emerald-700 mb-1.5">
                      S1 Teknik Informatika (Fakultas Telematika Energi)
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Fokus pada algoritma pemrograman dasar, struktur data, computational thinking, dan perancangan
                      UI/UX aplikasi digital.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Soft Skills & Interactive QR Stamp */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
                <div className="text-xs sm:text-sm font-display font-bold text-slate-800 flex flex-wrap items-center gap-x-2.5 gap-y-1">
                  <span>Komunikasi Efektif</span>
                  <span aria-hidden="true" className="text-pink-500">·</span>
                  <span>Kerja Sama Tim</span>
                  <span aria-hidden="true" className="text-pink-500">·</span>
                  <span>Problem Solving</span>
                  <span aria-hidden="true" className="text-pink-500">·</span>
                  <span>Manajemen Waktu</span>
                </div>

                {/* Draggable & Clickable Polaroid QR Card */}
                <DraggablePaper
                  dragId="about-qr-stamp"
                  baseRotation={3}
                  resetSignal={resetSignal}
                  onMovedChange={onMovedChange}
                  topZ={topZ}
                  onBringToFront={onBringToFront}
                  onCleanClick={onOpenQrModal}
                  hintText="drag or click!"
                  resetLabel="↺"
                  hintClassName="-top-6 right-0"
                  resetButtonClassName="-bottom-2.5 -left-2"
                  className="bg-white p-2.5 border-2 border-slate-900 shadow-hard-sm rounded-lg flex items-center gap-2.5"
                >
                  <div className="w-9 h-9 bg-slate-900 text-white flex items-center justify-center rounded pointer-events-none">
                    <QrCode className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="pointer-events-none text-left">
                    <span className="font-hand font-bold text-sm block text-slate-900 leading-none">
                      scan to connect!
                    </span>
                    <span className="font-pixel text-[8px] text-blue-700 inline-flex items-center gap-0.5 mt-1">
                      LINKEDIN READY <ArrowUpRight className="w-2.5 h-2.5" aria-hidden="true" />
                    </span>
                  </div>
                </DraggablePaper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
