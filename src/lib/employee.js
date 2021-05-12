// employee class
class Employee {
  constructor({ name, id, email }) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // method retrieves name
  getName() {
    return this.name;
  }

  // method retrieves id
  getId() {
    return this.id;
  }

  // method retrieves email
  getEmail() {
    return this.email;
  }
}

module.exports = Employee;
