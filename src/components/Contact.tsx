import React, { useState } from 'react';
import { Mail, Send, MapPin, ArrowUpRight, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    
    // Direct mailto fallback or simulated success
    setTimeout(() => {
      setSending(false);
      setSent(true);
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
    }, 600);
  };

  const contacts = [
    { icon: <Mail size={16} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <LinkedinIcon size={16} />, label: 'LinkedIn', value: 'aadithya-sreekaant', href: personalInfo.linkedin },
    { icon: <GithubIcon size={16} />, label: 'GitHub', value: 'aadithyagit', href: personalInfo.github },
    { icon: <MapPin size={16} />, label: 'Location', value: personalInfo.location, href: null },
  ];

  return (
    <section id="contact" className="section-padding px-5 border-t border-zinc-900 bg-zinc-950/40">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">08 / Connect</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Get in Touch
              </h2>
              <p className="text-zinc-400 text-sm mt-1">
                Open to full-time SWE / AI engineer opportunities, research, and technical collaborations.
              </p>
            </div>
            <div className="text-xs font-mono text-zinc-500">
              RESPONSE TIME: &lt; 24 HOURS
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Direct channels column */}
          <div className="lg:col-span-5 space-y-3">
            {contacts.map(({ icon, label, value, href }) => (
              <div
                key={label}
                className="subtle-card rounded-xl p-4 transition-all duration-150"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
                      {icon}
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-zinc-500 uppercase">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-200 text-sm font-medium hover:text-white transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-zinc-200 text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>

                  {href && (
                    <ArrowUpRight size={14} className="text-zinc-500" />
                  )}
                </div>
              </div>
            ))}

            <div className="subtle-card rounded-xl p-4.5 border border-zinc-850 mt-4">
              <p className="font-mono text-xs text-zinc-400 mb-1">Looking for candidates?</p>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Available for internships, graduation roles (Class of 2027), and immediate remote technical collaborations.
              </p>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="subtle-card rounded-2xl p-6 sm:p-7 border border-zinc-850 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    YOUR NAME
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Engineering Recruiter / Lead"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    YOUR EMAIL
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="name@company.com"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                  SUBJECT
                </label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Software Engineering / AI Opportunity"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Details regarding role, tech stack, team, or conversation topic..."
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors resize-none"
                />
              </div>

              {sent ? (
                <div className="w-full py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 text-xs font-mono flex items-center justify-center gap-2">
                  <Check size={14} className="text-emerald-400" />
                  <span>Mail client triggered. Looking forward to speaking!</span>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-white text-zinc-950 font-medium text-sm rounded-lg hover:bg-zinc-200 transition-colors shadow-sm disabled:opacity-50"
                >
                  <Send size={14} />
                  <span>{sending ? 'Processing...' : 'Send Message'}</span>
                </button>
              )}
            </form>
          </div>

        </div>

        {/* Minimalist Engineering Footer */}
        <div className="mt-20 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            Aadithya Sreekaant P · {new Date().getFullYear()}
          </div>
          <div className="flex items-center gap-4 text-zinc-500">
            <span>React 18</span>
            <span>TypeScript</span>
            <span>Tailwind</span>
            <span>Vite</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
