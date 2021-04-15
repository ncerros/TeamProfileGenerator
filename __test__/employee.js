const Employee = require("../lib/Employee");

test("Instantiate Employee instance", () => {
    const staff = new Employee();
    expect(typeof(staff)).toBe("object");
});

test("Create name via constructor arguments", () => {
    const name = "John";
    const staff = new Employee(name);
    expect(staff.name).toBe(name);
});

test("Create id via constructor argument", () => {
    const testValue = 100;
    const staff = new Employee("Tom", testValue);
    expect(staff.id).toBe(testValue);
});

test("Create email via constructor argument", () => {
    const testValue = "test@test.com";
    const staff = new Employee("Tom", 1, testValue);
    expect(staff.email).toBe(testValue);
});

test("Get name via getName()", () => {
    const testValue = "John";
    const staff = new Employee(testValue);
    expect(staff.getName()).toBe(testValue);
});

test("Get id via getId()", () => {
    const testValue = 100;
    const staff  = new Employee("Tom", testValue);
    expect(staff.getId()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const staff = new Employee("John", 1, "test@test.com");
    expect(staff.getRole()).toBe(testValue);
});

test("Get email via getEmail()", () => {
    const testValue = "test@test.com";
    const staff = new Employee("Tom", 1, testValue);
    expect(staff.getEmail()).toBe(testValue);
});

