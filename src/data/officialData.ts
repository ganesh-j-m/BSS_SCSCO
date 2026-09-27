// ==============================================================================
// OFFICIAL COLLEGE SOURCE OF TRUTH (Extracted from 2026-27-1.pdf)
// Shri Chhatrapati Shivaji College, Omerga (SC(S)CO)
// Run by Bharat Shikshan Sanstha, Omerga, Dist. Dharashiv, Maharashtra - 413606
// Affiliated to Dr. Babasaheb Ambedkar Marathwada University, Chhatrapati Sambhajinagar
// NAAC Re-accreditation: 'A' Grade (CGPA 3.14, valid up to June 20, 2027)
// AAA Academic & Administrative Audit Grade: 'A' (Total Marks: 263/300)
// ==============================================================================

export interface PersonRecord {
  id: string;
  name: string;
  marathiName?: string;
  designation: string;
  roleCategory: 'management' | 'administration' | 'teaching_senior' | 'teaching_junior' | 'non_teaching';
  department?: string;
  qualification?: string;
  phone?: string;
  email?: string;
  address?: string;
  photoUrl?: string | null;
  biography?: string;
  displayOrder: number;
  isActive: boolean;
}

export interface DepartmentInfo {
  id: string;
  name: string;
  marathiName: string;
  category: 'Arts' | 'Commerce' | 'Science' | 'Vocational' | 'Support';
  hod: string;
  establishmentYear?: string;
  description: string;
  features: string[];
  intake?: string;
  coursesOffered: string[];
}

export interface CourseInfo {
  id: string;
  name: string;
  level: 'Junior College (HSC)' | 'Undergraduate (UG)' | 'Postgraduate (PG)' | 'Doctoral (Ph.D.)' | 'Vocational / Certificate';
  faculty: 'Arts' | 'Commerce' | 'Science' | 'Vocational';
  duration: string;
  intake: number | string;
  eligibility: string;
  features: string[];
  nep2020Compliant: boolean;
}

export interface ScholarshipInfo {
  id: number;
  name: string;
  marathiName: string;
  minPercentage: string;
  incomeLimit: string;
  requiredDocuments: string[];
}

export interface PrizeInfo {
  id: number;
  donorName: string;
  prizeName: string;
  criteria: string;
  amount: number | string;
}

export interface FeeItem {
  courseName: string;
  openEbc: number;
  scSt: number;
  obcSeber: number;
  paying: number;
  category: 'Junior' | 'Senior' | 'PG';
}

export const COLLEGE_PROFILE = {
  name: "Shri Chhatrapati Shivaji Mahavidyalaya, Omerga",
  shortName: "SC(S)CO",
  marathiName: "श्री छत्रपती शिवाजी महाविद्यालय, उमरगा",
  sansthaName: "Bharat Shikshan Sanstha, Omerga",
  sansthaMarathiName: "भारत शिक्षण संस्था, उमरगा, जि. धाराशिव",
  sansthaEstablishedYear: 1941,
  sansthaFounder: "Swargiya Tatyaraoji More (Aaba)",
  collegeEstablishedYear: 1959,
  address: "Near Old Bus Stand, Tal. Omerga, Dist. Dharashiv - 413606, Maharashtra, India",
  phone: "(02475) 252020",
  email: "principal_scsco@rediffmail.com",
  website: "www.scsco.org.in",
  affiliation: "Dr. Babasaheb Ambedkar Marathwada University, Chhatrapati Sambhajinagar",
  naacGrade: "A Grade (CGPA 3.14, 3rd Cycle, valid up to June 20, 2027)",
  aaaAuditGrade: "Grade 'A' with Total Marks 263/300",
  collegeCode: "C34650",
  campusArea: "30 Acres lush green campus with residential hostels for boys and girls",
  totalStudents: "6000+ Enrolled Students across Junior, Senior & PG wings",
  taglines: {
    english: "Comprehensive Development Through Education",
    service: "Enter to Learn, Go to Serve",
    sanskrit: "तमसो मा ज्योतिर्गमय (Tamaso Ma Jyotirgamaya)"
  }
};

// Executive Committee (Karyakari Mandal) of Bharat Shikshan Sanstha
export const MANAGEMENT_MEMBERS: PersonRecord[] = [
  {
    id: "gov-1",
    name: "Shri. Amol Shivajirao More",
    marathiName: "श्री. अमोल शिवाजीराव मोरे",
    designation: "President / Adhyaksha (अध्यक्ष)",
    roleCategory: "management",
    address: "At Post Omerga, Dist. Dharashiv",
    photoUrl: null,
    displayOrder: 1,
    isActive: true,
    biography: "Leading Bharat Shikshan Sanstha with a focus on rural empowerment, quality higher education, and NEP 2020 implementation."
  },
  {
    id: "gov-2",
    name: "Shri. Ashlesh Shivajirao More",
    marathiName: "श्री. अश्लेष शिवाजीराव मोरे",
    designation: "Vice President / Upadhyaksha (उपाध्यक्ष)",
    roleCategory: "management",
    address: "At Post Omerga, Dist. Dharashiv",
    photoUrl: null,
    displayOrder: 2,
    isActive: true
  },
  {
    id: "gov-3",
    name: "Shri. Janardhanrao Limbaji Sathe",
    marathiName: "श्री. जनार्धनराव लिंबाजीत साठे",
    designation: "General Secretary / Sarchitnis (सरचिटणीस)",
    roleCategory: "management",
    address: "At Post Makani, Tal. Lohara",
    photoUrl: null,
    displayOrder: 3,
    isActive: true
  },
  {
    id: "gov-4",
    name: "Shri. Padmakarrao Vishwambharrao Haralkar",
    marathiName: "श्री. पद्माकरराव विश्वंभरराव हराळकर",
    designation: "Secretary / Chitnis (चिटणीस)",
    roleCategory: "management",
    address: "At Post Tugao, Tal. Omerga",
    photoUrl: null,
    displayOrder: 4,
    isActive: true
  },
  {
    id: "gov-5",
    name: "Dr. Subhash Ramrao Waghmode",
    marathiName: "डॉ. सुभाष रामराव वाघमोडे",
    designation: "Joint Secretary / Sahchitnis (सहचिटणीस)",
    roleCategory: "management",
    address: "Gajanan Hospital, Omerga",
    photoUrl: null,
    displayOrder: 5,
    isActive: true
  },
  {
    id: "gov-6",
    name: "Shri. Suresh Manikrao Birajdar",
    marathiName: "श्री. सुरेश माणिकराव बिराजदार",
    designation: "Executive Member (सदस्य)",
    roleCategory: "management",
    address: "At Post Omerga Main Road, Omerga",
    photoUrl: null,
    displayOrder: 6,
    isActive: true
  },
  {
    id: "gov-7",
    name: "Prof. Ravindra Vishwanathrao Gaikwad",
    marathiName: "प्रा. रवींद्र विश्वनाथराव गायकवाड",
    designation: "Executive Member (सदस्य)",
    roleCategory: "management",
    address: "Juni Peth, Omerga",
    photoUrl: null,
    displayOrder: 7,
    isActive: true
  },
  {
    id: "gov-8",
    name: "Shri. Bhanudasrao Shivram Mane",
    marathiName: "श्री. भानुदासराव शिवराम माने",
    designation: "Executive Member (सदस्य)",
    roleCategory: "management",
    address: "At Post Bedga, Tal. Omerga",
    photoUrl: null,
    displayOrder: 8,
    isActive: true
  },
  {
    id: "gov-9",
    name: "Shri. Sheshrao Narsingrao Pawar",
    marathiName: "श्री. शेषेराव नरसिंगराव पवार",
    designation: "Executive Member (सदस्य)",
    roleCategory: "management",
    address: "At Post Narangwadi, Tal. Omerga",
    photoUrl: null,
    displayOrder: 9,
    isActive: true
  },
  {
    id: "gov-10",
    name: "Shri. Tryambakrao Gopalrao Ingole",
    marathiName: "श्री. त्र्यंबकराव गोपाळराव इंगोले",
    designation: "Executive Member (सदस्य)",
    roleCategory: "management",
    address: "At Post Murum, Tal. Omerga",
    photoUrl: null,
    displayOrder: 10,
    isActive: true
  },
  {
    id: "gov-11",
    name: "Shri. Sunil Chandrabhan Mane",
    marathiName: "श्री. सुनिल चंद्रभान माने",
    designation: "Executive Member (सदस्य)",
    roleCategory: "management",
    address: "Ajay Nagar, Omerga",
    photoUrl: null,
    displayOrder: 11,
    isActive: true
  },
  {
    id: "gov-12",
    name: "Shri. Ramrao Bhanudasrao Ingole",
    marathiName: "श्री. रामराव भानुदासराव इंगोले",
    designation: "Executive Member (सदस्य)",
    roleCategory: "management",
    address: "Sane Guruji Nagar, Omerga",
    photoUrl: null,
    displayOrder: 12,
    isActive: true
  },
  {
    id: "gov-13",
    name: "Dr. Vijay Nivruttirao Patil",
    marathiName: "डॉ. विजय निवृत्तीराव पाटील",
    designation: "Executive Member (सदस्य)",
    roleCategory: "management",
    address: "Vijay Clinic, Omerga",
    photoUrl: null,
    displayOrder: 13,
    isActive: true
  },
  {
    id: "gov-14",
    name: "Shri. Tanaji Bhimrao Fugate",
    marathiName: "श्री. तानाजी भिमराव फुगटे",
    designation: "Executive Member (सदस्य)",
    roleCategory: "management",
    address: "At Post Murum, Tal. Omerga",
    photoUrl: null,
    displayOrder: 14,
    isActive: true
  },
  {
    id: "gov-15",
    name: "Shri. Digambar Pandurang Birajdar",
    marathiName: "श्री. दिगंबर पांडुरंग बिराजदार",
    designation: "Executive Member (सदस्य)",
    roleCategory: "management",
    address: "At Post Mulaj, Tal. Omerga",
    photoUrl: null,
    displayOrder: 15,
    isActive: true
  },
  {
    id: "gov-16",
    name: "Shri. Vitthalrao Apparao Narsale",
    marathiName: "श्री. विठ्ठलराव आप्पाराव नरसळे",
    designation: "Executive Member (सदस्य)",
    roleCategory: "management",
    address: "At Post Makani, Tal. Lohara",
    photoUrl: null,
    displayOrder: 16,
    isActive: true
  },
  {
    id: "gov-17",
    name: "Shri. Ashokrao Baburao Patil",
    marathiName: "श्री. अशोकराव बाबुराव पाटील",
    designation: "Executive Member (सदस्य)",
    roleCategory: "management",
    address: "At Post Madaj, Tal. Omerga",
    photoUrl: null,
    displayOrder: 17,
    isActive: true
  },
  {
    id: "gov-18",
    name: "Shri. Rajendra Dhanraj Mane",
    marathiName: "श्री. राजेंद्र धनराज माने",
    designation: "Executive Member (सदस्य)",
    roleCategory: "management",
    address: "At Post Madaj, Tal. Omerga",
    photoUrl: null,
    displayOrder: 18,
    isActive: true
  },
  {
    id: "gov-19",
    name: "Shri. Ajinkya Shivajirao More",
    marathiName: "श्री. अजिंक्य शिवाजीराव मोरे",
    designation: "Executive Member (सदस्य)",
    roleCategory: "management",
    address: "At Post Omerga, Dist. Dharashiv",
    photoUrl: null,
    displayOrder: 19,
    isActive: true
  },
  {
    id: "gov-20",
    name: "Shri. Ramesh Manikrao Birajdar",
    marathiName: "श्री. रमेश माणिकराव बिराजदार",
    designation: "Executive Member (सदस्य)",
    roleCategory: "management",
    address: "Main Road Omerga",
    photoUrl: null,
    displayOrder: 20,
    isActive: true
  },
  {
    id: "gov-21",
    name: "Principal Dr. Sanjay Namdev Aswale",
    marathiName: "प्राचार्य डॉ. संजय नामदेव अस्वले",
    designation: "Ex-Officio Member / Principal",
    roleCategory: "administration",
    address: "At Post Omerga",
    qualification: "M.Com., M.A.(Eco), M.Phil., Ph.D., G.D.C&A",
    phone: "9422070783",
    photoUrl: null,
    displayOrder: 21,
    isActive: true
  }
];

