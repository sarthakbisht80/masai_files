exports.errorHandler= (err,req,res)=>{
    console.log(err);
    res.status(400).json({error:"Something went wrong"});

};