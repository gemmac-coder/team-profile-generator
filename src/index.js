const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");

const generateHTML = require("./utils/generateHTML.js");

const employees = [];

const validateInput = (userInput) => {
  if (userInput === "") {
    return "please type your answer before proceeding";
  } else {
    return true;
  }
};

const managerQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "managerName",
    validate: validateInput,
  },
  {
    type: "input",
    message: "What is your employee ID?",
    name: "managerID",
    validate: validateInput,
  },
  {
    type: "input",
    message: "What is your work email?",
    name: "managerEmail",
    validate: validateInput,
  },
  {
    type: "input",
    message: "What is your office number?",
    name: "managerOfficeNumber",
    validate: validateInput,
  },
];

const employeeQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "employeeName",
    validate: validateInput,
  },
  {
    type: "input",
    message: "What is your employee ID?",
    name: "employeeID",
    validate: validateInput,
  },
  {
    type: "input",
    message: "What is your work email?",
    name: "employeeEmail",
    validate: validateInput,
  },
  {
    type: "list",
    message: "What is your role?",
    name: "employeeRole",
    choices: ["Engineer", "Intern"],
  },
];

const init = async () => {
  const managerAnswers = await inquirer.prompt(managerQuestions);
  // The manager answers as pushed into the employees array
  employees.push(managerAnswers);
  console.log(managerAnswers);
  console.log(employees);
};

// Function call to initialize app
init();
