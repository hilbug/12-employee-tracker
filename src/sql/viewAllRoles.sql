SELECT
    r.id AS 'Role ID',
    r.title AS 'Role Title',
    r.salary AS 'Role Salary',
    dept.name AS 'Role Department'
FROM
    role r
    LEFT JOIN department dept ON r.department_id = dept.id
ORDER BY
    r.title