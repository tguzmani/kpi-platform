import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../../state/auth/authActions'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const ApplicationBar = () => {
  const { user, isAuthenticated } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const handleSignOut = () => {
    dispatch(signOut())
  }

  return (
    <AppBar position='sticky' color='light'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          KPI Managers
        </Typography>

        {user && isAuthenticated && (
          <>
            <Typography sx={{ mr: 2 }}>{user.name}</Typography>
            <Button onClick={handleSignOut} color='inherit'>
              Salir
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default ApplicationBar
