# Security Architecture & Data Protection

**Institution:** Shri Chhatrapati Shivaji Mahavidyalaya, Omerga (SC(S)CO)  
**Standard:** Enterprise Academic ERP Security & RBAC Enforcement  

---

## 1. Role-Based Access Control (RBAC) Hierarchy

The system defines 6 discrete roles:
1. `SUPER_ADMIN`: Central IT and system management with full CRUD across all datasets, people photos, fee schedules, audit logs, and settings.
2. `PRINCIPAL`: Institutional command center, student/faculty analytics, grievance review, and emergency campus-wide circular broadcasts.
3. `TEACHER`: Class-level attendance recording, dynamic QR attendance generation, continuous internal assessment marks, assignments, and study materials.
4. `STUDENT`: Digital ID Card with QR code, personal attendance monitoring, online fee payment, marks/results view, library book ledger, and grievance box.
5. `PARENT`: Ward-specific monitoring, attendance threshold alerts (<75%), fee clearance alerts, and direct messaging to class mentor.
6. `STAFF`: Administrative records, office automation, fee receipt verification.
7. `GUEST`: Public access to official college website, departments, courses, faculty directories, and certificate verification.

---

## 2. Server-Side Authorization & Session Integrity
- **Role Verification:** Critical actions verify active user role prior to executing state mutations.
- **Data Scope Isolation:** A parent is strictly restricted to their linked ward's record; a student cannot view other students' financial or assessment records.
- **Audit Trails:** All sensitive actions (creating faculty, uploading photos, deleting notices, changing fee amounts) generate an immutable `AuditLog` entry.

---

## 3. Secret & Credential Sanitization
- Database connection strings, API tokens, and private keys reside strictly in environment variables.
- The repository and downloadable ZIP package contain only `.env.example` templates and zero production secrets.
