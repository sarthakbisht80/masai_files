const express= require("express");
const app= express();
const taskRoutes= require("./routes/taskRoute");
app.use(express.json());

const PORT=3005;


app.use('/',taskRoutes);
app.use((req,res)=>{
    res.status(404).json({msg:"404 not FOund!"});
})
app.listen(PORT,()=>{
    console.log(  `server started at ${PORT}`);
})
