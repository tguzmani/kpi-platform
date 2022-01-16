alter table adm_account_contract_detail
    change contract_cost contract_cost decimal(15, 3);

insert into adm_account_contract_detail values (id_adm_account_contract, id_int_items)