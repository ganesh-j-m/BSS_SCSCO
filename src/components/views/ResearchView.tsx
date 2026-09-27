import React, { useState } from 'react';
import { RESEARCH_GUIDES } from '../../data/officialData';
import { Microscope, Award, BookOpen, Search, CheckCircle, ExternalLink } from 'lucide-react';

export const ResearchView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');

  const subjects = ['All', ...Array.from(new Set(RESEARCH_GUIDES.map(g => g.subject)))];

  const filtered = RESEARCH_GUIDES.filter(g => {
    const matchesSubject = selectedSubject === 'All' || g.subject === selectedSubject;
    const matchesSearch = g.name.toLowerCase().includes(search.toLowerCase()) ||
                          g.subject.toLowerCase().includes(search.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-poppins">
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            R&D Unit & Ph.D. Research Centers
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Research & Innovation Wing
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Dr. BAMU Recognized Research Centers in Chemistry, Physics, Commerce & Humanities.
          </p>
        </div>

        <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 text-xs text-right">
          <div className="text-slate-400">Total Ph.D. Degrees Conferred:</div>
          <div className="text-base font-bold font-mono text-emerald-400">71 Ph.D.s · 30 M.Phils</div>
        </div>
      </div>

      {/* Highlights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-sm">
            CRFC
          </div>
          <h3 className="text-base font-bold text-slate-900">
            Common Research Facility Center
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Inaugurated by Hon. Ashokrao Chavan in 2010. Equipped with X-Ray Diffractometer (XRD), FTIR Spectrophotometer, UV-Vis Spectrophotometer, and AC/DC Resistivity characterization.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-sm">
            550+
          </div>
          <h3 className="text-base font-bold text-slate-900">
            Scholarly Publications
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Faculty and research scholars have published over 550 peer-reviewed research papers in Scopus, Web of Science, and UGC Care listed national and international journals.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">
            27
          </div>
          <h3 className="text-base font-bold text-slate-900">
            Recognized Ph.D. Guides
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Active research guidance across Science, Commerce, and Arts with university research grants, national seminars, and doctoral defense evaluations.
          </p>
        </div>
      </div>

      {/* Research Guides Official Register (Pages 31-32) */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Recognized Research Guides Register (पान ३१-३२)
            </h3>
            <p className="text-xs text-slate-500">
              Verified intake capacity, awarded doctorates, and ongoing research scholars.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800"
            >
              {subjects.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search guide name..."
              className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-800"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-100/80 text-slate-700 font-semibold uppercase tracking-wider text-[11px] border-b border-slate-200">
              <tr>
                <th className="py-3 px-4 w-12 text-center">Sr.</th>
                <th className="py-3 px-4">Subject</th>
                <th className="py-3 px-4">Recognized Research Guide</th>
                <th className="py-3 px-4 text-center">Intake Capacity</th>
                <th className="py-3 px-4 text-center">Ph.D. Awarded</th>
                <th className="py-3 px-4 text-center font-bold text-amber-900">Working in Progress</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono">
              {filtered.map(row => (
                <tr key={row.sr} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-2.5 px-4 text-center font-sans text-slate-500">
                    {row.sr}
                  </td>
                  <td className="py-2.5 px-4 font-sans font-semibold text-slate-900">
                    {row.subject}
                  </td>
                  <td className="py-2.5 px-4 font-sans font-medium text-slate-800">
                    {row.name}
                  </td>
                  <td className="py-2.5 px-4 text-center text-slate-700">
                    {row.intake.toString().padStart(2, '0')}
                  </td>
                  <td className="py-2.5 px-4 text-center text-emerald-700 font-bold">
                    {row.awarded.toString().padStart(2, '0')}
                  </td>
                  <td className="py-2.5 px-4 text-center text-amber-700 font-bold">
                    {row.inProgress.toString().padStart(2, '0')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
