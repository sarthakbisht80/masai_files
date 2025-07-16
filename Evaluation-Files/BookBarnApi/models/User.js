const mongoose = require("mongoose");

const bcrypt= require("bcryptjs");
const userSchema= new mongoose.Schema({
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true, },
    role:{type:String, enum:["viewer","editor","admin"], default:"viewer"},
    resetToken:String,
    resetTokenExp:Date

});
userSchema.pre("save",async function (next){
    if(!this.modfied("password"))
        return next();
    this.password=await bcrypt.hash(this.password,10);
    next();
});

userSchema.methods.comparePassword= function(pw){
    return bcrypt.compare(pw,this.password);
};
module.exports= mongoose.model("User",userSchema);
