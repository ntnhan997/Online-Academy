const express = require("express");

const favoritecourseModel = require("../models/favoritecourse.model");
const router = express.Router();

const auth = require("../middlewares/auth.mdw");

router.get("/", auth,  async(req,res) => {
    const id = req.body.userId;
    const list = await favoritecourseModel.all(id);
    res.send(list);
})

router.delete("/", auth, async (req, res) => {
    const idCourse = req.body.CourseID;
    console.log(idCourse);
    const idUser = req.body.userId;
    console.log(idUser);
    if (idCourse === 0) {
      return res.status(304).end();
    }
    await favoritecourseModel.delete(idCourse, idUser);
    res.send({
      complete: true,
    });
  });

module.exports = router;