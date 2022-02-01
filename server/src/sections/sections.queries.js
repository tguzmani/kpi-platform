exports.READ_SECTIONS_BY_ADMIN = `
select s.id, wr.id_pbi as reportIdPBI, s.id_pbi_workspaces_reports as reportId, s.id_pbi as sectionIdPBI, s.name

from adm_accounts a,
     adm_accounts_reports ar,
     pbi_workspaces_reports wr,
     pbi_workspaces_reports_sections s

where a.id = ar.id_adm_accounts
  and wr.id = ar.id_pbi_workspaces_reports
  and wr.id = s.id_pbi_workspaces_reports
  and a.id = ?;
`
