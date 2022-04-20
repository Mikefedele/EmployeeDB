const inquire = require("inquirer");
const DB = require("./DB");
const { printTable } = require("console-table-printer");
const { getRoles, getDepartments } = require("./DB");
const connection = require("./db/connection");

//* DON'T USE NODEMON!!! Freezes the inquirer controls
const mainMenu = () => {
  return inquire
    .prompt([
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
    ])
    .then((response) => {
      switch (response.start) {
        case "View all Employees":
          DB.getAllEmployees().then(([rows]) => printTable(rows));
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Update Employee Role":
          updateRole();
          break;

        case "View All Roles":
          DB.getRoles().then(([rows]) => printTable(rows));
          break;

        case "View All Departments":
          DB.getDepartments().then(([rows]) => printTable(rows));
          break;

        case "Add Department":
          addDepartment();
          break;

        default:
          break;
      }
    });
};
mainMenu();
const addEmployee = async () => {
  const [employeeList] = await DB.getEmployeeList();
  const managerArray = employeeList.map((manager) => ({
    name: manager.first_name + " " + manager.last_name,
    value: manager.id,
  }));
  const [roleList] = await DB.getRoles();
  const roleArray = roleList.map((role) => ({
    name: role.title,
    value: role.id,
  }));
  inquire
    .prompt([
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
        type: "list",
        message: "Please select your manager?",
        name: "managerQuestion",
        choices: managerArray,
      },
      {
        type: "list",
        message: "Please select your role?",
        name: "roleQuestion",
        choices: roleArray,
      },
    ])
    .then((answers) => {
      const employee = {
        first_name: answers.firstName,
        last_name: answers.lastName,
        role_id: answers.roleQuestion,
        manager_id: answers.managerQuestion,
      };
      DB.addEmployee(employee).then((res) => console.log(res));
    });
};

const addDepartment = () => {
  inquire
    .prompt([
      {
        type: "input",
        message: "New Department?",
        name: "newDepartment",
      },
    ])
    .then((answers) => {
      console.log(answers);
      department = {
        name: answers.newDepartment,
      };
      DB.addDepartment(department).then((res) => console.table(res));
    });
};
const updateRole = async () => {
  const [employeeList] = await DB.getEmployeeList();
  const employeeArray = employeeList.map((employee) => ({
    name: employee.first_name + " " + employee.last_name,
    value: employee.id,
  }));
  const [roleList] = await DB.getRoles();
  const roleArray = roleList.map((role) => ({
    name: role.title,
    value: role.id,
  }));

  inquire
    .prompt([
      {
        type: "list",
        message: "Select the employee you want to update?",
        name: "updateEmployeeRole",
        choices: employeeArray,
      },
      {
        type: "list",
        message: "Please select the new role?",
        name: "roleUpdateQuestion",
        choices: roleArray,
      },
    ])
    // todo consolelog answers to see what i got
    .then((answers) => {
      DB.updateRole(answers).then((res) => console.table(res));
    });
};
// );

// };
