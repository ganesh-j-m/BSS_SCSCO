import React, { useState } from 'react';
import { OFFICIAL_SCHOLARSHIPS } from '../../data/officialData';
import { Award, Search, FileCheck, CheckCircle2, ShieldAlert } from 'lucide-react';

export const ScholarshipsView: React.FC = () => {
  const [search, setSearch] = useState('');

  const filtered = OFFICIAL_SCHOLARSHIPS.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.marathiName.includes(search) ||
    s.minPercentage.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-poppins">
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Financial Concessions & Welfare
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Scholarships & Financial Aid
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            15 official Central, State Government, and institutional scholarship schemes (Prospectus Pages 37-38).
          </p>
        </div>

        <div className="text-xs text-amber-300 font-mono bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
          Aadhaar & ABC Mandatory
        </div>
      </div>

      {/* Mandatory Bank Account & Rules Notice */}
      <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 space-y-1">
        <span className="font-bold flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          Mandatory Bank Account Requirement (Page 38):
        </span>
        <p className="text-emerald-900">
          For all government scholarships, eligible students must hold an active savings account in a <strong>Nationalized Bank</strong> linked with their Aadhaar Card. Scholarship disbursements are directly credited by the Government via DBT. Every year, students must re-apply or submit renewal forms.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by scholarship name or category..."
          className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500 shadow-2xs"
        />
      </div>

      {/* Schemes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all p-5 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-full bg-amber-50 text-amber-800 font-bold text-xs flex items-center justify-center">
                  {item.id}
                </span>
                <span className="text-[11px] font-mono text-slate-700">
                  Scheme #{item.id}
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {item.name}
                </h3>
                <div className="text-xs text-amber-800 font-medium mt-0.5">
                  {item.marathiName}
                </div>
              </div>

              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Min. Percentage:</span>
                  <span className="font-semibold text-slate-900">{item.minPercentage}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Income Ceiling:</span>
                  <span className="font-semibold text-slate-900">{item.incomeLimit}</span>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">
                  Required Documents:
                </span>
                <ul className="space-y-1 text-[11px] text-slate-700 pl-3 list-disc">
                  {item.requiredDocuments.map((doc, idx) => (
                    <li key={idx}>{doc}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-slate-100 text-[11px] text-slate-700 text-center">
              Apply via Mahadbt / College Scholarship Section
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
