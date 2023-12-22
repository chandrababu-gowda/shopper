const express = require("express");
const { orderCreateController } = require("../controllers/orders");
const router = express.Router();

// Homepage
router.get("/" /* Popular & New products */);

// All products [categorywise]
router.get("/products" /* Products of a category */);

// Individual product
router.get("/:uid" /* Individual product */);

// Payment page
router.post("/payment" /* Payment */);

// Order page [For testing purpose only after test it will be added in payment page]
router.post("/orders", orderCreateController);

module.exports = router;
