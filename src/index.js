const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");

const generateHTML = require("./utils/generateHTML.js");

const employees = [];

const getEmployeeType = async (managerAnswers) => {
  // if statement if (managerAnswers.addEmployee === true ) { then ask this question below
  if (managerAnswers.addEmployee === "Yes") {
    const roleQuestion = [
      {
        type: "list",
        message: "Please select your role?",
        name: "employeeTitle",
        choices: [
          { name: "Manager", value: "manager", short: "engineer" },
          { name: "Engineer", value: "engineer", short: "engineer" },
          { name: "Intern", value: "intern", short: "intern" },
          { name: "None", value: "none", short: "none" }, // only when there is 2 employees in the employees array, i.e. a manager + 1
        ],
      },
    ];

    const roleAnswer = await inquirer.prompt(roleQuestion);
    getAllEmployees(roleAnswer);
    return roleAnswer;
  } else {
    return false;
  }
};

const getAllEmployees = (getEmployeeType) => {
  const employees = [];
  // first set a variable equal to employee type, in the loop check employee type, if it's engineer ask y question
  // while loop: first part, inprogress (set to true), first if will check to see if in progress is true,
  //  if it's true you will check employee type - i.e. the managerAnswers.employeeType, inside
  const inprogress = true;
  while (inprogress) {
    if (getEmployeeType.employeeTitle === "intern") {
      createIntern();
    }
    if (getEmployeeType.employeeTitle === "engineer") {
      createEngineer();
    } else {
      inprogress = false;
    }
  }
  // From  the manager answers about the role, the corresponding employee types will be created
  // The manager answers as pushed into the employees array
  employees.push(managerAnswers);
};

class Employee {
  constructor(name, id, email) {
    this.employeeName = name;
    this.employeeID = id;
    this.employeeEmail = email;
  }
}

class Manager extends Employee {
  constructor({ name, email, managerID, officeNumber }) {
    super(name, email, managerID);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }
}

class Engineer extends Employee {
  constructor({ name, email, github }) {
    super(name, email, employeeID, github);
    this.engineerGithub = github;
    this.role = "Engineer";
  }
}

class Intern extends Employee {
  constructor({ name, email, school }) {
    super(name, email, school, employeeID);
    this.internSchoolName = school;
    this.role = "Intern";
  }
}

// if (employeeAnswers.employeeRole === "Engineer") {
//   askEngineerForGithub();
// } else if (employeeAnswers.employeeRole === "Intern") {
//   askInternForSchool();
// }

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
    message: "What is your ID?",
    name: "managerID",
    validate: validateInput,
  },
  {
    type: "input",
    message: "What is your office number?",
    name: "employerOfficeNumber",
    validate: validateInput,
  },
  {
    type: "input",
    message: "What is your work email?",
    name: "managerEmail",
    validate: validateInput,
  },
  {
    type: "list",
    message: "Would like you to add any employees?",
    name: "addEmployee",
    choices: ["Yes", "No"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "engineerName",
    validate: validateInput,
  },
  {
    type: "input",
    message: "What is your engineer ID?",
    name: "engineerID",
    validate: validateInput,
  },
  {
    type: "input",
    message: "What is your work email?",
    name: "engineerEmail",
    validate: validateInput,
  },
  {
    type: "input",
    message: "What is your github profile?",
    name: "employerGitHub",
    validate: validateInput,
  },
  {
    type: "input",
    message: "What is your school name?",
    name: "employerOfficeNumber",
    validate: validateInput,
  },
];

const internQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "internName",
    validate: validateInput,
  },
  {
    type: "input",
    message: "What is your work email?",
    name: "internEmail",
    validate: validateInput,
  },
  {
    type: "input",
    message: "What is your intern ID?",
    name: "internID",
    validate: validateInput,
  },
  {
    type: "input",
    message: "What is your school name?",
    name: "internOfficeNumber",
    validate: validateInput,
  },
];

// const Engineer = {
//   name: "",
//   id: "",
//   email: "",
//   github: "",
// };

// const Intern = {
//   name: "",
//   id: "",
//   email: "",
//   school: "",
// };

// init function will generate html, write to file
const init = async () => {
  const managerAnswers = await inquirer.prompt(managerQuestions);
  // x will either be the while loop further up or if manager hasn't selected to add anyone else then it will just generate a h1 saying "no more employees added";
  const x = getEmployeeType(managerAnswers);
};

const createManager = async () => {
  const managerAnswers = await inquirer.prompt(managerQuestions);
  // The engineer answers as pushed into the employees array
  console.log(managerAnswers);
  // this one is the right one to pass in for each engineer, manager etc.
  const engineer = new Manager(managerAnswers);
  employees.push(engineer);
};

const createEngineer = async () => {
  const engineerAnswers = await inquirer.prompt(engineerQuestions);
  // The engineer answers as pushed into the employees array
  console.log(engineerAnswers);
  // this one is the right one to pass in for each engineer, manager etc.
  const engineer = new Engineer(engineerAnswers);
  employees.push(engineer);
};

// create intern question array
const createIntern = async () => {
  const internAnswers = await inquirer.prompt(internQuestions);
  // The intern answers as pushed into the employees array
  console.log(internAnswers);
  // this one is the right one to pass in for each engineer, manager etc.
  const intern = new Intern(internAnswers);
  employees.push(intern);
};

// Function call to initialize app
init();
