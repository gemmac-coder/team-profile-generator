const fs = require("fs");
const path = require("path");
const templatesDir = path.resolve(__dirname, "../templates");

const generateHTML = (employees) => {
  const HTML = [];
  console.log(employees);
  // repeat this function for engineer and intern

  // const filteredEmployees = employees.filter(
  //   (employee) => employee.getRole() === "Manager"
  // );

  HTML.push(
    employees
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => renderManager(manager))
  );
  HTML.push(
    employees
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => renderEngineer(engineer))
  );
  HTML.push(
    employees
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => renderIntern(intern))
  );
  // we want to render our array as a string - instead of template literals

  console.log(HTML, "generateHTML.js");
  return renderFullMarkdown(HTML.join(""));
};

const renderManager = (manager) => {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "manager.html"),
    "utf8"
  );
  //changes placeholders in manager.html file with actual values from the instance of the  manager's class in the employees array
  template = replaceTemplates(template, "name", manager.getName());
  template = replaceTemplates(template, "id", manager.getId());
  template = replaceTemplates(template, "role", manager.getRole());
  template = replaceTemplates(template, "email", manager.getEmail());
  template = replaceTemplates(
    template,
    "officeNumber",
    manager.getOfficeNumber()
  );

  return template;
};

const renderEngineer = (engineer) => {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "engineer.html"),
    "utf8"
  );
  //changes placeholders in engineer.html file with actual values from the instance of the  engineer's class in the employees array
  template = replaceTemplates(template, "name", engineer.getName());
  template = replaceTemplates(template, "id", engineer.getId());
  template = replaceTemplates(template, "role", engineer.getRole());
  template = replaceTemplates(template, "email", engineer.getEmail());
  template = replaceTemplates(template, "github", engineer.getGithub());
  return template;
};

// to do:  render engineer function - as above but with intern methods passed in
const renderIntern = (intern) => {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "intern.html"),
    "utf8"
  );
  //changes placeholders in engineer.html file with actual values from the instance of the  engineer's class in the employees array
  template = replaceTemplates(template, "name", intern.getName());
  template = replaceTemplates(template, "id", intern.getId());
  template = replaceTemplates(template, "role", intern.getRole());
  template = replaceTemplates(template, "email", intern.getEmail());
  template = replaceTemplates(template, "school", intern.getSchool());
  return template;
};

const renderFullMarkdown = (HTML) => {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "full-markdown.html"),
    "utf8"
  );
  console.log(HTML, "HTML created");
  return replaceTemplates(template, "team", HTML);
};

const replaceTemplates = (template, placeholder, value) => {
  // here, gm refers to the global match which finds all matches rather than stopping after the first match
  const pattern = new RegExp(`{{${placeholder}}}`, "gm");
  // replace method will replace anything the values in between the double curly brace placeholders
  console.log(pattern, value);
  return template.replace(pattern, value);
};

module.exports = generateHTML;
