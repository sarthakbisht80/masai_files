const express= require('express');
const connectToDB = require('./config/config');
const Router = require("./routes/routes");
const BookRouter = require('./routes/bookRoutes');

const app= express();
app.use(express.json());// 

connectToDB();
app.use("/user",Router);
app.use("/book",BookRouter);

const PORT=3005;
app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
})