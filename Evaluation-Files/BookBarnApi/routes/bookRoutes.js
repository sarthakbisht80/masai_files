const express=require("express");

const router= express.Router();

const ctrl= require("../controllers/bookController");
const authorize= require("../middleware/rolemiddleware");


router.get('/',ctrl.listBook);//listing books
router.get('/author/:id',ctrl.getBook)//geting book by id
router.post("/add-author",authorize("editor","admin"),ctrl.createbook)//authorizze
router.patch("update/:id",authorize("editor","admin") ,ctrl.updateBook)//update authpr
router.delete("/delete/:id",authorize("editor","admin"),ctrl.deleteBook)//delete author
module.exports=router;