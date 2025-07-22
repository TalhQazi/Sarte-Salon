const mongoose = require("mongoose");

const subServiceSchema = new mongoose.Schema({
  name: String,
  time: String,
  price: Number,
  description: String,
});

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: String,
  subServices: [subServiceSchema],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Service", serviceSchema);
