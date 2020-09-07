// db connection
const connection = require('../config/config');
// query variables
const queries = require('./queries');
// prettify output
const consoleTable = require('console.table');
// inquirer
const inquirer = require("inquirer");
// require actionslist
const actionsList = require('./actionslist');

// function to initialize the app
const start = () => {
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: actionsList.actionsList
        })
        .then((answer) => {
            if (answer.action === 'Exit') {
                exitProgram();
            } else {
                switch (answer.action) {
                    // View all employees
                    case actionsList.actionsList[0]:
                        viewAllEmployeesQ();
                        break;

                    // View all Departments
                    case actionsList.actionsList[1]:
                        viewAllDeptsQ();
                        break;

                    // View all roles
                    case actionsList.actionsList[2]:
                        viewAllRolesQ();
                        break;

                    // View all roles
                    case actionsList.actionsList[3]:
                        addDepartmentQ();
                        break;
                }
            }

        });
}

// View all employees function
const viewAllEmployeesQ = () => {
    connection.query(queries.viewAllEmployees, (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
}

// View all depts function
const viewAllDeptsQ = () => {
    connection.query(queries.viewAllDepartments, (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
}

// View all roles function
const viewAllRolesQ = () => {
    connection.query(queries.viewAllRoles, (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
}

// Add department
const addDepartmentQ = () => {
    inquirer
        .prompt([
            {
                name: "deptName",
                type: "input",
                message: "Please enter a NAME for the new department.",
            }
        ])
        .then((answer) => {
            connection.query(
                queries.addDepartment,
                {
                    name: answer.deptName
                },
                (err) => {
                    if (err) throw err;
                    console.log(`The new department ${answer.deptName} was added successfully!`);
                    start();
                });
        })

}

// Exit the program
const exitProgram = () => {
    console.log("Hope you enjoyed using the Employee Tracker app!");
    return connection.end();
}

module.exports = {
    start
}