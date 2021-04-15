const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Create office number via constructor argument", () => {
  const testValue = 100;
  const staff = new Manager("Tom", 1, "test@test.com", testValue);
  expect(staff.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const staff = new Manager("Tom", 1, "test@test.com", 100);
  expect(staff.getRole()).toBe(testValue);
});

test("Get office number via getOffice()", () => {
  const testValue = 100;
  const staff = new Manager("Tom", 1, "test@test.com", testValue);
  expect(staff.getOfficeNumber()).toBe(testValue);
});