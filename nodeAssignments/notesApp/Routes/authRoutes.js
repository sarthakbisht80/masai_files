const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");
const Note = require("../models/Note");
const { route } = require("./noteRoutes");
let saltRounds= 10;
const router = express.Router();//create a router for creating routes

//signup route

router.post("/signup",async(req,res)=>{
  
   const {name,email,password} = req.body;
 
  try {
   const user= await User.findOne({email});
   if(user) return res.json({msg:"Already exits this user "});
  
      const  hashed= await bcrypt.hash(password,saltRounds);//password hased

      const newUser= await User.create({ name, email , password:hashed, } )
      await newUser.save();
      res.status(201).json({ msg: "User created successfully", user: newUser,email:newUser.email
       });
    
  } catch (error) {
  res.status(400).json({msg:"Server not found"});    
  }
});


router.post("/login",async (req,res)=>{

  const {email,password}= req.body;
  try {
    const user = await User.findOne({email});
    if(!user) return res.json({msg:"No such user exists"});
    
    let ValidUser=  await bcrypt.compare(password,user.password);
    if(!ValidUser) return res.status(401).json({msg:"Invalid Credientials"});
    //if matched password generate token for the user
    let token = jwt.sign(
        {userId: user._id, email: user.email},
        process.env.JWT_SECRET,
        {expiresIn:"1hr"}
    )
  res.status(200).json({
      msg: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email
      }
    });

  
  } catch (error) {
        res.status(500).json({ msg: "Login failed", error: err.message }); 
  }
})

module.exports = router;









