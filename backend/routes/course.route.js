const express = require("express");
const courseModel = require("../models/course.model");
const router = express.Router();

router.get("/numberofviews", async (req, res) => {
  const list = await courseModel.numberofviews();
  res.send(list);
});

router.get("/top10newcourse", async (req, res) => {
  const list = await courseModel.top10lastupdate();
  res.send(list);
});

router.get("/mostregisteredcourses", async (req, res) => {
  const id = await courseModel.idRegister();
  const list = await courseModel.mostregisteredcourses(id);
  res.send(list);
});

router.get("/hotcourse", async (req, res) => {
  const list = await courseModel.hotcourse();
  res.send(list);
});

module.exports = router;
