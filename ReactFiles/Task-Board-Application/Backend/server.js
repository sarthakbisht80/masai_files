const express = require("express");
const dotenv= require("dotenv").config();

const cors= require('cors');
const mongoose= require("mongoose");
const authRoutes = require("./Routes/authRoutes");


const app= express();
app.use(express.json());

app.use("/api/auth",authRoutes);







const PORT= process.env.PORT || 3004;
const MONGO_URI= process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/taskBoard'
mongoose.connect(MONGO_URI)
    .then(()=>{
        console.log("MONGO DB connected");
        app.listen(PORT,()=>{
            console.log("Server started at 3004");
        })
    })

    .catch(err=>{
        console.log("Mongodb COnnextion error",err);
        process.exit(1);
    })