// Key Administrative Team
export const ADMINISTRATIVE_HEADS: PersonRecord[] = [
  {
    id: "adm-1",
    name: "Dr. Sanjay Namdev Aswale",
    marathiName: "डॉ. संजय नामदेव अस्वले",
    designation: "Principal (प्राचार्य)",
    roleCategory: "administration",
    qualification: "M.Com., M.A.(Eco), M.Phil., Ph.D., G.D.C&A",
    phone: "9422070783",
    email: "principal_scsco@rediffmail.com",
    photoUrl: null,
    biography: "Distinguished academician with over 3 decades of leadership. Guiding SC(S)CO towards excellence in NEP 2020 curricula, research innovation, and rural upliftment.",
    displayOrder: 1,
    isActive: true
  },
  {
    id: "adm-2",
    name: "Dr. V. D. Devarkar",
    marathiName: "प्रा. डॉ. व्ही. डी. देवरकर",
    designation: "Vice Principal (Senior College - Science)",
    roleCategory: "administration",
    department: "Botany",
    qualification: "M.Sc., Ph.D.",
    phone: "9421355073",
    photoUrl: null,
    displayOrder: 2,
    isActive: true
  },
  {
    id: "adm-3",
    name: "Dr. P. A. Pitle",
    marathiName: "प्रा. डॉ. पी. ए. पिटले",
    designation: "Vice Principal (Senior College - Arts)",
    roleCategory: "administration",
    department: "Marathi",
    qualification: "M.A., SET, NET, Ph.D.",
    phone: "8669149393",
    photoUrl: null,
    displayOrder: 3,
    isActive: true
  },
  {
    id: "adm-4",
    name: "Mr. G. S. More",
    marathiName: "प्रा. जी. एस. मोरे",
    designation: "Vice Principal (Junior College)",
    roleCategory: "administration",
    department: "Botany (Jr)",
    qualification: "M.Sc., SET, B.Ed.",
    phone: "8830166986",
    photoUrl: null,
    displayOrder: 4,
    isActive: true
  },
  {
    id: "adm-5",
    name: "Mr. S. A. Mahamuni",
    marathiName: "प्रा. एस. ए. महामुनी",
    designation: "Supervisor (Junior College)",
    roleCategory: "administration",
    department: "English (Jr)",
    qualification: "M.A., M.Phil, B.Ed.",
    phone: "9763630609",
    photoUrl: null,
    displayOrder: 5,
    isActive: true
  },
  {
    id: "adm-6",
    name: "Shri. R. B. Sonwane",
    marathiName: "श्री. आर. बी. सोनवणे",
    designation: "Registrar (रजिस्ट्रार)",
    roleCategory: "administration",
    qualification: "M.A.",
    phone: "9422655771",
    photoUrl: null,
    displayOrder: 6,
    isActive: true
  },
  {
    id: "adm-7",
    name: "Shri. Nitin S. Korale",
    marathiName: "श्री. नितीन एस. कोराळे",
    designation: "Office Superintendent (अधीक्षक)",
    roleCategory: "administration",
    qualification: "M.A., M.B.A.",
    phone: "9405247275",
    photoUrl: null,
    displayOrder: 7,
    isActive: true
  }
];

