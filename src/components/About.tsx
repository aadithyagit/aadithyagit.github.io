import React from 'react';
import { Mail, MapPin, GraduationCap, Award, BookOpen } from 'lucide-react';
import { personalInfo, education } from '../data/portfolioData';

// User's exact 7 requested core areas
const coreAreasList = [
  'Artificial Intelligence',
  'Machine Learning',
  'Cloud Computing',
  'Backend Development',
  'Data Analytics',
  'Database Management',
  'Software Development',
];

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding px-5 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-2 font-semibold">01 / Profile</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            About <span className="text-sky-400">Me</span>
          </h2>
        </div>

        {/* Top Split: Bio & Quick Meta Cards */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
              I am a Computer Science undergraduate at <span className="text-white font-semibold">SRM University</span> with a strong foundation in data structures, system architecture, and applied machine learning.
            </p>
            
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              My engineering philosophy revolves around moving beyond isolated research prototypes into high-performance, deterministic production systems. Through internships at <span className="text-sky-300 font-medium">TCS</span>, <span className="text-violet-300 font-medium">IIT Palakkad</span>, and <span className="text-emerald-300 font-medium">Digital University Kerala</span>, I have engineered real-time computer vision pipelines, custom semantic search engines, and fault-tolerant financial recovery architectures.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              Experienced in Python, SQL, backend development, REST APIs, and data processing. Skilled in building database-driven applications and solving complex engineering challenges across modern stacks.
            </p>
          </div>

          {/* Quick Details Column */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
              <div className="jump-card rounded-xl p-4 bg-[#0a1020]/90 border border-slate-800 shadow-md">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-1.5">
                  <Mail size={13} className="text-sky-400" />
                  <span>EMAIL</span>
                </div>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-slate-200 text-xs font-mono hover:text-sky-300 transition-colors truncate block font-medium"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="jump-card rounded-xl p-4 bg-[#0a1020]/90 border border-slate-800 shadow-md">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-1.5">
                  <MapPin size={13} className="text-sky-400" />
                  <span>LOCATION</span>
                </div>
                <p className="text-slate-200 text-xs font-mono truncate font-medium">
                  {personalInfo.location}
                </p>
              </div>
            </div>

            {/* Engineering Focus Card */}
            <div className="jump-card rounded-xl p-5 bg-[#0a1020]/90 border border-slate-800 shadow-md">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-mono mb-2 font-semibold">
                <Award size={15} />
                <span className="uppercase tracking-wider">Engineering Focus</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Specialized in backend latency optimization, deterministic AI guardrails, statistical anomaly detection, and end-to-end cloud deployments.
              </p>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* CORE AREAS CONTAINER (EXACT MATCH TO REFERENCE IMAGE ATTACHED BY USER)   */}
        {/* ========================================================================= */}
        <div 
          className="jump-card rounded-2xl p-6 sm:p-8 bg-[#081022]/90 border border-slate-800 shadow-2xl relative overflow-hidden"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
            backgroundSize: '18px 18px',
          }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 tracking-tight">
            Core Areas
          </h3>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {coreAreasList.map((skill) => (
              <span
                key={skill}
                className="jump-btn px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-[#0e2144]/85 border border-[#2563eb]/60 text-[#60a5fa] hover:border-[#38bdf8] hover:text-[#93c5fd] transition-all cursor-default shadow-sm shadow-blue-900/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* EDUCATION & SCHOOLINGS (INTEGRATED DIRECTLY INSIDE ABOUT ME)               */}
        {/* ========================================================================= */}
        <div className="pt-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-sky-400 font-semibold mb-1">
                {'// Academic Pathway'}
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Education & Schooling
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline-block">
              SRM University & Jeevana School
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="jump-card rounded-2xl p-5 sm:p-6 bg-[#0a1020]/90 border border-slate-800 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                      {edu.type === 'College' ? <GraduationCap size={20} /> : <BookOpen size={19} />}
                    </div>
                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-[#0e172e] border border-sky-500/40 text-emerald-400 shadow-sm">
                      {edu.gpa}
                    </span>
                  </div>

                  <h4 className="text-white font-bold text-base sm:text-lg mb-1 leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-sky-300 text-xs font-semibold mb-1">
                    {edu.fullName}
                  </p>
                  <p className="text-slate-400 text-xs font-mono">
                    {edu.location} {edu.duration && edu.duration !== 'Completed' ? `· ${edu.duration}` : ''}
                  </p>
                </div>

                {edu.type === 'College' && (
                  <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                    <span className="text-slate-300 font-medium">Focus:</span> Algorithms, DBMS, Operating Systems, Machine Learning & Computer Vision
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
