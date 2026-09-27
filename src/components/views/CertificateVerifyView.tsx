import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  ShieldCheck,
  Search,
  CheckCircle,
  AlertCircle,
  Award,
  Calendar,
  Building,
  QrCode,
  Printer,
  FileCheck
} from 'lucide-react';

export const CertificateVerifyView: React.FC = () => {
  const { verifyCertificate, certificates } = useApp();
  const [certInput, setCertInput] = useState('SCSCO-2026-BCS-089');
  const [searchedRecord, setSearchedRecord] = useState(() => verifyCertificate('SCSCO-2026-BCS-089'));
  const [hasSearched, setHasSearched] = useState(true);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const found = verifyCertificate(certInput);
    setSearchedRecord(found);
    setHasSearched(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-poppins">
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-800 text-center space-y-2">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-2">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
          Digital Document Authentication
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Official Certificate Verification Portal
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
          Verify academic credentials, transfer certificates, character certificates, and merit awards issued by Shri Chhatrapati Shivaji College, Omerga.
        </p>
      </div>

      {/* Verification Search Bar */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md space-y-4">
        <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              value={certInput}
              onChange={(e) => setCertInput(e.target.value)}
              placeholder="Enter Certificate Number (e.g. SCSCO-2026-BCS-089) or Verification Code..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-mono text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 shrink-0"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Verify Document</span>
          </button>
        </form>

        {/* Quick Demo Test Buttons */}
        <div className="flex items-center gap-2 flex-wrap text-xs text-slate-500 pt-1">
          <span>Try Demo IDs:</span>
          {certificates.map(c => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setCertInput(c.certificateNumber);
                setSearchedRecord(c);
                setHasSearched(true);
              }}
              className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-[11px]"
            >
              {c.certificateNumber}
            </button>
          ))}
        </div>
      </div>

      {/* Verification Result Display */}
      {hasSearched && (
        <div>
          {searchedRecord ? (
            <div className="bg-white rounded-2xl border-2 border-emerald-500/80 shadow-xl overflow-hidden p-6 sm:p-10 space-y-8 relative print:border-none print:shadow-none">
              {/* Authenticity Watermark Banner */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="font-bold">
                    Official Authenticated Digital Certificate Record
                  </span>
                </div>
                <span className="font-mono text-[11px] text-emerald-700 font-semibold">
                  Valid Status: Active
                </span>
              </div>

              {/* Certificate Canvas / Layout */}
              <div className="border-4 border-amber-900/20 p-6 sm:p-10 rounded-xl relative space-y-6 text-center bg-radial from-amber-50/20 to-white">
                {/* Header Crest */}
                <div className="space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-amber-800">
                    Bharat Shikshan Sanstha, Omerga
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Shri Chhatrapati Shivaji Mahavidyalaya, Omerga
                  </h2>
                  <p className="text-xs text-slate-600">
                    Dist. Dharashiv - 413606 (Maharashtra) · NAAC Re-Accredited 'A' Grade (CGPA 3.14)
                  </p>
                  <p className="text-[11px] text-slate-500 font-mono">
                    Affiliated to Dr. Babasaheb Ambedkar Marathwada University, Chhatrapati Sambhajinagar
                  </p>
                </div>

                {/* Certificate Title */}
                <div className="py-2">
                  <span className="px-6 py-1.5 rounded-full bg-slate-900 text-amber-400 font-bold uppercase text-xs tracking-wider inline-block">
                    {searchedRecord.type}
                  </span>
                </div>

                {/* Certificate Recipient Statement */}
                <div className="space-y-4 max-w-xl mx-auto text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p>
                    This is officially certified and verified from institutional archives that
                  </p>
                  <p className="text-xl sm:text-2xl font-extrabold text-slate-900 underline decoration-amber-500 decoration-2 underline-offset-4">
                    {searchedRecord.studentName}
                  </p>
                  <p>
                    has successfully fulfilled all institutional criteria and academic requirements in the course:
                  </p>
                  <p className="text-base font-bold text-slate-900">
                    {searchedRecord.courseName}
                  </p>
                  <p className="font-semibold text-emerald-800">
                    Performance / Grade: {searchedRecord.gradeOrMarks}
                  </p>
                </div>

                {/* Signatures & Footer Verification Footer */}
                <div className="grid grid-cols-3 items-end pt-8 border-t border-slate-200 text-xs">
                  {/* Left: Issue Date & Cert No */}
                  <div className="text-left space-y-1 font-mono text-[11px] text-slate-600">
                    <div>Cert No: <strong className="text-slate-900">{searchedRecord.certificateNumber}</strong></div>
                    <div>Issue Date: {searchedRecord.issueDate}</div>
                    <div className="text-[10px] text-slate-400">Code: {searchedRecord.verificationCode}</div>
                  </div>

                  {/* Center: Official Seal */}
                  <div className="text-center">
                    <div className="w-18 h-18 rounded-full border-2 border-dashed border-amber-800 text-amber-800 flex flex-col items-center justify-center p-1 mx-auto text-[8px] font-bold uppercase tracking-tighter">
                      <span>Official Seal</span>
                      <Award className="w-4 h-4 text-amber-600 my-0.5" />
                      <span>SC(S)CO Omerga</span>
                    </div>
                  </div>

                  {/* Right: Principal Signature */}
                  <div className="text-right space-y-1">
                    <div className="font-serif italic font-bold text-slate-900 text-sm">
                      Dr. S. N. Aswale
                    </div>
                    <div className="text-[11px] font-bold text-slate-800">
                      {searchedRecord.issuedBy}
                    </div>
                    <div className="text-[10px] text-slate-500">
                      Principal & Academic Officer
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-500 font-mono">
                  SHA-256 Verified Ledger ID: {searchedRecord.id}
                </span>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Official Certificate</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-white border border-red-200 text-center space-y-3">
              <AlertCircle className="w-10 h-10 text-red-500 mx-auto" />
              <h3 className="text-base font-bold text-red-950">
                Invalid or Unverified Certificate Number
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                No matching academic credential found for "{certInput}". Please verify the number printed on the document or contact the Principal's Examination Office.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
