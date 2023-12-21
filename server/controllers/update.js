const productModel = require("../models/products");

function updateController(req, res) {
  try {
    if (req.user.userType === "seller") {
      productModel
        .update(
          {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
          },
          { where: { uid: req.body.uid } }
        )
        .then(() => {
          res.status(200).json({ status: "200: OK", message: "Item updated" });
        })
        .catch((err) => {
          console.log(`Error: controllers/update.js \n${err}`);
          res.status(400).json({
            status: "400: Bad request",
            message: "Unable to update item due to client error",
          });
        });
    }
  } catch (err) {
    console.log(`Error: controllers/update.js \n${err}`);
    res.status(500).json({
      status: "500: Internal Server Error",
      message: "Unable to update item due to server error",
    });
  }
}

module.exports = { updateController };
