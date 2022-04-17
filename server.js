const { log } = require("console");
//express app & path only for routes
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const routes = require('./routes')
app.use(routes)

// const path = require('path');
//const router = require('router');
// Import and require mysql2
//constructor to connect to SQL
const DB = require("./DB");


// app.get("/api/departments", (req, res) => {
//   DB.getDepartments()
//     .then(([departmentResponse]) => res.json(departmentResponse))
//     .catch((err) => res.json(err));
// });
// app.get("/api/company", (req, res) => {
//   DB.getAllEmployees()
//     .then(([employeeResponse]) => res.json(employeeResponse))
//     .catch((err) => res.json(err));
// });
// app.get("/api/roles", (req, res) => {
//   DB.getRoles()
//     .then(([roleResponse]) => res.json(roleResponse))
//     .catch((err) => res.json(err));
// });

//todo listen PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
