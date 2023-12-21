const uuid = require("uuid");
const productModel = require("../models/products");

function createController(req, res) {
  try {
    productModel
      .create({
        uid: uuid.v4(),
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        date: new Date(),
      })
      .then(() => {
        res.status(201).json({
          status: "201: Created",
          message: "Data added to products table",
        });
      })
      .catch((err) => {
        console.log(`Error: controllers/create.js \n${err}`);
        res.status(400).json({
          status: "400: Bad Request",
          message: "Unable to create item due to client error",
        });
      });
  } catch (err) {
    console.log(`Error: controllers/create.js \n${err}`);
    res.status(500).json({
      status: "500: Internal Server Error",
      message: "Unable to create item due to server error",
    });
  }
}

module.exports = { createController };
