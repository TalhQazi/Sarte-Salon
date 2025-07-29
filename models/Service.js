const mongoose = require('mongoose');

const subServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  time: { type: String, required: true },
  description: { type: String },
});

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String }, // You can change to Buffer if storing image directly
  subServices: [subServiceSchema],
});

module.exports = mongoose.model('Service', serviceSchema);
