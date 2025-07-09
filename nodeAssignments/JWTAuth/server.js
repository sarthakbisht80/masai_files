const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./Routes/authRoutes");
const authMiddleware = require("./Middleware/authMiddleware");

dotenv.config();
const app = express();
app.use(express.json());

// Auth Routes
app.use("/auth", authRoutes);

// Protected Route Example
app.get("/protected", authMiddleware, (req, res) => {
  res.json({ msg: "You are authorized", user: req.user });
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.error("MongoDB connection error:", err));
