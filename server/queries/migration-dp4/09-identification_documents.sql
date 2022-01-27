-- hay que agregar una fk hacia adm_money
-- primero se agrega la columna
alter table int_id_type
    add column id_adm_money int(11) not null;

update int_id_type
set id_adm_money = 1
where id = 1;

alter table int_id_type
add constraint fk__int_id_type__adm_money foreign key (id_adm_money) references adm_money(id);