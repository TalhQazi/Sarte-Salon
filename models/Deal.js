const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: Number,
  description: String,
  image: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Deal", dealSchema);
