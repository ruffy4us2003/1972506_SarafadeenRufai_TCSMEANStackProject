//Router is needed for directing the urls
const express = require("express");
const router = express.Router(); 
const CourseModel = require("../model/courseModel");

router.get("/", async(req, res)=>{ 
    //To save or fetch records from database async function is recommended so that no pragr
    try{
        const courseModel = await CourseModel.find(); //"await" is included because of the async method
        res.json(courseModel); //The format to return back from the database is 

    }catch(err){
        res.send("error" + error);

    }
    
}); //For request from the app.js


//For POST method
router.post('/', async(req,res) => {
    const courseModel = new CourseModel({
        courseId: req.body.courseId,
        courseName: req.body.courseName,
        courseDescription: req.body.courseDescription,
        courseAmount: req.body.courseAmount
    })

    try{
        const a1 =  await courseModel.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
});


//For UPDATE method
router.patch('/:courseId',async(req,res)=> {
    try{
        const courseModel = await CourseModel.findById(req.params.courseId); 
        courseModel.courseName = req.body.courseName;
        const c1 = await courseName.save();
        res.json(c1)   
    }catch(err){
        res.send('Error')
    }

});



//Export router so that it can be accessible in the app.js
module.exports = router;