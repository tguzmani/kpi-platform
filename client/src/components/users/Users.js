import React from 'react'
import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import UsersItem from './UsersItem'
import { useSelector } from 'react-redux'
import useResponsive from './../../hooks/useResponsive'

const Users = () => {
  const { users } = useSelector(state => state.users)

  const headersMd = [
    { xs: 3, header: 'Nombre' },
    { xs: 3, header: 'Usuario' },
    { xs: 3, header: 'E-Mail' },
    { xs: 1, header: 'Grupos' },
    { xs: 1, header: 'Activo' },
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
      {users.map(user => (
        <UsersItem user={user} key={user.id} />
      ))}
    </List>
  )
}

export default Users
