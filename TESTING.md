# Testing Specifications & Test Suites

The test suite covers:
1. **Official Data Integrity:** Verifies that all 21 executive committee members, administrative heads, and faculty members from `2026-27-1.pdf` exist with correct titles and contact phone numbers.
2. **Photo Placeholder Rule:** Asserts that when a person has `photoUrl = null`, the system displays a placeholder with initials rather than a fabricated photo.
3. **Fee Calculation:** Asserts that fees match the exact figures in Pages 35 & 36 of the prospectus.
4. **Certificate Verification:** Asserts that `/verify` returns valid metadata for authentic certificates and rejects invalid codes.
5. **Role-Based Access Control:** Validates role boundaries between Student, Parent, Teacher, Principal, and SuperAdmin.

---

## Running Tests

```bash
# Run TypeScript compilation and validation tests
npm run lint
npm run test
```
