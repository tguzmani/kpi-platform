import React from 'react'

import { TableCell, TableRow } from '@mui/material'
import ActiveIndicator from '../layout/ActiveIndicator'
import useResponsive from '../../hooks/useResponsive'

const UsersGroupsUsersTableRow = ({ user }) => {
  const matchMd = useResponsive('md')

  return (
    <TableRow>
      <TableCell align='center'>{user.name}</TableCell>

      <TableCell align='center'>{user.username}</TableCell>

      <TableCell align='center'>{user.mail}</TableCell>
      <TableCell align='center'>
        <ActiveIndicator active={user.active} />
      </TableCell>
    </TableRow>
  )
}

export default UsersGroupsUsersTableRow
