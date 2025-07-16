const Book = require("../models/Book");


exports.listBook= async(req,res)=>{
    const filter ={isdeleted :false};
    let query = Book.find(filter).populate("author");

    if(req.query.top==='true')query=query.sort({pages:-1}).limit(5);
    const books= await query;
    res.json(books);

}

exports.createbook= async(req,res)=>{
    const book= await Book.create(req.body);
    res.status(201).json(book);

};
exports.getBook= async (req,res)=>{
    const book =await Book.findById(req.params.id).populate("author");

    if(!book) return res.status(404).json({msg:"not found"});
    res.json(book);
}

exports.updateBook=async (req,res)=>{
    const book= await Book.findByIdAndUpdate({_id:req.params.id , isdeleted:false}, 
        req.body, {new:true , runValidators:true});
        if(!book) return res.status(404).json({msg:"not found"});

        res.json(book);
}
exports.deleteBook= async (req,res)=>{
const book= await Book.findByIdAndUpdate({_id:req.params.id , isdeleted:true}, 
         {new:true , runValidators:true});
        if(!book) return res.status(404).json({msg:"not found"});
  res.json({msg:"Book soft delted"});
};
