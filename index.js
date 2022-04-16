const mysql = require('mysql2');
const inq = require('inquirer');
const fs = require('fs');
const path = require('path');


function questions() {
  let promptInq = inquirer.createPromptModule();

  return promptInq([
    {
      type: "list",
      name: "role",
      message: "Role on the team?",
      choices: ["Manager", "Engineer", "Intern"],
    },
    {
      type: "input",
      message: "Name?",
      name: "name",
    },
    {
      type: "input",
      message: "Company ID?",
      name: "id",
    },
    {
      type: "input",
      message: "email address?",
      name: "email",
    },
    {
      type: "input",
      message: "Enter office number",
      name: "officeNumb",
      when: (response) => {
        if (response.role === "Manager") return true;
      },
    },
    {
      type: "input",
      message: "What is your Github username?",
      name: "gitName",
      when: (response) => {
        if (response.role === "Engineer") return true;
      },
    },
    {
      type: "input",
      message: "Where do you go to school?",
      name: "school",
      when: (response) => {
        if (response.role === "Intern") return true;
      },
    },
    {
      type: "confirm",
      message: "Would you like to add another employee?",
      name: "again",
    },
  ]).then(console.log(promptInq));
}