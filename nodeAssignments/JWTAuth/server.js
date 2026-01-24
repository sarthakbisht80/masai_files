const express = require("express");
const authRoutes= require("./Routes/authRoutes")
const middleware= require("./Middleware/middle");
const authMiddleware = require("./Middleware/authMiddleware");
const connectToDb = require("./config/config");

require("dotenv").config();
const PORT=process.env.PORT|| 5000;
const app = express();


connectToDb();//connnecting db to backend

app.use(express.json());///middleware

// Auth Routes
app.use("/auth", authRoutes);


app.get("/test",(req,res)=>{
  res.json({msg:"test route"})
})
// Protected Route Example
app.get("/protected", authMiddleware, (req, res) => {
  res.json({ msg: "You are authorized", user: req.user });
});

app.listen(PORT,(req,res)=>{
console.log(`port started at ${PORT}`);
})


