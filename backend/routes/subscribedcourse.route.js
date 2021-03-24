const express = require("express");
const subscribedcourseModel = require("../models/subscribedcourse.model");
const router = express.Router();

const auth = require("../middlewares/auth.mdw");

router.get("/", auth, async (req,res) => {
    const AccountID = req.body.userId;
    const list = await subscribedcourseModel.all(AccountID);
    return res.send(list[0]);
})

router.post("/",auth ,async(req,res) => {
    const Course = req.body;
    Course.AccountID = req.body.userId;
    delete Course.userId;
    const list = await subscribedcourseModel.BuyCourse(Course);
    res.send(list);
})

router.get("/:CourseID", auth, async (req,res) => {
    const CourseID = req.params.CourseID;
    const AccountID = req.body.userId;
    const list = await subscribedcourseModel.getBuy(CourseID,AccountID);
    if(list.length >= 1){
        return res.send({
            bought: true
        })
    }
    return res.send({
        bought: false
    })
})


module.exports = router;