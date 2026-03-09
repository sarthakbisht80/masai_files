const express= require("express");
const { login, getProfile, logout } = require("../Controller/authController");
const authMiddleware = require("../Middlware/authMiddleware");
const router= express.Router();

router.post("/login",login);

router.get("/profile",authMiddleware,getProfile);

router.post("/logout",authMiddleware,logout);

module.exports=router;