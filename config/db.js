// Sequelize config and setup
const Sequelize = require("sequelize");

const uri = process.env.DATABASE_URL || `postgres://marceau:root@localhost:5432/viabrico`;
module.exports = new Sequelize(uri);
