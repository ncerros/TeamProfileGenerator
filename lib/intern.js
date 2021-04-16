// The intern class would be defined
const Employee = require("./employee")

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
        
    }
}
// Defining the prototype for the intern
    Intern.prototype.getSchool = function () {
        return this.school;
    }

    Intern.prototype.getRole = function () {
        return this.title;
    }

// Node module export
module.exports = Intern