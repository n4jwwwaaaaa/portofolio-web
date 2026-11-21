import React, { useState } from 'react';
import { Award, Palette, ClipboardList, Code2, ArrowUpRight, Scissors } from 'lucide-react';
import { PROJECTS, ProjectCategory, ProjectItem } from '../data/portfolioData';
import { DraggablePaper } from './DraggablePaper';

interface ProjectsSectionProps {
  resetSignal: number;
  onMovedChange: (id: string, isMoved: boolean) => void;
  topZ: number;
  onBringToFront: () => number;
  onSelectProject: (project: ProjectItem) => void;
}

const FILTER_TABS: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'Semua Karya' },
  { id: 'leadership', label: 'Leadership & Event' },
  { id: 'creative', label: 'Creative & PDD' },
  { id: 'informatics', label: 'Informatics' },
];

const renderBannerIcon = (iconName: ProjectItem['iconName'], darkText?: boolean) => {
  const cls = `w-8 h-8 ${darkText ? 'text-slate-900' : 'text-white'}`;
  switch (iconName) {
    case 'award':
      return <Award className={cls} aria-hidden="true" />;
    case 'palette':
      return <Palette className={cls} aria-hidden="true" />;
    case 'clipboard':
      return <ClipboardList className={cls} aria-hidden="true" />;
    case 'code':
      return <Code2 className={cls} aria-hidden="true" />;
  }
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  resetSignal,
  onMovedChange,
  topZ,
  onBringToFront,
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const visibleProjects =
    activeFilter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative pt-4">
      {/* Section Header on Cutting Mat */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
        <div>
          <span className="inline-block bg-yellow-400 text-slate-900 font-pixel text-xs px-3 py-1 rounded border-2 border-slate-900 shadow-hard-sm mb-2">
            PORTFOLIO SHOWCASE ✦
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight drop-shadow-md">
            CONTENTS &gt;&gt;&gt;
          </h2>
        </div>

        <p className="font-hand font-bold text-2xl text-yellow-300 transform -rotate-2 inline-flex items-center gap-1.5">
          <span>koleksi project, event &amp; karya desain</span>
          <Scissors className="w-5 h-5 inline-block" aria-hidden="true" />
        </p>
      </div>

      {/* Interactive Category Filter Controls */}
      <div
        role="tablist"
        aria-label="Filter kategori proyek"
        className="mb-10 inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/75 backdrop-blur-sm border-2 border-white/25 rounded-2xl shadow-lg"
      >
        {FILTER_TABS.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3.5 py-2 rounded-xl font-display font-bold text-xs sm:text-sm transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-yellow-400 text-slate-900 border-2 border-slate-900 shadow-hard-sm'
                  : 'text-slate-200 hover:text-white hover:bg-white/10 border-2 border-transparent'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Scrapbook Staggered Tilted Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {visibleProjects.map((project) => (
          <DraggablePaper
            key={project.id}
            dragId={`project-${project.id}`}
            baseRotation={project.baseRotation}
            resetSignal={resetSignal}
            onMovedChange={onMovedChange}
            topZ={topZ}
            onBringToFront={onBringToFront}
            onCleanClick={() => onSelectProject(project)}
            hintText="Drag atau klik detail!"
            resetLabel="↺ reset posisi"
            hintClassName="-top-6 left-4"
            resetButtonClassName="-top-4 right-4"
            className="rounded-2xl"
          >
            <article className="relative h-full">
              {/* Pink Binder Clip at Top */}
              <div
                aria-hidden="true"
                className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none"
              >
                <div className="w-6 h-7 border-2 border-slate-300 rounded-t-full -mb-1" />
                <div className="w-12 h-6 bg-[#FF2D78] border-2 border-slate-900 rounded shadow-md" />
              </div>

              {/* Paper Card Sheet */}
              <div className="bg-paper p-6 pt-9 rounded-2xl border-3 border-slate-900 shadow-paper3d flex flex-col h-full justify-between">
                <div>
                  {/* Visual Banner Header */}
                  <div
                    className={`bg-gradient-to-tr ${project.gradientClass} rounded-xl p-5 border-2 border-slate-900 shadow-inner mb-4 relative overflow-hidden pointer-events-none ${
                      project.darkHeaderText ? 'text-slate-900' : 'text-white'
                    }`}
                  >
                    <div
                      className={`absolute top-2.5 right-2.5 font-pixel text-[10px] px-2 py-0.5 rounded ${
                        project.darkHeaderText
                          ? 'bg-white/60 text-slate-900'
                          : 'bg-white/20 text-white backdrop-blur-xs'
                      }`}
                    >
                      {project.tag}
                    </div>
                    <div className="mb-2.5">{renderBannerIcon(project.iconName, project.darkHeaderText)}</div>
                    <h4 className="font-display font-bold text-lg leading-snug">
                      {project.bannerTitle}
                    </h4>
                    <p
                      className={`text-xs mt-0.5 ${
                        project.darkHeaderText ? 'text-amber-950/90' : 'text-white/90'
                      }`}
                    >
                      {project.bannerSubtitle}
                    </p>
                  </div>

                  {/* Card Index & Title */}
                  <div className="flex items-center gap-2.5 mb-2 pointer-events-none">
                    <span
                      className={`font-pixel text-xs ${project.badgeColor} ${project.badgeTextColor} px-2 py-0.5 rounded border border-slate-900 font-bold tabular-nums`}
                    >
                      {project.number}
                    </span>
                    <h3 className="font-display font-bold text-xl text-slate-900 leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 pointer-events-none">
                    {project.summary}
                  </p>
                </div>

                {/* Footer Metadata & Detail Action */}
                <div className="pt-3 border-t border-dashed border-slate-300 flex items-center justify-between gap-3">
                  <div className="text-[11px] font-semibold text-slate-600 pointer-events-none flex flex-wrap items-center gap-x-1.5">
                    {project.tags.map((tag, idx) => (
                      <React.Fragment key={tag}>
                        <span>{tag}</span>
                        {idx < project.tags.length - 1 && (
                          <span aria-hidden="true" className="text-slate-400">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <button
                    type="button"
                    data-no-drag="true"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1 font-display font-bold text-xs text-blue-700 hover:text-pink-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Detail</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          </DraggablePaper>
        ))}
      </div>
    </section>
  );
};
