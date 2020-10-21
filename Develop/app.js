const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// let employees = [];

const employeeQuestions = () => {
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
        .then(answers => {
            const { role } = answers;
            switch(role) {
              case 'Manager':
                  specificEmployeeQuestions(role, "officeNumber", "Please enter the managers office number.", answers);
              break;
              case 'Engineer':
                  specificEmployeeQuestions(role, "github", "Please enter the ngineer's Github profile username.", answers);
              break;
              case 'Intern':
                  specificEmployeeQuestions(role, "school", "Please enter the name of the school that the intern attended.", answers);
              break
            }
        });
}

const addAnotherEmployee = () => {
  inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'additionalEmployeesPrompt',
        message: 'Would you like to add another employee?'
      }
  ]);
}

// function specificEmployeeQuestions(role, answers){ console.log('bklhasdkhad') };
employeeQuestions()
addAnotherEmployee()