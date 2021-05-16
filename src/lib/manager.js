// Importing the parent employee class
const Employee = require("./employee");

// The manager class extends the parent employee class
class Manager extends Employee {
  // Constructor function takes in name, email, id and school name
  constructor({ name, email, id, officeNumber }) {
    // Inherited properties from the parent employee class are name, email and id
    super({ name, email, id });

    // Accesses the user-inputted officer number for this instance of the manager  class
    this.officeNumber = officeNumber;

    // Defines the role for this class as manager
    this.role = "Manager";
  }

  // Get office number method retrieves the user-inputted office number for this instance of the manager  class
  getOfficeNumber() {
    return this.officeNumber;
  }

  // Get role method retrieves role for this instance of the manager class
  getRole() {
    return this.role;
  }
}

// The manager class is exported as it needs to be accessed by the index.js and generateHTML files
module.exports = Manager;
