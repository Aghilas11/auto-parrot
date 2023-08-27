const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const cors = require("cors"); // Importez le module cors
const port = 5000;

//connexion a la db
connectDB();

const app = express();

// Middleware CORS
app.use(
  cors({
    origin: "http://localhost:3000", // Autorise les requêtes depuis votre application frontend
    credentials: true, // Permet d'envoyer les cookies (si nécessaire)
    optionsSuccessStatus: 200,
  })
);

// Middleware qui permet de traiter les données de la req
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/car", require("./routes/car.routes"));

//Lancer le server
app.listen(port, () => console.log("Le server a démarré au port " + port));
