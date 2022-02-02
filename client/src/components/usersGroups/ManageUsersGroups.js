import React from 'react'
import UnderConstruction from './../layout/UnderConstruction'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import LoadingButton from '@mui/lab/LoadingButton'
import { useNavigate } from 'react-router-dom'

const ManageUsersGroups = () => {
  const navigate = useNavigate()
  return (
    <Paper className='container'>
      <UnderConstruction>Gestión de Grupos de usuario</UnderConstruction>

      <Grid mt={3} container justifyContent='space-between'>
        <Button onClick={() => navigate('/admins/user-groups')}>
          Cancelar
        </Button>
        <LoadingButton
          // onClick={handleManageUser}
          variant='contained'
          disabled={true}
          // loading={loading}
          // disabled={areFieldsEmpty || selectedReportsGroups.length === 0}
        >
          {/* {userId ? 'Guardar cambios' : 'Crear usuario'} */}
          Gestionar grupo
        </LoadingButton>
      </Grid>
    </Paper>
  )
}

export default ManageUsersGroups
