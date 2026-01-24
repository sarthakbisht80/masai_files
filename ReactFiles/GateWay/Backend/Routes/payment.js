const express = require("express");
const razoroay = require("razorpay");
const crypto = require("crypto");


const Router= express.Router();





//create a route order
Router.get("/create-route", async (req,res)=>{
    try {
        const {amount}= req.body;
    } catch (error) {
        
    }
})

