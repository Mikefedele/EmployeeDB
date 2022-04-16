const mysql = require("mysql2");
const inquire = require("inquirer");
const fs = require("fs");
const path = require("path");


employeeArray = [];
function home() {
  // let promptInq = inquirer.createPromptModule();

  return inquire([
    {
      type: "list",
      name: "start",
      message: "What would you like to do?",
      choices: [
        "View all Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
      ],
    },
    
    {
      type: "input",
      message: "Where do you go to school?",
      name: "school",
      when: (response) => {
        if (response) return true;
      },
    },
   
  ]).then (console.log(response));
}

employeePrompts = () => {
 inquire([
  {
      type: "input",
      message: "First Name?",
      name: "firstName",
},
{
  type: "input",
  message: "Last Name?",
  name: "lastName",
},
{
      type: "input",
      message: "Company ID?",
      name: "id",
    },
    {
      type: "confirm",
      message: "Do you have a manager?",
      name: "managerQuestion",
    },
    {
      type: "input",
      message: "What is the manager id?",
      name: "managerAnswer",
      when: (response.manager === true), 
      
      // => {
      //   if (response.managerQuestion ===true) return true;
      // },
    },  
])
};
// 
// {
//   type: "input",
//   message: "email address?",
//   name: "email",
// },
// {
//   type: "input",
//   message: "Enter office number",
//   name: "officeNumb",
//   when: (response) => {
//     if (response.role === "Manager") return true;
//   },
// },
// {
//   type: "input",
//   message: "What is your Github username?",
//   name: "gitName",
//   when: (response) => {
//     if (response.role === "Engineer") return true;
//   },
// },