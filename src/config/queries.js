const path = require('path');
const fs = require('fs');

const queries = {
    viewAllEmployees: fs.readFileSync(path.join(__dirname, '../sql/viewAllEmployees.sql')).toString()
}


module.exports = queries;