// Complete Official Faculty Roster from Prospectus (Senior & Junior College)
export const OFFICIAL_TEACHING_FACULTY: PersonRecord[] = [
  // English
  { id: "fac-eng-1", name: "Shri. S. V. Bahirao", designation: "Asso. Prof. & Head", department: "English", roleCategory: "teaching_senior", qualification: "M.A., NET, SET", phone: "9421445574", displayOrder: 101, isActive: true },
  { id: "fac-eng-2", name: "Dr. S. D. Mungle", designation: "Assistant Professor", department: "English", roleCategory: "teaching_senior", qualification: "M.A., M.Phil, Ph.D.", phone: "9422471662", displayOrder: 102, isActive: true },
  { id: "fac-eng-3", name: "Dr. C. D. Kare", designation: "Assistant Professor & Career Katta Co-Ordinator", department: "English", roleCategory: "teaching_senior", qualification: "M.A., SET, Ph.D.", phone: "7276863713", displayOrder: 103, isActive: true },
  { id: "fac-eng-4", name: "Dr. S. T. Todkar", designation: "Assistant Professor", department: "English", roleCategory: "teaching_senior", qualification: "M.A., SET, M.Phil, Ph.D.", phone: "9421517152", displayOrder: 104, isActive: true },
  { id: "fac-eng-5", name: "Shri. S. A. Mahamuni", designation: "Junior Lecturer & Supervisor", department: "English", roleCategory: "teaching_junior", qualification: "M.A., M.Phil, B.Ed.", phone: "9763630609", displayOrder: 105, isActive: true },
  { id: "fac-eng-6", name: "Shri. D. W. Ghule", designation: "Junior Lecturer", department: "English", roleCategory: "teaching_junior", qualification: "M.A., B.Ed.", phone: "9763630609", displayOrder: 106, isActive: true },
  { id: "fac-eng-7", name: "Shri. S. R. Misal", designation: "Junior Lecturer", department: "English", roleCategory: "teaching_junior", qualification: "M.A., B.Ed.", phone: "8275927543", displayOrder: 107, isActive: true },
  { id: "fac-eng-8", name: "Shri. R. G. Bachke", designation: "Junior Lecturer", department: "English", roleCategory: "teaching_junior", qualification: "M.A., B.Ed.", phone: "7588936328", displayOrder: 108, isActive: true },
  { id: "fac-eng-9", name: "Shri. S. T. Suryawanshi", designation: "Junior Lecturer", department: "English", roleCategory: "teaching_junior", qualification: "M.A., B.Ed.", phone: "9552630102", displayOrder: 109, isActive: true },

  // Marathi
  { id: "fac-mar-1", name: "Dr. P. A. Pitle", designation: "Vice Principal & Head", department: "Marathi", roleCategory: "teaching_senior", qualification: "M.A., SET, NET, Ph.D.", phone: "7588062621", displayOrder: 110, isActive: true },
  { id: "fac-mar-2", name: "Dr. S. P. Pasarkalle", designation: "Assistant Professor & Career Katta Coordinator", department: "Marathi", roleCategory: "teaching_senior", qualification: "M.A., NET, Ph.D.", phone: "9975473006", displayOrder: 111, isActive: true },
  { id: "fac-mar-3", name: "Shri. A. S. Kasgikar", designation: "Junior Lecturer", department: "Marathi", roleCategory: "teaching_junior", qualification: "M.A., B.Ed.", phone: "9420477600", displayOrder: 112, isActive: true },
  { id: "fac-mar-4", name: "Smt. J. N. Jogdapge", designation: "Junior Lecturer", department: "Marathi", roleCategory: "teaching_junior", qualification: "M.A., B.Ed.", phone: "9850360014", displayOrder: 113, isActive: true },

  // Hindi
  { id: "fac-hin-1", name: "Dr. S. P. Ingle", designation: "Prof. & Head", department: "Hindi", roleCategory: "teaching_senior", qualification: "M.A., SET, Ph.D.", phone: "9423718452", displayOrder: 114, isActive: true },
  { id: "fac-hin-2", name: "Dr. S. N. Muchatte", designation: "Professor & PG Coordinator", department: "Hindi", roleCategory: "teaching_senior", qualification: "M.A., M.Phil, Ph.D., D.Litt.", phone: "9689063715", displayOrder: 115, isActive: true },
  { id: "fac-hin-3", name: "Dr. D. S. Chittampalle", designation: "Assistant Professor", department: "Hindi", roleCategory: "teaching_senior", qualification: "M.A., M.Phil, NET, Ph.D., SET", phone: "7875878393", displayOrder: 116, isActive: true },
  { id: "fac-hin-4", name: "Shri. P. R. Salunke", designation: "Junior Lecturer", department: "Hindi", roleCategory: "teaching_junior", qualification: "M.A., B.Ed.", phone: "9604160464", displayOrder: 117, isActive: true },
  { id: "fac-hin-5", name: "Shri. S. R. Gurav", designation: "Junior Lecturer", department: "Hindi", roleCategory: "teaching_junior", qualification: "M.A., B.Ed.", phone: "9579414003", displayOrder: 118, isActive: true },
  { id: "fac-hin-6", name: "Shri. G. K. Patil", designation: "Junior Lecturer", department: "Hindi", roleCategory: "teaching_junior", qualification: "M.A., B.Ed., M.Phil.", phone: "8530588189", displayOrder: 119, isActive: true },
  { id: "fac-hin-7", name: "Shri. G. N. Nagade", designation: "Junior Lecturer", department: "Hindi", roleCategory: "teaching_junior", qualification: "M.A., B.Ed.", phone: "9403088600", displayOrder: 120, isActive: true },

  // Sanskrit
  { id: "fac-san-1", name: "Shri. J. N. Kaknale", designation: "Junior Lecturer", department: "Sanskrit", roleCategory: "teaching_junior", qualification: "M.A., B.Ed.", phone: "9421871956", displayOrder: 121, isActive: true },
  { id: "fac-san-2", name: "Shri. D. A. Joshi", designation: "Junior Lecturer", department: "Sanskrit", roleCategory: "teaching_junior", qualification: "M.A., B.Ed., Ph.D.", phone: "7058549777", displayOrder: 122, isActive: true },

  // History
  { id: "fac-his-1", name: "Dr. G. N. Somvanshi", designation: "HOD & Associate Professor", department: "History", roleCategory: "teaching_senior", qualification: "M.A., M.Ed, SET, Ph.D.", phone: "8275272961", displayOrder: 123, isActive: true },
  { id: "fac-his-2", name: "Dr. B. G. Mane", designation: "Associate Professor", department: "History", roleCategory: "teaching_senior", qualification: "M.A., B.Ed., M.Phil, Ph.D.", phone: "9421354850", displayOrder: 124, isActive: true },
  { id: "fac-his-3", name: "Shri. D. B. Lobhe", designation: "Junior Lecturer", department: "History", roleCategory: "teaching_junior", qualification: "M.A., B.Ed.", phone: "9890582813", displayOrder: 125, isActive: true },
  { id: "fac-his-4", name: "Shri. D. R. Chavan", designation: "Junior Lecturer", department: "History", roleCategory: "teaching_junior", qualification: "M.A., B.Ed., Ph.D.", phone: "7058549777", displayOrder: 126, isActive: true },

  // Political Science
  { id: "fac-pol-1", name: "Dr. D. B. Dhobale", designation: "UG Course Coordinator & Asso. Prof.", department: "Political Science", roleCategory: "teaching_senior", qualification: "M.A., SET, NET, Ph.D.", phone: "9421354911", displayOrder: 127, isActive: true },
  { id: "fac-pol-2", name: "Dr. S. E. Munde", designation: "Associate Professor", department: "Political Science", roleCategory: "teaching_senior", qualification: "M.A., SET, Ph.D.", phone: "7666149301", displayOrder: 128, isActive: true },
  { id: "fac-pol-3", name: "Shri. S. A. Kumbhar", designation: "Junior Lecturer", department: "Political Science", roleCategory: "teaching_junior", qualification: "M.A., B.Ed., DSM", phone: "9665329432", displayOrder: 129, isActive: true },

  // Economics
  { id: "fac-eco-1", name: "Dr. V. N. Hissal", designation: "Prof. & Head", department: "Economics", roleCategory: "teaching_senior", qualification: "M.A., Ph.D., SET", phone: "9423341632", displayOrder: 130, isActive: true },

  // Sociology
  { id: "fac-soc-1", name: "Dr. P. D. Patil", designation: "Prof. & Head", department: "Sociology", roleCategory: "teaching_senior", qualification: "M.A., B.Ed., SET, Ph.D.", phone: "9421374284", displayOrder: 131, isActive: true },
  { id: "fac-soc-2", name: "Dr. D. V. Padole", designation: "Associate Professor", department: "Sociology", roleCategory: "teaching_senior", qualification: "M.A., M.Phil, Ph.D.", phone: "9403511393", displayOrder: 132, isActive: true },
  { id: "fac-soc-3", name: "Shri. D. D. Pandhare", designation: "Junior Lecturer", department: "Sociology", roleCategory: "teaching_junior", qualification: "M.A., B.Ed.", phone: "7875439569", displayOrder: 133, isActive: true },

  // Geography
  { id: "fac-geo-1", name: "Dr. D. S. Itle", designation: "Prof. & Head", department: "Geography", roleCategory: "teaching_senior", qualification: "M.A., B.Ed, NET, Ph.D.", phone: "9850619733", displayOrder: 134, isActive: true },
  { id: "fac-geo-2", name: "Dr. S. L. Rathod", designation: "Associate Professor", department: "Geography", roleCategory: "teaching_senior", qualification: "M.A., B.Ed., M.Phil, Ph.D.", phone: "9284273260", displayOrder: 135, isActive: true },
  { id: "fac-geo-3", name: "Dr. S. D. Gavit", designation: "Associate Professor", department: "Geography", roleCategory: "teaching_senior", qualification: "M.A., B.Ed., M.Phil, Ph.D.", phone: "9860708660", displayOrder: 136, isActive: true },
  { id: "fac-geo-4", name: "Dr. A. K. Katke", designation: "Associate Professor", department: "Geography", roleCategory: "teaching_senior", qualification: "M.A., B.Ed., M.Phil, Ph.D., M.A., Ph.D., SET", phone: "9405463776", displayOrder: 137, isActive: true },
  { id: "fac-geo-5", name: "Shri. S. D. Shinde", designation: "Junior Lecturer", department: "Geography", roleCategory: "teaching_junior", qualification: "M.A., B.Ed. (Hindi, Geog.)", phone: "9423342388", displayOrder: 138, isActive: true },
  { id: "fac-geo-6", name: "Shri. K. V. Kamble", designation: "Junior Lecturer", department: "Geography", roleCategory: "teaching_junior", qualification: "M.A., B.Ed.", phone: "9421360029", displayOrder: 139, isActive: true },

  // Commerce
  { id: "fac-com-1", name: "Dr. A. S. Ashte", designation: "Prof. & Head / UG & PG Coordinator", department: "Commerce", roleCategory: "teaching_senior", qualification: "M.Com., M.Phil., Ph.D., G.D.C.& A.", phone: "9423740707", displayOrder: 140, isActive: true },
  { id: "fac-com-2", name: "Shri. V. M. Hulgunde", designation: "Junior Lecturer", department: "Commerce", roleCategory: "teaching_junior", qualification: "M.Com., B.Ed.", phone: "7709660067", displayOrder: 141, isActive: true },
  { id: "fac-com-3", name: "Shri. S. M. Gaikwad", designation: "Junior Lecturer", department: "Commerce", roleCategory: "teaching_junior", qualification: "M.Com., B.Ed., DSM, M.A.Eco", phone: "9420688846", displayOrder: 142, isActive: true },
  { id: "fac-com-4", name: "Shri. S. B. Suryawanshi", designation: "Junior Lecturer", department: "Commerce", roleCategory: "teaching_junior", qualification: "M.Com., B.Ed., M.A.Hindi", phone: "9960660915", displayOrder: 143, isActive: true },

  // Mathematics
  { id: "fac-mat-1", name: "Dr. V. M. Gaikwad", designation: "HOD & Associate Professor", department: "Mathematics", roleCategory: "teaching_senior", qualification: "M.Sc., SET, Ph.D.", phone: "9404275042", displayOrder: 144, isActive: true },
  { id: "fac-mat-2", name: "Shri. D. T. Patil", designation: "Junior Lecturer", department: "Mathematics", roleCategory: "teaching_junior", qualification: "M.Sc., B.Ed.", phone: "7588190625", displayOrder: 145, isActive: true },
  { id: "fac-mat-3", name: "Dr. P. V. Mugale", designation: "Junior Lecturer", department: "Mathematics", roleCategory: "teaching_junior", qualification: "M.Sc., B.Ed., Ph.D.", phone: "9421359601", displayOrder: 146, isActive: true },
  { id: "fac-mat-4", name: "Mrs. P. P. More", designation: "Junior Lecturer", department: "Mathematics", roleCategory: "teaching_junior", qualification: "M.Sc., B.Ed.", phone: "7558353459", displayOrder: 147, isActive: true },
  { id: "fac-mat-5", name: "Shri. M. A. Thete", designation: "Junior Lecturer", department: "Mathematics", roleCategory: "teaching_junior", qualification: "M.Sc., B.Ed.", phone: "8208821299", displayOrder: 148, isActive: true },

  // Physics & Electronics
  { id: "fac-phy-1", name: "Dr. A. S. Padampalle", designation: "Prof. & Head / PG Coordinator", department: "Physics & Electronics", roleCategory: "teaching_senior", qualification: "M.Sc., M.Phil., Ph.D.", phone: "9421356683", displayOrder: 149, isActive: true },
  { id: "fac-phy-2", name: "Dr. P. K. Gaikwad", designation: "Associate Professor", department: "Physics & Electronics", roleCategory: "teaching_senior", qualification: "M.Sc., Ph.D.", phone: "9970693677", displayOrder: 150, isActive: true },
  { id: "fac-phy-3", name: "Dr. D. D. Birajdar", designation: "Associate Professor", department: "Physics & Electronics", roleCategory: "teaching_senior", qualification: "M.Sc., Ph.D.", phone: "9850424201", displayOrder: 151, isActive: true },
  { id: "fac-phy-4", name: "Dr. S. S. Sawant", designation: "Associate Professor", department: "Physics & Electronics", roleCategory: "teaching_senior", qualification: "M.Sc., M.Phil., Ph.D.", phone: "9422243550", displayOrder: 152, isActive: true },
  { id: "fac-phy-5", name: "Dr. D. V. Fugate", designation: "Junior Lecturer", department: "Physics & Electronics", roleCategory: "teaching_junior", qualification: "M.Sc., B.Ed., Ph.D.", phone: "9420769777", displayOrder: 153, isActive: true },
  { id: "fac-phy-6", name: "Shri. V. S. Tachale", designation: "Junior Lecturer", department: "Physics & Electronics", roleCategory: "teaching_junior", qualification: "M.Sc., B.Ed.", phone: "9423718520", displayOrder: 154, isActive: true },
  { id: "fac-phy-7", name: "Shri. G. G. Jadhav", designation: "Junior Lecturer", department: "Physics & Electronics", roleCategory: "teaching_junior", qualification: "M.Sc., B.Ed.", phone: "9420334084", displayOrder: 155, isActive: true },
  { id: "fac-phy-8", name: "Shri. R. P. Hunusnale", designation: "Junior Lecturer", department: "Physics & Electronics", roleCategory: "teaching_junior", qualification: "M.Sc., B.Ed.", phone: "9860278131", displayOrder: 156, isActive: true },
  { id: "fac-phy-9", name: "Shri. D. V. Jadhav", designation: "Junior Lecturer", department: "Physics & Electronics", roleCategory: "teaching_junior", qualification: "M.Sc., B.Ed.", phone: "9421360088", displayOrder: 157, isActive: true },
  { id: "fac-phy-10", name: "Shri. R. P. Kadam", designation: "Junior Lecturer", department: "Physics & Electronics", roleCategory: "teaching_junior", qualification: "M.Sc., B.Ed.", phone: "9011256801", displayOrder: 158, isActive: true },
  { id: "fac-phy-11", name: "Shri. R. P. Buwa", designation: "Junior Lecturer", department: "Physics & Electronics", roleCategory: "teaching_junior", qualification: "M.Sc., B.Ed.", phone: "9960541602", displayOrder: 159, isActive: true },
  { id: "fac-phy-12", name: "Shri. S. G. Jadhav", designation: "Junior Lecturer", department: "Physics & Electronics", roleCategory: "teaching_junior", qualification: "M.Sc., B.Ed.", phone: "9090151151", displayOrder: 160, isActive: true },

  // Chemistry
  { id: "fac-chm-1", name: "Dr. V. S. Suryawanshi", designation: "Prof. & Head / UG & PG Coordinator", department: "Chemistry", roleCategory: "teaching_senior", qualification: "M.Sc., SET, Ph.D.", phone: "9421360168", displayOrder: 161, isActive: true },
  { id: "fac-chm-2", name: "Dr. S. M. Surwase", designation: "Associate Professor", department: "Chemistry", roleCategory: "teaching_senior", qualification: "M.Sc., NET, Ph.D.", phone: "9422045283", displayOrder: 162, isActive: true },
  { id: "fac-chm-3", name: "Dr. B. H. Jawale", designation: "Associate Professor", department: "Chemistry", roleCategory: "teaching_senior", qualification: "M.Sc., NET, Ph.D.", phone: "9423243177", displayOrder: 163, isActive: true },
  { id: "fac-chm-4", name: "Dr. V. S. Shinde", designation: "Associate Professor", department: "Chemistry", roleCategory: "teaching_senior", qualification: "M.Sc., Ph.D.", phone: "9404400009", displayOrder: 164, isActive: true },
  { id: "fac-chm-5", name: "Dr. H. I. Sayyed", designation: "Associate Professor", department: "Chemistry", roleCategory: "teaching_senior", qualification: "M.Sc., Ph.D.", phone: "9421360168", displayOrder: 165, isActive: true },
  { id: "fac-chm-6", name: "Dr. D. D. Suryawanshi", designation: "Associate Professor", department: "Chemistry", roleCategory: "teaching_senior", qualification: "M.Sc., Ph.D.", phone: "9405024470", displayOrder: 166, isActive: true },
  { id: "fac-chm-7", name: "Dr. A. S. Kasgikar", designation: "Junior Lecturer", department: "Chemistry", roleCategory: "teaching_junior", qualification: "M.Sc., B.Ed., Ph.D.", phone: "9923230781", displayOrder: 167, isActive: true },
  { id: "fac-chm-8", name: "Shri. M. K. Maknikar", designation: "Junior Lecturer", department: "Chemistry", roleCategory: "teaching_junior", qualification: "M.Sc., B.Ed.", phone: "9860872496", displayOrder: 168, isActive: true },
  { id: "fac-chm-9", name: "Shri. S. V. Barbole", designation: "Junior Lecturer", department: "Chemistry", roleCategory: "teaching_junior", qualification: "M.Sc., B.Ed.", phone: "9545873255", displayOrder: 169, isActive: true },
  { id: "fac-chm-10", name: "Shri. S. N. Dudhabhate", designation: "Junior Lecturer", department: "Chemistry", roleCategory: "teaching_junior", qualification: "M.Sc., B.Ed.", phone: "9403921142", displayOrder: 170, isActive: true },
  { id: "fac-chm-11", name: "Shri. R. K. Pawar", designation: "Junior Lecturer", department: "Chemistry", roleCategory: "teaching_junior", qualification: "M.Sc., B.Ed.", phone: "9420202095", displayOrder: 171, isActive: true },

  // Industrial Chemistry
  { id: "fac-ich-1", name: "Dr. V. V. Dhole", designation: "Prof. & Head", department: "Industrial Chemistry", roleCategory: "teaching_senior", qualification: "M.Sc., B.Ed., M.Phil, Ph.D.", phone: "7809501501", displayOrder: 172, isActive: true },

  // Botany
  { id: "fac-bot-1", name: "Dr. V. D. Devarkar", designation: "Prof. & HOD / Vice Principal", department: "Botany", roleCategory: "teaching_senior", qualification: "M.Sc., Ph.D.", phone: "9421355073", displayOrder: 173, isActive: true },
  { id: "fac-bot-2", name: "Dr. A. S. Shinde", designation: "Associate Professor", department: "Botany", roleCategory: "teaching_senior", qualification: "M.Sc., Ph.D.", phone: "8459097566", displayOrder: 174, isActive: true },
  { id: "fac-bot-3", name: "Shri. G. S. More", designation: "Vice Principal (Jr)", department: "Botany", roleCategory: "teaching_junior", qualification: "M.Sc., SET, B.Ed.", phone: "9860910465", displayOrder: 175, isActive: true },
  { id: "fac-bot-4", name: "Shri. M. D. Salunke", designation: "Junior Lecturer", department: "Botany", roleCategory: "teaching_junior", qualification: "M.Sc., B.Ed.", phone: "9420334013", displayOrder: 176, isActive: true },
  { id: "fac-bot-5", name: "Dr. P. M. Jawalgekar", designation: "Junior Lecturer", department: "Botany", roleCategory: "teaching_junior", qualification: "M.Sc., Ph.D., SET, B.Ed.", phone: "8600329344", displayOrder: 177, isActive: true },

  // Zoology
  { id: "fac-zoo-1", name: "Dr. M. S. Nirmale", designation: "Assoc. Prof. & Head", department: "Zoology", roleCategory: "teaching_senior", qualification: "M.Sc., Ph.D.", phone: "9923239363", displayOrder: 178, isActive: true },
  { id: "fac-zoo-2", name: "Dr. P. L. Sawant", designation: "Associate Professor", department: "Zoology", roleCategory: "teaching_senior", qualification: "M.Sc., Ph.D.", phone: "8275926315", displayOrder: 179, isActive: true },
  { id: "fac-zoo-3", name: "Shri. N. L. Gaikwad", designation: "Junior Lecturer", department: "Zoology", roleCategory: "teaching_junior", qualification: "M.Sc., B.Ed.", phone: "9921276642", displayOrder: 180, isActive: true },
  { id: "fac-zoo-4", name: "Shri. V. S. Waghmode", designation: "Junior Lecturer", department: "Zoology", roleCategory: "teaching_junior", qualification: "M.Sc., B.Ed.", phone: "9765747695", displayOrder: 181, isActive: true },
  { id: "fac-zoo-5", name: "Shri. V. V. Nichat", designation: "Junior Lecturer", department: "Zoology", roleCategory: "teaching_junior", qualification: "M.Sc., B.Ed.", phone: "9404305073", displayOrder: 182, isActive: true },
  { id: "fac-zoo-6", name: "Shri. P. P. Phad", designation: "Junior Lecturer", department: "Zoology", roleCategory: "teaching_junior", qualification: "M.Sc., M.Ed.", phone: "8888621824", displayOrder: 183, isActive: true },

  // Computer Science & IT
  { id: "fac-cs-1", name: "Dr. S. S. Revate", designation: "Assoc. Prof. & Head", department: "Computer Science", roleCategory: "teaching_senior", qualification: "M.Sc., M.Phil., Ph.D.", phone: "9421336176", displayOrder: 184, isActive: true },
  { id: "fac-cs-2", name: "Dr. B. A. Shelke", designation: "Assistant Professor", department: "Computer Science", roleCategory: "teaching_senior", qualification: "M.Sc., M.Phil., Ph.D.", phone: "9834656536", displayOrder: 185, isActive: true },
  { id: "fac-cs-3", name: "Smt. R. R. Nitnaware", designation: "Lecturer", department: "Computer Science", roleCategory: "teaching_senior", qualification: "M.Sc., M.Phil.", phone: "8530949637", displayOrder: 186, isActive: true },
  { id: "fac-cs-4", name: "Smt. J. B. More", designation: "Lecturer (IT)", department: "Computer Science", roleCategory: "teaching_senior", qualification: "M.Sc., B.Ed.", phone: "7558353459", displayOrder: 187, isActive: true },

  // Physical Education & Sports
  { id: "fac-pe-1", name: "Shri. R. M. Suryawanshi", designation: "Director of Physical Education & HOD", department: "Physical Education", roleCategory: "teaching_senior", qualification: "M.P.Ed., M.Phil, Ph.D.", phone: "9423339324", displayOrder: 188, isActive: true },
  { id: "fac-pe-2", name: "Shri. Govind Gaikwad", designation: "Physical Education Teacher", department: "Physical Education", roleCategory: "teaching_junior", qualification: "M.A., M.P.Ed.", phone: "9404965137", displayOrder: 189, isActive: true },

  // Music
  { id: "fac-mus-1", name: "Shri. M. S. Jadhav", designation: "Junior Lecturer (Music)", department: "Music", roleCategory: "teaching_junior", qualification: "M.A., B.Ed., DSM (Sangeet Alankar)", phone: "9921930766", displayOrder: 190, isActive: true },

  // Library
  { id: "fac-lib-1", name: "Dr. P. B. Gaikwad", designation: "Librarian", department: "Library", roleCategory: "teaching_senior", qualification: "MLISc., M.Phil, PGDLAN, Ph.D.", phone: "9421573485", displayOrder: 191, isActive: true },

  // Bifocal Vocational & MCVC
  { id: "fac-voc-1", name: "Shri. S. B. Kalhalikar", designation: "Instructor, DCE", department: "Bifocal Vocational", roleCategory: "teaching_junior", qualification: "DCE", phone: "9552283450", displayOrder: 192, isActive: true },
  { id: "fac-mcv-1", name: "Shri. S. T. Dadge", designation: "Lecturer", department: "MCVC", roleCategory: "teaching_junior", qualification: "M.A., DAE, DSM", phone: "7218667555", displayOrder: 193, isActive: true },
  { id: "fac-mcv-2", name: "Shri. S. G. Giri", designation: "Lecturer", department: "MCVC", roleCategory: "teaching_junior", qualification: "M.A., DME", phone: "9423252842", displayOrder: 194, isActive: true },
  { id: "fac-mcv-3", name: "Shri. A. S. Mane", designation: "Lecturer", department: "MCVC", roleCategory: "teaching_junior", qualification: "B.Tech. (Food Tech)", phone: "8605055981", displayOrder: 195, isActive: true },
  { id: "fac-mcv-4", name: "Smt. B. R. Lokare", designation: "Lecturer", department: "MCVC", roleCategory: "teaching_junior", qualification: "M.A., B.Ed.", phone: "9390389286", displayOrder: 196, isActive: true },
  { id: "fac-mcv-5", name: "Shri. A. U. Ghante", designation: "Lecturer", department: "MCVC", roleCategory: "teaching_junior", qualification: "M.A., B.Ed.", phone: "9960897935", displayOrder: 197, isActive: true }
];

