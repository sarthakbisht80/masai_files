const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./Routes/authRoutes");
const noteRoutes = require("./Routes/noteRoutes");

dotenv.config();
const app = express(); //creating ex[res app]

app.use(express.json());
// app.use("/router-path",authRoutes);

app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.error("MongoDB connection error:", err));
