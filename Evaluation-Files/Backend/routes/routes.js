const express= require("express");
const {authorModel, bookModel}= require("../models/author.model");
const {getData, addData, updateData, deleteData, getauthorById}= require("../controllers/authorControl");
const Router= express.Router();
const limiter = require("../middlewares/timestamp");


Router.get("/authors",limiter,getData);
Router.post("/add-authors",addData);
Router.get("/authors/:id",getauthorById);
Router.delete("/delete-author/:id",deleteData);
Router.patch("/authors/:id",updateData);

// Router.delete("/authors/:id",)
module.exports=Router;
