import React from 'react';
import { COLLEGE_PROFILE, SANSTHA_BRANCHES } from '../../data/officialData';
import { useApp } from '../../context/AppContext';
import {
  Building,
  Phone,
  Mail,
  MapPin,
  Award,
  Globe,
  ShieldCheck,
  Download,
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentRoute } = useApp();

  return (
    <footer className="bg-slate-950 text-slate-300 font-poppins pt-14 pb-8 border-t-4 border-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Institutional Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-700 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
                SC(S)CO
              </div>
              <div>
                <div className="text-[11px] font-semibold tracking-wider uppercase text-amber-400">
                  {COLLEGE_PROFILE.sansthaMarathiName}
                </div>
                <h3 className="text-base font-bold text-white leading-tight">
                  {COLLEGE_PROFILE.marathiName}
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Established in June 1959. Providing quality higher education, research excellence, and rural empowerment across Arts, Science, Commerce, and Vocational streams.
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{COLLEGE_PROFILE.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:02475252020" className="hover:text-white font-mono">
                  {COLLEGE_PROFILE.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${COLLEGE_PROFILE.email}`} className="hover:text-white">
                  {COLLEGE_PROFILE.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono">{COLLEGE_PROFILE.website}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 pb-1 border-b border-slate-800">
              Academics & Admissions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setCurrentRoute('nep2020')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  NEP 2020 4-Year Framework
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentRoute('junior-college')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  Junior College (NEET/JEE Batches)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentRoute('courses')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  Undergraduate & PG Degrees
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentRoute('research')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  Ph.D. Research Centers & CRFC
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentRoute('fees')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  Official 2026-27 Fee Charts
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentRoute('scholarships')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  Government Scholarships (15)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentRoute('prizes')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  Endowments & Merit Prizes (29)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Initiatives */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 pb-1 border-b border-slate-800">
              Campus Facilities & Hubs
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setCurrentRoute('career-katta')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  Career Katta (Code: C34650)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentRoute('rac-lab')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  ICICI Foundation RAC Laboratory
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentRoute('soil-lab')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  Mati Parikshan Kendra (Room 13)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentRoute('incubation')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  SCSC-ICE Incubation Center
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentRoute('library')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  Central Library (1.17 Lakh Books)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentRoute('verify')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-emerald-400 font-medium"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Verify Digital Certificate
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentRoute('download-zip')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-sky-400 font-medium"
                >
                  <Download className="w-3.5 h-3.5 text-sky-400" />
                  Download SC(S)CO-Digital-Campus.zip
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Institutional Network & Accreditations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 pb-1 border-b border-slate-800">
              Accreditations & Affiliation
            </h4>

            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-semibold text-white">NAAC Re-Accredited 'A'</span>
              </div>
              <p className="text-[11px] text-slate-300">
                CGPA 3.14 on a 4-point scale (Cycle 3, Valid up to June 20, 2027)
              </p>
              <div className="pt-1.5 border-t border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
                <span>AAA Audit Grade:</span>
                <span className="font-bold text-emerald-400">'A' (263/300)</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-[11px] font-semibold text-slate-300 mb-1">
                Parent Body: Bharat Shikshan Sanstha
              </div>
              <div className="text-[11px] text-slate-300">
                Operating 15 educational institutions across Marathwada & Karnataka borders.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-3">
          <div>
            © {new Date().getFullYear()} Shri Chhatrapati Shivaji Mahavidyalaya, Omerga. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Primary Source: Prospectus 2026-27-1.pdf</span>
            <span>·</span>
            <span>AI Studio Certified Applet</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
