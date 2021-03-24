const express = require("express");

const commentModel = require("../models/comment.model");
const router = express.Router();

const auth = require("../middlewares/auth.mdw");

const moment = require("moment");

router.get("/:id", async(req,res) => {
    const courseId = req.params.id;
    const list = await commentModel.singleByCoureId(courseId);
    for(let index in list[0]){
        list[0][index].DateOfComment = moment(list[0][index].DateOfComment, "YYYY-MM-DD HH:mm:ss").fromNow();
    }
    res.send(list[0]);
})

router.post('/' ,auth, async(req,res) => {
    const comment = req.body;
    const AccountID = req.body.userId;
    delete comment.userId;
    comment.AccountID = AccountID;
    comment.DateOfComment = moment().format("YYYY-MM-DD HH:mm:ss");
    const id = await commentModel.add(comment);
    res.status(201).send({
        complete: true
    });
})

module.exports = router;