import React, { useState } from 'react';
import { Trophy, Award, Users, BookOpen, ExternalLink, X, Sparkles, FileText, Download } from 'lucide-react';

interface AchievementItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  organization: string;
  description: string;
  year: string;
  easterEgg?: string;
  mediaType: 'image' | 'certificate';
  mediaSrc: string;
  badgeLabel: string;
  mediaSubtext?: string;
  objectPosition?: string;
}

const achievementList: AchievementItem[] = [
  {
    id: 'hackathon',
    icon: <Trophy size={18} className="text-amber-400" />,
    title: 'First Prize – Inter-College Open Innovation Hackathon',
    organization: 'Open Innovation Hackathon · Healthcare & Organ Donation Domain',
    description: 'Designed and presented an innovative centralized platform connecting organ donors and hospitals. Outperformed competing teams across colleges under strict evaluation criteria.',
    year: '2024',
    easterEgg: 'Aha! You discovered the win! 🎉',
    mediaType: 'image',
    mediaSrc: '/hackathon-win.jpg',
    badgeLabel: 'UNLOCKED',
    mediaSubtext: 'Winning Team with Certificates',
    objectPosition: 'object-center',
  },
  {
    id: 'poster',
    icon: <Award size={18} className="text-amber-400" />,
    title: 'First Prize – Inter-College Poster Presentation',
    organization: 'Department of Chemistry · SRM IST',
    description: 'Awarded First Prize along with Trophy and Certificate for outstanding research and presentation at the National Chemistry Day E-Poster Presentation competition.',
    year: '2024',
    easterEgg: '1st Prize Trophy & Certificate 🏆',
    mediaType: 'image',
    mediaSrc: '/poster-presentation-win.jpg',
    badgeLabel: '1ST PRIZE',
    mediaSubtext: 'Trophy & Certificate Award Ceremony',
    objectPosition: 'object-top',
  },
  {
    id: 'research',
    icon: <BookOpen size={18} className="text-sky-400" />,
    title: 'Research Publication – Image Denoising Algorithm Study',
    organization: 'Authored Research Paper · Virtual Reality (VR) Image Denoising',
    description: 'Researched and authored the research paper "Denoising", defining the algorithmic processing pipeline, Gaussian blur statistics, edge detection, and contour extraction for VR images.',
    year: 'Jul 2024',
    easterEgg: 'Author: Aadithya Sreekaant 📄',
    mediaType: 'certificate',
    mediaSrc: '/denoising-research.pdf',
    badgeLabel: 'RESEARCH PAPER',
    mediaSubtext: 'Authored Research Paper (PDF)',
  },
  {
    id: 'club',
    icon: <Users size={18} className="text-emerald-400" />,
    title: 'Co-Founder & Management Co-Lead – Synergy AI Club',
    organization: 'SRM Institute of Science and Technology · Synergy SRM',
    description: "Co-founded SRM's first fully AI-driven student organization. Led operational management, coordinated student workshops, and scaled technical AI projects across campus.",
    year: '2023 – Present',
    easterEgg: 'Synergy Management Co-Lead 🚀',
    mediaType: 'image',
    mediaSrc: '/synergy-management-lead.jpg',
    badgeLabel: 'LEADERSHIP',
    mediaSubtext: 'Official Management Co-Lead Poster',
    objectPosition: 'object-top',
  },
];

