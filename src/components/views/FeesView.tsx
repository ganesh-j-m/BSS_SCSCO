import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { JUNIOR_COLLEGE_FEES, SENIOR_PG_FEES, FeeItem } from '../../data/officialData';
import {
  CreditCard,
  Calculator,
  Search,
  Filter,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Receipt
} from 'lucide-react';

export const FeesView: React.FC = () => {
  const { setCurrentRoute } = useApp();
  const [activeTab, setActiveTab] = useState<'junior' | 'senior' | 'calculator'>('junior');
  const [search, setSearch] = useState('');

  // Interactive Fee Calculator State
  const [calcWing, setCalcWing] = useState<'Junior' | 'Senior'>('Junior');
  const [calcCourse, setCalcCourse] = useState<string>('XI Science');
  const [calcCategory, setCalcCategory] = useState<'openEbc' | 'scSt' | 'obcSeber' | 'paying'>('openEbc');

  const allFeeList = [...JUNIOR_COLLEGE_FEES, ...SENIOR_PG_FEES];

  const currentCalcItem = allFeeList.find(f => f.courseName === calcCourse) || JUNIOR_COLLEGE_FEES[0];
  const calculatedFee = currentCalcItem ? currentCalcItem[calcCategory] : 0;

  const filteredJunior = JUNIOR_COLLEGE_FEES.filter(f =>
    f.courseName.toLowerCase().includes(search.toLowerCase())
  );

  const filteredSenior = SENIOR_PG_FEES.filter(f =>
    f.courseName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-poppins">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Official Schedule of Fees 2026-27
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            College Fee Structures
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Extracted verbatim from Prospectus Pages 35 & 36 under Dr. BAMU university regulations.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 bg-slate-800 p-1.5 rounded-xl border border-slate-700 text-xs">
          <button
            onClick={() => setActiveTab('junior')}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors ${
              activeTab === 'junior'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Junior College Fees
          </button>
          <button
            onClick={() => setActiveTab('senior')}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors ${
              activeTab === 'senior'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Senior & PG Fees
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1 ${
              activeTab === 'calculator'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Calculator</span>
          </button>
        </div>
      </div>

      {/* Official Footnote / EBC Disclaimer */}
      <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 space-y-1">
        <span className="font-bold block">
          ** EBC / GOI Form Mandatory Notice (Page 35):
        </span>
        <p>
          Students who do NOT submit their online EBC / GOI Scholarship forms will be required to pay the full <strong>PAYING FEES</strong> (Column 4). All fees are subject to final university revision by Dr. Babasaheb Ambedkar Marathwada University for 2026-27.
        </p>
      </div>

      {/* Search Input */}
      {activeTab !== 'calculator' && (
        <div className="relative max-w-sm">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search course name (e.g. Science, B.Com, M.Sc)..."
            className="w-full pl-9 pr-3 py-2 bg-white rounded-lg border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500 shadow-2xs"
          />
        </div>
      )}

      {/* Tab 1: Junior College Fee Table (Page 35) */}
      {activeTab === 'junior' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">
              Junior College Admission Fees (कनिष्ठ महाविद्यालय प्रवेश फी २०२६-२७)
            </h3>
            <span className="text-xs text-slate-500 font-mono">12 Classes listed</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-100/80 text-slate-700 font-semibold uppercase tracking-wider text-[11px] border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Class / Stream</th>
                  <th className="py-3 px-4">Regular Fees (Open / EBC)</th>
                  <th className="py-3 px-4">Regular Fees (SC & ST)</th>
                  <th className="py-3 px-4">Regular Fees (OBC & NT)</th>
                  <th className="py-3 px-4 text-amber-900 font-bold">Paying Fees **</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredJunior.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900">
                      {row.courseName}
                    </td>
                    <td className="py-3 px-4 font-mono text-slate-700">
                      ₹{row.openEbc.toFixed(2)}
                    </td>
                    <td className="py-3 px-4 font-mono text-slate-700">
                      ₹{row.scSt.toFixed(2)}
                    </td>
                    <td className="py-3 px-4 font-mono text-slate-700">
                      ₹{row.obcSeber.toFixed(2)}
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-amber-700">
                      ₹{row.paying.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: Senior & PG College Fee Table (Page 36) */}
      {activeTab === 'senior' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">
              Senior & PG College Admission Fees (वरिष्ठ व पदव्युत्तर महाविद्यालय फी २०२६-२७)
            </h3>
            <span className="text-xs text-slate-500 font-mono">33 Programs listed</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-100/80 text-slate-700 font-semibold uppercase tracking-wider text-[11px] border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Degree / Class</th>
                  <th className="py-3 px-4">Regular Fees (Open / EBC)</th>
                  <th className="py-3 px-4">Regular Fees (SC & ST)</th>
                  <th className="py-3 px-4">Regular Fees (OBC / NT / SEBC)</th>
                  <th className="py-3 px-4 text-amber-900 font-bold">Paying Fees **</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredSenior.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-2.5 px-4 font-semibold text-slate-900">
                      {row.courseName}
                    </td>
                    <td className="py-2.5 px-4 font-mono text-slate-700">
                      ₹{row.openEbc.toFixed(2)}
                    </td>
                    <td className="py-2.5 px-4 font-mono text-slate-700">
                      ₹{row.scSt.toFixed(2)}
                    </td>
                    <td className="py-2.5 px-4 font-mono text-slate-700">
                      ₹{row.obcSeber.toFixed(2)}
                    </td>
                    <td className="py-2.5 px-4 font-mono font-bold text-amber-700">
                      ₹{row.paying.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: Interactive Fee Calculator */}
      {activeTab === 'calculator' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Interactive Tool
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-0.5">
              Personalized Admission Fee Calculator
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Select your course and fee category to see the verified amount payable for 2026-27.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Wing Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                1. Select Academic Wing
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setCalcWing('Junior');
                    setCalcCourse('XI Science');
                  }}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                    calcWing === 'Junior'
                      ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  Junior College (11/12)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCalcWing('Senior');
                    setCalcCourse('B.Sc. I');
                  }}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                    calcWing === 'Senior'
                      ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  Senior & PG Degrees
                </button>
              </div>
            </div>

            {/* Course Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                2. Select Course / Program
              </label>
              <select
                value={calcCourse}
                onChange={(e) => setCalcCourse(e.target.value)}
                className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-amber-500 font-semibold text-slate-900"
              >
                {(calcWing === 'Junior' ? JUNIOR_COLLEGE_FEES : SENIOR_PG_FEES).map(c => (
                  <option key={c.courseName} value={c.courseName}>
                    {c.courseName}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                3. Concession / Fee Category
              </label>
              <select
                value={calcCategory}
                onChange={(e) => setCalcCategory(e.target.value as any)}
                className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-amber-500 font-semibold text-slate-900"
              >
                <option value="openEbc">Open Category (with EBC Concession)</option>
                <option value="scSt">SC & ST Category (GOI Scholarship)</option>
                <option value="obcSeber">OBC / NT / SEBC Category</option>
                <option value="paying">Paying (Without Concession / Full Fee)</option>
              </select>
            </div>
          </div>

          {/* Calculator Result Box */}
          <div className="p-6 rounded-2xl bg-linear-to-r from-slate-900 to-amber-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                Official Calculated Fee
              </span>
              <h4 className="text-lg font-bold text-white">
                {currentCalcItem.courseName}
              </h4>
              <p className="text-xs text-slate-300">
                Category: {calcCategory === 'openEbc' ? 'Open / EBC' : calcCategory === 'scSt' ? 'SC / ST' : calcCategory === 'obcSeber' ? 'OBC / NT / SEBC' : 'Full Paying Fee'}
              </p>
            </div>

            <div className="text-center sm:text-right shrink-0">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-400">
                ₹{calculatedFee.toFixed(2)}
              </div>
              <span className="text-[10px] text-slate-400">
                Academic Year 2026-27 (Annual)
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
