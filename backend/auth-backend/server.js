// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const authRoutes = require("./routes/auth");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Use routes
// app.use("/api", authRoutes);

// const PORT = 4000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

const express = require("express");
const app = express();
const authRoutes = require("./routes/auth");

app.use(express.json()); // To parse JSON request bodies
app.use("/auth", authRoutes); // Use your auth routes

// Default homepage route for testing
app.get("/", (req, res) => {
  res.send("Welcome to the Snowboard Store API!");
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
