const Sequelize = require("sequelize");
const db = require("../config/db");

const User = db.define("user", {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  hash: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = User;
