const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const dbStock = require("./db.json");

const dbStockArray = [dbStock];

app.use(cors({}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(dbStockArray);
});

app.post("/", (req) => {
  const postData = req.body;
  console.info(postData);
  dbStockArray[0].history.push(postData);
  console.info(dbStockArray[0].history);
});

app.listen(port, () => {
  console.warn(`Le serveur Express écoute sur le port ${port}`);
});
