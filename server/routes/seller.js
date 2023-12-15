const express = require("express");
const router = express.Router();

// Login
router.post("/" /* Seller login */);

// Dashboard
router.post("/dashboard" /* Create product */);
router.get("/dashboard" /* Read product */);
router.put("/dashboard" /* Update product */);
router.delete("/dashboard" /* Delete product */);

// Orders
router.get("/orders" /* Orders */);

module.exports = router;
