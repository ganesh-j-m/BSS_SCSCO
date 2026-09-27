import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  COLLEGE_PROFILE,
  MANAGEMENT_MEMBERS,
  ADMINISTRATIVE_HEADS,
  INSTITUTIONAL_COMMITTEES,
  SANSTHA_BRANCHES
} from '../../data/officialData';
import { PersonCard } from '../ui/PersonCard';
import {
  Building,
  Target,
  Compass,
  Award,
  Users,
  Shield,
  CheckCircle,
  FileText,
  MapPin,
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';

interface AboutViewProps {
  initialTab?: string;
}

export const AboutView: React.FC<AboutViewProps> = ({ initialTab = 'overview' }) => {
  const { currentRoute, setCurrentRoute } = useApp();
  
  // Map route to active subtab
  const getTabFromRoute = () => {
    if (currentRoute === 'vision-mission') return 'vision';
    if (currentRoute === 'leadership') return 'leadership';
    if (currentRoute === 'administration') return 'administration';
    if (currentRoute === 'principal-desk') return 'principal';
    if (currentRoute === 'branches') return 'branches';
    return 'overview';
  };

  const [activeTab, setActiveTab] = useState<string>(getTabFromRoute());

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-poppins">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Institutional Heritage · स्थापना १९५९
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              About Shri Chhatrapati Shivaji College
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Bharat Shikshan Sanstha, Omerga · NAAC 'A' Grade CGPA 3.14 · AAA Audit 'A' (263/300)
            </p>
          </div>
          
          <div className="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-semibold">
            College Code: C34650
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pt-6 border-t border-slate-800 mt-6 text-xs font-medium">
          {[
            { id: 'overview', label: 'History & Growth' },
            { id: 'vision', label: 'Vision, Mission & Goals' },
            { id: 'leadership', label: 'Sanstha Management (21)' },
            { id: 'administration', label: 'Administrative Setup' },
            { id: 'principal', label: "Principal's Desk" },
            { id: 'branches', label: 'Sister Institutions (15)' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab 1: Overview & History */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Foundational Journey · पूर्वपीठिका
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                From Pre-Independence Roots (1941) to Academic Leadership
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
              <p>
                <strong>Bharat Shikshan Sanstha</strong> was born in the pre-independence era in <strong>1941</strong>, sparked by the national freedom movement and patriotic consciousness. During a time of profound educational darkness and feudal adversity, <strong>Swargiya Tatyaraoji More (Aaba)</strong> and his dedicated associates boldly took the historic initiative to plant the seeds of formal education in the rural borderland of Dharashiv (then Osmanabad).
              </p>
              <p>
                Recognizing that political freedom without intellectual emancipation and democratic education cannot ensure true social prosperity, the founders set the noble objective of shaping capable, responsible citizens with self-reliance, ethical conduct, and social commitment.
              </p>
              <p>
                Under the vast banyan tree of Bharat Shikshan Sanstha, <strong>Shri Chhatrapati Shivaji Mahavidyalaya, Omerga</strong> was officially inaugurated in <strong>June 1959 with a modest roll of just 50 students</strong>.
              </p>
              <p>
                Today, the institution stands as an educational beacon on the Maharashtra-Karnataka border, educating <strong>over 6,000 students</strong> across a <strong>30-acre campus</strong>. It offers education ranging from Junior College (Arts, Science, Commerce, Vocational MCVC) to Undergraduate 4-year Honours Degree programs, Postgraduate M.A., M.Com., M.Sc., and Ph.D. doctoral research.
              </p>
            </div>

            {/* Historical Milestones Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-mono font-bold text-amber-800">1941</span>
                <h4 className="text-sm font-bold text-slate-900 mt-1">Sanstha Founded</h4>
                <p className="text-xs text-slate-700 mt-1">
                  Established by Swargiya Tatyaraoji More (Aaba) to foster rural awakening.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-mono font-bold text-amber-800">1959</span>
                <h4 className="text-sm font-bold text-slate-900 mt-1">College Inaugurated</h4>
                <p className="text-xs text-slate-700 mt-1">
                  Started with 50 students on the Maharashtra-Karnataka border.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-mono font-bold text-amber-800">2010</span>
                <h4 className="text-sm font-bold text-slate-900 mt-1">CRFC Center</h4>
                <p className="text-xs text-slate-700 mt-1">
                  Advanced research facility opened with XRD, FTIR, and spectrophotometers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-mono font-bold text-amber-800">2022-2027</span>
                <h4 className="text-sm font-bold text-slate-900 mt-1">NAAC 'A' Grade</h4>
                <p className="text-xs text-slate-700 mt-1">
                  Accredited with CGPA 3.14 (Cycle 3) and AAA Audit Grade 'A' (263/300).
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Vision, Mission & Goals */}
      {activeTab === 'vision' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                VISION · दृष्टी
              </h3>
              <blockquote className="text-sm text-slate-700 font-semibold p-4 rounded-xl bg-amber-50/60 border border-amber-200/60">
                "Comprehensive Development through Education."
              </blockquote>
              <p className="text-xs text-slate-700">
                To serve as a transformative center of higher learning that empowers rural learners to achieve intellectual, social, and economic elevation.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-800 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                MISSION · ध्येय
              </h3>
              <blockquote className="text-sm text-slate-700 font-semibold p-4 rounded-xl bg-sky-50/60 border border-sky-200/60">
                "Spread of education in rural region and Inculcation of values and overall personality development."
              </blockquote>
              <p className="text-xs text-slate-700">
                Bridging the urban-rural divide by availing modern science, technology, commerce, and humanistic values to the rural students of Marathwada.
              </p>
            </div>
          </div>

          {/* Goals & Objectives (Verbatim from Page 9) */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Goals */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Institutional Goals (उद्दिष्टे)
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Making rural youths able to find out employments.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Making rural youths responsible citizens.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Availing necessary opportunities to outstanding students for bright career prospects.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Making available all the sources within institution’s limit for progression of students.</span>
                  </li>
                </ul>
              </div>

              {/* Objectives */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Key Objectives (ध्येय धोरणे)
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                    <span>Making students clean of utterance and behaviour.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                    <span>Inculcating humanity and patriotism among students.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                    <span>Promoting leadership qualities and teamwork.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                    <span>Imprinting the importance of time and discipline in the minds of students.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                    <span>Instilling students with activeness and rationalism.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                    <span>Strengthening the attitude of selfless service.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                    <span>Ignition to talent and commitment to task.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Management & Karyakari Mandal */}
      {activeTab === 'leadership' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Governing Body · कार्यकारिणी मंडळ
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Bharat Shikshan Sanstha Executive Committee
              </h2>
            </div>
            <div className="text-xs text-slate-700 font-mono">
              21 Members Roster
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MANAGEMENT_MEMBERS.map(member => (
              <PersonCard key={member.id} person={member} />
            ))}
          </div>

          {/* CDC & LMC Committees */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
            {/* CDC */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                {INSTITUTIONAL_COMMITTEES.cdc.title}
              </h3>
              <div className="divide-y divide-slate-100 text-xs">
                {INSTITUTIONAL_COMMITTEES.cdc.members.map(m => (
                  <div key={m.sr} className="py-2 flex items-center justify-between">
                    <span className="font-medium text-slate-800">{m.sr}. {m.name}</span>
                    <span className="text-slate-700 font-semibold">{m.role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Senior LMC */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                {INSTITUTIONAL_COMMITTEES.seniorLmc.title}
              </h3>
              <div className="divide-y divide-slate-100 text-xs">
                {INSTITUTIONAL_COMMITTEES.seniorLmc.members.map(m => (
                  <div key={m.sr} className="py-2 flex items-center justify-between">
                    <span className="font-medium text-slate-800">{m.sr}. {m.name}</span>
                    <span className="text-slate-700 font-semibold">{m.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Administrative Setup */}
      {activeTab === 'administration' && (
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Institutional Hierarchy
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Administrative Set-Up (प्रशासकीय संरचना)
            </h2>
            <p className="text-xs text-slate-700 mt-1">
              Official executive officers overseeing academic governance, student welfare, and day-to-day operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADMINISTRATIVE_HEADS.map(head => (
              <PersonCard key={head.id} person={head} />
            ))}
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <h3 className="text-sm font-bold text-slate-900">
              Administrative Office Automation & ETH Software
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              As detailed in the official prospectus, all administrative office functions from student admission to degree clearance are managed using <strong>Dr. Vijay Bhatkar's ETH Software</strong> along with an automated SMS notification system to keep students and parents informed in real time.
            </p>
          </div>
        </div>
      )}

      {/* Tab 5: Principal's Desk */}
      {activeTab === 'principal' && (
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 border-b border-slate-100">
            <div className="w-24 h-28 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center text-slate-400">
              <span className="text-xs font-bold text-slate-700 text-center">Dr. S. N. Aswale</span>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Principal's Address · मनोगत
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                Dr. Sanjay Namdev Aswale
              </h2>
              <div className="text-xs text-slate-700 font-medium">
                M.Com., M.A.(Eco), M.Phil., Ph.D., G.D.C&A · Principal, SC(S)CO Omerga
              </div>
              <div className="text-xs text-slate-700 font-mono mt-1">
                Phone: 9422070783 · Email: principal_scsco@rediffmail.com
              </div>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p className="font-semibold text-slate-900">
              प्रिय विद्यार्थी मित्रांनो!
            </p>
            <p>
              जीवनाच्या उत्तरोत्तर प्रखर होत जाणाऱ्या संघर्षाला वाटेवरून आत्मोध्दार अन् समाजोध्दार साधायचा असेल तर त्याला शिक्षणाशिवाय तरणोपाय नाही. आपण ग्रामीण भागातून आलात की शहरी भागातून यावर तुमची गुणवत्ता ठरत नसून, तुम्ही तुमच्या क्षमतांचा वापर, माहिती तंत्रज्ञानाची कास धरून वैयक्तिक यशस्वीतेसाठी कसा करून घेत आहात यावरच ठरते.
            </p>
            <p>
              आजतागायत अनेक ग्रामीण भागातील युवक-युवतींनी या महाविद्यालयात प्रवेश घेऊन आपल्या क्षमतांच्या व गुणवत्तेच्या आधारावर आयुष्याचे सोने केले आहे. त्यांच्या यशाने त्यांच्या आयुष्याचा उत्कर्ष तर झालाच, सोबतच महाविद्यालयाचाही लौकिक उंचावला आहे.
            </p>
            <p>
              वर्ष १९५९ च्या जून मध्ये अवघ्या ५० विद्यार्थी संख्येवर चालू झालेल्या आपल्या या महाविद्यालयात आज ६००० पेक्षा जास्त विद्यार्थी शिक्षण घेत आहेत. महाराष्ट्र व कर्नाटकच्या सीमेवरील या महाविद्यालयाने आपल्या उज्ज्वल परंपरेने सर्वांच्या नजरा आपल्याकडे खेचून घेतल्या आहेत.
            </p>
            <p>
              विद्यार्थ्यांसाठी तीस एकरचा विस्तीर्ण परिसर, मुलांसाठी व मुलींसाठी स्वतंत्र वसतिगृहे, विस्तृत खेळाची मैदाने, नेमबाजी प्रशिक्षण केंद्र, रेफ्रिजरेटर व एसी लॅब, करिअर कट्टा, स्पर्धापरीक्षा मार्गदर्शन केंद्र, स्वतंत्र अभ्यासिका आणि पोलीस व सैन्य भरती अकॅडमी अशा अद्ययावत सुविधा आम्ही उपलब्ध करून दिल्या आहेत.
            </p>
            <p className="font-semibold text-slate-900 pt-2">
              ‘‘Enter to Learn, Go to Serve’’
            </p>
          </div>
        </div>
      )}

      {/* Tab 6: Sister Institutions */}
      {activeTab === 'branches' && (
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Educational Network
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Branches & Sister Institutions under Bharat Shikshan Sanstha
            </h2>
            <p className="text-xs text-slate-700 mt-1">
              Providing education from primary school up to doctorate across Maharashtra and Karnataka borders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SANSTHA_BRANCHES.map((branch, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">
                    {branch}
                  </h4>
                  <span className="text-[11px] text-slate-700">
                    Bharat Shikshan Sanstha
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
