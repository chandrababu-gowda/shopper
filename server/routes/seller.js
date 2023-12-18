const express = require("express");
const { authenticateToken } = require("../middleware/auth");
const {
  handleLogin,
  handleChangePassword,
} = require("../controllers/authentication");
const { createController } = require("../controllers/create");
const router = express.Router();

// Authentication
router.post("/", handleLogin);
router.post("/changePassword", handleChangePassword);

// Dashboard
router.post("/dashboard", createController); // Add authenticateToken
router.get("/dashboard" /* Read product */);
router.put("/dashboard" /* Update product */);
router.delete("/dashboard" /* Delete product */);

// Orders
router.get("/orders" /* Orders */);

module.exports = router;
