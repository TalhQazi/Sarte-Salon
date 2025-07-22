const express = require("express");
const router = express.Router();
const { addDeal, getAllDeals } = require("../controllers/dealcontroller");
const { verifyAdmin } = require("../middleware/authmiddleware");

// Admin: Add Deal
router.post("/admin/add", verifyAdmin, addDeal);

// Client: Get All Deals
router.get("/client/list", getAllDeals);

module.exports = router;
