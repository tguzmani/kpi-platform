exports.CREATE_CONTRACT_BY_ADMIN = `
insert into adm_account_contract (id_adm_accounts, id_int_id_type, int_id_type_value, address, id_geo_zone, name)
values (?, ?, ?, ?, ?, ?);
`

exports.CREATE_CONTRACT_DETAILS_BY_ADMIN = `
insert into adm_account_contract_detail (id_adm_account_contract, id_int_items, quantity)
values ?
`

exports.UPDATE_CONTRACT_DETAIL_BY_ADMIN = `
update adm_account_contract_detail
set quantity = ?
where id = ?;
`

exports.UPDATE_CONTRACT_BY_ADMIN = `
update adm_account_contract
set id_int_id_type = ?, int_id_type_value = ?, address = ?, id_geo_zone = ?, name = ?
where id = ?
`
