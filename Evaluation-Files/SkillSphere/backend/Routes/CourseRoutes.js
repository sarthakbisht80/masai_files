const express= require("express");
const router= express.Router();

const auth= require("../Middleware/auth");
const permit= require("../Middleware/permit")
const coursectrl= require("../Controllers/CourseControl");

router.post("/",auth, permit("admin"),coursectrl.createCourse);
router.get("/" ,coursectrl.getCourse);
router.put("/:id",auth,coursectrl.updateCourse);
router.delete("/:id",auth,coursectrl.DeleteCourse);

module.exports=router;  