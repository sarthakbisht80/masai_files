const express= require("express");
const User= require("../Models/userModel");
const Router= express.Router();
const dotenv= require("dotenv");
dotenv.config();
const bycrypt= require("bcryptjs");
const salt =10;
const jwt = require("jsonwebtoken");
const protect= require("../Middleware/Middle");

Router.post("/signup",async (req,res)=>{

    const {email,password,name}= req.body;
    if(!email|| !password|| !name){
        res.json({msg:"Enter all credetianls"});
    }
    try {
        const ExistingUser= await User.findOne({email});
        if(ExistingUser){
            res.status(400).json({msg:"User already exists"})
        }
        const hashed= await bycrypt.hash(password,salt);

        const NewUser=await User.create({email, password:hashed,name});
        NewUser.save();
        res.json({ _id: NewUser.id, name: NewUser.name, email: NewUser.email });
    } catch (err) {
          res.status(500).json({ message: err.message });
    }
})

Router.post("/login",async (req,res)=>{
    try {
        const {email,password}= req.body;
    if(!email|| !password){
            
        res.json({msg:"Enter all credetianls"});
        }
        const IsUser= await User.findOne({email});
        if(!IsUser){
            res.status(400).json({msg:"NO user found ."})
        }
        const isMatch= bycrypt.compare(password,IsUser.password);
         if (!isMatch) {
      return res.status(400).json({ msg: "Invalid password" });
    }
    //If it macthed then sign a token for registred user
        const token= jwt.sign({
          id:IsUser._id,
        },"sss",{expiresIn:"16m"}  
    );
            return res.json({
      msg: "Login successful",
      token,
      user: {
        id: IsUser._id,
        name: IsUser.name,
        email: IsUser.email
      }
    });
    } catch (error) {
          console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
    }

)

module.exports = Router;