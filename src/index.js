const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");

const generateHTML = require("./utils/generateHTML.js");

const employees = [];

class Employee {
  constructor(name) {
    this.employeeName = name;
  }
  constructor(id) {
    this.employeeID = id;
  }
  constructor(email) {
    this.employeeEmail = email;
  }
}

class Engineer extends Employee {
  constructor(github) {
    super(employeeAnswers, github);
    this.engineerGithub = github;
  }
}

class Intern extends Employee {
  constructor(github) {
    super(employeeAnswers, school);
    this.internSchoolName = school;
  }
}

if (employeeAnswers.employeeRole === "Engineer") {
  askEngineerForGithub();
} else if (employeeAnswers.employeeRole === "Intern") {
  askInternForSchool();
}

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
  const employeeAnswers = await inquirer.prompt(employeeQuestions);
  // The manager answers as pushed into the employees array
  employees.push(managerAnswers, employeeAnswers);
  console.log(managerAnswers, employeeAnswers);
  console.log(employees);
};

// Function call to initialize app
init();
