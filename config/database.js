const { DB } = require("./config.js");

const { Sequelize } = require('sequelize');


const db = new Sequelize(DB.NAME, DB.USER, DB.PASSWORD, {
  host: DB.HOST,
  dialect: 'postgres',
  dialectOptions:
    DB.ENV === "development"
      ? {}
      : {
        ssl: false,
      },
});

module.exports = { db };