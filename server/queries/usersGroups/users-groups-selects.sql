-- READ_USERS_GROUPS
select usersGroup.id,
       code,
       usersGroup.name,
       usersGroup.active,
       count(user.id)   as numUsers,
       ceil(rand() * 5) as numSections
from adm_users_groups usersGroup,
     adm_users_groups_has_users usersGroupsHasUser,
     adm_users user,
     adm_accounts admin
where usersGroup.id = usersGroupsHasUser.id_adm_users_groups
  and usersGroupsHasUser.id_adm_users_id = user.id
  and user.id_adm_accounts = admin.id

  and admin.id = 1
group by usersGroup.id;

-- READ_USERS_GROUPS_USERS
select user.id, usersGroup.id
from adm_users_groups usersGroup,
     adm_users_groups_has_users usersGroupsHasUser,
     adm_users user,
     adm_accounts admin
where usersGroup.id = usersGroupsHasUser.id_adm_users_groups
  and usersGroupsHasUser.id_adm_users_id = user.id
  and user.id_adm_accounts = admin.id

  and admin.id = 1;

-- READ_USERS_GROUPS_REPORTS_GROUPS
select groupsHeader.id
from adm_users_groups usersGroup,
     adm_users_groups_has_reports_groups_headers usersGroupsHasReportsGroup,
     pbi_reports_groups_headers groupsHeader,
     adm_accounts admin
where usersGroup.id = usersGroupsHasReportsGroup.id_adm_users_groups
and usersGroupsHasReportsGroup.id_pbi_reports_groups_headers = groupsHeader.id
and groupsHeader.id_adm_accounts = admin.id

and admin.id = 1 and usersGroup.id = 1;

select * from pbi_workspaces_reports_sections;

select wr.id,
       gb.id     as reportGroupBodyId,
       gh.id     as reportGroupId,
       code,
       w.name    as workspaceName,
       w.id      as workspaceId,
       w.id_pbi  as pbiGroupId,
       wr.name   as name,
       wr.id_pbi as pbiReportId,
       rs.id     as sectionId,
       rs.name   as section,
       wr.active

from pbi_reports_groups_headers gh,
     adm_accounts a,
     pbi_reports_groups_body gb,
     pbi_workspaces_reports_sections rs,
     pbi_workspaces_reports wr,
     pbi_workspaces w

where a.id = gh.id_adm_accounts
  and gh.id = gb.id_pbi_reports_groups_headers
  and rs.id = gb.id_pbi_workspaces_reports_sections
  and wr.id = rs.id_pbi_workspaces_reports
  and w.id = wr.id_pbi_workspaces

  and a.id = ?
  and wr.active = 1;

select * from pbi_reports_groups_body;