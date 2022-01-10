import { Grid } from '@mui/material'
import React from 'react'
import AppBar from './AppBar'
import Navigation from './Navigation'
import Alerts from './Alerts'

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />

      <Grid sx={{ mx: 1, my: 1 }} container spacing={3}>
        <Grid item xs={2}>
          <Navigation />
        </Grid>
        <Grid xs={9} item>
          <Alerts />
          {children}
        </Grid>
      </Grid>
    </>
  )
}

export default Layout
