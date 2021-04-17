// The employee class would be defined
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

// Defining the prototype for the employee
   getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole () {
        return this.constructor.name;
    }
}   

// Node module export
module.exports = Employee;