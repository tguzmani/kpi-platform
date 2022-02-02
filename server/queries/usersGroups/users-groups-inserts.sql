insert into adm_users_groups (code, name)
values ('UG01', 'Grupo Alpha'),
       ('UG02', 'Grupo Legends'),
       ('Ug03', 'Grupo Xpress');

-- asociación con los usuarios
insert into adm_users_groups_has_users (id_adm_users_groups, id_adm_users_id)
values (1, 1), (1, 2), (1, 3),
       (2, 5), (2, 7), (2, 8), (2, 16),
       (3, 9), (3, 1), (3, 8);

select * from adm_users_groups_has_users;