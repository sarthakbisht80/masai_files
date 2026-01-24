const express = require("express");

const jwt = require("jsonwebtoken");///for generating token
const User= require("../models/User");
const bcrypt = require('bcrypt');//for hasing the password
const saltRounds = 10;
const router= express.Router();

//signuproute
router.post("/signup",async(req,res)=>{

  //basic validation
  const {email,password,name}=req.body;
try {
    if(!email|| !password||!name){
      res.status(404).json({msg:"all feilds are Required"});
    }
    const existingUser= await User.findOne({email});
    if(existingUser){
        res.status(404).json({msg:"User already present "});
    }
    const hashed=  await bcrypt.hash(password,saltRounds);//this will hash password
  //creating a  new User 
     const NewUser= await User.create({
      email,password:hashed,name
    })
    NewUser.save();//saved in db
    res.status(201).json({msg:"User crated Usccesfully",NewUser});
} catch (error) {
   console.log(error);
   res.status(404).json({msg:"something went wrong"});
}
})




//LoginRoute
router.post("/login",async (req,res) => {
  const {email,password}= req.body;

  try {
    const user=await User.findOne({email});
    if(!user){
      res.status(400).json({msg:"no such user please singup first "});
    }  
    //compare password 
    const hash= user.password;
    const matched= await bcrypt.compare(password,hash);
    //create token for registered user
    if(matched){

      //if pasword matched with hased one then create token
       //if password is matched that means user exist 
     const token = jwt.sign(
      {userId:user._id,
        email:user.email
      },process.env.JWT_SECRET,
      {expiresIn:"1d"}
);
     res.json({msg:"token  genreated",token});
     
    }
  } catch (error) {
        console.log(error);
    res.status(404).json({msg:"something went wrong wile genreaing token",error});
  }
})













// // //login route 

// router.post("/login",async(req,res)=>{
  
//   const {email,password}= req.body;
  
//   try {
//     const user= await User.findOne({email});
//     if(!user){
//       return res.json({msg:"NO user found "});
//     }
//     //compairing the password wirh hased one
//     const hash= user.password;//stored hashed password
//     const matched =   bcrypt.compare(password, hash) ;
    
//    if(matched){
//      //if password is matched that means user exist 
//      const token = jwt.sign({
// userId:user._id, email:user.email },  process.env.JWT_SECRET,
// {expiresIn:"1h"}
// );
//      res.json({msg:"token  genreated",token});
     
//     }
    
//   } catch (error) {
//     console.log(error);
//     res.status(404).json({msg:"something went wrong wile genreaing token",error});
//   }
// })


 module.exports=router;