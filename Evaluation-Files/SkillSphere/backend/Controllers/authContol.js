const User= require("../Models/User");
const jwt= require("jsonwebtoken");
const signToken=(user)=>{
    return jwt.sign({id:user_id,role:user.role},process.env.JWT_SECRET,{
        expiresIn:"7d"
    });
};

exports.register=async(req,res)=>{
    try {
        
        const {name,email,password,role}=req.body;
        const user= new User({name, email,password,role});
        await user.save();
        const token= signToken(user);
        res.status(201).json({token,user:{id:user,_id,name:user.name ,
            email:user.email,role:user.role}});

    } catch (error) {
        if(error)return res.status(400).json({msg:"Email already exists"});
        res.status(500).json({msg:"Server Error",error:error.message})
    }
}

exports.login=async(req,res)=>{
    try {
        const {email,password}= req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({msg:"Invalid credentials"})
  
        const isMatch= await user.comparePassword(password);
        if(!isMatch) return 
        res.status(400).json({msg:"Invalid Crediantials"});

        const token= signToken(user);
        res.json({token,user:{id:user._id, name:user.name ,email:user.email
            ,role:user.role
        }});
        } catch (error) {
       
            res.status(500).json({msg:"Server error"});
    }
}