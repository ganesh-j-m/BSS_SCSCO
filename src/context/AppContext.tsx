import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  PersonRecord,
  COLLEGE_PROFILE,
  MANAGEMENT_MEMBERS,
  ADMINISTRATIVE_HEADS,
  OFFICIAL_TEACHING_FACULTY,
  OFFICIAL_NON_TEACHING_STAFF,
  OFFICIAL_COURSES,
  CourseInfo,
  JUNIOR_COLLEGE_FEES,
  SENIOR_PG_FEES,
  OFFICIAL_SCHOLARSHIPS,
  OFFICIAL_PRIZES,
  COLLEGE_FACILITIES,
  FeeItem
} from '../data/officialData';

export type UserRole = 'GUEST' | 'SUPER_ADMIN' | 'PRINCIPAL' | 'TEACHER' | 'STUDENT' | 'PARENT' | 'STAFF';

export interface UserSession {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  department?: string;
  rollNumber?: string;
  courseName?: string;
  childName?: string;
}

export interface NoticeItem {
  id: string;
  title: string;
  category: 'General' | 'Academic' | 'Admission' | 'Exam' | 'Scholarship';
  audience: 'ALL' | 'STUDENTS' | 'TEACHERS' | 'PARENTS';
  date: string;
  isPinned: boolean;
  content: string;
  attachmentName?: string;
}

export interface EventItem {
  id: string;
  title: string;
  category: 'Academic' | 'Cultural' | 'Sports' | 'Seminar';
  date: string;
  time: string;
  venue: string;
  description: string;
  registeredCount: number;
}

export interface CertificateRecord {
  id: string;
  certificateNumber: string;
  studentName: string;
  courseName: string;
  type: 'Degree Completion' | 'Transfer Certificate' | 'Merit Award' | 'Course Participation' | 'NSS Character Certificate';
  issueDate: string;
  gradeOrMarks: string;
  verificationCode: string;
  isValid: boolean;
  issuedBy: string;
}

export interface AuditLogItem {
  id: string;
  timestamp: string;
  userName: string;
  role: string;
  action: string;
  details: string;
}

