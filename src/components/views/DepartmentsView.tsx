import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PersonCard } from '../ui/PersonCard';
import {
  BookOpen,
  FlaskConical,
  Briefcase,
  Wrench,
  Search,
  Users,
  Award,
  Layers,
  Sparkles,
  ChevronRight,
  Phone
} from 'lucide-react';

interface DeptMeta {
  id: string;
  name: string;
  marathiName: string;
  faculty: 'Science' | 'Arts' | 'Commerce' | 'Vocational';
  hod: string;
  hodPhone?: string;
  description: string;
  features: string[];
  labsOrFacilities?: string[];
}

const DEPARTMENTS_DATA: DeptMeta[] = [
  // Science
  {
    id: "chemistry",
    name: "Department of Chemistry",
    marathiName: "रसायनशास्त्र विभाग",
    faculty: "Science",
    hod: "Dr. V. S. Suryawanshi",
    hodPhone: "9421360168",
    description: "Established in 1959. Recognized Research Center since 1996. Guided 41 Ph.D. scholars with over 42 students qualifying national NET, SET, GATE examinations. Provides PG M.Sc. and advanced analytical characterization.",
    features: [
      "Common Research Facility Center (CRFC) access with FTIR and UV-Visible spectrophotometer",
      "M.Sc. Organic / Analytical Chemistry with campus placement in bulk drug & pharma firms",
      "41 Ph.D. degrees conferred under recognized research guides",
      "Regular chemical exhibition and industrial study tours"
    ],
    labsOrFacilities: ["PG Chemistry Lab", "Analytical Lab", "CRFC Instrumentation Room", "Balance & Preparation Room"]
  },
  {
    id: "physics",
    name: "Department of Physics & Electronics",
    marathiName: "भौतिकशास्त्र व इलेक्ट्रॉनिक्स विभाग",
    faculty: "Science",
    hod: "Dr. A. S. Padampalle",
    hodPhone: "9421356683",
    description: "Established in 1959 with Electronics introduced in 1981 and M.Sc. in 1991. Houses the prestigious Common Research Facility Center (CRFC) inaugurated in 2010 by Hon. Ashokrao Chavan.",
    features: [
      "Advanced characterization: X-Ray Diffractometer (XRD), FTIR, UV-Vis Spectrophotometer, AC/DC Resistivity",
      "Recognized Ph.D. Research Center with 7 active doctoral fellows",
      "High placement in DRDO, ISRO, VSSC, BSNL, BHEL, and NTPC"
    ],
    labsOrFacilities: ["CRFC High-End Lab", "General Physics Lab", "Dark Room", "Galvanometer Room", "Electronics Lab"]
  },
  {
    id: "botany",
    name: "Department of Botany",
    marathiName: "वनस्पतीशास्त्र विभाग",
    faculty: "Science",
    hod: "Dr. V. D. Devarkar",
    hodPhone: "9421355073",
    description: "Established in 1959. Features a modern tissue culture laboratory, extensive regional herbarium, botanical garden, and farmer advisory services for medicinal and cash crop cultivation.",
    features: [
      "Vertical laminar air flow, BOD incubator, and autoclave instrumentation",
      "Botanical garden with rare medicinal plant conservatory",
      "Nature Meet Club organizing environmental study excursions",
      "Free agricultural advisory and plant identification services for local farmers"
    ],
    labsOrFacilities: ["Tissue Culture Lab", "Botanical Garden", "Herbarium Museum", "Plant Physiology Lab"]
  },
  {
    id: "zoology",
    name: "Department of Zoology",
    marathiName: "प्राणीशास्त्र विभाग",
    faculty: "Science",
    hod: "Dr. M. S. Nirmale",
    hodPhone: "9923239363",
    description: "Established in 1959. Houses an extensive zoological specimen museum preserved over 40 years, containing 117+ rare specimens, snake collections, and educational fish aquarium.",
    features: [
      "Museum with 117 preserved biological specimens and live aquarium",
      "Curriculum training in Fisheries, Sericulture, Poultry, and Apiculture",
      "Opportunities in state fisheries departments and wildlife conservation"
    ],
    labsOrFacilities: ["Zoology Dissection Lab", "Specimen Museum", "Aquarium Section"]
  },
  {
    id: "mathematics",
    name: "Department of Mathematics",
    marathiName: "गणित विभाग",
    faculty: "Science",
    hod: "Dr. V. M. Gaikwad",
    hodPhone: "9404275042",
    description: "Established in 1959. Integrates computational mathematics with Python programming and LaTeX typesetting in compliance with NEP 2020.",
    features: [
      "Computational problem solving using Python and LaTeX software",
      "Banking & competitive exam mathematical aptitude workshops",
      "Regular poster presentations, seminars, and math olympiad drills"
    ],
    labsOrFacilities: ["Mathematical Computing Lab"]
  },
  {
    id: "computer-science",
    name: "Department of Computer Science & IT",
    marathiName: "संगणकशास्त्र व माहिती तंत्रज्ञान विभाग",
    faculty: "Science",
    hod: "Dr. S. S. Revate",
    hodPhone: "9421336176",
    description: "Established in 1997-98. Offers B.Sc. Computer Science (BCS), B.Sc. IT, and Optional Computer Science across 3 fully equipped software laboratories and 2 ICT-enabled smart classrooms.",
    features: [
      "3 independent computer laboratories with high-speed internet and UPS backup",
      "Software development in C/C++, Java, Python, Web Frameworks, and DBMS",
      "Corporate guest lectures, campus recruitment training, and software internships"
    ],
    labsOrFacilities: ["Lab 1 (Programming)", "Lab 2 (Web & Database)", "Lab 3 (Networking & Systems)"]
  },
  {
    id: "industrial-chemistry",
    name: "Department of Industrial Chemistry",
    marathiName: "औद्योगिक रसायनशास्त्र विभाग",
    faculty: "Science",
    hod: "Dr. V. V. Dhole",
    hodPhone: "7809501501",
    description: "Elective program designed to support 'Make in India' and bridge the gap between academic chemistry and chemical manufacturing industries.",
    features: [
      "Industry-Institute-Interaction program with guest lectures from chemical plant managers",
      "Industrial visits to refineries, fertilizer units, and pharma manufacturing centers",
      "Direct pathway to M.Sc. Industrial Chemistry and industry placements"
    ],
    labsOrFacilities: ["Industrial Chemistry Pilot Lab"]
  },

  // Commerce
  {
    id: "commerce",
    name: "Department of Commerce & Management",
    marathiName: "वाणिज्य विभाग",
    faculty: "Commerce",
    hod: "Dr. A. S. Ashte",
    hodPhone: "9423740707",
    description: "Comprehensive commerce education from 11th standard to M.Com. and Ph.D. level. Produced 20 M.Phil and 27 Ph.D. scholars with 210+ research publications. Established the SCSC-ICE Incubation Center.",
    features: [
      "Independent Commerce Computer Lab with Tally and computerized accounting",
      "Quality Circle, Commerce Association, and annual bank internships",
      "Special guidance for Banking, CA Foundation, MBA-CET, and UPSC/MPSC exams",
      "27 Ph.D. and 20 M.Phil degrees completed through Commerce Research Center"
    ],
    labsOrFacilities: ["Commerce Computer Lab", "Commerce Research Lab", "Incubation Center (SCSC-ICE)"]
  },

  // Arts & Humanities
  {
    id: "marathi",
    name: "Department of Marathi",
    marathiName: "मराठी विभाग",
    faculty: "Arts",
    hod: "Dr. P. A. Pitle",
    hodPhone: "7588062621",
    description: "Promoting literary appreciation, creative writing, and competitive exam language mastery. Publishes the college wall magazine 'Sahityatarang' (साहित्यतरंग).",
    features: [
      "Wall magazine 'Sahityatarang' nurturing poets, storytellers, and critics",
      "Guidance for MPSC exams (Dy. Collector, Tehsildar, BDO, Talathi, Gramsevak)",
      "M.A. Marathi post-graduate degree and Ph.D. research supervision"
    ],
    labsOrFacilities: ["Sahityatarang Editorial Room", "Language Lab Station"]
  },
  {
    id: "english",
    name: "Department of English & Language Lab",
    marathiName: "इंग्रजी विभाग व भाषा भवन",
    faculty: "Arts",
    hod: "Shri. S. V. Bahirao",
    hodPhone: "9421445574",
    description: "Active since 1959. Overcoming the rural language barrier through a modern digital Language Lab established in 2012 equipped with 30 independent computer terminals.",
    features: [
      "Digital Language Lab with 30 PCs and interactive linguistic software",
      "English grammar, correct phonetics, pronunciation, and conversation practice",
      "M.A. English curriculum covering Indian, American, and African literature"
    ],
    labsOrFacilities: ["Language Lab (30 Terminals)", "Audio-Visual Projection Room"]
  },
  {
    id: "hindi",
    name: "Department of Hindi",
    marathiName: "हिंदी विभाग",
    faculty: "Arts",
    hod: "Dr. S. P. Ingle",
    hodPhone: "9423718452",
    description: "Preparing students for opportunities as central translators, Hindi officers in nationalized banks, news anchors in Doordarshan/AIR, and script writers.",
    features: [
      "Translation and Rajbhasha competitive exam orientation",
      "M.A. Hindi and doctoral research support",
      "Celebration of Hindi Pakhwada and national seminars"
    ],
    labsOrFacilities: ["Language Lab", "Departmental Library"]
  },
  {
    id: "history",
    name: "Department of History & Museum",
    marathiName: "इतिहास विभाग व वस्तुसंग्रहालय",
    faculty: "Arts",
    hod: "Dr. G. N. Somvanshi",
    hodPhone: "8275272961",
    description: "Engaged in active historical survey and archaeological excavation in Omerga region. Researching 6th Vikramaditya Chalukya stone inscriptions at Talmod and established an archaeological museum in 2022.",
    features: [
      "Archaeological artifact museum established in 2022",
      "Epigraphical excavation of Halekannada rock inscriptions of Chalukya King Vikramaditya VI at Talmod",
      "Annual study tours to Ajanta, Ellora, Daulatabad, Raigad, Panhala, and Kolhapur",
      "M.A. History and competitive exam guidance"
    ],
    labsOrFacilities: ["Historical Museum (Estd. 2022)", "Epigraphy Research Section"]
  },
  {
    id: "geography",
    name: "Department of Geography & Soil Lab",
    marathiName: "भूगोल विभाग व माती परीक्षण केंद्र",
    faculty: "Arts",
    hod: "Dr. D. S. Itle",
    hodPhone: "9850619733",
    description: "Started in 1974-75, UG in 1981-82, PG in 1996-97, and Ph.D. Center in 2005. 7 Ph.D. degrees conferred, 78 research papers published. Operates the free Mati Parikshan Kendra for regional farmers in Room 13.",
    features: [
      "Mati Parikshan Kendra (Soil Testing Lab) providing free nutrient testing for farmers",
      "Well-equipped GIS, survey, and meteorology practical laboratory",
      "Annual socio-economic village surveys and water conservation awareness drives",
      "Preparation for MPSC / UPSC geographical optional subjects"
    ],
    labsOrFacilities: ["Soil Testing Lab (Room 13)", "Cartography & Survey Lab", "Meteorology Section"]
  },
  {
    id: "political-science",
    name: "Department of Political Science",
    marathiName: "राज्यशास्त्र विभाग",
    faculty: "Arts",
    hod: "Dr. D. B. Dhobale",
    hodPhone: "9421354911",
    description: "Guided by the vision: 'To disseminate democratic value and create ideal leadership'. Active since 1959 with BA, MA, and Ph.D. research supervision.",
    features: [
      "Celebration of National Voters Day (Jan 25) and Constitution Day (Nov 26) with rallies and poster contests",
      "M.A. Political Science and competitive examination study modules",
      "Guest lectures on international politics and parliamentary democracy"
    ],
    labsOrFacilities: ["Democracy Study Corner"]
  },
  {
    id: "sociology",
    name: "Department of Sociology",
    marathiName: "समाजशास्त्र विभाग",
    faculty: "Arts",
    hod: "Dr. P. D. Patil",
    hodPhone: "9421374284",
    description: "Established in 1975, PG started in 1990. Conducting annual socio-economic surveys to sensitize students to rural realities, social justice, and national integration.",
    features: [
      "Annual socio-economic field research in drought-prone rural villages",
      "Training in Rural Sociology, Industrial Sociology, and Medical Social Work",
      "M.A. Sociology and SET/NET research preparation"
    ],
    labsOrFacilities: ["Socio-Economic Survey Unit"]
  },
  {
    id: "economics",
    name: "Department of Economics",
    marathiName: "अर्थशास्त्र विभाग",
    faculty: "Arts",
    hod: "Dr. V. N. Hissal",
    hodPhone: "9423341632",
    description: "Active since 1959. Equipping rural students with financial literacy, analytical economics, and statistical competence for careers in banking, insurance, and public administration.",
    features: [
      "Financial planning and economic literacy seminars",
      "Preparation for Indian Economic Service, MPSC, and banking recruitments",
      "Research in agricultural economics and regional development"
    ],
    labsOrFacilities: ["Economic Data & Census Corner"]
  },
  {
    id: "physical-education",
    name: "Department of Physical Education & Sports",
    marathiName: "शारीरिक शिक्षण व क्रीडा विभाग",
    faculty: "Arts",
    hod: "Shri. R. M. Suryawanshi",
    hodPhone: "9423339324",
    description: "Extensive playgrounds and gymnasium coaching university medalists in Wrestling, Kabaddi, Kho-Kho, Volleyball, Basketball, Athletics, Cricket, and Table Tennis.",
    features: [
      "Multi-gymnasium with modern fitness equipment",
      "Dedicated coaching in Wrestling, Kabaddi, Kho-Kho, Athletics, and Cricket",
      "Coordination with Police & Military Pre-Recruitment Academy"
    ],
    labsOrFacilities: ["Gymnasium Hall", "Athletic Grounds", "Indoor Sports Room"]
  },

  // Vocational & Auxiliary
  {
    id: "mcvc",
    name: "Department of Vocational Education (MCVC)",
    marathiName: "व्होकेशनल अभ्यासक्रम (MCVC) विभाग",
    faculty: "Vocational",
    hod: "Shri. S. T. Dadge",
    hodPhone: "7218667555",
    description: "Offers 6 employment-oriented trades with 20 seats each: Mechanical, Horticulture, Accounting & Office Management, Electrical, Automobile, and Food Product Technology.",
    features: [
      "6 vocational technical trades certified by Maharashtra Technical Board",
      "Hands-on workshop machinery and practical fabrication drills",
      "Direct pathway into industry technician jobs and self-employment ventures"
    ],
    labsOrFacilities: ["Mechanical Workshop", "Automobile Garage Lab", "Food Tech Lab", "Electrical Workshop"]
  },
  {
    id: "library-dept",
    name: "Central Library & Information Center",
    marathiName: "मध्यवर्ती ग्रंथालय विभाग",
    faculty: "Arts",
    hod: "Dr. P. B. Gaikwad",
    hodPhone: "9421573485",
    description: "Houses 1,17,397 books, 34 journals, 12 newspapers, OPAC computerized terminal, and a night reading room open until midnight during examinations.",
    features: [
      "1,17,397 total books cataloged under Dr. Vijay Bhatkar's ETH software",
      "Night reading hall operating until 12:00 Midnight",
      "Separate boys and girls spacious study halls and Internet Access Hub"
    ],
    labsOrFacilities: ["Boys Reading Room", "Girls Reading Room", "Staff Study Room", "Internet Hub"]
  }
];

