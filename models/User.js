const Sequelize = require("sequelize");
const db = require("../config/db");

const User = db.define("user", {
  mail: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = User;
