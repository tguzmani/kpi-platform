import React from 'react'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import ListItemText from '@mui/material/ListItemText'

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
    <Paper sx={{ padding: '3rem' }}>
      <List>
        <Grid container align='center' justify='center' mb={3}>
          {headers.map(header => (
            <Grid item xs={header.xs}>
              <Typography sx={{ fontWeight: 'bold' }} variant='body'>
                {header.header}
              </Typography>
            </Grid>
          ))}
        </Grid>
        {reportsGroups.map(reportsGroup => (
          <ReportGroupsItem reportsGroup={reportsGroup} />
        ))}
      </List>
    </Paper>
  )
}

export default ReportsGroups
