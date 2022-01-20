exports.READ_REPORT_GROUPS_HEADERS_BY_ADMIN = `
select gh.id, code, gh.name, count(code) as sections, gh.active

from pbi_reports_groups_headers gh, adm_accounts a, pbi_reports_groups_body gb
where a.id = gh.id_adm_accounts and gh.id = gb.id_pbi_reports_groups_headers
and a.id = ?

group by code, gh.id;
`

exports.READ_REPORTS_BY_ADMIN = `
select gb.id, gh.id as reportGroupId, code, w.name as workspace, w.id_pbi as groupIdPBI, wr.name as name, wr.id_pbi as reportIdPBI, rs.name as section, wr.active
from pbi_reports_groups_headers gh, adm_accounts a,
     pbi_reports_groups_body gb, pbi_workspaces_reports_sections rs,
     pbi_workspaces_reports wr, pbi_workspaces w
where a.id = gh.id_adm_accounts and gh.id = gb.id_pbi_reports_groups_headers
  and rs.id = gb.id_pbi_workspaces_reports_sections and wr.id = rs.id_pbi_workspaces_reports
  and w.id = wr.id_pbi_workspaces

and a.id = ?;
`

exports.READ_ACCOUNT_REPORTS_BY_ADMIN = `
select wr.id, w.name as workspace, wr.name as name, wr.active, w.id_pbi as groupId, wr.id_pbi as reportId
from pbi_reports_groups_headers gh, adm_accounts a,
     pbi_reports_groups_body gb, pbi_workspaces_reports_sections rs,
     pbi_workspaces_reports wr, pbi_workspaces w
where a.id = gh.id_adm_accounts and gh.id = gb.id_pbi_reports_groups_headers
  and rs.id = gb.id_pbi_workspaces_reports_sections and wr.id = rs.id_pbi_workspaces_reports
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

from pbi_reports_groups_headers gh, adm_users u, adm_accounts a, adm_users_reports_groups rp,
        pbi_reports_groups_body gb, pbi_workspaces_reports_sections rs,
     pbi_workspaces_reports wr, pbi_workspaces w

where a.id = u.id_adm_accounts and u.id = rp.id_adm_users and rp.id_pbi_reports_groups_headers = gh.id
  and gh.id = gb.id_pbi_reports_groups_headers
  and rs.id = gb.id_pbi_workspaces_reports_sections and wr.id = rs.id_pbi_workspaces_reports
  and w.id = wr.id_pbi_workspaces

and a.id = ?
group by u.id, gh.id, wr.active;
`
