exports.READ_REPORT_GROUPS_HEADERS_BY_ADMIN = `
select groupsHeader.id,
       code,
       groupsHeader.name,
       count(code)  as sections,
       groupsHeader.active,
       workspace.id as workspace

from pbi_reports_groups_headers groupsHeader,
     adm_accounts admin,
     pbi_reports_groups_body groupsBody,
     pbi_workspaces_reports_sections reportSection,
     pbi_workspaces_reports workspacesReport,
     pbi_workspaces workspace

where admin.id = groupsHeader.id_adm_accounts
  and groupsHeader.id = groupsBody.id_pbi_reports_groups_headers
  and reportSection.id = groupsBody.id_pbi_workspaces_reports_sections
  and reportSection.id_pbi_workspaces_reports = workspacesReport.id
  and workspacesReport.id_pbi_workspaces = workspace.id

  and admin.id = ?

group by code, groupsHeader.id, workspace.id

order by groupsHeader.id;

`

exports.READ_REPORTS_BY_ADMIN = `
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

`

exports.READ_ACCOUNT_REPORTS_BY_ADMIN = `
select wr.id, w.name as workspace, wr.name as name, wr.active, w.id_pbi as groupId, wr.id_pbi as reportId

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
group by wr.id;
`

exports.UPDATE_REPORT_ACTIVE_STATE_BY_ADMIN = `
update pbi_workspaces_reports
set active = ?
where id = ?;
`

exports.READ_USERS_REPORTS_BY_ADMIN = `
select u.id as userId, gh.code, gh.name as reportGroupName, count(gb.id) as sections, wr.active

from pbi_reports_groups_headers gh,
     adm_users u,
     adm_accounts a,
     adm_users_reports_groups rp,
     pbi_reports_groups_body gb,
     pbi_workspaces_reports_sections rs,
     pbi_workspaces_reports wr,
     pbi_workspaces w

where a.id = u.id_adm_accounts
  and u.id = rp.id_adm_users
  and rp.id_pbi_reports_groups_headers = gh.id
  and gh.id = gb.id_pbi_reports_groups_headers
  and rs.id = gb.id_pbi_workspaces_reports_sections
  and wr.id = rs.id_pbi_workspaces_reports
  and w.id = wr.id_pbi_workspaces

  and a.id = ?
group by u.id, gh.id, wr.active;
`

exports.CREATE_REPORTS_GROUP_HEADER_BY_ADMIN = `
insert into pbi_reports_groups_headers (id_adm_accounts, code, name, active)
values (?, ?, ?, ?)
`

exports.CREATE_REPORTS_GROUP_BODY_BY_ADMIN = `
insert into pbi_reports_groups_body (id_pbi_reports_groups_headers, id_pbi_workspaces_reports_sections,
  id_adm_accounts_reports)
values (?, ?, fn_get_id_adm_account_reports_by_section_id(?))
`

exports.READ_REPORTS_GROUPS_HEADERS_SECTIONS = `
select s.id, gh.id as reportsGroupHeaderId

from pbi_reports_groups_headers gh,
     pbi_reports_groups_body gb,
     pbi_workspaces_reports_sections s

where gh.id = gb.id_pbi_reports_groups_headers
  and s.id = gb.id_pbi_workspaces_reports_sections
`

exports.UPDATE_REPORTS_GROUP_HEADER_BY_ADMIN = `
update pbi_reports_groups_headers
set code = ?, name = ?, active = ?
where id = ?;
`

exports.DELETE_REPORTS_GROUP_BODY = `
delete from pbi_reports_groups_body
where id_pbi_reports_groups_headers = ?;
`
