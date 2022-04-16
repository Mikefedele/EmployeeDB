const { log } = require('console');
const express = require('express');
const app = express();

// Import and require mysql2 
const PORT = process.env.PORT || 3001;
const DB = require('./DB')
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database


// db.query('DESCRIBE employee', function (err, results){
  // console.table(results)
// })

// Default response for any other request (Not Found)
// app.use((req, res) => {
//   // res.status(404).end();
// });

// DB.getDepartments().then(([res]) => console.log(res));

app.get('/api/departments',(req, res) =>{
DB.getDepartments().then(([departmentResponse]) => res.json(departmentResponse)
)
.catch(err => res.json(err)); 
})
app.get('/api/company',(req, res) =>{
  DB.getAllEmployees().then(([employeeResponse]) => res.json(employeeResponse)
  )
  .catch(err => res.json(err)); 
  })

//todo listen PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});