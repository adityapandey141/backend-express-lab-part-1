let sq = require("sequelize");

let tracksDB = new sq.Sequelize({
  dialect: "sqlite",
  storage: "./databases/tracksDB.sqlite",
});

module.exports = { DataTypes: sq.DataTypes, tracksDB };
