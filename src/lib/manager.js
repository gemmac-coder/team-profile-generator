// manager class
class Manager extends Employee {
  constructor({ name, email, id, officeNumber }) {
    // inherited properties from the parent employee class
    super({ name, email, id });

    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  // method retrieves office number
  getOfficeNumber() {
    return this.officeNumber;
  }

  // method retrieves role
  getRole() {
    return this.role;
  }
}
