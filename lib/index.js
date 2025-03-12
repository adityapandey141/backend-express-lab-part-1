let sq = require("sequelize");

let tracksDB = new sq.Sequelize({
  dialect: "sqlite",
  storage: "./databases/tracksDB.sqlite",
});

let postsDB = new sq.Sequelize({
  dialect: "sqlite",
  storage: "./databases/postsDB.sqlite",
});

let employeesDB = new sq.Sequelize({
  dialect: "sqlite",
  storage: "./databases/employeesDB.sqlite",
});

module.exports = { DataTypes: sq.DataTypes, tracksDB, postsDB, employeesDB };
