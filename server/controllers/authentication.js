const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const seller = require("../credentials");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Login
async function handleLogin(req, res) {
  try {
    const enteredUsername = req.body.username;
    const enteredPassword = req.body.password;
    const checkPassword = await bcrypt.compare(
      enteredPassword,
      seller.password
    );

    if (enteredUsername === "seller") {
      if (checkPassword) {
        const details = {
          userType: "seller",
        };
        const accessToken = jwt.sign(details, process.env.ACCESS_TOKEN_SECRET);
        res.header("authorization", `Bearer ${accessToken}`);
        res.status(200).json({ status: "200: OK", message: "Seller verified" });
      } else {
        res
          .status(400)
          .json({ status: "400: Bad Request", message: "Invalid Password" });
      }
    } else {
      res
        .status(400)
        .json({ status: "400: Bad Request", message: "Unauthorized Seller" });
    }
  } catch (err) {
    console.log(`Error: server/controllers/authentication.js \n${err}`);
    res
      .status(500)
      .json({ status: "500: Internal Server Error", message: "Server error" });
  }
}

// Change password
async function handleChangePassword(req, res) {
  try {
    const enteredUsername = req.body.username;
    const enteredPassword = req.body.password;
    const hashedPassword = await bcrypt.hash(enteredPassword, 10);
    const passwordsMatched = await bcrypt.compare(
      req.body.confirmPassword,
      hashedPassword
    );

    if (enteredUsername === "seller") {
      if (passwordsMatched) {
        seller.password = hashedPassword;
        res
          .status(200)
          .json({ status: "200: OK", message: "Password updated" });
      } else {
        res.status(400).json({
          status: "400: Bad Request",
          message: "Passwords aren't matching",
        });
      }
    } else {
      res
        .status(400)
        .json({ status: "400: Bad Request", message: "Unauthorized Seller" });
    }
  } catch (err) {
    console.log(`Error: server/controllers/authentication.js \n${err}`);
    res
      .status(500)
      .json({ status: "500: Internal Server Error", message: "Server error" });
  }
}

module.exports = { handleLogin, handleChangePassword };
