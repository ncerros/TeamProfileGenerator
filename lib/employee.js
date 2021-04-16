// The employee class would be defined
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}
// Defining the prototype for the employee
    Employee.prototype.getName = function () {
        return this.name;
    }
    Employee.prototype.getId = function() {
        return this.id;
    }
    Employee.prototype.getEmail = function() {
        return this.email;
    }
    Employee.prototype.getRole = function() {
        return "Employee";
    }

// Node module export
module.exports = Employee;