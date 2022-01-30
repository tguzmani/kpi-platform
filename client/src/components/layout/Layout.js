import { Grid } from '@mui/material'
import React from 'react'
import AppBar from './AppBar'
import Navigation from './Navigation'
import Alerts from './Alerts'
import { useSelector } from 'react-redux'
import roles from './../../constants/roles'
import useTermsAndConditions from './../../hooks/useTermsAndConditions'

const Layout = ({ children }) => {
  const { user } = useSelector(state => state.auth)
  const isAdmin = user?.role === roles.ADMIN
  const userAcceptedTermsAndConditions = useTermsAndConditions()

  return (
    <>
      <AppBar />

      <Grid sx={{ mx: 1, my: 1 }} container spacing={3}>
        {isAdmin && userAcceptedTermsAndConditions && (
          <Grid item xs={12} lg={2}>
            <Navigation />
          </Grid>
        )}
        <Grid xs={12} lg={isAdmin ? 9 : 12} item>
          {/* <Alerts /> */}
          {children}
        </Grid>
      </Grid>
    </>
  )
}

export default Layout
