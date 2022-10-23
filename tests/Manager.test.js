const Manager = require("../lib/Manager");

describe("Manager", () => {
    
    it("The name of the manager should be returned", () => {
        const name = "Michelle";
        const result = new Manager("Michelle").name;
        expect(result).toEqual(name);
    })

    it("The ID number of the manager should be returned", () => {
        const identification = 105;
        const result = new Manager("test", 105).id;
        expect(result).toEqual(identification);
    })

    it("The email address of the manager should be returned", () => {
        const emailAddress = "mich8poppy@gmail.com";
        const result = new Manager("test", 1, "mich8poppy@gmail.com").email;
        expect(result).toEqual(emailAddress);
    })

    it("The role/position of the manager should be returned", () => {
        const position = "Manager";
        const result = new Manager("test", 1, "test", "Manager").role;
        expect(result).toEqual(position);
    })

    it("The office number of the manager should be returned", () => {
        const office = 1015;
        const result = new Manager("test", 1, "test", "test", 1015).officeNumber;
        expect(result).toEqual(office);
    })

})
