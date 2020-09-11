# Employee Tracker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description
A system for managing information about a company's employees using Node.js, inquirer, and MySQL. The database structure consists of three tables: employee, department, and role. The user is able to perform the following actions:
- View all employees
- View all departments
- View all roles
- Add an employee
- Add a department
- Add a role
- Update an employee\'s role
- Update an employee\'s manager
- View Employees by Manager
- View Utilized Budget
- Delete an employee
- Delete a role
- Delete a department

### Video Demo
[Watch the video demo!](https://drive.google.com/file/d/1mW-w_p4mXPJ-LDw7dFzhhrMtNK2Bg0UV/view)

### Screenshot of the App
<img width="841" alt="Screen Shot 2020-09-11 at 12 19 59 AM" src="https://user-images.githubusercontent.com/65197724/92858898-9eb4a580-f3c4-11ea-9bf8-e183d5a0d98b.png">


### Installation
To start using this application, first ensure you have Node.js, npm, and mySQL installed, along with the ability to connect to a database. Then follow these steps:
1. Fork this repository
2. Run `npm init`
3. Run `npm install`
4. Run `node index.js` to start the application.

### Usage
1. When the application starts, answer each prompt or leave blank.
2. When the action selection is made, you will see results in the console OR changes will be made to your database.

### User Story
```
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
```

## Honorable Mentions
- NPM Packages: Inquirer, MySQL, console.table
- I know I wanted to save the SQL queries in their own files and this article helped me figure out how to "read" the file in my app: [How To Run Multiple SQL Queries Directly From An SQL File In NODE JS(Part 1)](https://medium.com/@johnkolo/how-to-run-multiple-sql-queries-directly-from-an-sql-file-in-node-js-part-1-dce1e6dd2def)
- [SQL Server Tutorial: Self Join](https://www.sqlservertutorial.net/sql-server-basics/sql-server-self-join/)
- Thank you to @tiffany-brand for your study-group assistance with promises and creating the choices lists.

## Future Enhancements
I chose to omit answer validation within the inquirer prompts, as the basis of this project focused on learning MySQL. Some validation I may consider adding in the future: 
- requiring a value if there are non-null columns
- validating format of inputs
- prettify the UI using an NPM package such as chalk or ascii-art