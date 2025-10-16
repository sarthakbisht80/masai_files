const express= require("express");
const router= express.Router();

const auth= require("../Middleware/auth");
const enrollctrl= require("../Controllers/EnrollControl");

router.post("/",auth,enrollctrl.createCourse);
router.get("/" ,auth,enrollctrl.myCourses);


module.exports=router;  