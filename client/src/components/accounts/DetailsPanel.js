import React from 'react'
import AccountPanel from './AccountPanel'
import { Grid, Typography, Button, Box } from '@mui/material'
import { useSelector } from 'react-redux'
import ActiveIndicator from './../layout/ActiveIndicator'
import KeyIcon from '@mui/icons-material/Key'

const DetailsPanel = () => {
  const user = useSelector(state => state.auth.user)

  const details = [
    { name: 'Nombre de cuenta', value: user.name },
    { name: 'Subdominio', value: user.subdomain },
    { name: 'Key User', value: user.keyUser },
    { name: 'Activo', value: <ActiveIndicator active={user.active} /> },
  ]

  return (
    <AccountPanel title='Detalle de cuenta'>
      <Grid container spacing={3} mb={3} justifyContent='center'>
        {details.map(detail => (
          <>
            <Grid item xs={6}>
              <Typography variant='body1' display='block ' align='right'>
                {detail.name}
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant='body1'>{detail.value}</Typography>
            </Grid>
          </>
        ))}
      </Grid>

      <Box textAlign='center'>
        <Button startIcon={<KeyIcon />} variant='contained'>
          Cambiar contraseña
        </Button>
      </Box>
    </AccountPanel>
  )
}

export default DetailsPanel
