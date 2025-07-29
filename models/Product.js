const mongoose = require('mongoose');

const subProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  time: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  subProducts: [subProductSchema],
});

module.exports = mongoose.model('Product', productSchema);
