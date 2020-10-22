const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employeesCompleteInfo = [];

const employeeInfo = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: 'Please select an employee type you wish to enter:',
        choices: [
        'Manager',
        'Engineer',
        'Intern'
        ]
      },
      {
        type: 'input',
        name: 'name',
        message: "Please enter the employee's name."
      },
      {
        type: 'input',
        name: 'id',
        message: "Please enter the employee's id."
      },
      {
        type: 'input',
        name: 'email',
        message: "Please enter the employee's email."
      },
    ])
    .then(answersShared => {
      const { role } = answersShared;
      switch(role) {
        case 'Manager':
            specificEmployeeInfo(role, "officeNumber", "Please enter the managers office number.", answersShared);
        break;
        case 'Engineer':
            specificEmployeeInfo(role, "github", "Please enter the ngineer's Github profile username.", answersShared);
        break;
        case 'Intern':
            specificEmployeeInfo(role, "school", "Please enter the name of the school that the intern attended.", answersShared);
        break
      }
    });
}

const specificEmployeeInfo = (role, userInput, userMessage, answersShared) => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: userInput,
        message: userMessage
      }
    ])
    .then(userAnswers => {
      let userAnswerInput;

      for (let keys in userAnswers) {
        userAnswerInput = userAnswers[keys]
      }

      const { name, id, email } = answersShared;
      let currentEmployee;

      switch(role) {
        case 'Manager':
          currentEmployee = new Manager(name, id, email, userAnswerInput)
        break
        case 'Engineer':
          currentEmployee = new Engineer(name, id, email, userAnswerInput)
        break
        case 'Intern':
          currentEmployee = new Intern(name, id, email, userAnswerInput)
        break
      }
      employeesCompleteInfo.push(currentEmployee);
      addAnotherEmployee();
    })
}


const addAnotherEmployee = () => {
  inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'additionalEmployeesPrompt',
        message: 'Would you like to add another employee? :',
        default: false
      }
    ])
    .then(answer => {
      if (answer.additionalEmployeesPrompt === true) {
        employeeInfo()
      } else {
          const generateHTML = render(employeesCompleteInfo)
          copyEmployeeInfoToHTML(generateHTML)
        }
    })
}

const copyEmployeeInfoToHTML = (generateHTML) => {
  fs.writeFile(outputPath, generateHTML, function(err) {
    if (err) { 
      return console.log(err); 
    }
    console.log("Employee Summary HTML File was successfully created.");   
  });
};

employeeInfo()