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
const { orderReadController } = require("../controllers/orders");
const router = express.Router();

// Authentication
router.post("/", handleLogin);
router.post("/changePassword", handleChangePassword);

// Dashboard
router.post("/dashboard", authenticateToken, createController);
router.get("/dashboard", authenticateToken, readController);
router.put("/dashboard", authenticateToken, updateController);
router.delete("/dashboard/:uid", authenticateToken, deleteHandler);

// Orders
router.get("/orders", authenticateToken, orderReadController);

module.exports = router;
