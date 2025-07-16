const express= require("express");
// const {signup, login,forgotPassword}= require("../")//controllers
const router= express.Router();

router.post("/signup");//signup
router.post("/login")//login route
// router.post("/forgotPassword");
// router.patch("/reset-pasword/:token")


module.exports=router;