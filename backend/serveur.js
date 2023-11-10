const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs").promises;

const app = express();
const port = 3000;

const dbStock = require("./db.json");

app.use(cors({}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(dbStock);
});

app.post("/", async (req, res) => {
  try {
    const postData = req.body;
    console.info("1", postData);
    console.info("2", dbStock);
    // Ajouter les données au tableau dans la mémoire
    dbStock[0].history.unshift({
      ...postData.post,
      id: dbStock[0].history.length + 1,
      date: Date.now(),
    });
    console.info(dbStock[0].history);
    // Convertir le tableau en format JSON
    const jsonData = JSON.stringify(dbStock, null, 2);
    // Chemin du fichier que vous souhaitez réécrire
    const filePath = "/home/lucas/2023-09-JS-BDX-P2-croissants/backend/db.json";
    // Écriture du nouveau contenu dans le fichier
    await fs.writeFile(filePath, jsonData);
    res.send("Données ajoutées avec succès et fichier réécrit.");
  } catch (error) {
    console.error(
      "Erreur lors de l'ajout des données ou de la réécriture du fichier :",
      error
    );
    res
      .status(500)
      .send(
        "Erreur lors de l'ajout des données ou de la réécriture du fichier."
      );
  }
});

app.listen(port, () => {
  console.warn(`Le serveur Express écoute sur le port ${port}`);
});
