// const express= require("express");
const app= require("./app");
const connectTODB=require("./config/db");
require("dotenv").config();

const PORT= process.env.PORT||  3006;
(async ()=>{
    try {
        await connectTODB();
        app.listen(PORT,()=>{
            console.log(`server started at port ${PORT}`);
        })

    } catch (error) {
        console.log(error);
    }
})();