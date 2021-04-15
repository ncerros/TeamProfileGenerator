const Intern = require("../lib/Intern");

test("Create school via constructor", () => {
  const testValue = "SMU";
  const staff = new Intern("Tom", 1, "test@test.com", testValue);
  expect(staff.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const staff = new Intern("Tom", 1, "test@test.com", "UCLA");
  expect(staff.getRole()).toBe(testValue);
});

test("Get school via getSchool()", () => {
  const testValue = "UCLA";
  const staff = new Intern("Tom", 1, "test@test.com", testValue);
  expect(staff.getSchool()).toBe(testValue);
});