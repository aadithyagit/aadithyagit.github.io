import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, ChevronDown, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

const taglines = [
  'Computer Science Engineer',
  'AI / ML & Backend Systems',
  'Computer Vision & Deep Learning',
  'Cloud & Distributed APIs',
];

const Hero: React.FC = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = taglines[currentTagline];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < target.length) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 55);
      } else {
        timeout = setTimeout(() => setTyping(false), 2400);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        timeout = setTimeout(() => {
          setCurrentTagline((prev) => (prev + 1) % taglines.length);
          setTyping(true);
        }, 400);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, currentTagline]);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-5 pt-20 pb-16">
      {/* Subtle architectural background grid - gives it a bespoke engineering look */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Subtle single ambient vignette */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-zinc-800/20 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl w-full mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">
        
        {/* Left Column — Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Full Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3">
            Aadithya Sreekaant P
          </h1>

          {/* Typewriter role */}
          <div className="text-lg sm:text-xl font-mono text-zinc-400 mb-6 h-8 flex items-center justify-center lg:justify-start gap-1">
            <span className="text-zinc-200">{displayed}</span>
            <span className="animate-blink text-zinc-400 font-light">|</span>
          </div>

          {/* Bio statement */}
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 font-normal">
            Computer Science undergraduate at <span className="text-zinc-200 font-medium">SRM University</span> (GPA 9.29/10). 
            Engineered real-world software & ML systems at <span className="text-zinc-200 font-medium">TCS</span>, <span className="text-zinc-200 font-medium">IIT Palakkad</span>, and <span className="text-zinc-200 font-medium">IIITM-K</span>.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3.5 justify-center lg:justify-start mb-9">
            <a
              href={personalInfo.resume}
              download="Aadithya_Sreekaant_Resume.pdf"
              className="jump-btn inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg shadow-sky-500/25"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
            
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="jump-btn inline-flex items-center gap-2 px-6 py-3 bg-[#0d162b] border border-sky-500/30 hover:border-sky-400 text-slate-200 hover:text-white font-semibold text-sm rounded-xl transition-all shadow-md"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={15} className="text-sky-400" />
            </a>
          </div>

          {/* Social icons */}
          <div className="flex gap-3 justify-center lg:justify-start items-center">
            {[
              { icon: <GithubIcon size={18} />, href: personalInfo.github, label: 'GitHub' },
              { icon: <LinkedinIcon size={18} />, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: <Mail size={18} />, href: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="jump-btn w-10 h-10 flex items-center justify-center rounded-xl bg-[#0d162b] border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-all shadow-md"
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column — Professional Portrait Frame */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative">
            {/* Elegant double border frame without tacky rainbow effects */}
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl p-1.5 bg-zinc-900/90 border border-zinc-800 shadow-2xl shadow-black/80">
              <div className="w-full h-full rounded-xl overflow-hidden border border-zinc-800/80 bg-zinc-950">
                <img
                  src={personalInfo.photo}
                  alt="Aadithya Sreekaant P"
                  className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[0.98]"
                />
              </div>
            </div>

            {/* Clean metadata badge attached to photo */}
            <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-lg bg-zinc-950/95 border border-zinc-800 text-[11px] font-mono text-zinc-400 shadow-xl flex items-center gap-1.5 backdrop-blur-md">
              <span className="text-zinc-500">loc:</span>
              <span className="text-zinc-300">Madurai, IN</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Down indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-600 flex flex-col items-center gap-1 cursor-pointer hover:text-zinc-400 transition-colors"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="font-mono text-[11px] tracking-wider uppercase text-zinc-500">Explore</span>
        <ChevronDown size={14} />
      </motion.div>
    </section>
  );
};

export default Hero;
