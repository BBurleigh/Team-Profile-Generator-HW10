const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;