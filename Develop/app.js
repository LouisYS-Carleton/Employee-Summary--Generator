const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const htmlRenderer = require('./lib/htmlRenderer');
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const managerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "Please enter the managers name."
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter the managers ID number.'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter the managers email address.'
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Please enter the managers office number."
    },
    {
      type: 'confirm',
      name: 'addMoreWorkers',
      message: 'Would you like to add another worker?',
      default: false
    }
]

const engineerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "Please enter the engineers name."
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter the engineers ID number.'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter the engineers email address.'
    },
    {
      type: 'input',
      name: 'github',
      message: "Please enter the engineers github username."
    },
    {
      type: 'confirm',
      name: 'addMoreWorkers',
      message: 'Would you like to add another worker?',
      default: false
    }
]

const internQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "Please enter the interns name."
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter the interns ID number.'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter the interns email address.'
    },
    {
      type: 'input',
      name: 'school',
      message: "Please enter the interns school."
    },
    {
      type: 'confirm',
      name: 'addMoreWorkers',
      message: 'Would you like to add another worker?',
      default: false
    }
]

const employeeTypeQuestion = [
    {   
        type: 'list',
        name: 'employeeTypeQuestion',
        message: 'What type of employee would you like to add?',
        choice: [
            'Manager',
            'Engineer',
            'Intern'
        ]
    }
]


// function writeToFile(fileName, data) {
// fs.writeFile(fileName, data, function (err) {
//   if (err) {
//     return console.log(err)
//   }
//   console.log("README has been successfully completed.")
// })
// }

function init() {
    inquirer
    .prompt(employeeTypeQuestion)
    .then((answer) => {
        if (answer.choice === 'Manager') {
            inquirer
            .prompt(managerQuestions)
            .then((managerAnswers) => {
                let newManager = new Manager(answerManager.name, answerManager.email, answerManager.id, answerManager.officeNumber);
                
            })
        } else if (answer.choice === 'Intern') {
            inquirer
            .prompt(internQuestions)
            .then((internAnswers) => {
                let newIntern = new Manager(internAnswers.name, internAnswers.email, internAnswers.id, internAnswers.school);
            })
        } else if (answer.choice === 'Engineer') {
            inquirer
            .prompt(engineerQuestions)
            .then((engineerAnswers) => {
                let newEngineer = new Engineer(engineerAnswers.name, engineerAnswers.email, engineerAnswers.id, engineerAnswers.github);
            })
        }
    })
}


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
