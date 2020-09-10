SELECT
	CONCAT(manager.firstname, " ", manager.lastname) manager_name,
    GROUP_CONCAT(
        emp.firstname, " ", emp.lastname
        SEPARATOR ', '
    ) employees
	
FROM
    ((employee emp
    LEFT JOIN employee manager ON manager.id = emp.manager_id))
GROUP BY
    concat(manager.firstname, " ", manager.lastname)
ORDER BY
	manager_name