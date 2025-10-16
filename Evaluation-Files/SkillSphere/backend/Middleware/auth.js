const jwt= require("jsonwebtoken");
const User= require("../Models/User");

const auth= async(req,res,next)=>{
    try {
          const token= req.hedaers.authorization?.split(" ")[1];
          if(!token)return res.status(400).json({error:"Unauthorized user"});
      
          const decode= jwt.verify(token,process.env.JWT_SECRET_KEY);
          req.user= await User.find(decode.id);
          if(!req.user)
              return res.status(401).json({error:"Unauthorized"});
          next();
    } catch (error) {
        res.status(400).json({mshg:"Inavlid token"})
    }
  };
  
module.exports= auth;