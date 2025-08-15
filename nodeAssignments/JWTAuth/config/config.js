const mongoose= require("mongoose");
const connectToDb=async()=>{
   
   try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to db")
    
   } catch (error) {
res.status(404).json({error:"Something went wrong"});
}

}
module.exports= connectToDb;
