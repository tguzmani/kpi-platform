insert into adm_users_groups (code, name)
values ('UG01', 'Grupo Alpha'),
       ('UG02', 'Grupo Legends'),
       ('Ug03', 'Grupo Xpress');

-- -- ----------------------------
-- Asociación con los usuarios
-- ----------------------------
insert into adm_users_groups_has_users (id_adm_users_groups, id_adm_users_id)
values (1, 1), (1, 2), (1, 3),
       (2, 5), (2, 7), (2, 8), (2, 16),
       (3, 9), (3, 1), (3, 8);

select * from adm_users_groups_has_users;

-- ---------------------------------
-- Asociación con grupos de reporte
-- ---------------------------------

-- query que encuentra los grupos de reporte de un administrador
select * from pbi_reports_groups_headers groupsHeader,
              adm_accounts admin
where groupsHeader.id_adm_accounts = admin.id
and admin.id = 1;

insert into adm_users_groups_has_reports_groups_headers (id_adm_users_groups, id_pbi_reports_groups_headers)
values (1, 2), (1, 3), (1, 8),
       (2, 14), (1, 15),
       (3, 7), (3, 8), (3, 11), (3, 12);

insert into adm_users_groups_has_reports_groups_headers (id_adm_users_groups, id_pbi_reports_groups_headers)
values (2, 15);