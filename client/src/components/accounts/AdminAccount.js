import React from 'react'
import { Grid } from '@mui/material'
import DetailsPanel from './DetailsPanel'
import LogoPanel from './LogoPanel'
import UtilsPanel from './UtilsPanel'

const AdminAccount = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid xs={4} item>
          <DetailsPanel />
        </Grid>

        <Grid xs={4} item>
          <LogoPanel />
        </Grid>
      </Grid>
      <Grid container mt={2} spacing={2}>
        <Grid xs item>
          <UtilsPanel />
        </Grid>
      </Grid>
    </>
  )
}

export default AdminAccount
