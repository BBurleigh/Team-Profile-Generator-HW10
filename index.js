const inquirer = require('inquirer');

const fs = require('fs');

// Employee - name, id, email

const questions = [
    {
        type: 'input',
        message: 'Hello, employee of Francesca Enterprises. Please enter your preferred name.',
        name: 'name'
    },
    {
        type: 'input',
        message: 'We are excited to have you. What is your employee ID number?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Excellent. Please provide your preferred or most-used email.',
        name: 'email'
    },
    {
        type: 'list',
        message: 'We appreciate you providing us with this information. Next, select which role you have within Francesca Enterprises.',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        when: (answers) => {
            if (answers.role === 'Engineer') {
                return true;
            }
        },
        type: 'input',
         message: 'As an enginner of our company, please provide your GitHub username.',
         name: 'github'
        
    },
    {
        when: (answers) => {
            if (answers.role === 'Intern') {
                return true;
            }
        },
        type: 'input',
         message: 'As an intern, we value the new experiences and perspective that you bring to our company. From what university are you receiving your education (or have graduated from)?',
         name: 'school'
    },
    {
        when: (answers) => {
            if (answers.role === 'Manager') {
                return true;
            }
        },
        type: 'input',
         message: 'As a manager within our company, please provide your office room number.',
         name: 'officeNumber'
    }
]

// methods - getName(), getId(), getEmail(), and getRole() - returns 'Employee' or another role

// three classes extend from employee and include additional questions

// Manager - officeNumber and getRole() displays 'Manager'

// Engineer - github (GitHub username), getGithub(), and getRole() displays 'Engineer'

// Intern - school, getSchool(), and getRole() displays 'Intern'

// An additional setting - validation for the user to confirm if everything is correct or needs to be re-submitted

function init() {

    inquirer.prompt(questions)
    
    .then((answers) => {

        const employeeInfo = generateMarkdown(answers);
    
    fs.writeFile('index.html', employeeInfo, (err) => err ? console.log(err) : console.log('The README.md has been successfullygenerated.'))
        })
}

init();