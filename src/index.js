// Inquirer is imported to ask questions to the user to generate the team profile
const inquirer = require("inquirer");

// Fs is required to write the file and generate the html markdown
const fs = require("fs");

// Generate html is required to create the markdown
const generateHTML = require("./utils/generateHTML.js");

// The manager class is imported
const Manager = require("./lib/manager.js");

// The engineer class is imported
const Engineer = require("./lib/engineer.js");

// The intern class is imported
const Intern = require("./lib/intern.js");

// Employees is declared as an empty array
const employees = [];

// Is team complete is declared as a boolean - false
let isTeamComplete = false;

// Validate input function prevents the user from inputting an empty string for any questions
const validateInput = (userInput) => {
  if (userInput === "") {
    return "please type your answer before proceeding";
  } else {
    return true;
  }
};

// Asynchronous init function initialises the app
const init = async () => {
  await createManager();

  // While the team is not complete, the manager will be asked which type of employees they want to add
  while (!isTeamComplete) {
    // Multiple choice question asks managers which type of employees they want to add
    const employeeTypeQuestion = [
      {
        type: "list",
        message: "Please select the employee type you wish to add:",
        name: "employeeType",
        choices: [
          { name: "Engineer", value: "engineer", short: "Engineer" },
          { name: "Intern", value: "intern", short: "Intern" },
          { name: "None", value: "none", short: "None" },
        ],
      },
    ];

    // The employee type object will be generated from the manager's answer to the employee type question
    const { employeeType } = await inquirer.prompt(employeeTypeQuestion);

    // If the manager clicks none on the employee type question, the team is complete
    if (employeeType === "none") {
      isTeamComplete = true;

      // If the manager selects either the engineer or intern roles, the respective function will create a employee of the specified class
    } else {
      if (employeeType === "engineer") {
        await createEngineer();
      }
      if (employeeType === "intern") {
        await createIntern();
      }
    }
  }

  // The employees array is passed into the generate html function and then this markdown is used to create a new team-profile.html
  const HTML = generateHTML(employees);
  fs.writeFileSync("team-profile.html", HTML, (err) => {
    // Any errors with writing to the file are captured
    if (err) {
      console.log(err);

      // If writing to the file was successful, then the HTML file created message is logged in the console
    } else {
      console.log("HTML file created");
    }
  });
};

// The create manager function
const createManager = async () => {
  // The array of manager questions for user input
  const managerQuestions = [
    {
      type: "input",
      message: "Enter manager name:",
      name: "name",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Enter employee ID:",
      name: "id",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Enter your office number:",
      name: "officeNumber",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Enter work email:",
      name: "email",
      validate: validateInput,
    },
  ];

  // The manager answers will be generated from the manager's input to the questions
  const managerAnswers = await inquirer.prompt(managerQuestions);

  // The new instance of the manager class takes in these manager answers
  const manager = new Manager(managerAnswers);

  // The manager object is then pushed into the employees array
  employees.push(manager);
};

// The create engineer function
const createEngineer = async () => {
  // The array of engineer questions for user input
  const engineerQuestions = [
    {
      type: "input",
      message: "Please enter engineer name:",
      name: "name",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Please enter engineer ID:",
      name: "id",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Please enter engineer email:",
      name: "email",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Please enter engineer github profile:",
      name: "github",
      validate: validateInput,
    },
  ];

  // The engineer answers will be generated from the engineer's input to the questions
  const engineerAnswers = await inquirer.prompt(engineerQuestions);
  // The new instance of the engineer class takes in the answers
  const engineer = new Engineer(engineerAnswers);

  // The engineer object is then pushed into the employees array
  employees.push(engineer);
};

// The create intern function
const createIntern = async () => {
  // The array of intern questions for user input
  const internQuestions = [
    {
      type: "input",
      message: "Enter intern name:",
      name: "name",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Enter intern ID:",
      name: "id",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Enter intern email:",
      name: "email",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Enter intern school name:",
      name: "school",
      validate: validateInput,
    },
  ];
  // The intern answers will be generated from the intern's input to the questions
  const internAnswers = await inquirer.prompt(internQuestions);

  // The new instance of the intern class takes in the answers
  const intern = new Intern(internAnswers);

  // The intern object is then pushed into the employees array
  employees.push(intern);
};

// Function call to initialize app
init();
