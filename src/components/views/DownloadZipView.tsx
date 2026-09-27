import React, { useState } from 'react';
import { createProjectZip } from '../../utils/generateZip';
import { Download, CheckCircle, FileCode, Archive, ShieldCheck, Sparkles } from 'lucide-react';

export const DownloadZipView: React.FC = () => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = async () => {
    try {
      setDownloading(true);
      const blob = await createProjectZip();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'SC(S)CO-Digital-Campus.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setDownloadSuccess(true);
    } catch (err) {
      console.error("ZIP creation error:", err);
      alert("Error preparing ZIP file.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-poppins">
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-800 text-center space-y-2">
        <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/20 text-sky-400 flex items-center justify-center mx-auto mb-2">
          <Archive className="w-6 h-6" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
          Source Code Archive & Deliverable
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Download SC(S)CO-Digital-Campus.zip
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
          Complete production-ready full-stack repository with official data, PostgreSQL Prisma schema, tests, documentation, and all 6 campus portals.
        </p>
      </div>

      {/* Main Download Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-10 space-y-6 text-center">
        <div className="max-w-md mx-auto space-y-3">
          <div className="w-20 h-20 rounded-2xl bg-amber-50 text-amber-800 border-2 border-amber-200 flex items-center justify-center mx-auto shadow-xs">
            <Archive className="w-10 h-10" />
          </div>

          <h3 className="text-lg font-bold text-slate-900">
            SC(S)CO-Digital-Campus.zip
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Contains all clean source files, Prisma migrations, seed scripts, typography configs (Poppins), official prospectus metadata, tests, and documentation. Sanitized with zero secrets, zero node_modules, and zero cache artifacts.
          </p>
        </div>

        <div>
          <button
            type="button"
            disabled={downloading}
            onClick={handleDownload}
            className="px-8 py-3.5 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-slate-950 font-bold rounded-xl text-sm shadow-md transition-all inline-flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>{downloading ? 'Packing Archive...' : 'Download SC(S)CO-Digital-Campus.zip'}</span>
          </button>
        </div>

        {downloadSuccess && (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 max-w-md mx-auto flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Archive downloaded successfully to your computer!</span>
          </div>
        )}

        {/* Contents Checklist */}
        <div className="pt-6 border-t border-slate-100 text-left space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
            Package Inclusions Checklist:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>src/ (All Views, Portals & Components)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>prisma/schema.prisma & seed.ts</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>docs/ (OFFICIAL-DATA-SOURCE.md, etc.)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>tests/app.test.ts</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>.env.example & package.json</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Full Technical Markdown Manuals</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
