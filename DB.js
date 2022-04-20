const mysql = require("mysql2");
const inquire = require("inquirer");
const fs = require("fs");
const path = require("path");
const connection = require("./db/connection");
const { Module } = require("module");

class DB {
  constructor(connection) {
    this.connection = connection;
  }
  getDepartments() {
    return this.connection.promise().query("SELECT * FROM department");
  }
  getAllEmployees() {
    return this.connection
      .promise()
      .query(
        "SELECT * FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id"
      );
  }
  getEmployeeList() {
    return this.connection
      .promise()
      .query("SELECT id, first_name, last_name FROM employee");
  }

  getRoles() {
    return this.connection
      .promise()
      .query(
        "SELECT * FROM role LEFT JOIN department on role.department_id = department.id"
      );
  }

  addEmployee(employee) {
    return this.connection
      .promise()
      .query("INSERT INTO employee SET ?", employee);
  }

  updateRole(answers) {
    return this.connection
      .promise()
      .query("UPDATE employee SET role_id = ? WHERE employee.id = ?", [
        answers.roleUpdateQuestion,
        answers.updateEmployeeRole,
      ]);
  }

  addDepartment(department) {
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?", department);
  }

  addRole(role) {
    return this.connection.promise().query("INSERT INTO role SET ?", role);
  }
}

module.exports = new DB(connection);

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