const Achievements: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<{ src: string; title: string } | null>(null);
  const [activeCert, setActiveCert] = useState<{ src: string; title: string } | null>(null);

  return (
    <section id="achievements" className="section-padding px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-amber-400 mb-2 font-semibold">
            {'// Recognitions & Milestones'}
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            Honors & <span className="text-amber-400">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Hackathon victories, trophy honors, research publications, and club leadership verified with official visual evidence.
          </p>
        </div>

        {/* Central Spine Timeline (Yellow / Golden inspired by reference site) */}
        <div className="relative">
          {/* Golden Timeline Spine Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-amber-400/80 via-amber-500/40 to-transparent md:-translate-x-px" />

          <div className="space-y-12 sm:space-y-16">
            {achievementList.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={item.id} className="relative">
                  
                  {/* Timeline Yellow Node Marker */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 w-4 h-4 rounded-full bg-[#060b16] border-2 border-amber-400 ring-4 ring-amber-400/20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  </div>

                  {/* Desktop 2-column alternating layout (Matching reference screenshot) */}
                  <div className="ml-10 md:ml-0 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    
                    {/* Column A: Text Card */}
                    <div className={`${isEven ? 'md:pr-10' : 'md:col-start-2 md:pl-10 md:row-start-1'}`}>
                      <div className="jump-card rounded-2xl border border-slate-800 bg-[#0a1020]/90 p-6 shadow-xl relative overflow-hidden group">
                        
                        {/* Header */}
                        <div className="flex items-start justify-between gap-3 mb-2.5">
                          <div className="flex items-center gap-2.5">
                            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30">
                              {item.icon}
                            </div>
                            <h3 className="text-white font-bold text-base sm:text-lg leading-snug">
                              {item.title}
                            </h3>
                          </div>
                        </div>

                        {/* Organization */}
                        <p className="text-xs font-mono text-slate-400 mb-3">
                          {item.organization}
                        </p>

                        {/* Description */}
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Footer row with Year and Easter Egg */}
                        <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs font-mono">
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold">
                            {item.year}
                          </span>

                          {item.easterEgg && (
                            <span 
                              className="text-[11px] text-amber-400/90 hover:text-amber-300 cursor-pointer transition-colors flex items-center gap-1"
                            >
                              <Sparkles size={11} className="text-amber-400" />
                              <span>{item.easterEgg}</span>
                            </span>
                          )}
                        </div>

                      </div>
                    </div>

                    {/* Column B: Certificate / Photo Card (Right Beside the text card!) */}
                    <div className={`${isEven ? 'md:pl-10' : 'md:col-start-1 md:pr-10 md:row-start-1'}`}>
                      {item.mediaType === 'image' && (
                        <div
                          onClick={() => setActivePhoto({ src: item.mediaSrc, title: item.title })}
                          className="jump-card rounded-2xl border-2 border-amber-400/80 bg-[#0c1428] p-2.5 shadow-2xl relative overflow-hidden cursor-pointer group"
                        >
                          {/* Top-right badge */}
                          <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-md bg-amber-400 text-slate-950 font-mono text-[11px] font-extrabold tracking-wider shadow-lg">
                            {item.badgeLabel}
                          </div>

                          {/* Image container */}
                          <div className="relative rounded-xl overflow-hidden aspect-[16/11] bg-slate-950">
                            <img
                              src={item.mediaSrc}
                              alt={item.title}
                              className={`w-full h-full object-cover ${item.objectPosition || 'object-center'} group-hover:scale-105 transition-transform duration-300 filter contrast-[1.04]`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-3">
                              <span className="text-xs font-mono text-white flex items-center gap-1.5 font-semibold">
                                <ExternalLink size={13} className="text-amber-400" />
                                <span>{item.mediaSubtext || 'Click to Expand Proof'}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {item.mediaType === 'certificate' && (
                        <div
                          onClick={() => setActiveCert({ src: item.mediaSrc, title: item.title })}
                          className="jump-card rounded-2xl border border-sky-400/50 bg-[#0c1428] p-6 shadow-xl cursor-pointer group flex flex-col justify-between min-h-[175px]"
                        >
                          <div className="flex items-start justify-between">
                            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-sky-500/20 text-sky-300 border border-sky-400/40 font-bold">
                              {item.badgeLabel}
                            </span>
                            <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 group-hover:scale-110 transition-transform">
                              <FileText size={18} />
                            </div>
                          </div>

                          <div>
                            <p className="text-white font-bold text-base mb-1">Denoising (Research Paper)</p>
                            <p className="text-slate-400 text-xs font-mono">Author: Aadithya Sreekaant · July 2024</p>
                          </div>

                          <div className="pt-3 border-t border-slate-800 text-xs font-mono text-sky-400 flex items-center justify-between">
                            <span className="flex items-center gap-1">
                              <ExternalLink size={12} />
                              <span>Preview Research Paper</span>
                            </span>
                            <span className="text-slate-500 text-[11px]">3 Pages</span>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Photo */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-slate-950 rounded-2xl overflow-hidden border-2 border-amber-400 p-2 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800">
              <span className="font-mono text-xs text-amber-300 font-semibold">{activePhoto.title}</span>
              <button
                onClick={() => setActivePhoto(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-1 flex items-center justify-center overflow-hidden">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="w-auto h-auto max-h-[78vh] rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal for PDF Research Paper */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-slate-950 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800 bg-[#0e162b]">
              <div>
                <p className="text-white font-medium text-sm">Denoising — Research Paper</p>
                <p className="text-slate-400 text-xs font-mono">Aadithya Sreekaant · July 2024</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={activeCert.src}
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-400/40 text-xs font-mono hover:bg-sky-500/30"
                >
                  <Download size={13} />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={() => setActiveCert(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
            <div className="flex-1 p-2 bg-slate-950" style={{ height: '78vh' }}>
              <iframe
                src={activeCert.src}
                className="w-full h-full rounded-lg"
                title="Denoising Research Paper"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
