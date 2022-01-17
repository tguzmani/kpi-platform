-- elimina el not null para contract_cost
alter table adm_account_contract_detail
    change contract_cost contract_cost decimal(15, 3);

show create table adm_account_contract_detail;

insert into adm_account_contract_detail (id_adm_account_contract, id_int_items, quantity, standard_cost, up_date,
                                         down_date)
values
    (1, 1, 3, )

select * from adm_items_standard_costs;