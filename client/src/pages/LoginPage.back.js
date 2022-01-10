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
import AppBar from '../components/layout/AppBar'
import { signIn } from '../state/auth/authActions'
import useForm from '../hooks/useForm'

const LoginPage = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  const [credentials, setCredentials] = useState({
    name: 'TestClient',
    password: 'testclient',
  })

  // const [credentials, setCredentials] = useState({
  //   name: '',
  //   password: '',
  // })

  const areFieldsEmpty = Object.values(credentials).some(
    credential => credential === ''
  )

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

  const onChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
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
                value={credentials.name}
                onChange={onChange}
                name='name'
                margin='normal'
              />
              <TextField
                fullWidth
                label='Contraseña'
                value={credentials.password}
                onChange={onChange}
                name='password'
                margin='normal'
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
