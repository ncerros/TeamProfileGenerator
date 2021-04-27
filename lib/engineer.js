// The Engineer class would be defined
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

// Defining the prototype for the Engineer
    getGithub() {
        return this.github;
    }
    
}

// Node module export
module.exports = Engineer;