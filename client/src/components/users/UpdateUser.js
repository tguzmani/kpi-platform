import React, { useState } from 'react'
import {
  Box,
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
} from '@mui/material'
import useForm from './../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from './../../state/users/usersActions'
import { useNavigate, useParams } from 'react-router-dom'
import useSelectReportGroups from './../../hooks/useSelectReportGroups'
import UsersReportsGroupsTable from './UsersReportsGroupsTable'

const UpdateUser = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users)

  const { userId } = useParams()
  const navigate = useNavigate()

  const thisUser = users.find(user => user.id === parseInt(userId))

  console.log(thisUser)

  const [user, bindField, areFieldsEmpty] = useForm({
    username: thisUser?.username || '',
    name: thisUser?.name || '',
    mail: thisUser?.mail || '',
    confirmMail: thisUser?.mail || '',
  })

  const [active, setActive] = useState(thisUser ? thisUser.active === 1 : true)

  const [selectedReportGroups, selectReportGroupsHandlers] =
    useSelectReportGroups(thisUser.reportGroups)

  const handleSwitchChange = () => {
    setActive(!active)
  }

  const handleCreateUser = () => {
    dispatch(
      updateUser({
        id: thisUser?.id,
        ...user,
        active,
        reportGroups: selectedReportGroups,
      })
    )

    navigate('/users')
  }

  const mailConfirmationIsSameLength =
    user.mail.length === user.confirmMail.length

  const passwordsMatch = user.mail === user.confirmMail

  const incorrectEmails = mailConfirmationIsSameLength && !passwordsMatch

  return (
    <Card>
      <CardContent>
        <Typography variant='h5' my={1} align='center'>
          Modificar usuario
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
              error={!passwordsMatch}
              helperText={
                !passwordsMatch ? 'Estos campos deben ser iguales' : ''
              }
              fullWidth
              label='Email'
              margin='normal'
              {...bindField('mail')}
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
              error={!passwordsMatch}
              helperText={
                !passwordsMatch ? 'Estos campos deben ser iguales' : ''
              }
              label='Confirmar Email'
              margin='normal'
              {...bindField('confirmMail')}
            />
          </Grid>
        </Grid>

        <FormControl>
          <FormControlLabel
            control={<Switch checked={active} onChange={handleSwitchChange} />}
            label='Activo'
          />
        </FormControl>

        <Box p={3}>
          <UsersReportsGroupsTable
            selectReportGroupsHandlers={selectReportGroupsHandlers}
          />
        </Box>
      </CardContent>

      <CardActions>
        <Button
          disabled={
            areFieldsEmpty || !mailConfirmationIsSameLength || incorrectEmails
          }
          fullWidth
          variant='contained'
          onClick={handleCreateUser}
        >
          Modificar usuario
        </Button>
      </CardActions>
    </Card>
  )
}

export default UpdateUser
