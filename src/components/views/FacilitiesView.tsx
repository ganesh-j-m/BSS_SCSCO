import React from 'react';
import { useApp } from '../../context/AppContext';
import { COLLEGE_FACILITIES } from '../../data/officialData';
import {
  BookOpen,
  Microscope,
  Cpu,
  Award,
  ShieldAlert,
  Leaf,
  Zap,
  Languages,
  Trophy,
  Users,
  CheckCircle2,
  Clock,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const FacilitiesView: React.FC = () => {
  const { setCurrentRoute } = useApp();

  const iconMap: Record<string, React.ReactNode> = {
    BookOpen: <BookOpen className="w-6 h-6 text-amber-600" />,
    Microscope: <Microscope className="w-6 h-6 text-purple-600" />,
    Cpu: <Cpu className="w-6 h-6 text-blue-600" />,
    Award: <Award className="w-6 h-6 text-amber-600" />,
    ShieldAlert: <ShieldAlert className="w-6 h-6 text-red-600" />,
    Leaf: <Leaf className="w-6 h-6 text-emerald-600" />,
    Zap: <Zap className="w-6 h-6 text-orange-600" />,
    Languages: <Languages className="w-6 h-6 text-indigo-600" />,
    Trophy: <Trophy className="w-6 h-6 text-yellow-600" />,
    Users: <Users className="w-6 h-6 text-teal-600" />
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-poppins">
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Campus Infrastructure · भौतिक व शैक्षणिक सुविधा
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Facilities & Specialized Centers
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            State-of-the-art academic, research, vocational, and student amenities across 30 acres.
          </p>
        </div>

        <div className="text-xs text-amber-300 font-mono bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
          30-Acre Campus
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {COLLEGE_FACILITIES.map(facility => (
          <div
            key={facility.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all p-6 sm:p-7 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  {iconMap[facility.icon] || <Award className="w-6 h-6 text-slate-600" />}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {facility.title}
                  </h3>
                  <div className="text-xs text-amber-800 font-medium">
                    {facility.marathiTitle}
                  </div>
                </div>
              </div>

              {facility.stats && (
                <div className="inline-block text-[11px] font-semibold font-mono px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200">
                  {facility.stats}
                </div>
              )}

              <p className="text-xs text-slate-700 leading-relaxed">
                {facility.description}
              </p>

              {facility.features && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {facility.features.map((feat, i) => (
                    <span key={i} className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
                      ✓ {feat}
                    </span>
                  ))}
                </div>
              )}

              {facility.hours && (
                <div className="flex items-center gap-1.5 text-xs text-slate-700 font-medium pt-1">
                  <Clock className="w-3.5 h-3.5 text-slate-700" />
                  <span>Hours: {facility.hours}</span>
                </div>
              )}

              {facility.contact && (
                <div className="text-xs text-emerald-800 font-medium pt-1">
                  Contact: {facility.contact}
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-700 font-medium">Verified Prospectus Record</span>
              <button
                onClick={() => {
                  if (facility.id === 'fac-career-katta') setCurrentRoute('career-katta');
                  else if (facility.id === 'fac-lib') setCurrentRoute('library');
                  else if (facility.id === 'fac-rac') setCurrentRoute('rac-lab');
                  else if (facility.id === 'fac-soil') setCurrentRoute('soil-lab');
                  else setCurrentRoute('courses');
                }}
                className="text-amber-800 font-semibold hover:underline inline-flex items-center gap-1"
              >
                Explore More <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 20 Additional Student Amenities (from Page 41 of Prospectus) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
          Student Welfare & Essential Campus Amenities (विद्यार्थी सेवा सुविधा - पान ४१)
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {[
            "1. रात्र अभ्यासिका (Night Reading Hall till 12 AM)",
            "2. YCMOU मुक्त विद्यापीठ अभ्यास केंद्र",
            "3. Wi-Fi Enabled Campus (इंटरनेट सुविधा)",
            "4. मानवी हक्क शिक्षण केंद्र (UGC Center)",
            "5. झेरॉक्स व स्टेशनरी केंद्र (सवलतीच्या दरात)",
            "6. ई-मेल व इंटरनेट फ्री सेवा",
            "7. मुलींचे स्वतंत्र वसतिगृह (Girls Hostel)",
            "8. मुलांचे स्वतंत्र वसतिगृह (Boys Hostel)",
            "9. सुरक्षित सायकल स्टँड (Vehicle Parking)",
            "10. सहकारी ग्राहक भांडार (Co-op Store)",
            "11. उपहारगृह (Campus Canteen)",
            "12. व्यवसाय मार्गदर्शन केंद्र",
            "13. हेल्थ केअर सेंटर व प्रथमोपचार",
            "14. तक्रार पेटी (Student Grievance Box)",
            "15. विद्यार्थ्यांसाठी समूह विमा योजना (Group Insurance)",
            "16. जिमनेशियम व फिटनेस हॉल",
            "17. करिअर मार्गदर्शन व प्लेसमेंट सेल",
            "18. स्पर्धा परीक्षा स्वतंत्र अभ्यासिका",
            "19. मागासवर्गीय विद्यार्थ्यांसाठी रेमेडियल कोचिंग",
            "20. मागास होतकरू विद्यार्थ्यांसाठी दत्तक योजना"
          ].map((amenity, idx) => (
            <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-medium">
              {amenity}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
