const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");

const bcrypt = require("bcryptjs");

const sender = require("../sending-mail");
var otpMail = "";
const otp = require("randomstring");

router.post("/requestOTP", async (req, res) => {
  // kiem tra otp
  const user = req.body;
  otpMail = otp.generate(6);

  user.id = await userModel.check(user);
  if (user.id === "Email") {
    return res.send({
      message: "Da co email",
    });
  }
  if (user.id === "username") {
    return res.send({
      message: "UserName da ton tai.",
    });
  }
  sender.sendMail(user.Email, otpMail);
  res.status(201).json({
    message: "Da gui otp",
  });
});

router.post("/register", async (req, res) => {
  // dang nhap
  const user = req.body;
  // if(otpMail === req.body.otp){
  user.Password = bcrypt.hashSync(user.Password, 10);
  delete user.otp;
  user.id = await userModel.add(user);
  delete user.Password;
  return res.status(201).json(user);
  // }

  // return res.json({
  //     message: "sai otp"
  // });
});

module.exports = router;
