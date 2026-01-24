const RoleBase=()=>{
    try {
        if(!req.user){
           return  res.status.json({msg:"NOt autnheticated"});
        }
        if(!allowedRoles.includes(req.user.role)){
            return res.status(403).json({ message: "Access denied" });
        }
        next();
    } catch (error) {
        next(error);
    }
}