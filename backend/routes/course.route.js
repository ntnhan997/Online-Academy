const express = require("express");
const courseModel = require("../models/course.model");
const router = express.Router();

router.get("/numberofviews", async (req, res) => {
  const list = await courseModel.numberofviews();
  res.send(list);
});


module.exports = router;
