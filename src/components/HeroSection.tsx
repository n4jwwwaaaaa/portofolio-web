import React from 'react';
import { PROFILE } from '../data/portfolioData';
import { DraggablePaper } from './DraggablePaper';

interface HeroSectionProps {
  resetSignal: number;
  onMovedChange: (id: string, isMoved: boolean) => void;
  topZ: number;
  onBringToFront: () => number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  resetSignal,
  onMovedChange,
  topZ,
  onBringToFront,
}) => {
  return (
    <section id="hero" className="relative pt-10 md:pt-12">
      {/* Top Left 3D Folder Accent */}
      <div className="absolute -top-2 -left-2 md:-left-6 z-20 transform -rotate-12 hover:rotate-0 transition-transform duration-300 pointer-events-none sm:pointer-events-auto">
        <div className="relative w-20 h-16 md:w-28 md:h-20">
          <div className="absolute inset-0 bg-yellow-400 rounded-xl border-2 border-slate-900 shadow-hard transform -rotate-3" />
          <div className="absolute inset-x-2 top-2 bottom-1 bg-amber-300 rounded-lg border-2 border-slate-900 flex items-center justify-center font-display font-bold text-[11px] md:text-xs text-amber-950 tracking-wide">
            PORTFOLIO
          </div>
          <div className="absolute -top-2 left-3 w-10 h-4 bg-yellow-500 rounded-t-md border-t-2 border-l-2 border-r-2 border-slate-900" />
        </div>
      </div>

      {/* Top Right Pink Metal Binder Clip */}
      <div
        className="absolute -top-4 right-10 md:right-24 z-30 flex flex-col items-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-8 h-9 border-4 border-slate-300 rounded-t-full shadow-sm -mb-1.5" />
        <div className="w-16 h-8 bg-[#FF2D78] border-2 border-slate-900 rounded shadow-hard flex items-center justify-center">
          <div className="w-10 h-1.5 bg-pink-900/35 rounded-full" />
        </div>
      </div>

      {/* Top Right Ruler Accent */}
      <div
        aria-hidden="true"
        className="hidden lg:flex absolute -top-3 right-0 transform rotate-12 w-40 h-8 bg-amber-200/95 border-2 border-slate-800 rounded shadow-md z-10 items-end justify-between px-2.5 pb-1 text-[8px] font-mono text-slate-700 select-none"
      >
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span className="font-bold">15cm</span>
      </div>

      {/* Giant Graph Paper Sheet Card */}
      <div className="bg-graph-paper rounded-2xl md:rounded-3xl border-4 border-slate-900 shadow-paper3d relative px-5 py-10 sm:p-10 md:p-14">
        {/* Spiral notebook perforation strip along top */}
        <div
          aria-hidden="true"
          className="absolute top-3 left-8 right-8 flex justify-between pointer-events-none opacity-35"
        >
          {Array.from({ length: 11 }).map((_, idx) => (
            <span key={idx} className="w-3 h-3 rounded-full bg-slate-900" />
          ))}
        </div>

        {/* Design Software Bounding Box Canvas */}
        <div className="relative mt-6 border-2 border-blue-600 rounded-xl p-6 sm:p-10 md:p-12 bg-white/75 backdrop-blur-xs">
          {/* Bounding Box Anchor Handles */}
          <span className="absolute -top-2 -left-2 w-3.5 h-3.5 bg-white border-2 border-blue-600 shadow-sm" />
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white border-2 border-blue-600 shadow-sm" />
          <span className="absolute -top-2 -right-2 w-3.5 h-3.5 bg-white border-2 border-blue-600 shadow-sm" />
          <span className="absolute top-1/2 -left-2 -translate-y-1/2 w-3.5 h-3.5 bg-white border-2 border-blue-600 shadow-sm" />
          <span className="absolute top-1/2 -right-2 -translate-y-1/2 w-3.5 h-3.5 bg-white border-2 border-blue-600 shadow-sm" />
          <span className="absolute -bottom-2 -left-2 w-3.5 h-3.5 bg-white border-2 border-blue-600 shadow-sm" />
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white border-2 border-blue-600 shadow-sm" />
          <span className="absolute -bottom-2 -right-2 w-3.5 h-3.5 bg-white border-2 border-blue-600 shadow-sm" />

          {/* Rotation Handle Stem */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
            <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-blue-600" />
            <div className="w-0.5 h-3.5 bg-blue-600" />
          </div>

          {/* Hero Typography Display */}
          <div className="text-center relative py-2 sm:py-4">
            {/* Line 1: PORT + 2026 Pixel Badge */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <h1
                aria-label="PORT"
                className="font-display font-bold text-6xl sm:text-8xl md:text-[7.5rem] leading-[0.95] tracking-tight text-blue-600 pixel-3d-blue uppercase select-none inline-flex"
              >
                {['P', 'O', 'R', 'T'].map((char, idx) => (
                  <span
                    key={idx}
                    className="animate-letter-dance"
                    style={{ animationDelay: `${idx * 0.14}s` }}
                  >
                    {char}
                  </span>
                ))}
              </h1>
              <div className="bg-pink-500 text-white font-pixel px-3.5 py-2 rounded-lg border-2 border-slate-900 shadow-hard transform rotate-6">
                <span className="text-sm sm:text-base md:text-lg tabular-nums">2026</span>
              </div>
            </div>

            {/* Line 2: FOLIO with Star Accent & Yellow Vector Cursor */}
            <div className="flex items-center justify-center relative mt-2 sm:mt-3">
              <div
                aria-label="FOLIO"
                className="font-display font-bold text-6xl sm:text-8xl md:text-[7.5rem] leading-[0.95] tracking-tight text-blue-600 pixel-3d-blue uppercase relative inline-flex items-center select-none"
              >
                <span className="inline-flex">
                  {['F', 'O', 'L', 'I'].map((char, idx) => (
                    <span
                      key={idx}
                      className="animate-letter-dance"
                      style={{ animationDelay: `${(idx + 4) * 0.14}s` }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
                <span className="relative inline-flex items-center justify-center">
                  <span className="animate-letter-dance" style={{ animationDelay: `${8 * 0.14}s` }}>
                    O
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute text-pink-400 text-xl sm:text-3xl md:text-4xl animate-slow-spin pointer-events-none"
                    style={{ textShadow: 'none' }}
                  >
                    ✦
                  </span>
                </span>
              </div>

              {/* Yellow Vector Mouse Cursor Graphic */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -bottom-3 right-[18%] md:right-[26%] transform translate-x-6 translate-y-2 pointer-events-none"
              >
                <svg className="w-10 h-10 md:w-12 md:h-12 drop-shadow-[3px_3px_0px_#18181B]" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M4 3L18 13L11.5 14L8.5 21L4 3Z"
                    fill="#FACC15"
                    stroke="#0F172A"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>

            {/* Candidate Role Nameplate */}
            <div className="mt-8 sm:mt-10 flex flex-col items-center">
              <div className="inline-block bg-white border-2 border-slate-900 px-5 sm:px-7 py-2.5 rounded-full shadow-hard-sm">
                <p className="font-display font-bold text-xs sm:text-base md:text-lg text-slate-900 tracking-wide">
                  NAJWA SANTANG WANGI <span className="text-pink-500 mx-1">✦</span> INFORMATICS &amp; CREATIVE DESIGN
                </p>
              </div>
            </div>

            {/* Clean Unboxed Metadata Row (Zero-Pill Discipline) */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs sm:text-sm font-semibold text-slate-600 max-w-2xl mx-auto">
              <span className="text-blue-700">Informatics Student</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-emerald-700">Event Organizer &amp; Leader</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-amber-700">Adaptive &amp; Collaborative</span>
            </div>
          </div>
        </div>

        {/* Draggable Corner Sticky Note */}
        <DraggablePaper
          dragId="hero-quick-note"
          baseRotation={6}
          resetSignal={resetSignal}
          onMovedChange={onMovedChange}
          topZ={topZ}
          onBringToFront={onBringToFront}
          hintText="drag me!"
          resetLabel="↺ reset"
          hintClassName="-top-6 right-0"
          resetButtonClassName="-bottom-3 -right-2"
          className="hidden md:block absolute bottom-5 right-5 w-40 bg-amber-50 border-2 border-slate-900 p-3.5 rounded-lg shadow-hard z-30"
        >
          <div className="w-8 h-2 bg-pink-500/75 mx-auto -mt-5 mb-2 rounded pointer-events-none" />
          <p className="font-pixel text-[9px] uppercase text-slate-500 pointer-events-none">QUICK NOTE:</p>
          <p className="font-hand text-base font-bold text-slate-800 leading-tight pointer-events-none mt-0.5">
            Ready for creative challenges &amp; tech impact!
          </p>
        </DraggablePaper>
      </div>

      {/* Tactile Desk Mat Info Bar */}
      <div className="mt-4 bg-slate-900/85 backdrop-blur-md text-white border-2 border-white/25 rounded-2xl py-3 px-6 shadow-xl flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-display tracking-wide">
        <div className="flex items-center gap-2 font-bold text-emerald-300">
          <span>STATUS:</span>
          <span className="text-white">OPEN TO OPPORTUNITIES</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-200 text-xs font-mono">
          <span>{PROFILE.location}</span>
          <span className="hidden md:inline text-slate-500">|</span>
          <span>{PROFILE.campus}</span>
          <span className="hidden md:inline text-slate-500">|</span>
          <a
            href={`mailto:${PROFILE.email}`}
            className="hover:text-yellow-300 transition-colors underline decoration-yellow-400 underline-offset-4"
          >
            {PROFILE.email}
          </a>
        </div>
      </div>
    </section>
  );
};
