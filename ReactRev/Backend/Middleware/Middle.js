
const express= require("express");
const jwt= require("jsonwebtoken");
const protected= async(req,res,next)=>{
    try {
            const token = req.headers.authorization.split(" ")[1];
            if(!token) {
                res.status(400).json({msg:"No token found user is  Unauthorized"});
            }
            console.log(token);
            //decode that token with the help of jwt key.
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            req.user= decoded;
            next();
            res.status(200).json({msg:"User protected authorized✅"});
    } catch (error) {
        res.status(404).json({msg:"server error"});
    }
}
module.exports=protected