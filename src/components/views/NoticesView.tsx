import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Bell, Search, Pin, FileText, Download, Calendar, Filter } from 'lucide-react';

export const NoticesView: React.FC = () => {
  const { notices, currentUser } = useApp();
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');

  const categories = ['ALL', 'Admission', 'Academic', 'Exam', 'Scholarship', 'General'];

  const filtered = notices.filter(n => {
    const matchesCat = categoryFilter === 'ALL' || n.category === categoryFilter;
    const matchesSearch = n.title.toLowerCase().includes(search.toLowerCase()) ||
                          n.content.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-poppins">
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Institutional Notices & Bulletins
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Notice Board & Announcements
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Official circulars, admission deadlines, examination schedules, and scholarship dates.
          </p>
        </div>

        <div className="text-xs text-slate-400 font-mono">
          Updated: Academic Year 2026-27
        </div>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200">
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setCategoryFilter(c)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                categoryFilter === c
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-slate-600 hover:text-slate-900 bg-slate-50'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search notices..."
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      {/* Notices List */}
      <div className="space-y-4">
        {filtered.map(notice => (
          <div
            key={notice.id}
            className={`p-6 rounded-2xl bg-white border transition-all ${
              notice.isPinned
                ? 'border-amber-400/80 shadow-md ring-1 ring-amber-400/20'
                : 'border-slate-200 shadow-xs hover:border-slate-300'
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  {notice.isPinned && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 text-[10px] font-bold uppercase tracking-wider">
                      <Pin className="w-3 h-3 fill-amber-700 text-amber-700" />
                      Pinned Circular
                    </span>
                  )}
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 font-semibold text-[11px]">
                    {notice.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {notice.date}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Audience: <strong>{notice.audience}</strong>
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900">
                  {notice.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                  {notice.content}
                </p>
              </div>

              {notice.attachmentName && (
                <div className="shrink-0">
                  <button
                    onClick={() => alert(`Downloading verified attachment: ${notice.attachmentName}`)}
                    className="p-2 sm:px-3 sm:py-2 rounded-xl bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5"
                    title={notice.attachmentName}
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">PDF Circular</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
