const express= require("express");
const routes= express.Router();
const authenticateUser= require("../middleware/auth.middle");

routes.get("/home",(req,res)=>{
    res.json({msg:"This is home Route"});

});

routes.get("/users",authenticateUser,(req,res)=>{
    
    res.status(200).json({msg:"Valid  user Protected !"});
    
})
module.exports=routes;
