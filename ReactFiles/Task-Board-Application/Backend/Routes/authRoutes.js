const express = require("express");

const jwt= require("jsonwebtoken");

const UserSchema=require("../Models/User");
const User = require("../Models/User");
const authMiddleware = require("../Middleware/authMiddle");

const router= express.Router();

//registration
router.post("/register",async (req,res)  => {
    const {name,email,password,role}= req.body;

if(!name|| !email|| !password||!role) return res.status(400).json({msg:"All fields are required"});

const ExistingUser= await UserSchema.findOne({email:email.toLowerCase()});
if(ExistingUser) return 
res.status(400).json({msg:"Email already used"});

const user= new User({name,email,password,role:role==="admin" ?"admin":"member"});
await user.save();

const token= jwt.sign({id:user._id},
    process.env.JWT_Secret_KEY,{expiresIn:"7d"});
    res.status(201).json({user:{id:user._id , name:user.name,email:user.email,
        role:user.role
    },token});

    });

    //login

router.post('/login', async (req,res) => {
    const {email,password} = req.body;
    if(!email || !password) return 
    res.status(400).json({msg:"Feilds are required"});

    const user= await UserSchema.findOne({email:email.toLowerCase()});
    if(!user) return
    res.status(400).json({msg:"Invalid credentioals"});
    const ok = await UserSchema.checkPassword(password);
    if(!ok) return
    res.status(400).json({msg:"Invalid credentilas"});
    
    const token= jwt.sign({id:user._id},process.env.JWT_Secret_KEY,{expiresIn:'7d'});
    res.json({user:{id:user._id,name:user.name, email:user.email,
        role:user.role    },token});
});

router.get('/me',authMiddleware,(req,res)=>{
    res.json({user:req.user});
});

module.exports=router;