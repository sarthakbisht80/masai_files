const Author = require("../models/Author");
const Author= require("../models/Author");
const Book= require("../models/Book");

exports.listAuthours= async(req,res)=>{

    const Authors= await Author.find();
    res.json(Author);
};
exports.createAuthor= async(req,res)=>{
    const Author= await Author.create(req.body);
    res.status(201).json(Author);
}

exports.getAuthor= async(req,res)=>{
    const author= await Author.findById(req.params.id);
    if(!author){
        return res.status(404).json({error:"not found"});
    }
    res.json(author);
};


exports.updateauthor= async(req,res)=>{
    const author= await Author.findByIdAndUpdate(req.params.id,req.body,{new:true ,runValidators:true});
    if(!author) return res.status(404).json({error:"not found"});
    res.json(author);

}

//delete author
exports.deleteauthor= async (req,res)=>{
    const author= await Author.findByIdAndDelete(req.params.id);
    if(!author) return res.status(404).json({error:"not found"});

    await Book.updateMany({author:author._id});
    await author.remove();
    res.json({msg:"Author delted book orpahned"});
};

