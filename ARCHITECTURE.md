# System Architecture & Technical Specifications

**Application:** SC(S)CO Digital Campus  
**Target Institution:** Shri Chhatrapati Shivaji Mahavidyalaya, Omerga (Bharat Shikshan Sanstha)  
**Architecture Pattern:** Modular Monolith with Role-Based Access Control (RBAC)  
**Frontend Framework:** React 19 + TypeScript + Tailwind CSS (v4) + Vite + Poppins Font System  
**Database & ORM:** PostgreSQL + Prisma ORM  

---

## 1. High-Level Modular Monolith Structure

```
SC(S)CO Digital Campus
│
├── Public Web Experience
│   ├── Home (Hero, Vision, Leadership, Highlights, Notices, Events)
│   ├── About (History 1941/1959, Goals, Objectives, Sanstha Branches)
│   ├── Leadership (21-member Karyakari Mandal, CDC, LMC)
│   ├── Administration (Principal, Vice Principals, Registrar, OS)
│   ├── Departments (20 Academic & Research Departments)
│   ├── Faculty & Staff Directories (with Photo Placeholder Discipline)
│   ├── Admissions 2026-27 (Eligibility, ABC ID, Online Registration)
│   ├── Fee Schedules (Interactive Junior & Senior College Tables)
│   ├── Scholarships (15 Government & Institutional Schemes)
│   ├── Endowments & Merit Prizes (29 Donor Awards)
│   ├── Specialized Centers (CRFC, ICICI RAC Lab, Soil Testing, Incubation)
│   ├── Career Katta (Code C34650, MPSC/UPSC, NISM Bundles)
│   └── Digital Certificate Verification (/verify)
│
├── Role-Based Campus Portals
│   ├── Student Portal (/student): ID Card, Attendance, Fees, Results, Books
│   ├── Parent Portal (/parent): Ward Progress, Fees, Attendance Alerts, Messages
│   ├── Teacher Portal (/teacher): QR Attendance, Internal Marks, Assignments
│   ├── Principal Command Center (/principal): Executive KPIs, Pass Rates, Broadcast
│   └── SuperAdmin Portal (/superadmin): Full CMS, People/Photo Upload, Audit Logs
│
├── AI Knowledge Engine
│   └── Grounded RAG Assistant querying official 64-page prospectus records
│
└── Data & Persistence Layer
    ├── Prisma Schema (PostgreSQL relational models)
    ├── LocalStorage State Synchronization with live CMS mutations
    └── Direct ZIP Exporter (SC(S)CO-Digital-Campus.zip)
```

---

## 2. Typographic Standard (Poppins)
In strict compliance with institutional requirements, the application utilizes the **Poppins** font family across the entire user experience:
- Regular (400) for body narrative and descriptions
- Medium (500) for navigation, buttons, and metadata labels
- SemiBold (600) for card titles, section headings, and table headers
- Bold (700) for primary headings and metric statistics

No random fonts or unstyled fallbacks are permitted.

---

## 3. Strict Photo Placeholder Protocol
In accordance with Rule 9:
- If a faculty or management person's portrait is not available from the official prospectus, **no fake image or AI face is rendered**.
- An institutional placeholder containing initials, role badge, and *"Photo Coming Soon"* is rendered.
- SuperAdmin has dedicated tools to upload real photographs (converted to Data URLs or external S3/Cloudinary URLs) at any time.
