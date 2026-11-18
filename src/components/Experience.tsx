import React, { useState } from 'react';
import { Calendar, MapPin, ExternalLink, X, FileText, CheckCircle2 } from 'lucide-react';
import { experience } from '../data/portfolioData';

const Experience: React.FC = () => {
  const [openCert, setOpenCert] = useState<string | null>(null);

  return (
    <section id="experience" className="section-padding px-5 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">03 / Experience</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Work & Research History
            </h2>
            <p className="text-zinc-500 text-xs font-mono">
              ALL DATES & DESIGNATIONS VERIFIED BY OFFICIAL CERTIFICATES
            </p>
          </div>
        </div>

        {/* Timeline Stack */}
        <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-12">
          {experience.map((exp) => (
            <div key={exp.company} className="relative group">
              
              {/* Timeline Node Marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-950 border-2 border-zinc-600 group-hover:border-zinc-300 group-hover:scale-110 transition-all duration-200" />

              {/* Card Container */}
              <div className="subtle-card rounded-2xl p-6 sm:p-7 transition-all duration-200">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <h3 className="text-white font-semibold text-lg sm:text-xl tracking-tight">
                        {exp.company}
                      </h3>
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-800/90 text-zinc-300 border border-zinc-750">
                        {exp.shortName}
                      </span>
                    </div>
                    <p className="text-zinc-300 font-medium text-sm">
                      {exp.role}
                    </p>
                  </div>

                  {/* Date & Location */}
                  <div className="flex sm:flex-col sm:items-end gap-2 text-xs font-mono text-zinc-500">
                    <span className="flex items-center gap-1.5 text-zinc-400">
                      <Calendar size={13} className="text-zinc-500" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-zinc-500">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Project title highlight */}
                <div className="mb-4 inline-block px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                  <span className="text-zinc-500 mr-2">Focus:</span>
                  {exp.project}
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Key Points */}
                <ul className="space-y-2 mb-5">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0 text-zinc-500" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Row: Tech pills & Certificate button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-zinc-850">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setOpenCert(exp.certificate)}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-750 text-xs font-mono text-zinc-300 hover:text-white transition-colors w-fit shadow-sm"
                  >
                    <FileText size={13} className="text-zinc-400" />
                    <span>Official Certificate</span>
                    <ExternalLink size={11} className="text-zinc-500" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Clean Document Preview Modal */}
      {openCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setOpenCert(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-850 bg-zinc-900/60">
              <span className="font-mono text-xs text-zinc-300 flex items-center gap-2">
                <FileText size={14} className="text-zinc-400" />
                VERIFIED INTERNSHIP CERTIFICATE
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={openCert}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white px-3 py-1 rounded-md bg-zinc-800 border border-zinc-700 transition-colors"
                >
                  <ExternalLink size={12} />
                  <span>Open Full PDF</span>
                </a>
                <button
                  onClick={() => setOpenCert(null)}
                  className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
            
            <div className="flex-1 bg-zinc-950 p-2 overflow-hidden" style={{ height: '78vh' }}>
              <iframe
                src={openCert}
                className="w-full h-full rounded-lg border border-zinc-850"
                title="Certificate Preview"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
