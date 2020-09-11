// db connection
const connection = require('./src/config/config');
// require file with starter function
const actions = require("./src/lib/actionFunctions");
// colors?


// Add start to app inside try/catch
const init = async () => {
    console.log('Welcome to the Employee Tracker app!\n To get started, select an action from the list below.\n If you do not have the information readily available, you can leave it blank and update later.');
    try {
        await actions.start();
    } catch (err) {
        console.log(err);
    }
}

// connect to the mysql server and sql database
connection.connect((err) => {
    if (err) throw err;
    init();
});

// Resources
// https://medium.com/@johnkolo/how-to-run-multiple-sql-queries-directly-from-an-sql-file-in-node-js-part-1-dce1e6dd2def