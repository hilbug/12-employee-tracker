const path = require('path');
const fs = require('fs');

const queries = {
    viewAllEmployees: fs.readFileSync(path.join(__dirname, '../sql/viewAllEmployees.sql')).toString(),
    viewAllDepartments: fs.readFileSync(path.join(__dirname, '../sql/viewAllDepartments.sql')).toString(),
    viewAllRoles: fs.readFileSync(path.join(__dirname, '../sql/viewAllRoles.sql')).toString(),
    viewAllManagers: fs.readFileSync(path.join(__dirname, '../sql/viewAllManagers.sql')).toString(),
    addEmployee: fs.readFileSync(path.join(__dirname, '../sql/addEmployee.sql')).toString(),
    addDepartment: fs.readFileSync(path.join(__dirname, '../sql/addDepartment.sql')).toString(),
    addRole: fs.readFileSync(path.join(__dirname, '../sql/addRole.sql')).toString(),
    updateEmployee: fs.readFileSync(path.join(__dirname, '../sql/updateEmployee.sql')).toString()
}


module.exports = queries;