const express= require("express");
const router= express.Router();
const Book = require("../Models/Book");
const auth= require("../Middleware/AuthMiddleware");
const {permit}= require("../Middleware/Permit");

router.get("/",async (req,res,next)=>{
    try {
        
        let {page =1, limit=10 ,genre,author}= req.query;
        page=Number(page) ||1;
        limit= Math.min(Number(limit) || 10,100);
        
        const filter={};
        if(genre) filter.genre= new RegExp(genre,"i");
        if(author) filter.author= new RegExp(author,"i");

        const total= await Book.countDocuments(filter);
        const totalPages= Math.max(1,Math.ceil(total/limit));
        const books= await Book.find(filter)
        .sort({createdAt:-1})
        .skip((page - 1)* limit)
        .limit(limit)
        .lean();
        res.json({books ,total,page,totalPages,limit});


    } catch (error) {
        next(err)
    }
})

router.post("/",auth,permit("admin"),async (req,res,next)=>{
    try {

        const {title ,author,genre,publishedYear,price,description}=req.body;
        if(!title || ! author || !price ==null) return 
        res.status(400).json({msg:"Missing required feilds"});
        const newBook= await Book.create({title,author,genre,publishedYear,price,description});
        res.status(201).json(newBook);

    } catch (error) {
        next(err);
    }
});
router.put("/:id",auth,permit('admin'),async(req,res,next)=>{
     try {
        
        const book= await Book.findByIdAndUpdate(req.params.id,req.body ,{new:true, runValidators:true});
        if(!book) return 
        res.status(404).json({msg:"Book notfound "});
        res.json(book);

     } catch (error) {
        next(err);
     }
})
router.delete("/:id",auth,permit("admin"),async(req,res,next)=>{
    try {
        
        const book = await Book.findByIdAndDelete(req.params.id);
        if(!book) return
        res.status(404).json({msg:"Deleted"});

    } catch (error) {
        next(err);
    }
})
module.exports= router;