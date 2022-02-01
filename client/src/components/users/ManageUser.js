import React, { useState } from 'react'
import { Typography, Switch, Grid, Paper, Button } from '@mui/material'
import FormField from '../layout/FormField'
import {
  readReportGroupsHeadersByAdmin,
  readReportsByAdmin,
} from '../../state/reports/reportsActions'

import useForm from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { createUser } from '../../state/users/usersActions'
import { useParams } from 'react-router-dom'

import useSelectReportGroups from '../../hooks/useSelectReportGroups'
import { useNavigate } from 'react-router-dom'
import useToggle from '../../hooks/useToggle'
import useRead from '../../hooks/useRead'
import ManageUsersReportsGroups from './ManageUsersReportsGroups'

import { useSelector } from 'react-redux'
import useSelectionList from '../../hooks/useSelectionList'

const ManageUser = () => {
  useRead(readReportGroupsHeadersByAdmin, readReportsByAdmin)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { reportsGroups, reports } = useSelector(state => state.reports)
  const { users } = useSelector(state => state.users)

  const initialState = {
    username: '',
    mail: '',
    name: '',
    confirmMail: '',
    password: '',
    confirmPassword: '',
  }

  let thisUser = undefined

  const { userId } = useParams()

  if (userId) {
    thisUser = users.find(user => user.id === parseInt(userId))

    thisUser = { ...thisUser, confirmMail: thisUser.mail }
  }

  const [user, bindField, areFieldsEmpty] = useForm(
    userId ? thisUser : initialState
  )

  const [selectedReportsGroups, toggleSelectedReportsGroup] = useSelectionList(
    userId ? thisUser.reportGroups : []
  )

  const [active, handleSwitchChange] = useToggle(true)

  const handleCreateUser = () => {
    dispatch(
      createUser({ ...user, active, reportGroups: selectedReportsGroups })
    )

    navigate('/users')
  }

  return (
    <Paper className='container'>
      <Grid container justifyContent='center' spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h6' align='center' mb={3}>
            Datos básicos del usuario:
          </Typography>
        </Grid>

        <Grid
          item
          container
          justifyContent='center'
          xs={12}
          md={8}
          alignItems='center'
        >
          <FormField label='Nombre'>
            <FormField.TextField {...bindField('name')} />
          </FormField>

          <FormField label='Nombre de usuario'>
            <FormField.TextField {...bindField('username')} />
          </FormField>

          <FormField label='Email'>
            <FormField.TextField {...bindField('mail')} />
          </FormField>

          <FormField label='Confirmar Email'>
            <FormField.TextField {...bindField('confirmMail')} />
          </FormField>

          {!userId && (
            <>
              <FormField label='Contraseña'>
                <FormField.TextField
                  type='password'
                  autoComplete='on'
                  {...bindField('password')}
                />
              </FormField>
              <FormField label='Confirmar contraseña'>
                <FormField.TextField
                  type='password'
                  autoComplete='on'
                  {...bindField('confirmPassword')}
                />
              </FormField>
            </>
          )}

          <FormField label='Activo'>
            <Switch checked={active} onChange={handleSwitchChange} />
          </FormField>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='h6' align='center' mb={3}>
            Grupos de reportes habilitados para este usuario:
          </Typography>
        </Grid>
      </Grid>

      <ManageUsersReportsGroups
        selectedReportsGroups={selectedReportsGroups}
        reportsGroups={reportsGroups}
        toggleSelectedReportsGroup={toggleSelectedReportsGroup}
      />
      <Grid mt={3} container justifyContent='space-between'>
        <Button onClick={() => navigate('/admins/users')}>Cancelar</Button>
        <Button
          // onClick={handleManageReportsGroup}
          variant='contained'
          // disabled={areFieldsEmpty || selectedSections.length === 0}
        >
          {/* {reportsGroupId ? 'Guardar cambios' : 'Crear usuario'} */}
          {userId ? 'Guardar cambios' : 'Crear usuario'}
        </Button>
      </Grid>
    </Paper>
  )
}

export default ManageUser