// Official Non-Teaching & Support Staff (from Pages 55-56)
export const OFFICIAL_NON_TEACHING_STAFF: PersonRecord[] = [
  // Administrative Staff
  { id: "stf-adm-1", name: "Shri. R. B. Sonwane", designation: "Registrar", roleCategory: "non_teaching", department: "Administration", qualification: "M.A.", phone: "9422655771", displayOrder: 201, isActive: true },
  { id: "stf-adm-2", name: "Shri. N. S. Korale", designation: "Office Superintendent", roleCategory: "non_teaching", department: "Administration", qualification: "M.A., M.B.A.", phone: "9405247275", displayOrder: 202, isActive: true },
  { id: "stf-adm-3", name: "Shri. M. D. Birajdar", designation: "Senior Clerk", roleCategory: "non_teaching", department: "Administration", qualification: "B.A.", phone: "9921058913", displayOrder: 203, isActive: true },
  { id: "stf-adm-4", name: "Shri. M. I. Pawar", designation: "Senior Clerk", roleCategory: "non_teaching", department: "Administration", qualification: "B.Sc.", phone: "7620849986", displayOrder: 204, isActive: true },
  { id: "stf-adm-5", name: "Shri. S. D. Survase", designation: "Junior Clerk", roleCategory: "non_teaching", department: "Administration", qualification: "M.A.", phone: "7588200481", displayOrder: 205, isActive: true },
  { id: "stf-adm-6", name: "Shri. P. T. Dadge", designation: "Junior Clerk", roleCategory: "non_teaching", department: "Administration", qualification: "B.A.", phone: "8149249888", displayOrder: 206, isActive: true },
  { id: "stf-adm-7", name: "Shri. B. S. Jamadar", designation: "Junior Clerk", roleCategory: "non_teaching", department: "Administration", qualification: "HSC", phone: "9422115697", displayOrder: 207, isActive: true },
  { id: "stf-adm-8", name: "Shri. S. H. Jadhav", designation: "Junior Clerk", roleCategory: "non_teaching", department: "Administration", qualification: "M.A.", phone: "9421481148", displayOrder: 208, isActive: true },

  // Library Staff
  { id: "stf-lib-1", name: "Shri. S. S. Jagtap", designation: "Asst. Librarian", roleCategory: "non_teaching", department: "Library", qualification: "M.A., B.Lib., B.P.Ed.", phone: "9423396896", displayOrder: 209, isActive: true },
  { id: "stf-lib-2", name: "Shri. K. T. Nagde", designation: "Junior Clerk", roleCategory: "non_teaching", department: "Library", qualification: "B.A.", phone: "9890297144", displayOrder: 210, isActive: true },
  { id: "stf-lib-3", name: "Shri. N. V. Lavate", designation: "Junior Clerk", roleCategory: "non_teaching", department: "Library", qualification: "B.A.", phone: "9422727757", displayOrder: 211, isActive: true },
  { id: "stf-lib-4", name: "Shri. V. P. More", designation: "Library Attendant", roleCategory: "non_teaching", department: "Library", qualification: "SSC", phone: "7218694848", displayOrder: 212, isActive: true },
  { id: "stf-lib-5", name: "Shri. M. T. Wadikar", designation: "Library Attendant", roleCategory: "non_teaching", department: "Library", qualification: "SSC", phone: "9421871957", displayOrder: 213, isActive: true },
  { id: "stf-lib-6", name: "Shri. P. T. Wadikar", designation: "Library Attendant", roleCategory: "non_teaching", department: "Library", qualification: "SSC", phone: "9028361234", displayOrder: 214, isActive: true },
  { id: "stf-lib-7", name: "Shri. S. N. Patil", designation: "Library Attendant", roleCategory: "non_teaching", department: "Library", qualification: "HSC", phone: "9373337185", displayOrder: 215, isActive: true },

  // Laboratory Staff
  { id: "stf-lab-1", name: "Shri. A. S. Didwal", designation: "Laboratory Asst.", roleCategory: "non_teaching", department: "Laboratories", qualification: "B.Sc.", phone: "9668460906", displayOrder: 216, isActive: true },
  { id: "stf-lab-2", name: "Shri. S. N. Nirmale", designation: "Laboratory Asst.", roleCategory: "non_teaching", department: "Laboratories", qualification: "M.Sc., B.Ed.", phone: "8999065382", displayOrder: 217, isActive: true },
  { id: "stf-lab-3", name: "Shri. D. G. Birajdar", designation: "Laboratory Asst.", roleCategory: "non_teaching", department: "Laboratories", qualification: "B.Sc.", phone: "9422655007", displayOrder: 218, isActive: true },
  { id: "stf-lab-4", name: "Shri. S. S. Salve", designation: "Laboratory Asst.", roleCategory: "non_teaching", department: "Laboratories", qualification: "B.Sc.", phone: "9890413211", displayOrder: 219, isActive: true },
  { id: "stf-lab-5", name: "Shri. K. G. Bokade", designation: "Laboratory Asst.", roleCategory: "non_teaching", department: "Laboratories", qualification: "B.A.", phone: "9527873940", displayOrder: 220, isActive: true },
  { id: "stf-lab-6", name: "Shri. A. R. Salunke", designation: "Laboratory Asst.", roleCategory: "non_teaching", department: "Laboratories", qualification: "B.A.", phone: "9404965104", displayOrder: 221, isActive: true },
  { id: "stf-lab-7", name: "Shri. V. K. Kanekar", designation: "Laboratory Asst.", roleCategory: "non_teaching", department: "Laboratories", qualification: "M.A.", phone: "8459942023", displayOrder: 222, isActive: true },
  { id: "stf-lab-8", name: "Shri. P. B. Jamadar", designation: "Laboratory Asst.", roleCategory: "non_teaching", department: "Laboratories", qualification: "HSC", phone: "9545856007", displayOrder: 223, isActive: true },
  { id: "stf-lab-9", name: "Shri. C. K. Sayyed", designation: "Laboratory Asst.", roleCategory: "non_teaching", department: "Laboratories", qualification: "M.A.", phone: "9604452244", displayOrder: 224, isActive: true },
  { id: "stf-lab-10", name: "Shri. B. R. More", designation: "Laboratory Attendant", roleCategory: "non_teaching", department: "Laboratories", qualification: "SSC", phone: "7709563319", displayOrder: 225, isActive: true },
  { id: "stf-lab-11", name: "Shri. H. M. Deshmukh", designation: "Laboratory Attendant", roleCategory: "non_teaching", department: "Laboratories", qualification: "SSC", phone: "8087727941", displayOrder: 226, isActive: true },
  { id: "stf-lab-12", name: "Shri. B. P. Jagtap", designation: "Laboratory Attendant", roleCategory: "non_teaching", department: "Laboratories", qualification: "HSC", phone: "9028370239", displayOrder: 227, isActive: true },
  { id: "stf-lab-13", name: "Shri. T. D. Shinde", designation: "Laboratory Attendant", roleCategory: "non_teaching", department: "Laboratories", qualification: "SSC", phone: "9518923939", displayOrder: 228, isActive: true },
  { id: "stf-lab-14", name: "Shri. G. R. Tigalpalle", designation: "Laboratory Attendant", roleCategory: "non_teaching", department: "Laboratories", qualification: "SSC", phone: "8975043591", displayOrder: 229, isActive: true },
  { id: "stf-lab-15", name: "Shri. V. P. Partapure", designation: "Laboratory Attendant", roleCategory: "non_teaching", department: "Laboratories", qualification: "SSC", phone: "9421355127", displayOrder: 230, isActive: true },
  { id: "stf-lab-16", name: "Shri. B. F. Aurade", designation: "Laboratory Attendant", roleCategory: "non_teaching", department: "Laboratories", qualification: "B.A.", phone: "8149516876", displayOrder: 231, isActive: true },
  { id: "stf-lab-17", name: "Shri. B. R. Sathe", designation: "Laboratory Attendant", roleCategory: "non_teaching", department: "Laboratories", qualification: "SSC", phone: "9423740638", displayOrder: 232, isActive: true },
  { id: "stf-lab-18", name: "Shri. V. K. Survase", designation: "Laboratory Attendant", roleCategory: "non_teaching", department: "Laboratories", qualification: "B.A.", phone: "9766636682", displayOrder: 233, isActive: true },
  { id: "stf-lab-19", name: "Shri. N. G. Jadhav", designation: "Laboratory Attendant", roleCategory: "non_teaching", department: "Laboratories", qualification: "B.A.", phone: "9922218858", displayOrder: 234, isActive: true },
  { id: "stf-lab-20", name: "Shri. V. B. Jadhav", designation: "Laboratory Attendant", roleCategory: "non_teaching", department: "Laboratories", qualification: "SSC", phone: "9421876686", displayOrder: 235, isActive: true },
  { id: "stf-lab-21", name: "Shri. S. S. Chavan", designation: "Laboratory Attendant", roleCategory: "non_teaching", department: "Laboratories", qualification: "SSC", phone: "9421876686", displayOrder: 236, isActive: true },
  { id: "stf-lab-22", name: "Shri. B. S. Shinde", designation: "Laboratory Attendant", roleCategory: "non_teaching", department: "Laboratories", qualification: "SSC", phone: "9730876693", displayOrder: 237, isActive: true },
  { id: "stf-lab-23", name: "Shri. D. B. Shinde", designation: "Laboratory Attendant", roleCategory: "non_teaching", department: "Laboratories", qualification: "B.A.", phone: "9730876693", displayOrder: 238, isActive: true },
  { id: "stf-lab-24", name: "Shri. R. B. Kale", designation: "Laboratory Attendant", roleCategory: "non_teaching", department: "Laboratories", qualification: "B.A.", phone: "8275474733", displayOrder: 239, isActive: true },
  { id: "stf-lab-25", name: "Shri. P. R. Kalshetty", designation: "Laboratory Attendant", roleCategory: "non_teaching", department: "Laboratories", qualification: "HSC", phone: "9665681169", displayOrder: 240, isActive: true },
  { id: "stf-lab-26", name: "Shri. A. P. Patil", designation: "Laboratory Attendant", roleCategory: "non_teaching", department: "Laboratories", qualification: "B.A.", phone: "9922403999", displayOrder: 241, isActive: true },
  { id: "stf-lab-27", name: "Shri. J. B. Kale", designation: "Laboratory Attendant", roleCategory: "non_teaching", department: "Laboratories", qualification: "B.A.", phone: "9665906351", displayOrder: 242, isActive: true },
  { id: "stf-lab-28", name: "Shri. S. S. Choudhari", designation: "Laboratory Attendant", roleCategory: "non_teaching", department: "Laboratories", qualification: "M.A., B.Ed.", phone: "9975222118", displayOrder: 243, isActive: true },
  { id: "stf-lab-29", name: "Shri. S. P. Hirale", designation: "Laboratory Attendant", roleCategory: "non_teaching", department: "Laboratories", qualification: "HSC", phone: "9834355725", displayOrder: 244, isActive: true },
  { id: "stf-lab-30", name: "Shri. M. G. Mugale", designation: "Laboratory Attendant", roleCategory: "non_teaching", department: "Laboratories", qualification: "B.A.", phone: "8329327711", displayOrder: 245, isActive: true },
  { id: "stf-lab-31", name: "Shri. A. P. Bande", designation: "Laboratory Attendant", roleCategory: "non_teaching", department: "Laboratories", qualification: "M.A.", phone: "9890570237", displayOrder: 246, isActive: true },

  // Peon Staff
  { id: "stf-peon-1", name: "Shri. C. K. Fulsunder", designation: "Peon", roleCategory: "non_teaching", department: "Support Staff", qualification: "SSC", phone: "7385748041", displayOrder: 247, isActive: true },
  { id: "stf-peon-2", name: "Shri. B. K. Thete", designation: "Peon", roleCategory: "non_teaching", department: "Support Staff", qualification: "SSC", phone: "8459142844", displayOrder: 248, isActive: true },
  { id: "stf-peon-3", name: "Shri. B. S. Kale", designation: "Peon", roleCategory: "non_teaching", department: "Support Staff", qualification: "HSC", phone: "9421872141", displayOrder: 249, isActive: true },
  { id: "stf-peon-4", name: "Shri. S. M. Holkar", designation: "Peon", roleCategory: "non_teaching", department: "Support Staff", qualification: "SSC", phone: "9699481243", displayOrder: 250, isActive: true },
  { id: "stf-peon-5", name: "Shri. D. B. Patil", designation: "Peon", roleCategory: "non_teaching", department: "Support Staff", qualification: "SSC", phone: "8484824940", displayOrder: 251, isActive: true },
  { id: "stf-peon-6", name: "Shri. R. A. Bhalerao", designation: "Peon", roleCategory: "non_teaching", department: "Support Staff", qualification: "SSC", phone: "7058454602", displayOrder: 252, isActive: true },
  { id: "stf-peon-7", name: "Shri. N. G. Vibhute", designation: "Peon", roleCategory: "non_teaching", department: "Support Staff", qualification: "B.A.", phone: "9975166089", displayOrder: 253, isActive: true },
  { id: "stf-peon-8", name: "Shri. G. V. Sagar", designation: "Peon", roleCategory: "non_teaching", department: "Support Staff", qualification: "SSC", phone: "8552833188", displayOrder: 254, isActive: true },
  { id: "stf-peon-9", name: "Shri. S. U. Mugale", designation: "Peon", roleCategory: "non_teaching", department: "Support Staff", qualification: "B.Sc.", phone: "9373994825", displayOrder: 255, isActive: true },

  // MCVC Staff
  { id: "stf-mcvc-1", name: "Shri. D. L. Pawar", designation: "Jr. Clerk (MCVC)", roleCategory: "non_teaching", department: "MCVC", qualification: "DAE, M.A.", phone: "9689795973", displayOrder: 256, isActive: true }
];

