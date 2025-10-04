

const jwt= require("jsonwebtoken");
const UserSchema = require("../Models/User");


const authMiddleware=async (req,res,next)=>{
    const authHeader=req.headers.authorization||"";
    const token= authHeader.staerWith('Bearer ')?authHeader.slice(7):null;

    if(!token) return
    res.status(400).json({msg:"missing token"});

    try {
        
    const payload= jwt.verify(token,process.env.JWt_Secret_KEY);
 const user= await UserSchema.findById(payload.id).select('-password');
 if(!user) return res.status(401).json({msg:"usernot found"});
 req.user={id:user._id.toString(),name:user.name, email:user.email
    ,role:user.role
  };
  next();
    }
     catch (error) {
        return res.status(401).json({msg:"Invalid TOken"});
    }
};

const permit= (...allowed)=>{
    return(req,res,next)=>{
        if(!req.user)return 
        res.status(401).json({msg:"forbidden"});
        next();
    };
};

module.exports={authMiddleware,permit};