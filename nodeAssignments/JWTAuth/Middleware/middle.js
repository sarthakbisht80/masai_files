 const jwt = require("jsonwebtoken");

const Middleware=async(req,next,res)=>{
  const token= req.headers.Authoriation.split(" ")[1]; //extract token from hadears
  if(!token){
    req.status(400).json({msg:"no token found User is not registered."});
  }
  try {
    
    const decoded= jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.users=decoded; //accessible for all the Routes

  } catch (error) {
    res.status(404).json({msg:"Error ",error});
    
  }
}

module.exports=Middleware;
