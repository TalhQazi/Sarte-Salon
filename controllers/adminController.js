const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Dummy Admin credentials (can be from DB too)
const adminUser = {
  email: "admin@example.com",
  password: bcrypt.hashSync("admin123", 10), // hashed password
};

exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  if (email !== adminUser.email) {
    return res.status(401).json({ message: "Invalid email" });
  }

  const isMatch = await bcrypt.compare(password, adminUser.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ message: "Login successful", token });
};

exports.logoutAdmin = (req, res) => {
  // On client side: just delete token
  res.json({ message: "Logout successful" });
};
