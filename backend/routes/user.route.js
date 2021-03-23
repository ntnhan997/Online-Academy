const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");
const auth = require("../middlewares/auth.mdw");
const bcrypt = require("bcryptjs");

const sender = require("../sending-mail");
var otpMail = "";
const otp = require("randomstring");



router.get("/", auth, async (req, res) => {
  const AccountID = req.body.userId;
  const list = await userModel.singleById(AccountID);
  console.log(list); 
  return res.send(list[0]);
});

router.put("/", auth, async (req, res) => {
  const list = req.body;

  list.AccountID = list.userId;
  delete list.userId;
  list.Password = bcrypt.hashSync(list.Password, 10);
  const id = await userModel.UpdateUser(list);
  return res.send({
    complete: true,
  });
});

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

router.post("/confirmOTP", async (req, res) => {
  // xac nhan otp
  if (otpMail === req.body.otp) {
    return res.json({
      confirmOTP: true,
    });
  }
  return res.send({
    confirmOTP: false,
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
});

module.exports = router;
