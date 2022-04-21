const { log } = require("console");
//express app & path only for routes
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const routes = require('./routes')
app.use(routes)


const DB = require("./DB");


//todo listen PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
