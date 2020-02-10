const mongoose = require('mongoose');

const EmployeesSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    country: String,
    city: String
}, { versionKey: false });

const Employee = mongoose.model("Employee", EmployeesSchema, "employees");

module.exports = Employee;