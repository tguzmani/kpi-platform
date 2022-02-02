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
  Box,
} from '@mui/material'

import EditIcon from '@mui/icons-material/Edit'
import ActiveIndicator from '../layout/ActiveIndicator'
import VisibilityIcon from '@mui/icons-material/Visibility'
import useResponsive from '../../hooks/useResponsive'
import { useNavigate } from 'react-router-dom'
import useToggle from './../../hooks/useToggle'
import UnderConstruction from './../layout/UnderConstruction'

const UsersGroupsItem = ({ usersGroup }) => {
  const [open, handleToggleCollapse] = useToggle(false)
  const navigate = useNavigate()

  const matchMd = useResponsive('md')

  const handleEdit = () => {
    navigate(`/admins/user-groups/update/${usersGroup.id}`)
  }

  const handleChangePassword = () => {
    console.log('change user password')
  }

  return (
    <>
      <ListItem dense>
        <Grid container alignItems='center' justifyContent='center'>
          <Grid item md={3}>
            <ListItemText>
              <Typography variant='body1'>{usersGroup.code} </Typography>
            </ListItemText>
          </Grid>

          <Grid item md={4} xs={9}>
            <ListItemText>
              <Typography variant='body1'>{usersGroup.name}</Typography>
            </ListItemText>
          </Grid>

          <Grid item md={1}>
            <ListItemText>
              <Typography variant='body1'>{usersGroup.numUsers}</Typography>
            </ListItemText>
          </Grid>
          <Grid item md={1}>
            <ListItemText>
              <Typography variant='body1'>{usersGroup.numSections}</Typography>
            </ListItemText>
          </Grid>
          <Grid item md={2}>
            <ListItemText>
              <ActiveIndicator active={usersGroup.active} />
            </ListItemText>
          </Grid>

          <Grid item md={1} xs={3}>
            <ListItemSecondaryAction>
              <IconButton onClick={handleToggleCollapse}>
                <VisibilityIcon color='primary' />
              </IconButton>

              <IconButton onClick={handleEdit}>
                <EditIcon color='success' />
              </IconButton>
            </ListItemSecondaryAction>
          </Grid>
        </Grid>
      </ListItem>

      <Collapse in={open} timeout='auto' unmountOnExit>
        <UnderConstruction>Desplegable Grupo de usuarios</UnderConstruction>
      </Collapse>
    </>
  )
}
export default UsersGroupsItem
