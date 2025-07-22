const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Load env variables
dotenv.config();

// Create express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import Routes
const adminAuthRoutes = require("./routes/adminauth");
const serviceRoutes = require("./routes/serviceRoutes");
const productRoutes = require("./routes/productroutes");

// Use Routes
app.use("/api/admin", adminAuthRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/products", productRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB Error:", err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
