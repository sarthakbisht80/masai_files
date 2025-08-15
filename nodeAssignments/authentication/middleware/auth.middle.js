
// simple funciton to check user is  valid or not 
// const  auth =(req,res,next)=>{
// const token = req.headers['authorization'];
// if(token==="Ricky@#123"){
//     next();
// }
// else{
//     res.status(400).json({msg:"unauthorized User.. "})
// }

// }
const authentication=async(req,res)=>{
    const {username} = req.body;
    const {password}= req.body;
    if(username==="Sarthak" && password==="Ricky@123"){
        res.json({Token:"1234456789"});
    }
    else{
        res.json({msg:"Incorect Credintials."});
    }


}

module.exports = authentication;
