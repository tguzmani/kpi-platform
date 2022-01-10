import React from 'react'
import { Grid, IconButton, Tooltip } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import KeyIcon from '@mui/icons-material/Key'
import { NavLink } from 'react-router-dom'

const UsersTableActions = ({ userId }) => {
  return (
    <Grid container justifyContent='center' spacing={1}>
      <Grid item>
        <Tooltip title='Editar usuario'>
          <IconButton component={NavLink} to={`/users/${userId}`}>
            <EditIcon color='primary' />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip title='Cambiar contraseña'>
          <IconButton>
            <KeyIcon color='error' />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  )
}

export default UsersTableActions
