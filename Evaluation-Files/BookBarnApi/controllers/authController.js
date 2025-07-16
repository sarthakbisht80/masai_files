const User= require("../models/User");
const jwt= require("jsonwebtoken");

const bcrypt = require('bcrypt');
const saltRounds = 10;
//token gentration
// const signToken=(id)=>JsonWebTokenError.sign({id},process.env.JWT_SECRET_KEY,{expiresIn:"1h"});

//signup
exports.signup=async (req, res)=>{

    try{
        const {email,password,role}= req.body;//getting email password  
        const user=await User.create({email,password,role});
    // const token = signToken(user._id);
    bcrypt.hash(password, saltRounds, async (err, hash) => {
            if (err) {
                return res.status(500).json({msg:"Error while hashing password" });
            }
            await UserModel.create({ username, email, password: hash ,role});
            // console.log("Raw password:", password, "Hashed-password:", hash);
            res.json({ msg: "Signup success" });
        });
    } catch(error) {
        res.status(500).json({ msg: "Something went wrong" });
    }
}

exports.login=async (req, res)=>{
    const {email,password}= req.body;
    const user =await User.findOne({email});
    if(!user){
        return res.status(400).json({error:"Invalid credintials"});
    }
     const hash = user.password;
        bcrypt.compare(password, hash, (err, result)=>{
            if(result===true){
                //user.role should alos be encrypted in the token as well as user id:
                const token= jwt.sign({UserId: user._id, role:user.role },process.env.JWT_SECRET_KEY,{expiresIn:"1h"});
                console.log("JWT token:",token);
                res.status(200).json({ msg: "Login success", token});
            }
            })
    
            return res.status(401).json({msg:"Invalid credentials"})
        
 };
// exports.forgotpassword=async()