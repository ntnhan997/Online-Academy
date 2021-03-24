const express = require("express");
const category_schema = require("../schemas/category.json");

const categoryModel = require("../models/category.model");
const router = express.Router();

const auth = require("../middlewares/auth.mdw");

router.get("/", async(req,res) => {
    const list = await categoryModel.all();
    res.send(list);
})

router.get("/:id", async(req,res) => {
    const id = req.params.id || 0;
    const category = await categoryModel.single(id);
    if(category === null){
        return res.status(204).end();
    }
    res.send(category); 
})


module.exports = router;