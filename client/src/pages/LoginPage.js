import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'
import { useCookies } from 'react-cookie'

import { Grid, Paper, Tabs, styled } from '@mui/material'

import MuiTab from '@mui/material/Tab'

import AppBar from './../components/layout/AppBar'
import Alerts from './../components/layout/Alerts'
import roles from './../constants/roles'

import { signIn, setLoading } from './../state/auth/authActions'
import FormField from './../components/layout/FormField'
import LoadingButton from '@mui/lab/LoadingButton'
import Footer from '../components/layout/Footer'

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
  password: 'nueva',
}

const Tab = styled(MuiTab)(({ theme }) => ({
  marginTop: '0.75rem',
  marginLeft: '0.15rem',
  borderBottom: 'none',

  '&.Mui-selected': {
    backgroundColor: 'white',
    borderTopLeftRadius: '0.75rem',
    borderTopRightRadius: '0.75rem',
    boxShadow: theme.shadows[1],
  },
}))

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [cookies] = useCookies()
  const userRole = cookies.r

  const { user, isAuthenticated, loading } = useSelector(state => state.auth)

  const [credentials, bindField, areFieldsEmpty, setCredentials] =
    useForm(testAdmin)

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
        ? navigate('/admins/reports-groups')
        : navigate('/users/reports')
  }, [isAuthenticated, navigate])

  useEffect(() => {
    console.log(userRole)
  })

  const handleTabChange = e => {
    if (userType === roles.ADMIN) {
      setUserType(roles.USER)
      setCredentials(testUser)
    } else {
      setUserType(roles.ADMIN)
      setCredentials(testAdmin)
    }
  }

  return (
    <>
      <AppBar />
      <Alerts />

      <Grid justifyContent='center' alignItems='center' container mt={4}>
        <Grid item xs={12} md={5} lg={4} p={2}>
          <Tabs
            value={userType}
            onChange={handleTabChange}
            TabIndicatorProps={{ style: { backgroundColor: '#fff' } }}
          >
            <Tab value={roles.USER} label='Usuarios' />
            <Tab value={roles.ADMIN} label='Administradores' />
          </Tabs>
          <Paper sx={{ borderTopLeftRadius: 0 }} className='login'>
            <Grid container alignItems='center' component='form'>
              <FormField label='Usuario '>
                <FormField.TextField {...bindField('name')} />
              </FormField>

              <FormField label='Contrase??a '>
                <FormField.TextField
                  type='password'
                  autoComplete='on'
                  {...bindField('password')}
                />
              </FormField>
            </Grid>

            <Grid mt={4} justifyContent='center' container>
              <LoadingButton
                disabled={areFieldsEmpty}
                variant='contained'
                onClick={handleLogin}
                loading={loading}
              >
                Ingresar
              </LoadingButton>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Footer />
    </>
  )
}

export default LoginPage
