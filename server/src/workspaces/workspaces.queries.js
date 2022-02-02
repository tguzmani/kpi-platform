exports.READ_WORKSPACES_BY_ADMIN = `
select w.id, w.id_pbi as pbiGroupId, w.name
from pbi_workspaces w, pbi_workspaces_reports wr, adm_accounts_reports ar, adm_accounts a
where w.id = wr.id_pbi_workspaces and wr.id = ar.id_pbi_workspaces_reports and a.id = ar.id_adm_accounts
and a.id = ?
group by w.id;
`
