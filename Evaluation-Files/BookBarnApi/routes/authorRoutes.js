
const express= require("express");
const router= express.Router();
const authorize= require("../middleware/authmiddleware");
const ctrl= require("../controllers/authorController");

router.get('/',ctrl.listAuthours);//listing authors
router.get('/author/:id',ctrl.getAuthor)//geting author by id
router.post("/add-author",ctrl.createAuthor)//authorizze
router.patch("update/:id",authorize("editor","admin") ,ctrl.updateauthor)//update authpr
router.delete("/delete/:id",authorize("editor","admin"),ctrl.deleteauthor)//delete author
module.exports=router;