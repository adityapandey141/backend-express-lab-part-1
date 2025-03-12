const express = require("express");
let { employeesDB } = require("./lib/index");
let { employees } = require("./models/employee.model");
let { employeeData } = require("./dataset/employeeData");
let route = express.Router();

async function getAll() {
  let response = await employees.findAll();
  return { employees: response };
}
route.get("/", async (req, res) => {
  try {
    let result = await getAll();
    if (result.employees.length === 0) {
      return res.status(404).json({ message: "Employees not found !" });
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

route.get("/seed", async (req, res) => {
  try {
    await employeesDB.sync({ force: true });
    await employees.bulkCreate(employeeData);
    return res.status(200).json({ message: "Database seeding sucessfully !" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

async function addNew(data) {
  let newEmployee = await employees.create(data);

  return { message: "New Employee Added !", newEmployee };
}
route.post("/new", async (req, res) => {
  try {
    let newData = req.body.newEmployee;
    let result = await addNew(newData);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

async function updateEmp(id, data) {
  let details = await employees.findOne({ where: { id } });
  if (!details) return {};

  details.set(data);
  let updatedEmployee = details.save();

  return { message: " Employee Details Updated !" };
}
route.post("/update/:id", async (req, res) => {
  try {
    let id = parseInt(req.params.id);
    let newData = req.body;
    let result = await updateEmp(id, newData);
    if (!result.message) {
      return res.status(404).json({ message: "Employee not found !" });
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

async function deleteEmp(id) {
  let employeeDetails = await employees.destroy({ where: { id } });
  if (!employeeDetails) return {};
  return { message: "Employee deleted !" };
}
route.post("/delete", async (req, res) => {
  try {
    let id = parseInt(req.body.id);
    let result = await deleteEmp(id);
    if (!result.message) {
      return res.status(404).json({ message: "Employee not found !" });
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = route;
