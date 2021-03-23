const express = require("express");
const courseModel = require("../models/course.model");
const router = express.Router();
const moment = require("moment");

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

router.get("/coursesuggestion/:CategoryID", async (req, res) => {
  const CategoryID = req.params.CategoryID;
  const list = await courseModel.coursesuggestion(CategoryID);
  res.send(list);
});

router.put("/addregistered", async (req, res) => {
  //tang luot dang ky
  const id = req.body.CourseId;
  const list = await courseModel.addregister(id);
  res.send({
    mes: "ok",
  });
});

router.put("/incrementviews", async (req, res) => {
  const id = req.body.CourseId;
  const list = await courseModel.incrementviews(id);
  res.send({
    mes: "ok",
  });
});

router.get("/fulltextsearch/result", async (req, res) => {
  const name = req.query.name;
  const price = req.query.price;
  const rating = req.query.rating;
  const list = await courseModel.fulltextsearch(name, price, rating);
  res.send(list[0]);
});

router.post("/", async (req, res) => {
  const course = req.body;
  course.LastUpdate = moment().format("YYYY-MM-DD HH:mm:ss");
  course.NumberOfViews = 0;
  course.CourseRatings = 0;
  course.CourseReviews = 0;
  course.NumberOfRegistered = 0;
  course.CourseStatus = 0;
  const list = await courseModel.addcourse(course);
  res.status(201).send({
    complete: true,
  });
});

router.get("/:CourseId", async (req, res) => {
  const CourseID = req.params.CourseId || 0;
  const course = await courseModel.single(CourseID);
  if (course === null) {
    return res.status(204).end();
  }
  res.send(course[0]);
});

module.exports = router;
