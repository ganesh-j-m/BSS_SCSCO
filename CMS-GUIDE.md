# SuperAdmin CMS Operating Guide

## 1. Accessing the CMS
1. Click **"Role"** in the top navigation bar and select **"System SuperAdmin (CMS)"**.
2. Or navigate directly to the **SuperAdmin** tab in the main navigation.

---

## 2. Managing Faculty & Staff Records
1. Under **"People / Staff CMS"**, search for any person by name, subject, or role.
2. Click **"Edit / Photo"** on any record.
3. In the modal:
   - **Upload from Computer:** Click *"Choose Image File"* to upload an image from your device. It is instantly converted to an optimized high-resolution Data URL.
   - **Hosted Image URL:** Paste any S3, Cloudflare R2, or Cloudinary URL.
   - **Remove Photo:** Click *"Remove Photo"* to revert to the official institutional placeholder with initials.
   - **Update Details:** Modify qualifications, phone numbers, official email, or biography.
   - **Active Toggle:** Toggle whether the profile is displayed publicly on the website.
4. Click **"Save Profile Changes"**. The change is reflected immediately across all website views and logged in the System Audit Ledger.

---

## 3. Publishing Notices & Circulars
1. Select **"Notices CMS"**.
2. Enter the circular title, category (Admission, Academic, Exam, Scholarship, General), target audience (All, Students, Teachers, Parents), and content.
3. Check **"Pin to Top of Website"** if urgent.
4. Click **"Publish Notice"**.

---

## 4. Issuing Verifiable Digital Certificates
1. Select **"Issue Certificates"**.
2. Enter student name, course, certificate type (Degree, Transfer Certificate, Merit Award, etc.), and result grade.
3. Click **"Issue Digital Certificate"**.
4. The system assigns a unique Certificate Number and verification code that can be verified immediately by employers or students at `/verify`.
