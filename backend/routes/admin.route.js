const express = require("express");
const bcrypt = require("bcryptjs");
const adminModel = require("../models/admin.model");
const router = express.Router();

const auth = require("../middlewares/auth.mdw");

router.post('/',auth, async(req,res) => {
    const user = req.body;
    delete user.userId;
    user.user.Password = bcrypt.hashSync(user.user.Password, 10);
    user.user.AccountDeleted = 0;
    user.user.AccountTypeID = 2;
    user.user.Cost = 0;

    const id = await adminModel.addUser(user.user);
     
    res.status(201).send({
        complete: true
    });
})

router.get("/listedteacher",auth, async(req,res) => {
    const list = await adminModel.listedTeacher();
    res.status(201).send(list[0]);
})

router.get("/listedstudent",auth, async(req,res) => {
    const list = await adminModel.listedStudent();
    res.status(201).send(list[0]);
})

module.exports = router;