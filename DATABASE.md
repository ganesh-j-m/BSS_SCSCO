# Database Design & Schema Documentation

The database architecture is designed for PostgreSQL using Prisma ORM. It establishes a relational, normalized model supporting academic governance, role-based access, attendance, fees, continuous assessment, and digital certificate verification.

---

## 1. Core Entity Relationship Summary

```
[User] 1 ──── 0..1 [Student] 1 ──── * [AttendanceRecord]
  │                     │
  │                     ├────── * [MarksRecord]
  │                     ├────── * [FeePayment]
  │                     └────── * [Certificate]
  │
  ├────── 0..1 [Teacher] 1 ──── * [Department]
  ├────── 0..1 [Parent]  1 ──── * [Student]
  └────── 0..1 [Staff]
```

---

## 2. Key Relational Tables

### `Person`
Stores all official management members, administrative officers, senior/junior faculty, and non-teaching personnel.
- `id` (UUID, Primary Key)
- `name` (String, English full name)
- `marathiName` (String, Marathi script title)
- `designation` (String)
- `roleCategory` (`management`, `administration`, `teaching_senior`, `teaching_junior`, `non_teaching`)
- `department` (String, nullable)
- `qualification` (String, degrees, NET, SET, Ph.D.)
- `phone` (String, official phone number from prospectus)
- `email` (String, official email)
- `photoUrl` (Text, nullable - displays placeholder if null)
- `biography` (Text)
- `displayOrder` (Int)
- `isActive` (Boolean, default true)

### `Course` & `Subject`
- `Course`: Programs offered (Junior Science/Commerce/Arts/MCVC, B.A., B.Sc., B.Com., BCS, B.Sc. IT, M.A., M.Com., M.Sc., Ph.D.) with approved intake capacity, duration, eligibility, and NEP 2020 compliance flag.
- `Subject`: Subject mappings with credits (4 credits default, 44 credits per academic year).

### `FeeStructure` & `FeePayment`
- Exact fee schedule matching Pages 35 & 36 of prospectus:
  - `openEbc`: Concessional fee for Open/EBC students
  - `scSt`: Fee for SC & ST students under GOI scholarship
  - `obcSeber`: Fee for OBC / NT / SEBC categories
  - `paying`: Full un-concessioned fee for students without scholarship forms
- `FeePayment`: Records payment date, receipt number, mode, and student reference.

### `Certificate`
- Stores issued academic credentials, character certificates, and merit awards.
- `certificateNumber` (Unique String, e.g. `SCSCO-2026-BCS-089`)
- `verificationCode` (Unique String, e.g. `VER-9821-XKQ7`)
- `isValid` (Boolean, can be revoked if fraudulent)
- Direct public verification lookup available at `/verify`.

### `AuditLog`
- Complete chronological ledger of all CMS updates (adds, edits, photo changes, notice deletions) for compliance.
