import React from 'react';
import { useApp } from '../../context/AppContext';
import { COLLEGE_PROFILE, ADMINISTRATIVE_HEADS, MANAGEMENT_MEMBERS } from '../../data/officialData';
import {
  Award,
  BookOpen,
  Users,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Bell,
  Cpu,
  Microscope,
  Leaf,
  Trophy,
  CheckCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const { setCurrentRoute, notices, events } = useApp();

  const principal = ADMINISTRATIVE_HEADS.find(h => h.id === 'adm-1');
  const chairman = MANAGEMENT_MEMBERS.find(m => m.id === 'gov-1');

  return (
    <div className="space-y-12 pb-16 font-poppins">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-slate-900 via-slate-900 to-amber-950 text-white py-16 sm:py-24">
        {/* Subtle decorative background patterns */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading & Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wide">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>NAAC 'A' Grade CGPA 3.14 · AAA Audit 'A' (263/300)</span>
              </div>

              <div className="space-y-2">
                <p className="text-xs uppercase font-bold tracking-widest text-amber-400">
                  {COLLEGE_PROFILE.sansthaMarathiName} (Estd. 1941)
                </p>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  {COLLEGE_PROFILE.marathiName}
                </h1>
                <p className="text-lg sm:text-xl font-medium text-amber-100">
                  {COLLEGE_PROFILE.name}
                </p>
                <p className="text-xs text-slate-300">
                  Affiliated to Dr. Babasaheb Ambedkar Marathwada University, Chhatrapati Sambhajinagar
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
                Founded under the visionary leadership of Swargiya Tatyaraoji More (Aaba) in 1959. Today, SC(S)CO empowers 6,000+ rural youths across 30 acres with modern NEP 2020 honors degree programs, high-tech CRFC research laboratories, ICICI Foundation skill centers, and dedicated competitive examination academies.
              </p>

              {/* Motto callout */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="text-xs text-amber-300 font-semibold uppercase tracking-wider">
                    Institutional Motto
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    "Comprehensive Development Through Education"
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-amber-300 font-semibold uppercase tracking-wider">
                    Student Ethos
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5 font-mono">
                    "Enter to Learn, Go to Serve"
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => setCurrentRoute('admissions')}
                  className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center gap-2"
                >
                  <span>Admissions 2026-27</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setCurrentRoute('courses')}
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs transition-colors flex items-center gap-2"
                >
                  <span>Explore Programs</span>
                </button>

                <button
                  onClick={() => setCurrentRoute('ai-assistant')}
                  className="px-4 py-3 rounded-xl bg-amber-900/60 hover:bg-amber-900 border border-amber-500/40 text-amber-200 font-semibold text-xs transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Ask AI Desk</span>
                </button>
              </div>
            </div>

            {/* Right Column: Hero Card & Official Snapshot */}
            <div className="lg:col-span-5">
              <div className="bg-white/95 text-slate-900 rounded-2xl p-6 shadow-2xl border border-white/20 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
                      Prospectus 2026-27
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Official Institutional Highlights
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
                    SC(S)CO
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="text-slate-700 font-medium">Campus Area</div>
                    <div className="text-base font-bold text-slate-900 mt-0.5">30 Acres</div>
                    <div className="text-[11px] text-slate-700">Lush green campus</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="text-slate-700 font-medium">Student Strength</div>
                    <div className="text-base font-bold text-slate-900 mt-0.5">6,000+</div>
                    <div className="text-[11px] text-slate-700">Jr, Sr & PG Wings</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="text-slate-700 font-medium">Central Library</div>
                    <div className="text-base font-bold text-slate-900 mt-0.5">1,17,397</div>
                    <div className="text-[11px] text-slate-700">Books & OPAC Hub</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="text-slate-700 font-medium">Research Centers</div>
                    <div className="text-base font-bold text-slate-900 mt-0.5">71 Ph.D.s</div>
                    <div className="text-[11px] text-slate-700">30 M.Phil Awarded</div>
                  </div>
                </div>

                {/* Key Badges */}
                <div className="space-y-2 pt-1 text-xs">
                  <div className="flex items-center gap-2 p-2 bg-emerald-50 text-emerald-900 rounded-lg border border-emerald-200">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>NEP 2020 4-Year Honors Degree & ABC Credit System</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-amber-50 text-amber-900 rounded-lg border border-amber-200">
                    <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Special NEET / JEE / MHT-CET Batches with Latur Faculty</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-sky-50 text-sky-900 rounded-lg border border-sky-200">
                    <CheckCircle className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>CRFC Advanced Instrumentation & ICICI RAC Simulators</span>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <button
                    onClick={() => setCurrentRoute('about')}
                    className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Read Full Institutional Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Perspectives (Chairman & Principal) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Chairman / President Message */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  President's Message · संदेश
                </span>
                <span className="text-xs text-slate-700 font-mono">BSS Omerga</span>
              </div>

              <blockquote className="text-sm text-slate-700 leading-relaxed italic">
                "Bharat Shikshan Sanstha was established in the pre-independence era in 1941 to light the torch of education in our rural border region. Over 85 years, thousands of students have flourished from our institutions. In line with the National Education Policy 2020, we have made state-of-the-art facilities available across all schools and colleges so that no student in rural areas is deprived of world-class higher education due to financial distress."
              </blockquote>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Shri. Amol Shivajirao More
                </h4>
                <p className="text-xs text-slate-700">
                  President (अध्यक्ष), Bharat Shikshan Sanstha, Omerga
                </p>
              </div>
              <button
                onClick={() => setCurrentRoute('leadership')}
                className="text-xs font-semibold text-amber-800 hover:underline inline-flex items-center gap-1"
              >
                Karyakari Mandal <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Principal's Desk */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Principal's Desk · मनोगत
                </span>
                <span className="text-xs text-slate-700 font-mono">NAAC 'A' 3.14</span>
              </div>

              <blockquote className="text-sm text-slate-700 leading-relaxed italic">
                "Started in June 1959 with a modest roll of just 50 students, our college today educates more than 6,000 students on the Maharashtra-Karnataka border. We take pride in providing comprehensive education right from undergraduate courses to Ph.D. research in Chemistry, Physics, Botany, Zoology, Commerce, and Arts. Our campus is fully Wi-Fi enabled, with interactive digital classrooms, advanced CRFC research equipment, and career coaching."
              </blockquote>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Dr. Sanjay Namdev Aswale
                </h4>
                <p className="text-xs text-slate-700">
                  Principal (प्राचार्य), M.Com., M.A.(Eco), M.Phil., Ph.D.
                </p>
              </div>
              <button
                onClick={() => setCurrentRoute('principal-desk')}
                className="text-xs font-semibold text-emerald-800 hover:underline inline-flex items-center gap-1"
              >
                Principal Message <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Institutional Values (Page 9 of Prospectus) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-xl border border-slate-800">
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-8">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
              Vision & Core Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Guiding Principles from Official Charter
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              "Spread of education in rural region and Inculcation of values and overall personality development."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h4 className="text-sm font-bold text-white">Responsibility</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                "Enter to learn and Go out to serve" the rural society and nation.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h4 className="text-sm font-bold text-white">Commitment</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                "Ignition to Talent and Commitment to Task" in education & research.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h4 className="text-sm font-bold text-white">Accountability</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Use of diversified expertise for community and rural progression.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
                4
              </div>
              <h4 className="text-sm font-bold text-white">Technology</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Promoting ICT in teaching, learning, language labs, and research.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
                5
              </div>
              <h4 className="text-sm font-bold text-white">Quality Education</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Skill & value-based education for holistic student excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Streams Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Academics
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Comprehensive Academic Wings
            </h2>
          </div>
          <button
            onClick={() => setCurrentRoute('courses')}
            className="text-xs font-semibold text-amber-800 hover:underline flex items-center gap-1"
          >
            <span>All Programs</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Junior College */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:border-amber-400 transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center font-bold text-sm">
                XI-XII
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                Junior College (HSC)
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Science (600 Intake), Commerce (600 Intake), Arts (480 Intake), and MCVC Vocational (120 Intake). Includes dedicated NEET/JEE/MHT-CET batches with Latur coaching faculty.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-700">
              <span className="font-semibold text-slate-700">1,800 Seats</span>
              <button onClick={() => setCurrentRoute('junior-college')} className="text-amber-800 font-semibold hover:underline">
                Details →
              </button>
            </div>
          </div>

          {/* Senior College UG */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:border-amber-400 transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-800 flex items-center justify-center font-bold text-sm">
                UG
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-800 transition-colors">
                Undergraduate Degrees
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                B.A. (360 Grant + 240 Non-Grant), B.Sc. (290 Intake across 7 Groups), B.Com. (120 Intake), B.Sc. Computer Science (BCS - 60 Intake), and B.Sc. Information Technology (60 Intake).
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-700">
              <span className="font-semibold text-slate-700">NEP 4-Year Honors</span>
              <button onClick={() => setCurrentRoute('senior-college')} className="text-sky-800 font-semibold hover:underline">
                Details →
              </button>
            </div>
          </div>

          {/* Senior College PG */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:border-amber-400 transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-sm">
                PG
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                Postgraduate Degrees
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                M.A. in 7 subjects (Marathi, Hindi, English, History, Geography, Pol. Sci., Sociology - 60 each), M.Com., M.Sc. Chemistry (30 Seats), and M.Sc. Physics (30 Seats) via PG-CET merit.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-700">
              <span className="font-semibold text-slate-700">Dr. BAMU Affiliated</span>
              <button onClick={() => setCurrentRoute('courses')} className="text-emerald-800 font-semibold hover:underline">
                Details →
              </button>
            </div>
          </div>

          {/* Research & Ph.D. */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:border-amber-400 transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-800 flex items-center justify-center font-bold text-sm">
                Ph.D.
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-800 transition-colors">
                Doctoral Research
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Recognized Research Centers in Chemistry, Physics, and Commerce with 27 registered research guides. 71 Ph.D. scholars awarded, 550+ research publications.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-700">
              <span className="font-semibold text-slate-700">27 Research Guides</span>
              <button onClick={() => setCurrentRoute('research')} className="text-purple-800 font-semibold hover:underline">
                Details →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Institutional Centers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
            Specialized Facilities
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Advanced Centers of Learning & Community Service
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* RAC Lab */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              ICICI Foundation RAC Lab
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Marathwada's premier modern refrigerator and air conditioning technician training center with VRF technology, 4 months training + 2 months paid stipend internship, and 100% placement support.
            </p>
            <button
              onClick={() => setCurrentRoute('rac-lab')}
              className="text-xs font-semibold text-blue-800 hover:underline inline-flex items-center gap-1"
            >
              Learn More <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mati Parikshan */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Leaf className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Mati Parikshan Kendra (Soil Lab)
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Situated in Room 13 in the Botanical Garden, this IQAC & Water Literacy sponsored center provides free soil testing, pH analysis, and scientific crop advisories for regional farmers.
            </p>
            <button
              onClick={() => setCurrentRoute('soil-lab')}
              className="text-xs font-semibold text-emerald-800 hover:underline inline-flex items-center gap-1"
            >
              Farmer Guidelines <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Career Katta & Center of Excellence */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
              <Trophy className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Career Katta (Code: C34650)
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Comprehensive guidance for UPSC, MPSC, Banking, and Police recruitment alongside National Institute of Securities Markets (NISM) financial certifications and digital smart classrooms.
            </p>
            <button
              onClick={() => setCurrentRoute('career-katta')}
              className="text-xs font-semibold text-amber-800 hover:underline inline-flex items-center gap-1"
            >
              Time Table & Bundles <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Notices & Events Double Column */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Latest Notices */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-amber-700" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Latest Announcements & Notices
                </h3>
              </div>
              <button
                onClick={() => setCurrentRoute('notices')}
                className="text-xs font-semibold text-amber-800 hover:underline"
              >
                View All ({notices.length})
              </button>
            </div>

            <div className="space-y-3">
              {notices.slice(0, 4).map(notice => (
                <div
                  key={notice.id}
                  onClick={() => setCurrentRoute('notices')}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-amber-50/50 border border-slate-200/80 transition-colors cursor-pointer space-y-1"
                >
                  <div className="flex items-center justify-between text-[11px] text-slate-700">
                    <span className="font-semibold text-amber-800">{notice.category}</span>
                    <span>{notice.date}</span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                    {notice.title}
                  </h4>
                  <p className="text-xs text-slate-700 line-clamp-2">
                    {notice.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Academic & Cultural Events */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-sky-700" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Upcoming Campus Events
                </h3>
              </div>
              <button
                onClick={() => setCurrentRoute('events')}
                className="text-xs font-semibold text-sky-800 hover:underline"
              >
                Full Calendar
              </button>
            </div>

            <div className="space-y-3">
              {events.map(event => (
                <div
                  key={event.id}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900">{event.title}</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-100 text-sky-800">
                      {event.date}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 line-clamp-2">
                    {event.description}
                  </p>
                  <div className="text-[11px] text-slate-700 flex items-center justify-between pt-1">
                    <span>Venue: {event.venue}</span>
                    <span className="text-slate-700 font-medium">Time: {event.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Online Verification Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 rounded-2xl bg-linear-to-r from-slate-900 via-amber-950 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-amber-500/30">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Digital Governance & Transparency
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Online Digital Certificate & Document Verification
            </h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Employers, universities, and students can instantly authenticate academic degrees, transfer certificates, character certificates, and course completion records issued by SC(S)CO.
            </p>
          </div>
          <button
            onClick={() => setCurrentRoute('verify')}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-colors shrink-0 flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Verify Document Now</span>
          </button>
        </div>
      </section>
    </div>
  );
};
