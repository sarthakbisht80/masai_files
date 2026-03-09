const jwt= require("jsonwebtoken");
const users= require("../utils/users");
const login= (req,res)=>{
    const {username,password}= req.body;
    if(!username || ! password){
        return res.status(400).json({msg:"username and password required"});
    }
    const user= users.find( (u)=>u.username=== username && u.password=== password

    );
    if(!user){
        return res.status(401).json({
            msg:"Invalid cred"
        });
    }
  const token= jwt.sign(
    {id:user.id,username:user.username},
    process.env.JWT_Secret,
    {expiresIn:"1hr"}
  );
  res.json({token});
};

const getProfile=(req,res)=>{
    const user= req.user;
    res.json({
        username:user.username,
        welcome:`Welcone ${user.username}`
    })
};
const logout=(req,res)=>{
    res.json({msg:"logged out sucesfuly"})
};
module.exports={
    login,
    logout,
    getProfile
}