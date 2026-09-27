import React, { useState } from 'react';
import { OFFICIAL_PRIZES } from '../../data/officialData';
import { Trophy, Search, Award, Gift, Sparkles } from 'lucide-react';

export const PrizesView: React.FC = () => {
  const [search, setSearch] = useState('');

  const filtered = OFFICIAL_PRIZES.filter(p =>
    p.prizeName.toLowerCase().includes(search.toLowerCase()) ||
    p.donorName.toLowerCase().includes(search.toLowerCase()) ||
    p.criteria.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-poppins">
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Endowments & Academic Honors · पारितोषिके
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Merit Prizes & Endowments
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            29 official donor-endowed academic excellence prizes and student encouragement awards (Prospectus Pages 39-40).
          </p>
        </div>

        <div className="text-xs text-amber-300 font-mono bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
          29 Endowed Awards
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by prize name, donor, subject, or class..."
          className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500 shadow-2xs"
        />
      </div>

      {/* Prizes Table Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900">
            Endowment Register (पारितोषिक यादी)
          </h3>
          <span className="text-xs text-slate-500 font-mono">
            Showing {filtered.length} of 29 Prizes
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-100/80 text-slate-700 font-semibold uppercase tracking-wider text-[11px] border-b border-slate-200">
              <tr>
                <th className="py-3 px-3 w-12 text-center">Sr.</th>
                <th className="py-3 px-4">Donor Name (देणगीदारांचे नाव)</th>
                <th className="py-3 px-4">Prize Name (पारितोषिकाचे नाव)</th>
                <th className="py-3 px-4">Eligibility / Criteria (पारितोषिकाचा निकष)</th>
                <th className="py-3 px-4 text-amber-900 font-bold text-right">Award Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map(p => (
                <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-3 text-center font-mono text-slate-700">
                    {p.id}
                  </td>
                  <td className="py-3 px-4 font-medium text-slate-800">
                    {p.donorName}
                  </td>
                  <td className="py-3 px-4 font-semibold text-slate-900">
                    {p.prizeName}
                  </td>
                  <td className="py-3 px-4 text-slate-700 max-w-md leading-relaxed">
                    {p.criteria}
                  </td>
                  <td className="py-3 px-4 font-mono font-bold text-amber-700 text-right whitespace-nowrap">
                    {p.amount}
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
