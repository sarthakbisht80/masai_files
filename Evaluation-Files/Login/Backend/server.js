const express= require("express");
require("dotenv").config();
const cors= require("cors");

const app = express();

const authRoutes= require("./Routes/authRoutes");

app.use(cors());
app.use(express.json());

app.use("/test",(req,res)=>{
    res.json({msg:"test page"});
})
app.use("/ ",authRoutes);
app.listen(process.env.PORT,()=>{
    console.log(`Server running at port ${process.env.PORT}`);
})