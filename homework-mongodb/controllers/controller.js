const express = require('express');
const router = express.Router();
const employeesLogic = require('../business-logic-layer/employees-logic');

router.get('/', async (reqeust, response) => {
    try {
        const employees = await employeesLogic.getAllEmployees();
        response.json(employees);
    } catch (error) {
        response.status(500).send(err.message);
    }
});

module.exports = router;