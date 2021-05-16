// Importing the employee parent class
const Employee = require("./employee");

// Intern class extends the employee parent class
class Intern extends Employee {
  // Constructor function takes in name, email, id and school
  constructor({ name, email, id, school }) {
    // Inherited properties from the parent employee class are name, email and id
    super({ name, email, id });

    // Accesses the user-inputted school name for this instance of the intern class
    this.school = school;

    // Defines the role for this class as intern
    this.role = "Intern";
  }

  // Get school method retrieves the user-inputted school name for this instance of the intern class
  getSchool() {
    return this.school;
  }

  // Get role method retrieves role for this instance of the intern class
  getRole() {
    return this.role;
  }
}

// The intern class is exported as it needs to be accessed by the index.js and generateHTML files
module.exports = Intern;
