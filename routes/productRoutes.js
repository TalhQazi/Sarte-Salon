const express = require("express");
const router = express.Router();
const {
  addMainProduct,
  addSubProduct,
  getAllProducts
} = require("../controllers/productcontroller");
const { verifyAdmin } = require("../middleware/authmiddleware");

// Admin: Add Main Product
router.post("/admin/main", verifyAdmin, addMainProduct);

// Admin: Add Sub Product to Existing Product
router.post("/admin/:productId/sub", verifyAdmin, addSubProduct);

// Client: Get All Products with Sub Products
router.get("/client/list", getAllProducts);

module.exports = router;
