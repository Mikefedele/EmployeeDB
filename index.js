
const inquire = require("inquirer");
const DB = require("./DB");
const {printTable} = require('console-table-printer');
const mainMenu = () => {

    inquire.prompt ([
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
      ]
    }    
   
  ]).then(response =>{
    switch (response.start) {
      case "View all Employees":
        DB.getAllEmployees()
        .then(([rows])=> printTable(rows))
        break;
    
      case "Add Employee":
        addEmployee()


      default: 

        break;
    }
    });
}
mainMenu();
const addEmployee = async()=> {
  const [employeeList] = await DB.getEmployeeList()
  const managerArray = employeeList.map((manager)=>({
    name: manager.first_name + ' ' + manager.last_name,
    value: manager.id
  }));
  const [roleList] = await DB.getRoles()
  const roleArray = roleList.map((role)=>({
    name: role.title,
    value: role.id,
  }));
inquire.prompt([
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
      choices: managerArray
},
{
  type: "list",
  message: "Please select your role?",
  name: "roleQuestion",
  choices: roleArray
}

]).then(answers => {
  const employee = {
    first_name: answers.firstName,
    last_name: answers.lastName,
    role_id: answers.roleQuestion,
    manager_id: answers.managerQuestion
  }
  DB.addEmployee(employee).then (res => console.log(res));
})
}