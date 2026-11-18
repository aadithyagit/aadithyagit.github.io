import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'intro', href: '#home' },
  { label: 'about me', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'projects', href: '#projects' },
  { label: 'experience', href: '#experience' },
  { label: 'achievements', href: '#achievements' },
  { label: 'certificates', href: '#certificates' },
  { label: 'contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('intro');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? Math.round((window.scrollY / totalHeight) * 100) : 0;
      setScrollProgress(progress);

      const sectionMap: Record<string, string> = {
        home: 'intro',
        about: 'about me',
        skills: 'skills',
        projects: 'projects',
        experience: 'experience',
        achievements: 'achievements',
        certificates: 'certificates',
        contact: 'contact',
      };

      const ids = Object.keys(sectionMap);
      let current = 'intro';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) {
          current = sectionMap[id];
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const remaining = 100 - scrollProgress;

  return (
    <>
      {/* Desktop Terminal Nav with Real-time Progress Bar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden lg:block w-[92%] max-w-4xl">
        <div className="relative overflow-hidden rounded-full border border-sky-500/25 bg-[#0b1325]/90 backdrop-blur-md shadow-2xl shadow-black/80 px-4 py-2">
          
          {/* Animated Blue Progress Bar Fill in the background */}
          <div
            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-blue-600/40 via-sky-500/35 to-blue-500/30 transition-all duration-150 -z-10"
            style={{ width: `${scrollProgress}%` }}
          />

          <div className="flex items-center justify-between text-xs font-mono">
            {/* Left percentage indicator */}
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold select-none pr-3 border-r border-slate-700/60">
              <span className="text-emerald-400 font-mono">→</span>
              <span>{scrollProgress}%</span>
            </div>

            {/* Middle Nav Items */}
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
              {navItems.map(({ label, href }) => {
                const isActive = activeSection === label;
                return (
                  <button
                    key={label}
                    onClick={() => handleNav(href)}
                    className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-sky-300 font-bold bg-sky-500/20 border border-sky-400/40 shadow-sm shadow-sky-500/20'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {`{${label}}`}
                  </button>
                );
              })}
            </div>

            {/* Right Remaining Indicator & Chevron */}
            <div className="flex items-center gap-2 pl-3 border-l border-slate-700/60 text-slate-400 select-none">
              <span className="text-[11px] whitespace-nowrap">{remaining}% remaining</span>
              <ChevronDown size={14} className="text-slate-400" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className="fixed top-3 right-3 z-50 lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2.5 rounded-full bg-[#0b1325]/90 border border-sky-500/30 text-sky-400 shadow-xl backdrop-blur-md"
          aria-label="Navigation menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {menuOpen && (
          <div className="absolute top-12 right-0 bg-[#090f1d] border border-sky-500/30 rounded-2xl p-3 w-56 shadow-2xl backdrop-blur-lg">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 font-mono text-xs">
              <span className="text-emerald-400">→ {scrollProgress}%</span>
              <span className="text-slate-400">{remaining}% left</span>
            </div>
            {navItems.map(({ label, href }) => (
              <button
                key={label}
                onClick={() => handleNav(href)}
                className={`w-full text-left font-mono text-xs px-3 py-2 rounded-lg transition-colors ${
                  activeSection === label
                    ? 'bg-sky-500/20 text-sky-300 font-bold'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                {`{${label}}`}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
