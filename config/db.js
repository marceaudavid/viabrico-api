const Sequelize = require("sequelize");

module.exports = new Sequelize("srm", "marceau", "root", {
  host: "localhost",
  dialect: "postgres"
});
