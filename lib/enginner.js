// The Engineer class would be defined
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
}
// Defining the prototype for the Engineer
    Engineer.prototype.getGithub = function () {
        return this.github;
    }
    Engineer.prototype.getRole = function () {
        return 'Engineer';
    }

// Node module export
module.exports = Engineer;