import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/portfolioData';

const tabs = Object.keys(skills) as Array<keyof typeof skills>;

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const activeSkills = skills[activeTab];

  return (
    <section id="skills" className="section-padding px-5 border-t border-zinc-900 bg-zinc-950/40">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">02 / Capabilities</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Technical Skills
            </h2>
            <p className="text-zinc-500 text-xs font-mono">
              VERIFIED THROUGH RESUME & PRODUCTION PROJECTS
            </p>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap gap-2 mb-8 p-1.5 rounded-full bg-[#0b1325] border border-slate-800 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`jump-btn px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skill Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {activeSkills.map(({ name }) => (
              <div
                key={name}
                className="jump-card rounded-2xl p-4 bg-[#0a1020]/80 border border-slate-800 hover:border-sky-500/40 shadow-lg group cursor-default flex items-center justify-between"
              >
                <span className="text-slate-200 font-semibold text-sm group-hover:text-sky-300 transition-colors">
                  {name}
                </span>
                <span className="w-2 h-2 rounded-full bg-sky-400/60 group-hover:bg-sky-400 transition-colors" />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Architectural summary banner */}
        <div className="mt-8 p-4.5 rounded-xl bg-zinc-900/40 border border-zinc-850 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs text-zinc-400">
            <span className="text-zinc-200 font-medium font-mono mr-2">Core Workflow:</span>
            Python (FastAPI, Scikit-learn, PyTorch) · PostgreSQL & SQLite · Docker · AWS · LangGraph
          </div>
          <div className="text-[11px] font-mono text-zinc-500 whitespace-nowrap">
            100% Deterministic Testing
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
