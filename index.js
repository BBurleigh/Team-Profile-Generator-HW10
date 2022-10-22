const inquirer = require('inquirer');

const fs = require('fs');

const generateHTML = ({ name, location, github, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

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

// An additional setting - validation for the user to confirm if everything is correct or needs to be re-submitted

function init() {

    inquirer.prompt(questions)
    
    .then((answers) => {

        const employeeInfo = generateHTML(answers);
    
    fs.writeFile('index.html', employeeInfo, (err) => err ? console.log(err) : console.log('The README.md has been successfullygenerated.'))
        })
}

init();