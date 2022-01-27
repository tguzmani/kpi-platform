select *
from adm_users_reports_groups;
select *
from adm_users;
select *
from adm_accounts_reports;
select *
from adm_accounts;

select *
from pbi_reports_groups_headers;
select *
from pbi_reports_groups_body;
select *
from pbi_workspaces_reports;
select *
from pbi_workspaces;
select *
from pbi_workspaces_reports_sections;

-- groupos de reportes page (accordion headers)
select gh.id, code, gh.name, count(code) as sections, gh.active
from pbi_reports_groups_headers gh,
     adm_accounts a,
     pbi_reports_groups_body gb
where a.id = gh.id_adm_accounts
  and gh.id = gb.id_pbi_reports_groups_headers
  and a.id = 1
group by code, gh.id;

-- grupos de reportes page (contenido de accordion)
select *
-- select gb.id, gh.id as reportGroupId, code, w.name as workspace, w.id_pbi as workspaceId, wr.name as report, rs.name as section, wr.active
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

  and a.id = 1;

-- READ admin account / reportes
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

  and a.id = 1
group by wr.id;

-- UPDATE (active) admin account / reportes
update pbi_workspaces_reports
set active = 1
where id = 6;

select wr.id,
       gb.id     as reportGroupBodyId,
       gh.id     as reportGroupId,
       code,
       w.name    as workspace,
       w.id_pbi  as groupIdPBI,
       wr.name   as name,
       wr.id_pbi as reportIdPBI,
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

  and a.id = 1

select table_schema as database_name,
       table_name,
       update_time
from information_schema.tables tab
where update_time > (current_timestamp() - interval 30 day)
  and table_type = 'BASE TABLE'
  and table_schema not in ('information_schema', 'sys',
                           'performance_schema', 'mysql')
  -- and table_schema = 'your database name'
order by update_time desc;

select *
from pbi_reports_groups_body
order by id desc