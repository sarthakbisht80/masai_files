

const { populate } = require("../../../Backend/models/book.model");
const Course= require("../Models/Course");
const Enrollment = require("../Models/Enrollment");

exports.Enroll= async(req,res)=>{
    try {
        const userId= req.user._id;
        const {courseId}= req.params;
        const course= await Course.findById(courseId);
        if(!course) return res.status(404).json({msg:"Course not found"});

        const enrollment= new Enrollment({user:userId,course:courseId});
        await enrollment.save();
        res.status(201).json({msg:"Enrolled Sucess",enrollment});

    } catch (error) {
    if(error){

        res.status(400).json({msg:"ALready enrolled"});

    }
    res.status(500).json({msg:"Server error",error:error.message});
    }
}

exports.myCourses= async(req,res)=>{
    try {
        
        const userId= req.user._id;
        const enrollments= await Enrollment.find({
            user:userId
        }).populate({
            path:"course",
            populate:{path:"createdBy", select :"name email"}
        })
        const courses= enrollments.map(e=>e.course);
        res.json(courses);
    } catch (error) {
        res.status(500).json({msg:"Server error"});
    }
};