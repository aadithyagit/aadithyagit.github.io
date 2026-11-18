import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, ArrowUpRight, Eye, Plus } from 'lucide-react';
import { projects } from '../data/portfolioData';

type Status = 'all' | 'completed' | 'in-progress' | 'planned';

// Featured projects with GitHub repositories
const featuredGithubProjects = [
  {
    id: 2,
    name: 'RecoverAI',
    tagline: 'Autonomous AI Payment Recovery Agent',
    description: 'Autonomous AI payment recovery agent built for the Razorpay AI Builder Internship (Track 3: AI Revenue Recovery). Detects failed transactions, diagnoses root causes, and executes bounded recovery actions with strict financial guardrails.',
    github: 'https://github.com/aadithyagit/recover-ai',
    accentColor: '#8b5cf6',
    gradient: 'from-violet-900/60 via-purple-900/30 to-slate-950',
    urlLabel: 'recoverai.engine',
    stats: [
      { label: 'Guardrails Enforced', value: '6 Deterministic' },
      { label: 'Agent Tools', value: '10 Workflows' },
      { label: 'Audit Trail', value: 'SHA-256' },
    ],
    bullets: [
      'Developed an autonomous recovery agent utilizing deterministic guardrails to prevent revenue loss from failed transactions.',
      'Designed a multi-tool diagnostic engine classifying failures into 7 categories (timeout, auth drop, insufficient funds).',
      'Enforces strict financial guardrails (max 3 retries, human escalation for >₹10k) overriding probabilistic LLM outputs.',
      'Real-time recovery dashboard with dynamic business metrics: Revenue at Risk, Recovery Rate, and intervention logging.',
    ],
    tech: ['Next.js', 'FastAPI', 'Python', 'SQLite', 'TailwindCSS', 'Razorpay API', 'Gemini API'],
  },
  {
    id: 3,
    name: 'ExecutionOps',
    tagline: 'AI-Powered Incident Intelligence System',
    description: 'Enterprise incident management platform with layered NLU problem analysis, dynamic risk scoring, evidence-based root cause detection, and governed remediation workflows.',
    github: 'https://github.com/aadithyagit/executionops',
    accentColor: '#38bdf8',
    gradient: 'from-sky-950/70 via-blue-950/30 to-slate-950',
    urlLabel: 'executionops.internal',
    stats: [
      { label: 'Test Coverage', value: '127 Passed' },
      { label: 'Incident Categories', value: '8 Handled' },
      { label: 'Risk Range', value: '0 - 100 Score' },
    ],
    bullets: [
      'Layered deterministic NLU engine supporting text normalization, phrase extraction, and negation handling across 8 incident categories.',
      'Dynamic risk scoring (0–100) with telemetry-based weight redistribution and missing metric disclosure.',
      'Deterministic remediation workflows with actionable checklists and governed human approval gates.',
      'Complete SQLite persistence with demo/production data isolation and statistical Z-score anomaly detection.',
    ],
    tech: ['Python', 'Streamlit', 'SQLite', 'NLU Engine', 'Pytest', 'Plotly'],
  },
  {
    id: 6,
    name: 'Private Space Booking System',
    tagline: 'Multi-Location Space Reservation Platform',
    description: 'Production-ready web platform for booking private co-working and study spaces across 10 Chennai locations, with real-time capacity validation and time-slot scheduling.',
    github: 'https://github.com/aadithyagit/private-space-booking-system',
    accentColor: '#10b981',
    gradient: 'from-emerald-950/70 via-teal-950/30 to-slate-950',
    urlLabel: 'spacebook.chennai.in',
    stats: [
      { label: 'Locations', value: '10 Chennai Hubs' },
      { label: 'Daily Slots', value: '17 Fixed Hourly' },
      { label: 'Capacity Limit', value: 'Max 30 / Slot' },
    ],
    bullets: [
      'Strict backend capacity constraint enforcement allowing max 30 simultaneous users per slot and date.',
      'RESTful API handling user registration, adjacent multi-slot reservation without gaps, and real-time spot tracking.',
      'Duplicate booking prevention, user reservation limits, and automated cancellation with connection pool safety.',
      'Dedicated user dashboards for location selection, real-time availability checks, and booking history.',
    ],
    tech: ['Node.js', 'Express.js', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<Status>('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Non-github standard projects (7 projects)
  const standardProjects = projects.filter((p) => !p.github);

  const filteredStandard = filter === 'all' 
    ? standardProjects 
    : standardProjects.filter((p) => p.status === filter);

  return (
    <section id="projects" className="section-padding px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-2 font-semibold">
            {'// Engineering Portfolio'}
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            Stuff I <span className="text-sky-400">Built</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Interactive software, autonomous AI agents, and computer vision systems built with production rigor.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* FEATURED PROJECTS WITH GITHUB REPOSITORIES (EXACT 2-COLUMN FEATURE LAYOUT) */}
        {/* ========================================================================= */}
        <div className="space-y-12 mb-20">
          {featuredGithubProjects.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="jump-card rounded-3xl border border-sky-500/20 bg-[#0a1020]/90 p-5 sm:p-8 lg:p-10 shadow-2xl shadow-black/80 relative overflow-hidden group"
            >
              {/* Subtle accent line on top */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r"
                style={{
                  backgroundImage: `linear-gradient(to right, transparent, ${p.accentColor}, transparent)`
                }}
              />

              <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                
                {/* LEFT COLUMN: BROWSER APP WINDOW MOCKUP */}
                <div className="lg:col-span-7">
                  <div className={`rounded-2xl border border-slate-700/60 bg-gradient-to-br ${p.gradient} p-5 sm:p-7 shadow-xl relative overflow-hidden`}>
                    
                    {/* Header Title inside mockup banner */}
                    <div className="mb-4">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                        {p.name}: {p.tagline}
                      </h3>
                    </div>

                    {/* Realistic Browser Window Frame */}
                    <div className="rounded-xl border border-slate-700/80 bg-[#090e1c] shadow-2xl overflow-hidden relative">
                      
                      {/* Top Browser Chrome Bar */}
                      <div className="px-3.5 py-2.5 bg-[#0e162b] border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                        </div>
                        <div className="px-3 py-0.5 rounded-full bg-slate-900 border border-slate-700/60 text-[11px] text-slate-400 font-mono">
                          {p.urlLabel}
                        </div>
                        <div className="w-4 h-4 rounded-full bg-sky-500/30 text-sky-400 flex items-center justify-center text-[10px] font-bold">
                          A
                        </div>
                      </div>

                      {/* Mockup Dashboard Content */}
                      <div className="p-4 sm:p-5 relative min-h-[190px] flex flex-col justify-between">
                        
                        {/* Stat Badges inside screen */}
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {p.stats.map((s) => (
                            <div key={s.label} className="p-2.5 rounded-lg bg-[#0e172e]/90 border border-slate-800 text-center">
                              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{s.label}</p>
                              <p className="text-xs sm:text-sm font-bold text-white font-mono mt-0.5">{s.value}</p>
                            </div>
                          ))}
                        </div>

                        {/* Interactive Center Pulsing Badge */}
                        <div className="flex items-center justify-center my-3">
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-sky-400/50 text-sky-300 font-mono text-xs font-semibold shadow-lg shadow-sky-500/20 hover:scale-105 transition-transform"
                          >
                            <Eye size={14} className="text-sky-400 animate-pulse" />
                            <span>VIEW ON GITHUB</span>
                            <ArrowUpRight size={13} />
                          </a>
                        </div>

                        {/* Bottom status line */}
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
                          <span className="flex items-center gap-1 text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping" />
                            Production Architecture
                          </span>
                          <span>Verified Implementation</span>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

                {/* RIGHT COLUMN: SPECS, BULLETS, TECH STACK & GITHUB BUTTON */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    {/* Title with Vertical Blue Line and Checkout Button */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-1 h-7 rounded-full bg-sky-400 inline-block" />
                        <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {p.name}
                        </h4>
                      </div>

                      {/* Check out button with jump animation */}
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="jump-btn inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-800/90 hover:bg-sky-500/20 border border-slate-700 hover:border-sky-400 text-xs font-semibold text-slate-200 hover:text-sky-300 transition-all shadow-md"
                      >
                        <span>Check out</span>
                        <ArrowUpRight size={13} className="text-sky-400" />
                      </a>
                    </div>

                    {/* Punchy Summary */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {p.description}
                    </p>

                    {/* Bullet Points with Blue Plus Icons */}
                    <ul className="space-y-3 mb-6">
                      {p.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed">
                          <Plus size={15} className="mt-0.5 text-sky-400 flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badge pills with jump hover */}
                  <div>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="jump-btn px-3 py-1 rounded-full text-xs font-medium bg-[#0e1628] border border-slate-700/80 text-slate-200 hover:border-sky-400 hover:text-sky-300 cursor-default transition-all shadow-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* OTHER PROJECTS SECTION (CLEAN STANDARD CARDS WITHOUT GITHUB BUTTONS)    */}
        {/* ========================================================================= */}
        <div className="mt-24 pt-12 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-1">
                {'// Research, AI & Full-Stack Systems'}
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                More Selected Projects
              </h3>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {(['all', 'completed', 'in-progress', 'planned'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                    filter === f
                      ? 'bg-sky-500 text-white font-bold shadow-md shadow-sky-500/30'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  {f === 'all' ? 'All' : f === 'in-progress' ? 'In Progress' : f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredStandard.map((project) => {
              const isExpanded = expandedId === project.id;
              return (
                <div
                  key={project.id}
                  className="jump-card rounded-2xl p-6 border border-slate-800 bg-[#0a1020]/70 flex flex-col justify-between transition-all"
                >
                  <div>
                    {/* Status & Org Header */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono border ${
                        project.status === 'completed'
                          ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                          : project.status === 'in-progress'
                          ? 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                          : 'bg-slate-700/20 text-slate-400 border-slate-600/30'
                      }`}>
                        {project.status.toUpperCase()}
                      </span>

                      {project.org && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60">
                          {project.org}
                        </span>
                      )}

                      {project.achievement && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/15 text-amber-300 border border-amber-500/30">
                          🏆 WINNER
                        </span>
                      )}
                    </div>

                    <h4 className="text-white font-bold text-base sm:text-lg mb-1 leading-snug">
                      {project.fullName || project.name}
                    </h4>

                    <p className="font-mono text-xs text-sky-400/80 mb-3">
                      {project.category}
                    </p>

                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80 mb-3">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Expandable specs button */}
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : project.id)}
                      className="text-xs font-mono text-slate-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
                    >
                      <span>{isExpanded ? 'Hide Specs' : 'View Specifications'}</span>
                      {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 pt-3 border-t border-slate-800/80 text-xs text-slate-300 space-y-1.5">
                        {project.points.map((pt, j) => (
                          <div key={j} className="flex items-start gap-1.5">
                            <span className="text-sky-400 font-bold">›</span>
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
