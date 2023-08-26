const express = require("express");
const carController = require("../controllers/car.controller");

const router = express.Router();

// Créer une voiture
router.post("/", carController.createCar);

// Obtenir toutes les voitures
router.get("/", carController.getAllCars);

// Obtenir une voiture par ID
router.get("/:id", carController.getCarById);

// Mettre à jour une voiture par ID
router.put("/:id", carController.updateCarById);

// Supprimer une voiture par ID
router.delete("/:id", carController.deleteCarById);

// Autres routes pour des opérations spécifiques...

module.exports = router;
