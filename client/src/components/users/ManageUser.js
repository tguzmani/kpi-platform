import React, { useState } from 'react'
import { Typography, Switch, Grid, Paper, Button } from '@mui/material'
import FormField from '../layout/FormField'
import {
  readReportGroupsHeadersByAdmin,
  readReportsByAdmin,
} from '../../state/reports/reportsActions'

import useForm from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { createUser, updateUser } from '../../state/users/usersActions'
import { useParams } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import useToggle from '../../hooks/useToggle'
import useRead from '../../hooks/useRead'
import ManageUsersReportsGroups from './ManageUsersReportsGroups'

import { useSelector } from 'react-redux'
import useSelectionList from '../../hooks/useSelectionList'
import useNavigateAfterAction from './../../hooks/useNavigateAfterAction'
import LoadingButton from '@mui/lab/LoadingButton'

const ManageUser = () => {
  useRead(readReportGroupsHeadersByAdmin, readReportsByAdmin)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { reportsGroups } = useSelector(state => state.reports)
  const { users, loading } = useSelector(state => state.users)

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

  const buttonHasBeenClicked = useNavigateAfterAction(loading, '/admins/users')

  const [user, bindField, areFieldsEmpty] = useForm(
    userId ? thisUser : initialState
  )

  const [selectedReportsGroups, toggleSelectedReportsGroup] = useSelectionList(
    userId ? thisUser.reportGroups : []
  )

  const [active, handleSwitchChange] = useToggle(true)

  const handleManageUser = () => {
    const userData = { ...user, active, reportGroups: selectedReportsGroups }

    dispatch(userId ? updateUser(userData) : createUser(userData))
    // userId ? console.log('update', userData) : console.log('create', userData)

    buttonHasBeenClicked()
  }

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
        <LoadingButton
          onClick={handleManageUser}
          variant='contained'
          loading={loading}
          disabled={areFieldsEmpty || selectedReportsGroups.length === 0}
        >
          {userId ? 'Guardar cambios' : 'Crear usuario'}
        </LoadingButton>
      </Grid>
    </Paper>
  )
}

export default ManageUser
