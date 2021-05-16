// Importing the employee parent class
const Employee = require("./employee");

// Engineer class extends the employee class
class Engineer extends Employee {
  // Constructor function takes in name, email, id and github profile URL
  constructor({ name, email, id, github }) {
    // The inherited properties from the parent employee class are the name, email and id
    super({ name, email, id });

    // Accesses the user-inputted github profile for this instance of the engineer class
    this.github = github;

    // Defines the role as engineer
    this.role = "Engineer";
  }
  // Get github method on engineer returns the user-inputted github profile URL for this instance of the engineer class
  getGithub() {
    return this.github;
  }
  // Get role returns the engineer role for this instance of the engineer class
  getRole() {
    return this.role;
  }
}

// The engineer class is exported as it needs to be accessed by the index.js and generateHTML files
module.exports = Engineer;
