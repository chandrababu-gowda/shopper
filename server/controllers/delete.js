const productModel = require("../models/products");

function deleteHandler(req, res) {
  try {
    productModel
      .destroy({ where: { uid: req.params.uid } })
      .then(() => {
        res.status(200).json({ status: "200: OK", message: "Item deleted" });
      })
      .catch((err) => {
        console.log(`Error: controllers/delete.js \n${err}`);
        res.status(400).json({
          status: "400: Bad request",
          message: "Unable to delete item due to client error",
        });
      });
  } catch (err) {
    console.log(`Error: controllers/delete.js \n${err}`);
    res.status(500).json({
      status: "500: Internal Server Error",
      message: "Unable to delete item due to server error",
    });
  }
}

module.exports = { deleteHandler };
