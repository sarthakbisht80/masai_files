const Course= require("../Models/Course");

exports.createCourse= async(req,res)=>{
    try {
        
        const {title, description, category,price}=req.body;

        const course= Course.create({title,description,category,price,
            createdBy:req.user._id
        });
        await course.save();
        res.status(201).json({msg:'Course created',course});
    } catch (error) {
        res.status(400).json({msh:"server Error"});
    }
};

exports.getCourse= async(req,res)=>{
    try {
        
       let {page=1,limit=10,q}= req.query;
       page= parseInt(page); limit=parseInt(limit);

       const filter={};
       if(q){
        const regex= new RegExp(q,"i");
        filter.Sor=[{title:regex},
            {description:regex},{category:regex}
        ];
       }
       const total= await Course.countDocument(filter);
       const courses=await Course.find(filter)
       .populate("createdBy","name:email")
       .skip(page -1)* limit
       .limit(limit)
       .sort({createdAt:-1});
       res.json({total,page,limit,courses});
    } catch (error) {
        res.status(400).json({msh:"server Error"});
    }
};
exports.updateCourse=async(req,res)=>{
    try {
        
        const {id}= req.params;
        const update=req.body;
        const course= await 
        Course.findByIdAndUpdate(id,update,{new:true});
        if(!course) return 
        res.status(404).json({msg:"Course not found"});
        res.json(course);
    } catch (error) {
        res.staus(500).json({msg:"Server Eror"});
    }
}

exports.DeleteCourse=async(req,res)=>{
    try {
        
        const {id}= req.params;
        const update=req.body;
        const course= await 
        Course.findByIdAndDelete(id,update,{new:true});
        if(!course) return 
        res.status(404).json({msg:"Course not found"});
        res.json(course);
    } catch (error) {
        res.staus(500).json({msg:"Server Eror"});
    }
}
