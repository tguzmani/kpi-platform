import React from 'react'
import List from '@mui/material/List'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import UsersGroupItem from './UsersGroupsItem'
import { useSelector } from 'react-redux'
import useResponsive from './../../hooks/useResponsive'

const UsersGroups = () => {
  // const { users } = useSelector(state => state.users)

  const { usersGroups } = {
    usersGroups: [
      {
        id: 1,
        code: 'UG01',
        name: 'Grupo Alpha',
        active: 1,
        numUsers: 3,
        numSections: 5,
        usersIds: [1, 2, 5],
        reportsGroupsIds: [2, 3, 8, 15],
      },
      {
        id: 2,
        code: 'UG02',
        name: 'Grupo Legends',
        active: 1,
        numUsers: 4,
        numSections: 1,
        usersIds: [5, 7, 8, 16],
        reportsGroupsIds: [14, 15],
      },
      {
        id: 3,
        code: 'Ug03',
        name: 'Grupo Xpress',
        active: 1,
        numUsers: 3,
        numSections: 4,
        usersIds: [1, 8, 9],
        reportsGroupsIds: [7, 8, 11, 12],
      },
    ],
  }

  const headersMd = [
    { xs: 3, header: 'Código' },
    { xs: 4, header: 'Nombre' },
    { xs: 1, header: 'Usuarios' },
    { xs: 1, header: 'Secciones' },
    { xs: 2, header: 'Activo' },
    { xs: 1, header: 'Acciones' },
  ]

  const headersXs = [
    { xs: 9, header: 'Usuario' },
    { xs: 3, header: 'Acciones' },
  ]

  const matchMd = useResponsive('md')

  const headers = matchMd ? headersMd : headersXs

  return (
    <List>
      <Grid container alignItems='center' justifyContent='center' mb={3}>
        {headers.map(header => (
          <Grid key={header.header} item xs={header.xs}>
            <Typography sx={{ fontWeight: 'bold' }} variant='body1'>
              {header.header}
            </Typography>
          </Grid>
        ))}
      </Grid>
      {usersGroups.map(usersGroup => (
        <UsersGroupItem usersGroup={usersGroup} key={usersGroup.id} />
      ))}
    </List>
  )
}

export default UsersGroups
