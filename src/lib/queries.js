const path = require('path');
const fs = require('fs');

const queries = {
    viewAllEmployees: fs.readFileSync(path.join(__dirname, '../sql/viewAllEmployees.sql')).toString(),
    viewAllDepartments: fs.readFileSync(path.join(__dirname, '../sql/viewAllDepartments.sql')).toString(),
    viewAllRoles: fs.readFileSync(path.join(__dirname, '../sql/viewAllRoles.sql')).toString(),
    addDepartment: fs.readFileSync(path.join(__dirname, '../sql/addDepartment.sql')).toString()
}


module.exports = queries;