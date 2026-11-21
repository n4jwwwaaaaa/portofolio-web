/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useRef, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { QrConnectModal } from './components/QrConnectModal';
import { PROFILE, ProjectItem } from './data/portfolioData';

export default function App() {
  const [movedItems, setMovedItems] = useState<Record<string, boolean>>({});
  const [resetSignal, setResetSignal] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  const zCounterRef = useRef(40);
  const [topZ, setTopZ] = useState(40);

  const handleBringToFront = useCallback(() => {
    zCounterRef.current += 1;
    setTopZ(zCounterRef.current);
    return zCounterRef.current;
  }, []);

  const handleMovedChange = useCallback((id: string, isMoved: boolean) => {
    setMovedItems((prev) => {
      if (!!prev[id] === isMoved) return prev;
      return { ...prev, [id]: isMoved };
    });
  }, []);

  const hasMovedItems = Object.values(movedItems).some(Boolean);

  const handleGlobalReset = () => {
    setResetSignal((prev) => prev + 1);
    setMovedItems({});
  };

  return (
    <div className="bg-cutting-mat text-slate-900 font-body antialiased min-h-screen border-[12px] md:border-[20px] border-[#784620] relative selection:bg-pink-500 selection:text-white pb-14">
      {/* Global Floating Desk Reset Button Bar */}
      <div
        className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
          hasMovedItems
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-16 opacity-0 pointer-events-none'
        }`}
      >
        <button
          type="button"
          onClick={handleGlobalReset}
          className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 border-2 border-slate-900 px-4 py-2 rounded-full font-display font-bold text-xs shadow-hard flex items-center gap-2 active:translate-y-0.5 transition-all cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Rapikan Meja Kerja (Reset Posisi)</span>
        </button>
      </div>

      {/* Floating Sticky Navbar */}
      <Navbar />

      {/* Main Workspace Canvas */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-16 space-y-20 sm:space-y-24">
        <HeroSection
          resetSignal={resetSignal}
          onMovedChange={handleMovedChange}
          topZ={topZ}
          onBringToFront={handleBringToFront}
        />

        <AboutSection
          resetSignal={resetSignal}
          onMovedChange={handleMovedChange}
          topZ={topZ}
          onBringToFront={handleBringToFront}
          onOpenQrModal={() => setIsQrModalOpen(true)}
        />

        <ProjectsSection
          resetSignal={resetSignal}
          onMovedChange={handleMovedChange}
          topZ={topZ}
          onBringToFront={handleBringToFront}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <SkillsSection />

        <ContactSection
          resetSignal={resetSignal}
          onMovedChange={handleMovedChange}
          topZ={topZ}
          onBringToFront={handleBringToFront}
        />
      </main>

      {/* Quiet Footer */}
      <footer className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-block bg-slate-900/75 backdrop-blur-xs text-white/90 border border-white/20 px-6 py-2 rounded-full font-mono text-xs">
          © 2026 {PROFILE.name.toUpperCase()} · {PROFILE.locationFull.toUpperCase()}
        </div>
      </footer>

      {/* Modals */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <QrConnectModal isOpen={isQrModalOpen} onClose={() => setIsQrModalOpen(false)} />
    </div>
  );
}
