const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    //required: true,
  },
  featuredImage: {
    type: String,
    //required: true,
  },
  year: {
    type: Number,
    //required: true,
  },
  mileage: {
    type: Number,
    //required: true,
  },
  fuelType: {
    type: String,
    enum: ["diesel", "essence", "hybride"],
    //required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Car = mongoose.model("Car", carSchema);
module.exports = Car;
