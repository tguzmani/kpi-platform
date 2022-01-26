import {
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
  Box,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AppBar from './../components/layout/AppBar'
import { signIn } from './../state/auth/authActions'
import useForm from '../hooks/useForm'
import Alerts from './../components/layout/Alerts'
import { Tabs, Tab } from '@mui/material'
import roles from './../constants/roles'

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

  const { user, isAuthenticated } = useSelector(state => state.auth)

  const [credentials, bindField, areFieldsEmpty] = useForm({})

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
    if (isAuthenticated)
      userType === roles.ADMIN
        ? navigate('/admins/reports/groups')
        : navigate('/')
  }, [isAuthenticated, navigate])

  const handleTabChange = e => {
    if (userType === roles.ADMIN) setUserType(roles.USER)
    else setUserType(roles.ADMIN)
  }

  return (
    <>
      <AppBar />

      <Grid justifyContent='center' alignItems='center' container mt={4}>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Tabs value={userType} onChange={handleTabChange}>
                <Tab value={roles.USER} label='Usuarios' />
                <Tab value={roles.ADMIN} label='Administradores' />
              </Tabs>
              <Typography variant='h5' mb={2} mt={5} align='center'>
                Iniciar sesión
              </Typography>
              <TextField
                fullWidth
                label='Usuario'
                margin='normal'
                {...bindField('name')}
              />
              <TextField
                fullWidth
                label='Contraseña'
                margin='normal'
                {...bindField('password')}
              />
            </CardContent>

            <CardActions>
              <Button
                disabled={areFieldsEmpty}
                fullWidth
                variant='contained'
                onClick={handleLogin}
              >
                Ingresar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Typography>
        Solo hay que hacer clic en ingresar, no hace falta llenar los
        credenciales mientras se está en QA
      </Typography>
    </>
  )
}

export default LoginPage
