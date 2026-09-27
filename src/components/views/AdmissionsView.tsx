import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  FileText,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  Send,
  Phone,
  Mail,
  User,
  ExternalLink
} from 'lucide-react';

export const AdmissionsView: React.FC = () => {
  const { setCurrentRoute, logAction } = useApp();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryMobile, setInquiryMobile] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryCourse, setInquiryCourse] = useState('XI Science');
  const [inquiryCategory, setInquiryCategory] = useState('Open / EBC');
  const [inquiryMarks, setInquiryMarks] = useState('');

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    logAction('ADMISSION_INQUIRY', `Online admission registration by ${inquiryName} for ${inquiryCourse}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-poppins">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Academic Session 2026-27
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Admissions & Eligibility Criteria
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Official guidelines, mandatory document checklists, and online application portal.
          </p>
        </div>

        <button
          onClick={() => setCurrentRoute('fees')}
          className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0 flex items-center gap-1.5"
        >
          <span>View 2026-27 Fee Charts</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Official Requirements & Guidelines (from Pages 33-34) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Junior College Admission Rules */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                कनिष्ठ महाविद्यालय प्रवेश पात्रता नियम
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-0.5">
                Junior College Eligibility Criteria (11th & 12th)
              </h3>
            </div>

            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Must have passed SSC (10th standard) or equivalent examination with English as a compulsory subject.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>For 11th Science: Minimum <strong>40% marks in Science subject</strong> in SSC exam is mandatory.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Special NEET, JEE, MHT-CET coaching batches available with limited intake of 75 students and girls hostel facility.</span>
              </li>
            </ul>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
              <span className="font-bold text-slate-900 block">
                Documents Required with Junior College Application:
              </span>
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-700 list-decimal pl-4">
                <li>Original Transfer / Leaving Certificate (TC)</li>
                <li>Attested copy of 10th Marks Memo</li>
                <li>Recent passport-size photographs (3 copies)</li>
                <li>Caste Certificate (for backward class categories)</li>
                <li>Eligibility Certificate (for students outside Maharashtra)</li>
                <li>Migration Certificate (for outside state students)</li>
                <li>Progeny Certificate (अपत्य प्रमाणपत्र)</li>
                <li>Tehsildar Income Certificate & EBC form</li>
                <li>Aadhaar Card Xerox (Updated without error)</li>
                <li>Parent's Aadhaar Card Xerox</li>
              </ol>
            </div>
          </div>

          {/* Senior College UG & PG Admission Rules */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
                वरिष्ठ व पदव्युत्तर महाविद्यालय प्रवेश नियम
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-0.5">
                Senior & Postgraduate Eligibility Rules (B.A., B.Sc., B.Com., BCS, M.A., M.Sc.)
              </h3>
            </div>

            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>Must have passed HSC (12th standard) or equivalent examination in relevant stream.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>For M.A. and M.Com. 1st Year: Minimum <strong>40% marks in relevant graduate degree</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>For M.Sc. Chemistry & Physics: Minimum <strong>45% for Open Category</strong> and <strong>40% for Reserved Category</strong> in B.Sc. + Compulsory PG-CET entrance examination.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span><strong>Academic Bank of Credits (ABC) ID:</strong> All 1st Year degree students must compulsorily generate their ABC ID at <a href="https://www.abc.gov.in" target="_blank" rel="noreferrer" className="font-bold underline text-amber-800">www.abc.gov.in</a> before submitting the form.</span>
              </li>
            </ul>

            <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200 text-xs text-amber-950 space-y-2">
              <span className="font-bold block">Important Institutional Regulations (Page 34):</span>
              <ul className="space-y-1 list-disc pl-4 text-slate-800">
                <li>Admission is strictly granted on a <strong>merit basis</strong> due to capped intake capacity.</li>
                <li>Government reservation policy (SC, ST, OBC, NT, SEBC, EWS, Divyang) is meticulously observed.</li>
                <li><strong>Fees once paid are strictly non-refundable</strong> under any circumstances.</li>
                <li>Under no circumstances are duplicate T.C.s issued during the middle of an academic course.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Online Admission Application Form */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md sticky top-24 space-y-5">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                Online Inquiry & Registration
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                Apply for Admission 2026-27
              </h3>
              <p className="text-xs text-slate-700 mt-1">
                Register your seat inquiry. Our admission counseling committee will verify eligibility and contact you.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-950">
                  Application Inquiry Submitted!
                </h4>
                <p className="text-xs text-emerald-900 leading-relaxed">
                  Thank you, <strong>{inquiryName}</strong>. Your inquiry reference number is <span className="font-mono font-bold">ADM-2026-{Math.floor(1000 + Math.random() * 9000)}</span>. Please bring your original documents to the college inquiry desk.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 bg-emerald-700 text-white rounded-lg text-xs font-semibold hover:bg-emerald-800"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-700 font-medium mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="Enter student full name"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-slate-700 font-medium mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={inquiryMobile}
                      onChange={(e) => setInquiryMobile(e.target.value)}
                      placeholder="10-digit mobile"
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-medium mb-1">
                      Previous Marks (%) *
                    </label>
                    <input
                      type="text"
                      required
                      value={inquiryMarks}
                      onChange={(e) => setInquiryMarks(e.target.value)}
                      placeholder="e.g. 78.40%"
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    placeholder="student@example.com"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">
                    Program / Course Applied For *
                  </label>
                  <select
                    value={inquiryCourse}
                    onChange={(e) => setInquiryCourse(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-xs font-medium"
                  >
                    <option value="XI Science (General)">XI Science (General)</option>
                    <option value="XI Science (NEET/JEE Batch)">XI Science (Special NEET/JEE Batch)</option>
                    <option value="XI Commerce">XI Commerce</option>
                    <option value="XI Arts">XI Arts</option>
                    <option value="XI MCVC Vocational">XI MCVC Vocational</option>
                    <option value="Police Training Academy">Police Pre-Recruitment Academy</option>
                    <option value="B.A. (Arts 4-Year Honours)">B.A. (Arts 4-Year Honours)</option>
                    <option value="B.Sc. (Science 4-Year Honours)">B.Sc. (Science 4-Year Honours)</option>
                    <option value="B.Com. (Commerce 4-Year Honours)">B.Com. (Commerce 4-Year Honours)</option>
                    <option value="B.Sc. Computer Science (BCS)">B.Sc. Computer Science (BCS)</option>
                    <option value="B.Sc. Information Technology (IT)">B.Sc. Information Technology (IT)</option>
                    <option value="M.Sc. Chemistry">M.Sc. Chemistry (PG-CET)</option>
                    <option value="M.Sc. Physics">M.Sc. Physics (PG-CET)</option>
                    <option value="M.A. Master of Arts">M.A. Master of Arts</option>
                    <option value="M.Com.">M.Com. Master of Commerce</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">
                    Category (for scholarship & fee calculation) *
                  </label>
                  <select
                    value={inquiryCategory}
                    onChange={(e) => setInquiryCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-xs font-medium"
                  >
                    <option value="Open / EBC">Open / EBC Category</option>
                    <option value="SC">SC (Scheduled Caste)</option>
                    <option value="ST">ST (Scheduled Tribe)</option>
                    <option value="OBC">OBC (Other Backward Class)</option>
                    <option value="NT / VJNT">NT / VJNT (Nomadic Tribes)</option>
                    <option value="SEBC">SEBC</option>
                    <option value="EWS">EWS</option>
                    <option value="Paying">Paying (Non-concessional)</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Admission Application</span>
                  </button>
                </div>

                <div className="text-[11px] text-slate-700 text-center pt-1">
                  Enquiry Desk Phone: <span className="font-mono font-bold">(02475) 252020</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
