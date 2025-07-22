const Deal = require("../models/Deal");

// Admin: Add new deal
exports.addDeal = async (req, res) => {
  try {
    const { name, price, description, image } = req.body;

    const newDeal = new Deal({ name, price, description, image });
    await newDeal.save();

    res.status(201).json({ message: "Deal added successfully", newDeal });
  } catch (err) {
    res.status(500).json({ message: "Error adding deal", error: err.message });
  }
};

// Client: Get all deals
exports.getAllDeals = async (req, res) => {
  try {
    const deals = await Deal.find().sort({ createdAt: -1 });
    res.status(200).json(deals);
  } catch (err) {
    res.status(500).json({ message: "Error fetching deals", error: err.message });
  }
};
