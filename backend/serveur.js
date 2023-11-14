const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs").promises;

const app = express();
const port = 3000;

const dbStock = require("./db.json");

app.use(cors({}));
app.use(bodyParser.json());

const uuidGenerator = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    // eslint-disable-next-line no-bitwise
    const r = (Math.random() * 16) | 0;
    // eslint-disable-next-line no-bitwise
    const v = c === "x" ? r : (r & 0x3) | 0x8;

    return v.toString(16);
  });

app.get("/", (req, res) => {
  res.send(dbStock);
});

app.post("/", async (req, res) => {
  try {
    const postData = req.body;
    // Ajouter les données au tableau dans la mémoire
    dbStock[0].history.unshift({
      ...postData.post,
      id: uuidGenerator(),
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

app.delete("/comments/:uuid", async (req, res) => {
  const itemId = req.params.uuid;

  try {
    // Chargez le fichier JSON actuel
    const data = await fs.readFile("db.json", "utf8");
    const jsonData = JSON.parse(data);

    // Filtrez les éléments pour exclure celui avec l'ID à supprimer
    jsonData[0].history = jsonData[0].history.filter(
      (item) => item.id !== itemId
    );

    // Écrivez le fichier JSON mis à jour
    await fs.writeFile("db.json", JSON.stringify(jsonData, null, 2));

    res.json({ success: true, message: "Item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});
