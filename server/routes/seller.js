const express = require("express");
const {
  handleLogin,
  handleChangePassword,
} = require("../controllers/authentication");
const router = express.Router();

// Authentication
router.post("/", handleLogin);
router.post("/changePassword", handleChangePassword);

// Dashboard
router.post("/dashboard" /* Create product */);
router.get("/dashboard" /* Read product */);
router.put("/dashboard" /* Update product */);
router.delete("/dashboard" /* Delete product */);

// Orders
router.get("/orders" /* Orders */);

module.exports = router;
