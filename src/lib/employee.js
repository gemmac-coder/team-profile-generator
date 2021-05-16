// Employee class
class Employee {
  // The constructor function creates a blueprint object for the employee class, which will have name, id and email values
  constructor({ name, id, email }) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // The get name method retrieves the user-inputted name for the employee class
  getName() {
    return this.name;
  }

  // The get id method retrieves the user-inputted id for the employee class
  getId() {
    return this.id;
  }

  // The get email method retrieves the user-inputted email for the employee class
  getEmail() {
    return this.email;
  }
}

// Exporting employee to be accessed by the specific role classes and generate html files
module.exports = Employee;
