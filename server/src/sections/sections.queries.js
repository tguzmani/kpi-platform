exports.READ_SECTIONS_BY_ADMIN = `
select section.id,
       report.id_pbi                     as reportIdPBI,
       section.id_pbi_workspaces_reports as reportId,
       section.id_pbi                    as pbiSectionId,
       section.name,
       report.name                       as reportName,
       workspace.name                    as workspaceName,
       report.active                     as reportActive

from adm_accounts admin,
     adm_accounts_reports accountsReport,
     pbi_workspaces_reports report,
     pbi_workspaces_reports_sections section,
     pbi_workspaces workspace

where admin.id = accountsReport.id_adm_accounts
  and report.id = accountsReport.id_pbi_workspaces_reports
  and report.id = section.id_pbi_workspaces_reports
  and report.id_pbi_workspaces = workspace.id
  and admin.id = ?;
`
