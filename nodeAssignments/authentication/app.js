const express = require("express");

const app= express();
const Router=require("./routes/authRoutes");



app.use(express.json());

app.use("/",Router);

const PORT=4008;
app.listen(PORT,()=>{
    console.log(`server stared at port ${PORT}`);
    
})