const Sequelize = require("sequelize");
const db = require("../config/db");

const Supplier = db.define("supplier", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  phone: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  mail: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Supplier;
