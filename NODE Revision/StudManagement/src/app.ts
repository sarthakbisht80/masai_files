const express= require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");

dotenv.config();

const app = express();


app.use(express.json());


app.use("/api", studentRoutes);

connectDB();

module.exports = app;  
