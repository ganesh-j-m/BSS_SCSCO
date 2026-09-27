import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { OFFICIAL_COURSES, CourseInfo } from '../../data/officialData';
import {
  GraduationCap,
  BookOpen,
  CheckCircle,
  FileCheck,
  Award,
  Layers,
  Sparkles,
  ChevronRight,
  Clock,
  Users
} from 'lucide-react';

export const CoursesView: React.FC = () => {
  const { setCurrentRoute } = useApp();
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [activeCourse, setActiveCourse] = useState<CourseInfo | null>(null);

  const levels = ['All', 'Junior College (HSC)', 'Undergraduate (UG)', 'Postgraduate (PG)', 'Doctoral (Ph.D.)'];

  const filteredCourses = OFFICIAL_COURSES.filter(c => 
    selectedLevel === 'All' || c.level === selectedLevel
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-poppins">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Programs of Study
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Courses & Academic Curricula
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Official degree and diploma programs affiliated to Dr. BAMU under NEP 2020 & Maharashtra State Board.
          </p>
        </div>

        {/* Level Filters */}
        <div className="flex items-center gap-1.5 bg-slate-800 p-1.5 rounded-xl border border-slate-700 text-xs overflow-x-auto w-full md:w-auto">
          {levels.map(lvl => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={`px-3 py-1.5 rounded-lg transition-colors font-medium whitespace-nowrap ${
                selectedLevel === lvl
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {lvl === 'Junior College (HSC)' ? 'Junior College' : lvl === 'Undergraduate (UG)' ? 'UG Degrees' : lvl === 'Postgraduate (PG)' ? 'PG Degrees' : lvl}
            </button>
          ))}
        </div>
      </div>

      {/* NEP 2020 Highlight Callout (from Page 13) */}
      <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-6 space-y-3">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>National Education Policy (NEP 2020) Framework Highlights</span>
        </div>
        <p className="text-xs text-amber-950 leading-relaxed">
          As instructed in the college prospectus (Pages 13-15), degree programs now operate under the <strong>Credit System</strong> with <strong>44 credits per academic year</strong> (Semester I: 22 Credits, Semester II: 22 Credits). 
          Students benefit from <strong>Multiple Entry & Multiple Exit options</strong> (Certificate after 1st Year, Diploma after 2nd Year, Bachelor's Degree after 3rd Year, and 4-Year Bachelor's Honours with Research). 
          All incoming first-year students must register for an <strong>Academic Bank of Credit (ABC) Account</strong> at <a href="https://www.abc.gov.in" target="_blank" rel="noreferrer" className="underline font-bold">www.abc.gov.in</a>.
        </p>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <div
            key={course.id}
            className="bg-white rounded-xl border border-slate-200 shadow-xs hover:border-amber-400 hover:shadow-md transition-all p-6 flex flex-col justify-between group"
          >
            <div className="space-y-3.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                  {course.level}
                </span>
                <span className="font-semibold text-amber-800">
                  Intake: {course.intake}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                  {course.name}
                </h3>
                <div className="flex items-center gap-2 mt-1 text-xs text-slate-700">
                  <Clock className="w-3.5 h-3.5 text-slate-700" />
                  <span>Duration: {course.duration}</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700">
                <span className="font-semibold text-slate-800">Eligibility:</span> {course.eligibility}
              </div>

              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                  Curriculum Highlights
                </span>
                <ul className="space-y-1 text-xs text-slate-700">
                  {course.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-start gap-1.5 line-clamp-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setCurrentRoute('fees')}
                className="text-xs text-slate-700 hover:text-slate-900 font-medium"
              >
                View Fee Charts
              </button>

              <button
                onClick={() => setActiveCourse(course)}
                className="text-xs font-semibold text-amber-800 hover:text-amber-900 inline-flex items-center gap-1"
              >
                Full Syllabus & Details <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Course Detail Modal */}
      {activeCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 space-y-6">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 font-mono">
                  {activeCourse.level} · {activeCourse.faculty}
                </span>
                <h2 className="text-xl font-bold text-slate-900 mt-0.5">
                  {activeCourse.name}
                </h2>
                <div className="text-xs text-slate-700 font-medium mt-1">
                  Duration: {activeCourse.duration} · Approved Intake: {activeCourse.intake} seats
                </div>
              </div>
              <button
                onClick={() => setActiveCourse(null)}
                className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium"
              >
                Close
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block mb-0.5">Admission Eligibility</span>
                <p>{activeCourse.eligibility}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2 text-sm">Course Structure & Features</h4>
                <ul className="space-y-2 pl-4 list-disc text-slate-700">
                  {activeCourse.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </div>

              {activeCourse.nep2020Compliant && (
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950">
                  <span className="font-bold block mb-0.5">NEP 2020 Compliance</span>
                  <span>
                    Includes Major Core Subjects, Minor Electives, Skill Enhancement Courses (SEC), Vocational Skill Courses (VSC), Ability Enhancement (AEC), Indian Knowledge Systems (IKS), Value Education (VEC), and Community Engagement (CEP).
                  </span>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => {
                  setActiveCourse(null);
                  setCurrentRoute('admissions');
                }}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-xs"
              >
                Apply for Admission
              </button>

              <button
                onClick={() => setActiveCourse(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
