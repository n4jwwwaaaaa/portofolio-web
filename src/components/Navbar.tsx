import React from 'react';
import { Scissors } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-3 z-40 px-4 flex justify-center">
      <nav
        aria-label="Primary Navigation"
        className="bg-white/95 backdrop-blur-md border-2 border-slate-900 rounded-full px-5 py-2.5 shadow-hard flex items-center justify-between gap-4 md:gap-8 max-w-4xl w-full"
      >
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#hero"
          className="font-display font-bold text-lg text-slate-900 tracking-tight hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 rounded-sm"
        >
          {PROFILE.brand}
        </a>

        {/* Zone 2: 4 Single-line Navigation Links */}
        <div className="hidden sm:flex items-center gap-6 font-display font-bold text-sm text-slate-700">
          <a
            href="#hero"
            className="hover:text-blue-700 hover:underline decoration-2 underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 rounded-sm"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-blue-700 hover:underline decoration-2 underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 rounded-sm"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-blue-700 hover:underline decoration-2 underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 rounded-sm"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-blue-700 hover:underline decoration-2 underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 rounded-sm"
          >
            Skills
          </a>
        </div>

        {/* Zone 3: Primary Action CTA */}
        <a
          href="#contact"
          className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-display font-bold text-xs md:text-sm px-4 py-1.5 rounded-full border-2 border-slate-900 shadow-hard-sm active:translate-x-0.5 active:translate-y-0.5 transition-all whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <span>Contact Me</span>
          <Scissors className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
};
