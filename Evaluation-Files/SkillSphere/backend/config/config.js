const mongoose= require("mongoose");

const connectToDB= async(req,res)=>{

    try {
        
        await mongoose.connect('mongodb://127.0.0.1:27017/latestShell');
        console.log("Conneted to db skillsp here");

    } catch (error) {
        console.log("Error connecting to db",error);
    }
}
module.exports= connectToDB;