interface AppContextType {
  // Navigation & View
  currentRoute: string;
  setCurrentRoute: (route: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedDeptId: string | null;
  setSelectedDeptId: (id: string | null) => void;
  selectedCourseId: string | null;
  setSelectedCourseId: (id: string | null) => void;
  
  // Auth
  currentUser: UserSession;
  loginAs: (role: UserRole) => void;
  logout: () => void;
  
  // People CMS
  allPeople: PersonRecord[];
  updatePerson: (person: PersonRecord) => void;
  addPerson: (person: Omit<PersonRecord, 'id'>) => void;
  deletePerson: (id: string) => void;
  
  // Notices CMS
  notices: NoticeItem[];
  addNotice: (notice: Omit<NoticeItem, 'id'>) => void;
  deleteNotice: (id: string) => void;
  
  // Events CMS
  events: EventItem[];
  addEvent: (event: Omit<EventItem, 'id'>) => void;
  
  // Certificates
  certificates: CertificateRecord[];
  addCertificate: (cert: Omit<CertificateRecord, 'id'>) => void;
  verifyCertificate: (certNum: string) => CertificateRecord | undefined;
  
  // Audit Logs
  auditLogs: AuditLogItem[];
  logAction: (action: string, details: string) => void;
  
  // Fees
  juniorFees: FeeItem[];
  seniorFees: FeeItem[];
  paidStudentFees: { [studentId: string]: number };
  payStudentFee: (studentId: string, amount: number) => void;

  // AI Assistant Query
  aiQueryHistory: Array<{ query: string; response: string; timestamp: string }>;
  askAssistant: (query: string) => string;
}

const DEFAULT_USERS: Record<UserRole, UserSession> = {
  GUEST: {
    id: "guest-0",
    name: "Campus Visitor",
    email: "visitor@scsco.edu.in",
    role: "GUEST"
  },
  SUPER_ADMIN: {
    id: "sa-1",
    name: "Central Administrator",
    email: "superadmin@scsco.edu.in",
    role: "SUPER_ADMIN",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  PRINCIPAL: {
    id: "prin-1",
    name: "Dr. Sanjay Namdev Aswale",
    email: "principal_scsco@rediffmail.com",
    role: "PRINCIPAL",
    department: "Commerce",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  TEACHER: {
    id: "tch-1",
    name: "Dr. V. S. Suryawanshi",
    email: "prof.suryawanshi@scsco.edu.in",
    role: "TEACHER",
    department: "Chemistry",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  STUDENT: {
    id: "std-1",
    name: "Aniket Balasaheb More",
    email: "student.aniket@scsco.edu.in",
    role: "STUDENT",
    courseName: "B.Sc. Computer Science (BCS) - Sem IV",
    rollNumber: "BCS-2024-042",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80"
  },
  PARENT: {
    id: "par-1",
    name: "Balasaheb Shivram More",
    email: "parent.balasaheb@scsco.edu.in",
    role: "PARENT",
    childName: "Aniket Balasaheb More",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  STAFF: {
    id: "stf-1",
    name: "Shri. R. B. Sonwane (Registrar)",
    email: "registrar@scsco.edu.in",
    role: "STAFF",
    department: "Administration",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
  }
};

const INITIAL_NOTICES: NoticeItem[] = [
  {
    id: "not-1",
    title: "NEP 2020 First Year Admission Notice 2026-27 (BA, B.Sc, B.Com)",
    category: "Admission",
    audience: "ALL",
    date: "2026-09-20",
    isPinned: true,
    content: "Admission forms for academic year 2026-27 under the National Education Policy 2020 (44 Credits system, ABC Account mandatory via www.abc.gov.in) are now open. Visit college inquiry window or apply online.",
    attachmentName: "NEP_Admission_Circular_2026-27.pdf"
  },
  {
    id: "not-2",
    title: "M.Sc. Chemistry & Physics PG-CET Merit Round Counseling",
    category: "Academic",
    audience: "STUDENTS",
    date: "2026-09-22",
    isPinned: true,
    content: "All candidates who cleared Dr. BAMU PG-CET for M.Sc. Chemistry (30 Seats) and M.Sc. Physics (30 Seats) must report with original documents and fees on scheduled counseling date.",
    attachmentName: "PG_Counseling_Schedule.pdf"
  },
  {
    id: "not-3",
    title: "Career Katta 1000-Day Competitive Exam Batches Registration (Code: C34650)",
    category: "General",
    audience: "ALL",
    date: "2026-09-18",
    isPinned: false,
    content: "Government of Maharashtra Higher & Technical Education initiative 'Career Katta' registration is open for UPSC, MPSC, Banking, and Police recruitment training. Helpline: 75076 52555.",
    attachmentName: "Career_Katta_Brochure.pdf"
  },
  {
    id: "not-4",
    title: "Free Soil Testing Camp (Mati Parikshan Kendra, Room 13)",
    category: "General",
    audience: "ALL",
    date: "2026-09-15",
    isPinned: false,
    content: "Department of Geography organizes free soil testing guidance for regional farmers under IQAC & Water Literacy Programme at Botanical Garden, Room 13. Contact Dr. D.S. Itle.",
    attachmentName: "Soil_Testing_Guidelines.pdf"
  },
  {
    id: "not-5",
    title: "ICICI Foundation RAC Lab 6-Month Technical Training Batch Announcement",
    category: "Academic",
    audience: "STUDENTS",
    date: "2026-09-10",
    isPinned: false,
    content: "100% placement and entrepreneurship-oriented Refrigerator & Air Conditioning repair course admissions open. 4 months practical training + 2 months paid stipend internship.",
    attachmentName: "RAC_Lab_Prospectus.pdf"
  }
];

const INITIAL_EVENTS: EventItem[] = [
  {
    id: "ev-1",
    title: "Late Tatyaraoji More Inter-Collegiate State Debate Competition",
    category: "Cultural",
    date: "2026-10-15",
    time: "10:00 AM",
    venue: "Main Auditorium, SC(S)CO Campus",
    description: "Annual debate competition commemorating Shikshan Maharshi Late Tatyaraoji More (Aaba), open to colleges across Beed, Latur, Dharashiv, and Solapur districts.",
    registeredCount: 48
  },
  {
    id: "ev-2",
    title: "National Conference on Recent Advances in Chemical Sciences & CRFC Instrumentation",
    category: "Academic",
    date: "2026-10-24",
    time: "09:30 AM",
    venue: "Science Seminar Hall & CRFC Lab",
    description: "Invited lectures by scientists from CSIR and Dr. BAMU on FTIR, XRD characterization, nanomaterials, and green industrial chemistry.",
    registeredCount: 142
  },
  {
    id: "ev-3",
    title: "Police & Armed Forces Ground Physical Training Camp",
    category: "Sports",
    date: "2026-10-05",
    time: "06:00 AM",
    venue: "College Athletic Grounds",
    description: "Rounds of running, shot put, and obstacle training conducted by retired army instructors for enrolled academy students.",
    registeredCount: 95
  }
];

const INITIAL_CERTIFICATES: CertificateRecord[] = [
  {
    id: "cert-1",
    certificateNumber: "SCSCO-2026-BCS-089",
    studentName: "Aniket Balasaheb More",
    courseName: "B.Sc. Computer Science",
    type: "Course Participation",
    issueDate: "2026-06-15",
    gradeOrMarks: "A+ Grade (86.4%)",
    verificationCode: "VER-9821-XKQ7",
    isValid: true,
    issuedBy: "Dr. Sanjay Namdev Aswale (Principal)"
  },
  {
    id: "cert-2",
    certificateNumber: "SCSCO-2026-NSS-034",
    studentName: "Pooja Ramesh Patil",
    courseName: "National Service Scheme (NSS)",
    type: "NSS Character Certificate",
    issueDate: "2026-05-10",
    gradeOrMarks: "Exemplary 240 Service Hours Completed",
    verificationCode: "VER-4412-MTR9",
    isValid: true,
    issuedBy: "NSS Programme Officer & Principal"
  }
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDeptId, setSelectedDeptId] = useState<string | null>(null);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<UserSession>(DEFAULT_USERS.GUEST);

  // Combine official lists for unified people registry
  const combinedInitialPeople: PersonRecord[] = [
    ...MANAGEMENT_MEMBERS,
    ...ADMINISTRATIVE_HEADS.filter(a => !MANAGEMENT_MEMBERS.some(m => m.id === a.id)),
    ...OFFICIAL_TEACHING_FACULTY,
    ...OFFICIAL_NON_TEACHING_STAFF
  ];

  const [allPeople, setAllPeople] = useState<PersonRecord[]>(() => {
    const saved = localStorage.getItem('scsco_people_v2');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return combinedInitialPeople;
  });

  const [notices, setNotices] = useState<NoticeItem[]>(() => {
    const saved = localStorage.getItem('scsco_notices');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return INITIAL_NOTICES;
  });

  const [events, setEvents] = useState<EventItem[]>(() => {
    const saved = localStorage.getItem('scsco_events');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return INITIAL_EVENTS;
  });

  const [certificates, setCertificates] = useState<CertificateRecord[]>(() => {
    const saved = localStorage.getItem('scsco_certificates');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return INITIAL_CERTIFICATES;
  });

  const [auditLogs, setAuditLogs] = useState<AuditLogItem[]>(() => {
    return [
      {
        id: "log-1",
        timestamp: new Date().toLocaleString(),
        userName: "System Initialization",
        role: "SUPER_ADMIN",
        action: "PROSPECTUS_IMPORT",
        details: "Official college records successfully bootstrapped from 2026-27-1.pdf"
      }
    ];
  });

  const [paidStudentFees, setPaidStudentFees] = useState<{ [studentId: string]: number }>({
    "std-1": 1504
  });

  const [aiQueryHistory, setAiQueryHistory] = useState<Array<{ query: string; response: string; timestamp: string }>>([
    {
      query: "What is the NAAC Grade of Shri Chhatrapati Shivaji College Omerga?",
      response: "Shri Chhatrapati Shivaji Mahavidyalaya, Omerga is accredited by NAAC with an 'A' Grade (CGPA 3.14 on a 4-point scale, 3rd Cycle, valid up to June 20, 2027). Furthermore, the college was awarded Grade 'A' with 263/300 marks in the Academic and Administrative Audit (AAA) of Dr. Babasaheb Ambedkar Marathwada University.",
      timestamp: "Today at 08:30"
    }
  ]);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('scsco_people_v2', JSON.stringify(allPeople));
  }, [allPeople]);

  useEffect(() => {
    localStorage.setItem('scsco_notices', JSON.stringify(notices));
  }, [notices]);

  useEffect(() => {
    localStorage.setItem('scsco_events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('scsco_certificates', JSON.stringify(certificates));
  }, [certificates]);

  const logAction = (action: string, details: string) => {
    const newLog: AuditLogItem = {
      id: `log-${Date.now()}`,
      timestamp: new Date().toLocaleString(),
      userName: currentUser.name,
      role: currentUser.role,
      action,
      details
    };
    setAuditLogs(prev => [newLog, ...prev]);
  };

  const loginAs = (role: UserRole) => {
    const user = DEFAULT_USERS[role];
    setCurrentUser(user);
    logAction('USER_SWITCH', `Logged in as ${user.name} (${role})`);
    
    // Auto navigate to role workspace
    if (role === 'STUDENT') setCurrentRoute('student');
    else if (role === 'PARENT') setCurrentRoute('parent');
    else if (role === 'TEACHER') setCurrentRoute('teacher');
    else if (role === 'PRINCIPAL') setCurrentRoute('principal');
    else if (role === 'SUPER_ADMIN') setCurrentRoute('superadmin');
    else if (role === 'STAFF') setCurrentRoute('superadmin');
    else setCurrentRoute('home');
  };

  const logout = () => {
    logAction('USER_LOGOUT', `User ${currentUser.name} signed out`);
    setCurrentUser(DEFAULT_USERS.GUEST);
    setCurrentRoute('home');
  };

  const updatePerson = (updated: PersonRecord) => {
    setAllPeople(prev => prev.map(p => p.id === updated.id ? updated : p));
    logAction('UPDATE_PERSON', `Updated profile of ${updated.name} (${updated.designation})`);
  };

  const addPerson = (personData: Omit<PersonRecord, 'id'>) => {
    const newPerson: PersonRecord = {
      ...personData,
      id: `person-${Date.now()}`
    };
    setAllPeople(prev => [newPerson, ...prev]);
    logAction('ADD_PERSON', `Added new person ${newPerson.name} (${newPerson.designation})`);
  };

  const deletePerson = (id: string) => {
    const found = allPeople.find(p => p.id === id);
    setAllPeople(prev => prev.filter(p => p.id !== id));
    logAction('DELETE_PERSON', `Deleted record for ${found?.name || id}`);
  };

  const addNotice = (noticeData: Omit<NoticeItem, 'id'>) => {
    const newNotice: NoticeItem = {
      ...noticeData,
      id: `not-${Date.now()}`
    };
    setNotices(prev => [newNotice, ...prev]);
    logAction('ADD_NOTICE', `Published notice: ${newNotice.title}`);
  };

  const deleteNotice = (id: string) => {
    setNotices(prev => prev.filter(n => n.id !== id));
    logAction('DELETE_NOTICE', `Deleted notice with id ${id}`);
  };

  const addEvent = (eventData: Omit<EventItem, 'id'>) => {
    const newEvent: EventItem = {
      ...eventData,
      id: `ev-${Date.now()}`
    };
    setEvents(prev => [newEvent, ...prev]);
    logAction('ADD_EVENT', `Created event: ${newEvent.title}`);
  };

  const addCertificate = (certData: Omit<CertificateRecord, 'id'>) => {
    const newCert: CertificateRecord = {
      ...certData,
      id: `cert-${Date.now()}`
    };
    setCertificates(prev => [newCert, ...prev]);
    logAction('GENERATE_CERTIFICATE', `Issued cert ${newCert.certificateNumber} to ${newCert.studentName}`);
  };

  const verifyCertificate = (certNum: string) => {
    const cleanNum = certNum.trim().toLowerCase();
    return certificates.find(c => 
      c.certificateNumber.toLowerCase() === cleanNum || 
      c.verificationCode.toLowerCase() === cleanNum
    );
  };

  const payStudentFee = (studentId: string, amount: number) => {
    setPaidStudentFees(prev => ({
      ...prev,
      [studentId]: (prev[studentId] || 0) + amount
    }));
    logAction('PAY_FEE', `Processed online fee payment of ₹${amount} for student ID: ${studentId}`);
  };

  // Prospectus-Grounded AI Query Engine
  const askAssistant = (query: string): string => {
    const q = query.toLowerCase();
    let response = "";

    if (q.includes("principal") || q.includes("head of college")) {
      response = `The Principal of Shri Chhatrapati Shivaji College, Omerga is Dr. Sanjay Namdev Aswale (M.Com., M.A.(Eco), M.Phil., Ph.D., G.D.C&A). His contact phone number is 9422070783 and official email is principal_scsco@rediffmail.com.`;
    } else if (q.includes("naac") || q.includes("accreditation") || q.includes("grade")) {
      response = `Shri Chhatrapati Shivaji College, Omerga was awarded an 'A' Grade with a CGPA of 3.14 on a 4-point scale by NAAC (valid up to June 20, 2027, 3rd Cycle). Additionally, it holds an 'A' Grade in Dr. BAMU's Academic and Administrative Audit with 263/300 marks.`;
    } else if (q.includes("sanstha") || q.includes("founder") || q.includes("establishment")) {
      response = `The college is run by Bharat Shikshan Sanstha, Omerga (founded in 1941 by Swargiya Tatyaraoji More (Aaba)). The college itself was established in June 1959 with just 50 students, and has grown to serve over 6,000 students on a 30-acre campus. The President of the Sanstha is Shri. Amol Shivajirao More.`;
    } else if (q.includes("fees") || q.includes("fee") || q.includes("cost")) {
      response = `For 2026-27: Junior College Science regular fees range from ₹1,085 (Open/EBC) to ₹1,277 (Paying) for general, and ₹2,285 to ₹2,477 for IT. For Senior College, B.A. I is ₹1,619 (Open) / ₹2,419 (Paying); B.Sc. I is ₹4,619 (Open) / ₹5,419 (Paying); B.Com I is ₹1,919 (Open) / ₹2,719 (Paying); and BCS/B.Sc. IT is ₹33,518 (Paying). See the Fees tab for exact tables.`;
    } else if (q.includes("nep") || q.includes("credit") || q.includes("bank of credit") || q.includes("abc")) {
      response = `The college implemented National Education Policy (NEP 2020) with 4-year Honours and Honours with Research degree programmes. Each year comprises 44 credits (22 credits per semester). All incoming students must register for an Academic Bank of Credit (ABC) account at www.abc.gov.in.`;
    } else if (q.includes("research") || q.includes("phd") || q.includes("crfc")) {
      response = `The college has recognized Research Centers in Chemistry, Physics, and Commerce with 27 research guides. Over 71 Ph.D. degrees and 30 M.Phil degrees have been awarded. The Common Research Facility Center (CRFC) is equipped with advanced instruments like XRD, FTIR, and UV-Vis Spectrophotometer.`;
    } else if (q.includes("library") || q.includes("books")) {
      response = `The Central Library houses 1,17,397 books, 34/39 journals and periodicals, and 12 daily newspapers. It utilizes Dr. Vijay Bhatkar's ETH library automation software with OPAC search and provides an Internet Access Hub, book bank, and a night study room open until midnight.`;
    } else if (q.includes("rac") || q.includes("icici")) {
      response = `The RAC Laboratory (sponsored by ICICI Foundation) provides a specialized 6-month technical course in Refrigerator and AC repair with state-of-the-art simulators, VRF AC machines, and paid internships, achieving 100% employment/self-employment.`;
    } else if (q.includes("police") || q.includes("military") || q.includes("academy")) {
      response = `The Police and Military Pre-Recruitment Training Academy has an intake capacity of 120 students. Retired military ex-servicemen train students in physical ground events (running, shot put, pull-ups) alongside written exam preparation.`;
    } else if (q.includes("career katta") || q.includes("center of excellence")) {
      response = `Career Katta (College Code: C34650) is an initiative of the Maharashtra Govt Dept of Higher & Technical Education and MITSC. It offers a 1000-day guidance program for ₹365 for UPSC, MPSC, Banking, and Police exams, plus NISM financial market certificate bundles. Contact Dr. S.P. Pasarkalle (9975473006) or Dr. C.D. Kare (7276863713).`;
    } else if (q.includes("soil") || q.includes("mati parikshan")) {
      response = `The Mati Parikshan Kendra (Soil Testing Lab) is situated in Room No. 13 in the Botanical Garden. Sponsored by IQAC and the Water Literacy Programme, it provides free soil testing, pH analysis, and crop guidance to regional farmers. Contact Dr. D.S. Itle at 9850619733.`;
    } else {
      response = `According to official college records for Shri Chhatrapati Shivaji College Omerga (SC(S)CO, NAAC 'A' Grade CGPA 3.14): We offer Junior College (Arts, Science with NEET/JEE batches, Commerce, MCVC), Undergraduate B.A., B.Sc., B.Com., BCS, B.Sc. IT, and Postgraduate M.A., M.Com., M.Sc. Chemistry & Physics, as well as Ph.D. research facilities. For more specifics, explore the website navigation or contact the college office at (02475) 252020.`;
    }

    setAiQueryHistory(prev => [{ query, response, timestamp: "Just now" }, ...prev]);
    return response;
  };

  return (
    <AppContext.Provider
      value={{
        currentRoute,
        setCurrentRoute,
        searchQuery,
        setSearchQuery,
        selectedDeptId,
        setSelectedDeptId,
        selectedCourseId,
        setSelectedCourseId,
        currentUser,
        loginAs,
        logout,
        allPeople,
        updatePerson,
        addPerson,
        deletePerson,
        notices,
        addNotice,
        deleteNotice,
        events,
        addEvent,
        certificates,
        addCertificate,
        verifyCertificate,
        auditLogs,
        logAction,
        juniorFees: JUNIOR_COLLEGE_FEES,
        seniorFees: SENIOR_PG_FEES,
        paidStudentFees,
        payStudentFee,
        aiQueryHistory,
        askAssistant
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
