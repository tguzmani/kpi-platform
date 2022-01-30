import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'

import {
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
  Tabs,
  Tab,
} from '@mui/material'

import AppBar from './../components/layout/AppBar'
import Alerts from './../components/layout/Alerts'
import roles from './../constants/roles'

import { signIn, setLoading } from './../state/auth/authActions'
import FormField from './../components/layout/FormField'
import LoadingButton from '@mui/lab/LoadingButton'

const initialCredentials = {
  name: '',
  password: '',
}

const testAdmin = {
  name: 'TestClient',
  password: 'testclient',
}

const testUser = {
  name: 'TestUser',
  password: 'testuser',
}

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isAuthenticated, loading } = useSelector(state => state.auth)

  const [credentials, bindField, areFieldsEmpty, setCredentials] = useForm({})

  const [userType, setUserType] = useState(roles.ADMIN)

  const handleLoginAdmin = () => {
    dispatch(signIn(roles.ADMIN, testAdmin))
  }

  const handleLoginUser = () => {
    dispatch(signIn(roles.USER, testUser))
  }

  const handleLogin = e => {
    e.preventDefault()
    if (userType === roles.ADMIN) handleLoginAdmin()
    else handleLoginUser()
  }

  useEffect(() => {
    dispatch(setLoading(false))
  }, [])

  useEffect(() => {
    if (isAuthenticated && !loading)
      userType === roles.ADMIN
        ? navigate('/admins/reports/groups')
        : navigate('/')
  }, [isAuthenticated, navigate])

  const handleTabChange = e => {
    if (userType === roles.ADMIN) setUserType(roles.USER)
    else setUserType(roles.ADMIN)

    setCredentials(initialCredentials)
  }

  return (
    <>
      <AppBar />
      <Alerts />
      <Grid justifyContent='center' alignItems='center' container mt={4}>
        <Grid item xs={12} md={5} lg={4} p={2}>
          <Card>
            <CardContent>
              <Tabs value={userType} onChange={handleTabChange}>
                <Tab value={roles.USER} label='Usuarios' />
                <Tab value={roles.ADMIN} label='Administradores' />
              </Tabs>
              <Typography variant='h5' mb={2} mt={5} align='center'>
                Iniciar sesión
              </Typography>

              <Grid container alignItems='center' component='form'>
                <FormField label='Usuario '>
                  <FormField.TextField {...bindField('name')} />
                </FormField>

                <FormField label='Contraseña '>
                  <FormField.TextField
                    type='password'
                    autoComplete='on'
                    {...bindField('name')}
                  />
                </FormField>
              </Grid>
            </CardContent>

            <CardActions>
              <Grid justifyContent='center' container>
                <LoadingButton
                  disabled={areFieldsEmpty}
                  variant='contained'
                  onClick={handleLogin}
                  loading={loading}
                >
                  Ingresar
                </LoadingButton>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default LoginPage
