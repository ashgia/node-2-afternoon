const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
require("dotenv").config();
port = 3000;

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
