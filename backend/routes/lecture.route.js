const express = require("express");
const lectureModel = require("../models/lecture.model");
const router = express.Router();

const moment = require('moment');

router.post("/createbyteacher",  async(req,res) => {
    const list = req.body;
    
    list.Course.NumberOfViews = 0;
    list.Course.CourseRatings = 0;
    list.Course.CourseReviews = 0;
    list.Course.NumberOfRegistered = 0;
    list.Course.LastUpdate = moment().format("YYYY-MM-DD HH:mm:ss");
    const CourseID = await lectureModel.addCourseByTeacher(list.Course);
    list.Lecture.map(item => item.CourseID = CourseID[0]);
    const Lecture = await lectureModel.addLectureByTeacher(list.Lecture);
    console.log(Lecture);
    res.send(list.Lecture);
})

module.exports = router;