// Institutional Committees
export const INSTITUTIONAL_COMMITTEES = {
  cdc: {
    title: "College Development Committee (CDC - कॉलेज डेव्हलपमेंट कमिटी)",
    members: [
      { sr: 1, name: "Shri. Amol Shivajirao More", role: "Chairman (अध्यक्ष)" },
      { sr: 2, name: "Shri. Subhash Ramrao Waghmode", role: "Secretary (सचिव)" },
      { sr: 3, name: "Dr. Sanjay Namdev Aswale", role: "Joint Secretary (सह सचिव)" },
      { sr: 4, name: "Shri. Suresh Manikrao Birajdar", role: "Member (सदस्य)" },
      { sr: 5, name: "Dr. S. A. Wadikar", role: "Member (सदस्य)" },
      { sr: 6, name: "Shri. Sheshrao Pawar", role: "Member (सदस्य)" },
      { sr: 7, name: "Shri. Balaji Ingale", role: "Member (सदस्य)" },
      { sr: 8, name: "Dr. V. D. Devarkar", role: "Member (सदस्य)" },
      { sr: 9, name: "Dr. A. S. Shinde", role: "Member (सदस्य)" },
      { sr: 10, name: "Shri. N. S. Korale", role: "Member (सदस्य)" },
      { sr: 11, name: "Shri. R. B. Sonwane", role: "Member (सदस्य)" },
      { sr: 12, name: "Shri. Suraj Survase", role: "Student Representative (विद्यार्थी प्रतिनिधी)" }
    ]
  },
  seniorLmc: {
    title: "Senior College Local Managing Committee (वरिष्ठ महाविद्यालय लोकल मॅनेजिंग कमिटी)",
    members: [
      { sr: 1, name: "Shri. Amol Shivajirao More", role: "Chairman (अध्यक्ष)" },
      { sr: 2, name: "Principal Dr. Sanjay Namdev Aswale", role: "Ex-Officio Secretary (पदसिद्ध चिटणीस)" },
      { sr: 3, name: "Shri. Ashlesh Shivajirao More", role: "Member (सदस्य)" },
      { sr: 4, name: "Shri. Padmakarrao V. Haralkar", role: "Member (सदस्य)" },
      { sr: 5, name: "Shri. Suresh M. Birajdar", role: "Member (सदस्य)" },
      { sr: 6, name: "Shri. Ravindra V. Gaikwad", role: "Member (सदस्य)" },
      { sr: 7, name: "Shri. Sheshrao N. Pawar", role: "Member (सदस्य)" },
      { sr: 8, name: "Shri. Sunil C. Mane", role: "Member (सदस्य)" },
      { sr: 9, name: "Dr. Vijay N. Patil", role: "Member (सदस्य)" },
      { sr: 10, name: "Dr. Devarkar V.D.", role: "Teacher Representative (प्राध्यापक प्रतिनिधी)" },
      { sr: 11, name: "Dr. Suryawanshi V.S.", role: "Teacher Representative (प्राध्यापक प्रतिनिधी)" },
      { sr: 12, name: "Shri. Korale N.S.", role: "Non-teaching Staff Representative (शिक्षकेत्तर प्रतिनिधी)" }
    ]
  },
  juniorLmc: {
    title: "Junior College Local Managing Committee (कनिष्ठ महाविद्यालय लोकल मॅनेजिंग कमिटी)",
    members: [
      { sr: 1, name: "Shri. Suresh Manikrao Birajdar", role: "Chairman (अध्यक्ष)" },
      { sr: 2, name: "Principal Dr. Sanjay Namdev Aswale", role: "Ex-Officio Secretary (पदसिद्ध चिटणीस)" },
      { sr: 3, name: "Shri. Amol Shivajirao More", role: "Member (सदस्य)" },
      { sr: 4, name: "Shri. Janardhanrao L. Sathe", role: "Member (सदस्य)" },
      { sr: 5, name: "Shri. Padmakarrao V. Haralkar", role: "Member (सदस्य)" },
      { sr: 6, name: "Shri. Subhash R. Waghmode", role: "Member (सदस्य)" },
      { sr: 7, name: "Shri. Sunil C. Mane", role: "Member (सदस्य)" },
      { sr: 8, name: "Shri. Digambar P. Birajdar", role: "Member (सदस्य)" },
      { sr: 9, name: "Vice Principal Shri. G.S. More", role: "Teacher Representative (शिक्षक प्रतिनिधी)" }
    ]
  }
};

// Sister Institutions under Bharat Shikshan Sanstha
export const SANSTHA_BRANCHES = [
  "Bharat Vidyalaya, Omerga",
  "Bharat Prathmik Vidyalaya, Omerga",
  "Shri Chhatrapati Shivaji (Senior) Mahavidyalaya, Omerga",
  "Bharat Vidyalaya, Makani",
  "Shri Chhatrapati Shivaji (Junior) Mahavidyalaya, Omerga",
  "Jayram Vidyalaya, Narangwadi",
  "Shri Chhatrapati Shivaji Vidyalaya, Talmod",
  "Arts, Science & Commerce Junior College, Murum",
  "Bharat Vidyalaya, Bedga",
  "Bharat Madhyamik & Uccha Madhyamik Vidyalaya, Makani",
  "Bharat Prathmik Vidyalaya, Makani",
  "Bharat Vidyalaya, Malgi",
  "B.S.S. Arts, Science & Commerce College, Makani",
  "Tatyaraoji More College of Pharmacy, Omerga (D.Pharm, B.Pharm, M.Pharm)",
  "The Delhi Public School, Omerga"
];

