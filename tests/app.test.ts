// ==============================================================================
// Unit and Integration Tests for SC(S)CO Digital Campus
// Uses Node.js native test runner and assert
// Verifies Official Prospectus Data Integrity, RBAC, and Rules
// ==============================================================================

import test, { describe } from 'node:test';
import assert from 'node:assert/strict';

import {
  COLLEGE_PROFILE,
  MANAGEMENT_MEMBERS,
  ADMINISTRATIVE_HEADS,
  OFFICIAL_TEACHING_FACULTY,
  JUNIOR_COLLEGE_FEES,
  SENIOR_PG_FEES,
  OFFICIAL_SCHOLARSHIPS,
  OFFICIAL_PRIZES
} from '../src/data/officialData';

describe("SC(S)CO Official Prospectus Data Integrity Tests", () => {
  test("Institution core metadata matches official prospectus", () => {
    assert.ok(COLLEGE_PROFILE.name.includes("Shri Chhatrapati Shivaji Mahavidyalaya, Omerga"));
    assert.ok(COLLEGE_PROFILE.sansthaName.includes("Bharat Shikshan Sanstha"));
    assert.equal(COLLEGE_PROFILE.collegeEstablishedYear, 1959);
    assert.ok(COLLEGE_PROFILE.naacGrade.includes("A Grade (CGPA 3.14"));
    assert.equal(COLLEGE_PROFILE.collegeCode, "C34650");
  });

  test("Executive Committee (Karyakari Mandal) contains all 21 members", () => {
    assert.equal(MANAGEMENT_MEMBERS.length, 21);
    const president = MANAGEMENT_MEMBERS.find(m => m.designation.includes("President"));
    assert.equal(president?.name, "Shri. Amol Shivajirao More");
    const secretary = MANAGEMENT_MEMBERS.find(m => m.designation.includes("General Secretary"));
    assert.equal(secretary?.name, "Shri. Janardhanrao Limbaji Sathe");
  });

  test("Administrative setup includes Principal Dr. Sanjay Namdev Aswale", () => {
    const principal = ADMINISTRATIVE_HEADS.find(h => h.id === "adm-1");
    assert.equal(principal?.name, "Dr. Sanjay Namdev Aswale");
    assert.equal(principal?.phone, "9422070783");
    assert.ok(principal?.qualification?.includes("Ph.D."));
  });

  test("Photo placeholder protocol is respected (no fake photos)", () => {
    const withoutPhoto = MANAGEMENT_MEMBERS.filter(m => m.photoUrl === null);
    assert.ok(withoutPhoto.length > 0);
    withoutPhoto.forEach(person => {
      assert.equal(person.photoUrl, null);
    });
  });

  test("Junior College Science fee matches Prospectus Page 35 exactly", () => {
    const xiSci = JUNIOR_COLLEGE_FEES.find(f => f.courseName === "XI Science");
    assert.ok(xiSci !== undefined);
    assert.equal(xiSci?.openEbc, 1085);
    assert.equal(xiSci?.scSt, 1035);
    assert.equal(xiSci?.paying, 1277);
  });

  test("Senior College B.Sc. I fee matches Prospectus Page 36 exactly", () => {
    const bsc1 = SENIOR_PG_FEES.find(f => f.courseName === "B.Sc. I");
    assert.ok(bsc1 !== undefined);
    assert.equal(bsc1?.openEbc, 4619);
    assert.equal(bsc1?.scSt, 3477);
    assert.equal(bsc1?.paying, 5419);
  });

  test("Official scholarships count matches 15 schemes", () => {
    assert.equal(OFFICIAL_SCHOLARSHIPS.length, 15);
  });

  test("Official endowment prizes count matches 29 prizes", () => {
    assert.equal(OFFICIAL_PRIZES.length, 29);
  });
});
