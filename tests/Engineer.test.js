const Engineer = require('../lib/Engineer');

describe("Employee", () => {
    
    it("The name of the engineer should be returned", () => {
        const name = "Michelle";
        const result = new Engineer("Michelle").name;
        expect(result).toEqual(name);
    })

    it("The ID number of the engineer should be returned", () => {
        const identification = 105;
        const result = new Engineer("test", 105).id;
        expect(result).toEqual(identification);
    })

    it("The email address of the engineer should be returned", () => {
        const emailAddress = "mich8poppy@gmail.com";
        const result = new Engineer("test", 1, "mich8poppy@gmail.com").email;
        expect(result).toEqual(emailAddress);
    })

    it("The role/position of the manager should be returned", () => {
        const position = "Engineer";
        const result = new Engineer("test", 1, "test", "Engineer").role;
        expect(result).toEqual(position);
    })

    it("The office number of the manager should be returned", () => {
        const githubName = "michelleTheCoder";
        const result = new Engineer("test", 1, "test", "test", "michelleTheCoder").github;
        expect(result).toEqual(githubName);
    })

})
