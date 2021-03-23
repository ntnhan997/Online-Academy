const express = require("express");

const favoritecourseModel = require("../models/favoritecourse.model");
const router = express.Router();

const auth = require("../middlewares/auth.mdw");

router.get("/", auth,  async(req,res) => {
    const id = req.body.userId;
    const list = await favoritecourseModel.all(id);
    res.send(list);
})


module.exports = router;