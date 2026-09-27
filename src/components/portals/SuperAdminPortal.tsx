import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PersonRecord, COLLEGE_PROFILE } from '../../data/officialData';
import { PhotoUploadModal } from '../ui/PhotoUploadModal';
import {
  ShieldAlert,
  Users,
  Bell,
  Award,
  Settings,
  Plus,
  Trash2,
  Edit,
  CheckCircle,
  Search,
  Upload,
  Calendar,
  Layers,
  History,
  QrCode
} from 'lucide-react';

export const SuperAdminPortal: React.FC = () => {
  const {
    allPeople,
    updatePerson,
    addPerson,
    deletePerson,
    notices,
    addNotice,
    deleteNotice,
    certificates,
    addCertificate,
    auditLogs,
    logAction
  } = useApp();

  const [activeTab, setActiveTab] = useState<'people' | 'notices' | 'certificates' | 'logs' | 'settings'>('people');
  const [personSearch, setPersonSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('ALL');

  // Modal State
  const [editingPerson, setEditingPerson] = useState<PersonRecord | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddingNew, setIsAddingNew] = useState(false);

  // New Notice Form State
  const [newNoticeTitle, setNewNoticeTitle] = useState('');
  const [newNoticeCategory, setNewNoticeCategory] = useState<'General' | 'Academic' | 'Admission' | 'Exam' | 'Scholarship'>('General');
  const [newNoticeAudience, setNewNoticeAudience] = useState<'ALL' | 'STUDENTS' | 'TEACHERS' | 'PARENTS'>('ALL');
  const [newNoticeContent, setNewNoticeContent] = useState('');
  const [newNoticePinned, setNewNoticePinned] = useState(false);

  // Certificate Generator State
  const [certStudentName, setCertStudentName] = useState('');
  const [certCourse, setCertCourse] = useState('B.Sc. Computer Science');
  const [certType, setCertType] = useState<'Degree Completion' | 'Transfer Certificate' | 'Merit Award' | 'Course Participation' | 'NSS Character Certificate'>('Degree Completion');
  const [certGrade, setCertGrade] = useState('A+ Grade (88%)');
  const [certGeneratedNum, setCertGeneratedNum] = useState<string | null>(null);

  const filteredPeople = allPeople.filter(p => {
    const matchesRole = roleFilter === 'ALL' || p.roleCategory === roleFilter;
    const matchesSearch = p.name.toLowerCase().includes(personSearch.toLowerCase()) ||
                          p.designation.toLowerCase().includes(personSearch.toLowerCase()) ||
                          (p.department && p.department.toLowerCase().includes(personSearch.toLowerCase()));
    return matchesRole && matchesSearch;
  });

  const handleEditPerson = (p: PersonRecord) => {
    setEditingPerson(p);
    setIsAddingNew(false);
    setIsModalOpen(true);
  };

  const handleAddNewPerson = () => {
    const blank: PersonRecord = {
      id: '',
      name: '',
      designation: 'Assistant Professor',
      roleCategory: 'teaching_senior',
      department: 'General',
      displayOrder: allPeople.length + 1,
      isActive: true
    };
    setEditingPerson(blank);
    setIsAddingNew(true);
    setIsModalOpen(true);
  };

  const handleSavePerson = (updated: PersonRecord) => {
    if (isAddingNew) {
      addPerson(updated);
    } else {
      updatePerson(updated);
    }
    setIsModalOpen(false);
  };

  const handleCreateNotice = (e: React.FormEvent) => {
    e.preventDefault();
    addNotice({
      title: newNoticeTitle,
      category: newNoticeCategory,
      audience: newNoticeAudience,
      date: new Date().toISOString().split('T')[0],
      isPinned: newNoticePinned,
      content: newNoticeContent
    });
    setNewNoticeTitle('');
    setNewNoticeContent('');
    alert("Notice successfully published!");
  };

  const handleGenerateCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    const certNum = `SCSCO-2026-${Math.floor(100 + Math.random() * 900)}`;
    const verCode = `VER-${Math.floor(1000 + Math.random() * 9000)}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    addCertificate({
      certificateNumber: certNum,
      studentName: certStudentName,
      courseName: certCourse,
      type: certType,
      issueDate: new Date().toISOString().split('T')[0],
      gradeOrMarks: certGrade,
      verificationCode: verCode,
      isValid: true,
      issuedBy: "Dr. Sanjay Namdev Aswale (Principal)"
    });

    setCertGeneratedNum(certNum);
    setCertStudentName('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-poppins">
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            System Central Administration · सुपरअ‍ॅडमिन
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            SuperAdmin CMS & Control Center
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Manage people records, upload official portraits, publish notices, issue certificates, and review system audit logs.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 bg-slate-800 p-1.5 rounded-xl border border-slate-700 text-xs overflow-x-auto w-full md:w-auto">
          {[
            { id: 'people', label: 'People / Staff CMS' },
            { id: 'notices', label: 'Notices CMS' },
            { id: 'certificates', label: 'Issue Certificates' },
            { id: 'logs', label: 'Audit Logs' },
            { id: 'settings', label: 'College Settings' }
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

      {/* Tab 1: People CMS */}
      {activeTab === 'people' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Official People & Management Directory ({allPeople.length} Records)
              </h3>
              <p className="text-xs text-slate-500">
                Maintain official profiles, qualifications, and upload portrait photos to cloud storage.
              </p>
            </div>

            <button
              onClick={handleAddNewPerson}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Person</span>
            </button>
          </div>

          {/* Filters & Search */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-xl border border-slate-200 text-xs overflow-x-auto">
              {[
                { id: 'ALL', label: 'All Records' },
                { id: 'management', label: 'Management (21)' },
                { id: 'administration', label: 'Administration' },
                { id: 'teaching_senior', label: 'Senior Teaching' },
                { id: 'teaching_junior', label: 'Junior Teaching' },
                { id: 'non_teaching', label: 'Non-Teaching' }
              ].map(r => (
                <button
                  key={r.id}
                  onClick={() => setRoleFilter(r.id)}
                  className={`px-3 py-1 rounded-lg font-medium transition-colors whitespace-nowrap ${
                    roleFilter === r.id
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>

            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={personSearch}
                onChange={(e) => setPersonSearch(e.target.value)}
                placeholder="Search by name, designation, department..."
                className="w-full pl-9 pr-3 py-2 bg-white rounded-xl border border-slate-200 text-xs text-slate-900"
              />
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase text-[11px]">
                  <tr>
                    <th className="py-3 px-4">Photo</th>
                    <th className="py-3 px-4">Name</th>
                    <th className="py-3 px-4">Designation & Role</th>
                    <th className="py-3 px-4">Department</th>
                    <th className="py-3 px-4">Phone / Contact</th>
                    <th className="py-3 px-4 text-center">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredPeople.map(p => (
                    <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-2.5 px-4">
                        {p.photoUrl ? (
                          <img
                            src={p.photoUrl}
                            alt=""
                            className="w-9 h-11 object-cover rounded border border-slate-200"
                          />
                        ) : (
                          <div className="w-9 h-11 rounded border border-slate-200 bg-slate-100 flex items-center justify-center text-[9px] text-slate-400 font-bold">
                            N/A
                          </div>
                        )}
                      </td>
                      <td className="py-2.5 px-4 font-semibold text-slate-900">
                        {p.name}
                        {p.qualification && (
                          <span className="block text-[11px] font-normal text-slate-500">{p.qualification}</span>
                        )}
                      </td>
                      <td className="py-2.5 px-4 text-slate-700">
                        {p.designation}
                        <span className="block text-[10px] text-slate-400 uppercase font-mono">{p.roleCategory}</span>
                      </td>
                      <td className="py-2.5 px-4 text-slate-600">
                        {p.department || 'General / Central'}
                      </td>
                      <td className="py-2.5 px-4 font-mono text-slate-600">
                        {p.phone || '—'}
                      </td>
                      <td className="py-2.5 px-4 text-center">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          p.isActive ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {p.isActive ? 'ACTIVE' : 'INACTIVE'}
                        </span>
                      </td>
                      <td className="py-2.5 px-4 text-right space-x-2">
                        <button
                          onClick={() => handleEditPerson(p)}
                          className="px-2.5 py-1 bg-amber-50 text-amber-800 hover:bg-amber-100 rounded font-semibold text-xs transition-colors"
                        >
                          Edit / Photo
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Are you sure you want to delete ${p.name}?`)) {
                              deletePerson(p.id);
                            }
                          }}
                          className="px-2.5 py-1 bg-red-50 text-red-700 hover:bg-red-100 rounded font-semibold text-xs transition-colors"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Notices CMS */}
      {activeTab === 'notices' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Create Notice Form */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
              Publish New Institutional Notice
            </h3>

            <form onSubmit={handleCreateNotice} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Notice Title *</label>
                <input
                  type="text"
                  required
                  value={newNoticeTitle}
                  onChange={(e) => setNewNoticeTitle(e.target.value)}
                  placeholder="e.g. Schedule of Examination Form Fillup"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Category</label>
                  <select
                    value={newNoticeCategory}
                    onChange={(e) => setNewNoticeCategory(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs"
                  >
                    <option value="General">General</option>
                    <option value="Academic">Academic</option>
                    <option value="Admission">Admission</option>
                    <option value="Exam">Exam</option>
                    <option value="Scholarship">Scholarship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Audience</label>
                  <select
                    value={newNoticeAudience}
                    onChange={(e) => setNewNoticeAudience(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs"
                  >
                    <option value="ALL">All (Public)</option>
                    <option value="STUDENTS">Students Only</option>
                    <option value="TEACHERS">Teachers Only</option>
                    <option value="PARENTS">Parents Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Content Text *</label>
                <textarea
                  rows={4}
                  required
                  value={newNoticeContent}
                  onChange={(e) => setNewNoticeContent(e.target.value)}
                  placeholder="Enter full notice announcement details..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="pinCheck"
                  checked={newNoticePinned}
                  onChange={(e) => setNewNoticePinned(e.target.checked)}
                  className="w-4 h-4 rounded text-amber-600"
                />
                <label htmlFor="pinCheck" className="text-slate-700 font-medium">
                  Pin to Top of Website
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-slate-900 text-white font-bold rounded-xl text-xs hover:bg-slate-800 transition-colors"
              >
                Publish Notice
              </button>
            </form>
          </div>

          {/* Existing Notices List */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
              Manage Published Notices ({notices.length})
            </h3>

            <div className="space-y-3">
              {notices.map(n => (
                <div key={n.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-3 text-xs">
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-amber-800">{n.category}</span>
                      <span className="text-slate-400 font-mono text-[10px]">{n.date}</span>
                    </div>
                    <h4 className="font-bold text-slate-900">{n.title}</h4>
                    <p className="text-slate-600 line-clamp-2 text-[11px]">{n.content}</p>
                  </div>
                  <button
                    onClick={() => deleteNotice(n.id)}
                    className="p-1 text-red-600 hover:bg-red-50 rounded"
                    title="Delete Notice"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Digital Certificates */}
      {activeTab === 'certificates' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
              Generate Verifiable Digital Certificate
            </h3>

            {certGeneratedNum && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-1">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <strong>Certificate Issued:</strong> {certGeneratedNum}
                <div className="text-[11px] text-emerald-800">
                  Searchable immediately on public <span className="font-mono font-bold">/verify</span> portal!
                </div>
              </div>
            )}

            <form onSubmit={handleGenerateCertificate} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Student Full Name *</label>
                <input
                  type="text"
                  required
                  value={certStudentName}
                  onChange={(e) => setCertStudentName(e.target.value)}
                  placeholder="e.g. Ramesh Sunil Pawar"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Course / Wing *</label>
                <input
                  type="text"
                  required
                  value={certCourse}
                  onChange={(e) => setCertCourse(e.target.value)}
                  placeholder="e.g. B.Sc. Chemistry Honours"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Certificate Type</label>
                <select
                  value={certType}
                  onChange={(e) => setCertType(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs"
                >
                  <option value="Degree Completion">Degree Completion Certificate</option>
                  <option value="Transfer Certificate">Transfer Certificate (T.C.)</option>
                  <option value="Merit Award">Merit / Endowment Award</option>
                  <option value="Course Participation">Course Completion Certificate</option>
                  <option value="NSS Character Certificate">NSS Character Certificate</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Grade or Distinction</label>
                <input
                  type="text"
                  value={certGrade}
                  onChange={(e) => setCertGrade(e.target.value)}
                  placeholder="e.g. Distinction (84.5%)"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-slate-900 text-white font-bold rounded-xl text-xs hover:bg-slate-800 transition-colors"
              >
                Issue Digital Certificate
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
              Issued Certificates Registry ({certificates.length})
            </h3>

            <div className="space-y-3">
              {certificates.map(c => (
                <div key={c.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <div className="flex items-center justify-between font-mono font-bold text-amber-900">
                    <span>{c.certificateNumber}</span>
                    <span className="text-[11px] text-slate-400 font-normal">{c.issueDate}</span>
                  </div>
                  <div className="font-semibold text-slate-900 text-sm">{c.studentName}</div>
                  <div className="text-slate-600">{c.type} · {c.courseName}</div>
                  <div className="text-[11px] text-emerald-700 font-medium">Result: {c.gradeOrMarks}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Audit Logs */}
      {activeTab === 'logs' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
            <History className="w-4 h-4 text-slate-500" />
            <span>System Audit & Change Ledger</span>
          </h3>

          <div className="divide-y divide-slate-100 text-xs font-mono">
            {auditLogs.map(log => (
              <div key={log.id} className="py-2.5 flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <span className="font-bold text-amber-900 font-sans mr-2">[{log.action}]</span>
                  <span className="text-slate-700 font-sans">{log.details}</span>
                </div>
                <div className="text-right text-[11px] text-slate-400 shrink-0">
                  <div>{log.userName}</div>
                  <div>{log.timestamp}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: College Settings */}
      {activeTab === 'settings' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
            College Profile & Institutional Configuration
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-700 font-medium mb-1">Official Name (English)</label>
              <input
                type="text"
                readOnly
                value={COLLEGE_PROFILE.name}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-100 text-slate-800"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-medium mb-1">Official Name (Marathi)</label>
              <input
                type="text"
                readOnly
                value={COLLEGE_PROFILE.marathiName}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-100 text-slate-800"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-medium mb-1">Parent Sanstha</label>
              <input
                type="text"
                readOnly
                value={COLLEGE_PROFILE.sansthaName}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-100 text-slate-800"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-medium mb-1">College Code</label>
              <input
                type="text"
                readOnly
                value={COLLEGE_PROFILE.collegeCode}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-100 text-slate-800 font-mono"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-medium mb-1">Phone Number</label>
              <input
                type="text"
                readOnly
                value={COLLEGE_PROFILE.phone}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-100 text-slate-800 font-mono"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-medium mb-1">NAAC Grade</label>
              <input
                type="text"
                readOnly
                value={COLLEGE_PROFILE.naacGrade}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-100 text-slate-800"
              />
            </div>
          </div>
        </div>
      )}

      {/* Edit Person Modal */}
      <PhotoUploadModal
        person={editingPerson}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSavePerson}
      />
    </div>
  );
};
