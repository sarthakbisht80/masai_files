const express= require("express");
const connectTODB= require("./config/config");
require("dotenv").config();

const app= express();

app.use(express.json()); //midlleware

connectTODB();

app.get("/test",(req,res)=>{
    res.json({msg:"this is text route"});
})

const PORT= process.env.PORT || 3004
app.listen(PORT,()=>{
    console.log("Server Started at PORT",PORT);
})
