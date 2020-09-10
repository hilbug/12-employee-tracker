SELECT
	emp.id AS 'Manager ID',
	concat(emp.firstname, " ", emp.lastname) AS 'Manager Name',
	role.title AS 'Manager Title',
	dept.name AS artment 'Manager Department',
	role.salary AS 'Manager Salary',
	concat(manager.firstname, " ", manager.lastname) AS 'Manager'
	
FROM
    ((employee emp
    LEFT JOIN employee manager ON manager.id = emp.manager_id)
    LEFT JOIN role on emp.role_id = role.id
    LEFT JOIN department dept ON role.department_id = dept.id)
WHERE
    emp.manageryn = 'Y'
ORDER BY
	name