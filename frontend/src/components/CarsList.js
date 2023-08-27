import React, { useState, useEffect } from "react";
import axios from "axios";

const CarsList = () => {
  const [cars, setCars] = useState([]);
  const [editingCarId, setEditingCarId] = useState(null);
  const [editingCar, setEditingCar] = useState({
    title: "",
    price: 0,
    featuredImage: "",
    year: 0,
    mileage: 0,
    fuelType: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/car")
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des voitures", error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditingCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  const handleEditCar = (car) => {
    setEditingCarId(car._id);
    setEditingCar(car);
  };

  const handleUpdateCar = () => {
    axios
      .put(`http://localhost:5000/car/${editingCarId}`, editingCar)
      .then((response) => {
        const updatedCars = cars.map((car) =>
          car._id === editingCarId ? response.data : car
        );
        setCars(updatedCars);
        setEditingCarId(null);
        setEditingCar({
          title: "",
          price: 0,
          featuredImage: "",
          year: 0,
          mileage: 0,
          fuelType: "",
        });
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour de la voiture", error);
      });
  };

  const handleDeleteCar = (carId) => {
    axios
      .delete(`http://localhost:5000/car/${carId}`)
      .then((response) => {
        setCars(cars.filter((car) => car._id !== carId));
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression de la voiture", error);
      });
  };

  const handleDeleteConfirmation = (carId) => {
    const isConfirmed = window.confirm(
      "Êtes-vous sûr de vouloir supprimer cette voiture ?"
    );
    if (isConfirmed) {
      handleDeleteCar(carId);
    }
  };

  return (
    <div>
      <h1>Liste des voitures</h1>
      {cars.map((car) => (
        <div key={car._id}>
          <p>Titre: {car.title}</p>
          <p>Prix: {car.price}</p>
          <p>Année: {car.year}</p>
          <p>Kilométrage: {car.mileage}</p>
          <p>Carburant: {car.fuelType}</p>
          <p>
            Image:{" "}
            <img
              src={car.featuredImage}
              alt={car.title}
              style={{ maxWidth: "100px" }}
            />
          </p>
          <p>
            Date de création:{" "}
            {new Date(car.createdAt).toLocaleString("fr-FR", {
              timeZone: "UTC",
            })}
          </p>
          {editingCarId === car._id ? (
            <div>
              <input
                type="text"
                name="title"
                value={editingCar.title}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="price"
                value={editingCar.price}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="featuredImage"
                value={editingCar.featuredImage}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="year"
                value={editingCar.year}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="mileage"
                value={editingCar.mileage}
                onChange={handleInputChange}
              />
              <select
                name="fuelType"
                value={editingCar.fuelType}
                onChange={handleInputChange}
              >
                <option value="essence">Essence</option>
                <option value="diesel">Diesel</option>
                <option value="hybride">Hybride</option>
              </select>
              <button onClick={handleUpdateCar}>Enregistrer</button>
            </div>
          ) : (
            <>
              <button onClick={() => handleEditCar(car)}>Modifier</button>
              <button onClick={() => handleDeleteConfirmation(car._id)}>
                Supprimer
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default CarsList;

/*const handleDeleteCar = (carId) => {
    axios
      .delete(`http://localhost:5000/car/${carId}`)
      .then((response) => {
        setCars(cars.filter((car) => car._id !== carId));
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression de la voiture", error);
      });
  };

  const handleDeleteConfirmation = (carId) => {
    const isConfirmed = window.confirm(
      "Êtes-vous sûr de vouloir supprimer cette voiture ?"
    );
    if (isConfirmed) {
      handleDeleteCar(carId);
    }
  };*/
