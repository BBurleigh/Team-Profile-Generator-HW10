const Intern = require("../lib/Intern");

describe("Intern", () => {
    
    it("The name of the intern should be returned", () => {
        const name = "Michelle";
        const result = new Intern("Michelle").name;
        expect(result).toEqual(name);
    })

    it("The ID number of the intern should be returned", () => {
        const identification = 105;
        const result = new Intern("test", 105).id;
        expect(result).toEqual(identification);
    })

    it("The email address of the intern should be returned", () => {
        const emailAddress = "mich8poppy@gmail.com";
        const result = new Intern("test", 1, "mich8poppy@gmail.com").email;
        expect(result).toEqual(emailAddress);
    })

    it("The role/position of the intern should be returned", () => {
        const position = "Intern";
        const result = new Intern("test", 1, "test", "Intern").role;
        expect(result).toEqual(position);
    })

    it("The office number of the intern should be returned", () => {
        const college = "University of Poppy";
        const result = new Intern("test", 1, "test", "test", "University of Poppy").school;
        expect(result).toEqual(college);
    })

})
