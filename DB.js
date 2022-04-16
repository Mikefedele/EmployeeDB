const mysql = require("mysql2");
const inquire = require("inquirer");
const fs = require("fs");
const path = require("path");
const connection = require('./db/connection');
const { Module } = require("module");

class DB {
constructor(connection) {
  this.connection = connection
}
getDepartments () {
  return this.connection.promise().query('SELECT * FROM department')
}
getAllEmployees() {
  return this.connection.promise().query('SELECT * FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id')
}
}


module.exports = new DB (connection)
// employeeArray = [];
// function home() {
  

//   return inquire([
//     {
//       type: "list",
//       name: "start",
//       message: "What would you like to do?",
//       choices: [
//         "View all Employees",
//         "Add Employee",
//         "Update Employee Role",
//         "View All Roles",
//         "Add Role",
//         "View All Departments",
//         "Add Department",
//       ],
//     },
    
//     {
//       type: "input",
//       message: "Where do you go to school?",
//       name: "school",
//       when: (response) => {
//         if (response) return true;
//       },
//     },
   
//   ]).then (console.log(response));
// }

// employeePrompts = () => {
//  inquire([
//   {
//       type: "input",
//       message: "First Name?",
//       name: "firstName",
// },
// {
//   type: "input",
//   message: "Last Name?",
//   name: "lastName",
// },
// {
//       type: "input",
//       message: "Company ID?",
//       name: "id",
//     },
//     {
//       type: "confirm",
//       message: "Do you have a manager?",
//       name: "managerQuestion",
//     },
//     {
//       type: "input",
//       message: "What is the manager id?",
//       name: "managerAnswer",
//       when: (response.manager === true), 
      
      
//     },  
// ])
// };
// // 

// rolePrompts = () => {

//   inquire([
//     {
//         type: "input",
//         message: "Role Title?",
//         name: "roleTitle",
//     },
//     {
//       type: "input",
//       message: "What is the salary for this role?",
//       name: "salary"
//     }
//   ])
// }

//
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