// Official Academic Courses
export const OFFICIAL_COURSES: CourseInfo[] = [
  // Junior College
  {
    id: "hsc-sci",
    name: "11th & 12th Science (General / IT / GCE)",
    level: "Junior College (HSC)",
    faculty: "Science",
    duration: "2 Years",
    intake: 600,
    eligibility: "SSC (10th Pass) with English and minimum 40% in Science",
    features: [
      "Compulsory: English, EVS, Health & Physical Education",
      "Second Language: Marathi / Hindi / Sanskrit / Information Technology (IT)",
      "Electives: Physics, Chemistry, Biology, Mathematics or Geography, G.C.E.",
      "Special NEET, JEE, MHT-CET integrated batches with expert faculty from Latur coaching institutes",
      "Regular Sunday topic practice exams and separate hostel for 75 meritorious girls"
    ],
    nep2020Compliant: true
  },
  {
    id: "hsc-com",
    name: "11th & 12th Commerce",
    level: "Junior College (HSC)",
    faculty: "Commerce",
    duration: "2 Years",
    intake: 600,
    eligibility: "SSC (10th Pass) with English",
    features: [
      "Compulsory: English, EVS, Health & Physical Education",
      "Second Language: Marathi / Hindi",
      "Electives: Bookkeeping & Accountancy, Organization of Commerce & Management, Secretarial Practice, Economics, Co-operation",
      "Special training for Banking, CA Foundation and Competitive exams"
    ],
    nep2020Compliant: true
  },
  {
    id: "hsc-art",
    name: "11th & 12th Arts",
    level: "Junior College (HSC)",
    faculty: "Arts",
    duration: "2 Years",
    intake: 480,
    eligibility: "SSC (10th Pass) with English",
    features: [
      "Compulsory: English, EVS, Health & Physical Education",
      "Second Language: Marathi / Hindi",
      "Electives (choose 4): Sociology, Political Science, History, Geography, Economics, Education, Music",
      "Competitive examination orientation and writing skills development"
    ],
    nep2020Compliant: true
  },
  {
    id: "hsc-mcvc",
    name: "11th & 12th Vocational (MCVC / HSC Vocational)",
    level: "Junior College (HSC)",
    faculty: "Vocational",
    duration: "2 Years",
    intake: "20 per trade (120 Total)",
    eligibility: "SSC (10th Pass)",
    features: [
      "Trades: 1) Mechanical Technology 2) Horticulture 3) Accounting & Office Management 4) Electrical Technology 5) Automobile Technology 6) Food Product Technology",
      "Kothari Commission vocational curriculum promoting self-employment & technical trade readiness",
      "Apprenticeship support and industrial visits"
    ],
    nep2020Compliant: true
  },
  {
    id: "acad-police",
    name: "Police and Military Pre-Recruitment Training Academy",
    level: "Vocational / Certificate",
    faculty: "Vocational",
    duration: "1 Year",
    intake: 120,
    eligibility: "11th / 12th / UG students enrolled in SC(S)CO",
    features: [
      "Ground physical training (running, shot put, pull-ups) conducted by retired military officers",
      "Written test coaching, mock tests, and physical fitness conditioning",
      "Proven track record with high selection rates in Maharashtra Police and Armed Forces"
    ],
    nep2020Compliant: false
  },

  // Senior College UG
  {
    id: "ug-ba",
    name: "B.A. (Bachelor of Arts - 3/4 Year Honours / Honours with Research)",
    level: "Undergraduate (UG)",
    faculty: "Arts",
    duration: "3 to 4 Years (NEP 2020)",
    intake: "Grant-in-Aid: 360 | Non-Grant: 240",
    eligibility: "HSC (12th Pass) or equivalent examination",
    features: [
      "44 Credits per year (Sem I: 22, Sem II: 22) under Academic Bank of Credits (ABC)",
      "Majors available: Marathi, Hindi, English, History, Political Science, Sociology, Geography, Economics",
      "Generic Electives, SEC, VSC (Vocational Skills), AEC, Value Education (VES - Constitution of India), IKS (Hyderabad Freedom Struggle)",
      "Field Projects, Community Engagement (CEP), On-the-Job Training (OJT)"
    ],
    nep2020Compliant: true
  },
  {
    id: "ug-bcom",
    name: "B.Com. (Bachelor of Commerce - 3/4 Year Honours)",
    level: "Undergraduate (UG)",
    faculty: "Commerce",
    duration: "3 to 4 Years (NEP 2020)",
    intake: 120,
    eligibility: "HSC (12th Commerce or Science Pass)",
    features: [
      "Majors: Accounting & Finance, Business Administration & Management, Entrepreneurship Development",
      "Office Automation, Business Documentation, Computerized Accounting (Tally), GST & Direct Tax",
      "Independent Commerce Computer Lab, Quality Circle, Industrial Visits, Placement Cell",
      "20 M.Phil and 27 Ph.D. alumni produced by Commerce Research Center"
    ],
    nep2020Compliant: true
  },
  {
    id: "ug-bsc",
    name: "B.Sc. (Bachelor of Science - 3/4 Year Honours / Research)",
    level: "Undergraduate (UG)",
    faculty: "Science",
    duration: "3 to 4 Years (NEP 2020)",
    intake: 290,
    eligibility: "HSC (12th Science Pass)",
    features: [
      "Subject Groups: 1) Physics, Chemistry, Maths 2) Chemistry, Botany, Zoology 3) Physics, Chemistry, Ind. Chemistry 4) Physics, Chemistry, Electronics 5) Physics, Chemistry, Comp. Science 6) Physics, Maths, Comp. Science 7) Physics, Electronics, Comp. Science",
      "Well-equipped laboratories, Common Research Facility Center (CRFC) access",
      "Botanical garden, Zoology specimen collection, advanced electronics equipment"
    ],
    nep2020Compliant: true
  },
  {
    id: "ug-bcs",
    name: "B.Sc. in Computer Science (BCS)",
    level: "Undergraduate (UG)",
    faculty: "Science",
    duration: "3 Years",
    intake: 60,
    eligibility: "12th Science Pass OR 3-year Diploma in Engineering OR MCVC in Computer Techniques/IT/Electronics",
    features: [
      "ICT-based classrooms and 3 fully equipped computer labs with high-speed internet",
      "Programming in C/C++, Java, Python, Web Technologies, Database Systems",
      "Campus interview prep, software project internships, industry expert guest lectures"
    ],
    nep2020Compliant: true
  },
  {
    id: "ug-bsct",
    name: "B.Sc. in Information Technology (B.Sc. IT)",
    level: "Undergraduate (UG)",
    faculty: "Science",
    duration: "3 Years",
    intake: 60,
    eligibility: "12th Science Pass OR 3-year Engineering Diploma OR MCVC (IT/Electronics)",
    features: [
      "Networking, Cloud computing, Web frameworks, Cyber security basics",
      "Dedicated software labs, internship assistance, placement training"
    ],
    nep2020Compliant: true
  },

  // Senior College PG
  {
    id: "pg-ma",
    name: "M.A. (Master of Arts in 7 Disciplines)",
    level: "Postgraduate (PG)",
    faculty: "Arts",
    duration: "2 Years (4 Semesters)",
    intake: "60 per subject",
    eligibility: "B.A. graduate with relevant subject (min 40%)",
    features: [
      "Disciplines: Marathi, Hindi, English, History, Geography, Political Science, Sociology",
      "Research Project and Field Project mandatory in 2nd year",
      "NET / SET / PET examination orientation, national seminar participation"
    ],
    nep2020Compliant: true
  },
  {
    id: "pg-mcom",
    name: "M.Com. (Master of Commerce)",
    level: "Postgraduate (PG)",
    faculty: "Commerce",
    duration: "2 Years",
    intake: 60,
    eligibility: "B.Com. Graduate (min 40%)",
    features: [
      "Advanced Financial Accounting, Corporate Taxation, Banking Operations",
      "Commerce Research Lab access, publication support in national & international journals"
    ],
    nep2020Compliant: true
  },
  {
    id: "pg-msc-chem",
    name: "M.Sc. in Organic / Analytical Chemistry",
    level: "Postgraduate (PG)",
    faculty: "Science",
    duration: "2 Years",
    intake: 30,
    eligibility: "B.Sc. Chemistry with PG-CET / merit list (45% Open, 40% Reserved)",
    features: [
      "Recognized Research Center established 1996; 41 Ph.D. scholars guided",
      "Instrumentation training on FTIR, UV-Vis Spectrophotometer",
      "Campus placement drives with leading chemical and pharma companies; 42 students qualified NET/SET/GATE"
    ],
    nep2020Compliant: true
  },
  {
    id: "pg-msc-phy",
    name: "M.Sc. in Physics",
    level: "Postgraduate (PG)",
    faculty: "Science",
    duration: "2 Years",
    intake: 30,
    eligibility: "B.Sc. Physics with PG-CET / merit list",
    features: [
      "CRFC Common Research Facility Center inaugurated by Ex-Chief Minister Ashokrao Chavan",
      "XRD, FTIR, UV-Vis, and Resistivity measurement facilities",
      "Opportunities in DRDO, ISRO, VSSC, BSNL, BHEL, NTPC, SAIL"
    ],
    nep2020Compliant: true
  },

  // Research Programs
  {
    id: "res-phd",
    name: "Ph.D. Research Centers (Dr. BAMU Recognized)",
    level: "Doctoral (Ph.D.)",
    faculty: "Science",
    duration: "3 to 5 Years",
    intake: "As per University vacancies",
    eligibility: "Postgraduate degree (min 60%) + NET / SET / PET qualification",
    features: [
      "Recognized subjects: Chemistry, Physics, Commerce, Botany, Zoology, Geography, Hindi, English, Political Science, History",
      "Total 71 Ph.D. degrees and 30 M.Phil degrees awarded to date",
      "Over 550 research papers published in National and International journals by faculty members"
    ],
    nep2020Compliant: false
  }
];

// Recognized Research Guides from Pages 31-32
export const RESEARCH_GUIDES = [
  { sr: 1, subject: "Physics", name: "Dr. Padampalle A.S.", intake: 8, awarded: 0, inProgress: 6 },
  { sr: 2, subject: "Physics", name: "Dr. Birajdar D.D.", intake: 6, awarded: 0, inProgress: 2 },
  { sr: 3, subject: "Physics", name: "Dr. Gaikwad P.K.", intake: 6, awarded: 0, inProgress: 2 },
  { sr: 4, subject: "Chemistry", name: "Dr. Suryawanshi V.S.", intake: 8, awarded: 1, inProgress: 3 },
  { sr: 5, subject: "Chemistry", name: "Dr. Vitthal Vinayak", intake: 8, awarded: 0, inProgress: 3 },
  { sr: 6, subject: "Chemistry", name: "Dr. Shinde V.S.", intake: 6, awarded: 0, inProgress: 3 },
  { sr: 7, subject: "Zoology", name: "Dr. Sawant P.L.", intake: 8, awarded: 0, inProgress: 0 },
  { sr: 8, subject: "Zoology", name: "Dr. Nirmale M.S.", intake: 8, awarded: 0, inProgress: 0 },
  { sr: 9, subject: "Botany", name: "Dr. Devarkar V.D.", intake: 8, awarded: 1, inProgress: 3 },
  { sr: 10, subject: "Computer Science", name: "Dr. Revate S.S.", intake: 4, awarded: 0, inProgress: 4 },
  { sr: 11, subject: "Commerce", name: "Dr. Aswale S.N.", intake: 8, awarded: 15, inProgress: 5 },
  { sr: 12, subject: "Commerce", name: "Dr. Ashte A.S.", intake: 8, awarded: 0, inProgress: 5 },
  { sr: 13, subject: "Marathi", name: "Dr. Pitle P.A.", intake: 8, awarded: 0, inProgress: 5 },
  { sr: 14, subject: "Hindi", name: "Dr. Ingle S.P.", intake: 4, awarded: 0, inProgress: 0 },
  { sr: 15, subject: "Hindi", name: "Dr. Muchhatte S.N.", intake: 6, awarded: 1, inProgress: 1 },
  { sr: 16, subject: "English", name: "Dr. Kare C.D.", intake: 6, awarded: 1, inProgress: 1 },
  { sr: 17, subject: "English", name: "Dr. Todkar S.T.", intake: 6, awarded: 0, inProgress: 0 },
  { sr: 18, subject: "English", name: "Dr. Mungle S.D.", intake: 4, awarded: 0, inProgress: 2 },
  { sr: 19, subject: "Political Science", name: "Dr. Dhobale D.B.", intake: 8, awarded: 1, inProgress: 5 },
  { sr: 20, subject: "Political Science", name: "Dr. Deshmukh A.D.", intake: 6, awarded: 0, inProgress: 3 },
  { sr: 21, subject: "History", name: "Dr. Somawanshi G.N.", intake: 6, awarded: 1, inProgress: 1 },
  { sr: 22, subject: "History", name: "Dr. Mane B.G.", intake: 4, awarded: 1, inProgress: 1 },
  { sr: 23, subject: "Geography", name: "Dr. Itle D.S.", intake: 4, awarded: 0, inProgress: 2 },
  { sr: 24, subject: "Geography", name: "Dr. Rathod S.L.", intake: 4, awarded: 0, inProgress: 1 },
  { sr: 25, subject: "Sociology", name: "Dr. Patil P.D.", intake: 6, awarded: 0, inProgress: 0 },
  { sr: 26, subject: "Sociology", name: "Dr. Padole D.V.", intake: 4, awarded: 0, inProgress: 2 },
  { sr: 27, subject: "Economics", name: "Dr. Hissal V.N.", intake: 8, awarded: 0, inProgress: 0 }
];

// Official Junior College Fee Structure (Page 35)
export const JUNIOR_COLLEGE_FEES: FeeItem[] = [
  { courseName: "XI Science", openEbc: 1085, scSt: 1035, obcSeber: 1035, paying: 1277, category: "Junior" },
  { courseName: "XI Science (IT)", openEbc: 2285, scSt: 2285, obcSeber: 2285, paying: 2477, category: "Junior" },
  { courseName: "XI Science (GCE)", openEbc: 3485, scSt: 3485, obcSeber: 3485, paying: 3677, category: "Junior" },
  { courseName: "XII Science", openEbc: 1085, scSt: 1035, obcSeber: 1035, paying: 1326, category: "Junior" },
  { courseName: "XII Science (IT)", openEbc: 2285, scSt: 1035, obcSeber: 1035, paying: 1326, category: "Junior" },
  { courseName: "XII Science (GCE)", openEbc: 3485, scSt: 1035, obcSeber: 1035, paying: 3726, category: "Junior" },
  { courseName: "XI Art", openEbc: 580, scSt: 370, obcSeber: 370, paying: 772, category: "Junior" },
  { courseName: "XII Art", openEbc: 580, scSt: 370, obcSeber: 370, paying: 821, category: "Junior" },
  { courseName: "XI Commerce", openEbc: 580, scSt: 370, obcSeber: 370, paying: 772, category: "Junior" },
  { courseName: "XII Commerce", openEbc: 580, scSt: 470, obcSeber: 470, paying: 821, category: "Junior" },
  { courseName: "XI MCVC", openEbc: 1780, scSt: 1550, obcSeber: 1550, paying: 2020, category: "Junior" },
  { courseName: "XII MCVC", openEbc: 1755, scSt: 1525, obcSeber: 1525, paying: 2080, category: "Junior" }
];

