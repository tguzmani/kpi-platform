exports.READ_USERS_GROUPS = `
select usersGroup.id,
       code,
       usersGroup.name,
       usersGroup.active,
       count(user.id)    as numUsers,
       ceil(rand() * 5) as numSections
from adm_users_groups usersGroup,
     adm_users_groups_has_users usersGroupsHasUser,
     adm_users user,
     adm_accounts admin
where usersGroup.id = usersGroupsHasUser.id_adm_users_groups
  and usersGroupsHasUser.id_adm_users_id = user.id
  and user.id_adm_accounts = admin.id

  and admin.id = ?
group by usersGroup.id;

`

exports.READ_USERS_GROUPS_USERS = `
select user.id
from adm_users_groups usersGroup,
     adm_users_groups_has_users usersGroupsHasUser,
     adm_users user,
     adm_accounts admin
where usersGroup.id = usersGroupsHasUser.id_adm_users_groups
  and usersGroupsHasUser.id_adm_users_id = user.id
  and user.id_adm_accounts = admin.id

  and admin.id = ? and usersGroup.id = ?;
`

exports.READ_USERS_GROUPS_REPORTS_GROUPS = `
select groupsHeader.id
from adm_users_groups usersGroup,
     adm_users_groups_has_reports_groups_headers usersGroupsHasReportsGroup,
     pbi_reports_groups_headers groupsHeader,
     adm_accounts admin
where usersGroup.id = usersGroupsHasReportsGroup.id_adm_users_groups
and usersGroupsHasReportsGroup.id_pbi_reports_groups_headers = groupsHeader.id
and groupsHeader.id_adm_accounts = admin.id

and admin.id = ? and usersGroup.id = ?;
`
