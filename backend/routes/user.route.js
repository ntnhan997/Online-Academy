const express = require("express");
const userModel = require("../models/user.model");

const bcrypt = require("bcryptjs");
const router = express.Router();

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
