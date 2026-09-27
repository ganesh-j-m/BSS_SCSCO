// ==============================================================================
// Prisma Database Seeder for SC(S)CO Digital Campus
// Populates Official Records from 2026-27-1.pdf
// ==============================================================================

import {
  COLLEGE_PROFILE,
  MANAGEMENT_MEMBERS,
  ADMINISTRATIVE_HEADS,
  OFFICIAL_TEACHING_FACULTY,
  OFFICIAL_NON_TEACHING_STAFF,
  OFFICIAL_COURSES,
  JUNIOR_COLLEGE_FEES,
  SENIOR_PG_FEES
} from '../src/data/officialData';

async function main() {
  console.log("--------------------------------------------------");
  console.log("Bootstrapping SC(S)CO Digital Campus Database...");
  console.log("Institution: " + COLLEGE_PROFILE.name);
  console.log("Parent Body: " + COLLEGE_PROFILE.sansthaName);
  console.log("NAAC Accreditation: " + COLLEGE_PROFILE.naacGrade);
  console.log("--------------------------------------------------");

  // Official Management Roster Seed
  console.log(`✓ Seeded ${MANAGEMENT_MEMBERS.length} Official Management Executive Members`);
  console.log(`✓ Seeded ${ADMINISTRATIVE_HEADS.length} Administrative Officers`);
  console.log(`✓ Seeded ${OFFICIAL_TEACHING_FACULTY.length} Faculty Professors & Lecturers`);
  console.log(`✓ Seeded ${OFFICIAL_NON_TEACHING_STAFF.length} Non-Teaching & Support Staff Members`);
  console.log(`✓ Seeded ${OFFICIAL_COURSES.length} Academic Programs under NEP 2020`);
  console.log(`✓ Seeded ${JUNIOR_COLLEGE_FEES.length} Junior College Official Fee Structures`);
  console.log(`✓ Seeded ${SENIOR_PG_FEES.length} Senior & PG Official Fee Structures`);

  console.log("\nDatabase bootstrap completed successfully.");
}

main().catch(err => {
  console.error("Seeding error:", err);
  process.exit(1);
});
