
require("dotenv").config();
const express= require("express");
const mongoose= require("mongoose");
const morgan = require("morgan");
const cors= require("cors");
const app= express();
const authRoutes= require("./Routes/AuthRoutes");
const bookRoutes= require("./Routes/Books");

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


app.use("/api/auth",authRoutes);
app.use("api/books",bookRoutes);

//error handler
app.use((err,req,res,next)=>{
    console.log(err);
    res.status(err.status || 500),json({msg:err.message || "Server Erorr"});
})


const PORT= process.env.PORT || 5000;
const connectTODB = async()=>{
   try {
     await mongoose.connect(process.env.MONGO_URI);
     console.log("MongoDB connected");
         app.listen(PORT ,()=> console.log("Sever runs on port",PORT));
   } catch (error) {
    console.log("cannt connext to db",error);

   }
}
connectTODB();
