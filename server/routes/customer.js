const express = require("express");
const router = express.Router();

// Homepage
router.get("/" /* Popular & New products */);

// All products [categorywise]
router.get("/products" /* Products of a category */);

// Individual product
router.get("/:uid" /* Individual product */);

// Payment page
router.post("/payment" /* Payment */);

module.exports = router;
