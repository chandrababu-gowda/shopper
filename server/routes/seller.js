const express = require("express");
const { authenticateToken } = require("../middleware/auth");
const {
  handleLogin,
  handleChangePassword,
} = require("../controllers/authentication");
const { createController } = require("../controllers/create");
const { readController } = require("../controllers/read");
const { updateController } = require("../controllers/update");
const { deleteHandler } = require("../controllers/delete");
const router = express.Router();

// Authentication
router.post("/", handleLogin);
router.post("/changePassword", handleChangePassword);

// Dashboard

// Add authenticateToken
router.post("/dashboard", createController);
router.get("/dashboard", readController);
router.put("/dashboard", updateController);
router.delete("/dashboard/:uid", deleteHandler);

// Orders
router.get("/orders" /* Orders */);

module.exports = router;
