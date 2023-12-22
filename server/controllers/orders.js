const uuid = require("uuid");
const orderModel = require("../models/orders");

function orderCreateController(req, res) {
  try {
    orderModel
      .create({
        uid: req.body.uid,
        oid: uuid.v4(),
        name: req.body.name,
        address: req.body.address,
        phoneno: req.body.phoneno,
        email: req.body.email,
        qty: req.body.qty,
        attribute: JSON.stringify(req.body.attributes),
      })
      .then(() => {
        res
          .status(201)
          .json({ status: "201: Created", message: "Order placed" });
      })
      .catch((err) => {
        console.log(`Error: controllers/orders.js \n${err}`);
        res.status(400).json({
          status: "400: Bad Request",
          message: "Unable to place order",
        });
      });
  } catch (err) {
    console.log(`Error: controllers/orders.js \n${err}`);
    res.status(500).json({
      status: "500: Internal Server Error",
      message: "Unable to create order due to server error",
    });
  }
}

function orderReadController(req, res) {
  try {
    if (req.user.userType === "seller") {
      orderModel
        .findAll({
          attributes: { exclude: ["createdAt", "updatedAt"] },
        })
        .then((orders) => {
          res.status(200).json({
            status: "200: OK",
            message: "Orders fetched",
            orders: orders,
          });
        })
        .catch((err) => {
          console.log(`Error: controllers/orders.js \n${err}`);
          res.status(400).json({
            status: "400: Bad Request",
            message: "Unable to fetch order",
          });
        });
    } else {
      console.log(`Error: controllers/orders.js \n${err}`);
      res.status(400).json({
        status: "400: Bad Request",
        message: "Unauthorized seller",
      });
    }
  } catch (err) {
    console.log(`Error: controllers/orders.js \n${err}`);
    res.status(500).json({
      status: "500: Internal Server Error",
      message: "Unable to fetch order due to server error",
    });
  }
}

module.exports = { orderCreateController, orderReadController };
