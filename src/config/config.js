const mysql = require('mysql');

const connection = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"root12345",
	database:"employeetracker",
	multipleStatements: true
});

module.exports = connection;