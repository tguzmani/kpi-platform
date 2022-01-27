-- lista las tablas que fueron recientemente actualizadas
select table_schema as database_name,
       table_name,
       update_time
from information_schema.tables tab
where update_time > (current_timestamp() - interval 30 day)
  and table_type = 'BASE TABLE'
  and table_schema not in ('information_schema', 'sys',
                           'performance_schema', 'mysql')
  -- and table_schema = 'your database name'
order by update_time desc;

-- lista las constraints
SELECT
    constraint_name,
    table_name
FROM
    information_schema.table_constraints
WHERE
    constraint_type = 'FOREIGN KEY'
AND table_schema = DATABASE()
ORDER BY
    constraint_name;

-- muestra un log detallado del motor
-- util para leer más de cualquier error
SHOW ENGINE INNODB STATUS