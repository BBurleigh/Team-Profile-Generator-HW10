const Employee = require("../lib/Employee");

describe("Employee", () => {
    
    it("The name of the employee should be returned", () => {
        const name = "Michelle";
        const result = new Employee("Michelle").name;
        expect(result).toEqual(name);
    })

    it("The ID number of the employee should be returned", () => {
        const identification = 105;
        const result = new Employee("test", 105).id;
        expect(result).toEqual(identification);
    })

    it("The email address of the employee should be returned", () => {
        const emailAddress = "mich8poppy@gmail.com";
        const result = new Employee("test", 1, "mich8poppy@gmail.com").email;
        expect(result).toEqual(emailAddress);
    })

    it("The role/position of the employee should be returned", () => {
        const position = "Manager";
        const result = new Employee("test", 1, "test", "Manager").role;
        expect(result).toEqual(position);
    })

})
