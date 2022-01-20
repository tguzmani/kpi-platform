import { Grid } from '@mui/material'
import React from 'react'
import AppBar from './AppBar'
import Navigation from './Navigation'
import Alerts from './Alerts'
import { useSelector } from 'react-redux'
import roles from './../../constants/roles'

const Layout = ({ children }) => {
  const { user } = useSelector(state => state.auth)
  const isAdmin = user?.role === roles.ADMIN

  return (
    <>
      <AppBar />

      <Grid sx={{ mx: 1, my: 1 }} container spacing={3}>
        {isAdmin && (
          <Grid item xs={2}>
            <Navigation />
          </Grid>
        )}
        <Grid xs={isAdmin ? 9 : 12} item>
          {/* <Alerts /> */}
          {children}
        </Grid>
      </Grid>
    </>
  )
}

export default Layout
