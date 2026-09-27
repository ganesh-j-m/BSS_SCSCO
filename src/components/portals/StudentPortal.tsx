import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { COLLEGE_PROFILE } from '../../data/officialData';
import {
  User,
  CreditCard,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  FileText,
  AlertCircle,
  QrCode,
  Award,
  Shield,
  Send,
  Building
} from 'lucide-react';

export const StudentPortal: React.FC = () => {
  const { currentUser, paidStudentFees, payStudentFee, certificates } = useApp();
  const [activeTab, setActiveTab] = useState<'overview' | 'idcard' | 'fees' | 'attendance' | 'library' | 'grievance'>('overview');
  const [grievanceText, setGrievanceText] = useState('');
  const [grievanceSubmitted, setGrievanceSubmitted] = useState(false);

  const studentPaid = paidStudentFees['std-1'] || 0;
  const totalTuition = 4619; // Regular B.Sc. fee
  const balance = Math.max(0, totalTuition - studentPaid);

  const handlePay = () => {
    if (balance <= 0) {
      alert("No pending fees!");
      return;
    }
    payStudentFee('std-1', balance);
    alert(`Payment of ₹${balance} successful! Official receipt generated.`);
  };

  const handleGrievanceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGrievanceSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-poppins">
      {/* Student Profile Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-amber-600 text-white flex items-center justify-center font-bold text-xl shadow-md border-2 border-amber-400">
            {currentUser.name ? currentUser.name[0] : 'S'}
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Student Academic Portal · विद्यार्थी कक्ष
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
              {currentUser.name}
            </h1>
            <p className="text-xs text-slate-300">
              Roll No: <span className="font-mono text-amber-300">{currentUser.rollNumber || 'BCS-2024-042'}</span> · Course: <span className="text-white">{currentUser.courseName}</span>
            </p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 bg-slate-800 p-1.5 rounded-xl border border-slate-700 text-xs overflow-x-auto w-full md:w-auto">
          {[
            { id: 'overview', label: 'Dashboard' },
            { id: 'idcard', label: 'Digital ID Card' },
            { id: 'fees', label: 'Fees & Receipts' },
            { id: 'attendance', label: 'Attendance' },
            { id: 'library', label: 'Library Books' },
            { id: 'grievance', label: 'Student Grievance' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg transition-colors font-medium whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Dashboard */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Key KPI Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
              <span className="text-xs font-medium text-slate-500">Overall Attendance</span>
              <div className="text-2xl font-extrabold text-slate-900 font-mono">88.4%</div>
              <span className="text-[11px] font-semibold text-emerald-600">Eligible for examinations</span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
              <span className="text-xs font-medium text-slate-500">Fee Status</span>
              <div className="text-2xl font-extrabold text-slate-900 font-mono">
                {balance === 0 ? 'CLEARED' : `₹${balance} Due`}
              </div>
              <span className={`text-[11px] font-semibold ${balance === 0 ? 'text-emerald-600' : 'text-amber-600'}`}>
                {balance === 0 ? 'Receipt #REC-8921 Generated' : 'Please clear balance'}
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
              <span className="text-xs font-medium text-slate-500">Current CGPA</span>
              <div className="text-2xl font-extrabold text-slate-900 font-mono">8.64</div>
              <span className="text-[11px] font-semibold text-purple-600">Sem III: Distinction</span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
              <span className="text-xs font-medium text-slate-500">ABC Credit Bank</span>
              <div className="text-2xl font-extrabold text-slate-900 font-mono">44 / 44</div>
              <span className="text-[11px] font-semibold text-sky-600">Academic Year 1 Credits Logged</span>
            </div>
          </div>

          {/* Timetable & Assignments */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between">
                <span>Today's Academic Schedule (Timetable)</span>
                <span className="text-xs font-mono text-slate-500">Wednesday</span>
              </h3>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900">Data Structures & C++ Lab</div>
                    <div className="text-[11px] text-slate-500">Computer Lab 2 · Dr. S. S. Revate</div>
                  </div>
                  <span className="font-mono font-semibold text-slate-700">10:00 - 12:00</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900">Database Management Systems</div>
                    <div className="text-[11px] text-slate-500">Room 18 · Smt. R. R. Nitnaware</div>
                  </div>
                  <span className="font-mono font-semibold text-slate-700">12:30 - 01:30</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900">NEP 2020: Indian Knowledge System (IKS)</div>
                    <div className="text-[11px] text-slate-500">Seminar Hall · Dr. G. N. Somvanshi</div>
                  </div>
                  <span className="font-mono font-semibold text-slate-700">02:00 - 03:00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                Active Assignments & Submissions
              </h3>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-emerald-950">Python Sorting Algorithms Implementation</div>
                    <div className="text-[11px] text-emerald-800">Submitted on Sep 24 · Graded: 19/20</div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px]">
                    VERIFIED
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-amber-950">Relational Database Normalization Case Study</div>
                    <div className="text-[11px] text-amber-800">Due: Oct 02, 2026 · Submission Pending</div>
                  </div>
                  <button className="px-2.5 py-1 rounded bg-amber-600 text-white font-semibold text-[11px] hover:bg-amber-700">
                    Upload PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Digital Student ID Card */}
      {activeTab === 'idcard' && (
        <div className="flex flex-col items-center justify-center py-6">
          <div className="w-full max-w-sm bg-white rounded-3xl border-2 border-slate-300 shadow-2xl overflow-hidden p-6 space-y-6 text-center relative bg-linear-to-b from-amber-50/40 via-white to-slate-50">
            {/* Header */}
            <div className="border-b border-slate-200 pb-3">
              <div className="text-[10px] font-bold uppercase tracking-widest text-amber-800">
                Bharat Shikshan Sanstha
              </div>
              <h3 className="text-sm font-bold text-slate-900 mt-0.5">
                Shri Chhatrapati Shivaji College, Omerga
              </h3>
              <p className="text-[10px] text-slate-500 font-mono">
                Estd. 1959 · NAAC 'A' Grade CGPA 3.14
              </p>
            </div>

            {/* Avatar & Info */}
            <div className="space-y-2">
              <div className="w-24 h-28 rounded-xl bg-slate-200 mx-auto overflow-hidden border-2 border-white shadow-md flex items-center justify-center text-slate-500 font-bold text-sm">
                {currentUser.avatar ? (
                  <img src={currentUser.avatar} alt="Student" className="w-full h-full object-cover" />
                ) : 'PHOTO'}
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  {currentUser.name}
                </h4>
                <div className="text-xs font-semibold text-amber-800">
                  {currentUser.courseName}
                </div>
                <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                  Roll No: {currentUser.rollNumber}
                </div>
              </div>
            </div>

            {/* Details Grid */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-left space-y-1 font-mono text-slate-700">
              <div className="flex justify-between">
                <span>Academic Year:</span>
                <strong className="text-slate-900">2026-27</strong>
              </div>
              <div className="flex justify-between">
                <span>Blood Group:</span>
                <strong className="text-slate-900">O +ve</strong>
              </div>
              <div className="flex justify-between">
                <span>ABC ID:</span>
                <strong className="text-slate-900">ABC-8921-9921</strong>
              </div>
              <div className="flex justify-between">
                <span>Validity:</span>
                <strong className="text-slate-900">June 2027</strong>
              </div>
            </div>

            {/* Simulated QR Code */}
            <div className="pt-1">
              <div className="w-20 h-20 rounded-xl bg-slate-900 text-white p-2 mx-auto flex items-center justify-center shadow-xs">
                <QrCode className="w-16 h-16 text-amber-400" />
              </div>
              <span className="text-[10px] text-slate-400 font-mono mt-1 block">
                SCAN TO VERIFY RECORD
              </span>
            </div>

            {/* Signature */}
            <div className="pt-2 border-t border-slate-200 flex justify-between items-end text-[10px]">
              <span className="text-slate-400">Bearer Signature</span>
              <div className="text-right">
                <span className="font-serif italic font-bold block text-slate-900">Dr. S. N. Aswale</span>
                <span className="text-slate-500 font-semibold">Principal, SC(S)CO</span>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => window.print()}
            className="mt-4 px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800 transition-colors"
          >
            Print Digital ID Card
          </button>
        </div>
      )}

      {/* Tab 3: Fees & Receipts */}
      {activeTab === 'fees' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Fee Account Statement (2026-27)
              </h3>
              <p className="text-xs text-slate-500">
                Official fee breakdown under Dr. BAMU schedule.
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block">Balance Pending:</span>
              <span className={`text-xl font-bold font-mono ${balance === 0 ? 'text-emerald-600' : 'text-amber-700'}`}>
                ₹{balance.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3">Description</th>
                  <th className="py-2.5 px-3">Gross Total</th>
                  <th className="py-2.5 px-3">Paid Amount</th>
                  <th className="py-2.5 px-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 px-3 font-medium text-slate-800">
                    Tuition & Academic Term Fee (B.Sc. CS / BCS)
                  </td>
                  <td className="py-3 px-3 font-mono">₹4,619.00</td>
                  <td className="py-3 px-3 font-mono text-emerald-700">₹{studentPaid.toFixed(2)}</td>
                  <td className="py-3 px-3 text-right">
                    {balance === 0 ? (
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                        PAID IN FULL
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[10px]">
                        PARTIAL / DUE
                      </span>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {balance > 0 ? (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-amber-950">
                <strong>Pay Remaining Tuition:</strong> Click below to clear pending fees using online payment gateway simulation.
              </div>
              <button
                type="button"
                onClick={handlePay}
                className="px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs shadow-xs shrink-0"
              >
                Pay ₹{balance.toFixed(2)} Now
              </button>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
              <span className="text-xs text-emerald-950 font-semibold">
                Official Fee Receipt #SCSCO-REC-2026-8921 is available for download.
              </span>
              <button
                type="button"
                onClick={() => alert("Downloading verified fee receipt PDF: SCSCO_REC_2026_8921.pdf")}
                className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Receipt</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Tab 4: Attendance */}
      {activeTab === 'attendance' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
            Subject-Wise Attendance Record
          </h3>

          <div className="space-y-3">
            {[
              { subject: "Data Structures in C++", conducted: 40, attended: 36, pct: 90 },
              { subject: "Database Management Systems", conducted: 38, attended: 34, pct: 89 },
              { subject: "Computer Networks & Security", conducted: 35, attended: 30, pct: 85.7 },
              { subject: "Indian Knowledge Systems (IKS)", conducted: 20, attended: 18, pct: 90 },
              { subject: "Practical Programming Laboratory", conducted: 24, attended: 22, pct: 91.6 }
            ].map((sub, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900">{sub.subject}</div>
                  <div className="text-slate-500 text-[11px]">
                    Lectures: {sub.attended} attended / {sub.conducted} conducted
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-emerald-700 font-mono text-sm">{sub.pct.toFixed(1)}%</div>
                  <span className="text-[10px] text-emerald-600 font-medium">Safe</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Library Books */}
      {activeTab === 'library' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between">
            <span>Books Issued from Central Library (ETH Software Ledger)</span>
            <span className="text-xs text-slate-500 font-mono">Card No: LIB-BCS-042</span>
          </h3>

          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Data Structures Through C++ (Yashavant Kanetkar)</div>
                <div className="text-[11px] text-slate-500">Accession No: 84920 · Issued on Sep 12, 2026</div>
              </div>
              <div className="text-right">
                <span className="text-amber-800 font-semibold block text-[11px]">Due: Oct 12, 2026</span>
                <span className="text-[10px] text-slate-400">Renewable online</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Database System Concepts (Silberschatz)</div>
                <div className="text-[11px] text-slate-500">Accession No: 91024 · Issued on Sep 18, 2026</div>
              </div>
              <div className="text-right">
                <span className="text-amber-800 font-semibold block text-[11px]">Due: Oct 18, 2026</span>
                <span className="text-[10px] text-slate-400">Renewable online</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 6: Grievance */}
      {activeTab === 'grievance' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
            Student Grievance & Redressal Box (तक्रार पेटी)
          </h3>
          <p className="text-xs text-slate-500">
            Submit any academic, laboratory, library, or campus amenity concerns directly to the Principal & Grievance Redressal Cell.
          </p>

          {grievanceSubmitted ? (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <strong>Grievance Logged Successfully.</strong>
              <p>Reference: GRV-2026-8812. The Grievance Redressal Committee will review your submission confidentially.</p>
            </div>
          ) : (
            <form onSubmit={handleGrievanceSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Describe your concern or suggestion:
                </label>
                <textarea
                  rows={4}
                  required
                  value={grievanceText}
                  onChange={(e) => setGrievanceText(e.target.value)}
                  placeholder="Enter details regarding classroom, library, drinking water, bus concession, etc."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-xs text-slate-900"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-slate-900 text-white font-semibold rounded-xl text-xs hover:bg-slate-800 transition-colors flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit to Redressal Cell</span>
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};
