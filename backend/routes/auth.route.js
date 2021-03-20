const express = require("express");
const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const randomstring = require("randomstring");

const router = express.Router();

router.post("/", async (req,res) => {
    const user = await userModel.singleByUserName(req.body.UserName);
    if(user === null){
        return res.send({
            authenticated: false
        })
    }
    if(!bcrypt.compareSync(req.body.Password, user[0].Password)){
        return res.send({
            authenticated: false
        })
    }

    const accessToken = jwt.sign({
        userId: user[0].AccountID,
        FullName: user[0].FullName,
        Role: user[0].AccountTypeID
    }, "academyonline2021aksd",{
        expiresIn: 7200
    });



    const refreshToken = randomstring.generate();

    await userModel.updateRefreshToken(user[0].AccountID, refreshToken);

    res.send({
        authenticated: true,
        accessToken,
        refreshToken
    })
})

module.exports = router;