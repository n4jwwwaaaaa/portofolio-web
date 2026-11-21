import React, { useEffect } from 'react';
import { X, CheckCircle2, Layers } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-[120] bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-paper border-4 border-slate-900 rounded-3xl shadow-hard-lg overflow-hidden my-auto"
      >
        {/* Header Strip */}
        <div
          className={`bg-gradient-to-tr ${project.gradientClass} p-6 sm:p-8 border-b-4 border-slate-900 relative ${
            project.darkHeaderText ? 'text-slate-900' : 'text-white'
          }`}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup detail proyek"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-slate-900 border-2 border-slate-900 shadow-hard-sm hover:bg-yellow-300 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2.5 mb-3">
            <span
              className={`font-pixel text-xs ${project.badgeColor} ${project.badgeTextColor} px-2.5 py-1 rounded border-2 border-slate-900 font-bold tabular-nums`}
            >
              {project.number}
            </span>
            <span
              className={`font-pixel text-[11px] px-2.5 py-1 rounded ${
                project.darkHeaderText ? 'bg-white/65 text-slate-900' : 'bg-white/20 text-white'
              }`}
            >
              {project.tag}
            </span>
          </div>

          <h3 id="project-modal-title" className="font-display font-bold text-2xl sm:text-3xl leading-tight pr-10">
            {project.title}
          </h3>
          <p className={`text-sm mt-1 ${project.darkHeaderText ? 'text-amber-950' : 'text-white/90'}`}>
            {project.role} · {project.timeframe}
          </p>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6 bg-graph-paper">
          <div>
            <h4 className="font-pixel text-[10px] text-blue-700 uppercase tracking-wider mb-1.5">
              RINGKASAN PERAN &amp; PROYEK
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{project.summary}</p>
          </div>

          <div>
            <h4 className="font-pixel text-[10px] text-blue-700 uppercase tracking-wider mb-2.5">
              POIN KONTRIBUSI UTAMA
            </h4>
            <ul className="space-y-2.5">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t-2 border-dashed border-slate-300">
            <div>
              <h4 className="font-pixel text-[10px] text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" aria-hidden="true" />
                <span>DELIVERABLES</span>
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                {project.deliverables.join(' · ')}
              </p>
            </div>
            <div>
              <h4 className="font-pixel text-[10px] text-slate-500 uppercase tracking-wider mb-1.5">
                HASIL &amp; DAMPAK
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-blue-800 leading-relaxed">{project.impact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