export const DepartmentsView: React.FC = () => {
  const { allPeople } = useApp();
  const [selectedFaculty, setSelectedFaculty] = useState<string>('All');
  const [activeDept, setActiveDept] = useState<DeptMeta | null>(null);
  const [search, setSearch] = useState('');

  const filteredDepts = DEPARTMENTS_DATA.filter(dept => {
    const matchesFaculty = selectedFaculty === 'All' || dept.faculty === selectedFaculty;
    const matchesSearch = dept.name.toLowerCase().includes(search.toLowerCase()) ||
                          dept.marathiName.includes(search) ||
                          dept.hod.toLowerCase().includes(search.toLowerCase());
    return matchesFaculty && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-poppins">
      {/* Page Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Academic Infrastructure
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Academic Departments & Centers
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            20 specialized departments across Science, Arts, Commerce, and Vocational disciplines.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 bg-slate-800 p-1.5 rounded-xl border border-slate-700 text-xs">
          {['All', 'Science', 'Commerce', 'Arts', 'Vocational'].map(f => (
            <button
              key={f}
              onClick={() => setSelectedFaculty(f)}
              className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                selectedFaculty === f
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Search Input */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search department, HOD, or keyword..."
          className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500 shadow-2xs"
        />
      </div>

      {/* Departments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDepts.map(dept => (
          <div
            key={dept.id}
            className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all p-6 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                  {dept.faculty}
                </span>
                <span className="text-xs text-amber-800 font-semibold">
                  HOD: {dept.hod}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                  {dept.name}
                </h3>
                <div className="text-xs text-amber-800 font-medium mt-0.5">
                  {dept.marathiName}
                </div>
              </div>

              <p className="text-xs text-slate-700 line-clamp-3 leading-relaxed">
                {dept.description}
              </p>

              {/* Lab badges */}
              {dept.labsOrFacilities && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {dept.labsOrFacilities.slice(0, 2).map((lab, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-700">
                      {lab}
                    </span>
                  ))}
                  {dept.labsOrFacilities.length > 2 && (
                    <span className="text-[10px] text-slate-700 self-center">
                      +{dept.labsOrFacilities.length - 2} more
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              {dept.hodPhone ? (
                <a
                  href={`tel:${dept.hodPhone}`}
                  className="inline-flex items-center gap-1 text-xs text-slate-700 hover:text-emerald-700 font-mono"
                >
                  <Phone className="w-3 h-3 text-emerald-600" />
                  {dept.hodPhone}
                </a>
              ) : <span />}

              <button
                onClick={() => setActiveDept(dept)}
                className="text-xs font-semibold text-amber-800 hover:text-amber-900 inline-flex items-center gap-1"
              >
                View Profile <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Department Modal */}
      {activeDept && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 space-y-6">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  {activeDept.faculty} Faculty
                </span>
                <h2 className="text-xl font-bold text-slate-900 mt-0.5">
                  {activeDept.name}
                </h2>
                <div className="text-xs text-amber-800 font-medium">
                  {activeDept.marathiName} · HOD: {activeDept.hod} {activeDept.hodPhone && `(${activeDept.hodPhone})`}
                </div>
              </div>
              <button
                onClick={() => setActiveDept(null)}
                className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium"
              >
                Close
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
              <div>
                <h4 className="font-bold text-slate-900 mb-1 text-sm">Department Overview</h4>
                <p>{activeDept.description}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1.5 text-sm">Key Academic & Research Features</h4>
                <ul className="space-y-1.5 pl-4 list-disc text-slate-700">
                  {activeDept.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              {activeDept.labsOrFacilities && (
                <div>
                  <h4 className="font-bold text-slate-900 mb-1.5 text-sm">Laboratories & Specialized Setups</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeDept.labsOrFacilities.map((lab, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 font-medium">
                        {lab}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-700">Official data verified from Prospectus</span>
              <button
                onClick={() => setActiveDept(null)}
                className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
