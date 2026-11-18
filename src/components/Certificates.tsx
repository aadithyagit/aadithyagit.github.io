import React, { useState } from 'react';
import { FileText, ExternalLink, X, Download } from 'lucide-react';
import { certificates } from '../data/portfolioData';

const Certificates: React.FC = () => {
  const [openCert, setOpenCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certificates" className="section-padding px-5 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">07 / Verification</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Official Certificates
            </h2>
            <p className="text-zinc-500 text-xs font-mono">
              DIRECT PREVIEW OF VERIFIED ISSUED CERTIFICATES
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {certificates.map((cert, i) => (
            <div
              key={i}
              onClick={() => setOpenCert(cert)}
              className="subtle-card rounded-xl p-5 border border-zinc-850 transition-all duration-150 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 mb-4 group-hover:text-white transition-colors">
                  <FileText size={17} />
                </div>

                <h3 className="text-white font-medium text-sm leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="text-zinc-400 text-xs mb-3">
                  {cert.org}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-850 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>{cert.date}</span>
                <span className="text-zinc-300 group-hover:text-white flex items-center gap-1 transition-colors">
                  <span>View</span>
                  <ExternalLink size={11} />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Modal */}
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
              <div>
                <p className="text-white font-medium text-sm">{openCert.title}</p>
                <p className="text-zinc-400 text-xs font-mono">{openCert.org}</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={openCert.file}
                  download
                  className="inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 transition-colors"
                >
                  <Download size={13} />
                  <span>Download</span>
                </a>
                <a
                  href={openCert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 transition-colors"
                >
                  <ExternalLink size={13} />
                  <span>Full View</span>
                </a>
                <button
                  onClick={() => setOpenCert(null)}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-850 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="flex-1 bg-zinc-950 p-2 overflow-hidden" style={{ height: '78vh' }}>
              <iframe
                src={openCert.file}
                className="w-full h-full rounded-lg border border-zinc-850"
                title={openCert.title}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
