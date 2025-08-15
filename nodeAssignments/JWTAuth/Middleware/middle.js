 const jwt = require("jsonwebtoken");

const Middleware= async(req,res,next)=>{
const token = req.headers.authorization?.split(" ")[1];
// console.log("token is",token);
// res.json({msg:"Token generated is",token});
try {
    
    const decode= jwt.verify(token,process.env.JWT_SECRET);
    console.log(decode);
    req.user= decode.email;
    next();
} catch (error) {
    
  return res.status(403).json({ msg: "Invalid Token" });
}
}

module.exports=Middleware;
