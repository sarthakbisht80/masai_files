const express= require("express");

const {authorModel}= require("../models/author.model");

const getData= async(req,res)=>{
    try {
        const data= await authorModel.find({});
        res.status(200).json({msg:"List of all authours" ,data});

    } catch (error) {
        console.log("error in getting data",error);
        res.status(500).json({msg:"Failed to get data"});
    }
}
const addData= async(req,res)=>{
    // console.log(req.body);
    let user= await authorModel.insertOne(req.body);
    res.status(200).json({msg:"New Author added Success",user});
}
const getauthorById= async(req,res)=>{
    const id= req.params.id;
    try {
        const author= await authorModel.findById(id);
        res.status(200).json({msg:"author is :",author});

    } catch (error) {
        console.log("Error findind user",error);
        res.status(400).json({msg:"Author not found!"});
    }
}
const updateData= async(req,res)=>{
    const id= req.params.id;
   try {
    
    let author= await authorModel.findById(id);
    if(!author){
        res.json({msg:"No author found!"});
    }
    await authorModel.findByIdAndUpdate(id,req.body);
    res.status(200).json({msg:"Author updated Sucess",author});
   } catch (error) {
    console.log("Error updateing the data");
    res.status(500).json({msg:"Internal server error"});
   }
}
const deleteData= async(req,res)=>{
    const id=req.params.id;
    try {
        let author= await authorModel.findById(id);
        if(!author){
            res.json({msg:"No user found"});
        }
        await  authorModel.findByIdAndDelete(id);
        res.status(200).json({msg:"User deleted succes"});

    } catch (error) {
        console.log("error deletin the user");
        res.status(500).json({msg:"Internal server error"});
    }
}

module.exports={getData,addData,updateData,getauthorById,deleteData};


















