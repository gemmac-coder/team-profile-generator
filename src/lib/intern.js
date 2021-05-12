// intern class
class Intern extends Employee {
  constructor({ name, email, id, school }) {
    // inherited properties from the parent employee class
    super({ name, email, id });

    this.school = school;
    this.role = "Intern";
  }

  // method retrieves school name
  getSchool() {
    return this.school;
  }

  // method retrieves role
  getRole() {
    return this.role;
  }
}
