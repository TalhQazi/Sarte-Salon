const mongoose = require("mongoose");

const subProductSchema = new mongoose.Schema({
  name: String,
  time: String,
  price: Number,
  description: String,
  image: String
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  subProducts: [subProductSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Product", productSchema);
