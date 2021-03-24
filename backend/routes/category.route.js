const express = require("express");
const category_schema = require("../schemas/category.json");

const categoryModel = require("../models/category.model");
const router = express.Router();

const auth = require("../middlewares/auth.mdw");

router.get("/", async(req,res) => {
    const list = await categoryModel.all();
    res.send(list);
})

module.exports = router;