import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../../state/auth/authActions'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'
import Image from './Image'

import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const ApplicationBar = () => {
  const { user, isAuthenticated } = useSelector(state => state.auth)
  const { appBarLogo } = useSelector(state => state.admins)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))

  const handleSignOut = () => {
    navigate('/login')
    dispatch(signOut(user?.role))
  }

  return (
    <AppBar position='sticky' color='light'>
      <Toolbar>
        {/* <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          KPI Managers
        </Typography> */}

        <Box sx={{ flexGrow: 1 }}>
          <Image
            src={appBarLogo}
            alt='logo'
            width={`${matches ? false : '120px'}`}
          />
        </Box>

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
