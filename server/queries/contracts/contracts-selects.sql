select *
from adm_account_contract;

select name, address, created_at, updated_at
from adm_account_contract
where id_adm_accounts = 1;

select c.name,
       address,
       created_at,
       updated_at,
       id_int_id_type as identificationDocumentId,
       int_id_type_value identificationDocumentValue,
       gz.id          as zoneId,
       gr.id          as regionId,
       gc.id          as countryId,
       mo.id          as moneyId
from adm_account_contract c,
     geo_zone gz,
     geo_region gr,
     geo_countries gc,
     int_id_type id_doc,
     adm_money mo
where gz.id = c.id_geo_zone
  and gr.id = gz.id_geo_region
  and gc.id = gr.id_geo_countries
  and gc.id = id_doc.id_int_countries
  and mo.id = id_doc.id_adm_money
  and id_adm_accounts = 1;

-- TODO agregar pais, rut, region, comuna

-- TODO mandar los items
