const productModel = require("../models/products");

function readController(req, res) {
  try {
    if (req.user.userType === "seller") {
      productModel
        .findAll({
          attributes: { exclude: ["createdAt", "updatedAt"] },
        })
        .then((data) => {
          res.status(200).json({
            status: "200: OK",
            message: "Data fetched from products table",
            data: data,
          });
        })
        .catch((err) => {
          console.log(`Error: controllers/read.js \n${err}`);
          res.status(404).json({
            status: "404: Not Found",
            message: "Unable to fetch items due to client error",
          });
        });
    } else {
      res.status(400).json({
        status: "400: Bad request",
        message: "Unauthorized seller",
      });
    }
  } catch (err) {
    console.log(`Error: controllers/read.js \n${err}`);
    res.status(500).json({
      status: "500: Internal Server Error",
      message: "Unable to fetch items due to server error",
    });
  }
}

module.exports = { readController };
