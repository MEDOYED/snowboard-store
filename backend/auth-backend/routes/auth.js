// routes/auth.js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/database");
const logDatabase = require("../middlewares/logger");

const router = express.Router();
const SECRET = process.env.JWT_SECRET || "my_secret_key";

// Register
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  db.run(
    `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
    [name, email, hashedPassword],
    function (err) {
      if (err) return res.status(400).json({ error: "Email already used" });
      res.status(201).json({ id: this.lastID, name, email });
    }
  );
});

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, user) => {
    if (err || !user) return res.status(401).json({ error: "Invalid credentials" });

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: "1h" });

    console.log("User logged in:", { email: user.email });
    logDatabase("users");
    res.json({ token, name: user.name });
  });
});

module.exports = router;
