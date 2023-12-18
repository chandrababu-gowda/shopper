const uuid = require("uuid");
const productModel = require("../models/products");

async function createController(req, res) {
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
    });
}

module.exports = { createController };
