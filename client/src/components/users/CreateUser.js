import React, { useState } from 'react'
import {
  Card,
  CardContent,
  Typography,
  TextField,
  CardActions,
  Button,
  Switch,
  FormControlLabel,
  FormControl,
  Grid,
  Box,
} from '@mui/material'
import useForm from './../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { createUser } from './../../state/users/usersActions'
import UsersReportsGroupsTable from './UsersReportsGroupsTable'
import useSelectReportGroups from './../../hooks/useSelectReportGroups'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [user, bindField, areFieldsEmpty] = useForm({
    username: '',
    name: '',
    mail: '',
    confirmMail: '',
    password: '',
    confirmPassword: '',
  })

  const [active, setActive] = useState(true)

  const [selectedReportGroups, selectReportGroupsHandlers] =
    useSelectReportGroups([])

  const handleSwitchChange = () => {
    setActive(!active)
  }

  const handleCreateUser = () => {
    dispatch(
      createUser({ ...user, active, reportGroups: selectedReportGroups })
    )

    navigate('/users')
  }

  return (
    <Card>
      <CardContent>
        <Typography variant='h5' my={1} align='center'>
          Crear usuario
        </Typography>

        <Grid container spacing={2} justifyContent='center'>
          <Grid item>
            <TextField
              fullWidth
              label='Username'
              margin='normal'
              {...bindField('username')}
            />

            <TextField
              fullWidth
              label='Email'
              margin='normal'
              {...bindField('mail')}
            />

            <TextField
              fullWidth
              label='Contraseña'
              type='password'
              margin='normal'
              {...bindField('password')}
            />
          </Grid>

          <Grid item>
            <TextField
              fullWidth
              label='Nombre'
              margin='normal'
              {...bindField('name')}
            />

            <TextField
              fullWidth
              label='Confirmar Email'
              margin='normal'
              {...bindField('confirmMail')}
            />

            <TextField
              fullWidth
              label='Confirmar contraseña'
              type='password'
              margin='normal'
              {...bindField('confirmPassword')}
            />
          </Grid>

          <FormControl>
            <FormControlLabel
              control={
                <Switch checked={active} onChange={handleSwitchChange} />
              }
              label='Activo'
            />
          </FormControl>
        </Grid>

        <Box p={3}>
          <UsersReportsGroupsTable
            selectReportGroupsHandlers={selectReportGroupsHandlers}
          />
        </Box>
      </CardContent>

      <CardActions>
        <Button
          disabled={areFieldsEmpty}
          fullWidth
          variant='contained'
          onClick={handleCreateUser}
        >
          Crear usuario
        </Button>
      </CardActions>
    </Card>
  )
}

export default CreateUser
