const Engineer = require("../lib/Engineer");

test("Can create GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const staff = new Engineer("Tom", 1, "test@test.com", testValue);
  expect(staff.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const staff = new Engineer("Tom", 1, "test@test.com", "GitHubUser");
  expect(staff.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const staff = new Engineer("Tom", 1, "test@test.com", testValue);
  expect(staff.getGithub()).toBe(testValue);
});