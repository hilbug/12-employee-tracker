SELECT
	emp.id AS 'Employee ID',
	emp.firstname AS 'Employee First Name',
	emp.lastname AS 'Employee Last Name',
	role.title AS 'Employee Title',
	dept.name department AS 'Department Name',
	role.salary AS 'Employee Salary',
	concat(manager.firstname, " ", manager.lastname) As 'Manager Name'
	
FROM
    ((employee emp
    LEFT JOIN employee manager ON manager.id = emp.manager_id)
    LEFT JOIN role on emp.role_id = role.id
    LEFT JOIN department dept ON role.department_id = dept.id)
ORDER BY
	emp.firstname