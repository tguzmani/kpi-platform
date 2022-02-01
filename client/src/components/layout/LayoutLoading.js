import React from 'react'
import AppBar from './AppBar'

import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'
import useResponsive from '../../hooks/useResponsive'
import { List, Card, CardContent, Paper } from '@mui/material'

const LayoutLoading = () => {
  const matchMd = useResponsive('md')

  return (
    <>
      <AppBar />

      <Grid my={5} container>
        {matchMd && (
          <Grid item xs={12} md={2}>
            <Paper className='navigation'>
              {Array(4)
                .fill()
                .map(n => (
                  <Skeleton key={n} height={60} />
                ))}
            </Paper>
          </Grid>
        )}

        <Grid item xs={12} md={10}>
          <Paper className='container'>
            {Array(5)
              .fill()
              .map(n => (
                <Skeleton key={n} height={80} />
              ))}
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default LayoutLoading
