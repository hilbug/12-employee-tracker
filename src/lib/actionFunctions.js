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
// bring this in to use promises for connection.query
const util = require("util");
const query = util.promisify(connection.query).bind(connection);

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

                    // Add an employee
                    case actionsList.actionsList[3]:
                        addEmployeeQ();
                        break;

                    // Add a department
                    case actionsList.actionsList[4]:
                        addDepartmentQ();
                        break;
                }
            }

        });
}

// GET FUNCTIONS
// roles
const getRoles = () => {
    return query(queries.viewAllRoles);
}
// employees
const getEmployees = () => {
    return query(queries.viewAllEmployees);
}
// departments
const getDepartments = () => {
    return query(queries.viewAllDepartments);
}

const getManagers = () => {
    return query(queries.viewAllManagers);
}

// VIEW FUNCTIONS
// View all employees function
const viewAllEmployeesQ = async () => {
    try {
        const rows = await getEmployees();
        console.table(rows);
        start();
    } catch (err) {
        console.log(err);
    }
}

// View all depts function
const viewAllDeptsQ = async () => {
    try {
        const rows = await getDepartments();
        console.table(rows);
        start();
    } catch (err) {
        console.log(err);
    }
}

// View all roles function
const viewAllRolesQ = async () => {
    try {
        const rows = await getRoles();
        console.table(rows);
        start();
    } catch (err) {
        console.log(err);
    }
}

// ADD FUNCTIONS
// Add an employee function
const addEmployeeQ = async () => {
    try {
        // define questions first
        const promptUser = () => {
            return inquirer
                .prompt([
                    {
                        name: "empFirstName",
                        type: "input",
                        message: "Please enter a FIRST NAME for the new employee.",
                    },
                    {
                        name: "empLastName",
                        type: "input",
                        message: "Please enter a LAST NAME for the new employee.",
                    },
                    {
                        name: "empManagerYN",
                        type: "rawlist",
                        message: "Is the new employee a people manager? Select N for No or Y for Yes.",
                        choices: ["N", "Y"]
                    },
                    {
                        name: "empRoleId",
                        type: "rawlist",
                        choices: function () {
                            const choiceArray = [];
                            roles.forEach((role) => {
                                const roleObj = {
                                    name: role.title,
                                    value: role.id
                                }
                                choiceArray.push(roleObj)
                            })
                            return choiceArray;
                        },
                        message: "Select a role for the new employee."

                    },
                    {
                        name: "empManagerId",
                        type: "rawlist",
                        choices: function () {
                            const choiceArray = [];
                            managers.forEach((mgr) => {
                                const mgrObj = {
                                    name: mgr.name,
                                    value: mgr.id
                                }
                                choiceArray.push(mgrObj)
                            })
                            return choiceArray;
                        },
                        message: "Select a manager for the new employee."

                    }
                ])
                .then((answer) => {
                    connection.query(
                        queries.addEmployee,
                        {
                            firstname: answer.empFirstName,
                            lastname: answer.empLastName,
                            role_id: answer.empRoleId,
                            manager_id: answer.empManagerId,
                            manageryn: answer.empManagerYN
                        },
                        (err) => {
                            if (err) throw err;
                            console.log(`The new employee ${answer.empFirstName} ${answer.empLastName} was added successfully!`);
                            start();
                        });
                });
        }

        // await functions 
        const roles = await getRoles();
        const managers = await getManagers();
        await promptUser();

    } catch (err) {
        console.log(err);
    }
}

// Add a department function
const addDepartmentQ = async () => {
    try {
        const promptUser = () => {
            return inquirer
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
                });
        }

        //await functions
        await promptUser();

    } catch (err) {
        console.log(err);
    }
}

// Add a role function

// Exit the program
const exitProgram = () => {
    console.log("Hope you enjoyed using the Employee Tracker app!");
    return connection.end();
}

module.exports = { start }