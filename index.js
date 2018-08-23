const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
require("dotenv").config();
const products_controller = require("./products_controller");
port = 3000;

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.post("/api/product", products_controller.create);
app.get("/api/product/:id", products_controller.getOne);
app.get("/api/products", products_controller.getAll);
app.put("/api/product/:id", products_controller.update);
app.delete("/api/product/:id", products_controller.delete);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
