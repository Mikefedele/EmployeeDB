const DB = require('../DB');
const router = require('express').Router();

router.get('/', (req,res) => {
  DB.getAllEmployees()
  .then(([employeeResponse]) => res.json(employeeResponse))
  .catch((err) => res.json(err));
})



module.exports = router