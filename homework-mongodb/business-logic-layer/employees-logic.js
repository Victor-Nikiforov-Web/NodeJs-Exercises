const dal = require('../data-access-layer/dal');
const Employee = require('../models/employees');

dal.connectAsync()
    .then(db => console.log('Connected to ' + db.name + ' on MongoDB.'))
    .catch(err => console.log(err));

function getAllEmployees() {
    return new Promise((resolve, reject) => {
        Employee.find({}, (err, employees) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(employees);
        });
    });
}

module.exports = {
    getAllEmployees
}