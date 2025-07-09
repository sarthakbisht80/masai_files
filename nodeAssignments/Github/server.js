const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middleware/authMiddleware");

dotenv.config();
const app = express();
app.use(express.json());

app.use("/auth", authRoutes);

// Protected Test Route
app.get("/protected", authMiddleware, (req, res) => {
  res.json({ msg: "You are authorized!", user: req.user });
});

// DB & Server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.error("DB Connection Error:", err));
