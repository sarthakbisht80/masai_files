function permit(...allowedRoles){
    return (req,res,next)=>{
        const role= req.user?.role;
        if(!role) return 
        res.status(401).json({msg:"Unauthorized"});
        if(allowedRoles.includes(role))
            return next();
        return res.status(403).json({msg:"Forbidden insuffient permissions"});

    };
}
module.exports={permit};