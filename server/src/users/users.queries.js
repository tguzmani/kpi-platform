exports.READ_USERS_BY_ADMIN_ID = `
select u.id, u.name, username, mail, count(u.name) as 'groups', u.active
from adm_accounts a, adm_users u, adm_users_reports_groups rp
where u.id_adm_accounts = a.id
and u.id = rp.id_adm_users
and a.id = ?
group by a.id, u.name, u.username, u.mail, u.active, u.id
order by a.id;
`

exports.CREATE_USER_BY_ADMIN = `
insert into adm_users (id_adm_accounts, username, name, mail, password, active)
values (?, ?, ?, ?, ?, ?);
`

exports.CONNECT_USER_TO_REPORT_GROUPS = `
insert into adm_users_reports_groups (id_adm_users, id_pbi_reports_groups_headers)
values ?;
`

exports.DELETE_CONNECTION_USER_TO_REPORT_GROUPS = `
delete from adm_users_reports_groups
where id_adm_users = ?;
`

exports.UPDATE_USER = `
update adm_users
set id_adm_accounts = ?, username = ?, name = ?, mail = ?, active = ?
where id = ?;
`

exports.READ_USERS_REPORTS_GROUPS_BY_ADMIN = `
select id_adm_users as userId, id_pbi_reports_groups_headers as reportGroupId
from adm_users_reports_groups rp, adm_users u, adm_accounts a
where a.id = u.id_adm_accounts
and a.id = ?
group by rp.id_adm_users, rp.id_pbi_reports_groups_headers;
`

exports.READ_PROFILE = `
select id, username, name, mail, password, active
from adm_users
where id = ?
`
exports.READ_BY_NAME = `
select id, username, name, mail, password, active
from adm_users
where username = ?
`
