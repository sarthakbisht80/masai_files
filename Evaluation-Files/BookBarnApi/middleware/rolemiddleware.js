const authorize=(...roles)=>(req,res,next)=>{
if(!roles.includes(req.user.role)){
    return res.status(403).json({error:"Forbbiden for this user"});
}
next();
}
module.exports=authorize;