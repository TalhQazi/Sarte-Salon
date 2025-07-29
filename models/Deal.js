const mongoose = require('mongoose');

const dealSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
});

module.exports = mongoose.model('Deal', dealSchema);
