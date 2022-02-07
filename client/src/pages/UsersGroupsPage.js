import React from 'react'
import { readUsers } from '../state/users/usersActions'
import {
  readReportGroupsHeadersByAdmin,
  readUsersReportsByAdmin,
  readReportsByAdmin,
} from '../state/reports/reportsActions'
import useRead from '../hooks/useRead'
import { useNavigate } from 'react-router-dom'

import Paper from '@mui/material/Paper'
import AddIcon from '@mui/icons-material/Add'
import PositionedButton from '../components/layout/PositionedButton'
import UsersGroups from '../components/usersGroups/UsersGroups'

const UsersPage = () => {
  useRead(readUsers, readReportsByAdmin, readReportGroupsHeadersByAdmin)

  const navigate = useNavigate()

  return (
    <Paper className='container'>
      <UsersGroups />
      <PositionedButton
        onClick={() => navigate('/admins/user-groups/create')}
        startIcon={<AddIcon />}
        variant='contained'
        justifyContent='flex-end'
      >
        Agregar nuevo grupo
      </PositionedButton>
    </Paper>
  )
}

export default UsersPage
