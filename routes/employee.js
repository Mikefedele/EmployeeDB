const { response } = require('express');
const router = require('router');




 const employeePrompts = () => {
 return inquire([
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
      type: "confirm",
      message: "Do you have a manager?",
      name: "managerQuestion",
},
{
      type: "input",
      message: "What is the manager id?",
      name: "managerAnswer",
      when: (response.manager === true), 
      
      
},  
]).then(response => {

}
)
};