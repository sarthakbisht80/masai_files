const mongoose= require("mongoose");

const connectTODB= async()=>{
    try {
            await mongoose.connect(process.env.MONGO_URI);
            console.log("connecetd to db");
    } catch (error) {
        console.log(error);
    }

}

module.exports= connectTODB;
