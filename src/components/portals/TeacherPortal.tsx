import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Users,
  CheckCircle,
  QrCode,
  Calendar,
  BookOpen,
  Plus,
  FileText,
  Upload,
  Clock,
  Sparkles
} from 'lucide-react';

export const TeacherPortal: React.FC = () => {
  const { currentUser, logAction } = useApp();
  const [activeTab, setActiveTab] = useState<'attendance' | 'qr' | 'marks' | 'materials'>('attendance');
  const [selectedClass, setSelectedClass] = useState('B.Sc. III Chemistry');
  const [qrGenerated, setQrGenerated] = useState(false);
  const [assignmentTitle, setAssignmentTitle] = useState('');
  const [assignmentSubmitted, setAssignmentSubmitted] = useState(false);

  // Mock Students Roster
  const [students, setStudents] = useState([
    { roll: 'CHM-01', name: 'Aniket Balasaheb More', present: true },
    { roll: 'CHM-02', name: 'Pooja Ramesh Patil', present: true },
    { roll: 'CHM-03', name: 'Siddheshwar Sunil Mane', present: false },
    { roll: 'CHM-04', name: 'Rohit Sheshrao Pawar', present: true },
    { roll: 'CHM-05', name: 'Snehal Digambar Birajdar', present: true }
  ]);

  const toggleStudent = (index: number) => {
    setStudents(prev => prev.map((s, i) => i === index ? { ...s, present: !s.present } : s));
  };

  const handleSaveAttendance = () => {
    const presentCount = students.filter(s => s.present).length;
    logAction('SAVE_ATTENDANCE', `Marked attendance for ${selectedClass}: ${presentCount}/${students.length} present`);
    alert(`Attendance saved successfully! ${presentCount} of ${students.length} students marked present.`);
  };

  const handlePostAssignment = (e: React.FormEvent) => {
    e.preventDefault();
    setAssignmentSubmitted(true);
    logAction('POST_ASSIGNMENT', `Posted assignment "${assignmentTitle}" for ${selectedClass}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-poppins">
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Faculty Academic Workspace · प्राध्यापक कक्ष
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            {currentUser.name}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
            Dept. of {currentUser.department || 'Chemistry'} · UG & PG Coordinator · Research Guide
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 bg-slate-800 p-1.5 rounded-xl border border-slate-700 text-xs overflow-x-auto w-full md:w-auto">
          {[
            { id: 'attendance', label: 'Take Attendance' },
            { id: 'qr', label: 'QR Attendance' },
            { id: 'materials', label: 'Assignments' },
            { id: 'marks', label: 'Internal Marks' }
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

      {/* Tab 1: Manual Attendance */}
      {activeTab === 'attendance' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Daily Lecture Attendance Register
              </h3>
              <p className="text-xs text-slate-500">
                Date: {new Date().toLocaleDateString()} · Lecture Session #3
              </p>
            </div>

            <div className="flex items-center gap-3">
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-200 text-xs font-semibold text-slate-800"
              >
                <option value="B.Sc. III Chemistry">B.Sc. III Chemistry</option>
                <option value="M.Sc. I Chemistry">M.Sc. I Organic Chemistry</option>
                <option value="B.Sc. I Physical Chemistry">B.Sc. I Physical Chemistry</option>
              </select>

              <button
                type="button"
                onClick={handleSaveAttendance}
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs shadow-xs"
              >
                Submit Attendance
              </button>
            </div>
          </div>

          <div className="divide-y divide-slate-100 text-xs">
            {students.map((student, idx) => (
              <div key={student.roll} className="py-3 flex items-center justify-between hover:bg-slate-50 px-2 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-slate-400 w-16">{student.roll}</span>
                  <span className="font-semibold text-slate-900">{student.name}</span>
                </div>
                <button
                  type="button"
                  onClick={() => toggleStudent(idx)}
                  className={`px-3 py-1 rounded-lg font-bold text-xs transition-colors ${
                    student.present
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {student.present ? 'PRESENT' : 'ABSENT'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Dynamic QR Code Attendance */}
      {activeTab === 'qr' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs text-center space-y-6">
          <div className="max-w-md mx-auto space-y-2">
            <h3 className="text-lg font-bold text-slate-900">
              Live QR Attendance Generator
            </h3>
            <p className="text-xs text-slate-500">
              Display this dynamic QR on the classroom projector. Students scan from their student portal to register presence automatically.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 text-white inline-block shadow-xl space-y-3">
            <QrCode className="w-48 h-48 text-amber-400 mx-auto" />
            <div className="text-xs font-mono font-bold text-amber-300">
              SESSION: CHM-301-2026
            </div>
            <div className="text-[10px] text-slate-400">
              Auto-refreshes every 30 seconds · Geofenced to Campus
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => alert("New dynamic QR session generated and broadcast to students.")}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow-xs"
            >
              Regenerate QR Token
            </button>
          </div>
        </div>
      )}

      {/* Tab 3: Assignments */}
      {activeTab === 'materials' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
            Post New Assignment or Study Material
          </h3>

          {assignmentSubmitted ? (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <strong>Assignment Published Successfully.</strong>
              <p>"{assignmentTitle}" is now visible on student portals for {selectedClass}.</p>
              <button
                type="button"
                onClick={() => setAssignmentSubmitted(false)}
                className="px-3 py-1 bg-emerald-700 text-white rounded-lg text-xs"
              >
                Post Another
              </button>
            </div>
          ) : (
            <form onSubmit={handlePostAssignment} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Assignment Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={assignmentTitle}
                    onChange={(e) => setAssignmentTitle(e.target.value)}
                    placeholder="e.g. UV-Visible Spectroscopy Curve Analysis"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Target Class *
                  </label>
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-900"
                  >
                    <option value="B.Sc. III Chemistry">B.Sc. III Chemistry</option>
                    <option value="M.Sc. I Chemistry">M.Sc. I Organic Chemistry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Assignment Instructions & Guidelines
                </label>
                <textarea
                  rows={3}
                  placeholder="Detail requirements, reference books, formatting..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-900"
                />
              </div>

              <button
                type="submit"
                className="px-5 py-2.5 bg-slate-900 text-white font-bold rounded-xl text-xs hover:bg-slate-800"
              >
                Publish Assignment to Class
              </button>
            </form>
          )}
        </div>
      )}

      {/* Tab 4: Marks */}
      {activeTab === 'marks' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
            Internal Assessment & Continuous Evaluation (Marks Entry)
          </h3>
          <p className="text-xs text-slate-500">
            Submit NEP 2020 Continuous Assessment (20% internal evaluation) to University Examination Server.
          </p>

          <div className="overflow-x-auto pt-2">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3">Roll No.</th>
                  <th className="py-2.5 px-3">Student Name</th>
                  <th className="py-2.5 px-3">Assignment (10)</th>
                  <th className="py-2.5 px-3">Internal Test (10)</th>
                  <th className="py-2.5 px-3 text-right">Total (20)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                <tr>
                  <td className="py-2.5 px-3 font-sans font-semibold">CHM-01</td>
                  <td className="py-2.5 px-3 font-sans">Aniket Balasaheb More</td>
                  <td className="py-2.5 px-3">09</td>
                  <td className="py-2.5 px-3">10</td>
                  <td className="py-2.5 px-3 text-right font-bold text-emerald-700">19 / 20</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-sans font-semibold">CHM-02</td>
                  <td className="py-2.5 px-3 font-sans">Pooja Ramesh Patil</td>
                  <td className="py-2.5 px-3">08</td>
                  <td className="py-2.5 px-3">09</td>
                  <td className="py-2.5 px-3 text-right font-bold text-emerald-700">17 / 20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
