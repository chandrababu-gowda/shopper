const sequelize = require("../middleware/db");
const { DataTypes } = require("sequelize");

const orderModel = sequelize.define("order", {
  oid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  uid: DataTypes.UUID,
  name: DataTypes.STRING(50),
  address: DataTypes.TEXT,
  phoneno: DataTypes.BIGINT,
  email: DataTypes.STRING(50),
  qty: DataTypes.INTEGER,
  attribute: DataTypes.TEXT,
});

module.exports = orderModel;
