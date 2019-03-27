const Sequelize = require("sequelize");
const db = require("../config/db");

const Supplier = db.define("supplier", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  phone: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  mail: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

module.exports = Supplier;
