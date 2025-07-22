const Product = require("../models/Product");

// Admin: Add Main Product
exports.addMainProduct = async (req, res) => {
  try {
    const { name, image } = req.body;
    const newProduct = new Product({ name, image });
    await newProduct.save();
    res.status(201).json({ message: "Main product added", newProduct });
  } catch (err) {
    res.status(500).json({ message: "Error adding product", error: err.message });
  }
};

// Admin: Add Sub Product to Existing Main Product
exports.addSubProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, time, price, description, image } = req.body;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    product.subProducts.push({ name, time, price, description, image });
    await product.save();

    res.status(201).json({ message: "Sub product added", product });
  } catch (err) {
    res.status(500).json({ message: "Error adding sub product", error: err.message });
  }
};

// Client: Get All Products with Sub Products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products", error: err.message });
  }
};
