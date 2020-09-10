SELECT
	CONCAT(manager.firstname, " ", manager.lastname) AS 'Manager Name',
    GROUP_CONCAT(
        emp.firstname, " ", emp.lastname
        SEPARATOR ', '
    ) AS 'Manager Employees'
	
FROM
    ((employee emp
    LEFT JOIN employee manager ON manager.id = emp.manager_id))
GROUP BY
    concat(manager.firstname, " ", manager.lastname)
ORDER BY
	manager_name