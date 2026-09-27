import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { COLLEGE_PROFILE } from '../../data/officialData';
import {
  ShieldAlert,
  Award,
  Users,
  BookOpen,
  TrendingUp,
  CreditCard,
  Send,
  Bell,
  CheckCircle,
  Building,
  GraduationCap
} from 'lucide-react';

export const PrincipalPortal: React.FC = () => {
  const { currentUser, addNotice, logAction } = useApp();
  const [broadcastTitle, setBroadcastTitle] = useState('');
  const [broadcastBody, setBroadcastBody] = useState('');
  const [broadcastSent, setBroadcastSent] = useState(false);

  const handleBroadcast = (e: React.FormEvent) => {
    e.preventDefault();
    addNotice({
      title: broadcastTitle,
      category: 'General',
      audience: 'ALL',
      date: new Date().toISOString().split('T')[0],
      isPinned: true,
      content: broadcastBody
    });
    setBroadcastSent(true);
    setBroadcastTitle('');
    setBroadcastBody('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-poppins">
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Executive Command Center · प्राचार्य कार्यालय
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            Dr. Sanjay Namdev Aswale (Principal)
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
            M.Com., M.A.(Eco), M.Phil., Ph.D., G.D.C&A · Head of Institution · District Promoter, Career Katta
          </p>
        </div>

        <div className="text-xs text-amber-300 font-mono bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
          Academic Year 2026-27 Active
        </div>
      </div>

      {/* Institutional KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
          <span className="text-xs font-medium text-slate-500">Total Enrolled Students</span>
          <div className="text-3xl font-extrabold text-slate-900 font-mono">6,042</div>
          <span className="text-[11px] font-semibold text-emerald-600">Across Junior, UG & PG Wings</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
          <span className="text-xs font-medium text-slate-500">Teaching Faculty</span>
          <div className="text-3xl font-extrabold text-slate-900 font-mono">68</div>
          <span className="text-[11px] font-semibold text-sky-600">Senior & Junior College Faculty</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
          <span className="text-xs font-medium text-slate-500">Ph.D. Scholars Awarded</span>
          <div className="text-3xl font-extrabold text-slate-900 font-mono">71</div>
          <span className="text-[11px] font-semibold text-purple-600">+30 M.Phil Degrees Conferred</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
          <span className="text-xs font-medium text-slate-500">Total Scholarly Papers</span>
          <div className="text-3xl font-extrabold text-slate-900 font-mono">550+</div>
          <span className="text-[11px] font-semibold text-amber-600">Peer-Reviewed Publications</span>
        </div>
      </div>

      {/* Department Academic Performance Trends */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center justify-between">
          <span>Faculty & Wing Academic Performance (Dr. BAMU Examination Audits)</span>
          <span className="text-xs font-semibold text-emerald-600">Average Pass Rate: 93.4%</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span>Science Faculty (UG & PG)</span>
              <span className="text-emerald-700 font-mono">94.8%</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-600 h-full rounded-full" style={{ width: '94.8%' }} />
            </div>
            <p className="text-[11px] text-slate-500">
              Chemistry, Physics & Comp. Sci. leading university merit lists.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span>Commerce Faculty (B.Com & M.Com)</span>
              <span className="text-emerald-700 font-mono">92.6%</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-600 h-full rounded-full" style={{ width: '92.6%' }} />
            </div>
            <p className="text-[11px] text-slate-500">
              High placement in private banking and audit assistant roles.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span>Arts & Humanities (B.A. & M.A.)</span>
              <span className="text-emerald-700 font-mono">91.2%</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-600 h-full rounded-full" style={{ width: '91.2%' }} />
            </div>
            <p className="text-[11px] text-slate-500">
              Exceptional ranks in History, Geography, and Marathi literature.
            </p>
          </div>
        </div>
      </div>

      {/* Broadcast Urgent Announcement */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
            Emergency Communications
          </span>
          <h3 className="text-base font-bold text-slate-900 mt-0.5">
            Broadcast Institutional Circular from Principal's Desk
          </h3>
        </div>

        {broadcastSent && (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>Official circular pinned and broadcast to student & parent portals.</span>
            </div>
            <button
              onClick={() => setBroadcastSent(false)}
              className="text-xs font-bold underline"
            >
              Post Another
            </button>
          </div>
        )}

        <form onSubmit={handleBroadcast} className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-700 font-semibold mb-1">
              Notice Subject / Circular Title *
            </label>
            <input
              type="text"
              required
              value={broadcastTitle}
              onChange={(e) => setBroadcastTitle(e.target.value)}
              placeholder="e.g. Schedule for Mid-Term Continuous Assessment Examinations"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-900"
            />
          </div>

          <div>
            <label className="block text-slate-700 font-semibold mb-1">
              Notice Content *
            </label>
            <textarea
              rows={3}
              required
              value={broadcastBody}
              onChange={(e) => setBroadcastBody(e.target.value)}
              placeholder="Enter full announcement text to be dispatched campus-wide..."
              className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-900"
            />
          </div>

          <button
            type="submit"
            className="px-5 py-2.5 bg-slate-900 text-white font-bold rounded-xl text-xs hover:bg-slate-800 transition-colors flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Broadcast Circular Campus-Wide</span>
          </button>
        </form>
      </div>
    </div>
  );
};
