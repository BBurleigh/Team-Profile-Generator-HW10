const inquirer = require('inquirer');

const fs = require('fs');

const Employee = require("./lib/Employee");

const Manager = require("./lib/Manager");

const Engineer = require("./lib/Engineer");

const Intern = require("./lib/Intern");

const generateHTML = (teamFormation) => {
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
  <title>Your Francesca Programming Team</title>
</head>
<body>
        <div class="jumbotron font-weight-bold text-center">
            <h1>Your Francesca Programming Team</h1>
        </div>
    
        <div class="container d-flex flex-wrap justify-content-center">`

    for (let i = 0; i < teamFormation.length; i++) {

        if (teamFormation[i].role === "Manager") {

            teamFormation.innerHTML =

            `<div class="card text-center ml-4 mr-4 mb-5 border-dark">
            <div class="card-body bg-danger text-light">
            <h4 class="card-header">Name:${teamFormation[i].name}</h4>
            <h4 class="card-title">${teamFormation[i].role}</h4>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${teamFormation[i].id}</li>
            <li class="list-group-item">Email: <a href="mailto:${teamFormation[i].email}"> ${teamFormation[i].email}</a></li>
            <li class="list-group-item">Office Number: ${teamFormation[i].officeNumber}</li>
            </ul>
            </div>`

            return teamFormation.innerHTML;

        } else if (teamFormation[i].role === "Engineer") {

            teamFormation.innerHTML +=

            `<div class="card text-center ml-4 mr-4 mb-5 border-dark"></div>
            <div class="card-body bg-info text-light">
            <h4 class="card-header">${teamFormation[i].name}</h4>
            <h4 class="card-title">${teamFormation[i].role}</h4>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${teamFormation[i].id}</li>
            <li class="list-group-item">Email: <a href="mailto:${teamFormation[i].email}">${teamFormation[i].email}</a></li>
            <li class="list-group-item">Github: <a href="${teamFormation[i].github}" target= "_blank">${teamFormation[i].github}</a></li>
            </ul>
            </div>`

            return teamFormation.innerHTML;
    
        } else if (teamFormation[i].role === "Intern") {

            teamFormation.innerHTML +=
                
            `<div class="card text-center ml-4 mr-4 mb-5 border-dark">
            <div class="card-body bg-warning text-light">
            <h4 class="card-header">${teamFormation[i].name}</h4>
            <h4 class="card-title">${teamFormation[i].role}</h4>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${teamFormation[i].id}</li>
            <li class="list-group-item">Email: <a href="mailto:${teamFormation[i].email}">${teamFormation[i].email}</a></li>
            <li class="list-group-item">School: ${teamFormation[i].school}</li>
            </ul>
            </div>`

            return teamFormation.innerHTML;
        
        } else {
          
        `</div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
        </body>
        </html>`  

        }
    }       
}

const questions = [
    {
        type: 'input',
        message: 'Hello, valued employee of Francesca Enterprises. Please enter your preferred name. If you are completing this for a team member, what is their preferred name?',
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

// may look at creating a switch case within the if statement for when each member's role is a a specific role to call on constructor and push info into array

    fs.writeFile('index.html', generateHTML(teamFormation), (err) => err ? console.log(err) : console.log('Well done! You have created basic profiles for yourself and your team.'))
        })
}

init();
