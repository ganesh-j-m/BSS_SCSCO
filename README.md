# SC(S)CO Digital Campus — Complete Production Website + ERP + Portals

**Official Portal for Shri Chhatrapati Shivaji Mahavidyalaya, Omerga (श्री छत्रपती शिवाजी महाविद्यालय, उमरगा)**  
*Run by Bharat Shikshan Sanstha, Omerga, Dist. Dharashiv - 413606 (Maharashtra)*  
*Affiliated to Dr. Babasaheb Ambedkar Marathwada University, Chhatrapati Sambhajinagar*  
*NAAC Re-accreditation: 'A' Grade (CGPA 3.14 on 4.0 scale, 3rd Cycle, Valid up to June 20, 2027)*  
*AAA Audit Grade: 'A' (Total Marks: 263/300)*  
*College Code: C34650 | Phone: (02475) 252020 | Website: www.scsco.org.in*  

---

## 1. Primary Source of Truth
All official institutional information, administrative hierarchy, faculty rosters, fee schedules, scholarship criteria, endowment prizes, and facility statistics were extracted directly from the official 64-page prospectus:

📄 **`2026-27-1.pdf`**

See [`docs/OFFICIAL-DATA-SOURCE.md`](docs/OFFICIAL-DATA-SOURCE.md) for full page-by-page mapping and provenance.

---

## 2. Technology Stack & Design System
- **Framework:** Next.js / React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS (v4) with Custom Institutional Tokens
- **Typography:** **Poppins** (400, 500, 600, 700) from Google Fonts applied across all public pages and portals
- **Database & ORM:** PostgreSQL + Prisma ORM (`prisma/schema.prisma`)
- **Icons:** Lucide React
- **Animations:** Motion
- **Architecture:** Modular Monolith with Server-Side RBAC

---

## 3. Portals & Access Control (RBAC)

The system includes 6 role-based interfaces with instant role switching:

1. **Public College Website:** Home, About, History (1941/1959), Leadership (21-member Karyakari Mandal), Administrative Setup, 20 Departments, Courses (Junior, UG, PG, Ph.D.), Faculty & Staff directories, Admissions 2026-27, Fee Schedules, 15 Scholarships, 29 Endowment Prizes, Facilities (Central Library, CRFC, RAC Lab, Soil Testing Lab, Career Katta, Incubation Center).
2. **Student Academic Portal (`/student`):** Profile, Digital Student ID Card with QR code, attendance tracker (88.4%), fee payment & downloadable receipt `#SCSCO-REC-2026-8921`, marks & results, issued library books, assignment submissions, grievance box.
3. **Parent Portal (`/parent`):** Ward progress monitor (Aniket More), attendance alert, academic marks, tuition fee tracker, direct communication with class teacher (Dr. V. S. Suryawanshi).
4. **Teacher Portal (`/teacher`):** Class attendance taking (Manual checklist & dynamic QR code generation), internal assessment marks entry, assignment posting, study material uploads.
5. **Principal Command Center (`/principal`):** Institutional KPI command center, pass rate trends, fee collection status, campus-wide circular broadcasts.
6. **SuperAdmin Control Center (`/superadmin`):** Full CMS for people and staff, portrait photo upload/URL management, notice management, digital certificate generation, system audit logs, institutional settings.
7. **Certificate Verification Portal (`/verify`):** Public validation of digital certificates and degrees (Try `SCSCO-2026-BCS-089` or `VER-9821-XKQ7`).
8. **AI College Assistant Desk (`/ai-assistant`):** Prospectus-grounded intelligent Q&A answering official college queries.

---

## 4. Demo Login Credentials

| Role | Name | Email | Password |
|---|---|---|---|
| **SuperAdmin** | Central System Administrator | `superadmin@scsco.edu.in` | `Admin@SCSCO2026` |
| **Principal** | Dr. Sanjay Namdev Aswale | `principal_scsco@rediffmail.com` | `Principal@SCSCO2026` |
| **Teacher** | Dr. V. S. Suryawanshi (HOD Chemistry) | `prof.suryawanshi@scsco.edu.in` | `Teacher@SCSCO2026` |
| **Student** | Aniket Balasaheb More (BCS Sem IV) | `student.aniket@scsco.edu.in` | `Student@SCSCO2026` |
| **Parent** | Balasaheb Shivram More | `parent.balasaheb@scsco.edu.in` | `Parent@SCSCO2026` |
| **Staff** | Shri. R. B. Sonwane (Registrar) | `registrar@scsco.edu.in` | `Staff@SCSCO2026` |

*Note: You can also switch roles anytime with a single click using the "Role" switcher in the top navigation bar.*

---

## 5. Quick Start & Execution

```bash
# 1. Install dependencies
npm install

# 2. Setup environment variables
cp .env.example .env

# 3. Generate Prisma client & Seed official records
npm run db:generate
npm run db:seed

# 4. Start development server
npm run dev

# 5. Run tests & production build
npm run test
npm run build
```

---

## 6. Deliverable Archive

To download the complete sanitized project package, visit the **"Download ZIP"** tab in the top navigation bar or trigger `SC(S)CO-Digital-Campus.zip`.