// Official Senior and PG College Fee Structure (Page 36)
export const SENIOR_PG_FEES: FeeItem[] = [
  { courseName: "B.A. I", openEbc: 1619, scSt: 1677, obcSeber: 615, paying: 2419, category: "Senior" },
  { courseName: "B.A. I (Geog. / Phy.Edu.)", openEbc: 1919, scSt: 1161, obcSeber: 615, paying: 2719, category: "Senior" },
  { courseName: "B.A. II", openEbc: 1204, scSt: 1372, obcSeber: 250, paying: 2004, category: "Senior" },
  { courseName: "B.A. II (Geog. / Phy.Edu.)", openEbc: 1504, scSt: 1552, obcSeber: 250, paying: 2304, category: "Senior" },
  { courseName: "B.A. III", openEbc: 1104, scSt: 1312, obcSeber: 250, paying: 1675, category: "Senior" },
  { courseName: "B.A. III (Geog. / Phy.Edu.)", openEbc: 1404, scSt: 1492, obcSeber: 250, paying: 1975, category: "Senior" },
  { courseName: "B.Sc. I", openEbc: 4619, scSt: 3477, obcSeber: 615, paying: 5419, category: "Senior" },
  { courseName: "B.Sc. II", openEbc: 4204, scSt: 3082, obcSeber: 250, paying: 5004, category: "Senior" },
  { courseName: "B.Sc. III", openEbc: 4104, scSt: 3022, obcSeber: 250, paying: 4904, category: "Senior" },
  { courseName: "B.Com I", openEbc: 1919, scSt: 1857, obcSeber: 615, paying: 2719, category: "Senior" },
  { courseName: "B.Com II", openEbc: 1504, scSt: 1462, obcSeber: 250, paying: 2304, category: "Senior" },
  { courseName: "B.Com III", openEbc: 1404, scSt: 1402, obcSeber: 250, paying: 2204, category: "Senior" },
  { courseName: "BCS I / B.Sc (IT) I", openEbc: 0, scSt: 20326, obcSeber: 0, paying: 33518, category: "Senior" },
  { courseName: "BCS II / B.Sc (IT) II", openEbc: 0, scSt: 19971, obcSeber: 0, paying: 33153, category: "Senior" },
  { courseName: "BCS III / B.Sc (IT) III", openEbc: 0, scSt: 19911, obcSeber: 0, paying: 33053, category: "Senior" },
  { courseName: "M.A. Marathi I", openEbc: 0, scSt: 3400, obcSeber: 665, paying: 5308, category: "PG" },
  { courseName: "M.A. Marathi II", openEbc: 0, scSt: 3045, obcSeber: 300, paying: 4943, category: "PG" },
  { courseName: "M.A. Hindi I", openEbc: 0, scSt: 3400, obcSeber: 665, paying: 5308, category: "PG" },
  { courseName: "M.A. Hindi II", openEbc: 0, scSt: 3045, obcSeber: 300, paying: 4943, category: "PG" },
  { courseName: "M.A. English I", openEbc: 0, scSt: 3400, obcSeber: 665, paying: 5308, category: "PG" },
  { courseName: "M.A. English II", openEbc: 0, scSt: 3045, obcSeber: 300, paying: 4943, category: "PG" },
  { courseName: "M.A. Geography I", openEbc: 0, scSt: 4126, obcSeber: 665, paying: 6518, category: "PG" },
  { courseName: "M.A. Geography II", openEbc: 0, scSt: 3771, obcSeber: 300, paying: 6153, category: "PG" },
  { courseName: "M.A. Sociology I", openEbc: 0, scSt: 3400, obcSeber: 665, paying: 5308, category: "PG" },
  { courseName: "M.A. Sociology II", openEbc: 0, scSt: 3045, obcSeber: 300, paying: 4943, category: "PG" },
  { courseName: "M.A. Political Sci. I", openEbc: 0, scSt: 3400, obcSeber: 665, paying: 5308, category: "PG" },
  { courseName: "M.A. Political Sci. II", openEbc: 0, scSt: 3045, obcSeber: 300, paying: 4943, category: "PG" },
  { courseName: "M.A. History I", openEbc: 0, scSt: 3400, obcSeber: 665, paying: 5308, category: "PG" },
  { courseName: "M.A. History II", openEbc: 0, scSt: 3045, obcSeber: 300, paying: 4943, category: "PG" },
  { courseName: "M.Com. I", openEbc: 0, scSt: 3664, obcSeber: 665, paying: 5671, category: "PG" },
  { courseName: "M.Com. II", openEbc: 0, scSt: 3309, obcSeber: 300, paying: 5306, category: "PG" },
  { courseName: "M.Sc. I Physics & Chemistry", openEbc: 0, scSt: 12838, obcSeber: 665, paying: 21038, category: "PG" },
  { courseName: "M.Sc. II Physics & Chemistry", openEbc: 0, scSt: 12483, obcSeber: 300, paying: 20673, category: "PG" }
];

// Official Scholarships & Financial Aid (Pages 37-38)
export const OFFICIAL_SCHOLARSHIPS: ScholarshipInfo[] = [
  {
    id: 1,
    name: "Scholarship for Children of Primary & Secondary Teachers",
    marathiName: "प्राथमिक व माध्यमिक शिक्षकांच्या मुलांना मिळणारी शिष्यवृत्ती",
    minPercentage: "80% in qualifying exam",
    incomeLimit: "No limit",
    requiredDocuments: ["TC & Marks memo verified copy", "Income Certificate / Affidavit from HM"]
  },
  {
    id: 2,
    name: "Non-Hindi Linguistic Scholarship",
    marathiName: "अहिंदी भाषिक शिष्यवृत्ती",
    minPercentage: "80% in Hindi subject",
    incomeLimit: "Rs. 25,000/- per annum",
    requiredDocuments: ["Hindi subject mandatory", "TC & Marks Memo", "Tehsildar Income Certificate", "Proof of opt for Hindi"]
  },
  {
    id: 3,
    name: "State Government Open Merit Scholarship",
    marathiName: "राज्य सरकार खुली गुणवत्ता शिष्यवृत्ती",
    minPercentage: "75% (Jr) / 75% (Sr)",
    incomeLimit: "No limit",
    requiredDocuments: ["TC & Marks Memo", "For renewal: 50% or more marks memo"]
  },
  {
    id: 4,
    name: "National Rural Scholarship",
    marathiName: "राष्ट्रीय ग्रामीण शिष्यवृत्ती",
    minPercentage: "75% in 10th standard",
    incomeLimit: "Rs. 15,000/- per annum",
    requiredDocuments: ["HM certificate that school is in rural area", "TC & Marks memo", "Tehsildar Income Certificate"]
  },
  {
    id: 5,
    name: "Freedom Fighter Dependent Scholarship",
    marathiName: "स्वातंत्र्य सैनिक शिष्यवृत्ती",
    minPercentage: "All passing classes",
    incomeLimit: "No limit",
    requiredDocuments: ["TC & Marks Memo", "Sanmanpatra of Freedom Fighter", "Progeny certificate", "Affidavit/Agreement"]
  },
  {
    id: 6,
    name: "Handicapped / Divyang Scholarship",
    marathiName: "अपंग शिष्यवृत्ती",
    minPercentage: "40% (for all handicapped students)",
    incomeLimit: "Rs. 15,000/- per annum",
    requiredDocuments: ["Civil Surgeon certificate (40%+ disability)", "TC & Marks Memo", "Tehsildar Income Certificate"]
  },
  {
    id: 7,
    name: "E.B.C. (Economically Backward Class) Concession",
    marathiName: "ई.बी.सी. शिष्यवृत्ती",
    minPercentage: "70% (11th Arts), 80% (11th Science)",
    incomeLimit: "Rs. 15,000/- per annum",
    requiredDocuments: ["TC & Marks Memo", "Progeny certificate", "Tehsildar Income Certificate"]
  },
  {
    id: 8,
    name: "Educational Aid for Wards of Military Soldiers",
    marathiName: "सैन्यातील जवानांच्या मुलांना शैक्षणिक मदत",
    minPercentage: "All passing classes",
    incomeLimit: "No limit",
    requiredDocuments: ["TC & Marks Memo", "District Sainik Board Eligibility Certificate"]
  },
  {
    id: 9,
    name: "Government Vidyaniketan Scholarship",
    marathiName: "शासकीय विद्यानिकेतन शिष्यवृत्ती",
    minPercentage: "Passed from Govt Vidyaniketan",
    incomeLimit: "No limit",
    requiredDocuments: ["Application from Vidyaniketan", "TC & Marks Memo", "Authorized forwarding letter", "Agreement"]
  },
  {
    id: 10,
    name: "Eklavya Post-Graduate Scholarship Scheme",
    marathiName: "एकलव्य शिष्यवृत्ती योजना (पदव्युत्तर स्तरावर)",
    minPercentage: "60% in B.A./B.Com or 70% in B.Sc.",
    incomeLimit: "Rs. 35,000/- per annum",
    requiredDocuments: ["Degree Marks Memo certified copies", "Degree Certificate certified copies", "Parent income certificate or Death certificate if deceased"]
  },
  {
    id: 11,
    name: "Government of India Post-Matric Scholarship (SC / ST / NT / OBC / SBC)",
    marathiName: "भारत सरकार मॅट्रिकोत्तर मागासवर्गीय शिष्यवृत्ती",
    minPercentage: "Passing marks",
    incomeLimit: "SC/ST: up to Rs. 2,00,000/- | NT/OBC/SBC: up to Rs. 1,00,000/-",
    requiredDocuments: ["Tehsildar Caste Certificate", "Tehsildar Income Certificate (Original)", "Nationalized Bank Account Passbook", "Aadhaar Card", "TC & Marks memo"]
  },
  {
    id: 12,
    name: "Government of India Freeship (Tuition Fee Exemption)",
    marathiName: "जी.ओ.आय. फ्रीशिप योजना",
    minPercentage: "Passing marks (Higher income bracket of backward class)",
    incomeLimit: "As per GOI criteria",
    requiredDocuments: ["GOI Freeship form", "Marks memo", "Caste Certificate", "Salary slip / Income Certificate"]
  },
  {
    id: 13,
    name: "Central Sector Scheme of Scholarships (B.A. / B.Sc. / B.Com)",
    marathiName: "सेंटर सेक्टर शिष्यवृत्ती",
    minPercentage: "Top 20th percentile in Divisional Board merit list",
    incomeLimit: "As per central guidelines",
    requiredDocuments: ["TC & Marks memo", "Merit list ranking certificate", "Income certificate", "Nationalized Bank account"]
  },
  {
    id: 14,
    name: "Indian Oil Educational Scholarship",
    marathiName: "इंडियन ऑईल शैक्षणिक शिष्यवृत्ती",
    minPercentage: "10th pass with distinction",
    incomeLimit: "As per IOCL policy",
    requiredDocuments: ["TC & Marks memo", "Income certificate", "Nationalized Bank account details"]
  },
  {
    id: 15,
    name: "Minority Scholarship (Muslim, Sikh, Buddhist, Christian, Parsi, Jain)",
    marathiName: "अल्पसंख्यांक शिष्यवृत्ती (मुस्लिम, शीख, बौद्ध, ख्रिश्चन, पारशी व जैन)",
    minPercentage: "All eligible classes",
    incomeLimit: "Rs. 2,50,000/- per annum",
    requiredDocuments: ["Minority community declaration", "Domicile / Permanent residence proof", "Aadhaar card", "Nationalized Bank account"]
  }
];

