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

const LoginPage = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  const [credentials, bindField, areFieldsEmpty] = useForm({
    name: 'TestClient',
    password: 'testclient',
  })

  const [userType, setUserType] = useState('admin')

  const handleLoginAdmin = () => {
    console.log('admin login', credentials)
    dispatch(signIn(credentials))
  }

  const handleLoginUser = () => {
    console.log('user login', credentials)
  }

  const handleLogin = e => {
    e.preventDefault()
    if (userType === 'admin') handleLoginAdmin()
    else handleLoginUser()
  }

  const navigate = useNavigate()

  useEffect(() => {
    const navigateToHome = () => navigate('/')

    if (isAuthenticated) {
      navigateToHome()
      console.log(1)
    }
  }, [isAuthenticated, navigate])

  return (
    <>
      <AppBar />
      <Alerts />

      <Grid justifyContent='center' alignItems='center' container mt={4}>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant='h5' my={1} align='center'>
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
    </>
  )
}

export default LoginPage
