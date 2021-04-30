//Load the module for the mongoose
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    "courseId":{
        courseId:{
            type: String,
            required: true
        },

        courseName:{
            type: String,
            required: true
        },

        courseDescription:{
            type: String,
            required:true
        },
        courseAmount:{
            type: Number,
            required: true
        }
    }
});

module.exports = mongoose.model("Course", courseSchema); //Note: CourseModel in the argument can be any name
