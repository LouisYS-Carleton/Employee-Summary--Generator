const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employees = [];

const employeeQuestions = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: 'Select an Employee type you wish to enter:',
                choices: [
                'Manager',
                'Engineer',
                'Intern'
                ]
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is this employee\'s name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is this employee\'s id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is this employee\'s email?'
            },
        ])
        .then(answers => {
            const { role } = answers;
        switch(role) {
            case 'Manager':
                specificEmployeeQuestions(role, "officeNumber", "What is the Manager's office number?", answers);
            break;
            case 'Engineer':
                specificEmployeeQuestions(role, "github", "What is the Engineer's Github profile username?", answers);
            break;
            case 'Intern':
                specificEmployeeQuestions(role, "school", "Where does the Intern go to school?", answers);
            break;
        }
    });
}

employeeQuestions();