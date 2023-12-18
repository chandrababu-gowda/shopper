const { Sequelize } = require("sequelize");
const { dbCredentials } = require("../credentials");

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "shopper",
  username: dbCredentials.username,
  password: dbCredentials.password,
  logging: false,
});

module.exports = sequelize;
