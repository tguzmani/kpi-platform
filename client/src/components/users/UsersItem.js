/* eslint-disable no-unreachable */
import React from 'react'
import {
  Grid,
  IconButton,
  Collapse,
  ListItem,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
} from '@mui/material'

import KeyIcon from '@mui/icons-material/Key'
import EditIcon from '@mui/icons-material/Edit'
import UserReportsTable from './UserReportsTable'
import ActiveIndicator from '../layout/ActiveIndicator'
import VisibilityIcon from '@mui/icons-material/Visibility'

const UsersTableRow = ({ user }) => {
  const [open, setOpen] = React.useState(false)

  const handleToggleCollapse = () => {
    setOpen(!open)
  }

  const handleEdit = () => {
    console.log('edit reportsGroup')
  }

  const handleChangePassword = () => {
    console.log('change user password')
  }

  return (
    <>
      <ListItem dense>
        <Grid container alignItems='center' justifyContent='center'>
          <Grid item xs={3}>
            <ListItemText>
              <Typography variant='body1'>{user.name}</Typography>
            </ListItemText>
          </Grid>
          <Grid item xs={3}>
            <ListItemText>
              <Typography variant='body1'>{user.username}</Typography>
            </ListItemText>
          </Grid>
          <Grid item xs={3}>
            <ListItemText>
              <Typography variant='body1'>{user.mail}</Typography>
            </ListItemText>
          </Grid>
          <Grid item xs={1}>
            <ListItemText>
              <Typography variant='body1'>{user.groups}</Typography>
            </ListItemText>
          </Grid>
          <Grid item xs={1}>
            <ListItemText>
              <ActiveIndicator active={user.active} />
            </ListItemText>
          </Grid>
          <Grid item xs={1}>
            <ListItemSecondaryAction>
              <IconButton onClick={handleToggleCollapse}>
                <VisibilityIcon color='primary' />
              </IconButton>

              <IconButton onClick={handleEdit}>
                <EditIcon color='success' />
              </IconButton>

              <IconButton onClick={handleChangePassword}>
                <KeyIcon color='error' />
              </IconButton>
            </ListItemSecondaryAction>
          </Grid>
        </Grid>
      </ListItem>

      <Collapse in={open} timeout='auto' unmountOnExit>
        <UserReportsTable userId={user.id} />
      </Collapse>
    </>
  )
}
export default UsersTableRow
