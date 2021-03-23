const express = require("express");
const lectureModel = require("../models/lecture.model");
const teacherModel = require("../models/teacher.model");
const router = express.Router();

const auth = require("../middlewares/auth.mdw");


const moment = require('moment');

router.post("/createbyteacher", auth,  async(req,res) => {

    const list = req.body;
    
    list.Course.NumberOfViews = 0;
    list.Course.CourseRatings = 0;
    list.Course.CourseReviews = 0;
    list.Course.NumberOfRegistered = 0;
    list.Course.LastUpdate = moment().format("YYYY-MM-DD HH:mm:ss");
    const CourseID = await lectureModel.addCourseByTeacher(list.Course);
    list.Lecture.map(item => item.CourseID = CourseID[0]);
    const Lecture = await lectureModel.addLectureByTeacher(list.Lecture);
    let teacher = {};
    teacher.AccountID = list.userId;
    teacher.CourseID = CourseID[0];
    await teacherModel.add(teacher);
    return res.send({
        complete: true
    });
})

module.exports = router;