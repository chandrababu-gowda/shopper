const express = require("express");
const customerRouter = require("./routes/customer");
const sellerRouter = require("./routes/seller");

const app = express();
app.use(express.json());

// Custom 404 page
app.use((req, res) => {
  res
    .status(404)
    .json({ status: "404: Not Found", message: "Unable to find the page" });
});

// Custom 500 page
app.use((err, req, res, next) => {
  console.log(`Error in /app.js \n ${err}`);
  res
    .status(500)
    .json({ status: "500: Internal Server Error", message: "Error in server" });
});

module.exports = app;
