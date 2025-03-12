let { DataTypes, employeesDB } = require("../lib/");

let employees = employeesDB.define("employees", {
  name: DataTypes.TEXT,
  designation: DataTypes.TEXT,
  department: DataTypes.TEXT,
  salary: DataTypes.INTEGER,
});

module.exports = { employees };