// Official Endowments and Merit Prizes (Pages 39-40)
export const OFFICIAL_PRIZES: PrizeInfo[] = [
  { id: 1, donorName: "Shri. Chhatrapati Shivaji Mahavidyalaya Teaching Staff", prizeName: "Late Tatyaraoji More Prize", criteria: "To the student who stands 1st in 12th Board Examination by rotation", amount: "Rs. 201/-" },
  { id: 2, donorName: "Dr. Manikraoji Alangekar", prizeName: "Smt. Gangubai Keshavrao Patil Prize", criteria: "1st in 12th Science Medical Group", amount: "Rs. 101/-" },
  { id: 3, donorName: "Late Shridharraoji More", prizeName: "Late Tatyaraoji More Prize", criteria: "1st in 12th Arts, Science, Commerce aggregate", amount: "Rs. 101/-" },
  { id: 4, donorName: "Shri. Vyankatrao V. Gaikwad", prizeName: "Late Vishwanathrao Gaikwad Prize", criteria: "1st in 12th Science Engineering Group", amount: "Rs. 101/-" },
  { id: 5, donorName: "Principal Nanasaheb Musande", prizeName: "Late Sidram Gunderrao Musande Prize", criteria: "1st in B.Sc. Degree Examination", amount: "Rs. 101/-" },
  { id: 6, donorName: "Ku. Shailaja Bhalchandra Birajdar", prizeName: "Late Bhalchandra Birajdar Prize", criteria: "1st in B.Sc. Biology Group", amount: "Rs. 151/-" },
  { id: 7, donorName: "Dr. S. B. Jogdand", prizeName: "Late Baburao Jogdand Prize", criteria: "Highest marks in Compulsory English", amount: "Rs. 101/-" },
  { id: 8, donorName: "Shri. Kirandada Chalukya", prizeName: "Late Shivrampant Chalukya (Patil) Prize", criteria: "Highest marks in B.A. 3rd Year Sociology", amount: "Rs. 101/-" },
  { id: 9, donorName: "Sau. Kamaladevi Panditराव More", prizeName: "Late Ranjeet More Prize", criteria: "Highest marks in 12th Science Chemistry", amount: "Rs. 101/-" },
  { id: 10, donorName: "Shri. V. N. Jadhav (Dy. SP Omerga)", prizeName: "Late Ku. Chandrakala Limbajirao Jadhav Prize", criteria: "Highest marks in 12th Examination by female student", amount: "Rs. 101/-" },
  { id: 11, donorName: "Shri. V. N. Jadhav (Dy. SP Omerga)", prizeName: "Swa. Sainik Late Nivrutti Limbajirao Jadhav Prize", criteria: "Highest marks in 12th Examination by female student", amount: "Rs. 101/-" },
  { id: 12, donorName: "Shri. Khanderao Gurav (Makanikar)", prizeName: "Late Ramrao Hanmantrao Gurav Prize", criteria: "1st in 12th Arts Political Science", amount: "Rs. 101/-" },
  { id: 13, donorName: "Shri. Panditrao Ramrao Pawar (Bhuyar Chincholi)", prizeName: "Merit Award", criteria: "Highest marks in Marathi across 12th Arts, Science, Commerce", amount: "Rs. 101/-" },
  { id: 14, donorName: "Shri. Sanjay Pralhad Jadhav (Omerga)", prizeName: "Late Kiran Nivruttirao Jadhav Prize", criteria: "1st in B.Sc. 3rd Year Chemistry", amount: "Rs. 151/-" },
  { id: 15, donorName: "Omerga Youth Hostel (President Dr. Manikraoji Alangekar)", prizeName: "Omerga Youth Hostel Prize", criteria: "1st in B.Sc. Examination in Chemistry", amount: "Rs. 151/-" },
  { id: 16, donorName: "Shri. Ashte Kailas Bhanudas", prizeName: "Late Suresh Bhanudas Ashte Prize", criteria: "1st in General Knowledge Test in Junior College", amount: "Rs. 101/-" },
  { id: 17, donorName: "Shri. Anand Ambadas Pawar (Nae. Talni)", prizeName: "Late Limbaji Ramji Pawar Prize", criteria: "1st in General Knowledge Test in Junior College", amount: "Rs. 101/-" },
  { id: 18, donorName: "Dr. Shri S. A. Wadikar (Ex-Principal)", prizeName: "Shridhar Financial Assistance Scheme", criteria: "Poor and deserving female students in Commerce faculty", amount: "Rs. 300/- per month" },
  { id: 19, donorName: "Prof. Ajay Shridharrao More", prizeName: "Late Shridharrao More Prize", criteria: "1st in B.A. Examination", amount: "Rs. 151/-" },
  { id: 20, donorName: "Prof. Ajay Shridharrao More", prizeName: "Late Smt. Tarabai More Prize", criteria: "1st in B.Sc. Examination", amount: "Rs. 151/-" },
  { id: 21, donorName: "Prof. Anand Ambadas Pawar (Dy. Insp. Talni)", prizeName: "Late Limbaji Ramji Pawar Prize", criteria: "1st in General Knowledge Test in Senior College", amount: "Rs. 101/-" },
  { id: 22, donorName: "Prof. Vyankatesh Rankhamb", prizeName: "Late Matoshree Anusayabai Rankhamb Prize", criteria: "1st in B.A. Examination", amount: "Rs. 151/-" },
  { id: 23, donorName: "Shri. Balaji Sopanrao Jadhav (Sah-Shikshak)", prizeName: "Rajai Memorial Prize", criteria: "1st in 12th English subject", amount: "Rs. 101/-" },
  { id: 24, donorName: "Prof. S. R. Nirgude", prizeName: "Academic Excellence Prize", criteria: "1st in B.Sc. 3rd Year Physics", amount: "Rs. 201/-" },
  { id: 25, donorName: "Smt. Andhare Mahananda Navnath", prizeName: "Late Prof. Navnath Raghunath Andhare Prize", criteria: "1st in B.Sc. 3rd Year Industrial Chemistry", amount: "Rs. 151/-" },
  { id: 26, donorName: "Sau. Meera Suryakant Wadikar", prizeName: "Merit Award", criteria: "1st in 12th History subject", amount: "Rs. 201/-" },
  { id: 27, donorName: "Prof. V. S. Rankhamb", prizeName: "In memory of Late Tatyaraoji (Aaba) More", criteria: "Ideal Employee Award (आदर्श कर्मचारी पुरस्कार) with citation", amount: "Rs. 1,111/-" },
  { id: 28, donorName: "Smt. Prabhavati Mohanrao Kadam", prizeName: "Shikshan Maharshi Tatyaraoji Disabled & Meritorious Scholarship", criteria: "For physically challenged and meritorious students", amount: "Rs. 1,111/-" },
  { id: 29, donorName: "Prof. A. V. Ingale", prizeName: "Vyankatrao Ingale Prize", criteria: "1st in 12th Sociology subject", amount: "Rs. 400/-" }
];

// Institutional Facilities & Infrastructural Assets (Pages 41-48)
export const COLLEGE_FACILITIES = [
  {
    id: "fac-lib",
    title: "Central Library & Night Study Hall",
    marathiTitle: "मध्यवर्ती ग्रंथालय व रात्र अभ्यासिका",
    icon: "BookOpen",
    stats: "1,17,397 Books · 34 Journals & Periodicals · 12 Daily Newspapers",
    description: "Equipped with Dr. Vijay Bhatkar's ETH Library Automation Software, OPAC Search System, Internet Access Hub, Book Bank, and separate Boys and Girls Reading Rooms. Night Reading Room operates until 12:00 Midnight.",
    hours: "Mon - Sat: 6:00 AM - 11:30 PM (Till 12:00 Midnight during exams)"
  },
  {
    id: "fac-crfc",
    title: "Common Research Facility Center (CRFC)",
    marathiTitle: "कॉमन रिसर्च फॅसिलिटी सेंटर",
    icon: "Microscope",
    stats: "Established 2010 · High-End Characterization Instruments",
    description: "Inaugurated by Hon. Ashokrao Chavan, CRFC provides cutting-edge characterization tools including X-Ray Diffractometer (XRD), Fourier Transform Infrared Spectrophotometer (FTIR), UV-Visible Spectrophotometer, and Resistivity Measurement setup.",
    features: ["XRD", "FTIR", "UV-Vis Spectrophotometer", "AC/DC Resistivity", "Centrifuge", "High-Vacuum Pumps"]
  },
  {
    id: "fac-rac",
    title: "ICICI Foundation RAC Laboratory",
    marathiTitle: "आयसीआयसीआय फाउंडेशन रेफ्रिजरेटर व एसी रिपेअर्स लॅब",
    icon: "Cpu",
    stats: "100% Placement & Self-Employment Oriented · 6-Month Course",
    description: "State-of-the-art laboratory sponsored by ICICI Foundation. Features advanced simulator systems, deep freezers, water coolers, window AC, and modern VRF (Variable Refrigerant Flow) AC technology training.",
    features: ["Hands-on Simulator Lab", "4 Months Training + 2 Months Paid Internship", "Seed Capital Assistance"]
  },
  {
    id: "fac-career-katta",
    title: "Career Katta & Center of Excellence",
    marathiTitle: "करिअर कट्टा व सेंटर ऑफ एक्सलन्स",
    icon: "Award",
    stats: "Govt of Maharashtra Higher & Tech Education Initiative · Code: C34650",
    description: "Provides 1000 days of access to competitive exam coaching (UPSC, MPSC, Banking, SSC, Police Bharti), skill modules, and psychological aptitude tests with interactive digital panels.",
    helpline: "75076 52555"
  },
  {
    id: "fac-police-acad",
    title: "Police & Military Pre-Recruitment Academy",
    marathiTitle: "पोलीस व सैन्य भरती पूर्व प्रशिक्षण अकॅडमी",
    icon: "ShieldAlert",
    stats: "120 Seats · Daily Physical Ground Drills & Written Exam Prep",
    description: "Trained by retired military ex-servicemen, offering rigorous ground physical drills (running, shot put, pull-ups) and regular written exam mock series."
  },
  {
    id: "fac-soil",
    title: "Mati Parikshan Kendra (Soil Testing Lab)",
    marathiTitle: "माती परीक्षण केंद्र (खोली क्र. १३, बॉटनिकल गार्डन)",
    icon: "Leaf",
    stats: "IQAC & Water Literacy Sponsored · Free Service for Farmers",
    description: "Run by the Geography Department in the Botanical Garden. Provides scientific soil analysis, pH testing, and nutrient recommendations to regional farmers free of charge.",
    contact: "Dr. D. S. Itle (HOD Geography) - 9850619733"
  },
  {
    id: "fac-scsc-ice",
    title: "SCSC-ICE Incubation Center for Entrepreneurs",
    marathiTitle: "इन्क्युबेशन सेंटर फॉर आंत्रप्रेन्युअर्स",
    icon: "Zap",
    stats: "Established 2018-19 by Commerce Department",
    description: "Nurtures grassroots innovative ideas and startups across Commerce, Chemistry, Electronics, Zoology, and Computer Science departments into viable rural business ventures."
  },
  {
    id: "fac-language-lab",
    title: "Modern Digital Language Lab",
    marathiTitle: "डिजिटल भाषा भवन व लॅब",
    icon: "Languages",
    stats: "30 Multimedia Computer Workstations",
    description: "Fosters English, Hindi, and Marathi pronunciation, grammar, accent neutralization, and communication skills using interactive linguistic software."
  },
  {
    id: "fac-sports",
    title: "Sports Complex & Gymnasium",
    marathiTitle: "क्रीडा विभाग व व्यायामशाळा",
    icon: "Trophy",
    stats: "Spacious Playgrounds · Multi-Gym Facilities",
    description: "Excellent training infrastructure for Wrestling, Kabaddi, Kho-Kho, Volleyball, Basketball, Athletics, Cricket, and Table Tennis with university champions."
  },
  {
    id: "fac-ncc-nss",
    title: "NCC & NSS Units",
    marathiTitle: "एन.सी.सी. व एन.एस.एस.",
    icon: "Users",
    stats: "NCC: 54 Cadets · NSS: 400 Volunteers (100 Jr + 300 Sr)",
    description: "National Cadet Corps unit and National Service Scheme conducting village camps, tree plantation, blood donation drives, and disaster relief activities."
  }
];

// NISM E-Learning Course Bundles (Pages 60-61)
export const NISM_BUNDLES = [
  {
    bundleName: "Smart Start (Bundle 1)",
    tagline: "Personal Finance Essentials: Build a Solid Foundation",
    courses: ["Financial Literacy Course for Bharat (FLCB)", "Financial Planning (Basic) (SDM)", "Financial Planning (Advanced) (SDM)"],
    credits: 2,
    hours: 30,
    fee: "Rs. 1,000/- + GST"
  },
  {
    bundleName: "Wealth Way (Bundle 2)",
    tagline: "Mutual Funds & Markets Entry Kit: Learn back-office broking",
    courses: ["Financial Literacy Course for Bharat (FLCB)", "Mutual Funds (Basic) (SDM)", "Broking Operations Management (BOM) (SDM)"],
    credits: 2,
    hours: 31,
    fee: "Rs. 1,000/- + GST"
  },
  {
    bundleName: "Market Basics (Bundle 3)",
    tagline: "Unlocking India's Capital Markets: Introductory gateway",
    courses: ["Financial Literacy Course for Bharat (FLCB)", "Securities Market Primer (SMP)"],
    credits: 2,
    hours: 31,
    fee: "Rs. 1,500/- + GST"
  },
  {
    bundleName: "Derivative X (Bundle 4)",
    tagline: "Equity Derivatives Mastery Track: Master world of derivatives",
    courses: ["Financial Literacy Course for Bharat (FLCB)", "Equity Derivatives (Basic)", "Equity Derivatives (Advanced)"],
    credits: 2,
    hours: 31,
    fee: "Rs. 2,700/- + GST"
  },
  {
    bundleName: "Career-Ready Finance Program (Bundle 5)",
    tagline: "Basic to Advance training in Planning, SMP & Derivatives",
    courses: ["Financial Planning (Basic & Adv)", "Mutual Funds (Basic)", "Securities Market Primer", "Equity Derivatives"],
    credits: 2,
    hours: 30,
    fee: "Rs. 5,700/- + GST"
  },
  {
    bundleName: "Fin Pro+ Advanced Pack",
    tagline: "Certified Anti-Money Laundering Manager (CALM)",
    courses: ["Certified Anti-Money Laundering Manager (CALM) - 6 Month Access"],
    credits: 2,
    hours: 60,
    fee: "Rs. 9,000/- + GST"
  }
];
