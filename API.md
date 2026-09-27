# REST & Server Action API Specifications

The SC(S)CO Digital Campus platform provides RESTful API endpoints and React Context actions for public consumers and authorized campus members.

---

## 1. Public Endpoints

### `GET /api/v1/college/profile`
Returns institutional metadata, affiliation with Dr. BAMU, NAAC grade (A, CGPA 3.14), campus size (30 acres), and contact info.

### `GET /api/v1/people`
Returns all verified management, faculty, and staff members.
- Query parameters: `roleCategory` (`management`, `teaching_senior`, `teaching_junior`, `non_teaching`), `department`, `search`.

### `GET /api/v1/courses`
Returns all approved Junior, UG, PG, and Ph.D. programs with approved intake and NEP 2020 status.

### `GET /api/v1/fees`
Returns official fee tables for Junior College (Page 35) and Senior & PG College (Page 36).

### `GET /api/v1/certificates/verify/:certificateNumber`
Validates a digital certificate by number or verification code.
- Response: Status 200 with student name, course, issue date, grade, and validity flag.

---

## 2. Authenticated Endpoints

### `POST /api/v1/attendance/mark`
(Authorized Role: `TEACHER`, `SUPER_ADMIN`)  
Submits class attendance checklist or registers student QR scan.

### `POST /api/v1/fees/pay`
(Authorized Role: `STUDENT`, `PARENT`, `SUPER_ADMIN`)  
Simulates online payment clearance and generates verified fee receipt `#SCSCO-REC-2026-XXXX`.

### `POST /api/v1/cms/people`
(Authorized Role: `SUPER_ADMIN`)  
Creates or updates faculty/staff record with portrait image upload or URL.

### `POST /api/v1/cms/notices`
(Authorized Role: `PRINCIPAL`, `SUPER_ADMIN`)  
Dispatches institutional circular to web notice board and role portals.
