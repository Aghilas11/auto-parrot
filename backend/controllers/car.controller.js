const Car = require("../models/car.model");

const carController = {
  createCar: async (req, res) => {
    const { title, price, featuredImage, year, mileage, fuelType } = req.body;

    try {
      const newCar = new Car({
        title,
        price,
        featuredImage,
        year,
        mileage,
        fuelType,
      });

      const savedCar = await newCar.save();
      res.status(200).json(savedCar);
    } catch (error) {
      res
        .status(400)
        .json({ message: "Erreur lors de la création de la voiture" });
    }
  },

  getAllCars: async (req, res) => {
    try {
      const cars = await Car.find();
      res.json(cars);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erreur lors de la récupération des véhicules" });
    }
  },

  getCarById: async (req, res) => {
    const carId = req.params.id;

    try {
      const car = await Car.findById(carId);
      if (!car) {
        return res.status(404).json({ message: "Véhicule non trouvée" });
      }
      res.json(car);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erreur lors de la récupération de la voiture" });
    }
  },

  updateCarById: async (req, res) => {
    const carId = req.params.id;
    const { title, price, featuredImage, year, mileage, fuelType } = req.body;

    try {
      const updatedCar = await Car.findByIdAndUpdate(
        carId,
        { title, price, featuredImage, year, mileage, fuelType },
        { new: true }
      );
      if (!updatedCar) {
        return res.status(404).json({ message: "Voiture non trouvée" });
      }
      res.json(updatedCar);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erreur lors de la mise à jour de la voiture" });
    }
  },

  deleteCarById: async (req, res) => {
    const carId = req.params.id;

    try {
      const deletedCar = await Car.findByIdAndRemove(carId);
      if (!deletedCar) {
        return res.status(404).json({ message: "Voiture non trouvée" });
      }
      res.json({ message: "Voiture supprimée avec succès" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erreur lors de la suppression de la voiture" });
    }
  },
};

module.exports = carController;
