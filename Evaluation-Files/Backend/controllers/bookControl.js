
const bookModel =require("../models/book.model");

const getbooks= async(req,res)=>{

    try {
        const data= await bookModel.find({});
        res.status(200).json({msg:"List of all Books" ,data});

    } catch (error) {
        console.log("error in getting data",error);
        res.status(500).json({msg:"Failed to get data"});
    }
}
const addbook= async(req,res)=>{
    // console.log(req.body);
    let book= await bookModel.insertOne(req.body);
    res.status(200).json({msg:"New Book added Success",book});
}
const  getbookById= async(req,res)=>{
    const id= req.params.id;
    try {
        const book= await bookModel.findById(id);
        res.status(200).json({msg:"book is :",book});

    } catch (error) {
        console.log("Error findind user",error);
        res.status(400).json({msg:"book not found!"});
    }
}
const updatebook= async(req,res)=>{
    const id= req.params.id;
   try {
    
    let book= await bookModel.findById(id);
    if(!book){
        res.json({msg:"No book found!"});
    }
    await bookModel.findByIdAndUpdate(id,req.body);

   } catch (error) {
    console.log("Error updateing the data");
    res.status(500).json({msg:"Internal server error"});
   }
}
const deleteBookById= async(req,res)=>{
    const id=req.params.id;
    try {
        let book= await bookModel.findById(id);
        if(!book){
            res.json({msg:"No Book Found"});
        }
        await  bookModel.findByIdAndDelete(id);
        res.status(200).json({msg:"book deleted succes"});

    } catch (error) {
        console.log("error deletin the user");
        res.status(500).json({msg:"Internal server error"});
    }
}

module.exports={getbooks,addbook,updatebook,getbookById,deleteBookById};
