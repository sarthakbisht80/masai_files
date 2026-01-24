const mongoose= require("mongoose");
//one to one

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
  profile:{profileSchema};
});

const profileSchema= new mongoose.Schema({
    age:Number,
    bio:String
});



// const ProfileSchema= new mongoose.Schema({
//     age:Number,
//     bio:String,
//     user:{type:mongoose.Schema.Types.ObjectId, ref:"user"}
// })

const userModel= mongoose.model("user",userSchema);

// const ProfileModel= mongoose.model("Profile",ProfileSchema);
