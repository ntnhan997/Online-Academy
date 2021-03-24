const express = require("express");
const ratingModel = require("../models/rating.model");
const router = express.Router();

const auth = require("../middlewares/auth.mdw");


router.get("/:CourseID", auth, async (req,res) => {
    const CourseID = req.params.CourseID;
    const AccountID = req.body.userId;
    const list = await ratingModel.single(CourseID,AccountID);
    if(list === null){
        return res.send(list);
    }
    
    return res.send(list[0]);
})


router.post("/", auth, async (req,res) => {
    const rating = req.body;
    rating.AccountID = req.body.userId;
    delete rating.userId;
    await ratingModel.add(rating);
    res.send({
        complete: true
    });
})

module.exports = router;