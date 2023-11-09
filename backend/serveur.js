const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

const dbStock = require("./db.json");

const dbStockArray = [dbStock];

app.use(cors());

app.get("/", (req, res) => {
  res.send(dbStockArray);
});

app.post("/", (req) => {
  const postData = req.body;
  dbStockArray.push(postData);
});

app.listen(port, () => {
  console.warn(`Le serveur Express écoute sur le port ${port}`);
});
