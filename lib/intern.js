// The intern class would be defined
const Employee = require("./employee")

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        
    }

// Defining the prototype for the intern
    getSchool() {
        return this.school;
    }
}
// Node module export
module.exports = Intern