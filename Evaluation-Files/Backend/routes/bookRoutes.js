const express= require("express");
const {authorModel, bookModel}= require("../models/author.model");
const {getbooks, addbook, updatebook,getbookById,deleteBookById } =require("../controllers/bookControl");
const BookRouter= express.Router();

BookRouter.get("/books", getbooks);
BookRouter.post("/add-book",addbook);
BookRouter.get("/books/:id",getbookById);
BookRouter.patch("/book/:id",updatebook);
BookRouter.delete("/book/:id",deleteBookById);

// Router.delete("/authors/:id",)
module.exports=BookRouter;
