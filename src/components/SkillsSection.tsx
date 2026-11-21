import React, { useState } from 'react';
import { Scissors, CheckCircle2 } from 'lucide-react';
import { TOOLS, ToolItem } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<ToolItem>(TOOLS[0]);

  return (
    <section id="skills" className="relative pt-4">
      <div className="bg-graph-paper rounded-3xl p-6 sm:p-10 border-4 border-slate-900 shadow-paper3d relative">
        {/* Red Pushpin Top Center */}
        <div
          aria-hidden="true"
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-red-500 border-2 border-slate-900 shadow-md flex items-center justify-center"
        >
          <span className="w-2 h-2 rounded-full bg-white" />
        </div>

        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="font-pixel text-xs text-pink-700 tracking-wide block mb-1.5">
            TOOLBOX &amp; COMPETENCY
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900">
            SOFTWARE &amp; KEAHLIAN TEKNIS
          </h2>
          <p className="text-slate-600 text-sm mt-1.5">
            Pilih salah satu alat kerja di bawah untuk melihat penerapan nyata dalam proyek dan organisasi.
          </p>
        </div>

        {/* Software Grid Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {TOOLS.map((tool) => {
            const isSelected = selectedTool.id === tool.id;
            return (
              <button
                key={tool.id}
                type="button"
                onClick={() => setSelectedTool(tool)}
                aria-pressed={isSelected}
                className={`bg-white border-2 border-slate-900 rounded-2xl p-4 text-center transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                  isSelected
                    ? 'shadow-hard -translate-y-1 ring-2 ring-blue-600 bg-blue-50/40'
                    : 'shadow-hard-sm hover:shadow-hard hover:-translate-y-1'
                }`}
              >
                <div
                  className={`w-12 h-12 mx-auto rounded-xl ${tool.bgClass} flex items-center justify-center text-white ${
                    tool.isPixel ? 'font-pixel text-sm' : 'font-display font-bold text-xl'
                  } border-2 border-slate-900 shadow-sm mb-2.5`}
                >
                  {tool.id === 'capcut' ? <Scissors className="w-5 h-5" aria-hidden="true" /> : tool.shortCode}
                </div>
                <h3 className="font-display font-bold text-xs text-slate-900 whitespace-nowrap">
                  {tool.name}
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5 whitespace-nowrap">{tool.subtitle}</p>
              </button>
            );
          })}
        </div>

        {/* Active Tool Desk Spec Memo */}
        <div className="mt-7 bg-amber-50/90 border-2 border-slate-900 rounded-2xl p-5 sm:p-6 shadow-hard-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2.5">
              <span className="font-display font-bold text-lg text-slate-900">{selectedTool.name}</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-xs font-semibold text-blue-700">{selectedTool.category}</span>
            </div>
            <span className="font-pixel text-[10px] text-slate-500 uppercase">DESK SPEC</span>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed mb-3">{selectedTool.usageSummary}</p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs font-semibold text-slate-800">
            {selectedTool.outputs.map((output) => (
              <span key={output} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                <span>{output}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
