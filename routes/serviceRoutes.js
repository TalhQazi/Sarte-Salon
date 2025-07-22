const express = require("express");
const router = express.Router();
const { addService, getAllServices } = require("../controllers/servicecontroller");
const { verifyAdmin } = require("../middleware/authmiddleware");

router.post("/admin/add", verifyAdmin, addService);
router.get("/client/list", getAllServices);

module.exports = router;
