import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { education } from '../data/portfolioData';

const Education: React.FC = () => (
  <section id="education" className="section-padding px-5 border-t border-slate-850 bg-[#060b16]">
    <div className="max-w-5xl mx-auto">
      
      {/* Section Header */}
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-2 font-semibold">
          {'// Academic Credentials'}
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Education & <span className="text-sky-400">Schooling</span>
        </h2>
      </div>

      <div className="space-y-6">
        {education.map((edu, i) => (
          <div
            key={i}
            className="jump-card rounded-2xl p-6 sm:p-8 bg-[#0a1020]/90 border border-slate-800 shadow-xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  {edu.type === 'College' ? <GraduationCap size={24} /> : <BookOpen size={22} />}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-bold text-lg sm:text-xl tracking-tight">
                      {edu.degree}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                      {edu.type}
                    </span>
                  </div>
                  <p className="text-sky-300 font-semibold text-sm">
                    {edu.fullName}
                  </p>
                  <p className="text-slate-400 text-xs font-mono mt-0.5">
                    {edu.location}
                  </p>
                </div>
              </div>

              {/* Score & Duration Capsule */}
              <div className="flex sm:flex-col sm:items-end gap-3 text-xs font-mono">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e172e] border border-sky-500/40 text-white font-bold shadow-sm">
                  <Award size={14} className="text-emerald-400" />
                  <span>{edu.type === 'College' ? `CGPA: ${edu.gpa}` : `Score: ${edu.gpa}`}</span>
                </div>
                {edu.duration && edu.duration !== 'Completed' && (
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Calendar size={13} className="text-slate-500" />
                    {edu.duration}
                  </span>
                )}
              </div>
            </div>

            {/* Relevant Coursework for College */}
            {edu.type === 'College' && (
              <div className="mt-6 pt-6 border-t border-slate-800/80">
                <p className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">
                  Relevant Coursework & Core Modules
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Structures & Algorithms',
                    'Design & Analysis of Algorithms',
                    'Database Management Systems',
                    'Operating Systems Architecture',
                    'Computer Networks',
                    'Machine Learning',
                    'Deep Learning & Computer Vision',
                    'Cloud Architecture & Distributed Systems',
                    'Object-Oriented Programming (Java / C++)',
                  ].map((sub) => (
                    <span
                      key={sub}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Education;
