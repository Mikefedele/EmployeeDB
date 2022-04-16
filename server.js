const express = require('express');
const app = express();

// Import and require mysql2 
const mysql = require('mysql2');
const mypromise = require ('mysql2/promise')
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'rootroot12345',
    database: 'myCompany_db'
  },
  console.log(`Connected to the classlist_db database.`)
);

db.query('DESCRIBE employee', function (err, results){
  console.table(results)
})

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

//todo listen PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});