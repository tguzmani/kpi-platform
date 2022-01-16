alter table adm_account_contract
    change adress address varchar(100);

alter table adm_account_contract
    drop foreign key fk__adm_accounts_billings__adm_account,
    drop foreign key fk__adm_accounts_billings__adm_money__monthly,
    drop foreign key fk__adm_accounts_billings__adm_money__inactive_user,
    drop foreign key fk__adm_accounts_billings__adm_money__active_user,
    drop foreign key fk__adm_accounts_billings__adm_money__monthly,
    drop foreign key fk__adm_accounts_billings__int_id_type,
    drop foreign key fk__adm_accounts_billings__geo_zone;

alter table adm_account_contract
    drop monthly_value,
    drop id_adm_money_monthly_value,
    drop active_user_value,
    drop id_adm_money_active_user_value,
    drop inactive_user_value,
    drop id_adm_money_inactive_user_value;

alter table adm_account_contract
    add column name varchar(100);

alter table adm_account_contract
    add constraint fk__account_contract__adm_accounts foreign key (id_adm_accounts) references adm_accounts (id),
    add constraint fk__account_contract__int_id_type foreign key (id_int_id_type) references int_id_type (id),
    add constraint fk__account_contract__geo_zone foreign key (id_geo_zone) references geo_zone (id);

insert into adm_account_contract (id_adm_accounts, id_int_id_type, int_id_type_value, address, id_geo_zone, active, name)
values (1, 1, '28615208', 'Calle A, Altos de B, Edificio C', 72, 1, 'Contrato ABC')