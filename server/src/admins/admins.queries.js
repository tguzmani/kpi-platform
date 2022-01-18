exports.READ_PROFILE = `
select id, name, sub_domain as 'subdomain', data_base as 'dataBase', key_user as 'keyUser', active, password, logo_address as logoAddress
from adm_accounts where id = ?;
`

exports.READ_BY_NAME = `
select id, name, sub_domain as 'subdomain', data_base as 'dataBase', key_user as 'keyUser', active, password
from adm_accounts where name = ?;
`

exports.UPDATE_LOGO = `
update adm_accounts
set logo_address = ?
where id = ?;
`
