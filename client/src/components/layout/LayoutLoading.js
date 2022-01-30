import React from 'react'
import AppBar from './AppBar'

import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'
import useResponsive from '../../hooks/useResponsive'
import { List, Card, CardContent, Paper } from '@mui/material'

const LayoutLoading = () => {
  const matchesLg = useResponsive('lg')

  return (
    <>
      <AppBar />

      <Grid sx={{ mx: 1, my: 1 }} container spacing={3}>
        {matchesLg && (
          <Grid item lg={2}>
            <Card>
              <CardContent>
                {Array(4)
                  .fill()
                  .map(n => (
                    <Skeleton height={60} />
                  ))}
              </CardContent>
            </Card>
          </Grid>
        )}

        <Grid item lg={9} xs={12}>
          <Paper className='container'>
            {Array(5)
              .fill()
              .map(n => (
                <Skeleton height={80} />
              ))}
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default LayoutLoading
