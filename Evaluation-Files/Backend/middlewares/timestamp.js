const express= require("mongoose");

const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
	windowMs: 1 * 60 , 
	limit: 3,
	standardHeaders: 'draft-8',
	legacyHeaders: false, 
	
});
module.exports=limiter;
