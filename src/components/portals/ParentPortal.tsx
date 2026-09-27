import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  User,
  CheckCircle,
  AlertCircle,
  Calendar,
  CreditCard,
  MessageSquare,
  Send,
  Phone,
  BookOpen,
  Award
} from 'lucide-react';

export const ParentPortal: React.FC = () => {
  const { currentUser, paidStudentFees } = useApp();
  const [parentMessage, setParentMessage] = useState('');
  const [msgSent, setMsgSent] = useState(false);

  const studentPaid = paidStudentFees['std-1'] || 0;
  const totalTuition = 4619;
  const balance = Math.max(0, totalTuition - studentPaid);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setMsgSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-poppins">
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Parent Monitoring Dashboard · पालक कक्ष
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            Welcome, {currentUser.name}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Linked Ward: <strong className="text-white">Aniket Balasaheb More</strong> (B.Sc. Computer Science - BCS Sem IV)
          </p>
        </div>

        <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 text-xs">
          <div className="text-slate-400">Class Mentor:</div>
          <div className="font-bold text-white">Dr. V. S. Suryawanshi (Chemistry)</div>
          <div className="text-emerald-400 font-mono mt-0.5">Phone: 9421360168</div>
        </div>
      </div>

      {/* Ward Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Attendance Card */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">Attendance Status</span>
            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
              REGULAR
            </span>
          </div>
          <div className="text-3xl font-extrabold text-slate-900 font-mono">
            88.4%
          </div>
          <p className="text-xs text-slate-600">
            Ward maintains mandatory 75%+ attendance requirement across all subjects.
          </p>
        </div>

        {/* Academic Marks Card */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">Recent Exam Performance</span>
            <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-bold text-[10px]">
              DISTINCTION
            </span>
          </div>
          <div className="text-3xl font-extrabold text-slate-900 font-mono">
            86.40%
          </div>
          <p className="text-xs text-slate-600">
            Dr. BAMU Semester III Examination result: Passed with Grade A+.
          </p>
        </div>

        {/* Tuition Fee Tracker */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">Tuition Fee Ledger</span>
            <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${balance === 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
              {balance === 0 ? 'PAID' : 'PENDING'}
            </span>
          </div>
          <div className="text-3xl font-extrabold font-mono text-slate-900">
            {balance === 0 ? '₹0.00' : `₹${balance.toFixed(2)}`}
          </div>
          <p className="text-xs text-slate-600">
            {balance === 0 ? 'Annual academic fees fully reconciled.' : 'Pending balance to be cleared.'}
          </p>
        </div>
      </div>

      {/* Direct Messaging to Class Teacher */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
        <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-amber-600" />
          <span>Direct Communication with Class Teacher / Mentor</span>
        </h3>

        {msgSent ? (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-1">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            <strong>Message Dispatched to Class Mentor.</strong>
            <p>Your message has been sent to Dr. V. S. Suryawanshi. The teacher will respond shortly via phone or portal reply.</p>
          </div>
        ) : (
          <form onSubmit={handleSendMessage} className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Parent Inquiry or Leave Request for Ward:
              </label>
              <textarea
                rows={3}
                required
                value={parentMessage}
                onChange={(e) => setParentMessage(e.target.value)}
                placeholder="Ask about academic progress, request leave for your child, or request a meeting with faculty..."
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 bg-slate-900 text-white font-bold rounded-xl text-xs hover:bg-slate-800 transition-colors flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Message to Teacher</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
