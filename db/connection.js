const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'rootroot12345',
    database: 'myCompany_db'
  },
  // console.log(`Connected to the classlist_db database.`)
);

db.connect(function(err){
  if(err)
  throw err;
})
module.exports = db;