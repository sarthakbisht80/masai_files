const express = require("express");

const jwt = require("jsonwebtoken");///for generating token
const User= require("../models/User");
const bcrypt = require('bcrypt');//for hasing the password
const saltRounds = 10;

// const router = express.Router();

// // POST /signup
// router.post("/signup", async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const userExists = await User.findOne({ email });
//     if (userExists) return res.status(400).json({ msg: "User already exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = new User({ name, email, password: hashedPassword });
//     await user.save();

//     res.status(201).json({ msg: "Signup successful" });
//   } catch (err) {
//     res.status(500).json({ msg: "Error during signup", error: err.message });
//   }
// });

// // POST /login
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ msg: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ msg: "Invalid credentials" });

//     const token = jwt.sign(
//       { userId: user._id, email: user.email },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     res.status(200).json({ msg: "Login successful", token });
//   } catch (err) {
//     res.status(500).json({ msg: "Error during login", error: err.message });
//   }
// });

// module.exports = router;



const router= express.Router();

//signup route
router.post("/signup",async (req,res)=>{
  
  try {
  const {email,password,name}= req.body;
     // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  const existuser= await User.findOne({email});
  if(existuser){
    return res.status(409).json({msg:"User already exists"});
  }
//const hashed = await bycrypt.hash(password,saltROunds);
  const hashed =  await bcrypt.hash(password, saltRounds);
   const newUser = await User.create({
    email,password:hashed, name
   });
   res.status(201).json({msg:"user signup success",newUser});
} catch (error) {
  console.log(error);
  res.status(404).json({msg:"something went wrong"});
}
})
 


//login route 

router.post("/login",async(req,res)=>{
  
  const {email,password}= req.body;
  
  try {
    const user= await User.findOne({email});
    if(!user){
      return res.json({msg:"NO user found "});
    }
    //compairing the password wirh hased one
    const hash= user.password;//stored hashed password
    const matched =   bcrypt.compare(password, hash) ;
    
   if(matched){
     //if password is matched that means user exist 
     const token = jwt.sign({userId:user._id, email:user.email },process.env.JWT_SECRET,{expiresIn:"1h"});
     res.json({msg:"token  genreated",token});
     
    }
    
  } catch (error) {
    console.log(error);
    res.status(404).json({msg:"something went wrong wile genreaing token",error});
  }
})


module.exports=router;