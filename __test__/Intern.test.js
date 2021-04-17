const Intern = require("../lib/Intern");

test("Create school via constructor", () => {
  const testValue = "SMU";
  const e = new Intern("Tom", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Tom", 1, "test@test.com", "SMU");
  expect(e.getRole()).toBe(testValue);
});

test("Get school via getSchool()", () => {
  const testValue = "SMU";
  const e = new Intern("Tom", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});