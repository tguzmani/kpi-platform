import React from 'react'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import ReportGroupsItem from './ReportGroupsItem'

const ReportsGroups = ({ reportsGroups }) => {
  const headers = [
    { xs: 4, header: 'Código' },
    { xs: 4, header: 'Nombre' },
    { xs: 2, header: 'Secciones' },
    { xs: 1, header: 'Activo' },
    { xs: 1, header: 'Acciones' },
  ]

  return (
    <List>
      <Grid container alignItems='center' justifyContent='center' mb={3}>
        {headers.map(header => (
          <Grid item key={header.header} xs={header.xs}>
            <Typography sx={{ fontWeight: 'bold' }} variant='body1'>
              {header.header}
            </Typography>
          </Grid>
        ))}
      </Grid>
      {reportsGroups.map(reportsGroup => (
        <ReportGroupsItem key={reportsGroup.id} reportsGroup={reportsGroup} />
      ))}
    </List>
  )
}

export default ReportsGroups
