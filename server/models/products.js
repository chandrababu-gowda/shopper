const sequelize = require("../middleware/db");
const { DataTypes } = require("sequelize");

const productModel = sequelize.define("product", {
  uid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: DataTypes.STRING(100),
  description: DataTypes.STRING(500),
  price: DataTypes.DOUBLE,
  date: DataTypes.DATE,
});

module.exports = productModel;
