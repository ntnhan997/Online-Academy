const express = require("express");
const teacherModel = require("../models/teacher.model");

const router = express.Router();

const auth = require("../middlewares/auth.mdw");

router.get("/",auth,  async (req,res) => {  
    const AccountID = req.body.userId;
    const list = await teacherModel.all(AccountID);
    return res.send(list[0]);
})


module.exports = router;