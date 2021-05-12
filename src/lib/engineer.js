const Employee = require("./employee");

// engineer class
class Engineer extends Employee {
  constructor({ name, email, id, github }) {
    // inherited properties from parent employee class
    super({ name, email, id });

    this.github = github;
    this.role = "Engineer";
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Engineer;
