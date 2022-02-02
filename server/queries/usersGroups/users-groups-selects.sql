select usersGroup.id,
       code,
       usersGroup.name,
       usersGroup.active,
       count(user.id)    as numUsers,
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