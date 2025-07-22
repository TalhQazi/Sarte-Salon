const Service = require("../models/Service");

exports.addService = async (req, res) => {
  try {
    const { title, image, subServices } = req.body;

    const newService = new Service({ title, image, subServices });
    await newService.save();

    res.status(201).json({ message: "Service added successfully", newService });
  } catch (err) {
    res.status(500).json({ message: "Error adding service", error: err.message });
  }
};

exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ message: "Error fetching services", error: err.message });
  }
};
