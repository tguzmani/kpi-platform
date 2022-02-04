-- READ_USERS_GROUPS
select usersGroup.id,
       code,
       usersGroup.name,
       usersGroup.active,
       count(user.id)   as numUsers,
       ceil(rand() * 5) as numSections
from adm_users_groups usersGroup,
     adm_users_groups_has_users usersGroupsHasUser,
     adm_users user,
     adm_accounts admin
where usersGroup.id = usersGroupsHasUser.id_adm_users_groups
  and usersGroupsHasUser.id_adm_users_id = user.id
  and user.id_adm_accounts = admin.id

  and admin.id = 1
group by usersGroup.id;

-- READ_USERS_GROUPS_USERS
select user.id, usersGroup.id
from adm_users_groups usersGroup,
     adm_users_groups_has_users usersGroupsHasUser,
     adm_users user,
     adm_accounts admin
where usersGroup.id = usersGroupsHasUser.id_adm_users_groups
  and usersGroupsHasUser.id_adm_users_id = user.id
  and user.id_adm_accounts = admin.id

  and admin.id = 1;

select *
from adm_users;


select u.id, u.name, username, mail, count(u.name) as 'groups', u.active
from adm_accounts a,
     adm_users u
where u.id_adm_accounts = a.id
  and a.id = 1
group by a.id, u.name, u.username, u.mail, u.active, u.id
order by a.id asc;