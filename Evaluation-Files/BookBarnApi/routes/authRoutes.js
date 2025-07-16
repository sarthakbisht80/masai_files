const express= require("express");
// const {signup, login,forgotPassword}= require("../")//controllers
const router= express.Router();
const ctrl= require("../controllers/authController");

router.post("/signup",ctrl.signup);//signup
router.post("/login",ctrl.login)//login route
// router.post("/forgotPassword");
// router.patch("/reset-pasword/:token")


module.exports=router;