require("dotenv").config();
const { Sequelize } = require("sequelize");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const conn = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

const database = new Sequelize(conn, { logging: false });

module.exports = {
  database,
  ...database.models,
};
