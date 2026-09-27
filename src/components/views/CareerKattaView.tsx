import React from 'react';
import { NISM_BUNDLES } from '../../data/officialData';
import {
  Trophy,
  Award,
  BookOpen,
  Calendar,
  Clock,
  Phone,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  CreditCard
} from 'lucide-react';

export const CareerKattaView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-poppins">
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Govt. of Maharashtra Higher & Technical Education & MITSC Initiative
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Career Katta & Center of Excellence
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            College Code: C34650 · Competitive Exam Coaching, Entrepreneurship & NISM Financial Certifications.
          </p>
        </div>

        <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 text-xs text-right">
          <div className="text-slate-400">State Helpline:</div>
          <div className="text-base font-bold font-mono text-amber-400">75076 52555</div>
        </div>
      </div>

      {/* Flagship Plan Banner (₹365 for 1000 Days) */}
      <div className="p-6 sm:p-8 rounded-2xl bg-linear-to-r from-amber-600 via-amber-700 to-amber-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-200">
            Universal Student Empowerment
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold">
            ₹365 for 1,000 Days Comprehensive Career Guidance
          </h2>
          <p className="text-xs text-amber-100 max-w-xl">
            Provides complete access to live lectures, digital classrooms, previous year paper mock test series, study materials, and state-level competitive exam mentoring (UPSC, MPSC, Banking, SSC, Police, LIC, SSB).
          </p>
        </div>
        <div className="p-4 bg-white/10 backdrop-blur-xs rounded-xl border border-white/20 text-center shrink-0 space-y-1">
          <div className="text-xs text-amber-200">District Promoter:</div>
          <div className="text-sm font-bold text-white">Dr. Sanjay Aswale (Principal)</div>
          <div className="text-xs text-amber-300">Coordinators: Dr. Pasarkalle & Dr. Kare</div>
        </div>
      </div>

      {/* Career Katta Schedule & Programs (Page 59) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Live Lecture Schedule */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-600" />
            <span>Interactive Lecture Broadcast Schedule (पान ५९)</span>
          </h3>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-900">आयएएस आपल्या भेटीला (IAS Aaplya Bhetila)</span>
                <p className="text-slate-500 text-[11px]">Direct mentoring by serving civil servants & bureaucrats</p>
              </div>
              <span className="font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md">
                6:00 PM - 7:00 PM
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-900">उद्योजक आपल्या भेटीला (Udyojak Aaplya Bhetila)</span>
                <p className="text-slate-500 text-[11px]">Practical industrial leadership & startup guidance</p>
              </div>
              <span className="font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md">
                7:00 PM - 8:00 PM
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-900">पोलीस भरती पूर्व प्रशिक्षण वर्ग (Police Academy Drills)</span>
                <p className="text-slate-500 text-[11px]">Ground conditioning & physical exam tests by ex-servicemen</p>
              </div>
              <span className="font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                7:00 AM - 9:00 AM
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-900">स्पर्धा परीक्षा मार्गदर्शन व लायब्ररी अभ्यास</span>
                <p className="text-slate-500 text-[11px]">Classroom sessions, mock papers & library tests</p>
              </div>
              <span className="font-mono font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md">
                2:00 PM - 5:00 PM
              </span>
            </div>
          </div>
        </div>

        {/* Center of Excellence Digital Features (Page 62) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-purple-600" />
            <span>Center of Excellence Highlights (गुणवत्ता व नियंत्रण)</span>
          </h3>

          <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
              <span><strong>100-Capacity Smart Study Hall:</strong> Equipped with interactive digital panels, high-speed internet, and live centralized lectures streamed from Delhi, Pune, and Mumbai experts.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
              <span><strong>Common Faculty Center:</strong> Dedicated terminals for students to fill competitive exam forms, scan documents, generate hall tickets, and print admission letters.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
              <span><strong>Psychology Aptitude Testing:</strong> Scientific personality and psychological assessment tests to guide candidates into careers tailored to their individual aptitude.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
              <span><strong>Extended Hours:</strong> Study hall open from 6:00 AM to 8:00 PM daily with evening online coaching from 5:00 PM to 8:00 PM.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* NISM E-Learning Courses (Pages 60-61) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              National Institute of Securities Markets (Our MoU Partner)
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-0.5">
              NISM Skill Sphere Finance Essentials Bundles
            </h3>
            <p className="text-xs text-slate-500">
              Professional capital market certifications providing 2 academic credits each under NEP 2020.
            </p>
          </div>
          <div className="px-3 py-1 bg-amber-50 text-amber-900 font-mono text-xs font-bold rounded-lg border border-amber-200">
            NISM MoU
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NISM_BUNDLES.map((bundle, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
                  {bundle.credits} Academic Credits · {bundle.hours} Hours
                </span>
                <h4 className="text-sm font-bold text-slate-900">
                  {bundle.bundleName}
                </h4>
                <p className="text-xs text-slate-600 italic">
                  "{bundle.tagline}"
                </p>

                <div className="pt-2">
                  <span className="text-[11px] font-semibold text-slate-700 block mb-1">
                    Included Modules:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-600 pl-3 list-disc">
                    {bundle.courses.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-slate-900">
                  {bundle.fee}
                </span>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Certified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
