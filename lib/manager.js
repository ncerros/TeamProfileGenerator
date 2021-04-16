// The manager class would be defined
const Employee = require("./employee")


class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super (name, id, email)
        this.officeNumber = officeNumber
    }
    }
    // defining the prototype for the manager
    Manager.prototype.getOfficeNumber = function () {
        return this.getOfficeNumber;
    }

    Manager.prototype.getRole = function () {
        return "manager";
    }

// Node module export
module.exports = Manager