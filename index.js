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
        message: 'We are excited to have you. What is your employee ID number? If you are completing this for a team member, what is their ID?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Excellent. Please provide your preferred or most-used email. If you are filling this out for a team member, provide their preferred email.',
        name: 'email'
    },
    {
        type: 'list',
        message: 'We appreciate you providing us with this information. Next, select which role you or one of your team members has within Francesca Enterprises.',
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
         message: 'Since one of your team members is an engineer, please provide their GitHub username. We enjoy featuring both the company and personal projects of our engineers.',
         name: 'github'
        
    },
    {
        when: (answers) => {
            if (answers.role === 'Intern') {
                return true;
            }
        },
         type: 'input',
         message: 'Since one of your team members is an intern, please provide the university from where they graduated or are currently studying.',
         name: 'school'
    },
    {
        when: (answers) => {
            if (answers.role === 'Manager') {
                return true;
            }
        },
        type: 'input',
         message: 'As the manager of this time, we appreciate you taking the time to complete this information on the behalf of your team. What is your office number in the NYC sector of Francesca Enterprises?',
         name: 'officeNumber'
    },
    {
        type: 'list',
        message: 'Good job! You have updated either your information or one of your team members. Do you wish to add another team member?',
        name: 'addMember',
        choices: [
            {key: 'Yes, add a new member', value: 'continue'},
            {key: 'No, my team is complete', value: 'stop'}
        ]
    }
]

var teamFormation = [];

function init() {

    inquirer.prompt(questions)
    
    .then((answers) => {

        

          if(answers.addMember === 'continue') {
            teamFormation.push(answers);
            console.log(teamFormation);
            init();
            return;
            } else {

            teamFormation.push(answers);
            generateHTML(answers);  

             }

        
    
    fs.writeFile('index.html', employeeInfo, (err) => err ? console.log(err) : console.log('The README.md has been successfullygenerated.'))
        })
}

init();