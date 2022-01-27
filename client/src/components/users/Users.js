import React from 'react'
import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import UsersItem from './UsersItem'
import { useSelector } from 'react-redux'

const Users = () => {
  const { users } = useSelector(state => state.users)

  const headers = [
    { xs: 3, header: 'Nombre' },
    { xs: 3, header: 'Usuario' },
    { xs: 3, header: 'E-Mail' },
    { xs: 1, header: 'Grupos' },
    { xs: 1, header: 'Activo' },
    { xs: 1, header: 'Acciones' },
  ]

  return (
    <Paper className='container'>
      <List>
        <Grid container alignItems='center' justifyContent='center' mb={3}>
          {headers.map(header => (
            <Grid item xs={header.xs}>
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
    </Paper>
  )
}

export default Users
