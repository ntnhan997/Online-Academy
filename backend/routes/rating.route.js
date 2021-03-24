const express = require("express");
const ratingModel = require("../models/rating.model");
const router = express.Router();

const auth = require("../middlewares/auth.mdw");


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