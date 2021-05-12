class Manager extends Employee {
  constructor({ name, email, id, officeNumber }) {
    super({ name, email, id });

    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return this.role;
  }
}
